# Batch 1 — Thai-language teacher/editor

Build SHA-256: `2f2f0e77ba34c9ab551bd369f90823518fdb0a01c4c855d4c10eaed92cfc599a`

Method: executed the supplied real Headless Edge browser runner sequentially for five rounds; inspected its JSON reports and selected screenshots, then reviewed the language source. The runner uses a synthetic profile and scripted actions, including answering known correct options. This is not a human-user study, an unassisted student assessment, or an exhaustive visual review of all graph nodes. No product or test files were edited.

## Round evidence

| Round | Seed | Browser result | Editorial inspection and evidence |
|---|---:|---|---|
| 1 | 301 | PASS; 188 illustrated states; 80 completed work decisions; four visits; both exams 100; no page errors/non-GET requests | Inspected `results/batch1/thai/round-1/lesson-feedback.png`. Technical explanation is specific and useful: multiplication fixes the shown total. **T01:** the speaker/caption says พี่เมย์ while the spoken sentence identifies อ.กฤตพล. This is visible, not just a source concern. |
| 2 | 302 | PASS; same coverage and build hash | Inspected `round-2/causal-followup.png`. “คำพูดเดินทางเร็วกว่างาน” describes one understandable consequence of gossip in two short sentences; choices remain concise. No unrelated pet/filler sentence appears. Source check found **T03**, a SQL title that changes the subject from customers to shops. |
| 3 | 303 | PASS; same coverage and build hash | Inspected `round-3/ending.png`. Ending recap uses facts actually retained by the scripted route; completed event counts appear only in the ending, which is appropriate. Source check confirmed the generic feedback speaker also affects interview/exam wording (part of **T01**). |
| 4 | 304 | PASS; same coverage and build hash | Inspected `round-4/mobile.png`. Thai wraps within the narrow layout, the causal callback and recap remain readable, and the runner reports no horizontal overflow. Source check found **T02**, a patch-specific success heading used for non-code lessons too. |
| 5 | 305 | PASS; same coverage and build hash | Inspected `round-5/office.png`. Short office instructions, named talk buttons and task description are understandable. Source check found **T04**, a missing sentence boundary in a JavaScript explanation. |

All five runner reports are under `qa/results/batch1/thai/round-N/report.json`. Each records the build hash above, 188 illustrated states, ending tier 3, 121 history actions, `pageErrors: []`, and `nonGETRequests: []`. The runner's empty `findings` array does not include the independent editorial findings below.

## Actionable findings to fix before a fresh five-round batch

### T01 — Feedback labels identify the wrong speaker (P2)

- Evidence: `sim-ui.js:15` defaults every `feedback()` speaker to the mentor actor. `answerLesson()` at line 24 writes “อ.กฤตพล ยิ้ม ...” in the text but does not override that speaker. The round-1 screenshot visibly labels the same dialogue/caption “พี่เมย์”. `answerQuiz()` and examination result screens likewise speak as an assessor/teacher while inheriting the mentor label.
- Impact: a player can understand the sentence but cannot reliably tell who is teaching, assessing or reacting. This undermines the named-cast/teacher distinction.
- Fix: accept an explicit `speaker` (and, where available, portrait identity) in `feedback()`, and pass the relevant CAMT MMIT teacher/assessor on lessons and exams. Keep the office mentor as the default only for office interactions. Avoid duplicating the full speaker name in the body if it is already the label.
- Acceptance: a JavaScript lesson feedback screen is labeled อ.กฤตพล; a SQL lesson names อ.วรดา; interview and exam feedback labels identify their assessor. The caption, dialogue label and sentence agree.

### T02 — “แพตช์นี้ใช้ได้” labels every successful lesson (P2)

- Evidence: `sim-ui.js:24` uses this heading unconditionally for a correct lesson, including SQL, UX, data, communication and planning exercises that do not ask for a code patch.
- Impact: the label teaches the wrong concept and makes non-programming rooms feel like relabeled programming quizzes.
- Fix: use a neutral success heading such as “วิธีนี้ใช้ได้กับโจทย์นี้”, or select a heading by task type/domain; reserve “แพตช์นี้ใช้ได้” for a patch exercise.
- Acceptance: successful UX/communication/SQL tasks use a task-appropriate heading; patch exercises may retain the patch wording.

### T03 — SQL title says “ร้าน” while the question and query group customers (P3)

- Evidence: `sim-lessons.js:15`, template `group-having`: title “ร้านที่มียอดสั่งซื้อหลายครั้ง”; prompt asks for ลูกค้า; query groups `customer_id`.
- Impact: unclear whether the learner is counting shops, customers or orders.
- Fix: title “ลูกค้าที่สั่งซื้อมากกว่าเกณฑ์” or “ลูกค้าที่สั่งซื้อหลายครั้ง”. The prompt/query can stay.

### T04 — Missing boundary merges two facts in the strict-equality explanation (P3)

- Evidence: `sim-lessons.js:10`: “=== ตรวจทั้งค่าและชนิดข้อความจากฟอร์มเป็น string ...”.
- Fix: “`===` ตรวจทั้งค่าและชนิดข้อมูล ข้อความจากฟอร์มเป็น string จึงต้องแปลงเป็นตัวเลขและตรวจความถูกต้องก่อนเปรียบเทียบ”.
- Acceptance: separate the operator rule from the form-value fact; no need for a longer paragraph.

## What now meets the language contract

- Main scene text is one short, coherent problem; it no longer concatenates pet jokes, unrelated atmosphere and a job problem.
- The visible causal follow-up names the unresolved conflict instead of introducing an unexplained new topic.
- Signed changes and a short reaction appear immediately after the scripted choices. The code lesson gives an actual mechanism and answer rather than unqualified praise.
- Office talk labels identify named people; the text does not declare that the entire company loves or hates the player.
- Illness wording distinguishes rest from failing to communicate a handoff. It does not blame the student for illness itself.

## Batch disposition

**Not clean yet:** browser checks passed in all five rounds, but T01–T04 are actionable editorial issues. Fix them, then start a new five-round batch with a new build hash. No claim is made that all possible text or routes have been reviewed.
