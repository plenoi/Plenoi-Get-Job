# Batch 4 — third-year Business Computing student review

Date: 2026-10-29 (Asia/Bangkok). Reviewer role: AI simulating a third-year Business Computing student preparing for internship, with basic JavaScript, SQL, Excel and web-project experience. This is not a human student study.

## Frozen build and method

Product browser build SHA-256: `c85f054997843d75cd41678ed6e2bdec36b03bff9ac391c726622cbb18b1bdc6`.

Five distinct headless Microsoft Edge browser routes ran at `http://127.0.0.1:4182/Plenoi-Get-Job/`, using `qa/browser-tests.js`, synthetic Business Computing profiles and seeds 1801–1805. The runner chooses lesson, interview and exam answers from internal answer keys; work choices and care varied by round. Each report checks a nonblank scene canvas, route completion, 80 work decisions, four advisor visits, proposal/final exam scores, mobile office overflow, page errors, non-GET requests, and that the source build hash stays unchanged. The report's illustrated-state count is a canvas check count, not a number of independently reviewed illustrations.

The exercise is scripted functional route coverage, not ordinary-student ability, authentic play, one-hour completion, measured comprehension, or an estimate of success rates. I separately sampled visible answer choices by predetermined position without reading answer keys, then inspected the visible feedback, skill deltas, interview result, CV-match screen, and an actual Business Analyst fixture route. No product files or shared QA tests were changed; the supplementary scripts and evidence are stored under `qa/results/batch4/student/`.

## Five browser routes

| Round | Seed / work policy / care | Route result | Ending snapshot |
|---|---|---|---|
| 1 | 1801 / mixed / yes | Pass; 198 illustrated-state checks; 80 decisions; 4 visits; both exams 100; no page errors or non-GET requests | Tier 3; energy 51; stress 0; sustainable |
| 2 | 1802 / repair / yes | Pass; 199 checks; 80 decisions; 4 visits; both exams 100; no page errors or non-GET requests | Tier 3; energy 56; stress 0; sustainable |
| 3 | 1803 / risk / no | Pass; 188 checks; 80 decisions; 4 visits; both exams 100; no page errors or non-GET requests | Tier 2; energy 22; stress 32; unsustainable |
| 4 | 1804 / mixed / yes | Pass; 198 checks; 80 decisions; 4 visits; both exams 100; no page errors or non-GET requests | Tier 3; energy 51; stress 0; sustainable |
| 5 | 1805 / repair / no | Pass; 188 checks; 80 decisions; 4 visits; both exams 100; no page errors or non-GET requests | Tier 2; energy 18; stress 25; unsustainable |

Machine reports and route screenshots are in `qa/results/batch4/student/round-1` through `round-5`. Risk/no-care runs reached lower, unsustainable endings, while care-supported runs reached sustainable endings in this sample. That is evidence of these routes' outcomes, not proof of overall balance.

## Blind visible-choice sample

A synthetic student answered five lesson questions and six interview questions using a repeating visible-position sequence. The sequence did not read or consult answer keys. The exact visible choices, feedback text, and skill before/after values are recorded in `qa/results/batch4/student/manual/manual-review.json`, with question and feedback screenshots alongside it.

- JavaScript cart-total question: selected the incorrect first option; the explanation showed `price * qty` and why addition is wrong; JavaScript stayed at 30.
- SQL NULL question: selected the correct second option; explanation correctly distinguished `IS NULL` from `= NULL`; SQL rose from 30 to 36.
- UX error-message question: selected an incorrect third option; explanation specified naming the invalid field, cause, and correction; UX stayed at 30.
- Regression-test question: selected the correct fourth option; feedback explained preserving the failing case and rerunning it; testing rose from 30 to 36.
- Handoff question: selected an incorrect first option; feedback named the useful handoff contents (run steps, status, limits, owner and next step); communication stayed at 30.

The sampled feedback gives a relevant correction and does not award the corresponding domain skill for the sampled wrong choices. The sample is small and uses selected introductory questions; it does not establish that every explanation is correct or that students learn from it.

The six visible-position interview selections scored 17/100 and failed. The result offered JavaScript, SQL/Database, Software Testing, Communication, and Planning/Business practice choices. The inspected screen makes retry/practice the next action and did not imply that the synthetic student passed. See `manual/manual-interview-result.png`.

## CV matching and Business Analyst route

The existing browser fixture uploaded a synthetic PDF containing a JavaScript/HTML/CSS/API/Git/SQL project, extracted 88 characters, and rendered a list of matched internship roles with scores and evidence/requirement disclosures. The screenshot shows role-specific scores from 76 to 82 and a sorted list; because the fixture used one synthetic CV and has no external relevance labels, I cannot assess score accuracy or establish that the ordering is fair. Evidence: `manual/cv-match/job-evidence.png` and `manual/cv-match/report.json` (the fixture also exercises typed-patch and graph-explorer paths; those are functional checks, not student comprehension checks).

A supplemental browser route selected dataset job index 6, verified in `jobs-data.js` as Business Analyst at Sky ICT, and completed 80 decisions, four visits, and both exams at 100. It ended tier 3 with energy 61 and no page errors/non-GET requests. This route uses the same answer-key oracle as the regular runner; it confirms the role route runs, not that a student can succeed unaided. Evidence: `manual/business-route-output/report.json` and screenshots.

## Student-review verdict and limits

**No new actionable student-level product finding was established in this scope.** The sampled educational feedback was task-linked and corrected wrong visible picks; the blind-position interview did not automatically pass; the synthetic CV produced a visible match list; and the alternate Business Analyst route completed on the frozen build.

This scoped result is not an all-clear for Batch 4 or release signoff. Other reviewer findings remain pending collective product fixes and a fresh five-round review on the resulting frozen build. This report does not re-test or clear the Thai semantic, narrative-causality, or offer/compensation findings reported by other reviewers. The 161,000 graph records remain a compiled context DAG with reused authored scene families; neither these routes nor canvas checks constitute a human review of every node or image.
