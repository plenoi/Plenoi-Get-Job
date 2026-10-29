# Batch 7 — Thai-language teacher/editor review

Date: 2026-10-30 (Asia/Bangkok). Reviewer: Thai-language teacher/editor (Luna). Product browser-build SHA-256: `b2149ded4effa75096bca82e02f20d951669f2e406b6645fa4d83172155e23a1`. Normalized `sim-core.js` SHA-256 from `qa/results/graph-archive.json`: `2410e67dffdd4e5eba1eb6c9e5db62fb852caaa6cec396c6605e58461f5e6dc9`.

## Five fresh browser routes

Ran five full Headless Edge routes with `node qa/browser-tests.js --role=thai --batch=batch7`, seeds 2901–2905, and mixed, repair, and risk policies. These are scripted synthetic-profile routes, not human playtests.

| Round | Seed | Care | Policy | Result | Ending state | Illustrated checks |
|---:|---:|:---:|---|---|---|---:|
| 1 | 2901 | yes | mixed | PASS; 80 decisions, 4 visits, proposal/final exams 100 | Tier 3; energy 48; stress 0; sustainable | 198 |
| 2 | 2902 | yes | repair | PASS; 80 decisions, 4 visits, proposal/final exams 100 | Tier 3; energy 49; stress 0; sustainable | 194 |
| 3 | 2903 | no | risk | PASS; 80 decisions, 4 visits, proposal/final exams 100 | Tier 3; energy 45; stress 53; sustainable | 188 |
| 4 | 2904 | yes | mixed | PASS; 80 decisions, 4 visits, proposal/final exams 100 | Tier 3; energy 39; stress 0; sustainable | 197 |
| 5 | 2905 | yes | repair | PASS; 80 decisions, 4 visits, proposal/final exams 100 | Tier 3; energy 48; stress 0; sustainable | 194 |

All five runner reports record the assigned browser hash, zero page errors, and zero non-GET requests. Route evidence and screenshots are under `qa/results/batch7/thai/round-1` through `round-5`. I inspected the rendered lesson feedback and ending in round 1: the lesson explanation distinguishes `map` as a new array from `sale = prices` reusing the existing reference, and the ending headline `จบอย่างโดดเด่น แต่ยังไม่ได้รับข้อเสนอทำงาน` accurately says the player did not receive a job offer.

## Focused check: clarified `advancedTask` choice 0

Used one actual Headless Edge UI fixture, seeded into a database-family `advancedTask` gate, and selected choice 0. The rendered action is:

> ทดสอบจุดเสี่ยง แล้วส่งหลักฐานให้พี่เลี้ยงตรวจ

The visible response is:

> คุณกับพี่เลี้ยงทบทวนผล แล้วบันทึกวิธีตรวจซ้ำให้ทีมใช้

The action and reply now plainly describe sending evidence to the mentor, jointly reviewing the results, and recording a repeat-check method for the team. This is understandable Thai and supports the visible Communication +1 and Team Work +1 deltas. Other observed deltas were Working Quality +2, Problem Solving +2, Logical Thinking +2, and Planning +1. Expertise and Creativity did not change. The UI identified the response speaker as พี่เมย์, consistent with the addressed mentor. Screenshots and captured text/deltas are in `qa/results/batch7/thai/advanced-task-choice-0.png`, `advanced-task-choice-0-feedback.png`, and `advanced-task-choice-0.json`.

**Scoped verdict: clean for the five scripted Thai routes and this one changed-choice UI fixture.** I found no actionable Thai wording or score-evidence clarity issue in this scope. The scripted routes and seeded fixture do not measure comprehension or reactions from typical players, and this is not exhaustive coverage of all generated scenes.
