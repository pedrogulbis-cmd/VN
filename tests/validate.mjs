#!/usr/bin/env node
/* Suite de validation — s'exécute avec `npm test` ou `node tests/validate.mjs`.
   Ne nécessite aucune dépendance. Sortie non nulle si une erreur bloquante. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = p => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const exists = p => fs.existsSync(path.join(ROOT, p));

let errors = 0, warnings = 0, checks = 0;
const fail = m => { errors++; console.error('  ✗ ' + m); };
const warn = m => { warnings++; console.warn('  ! ' + m); };
const ok = m => { checks++; console.log('  ✓ ' + m); };
const section = t => console.log('\n' + t);

/* ------------------------------------------------------------- chargement */
section('1. Fichiers de données');
const chapters = read('data/chapters.json');
const characters = read('data/characters.json').characters;
const assets = read('data/assets.json');
const endings = read('data/endings.json').endings;
const achievements = read('data/achievements.json').achievements;
const codex = read('data/codex.json');
const labels = read('data/labels.json');
read('data/relationships.json');
ok('les 8 fichiers JSON de données sont valides');

const story = {};
const dupes = [];
for (const f of chapters.files) {
  if (!exists(f)) { fail(`fichier de scénario absent : ${f}`); continue; }
  const part = read(f);
  for (const [id, sc] of Object.entries(part.scenes)) {
    if (story[id]) dupes.push(id);
    story[id] = sc;
  }
}
const sceneIds = Object.keys(story);
if (dupes.length) fail('identifiants de scène en double : ' + dupes.join(', '));
else ok(`${sceneIds.length} scènes chargées, aucun identifiant en double`);

/* --------------------------------------------------------- cohérence des id */
section('2. Cohérence structurelle des scènes');
for (const [id, sc] of Object.entries(story)) {
  if (sc.id !== id) fail(`scène « ${id} » : champ id incohérent (${sc.id})`);
  if (typeof sc.chapter !== 'number') fail(`scène « ${id} » : chapitre manquant`);
  if (!Array.isArray(sc.lines) || sc.lines.length === 0) fail(`scène « ${id} » : aucune ligne`);
  if (!sc.next && !sc.nextIf && !sc.choices && !sc.ending)
    fail(`scène « ${id} » : impasse (ni next, ni nextIf, ni choices, ni ending)`);
}
if (!errors) ok('toutes les scènes ont un chapitre, du texte et une suite');

/* -------------------------------------------------------- cibles de scènes */
section('3. Références de scènes');
const targets = [];
const push = (from, to, kind) => { if (to) targets.push({ from, to, kind }); };
for (const [id, sc] of Object.entries(story)) {
  push(id, sc.next, 'next');
  push(id, sc.redirect, 'redirect');
  (sc.nextIf || []).forEach(b => push(id, b.scene, 'nextIf'));
  (sc.choices || []).forEach(c => {
    push(id, c.next, `choix ${c.id}`);
    (c.nextIf || []).forEach(b => push(id, b.scene, `choix ${c.id}/nextIf`));
    if (c.deduction) {
      push(id, c.deduction.successScene, `déduction ${c.id}`);
      push(id, c.deduction.failScene, `déduction ${c.id}`);
    }
  });
}
const broken = targets.filter(t => !story[t.to]);
if (broken.length) broken.forEach(b => fail(`${b.from} → « ${b.to} » (${b.kind}) : scène inexistante`));
else ok(`${targets.length} transitions pointent toutes vers une scène existante`);

if (!story[chapters.start]) fail(`scène de départ « ${chapters.start} » introuvable`);
else ok('scène de départ valide');
for (const c of chapters.list) {
  if (!story[c.entry]) fail(`chapitre ${c.number} : entrée « ${c.entry} » introuvable`);
}

/* --------------------------------------------------------- accessibilité */
section('4. Accessibilité du graphe');
const reach = new Set();
const stack = [chapters.start];
while (stack.length) {
  const id = stack.pop();
  if (reach.has(id) || !story[id]) continue;
  reach.add(id);
  targets.filter(t => t.from === id).forEach(t => stack.push(t.to));
}
const orphans = sceneIds.filter(id => !reach.has(id));
if (orphans.length) orphans.forEach(o => fail(`scène inatteignable depuis le début : ${o}`));
else ok(`les ${reach.size} scènes sont atteignables depuis la scène de départ`);

const reachableEndings = new Set();
for (const id of reach) if (story[id].ending) reachableEndings.add(story[id].ending);
for (const [id, sc] of Object.entries(story))
  (sc.choices || []).forEach(c => { if (c.ending && reach.has(id)) reachableEndings.add(c.ending); });
const missingEnd = Object.keys(endings).filter(e => !reachableEndings.has(e));
if (missingEnd.length) fail('fins déclarées mais inatteignables : ' + missingEnd.join(', '));
else ok(`${reachableEndings.size} fins atteignables (minimum requis : 5)`);
if (reachableEndings.size < 5) fail('moins de 5 fins atteignables');
const undeclared = [...reachableEndings].filter(e => !endings[e]);
if (undeclared.length) fail('fins référencées mais non déclarées : ' + undeclared.join(', '));

/* ------------------------------------------------------------------ choix */
section('5. Choix');
let nChoices = 0, nConditional = 0, nSecret = 0, nIrrev = 0, nDeduction = 0, nTimed = 0;
const choiceIds = new Set();
for (const [id, sc] of Object.entries(story)) {
  for (const c of sc.choices || []) {
    nChoices++;
    if (choiceIds.has(c.id)) fail(`identifiant de choix en double : ${c.id}`);
    choiceIds.add(c.id);
    if (!c.text) fail(`choix ${c.id} sans texte`);
    if (c.requires || c.visibleIf) nConditional++;
    if (c.secret) nSecret++;
    if (c.irreversible) nIrrev++;
    if (c.deduction) nDeduction++;
    if (c.timed) {
      nTimed++;
      if (!c.timeoutChoice) fail(`choix chronométré ${c.id} sans timeoutChoice`);
      else if (!(sc.choices || []).some(x => x.id === c.timeoutChoice))
        fail(`choix ${c.id} : timeoutChoice « ${c.timeoutChoice} » absent de la scène`);
    }
    if (c.requires && !c.lockedHint && !c.hideWhenLocked && !c.secret)
      warn(`choix ${c.id} : verrouillable sans lockedHint`);
    if (!c.next && !c.nextIf && !c.ending && !c.deduction)
      fail(`choix ${c.id} : aucune suite`);
  }
}
ok(`${nChoices} choix — ${nConditional} conditionnels, ${nSecret} secrets, ${nIrrev} irréversibles, ${nDeduction} déductions, ${nTimed} chronométrés`);
if (nChoices < 25) fail('moins de 25 choix significatifs');
if (nConditional < 10) fail('moins de 10 choix conditionnels');

/* ----------------------------------------------------- effets et libellés */
section('6. Effets, conséquences différées et libellés');
const STATS = Object.keys(labels.stats);
const CHARS = Object.keys(characters);
let nDeferred = 0;
const usedClues = new Set(), usedDed = new Set(), usedProm = new Set(), usedCG = new Set();

function checkEffects(where, fx) {
  if (!fx) return;
  Object.keys(fx.stats || {}).forEach(k => {
    if (!STATS.includes(k)) fail(`${where} : statistique inconnue « ${k} »`);
  });
  Object.keys(fx.rel || {}).forEach(k => {
    if (!CHARS.includes(k)) fail(`${where} : personnage inconnu « ${k} »`);
  });
  (fx.clues || []).forEach(c => {
    usedClues.add(c);
    if (!labels.clues[c]) fail(`${where} : indice « ${c} » sans libellé`);
    if (!labels.clueDetails[c]) fail(`${where} : indice « ${c} » sans fiche détaillée`);
  });
  (fx.deductions || []).forEach(d => {
    usedDed.add(d);
    if (!labels.deductions[d]) fail(`${where} : déduction « ${d} » sans libellé`);
    if (!labels.deductionDetails[d]) fail(`${where} : déduction « ${d} » sans fiche`);
  });
  Object.keys(fx.promises || {}).forEach(p => {
    usedProm.add(p);
    if (!labels.promises[p]) fail(`${where} : promesse « ${p} » sans libellé`);
  });
  (fx.items || []).forEach(i => { if (!labels.items[i]) fail(`${where} : objet « ${i} » sans libellé`); });
  (fx.codex || []).forEach(c => {
    if (!codex.entries.some(e => e.id === c)) fail(`${where} : entrée de codex inconnue « ${c} »`);
  });
  if (fx.cg) { usedCG.add(fx.cg); if (!assets.cg[fx.cg]) fail(`${where} : CG inconnu « ${fx.cg} »`); }
  if (fx.achievement && !achievements[fx.achievement]) fail(`${where} : succès inconnu « ${fx.achievement} »`);
  if (fx.falseLead && !labels.falseLeads[fx.falseLead]) fail(`${where} : fausse piste sans libellé « ${fx.falseLead} »`);
  Object.entries(fx.rel || {}).forEach(([c, patch]) => {
    if (patch.memory && !labels.memories[patch.memory]) fail(`${where} : souvenir sans libellé « ${patch.memory} »`);
    if (patch.boundary && !labels.boundaries[patch.boundary]) fail(`${where} : limite sans libellé « ${patch.boundary} »`);
  });
  (fx.deferred || []).forEach(d => {
    nDeferred++;
    if (d.chapter === undefined && d.scene === undefined && d.trigger === undefined)
      fail(`${where} : conséquence différée sans échéance`);
    if (d.scene && !story[d.scene]) fail(`${where} : conséquence différée vers une scène inconnue`);
    if (!d.note) warn(`${where} : conséquence différée sans note lisible`);
    checkEffects(where + '/deferred', d.effects);
  });
}

for (const [id, sc] of Object.entries(story)) {
  checkEffects(`scène ${id}/enter`, sc.enter);
  (sc.lines || []).forEach((l, i) => checkEffects(`scène ${id}/ligne ${i}`, l.effects));
  (sc.choices || []).forEach(c => {
    checkEffects(`choix ${c.id}`, c.effects);
    if (c.deduction) {
      checkEffects(`choix ${c.id}/succès`, c.deduction.successEffects);
      checkEffects(`choix ${c.id}/échec`, c.deduction.failEffects);
    }
  });
  (sc.codex || []).forEach(c => {
    if (!codex.entries.some(e => e.id === c)) fail(`scène ${id} : entrée de codex inconnue « ${c} »`);
  });
}
ok(`${usedClues.size} indices, ${usedDed.size} déductions, ${usedProm.size} promesses, tous libellés`);
ok(`${nDeferred} conséquences différées déclarées`);
if (nDeferred < 5) fail('moins de 5 conséquences différées');

/* --------------------------------------------------------------- conditions */
section('7. Conditions');
const CONDITION_KEYS = ['all', 'any', 'not', 'stat', 'rel', 'flag', 'clue', 'deduction',
  'item', 'seen', 'promise', 'route', 'faction', 'persistent', 'ending', 'chapter',
  'op', 'value', 'field', 'status'];
let nCond = 0, hasAll = false, hasAny = false, hasNot = false;
function checkCond(where, c) {
  if (!c || typeof c !== 'object') return;
  nCond++;
  if (c.all) hasAll = true;
  if (c.any) hasAny = true;
  if (c.not) hasNot = true;
  Object.keys(c).forEach(k => {
    if (!CONDITION_KEYS.includes(k)) fail(`${where} : clause de condition inconnue « ${k} »`);
  });
  if (c.stat && !STATS.includes(c.stat)) fail(`${where} : statistique inconnue « ${c.stat} »`);
  if (c.rel && !CHARS.includes(c.rel)) fail(`${where} : personnage inconnu « ${c.rel} »`);
  if (c.clue && !labels.clues[c.clue]) fail(`${where} : indice inconnu « ${c.clue} »`);
  if (c.deduction && !labels.deductions[c.deduction]) fail(`${where} : déduction inconnue « ${c.deduction} »`);
  if (c.promise && !labels.promises[c.promise]) fail(`${where} : promesse inconnue « ${c.promise} »`);
  if (c.seen && !story[c.seen]) fail(`${where} : scène inconnue « ${c.seen} »`);
  (c.all || []).forEach(x => checkCond(where, x));
  (c.any || []).forEach(x => checkCond(where, x));
  if (c.not) checkCond(where, c.not);
}
for (const [id, sc] of Object.entries(story)) {
  checkCond(`scène ${id}`, sc.conditions);
  (sc.lines || []).forEach((l, i) => checkCond(`scène ${id}/ligne ${i}`, l.condition));
  (sc.nextIf || []).forEach(b => checkCond(`scène ${id}/nextIf`, b.when));
  (sc.choices || []).forEach(c => {
    checkCond(`choix ${c.id}/requires`, c.requires);
    checkCond(`choix ${c.id}/visibleIf`, c.visibleIf);
    checkCond(`choix ${c.id}/revealIf`, c.revealIf);
    (c.nextIf || []).forEach(b => checkCond(`choix ${c.id}/nextIf`, b.when));
    if (c.deduction) checkCond(`choix ${c.id}/deduction`, c.deduction.requires);
  });
}
ok(`${nCond} conditions vérifiées`);
if (!(hasAll && hasAny && hasNot)) fail('les trois opérateurs all/any/not ne sont pas tous utilisés');
else ok('opérateurs AND, OR et NOT tous employés');

/* ------------------------------------------------------------------ assets */
section('8. Références d’assets');
let missingAssets = 0;
for (const [id, sc] of Object.entries(story)) {
  const bgs = [sc.background, sc.bgVariant, ...(sc.lines || []).map(l => l.background)].filter(Boolean);
  bgs.forEach(b => { if (!assets.backgrounds[b]) { fail(`scène ${id} : décor inconnu « ${b} »`); missingAssets++; } });
  const musics = [sc.music, ...(sc.lines || []).map(l => l.music)].filter(Boolean);
  musics.forEach(m => { if (!assets.audio.music[m]) { fail(`scène ${id} : musique inconnue « ${m} »`); missingAssets++; } });
  if (sc.ambiance && !assets.audio.ambiance[sc.ambiance]) { fail(`scène ${id} : ambiance inconnue « ${sc.ambiance} »`); missingAssets++; }
  (sc.lines || []).forEach((l, i) => {
    if (l.sfx && !assets.audio.sfx[l.sfx]) { fail(`scène ${id}/ligne ${i} : bruitage inconnu « ${l.sfx} »`); missingAssets++; }
    if (l.cg && !assets.cg[l.cg]) { fail(`scène ${id}/ligne ${i} : CG inconnu « ${l.cg} »`); missingAssets++; }
  });
  if (sc.cg && !assets.cg[sc.cg]) { fail(`scène ${id} : CG inconnu « ${sc.cg} »`); missingAssets++; }
  const speakers = [sc.speaker, ...(sc.lines || []).map(l => l.speaker)].filter(Boolean);
  speakers.forEach(s => { if (!characters[s]) fail(`scène ${id} : locuteur inconnu « ${s} »`); });
}
if (!missingAssets) ok('tous les décors, musiques, ambiances, bruitages et CG référencés existent');

/* ------------------------------------------------------------ sprites réels */
section('9. Sprites et repli d’expression');
let spriteChecked = 0, spriteFallback = 0;
function resolveSprite(cid, spec) {
  const c = characters[cid];
  if (!c) return null;
  const S = c.sprites;
  const g = (o, p, e, s) => S[o] && S[o][p] && S[o][p][e] && S[o][p][e][s];
  const outfit = spec.outfit || 'default', pose = spec.pose || 'neutral';
  const state = spec.state || 'normal';
  let e = spec.expression || 'calm';
  let hit = g(outfit, pose, e, state) || g(outfit, pose, e, 'normal');
  let guard = 0;
  while (!hit && guard++ < 8) {
    e = c.expressionFallback[e] || 'calm';
    hit = g(outfit, pose, e, state) || g(outfit, pose, e, 'normal');
    if (e === 'calm') break;
  }
  if (!hit) hit = g('default', 'neutral', 'calm', 'normal');
  return hit;
}
for (const [id, sc] of Object.entries(story)) {
  const specs = [...(sc.characters || [])];
  (sc.lines || []).forEach(l => (l.set || []).forEach(s => specs.push(s)));
  for (const s of specs) {
    if (!characters[s.id]) { fail(`scène ${id} : personnage inconnu « ${s.id} »`); continue; }
    spriteChecked++;
    const direct = characters[s.id].sprites?.[s.outfit || 'default']?.[s.pose || 'neutral']?.[s.expression || 'calm']?.[s.state || 'normal'];
    const res = resolveSprite(s.id, s);
    if (!res) fail(`scène ${id} : aucun sprite résolu pour ${s.id}`);
    else if (!direct) spriteFallback++;
    if (res && !exists(res)) fail(`scène ${id} : fichier sprite absent ${res}`);
  }
}
ok(`${spriteChecked} références de sprite résolues (${spriteFallback} via repli)`);

/* ---------------------------------------------- existence physique des fichiers */
section('10. Fichiers présents sur le disque');
let absent = 0;
for (const b of Object.values(assets.backgrounds)) if (!exists(b.path)) { fail('décor absent : ' + b.path); absent++; }
for (const c of Object.values(assets.cg)) if (!exists(c.path)) { fail('CG absent : ' + c.path); absent++; }
for (const k of ['music', 'ambiance', 'sfx'])
  for (const a of Object.values(assets.audio[k])) if (!exists(a.path)) { fail('audio absent : ' + a.path); absent++; }
let spriteFiles = 0;
for (const c of Object.values(characters))
  for (const o of Object.values(c.sprites))
    for (const p of Object.values(o))
      for (const e of Object.values(p))
        for (const f of Object.values(e)) { spriteFiles++; if (!exists(f)) { absent++; if (absent < 6) fail('sprite absent : ' + f); } }
if (!absent) ok(`${spriteFiles} sprites + décors + CG + audio : tous présents sur le disque`);

['index.html', 'css/main.css', 'css/mobile.css', 'css/desktop.css', 'css/animations.css',
 'css/accessibility.css', 'js/app.js', 'js/engine.js', 'js/state.js', 'js/save-manager.js',
 'js/ui-manager.js', 'js/asset-manager.js', 'js/audio-manager.js', 'js/condition-parser.js',
 'js/scene-renderer.js', 'js/character-renderer.js', 'js/accessibility-manager.js',
 'js/achievement-manager.js', 'js/consequence-manager.js', 'js/event-bus.js',
 'assets/ui/favicon.svg', 'assets/ui/icon.webp', 'docs/asset.md'].forEach(f => {
  if (!exists(f)) fail('fichier attendu absent : ' + f);
});
ok('fichiers de code et d’interface présents');

/* ---------------------------------------------------------- chemins relatifs */
section('11. Compatibilité sous-répertoire (GitHub Pages)');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const absolute = [...html.matchAll(/(?:src|href)="\/(?!\/)/g)];
if (absolute.length) fail(`${absolute.length} chemin(s) absolu(s) dans index.html : incompatibles avec /nom-du-depot/`);
else ok('index.html n’utilise que des chemins relatifs');
const jsonPaths = [];
Object.values(assets.backgrounds).forEach(b => jsonPaths.push(b.path));
Object.values(assets.cg).forEach(c => jsonPaths.push(c.path));
if (jsonPaths.some(p => p.startsWith('/'))) fail('chemins absolus dans assets.json');
else ok('assets.json n’utilise que des chemins relatifs');

/* --------------------------------------------------------- logique du moteur */
section('12. Logique du moteur (exécution réelle)');
const { evaluate } = await import('../js/condition-parser.js');
const base = {
  stats: { courage: 5, empathie: 2, perspicacite: 7, influence: 3, sangfroid: 4, ingeniosite: 6, integrite: 6 },
  relations: { kael: { affinity: 50, trust: 60, attraction: 60 }, noam: { affinity: 10, trust: 20, attraction: 5 }, ysee: {}, damien: {}, theo: {} },
  flags: { solitaire: true }, clues: ['clue_nom_efface'], deductions: ['ded_dissolution'],
  items: [], seenScenes: { p01_archives: 1 }, promises: { prom_noam_verite: 'kept' },
  routes: { secret: 'open', kael: 'open' }, factions: { bureau: 10 }, persistent: {}, chapter: 4
};
const cases = [
  [{ stat: 'perspicacite', op: '>=', value: 7 }, true, 'stat >='],
  [{ stat: 'empathie', op: '>=', value: 4 }, false, 'stat insuffisante'],
  [{ all: [{ stat: 'courage', op: '>=', value: 4 }, { clue: 'clue_nom_efface' }] }, true, 'AND vrai'],
  [{ all: [{ stat: 'courage', op: '>=', value: 4 }, { clue: 'clue_inexistant' }] }, false, 'AND faux'],
  [{ any: [{ stat: 'empathie', op: '>=', value: 9 }, { deduction: 'ded_dissolution' }] }, true, 'OR vrai'],
  [{ not: { flag: 'solitaire' } }, false, 'NOT vrai → faux'],
  [{ not: { flag: 'inconnu' } }, true, 'NOT faux → vrai'],
  [{ all: [{ any: [{ route: 'secret' }, { route: 'kael' }] }, { not: { promise: 'prom_noam_verite', status: 'broken' } }] }, true, 'imbrication AND/OR/NOT'],
  [{ rel: 'kael', field: 'attraction', op: '>=', value: 55 }, true, 'relation multidimensionnelle'],
  [{ rel: 'noam', field: 'attraction', op: '>=', value: 55 }, false, 'relation sous le seuil'],
  [{ promise: 'prom_noam_verite', status: 'kept' }, true, 'promesse tenue'],
  [{ seen: 'p01_archives' }, true, 'scène déjà vue'],
  [{ chapter: 4, op: '>=', value: 4 }, true, 'chapitre'],
  [null, true, 'condition absente → vrai']
];
let condOk = 0;
cases.forEach(([c, expected, label]) => {
  const got = evaluate(c, base);
  if (got === expected) condOk++;
  else fail(`condition « ${label} » : attendu ${expected}, obtenu ${got}`);
});
ok(`${condOk}/${cases.length} cas d’évaluation de conditions corrects`);

const stateMod = await import('../js/state.js');
const st = stateMod.newState({ name: 'Test' });
st.chapter = 1;
stateMod.applyStat(st, 'courage', 2, { rewardId: 'r1' });
const afterFirst = st.stats.courage;
stateMod.applyStat(st, 'courage', 2, { rewardId: 'r1' });
if (st.stats.courage !== afterFirst) fail('anti-farming : la même récompense a été accordée deux fois');
else ok('anti-farming : une récompense identifiée n’est accordée qu’une fois');

const st2 = stateMod.newState({});
st2.chapter = 1;
let total = 0;
for (let i = 0; i < 6; i++) total += stateMod.applyStat(st2, 'empathie', 1, { rewardId: 'x' + i });
if (total > 3) fail(`plafond de chapitre non respecté (${total} points gagnés)`);
else ok(`plafond de gain par chapitre respecté (${total} points max)`);

const st3 = stateMod.newState({});
stateMod.applyRel(st3, 'kael', { affinity: -500 });
if (st3.relations.kael.affinity !== -100) fail('bornes de relation non appliquées');
else ok('bornes de relation appliquées (-100/+100)');

const st4 = stateMod.newState({});
st4.chapter = 2;
st4.flags.test = true;
stateMod.applyEffects(st4, { deferred: [{ id: 'd1', chapter: 4, when: { flag: 'test' }, effects: { stats: { courage: 1 } }, note: 'test' }] });
st4.chapter = 3;
stateMod.resolveDeferred(st4, { scene: 'x', kind: 'scene' });
if (st4.deferred.length !== 1) fail('conséquence différée déclenchée trop tôt');
st4.chapter = 4;
const beforeC = st4.stats.courage;
stateMod.resolveDeferred(st4, { scene: 'x', kind: 'scene' });
if (st4.deferred.length !== 0 || st4.stats.courage <= beforeC) fail('conséquence différée non déclenchée à l’échéance');
else ok('conséquences différées : déclenchement à l’échéance uniquement');

/* --------------------------------------------------------- sauvegardes */
section('13. Sauvegardes : validation et migration');
globalThis.localStorage = {
  _d: {}, getItem(k) { return this._d[k] ?? null; }, setItem(k, v) { this._d[k] = String(v); },
  removeItem(k) { delete this._d[k]; }
};
const sm = await import('../js/save-manager.js');
const bad = sm.SaveManager.importJSON('{ pas du json');
if (bad.ok) fail('un JSON invalide a été accepté');
else ok('JSON invalide rejeté avec message explicite');

const incomplete = sm.SaveManager.importJSON(JSON.stringify({ save: { version: 3, scene: 'x' } }));
if (incomplete.ok) fail('une sauvegarde incomplète a été acceptée');
else ok('sauvegarde incomplète rejetée (' + incomplete.errors[0] + ')');

const future = sm.SaveManager.importJSON(JSON.stringify({ save: { version: 99, scene: 'x', stats: {}, relations: {} } }));
if (future.ok) fail('une sauvegarde de version future a été acceptée');
else ok('sauvegarde de version future rejetée');

const v1 = { version: 1, name: 'Ancien', scene: 'p01_archives', stats: { courage: 4 }, relations: {}, affection: { kael: 40 } };
const migrated = sm.migrate(JSON.parse(JSON.stringify(v1)));
if (!migrated || migrated.version !== 3) fail('migration v1 → v3 échouée');
else if (migrated.relations.kael.affinity !== 40) fail('migration v1 : affection non convertie en affinité');
else ok('migration v1 → v3 : affection convertie en relation multidimensionnelle');

const round = sm.SaveManager.importJSON(sm.SaveManager.exportJSON(stateMod.newState({ name: 'Aller-retour' })));
if (!round.ok || round.save.name !== 'Aller-retour') fail('export/import : aller-retour non fidèle');
else ok('export/import JSON : aller-retour fidèle');

/* ---------------------------------------------------- parcours simulés */
section('14. Parcours simulés jusqu’à une fin');
function simulate(strategy, name) {
  const s = stateMod.newState({ name: 'Sim' });
  s.stats = { courage: 7, empathie: 7, perspicacite: 8, influence: 7, sangfroid: 7, ingeniosite: 7, integrite: 7 };
  let id = chapters.start, steps = 0, ending = null;
  const seen = [];
  while (id && steps++ < 400) {
    const sc = story[id];
    if (!sc) { fail(`${name} : scène ${id} introuvable`); return null; }
    seen.push(id);
    s.chapter = sc.chapter;
    s.seenScenes[id] = 1;
    if (sc.enter) stateMod.applyEffects(s, sc.enter);
    (sc.lines || []).forEach(l => { if ((!l.condition || evaluate(l.condition, s)) && l.effects) stateMod.applyEffects(s, l.effects); });
    if (sc.ending) { ending = sc.ending; break; }
    const opts = (sc.choices || []).filter(c => {
      if (c.secret && !evaluate(c.revealIf || c.requires, s)) return false;
      if (c.visibleIf && !evaluate(c.visibleIf, s)) return false;
      return !c.requires || evaluate(c.requires, s);
    });
    if (opts.length) {
      const c = strategy(opts, sc, s);
      if (c.deduction) {
        const good = evaluate(c.deduction.requires, s);
        stateMod.applyEffects(s, good ? (c.deduction.successEffects || c.effects) : (c.deduction.failEffects || {}));
        id = (good ? c.deduction.successScene : c.deduction.failScene) || c.next;
      } else {
        stateMod.applyEffects(s, c.effects);
        if (c.ending) { ending = c.ending; break; }
        let nxt = c.next;
        (c.nextIf || []).some(b => { if (evaluate(b.when, s)) { nxt = b.scene; return true; } return false; });
        id = nxt;
      }
      continue;
    }
    let nxt = sc.next;
    (sc.nextIf || []).some(b => { if (evaluate(b.when, s)) { nxt = b.scene; return true; } return false; });
    id = nxt;
  }
  if (steps >= 400) { fail(`${name} : boucle infinie détectée`); return null; }
  if (!ending) { fail(`${name} : parcours terminé sans fin (dernière scène ${seen[seen.length - 1]})`); return null; }
  ok(`${name} : ${seen.length} scènes → fin « ${endings[ending]?.title || ending} »`);
  return { ending, seen, state: s };
}
const first = (o) => o[0];
const last = (o) => o[o.length - 1];
const preferId = ids => (o) => o.find(c => ids.some(x => c.id.includes(x))) || o[0];

const runs = [];
runs.push(simulate(first, 'Parcours A (premier choix systématique)'));
runs.push(simulate(last, 'Parcours B (dernier choix systématique)'));
runs.push(simulate(preferId(['kael', 'complice', 'chaleureux']), 'Parcours C (orienté Kaël)'));
runs.push(simulate(preferId(['noam', 'sincere', 'institutionnel']), 'Parcours D (orienté Noam)'));
runs.push(simulate(preferId(['ysee', 'evacuer', 'organiser']), 'Parcours E (orienté coopération)'));
runs.push(simulate(preferId(['ded', 'quatrieme', 'dissoudre', 'secret']), 'Parcours F (orienté vérité/secret)'));
const gotEndings = new Set(runs.filter(Boolean).map(r => r.ending));
ok(`${gotEndings.size} fins distinctes atteintes en simulation : ${[...gotEndings].join(', ')}`);

/* ------------------------------------------------------ volumétrie exigée */
section('15. Volumétrie du cahier des charges');
const nScenes = sceneIds.length;
const nLines = Object.values(story).reduce((a, s) => a + (s.lines || []).length, 0);
const nWords = Object.values(story).reduce((a, s) =>
  a + (s.lines || []).reduce((b, l) => b + String(l.text || '').split(/\s+/).length, 0), 0);
const chaptersCovered = new Set(Object.values(story).map(s => s.chapter));
console.log(`  · ${nScenes} scènes, ${nLines} répliques, ~${nWords} mots de narration`);
console.log(`  · ${Object.keys(characters).length} personnages majeurs, ${Object.keys(assets.cg).length} CG, ${Object.keys(assets.backgrounds).length} décors`);
console.log(`  · ${Object.keys(assets.audio.music).length} musiques, ${Object.keys(assets.audio.ambiance).length} ambiances, ${Object.keys(assets.audio.sfx).length} bruitages`);
const req = [
  [nScenes >= 60, `au moins 60 scènes (${nScenes})`],
  [chaptersCovered.size >= 7, `prologue + 5 chapitres + épilogue (${chaptersCovered.size} niveaux)`],
  [nChoices >= 25, `au moins 25 choix (${nChoices})`],
  [nConditional >= 10, `au moins 10 choix conditionnels (${nConditional})`],
  [nDeferred >= 5, `au moins 5 conséquences différées (${nDeferred})`],
  [Object.keys(characters).length >= 5, `au moins 5 personnages majeurs`],
  [Object.keys(assets.backgrounds).length >= 8, `au moins 8 décors`],
  [Object.keys(assets.cg).length >= 4, `au moins 4 CG`],
  [reachableEndings.size >= 5, `au moins 5 fins`]
];
req.forEach(([passed, label]) => passed ? ok(label) : fail(label));

/* ------------------------------------------------------------------ bilan */
console.log(`\n${'─'.repeat(60)}`);
console.log(`Vérifications réussies : ${checks}   Avertissements : ${warnings}   Erreurs : ${errors}`);
if (errors) { console.error('\nÉCHEC : corrigez les erreurs ci-dessus.'); process.exit(1); }
console.log('\nTous les tests passent.');
