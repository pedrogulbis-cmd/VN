/* Conséquences différées + notifications lisibles. */
import { bus } from './event-bus.js';
import { STAT_LABELS } from './state.js';

export const Consequences = {
  state: null, labels: null,
  init(state, labels) {
    this.state = state; this.labels = labels;
    bus.on('deferred:fired', list => {
      list.forEach(d => {
        if (d.note) bus.emit('toast', { kind: 'consequence', text: d.note });
      });
    });
    bus.on('stat:changed', ({ key, delta }) => {
      bus.emit('toast', { kind: 'stat', text: `${STAT_LABELS[key]} ${delta > 0 ? '+' : ''}${delta}` });
    });
    bus.on('promise:changed', ({ id, status }) => {
      const label = (this.labels?.promises || {})[id] || id;
      const fr = { made: 'promesse faite', kept: 'promesse tenue', broken: 'promesse brisée' }[status] || status;
      bus.emit('toast', { kind: status === 'broken' ? 'bad' : 'promise', text: `${label} — ${fr}` });
    });
    bus.on('clue:found', id => {
      const label = (this.labels?.clues || {})[id] || id;
      bus.emit('toast', { kind: 'clue', text: 'Indice : ' + label });
    });
  },
  bind(state) { this.state = state; },
  pending() { return this.state ? this.state.deferred.length : 0; }
};
