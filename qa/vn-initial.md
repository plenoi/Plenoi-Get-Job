# Visual novel game tester — initial source audit

Date: 2026-10-29. Role: experienced visual novel/gameplay designer. Method: source review of `app.js`, `index.html`, and README; no browser play. This is the initial audit, **not** one of the requested five review rounds.

## Current blockers to fun and agency

1. **Matching starts from an unsupported high floor.** `matchJob()` (app.js:33) starts every job at 42, adds 18 for declared interest, then counts generic substrings from the entire CV twice. There is no must-have skill, evidence strength, unrelated-role penalty, or uncertainty. This can label most roles suitable even when evidence is absent.
2. **The academy rewards a repeated answer template.** The small `modules` bank (app.js:65) repeats through many loops. At Level 2–3, `academy()` appends a long option combining the stock best answer with a safe constraint response. That makes “choose the long, comprehensive answer” a strong shortcut. `moduleAnswer()` gives +1 and subtracts 2 at Level 3; repetition increases effort, not enjoyment or mastery. No runnable code, SQL output, UI specimen, test result, or concrete artifact demonstrates learning.
3. **Perfect interviewing is punitive rather than dramatic.** `interviewOutcome()` requires 100/100. Every imperfect but defensible response repeats the full interview, and feedback is delayed until the end. This makes choices feel like a survey with a hidden answer key; the student cannot see a social reaction or recover within the scene.
4. **Image coverage is incomplete.** Main academy/interview/month screens contain canvases, but `answerInterview()`, `interviewOutcome()`, `answerExam()`, and monthly review screens are text-led. `monthReview()` calls `pixel()` without rendering its canvas. A player may cross several narrative transitions with no useful illustration or reaction.
5. **The office is a backdrop, not a place.** `month()` advances a linear event queue. There is no persistent room/hub, inspectable work area, voluntary conversation, character availability, or player-controlled pacing between commitments.
6. **Humor is unmotivated.** `variationAxes.light`, the generated `surprises`, and dialogue packs inject cat/printer/robot flavor irrespective of the actual conflict. This can make a serious workplace issue read as a disconnected gag. Dogs should occur in their own causal route, not as decorative sentence fragments.
7. **Stats have little readable dramatic feedback.** `answerMonth()` updates a small textual result panel and a few current values, but not before→after deltas, task outcomes, character facial changes, or a persistent relationship memory visible through conversation. Other answer types do less.
8. **The graph is not an explicit story graph.** `selectMonthEvents()` samples a list; most follow-up is a few flags/scores. There is no inspectable 100,000–200,000-node graph with valid conditional edges, scene IDs, and terminal leaves. The combinatorial ending prose should not be presented as thousands of independently authored routes.

## Acceptance criteria for the redesigned game

### Core loop and pacing

- After placement the player returns to an illustrated office hub with at least work desk, coworker, mentor/manager, and rest/learning affordances.
- Talking, working, learning, resting, and escalating have distinct costs and benefits; conversations can trigger a related event. Repeated friendly chat must not be an unlimited relationship/stat farm.
- Each work session has an immediate task goal and a visible outcome. A player can state “what I was trying to achieve, what I did, and what changed” after a scene.
- A failure creates recovery options or a changed route, rather than requiring a long identical quiz to be repeated. Difficulty comes from trade-offs, evidence, priorities, and consequences.

### Visual and social feedback

- Every narrative node and its outcome renders a scene and at least one relevant character/prop; portrait expressions reflect the actor’s reaction. Every answer produces visible stat/skill deltas, relationship change, or an explicit no-change reason.
- Keep the event setup to one or two short Thai sentences. Show code, tables, mock UI, a task board, or illustrated props instead of embedding all information in a paragraph.
- Each named NPC has a stable role and distinct behavior. Talking after a dispute must acknowledge that dispute; positive reactions must not contradict a documented deception or repeated harm.

### Real learning and matching

- CV matching distinguishes exact skill evidence, related evidence, and missing prerequisites. A narrow JavaScript/SQL CV must not score strongly for unrelated design, HR, and marketing jobs. Show matched evidence and at least one concrete gap per job; unknown text must not be treated as demonstrated proficiency.
- Programmer training contains real code with observable input/output or repair tests; SQL training includes a schema/sample rows and result; UX/UI includes a specimen and usability goal; QA includes test cases/expected outcomes. Explanations teach why a result occurred.
- The next challenge changes after a miss or demonstrated mastery. A short session must not repeat the same stem/options merely with shuffled letters or a new joke.
- No “longest answer wins” pattern: all four options should be credible and of comparable information density. Partial credit and trade-offs should have visible effects where appropriate.

### Story and graph validity

- Every graph node has a stable ID, route/phase, scene reference, concise content or task reference, prerequisites, and typed effects; all outgoing edges resolve to valid nodes.
- A graph validator proves reachable start→ending paths, no nonterminal dead ends, valid scene references, sensible month/phase progression, and bounded loops. Test deliberate success, random clicking, reckless behavior, repair/reconciliation, and skill-development routes.
- The requested 100,000–200,000 count should refer honestly to generated, reachable story states, not blank padding or repeated text labels. Publish a graph explorer/export and distinguish state-node count from authored scenario count and generated illustration variants.
- Endings are terminal leaves whose outcome is traceable to accumulated evidence and flags. The best ending must be achievable by a competent policy and rare under random clicking; arbitrary lottery must not dominate hard-earned success.

## Five-round testing proposal

For each batch, use five distinct reproducible seeds/profiles/policies. Round 1: novice/narrow CV; Round 2: strong but specialized CV; Round 3: random/reckless choices; Round 4: conflict and recovery; Round 5: competent route plus learning transfer. Record source commit/build, seed, method, observed actions, screenshots or simulation traces, blockers, and acceptance verdict. Do not call source simulation browser play. If the developer changes behavior in a batch, start a fresh five-round batch against the revised build and retain old findings.

Completion means no unresolved actionable findings within the tested scope; it cannot honestly guarantee that an enormous state graph contains no possible defect.
