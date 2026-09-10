/* Accessibilité : taille de texte, police, contraste, motion, clavier, ARIA. */
import { bus } from './event-bus.js';
import { SceneRenderer } from './scene-renderer.js';
import { CharacterRenderer } from './character-renderer.js';

export const DEFAULT_SETTINGS = {
  textSize: 100, dyslexicFont: false, highContrast: false,
  reduceMotion: false, noTransitions: false, noFlash: false,
  disableTimed: false, confirmCritical: true, hideStatToasts: false,
  textSpeed: 32, autoMode: false, autoDelay: 2200, skipRead: true,
  choiceMode: 'immersif',
  volumes: { master: 0.8, music: 0.6, ambiance: 0.5, sfx: 0.7 }, audioEnabled: true
};

export const A11y = {
  settings: { ...DEFAULT_SETTINGS },

  init(saved) {
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.settings = { ...DEFAULT_SETTINGS, reduceMotion: prefersReduce, ...(saved || {}) };
    this.apply();
  },

  set(key, value) {
    if (key.startsWith('volumes.')) this.settings.volumes[key.split('.')[1]] = value;
    else this.settings[key] = value;
    this.apply();
    bus.emit('settings:changed', this.settings);
  },

  apply() {
    const s = this.settings, r = document.documentElement;
    r.style.setProperty('--text-scale', s.textSize / 100);
    r.classList.toggle('font-dyslexic', s.dyslexicFont);
    r.classList.toggle('high-contrast', s.highContrast);
    r.classList.toggle('reduce-motion', s.reduceMotion);
    r.classList.toggle('no-transitions', s.noTransitions);
    SceneRenderer.reduceMotion = s.reduceMotion || s.noTransitions;
    SceneRenderer.noFlash = s.noFlash;
    CharacterRenderer.reduceMotion = s.reduceMotion || s.noTransitions;
  },

  announce(msg) {
    const el = document.getElementById('live-region');
    if (!el) return;
    el.textContent = '';
    setTimeout(() => { el.textContent = msg; }, 40);
  }
};
