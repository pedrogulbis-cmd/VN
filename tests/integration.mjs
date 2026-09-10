#!/usr/bin/env node
/* Test d'intégration : démarre réellement le jeu dans un DOM (jsdom),
   crée une partie, joue des scènes, teste sauvegarde/chargement et panneaux.
   Nécessite jsdom : npm run test:integration (voir README). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

let JSDOM;
try {
  ({ JSDOM } = require(process.env.JSDOM_PATH || 'jsdom'));
} catch (e) {
  console.log('jsdom absent — test d’intégration ignoré (npm i -D jsdom pour l’activer).');
  process.exit(0);
}

let errors = 0;
const ok = m => console.log('  ✓ ' + m);
const fail = m => { errors++; console.error('  ✗ ' + m); };
const assert = (cond, m) => cond ? ok(m) : fail(m);

/* --- on simule un déploiement sous /nom-du-repository/ --- */
const BASE_URL = 'https://example.github.io/les-serments-de-la-faille/';
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const dom = new JSDOM(html, { url: BASE_URL, pretendToBeVisual: true });
const { window } = dom;

/* fetch mappé sur le disque, en respectant le sous-répertoire */
window.fetch = async (url) => {
  let u = String(url).replace(BASE_URL, '');
  u = u.replace('/les-serments-de-la-faille/', '').replace(/^\//, '');
  const p = path.join(ROOT, decodeURIComponent(u));
  if (!fs.existsSync(p)) return { ok: false, status: 404, json: async () => ({}) };
  const txt = fs.readFileSync(p, 'utf8');
  return { ok: true, status: 200, json: async () => JSON.parse(txt), text: async () => txt };
};

/* audio et images neutralisés : le jeu doit fonctionner sans eux */
class FakeAudio {
  constructor(src) { this.src = src; this.volume = 1; this.loop = false; }
  play() { return Promise.resolve(); }
  pause() { }
  addEventListener() { }
}
window.Audio = FakeAudio;
class FakeImage {
  set src(v) { this._src = v; setTimeout(() => this.onload && this.onload(), 0); }
  get src() { return this._src; }
}
window.Image = FakeImage;
window.HTMLMediaElement && (window.HTMLMediaElement.prototype.play = () => Promise.resolve());
window.requestAnimationFrame = cb => setTimeout(() => cb(Date.now()), 0);
window.cancelAnimationFrame = id => clearTimeout(id);
if (!window.matchMedia) window.matchMedia = () => ({ matches: false, addEventListener() { } });
window.URL.createObjectURL = () => 'blob:x';
window.URL.revokeObjectURL = () => { };

/* on expose le DOM comme globals pour les modules ES */
for (const k of ['document', 'localStorage', 'location',
  'requestAnimationFrame', 'cancelAnimationFrame', 'fetch', 'Image', 'Audio',
  'HTMLElement', 'Node', 'Blob', 'CustomEvent', 'Event', 'getComputedStyle']) {
  try { globalThis[k] = window[k]; } catch (e) { /* propriété en lecture seule côté Node */ }
}
globalThis.window = window;
globalThis.document = window.document;

const imp = rel => import(pathToFileURL(path.join(ROOT, rel)).href);
const wait = ms => new Promise(r => setTimeout(r, ms));

console.log('\nTest d’intégration — démarrage du jeu dans un DOM simulé');
console.log('URL simulée :', BASE_URL);

/* --------------------------------------------------------------- amorçage */
await imp('js/app.js');
window.document.dispatchEvent(new window.Event('DOMContentLoaded'));
await wait(400);

const $ = s => window.document.querySelector(s);
assert($('#boot').hidden, 'écran de chargement masqué : toutes les données ont été chargées');
assert(!$('#title-screen').hidden, 'écran-titre affiché');

const { Assets, url: assetUrl } = await imp('js/asset-manager.js');
assert(assetUrl('assets/ui/icon.webp') === '/les-serments-de-la-faille/assets/ui/icon.webp',
  'les chemins sont résolus sous le sous-répertoire du dépôt');

/* ------------------------------------------------------- création de partie */
$('#btn-newgame').click();
await wait(60);
assert(!$('#creation').hidden, 'écran de création ouvert');
$('#pc-name').value = 'Testeur';
const plus = [...$('#pc-stats').querySelectorAll('.pc-btn')].filter(b => b.dataset.d === '1');
for (let i = 0; i < 5; i++) plus[i % plus.length].click();
assert($('#pc-start').disabled === false, 'les 5 points répartis débloquent le démarrage');
$('#pc-start').click();
await wait(300);

const { Engine } = await imp('js/engine.js');
assert($('#title-screen').hidden, 'écran-titre masqué après le démarrage');
assert(Engine.state && Engine.state.name === 'Testeur', 'le prénom saisi est bien appliqué');
assert(Engine.scene && Engine.scene.id === 'p01_archives', 'première scène chargée : ' + Engine.scene?.id);
assert($('#dialogue-text').textContent.length > 0, 'du texte est affiché dans la boîte de dialogue');
const bgStyle = $('#bg-a').style.backgroundImage + $('#bg-b').style.backgroundImage;
assert(bgStyle.includes('les-serments-de-la-faille/assets/backgrounds/'),
  'le décor est chargé avec un chemin correct sous le sous-répertoire');

/* ------------------------------------------------------------- lecture */
const { UI } = await imp('js/ui-manager.js');
const { A11y } = await imp('js/accessibility-manager.js');
A11y.set('textSpeed', 100);
let guard = 0;
while (!Engine.waitingChoice && guard++ < 40) { UI.tap(); await wait(5); }
assert(Engine.waitingChoice, 'la lecture avance jusqu’à un choix');
assert(!$('#choices').hidden && $('#choices').children.length >= 2,
  `${$('#choices').children.length} choix affichés`);

/* ------------------------------------------------------------ choix + effets */
const before = { ...Engine.state.stats };
$('#choices').querySelector('.choice').click();
await wait(120);
const changed = Object.keys(before).some(k => Engine.state.stats[k] !== before[k]);
assert(changed, 'le choix a réellement modifié une statistique');
assert(Engine.state.history.length === 1, 'la décision est enregistrée dans le journal');
assert(Engine.scene.id === 'p02_convocation', 'transition vers la scène suivante : ' + Engine.scene.id);

/* ------------------------------------------------- sprite réellement affiché */
guard = 0;
while (Engine.scene.id === 'p02_convocation' && !Engine.waitingChoice && guard++ < 30) { UI.tap(); await wait(5); }
await wait(80);
const sprite = $('#characters .sprite img');
assert(!!sprite && /assets\/characters\/character_noam_/.test(sprite.getAttribute('src') || ''),
  'le sprite du personnage présent est affiché : ' + (sprite?.getAttribute('src') || 'aucun'));

/* --------------------------------------------------------------- panneaux */
for (const p of ['stats', 'relations', 'clues', 'journal', 'codex', 'gallery', 'endings',
  'achievements', 'promises', 'deductions', 'history', 'saves', 'settings', 'credits']) {
  try {
    UI.openPanel(p);
    const body = $('#panel .panel__body');
    if (!body.children.length) fail(`panneau « ${p} » vide`);
  } catch (e) { fail(`panneau « ${p} » lève une erreur : ${e.message}`); }
}
UI.closePanel();
if (!errors) ok('les 14 panneaux s’ouvrent et affichent du contenu');

/* --------------------------------------------------- sauvegarde / chargement */
const { SaveManager } = await imp('js/save-manager.js');
Engine.state.stats.courage = 9;
SaveManager.saveSlot(1, Engine.state, 'test');
const sceneAtSave = Engine.scene.id;
guard = 0;
while (guard++ < 25 && !Engine.finished) {
  if (!$('#confirm').hidden) { $('#confirm .confirm__yes').click(); await wait(3); continue; }
  if (Engine.waitingChoice) $('#choices').querySelector('.choice:not(.locked)')?.click(); else UI.tap();
  await wait(5);
}
const movedOn = Engine.scene.id !== sceneAtSave;
assert(movedOn, 'la partie a continué au-delà du point de sauvegarde');
UI.loadState(SaveManager.loadSlot(1));
await wait(150);
assert(Engine.scene.id === sceneAtSave, 'le chargement restaure la scène exacte (' + Engine.scene.id + ')');
assert(Engine.state.stats.courage === 9, 'le chargement restaure les statistiques');

const json = SaveManager.exportJSON(Engine.state);
const res = SaveManager.importJSON(json);
assert(res.ok && res.save.scene === sceneAtSave, 'export puis import JSON conservent la position');

/* ------------------------------------------------------------ accessibilité */
A11y.set('textSize', 150);
assert(window.document.documentElement.style.getPropertyValue('--text-scale') === '1.5',
  'le réglage de taille de texte agit sur le document');
A11y.set('highContrast', true);
assert(window.document.documentElement.classList.contains('high-contrast'), 'contraste renforcé appliqué');
A11y.set('reduceMotion', true);
assert(window.document.documentElement.classList.contains('reduce-motion'), 'réduction des animations appliquée');
A11y.set('highContrast', false);

/* --------------------------------------------- repli de sprite sans fichier */
const fallback = Assets.sprite('kael', { outfit: 'default', pose: 'dynamic', expression: 'epilogue_good', state: 'wet' });
assert(!!fallback && !!fallback.src, 'une combinaison de sprite inexistante renvoie quand même une image (repli)');

/* ------------------------------------------------------- parcours long réel */
let steps = 0;
const visited = [];
while (!Engine.finished && steps++ < 1200) {
  if (visited[visited.length - 1] !== Engine.scene.id) visited.push(Engine.scene.id);
  if (!$('#confirm').hidden) { $('#confirm .confirm__yes').click(); await wait(2); continue; }
  if (Engine.waitingChoice) {
    const b = $('#choices').querySelector('.choice:not(.locked)');
    if (!b) { fail('aucun choix sélectionnable dans ' + Engine.scene.id); break; }
    b.click();
  } else UI.tap();
  await wait(2);
}
if (!Engine.finished) console.error('  dernières scènes : ' + visited.slice(-12).join(' → '));
assert(Engine.finished, `partie jouée jusqu’à une fin en ${steps} actions (${visited.length} scènes)`);
assert(!$('#ending-screen').hidden, 'écran de fin affiché : ' + $('.ending__title')?.textContent);
assert(SaveManager.loadPersistent().endings.length >= 1, 'la fin est enregistrée pour la galerie et le NG+');

console.log('\n' + '─'.repeat(60));
if (errors) { console.error(`Test d’intégration : ${errors} erreur(s).`); process.exit(1); }
console.log('Test d’intégration : tout est passé.');
process.exit(0);
