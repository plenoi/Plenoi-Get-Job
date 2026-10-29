# Batch 5 — third-year Business Computing student review

Date: 2026-10-29 (Asia/Bangkok). Reviewer role: AI simulating a third-year Business Computing student preparing for internship, with basic JavaScript, SQL, Excel and web-project experience. This is not a human student study.

## Frozen build and method

Exact browser build SHA-256: `abd5281b2efa4c18ccaa51c4781dd5183eb194d66bb553ffb0af6b1f2ea03a1d`.

Five fresh Headless Edge routes ran against `http://127.0.0.1:4182/Plenoi-Get-Job/` using `qa/browser-tests.js`, synthetic Business Computing profiles, varied care/work policies, and seeds 2201–2205. The runner uses answer keys for lessons, interview, and exams; work decisions varied. Each route checked canvas rendering, 80 work decisions, four visits, both exam scores, mobile overflow, page errors, non-GET requests, and that the product build stayed unchanged. The illustrated-state figure is a nonblank-canvas check count, not a count of independently reviewed images.

The routes are scripted functional checks, not a human playtest, ordinary-student ability demonstration, learning outcome, enjoyment rating, or measured completion time. The separate visible-position sample did not read answer keys. The BA and offer/no-offer checks use targeted synthetic fixtures to inspect the corresponding screens, not to claim a student completed those situations unaided. Product source and shared QA tests were not changed; evidence and supplementary runners live under `qa/results/batch5/student/`.

## Five routes

| Round | Seed / work policy / care | Result | Ending snapshot |
|---|---|---|---|
| 1 | 2201 / mixed / yes | Pass; 196 illustrated-state checks; 80 work decisions; 4 visits; proposal/final 100; no errors or non-GET requests | Tier 3; energy 51; stress 0; sustainable |
| 2 | 2202 / repair / yes | Pass; 199 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 3; energy 53; stress 0; sustainable |
| 3 | 2203 / risk / no | Pass; 188 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 2; energy 15; stress 41; unsustainable |
| 4 | 2204 / mixed / yes | Pass; 197 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 3; energy 47; stress 0; sustainable |
| 5 | 2205 / repair / no | Pass; 188 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 2; energy 18; stress 25; unsustainable |

Reports and screenshots are in `qa/results/batch5/student/round-1` through `round-5`. This sample again shows lower, unsustainable outcomes on risk/no-care routes and sustainable tier-3 outcomes on care-supported routes. It does not establish balance or ordinary-player success rates.

## Blind lesson/interview and feedback sample

A synthetic student selected a repeating visible-position sequence for five lesson items and six interview questions without consulting answer keys. Visible choices, post-choice feedback and assessment deltas are captured in `qa/results/batch5/student/manual/manual-review.json` and the adjacent screenshots.

The sampled questions covered array mutation, SQL NULL, keyboard focus after closing a dialog, regression testing, and defining a report's user and decision. Incorrect picks did not increase their sampled skill. Feedback showed the relevant correction and a short reason: use `map` when preserving the source array, use `IS NULL`, return focus to the dialog opener while containing focus during the dialog, keep the failing regression case, and identify the report's user and intended decision. The correct regression-test pick gained six testing points. These explanations were understandable in the inspected screens and relevant to their tasks; this small selection is not evidence that a real student learned or that every lesson is accurate.

The blind-position interview sample scored 50/100 and failed, offering practice in JavaScript, SQL/Database, and Communication. The failed outcome did not imply a pass. Screenshot: `manual/manual-interview-result.png`.

## Business Analyst route and offer screens

A supplemental route selected dataset job index 6, `Business Analyst` at Sky ICT, and completed 80 work decisions, four visits and both exams at 100. It ended tier 3 with energy 61 and no page errors/non-GET requests. It uses the standard answer-key oracle. Evidence: `manual/business-route-output/report.json` and screenshots.

I inspected the actual ending screen text in browser fixtures on this frozen build. The offer ending says `ได้รับข้อเสนอทำงานต่อ` and identifies a `บริษัทจำลอง`; its banner labels the amount a simulated monthly salary and says `เป็นตัวเลขในเกมเท่านั้น`. The no-offer ending says `จบอย่างโดดเด่น แต่ยังไม่ได้รับข้อเสนอทำงาน` and has no monthly salary displayed. Both screenshots show current wealth still at ฿1,500; the reports also confirm the current-wealth value was unchanged. The terminal state is deliberately seeded for screen inspection, not a full route or hiring-probability experiment. Screenshots and visible text reports: `manual/offer-copy/offer.png`, `manual/offer-copy/no-offer.png`, and their JSON files.

## Student-scope verdict and limits

**No new actionable student-level product issue was established in the requested scope.** The five fresh routes completed, the blind-position interview did not pass automatically, the sampled incorrect lesson choices received relevant correction without a skill increase, the Business Analyst route ran, and the offer/no-offer wording made the simulated salary and employment state clear in the inspected screens.

This is not a whole-batch all-clear. I did not independently evaluate every advanced-task gate, story branch, salary eligibility rule, or job match. Another specialist has reported a possible mismatch between a generic advanced task and the expertise evidence it grants; that is outside this student sampling and should remain on the collective-fix list. The contextual story graph and rendered scenes are not exhaustively reviewed by these five routes.
