# Verification handoff — 2026-10-30

## Current deployed release

- Current browser regression build SHA-256: `63691929ca8ed848ea9b9e6012136a785603df506748d478e9b91cb164e944d8`.
- `npm test` reports 19 core checks passed; the story archive contains 161,000 nodes, 640,000 choices, and 1,000 ending leaves; practical training has 41 lesson templates.
- A fresh synthetic browser route completed 80 decisions, four advisor visits and both exams, rendered 188 image frames, and reported zero page errors and zero non-GET requests. Report: `qa/results/final-deploy/game/round-1/report.json`.
- Final review: five current-build Game Designer JSON routes passed; Storyboard Designer completed five guided visual routes on the locked source, with screenshots but without per-route JSON. This is AI-assisted review, not human playtesting; see `qa/FINAL_TEST_ROUNDS.md` for scope and limits.
- Runtime commit `f4f512e06a98c8f3b540dcdb0f39d9e82b76ac85` is live. Production verification byte-matched all 15 assets, confirmed app health 200, sibling `/mmit-bird/` status 302, and passed office/choice-feedback/story-graph browser checks with zero page errors. App health is `healthy`; Caddy and both sibling containers remain running with restart count zero. See `qa/results/deployment.json`.

## Historical Batch 7 frozen build and independent review

- Browser build SHA-256 (same input formula as `qa/browser-tests.js`): `b2149ded4effa75096bca82e02f20d951669f2e406b6645fa4d83172155e23a1`.
- Normalized `sim-core.js` source SHA-256: `2410e67dffdd4e5eba1eb6c9e5db62fb852caaa6cec396c6605e58461f5e6dc9`.
- The four Batch 7 reviewer roles each completed five fresh scripted browser routes on that build, plus one focused rendered check of the changed `advancedTask` choice and reply. All 20 route reports were audited: all passed, have the expected role/round and a unique seed within role, match the same browser hash, and contain empty page-error, non-GET-request, and findings arrays. The reviewer verdicts were scoped clean. See `qa/RELEASE_REVIEW.md` and `qa/batch7-*-review.md`.
- The focused fixture confirmed the revised evidence-sharing/review wording and the existing Communication +1 / Team Work +1 deltas; no score effects were changed.

## Engineering checks

The prior fix-build verification on the same frozen source passed: 17 core checks; gate regressions; choice-feedback regressions; the focused generic-task family/choice and rendered UI regression; and graph archive verification of 161,000 nodes, 640,000 choices, and 1,000 endings. The Batch 6 graph gzip payload SHA-256 is `A495EC2F2EB033AF5FFC8B3558D6565EC3B5F2724F072DFB69AE40DCB9958B94` (19,280,984 bytes). Its source hash matches the frozen core hash above. Batch 7 reviewers did not rerun unrelated PDF, salary, status, or specialty-task suites.

Automated checks use synthetic profiles, answer keys, and selected scenes. They do not prove human comprehension, unaided student ability, enjoyment, typical-player success, one-hour completion, 9/10 user rating, or exhaustive correctness. The graph is a compiled context DAG with shared authored scene families; node count is not a count of separately hand-painted scenes or independently written complete stories.

## Deployment

Production rollout is confirmed at [https://89.45.45.73/Plenoi-Get-Job/](https://89.45.45.73/Plenoi-Get-Job/). `qa/results/deployment.json` records the passing check for runtime commit `dcf6a6d9856dd742f620cc93284ec7a0dec1cd86`: 15 byte-identical static assets, app health 200, sibling `mmit-bird` status 302, office UI with five hotspots, four-choice feedback, story graph with four edges, and zero browser page errors. The production container was healthy; Caddy, the sibling app, and its worker were not restarted. The check is a smoke test and does not prove exhaustive live behavior. Source and QA documentation are pushed to the existing private GitHub remote through `5180a2cf8f09f598df539c7ccdbf787f2ceb7198`. That documentation-only commit does not change the deployed product build `b2149ded4effa75096bca82e02f20d951669f2e406b6645fa4d83172155e23a1` and does not require redeployment.
