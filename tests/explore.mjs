import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const chapters=read('data/chapters.json');
const story={}; for(const f of chapters.files) Object.assign(story, read(f).scenes);
const endings=read('data/endings.json').endings;
const {evaluate}=await import('./js/condition-parser.js');
const S=await import('./js/state.js');
function run(rng){
 const s=S.newState({name:'X'});
 s.stats={courage:6,empathie:6,perspicacite:8,influence:6,sangfroid:6,ingeniosite:6,integrite:7};
 let id=chapters.start,n=0,end=null,path=[];
 while(id&&n++<400){const sc=story[id];if(!sc)return null;path.push(id);s.chapter=sc.chapter;s.seenScenes[id]=1;
  if(sc.enter)S.applyEffects(s,sc.enter);
  (sc.lines||[]).forEach(l=>{if((!l.condition||evaluate(l.condition,s))&&l.effects)S.applyEffects(s,l.effects);});
  if(sc.ending){end=sc.ending;break;}
  const opts=(sc.choices||[]).filter(c=>{if(c.secret&&!evaluate(c.revealIf||c.requires,s))return false;
   if(c.visibleIf&&!evaluate(c.visibleIf,s))return false;return !c.requires||evaluate(c.requires,s);});
  if(opts.length){const c=opts[Math.floor(rng()*opts.length)];
   if(c.deduction){const g=evaluate(c.deduction.requires,s);S.applyEffects(s,g?(c.deduction.successEffects||c.effects):(c.deduction.failEffects||{}));id=(g?c.deduction.successScene:c.deduction.failScene)||c.next;}
   else{S.applyEffects(s,c.effects);if(c.ending){end=c.ending;break;}let nx=c.next;(c.nextIf||[]).some(b=>{if(evaluate(b.when,s)){nx=b.scene;return true}return false});id=nx;}
   continue;}
  let nx=sc.next;(sc.nextIf||[]).some(b=>{if(evaluate(b.when,s)){nx=b.scene;return true}return false});id=nx;}
 return {end,s,path};
}
let seed=12345; const rng=()=>{seed=(seed*1103515245+12345)&0x7fffffff;return seed/0x7fffffff;};
const found={}; const relmax={kael:0,noam:0};
for(let i=0;i<4000;i++){const r=run(rng); if(!r)continue; found[r.end]=(found[r.end]||0)+1;
 relmax.kael=Math.max(relmax.kael,r.s.relations.kael.attraction);
 relmax.noam=Math.max(relmax.noam,r.s.relations.noam.attraction);}
console.log('Fins atteintes sur 4000 parties aléatoires :');
for(const k of Object.keys(endings)) console.log('  ', (found[k]||0).toString().padStart(5), k, found[k]?'':'  <-- JAMAIS');
console.log('attraction max atteinte :', relmax);
