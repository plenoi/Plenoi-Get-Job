# Batch 4 collective-fix preparation (not applied)

Frozen review build: `c85f054997843d75cd41678ed6e2bdec36b03bff9ac391c726622cbb18b1bdc6`. The coordinator authorized the collective-fix pass after all four reviewers completed. The implemented fixes and regression results are recorded in [BATCH4_FIXES.md](BATCH4_FIXES.md). This note preserves the pre-implementation diagnosis.

## Findings already reported

- Thai teacher T08: tier 3 ending title `จบอย่างโดดเด่น แต่ยังไม่มีอัตราจ้าง` does not clearly mean “no job offer.” Proposed title: `จบอย่างโดดเด่น แต่ยังไม่ได้รับข้อเสนอทำงาน`.
- The game reviewer is checking whether `creativeTrial`, `advancedTask`, and `facilitate` fail to attach an appropriate `domain`, causing `C.act()` to use its generic planning assessment fallback.
- The game reviewer is also checking whether the tier 4 offer shows a concrete simulated salary, matching the requested “hire with a big salary” payoff.
- Novel editor and business-computing student reported no additional actionable finding in their tested scope. All four reviewers completed their five fresh rounds before implementation began.

## Source diagnosis and minimal implementation options

`GATES` clones shared scenes for these gate IDs. `act()` chooses its fallback domain from `s.domain`, then known scene IDs; the three gate IDs are absent from those known-ID groups. Therefore, if the selected option has no explicit `effect.assessment`, its default assessment effect is `planning` regardless of the skill that unlocked the gate. Confirm each visible option's explicit effect before changing it; avoid overriding explicit evidence.

Minimal choices after the finding is confirmed:

1. Give each gate a specific intended `domain` or explicit option-level assessment effect. `creativeTrial` should credit its demonstrated creative/adaptive work; `facilitate` should credit communication/manner/assertiveness. For `advancedTask`, inspect the visible task and choices first and credit evidence/problem-solving/quality dimensions that the work actually demonstrates. Avoid assigning a blanket successful delta to every option; retain rank/correctness distinctions.
2. Change only the tier 3 title to the proposed Thai sentence. All 1,000 endings share five tiers; verify tier 3 across ending axes, and verify tier 4 still denotes a job offer.
3. If confirmed by the reviewer, supply a concrete but explicitly simulated salary for a tier 4 offer. Keep the offer gate performance- and availability-dependent. Do not turn every tier 4 catalog leaf into a guaranteed offer or claim real-world salary evidence. Choose a plausible in-game figure grounded in the product's existing fictional context, then state it as simulated compensation.

## Regression plan after authorization

- Targeted gate fixture for each of the three IDs: satisfy its threshold, open the intended gate, choose representative favorable and unfavorable options, and assert only evidence-appropriate dimensions change; ensure `planning` does not gain points just from fallback when it was not demonstrated.
- Ending descriptor assertions: every tier-3 descriptor uses the clear no-offer title; tier 4 title and rendered offer text explicitly communicate the offer and concrete simulated salary; tiers 0–2 retain their existing outcome meanings.
- Run the full authorized regression set and browser scenarios, rebuild graph/archive/package, then compute the frozen build hash before fresh review rounds.

The c85f... review build is historical; the current fix build is described in BATCH4_FIXES.md.

