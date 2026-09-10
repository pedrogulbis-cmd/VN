/* Sauvegardes locales (localStorage), export/import JSON, migration de format. */
import { bus } from './event-bus.js';
import { SAVE_VERSION, newState } from './state.js';

const PREFIX = 'sdlf:';
const K = {
  slot: n => `${PREFIX}slot${n}`,
  auto: `${PREFIX}auto`,
  quick: `${PREFIX}quick`,
  settings: `${PREFIX}settings`,
  persistent: `${PREFIX}persistent`
};

export const SLOTS = [1, 2, 3, 4, 5];

function safeParse(raw) {
  try { return JSON.parse(raw); } catch (e) { return null; }
}

/* --------------------------------------------------------------- migration */
export function migrate(save) {
  if (!save || typeof save !== 'object') return null;
  let s = save;
  if (s.version === undefined) s.version = 1;
  if (s.version === 1) {
    // v1 : affection unique -> relations multidimensionnelles
    const base = newState({ name: s.name });
    Object.keys(base.relations).forEach(id => {
      const old = (s.affection && s.affection[id]) || 0;
      base.relations[id].affinity = Math.max(-100, Math.min(100, old));
      base.relations[id].trust = Math.max(0, Math.min(100, Math.round(old / 2)));
    });
    s = { ...base, ...s, relations: base.relations, version: 2 };
    delete s.affection;
  }
  if (s.version === 2) {
    s.deferred = s.deferred || [];
    s.rewards = s.rewards || {};
    s.chapterGains = s.chapterGains || {};
    s.falseLeads = s.falseLeads || [];
    s.tone = s.tone || {};
    s.version = 3;
  }
  if (s.version !== SAVE_VERSION) return null;
  return s;
}

/* --------------------------------------------------------------- validation */
export function validateSave(obj) {
  const errors = [];
  if (!obj || typeof obj !== 'object') return ['Fichier illisible ou vide.'];
  if (typeof obj.scene !== 'string' && obj.scene !== null) errors.push('Scène courante absente.');
  if (!obj.stats || typeof obj.stats !== 'object') errors.push('Statistiques absentes.');
  if (!obj.relations || typeof obj.relations !== 'object') errors.push('Relations absentes.');
  if (obj.version === undefined) errors.push('Version de format absente.');
  else if (obj.version > SAVE_VERSION) errors.push(`Sauvegarde version ${obj.version}, jeu version ${SAVE_VERSION}. Mettez le jeu à jour.`);
  ['clues', 'deductions', 'items', 'history'].forEach(k => {
    if (obj[k] !== undefined && !Array.isArray(obj[k])) errors.push(`Champ « ${k} » invalide.`);
  });
  return errors;
}

/* ------------------------------------------------------------------ écriture */
function put(key, st, label) {
  const payload = { ...st, savedAt: Date.now(), label: label || '' };
  try {
    localStorage.setItem(key, JSON.stringify(payload));
    bus.emit('save:written', { key, label });
    return true;
  } catch (e) {
    bus.emit('save:error', "Espace de stockage plein : supprimez une sauvegarde.");
    return false;
  }
}

export const SaveManager = {
  autosave(st, label) { return put(K.auto, st, label); },
  quicksave(st, label) { return put(K.quick, st, label); },
  saveSlot(n, st, label) { return put(K.slot(n), st, label); },

  load(key) {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return migrate(safeParse(raw));
  },
  loadAuto() { return this.load(K.auto); },
  loadQuick() { return this.load(K.quick); },
  loadSlot(n) { return this.load(K.slot(n)); },

  meta(key) {
    const raw = localStorage.getItem(key);
    const o = safeParse(raw);
    if (!o) return null;
    return {
      name: o.name, chapter: o.chapter, scene: o.scene, label: o.label,
      savedAt: o.savedAt, playtime: o.playtime, version: o.version
    };
  },
  metaSlot(n) { return this.meta(K.slot(n)); },
  metaAuto() { return this.meta(K.auto); },
  metaQuick() { return this.meta(K.quick); },

  deleteSlot(n) { localStorage.removeItem(K.slot(n)); bus.emit('save:deleted', n); },

  hasAny() {
    return !!(localStorage.getItem(K.auto) || localStorage.getItem(K.quick) ||
      SLOTS.some(n => localStorage.getItem(K.slot(n))));
  },

  /* ------------------------------------------------------- import / export */
  exportJSON(st) {
    return JSON.stringify({ game: 'les-serments-de-la-faille', version: SAVE_VERSION, save: st }, null, 1);
  },
  importJSON(text) {
    const obj = safeParse(text);
    if (!obj) return { ok: false, errors: ['Le fichier n’est pas du JSON valide.'] };
    const save = obj.save || obj;
    const errors = validateSave(save);
    if (errors.length) return { ok: false, errors };
    const migrated = migrate(save);
    if (!migrated) return { ok: false, errors: ['Format de sauvegarde non pris en charge.'] };
    return { ok: true, save: migrated };
  },

  /* ------------------------------------------------------------ paramètres */
  saveSettings(s) { try { localStorage.setItem(K.settings, JSON.stringify(s)); } catch (e) { } },
  loadSettings() { return safeParse(localStorage.getItem(K.settings)); },

  /* ----------------------------------- mémoire de nouvelle partie enrichie */
  loadPersistent() { return safeParse(localStorage.getItem(K.persistent)) || { endings: [], cg: [], achievements: [], truths: [] }; },
  recordEnding(st, endingId) {
    const p = this.loadPersistent();
    if (!p.endings.includes(endingId)) p.endings.push(endingId);
    p.cg = Array.from(new Set([...(p.cg || []), ...st.unlockedCG]));
    p.achievements = Array.from(new Set([...(p.achievements || []), ...st.achievements]));
    p.truths = Array.from(new Set([...(p.truths || []), ...st.deductions]));
    try { localStorage.setItem(K.persistent, JSON.stringify(p)); } catch (e) { }
    bus.emit('ending:recorded', endingId);
    return p;
  },
  clearAll() {
    Object.values(K).forEach(v => { if (typeof v === 'string') localStorage.removeItem(v); });
    SLOTS.forEach(n => localStorage.removeItem(K.slot(n)));
  }
};

export { K as SAVE_KEYS };
