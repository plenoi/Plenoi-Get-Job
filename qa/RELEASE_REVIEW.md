# Release review — Batch 7

> **Current release (2026-10-30):** Runtime commit `4a6bb1e65257bd2b3e5dd9f5d114142f3369db21`, browser build SHA-256 `4a3c5ef9a8f96df0e40029566756442b27e2c48a6c9c657a3b9cf068ae6f5b4a`, deployed at [the HTTPS game URL](https://89.45.45.73/Plenoi-Get-Job/). Production verification passed: 15 static assets byte-match local `dist/`; app health is 200; office, choice-feedback, and graph browser checks passed with zero page errors; `/mmit-bird/` retained status 302. The game container is healthy, and Caddy plus both sibling containers have restart count zero. Full evidence is in [`qa/results/deployment.json`](results/deployment.json). The two-role Game Designer + Storyboard Designer review completed seven rounds, with Round 7 clean within its scoped checks. The post-cache-bump synthetic engineering route passed 18 core checks and completed 80 decisions, four advisor visits, both exams, and 188 image frames with zero browser errors or non-GET requests. See [Final gameplay and scene review](FINAL_TEST_ROUNDS.md) for methods and limits.

> Batch 7 below is historical evidence from the earlier four-role review. Its earlier build and rollout details do not describe this release.

Date: 2026-10-30 (Asia/Bangkok). Batch 7 is clean within the four reviewed scopes. All reviewers used frozen browser build `b2149ded4effa75096bca82e02f20d951669f2e406b6645fa4d83172155e23a1` and each completed five fresh scripted full routes plus one focused rendered-browser check of the revised `advancedTask` choice 0.

## Independent review matrix

| Role | Five route seeds | Route reports | Focused changed-choice check | Scoped verdict |
|---|---|---|---|---|
| Visual-novel/gameplay tester | 2701–2705 | 5/5 passed; no page errors, non-GET requests, or findings | Confirmed visible send-to-mentor wording, joint review reply, expected Communication/Team Work deltas | Clean |
| Third-year Business Computing student | 2801–2805 | 5/5 passed; no page errors, non-GET requests, or findings | Selected visible option; verified reply and unchanged assessment effects | Clean |
| Thai-language teacher/editor | 2901–2905 | 5/5 passed; no page errors, non-GET requests, or findings | Confirmed Thai wording and the response speaker; no Expertise/Creativity change | Clean |
| Light Novel editor | 3001–3005 | 5/5 passed; no page errors, non-GET requests, or findings | Confirmed revised wording makes the Communication/Team Work evidence explicit | Clean |

The exact 20 `report.json` files under `qa/results/batch7/{game,student,thai,novel}/round-1..5/` were independently audited: all pass, carry the same browser hash, match their expected role and round, use five unique seeds per role, and report empty `pageErrors`, `nonGETRequests`, and `findings` arrays. The detailed audit is saved as [`qa/results/batch7-audit.json`](results/batch7-audit.json). Each reviewer report also documents the focused choice check. See [game](batch7-game-review.md), [student](batch7-student-review.md), [Thai](batch7-thai-review.md), and [novel](batch7-novel-review.md) reports.

## Review and fix history

- **Batch 1:** four reviewer roles each completed five scripted rounds and reported actionable issues.
- **Batch 2 / Batch 3:** Batch 2 was interrupted by account usage limits; its artifacts were preserved. Review resumed as four completed sets of five fresh Batch 3 rounds, which found actionable issues. The fixes addressed unsupported assessment for wrong technical answers, misleading feedback, truthful incident review, correct NPC targeting, skipped-test causality, and technical-question identity in history. Details: [Batch 3 fixes](BATCH3_FIXES.md).
- **Batch 4:** five fresh rounds per role found actionable gate-domain evidence, follow-up wording, tier-3 ending title, and simulated salary issues. Fixes kept the follow-up tied to later discovery, made evidence domains explicit, clarified the ending, and displayed a deterministic simulated salary only for an offer. Details: [Batch 4 fixes](BATCH4_FIXES.md).
- **Batch 5:** five fresh rounds per role found that a generic, artifact-free investigation awarded specialty Expertise. It was changed to evidence-limited generic assessment while preserving domain-specific credit for actual technical tasks. Details: [Batch 5 fixes](BATCH5_FIXES.md).
- **Batch 6:** the Thai teacher and novel editor found the generic risk-check choice's Communication/Team Work rationale unclear; the game reviewer considered the inference plausible, and the student reported no additional issue. The action and reply were clarified without changing scores. Details: [Batch 6 fixes](BATCH6_FIXES.md).
- **Batch 7:** four roles each completed five fresh routes and one focused check of that clarification. All four reported clean results in their scoped reviews. No further review batch is pending.

## Scope and limits

The reviews establish the scripted routes and selected UI checks described above. They are not human playtesting, a student comprehension study, an enjoyment measure, a representative difficulty/balance study, or proof that a typical player completes the game in one hour. No 9/10 user rating or other human rating was collected. The graph is a compiled context DAG with shared authored scenes and deterministic rendering; 161,000 graph nodes do not mean 161,000 individually hand-painted scenes or independently authored story branches. Untested routes and behaviors remain outside these scoped verdicts.

## Artifact and rollout status

Local workspace: `C:\Plenoi-Get-Job`. Existing private source repository: `https://github.com/plenoi/Plenoi-Get-Job`.

Production rollout is confirmed at [https://89.45.45.73/Plenoi-Get-Job/](https://89.45.45.73/Plenoi-Get-Job/). The production smoke report [`qa/results/deployment.json`](results/deployment.json), checked 2026-10-30 00:11:38 Asia/Bangkok, records 15 byte-identical assets, app health 200, the sibling `mmit-bird` endpoint's unchanged 302 response, browser office/choice-feedback/story-graph checks, and zero page errors. The deployed container is healthy; the existing Caddy, sibling app, and worker containers remained up. This confirms rollout and the exercised smoke path, not exhaustive live behavior. Source and QA documentation are pushed to the existing private GitHub repository through commit `5180a2cf8f09f598df539c7ccdbf787f2ceb7198`. The deployed runtime remains product build `b2149ded4effa75096bca82e02f20d951669f2e406b6645fa4d83172155e23a1`, corresponding to runtime commit `dcf6a6d9856dd742f620cc93284ec7a0dec1cd86`; the later documentation-only commit does not require redeployment.
