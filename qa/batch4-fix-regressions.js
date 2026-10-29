const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const C = require('../sim-core');
const familyDomain = {dev:'javascript',database:'sql',design:'ux',test:'qa',analyst:'data',marketing:'data',support:'communication',business:'planning'};

function gatedRun(id, family='dev') {
  const run = C.initial(707, family);
  run.stage = 16;
  run.node = C.encode({...C.decode(run.node), stage:16});
  if (id === 'advancedTask') Object.assign(run.assessment,{expertise:70,problemSolving:70,qualityWork:65});
  if (id === 'creativeTrial') Object.assign(run.assessment,{creativeThinking:65,adaptation:60});
  if (id === 'facilitate') Object.assign(run.assessment,{communication:65,assertiveness:65,manner:60});
  return run;
}
function checkGate(id,family,domain) {
  const run=gatedRun(id,family), scene=C.sceneForRun(C.decode(run.node),run);
  assert.equal(scene.gate,id); assert.equal(scene.domain,domain);
  const before={...run.assessment}, result=C.act(run,0,scene), expected=C.assessmentEffect(domain,true);
  for(const [key,value] of Object.entries(expected)) assert(run.assessment[key]>=before[key]+value,`${id}/${family} missing ${key} evidence`);
  if(domain!=='planning') assert.equal(run.assessment.planning,before.planning,`${id}/${family} incorrectly credited planning`);
  assert.equal(result.scenario.domain,domain);
}
checkGate('creativeTrial','design','ux');
checkGate('facilitate','business','communication');
for(const [family,domain] of Object.entries(familyDomain)) checkGate('advancedTask',family,domain);

const deadline=C.initial(991,'dev'); deadline.stage=2; deadline.node=C.encode({stage:2,family:0,team:2,work:2,pressure:0,chain:0});
C.act(deadline,2); assert(deadline.facts.includes('untestedDelivery')); assert(!deadline.facts.includes('overpromise'));
const follow=C.sceneForRun(C.decode(deadline.node),deadline);
assert.equal(follow.id,'technicalChain'); assert(/ภายหลัง/.test(follow.text));
assert(!/บั๊ก|รับปาก|ส่งช้า|โกง|ข้ามการตรวจ/.test(follow.title+' '+follow.text+' '+follow.options.map(o=>o.text+' '+o.reply).join(' ')),'Follow-up invents a prior bug, late promise, or misconduct');
assert(!/regression test|patch|api/i.test(follow.options.map(o=>o.text+' '+o.reply).join(' ')),'Follow-up uses developer-only language');
 C.act(deadline,0,follow); assert(deadline.facts.includes('repairedWork')); assert(!deadline.facts.includes('repairedBug'));
 assert(C.outcome(deadline).summary[3].includes('งานที่เคยไม่ผ่านเกณฑ์'),'Callback should remain domain-neutral');
for(let work=0;work<5;work++) for(let team=0;team<4;team++) for(let wellness=0;wellness<2;wellness++) for(let callback=0;callback<5;callback++)
  assert.equal(C.endingDescriptor(C.endingVariant(3,work,team,wellness,callback)).title,'จบอย่างโดดเด่น แต่ยังไม่ได้รับข้อเสนอทำงาน');
assert.equal(C.endingDescriptor(C.endingVariant(4,0,0,0,0)).title,'ได้รับข้อเสนอทำงานต่อ');

function offerRun(seed,quality=95) {
  const run=C.initial(seed); run.stage=80; run.completed=80;
  run.stats.quality=quality; run.stats.reliability=quality; run.stats.energy=90; run.stats.health=90; run.stats.stress=0;
  run.relations={mentor:quality,lead:quality,peer:quality,hr:quality};
  run.assessment=Object.fromEntries(Object.keys(C.ASSESSMENT).map(key=>[key,quality===95?90:70]));
  run.exams={proposal:100,final:100}; run.visits=Array.from({length:4},()=>({average:4})); run.history=Array.from({length:94},()=>({rank:3})); run.facts=[];
  return run;
}
const offerSeed=Array.from({length:10000},(_,i)=>i+1).find(seed=>C.hash(seed+431)%100<4);
const noSlotSeed=Array.from({length:10000},(_,i)=>i+1).find(seed=>C.hash(seed+431)%100>=4);
assert(offerSeed&&noSlotSeed);
const best=C.outcome(offerRun(offerSeed,95)); assert(best.offer);
assert(Number.isFinite(best.salaryTHBPerMonth)&&Number.isInteger(best.salaryTHBPerMonth));
assert(best.salaryTHBPerMonth>=25000&&best.salaryTHBPerMonth<=60000);
assert.equal(best.salaryTHBPerMonth,C.outcome(offerRun(offerSeed,95)).salaryTHBPerMonth,'Salary must be deterministic');
const lower=C.outcome(offerRun(offerSeed,86)); assert(lower.offer); assert(lower.salaryTHBPerMonth>=25000&&lower.salaryTHBPerMonth<=60000);
assert.notEqual(best.salaryTHBPerMonth,lower.salaryTHBPerMonth,'Salary should reflect performance');
assert.equal(C.outcome(offerRun(noSlotSeed,95)).salaryTHBPerMonth,null,'Unavailable offer slot must have no salary');
assert.equal(C.outcome(offerRun(offerSeed,50)).salaryTHBPerMonth,null,'Ineligible run must have no salary');
for(const file of ['../index.html','../story-map.html']) assert(/sim-core\.js\?v=6/.test(fs.readFileSync(path.join(__dirname,file),'utf8')),`${file} must use core cache v6`);
console.log(JSON.stringify({passed:true,gateDomains:['creativeTrial:ux','facilitate:communication',...Object.entries(familyDomain).map(([family,domain])=>`advancedTask:${family}:${domain}`)],technicalFollowup:{fact:'untestedDelivery',laterDiscovery:true,domainNeutral:true},tier3Title:true,salary:{offer:true,deterministic:true,integer:true,range:[25000,60000],performanceBased:true,noOffer:null},coreCacheV6:true}));

(async()=>{
  const {chromium}=require('C:/Users/phazn/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
  const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  try {
    const page=await browser.newPage({viewport:{width:1280,height:900}}),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.goto('http://127.0.0.1:4182/Plenoi-Get-Job/'); await page.waitForFunction(()=>window.CareerGame);
    await page.evaluate(()=>{const C=WILCore,run=CareerGame.initForQA({},0,991);run.interview=[{passed:true}];run.stage=2;run.node=C.encode({stage:2,family:0,team:2,work:2,pressure:0,chain:0});CareerGame.work()});
    assert(/ข้ามการตรวจ/.test(await page.locator('#app').innerText()));
    await page.locator('[data-choice="2"]').click(); assert((await page.locator('#app').innerText()).includes('untestedDelivery')===false);
    await page.getByRole('button',{name:'ไปต่อ',exact:true}).click();
    if(await page.getByRole('button',{name:'เริ่มงานที่โต๊ะ',exact:true}).count()) await page.getByRole('button',{name:'เริ่มงานที่โต๊ะ',exact:true}).click();
    const followText=await page.locator('#app').innerText(),followScene=await page.evaluate(()=>CareerGame.getScene().s);
    assert(/ภายหลัง/.test(followText)&&/งานไม่ผ่านเกณฑ์เมื่อตรวจภายหลัง/.test(followText),followText);
    assert.equal(followScene.id,'technicalChain'); assert(!/บั๊ก|รับปาก|ส่งช้า|โกง/.test(followText));
    await page.screenshot({path:path.join(__dirname,'results','batch4','technical-followup-final.png'),fullPage:true});
    await page.evaluate(seed=>{const C=WILCore,run=CareerGame.initForQA({},0,seed);run.stage=80;run.completed=80;run.stats.quality=95;run.stats.reliability=95;run.stats.energy=90;run.stats.health=90;run.stats.stress=0;run.relations={mentor:95,lead:95,peer:95,hr:95};run.assessment=Object.fromEntries(Object.keys(C.ASSESSMENT).map(key=>[key,90]));run.exams={proposal:100,final:100};run.visits=Array.from({length:4},()=>({average:4}));run.history=Array.from({length:94},()=>({rank:3}));run.facts=[];CareerGame.work()},offerSeed);
    const shown=await page.locator('#app').innerText(); assert(shown.includes('บริษัทจำลอง')&&shown.includes('บาท/เดือน')&&shown.includes('ตัวเลขในเกมเท่านั้น'),shown);
    assert.match(shown,/เงินเดือนจำลอง[\s\S]*?\d{2},\d{3} บาท\/เดือน/);
    const amount=await page.evaluate(()=>CareerGame.getRun().result.salaryTHBPerMonth); assert(Number.isInteger(amount)&&amount>=25000&&amount<=60000);
    const wealth=await page.evaluate(()=>CareerGame.getRun().general.wealth); await page.screenshot({path:path.join(__dirname,'results','batch4','offer-ending-final.png'),fullPage:true});
    await page.evaluate(seed=>{const run=CareerGame.initForQA({},0,seed);run.stage=80;run.completed=80;run.stats.quality=50;run.stats.reliability=50;CareerGame.work()},offerSeed);
    const noOfferText=await page.locator('#app').innerText(); assert(!noOfferText.includes('เงินเดือนจำลอง')&&!noOfferText.includes('บาท/เดือน'));
    assert.equal(await page.evaluate(()=>CareerGame.getRun().general.wealth),1500,'Simulated future salary must not be added to current wealth');
    assert(!errors.length,errors.join('\n'));
    fs.writeFileSync(path.join(__dirname,'results','batch4-fix-regressions.json'),JSON.stringify({passed:true,renderedFollowup:{laterDiscovery:true,neutralWording:true},renderedOffer:{salaryTHBPerMonth:amount,explicitlySimulated:true,wealthBefore:wealth,wealthAfter:1500},renderedNoOfferHasNoSalary:true,pageErrors:errors},null,2));
    console.log('Rendered follow-up and offer/no-offer browser assertions passed');
  } finally {await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});
