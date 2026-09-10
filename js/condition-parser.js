/* Évaluateur de conditions : AND / OR / NOT, comparaisons, imbrication.
   Toute condition inconnue renvoie false et journalise, jamais d'exception. */
const CMP = {
  '>=': (a, b) => a >= b, '<=': (a, b) => a <= b, '>': (a, b) => a > b,
  '<': (a, b) => a < b, '==': (a, b) => a === b, '!=': (a, b) => a !== b
};

export function evaluate(cond, st) {
  if (cond === undefined || cond === null) return true;
  if (typeof cond === 'boolean') return cond;
  if (Array.isArray(cond)) return cond.every(c => evaluate(c, st));
  if (cond.all) return cond.all.every(c => evaluate(c, st));
  if (cond.any) return cond.any.some(c => evaluate(c, st));
  if (cond.not) return !evaluate(cond.not, st);
  const op = CMP[cond.op || '>='] || CMP['>='];

  if (cond.stat !== undefined) return op(st.stats[cond.stat] ?? 0, cond.value);
  if (cond.rel !== undefined) {
    const r = st.relations[cond.rel];
    return r ? op(r[cond.field] ?? 0, cond.value) : false;
  }
  if (cond.flag !== undefined) {
    const v = st.flags[cond.flag];
    return cond.value === undefined ? !!v : v === cond.value;
  }
  if (cond.clue !== undefined) return st.clues.includes(cond.clue) === (cond.value !== false);
  if (cond.deduction !== undefined) return st.deductions.includes(cond.deduction) === (cond.value !== false);
  if (cond.item !== undefined) return st.items.includes(cond.item) === (cond.value !== false);
  if (cond.seen !== undefined) return !!st.seenScenes[cond.seen] === (cond.value !== false);
  if (cond.promise !== undefined) return (st.promises[cond.promise] || 'none') === (cond.status || 'kept');
  if (cond.route !== undefined) return (st.routes[cond.route] || 'closed') === (cond.status || 'open');
  if (cond.faction !== undefined) return op(st.factions[cond.faction] ?? 0, cond.value);
  if (cond.persistent !== undefined) {
    const v = st.persistent[cond.persistent];
    return cond.value === undefined ? !!v : v === cond.value;
  }
  if (cond.ending !== undefined) return st.persistent.endings?.includes(cond.ending) === (cond.value !== false);
  if (cond.chapter !== undefined) return op(st.chapter, cond.value);
  console.warn('[conditions] clause inconnue', cond);
  return false;
}

/* Description lisible d'une condition, pour le mode transparent. */
export function describe(cond, labels = {}) {
  if (!cond) return '';
  if (cond.all) return cond.all.map(c => describe(c, labels)).filter(Boolean).join(' et ');
  if (cond.any) return cond.any.map(c => describe(c, labels)).filter(Boolean).join(' ou ');
  if (cond.not) return 'pas de ' + describe(cond.not, labels);
  if (cond.stat) return `${labels.stats?.[cond.stat] || cond.stat} ${cond.op || '>='} ${cond.value}`;
  if (cond.rel) return `${labels.chars?.[cond.rel] || cond.rel} : ${labels.rel?.[cond.field] || cond.field} ${cond.op || '>='} ${cond.value}`;
  if (cond.clue) return `indice « ${labels.clues?.[cond.clue] || cond.clue} »`;
  if (cond.deduction) return `déduction « ${labels.deductions?.[cond.deduction] || cond.deduction} »`;
  if (cond.promise) return `promesse « ${labels.promises?.[cond.promise] || cond.promise} » ${cond.status || 'tenue'}`;
  if (cond.flag) return `${cond.value === false ? 'sans ' : ''}${labels.flags?.[cond.flag] || cond.flag}`;
  if (cond.seen) return `scène déjà vécue`;
  if (cond.item) return `objet requis`;
  if (cond.route) return `route ${cond.route} ${cond.status || 'ouverte'}`;
  return '';
}
