# Batch 6 — third-year Business Computing student review

Date: 2026-10-29 (Asia/Bangkok). Reviewer role: AI simulating a third-year Business Computing student preparing for internship, with basic JavaScript, SQL, Excel and web-project experience. This is not a human student study.

## Frozen product and method

Exact browser-build SHA-256: `2a66d598add04bcd6459dba7d923b7d5caf02f0aae7451dbd30f61c9681ebd04` (also matched the coordinator-provided frozen hash when the focused browser fixture ran).

Five fresh Headless Edge routes used `qa/browser-tests.js` at `http://127.0.0.1:4182/Plenoi-Get-Job/`, with seeds 2401–2405, varied work policies, and care enabled in some routes and disabled in others. The synthetic runner uses internal answer keys for lesson, interview, and exam questions. It checks rendered scene canvases, 80 work decisions, four advisor visits, both exam scores, mobile office overflow, browser errors, non-GET requests, and the unchanged product hash. Its canvas-check count does not represent independently reviewed scenes or images.

The routes are scripted functional checks, not a human playtest, unaided student performance, measured learning, enjoyment, or completion-time evidence. The focused generic-gate sample selected the four shuffled visible buttons by their screen position and captured the assessment delta and response. A separate generated SQL task used the runner's correct-answer key to check that actual SQL work still earns SQL Expertise. These fixtures do not establish human ability. No product files or shared QA tests were changed; evidence is in `qa/results/batch6/student/`.

## Five fresh browser routes

| Round | Seed / work policy / care | Route result | Ending snapshot |
|---|---|---|---|
| 1 | 2401 / mixed / yes | Pass; 198 illustrated-state checks; 80 decisions; 4 visits; proposal/final 100; no browser errors or non-GET requests | Tier 3; energy 48; stress 0; sustainable |
| 2 | 2402 / repair / yes | Pass; 197 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 3; energy 40; stress 0; sustainable |
| 3 | 2403 / risk / no | Pass; 188 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 2; energy 15; stress 38; unsustainable |
| 4 | 2404 / mixed / yes | Pass; 198 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 3; energy 48; stress 0; sustainable |
| 5 | 2405 / repair / no | Pass; 188 checks; 80 decisions; 4 visits; both exams 100; no errors or non-GET requests | Tier 2; energy 17; stress 28; unsustainable |

Full machine reports and screenshots are in `qa/results/batch6/student/round-1` through `round-5`. In this small sample, the two no-care runs reached lower, unsustainable endings; this is not a balance or player-success estimate.

## Changed generic advanced-task gate

In an actual browser fixture for the SQL job family, I selected each of the four visible choices by its shuffled button position. The visible text, captured feedback and before/after assessment are in `qa/results/batch6/student/advanced-task/report.json`; question and feedback screenshots are alongside it.

| Visible choice | Visible action | Assessment delta | SQL Expertise / Creativity |
|---:|---|---|---|
| 1 | Ask one main user for feedback | Working Quality +2, Problem Solving +1, Team Work +2, Communication +1 | unchanged / unchanged |
| 2 | Send without checking because no bug has been reported | Planning −1, Problem Solving −1, Working Quality −2, Team Work −1, Communication −1, Systematic Thinking −2 | unchanged / unchanged |
| 3 | Polish the details first | Working Quality +1 | unchanged / unchanged |
| 4 | Test an unverified risk | Planning +1, Problem Solving +2, Working Quality +2, Team Work +1, Communication +1, Systematic Thinking +2 | unchanged / unchanged |

The displayed response matched the visible action: requesting feedback shows the missed user difficulty; sending without checking explains that an undiscovered error is not proof there is none; polishing notes the unresolved risk; testing describes finding and recording a repeatable check. None of the four actions increased Expertise or Creativity in this SQL-family gate. The associated deltas also distinguish user feedback, surface polish, investigation, and unchecked delivery. This addresses the confirmed student-relevant evidence mismatch in the sampled choices.

## Actual SQL artifact remains rewarded

A separate generated technical task showed SQL and a real query:

```sql
SELECT customer_id, COUNT(*) AS n
FROM orders
GROUP BY customer_id
-- ต้องการ n > 6
```

The visible question asked where to filter customers with more orders than the threshold. The options included `HAVING COUNT(*) > 6`; selecting the correct visible answer raised SQL Expertise from 30 to 33. The actual question and explanation are shown in `advanced-task/sql-question.png` and `advanced-task/sql-feedback.png`, and the answer/delta are preserved in `advanced-task/report.json`. This is a focused oracle-assisted check that concrete SQL work still earns domain credit, not a blind student assessment.

## Student-scope verdict and limits

**No new actionable student-level issue was found in the prepared Batch 6 scope.** All five fresh routes completed. The selected generic gate actions produced their visible, choice-specific generic assessment effects without specialty Expertise or Creativity, while the generated correct SQL task retained SQL Expertise credit.

This report is limited to those routes and this gate/SQL evidence. It does not retest unchanged CV/PDF matching, the full Business Analyst supplement, salary wording, or the earlier blind interview sample. The scripted routes use answer keys and synthetic profiles; no real student comprehension or ordinary-player success is established. Other reviewers' scopes and any remaining story branches are not cleared by this student review.
