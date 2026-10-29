# Batch 6 — visual novel/gameplay tester

Date: 2026-10-29 (Asia/Bangkok). Reviewer: independent AI visual-novel/gameplay tester. Product build SHA-256: `2a66d598add04bcd6459dba7d923b7d5caf02f0aae7451dbd30f61c9681ebd04`. Core normalized hash: `a4b48a490d06224abd9a6c6787b862a592b2faee2e4e308ef947875761c2cbb2`.

## Five actual browser rounds

Five fresh headless Edge scripted routes completed at `http://127.0.0.1:4182/Plenoi-Get-Job/`. The synthetic profile and answer keys drove the lessons, interview, and exams. Work choices varied across mixed, risk, and repair policies, with and without optional care. This is route integration evidence, not human playtesting or measured student difficulty.

| Round | Seed | Policy | Care | Result | Ending / state | Illustrated checks |
|---:|---:|---|---|---|---|---:|
| 1 | 2301 | mixed | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 2; energy 26; stress 38; unsustainable | 188 |
| 2 | 2302 | risk | yes | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 49; stress 0; sustainable | 198 |
| 3 | 2303 | repair | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 2; energy 16; stress 24; unsustainable | 188 |
| 4 | 2304 | mixed | yes | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 48; stress 0; sustainable | 198 |
| 5 | 2305 | risk | no | PASS, 80 decisions, 4 visits, both exams 100 | tier 3; energy 35; stress 38; sustainable | 188 |

All five reports recorded the same frozen product hash, zero page errors, zero non-GET requests, and an ending. Evidence is under `qa/results/batch6/game/round-1` through `round-5`.

## Targeted advanced-task acceptance

I drove the gate through its visible browser UI using synthetic in-memory family overrides, reading each visible option and selecting each of the four source choices across all eight families. The fixture checks the gate's family mapping; it does not represent eight independently selected job profiles.

| Family fixture | Options checked | Result |
|---|---:|---|
| dev | 4 | Generic per-choice deltas; no Expertise or Creativity |
| database | 4 | Generic per-choice deltas; no Expertise or Creativity |
| design | 4 | Generic per-choice deltas; no Expertise or Creativity |
| test | 4 | Generic per-choice deltas; no Expertise or Creativity |
| analyst | 4 | Generic per-choice deltas; no Expertise or Creativity |
| marketing | 4 | Generic per-choice deltas; no Expertise or Creativity |
| support | 4 | Generic per-choice deltas; no Expertise or Creativity |
| business | 4 | Generic per-choice deltas; no Expertise or Creativity |

Across the matrix, risk checking raised work quality, problem solving, logical thinking, and planning; asking a user for feedback raised work quality/problem solving and teamwork/communication; polishing details gave a small work-quality gain; and sending unchecked reduced work quality, reasoning, planning, teamwork, and communication. No option awarded specialty Expertise or Creativity in any family. `SCENES.learning` remained unchanged after exercising the gate. The report records every visible label and assessment/stat delta in `qa/results/batch6/game/targeted/advanced-task-matrix.json`. Representative family screens and all four database-family choice feedback screenshots are alongside it.

A separate real SQL exercise showed a `SELECT` statement with `paid_at = NULL`, sample rows, and four visible answers. Using the generated question answer key to select the visible `WHERE paid_at IS NULL` option gave SQL / Database skill +6 and Expertise +3 (30→33), with feedback explaining why `IS NULL` is needed. This is an integration regression check, not a blind knowledge assessment; it confirms domain-specific expertise remains tied to an actual SQL task. Evidence: `actual-sql-question-visible.png` and `actual-sql-question-feedback.png`.

## Game-design assessment and verdict

The generic gate now gives different, readable consequences to its four choices without pretending that a cross-functional investigation proves a specialty skill. A domain-specific exercise still ties its reward to visible evidence. The broader seeded routes reached their expected decision, exam, and advisory counts with different care/resource outcomes. The runners use predetermined policies and answer keys, so they do not establish typical-player challenge, enjoyment, comprehension, or completion time. I did not inspect every generated scene or graph route.

**Scoped verdict: clean for the Batch 6 game-review scope.** I found no actionable issue in the five scripted routes or the 32 visible advanced-task choices and SQL knowledge-credit probe. This does not claim exhaustive correctness or human playtest coverage.


## Trace clarification

The risk-check choice also shows Communication +1 and Team Work +1, inferred from its +2 mentor relationship effect. I treated this as non-actionable in this scene: the visible response is from the mentor and says the discovered defect and repeatable check were recorded, so the small team/communication inference is plausible as team-usable evidence. The existing regression expects those two +1 values for this choice. It does not reintroduce the unsupported specialty Expertise/Creativity that this batch was checking.
