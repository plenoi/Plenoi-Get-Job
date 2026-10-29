# Batch 5 — Light Novel editor

Date: 2026-10-29 (Asia/Bangkok). Reviewer: independent AI light-novel editor. Product SHA-256: `abd5281b2efa4c18ccaa51c4781dd5183eb194d66bb553ffb0af6b1f2ea03a1d`.

**Editorial decision: changes required; Batch 5 is not clean.** Five full browser routes completed on the unchanged product build. Targeted narrative checks confirmed the Batch 4 fixes for the no-offer title, offer salary labeling, causal follow-up and repair closure. One assessment-evidence mismatch remains in the advanced-task gate.

## Method and limits

The five actual headless Edge routes used synthetic profiles and known answer keys for lessons, interview and exams at `http://127.0.0.1:4182/Plenoi-Get-Job/`. The seeded work policies vary choices and optional care. I separately inspected the actual visible advanced-task screen and exercised targeted browser fixtures for the skill gates, skipped-test chain, ending recap and offer/no-offer presentation.

These are scripted route checks and selected editorial inspection, not human playtesting, student-comprehension evidence, an enjoyment rating or measured completion time. The five full routes use the first development-related job; the targeted SQL fixture covers the database job family. This is not exhaustive coverage of every job, generated question or story-history combination. No product files were changed.

## Five actual browser rounds

| Round | Seed / policy | Care | Result | Ending snapshot |
|---|---|---:|---|---|
| 1 | 2001 / mixed | No | Pass; 80 work decisions, 4 advisor visits, both exams 100; 188 illustrated-state checks; no page errors or non-GET requests | Tier 3; energy 35, stress 47; sustainable under the game's threshold |
| 2 | 2002 / risk | Yes | Pass; 80 decisions, 4 visits, both exams 100; 198 checks; no errors or non-GET requests | Tier 3; energy 49, stress 0; sustainable |
| 3 | 2003 / repair | Yes | Pass; 80 decisions, 4 visits, both exams 100; 197 checks; no errors or non-GET requests | Tier 3; energy 40, stress 0; sustainable |
| 4 | 2004 / risk | No | Pass; 80 decisions, 4 visits, both exams 100; 188 checks; no errors or non-GET requests | Tier 3; energy 35, stress 41; sustainable under the game's threshold |
| 5 | 2005 / mixed | Yes | Pass; 80 decisions, 4 visits, both exams 100; 199 checks; no errors or non-GET requests | Tier 3; energy 47, stress 0; sustainable |

Per-round JSON reports and screenshots are in `qa/results/batch5/novel/round-1` through `round-5`. The illustrated-state count is the runner's nonblank-canvas assertion count, not a count of independently inspected images.

## Actionable finding

### B5-N1 — Medium: generic test-planning choice grants unshown specialty expertise

The `advancedTask` screen says a prior test did not cover a case and offers generic actions: test a risk, ask a user, polish details, or send without testing. In the visible database-family fixture, there is no SQL query or database task for the player to solve. Choosing the favorable “test a risk” action raises SQL Expertise from 70 to 73 because `sceneForRun()` assigns the active family’s technical domain and `act()` awards that domain’s successful assessment effect.

The action supports general evidence such as problem solving and work quality. The screen does not establish SQL expertise in particular. This is also a risk for the other job families because the same generic gate is mapped to each specialty. Evidence: `targeted/advanced-task-sql.png`, `targeted/report.json`, and the source/regression inspection of the `advancedTask` gate.

**Requested fix:** either show and assess a family-specific artifact in this gate, or credit only the general evidence demonstrated by its choices. Do not grant the specialty `Expertise` dimension unless the player performs a visible specialty task. Add a favorable-choice regression that catches the unsupported expertise increase for the SQL case and representative other families.

## Batch 4 acceptance checks confirmed

- `creativeTrial` displays a user-prototype task and routes its favorable action to UX evidence; `facilitate` routes to communication evidence. The focused fixture also checked the relevant gates and `advancedTask` family mappings across all eight families. Evidence screenshots: `targeted/creative-trial-ux.png`, `targeted/facilitate-communication.png`.
- All 200 tier-3 descriptor combinations use the clear no-offer title `จบอย่างโดดเด่น แต่ยังไม่ได้รับข้อเสนอทำงาน`; the tier-4 descriptor remains an offer. A rendered tier-3 closure kept its route recap and used the repaired-work learning callback.
- The simulated eligible offer rendered **48,068 baht/month**, explicitly labeled as a game-only amount. The no-offer fixture displayed no salary. Evidence: `targeted/offer-simulated-salary.png` and `targeted/repaired-work-closure.png`.
- Skipping the deadline test recorded `untestedDelivery`, not `overpromise`, and led to a later-check scene whose time cue and neutral work language fit the skipped-test route. Repair added `repairedWork`, kept the original fact, and selected the callback about turning a missed criterion into a learning case and repeatable check. Evidence: `targeted/technical-followup.png` and the fixture report.

The current product description continues to characterize the 161,000 records as a context DAG with shared authored scenes and deterministic illustrations, not 161,000 individually written novels or hand-painted scenes. The ending catalog is described as closure variants whose actual outcome remains evidence-gated.

## Signoff

The five routes passed and the Batch 4 narrative/title/offer fixes behaved as intended in the targeted scope. **B5-N1 is an actionable assessment mismatch, so editorial signoff is withheld pending the collective fix and a fresh five-round review on the next frozen build.** No human enjoyment, comprehension or exhaustive-coverage claim is made.
