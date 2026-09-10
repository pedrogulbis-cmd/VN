/* Succès : évalués à chaque événement, jamais rétroactivement faux. */
import { bus } from './event-bus.js';
import { evaluate } from './condition-parser.js';

export const Achievements = {
  defs: {}, state: null,

  init(defs, state) {
    this.defs = defs; this.state = state;
    bus.on('choice:made', () => this.check());
    bus.on('scene:enter', () => this.check());
    bus.on('ending:reached', () => this.check());
    bus.on('clue:found', () => this.check());
    bus.on('achievement:try', id => this.grant(id));
  },

  bind(state) { this.state = state; },

  check() {
    if (!this.state) return;
    Object.entries(this.defs).forEach(([id, d]) => {
      if (this.state.achievements.includes(id)) return;
      if (d.condition && evaluate(d.condition, this.state)) this.grant(id);
    });
  },

  grant(id) {
    if (!this.state || this.state.achievements.includes(id)) return;
    const d = this.defs[id];
    if (!d) return;
    this.state.achievements.push(id);
    bus.emit('achievement:granted', { id, ...d });
  },

  list() {
    return Object.entries(this.defs).map(([id, d]) => ({
      id, ...d, unlocked: this.state ? this.state.achievements.includes(id) : false
    }));
  }
};
