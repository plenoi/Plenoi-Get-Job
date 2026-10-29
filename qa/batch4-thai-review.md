# Batch 4 — Thai-language teacher/editor

Reviewed the unchanged product build with five fresh scripted Headless Edge rounds at `http://127.0.0.1:4182/Plenoi-Get-Job/`.

Exact browser build hash: `c85f054997843d75cd41678ed6e2bdec36b03bff9ac391c726622cbb18b1bdc6`.

Method: used `qa/browser-tests.js` with synthetic profiles and distinct seeds/policies. I inspected the actual Thai lesson feedback, social follow-up, interview question and feedback, and ending screenshots; I also checked the current source wording for successful lesson feedback and the incident-specific ethics review. These are scripted browser runs and selected editorial inspections, not human playtests, exhaustive review of all story text, or evidence of learner comprehension. No product or test files were changed. Evidence screenshots and each round's `report.json` are under `qa/results/batch4/thai/`.

## Five distinct rounds

| Round | Seed / policy | Browser route result | Route summary |
|---|---|---|---|
| 1 | 1701; care; mixed | PASS; 197 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 44, stress 0; sustainable true |
| 2 | 1702; care; repair | PASS; 194 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 48, stress 0; sustainable true |
| 3 | 1703; risk | PASS; 188 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 35, stress 44; sustainable true |
| 4 | 1704; care; mixed | PASS; 197 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 39, stress 0; sustainable true |
| 5 | 1705; care; repair | PASS; 196 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 59, stress 0; sustainable true |

All five reports recorded the same build hash, no page errors, no non-GET requests, and an ending after the expected 80 work decisions and four visits. Those automated results establish only the exercised routes.

## Editorial inspection

- Lesson feedback in rounds 1 and 2 uses the neutral `แนวทางนี้ตรงโจทย์ ลองนำไปใช้กับงานนะ` wording. The explanation matches the shown `price * qty` task. Source review in `sim-ui.js` also confirms test-result claims are conditional on evaluator results (`result.checks?.results?.length`).
- The actual interview task and response are preserved in `exam-question.png` and `exam-feedback.png`. The prompt, worked example, choices, and feedback are understandable and tied to the task; the screen identifies `ผู้สัมภาษณ์ AI`.
- The social follow-up screenshot in round 1 names the preceding conversation with ฟ้า and its reason. The incident-specific ethics-review source names the recorded conduct incident and uses neutral, truthful choices rather than assuming that a file was downloaded or shared.
- Ending summaries in the inspected routes connect route facts to a plausible next step. One ending title has an actionable Thai semantic error below.

## New actionable finding

### T08 — Ending title uses a term that does not mean “job offer” (P2)

- Source: `sim-core.js`, `endingDescriptor()`, title for tier 3.
- Visible text in the actual ending screenshots (`round-1/ending.png`, `round-3/ending.png`, and `round-5/ending.png`): `จบอย่างโดดเด่น แต่ยังไม่มีอัตราจ้าง`.
- In Thai, `อัตราจ้าง` reads as a wage/rate or hiring rate. It does not naturally communicate that the player has not received an offer of employment, so the ending title is ambiguous and can be read as describing compensation.
- Suggested wording: `จบอย่างโดดเด่น แต่ยังไม่ได้รับข้อเสนอทำงาน` (or the shorter `จบอย่างโดดเด่น แต่ยังไม่ได้งาน`).

## Verdict

**Batch 4 is not editorially clean.** All five scripted routes passed, but T08 is an actionable semantic issue in a player-facing ending title. Fix it collectively, then run a fresh five-round batch on the new unchanged build before treating Thai editorial review as clean.
