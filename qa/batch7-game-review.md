# Batch 7 — visual novel/gameplay review

Date: 2026-10-30 (Asia/Bangkok). Reviewer: independent AI visual-novel/gameplay tester. Product browser-build SHA-256: `b2149ded4effa75096bca82e02f20d951669f2e406b6645fa4d83172155e23a1`. Normalized core SHA-256: `2410e67dffdd4e5eba1eb6c9e5db62fb852caaa6cec396c6605e58461f5e6dc9`.

## Five fresh gameplay routes

Five seeded Headless Edge routes completed against the same frozen product hash. The runner uses a synthetic profile and predetermined answers/policies; this is route integration evidence, not human playtesting.

| Round | Seed | Policy | Care | Result | Ending / state | Illustrated checks |
|---:|---:|---|---|---|---|---:|
| 1 | 2701 | mixed | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 2; energy 13; stress 40; unsustainable | 188 |
| 2 | 2702 | risk | yes | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 59; stress 0; sustainable | 198 |
| 3 | 2703 | repair | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 2; energy 16; stress 24; unsustainable | 188 |
| 4 | 2704 | mixed | yes | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 51; stress 0; sustainable | 196 |
| 5 | 2705 | risk | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 45; stress 53; sustainable | 188 |

All five reports recorded the assigned browser hash, zero page errors, zero non-GET requests, and the expected ending. Evidence is in `qa/results/batch7/game/round-1` through `round-5`.

## Clarified risk-check choice

I checked one actual rendered `advancedTask` UI fixture (synthetic database-family state at stage 16). The visible choice reads “ทดสอบจุดเสี่ยง แล้วส่งหลักฐานให้พี่เลี้ยงตรวจ”; after selecting it, the visible reply reads “คุณกับพี่เลี้ยงทบทวนผล แล้วบันทึกวิธีตรวจซ้ำให้ทีมใช้”. The response explicitly connects the score changes to evidence shared with and reviewed by the mentor for team reuse: Communication +1, Team Work +1, and mentor relationship +2. Expertise and Creativity each changed by 0. This resolves the prior wording ambiguity in this fixture; it does not establish comprehension for typical players. Full UI evidence, including before/after screenshots, is in `qa/results/batch7/game/targeted/choice0-ui.json` and its sibling PNG files.

## Game-design assessment and verdict

The five routes reached their expected work, advisor, and exam counts with differing endings and resource states under the chosen policies. The focused UI check confirms the revised choice/reply now makes the small communication and teamwork effects legible in the selected mentor-review scene. The scripted profiles and policies do not measure player challenge, comprehension, enjoyment, or completion time. I did not inspect every generated scene or graph path.

**Scoped verdict: clean for the Batch 7 game-review scope.** No actionable issue was found in the five scripted routes or the one focused visible choice/reply check. This does not claim exhaustive correctness or human playtest coverage.
