const assert=require('node:assert/strict');
const {chromium}=require('C:/Users/phazn/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
 try{
  const page=await browser.newPage({viewport:{width:1280,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:4182/Plenoi-Get-Job/');await page.waitForFunction(()=>window.CareerGame);
  await page.evaluate(()=>{CareerGame.initForQA({},0,53);CareerGame.academy()});
  let pre=await page.locator('#app').innerText();assert(!/พี่เมย์|พี่ต้น|ฟ้า ·|พี่ลิน|อ\.กฤตพล/.test(pre));assert.equal(await page.locator('.relationship-bar,.bond-card').count(),0);assert.equal(await page.locator('.skill-card').count(),Object.keys(await page.evaluate(()=>WILLessons.NAMES)).length);
  await page.evaluate(()=>CareerGame.startInterview());assert.equal(await page.locator('.game-choices button').count(),4);
  let q=await page.evaluate(()=>CareerGame.getQuestion());await page.locator(`[data-choice="${q.answer}"]`).click();
  let feedback=await page.locator('.reaction-card').innerText();assert(feedback.includes(q.options[q.answer]));assert(feedback.includes('ผู้สัมภาษณ์ AI'));assert(feedback.includes('สถานะ: ผู้ประเมินใช้เกณฑ์ ไม่แสดงอารมณ์'));assert(!feedback.includes('สีหน้า:'));
  async function finishWith(correctCount){
   for(let n=0;n<6;n++){
    const cur=await page.evaluate(()=>({q:CareerGame.getQuestion(),idx:CareerGame.getQuiz().index}));if(cur.idx>=6)break;
    const choice=cur.idx<correctCount?cur.q.answer:(cur.q.answer===0?1:0);
    await page.locator(`[data-choice="${choice}"]`).click();await page.getByRole('button',{name:'ไปต่อ',exact:true}).click();
   }
   return page.evaluate(()=>CareerGame.getRun().interview.at(-1));
  }
  await page.getByRole('button',{name:'ไปต่อ',exact:true}).click();
  const failed=await finishWith(3);assert.equal(failed.score,50);assert.equal(failed.passed,false);await page.getByRole('button',{name:'ไปต่อ',exact:true}).click();assert((await page.locator('#app').innerText()).includes('ลองสัมภาษณ์'));
  await page.getByRole('button',{name:'ลองสัมภาษณ์',exact:true}).click();const passed=await finishWith(4);assert.equal(passed.score,67);assert.equal(passed.passed,true);await page.getByRole('button',{name:'ไปต่อ',exact:true}).click();assert.equal(await page.locator('.hotspot').count(),5);
  const catalogue=await page.evaluate(()=>{const keys=['data','review','deadline','demo','proposal','dog_chase','late_accident'],base=document.createElement('canvas'),a=document.createElement('canvas');WILArt.draw(base,{location:'meeting',seed:72},{});return keys.map(event=>{WILArt.draw(a,{location:'meeting',seed:72,event},{});const d=a.getContext('2d').getImageData(0,0,a.width,a.height).data,b=base.getContext('2d').getImageData(0,0,base.width,base.height).data;let n=0;for(let i=0;i<d.length;i++)if(d[i]!==b[i])n++;return{event,kind:WILArt.sceneCatalog[event].kind,label:WILArt.sceneCatalog[event].label,differentPixels:n}})});assert(catalogue.every(x=>x.differentPixels>40),JSON.stringify(catalogue));assert.equal(catalogue.find(x=>x.event==='data').kind,'privacy');assert.equal(catalogue.find(x=>x.event==='dog_chase').kind,'dog');const legacy=await page.evaluate(()=>{const c=document.createElement('canvas');const read=event=>{pixel(c,'field_visit',991,true,event);return c.toDataURL()};return{dog:read('dog_chase'),road:read('medical_followup'),proposal:read('proposal')}});assert.notEqual(legacy.dog,legacy.road);assert.notEqual(legacy.road,legacy.proposal);
  const talk=await page.evaluate(()=>{const r=CareerGame.getRun();r.interview=[{passed:true}];CareerGame.talk('peer');const c=document.getElementById('game-scene'),d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;let skin=(x,y)=>{let n=0;for(let yy=y-14;yy<y+10;yy++)for(let xx=x-12;xx<x+12;xx++){let i=(yy*384+xx)*4;if(d[i]===231&&d[i+1]===177&&d[i+2]===140)n++}return n};const result={player:skin(120,112),npc:skin(273,104),choices:document.querySelectorAll('.game-choices button').length};CareerGame.answerTalk(1);result.card=document.querySelector('.reaction-card')?.innerText;return result});assert(talk.player>5&&talk.npc>5,JSON.stringify(talk));assert.equal(talk.choices,4);assert(talk.card.includes('ชวนตรวจงานคู่กันหนึ่งกรณี'));assert(talk.card.includes('ฟ้า'));
  await page.evaluate(()=>CareerGame.selfCare());await page.locator('[data-choice="2"]').click();assert((await page.locator('.reaction-card').innerText()).includes('ส่งสถานะแล้วพักงีบสั้น ๆ'));await page.evaluate(()=>{CareerGame.getRun().socialBudget=2;CareerGame.rest()});assert((await page.locator('.reaction-card').innerText()).includes('พักและแจ้งสถานะงาน'));
  await page.evaluate(()=>{CareerGame.initForQA({},0,67);CareerGame.lesson('javascript')});const lessonQ=await page.evaluate(()=>CareerGame.getQuestion());await page.locator(`[data-choice="${lessonQ.answer}"]`).click();const lessonCard=await page.locator('.reaction-card').innerText();assert(lessonCard.includes(lessonQ.options[lessonQ.answer]));assert(lessonCard.includes('ผู้สอนจำลอง'));assert(lessonCard.includes('สถานะ: ผู้ประเมินใช้เกณฑ์ ไม่แสดงอารมณ์'));
  assert(!errors.length,errors.join('\n'));console.log(JSON.stringify({passed:true,prehirePrivacy:true,feedbackEcho:true,nonEmotionalAssessment:true,failedScore:failed.score,retryVisible:true,passScore:passed.score,interactionStaging:{playerPixels:talk.player,npcPixels:talk.npc},sceneCatalogue:catalogue,lessonCareRestEcho:true,reactionCard:true,pageErrors:errors},null,2));
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
