# Batch 3 — visual novel/gameplay tester

Date: 2026-10-29. Reviewer: independent AI role, visual novel/game designer and tester. Git at start: `bb1619a`. Product hash in every completed round: `b3ac8a88e77027cc76b9a2b7e1190bec346e3e309a518a6161392788d75b7edf`.

## Execution and evidence

Executed five fresh sequential headless Edge/Playwright routes against the local subdirectory URL. The provided runner uses a synthetic profile and answer keys for lessons/interview/exams; these are actual browser interaction tests, not human research or measured student difficulty. The work policies differ as listed below. No product file was edited during this review.

| Round | Seed | Work policy / optional care | Illustrated checks | Completed | Visits / exams | Ending | Energy / stress | Sustainable |
|---|---:|---|---:|---:|---|---:|---|---|
| 1 | 701 | competent source policy, no optional care | 188 | 80 | 4 / 100, 100 | 2 | 19 / 15 | no |
| 2 | 702 | competent source policy, rest below 45 | 195 | 80 | 4 / 100, 100 | 3 | 52 / 0 | yes |
| 3 | 703 | mixed: partial choice periodically, no care | 188 | 80 | 4 / 100, 100 | 2 | 12 / 33 | no |
| 4 | 704 | periodic risky choice, with rest | 197 | 80 | 4 / 100, 100 | 3 | 39 / 0 | yes |
| 5 | 705 | imperfect/repair policy, with rest | 196 | 80 | 4 / 100, 100 | 3 | 48 / 0 | yes |

Each round passed its scripted flow, four-choice, nonblank-canvas, exam, mobile-overflow and unchanged-product-hash assertions. Each recorded zero page errors and zero non-GET requests. Reports and screenshots are in `qa/results/batch3/game/round-1` through `round-5`.

Independent targeted browser inspection went beyond the oracle path. I read visible choices without looking up `q.answer`, chose a reasonable partial first-day action, repaired a visible array-loop expression, deliberately skipped a review in a deadline dilemma, and tested an objectively wrong arithmetic patch. This used a synthetic office fixture; it was not a blind full-length human playthrough. Evidence is in `manual-gameplay-trace.json`, `wrong-patch-evidence.json`, and the `targeted-*.png` files alongside the round directories.

## Improvements confirmed in this scope

- The prior repeated-work issue has materially improved. On the normal chapter schedule, all 60 nontechnical prompt+four-option signatures are now distinct even when titles are excluded. Chapter versions change the task, visible options and replies; technical tasks supply separate practical content. This is still shared authored action families rather than 161,000 independently authored stories.
- Immediate negative office reactions now affect the relevant NPC instead of making the player angry. Source wiring and the peer regression screenshot agree.
- Exhaustion now has consequences. The no-care routes were not classed sustainable and received tier 2, while the rested routes remained sustainable and received tier 3. These are distinct seeded policies, not a controlled statistical comparison, but they align with the explicit fatigue/sustainability rules.
- Optional conversations are differentiated by NPC role and can open or queue named related incidents. The action budget remains in place.
- Teacher names and portraits, domain-specific lesson props, immediate signed changes, and visible assessment/personal/bond data are clearer than the original survey loop.
- An actual mobile-initial render was checked separately: its status drawer starts collapsed, the scene begins around y=337, and the desk hotspot center is inside the canvas. The runner's desktop→mobile resize screenshot can retain the desktop-open drawer, so that screenshot alone should not be treated as the mobile initial state. `targeted-mobile-initial.png` records the actual initial mobile behavior.

## Actionable findings

### R3-G1 — P1: rewritten deadline choice creates a contradictory causal route

Reproduction, visible UI, seed 901 fixture:

1. Enter the first deadline scene, “สองงานแรกชนกัน” (stage 2).
2. Choose “ข้ามการตรวจ ขั้นตอนเริ่มใช้งาน เพื่อให้ส่งทัน”.
3. Immediate reply: “ส่งทันเวลาแต่ความเสี่ยงของ ขั้นตอนเริ่มใช้งาน ถูกส่งต่อไปด้วย”.
4. The next work scene says “เวลาที่รับปากไว้ผ่านแล้ว อีกทีมเริ่มเลื่อนแผนเพราะยังไม่ได้งานจากคุณ”.

The first reply explicitly says the work was delivered on time; the follow-up says it was not delivered. The recorded fact is `overpromise` and the chosen route is deadline chain 2, inherited from the old “promise both jobs” option. The new visible action is skipping checks, so a defect/test-risk follow-up would be consistent instead. The source `chapterVersion()` changes labels/replies but retains the original option effects.

Evidence: `targeted-deadline-shortcut.png`, `targeted-contradictory-followup.png`, and `manual-gameplay-trace.json`.

Action: align the new action with its typed effect/flag/chain, and audit rewritten options for the same issue. Regenerate the exported graph after changing transition semantics.

Acceptance: the skip-check action records a corresponding shortcut/testing-risk fact and follows that risk. It must not accuse the player of promising or failing to deliver work that the previous reply says was delivered. Deliberately late/overpromised choices can still produce the deadline chain.

### R3-G2 — P1: an objectively wrong work patch earns positive quality and assessed expertise

Reproduction, visible code, seed 3 stage-1 technical fixture:

```js
function total(price, qty) {
  return price + qty; // fix this line
}
// total(71, 8) must be 568
```

Choose `price + qty`. Its result is 79, not 568. The game replies “ยังมีกรณีขอบเขตที่ต้องแก้ก่อนส่ง” and awards:

- quality +1;
- assessed Expertise +3;
- Problem Solving +2;
- Logical Thinking +2;
- positive/happy feedback treatment.

The explanation below correctly teaches multiplication, so the reward and reaction contradict the lesson. The separate domain skill does not receive the correct-answer +2, but the assessment values still receive the same successful-domain gains. `work()` maps the first wrong distractor to generic technical source 1 (“patch that passes some cases”), and `act()` treats its rank 2 as correct for `assessmentEffect()`, regardless of what that distractor actually does.

Evidence: `wrong-patch-evidence.json` and `targeted-wrong-work-patch.png`. No answer key was consulted to determine that addition returns 79.

Related wiring to fix in the same change: `act()` hardcodes JavaScript assessment for every technical scene, although UI work questions can be SQL, QA, UX or data. Also, an explicit domain assessment bypasses the fallback quality/teamwork evidence mapping. In the rested competent route, the ending shows work quality 100 but assessed Working Quality 45 and Team Work 31. Those lower assessment values are not inherently a bug, but the hardcoded domain and missing direct evidence should be audited so the 14 dimensions reflect the actual work performed.

Action: grade the actual task response and pass its domain/observed test result into the transition/reward layer. If partial credit is appropriate, author or compute it from demonstrated passing cases; do not assign it simply because an option happens to be the first wrong distractor. A wrong answer should not invent unrelated misconduct such as a shared account or deliberately hidden bug.

Acceptance: the wrong addition patch fails the shown test and gets truthful feedback, no successful expertise/quality reward, and a suitable repair path. Correct multiplication passes and earns the appropriate domain evidence. Test all wrong choices of representative JavaScript, SQL, UX and QA work questions, including narrative flags and reactions.

## Fun and challenge assessment

The revised loop has much more agency: the office is a place to act, practice supplies concrete artifacts, and consequences can be repaired rather than restarting a long perfect-score interview. Caring for needs changes the outcome, and the visual/status feedback makes a choice feel consequential. These are useful improvements toward a game.

The two findings above still break the central promise that the world reacts logically to what the player actually chose. They also make learning outcomes unreliable: a student can receive positive competence evidence for a failed calculation. Therefore this batch is **not clean**, despite every scripted oracle-assisted route passing.

No human enjoyment or 1–2-hour completion claim is derived from these automated runs. A fresh five-round batch is required after the fixes. The tested scope covers the listed routes and targeted interactions; it does not prove every possible graph/history combination defect-free.
