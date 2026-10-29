# Closed-loop QA log

## Batch 1 (2026-10-29)

Four independent AI reviewer roles each executed five sequential headless Edge rounds against the same build `2f2f0e77…c599a`. Their reports are `batch1-game-review.md`, `batch1-novel-review.md`, `batch1-thai-review.md`, `batch1-student-review.md`. All twenty functional routes passed, but independent review found actionable defects. This batch was not clean.

## Collective product fixes after batch 1

| Finding | Change | Regression evidence |
|---|---|---|
| G1/N1 repetitive monthly scenes | Added six authored work dilemmas; month schedules now vary. Recurring themes have chapter-specific titles, subjects and stakes. Technical exercises remain generated separately. | Core scene schedule/variety check; full browser routes |
| N2 borrowed-account → unexplained link-sharing jump | Privacy follow-up now explicitly handles accounts, files and links. Real data incident is scheduled in the monthly plan. | Core causal test and scheduled-data coverage |
| N3 gossip deletes open work incident | Added pending-chain queue and causes. The current work chain stays active; repair opens queued follow-up. Graph records conditional pending targets. | Core queue test; targeted browser regression |
| G2/N5 wrong person's facial reaction | Relationship effects retain each affected NPC's immediate mood, separate from player fatigue. | Actual peer-face pixel change and saved screenshot |
| T01/N5/STU01 teacher feedback uses mentor name/portrait | Feedback accepts explicit presenter; lessons/exams show teacher or assessor with distinct, stable teacher portrait. | Browser checks across JS/SQL/UX/communication |
| T02 patch heading used in every room | Patch wording only for editable-patch tasks; other successful lessons use a neutral learning result. | Targeted browser heading check |
| T03/T04 inaccurate Thai terminology | Corrected SQL customer heading and JavaScript type explanation. | Editorial source review in next batch |
| G3/N4/STU02 exhaustion has negligible effect | Even strong working choices incur fatigue quality loss when stamina is low. Rest changes the path. Outstanding/offer endings require a sustainable state, and wellness combines energy, health and stress. | Core fatigue check; rested and exhausted full browser routes |
| N6 ending ignores descriptor summaries/facts | Work, relationship and wellness closure is rendered; all authored facts have specific labels; unresolved incidents remain visible. | Full ending screenshots and source review |
| G4 conversations/random clue lack agency | Each NPC has role-specific lines and options. Contextual chance events open/queue a named work or relationship incident. Talk budget still prevents farming. | Browser talk and queue checks |
| G5 art seed unused/limited scenario props | Seed changes task-board props; code, SQL, QA, data and UX have domain visuals. Travel gets an outdoor scene. Teacher appearance is stable per identity. | Renderer image comparison and screenshots |
| STU03 duplicate interview questions | Reserve generated IDs while building a quiz, and remember answered IDs. Added beginner communication/capacity tasks. Repeated material is explicitly labeled review. | Browser uniqueness check and targeted database scenario |
| Root: stack-specific matching still broad | Added explicit PHP/Java/.NET/mobile/Salesforce requirements and missing-title-stack caps; plain CV skill-list mentions receive less confidence than project evidence. | Actual 584-job distribution and core stack checks |
| Root: local PDF reliability | Vendor PDF.js and its worker locally, keeping CV extraction inside the browser. | Actual synthetic PDF upload and extracted-text check |

A new five-round batch must follow these changes. Functional tests use scripted answer keys to validate routes, not to claim ordinary student success, enjoyment or a human study.
