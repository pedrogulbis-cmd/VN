/* Moteur narratif piloté par les données. */
import { bus } from './event-bus.js';
import { evaluate } from './condition-parser.js';
import { applyEffects, resolveDeferred, addCG } from './state.js';
import { SaveManager } from './save-manager.js';
import { Audio } from './audio-manager.js';

export const Engine = {
  story: null, chapters: null, endings: null, codex: null, achievements: null,
  state: null,
  scene: null,
  line: 0,
  waitingChoice: false,
  finished: false,

  init({ story, chapters, endings, codex, achievements }) {
    this.story = story; this.chapters = chapters; this.endings = endings;
    this.codex = codex; this.achievements = achievements;
  },

  bind(state) { this.state = state; },

  getScene(id) { return this.story[id] || null; },

  /* ------------------------------------------------------------- démarrage */
  start(sceneId) {
    this.finished = false;
    this.goto(sceneId || this.chapters.start, { fresh: true });
  },

  resume() {
    const s = this.getScene(this.state.scene);
    if (!s) return this.start();
    this.scene = s;
    this.line = Math.min(this.state.lineIndex || 0, (s.lines || []).length - 1);
    this._present(true);
  },

  /* --------------------------------------------------------------- scènes */
  goto(id, opt = {}) {
    let scene = this.getScene(id);
    let guard = 0;
    // conditions d'entrée + redirections (protection contre les boucles)
    while (scene && scene.conditions && !evaluate(scene.conditions, this.state) && guard++ < 12) {
      const target = scene.redirect || scene.fallbackScene;
      if (!target) break;
      scene = this.getScene(target);
    }
    if (!scene) {
      console.error('[engine] scène introuvable :', id);
      bus.emit('engine:error', 'Scène introuvable : ' + id);
      scene = this.getScene(this.chapters.fallbackScene) || this.getScene(this.chapters.start);
    }

    const prevChapter = this.state.chapter;
    this.scene = scene;
    this.line = 0;
    this.state.scene = scene.id;
    this.state.lineIndex = 0;
    this.state.seenScenes[scene.id] = (this.state.seenScenes[scene.id] || 0) + 1;
    if (scene.chapter !== undefined) this.state.chapter = scene.chapter;
    if (scene.route) this.state.currentRoute = scene.route;

    if (this.state.chapter !== prevChapter) {
      this.state.chapterGains = {};
      bus.emit('chapter:changed', this.state.chapter);
      Audio.sfx('sfx_chapter');
    }

    if (scene.enter) applyEffects(this.state, scene.enter);
    resolveDeferred(this.state, { scene: scene.id, kind: 'scene' });
    resolveDeferred(this.state, { kind: 'chapter:' + this.state.chapter });

    if (scene.cg) addCG(this.state, scene.cg);
    if (scene.codex) scene.codex.forEach(c => { if (!this.state.codex.includes(c)) this.state.codex.push(c); });

    this._present(false, opt.fresh);

    if (scene.autosave !== false) {
      SaveManager.autosave(this.state, `${this._chapterLabel()} — ${scene.title || ''}`);
      bus.emit('autosave:done');
    }
  },

  _chapterLabel() {
    const c = this.chapters.list.find(x => x.number === this.state.chapter);
    return c ? c.title : 'Prologue';
  },

  _present(resumed) {
    this.waitingChoice = false;
    bus.emit('scene:enter', { scene: this.scene, resumed });
    this._emitLine();
  },

  currentLine() { return (this.scene.lines || [])[this.line] || null; },

  _emitLine() {
    const l = this.currentLine();
    if (!l) { this._afterLines(); return; }
    if (l.condition && !evaluate(l.condition, this.state)) { this.line++; return this._emitLine(); }
    if (l.effects) applyEffects(this.state, l.effects, { speaker: l.speaker });
    if (l.cg) addCG(this.state, l.cg);
    const key = this.scene.id + ':' + this.line;
    const already = !!this.state.readLines[key];
    this.state.readLines[key] = true;
    this.state.lineIndex = this.line;
    bus.emit('line:show', { line: l, index: this.line, scene: this.scene, alreadyRead: already });
  },

  advance() {
    if (this.waitingChoice || this.finished) return false;
    const lines = this.scene.lines || [];
    if (this.line < lines.length - 1) {
      this.line++;
      this._emitLine();
      return true;
    }
    this._afterLines();
    return true;
  },

  _afterLines() {
    const s = this.scene;
    if (s.ending) return this.reachEnding(s.ending);
    const choices = this.visibleChoices();
    if (choices.length) {
      this.waitingChoice = true;
      bus.emit('choices:show', { choices, scene: s, mode: this.state.settings?.choiceMode || 'immersif' });
      return;
    }
    const next = this._resolveNext(s);
    if (!next) {
      bus.emit('engine:error', `La scène « ${s.id} » n'a ni choix ni suite.`);
      return;
    }
    bus.emit('scene:leave', s);
    this.goto(next);
  },

  _resolveNext(s) {
    if (Array.isArray(s.nextIf)) {
      for (const branch of s.nextIf) {
        if (evaluate(branch.when, this.state)) return branch.scene;
      }
    }
    return s.next || null;
  },

  /* --------------------------------------------------------------- choix */
  visibleChoices() {
    const all = this.scene.choices || [];
    return all.map(c => {
      const secretOk = !c.secret || evaluate(c.revealIf || c.requires, this.state);
      if (c.secret && !secretOk) return null;
      if (c.visibleIf && !evaluate(c.visibleIf, this.state)) return null;
      const unlocked = c.requires ? evaluate(c.requires, this.state) : true;
      if (!unlocked && c.hideWhenLocked) return null;
      return { ...c, unlocked };
    }).filter(Boolean);
  },

  choose(choiceId) {
    if (!this.waitingChoice) return;
    const c = (this.scene.choices || []).find(x => x.id === choiceId);
    if (!c) return;
    if (c.requires && !evaluate(c.requires, this.state)) {
      Audio.sfx('sfx_locked');
      bus.emit('choice:locked', c);
      return;
    }
    this.waitingChoice = false;
    Audio.sfx(c.deduction ? 'sfx_discovery' : 'sfx_confirm');

    this.state.history.push({
      scene: this.scene.id, choice: c.id, label: c.text,
      tone: c.tone || null, chapter: this.state.chapter, at: Date.now()
    });
    if (c.tone) {
      const who = c.toneTarget || this.scene.toneTarget;
      if (who) {
        this.state.tone[who] = this.state.tone[who] || {};
        this.state.tone[who][c.tone] = (this.state.tone[who][c.tone] || 0) + 1;
      }
    }

    let fx = c.effects;
    // Déduction : succès ou fausse piste selon indices + perspicacité
    if (c.deduction) {
      const ok = evaluate(c.deduction.requires, this.state);
      fx = ok ? (c.deduction.successEffects || c.effects) : (c.deduction.failEffects || {});
      bus.emit('deduction:result', { choice: c, success: ok });
      applyEffects(this.state, fx);
      const target = ok ? c.deduction.successScene : c.deduction.failScene;
      bus.emit('choice:made', { choice: c, success: ok });
      return this.goto(target || c.next);
    }

    applyEffects(this.state, fx, { speaker: c.toneTarget });
    if (c.irreversible) this.state.flags['irreversible:' + c.id] = true;
    bus.emit('choice:made', { choice: c });

    let next = c.next;
    if (Array.isArray(c.nextIf)) {
      for (const b of c.nextIf) if (evaluate(b.when, this.state)) { next = b.scene; break; }
    }
    if (c.ending) return this.reachEnding(c.ending);
    if (!next) { bus.emit('engine:error', `Le choix « ${c.id} » n'a pas de suite.`); return; }
    bus.emit('scene:leave', this.scene);
    this.goto(next);
  },

  /* --------------------------------------------------------------- fins */
  reachEnding(id) {
    const e = this.endings[id];
    this.finished = true;
    if (!this.state.endings.includes(id)) this.state.endings.push(id);
    if (e && e.cg) addCG(this.state, e.cg);
    SaveManager.recordEnding(this.state, id);
    SaveManager.autosave(this.state, 'Fin : ' + (e ? e.title : id));
    bus.emit('ending:reached', { id, ending: e, state: this.state });
  },

  /* ------------------------------------------------- utilitaires d'analyse */
  reachableEndings() {
    return Object.keys(this.endings);
  }
};
