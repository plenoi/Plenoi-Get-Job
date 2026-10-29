# Batch 1 — Light Novel editor review

Date: 2026-10-29, Asia/Bangkok.

**Decision: not a clean narrative batch.** All five scripted browser runs passed their technical assertions, but the editorial findings below require changes and a new five-round batch.

## Build and method

All five reports record the same build hash:

`2f2f0e77ba34c9ab551bd369f90823518fdb0a01c4c855d4c10eaed92cfc599a`

Commands were executed sequentially, without product or test edits by this reviewer:

```text
node qa/browser-tests.js --batch=batch1 --role=novel --round=1 --seed=201
node qa/browser-tests.js --batch=batch1 --role=novel --round=2 --seed=202
node qa/browser-tests.js --batch=batch1 --role=novel --round=3 --seed=203
node qa/browser-tests.js --batch=batch1 --role=novel --round=4 --seed=204
node qa/browser-tests.js --batch=batch1 --role=novel --round=5 --seed=205
```

This is **headless Edge scripted interaction using a synthetic profile**, combined with independent source inspection and inspection of the saved screenshots. It is not human playtesting, a comprehension study, five differently authored player personalities, or exhaustive story/ending coverage. The runner reads the internal correct answer for lessons/interview/exams. Its work route uses source choice 0 except source choice 2 every thirteenth decision, after deliberately choosing gossip. Therefore it proves that this mixed competent/error route is playable, not that a student can infer every answer or that the game is fun.

Each run reached 80 completed core work decisions, four advisor visits, Proposal 100, final 100, and tier 3. Each checked 188 nonblank illustrated render states, recorded zero page errors, and recorded zero non-GET requests. The count is **canvas checks**, not 188 saved screenshots.

## Per-round evidence

| Round / seed | Evidence inspected | Result and editorial focus |
|---|---|---|
| 1 / 201 | `results/batch1/novel/round-1/report.json`, `causal-followup.png`, `office.png`, `ending.png`; `scenario`, `transition`, `outcome` | Script passed. Gossip visibly leads to a conflict scene with four choices. Short setup reads clearly. Ending still suppresses work/team/wellness summaries; see N4/N6. |
| 2 / 202 | `results/batch1/novel/round-2/report.json`, `lesson-feedback.png`, `causal-followup.png`, `mobile.png`; `feedback`, `answerLesson`, `factLabels` | Script passed. Technical explanation is readable and separate from short dialogue. Teacher dialogue is labeled/drawn as mentor; unknown facts become repeated generic labels. See N5/N6. |
| 3 / 203 | `results/batch1/novel/round-3/report.json`, `ending.png`, `lesson-feedback.png`; direct pure-core scenario probes | Script passed. Core proves repeated missing-credit scene at stages 3, 11, 19. Borrowed-account next scene assumes an unestablished external link disclosure. See N1/N2. |
| 4 / 204 | `results/batch1/novel/round-4/report.json`, `causal-followup.png`; `answerTalk`, `scenario`, health text and runtime stats | Script passed. Gossip-to-conflict works in isolation, but source shows it replaces a currently open work incident. Health setup is independent of actual health/energy. See N3/N4. |
| 5 / 205 | `results/batch1/novel/round-5/report.json`, `ending.png`; `STORY_DESIGN.md`, `storygraph/manifest.json`, ending descriptor/UI | Script passed. Documentation honestly calls the 162,500 records a compiled context graph with shared scenes. Only tier 3 was browser-tested here. Narrative findings remain; no clean-batch claim. |

All screenshots cited above were opened and visually inspected. The five seeds vary avatar/lesson/ordering details; identical outcome/fact sets are expected from this runner's fixed decision policy and are not alone evidence of a seed defect.

## Findings for the Full Stack Dev

### N1 — High: monthly incidents repeat without dramatic progression

`scenario()` uses the same eight-slot schedule each month and selects the same authored scene object when no chain is open. The chapter label changes, but the underlying setup/choices do not. Direct pure-core probe gives the identical title and text at stages 3, 11 and 19:

```text
เครดิตหายไปหนึ่งชื่อ
ในสไลด์เดโมไม่มีชื่อคุณ ทั้งที่คุณทำส่วนสำคัญ เพื่อนอาจลืมหรืออาจตั้งใจ
```

This means a teammate can omit the same name again each month after previously apologizing and fixing the slide, without acknowledging that history. Deadline, review, fatigue and handoff scenes similarly recur. `SCENES` contains 13 templates; a large state graph does not by itself solve this repeat-content complaint.

**Fix:** give the month/stage meaningful short variants or named callbacks: first attribution mistake → later role/ownership agreement → cross-team credit decision → final handoff acknowledgement. Repeated incidents should acknowledge prior resolution or change the facts/stakes. Carry a resolved fact when a positive choice closes an incident. The primary technical tasks can continue to vary by domain/level, but the surrounding work story also needs to progress.

### N2 — High: account-sharing jumps to a data-link disclosure with no setup

Pure-core reproduction (not a browser path): initialize a dev run; choose welcome option 2, “ขอยืมบัญชีเพื่อนเข้าระบบก่อน”. The visible reply concerns auditability of a shared account, but the next scene is:

```text
ต้องตามข้อมูลที่เผยแพร่
ผู้ดูแลถามว่าลิงก์ถูกส่งไปที่ใดบ้าง ทีมต้องรู้ขอบเขตก่อนแก้ความเสียหาย
```

No link or external recipient was established. Welcome sets chain 3, while all chain-3 text assumes a customer-data link disclosure. Separately, `SCENES.data` exists but no chain-free scheduled slot selects it (`scheduledData=0` in 80 chain-free stages), so the intended disclosure setup is not normally visited.

**Fix:** use a specific account-access follow-up or write a precise account-to-disclosure bridge if that consequence is intended. Schedule the actual data incident at an appropriate stage, and reserve its disclosure follow-up for a real disclosure flag. Do not use one generic chain label for causally different incidents without contextual text.

### N3 — High: gossip can erase an unresolved work consequence

`answerTalk(2)` unconditionally writes `ctx.chain = 4`. If the player has an open technical, deadline or data chain, this replaces it with the relationship chain. The earlier mistake remains in `facts` but its active repair scene is no longer selected. The supplied browser route gossips before the first work scene, so it does not exercise this collision; this finding is from source inspection.

**Fix:** retain/queue the existing issue and schedule the relationship consequence after it, or store independently pending chains beside the graph context. Clearing the displayed chain must not silently resolve unrelated defects. Add a targeted check: open bug → gossip → repair conflict → bug is still awaiting repair.

### N4 — Medium/high: health setup and ending closure ignore the actual workload state

The fixed health scene asserts several nights of poor sleep and repeated reading errors even if the player has rested before every action. Its selection cannot inspect numeric energy/health because `scenario(ctx)` receives only graph context. Conversely, all five tested endings show energy **1**, stress **100**, health **100**, and an outstanding tier-3 title with a generic repaired-bug callback. There is no prose acknowledging the extreme strain.

**Fix:** provide a high-energy alternative setup or gate the fatigue incident on actual energy/pressure. At the ending, show a workload/energy/stress closure alongside health, for example a credible recommendation to recover and renegotiate future load. This need not downgrade technical work; it should accurately describe the route. Illness itself must not become misconduct.

### N5 — Medium: the named speaker and illustrated reaction do not always match the dialogue

In `round-2/lesson-feedback.png` and `round-3/lesson-feedback.png`, the bubble is labeled **พี่เมย์** but the text begins **อ.กฤตพล ยิ้ม...**. `feedback()` defaults actor to mentor, and the lab renderer shows a mentor sprite. In office feedback, the supplied `mood` changes the player sprite; office NPC faces come only from cumulative relationship thresholds. Gossip changes peer 50→46 (still neutral), while text says the peer's face changes. This weakens the requested immediate character reaction.

**Fix:** pass an explicit speaker/actor/teacher descriptor to feedback and render that actor's momentary expression separately from long-term relationship mood. Maintain the player avatar independently. A teacher's line should have that teacher's name and portrait/scene actor.

### N6 — Medium: ending descriptors contain route-specific closure that the UI omits

`endingDescriptor(v)` computes work, team, wellness and callback summary strings, but `ending()` renders only the generic callback, a generic banner and recent fact tags. This hides much of the promised distinction between the 2,500 terminal descriptors. In all five screenshots, two recent facts display the identical fallback **บทเรียนจากงานก่อนหน้า**, because `badHandoff` and `hiddenBug` are not mapped by `factLabels`.

**Fix:** render the actual descriptor summaries with concrete run-history references; map every authored fact to a meaningful label (and ideally a short resolution state). Show unresolved issues rather than presenting only a repaired callback. A leaf's textual and visual distinction should correspond to what that run actually did.

## Improvements that passed this scope

- The sampled scene prose is concise: 13 authored templates, longest setup 80 JavaScript string characters and longest authored choice 48. Technical code/explanations are separate from the scene bubble.
- The inspected screens always have relevant Pixel Art, including feedback and endings. No unrelated cat/dog filler was found in the new simulation source or inspected screenshots.
- There is a real gossip → relationship-conflict → repair route, and repair preserves history and prior numeric losses. Stable named NPCs and separate relationships improve continuity over the old source.
- The graph documentation and manifest distinguish 162,500 compiled context records from individually written scenes/images, and acknowledge guarded terminal evaluation outside the compressed context graph. This wording is honest. This reviewer did not independently decompress/validate every graph record; graph integrity belongs to the automated graph checks.
- The script reaches advisor visits and both exams and finishes cleanly, so these narrative checkpoints are not broken on the tested mixed route.

## Required next step

Collect N1–N6 with the other reviewers, fix the accepted product issues, regenerate the graph if runtime scene/rule data changes, and start a fresh five-round batch against the new build. Do not call this batch “no fixes needed” because its browser assertions passed; the narrative review found actionable defects.
