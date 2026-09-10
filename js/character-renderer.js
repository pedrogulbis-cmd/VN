/* Mise en scène des sprites : jusqu'à 3 personnages, 5 positions, focus. */
import { Assets } from './asset-manager.js';
import { bus } from './event-bus.js';

const POSITIONS = { 'far-left': 12, 'left': 27, 'center': 50, 'right': 73, 'far-right': 88 };

export const CharacterRenderer = {
  root: null,
  current: new Map(),   // id -> {el, img, spec}
  reduceMotion: false,

  init(root) { this.root = root; },

  clear() {
    this.current.forEach(c => c.el.remove());
    this.current.clear();
  },

  /* specs : tableau d'objets de scène. Diff appliqué : entrée / sortie / mise à jour. */
  set(specs = [], speaker) {
    const wanted = new Set(specs.map(s => s.id));
    // sorties
    [...this.current.keys()].forEach(id => {
      if (!wanted.has(id)) this.exit(id);
    });
    specs.forEach((spec, i) => this.upsert(spec, i));
    this.focus(speaker);
  },

  upsert(spec, order) {
    const res = Assets.sprite(spec.id, spec);
    if (!res) return;
    let entry = this.current.get(spec.id);
    if (!entry) {
      const el = document.createElement('div');
      el.className = 'sprite enter';
      el.dataset.char = spec.id;
      const img = document.createElement('img');
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      img.decoding = 'async';
      img.addEventListener('error', () => {
        el.classList.add('sprite-broken');
        bus.emit('asset:broken', res.src);
      });
      el.appendChild(img);
      this.root.appendChild(el);
      entry = { el, img, spec: {} };
      this.current.set(spec.id, entry);
      if (this.reduceMotion) el.classList.remove('enter');
      else requestAnimationFrame(() => el.classList.remove('enter'));
    }
    if (entry.img.getAttribute('src') !== res.src) {
      // changement d'expression sans flash : on charge puis on échange
      const pre = new Image();
      pre.onload = () => { entry.img.src = res.src; };
      pre.onerror = () => { entry.img.src = res.src; };
      pre.src = res.src;
      if (!entry.img.src) entry.img.src = res.src;
    }
    const pos = POSITIONS[spec.position] ?? 50;
    entry.el.style.setProperty('--x', pos + '%');
    entry.el.style.setProperty('--scale', spec.scale ?? 1);
    entry.el.style.setProperty('--opacity', spec.opacity ?? 1);
    entry.el.style.zIndex = String(10 + (spec.depth ?? order));
    entry.el.classList.toggle('flip', !!spec.flip);
    entry.el.classList.toggle('glow', !!spec.glow);
    if (spec.shake && !this.reduceMotion) {
      entry.el.classList.remove('shake');
      void entry.el.offsetWidth;
      entry.el.classList.add('shake');
    }
    entry.spec = spec;
  },

  exit(id) {
    const e = this.current.get(id);
    if (!e) return;
    this.current.delete(id);
    e.el.classList.add('leave');
    const done = () => e.el.remove();
    if (this.reduceMotion) done(); else setTimeout(done, 320);
  },

  /* Le personnage qui parle est mis en avant, les autres en retrait. */
  focus(speaker) {
    this.current.forEach((e, id) => {
      const active = !speaker || id === speaker;
      e.el.classList.toggle('inactive', !active);
      e.el.classList.toggle('active', active && !!speaker);
    });
  }
};
