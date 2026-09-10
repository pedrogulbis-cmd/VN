/* Résolution des chemins (compatible sous-chemin GitHub Pages) et repli sprite. */
import { bus } from './event-bus.js';

/* base = dossier du index.html courant : fonctionne sous /nom-du-repository/ */
export const BASE = (() => {
  const p = window.location.pathname;
  return p.endsWith('/') ? p : p.slice(0, p.lastIndexOf('/') + 1);
})();

export function url(rel) {
  if (!rel) return '';
  if (/^(https?:)?\/\//.test(rel) || rel.startsWith('data:')) return rel;
  return BASE + rel.replace(/^\.?\//, '');
}

export const Assets = {
  data: null, chars: null,
  missing: new Set(),

  init(assets, characters) { this.data = assets; this.chars = characters; },

  background(id) {
    const b = this.data.backgrounds[id];
    if (!b) { this.report('background', id); return null; }
    return { src: url(b.path), alt: b.label };
  },
  cg(id) {
    const c = this.data.cg[id];
    if (!c) { this.report('cg', id); return null; }
    return { src: url(c.path), alt: c.alt, title: c.title };
  },
  audio(kind, id) {
    const a = this.data.audio[kind] && this.data.audio[kind][id];
    if (!a) { this.report('audio:' + kind, id); return null; }
    return url(a.path);
  },

  /* Repli en cascade : état -> expression -> pose -> tenue -> défaut.
     Ne renvoie jamais null si le personnage existe. */
  sprite(charId, { outfit = 'default', pose = 'neutral', expression = 'calm', state = 'normal' } = {}) {
    const c = this.chars[charId];
    if (!c) { this.report('character', charId); return null; }
    const S = c.sprites;
    const tryGet = (o, p, e, s) => S[o] && S[o][p] && S[o][p][e] && S[o][p][e][s];

    let hit = tryGet(outfit, pose, expression, state);
    const chain = [];
    if (!hit) { chain.push('état'); hit = tryGet(outfit, pose, expression, 'normal'); }
    if (!hit) {
      chain.push('expression');
      let e = expression, guard = 0;
      while (!hit && guard++ < 8) {
        e = c.expressionFallback[e] || 'calm';
        hit = tryGet(outfit, pose, e, state) || tryGet(outfit, pose, e, 'normal');
        if (e === 'calm') break;
      }
    }
    if (!hit) { chain.push('pose'); hit = tryGet(outfit, 'neutral', expression, 'normal') || tryGet(outfit, 'neutral', 'calm', 'normal'); }
    if (!hit) { chain.push('tenue'); hit = tryGet('default', 'neutral', 'calm', 'normal'); }
    if (!hit) { this.report('sprite', `${charId}/${outfit}/${pose}/${expression}/${state}`); return null; }
    if (chain.length) bus.emit('asset:fallback', { charId, requested: { outfit, pose, expression, state }, chain });
    return { src: url(hit), fallbackChain: chain };
  },

  report(kind, id) {
    const key = kind + ':' + id;
    if (!this.missing.has(key)) {
      this.missing.add(key);
      console.warn('[assets] référence absente', key);
      bus.emit('asset:missing', key);
    }
  },

  preload(list) {
    return Promise.all(list.filter(Boolean).map(src => new Promise(res => {
      const i = new Image();
      i.onload = i.onerror = () => res(src);
      i.src = src;
    })));
  }
};
