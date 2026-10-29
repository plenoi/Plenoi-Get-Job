# Batch 3 — year-three business-computing student review

Product Git revision: `bb1619a`. Product build hash: `b3ac8a88e77027cc76b9a2b7e1190bec346e3e309a518a6161392788d75b7edf`.

This is an AI review from the perspective of a third-year business-computing student with basic web, SQL and spreadsheet experience. It is not a human study, a measured one-hour play session, or a subjective challenge rating from a real student.

## Five required rounds

All five rounds ran in headless Microsoft Edge at the local subdirectory URL on the same product hash. The standard runner uses a synthetic profile, selects correct interview/exam answers through internal keys, and mixes some poorer work choices with recovery/rest. Its functional success does not demonstrate ordinary-student competence.

| Round | Seed | Policy | Result | Illustrated screens | Work/visits/exams | Ending |
|---|---:|---|---|---:|---|---|
| 1 | 1401 | mixed + care | PASS | 195 | 80 / 4 / both 100 | tier 3, energy 61 |
| 2 | 1402 | mixed + care | PASS | 195 | 80 / 4 / both 100 | tier 3, energy 61 |
| 3 | 1403 | mixed + care | PASS | 195 | 80 / 4 / both 100 | tier 3, energy 59 |
| 4 | 1404 | mixed + care | PASS | 195 | 80 / 4 / both 100 | tier 3, energy 61 |
| 5 | 1405 | mixed + care | PASS | 195 | 80 / 4 / both 100 | tier 3, energy 61 |

Evidence: `qa/results/batch3/student/round-1` through `round-5`, each with JSON and actual screenshots. There were no page errors or non-GET requests. These are five seeded rounds of one mixed policy, not five independently designed human strategies. A supplemental Business Analyst position route is recorded separately so coverage is not confined to the standard developer fixture.

## Independent learning and non-oracle sampling

`manual-sampling.js` selected predetermined visible positions in five rooms and six interview questions without reading answer keys. `manual-review.json` records the visible options, selected position, resulting explanation, and before/after skill value. The synthetic student chose incorrectly in SQL, QA and communication; those skills did not increase. Correct JS/UX responses gained six skill points.

The actual worked feedback teaches useful facts: array indexes end at length minus one; SQL NULL uses IS NULL rather than equality; a form label must associate with its control; a test oracle must come from the business rule rather than comparing a value to itself; and requirements need an intended user and decision. These are materially better learning tasks than generic attitude surveys.

The six blind-position interview responses achieved 33/100 and failed. The result offered training links for JavaScript, SQL/Database, Testing and Communication. Random visible-position clicking therefore did not automatically pass this sampled interview. This one sample is not an estimate of the game's full win rate.

Office and feedback screenshots show five office hotspots, separate named NPCs, the selected player appearance, visible signed assessment/personal deltas, and a relevant scene. The standard mobile screenshots have no horizontal overflow; the office screenshot is a desktop-to-mobile resize and retains the previously open status drawer, so it is not evidence that initial mobile loading opens the drawer by default.

## Actionable finding

### STU-04 — a correct UX multiple-choice response claims that tests ran

Priority P3, shared with the Thai teacher's T06 rather than a new separate defect. In actual `manual-ux-feedback.png`, the exercise is an HTML label/accessibility multiple-choice task. The feedback says **เห็นเหตุผลและผลทดสอบแล้ว** although the response did not execute any patch tests and no test-result panel appears. This can mislead a learner about what was verified. The same generic success line is used for all lesson domains.

Use actual `result.checks` and its results to decide whether to mention executed tests; the mere presence of a `q.patch` editor is insufficient because a learner can choose an MCQ answer instead. Otherwise use a general teaching sentence such as แนวทางนี้ตรงโจทย์ ลองนำไปใช้กับงานนะ.

## Verdict and limits

**Batch 3 is not clean** because STU-04 requires a product wording correction. The parent is also collecting the other independent reviewers' causal-scene findings; this review does not claim to independently reproduce all of their cases. Apply the collected fixes, then run five fresh student rounds against the new unchanged product hash.

No new distinct student-level defect was established beyond the shared MCQ wording issue in this scope. That does not prove every story branch, ending, CV, browser or learner strategy is defect-free. The large graph is a compiled context DAG, scenes reuse authored layouts, and the standard functional runner uses answer keys. No unsupported 9/10 challenge score, one-hour completion claim or human emotional response is assigned.

Supplement completed: actual dataset job index6, Business Analyst, seed1451, repair+care. Same build hash, PASS,196 illustrated screens,80 work decisions,4 visits,both exams100, tier3,energy53, no page errors/non-GET requests. This route included regression/repair, missing handoff/deadline repair and unreported-block facts. Evidence: `qa/results/batch3-business/student/round-1/report.json` and screenshots. It is an additional oracle-assisted functional route, not part of the five required seeded rounds and not a blind student ability test.
