# Batch 3 — Thai-language teacher/editor

Reviewed Git `bb1619a` on an unchanged product build.

Exact browser build hash: `b3ac8a88e77027cc76b9a2b7e1190bec346e3e309a518a6161392788d75b7edf`.

Method: five sequential real Headless Edge scripted browser rounds against `http://127.0.0.1:4182/Plenoi-Get-Job/`, plus selected screenshot inspection, source editing review, and targeted browser fixtures for teacher/assessor wording and an ethics gate. The scripts use synthetic profiles and known answer indexes. They verify functioning routes; they do not constitute human playtesting, an unassisted student study or exhaustive review of every graph node. No product/test files were changed by this reviewer. No quota block occurred in this batch.

## Five distinct rounds

| Round | Seed / policy | Result and route evidence | Editorial screenshot inspected |
|---|---|---|---|
| 1 | 1001; standard script | PASS; 188 illustrated states; ending tier 2; 80 work decisions; 4 visits; Proposal/final 100; energy 22, stress 6 | `results/batch3/thai/round-1/lesson-feedback.png`: correct อ.กฤตพล label and teacher portrait; corrected strict-equality explanation; **T06** visible universal test-results claim despite a non-patch MCQ. |
| 2 | 1002; `--care=1` | PASS; 195 illustrated states; ending tier 3; 80 decisions; 4 visits; exams 100; energy 61, stress 0 | `round-2/ending.png`: specific work, relationship and next-step prose; concise recap, counts only at the ending; named facts have readable labels. |
| 3 | 1003; standard script | PASS; 188 illustrated states; ending tier 2; 80 decisions; 4 visits; exams 100; energy 19, stress 15 | `round-3/office-mobile.png`: Thai controls and status labels are readable at 390px. The earlier batch-2 job-caption obstruction is not reproduced in this current screenshot; the role/company caption is readable below the desk hotspot. |
| 4 | 1004; `--care=1` | PASS; 195 illustrated states; ending tier 3; 80 decisions; 4 visits; exams 100; energy 52, stress 0 | `round-4/causal-followup.png`: the conflict text identifies the prior conversation with ฟ้า and its reason. It contains no unrelated pet/filler clause. Choice wording remains short enough to compare. |
| 5 | 1005; `--care=1 --policy=mixed` | PASS; 194 illustrated states; ending tier 3; 80 decisions; 4 visits; exams 100; energy 47, stress 0 | `round-5/ending.png`: route callback, wellbeing warning and retained facts remain comprehensible after the mixed-choice route. The wording distinguishes strong work from remaining personal needs. |

Every `qa/results/batch3/thai/round-N/report.json` records the same build hash, no page errors and no non-GET requests. An empty automated `findings` list does not include the manual editorial findings below.

## Earlier findings T01–T04

These are fixed in this build within the tested scope:

- **T01 speaker identity:** targeted visible feedback names อ.วรดา for SQL, อ.สุริณี for UX, อ.จิรภา for communication, and อ.กฤตพล for JavaScript. The teacher renderer receives the same identity as the caption/dialogue. Interview feedback names ผู้สัมภาษณ์ AI; final-exam feedback names อาจารย์ผู้ประเมิน AI. Targeted screenshots and extracted text are in `targeted-*.png` and `targeted-editorial.json`.
- **T02 heading:** non-patch successful lessons show “แนวทางนี้ตรงโจทย์”; editable-patch tasks can retain “แพตช์นี้ใช้ได้”.
- **T03 customer/SQL terminology:** generated `group-having` now uses “ลูกค้าที่สั่งซื้อมากกว่าเกณฑ์”, matching the prompt and `customer_id` query.
- **T04 type explanation:** the strict-equality explanation separates the operator rule from the form-value fact: “ตรวจทั้งค่าและชนิดข้อมูล ข้อความจากฟอร์มเป็น string ...”.

## New actionable findings

### T06 — Successful non-patch MCQs claim test results that were not run (P3)

- Source: `sim-ui.js`, `answerLesson()`.
- Visible reproduction: answer SQL `group-having`, UX `contrast`, communication `confirm`, or JavaScript `strict-equality` by selecting the correct multiple-choice response. Teacher says “เห็นเหตุผลและผลทดสอบแล้ว ลองเอาไปใช้กับงานนะ”. The screen has no test-result block and no patch evaluator was invoked.
- Evidence: `qa/results/batch3/thai/targeted-editorial.json` records the exact dialogue and `visibleTestResults: 0` for all four. `targeted-sql.png`, `targeted-ux.png`, `targeted-communication.png`, `targeted-javascript.png`, and round-1 lesson feedback preserve the visible result.
- Why it matters: the exercise explanation is useful, but the feedback inaccurately says it has observed execution evidence. It also reintroduces generic code-test wording into non-programming rooms.
- Fix: use neutral wording such as “แนวทางนี้ตรงโจทย์ ลองนำไปใช้กับงานนะ” for MCQ answers. Mention observed test results only when `result.checks` actually contains evaluator results. Checking only `q.patch` is insufficient: a player can select the MCQ answer in a patch-capable lesson without running their own code.
- Cross-check: `answerQuiz()` interview/exam feedback says the response shows task evidence and then gives its explanation; it does not claim to have executed a test. The examination completion sentence recommends connecting test evidence to goals rather than claiming an execution occurred, so it is acceptable as advice.

### T07 — Ethics review triggered by a fake demo offers unrelated file-sharing answers (P2)

- Source: `sim-core.js`, gate `ethicsReview` and its copied `SCENES.dataChain` options.
- Targeted actual browser fixture: a run with `assessment.integrity = 20`, `facts = ['fakeDemo']`, normal personal needs, then `CareerGame.work()`.
- Visible result: title “HR ขอทบทวนเหตุที่กระทบความไว้ใจ”; prompt asks about the recorded conduct incident. Options include “คิดว่าไม่มีใครดาวน์โหลดจึงไม่รายงาน”, “ลบประวัติแชร์เพื่อไม่ให้มีชื่อคุณ”, and “แจ้งสิ่งที่เปิดเผย ผู้เข้าถึง เวลา ...”. The triggering incident was a false live-demo claim, not a leaked file or link.
- Evidence: `qa/results/batch3/thai/ethics-fake-demo.json` and `.png`; fixture returns `scene: 'ethicsReview', gate: 'ethicsReview'` with those exact options.
- Why it matters: the opening is concise but the answers introduce a new, unestablished data-sharing event. The player cannot tell which incident HR is investigating. The same risk applies when the trigger is gossip.
- Fix: select the ethics-review options and reply from the actual incident (fake demo, gossip, data disclosure, concealed data), or write a neutral conduct-review set that does not assume a download/share history. Preserve specific data-containment options only for an actual data incident.
- Acceptance: fake-demo review asks about correcting the claim, providing the actual evidence and notifying affected people; gossip review asks about facts, affected people and communication repair; data incidents retain access/containment questions.

## Additional language coverage

- Authored work/follow-up passages are short and coherent. The scene sample refers to a specific previous conversation instead of a disconnected joke or pet event.
- Technical questions contain concrete code, SQL, test data or design examples; explanation language identifies the mechanism rather than only praising the player.
- A source coverage check found 45 authored scene fact flags, 51 labels and no missing label for those flags (`label-coverage.json`). Additional named social facts are explicitly labeled in the UI source. This is label coverage, not validation of every possible state history.
- The status dock consistently pairs technical English dimension names with Thai explanations. Thai labels for tiredness, hunger, thirst, boredom and sleepiness identify which direction is a burden; money is formatted as baht rather than an unexplained score.

## Verdict

**Batch 3 is not clean:** all five scripted browser routes passed, but T06 and T07 are actionable wording/coherence defects. Collectively fix them, then run a fresh five-round batch on the new unchanged build. This verdict does not assert that every possible text, route or image has been inspected.
