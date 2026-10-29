const assert=require('node:assert/strict'),C=require('../sim-core');
function fixture(){const r=C.initial(1701);r.node=C.encode({...C.decode(r.node),chain:0});return r}
for(const fact of ['fakeDemo','gossip','concealedData','dataLeak']){
 const r=fixture();r.assessment.integrity=20;r.facts=[fact];
 const scene=C.sceneForRun(C.decode(r.node),r);assert.equal(scene.gate,'ethicsReview');
 if(['fakeDemo','gossip'].includes(fact))assert(!/ดาวน์โหลด|ผู้เข้าถึง|ลบประวัติแชร์/.test(scene.options.map(o=>o.text+' '+o.reply).join(' ')),'Conduct review invents a data leak');
 const before=r.assessment.integrity;C.act(r,0);assert(r.assessment.integrity>before,'Accountability must improve conduct evidence without erasing history');assert(r.facts.includes(fact));
}
for(const actor of ['mentor','lead','peer','hr']){
 const r=fixture();r.bonds[actor].tension=70;const before=JSON.parse(JSON.stringify(r));
 const scene=C.sceneForRun(C.decode(r.node),r);assert.equal(scene.gate,'tension');
 C.act(r,0);assert(r.bonds[actor].tension<70,'Repair misses tense actor '+actor);
 for(const other of ['mentor','lead','peer','hr'].filter(k=>k!==actor))assert.equal(r.relations[other],before.relations[other],'Uninvolved NPC changed: '+other);
}
console.log('Conduct review and tense-NPC consequence regressions passed');
