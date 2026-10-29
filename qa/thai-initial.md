# Initial Thai-language audit

Role: Thai-language teacher/editor. Method: source review of `app.js`, not browser play. This initial audit does not count as a testing round.

## Findings that should change the implementation

1. **Scene text is assembled from unrelated fragments.** `makeDialoguePack()` selects an opener, NPC line, pressure, joke and coaching independently. `buildEventBankForMonth()` then joins phase, beat, surprise, dilemma, pressure and job context. The result can introduce an office cat, an urgent deadline and a data problem in the same prompt without a causal link. Use one authored situation per scene. A joke belongs only where its actor, location and consequence are defined.
2. **Too many instructions share one sentence.** Many “best” answers use a chain of verbs such as check, explain, confirm, report, propose and test. The long answer becomes an answer-key clue. Give each option one main action and one clear cost. Move the detail into the immediate result.
3. **Feedback praises the old answer while rejecting it.** At training level 2–3, a stock answer may be marked wrong because it misses the twist, yet still end with “ดีมาก”. Replace inherited praise with a specific explanation: what was correct, which condition was missed, and what to try next.
4. **The current hard-skill labels do not match the task.** “วางแผนแก้ปัญหาแบบเป็นขั้น” mostly tests workplace behavior. A programming task should show code, expected output, the observed bug and a concrete fix; SQL, UX/UI and testing need equally concrete artifacts.
5. **Visible language repeats implementation labels.** AI SIMULATION, VIRTUAL, DIFFICULTY, LEVEL, feedback and the full simulation notice recur in the reading area. Keep one persistent notice outside the dialogue; use natural speaker names and Thai screen labels during play.
6. **Feedback lacks the before/after comparison.** A sentence about trust changing is difficult to connect to numeric meters. Show the actual delta and a face reaction next to the reason, e.g. “ความไว้ใจ −3 — หัวหน้ายังไม่รู้ว่างานล่าช้า”.
7. **Tone becomes a lecture.** Frequent “ควร”, “ระวัง”, “ดีมาก” and abstract coaching tell the player a rule instead of showing a response. NPC dialogue should express a need or feeling; short teaching notes can follow a technical exercise.

## Acceptance criteria for the redesign

- Every scene has one location, one current problem and a named speaker. Its first visible passage is at most two short sentences; target 40–160 Thai characters, with longer technical data placed in a code/data panel.
- Every ordinary choice has one main action; target 15–80 characters. Exception: a code or SQL option can be longer when exact syntax matters. Avoid making the correct option consistently the longest.
- A result is visible immediately after every choice: scene/portrait reaction, changed metrics as signed deltas, and one cause sentence. If no statistic changes, explicitly show the changed state or relationship evidence instead of claiming an effect.
- Feedback must agree with grading. Wrong or partial responses must not inherit unqualified “ดีมาก”. A correct technical response states the mechanism, not only praise.
- No random dog/cat sentence is appended to an unrelated scene. Animal scenes can exist only as self-contained events with a clear entrance, action and causal follow-up.
- Use consistent Thai terms: “ทักษะ”, “แบบฝึก”, “คำแนะนำ”, “ความไว้ใจ”, “คุณภาพงาน”, “ความเหนื่อยล้า”. Retain code/API/SQL/UX terms only where they are the subject of the exercise.
- Player-facing text never announces the number of upcoming events or future route outcomes. A recap may show what already happened.
- Distinguish observation from judgment: “ทีมยังไม่ได้รับไฟล์” is a fact; “ทุกคนเกลียดคุณ” is an unsupported generalization. A reaction names the affected person and reason.
- Technical exercise content contains its actual input/code/design/testing artifact and one specific learning point. “สื่อสารกับทีมก่อน” cannot be the universal correct answer to unrelated technical problems.
- Illness/support scenes use respectful wording and score work communication, safety or handoff; they do not label a person weak or reduce trust merely because they sought help.

## Sample concise scene and dialogue

### Deadline conflict

Scene: โต๊ะทำงาน · ก่อนเดโม

เมย์: “ทีมรอไฟล์อยู่นะ เปิดแล้วข้อมูลยังหายไปหนึ่งหน้า”

Prompt: “เหลือเวลาอีกนิด คุณจะเริ่มจากอะไร?”

- ตรวจรุ่นไฟล์ แล้วแจ้งเวลาที่ส่งใหม่ได้
- ส่งไฟล์เดิมให้เดโมไปก่อน
- ขอให้เมย์ช่วยตรวจส่วนที่หาย
- กลับไปแก้คนเดียวโดยยังไม่แจ้งทีม

Immediate result example: “เมย์พยักหน้า: ‘โอเค ฉันจะเลื่อนลำดับเดโมให้’”

Delta: “ความไว้ใจ +2 · ความเหนื่อยล้า +1”

Reason: “ทีมจัดแผนสำรองได้ เพราะคุณแจ้งสถานะทันที”

### A partial response that misses a condition

“แนวทางตรวจบั๊กใช้ได้ แต่ไฟล์นี้มีข้อมูลลูกค้าอยู่ หยุดใช้ข้อมูลจริงก่อน แล้วลองใหม่ด้วยข้อมูลจำลอง”

Do not append “ดีมาก” after marking the answer incomplete.

### Programmer exercise

Title: “บั๊กยอดรวมตะกร้า”

Prompt: “ราคาถูกเก็บเป็นข้อความ โค้ดนี้ได้ `"10050"` แทน `150` จะแก้อย่างไร?”

```js
const prices = ["100", "50"];
const total = prices.reduce((sum, price) => sum + price, 0);
```

Correct-fix explanation: “แปลง `price` เป็นตัวเลขก่อนบวก มิฉะนั้น `+` จะต่อข้อความเมื่อเจอ string”

Visible result: the code panel changes to show `Number(price)` and the output becomes `150`; hard-skill delta appears beside the mentor's approving portrait.

### SQL exercise

Prompt: “ต้องการลูกค้าที่ไม่เคยสั่งซื้อ คำสั่งใดเก็บลูกค้าที่ไม่มีแถวในตาราง orders ไว้ด้วย?”

Learning feedback: “ใช้ `LEFT JOIN` แล้วกรอง `orders.id IS NULL` จึงยังเห็นลูกค้าที่ไม่พบคำสั่งซื้อ”

### Relationship reaction

หัวหน้า: “งานช้าได้ แต่ขอให้บอกก่อนหมดกำหนด ฉันจะได้ช่วยจัดคิว”

Delta: “ความไว้ใจ −3 · เกิดข้อตกลง: แจ้งสถานะก่อนบ่ายสาม”

Follow-up: the next late-delivery event checks the actual agreement. Do not attach a disconnected new problem to this sentence.

## Limits

These are language/content acceptance criteria based on the current source. They do not establish visual quality, device layout, technical scoring correctness or fun in a played session. Those require the redesigned build and runtime evidence.
