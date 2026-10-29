const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { chromium } = require('C:/Users/phazn/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const expectedHash = 'b2149ded4effa75096bca82e02f20d951669f2e406b6645fa4d83172155e23a1';
const files = ['index.html','app.js','jobs-data.js','sim-core.js','sim-lessons.js','sim-ui.js','sim-art.js','sim.css'];
const buildHash = crypto.createHash('sha256').update(files.map(f => fs.readFileSync(path.resolve(__dirname, '../../../../..', f))).join('')).digest('hex');
assert.equal(buildHash, expectedHash, 'Frozen product hash changed');

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto('http://127.0.0.1:4182/Plenoi-Get-Job/');
    await page.waitForFunction(() => window.CareerGame);
    await page.evaluate(() => {
      const C = WILCore;
      const run = CareerGame.initForQA({}, 0, 2771);
      run.family = 'database';
      run.interview = [{ passed: true }];
      run.stage = 16;
      run.node = C.encode({ stage: 16, family: 1, team: 2, work: 2, pressure: 0, chain: 0 });
      Object.assign(run.assessment, { expertise: 70, problemSolving: 70, qualityWork: 65 });
      CareerGame.work();
    });
    const before = await page.evaluate(() => ({
      gate: CareerGame.getScene().s.gate,
      text: document.querySelector('[data-choice="0"]').innerText,
      assessment: { ...CareerGame.getRun().assessment },
      relations: { ...CareerGame.getRun().relations }
    }));
    assert.equal(before.gate, 'advancedTask');
    assert.match(before.text, /ทดสอบจุดเสี่ยง แล้วส่งหลักฐานให้พี่เลี้ยงตรวจ/);
    const choicePath = path.join(__dirname, 'choice0-before.png');
    await page.screenshot({ path: choicePath, fullPage: true });
    await page.locator('[data-choice="0"]').click();
    const after = await page.evaluate(() => ({
      text: document.querySelector('#app').innerText,
      assessment: { ...CareerGame.getRun().assessment },
      relations: { ...CareerGame.getRun().relations }
    }));
    assert(after.text.includes('คุณกับพี่เลี้ยงทบทวนผล แล้วบันทึกวิธีตรวจซ้ำให้ทีมใช้'));
    assert.equal(after.assessment.expertise, before.assessment.expertise);
    assert.equal(after.assessment.creativeThinking, before.assessment.creativeThinking);
    assert.equal(after.assessment.communication - before.assessment.communication, 1);
    assert.equal(after.assessment.teamwork - before.assessment.teamwork, 1);
    const replyPath = path.join(__dirname, 'choice0-after.png');
    await page.screenshot({ path: replyPath, fullPage: true });
    assert.equal(errors.length, 0, errors.join('\n'));
    const report = { passed: true, buildHash, fixture: 'database family, synthetic stage-16 advancedTask, choice 0', visibleChoice: before.text, visibleReply: after.text, deltas: { communication: after.assessment.communication - before.assessment.communication, teamwork: after.assessment.teamwork - before.assessment.teamwork, expertise: after.assessment.expertise - before.assessment.expertise, creativeThinking: after.assessment.creativeThinking - before.assessment.creativeThinking }, relationDelta: Object.fromEntries(Object.keys(before.relations).map(k => [k, after.relations[k] - before.relations[k]])), screenshots: [choicePath, replyPath], pageErrors: errors, method: 'One synthetic visible UI fixture; inspect option, select choice 0, and verify rendered reply plus score deltas.' };
    fs.writeFileSync(path.join(__dirname, 'choice0-ui.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report));
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
