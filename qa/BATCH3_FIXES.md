# Batch 3 collective fixes

Date: 2026-10-29 (Asia/Bangkok). These changes address actionable findings from the four Batch 3 specialist reviews. The reviews used scripted browser routes and targeted fixtures; they are not human playtests or measured learning outcomes. Reviewer reports: [game](batch3-game-review.md), [novel editor](batch3-novel-review.md), [Thai teacher](batch3-thai-review.md), and [business-computing student](batch3-student-review.md).

## Findings and changes

| Finding | Change | Regression evidence |
|---|---|---|
| R3-G1: skipping a test was treated as a missed delivery/overpromise | The visible skip-check option now records `untestedDelivery`, applies the testing/quality impact, and follows the testing-risk chain. It does not create `overpromise`. | `qa/gate-regressions.js`; `qa/targeted-regressions.js` |
| R3-G2: an objectively wrong technical answer received successful assessment evidence | Technical options now use the question's actual domain and correctness. Failed answers do not gain successful quality/expertise evidence; work quality and teamwork inference are retained alongside explicit assessment values. | `qa/choice-feedback-regressions.js`; `qa/core-tests.js` |
| B3-N1 / T07: fake-demo or gossip review inherited data-leak options and could record `repairedData` | Ethics review names the incident in its prompt and uses conduct-neutral truthful choices and repair memory. The player is not asked to report an unestablished download or data disclosure. | `qa/gate-regressions.js`; `qa/status-browser.js`; prior targeted fixture: `qa/results/batch3/thai/ethics-fake-demo.json` |
| B3-N2: tension repair could modify a different NPC than the one whose tension opened the gate | The tense actor is bound to the gate scene's repair effects and named in its prompt. | `qa/gate-regressions.js`; `qa/status-browser.js` |
| T06 / STU-04: a correct non-patch lesson answer claimed test results had been observed | Non-patch MCQ feedback uses neutral task-focused wording. Feedback refers to executed tests only when actual evaluator results exist. | `qa/choice-feedback-regressions.js`; prior visible evidence: `qa/results/batch3/thai/targeted-editorial.json` |
| Follow-up: technical task identity was missing from history context | The technical scene now carries the generated question title, prompt, and an ID-derived `sceneKey`. History stores that key and title; causal chain source text uses the actual task title. The base `id: 'technical'`, effects, and transitions are preserved. | Core/browser suite below; synthetic identifier: `technical:<generated question id>` |

Other batch findings are covered by `qa/targeted-regressions.js`, including first-day partial action, array-loop repair, teammate accusation consistency, and avoiding unsupported claims that an untested delivery was tested. No false claim of 161,000 independently authored or hand-drawn scenes is made: the graph is a compiled context DAG, with shared authored action families and deterministic scene rendering.

## Verification

The current verification run passed:

- `node --check sim-core.js` and `node --check sim-ui.js`
- `node qa/core-tests.js` — 17 checks, 161,000 nodes, 640,000 edges, 40 templates
- `node qa/gate-regressions.js`
- `node qa/choice-feedback-regressions.js` — eight domains, four choices each, truthful MCQ feedback, deadline chain and assessment evidence
- `node qa/targeted-regressions.js`
- `node qa/status-browser.js` — 14 assessment dimensions, 8 personal dimensions, 5 relationship dimensions, 15 threshold gates and 9 scene identifier render samples
- `node qa/profile-and-patch.js` — PDF extraction, matching UI, typed patch rejection/acceptance and graph explorer
- `node scripts/build-story-graph.js`, `node qa/graph-archive.js`, and `node scripts/package.js`

These automated checks establish the exercised source and browser behaviors only. They do not establish human enjoyment, student comprehension, ordinary-player success, a one-hour completion time, or exhaustive correctness of every possible route.
