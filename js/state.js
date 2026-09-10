/* État de partie : source de vérité unique, sérialisable tel quel. */
import { bus } from './event-bus.js';
import { evaluate } from './condition-parser.js';

export const SAVE_VERSION = 3;

export const STAT_KEYS = ['courage', 'empathie', 'perspicacite', 'influence',
  'sangfroid', 'ingeniosite', 'integrite'];

export const STAT_LABELS = {
  courage: 'Courage', empathie: 'Empathie', perspicacite: 'Perspicacité',
  influence: 'Influence', sangfroid: 'Sang-froid', ingeniosite: 'Ingéniosité',
  integrite: 'Intégrité'
};

export const REL_LABELS = {
  affinity: 'Affinité', trust: 'Confiance', distrust: 'Méfiance', respect: 'Respect',
  tension: 'Tension', vulnerability: 'Vulnérabilité partagée', attraction: 'Attraction'
};

const REL_BOUNDS = {
  affinity: [-100, 100], trust: [0, 100], distrust: [0, 100], respect: [0, 100],
  tension: [0, 100], vulnerability: [0, 100], attraction: [0, 100]
};

export const CHAR_IDS = ['kael', 'noam', 'ysee', 'damien', 'theo'];

function blankRelation() {
  return {
    affinity: 0, trust: 10, distrust: 5, respect: 10, tension: 0,
    vulnerability: 0, attraction: 0, memories: [], boundaries: [],
    promises: [], secrets: [], narrative: 'inconnu', routeStatus: 'neutral'
  };
}

export function newState(opts = {}) {
  const relations = {};
  CHAR_IDS.forEach(id => { relations[id] = blankRelation(); });
  return {
    version: SAVE_VERSION,
    name: opts.name || 'Ilan',
    createdAt: Date.now(),
    playtime: 0,
    chapter: 0,
    scene: null,
    lineIndex: 0,
    stats: { courage: 3, empathie: 3, perspicacite: 3, influence: 2, sangfroid: 3, ingeniosite: 3, integrite: 3 },
    relations,
    flags: {},
    clues: [],
    deductions: [],
    falseLeads: [],
    items: [],
    promises: {},        // id -> 'made' | 'kept' | 'broken'
    routes: { kael: 'neutral', noam: 'neutral', coop: 'neutral', opposition: 'neutral', truth: 'neutral', secret: 'closed' },
    factions: { bureau: 0, rompus: 0, choeur: 0 },
    seenScenes: {},
    readLines: {},
    history: [],
    deferred: [],        // conséquences différées en attente
    rewards: {},         // anti-farming : identifiants de récompense consommés
    chapterGains: {},    // plafonds par chapitre
    unlockedCG: [],
    achievements: [],
    codex: [],
    endings: [],
    tone: {},            // mémoire des tons employés par personnage
    settings: null,      // rempli par app.js
    persistent: {},      // repris de la mémoire de nouvelle partie enrichie
    ngPlus: !!opts.ngPlus
  };
}

/* ------------------------------------------------------------- mutations */

export function applyStat(st, key, delta, opt = {}) {
  if (!STAT_KEYS.includes(key)) return 0;
  // anti-farming : une récompense identifiée n'est accordée qu'une fois
  if (opt.rewardId) {
    if (st.rewards[opt.rewardId]) return 0;
    st.rewards[opt.rewardId] = true;
  }
  // plafond de gain par chapitre et par statistique
  const ck = `${st.chapter}:${key}`;
  const gained = st.chapterGains[ck] || 0;
  let d = delta;
  if (d > 0) {
    const cap = 3;
    if (gained >= cap) d = 0;
    else if (gained + d > cap) d = cap - gained;
    // rendements décroissants au-delà de 7
    if (st.stats[key] >= 7 && d > 0) d = Math.max(0, d - 1);
    st.chapterGains[ck] = gained + Math.max(0, d);
  }
  const before = st.stats[key];
  st.stats[key] = Math.max(0, Math.min(10, before + d));
  const real = st.stats[key] - before;
  if (real) bus.emit('stat:changed', { key, delta: real, value: st.stats[key] });
  return real;
}

export function applyRel(st, charId, patch) {
  const r = st.relations[charId];
  if (!r) return;
  Object.entries(patch).forEach(([k, v]) => {
    if (k === 'narrative' || k === 'routeStatus') { r[k] = v; return; }
    if (k === 'memory') { if (!r.memories.includes(v)) r.memories.push(v); return; }
    if (k === 'boundary') { if (!r.boundaries.includes(v)) r.boundaries.push(v); return; }
    if (k === 'secret') { if (!r.secrets.includes(v)) r.secrets.push(v); return; }
    const b = REL_BOUNDS[k];
    if (!b) return;
    r[k] = Math.max(b[0], Math.min(b[1], (r[k] ?? 0) + v));
  });
  bus.emit('rel:changed', { charId, relation: r });
}

export function addClue(st, id) {
  if (!st.clues.includes(id)) {
    st.clues.push(id);
    bus.emit('clue:found', id);
    return true;
  }
  return false;
}

export function addCG(st, id) {
  if (!st.unlockedCG.includes(id)) { st.unlockedCG.push(id); bus.emit('cg:unlocked', id); }
}

export function setPromise(st, id, status) {
  const prev = st.promises[id];
  st.promises[id] = status;
  if (prev !== status) bus.emit('promise:changed', { id, status, prev });
}

/* Applique un bloc d'effets complet. Retourne un journal lisible. */
export function applyEffects(st, fx, ctx = {}) {
  const log = [];
  if (!fx) return log;
  if (fx.stats) Object.entries(fx.stats).forEach(([k, v]) => {
    const r = applyStat(st, k, v, { rewardId: fx.rewardId ? fx.rewardId + ':' + k : null });
    if (r) log.push(`${STAT_LABELS[k]} ${r > 0 ? '+' : ''}${r}`);
  });
  if (fx.rel) Object.entries(fx.rel).forEach(([c, patch]) => {
    applyRel(st, c, patch);
    log.push(`${c} : relation modifiée`);
  });
  if (fx.flags) Object.entries(fx.flags).forEach(([k, v]) => { st.flags[k] = v; });
  if (fx.clues) fx.clues.forEach(c => { if (addClue(st, c)) log.push('Nouvel indice'); });
  if (fx.deductions) fx.deductions.forEach(d => { if (!st.deductions.includes(d)) st.deductions.push(d); });
  if (fx.falseLead && !st.falseLeads.includes(fx.falseLead)) st.falseLeads.push(fx.falseLead);
  if (fx.items) fx.items.forEach(i => { if (!st.items.includes(i)) st.items.push(i); });
  if (fx.codex) fx.codex.forEach(c => { if (!st.codex.includes(c)) st.codex.push(c); });
  if (fx.promises) Object.entries(fx.promises).forEach(([k, v]) => setPromise(st, k, v));
  if (fx.factions) Object.entries(fx.factions).forEach(([k, v]) => {
    st.factions[k] = Math.max(-100, Math.min(100, (st.factions[k] || 0) + v));
  });
  if (fx.routes) {
    (fx.routes.open || []).forEach(r => { if (st.routes[r] !== 'locked') st.routes[r] = 'open'; });
    (fx.routes.close || []).forEach(r => { st.routes[r] = 'closed'; });
    (fx.routes.lock || []).forEach(r => { st.routes[r] = 'locked'; });
  }
  if (fx.cg) addCG(st, fx.cg);
  if (fx.tone && ctx.speaker) {
    st.tone[ctx.speaker] = st.tone[ctx.speaker] || {};
    st.tone[ctx.speaker][fx.tone] = (st.tone[ctx.speaker][fx.tone] || 0) + 1;
  }
  if (fx.deferred) fx.deferred.forEach(d => st.deferred.push({ ...d, armedAt: st.scene }));
  if (fx.achievement) bus.emit('achievement:try', fx.achievement);
  return log;
}

/* Déclenche les conséquences différées dont l'échéance est atteinte. */
export function resolveDeferred(st, trigger) {
  const fired = [];
  st.deferred = st.deferred.filter(d => {
    const due = (d.chapter !== undefined && st.chapter >= d.chapter) ||
      (d.scene !== undefined && d.scene === trigger.scene) ||
      (d.trigger !== undefined && d.trigger === trigger.kind);
    if (!due) return true;
    if (d.when && !evaluate(d.when, st)) return d.keepIfUnmet !== false;
    applyEffects(st, d.effects || {});
    fired.push(d);
    return false;
  });
  if (fired.length) bus.emit('deferred:fired', fired);
  return fired;
}

export function relationSummary(r) {
  if (r.routeStatus === 'locked') return 'Rupture définitive';
  if (r.trust >= 60 && r.affinity >= 45 && r.attraction >= 55) return 'Attachement profond';
  if (r.trust >= 55 && r.respect >= 50) return 'Alliance solide';
  if (r.distrust >= 55) return 'Méfiance installée';
  if (r.tension >= 60) return 'Tension ouverte';
  if (r.affinity >= 30) return 'Proximité';
  if (r.affinity <= -30) return 'Hostilité';
  return 'Relation incertaine';
}
