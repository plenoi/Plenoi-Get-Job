# Batch 7 — third-year Business Computing student review

Date: 2026-10-30 (Asia/Bangkok). Reviewer role: AI simulating a third-year Business Computing student preparing for internship, with basic JavaScript, SQL, Excel and web-project experience. This is not a human student study.

## Frozen build and method

Exact browser-build SHA-256: `b2149ded4effa75096bca82e02f20d951669f2e406b6645fa4d83172155e23a1`.

Five fresh Headless Edge browser routes used `qa/browser-tests.js` at `http://127.0.0.1:4182/Plenoi-Get-Job/`, with seeds 2801–2805, varied work policies, and care enabled in some runs and disabled in others. The synthetic runner selects lesson, interview, and exam answers using internal keys; it checks rendered scene canvases, 80 work decisions, four advisor visits, both exam scores, mobile office overflow, page errors, non-GET requests, and unchanged browser build hash. Canvas-check counts are not independent illustration reviews.

These routes are scripted functional checks, not human playtesting, unaided student ability, measured comprehension, enjoyment ratings, or completion-time evidence. The sole focused manual fixture selected the changed gate choice from the visible browser button and inspected its response and assessment delta. No product files or shared QA tests were changed; reports and screenshots are under `qa/results/batch7/student/`.

## Five fresh routes

| Round | Seed / work policy / care | Result | Ending snapshot |
|---|---|---|---|
| 1 | 2801 / mixed / yes | Pass; 198 illustrated-state checks; 80 decisions; 4 visits; proposal/final 100; no errors or non-GET requests | Tier 3; energy 48; stress 0; sustainable |
| 2 | 2802 / repair / no | Pass; 188 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 3; energy 30; stress 37; sustainable |
| 3 | 2803 / risk / no | Pass; 188 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 2; energy 22; stress 35; unsustainable |
| 4 | 2804 / mixed / yes | Pass; 198 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 3; energy 48; stress 0; sustainable |
| 5 | 2805 / repair / no | Pass; 188 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 2; energy 18; stress 25; unsustainable |

Full browser reports and screenshots are in `qa/results/batch7/student/round-1` through `round-5`. This sample includes a lower unsustainable risk route and sustainable tier-3 routes; it is not a player-outcome or balance estimate.

## Focused changed-choice review

In a synthetic SQL-family run, the gate showed four shuffled choices. The changed option appeared at visible position D and read **ทดสอบจุดเสี่ยง แล้วส่งหลักฐานให้พี่เลี้ยงตรวจ** (“test the risk and send the evidence to the mentor for review”). Selecting it showed **คุณกับพี่เลี้ยงทบทวนผล แล้วบันทึกวิธีตรวจซ้ำให้ทีมใช้** (“you and the mentor review the result and record a repeatable check for the team”). The response now explicitly communicates sharing evidence and joint review, which makes the existing Communication and Team Work gains understandable.

The actual delta was Planning +1, Problem Solving +2, Working Quality +2, Team Work +1, Communication +1, and Systematic Thinking +2. Expertise stayed at 70 and Creativity at 30. The single visible-choice result and before/after assessment are preserved in `qa/results/batch7/student/advanced-task-choice0/report.json`; question and feedback screenshots are alongside it.

## Scoped verdict and limits

**No new actionable student-level issue was found in this scope.** The revised choice and its result made the evidence-sharing/team-review link legible in the inspected screen, and its visible response matched the selected action and unchanged generic score effects.

This is one focused check of the changed choice plus five scripted full routes. It does not repeat Batch 6’s full four-choice matrix or re-review unchanged CV, interview, salary, Business Analyst, or SQL scenarios. The route runner uses answer keys and synthetic profiles; these results do not establish human comprehension or ordinary-player success. Other reviewers’ scopes and untested story branches are not cleared by this report.
