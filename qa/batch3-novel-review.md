# Batch 3 — Light Novel editor

Date: 2026-10-29 (Asia/Bangkok). Starting Git commit: `bb1619a`.

**Editorial decision: changes required; this is not a clean batch.** Five functional browser rounds passed on one unchanged build. Independent review found two concrete causal defects in the new conditional gates.

## Build and method

All five report files record build SHA-256:

`b3ac8a88e77027cc76b9a2b7e1190bec346e3e309a518a6161392788d75b7edf`

Method: actual headless Microsoft Edge scripted interactions against `http://127.0.0.1:4182/Plenoi-Get-Job/`, with a synthetic profile, plus independent source/data inspection and visual inspection of saved screenshots. Lesson/interview/exam selections use the test runner's internal answer key. This is an integration route check, **not human playtesting, student comprehension evidence, a fun rating, or exhaustive review of every narrative branch**.

The five rounds deliberately use different seed/rest/source-choice policies. The runner policy named `repair` is a source-choice perturbation (sometimes source 3), not a claim that every such answer repairs a situation. All profiles here use the first development-related job. Other job families were considered in the source composition, but these five browser runs do not cover all families.

No product or test files were edited by this reviewer. Supplemental diagnostic fixtures below modify only in-memory run state and save evidence under `qa/results/batch3/novel`.

## Five executed rounds

| Round | Command inputs | Functional result | Ending and visual/editorial evidence |
|---|---|---|---|
| 1 | seed 901, policy `risk`, no manual-care flag | PASS; 80 work decisions, 4 visits, both exams 100; 188 nonblank-canvas checks; no page errors/non-GET requests | Tier 2, energy 14, stress 42, unsustainable. Inspected `round-1/ending.png` and `causal-followup.png`: exhaustion is acknowledged; the ending is no longer indiscriminately outstanding. |
| 2 | seed 902, policy `risk`, `--care=1` | PASS; same work/visit/exam coverage; 197 canvas checks; no errors/non-GET requests | Tier 3, energy 41, stress 0, sustainable. Inspected `round-2/ending.png`, `ethics-fake-demo.png`, `tension-hr.png`, and `gate-probes.json`. The two new gate defects below are demonstrated with explicit in-memory fixtures. |
| 3 | seed 903, policy `mixed`, `--care=1` | PASS; same work/visit/exam coverage; 198 canvas checks; no errors/non-GET requests | Tier 3, energy 54, stress 0, sustainable. Inspected `round-3/ending.png`: actual fact labels and closure voice/theme differ; no arbitrary animal gag appears. |
| 4 | seed 904, policy `repair`, `--care=1` | PASS; same work/visit/exam coverage; 197 canvas checks; no errors/non-GET requests | Tier 3, energy 41, stress 0, sustainable. Inspected `round-4/health-planning.png`, `queued-followup.png`, and `editor-regressions.json`: high-energy preventive planning stays in office with neutral choices; open bug survives gossip and repair opens queued relationship issue. |
| 5 | seed 905, policy `mixed`, no manual-care flag | PASS; same work/visit/exam coverage; 188 canvas checks; no errors/non-GET requests | Tier 3, energy 44, stress 32, sustainable. Inspected `round-5/ending.png`: automatic conditional recovery scenes can change resource trajectory; rendered closure and specific evidence tags remain readable. |

The commands were `node qa/browser-tests.js --batch=batch3 --role=novel --round=N --seed=S --policy=P`, with `--care=1` on rounds 2–4. Per-round machine evidence is in each `round-N/report.json`. Canvas-check counts are not saved-screenshot counts.

## Actionable findings

### B3-N1 — High: a non-data ethics incident is rewritten as a data disclosure and false repair memory

**Location:** `sim-core.js`, `GATES` entry `ethicsReview`, which clones `SCENES.dataChain`.

The gate accepts several different recorded incidents: `concealedData`, `fakeDemo`, `gossip`, or `dataLeak`. Its inherited options and feedback still assume a shared file/link, downloaders, and data containment. A fake live-demo claim or gossip therefore leads to an unestablished data incident.

Verified in actual Edge with an explicit diagnostic fixture:

```text
facts before = ["fakeDemo"]
assessment.integrity = 20
opened scene = ethicsReview

visible options include:
  คิดว่าไม่มีใครดาวน์โหลดจึงไม่รายงาน
  ลบประวัติแชร์เพื่อไม่ให้มีชื่อคุณ

choose source 0 (maximum-quality repair)
facts after = ["fakeDemo", "repairedData"]
```

This is not only a wording problem. `outcome()` prioritizes the `repairedData` callback, so the ending can state that a repaired data incident changed the team's access/demo practices even though the only established misconduct was presenting a prepared result as live. Evidence: `round-2/ethics-fake-demo.png` and `round-2/gate-probes.json`; independently reproduced through pure-core `C.sceneForRun` and `C.act`.

**Requested fix:** choose the ethics-review variant from the actual recorded incident. A false demo should ask about correcting the claim, showing verified results, notifying the audience/team, and accepting the consequences. Gossip should ask about the people and statements involved. Data disclosure should keep the data-specific actions. Record incident-appropriate repair facts (`repairedDemo`, etc.) and use a truthful ending callback. Alternatively use genuinely conduct-neutral options and a generic ethics-repair fact without pretending a data event happened. Verify both visible options and resulting `facts`/ending callback.

### B3-N2 — Medium/high: the tension gate does not repair the person who triggered it

**Location:** `sim-core.js`, `GATES` entry `tension`.

The predicate opens when **any** NPC has tension at least 65. Its positive options modify only peer/lead relationships, regardless of whose tension caused the scene. An HR-only or mentor-only conflict can therefore open this scene, show the player an apparent repair action, and leave the affected relationship completely unchanged.

Verified in actual Edge and pure-core fixture:

```text
HR tension before = 70; every other NPC tension = 10
opened scene = tension
choose source 0: ชวนคุยข้อเท็จจริงพร้อมคนกลาง
HR tension after = 70
peer/lead tension changed instead
```

Evidence: `round-2/tension-hr.png` and `round-2/gate-probes.json`. Because the source cause remains at 70, the same tension gate can return after cooldown even though its maximum-ranked action looked like addressing that conflict. The player has no scene-specific way to know that the pictured repair affected different people.

**Requested fix:** determine the affected actor(s) when opening the gate, name them in the short scene, and apply repair/escalation effects to those same bonds. If it is explicitly a group discussion, make the group membership and corresponding effects clear. Add source plus browser checks for each of mentor/lead/peer/HR as the sole triggering actor, and a multi-actor case. Preserve the actor choice throughout rendering and answer application.

## Previously reported issues checked on the current build

- **Monthly repetition (N1): materially improved in tested scope.** Source/data audit finds 19 base work scenes and 60 distinct nontechnical main-schedule title/text combinations across 80 stages. `chapterVersion()` changes task subject, choices and response wording with month. Recurring attribution topics now review roles rather than repeatedly inventing the identical omitted name and apology. This remains shared-template authored composition, not 160,000 individually written episodes.
- **Account sharing → data-link leap (N2): corrected for the main chain.** The follow-up now explicitly allows accounts, files or links, and actual privacy setup is scheduled four times in the chain-free 80-stage plan. The new ethics gate has a separate data-specific inheritance defect recorded above.
- **Gossip overwriting an open work incident (N3): fixed.** Supplemental actual browser regression opens a technical failure, adds gossip, verifies active chain 1 with pending `[4]`, repairs the bug, then opens relationship chain 4. Evidence: `round-4/editor-regressions.json` and `queued-followup.png`.
- **Truthful health/workload narrative (N4): improved.** A high-energy/healthy preventive-planning fixture renders an office scene with neutral capacity choices, not a clinic or unexplained symptoms. Evidence: `round-4/health-planning.png`. Round 1's exhausted ending explicitly requests recovery and does not get tier 3; rest-enabled paths preserve a different state. The new needs/assessment gates give this axis actual narrative consequences.
- **Teacher identity and reactions (N5): corrected on checked lessons.** The browser runner asserts the displayed lesson presenter is a teacher, and source uses explicit presenter/domain identity. Inspected office conflict images show the affected peer's immediate angry expression. This does not by itself verify every actor-specific gate, which is why B3-N2 matters.
- **Closure summaries and facts (N6): improved.** Endings now render the descriptor summaries, actual condition summary and named recent facts. Inspected screenshots no longer show duplicated generic “บทเรียนจากงานก่อนหน้า” tags for authored mistakes.

## Graph and ending honesty

Independent source/data audit saved in `qa/results/batch3/novel/closure-audit.json` verifies 1,000 distinct `title + summary` catalog records and 1,000 unique ending scene identifiers. The documented axes are five outcomes, five work-summary themes, four closing narrators, two next-step formats and five evidence-based callback types. This is a real combinatorial closure catalog, **not 1,000 independently plotted full novels**. The actual run chooses an eligible outcome class from performance/exams/needs/evidence and uses callback facts; B3-N1 currently contaminates one such fact.

`STORY_DESIGN.md`, manifest, README and graph inspector distinguish the 161,000-record compressed context DAG from a full enumeration of every numeric/history state. The inspector identifies terminal numeric targets as representatives and the real ending as guarded history evaluation. That is an honest limitation. This review did not visually inspect every graph node or every ending image; the automated graph validator is separate evidence.

## Signoff status

All five actual browser paths are functionally green on one build. **No editorial signoff yet:** B3-N1 and B3-N2 need fixes, targeted regression checks, and a fresh five-round batch on the resulting unchanged build. No human enjoyment/comprehension score is invented from oracle-assisted automation.
