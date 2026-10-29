# Batch 1 — year-three business-computing student

Build hash: `2f2f0e77ba34c9ab551bd369f90823518fdb0a01c4c855d4c10eaed92cfc599a`

Method: five sequential runs of `qa/browser-tests.js` in headless Microsoft Edge at `http://127.0.0.1:4182/Plenoi-Get-Job/`, with role `student`, rounds 1–5 and seeds 401–405. The runner supplies a synthetic profile through a QA fixture, sets starting skills to 30, and uses internal answer keys for interview/exams. It deliberately makes a minority of less-optimal work choices and one gossip choice. These are real scripted browser functional tests, not a human user study and not evidence that an ordinary student would solve every test question. Independent source/rule checks and screenshot inspection follow below.

## Five-round record

| Round | Seed | Browser evidence | Functional result | Independent student review |
|---|---:|---|---|---|
| 1 | 401 | `results/batch1/student/round-1/report.json`, `lesson-feedback.png`, `office.png`, `causal-followup.png` | Pass; 188 nonblank illustrated screens; 80 work decisions; 4 visits; proposal/final 100; tier 3; no page errors or non-GET requests | Office has readable clickable people/desk and the gossip action creates a recognizable later conflict. Lesson feedback teaches a real JavaScript concept and shows signed skill gain. **STU-01:** speaker/caption says พี่เมย์ while the dialogue attributes the line to อ.กฤตพล. |
| 2 | 402 | `results/batch1/student/round-2/report.json`, `ending.png`, `mobile.png` | Same functional pass and counts; no mobile horizontal overflow | Main-character female uniform is retained. Ending/recap is understandable and has an illustration. **STU-02:** energy 1 and stress 100 coexist with health/work/reliability 100 and an excellent tier-3 ending; ignoring rest for the entire scripted run has almost no performance cost for the strongest answers. |
| 3 | 403 | `results/batch1/student/round-3/report.json`; independent Node checks of `WILCore.match` and `WILLessons.generate` | Same functional pass and counts | Matching is materially better: modest JavaScript/SQL/Excel profile scores 74 frontend, 58 database, 49 QA with missing QA, 0 UX, 0 marketing. Empty/wish-only/negated profiles score 0 across those examples. **STU-03:** a beginner database interview can ask the exact same static SQL NULL question twice. |
| 4 | 404 | `results/batch1/student/round-4/report.json`; lesson/source comparison | Same functional pass and counts | JavaScript patches, SQL NULL, QA boundary cases and accessibility tasks teach concrete concepts with worked explanations. Four answer choices and immediate illustrated reactions are present. No additional actionable finding beyond STU-01–03. |
| 5 | 405 | `results/batch1/student/round-5/report.json`; review of recap, office, learning flow | Same functional pass and counts | The student can leave training, try a six-question interview, return to a missing skill, explore the office and resume work. The route reaches its ending without a dead end. No additional actionable finding beyond STU-01–03. |

All five report hashes are the hash shown above. Each run records 124 history entries and facts `gossip`, `repairedRelation`, `technicalEvidence`, `testEvidence`, `userEvidence`.

## Actionable findings for the developer

### STU-01 — teacher feedback is presented as the mentor

Priority: medium. In round-1 `lesson-feedback.png`, the speaker and scene caption are พี่เมย์, but the dialogue begins อ.กฤตพล ยิ้ม. `answerLesson()` passes no teacher actor to `feedback()`, so the default mentor is used. A student cannot tell which coach is responding. Render the selected teacher's name/portrait or an explicitly named teacher frame on lesson feedback, including incorrect-answer feedback.

### STU-02 — exhaustion can be ignored while remaining excellent

Priority: high for believable gameplay. Round-2 ending shows energy 1, stress 100, health 100, quality 100, reliability 100 and tier 3. The scripted path never rests. The low-energy branch adds stress and only loses quality for non-best answers; `outcome()` uses health but not stress/energy for wellness. This makes self-care largely cosmetic and can imply someone is well despite sustained extreme strain. Give sustained strain an understandable gameplay consequence even when choosing a technically good response, or explicitly reflect it in wellness/ending and recovery opportunities. Do not penalize merely being ill or asking for help.

### STU-03 — duplicate primary interview questions

Priority: medium. `startInterview()` generates both primary-domain questions against the same unchanged `run.seen`. SQL level 1 has only the static `null` question. Reproduction: `L.generate('sql',1,401,[])` and `L.generate('sql',1,598,[])` both return `null:2590047524`, the same paid_at/IS NULL prompt/options. Reserve IDs as each quiz item is created and supply enough distinct beginner SQL tasks. Repeating a concept is useful; asking the identical question twice in one interview looks accidental and undermines the user's variety requirement.

## What is improved from the student perspective

CV fit now has evidence and gaps instead of almost-universal high scores. Practice examples contain real code/queries and explanations. An ordinary student can learn why `IS NULL`, `i < length`, an explicit test oracle, and a usable handoff matter. The office hub and optional people feel closer to a game. The gossip → conflict → repair sequence is readable. Pictures and signed changes are consistently present on the tested path.

## Verification limits

The scripted path selects answer keys for interviews and exams; it does not establish ordinary-student competence, difficulty, fun or duration. It does not exercise real PDF import/ranking UI, typed patch entry, every room, every graph node, every ending or the actual mobile office hotspot layout. Its mobile check occurs after the ending, and calling `office()` at stage 80 returns the ending, so that screenshot is a mobile ending screen rather than an office control test. The independent CV comparison above is a pure-rule check, not a PDF extraction test. Screenshots taken during the short delta animation may show temporarily faded chips; source has a 350 ms animation, so this alone is not a persistent contrast defect.

Batch 1 is **not clean** because STU-01–03 require developer changes, followed by a new five-round batch on the new build hash.
