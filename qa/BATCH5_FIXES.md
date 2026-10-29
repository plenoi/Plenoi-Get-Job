# Batch 5 collective fix

Date: 2026-10-29 (Asia/Bangkok). Batch 5 had one actionable finding, independently reported by the Light Novel editor and visual-novel/gameplay tester: the generic `advancedTask` gate awarded specialty Expertise despite showing no specialty artifact. The database fixture showed no query, schema, table, or database behavior while SQL Expertise rose from 70 to 73. The four roles completed five fresh browser rounds on build `abd5281b2efa4c18ccaa51c4781dd5183eb194d66bb553ffb0af6b1f2ea03a1d`; the student review found no additional actionable issue. Batch 5 was not clean. This fix build needs a fresh Batch 6 review; no clean signoff is claimed.

## Change

`advancedTask` remains a generic investigation scene. Its four option effects now carry explicit, evidence-limited assessment deltas: risk checking credits work quality/problem solving/systematic thinking/planning; seeking user feedback credits work quality/problem solving and demonstrated teamwork/communication; polishing details credits modest work quality only; sending without checking reduces work quality/reasoning/planning/teamwork/communication. None of the choices awards specialty Expertise or Creativity. The active job family no longer maps this generic scene to JavaScript, SQL, UX, QA, data, communication, or planning domain evidence.

The gate clones each option, effect, and nested stats/relationship/context/assessment data. The shared `SCENES.learning` template is not mutated. Visible domain-specific questions continue to use `technicalScene()` and award expertise for the actual domain response.

Core cache query strings are now `sim-core.js?v=7` in `index.html` and `story-map.html`.

## Verification

- `node --check sim-core.js` and `node --check qa/batch4-fix-regressions.js`
- `node qa/core-tests.js` — 17 checks, 161,000 nodes, 640,000 edges, 40 templates; eligible offer availability remains below 5% in the existing 2,000-seed check.
- `node qa/gate-regressions.js`
- `node qa/choice-feedback-regressions.js` — all eight visible technical domains and four choices per domain.
- `node qa/batch4-fix-regressions.js` (updated regression) — all eight job families × all four generic advanced-task choices; no Expertise/Creativity awards; shared learning-template immutability; explicit per-choice scores; real visible SQL work still awards SQL Expertise; browser checks cover the generic SQL gate, real SQL question, follow-up, and offer/no-offer endings.
- `node scripts/build-story-graph.js`, `node qa/graph-archive.js`, and `node scripts/package.js`.

The targeted and browser checks are synthetic fixtures. They do not constitute human playtesting, student comprehension evidence, an enjoyment measure, or exhaustive route coverage. Batch 6 fresh independent reviews are pending.
