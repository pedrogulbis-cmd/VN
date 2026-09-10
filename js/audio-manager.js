/* Audio : démarre après interaction, volumes séparés, fondus, jamais bloquant. */
import { bus } from './event-bus.js';
import { Assets } from './asset-manager.js';

export const Audio = {
  unlocked: false,
  volumes: { master: 0.8, music: 0.6, ambiance: 0.5, sfx: 0.7 },
  enabled: true,
  _music: null, _musicId: null,
  _amb: null, _ambId: null,
  _cache: new Map(),

  unlock() {
    if (this.unlocked) return;
    this.unlocked = true;
    bus.emit('audio:unlocked');
    if (this._pending) { this.playMusic(this._pending); this._pending = null; }
  },

  setVolume(k, v) {
    this.volumes[k] = Math.max(0, Math.min(1, v));
    if (this._music) this._music.volume = this.vol('music');
    if (this._amb) this._amb.volume = this.vol('ambiance');
  },
  vol(kind) { return this.enabled ? this.volumes.master * this.volumes[kind] : 0; },

  _make(src, loop, kind) {
    const a = new Audio_(src);
    a.loop = loop;
    a.volume = this.vol(kind);
    a.addEventListener('error', () => {
      console.warn('[audio] fichier indisponible, le jeu continue :', src);
      bus.emit('audio:missing', src);
    });
    return a;
  },

  playMusic(id, { fade = 900 } = {}) {
    if (!this.unlocked) { this._pending = id; return; }
    if (this._musicId === id) return;
    const src = id ? Assets.audio('music', id) : null;
    const old = this._music;
    if (old) this._fadeOut(old, fade);
    this._musicId = id;
    if (!src) { this._music = null; return; }
    const a = this._make(src, true, 'music');
    a.volume = 0;
    this._music = a;
    a.play().then(() => this._fadeIn(a, this.vol('music'), fade)).catch(() => { });
  },

  playAmbiance(id, { fade = 700 } = {}) {
    if (!this.unlocked) return;
    if (this._ambId === id) return;
    if (this._amb) this._fadeOut(this._amb, fade);
    this._ambId = id;
    const src = id ? Assets.audio('ambiance', id) : null;
    if (!src) { this._amb = null; return; }
    const a = this._make(src, true, 'ambiance');
    a.volume = 0;
    this._amb = a;
    a.play().then(() => this._fadeIn(a, this.vol('ambiance'), fade)).catch(() => { });
  },

  sfx(id) {
    if (!this.unlocked || !this.enabled) return;
    const src = Assets.audio('sfx', id);
    if (!src) return;
    const a = this._make(src, false, 'sfx');
    a.play().catch(() => { });
  },

  _fadeIn(a, target, ms) {
    const t0 = performance.now();
    const step = now => {
      const k = Math.min(1, (now - t0) / ms);
      a.volume = target * k;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },
  _fadeOut(a, ms) {
    const v0 = a.volume, t0 = performance.now();
    const step = now => {
      const k = Math.min(1, (now - t0) / ms);
      a.volume = v0 * (1 - k);
      if (k < 1) requestAnimationFrame(step); else { try { a.pause(); } catch (e) { } }
    };
    requestAnimationFrame(step);
  },

  pauseAll() { [this._music, this._amb].forEach(a => { if (a) try { a.pause(); } catch (e) { } }); },
  resumeAll() {
    if (!this.enabled) return;
    [this._music, this._amb].forEach(a => { if (a) a.play().catch(() => { }); });
  },
  setEnabled(v) {
    this.enabled = v;
    if (!v) this.pauseAll(); else this.resumeAll();
    if (this._music) this._music.volume = this.vol('music');
    if (this._amb) this._amb.volume = this.vol('ambiance');
  }
};
const Audio_ = window.Audio;
