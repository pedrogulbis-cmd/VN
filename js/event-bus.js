/* Bus d'événements minimal : découple moteur, UI, audio et sauvegarde. */
export const bus = {
  _m: new Map(),
  on(evt, fn) { (this._m.get(evt) || this._m.set(evt, []).get(evt)).push(fn); return () => this.off(evt, fn); },
  off(evt, fn) { const a = this._m.get(evt); if (a) { const i = a.indexOf(fn); if (i >= 0) a.splice(i, 1); } },
  emit(evt, data) { (this._m.get(evt) || []).forEach(fn => { try { fn(data); } catch (e) { console.error('[bus]', evt, e); } }); }
};
