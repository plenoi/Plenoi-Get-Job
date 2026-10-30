# WIL simulation v2: story and assessment contract

The player supplies a local PDF and chooses a job. Evidence matching has no universal base score or preference bonus. English aliases have word boundaries; Thai aliases are explicit phrases. Stated wishes/negated experience are excluded. Each job shows supported skills, missing requirements, evidence excerpts, and evidence confidence. This is a local explainable matcher, not an external AI call or hiring probability.

## Play loop

CV → job evidence → CAMT MMIT practical lessons → six-question role interview → office exploration → authored work scene → immediate illustrated reaction → office. There are eighty core work decisions across ten months, plus optional conversations, learning, examinations and feedback scenes. Event counts are not displayed during play. No timer pads duration. Four advisor visits occur in months 2, 4, 7, 9; Proposal in month 5; final in month 10.

Training covers actual JavaScript patches, SQL, accessibility, test design, data reasoning, security, communication and dependencies. Editable JavaScript tasks run only a finite expression interpreter over shown test variables; they are not a general JavaScript compiler. Multiple-choice code patches and SQL snippets have worked explanations. Mastery changes question difficulty. Attempts do not reduce skill simply for learning. Interview accepts demonstrated competence rather than requiring perfect answers. Failed skills link back to their rooms.

## Causality and social contract

The named AI cast retains separate relationships. Talking uses an action budget so praise cannot be farmed. Gossip creates a relationship incident; technical shortcuts create a defect chain; unrealistic promises create handoff/deadline consequences; privacy failures require containment and disclosure. Repair clears an open chain but does not erase numeric losses or history. Illness itself is not misconduct. Rest and truthful handoff are supported. Arbitrary pet flavor is removed.

Each action displays its signed metric/relationship changes, an illustrated reaction and one explanation. The hub, lessons, interview, feedback, advisor reports, exams and endings all render a scene. Main character clothing, hair and color use the player profile throughout the v2 renderer.

## Calendar, clock, weather and work recovery

The simulation starts on 1 June 2026 (shown as 1 June 2569 BE) and moves through ten real calendar months. The 80 major work scenes fall on eight selected weekdays per month; routine work between those story days is compressed. Every work scene and feedback card shows its simulated date, check-in, current time, expected/actual checkout and seeded weather. The same date keeps the same weather. The Pixel Art scene uses the same date, time, light and weather values.

Rain can delay the commute. Heavy rain or storms can trigger a power interruption; offline work, safe handoff and waiting all have different effects on unfinished work and the causal chain. Typhoon and earthquake gates are rare seeded interruptions; safe evacuation and shelter are rated as responsible decisions. They do not punish the player merely for following safety guidance.

When a chosen work path leaves a task unfinished, an end-of-day decision offers four choices: report carryover and leave on time, request one approved overtime hour, rescope/handoff with the mentor, or continue late without telling the team. Overtime can reduce unfinished work and adds simulated pay, but raises sleep debt; sustained late work can produce a delayed arrival and a recorded punctuality/trust consequence. Normal rest recovers fatigue. The system records work dates, check-in/out, weather and overtime in the run summary.

The attached *Theory of Fun* excerpt (51 slide-like pages) informed the design as a set of testable heuristics: let players learn recognizable patterns, vary their context so mastery does not become repetition, keep feedback causal so surprises do not feel like noise, and avoid one dominant overtime/choice strategy. It is a heuristic review, not proof of fun or a substitute for student playtesting.

Each event encounter has a variant identity built from the run seed, authored root, date/time, weather, causal chain and recent choices. Ten distinct test routes can therefore have disjoint **event instances** even though they draw from the shared 100 authored roots. This does not claim that every encounter has independently written prose or an individually hand-painted illustration.

## Explicit story-state graph

`storygraph/nodes.jsonl.gz` contains 161,000 explicit records: 160,000 context-specific graph descriptors and 1,000 ending leaves. There are 80 layers × 2,000 compact context states. Each story node has four labeled choices, effects, feedback, one concrete baseline scene descriptor and outgoing target. State dimensions are job family, current team mood, work situation, pressure and open causal-chain type. `story-map.html` inspects nodes and renders their descriptor; the large data file is not loaded into the normal game.

The event library contains 100 authored event roots with four choices each. Those templates produce context-specific runtime scenes; they are not 100,000 individually authored scripts. For graph inspection, every compact context node stores one canonical baseline descriptor, while live selection can vary with the player's complete stats, needs, bonds, facts, and prior choices. The latest manifest reports authored templates separately from compiled node descriptors and ending leaves. The deterministic Pixel Art renderer creates an illustration from each descriptor. Complete numeric statistics, examination evidence, and event history are retained beside graph context. Final edges have explicit outcome guards; their representative `to` is replaced by `WILCore.outcome(run)` for the actual ending. The graph is therefore an explicit context graph with guarded terminal evaluation, not an enumeration of every possible full numeric history.

Five outcome classes × five work-summary themes × four closing narrators × two next-step formats × five evidence-based causal callbacks produce exactly 1,000 terminal descriptors. These axes describe narrative closure, not impossible combinations of low performance and a job offer. Actual performance, wellbeing and rubric values are evaluated separately and printed with the ending. An offer needs sustained performance, both exams, all visits, a minimum body of positive work evidence and a seeded hiring slot below 4%; perfect clicking alone does not guarantee an offer. Ending text must reference the actual route evidence.

## QA protocol

Four independent AI reviewer roles: visual-novel game tester, light-novel editor, Thai-language teacher, and year-three business-computing student. A batch consists of five distinct rounds per reviewer. Each round records its build hash, scenario/seed, method, evidence and actionable findings. Any product change discovered within a batch is collected and fixed, then a fresh five-round batch starts. Automated rule, graph, code exercise and browser checks accompany reviews. A clean batch means no new actionable findings in the tested acceptance scope; it does not prove that every possible play sequence is defect-free.
