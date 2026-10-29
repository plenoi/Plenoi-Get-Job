# Batch 4 collective fixes

Date: 2026-10-29 (Asia/Bangkok). This pass addresses findings from the four completed Batch 4 reviewer reports: [game tester](batch4-game-review.md), [novel editor](batch4-novel-review.md), [Thai teacher](batch4-thai-review.md), and [business-computing student](batch4-student-review.md). Each reviewer completed five fresh scripted rounds on the same frozen build `c85f054997843d75cd41678ed6e2bdec36b03bff9ac391c726622cbb18b1bdc6`. This fix build still requires a fresh five-round review; this document does not claim Batch 4 or Batch 5 is clean.

## Changes

- **Assessment evidence:** `creativeTrial` now uses the UX domain, `facilitate` uses communication, and `advancedTask` maps to the technical domain of the active job family (JavaScript, SQL, UX, QA, data, communication, or planning). Existing choice rank and explicit assessment effects still determine the evidence credited.
- **Technical follow-up:** the chain now says the issue was discovered during a later check, uses neutral work/criteria language and choices that apply to UX, SQL, and business tasks, and no longer claims an earlier bug or test incident. Its successful repair fact is `repairedWork`; the ending callback is domain-neutral and says a task that missed its criteria became a learning case and repeatable check. The original `workCheckFailed` and `untestedDelivery` facts remain intact.
- **Thai ending title:** tier 3 now reads `จบอย่างโดดเด่น แต่ยังไม่ได้รับข้อเสนอทำงาน`.
- **Simulated offer salary:** an eligible offer receives a deterministic integer salary from 25,000–60,000 baht per month, based on the run's performance scores. UI labels it as a simulated company offer and explicitly says it is an in-game amount. Salary is null without `result.offer`; it does not increase current wealth. Offer thresholds and the seeded availability slot remain unchanged.
- **Cache invalidation:** the main page and story map now request `sim-core.js?v=6`.

## Focused regression coverage

`qa/batch4-fix-regressions.js` checks all three gate domains, `advancedTask` across all eight job families, later-discovery and domain-neutral follow-up text, repaired-work callback wording, the tier 3 title across all ending dimensions, salary eligibility/determinism/range/performance variation, no salary when ineligible or unavailable, the rendered offer and no-offer screens, unchanged wealth, and core cache v6.

## Verification

The requested verification passed after the fixes:

- `node --check sim-core.js`, `node --check sim-ui.js`, and `node --check qa/batch4-fix-regressions.js`
- `node qa/core-tests.js` — 17 checks; 161,000 nodes, 640,000 choices, 40 templates. Offer availability remains below 5% on its 2,000-seed test.
- `node qa/gate-regressions.js`
- `node qa/choice-feedback-regressions.js` — eight domains, four work choices each, truthful feedback and deadline shortcut chain.
- `node qa/targeted-regressions.js`
- `node qa/status-browser.js` — 15 threshold gates, 14 assessment dimensions, 8 personal dimensions, 5 relationship dimensions, and 9 rendered scene identifiers.
- `node qa/profile-and-patch.js` — synthetic PDF extraction, matching UI, typed-patch rejection/acceptance, and graph explorer.
- `node qa/batch4-fix-regressions.js` — focused gate, follow-up, ending, salary, and actual-browser offer/no-offer checks.

These are automated regression and browser checks, not human playtesting, student comprehension evidence, measured enjoyment, or exhaustive testing of every route.
