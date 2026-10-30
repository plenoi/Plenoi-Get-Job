const assert=require('node:assert/strict');

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
  assert.notEqual(frames[0].image,lesson.image);assert(lesson.speaker.includes('อ.จิรภา'));assert(lesson.topic.includes('การสื่อสาร'));
  return{domains:frames.map(x=>x.domain),sameInterviewComposition:true,evaluatorConsistent:true,interviewFeedbackConsistent:true,lessonDistinct:true,lessonSpeaker:lesson.speaker};
};
