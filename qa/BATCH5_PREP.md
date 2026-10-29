# Batch 5 fix preparation (no source changes)

Frozen review product hash: `abd5281b2efa4c18ccaa51c4781dd5183eb194d66bb553ffb0af6b1f2ea03a1d`. The reviewer evidence identifies one confirmed actionable issue so far. The coordinator has not authorized product or test edits yet; wait for `STARTFIX` after the student reviewer completes.

## Confirmed finding

Batch 5 novel editor B5-N1 and the game review independently confirm that the generic `advancedTask` screen can award specialty Expertise without showing a specialty artifact. In a database-family fixture the screen asks the player to inspect an unresolved test case, and the favorable choice adds SQL Expertise +3 although no query, schema, table, or database behavior is shown. The game tester's eight-family evidence is at `qa/results/batch5/game/targeted/advancedTask-family-matrix.json` (note: not the parent path `qa/results/batch5/game/advanced-family-matrix.json`). Its database row confirms `expertise: +3`; the same generic authored gate is copied to other families.

The rest of the targeted Batch 5 acceptance checks passed: user prototype work earned UX evidence, facilitation earned communication evidence, technical follow-up retained the later-discovery cue and neutral repair callback, and offer/no-offer endings displayed the intended salary behavior. Thai review was clean; the student review remains in progress.

## Minimal implementation plan after authorization

Keep `advancedTask` as a generic investigation opportunity. Remove its active-family domain mapping. Give each of its four choices an explicit assessment effect limited to the observable generic evidence:

- Test an unverified risk: quality of work, problem solving, systematic thinking; no Expertise.
- Ask a user for feedback: quality of work and problem solving; teamwork/communication only where the option's actual interaction supports it.
- Polish details without testing: at most modest work-quality evidence; no specialty Expertise or Creativity.
- Send without checking: negative work-quality/reasoning/planning evidence that follows the stated choice; no fabricated misconduct.

The existing effects and ranks should continue to distinguish the choices. Do not fabricate a query, design artifact, analytics output, QA report, or other specialty work merely to justify expertise. `technicalScene()` already displays a generated task, options, domain, and test/evaluation evidence; its actual technical questions should continue to award domain-specific Expertise when the player selects a correct response.

## Regression updates after authorization

Update the existing `qa/batch4-fix-regressions.js` assertions that currently expect `advancedTask` to map to the active job family. Replace those with a cross-product fixture: all eight families × all four choices. Assert no family-specific Expertise/Creativity is awarded from the generic gate; verify only the appropriate generic dimensions change for each displayed action and that choices retain their positive/negative work effects. Separately assert a correct visible SQL question still raises SQL Expertise and the existing technical-choice regression still validates domain-specific work for all eight lesson domains.

Run focused regression and full requested checks once after product changes. Bump the main-page and story-map core query strings to v7 before the next frozen review. If node payloads are unchanged, verify the graph source hash and packaged graph bytes rather than rebuilding the graph archive.

Do not claim Batch 5 clean before all four fresh reviewer rounds finish on the eventual unchanged fix build.
