/* Interface : boîte de dialogue, choix, menus, notifications. Mobile first. */
import { bus } from './event-bus.js';
import { Engine } from './engine.js';
import { A11y } from './accessibility-manager.js';
import { Audio } from './audio-manager.js';
import { SaveManager, SLOTS } from './save-manager.js';
import { STAT_LABELS, STAT_KEYS, REL_LABELS, relationSummary } from './state.js';
import { describe } from './condition-parser.js';
import { Assets } from './asset-manager.js';
import { SceneRenderer } from './scene-renderer.js';
import { Achievements } from './achievement-manager.js';

const $ = s => document.querySelector(s);
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt !== undefined) e.textContent = txt; return e; };

export const UI = {
  labels: null, chars: null, codex: null, endings: null, chapters: null,
  typing: false, _typeTimer: null, _full: '', _autoTimer: null,
  hidden: false,

  init({ labels, chars, codex, endings, chapters }) {
    this.labels = labels; this.chars = chars; this.codex = codex;
    this.endings = endings; this.chapters = chapters;
    this.bindGlobal();
    this.bindEngine();
  },

  /* ------------------------------------------------------------ événements */
  bindEngine() {
    bus.on('scene:enter', ({ scene }) => {
      SceneRenderer.applyScene(scene);
      if (scene.ambiance !== undefined) Audio.playAmbiance(scene.ambiance);
      if (scene.music !== undefined) Audio.playMusic(scene.music);
      $('#choices').innerHTML = '';
      $('#choices').hidden = true;
      this.updateProgress();
    });

    bus.on('line:show', ({ line, scene, alreadyRead }) => {
      const chars = this.mergeChars(scene, line);
      import('./character-renderer.js').then(({ CharacterRenderer }) => {
        CharacterRenderer.set(chars, line.speaker || scene.speaker || null);
      });
      if (line.background) SceneRenderer.setBackground(line.background);
      if (line.cg) SceneRenderer.showCG(line.cg);
      if (line.hideCG) SceneRenderer.hideCG();
      if (line.weather !== undefined) SceneRenderer.weather(line.weather);
      if (line.fx) SceneRenderer.effect(line.fx);
      if (line.sfx) Audio.sfx(line.sfx);
      if (line.music !== undefined) Audio.playMusic(line.music);
      this.showLine(line, alreadyRead);
    });

    bus.on('choices:show', ({ choices, mode }) => this.showChoices(choices, mode));
    bus.on('choice:locked', c => this.toast({ kind: 'bad', text: c.lockedText || 'Ce choix n’est pas accessible.' }));
    bus.on('ending:reached', ({ id, ending }) => this.showEnding(id, ending));
    bus.on('engine:error', msg => this.toast({ kind: 'bad', text: msg }));
    bus.on('toast', t => this.toast(t));
    bus.on('achievement:granted', a => this.toast({ kind: 'achievement', text: 'Succès : ' + a.title }));
    bus.on('deduction:result', ({ success }) =>
      A11y.announce(success ? 'Déduction correcte.' : 'Déduction erronée.'));
    bus.on('autosave:done', () => { const n = $('#save-indicator'); n.classList.add('on'); setTimeout(() => n.classList.remove('on'), 1400); });
    bus.on('asset:missing', k => console.warn('[ui] asset manquant', k));
  },

  mergeChars(scene, line) {
    const base = (scene.characters || []).map(c => ({ ...c }));
    (line.set || []).forEach(patch => {
      const found = base.find(c => c.id === patch.id);
      if (found) Object.assign(found, patch);
      else base.push({ position: 'center', ...patch });
    });
    (line.remove || []).forEach(id => {
      const i = base.findIndex(c => c.id === id);
      if (i >= 0) base.splice(i, 1);
    });
    return base;
  },

  /* ------------------------------------------------------------- dialogue */
  showLine(line, alreadyRead) {
    const nameEl = $('#speaker'), textEl = $('#dialogue-text');
    const speaker = line.speaker;
    const cname = speaker ? (this.chars[speaker]?.name || speaker) : (line.narrator || '');
    nameEl.textContent = speaker ? cname : (line.thought ? this.playerName() : '');
    nameEl.hidden = !nameEl.textContent;
    $('#dialogue').classList.toggle('narration', !speaker);
    $('#dialogue').classList.toggle('thought', !!line.thought);
    if (speaker) $('#dialogue').style.setProperty('--speaker-accent', this.chars[speaker]?.accent || 'var(--gold)');
    else $('#dialogue').style.setProperty('--speaker-accent', 'var(--cyan)');

    const text = this.interpolate(line.text);
    this._full = text;
    const instant = A11y.settings.textSpeed >= 100 ||
      (A11y.settings.skipRead && alreadyRead && this.skipping);
    if (instant) { textEl.textContent = text; this.typing = false; this.afterType(); return; }
    this.typewrite(textEl, text);
  },

  interpolate(t) {
    return String(t || '').replace(/\{nom\}/g, this.playerName());
  },
  playerName() { return Engine.state?.name || 'Ilan'; },

  typewrite(node, text) {
    clearInterval(this._typeTimer);
    this.typing = true;
    node.textContent = '';
    const speed = Math.max(4, 105 - A11y.settings.textSpeed);
    let i = 0;
    this._typeTimer = setInterval(() => {
      node.textContent = text.slice(0, ++i);
      if (i >= text.length) { clearInterval(this._typeTimer); this.typing = false; this.afterType(); }
    }, speed);
  },

  completeTyping() {
    clearInterval(this._typeTimer);
    $('#dialogue-text').textContent = this._full;
    this.typing = false;
    this.afterType();
  },

  afterType() {
    $('#next-hint').hidden = Engine.waitingChoice;
    A11y.announce(($('#speaker').textContent ? $('#speaker').textContent + ' : ' : '') + this._full);
    clearTimeout(this._autoTimer);
    if (A11y.settings.autoMode && !Engine.waitingChoice && !Engine.finished) {
      this._autoTimer = setTimeout(() => Engine.advance(), A11y.settings.autoDelay);
    }
  },

  tap() {
    if (this.hidden) { this.setHidden(false); return; }
    if (this.typing) { this.completeTyping(); return; }
    if (Engine.waitingChoice || Engine.finished) return;
    Engine.advance();
  },

  /* ---------------------------------------------------------------- choix */
  showChoices(choices, mode) {
    const box = $('#choices');
    box.innerHTML = '';
    box.hidden = false;
    $('#next-hint').hidden = true;
    clearTimeout(this._autoTimer);
    choices.forEach(c => {
      const b = el('button', 'choice');
      b.type = 'button';
      b.dataset.id = c.id;
      const label = el('span', 'choice__text', this.interpolate(c.text));
      b.appendChild(label);
      if (c.tone) b.appendChild(el('span', 'choice__tone', this.labels.tones[c.tone] || c.tone));
      if (c.deduction) b.classList.add('is-deduction');
      if (c.secret) b.classList.add('is-secret');
      if (c.irreversible) b.appendChild(el('span', 'choice__tag', 'Irréversible'));
      if (!c.unlocked) {
        b.classList.add('locked');
        b.setAttribute('aria-disabled', 'true');
        const why = mode === 'transparent'
          ? describe(c.requires, this.labels)
          : (c.lockedHint || 'Il te manque quelque chose.');
        if (why) b.appendChild(el('span', 'choice__req', why));
      } else if (mode === 'transparent' && c.preview) {
        b.appendChild(el('span', 'choice__req', c.preview));
      }
      b.addEventListener('click', ev => { ev.stopPropagation(); this.pick(c); });
      box.appendChild(b);
    });
    const timed = choices.find(c => c.timed);
    if (timed && !A11y.settings.disableTimed) this.startTimer(timed, box);
    const first = box.querySelector('.choice:not(.locked)');
    if (first) first.focus();
    A11y.announce(`${choices.length} choix disponibles.`);
  },

  startTimer(choice, box) {
    const bar = el('div', 'timer');
    const fill = el('div', 'timer__fill');
    bar.appendChild(fill);
    box.prepend(bar);
    const total = choice.timed * 1000;
    const t0 = performance.now();
    const step = now => {
      const k = Math.min(1, (now - t0) / total);
      fill.style.transform = `scaleX(${1 - k})`;
      if (k < 1 && Engine.waitingChoice) requestAnimationFrame(step);
      else if (Engine.waitingChoice) {
        const fallback = choice.timeoutChoice;
        const c = Engine.visibleChoices().find(x => x.id === fallback);
        if (c) this.pick(c, true);
      }
    };
    requestAnimationFrame(step);
  },

  pick(c, auto) {
    if (!c.unlocked) { Engine.choose(c.id); return; }
    if (c.irreversible && A11y.settings.confirmCritical && !auto) {
      this.confirm('Décision irréversible',
        c.confirmText || 'Cette décision ferme définitivement d’autres possibilités. Continuer ?',
        () => Engine.choose(c.id));
      return;
    }
    Engine.choose(c.id);
  },

  /* -------------------------------------------------------------- confort */
  setHidden(v) {
    this.hidden = v;
    document.body.classList.toggle('ui-hidden', v);
    $('#dialogue').setAttribute('aria-hidden', String(v));
  },

  updateProgress() {
    const total = Object.keys(Engine.story).length;
    const seen = Object.keys(Engine.state.seenScenes).length;
    const bar = $('#progress-fill');
    if (bar) bar.style.transform = `scaleX(${Math.min(1, seen / total)})`;
    const c = this.chapters.list.find(x => x.number === Engine.state.chapter);
    $('#chapter-label').textContent = c ? c.short : '';
  },

  /* ------------------------------------------------------------- overlays */
  openPanel(id) {
    Audio.sfx('sfx_menu');
    const p = $('#panel');
    p.hidden = false;
    p.dataset.panel = id;
    p.querySelector('.panel__body').innerHTML = '';
    p.querySelector('.panel__title').textContent = this.labels.panels[id] || id;
    const body = p.querySelector('.panel__body');
    // Galerie, fins, sauvegardes, paramètres et crédits sont consultables depuis
    // l'écran-titre ; les autres n'ont de sens qu'avec une partie en cours.
    const needsGame = ['stats', 'relations', 'clues', 'deductions', 'promises',
      'journal', 'history', 'codex', 'achievements'];
    if (needsGame.includes(id) && !Engine.state) {
      body.append(el('p', 'note', 'Commencez ou chargez une partie pour consulter cette section.'));
    } else {
      (this.panels[id] || (() => body.append(el('p', '', 'Section vide.'))))(body, this);
    }
    p.querySelector('.panel__close').focus();
    document.body.classList.add('panel-open');
  },
  closePanel() {
    $('#panel').hidden = true;
    document.body.classList.remove('panel-open');
  },

  confirm(title, text, onYes) {
    const d = $('#confirm');
    d.querySelector('.confirm__title').textContent = title;
    d.querySelector('.confirm__text').textContent = text;
    d.hidden = false;
    const yes = d.querySelector('.confirm__yes'), no = d.querySelector('.confirm__no');
    const close = () => { d.hidden = true; yes.onclick = null; no.onclick = null; };
    yes.onclick = () => { close(); onYes(); };
    no.onclick = close;
    yes.focus();
  },

  toast({ kind, text }) {
    if (kind === 'stat' && A11y.settings.hideStatToasts) return;
    const wrap = $('#toasts');
    const t = el('div', 'toast toast--' + kind, text);
    wrap.appendChild(t);
    A11y.announce(text);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 400); }, 2600);
  },

  showEnding(id, ending) {
    const p = $('#ending-screen');
    p.hidden = false;
    p.querySelector('.ending__title').textContent = ending?.title || 'Fin';
    p.querySelector('.ending__code').textContent = ending?.code || '';
    p.querySelector('.ending__text').textContent = ending?.text || '';
    const cg = p.querySelector('.ending__cg');
    const a = ending?.cg ? Assets.cg(ending.cg) : null;
    if (a) { cg.src = a.src; cg.alt = a.alt; cg.hidden = false; } else cg.hidden = true;
    Audio.playMusic('music_ending');
  },

  /* --------------------------------------------------------------- panneaux */
  panels: {
    stats(body, ui) {
      const st = Engine.state;
      const list = el('dl', 'stats');
      STAT_KEYS.forEach(k => {
        const row = el('div', 'stat-row');
        row.append(el('dt', '', STAT_LABELS[k]));
        const dd = el('dd', 'stat-bar');
        const f = el('span', 'stat-bar__fill');
        f.style.width = (st.stats[k] * 10) + '%';
        dd.append(f, el('span', 'stat-bar__val', String(st.stats[k])));
        row.append(dd);
        list.append(row);
      });
      body.append(list);
      const notes = el('div', 'note');
      const high = STAT_KEYS.filter(k => st.stats[k] >= 8);
      notes.textContent = high.length
        ? 'Contreparties actives : ' + high.map(k => ui.labels.statDrawbacks[k]).join(' ')
        : 'Aucune statistique n’a encore atteint le seuil où elle se retourne contre toi.';
      body.append(notes);
    },

    relations(body, ui) {
      const st = Engine.state;
      Object.entries(st.relations).forEach(([id, r]) => {
        if (r.narrative === 'inconnu' && !st.seenScenes['met:' + id] && r.affinity === 0 && r.trust === 10 && !ui.metCharacter(id)) return;
        const c = el('section', 'rel-card');
        c.style.setProperty('--accent', ui.chars[id]?.accent || 'var(--gold)');
        c.append(el('h3', '', ui.chars[id]?.name || id));
        c.append(el('p', 'rel-card__state', relationSummary(r)));
        const g = el('div', 'rel-grid');
        Object.entries(REL_LABELS).forEach(([k, lab]) => {
          if (k === 'attraction' && !ui.chars[id]?.romanceable) return;
          const row = el('div', 'rel-row');
          row.append(el('span', 'rel-row__label', lab));
          const bar = el('span', 'rel-row__bar');
          const f = el('i');
          const min = k === 'affinity' ? -100 : 0;
          f.style.width = Math.round(((r[k] - min) / (100 - min)) * 100) + '%';
          bar.append(f);
          row.append(bar, el('span', 'rel-row__val', String(r[k])));
          g.append(row);
        });
        c.append(g);
        if (r.memories.length) {
          c.append(el('h4', '', 'Souvenirs marquants'));
          const ul = el('ul', 'tight');
          r.memories.forEach(m => ul.append(el('li', '', ui.labels.memories[m] || m)));
          c.append(ul);
        }
        if (r.boundaries.length) {
          c.append(el('h4', '', 'Limites franchies'));
          const ul = el('ul', 'tight warn');
          r.boundaries.forEach(m => ul.append(el('li', '', ui.labels.boundaries[m] || m)));
          c.append(ul);
        }
        body.append(c);
      });
      if (!body.children.length) body.append(el('p', '', 'Tu n’as encore rencontré personne d’important.'));
    },

    clues(body, ui) {
      const st = Engine.state;
      if (!st.clues.length) { body.append(el('p', '', 'Aucun indice collecté pour l’instant.')); return; }
      const grid = el('div', 'clue-board');
      st.clues.forEach(id => {
        const c = ui.labels.clueDetails[id] || { title: id, text: '' };
        const card = el('article', 'clue');
        card.append(el('h3', '', c.title));
        card.append(el('p', '', c.text));
        if (c.source) card.append(el('p', 'clue__src', 'Source : ' + c.source));
        grid.append(card);
      });
      body.append(grid);
      if (st.falseLeads.length) {
        body.append(el('h3', '', 'Pistes écartées'));
        const ul = el('ul', 'tight warn');
        st.falseLeads.forEach(f => ul.append(el('li', '', ui.labels.falseLeads[f] || f)));
        body.append(ul);
      }
    },

    deductions(body, ui) {
      const st = Engine.state;
      if (!st.deductions.length) { body.append(el('p', '', 'Aucune déduction formulée.')); return; }
      st.deductions.forEach(id => {
        const d = ui.labels.deductionDetails[id] || { title: id, text: '' };
        const c = el('article', 'clue');
        c.append(el('h3', '', d.title));
        c.append(el('p', '', d.text));
        body.append(c);
      });
    },

    promises(body, ui) {
      const st = Engine.state;
      const entries = Object.entries(st.promises);
      if (!entries.length) { body.append(el('p', '', 'Tu n’as encore rien promis à personne.')); return; }
      const ul = el('ul', 'promise-list');
      entries.forEach(([id, status]) => {
        const li = el('li', 'promise promise--' + status);
        li.append(el('span', 'promise__text', ui.labels.promises[id] || id));
        li.append(el('span', 'promise__status',
          { made: 'en cours', kept: 'tenue', broken: 'brisée' }[status] || status));
        ul.append(li);
      });
      body.append(ul);
    },

    journal(body, ui) {
      const st = Engine.state;
      const ul = el('ol', 'journal');
      st.history.slice().reverse().forEach(h => {
        const li = el('li');
        li.append(el('span', 'journal__ch', 'Ch. ' + h.chapter));
        li.append(el('span', 'journal__txt', h.label));
        if (h.tone) li.append(el('span', 'journal__tone', ui.labels.tones[h.tone] || h.tone));
        ul.append(li);
      });
      if (!st.history.length) body.append(el('p', '', 'Aucune décision enregistrée.'));
      else body.append(ul);
    },

    history(body, ui) {
      const st = Engine.state;
      const seen = Object.keys(st.seenScenes);
      body.append(el('p', 'note', `${seen.length} scènes vues sur ${Object.keys(Engine.story).length}.`));
      const ul = el('ul', 'tight');
      seen.slice(-40).reverse().forEach(id => {
        const s = Engine.story[id];
        ul.append(el('li', '', s ? `${s.title || id}` : id));
      });
      body.append(ul);
    },

    codex(body, ui) {
      const st = Engine.state;
      const known = ui.codex.entries.filter(e => st.codex.includes(e.id) || e.always);
      if (!known.length) { body.append(el('p', '', 'Le codex se remplit au fil de l’enquête.')); return; }
      known.forEach(e => {
        const d = el('details', 'codex-entry');
        d.append(el('summary', '', e.title));
        d.append(el('p', '', e.text));
        body.append(d);
      });
    },

    gallery(body, ui) {
      const st = Engine.state;
      const p = SaveManager.loadPersistent();
      const all = Object.keys(Assets.data.cg);
      const grid = el('div', 'gallery');
      all.forEach(id => {
        const unlocked = (st?.unlockedCG || []).includes(id) || (p.cg || []).includes(id);
        const fig = el('figure', 'gallery__item' + (unlocked ? '' : ' locked'));
        if (unlocked) {
          const a = Assets.cg(id);
          const img = document.createElement('img');
          img.src = a.src; img.alt = a.alt; img.loading = 'lazy';
          fig.append(img);
          fig.append(el('figcaption', '', a.title));
          fig.tabIndex = 0;
          fig.addEventListener('click', () => { SceneRenderer.showCG(id); ui.closePanel(); });
        } else {
          fig.append(el('div', 'gallery__lock', '?'));
          fig.append(el('figcaption', '', 'Illustration verrouillée'));
        }
        grid.append(fig);
      });
      body.append(grid);
    },

    endings(body, ui) {
      const p = SaveManager.loadPersistent();
      const got = new Set([...(p.endings || []), ...(Engine.state?.endings || [])]);
      Object.entries(ui.endings).forEach(([id, e]) => {
        const c = el('article', 'ending-card' + (got.has(id) ? '' : ' locked'));
        c.append(el('h3', '', got.has(id) ? e.title : '— fin non découverte —'));
        c.append(el('p', 'ending-card__code', e.code));
        if (got.has(id)) c.append(el('p', '', e.summary));
        else c.append(el('p', '', e.hint || ''));
        body.append(c);
      });
    },

    achievements(body, ui) {
      const list = Achievements.list();
      list.forEach(a => {
        const c = el('article', 'ach' + (a.unlocked ? '' : ' locked'));
        c.append(el('h3', '', a.unlocked ? a.title : '???'));
        c.append(el('p', '', a.unlocked ? a.text : a.hint || 'Succès à découvrir.'));
        body.append(c);
      });
    },

    saves(body, ui) {
      const render = () => {
        body.innerHTML = '';
        const mk = (label, meta, onSave, onLoad, onDelete) => {
          const row = el('div', 'save-row');
          row.append(el('h3', '', label));
          row.append(el('p', 'save-row__meta', meta
            ? `${meta.name} — ${meta.label || 'chapitre ' + meta.chapter} — ${new Date(meta.savedAt).toLocaleString('fr-FR')}`
            : 'emplacement vide'));
          const acts = el('div', 'save-row__actions');
          if (onSave) { const b = el('button', 'btn', 'Sauvegarder'); b.onclick = () => { onSave(); render(); }; acts.append(b); }
          if (meta) {
            const b = el('button', 'btn', 'Charger'); b.onclick = onLoad; acts.append(b);
            if (onDelete) {
              const d = el('button', 'btn btn--danger', 'Supprimer');
              d.onclick = () => ui.confirm('Supprimer', 'Cette sauvegarde sera définitivement perdue.', () => { onDelete(); render(); });
              acts.append(d);
            }
          }
          row.append(acts);
          body.append(row);
        };
        const inGame = !!Engine.state;
        mk('Sauvegarde automatique', SaveManager.metaAuto(), null, () => ui.loadState(SaveManager.loadAuto()));
        mk('Sauvegarde rapide', SaveManager.metaQuick(),
          inGame ? () => SaveManager.quicksave(Engine.state, 'Rapide') : null,
          () => ui.loadState(SaveManager.loadQuick()));
        SLOTS.forEach(n => mk('Emplacement ' + n, SaveManager.metaSlot(n),
          inGame ? () => SaveManager.saveSlot(n, Engine.state, Engine.scene?.title || '') : null,
          () => ui.loadState(SaveManager.loadSlot(n)),
          () => SaveManager.deleteSlot(n)));

        const io = el('div', 'save-io');
        const exp = el('button', 'btn', 'Exporter en JSON');
        exp.disabled = !Engine.state;
        exp.onclick = () => {
          if (!Engine.state) return;
          const blob = new Blob([SaveManager.exportJSON(Engine.state)], { type: 'application/json' });
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'serments-sauvegarde.json';
          a.click();
          URL.revokeObjectURL(a.href);
        };
        const imp = el('label', 'btn', 'Importer un JSON');
        const inp = document.createElement('input');
        inp.type = 'file'; inp.accept = 'application/json'; inp.hidden = true;
        inp.onchange = async () => {
          const f = inp.files[0];
          if (!f) return;
          const res = SaveManager.importJSON(await f.text());
          if (!res.ok) { ui.toast({ kind: 'bad', text: res.errors[0] }); return; }
          ui.loadState(res.save);
        };
        imp.append(inp);
        io.append(exp, imp);
        body.append(io);
      };
      render();
    },

    settings(body, ui) {
      const s = A11y.settings;
      const group = (title) => { const h = el('h3', '', title); body.append(h); };
      const range = (label, key, min, max, step, get, set) => {
        const row = el('label', 'set-row');
        row.append(el('span', '', label));
        const i = document.createElement('input');
        i.type = 'range'; i.min = min; i.max = max; i.step = step; i.value = get();
        const v = el('output', '', String(get()));
        i.oninput = () => { set(Number(i.value)); v.textContent = i.value; };
        row.append(i, v);
        body.append(row);
      };
      const toggle = (label, key, get, set) => {
        const row = el('label', 'set-row set-row--toggle');
        row.append(el('span', '', label));
        const i = document.createElement('input');
        i.type = 'checkbox'; i.checked = get();
        i.onchange = () => set(i.checked);
        row.append(i);
        body.append(row);
      };

      group('Lecture');
      range('Vitesse du texte', 'textSpeed', 5, 100, 1, () => s.textSpeed, v => A11y.set('textSpeed', v));
      toggle('Mode automatique', 'autoMode', () => s.autoMode, v => A11y.set('autoMode', v));
      range('Délai automatique (ms)', 'autoDelay', 800, 6000, 100, () => s.autoDelay, v => A11y.set('autoDelay', v));
      toggle('Avance rapide du texte déjà lu', 'skipRead', () => s.skipRead, v => A11y.set('skipRead', v));
      const modeRow = el('label', 'set-row');
      modeRow.append(el('span', '', 'Affichage des prérequis'));
      const sel = document.createElement('select');
      [['immersif', 'Immersif (indications narratives)'], ['transparent', 'Transparent (valeurs exactes)']]
        .forEach(([v, t]) => { const o = document.createElement('option'); o.value = v; o.textContent = t; sel.append(o); });
      sel.value = s.choiceMode;
      sel.onchange = () => A11y.set('choiceMode', sel.value);
      modeRow.append(sel);
      body.append(modeRow);

      group('Accessibilité');
      range('Taille du texte (%)', 'textSize', 80, 180, 5, () => s.textSize, v => A11y.set('textSize', v));
      toggle('Police lisible alternative', 'dyslexicFont', () => s.dyslexicFont, v => A11y.set('dyslexicFont', v));
      toggle('Contraste renforcé', 'highContrast', () => s.highContrast, v => A11y.set('highContrast', v));
      toggle('Réduire les animations', 'reduceMotion', () => s.reduceMotion, v => A11y.set('reduceMotion', v));
      toggle('Supprimer les transitions', 'noTransitions', () => s.noTransitions, v => A11y.set('noTransitions', v));
      toggle('Empêcher les effets de flash', 'noFlash', () => s.noFlash, v => A11y.set('noFlash', v));
      toggle('Désactiver les choix chronométrés', 'disableTimed', () => s.disableTimed, v => A11y.set('disableTimed', v));
      toggle('Confirmer les choix critiques', 'confirmCritical', () => s.confirmCritical, v => A11y.set('confirmCritical', v));
      toggle('Masquer les notifications de statistiques', 'hideStatToasts', () => s.hideStatToasts, v => A11y.set('hideStatToasts', v));

      group('Audio');
      toggle('Activer le son', 'audioEnabled', () => s.audioEnabled, v => { A11y.set('audioEnabled', v); Audio.setEnabled(v); });
      [['master', 'Volume général'], ['music', 'Musique'], ['ambiance', 'Ambiances'], ['sfx', 'Effets']]
        .forEach(([k, lab]) => range(lab, k, 0, 100, 1,
          () => Math.round(s.volumes[k] * 100),
          v => { A11y.set('volumes.' + k, v / 100); Audio.setVolume(k, v / 100); }));

      const reset = el('button', 'btn btn--danger', 'Effacer toutes les données locales');
      reset.onclick = () => ui.confirm('Tout effacer',
        'Sauvegardes, galerie, succès et fins découvertes seront perdus.',
        () => { SaveManager.clearAll(); location.reload(); });
      body.append(reset);
    },

    credits(body, ui) {
      body.innerHTML = '';
      ui.labels.credits.forEach(([role, who]) => {
        const r = el('div', 'credit-row');
        r.append(el('span', 'credit-row__role', role));
        r.append(el('span', 'credit-row__who', who));
        body.append(r);
      });
    }
  },

  metCharacter(id) {
    return Object.keys(Engine.state.seenScenes).some(s => (Engine.story[s]?.characters || []).some(c => c.id === id));
  },

  loadState() { /* remplacé par app.js */ },

  /* ------------------------------------------------------- entrées globales */
  bindGlobal() {
    const stage = $('#stage-tap');
    stage.addEventListener('click', () => this.tap());
    stage.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.tap(); }
    });
    document.addEventListener('keydown', e => {
      if (e.target.matches('input, select, textarea')) return;
      switch (e.key) {
        case 'Escape':
          if (!$('#panel').hidden) this.closePanel();
          else if (this.hidden) this.setHidden(false);
          break;
        case 'h': case 'H': this.setHidden(!this.hidden); break;
        case 'a': case 'A': A11y.set('autoMode', !A11y.settings.autoMode); this.toast({ kind: 'info', text: 'Mode automatique ' + (A11y.settings.autoMode ? 'activé' : 'désactivé') }); break;
        case 'Control': this.skipping = true; break;
        case 'F5': break;
        default: break;
      }
    });
    document.addEventListener('keyup', e => { if (e.key === 'Control') this.skipping = false; });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { Audio.pauseAll(); clearTimeout(this._autoTimer); }
      else Audio.resumeAll();
    });
    $('#panel').querySelector('.panel__close').addEventListener('click', () => this.closePanel());
    document.querySelectorAll('[data-panel]').forEach(b =>
      b.addEventListener('click', e => { e.stopPropagation(); this.openPanel(b.dataset.panel); }));
    $('#btn-hide').addEventListener('click', e => { e.stopPropagation(); this.setHidden(true); });
    $('#btn-quicksave').addEventListener('click', e => {
      e.stopPropagation();
      SaveManager.quicksave(Engine.state, Engine.scene?.title || '');
      this.toast({ kind: 'info', text: 'Sauvegarde rapide effectuée.' });
    });
    $('#btn-quickload').addEventListener('click', e => {
      e.stopPropagation();
      const s = SaveManager.loadQuick();
      if (!s) { this.toast({ kind: 'bad', text: 'Aucune sauvegarde rapide.' }); return; }
      this.loadState(s);
    });
    $('#btn-fullscreen').addEventListener('click', e => {
      e.stopPropagation();
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen?.().catch(() => { });
    });
  }
};
