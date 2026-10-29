# Batch 6 — Light Novel editor

Date: 2026-10-29 (Asia/Bangkok). Reviewer: independent AI light-novel editor. Browser build SHA-256: `2a66d598add04bcd6459dba7d923b7d5caf02f0aae7451dbd30f61c9681ebd04`. Core normalized hash: `a4b48a490d06224abd9a6c6787b862a592b2faee2e4e308ef947875761c2cbb2`.

**Scoped verdict: not clean.** All five actual browser routes passed, and the Batch 5 assessment-credit defect is corrected. The focused review independently confirmed the P3 clarity mismatch in the favorable generic-gate choice: its visible action/reply do not explain the Communication and Team Work points it awards. No additional editorial finding was established beyond this T10 issue.

## Method and limits

Five fresh headless Edge interactions used synthetic profiles and internal answer keys for lessons, interview and exams at `http://127.0.0.1:4182/Plenoi-Get-Job/`. Choice and care policies varied by seed. A narrow actual-browser fixture in the database family exercised all four `advancedTask` options and compared the scores, then checked that a generated SQL task still earned SQL Expertise. I also inspected the choice-0 feedback screenshot.

These are scripted route checks and selected editorial inspection, not human playtesting, learner-comprehension evidence, an enjoyment rating, measured completion time, or exhaustive coverage. No product files were changed.

## Five actual browser rounds

| Round | Seed / policy | Care | Result | Ending / state |
|---|---|---:|---|---|
| 1 | 2601 / mixed | No | Pass; 80 work decisions, 4 advisor visits, both exams 100; 188 illustrated-state checks; no page errors or non-GET requests | Tier 2; energy 15, stress 60; unsustainable |
| 2 | 2602 / risk | Yes | Pass; 80 decisions, 4 visits, both exams 100; 198 checks; no errors or non-GET requests | Tier 3; energy 49, stress 0; sustainable |
| 3 | 2603 / repair | No | Pass; 80 decisions, 4 visits, both exams 100; 188 checks; no errors or non-GET requests | Tier 2; energy 15, stress 40; unsustainable |
| 4 | 2604 / mixed | Yes | Pass; 80 decisions, 4 visits, both exams 100; 199 checks; no errors or non-GET requests | Tier 3; energy 53, stress 0; sustainable |
| 5 | 2605 / risk | No | Pass; 80 decisions, 4 visits, both exams 100; 188 checks; no errors or non-GET requests | Tier 2; energy 13, stress 49; unsustainable |

Each route report records the frozen build hash. Reports and screenshots are under `qa/results/batch6/novel/round-1` through `round-5`. Illustrated-state totals are nonblank-canvas checks, not independently reviewed image counts.

## Targeted advanced-task and SQL contrast

The database-family `advancedTask` fixture exercised all four source choices. Every choice left Expertise and Creativity unchanged, and `SCENES.learning` remained unchanged. The four choices produced distinct, observable generic assessment effects. See `targeted/report.json` and the `advanced-task-database-choice-*` / `advanced-task-database-feedback-*` screenshots.

A separate generated SQL task displayed an actual SQL query and specific “customers with no orders” requirement. Its correct answer increased SQL Expertise from 30 to 33. The correct answer was selected using the test runner's key; this verifies the credit path for an actual SQL artifact, not unaided SQL ability. Evidence: `targeted/actual-sql-task.png`, `targeted/actual-sql-task-feedback.png`, and `targeted/report.json`.

## Actionable finding

### T10 — P3: solo risk-check does not explain its teamwork/communication credit

The visible option `ทดสอบจุดเสี่ยงที่ยังไม่มีหลักฐาน` produces the reply `คุณพบข้อผิดพลาดก่อนส่ง และบันทึกวิธีตรวจซ้ำไว้`. The actual feedback awards `Communication +1` and `Team Work +1`, as well as work-quality, problem-solving, logical-thinking and planning evidence. The choice/reply describe checking and recording; they do not say the player shared the evidence or reviewed the repeat-check with the mentor/team. The two relationship dimensions are therefore not apparent in the narrative feedback.

Evidence: `targeted/advanced-task-database-feedback-0.png` and the choice-0 entry in `targeted/report.json`. A narrow wording change can state that the player sends the evidence to the mentor/team and reviews the repeat-check together, matching the existing score effects. This is the same P3 clarity issue recorded as T10 in the Thai-language review; I independently confirmed it in the targeted browser fixture.

## Signoff

The five routes passed, the generic gate no longer awards specialty Expertise/Creativity, its cloned options do not mutate the shared learning scene, and real generated SQL work still earns SQL Expertise. **T10 remains actionable, so editorial signoff is withheld pending the wording repair and its targeted recheck.** These scripted results do not establish human enjoyment, comprehension or exhaustive route correctness.
