# Light Novel editor — initial narrative audit

Date: 2026-10-29 (Asia/Bangkok). Method: source review of the existing `app.js`; **no browser playthrough**. This audit is preparation and does not count as one of the five requested review rounds.

## Findings that affect the redesign

1. **Scene variation currently changes surface text more than plot.** `buildEventBankForMonth` expands approximately 20 dilemmas through 100 theme wrappers per month. The same decision remains under a different gag/title. This produces a large pool, but it is not a comparably large set of narrative consequences.
2. **Unrelated text is concatenated into a scene.** `makeDialoguePack` independently chooses opener, speaker, pressure, and “light” text. The event builder mixes these with cat, printer, snack, space-room, and robot jokes. Serious data/privacy/health conflict can therefore arrive with an unrelated animal or machine gag. Remove these independent decorative additions from the main incident description.
3. **The causal memory is too narrow.** Dog provocation/chase/medical follow-up and low-rubric follow-up are real chains. Most other choices affect scalar metrics without leaving a named fact, promise, defect, or relationship memory that a later scene can reference. The player needs to recognize “this happened because I chose that.”
4. **Characters are not yet continuing dramatic agents.** Speakers rotate through `variationAxes.people`; they have a name and generic line rather than a stable relationship history, goals, and memory. A mentor should remember an unkept promise; a teammate should react to the player's actual handoff; HR should ask about a recorded incident rather than a generic score.
5. **Some penalties have no credible story explanation.** The `responseStyle` prefix counter can downgrade a professionally appropriate response merely because similar opening verbs were used previously. Replace it with consequences tied to time, evidence, workload, promises, and people affected. Repeatedly collecting evidence is not inherently wrong; collecting unnecessary evidence while an outage continues can be wrong.
6. **Endings are combinatorial prose rather than closures of a route.** `ending()` selects four broad tiers and combines generic paragraph fragments. The title, actor reactions, and final illustration should instead close the unresolved work, relationship, health/workload, and evidence threads of that run. If vacancy/luck prevents an offer, foreshadow vacancy constraints before the ending.
7. **A text log is not a decision graph.** The current runtime selects lists and changes metrics. There is no explicit 100k–200k-node graph that can be audited for conditions, destinations, images, reachable endings, or unresolved callbacks. Do not label equivalent text permutations as separately authored stories.

## Narrative contract for the new build

- Each story scene has one visible conflict: a short setup, at most two short dialogue bubbles, a relevant scene/character illustration, and four actionable choices. Technical material belongs in a distinct task panel rather than in a long narration paragraph.
- A choice immediately produces (a) visible action/result, (b) actor emotion or body-language change, (c) explicit stat deltas, and (d) a short causal explanation. A result may be uncertain, but it must not be absent.
- Every consequential choice records an explicit fact or timed obligation: e.g. `defectReported`, `rollbackReady`, `handoffMissing`, `promiseDue`, `scopeApproved`, `accessDenied`, `workloadNegotiated`, or a named actor's trust memory.
- A follow-up names its cause in normal prose: “ไฟล์ที่คุณส่งเมื่อวานยังไม่มีวิธีติดตั้ง” is stronger than “เกิดจากคะแนนต่ำ”. It should also reflect the changed prop/scene, such as a red build monitor, missing handoff folder, or unread message.
- Random events need eligibility. An external outage may arrive unexpectedly; its severity and available help depend on preparation. A dog chase must require an established dog scene and relevant prior action. No unrelated animal text in programming, database, UX, or evaluation scenes.
- Persistent NPCs have distinct priorities: mentor values reliable progress; teammate values usable handoffs and reciprocity; manager weighs delivery and risk; HR values clear records and fair process. No character should automatically love every response.
- Office conversations cost some in-game time and show immediate reactions. A chat can reveal a lead, repair a misunderstanding, create a promise, or trigger an eligible event. Talking repeatedly must not grant unlimited free relationship points.
- Health routes judge communication, safety, and handoff decisions—not illness itself. Asking for help or taking medically necessary leave must not automatically make a student dishonest or incompetent.
- Humor comes from the situation or an established character habit. Keep it brief and optional; do not append an unrelated joke to a serious incident.
- At the ending, close at least the dominant work thread and the strongest relationship thread, show evidence from actual choices, and identify any remaining gap. A transfer-back ending needs documented serious/repeated performance or conduct problems, with earlier warnings and chances to repair.

## Compact ten-month causal spine

| Month | Main dramatic question | Persistent setup / possible callback |
|---|---|---|
| 1 | Can you become useful without pretending to know everything? | Access permissions, first small task, named mentor/teammate, promise to document setup. |
| 2 | Can somebody else reproduce your work? | First handoff/test evidence; missing setup produces a blocked teammate, not an unrelated crisis. Advisor visit 1. |
| 3 | What do you do when your own work breaks? | Defect report vs concealment; rollback preparation changes outage cost; teammate trust affects help. |
| 4 | Can you agree on scope across teams? | Requirement ambiguity returns as rework; approved change protects deadline credibility. Advisor visit 2. |
| 5 | Can you defend a feasible proposal? | Proposal draws on accumulated project evidence, known constraints, and unresolved questions. Repairable deficiencies lead to a revision task. |
| 6 | What will you sacrifice when work collides? | Workload and health become a trade-off; asking for priority decisions preserves safety but can reduce scope. No free solution maximizes all stats. |
| 7 | Can the team trust your account of a serious incident? | Access/security/quality incident is affected by prior documentation, reporting and safeguards. Advisor visit 3. |
| 8 | Can you work independently and still involve others at the right time? | Delegation, measured experiment, test coverage, peer dependency. Earlier promises can be fulfilled or broken here. |
| 9 | Is the result ready for someone else to own? | Rehearsal and handoff expose earlier shortcuts; relationships affect willingness to review, not the correctness of technical facts. Advisor visit 4. |
| 10 | Can you demonstrate what you built and leave it usable? | Final defense plus handoff; ending closes project quality, reliability, relationships, health/workload choices and actual vacancy conditions. |

## Four intertwining route families

1. **Work/evidence route:** unclear requirement → prototype or unchecked implementation → user-test result → approved scope/rework → proposal evidence → delivery/handoff → final defense.
2. **Reliability route:** bug found → report or conceal → controlled recovery or complaint → mentor investigation → remediation plan → demonstrated reliability or repeated breach.
3. **Relationship route:** teammate asks for help → explicit agreement or vague promise → dependency succeeds/blocks → honest conversation or blame → later review/support becomes available/unavailable.
4. **Workload/health route:** accumulating load → negotiate scope/rest/handoff or conceal fatigue → quality/safety consequences → realistic recovery and revised plan → sustainable or compromised delivery.

Each family needs repair branches. Repair must cost time or scope and leave a believable trace; it must not erase every previous consequence with a single apology. A professional but slower choice can protect trust while sacrificing output; a fast experimental choice can gain learning while risking rework.

## Graph acceptance criteria

The requested node count should describe an actual inspectable state graph, not 100k hand-written unique scenes unless that content exists. Distinguish **authored scene beats**, **state-conditioned node instances**, **rendered image variants**, and **possible paths** in developer documentation.

Every explicit node needs:

```text
id, month/time, route, sceneId, actors/emotions, shortText,
entryCondition, relevantFacts, choices[4], effects, nextIds,
scheduledCallbacks, resolvedCallbacks, endingId (leaf only)
```

Automated graph checks should prove: 100k–200k actual materialized nodes if claimed; all IDs unique; every edge destination exists; every scene reference resolves; non-leaves expose exactly four valid choices; reachable endings have no outgoing choice; entry predicates are compatible with the preceding effects; months do not move backwards; every unresolved mandatory callback has a resolution or an explicit ending consequence; every route has at least one repair path; no unbounded free office-chat loop. The graph viewer should load a selected neighborhood/path rather than draw 200k nodes at once.

## Planned five-round editor review (after implementation)

1. Healthy/evidence-focused route: continuity, names, setup/payoff, ending closure.
2. Shortcut/concealment route: proportional escalation, warnings, repair options, consequences.
3. Relationship-heavy office route: distinct NPC motives, changing reactions, time cost, eligible random trigger.
4. Workload/health route: no illness stigma, credible support/handoff, persistent consequences.
5. Replay/alternate seed: no arbitrary cat/dog text, no premature spoilers, meaningful branch difference, all illustrated scene/result transitions.

Each round must name the tested build, route/seed or scripted evidence, findings with severity, and whether the method was source simulation or browser play. Any product fix during the five rounds invalidates a clean-batch claim; start the next five-round batch against the new build.
