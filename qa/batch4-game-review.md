# Batch 4 — visual novel/gameplay tester

Date: 2026-10-29 (Asia/Bangkok). Reviewer: independent AI visual novel/gameplay tester. Product build SHA-256: `c85f054997843d75cd41678ed6e2bdec36b03bff9ac391c726622cbb18b1bdc6`. Core normalized hash: `926167fbdebe6e26bb9632a92754cc0d3843dc291ab926af55771125b0b22e0d`.

## Five actual browser rounds

Five fresh headless Microsoft Edge runs completed against `http://127.0.0.1:4182/Plenoi-Get-Job/`. They used the scripted synthetic profile and known answer keys for lessons/interview/exams. Work choices were varied by seeded mixed, risk, and repair policies, with and without optional care. These are browser route checks, not human playtests or measured student difficulty.

| Round | Seed | Policy | Care | Result | Ending / state | Illustrated checks |
|---:|---:|---|---|---|---|---:|
| 1 | 1501 | mixed | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 2; energy 13; stress 40; unsustainable | 188 |
| 2 | 1502 | risk | yes | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 49; stress 0; sustainable | 198 |
| 3 | 1503 | repair | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 2; energy 24; stress 27; unsustainable | 188 |
| 4 | 1504 | mixed | yes | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 48; stress 0; sustainable | 198 |
| 5 | 1505 | repair | yes | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 54; stress 0; sustainable | 195 |

Each report records the frozen build hash, zero page errors, zero non-GET requests, and an ending. Per-round screenshots and JSON reports are under `qa/results/batch4/game/round-1` through `round-5`.

## Targeted visible checks

The additional browser checks use synthetic in-memory fixtures, and are not a blind full-game playthrough. Screenshots and state evidence are under `qa/results/batch4/game/targeted`.

- **Wrong code response:** I read the visible task and chose `price + qty` for a displayed multiplication requirement (`total(60, 8)` should be 480) without consulting the question answer key. The evaluator showed outputs 68, 4, and 15 against expected 480, 0, and 36. The game reduced work quality 50→47 and assessed Working Quality 30→29; assessed Expertise stayed 30. It recorded `workCheckFailed`. The visible feedback explains multiplication. The prior positive competence reward defect was not reproduced.
- **Deadline shortcut:** At the deadline scene, I chose the visible “skip checking so it can be delivered on time” option. The route recorded `untestedDelivery` and did not record `overpromise`. The next visible scene followed the technical-risk chain. It is still worded as “the test result does not meet criteria,” although the player chose to skip testing; the title says a bug returned when another person used it. The chain follows a technical risk, but this immediate follow-up does not establish who tested the work or when. The wording can be read as though the skipped check itself had produced a failed result. A temporal cue that another person later found the defect would make the causal sequence clearer. Evidence: `deadline-visible.png`, `deadline-feedback.png`, `deadline-followup.png`.
- **Fake-demo ethics review:** The prompt named the false demo claim, and visible answers concerned accountability, facts, and repair rather than downloads or shared files. Choosing the truthful answer retained `fakeDemo`, added `repairedConduct`, and did not add `repairedData`. Evidence: `fake-demo-ethics-visible.png`, `fake-demo-ethics-feedback.png`.
- **HR-only tension:** With HR as the only actor at high tension, the scene named พี่ลิน. The best visible response reduced her tension. Evidence: `hr-tension-visible.png` and `report.json`.
- **Creative-prototype gate:** With Creativity 60 and Adjustment 55, the visible gate asked the player to prove a prototype helps users. I chose the best visible action, “let a user try one task and observe the blocked step.” Creativity stayed 60, while Planning rose by 3, Punctuality by 2, and Motivation by 2. Working Quality, Problem Solving, Communication, and Team Work each rose by 1 through inferred evidence. The action and gate threshold are about user-centered design, so crediting planning/punctuality without any Creativity or UX evidence is a material assessment mismatch. Evidence: `creative-trial-visible.png` and `report.json`.
- **Lesson MCQ wording:** A correct UX MCQ answer displayed “this approach fits the task” and no test-result panel. The targeted wording assertion selected the answer from the internal key, so this check verifies feedback truthfulness, not learner ability.
- **Offer ending:** An eligible synthetic high-performance fixture displayed “offer to continue working” and “with compensation in the story,” with no concrete salary amount or terms. Evidence: `offer-ending.png` and `offer-ending.json`. This verifies what the simulated ending says; it does not establish any real job offer.

## Game-design assessment and verdict

The tested route gives the player meaningful control over work responses, repair, rest, and relationship scenes. Visible work exercises connect actions to specific code and feedback, and the no-care versus care runs produced different sustainability states. The targeted screens are readable at the inspected desktop viewport. The standard runner uses predetermined work-choice policies, and lessons/interview/exams use answer keys; these results do not establish ordinary-player challenge, enjoyment, comprehension, or one-hour completion. I did not inspect every scene, job family, generated question, or ending.

**This batch is not clean.** The creative-prototype assessment mismatch is a confirmed actionable issue. The skipped-test follow-up leaves the discovery timing unclear. If the requested hired ending requires a salary, the current offer banner lacks concrete pay details. Fix the actionable findings collectively, then run a new five-round batch on the resulting frozen build.



