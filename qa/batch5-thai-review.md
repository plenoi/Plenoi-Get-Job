# Batch 5 — Thai-language teacher/editor

Reviewed the unchanged product build with five fresh scripted Headless Edge rounds at `http://127.0.0.1:4182/Plenoi-Get-Job/`.

Exact browser build hash: `abd5281b2efa4c18ccaa51c4781dd5183eb194d66bb553ffb0af6b1f2ea03a1d`.

Method: used `qa/browser-tests.js` with synthetic profiles, seeds 2101–2105, and mixed, repair, and risk choice patterns; four routes included care/rest behavior. I inspected actual Thai lesson feedback, social follow-up, interview/exam question and feedback, and ending screens. I also reviewed the current focused browser evidence for the later-discovery work follow-up and simulated offer. This was scripted play and selected editorial inspection, not human playtesting, a learner-comprehension study, or an exhaustive review of every story node. No product or test files were changed. Per-round evidence is in `qa/results/batch5/thai/round-N/`; targeted screenshots and extracted interview text are also in `qa/results/batch5/thai/`.

## Five distinct rounds

| Round | Seed / pattern | Browser route result | Route summary |
|---|---|---|---|
| 1 | 2101; care; mixed | PASS; 197 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 39, stress 0; sustainable true |
| 2 | 2102; care; repair | PASS; 194 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 46, stress 0; sustainable true |
| 3 | 2103; risk | PASS; 188 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 35, stress 41; sustainable true |
| 4 | 2104; care; risk | PASS; 198 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 56, stress 0; sustainable true |
| 5 | 2105; care; mixed | PASS; 198 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 48, stress 0; sustainable true |

Every report records the same browser build hash, an ending after 80 work decisions and four visits, no page errors, and no non-GET requests. These results cover only the scripted routes exercised here.

## Targeted editorial inspection

- **Ending title:** rounds 1–5 show `จบอย่างโดดเด่น แต่ยังไม่ได้รับข้อเสนอทำงาน`. It clearly describes the no-offer outcome and avoids suggesting a wage or rate.
- **Later-discovery follow-up:** `targeted-technical-followup.png` names the later check, explains that work did not meet the agreed condition in another use situation, and presents neutral choices about reviewing evidence, repeating checks, or proceeding with an unreviewed case. Its language does not assume a programming bug or use developer-only terms.
- **Simulated offer:** `targeted-offer-ending.png` visibly says `บริษัทจำลองยื่นข้อเสนอทำงานต่อ เงินเดือนจำลอง 48,068 บาท/เดือน · เป็นตัวเลขในเกมเท่านั้น`. This distinguishes the simulated monthly figure from a real salary. Focused regression evidence also records unchanged in-game wealth and no salary on a no-offer outcome.
- **Speaker identity and exam feedback:** `interview-question.png`, `interview-feedback.png`, and `interview-evidence.json` show the interviewer label `ผู้สัมภาษณ์ AI`, an understandable technical question, and feedback linked to its answer. The regular JavaScript lesson feedback is attributed to อ.กฤตพล and gives a concise explanation matching the task.
- **Social continuity:** the round 1 follow-up identifies the earlier conversation with ฟ้า and the reason for the unresolved issue.

## Verdict

**No actionable Thai-language finding in the reviewed scope.** The T08 ending title is clear on all five routes, and the targeted salary, follow-up, and speaker wording is understandable and appropriately qualified. This does not establish that every possible graph path or all Thai copy have been reviewed.
