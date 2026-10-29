# Batch 6 collective fix

Date: 2026-10-30 (Asia/Bangkok). Batch 6 had one narrow wording issue: the Thai teacher and novel editor found the risk-check choice's Communication +1 and Team Work +1 less explicit than the visible action. The game reviewer considered the inference plausible from the mentor relationship effect and did not report it as actionable. The fix follows the accepted clarity suggestion without changing the assessment effects.

## Change

Only the cloned `advancedTask` choice 0 wording changed. The action now says `ทดสอบจุดเสี่ยง แล้วส่งหลักฐานให้พี่เลี้ยงตรวจ`; its response says `คุณกับพี่เลี้ยงทบทวนผล แล้วบันทึกวิธีตรวจซ้ำให้ทีมใช้`. This makes the shown evidence-sharing and joint review legible alongside the pre-existing Communication and Team Work deltas. The score effects, other choices, `SCENES.learning` template, generic/no-specialty domain treatment, and technical-question credit are unchanged. Core cache references are now `sim-core.js?v=8`.

## Verification

`qa/batch4-fix-regressions.js` now checks the clarified wording for all 8 families across all 4 choices, the unchanged explicit per-choice assessment deltas, and that the shared template remains unchanged. Its focused browser portion checks the actual visible option and post-choice response, then retains existing SQL artifact, technical follow-up, and simulated offer/no-offer assertions.

Batch 6 reviews were mixed: the Thai teacher and novel editor flagged the wording ambiguity; the game reviewer and business-computing student found no additional actionable issue in their scoped reviews. The correction is ready for a fresh Batch 7 review; no clean signoff is claimed.

Automated browser/core regressions are synthetic fixtures and do not establish human comprehension, typical-player outcomes, or exhaustive route coverage.

## Fix-build verification

- Browser build hash (same SHA-256 inputs as `qa/browser-tests.js`): `b2149ded4effa75096bca82e02f20d951669f2e406b6645fa4d83172155e23a1`.
- Normalized `sim-core.js` source hash recorded in the graph manifest: `2410e67dffdd4e5eba1eb6c9e5db62fb852caaa6cec396c6605e58461f5e6dc9`.
- Rebuilt graph archive SHA-256: `A495EC2F2EB033AF5FFC8B3558D6565EC3B5F2724F072DFB69AE40DCB9958B94`, 19,280,984 bytes. It is byte-identical to the preceding batch's graph payload; the changed gate text is carried in the graph's gate definitions.
- `qa/core-tests.js`: 17 checks passed; 161,000 nodes, 640,000 choices, 40 templates. `qa/gate-regressions.js`, `qa/choice-feedback-regressions.js`, and the updated `qa/batch4-fix-regressions.js` all passed. The latter includes the focused rendered UI check, existing technical-follow-up/SQL/offer assertions, and all-family score/immutability matrix. `node --check sim-core.js` and `node --check qa/batch4-fix-regressions.js` passed.
