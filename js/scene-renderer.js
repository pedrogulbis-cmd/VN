/* Décors, CG, effets d'ambiance et transitions. Tous réductibles/désactivables. */
import { Assets } from './asset-manager.js';
import { bus } from './event-bus.js';
import { CharacterRenderer } from './character-renderer.js';

export const SceneRenderer = {
  bgA: null, bgB: null, fxLayer: null, cgLayer: null, stage: null, flashEl: null,
  useA: true,
  reduceMotion: false, noFlash: false,
  _bgId: null, _weather: null,

  init({ stage, bgA, bgB, fx, cg, flash }) {
    this.stage = stage; this.bgA = bgA; this.bgB = bgB;
    this.fxLayer = fx; this.cgLayer = cg; this.flashEl = flash;
  },

  setBackground(id) {
    if (id === this._bgId) return;
    const b = Assets.background(id);
    this._bgId = id;
    const next = this.useA ? this.bgB : this.bgA;
    const prev = this.useA ? this.bgA : this.bgB;
    if (!b) { next.style.backgroundImage = 'none'; next.style.background = '#05060c'; }
    else next.style.backgroundImage = `url("${b.src}")`;
    next.setAttribute('data-alt', b ? b.alt : 'décor indisponible');
    next.classList.add('show');
    prev.classList.remove('show');
    this.useA = !this.useA;
  },

  showCG(id) {
    const c = Assets.cg(id);
    if (!c) return;
    this.cgLayer.innerHTML = '';
    const fig = document.createElement('figure');
    fig.className = 'cg-figure';
    const img = document.createElement('img');
    img.src = c.src;
    img.alt = c.alt;
    const cap = document.createElement('figcaption');
    cap.className = 'sr-only';
    cap.textContent = c.alt;
    fig.append(img, cap);
    this.cgLayer.appendChild(fig);
    this.cgLayer.classList.add('show');
    this.cgLayer.setAttribute('aria-hidden', 'false');
    bus.emit('cg:shown', id);
  },

  hideCG() {
    this.cgLayer.classList.remove('show');
    this.cgLayer.setAttribute('aria-hidden', 'true');
    setTimeout(() => { if (!this.cgLayer.classList.contains('show')) this.cgLayer.innerHTML = ''; }, 400);
  },

  /* --------------------------------------------------------------- météo */
  weather(kind) {
    if (this._weather === kind) return;
    this._weather = kind;
    this.fxLayer.className = 'fx-layer';
    this.fxLayer.innerHTML = '';
    if (!kind || this.reduceMotion) return;
    this.fxLayer.classList.add('fx-' + kind);
    const n = kind === 'particles' ? 26 : kind === 'mist' ? 8 : 60;
    for (let i = 0; i < n; i++) {
      const d = document.createElement('span');
      d.style.setProperty('--i', i);
      d.style.left = (Math.random() * 100).toFixed(2) + '%';
      d.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
      d.style.animationDuration = (kind === 'rain' ? 0.7 + Math.random() * 0.6
        : 5 + Math.random() * 6).toFixed(2) + 's';
      this.fxLayer.appendChild(d);
    }
  },

  /* -------------------------------------------------------------- effets */
  effect(name) {
    if (!name) return;
    if (this.reduceMotion && ['shake', 'zoom', 'impact'].includes(name)) return;
    switch (name) {
      case 'shake': this._pulse(this.stage, 'shake', 480); break;
      case 'impact': this._pulse(this.stage, 'impact', 300); break;
      case 'zoom': this._pulse(this.stage, 'zoom', 900); break;
      case 'flash':
        if (this.noFlash) { this._pulse(this.stage, 'softflash', 500); break; }
        this._pulse(this.flashEl, 'on', 420); break;
      case 'darken': this._pulse(this.stage, 'darken', 1200); break;
      case 'silhouette': this.stage.classList.toggle('silhouette', true); break;
      case 'silhouette-off': this.stage.classList.remove('silhouette'); break;
      case 'parallax': this.stage.classList.add('parallax'); break;
      default: break;
    }
  },
  _pulse(el, cls, ms) {
    if (!el) return;
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), ms);
  },

  chapterTransition(title, subtitle) {
    return new Promise(res => {
      const el = document.getElementById('chapter-card');
      el.querySelector('.chapter-card__title').textContent = title;
      el.querySelector('.chapter-card__sub').textContent = subtitle || '';
      el.classList.add('show');
      el.setAttribute('aria-hidden', 'false');
      const wait = this.reduceMotion ? 900 : 2200;
      setTimeout(() => {
        el.classList.remove('show');
        el.setAttribute('aria-hidden', 'true');
        res();
      }, wait);
    });
  },

  applyScene(scene) {
    this.setBackground(scene.bgVariant || scene.background);
    this.weather(scene.weather || null);
    if (scene.cg) this.showCG(scene.cg); else this.hideCG();
    CharacterRenderer.set(scene.characters || [], scene.speaker);
    if (scene.effects) scene.effects.forEach(e => this.effect(e));
  }
};
