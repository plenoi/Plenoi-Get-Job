# Batch 6 — Thai-language teacher/editor

Reviewed the unchanged product build with five fresh scripted Headless Edge routes at `http://127.0.0.1:4182/Plenoi-Get-Job/`.

Exact browser build hash: `2a66d598add04bcd6459dba7d923b7d5caf02f0aae7451dbd30f61c9681ebd04`.

Normalized core hash: `a4b48a490d06224abd9a6c6787b862a592b2faee2e4e308ef947875761c2cbb2`.

Method: ran `qa/browser-tests.js` with synthetic profiles, seeds 2501–2505, mixed, repair, risk, and default choice patterns; four routes exercised care/rest behavior. I inspected Thai lesson feedback and endings, then used a focused actual-browser fixture to inspect the generic advanced-task prompt, all four displayed options, and the visible assessment deltas after choosing each option. These scripted routes and selected screens do not constitute human playtesting, learner-comprehension evidence, or exhaustive review of all story text. No product or test files were changed. Per-round evidence is in `qa/results/batch6/thai/round-N/`; targeted screen captures and extracted text are in `qa/results/batch6/thai/advanced-task-*` and `advanced-task-evidence.json`.

## Five fresh routes

| Round | Seed / pattern | Browser result | Route summary |
|---|---|---|---|
| 1 | 2501; care; mixed | PASS; 197 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 47, stress 0; sustainable true |
| 2 | 2502; care; repair | PASS; 194 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 53, stress 0; sustainable true |
| 3 | 2503; risk | PASS; 188 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 35, stress 41; sustainable true |
| 4 | 2504; care; default | PASS; 196 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 56, stress 0; sustainable true |
| 5 | 2505; care; repair | PASS; 194 illustrated states; 80 work decisions; 4 visits; Proposal/final 100; ending tier 3 | Energy 53, stress 0; sustainable true |

Each `report.json` records the exact browser hash above, no page errors, no non-GET requests, and the expected ending, 80 work decisions, four visits, and full Proposal/final scores. These checks establish the exercised scripted routes only.

## Targeted score and wording review

The generic advanced-task scene is titled `งานที่ต้องใช้หลักฐานมากกว่าคำตอบ`, and its prompt asks the player to check a case the previous results did not answer. The four options and responses are concise and the score feedback is legible. None of the four options increases Expertise or Creativity. The choices requesting user feedback and polishing details have score changes that match the visible action. The solo risk-check option has the mismatch below.

## Actionable finding

### T10 — Solo risk-check option gives unsupported teamwork and communication credit (P3)

- Evidence: `advanced-task-question.png`, `advanced-task-choice-1.png`, and the first entry of `advanced-task-evidence.json`.
- The option `ทดสอบจุดเสี่ยงที่ยังไม่มีหลักฐาน` has the reply `คุณพบข้อผิดพลาดก่อนส่ง และบันทึกวิธีตรวจซ้ำไว้`. Its visible deltas include `Communication +1` and `Team Work +1` along with quality, problem-solving, systematic-thinking, and planning gains.
- The visible action and reply describe testing and recording a repeat-check method. They do not say that the player shares the evidence or reviews the method with a teammate, so the communication and teamwork gains are not apparent to the player. This is especially unclear in a generic investigation scene where scores should track the evidence shown.
- Suggested narrow repair: clarify the option or reply to say the player sends the evidence and reviews the repeat-check method with the mentor/team, matching the +1 communication and teamwork scores. The team lead has acknowledged this as a P3 clarity finding and plans to adjust only this gate-specific option/reply.

## Verdict

**Batch 6 is not editorially clean.** The five full browser routes pass, and the other inspected score changes are understandable, but T10 remains actionable. Recheck the targeted four-choice screen after the wording repair; any required fresh full batch should use the new unchanged build.
