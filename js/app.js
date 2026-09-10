/* Amorçage du jeu : chargement des données, écran-titre, cycle de vie. */
import { bus } from './event-bus.js';
import { Assets, url } from './asset-manager.js';
import { Audio } from './audio-manager.js';
import { Engine } from './engine.js';
import { UI } from './ui-manager.js';
import { A11y } from './accessibility-manager.js';
import { SaveManager } from './save-manager.js';
import { SceneRenderer } from './scene-renderer.js';
import { CharacterRenderer } from './character-renderer.js';
import { Achievements } from './achievement-manager.js';
import { Consequences } from './consequence-manager.js';
import { newState, STAT_KEYS, STAT_LABELS } from './state.js';

const $ = s => document.querySelector(s);

async function loadJSON(rel) {
  const res = await fetch(url(rel), { cache: 'no-cache' });
  if (!res.ok) throw new Error(`Chargement impossible : ${rel} (${res.status})`);
  return res.json();
}

const DATA = {};

async function boot() {
  const status = $('#boot-status');
  try {
    status.textContent = 'Chargement des données…';
    const [chapters, characters, assets, endings, achievements, codex, labels, relationships] =
      await Promise.all(['data/chapters.json', 'data/characters.json', 'data/assets.json',
        'data/endings.json', 'data/achievements.json', 'data/codex.json',
        'data/labels.json', 'data/relationships.json'].map(loadJSON));

    status.textContent = 'Chargement du scénario…';
    const parts = await Promise.all(chapters.files.map(f => loadJSON(f)));
    const story = Object.assign({}, ...parts.map(p => p.scenes));

    Object.assign(DATA, { chapters, characters: characters.characters, assets, endings: endings.endings, achievements: achievements.achievements, codex, labels, relationships, story });

    Assets.init(assets, characters.characters);
    Engine.init({ story, chapters, endings: endings.endings, codex, achievements: achievements.achievements });

    SceneRenderer.init({
      stage: $('#stage'), bgA: $('#bg-a'), bgB: $('#bg-b'),
      fx: $('#fx-layer'), cg: $('#cg-layer'), flash: $('#flash')
    });
    CharacterRenderer.init($('#characters'));
    A11y.init(SaveManager.loadSettings());
    Audio.enabled = A11y.settings.audioEnabled;
    Object.entries(A11y.settings.volumes).forEach(([k, v]) => Audio.setVolume(k, v));

    UI.init({
      labels, chars: characters.characters, codex,
      endings: endings.endings, chapters
    });
    UI.loadState = loadState;

    bus.on('settings:changed', s => SaveManager.saveSettings(s));

    status.textContent = '';
    $('#boot').hidden = true;
    showTitle();
  } catch (e) {
    console.error(e);
    status.innerHTML = `<strong>Erreur au démarrage.</strong><br>${e.message}<br>
      <small>Si vous ouvrez le fichier directement (file://), lancez plutôt un serveur local :
      <code>python3 -m http.server 8000</code>.</small>`;
  }
}

/* ---------------------------------------------------------------- écran-titre */
function showTitle() {
  const t = $('#title-screen');
  t.hidden = false;
  document.body.classList.add('on-title');
  const p = SaveManager.loadPersistent();
  $('#btn-continue').disabled = !SaveManager.hasAny();
  $('#btn-newgame-plus').hidden = !(p.endings && p.endings.length);
  const bg = Assets.background('bg_pont_confluence_night');
  if (bg) t.style.backgroundImage = `linear-gradient(180deg, rgba(4,6,14,.35), rgba(4,6,14,.92)), url("${bg.src}")`;
  const found = (p.endings || []).length;
  $('#title-progress').textContent = found
    ? `${found} fin${found > 1 ? 's' : ''} découverte${found > 1 ? 's' : ''} sur ${Object.keys(DATA.endings).length}.`
    : '';
}

function hideTitle() {
  $('#title-screen').hidden = true;
  document.body.classList.remove('on-title');
}

/* ------------------------------------------------------------ création de partie */
function openCreation(ngPlus) {
  const box = $('#creation');
  box.hidden = false;
  const nameInput = $('#pc-name');
  nameInput.value = 'Ilan';
  let pool = 5;
  const st = newState({ ngPlus });
  const list = $('#pc-stats');
  list.innerHTML = '';
  const poolEl = $('#pc-pool');
  const rows = {};
  STAT_KEYS.forEach(k => {
    const row = document.createElement('div');
    row.className = 'pc-row';
    row.innerHTML = `<span class="pc-row__label">${STAT_LABELS[k]}</span>
      <button type="button" class="pc-btn" data-k="${k}" data-d="-1" aria-label="Diminuer ${STAT_LABELS[k]}">−</button>
      <output class="pc-row__val">${st.stats[k]}</output>
      <button type="button" class="pc-btn" data-k="${k}" data-d="1" aria-label="Augmenter ${STAT_LABELS[k]}">+</button>
      <span class="pc-row__hint">${DATA.labels.statHints[k]}</span>`;
    list.append(row);
    rows[k] = row.querySelector('output');
  });
  const refresh = () => {
    poolEl.textContent = String(pool);
    STAT_KEYS.forEach(k => { rows[k].textContent = st.stats[k]; });
    $('#pc-start').disabled = pool > 0;
  };
  list.onclick = e => {
    const b = e.target.closest('.pc-btn');
    if (!b) return;
    const k = b.dataset.k, d = Number(b.dataset.d);
    if (d > 0 && (pool <= 0 || st.stats[k] >= 7)) return;
    if (d < 0 && st.stats[k] <= 1) return;
    st.stats[k] += d;
    pool -= d;
    refresh();
  };
  refresh();
  $('#pc-start').onclick = () => {
    st.name = (nameInput.value || 'Ilan').trim().slice(0, 20) || 'Ilan';
    if (ngPlus) {
      st.persistent = SaveManager.loadPersistent();
      st.routes.secret = 'open';
      st.flags['ng_plus'] = true;
    }
    box.hidden = true;
    hideTitle();
    startWith(st);
  };
  $('#pc-cancel').onclick = () => { box.hidden = true; };
}

function startWith(st) {
  Engine.bind(st);
  st.settings = A11y.settings;
  Achievements.init(DATA.achievements, st);
  Consequences.init(st, DATA.labels);
  Audio.unlock();
  Engine.start();
  startClock(st);
}

function loadState(save) {
  if (!save) { UI.toast({ kind: 'bad', text: 'Sauvegarde illisible.' }); return; }
  save.settings = A11y.settings;
  Engine.bind(save);
  Achievements.bind(save);
  Consequences.bind(save);
  Achievements.init(DATA.achievements, save);
  Consequences.init(save, DATA.labels);
  UI.closePanel();
  $('#ending-screen').hidden = true;
  hideTitle();
  Audio.unlock();
  Engine.resume();
  startClock(save);
  UI.toast({ kind: 'info', text: 'Partie chargée.' });
}

let clock = null;
function startClock(st) {
  clearInterval(clock);
  clock = setInterval(() => { if (!document.hidden) st.playtime += 1; }, 1000);
}

/* ------------------------------------------------------------------- boutons */
document.addEventListener('DOMContentLoaded', () => {
  $('#btn-newgame').addEventListener('click', () => { Audio.unlock(); openCreation(false); });
  $('#btn-newgame-plus').addEventListener('click', () => { Audio.unlock(); openCreation(true); });
  $('#btn-continue').addEventListener('click', () => {
    Audio.unlock();
    loadState(SaveManager.loadAuto() || SaveManager.loadQuick());
  });
  $('#btn-title-load').addEventListener('click', () => { Audio.unlock(); UI.openPanel('saves'); });
  $('#btn-title-settings').addEventListener('click', () => { Audio.unlock(); UI.openPanel('settings'); });
  $('#btn-title-gallery').addEventListener('click', () => { Audio.unlock(); UI.openPanel('gallery'); });
  $('#btn-title-endings').addEventListener('click', () => { Audio.unlock(); UI.openPanel('endings'); });
  $('#btn-title-credits').addEventListener('click', () => { Audio.unlock(); UI.openPanel('credits'); });
  $('#ending-restart').addEventListener('click', () => { $('#ending-screen').hidden = true; showTitle(); });
  $('#ending-gallery').addEventListener('click', () => UI.openPanel('gallery'));
  $('#btn-menu-title').addEventListener('click', () => {
    if (!Engine.state) { UI.closePanel(); return; }
    UI.confirm('Retour au titre', 'La progression non sauvegardée sera perdue (l’auto-sauvegarde est conservée).',
      () => { UI.closePanel(); showTitle(); });
  });
  $('#btn-restart-chapter').addEventListener('click', () => {
    if (!Engine.state) { UI.toast({ kind: 'bad', text: 'Aucune partie en cours.' }); return; }
    const ch = DATA.chapters.list.find(c => c.number === Engine.state.chapter);
    if (!ch) return;
    UI.confirm('Recommencer le chapitre', `Reprendre au début de « ${ch.title} » ?`, () => {
      UI.closePanel();
      Engine.goto(ch.entry);
    });
  });
  boot();
});

window.addEventListener('beforeunload', () => {
  if (Engine.state && !Engine.finished) SaveManager.autosave(Engine.state, 'Reprise automatique');
});

export { DATA };
