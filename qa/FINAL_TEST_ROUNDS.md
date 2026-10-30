# Final gameplay and scene review — 2026-10-30

## Review method

Two specialized reviewer roles were used for the final gameplay pass:

- **Game Designer:** inspected player feedback, choice consequences, scene pacing, and interview/training progression.
- **Storyboard Designer:** inspected route continuity and whether the scene illustration matches its actors and event.

Reviewers used scripted browser paths and focused visual/state checks. They are AI review roles, not recruited human testers. The loop ran seven review rounds; findings were routed to the game programmer, addressed, and rechecked. Round 7 closed the two-role review with no scoped findings. A final engineering browser regression after the cache-version update then completed 80 decisions, four advisor visits, and both exams, rendering 188 image frames with no page errors or non-GET requests.

### Role qualification before review

The installed skill catalog had no dedicated Game Designer or Storyboard Designer skill package. Before the first review, each AI reviewer completed a code-grounded competency check:

- The Game Designer explained how it would assess legible trade-offs, recoverable difficulty, pacing, and causal gates, and cited the repository's documented loop and the interview functions in `sim-ui.js`.
- The Storyboard Designer explained its action-to-image, blocking/eyeline, emotional-continuity, and diegetic-prop checks, and identified a concrete mismatch where a work scene named the mentor while the art staged the lead.

These checks are role qualification evidence, not an external professional certification or an installed discipline-specific skill module.

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

- 18 core checks passed, including strict CV evidence matching, 41 practical lesson templates, distinct answer options, assessment state, cascading incidents, exhausted-state consequences, and the 1,000 ending leaves.
- The final scripted run's build hash is `4a3c5ef9a8f96df0e40029566756442b27e2c48a6c9c657a3b9cf068ae6f5b4a`.
- Event-scene regression checks distinguish the dog chase from the resulting injury/clinic scene, and verify that office visitors, dialogue, and character reactions match the triggering event.

## Limits

These results establish only the scripted paths and selected visual/state assertions. They do not establish human enjoyment, student learning, typical difficulty, a one-hour play duration, or correctness of every route. The AI reviewer roles do not replace human student playtesting. Scene art is procedural pixel art composed from event-specific actors, props, and backdrops; it is not 100,000–200,000 individually hand-painted images, and 188 frames is the count seen on this one regression path rather than a count of unique authored paintings.
