# Batch 1 — visual novel/gameplay tester

Date: 2026-10-29. Reviewer: AI acting as an experienced visual novel game tester/designer. Build hash: `2f2f0e77ba34c9ab551bd369f90823518fdb0a01c4c855d4c10eaed92cfc599a`.

## Method and five-round evidence

Executed the requested runner sequentially in headless Microsoft Edge through Playwright against `http://127.0.0.1:4182/Plenoi-Get-Job/`. These were actual scripted browser runs, using a synthetic CV/profile fixture and the question-answer oracle exposed by the QA API. They were **not** human playtests or blind knowledge assessments. The runner bypasses PDF upload and job selection, so this review does not validate the real CV-upload interaction.

| Round | Seed | Core work decisions | Illustrated screens checked | Visits / exams | Ending | Browser errors / non-GET requests |
|---|---:|---:|---:|---|---|---|
| 1 | 101 | 80 | 188 | 4 / Proposal 100, final 100 | tier 3 | 0 / 0 |
| 2 | 102 | 80 | 188 | 4 / Proposal 100, final 100 | tier 3 | 0 / 0 |
| 3 | 103 | 80 | 188 | 4 / Proposal 100, final 100 | tier 3 | 0 / 0 |
| 4 | 104 | 80 | 188 | 4 / Proposal 100, final 100 | tier 3 | 0 / 0 |
| 5 | 105 | 80 | 188 | 4 / Proposal 100, final 100 | tier 3 | 0 / 0 |

All five report JSON files have the same build hash and are in `qa/results/batch1/game/round-N/report.json`. Each run tested academy answer feedback, six-question interview, office hotspots, gossip causing a conflict follow-up, all eighty work decisions, four advisor reports, examinations, ending, and horizontal overflow. I visually inspected round 1 office/ending-mobile/gossip reaction, round 2 lesson feedback, and the independent mobile-office screenshot. The runner's `mobile.png` is an **ending** screenshot because `office()` redirects to ending after stage 80; it is not evidence of the mobile office. I therefore captured that separately.

Independent targeted evidence: `qa/results/batch1/game/targeted-design-checks.json`, plus `round-1/targeted.json`, `targeted-gossip-reaction.png`, and `targeted-mobile-office.png`.

## What now works

- The office is a recognizable illustrated space with five clickable hotspots, optional learning, rest, and conversation.
- Every checked task/outcome/report rendered a nonblank canvas. Immediate signed stat changes, worked lesson explanations, and a causal gossip follow-up exist.
- There is no unbounded hub-talk farm: the first two positive peer conversations changed peer 50→52→54 and quality 50→51→52; a third attempt at budget zero changed neither value nor history.
- Visible option order is shuffled. In a pure-rule competent 80-decision simulation, the semantic best option was the first visible item only 18 times. There is no simple “always click visible A” route in that sample.
- The interview no longer requires perfect scores, and the player has a clear route back to practical training.

## Actionable findings

### G1 — P1: exact narrative repetition remains a major boredom problem

Evidence: the competent core simulation produced only eight scene titles across eighty decisions: first day 1, technical work 20, deadline conflict 10, missing credit 10, fatigue 10, review disagreement 10, handoff 10, and learning space 9. Technical task content is substituted by the UI and can vary, but the nontechnical stems, options, and replies are the same each month. `scenario()` chooses mainly from `stage % 8`; chapter/team/work/pressure are largely labels rather than evolving conflicts.

Action: give recurring scene types chapter-specific tasks, changed stakes, and remembered outcomes. A second credit dispute should acknowledge the first one and test a different response. Use context dimensions to select real content, rather than only constructing a different scene key.

Acceptance: collect normalized nontechnical prompt+four-option signatures over a full run. Exact repetitions should occur only when explicitly presented as review/continuation, with changed state acknowledged. A competent route should encounter materially different conflicts as responsibility grows.

### G2 — P1: immediate office facial reaction is shown on the wrong character

Reproduction: initialize a fresh office fixture, talk to ฟ้า, choose gossip (source 2). Peer relationship falls 50→46, and the reply says “ฟ้า สีหน้าเปลี่ยน”. In `targeted-gossip-reaction.png`, the **player** has the angry icon/expression while ฟ้า remains neutral.

Cause: `feedback()` passes `mood:'angry'`, but the office renderer uses relationship-threshold `descriptor.reactions.peer` for NPC faces and uses the global `mood` for the player. A 46 relationship is still neutral. Immediate response and long-term relationship are different concepts and need separate rendering.

Action: pass the reacting actor explicitly and override that actor's transient expression in the office feedback image. Preserve other actors' stored attitudes and the player's fatigue/selected expression.

Acceptance: a fresh 50→46 gossip response visibly changes ฟ้า's face immediately; unrelated NPCs do not all become angry; the same actor's long-term expression still follows later relationship/history.

### G3 — P1: severe displayed exhaustion does not meaningfully constrain strong work

Evidence: all five oracle-assisted full runs ended with energy near 1, stress 100, quality 100, reliability 100, and a tier-3 outstanding ending. Round 1 mobile ending screenshot shows this combination. The UI's low-energy branch applies a quality penalty only when `choice !== 0`; semantic best responses are exempt, while stress can remain capped at 100 indefinitely. Thus a player can keep doing impeccable work while the game says they are exhausted, and resting is mainly optional stat grooming.

Action: make displayed exhaustion affect task risk or available recovery choices even for otherwise good decisions. Alternatively, make the good health/rest scene restore enough energy/stress that the displayed state matches the narrative. The player should be able to manage the trade-off through rest/handoff, not suffer arbitrary unavoidable errors.

Acceptance: compare the same seed with a sustained exhausted policy and a paced rest/handoff policy. Their work conditions, feedback and long-term evaluation should differ coherently; energy 1/stress 100 must not coexist with unlimited flawless work without a stated recovery mechanism.

### G4 — P1: optional NPC interaction is still a generic repeated menu

Evidence: every actor uses the same four conversation topics and the same response templates, with the actor name inserted. Only the first line varies by angry/neutral/happy threshold. The random `sharedClue` roll adds quality and a generic line, but it does not enqueue or open a related random event. Gossip does open a conflict chain, which is a good start.

Action: add actor-specific topics that respond to the current chapter, task, and known facts. Let some conversations open a related event, request, clue, or choice at the office, with the origin acknowledged. Retain the action budget.

Acceptance: mentor, peer, lead, and HR conversations should provide distinct information; after a conflict/repair they acknowledge that fact. At least one seeded non-gossip social route should visibly lead to a related event, not only a +1 stat.

### G5 — P1: image coverage passes, but visual storytelling/novelty is limited

Evidence: drawing an office with seed 1 and seed 999999 produces identical pixels (`seedOnlyIllustrationSame:true` in targeted evidence); the renderer declares seed but does not use it. Deadline, credit, review, and handoff scenes mostly reuse the same meeting-room/table illustration without props showing what happened. The player sees an image every time, but it often cannot explain the conflict without reading the paragraph.

Action: pass a scenario/beat descriptor to the renderer and depict relevant objects/actions: conflicting deadline cards, crossed-out credit on a document, an error/test result, a handoff checklist, or the participants in the dispute. Use context/stage for meaningful layout/prop changes while keeping avatar continuity. Count graph states and art variants honestly.

Acceptance: same avatar in two different narrative beats must retain identity but show distinguishable relevant props/action. Different seed/context descriptors should produce intended scene variation, rather than only different metadata.

### G6 — P2: coach identity is inconsistent in lesson feedback

Evidence: round 2 `lesson-feedback.png` has speaker label พี่เมย์ and the generic mentor portrait, but the dialogue credits อ.กฤตพล. `answerLesson()` calls the feedback helper without a teacher actor.

Action: supply the current coach name/portrait/role to feedback and lab rendering. Keep mentor reaction separate if the mentor is not teaching that lesson.

Acceptance: card, lesson, spoken line, speaker label and pixel instructor identify the same coach.

### G7 — P2: repeated desktop/mobile framing pushes agency below long headers

Evidence: independent 390×844 mobile office capture puts the scene at y=546 and the explicit work button at y=1033. The desk hotspot remains available inside the scene, so this is not a blocker. Long company titles, six HUD cards, relationship chips, and a privacy banner occupy much of the first screen, and `frame()` scrolls to the top each time.

Action: use a compact job heading and collapsible/condensed HUD for repeated scenes; keep the current scene and primary choice close together. Preserve the clear privacy notice without repeatedly dominating scene transitions.

Acceptance: mobile office and common feedback can show a useful portion of the scene plus an obvious next action without extensive repeated scrolling; no horizontal overflow.

## Batch verdict

**Batch 1 is not clean.** All scripted flow assertions pass, but G1–G5 are actionable gameplay/visual-storytelling findings, with G6–G7 polish/usability follow-ups. Improvements over the previous survey loop are substantial; the remaining work is to make repetition, character reaction, optional conversation, and fatigue behave as the story promises. After fixes, run a fresh five-round batch against one stable revised build. No claim is made that these tests cover every path in the large graph.
