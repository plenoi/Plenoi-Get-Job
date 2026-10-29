# Batch 5 — visual novel/gameplay tester

Date: 2026-10-29 (Asia/Bangkok). Reviewer: independent AI visual novel/gameplay tester. Product build SHA-256: `abd5281b2efa4c18ccaa51c4781dd5183eb194d66bb553ffb0af6b1f2ea03a1d`. Core normalized hash: `603cb69f0355d1fab5a566665fefe82a1e10b7f6038476d8a720c5b13c79313e`.

## Five actual browser rounds

Five fresh headless Microsoft Edge scripted routes completed against `http://127.0.0.1:4182/Plenoi-Get-Job/`. The synthetic profile and answer keys drove the lessons, interview, and exams. Work decisions used mixed, risky, and repair policies, with and without optional care. These are route checks, not human playtests or measured student difficulty.

| Round | Seed | Policy | Care | Result | Ending / state | Illustrated checks |
|---:|---:|---|---|---|---|---:|
| 1 | 1901 | mixed | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 2; energy 13; stress 40; unsustainable | 188 |
| 2 | 1902 | risk | yes | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 48; stress 0; sustainable | 198 |
| 3 | 1903 | repair | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 43; stress 28; sustainable | 188 |
| 4 | 1904 | mixed | yes | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 51; stress 0; sustainable | 198 |
| 5 | 1905 | risk | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 35; stress 41; sustainable | 188 |

Each route records the same frozen build hash, zero page errors, zero non-GET requests, and an ending. Per-round evidence is under `qa/results/batch5/game/round-1` through `round-5`.

## Targeted acceptance checks

These used explicit in-memory fixtures and visible browser choices; they are not complete playthroughs.

- **Creative prototype:** At Creativity 60 and Adjustment 55, the visible gate asks the player to prove a prototype helps users. I chose the visible user-test action. Creativity rose 60→63, Expertise rose 30→32, and Adjustment rose 55→57; no Planning or Punctuality was awarded. This fixes the prior gate credit mismatch. See `targeted/creativeTrial-visible.png` and `targeted/creativeTrial-feedback.png`.
- **Facilitation:** At the communication/assertiveness/manner gate, the visible prompt and choices ask the player to help a peer and manager resolve different readings of work criteria. The selected consensus-seeking response awarded Communication +3, Manner +2, and Assertiveness +2. See `targeted/facilitate-visible.png` and `targeted/facilitate-feedback.png`.
- **Advanced task:** The JavaScript-family gate visible prompt asks the player to investigate an unresolved test case. Its selected response awards JavaScript Expertise +3, Problem Solving +2, and Logical Thinking +2. I also opened the gate under all eight synthetic run-family values and recorded the awarded dimensions in `advancedTask-family-matrix.json`; these fixtures override the run family after initializing a developer profile, so they verify the family mapping branch rather than eight authentic job selections.
- **Confirmed remaining issue — generic advanced task gives SQL expertise without a SQL artifact:** In the database-family fixture, the rendered task is still the generic prompt about investigating an unresolved test case. The selected response is “test the risk that lacks evidence.” No query, schema, data table, or database behavior appears, yet Expertise rises 70→73 as SQL-family expertise. This is unsupported domain-specific competence evidence. See `targeted/advancedTask-database-visible.png`, `targeted/advancedTask-database-feedback.png`, and `advancedTask-family-matrix.json`. Other family deltas are recorded there; this report only calls the SQL case actionable based on its clearly missing SQL artifact.
- **Deadline skip and repair:** The visible skip-check choice records `untestedDelivery`, without `overpromise`. The follow-up says the team later checked the work in another situation and found it did not meet the agreed condition; the title says the work failed criteria when checked later. This provides a temporal cue. Choosing the visible repeat-case/fix-cause action preserves `untestedDelivery`, records `repairedWork`, clears the active chain, and does not invent `repairedBug` or `overpromise`. Evidence: `targeted/deadline-followup.png`, `targeted/deadline-repair-feedback.png`, `deadline-repair.json`.
- **Offer and no-offer endings:** An eligible synthetic tier-4 fixture showed a simulated monthly offer of ฿46,742 and said the amount was in-game only. A tier-3 no-offer fixture showed the revised no-offer title and no salary amount; `salaryTHBPerMonth` was null. These checks verify the simulated ending UI, not a real employment promise. Evidence: `targeted/offer-ending.png`, `targeted/no-offer-ending.png`, and `targeted/report.json`.

## Game-design assessment and verdict

The tested options preserve agency across work responses, repair, care, and relationship scenes. The targeted follow-up now explains that the risk surfaced on a later check, and the ending distinguishes a simulated offer with a salary from an outstanding no-offer result. The full routes used predetermined work policies and answer keys for learning/interview/exam content; they do not establish ordinary-player challenge, enjoyment, comprehension, or completion time. I did not inspect every generated scene, branch, or ending.

**This batch is not clean.** The generic advanced task gives SQL expertise credit despite containing no SQL work. The other targeted fixes checked in this scope behaved as intended. Apply the domain-evidence correction and run another fresh five-round batch on the next frozen build.
