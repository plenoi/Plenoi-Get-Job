const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),L=require('../sim-lessons');

module.exports=async function interviewContinuity(page){
  const frames=[];
  await page.evaluate(()=>{const r=CareerGame.initForQA({},0,731);r.family='database';r.interview=[];CareerGame.startInterview()});
  const inspect=async()=>page.evaluate(()=>{const canvas=document.getElementById('game-scene'),g=canvas.getContext('2d'),d=g.getImageData(0,0,canvas.width,canvas.height).data;let table=0,evaluator=0,candidate=0;for(let y=147;y<157;y++)for(let x=32;x<352;x++){const i=(y*canvas.width+x)*4;if(d[i]===181&&d[i+1]===143&&d[i+2]===104)table++}for(let y=100;y<130;y++)for(let x=259;x<286;x++){const i=(y*canvas.width+x)*4;if(d[i]===231&&d[i+1]===177&&d[i+2]===140)evaluator++}for(let y=102;y<134;y++)for(let x=104;x<130;x++){const i=(y*canvas.width+x)*4;if(d[i]===231&&d[i+1]===177&&d[i+2]===140)candidate++}return{domain:CareerGame.getQuestion().domain,topic:document.querySelector('.quiz-topic')?.innerText,speaker:document.querySelector('.game-speaker')?.innerText,table,evaluator,candidate,image:canvas.toDataURL()}});
  for(let i=0;i<6;i++){
    frames.push(await inspect());
    const q=await page.evaluate(()=>CareerGame.getQuestion());
    await page.locator(`[data-choice="${q.answer}"]`).click();
    frames[i].feedback={speaker:await page.locator('.reaction-card').innerText(),table:await page.evaluate(()=>{const c=document.getElementById('game-scene'),d=c.getContext('2d').getImageData(0,147,384,10).data;let n=0;for(let x=0;x<384*10;x++){const j=x*4;if(d[j]===181&&d[j+1]===143&&d[j+2]===104)n++}return n})};
    if(i<5)await page.locator('.actions button').click();
  }
  const lesson=await page.evaluate(()=>{CareerGame.getRun().interview=[{passed:true}];CareerGame.lesson('communication');const c=document.getElementById('game-scene');return{speaker:document.querySelector('.game-speaker')?.innerText,topic:document.querySelector('.quiz-topic')?.innerText,image:c.toDataURL()}});
  assert.deepEqual(frames.map(x=>x.domain),['sql','sql','data','security','communication','planning']);
  for(const f of frames){assert(f.topic.includes(({sql:'SQL',data:'ข้อมูล',security:'ความปลอดภัย',communication:'การสื่อสาร',planning:'วางแผน'})[f.domain]),JSON.stringify(f));assert(f.speaker.includes('ผู้สัมภาษณ์ AI'));assert(f.table>2000&&f.evaluator>5&&f.candidate>5,JSON.stringify(f));assert(f.feedback.speaker.includes('ผู้สัมภาษณ์ AI'));assert(f.feedback.table>2000,JSON.stringify(f.feedback))}
  assert(frames.some(x=>x.domain==='sql')&&frames.some(x=>x.domain==='communication')&&frames.some(x=>x.domain==='planning'));
  assert.notEqual(frames[0].image,lesson.image);assert(lesson.speaker.includes(L.TEACHERS.communication.name));assert(lesson.topic.includes('การสื่อสาร'));
  const outcome=async({jobIndex,seed,correct})=>{
    await page.evaluate(({jobIndex,seed})=>{const r=CareerGame.initForQA({},jobIndex,seed);r.interview=[];CareerGame.startInterview()}, {jobIndex,seed});
    for(let i=0;i<6;i++){
      const q=await page.evaluate(()=>CareerGame.getQuestion());
      await page.locator(`[data-choice="${correct?q.answer:(q.answer+1)%4}"]`).click();
      await page.getByRole('button',{name:'ไปต่อ',exact:true}).click();
    }
    return page.evaluate(()=>{const c=document.getElementById('game-scene'),d=c.getContext('2d').getImageData(0,0,c.width,c.height).data;let table=0,evaluator=0;for(let y=147;y<157;y++)for(let x=32;x<352;x++){const i=(y*c.width+x)*4;if(d[i]===181&&d[i+1]===143&&d[i+2]===104)table++}for(let y=100;y<130;y++)for(let x=259;x<286;x++){const i=(y*c.width+x)*4;if(d[i]===231&&d[i+1]===177&&d[i+2]===140)evaluator++}return{heading:document.querySelector('h1')?.innerText,speaker:document.querySelector('.reaction-card')?.innerText,mode:CareerGame.getRun().mode,job:CareerGame.getRun().job.role,family:CareerGame.getRun().family,interview:CareerGame.getRun().interview.at(-1),table,evaluator,image:c.toDataURL()}});
  };
  const failed=await outcome({jobIndex:7,seed:733,correct:false});
  assert.equal(failed.family,'design');assert.equal(failed.interview.score,0);assert.equal(failed.interview.passed,false);assert.equal(failed.mode,'academy');assert(failed.heading.includes('ยังไม่ผ่าน'));assert(failed.speaker.includes('ผู้สัมภาษณ์ AI'));assert(failed.table>2000&&failed.evaluator>5,JSON.stringify(failed));
  const dir=path.join(__dirname,'results','regressions');fs.mkdirSync(dir,{recursive:true});await page.screenshot({path:path.join(dir,'interview-failed-outcome.png'),fullPage:true});
  const passed=await outcome({jobIndex:7,seed:734,correct:true});
  assert.equal(passed.family,'design');assert.equal(passed.interview.score,100);assert.equal(passed.interview.passed,true);assert.equal(passed.mode,'office');assert(passed.heading.includes('ยินดีรับ'));assert(passed.speaker.includes('ผู้สัมภาษณ์ AI'));assert(passed.table>2000&&passed.evaluator>5,JSON.stringify(passed));
  await page.screenshot({path:path.join(dir,'interview-passed-outcome.png'),fullPage:true});
  await page.evaluate(()=>{const r=CareerGame.initForQA({},7,1105);r.interview=[];r.skills.ux=30;CareerGame.startInterview()});
  const firstDomains=await page.evaluate(()=>CareerGame.getQuiz().questions.map(q=>q.domain));assert.deepEqual(firstDomains,['ux','ux','qa','data','communication','planning']);
  for(let i=0;i<6;i++){const q=await page.evaluate(()=>CareerGame.getQuestion());await page.locator(`[data-choice="${(q.answer+1)%4}"]`).click();await page.getByRole('button',{name:'ไปต่อ',exact:true}).click()}
  const firstFailure=await page.evaluate(()=>({score:CareerGame.getRun().interview.at(-1).score,passed:CareerGame.getRun().interview.at(-1).passed,mode:CareerGame.getRun().mode}));assert.deepEqual(firstFailure,{score:0,passed:false,mode:'academy'});
  await page.getByRole('button',{name:'ไปต่อ',exact:true}).click();
  const practice=[];
  for(let i=0;i<6;i++){
    if(i===0)await page.locator('[data-domain="ux"]').click();const q=await page.evaluate(()=>CareerGame.getQuestion());assert.equal(q.domain,'ux');practice.push({id:q.id,template:q.template,review:q.review});await page.locator(`[data-choice="${q.answer}"]`).click();
    const xp=await page.evaluate(()=>({skill:CareerGame.getRun().skills.ux,level:WILLessons.level(CareerGame.getRun(),'ux')}));practice[i].skill=xp.skill;practice[i].level=xp.level;
    if(i<5)await page.getByRole('button',{name:'ลองโจทย์ถัดไป',exact:true}).click();
  }
  assert(practice[5].skill>=65,JSON.stringify(practice));assert.equal(practice[5].level,3,JSON.stringify(practice));
  await page.getByRole('button',{name:'ลองสัมภาษณ์',exact:true}).click();
  const retryDomains=await page.evaluate(()=>CareerGame.getQuiz().questions.map(q=>q.domain));assert.deepEqual(retryDomains,['ux','ux','qa','data','communication','planning'],JSON.stringify(retryDomains));
  for(let i=0;i<6;i++){const q=await page.evaluate(()=>CareerGame.getQuestion());assert.equal(q.domain,retryDomains[i]);await page.locator(`[data-choice="${q.answer}"]`).click();await page.getByRole('button',{name:'ไปต่อ',exact:true}).click()}
  const retry=await page.evaluate(()=>({score:CareerGame.getRun().interview.at(-1).score,passed:CareerGame.getRun().interview.at(-1).passed,primary:CareerGame.getRun().family,primaryCorrect:CareerGame.getRun().interview.at(-1).results.filter(x=>x.domain==='ux'&&x.correct).length,mode:CareerGame.getRun().mode}));assert.deepEqual(retry,{score:100,passed:true,primary:'design',primaryCorrect:2,mode:'office'},JSON.stringify(retry));
  return{domains:frames.map(x=>x.domain),sameInterviewComposition:true,evaluatorConsistent:true,interviewFeedbackConsistent:true,lessonDistinct:true,lessonSpeaker:lesson.speaker,failedOutcome:{heading:failed.heading,speaker:failed.speaker,family:failed.family,score:failed.interview.score,mode:failed.mode,interviewComposition:failed.table>2000&&failed.evaluator>5},passedOutcome:{heading:passed.heading,family:passed.family,score:passed.interview.score,mode:passed.mode,interviewComposition:passed.table>2000&&passed.evaluator>5},uxProgression:{jobIndex:7,family:'design',firstDomains,firstFailure,practice,retryDomains,retry}};
};
