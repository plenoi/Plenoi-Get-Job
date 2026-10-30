# Story graph event audit

The runtime event library currently has 100 authored event templates. Each template provides four choices and is selected at runtime using the seeded run state, including recent choices, recorded facts, current stats and needs, relationships and bonds, stage, family, chain state, and cooldown history.

The compiled graph has 160,000 compact context nodes and 1,000 ending leaves. Each context node records one canonical baseline descriptor for inspection; a live run may select another eligible event because the full player history is not encoded in those graph dimensions. The current manifest reports 100 authored templates, 78 used by the canonical graph, and 160,000 authored event descriptor variants. Fixed gate descriptors and legacy fallbacks are counted separately; both are currently zero in the canonical graph.

Verification: `node qa/core-tests.js` checks event-template shape, history-sensitive distributions, stat gates, cooldowns, continuation tags, and graph descriptors. The generated manifest at `storygraph/manifest.json` reports the exact current counts and source hash.
