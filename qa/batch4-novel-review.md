# Batch 4 — Light Novel editor

Date: 2026-10-29 (Asia/Bangkok). Reviewer: independent AI light-novel editor. Editorial decision: **clean in the tested scope; no new actionable editorial finding.** This is a scoped signoff, not a claim that every possible route is defect-free.

## Build and method

All five actual browser-round reports use product SHA-256 `c85f054997843d75cd41678ed6e2bdec36b03bff9ac391c726622cbb18b1bdc6`. Each was a separate headless Microsoft Edge interaction with a synthetic profile against `http://127.0.0.1:4182/Plenoi-Get-Job/`. The runner uses answer keys for lessons, interview and exams; varied work-choice/rest policies exercise different consequences. I separately read visible choices and inspected screenshots for the narrative and ending, and ran actual-browser targeted fixtures for the conduct review, affected-person tension gate, deadline shortcut chain and ending recap.

These are scripted route-integration checks plus editorial inspection, **not independent human playtesting, learner-comprehension evidence, a fun rating, or a measured completion-time study**. The five full rounds use the first development-related job. The targeted fixtures cover only the named cases below; this batch does not exhaust all jobs, endings, or graph/history combinations. No product files were edited.

## Five executed rounds

| Round | Seed / choice policy | Care | Browser result | Ending / narrative observations |
|---|---|---:|---|---|
| 1 | 1601 / risk | No | Pass; 80 work decisions, 4 advisor visits, both exams 100, 188 illustrated-state checks; no page errors or non-GET requests | Tier 2, energy 22, stress 29, unsustainable. Inspected `round-1/ending.png`: the ending acknowledges recovery needs and lists route facts; its callback refers to the actually repaired bug. |
| 2 | 1602 / mixed | Yes | Pass; 80 decisions, 4 visits, both exams 100, 199 illustrated-state checks; no errors or non-GET requests | Tier 3, energy 51, stress 0, sustainable. Inspected `round-2/ending.png`: successful closure remains distinct from a job offer and retains evidence-based summaries. |
| 3 | 1603 / repair | Yes | Pass; 80 decisions, 4 visits, both exams 100, 198 illustrated-state checks; no errors or non-GET requests | Tier 3, energy 43, stress 0, sustainable. Includes repaired bug/deadline facts and an unresolved handoff/block, retained in the recap. |
| 4 | 1604 / risk | Yes | Pass; 80 decisions, 4 visits, both exams 100, 198 illustrated-state checks; no errors or non-GET requests | Tier 3, energy 49, stress 0, sustainable. Includes a repaired deadline plus an uncorrected work-check failure; the route does not erase either fact. |
| 5 | 1605 / mixed | No | Pass; 80 decisions, 4 visits, both exams 100, 188 illustrated-state checks; no errors or non-GET requests | Tier 3, energy 41, stress 51, sustainable by the game's stated threshold; stress remains visible in the status recap rather than being described as zero. |

Full machine details and screenshots are in `qa/results/batch4/novel/round-1` through `round-5`. The illustrated-state number is the runner's nonblank-canvas check count, not the number of saved screenshots.

## Targeted narrative and causality inspection

The actual-browser targeted report is `qa/results/batch4/novel/targeted/report.json`, with screenshots alongside it and the reproducible fixture script at `qa/results/batch4/novel/targeted-review.js`.

- A `fakeDemo` conduct review names the unverified demo claim, contains no unestablished download/link-disclosure options, and records `repairedConduct` without `repairedData` after the accountability choice. See `targeted/ethics-fake-demo.png`.
- An HR-only tension fixture names พี่ลิน and lowers her tension from 70 to 67; mentor, lead and peer tension remain unchanged. See `targeted/tension-hr.png`.
- The visible deadline option “ข้ามการตรวจ … เพื่อให้ส่งทัน” produces `untestedDelivery`, not `overpromise`, and opens the `technicalChain` follow-up about the skipped test. See `targeted/deadline-choice.png` and `targeted/deadline-followup.png`.
- The ending fixture retains both the actual demo incident label and the separate conduct-repair label in “สิ่งที่ทีมจำได้”. Since `repairedConduct` is a neutral conduct repair rather than a data repair, the descriptor uses its generic callback instead of claiming data practices changed. The ordinary round screenshots also show that the user-facing recap distinguishes the full 80 work decisions from optional conversations/practice.

The source and product description correctly characterize the 161,000 graph records as a context DAG with shared authored scenes and deterministic illustrations, not 161,000 individually written novels or hand-painted images. Closure variants are a catalog combining outcomes/themes/voices/next steps/callbacks, with run evidence still governing the result. I found no new prose-to-effect or character-to-effect contradiction in the inspected route set.

## Signoff

**No new actionable editorial issue was observed in this frozen-build batch.** The five routes completed and the targeted scenarios behaved consistently with their visible choices and stored evidence. This clean scoped result must not be read as a human enjoyment/comprehension rating or exhaustive coverage of the full state graph.
