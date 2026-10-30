# Final gameplay and scene review — 2026-10-30

## Review method

Two specialized reviewer roles were used for the final gameplay pass:

- **Game Designer:** inspected player feedback, choice consequences, scene pacing, and interview/training progression.
- **Storyboard Designer:** inspected route continuity and whether the scene illustration matches its actors and event.

Reviewers used scripted browser paths and focused visual/state checks. They are AI review roles, not recruited human testers. The first review loop ran seven rounds. Follow-up review found that the CAMT instructor cast was still generic before hiring; fixes led to additional five-round review batches. A later round exposed a failed-interview art mismatch, and the next batch uncovered a broken UX interview retry after practice. Those issues were corrected, and the final five-round review by each role found no scoped findings.

### Role qualification before review

The installed skill catalog had no dedicated Game Designer or Storyboard Designer skill package. Before the first review, each AI reviewer completed a code-grounded competency check:

- The Game Designer explained how it would assess legible trade-offs, recoverable difficulty, pacing, and causal gates, and cited the repository's documented loop and the interview functions in `sim-ui.js`.
- The Storyboard Designer explained its action-to-image, blocking/eyeline, emotional-continuity, and diegetic-prop checks, and identified a concrete mismatch where a work scene named the mentor while the art staged the lead.

These checks are role qualification evidence, not an external professional certification or an installed discipline-specific skill module. The Game Designer used the installed `review-agent` skill's defect-first review method; no dedicated Game Designer or Storyboard Designer skill module was available.

### Fun-design lens

The review used Raph Koster's *A Theory of Fun for Game Design* as a high-level lens: inspect whether players can learn patterns and build mastery through varied challenges, meaningful feedback, and a retry path that applies what was learned. This is a design heuristic, not a claim that scripted QA proves the game is fun. See [the book's official site](https://theoryoffun.com/) and [Koster's discussion of games as pattern mastery](https://www.raphkoster.com/2006/03/06/a-theory-of-fun-milestone-and-postmortem/).

### Findings and fixes by round

| Round | Game Designer | Storyboard Designer | Disposition |
|---|---|---|---|
| 1 | Interview feedback did not echo the selected answer; the pre-hire menu exposed unclear employee/mentor identity. | Work scenes used generic/static staging; speaker and depicted character could disagree. | Added selected-answer reaction cards, hid employee identities until hire, and staged the active speaker. |
| 2 | Some lesson distractors were easy to eliminate; feedback headings duplicated emoji. | Clinic/cafeteria actor mismatch, dog/road incidents were only tiny pictograms, and interview looked like a lesson. | Added plausible near-miss distractors, cleaned emoji, actor-aware art, large dog/road cues, and separate interview staging. |
| 3 | Weak distractors remained in several templates. | Interview framing changed with the question's skill domain. | Audited lesson templates and held all interview frames/feedback in a consistent interview scene. |
| 4 | Equivalent answers in JavaScript/SQL, weak distractors, a repeated support interview prompt, and an unexplained primary-skill gate. | Road injury left the old question/options visible and duplicated the clinic beat; demo/deadline/review/Proposal used generic meeting compositions. | Corrected answer grading/distractors and interview selection/explanation; made injury transition singular and event scenes dominant. |
| 5 | Two multiply distractors represented the same arithmetic misconception. | Clinic mentor and cafeteria HR looked away from the player. | Replaced one distractor with a distinct error and turned the interlocutors toward the player. |
| 6 | Support communication practice repeated an identical question within six consecutive lessons. | Confirmed actor eyelines and prior scene fixes. | Added a distinct communication recap lesson; added a seed-specific six-unique-question regression. |
| 7 | Verified distinct choices, the support six-question path, interview gate copy/retry, and feedback. | Verified the new lesson image and earlier event/route continuity. | Both reviewers reported no scoped findings. |

## Engineering evidence

- 19 core checks passed, including strict CV evidence matching, 41 practical lesson templates, distinct answer options, assessment state, cascading incidents, exhausted-state consequences, and the 1,000 ending leaves.
- The current browser build hash is `fee51cdd019418ab47716d452cbf9c4f69e0389e6ac51cd948c7ae2145582d16`; runtime source commit `e5fcc959622b5191a78bc0604b4e2e33cda788a` is deployed.
- Event-scene regression checks distinguish the dog chase from the resulting injury/clinic scene, and verify that office visitors, dialogue, and character reactions match the triggering event.
- The CAMT follow-up targeted regressions check eight visible pre-hire fictional coaches, eight distinct pixel portraits, curriculum source links, and consistent coach identity/skill in lesson feedback and advisor scenes.
- The actual UX/UI Designer route (job index 7, seed 1105) now has a retry regression: fail 0/100 and UX 0/2, complete six UX lessons, receive UX-domain questions in the retry, then pass 100/100 and UX 2/2. Passed and failed interview-result artwork is checked in the same browser suite.
- The final Game Designer batch ran five distinct full routes (seeds 1401–1405) with 80 work decisions each; its five JSON reports match the current build hash. The Storyboard Designer then ran five distinct guided visual routes against that same stable source after the programmer lock, using current screenshots for academy, lesson, retry practice, advisor, and both interview outcomes. The Storyboard verdict is reviewer-reported visual evidence with screenshots in `qa/results/storyboard-complete/round-{1..5}`; that batch did not produce per-round JSON. Older `storyboard-final` and `storyboard-retest` reports use earlier hashes and are historical, not evidence for the current hash.
- A fresh engineering browser route on the current hash completed 80 decisions, four advisor visits and both exams; it rendered 228 image frames with zero browser errors or non-GET requests (`qa/results/initial/game/round-1/report.json`).
- The current release is live at [the production URL](https://89.45.45.73/Plenoi-Get-Job/). Deployed index, runtime, art, stylesheet, story map, graph manifest and compressed graph matched local `dist/` byte-for-byte; app and `/healthz` returned 200, `/mmit-bird/` remained 302, and admin remained protected with 401 absent credentials. The app container is healthy; Caddy and both sibling containers remained running. Details and timestamp: `qa/results/deployment.json`.

## Limits

These results establish only the scripted paths and selected visual/state assertions. They do not establish human enjoyment, student learning, typical difficulty, a one-hour play duration, or correctness of every route. The AI reviewer roles do not replace human student playtesting. Scene art is procedural pixel art composed from event-specific actors, props, and backdrops; it is not 100,000–200,000 individually hand-painted images, and 188 frames is the count seen on one regression path rather than a count of unique authored paintings.
