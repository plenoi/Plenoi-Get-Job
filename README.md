# Plenoi-Get-Job · CAMT WIL CENTER

เว็บเกมจำลองสหกิจศึกษา ใช้ข้อมูลตำแหน่งย้อนหลัง 584 รายการจากปีการศึกษา2564–2568 ตัวละคร สถานการณ์ และผลคัดเลือกเป็นเรื่องจำลอง

## เปิดในเครื่อง

ใช้ Node.js18ขึ้นไป:

```sh
npm start
```

เปิด http://127.0.0.1:4182/Plenoi-Get-Job/

## ระบบปัจจุบัน

- PDF CV อ่านในเบราว์เซอร์ด้วย PDF.jsที่เสิร์ฟจากเว็บเดียวกัน ไม่มี API ส่ง CV หรือคำตอบขึ้นเซิร์ฟเวอร์ ข้อมูลอยู่ในหน่วยความจำของแท็บ
- การจับคู่งานเทียบหลักฐานเฉพาะทักษะและเทคโนโลยี แสดงสิ่งที่ตรง สิ่งที่ขาด และข้อความอ้างอิง ไม่ใช่คะแนนโอกาสได้รับงานจริงและไม่มีฐานคะแนนให้ทุกตำแหน่ง
- CAMT MMIT มีโจทย์ปฏิบัติ JavaScript, SQL, UX, Testing, ข้อมูล ความปลอดภัย การสื่อสาร และการวางแผน รวม41แม่แบบพร้อมตัวอย่างที่เปลี่ยนได้ แพตช์ที่พิมพ์ตรวจด้วยตัวแปลนิพจน์จำกัดขอบเขต ไม่ใช่ JavaScript compilerทั่วไป
- ศูนย์ฝึกแสดงผู้สอน AI ล้อชื่อสาธารณะจากรายชื่ออาจารย์ MMIT มีภาพ Pixel Art ที่ออกแบบเป็นตัวละครใหม่และชื่อ/สกิลคงที่ก่อนและหลังสัมภาษณ์ โดยผูกบทบาทสมมุติกับหัวข้อที่หน้า [หลักสูตร CAMT MMIT](https://www.camt.cmu.ac.th/หลักสูตร-การรับสมัคร/mmit-สาขาวิชาการจัดการสมัย/) ระบุ เช่น การจัดการโครงการ การประยุกต์เทคโนโลยีดิจิทัล การจัดการข้อมูล กระบวนการธุรกิจ และการสื่อสาร การจับคู่ชื่อกับทักษะเป็นเรื่องแต่ง ไม่ใช่ข้อกล่าวอ้างความเชี่ยวชาญของอาจารย์จริง
- ค่าประเมิน14ด้าน ค่าชีวิต8ด้าน และความสัมพันธ์รายคน5มิติเป็นสถานะจริง การตอบและการทำงานส่งผลต่อค่าเหล่านี้พร้อมภาพและผลตอบกลับทันที
- เลือกคุยกับพี่เลี้ยง หัวหน้า เพื่อน และHR บทสนทนาอาจเปิดเหตุแทรก ปัญหางานค้างอยู่เป็นคิวและไม่ถูกลบเมื่อมีเรื่องใหม่
- มีเงื่อนไขเปิดเหตุการณ์จากความหิว น้ำ การพัก ความเบื่อ เงิน ทักษะ จริยธรรม และความสัมพันธ์ รวม15กฎหลัก
- เล่นงานหลัก80การตัดสินใจใน10เดือน พร้อมกิจกรรมที่เลือกเอง นิเทศเดือน2/4/7/9, Proposalเดือน5 และสอบจบเดือน10 ไม่แสดงจำนวนเหตุการณ์ที่เหลือระหว่างเล่น และไม่ใช้ timer บังคับเวลาเล่น
- ฉากเรนเดอร์เป็น Pixel Art แบบ procedural และ deterministic จาก seed อวตาร สถานะ และเหตุการณ์ ใช้ตัวละครและพร็อพร่วมกัน โดยความหลากหลายและความหมายของเหตุการณ์เกิดจากการจัดองค์ประกอบและตำแหน่งตัวละคร ไม่ได้วาดภาพมือแยก 100,000–200,000 ภาพ

## กราฟเรื่อง

เปิด `story-map.html` เพื่อดูโหนด เลือกทางแยกตามเงื่อนไข ดูภาพ ทางเลือก ผลกระทบ และโหนดถัดไป ดาวน์โหลดข้อมูลฉบับเต็มจาก `storygraph/nodes.jsonl.gz`.

กราฟมี160000โหนดสถานะและ1000ฉากจบ รวม161000โหนด ทางเลือกหลัก640000เส้น พร้อมทางแยกที่มีเงื่อนไข ค่านอกบริบทสรุปและประวัติจริงถูกตรวจด้วย guard rules ไม่ได้อ้างว่าแจกแจงทุกประวัติตัวเลขที่เป็นไปได้เป็นต้นไม้แยกหมด ดู `STORY_DESIGN.md`.

```sh
npm run graph
node qa/graph-archive.js
npm test
node qa/profile-and-patch.js
node qa/targeted-regressions.js
node qa/status-browser.js
npm run build
```

Browser QAใช้ Playwright กับ Microsoft Edge ตาม pathในสคริปต์ บนเครื่องอื่นให้ปรับ `WIL_BROWSER_PATH`/ตำแหน่งแพ็กเกจ ผล QAและข้อจำกัดผู้ทดสอบอยู่ใน `qa/REVIEW_STATUS.md` และ `qa/FIX_LOG.md`.

## เผยแพร่และดูแล

When changing `app.js`, `sim-lessons.js`, `sim-art.js`, `sim-ui.js`, or `sim.css`, increment that asset's query version in `index.html`; `npm test` checks the current versions, including the unchanged `sim-core.js` version.

URLเซิร์ฟเวอร์: https://89.45.45.73/Plenoi-Get-Job/
ซอร์สในเครื่อง: `C:\Plenoi-Get-Job` · private GitHub: `https://github.com/plenoi/Plenoi-Get-Job` (branch `main`) · QA และข้อจำกัดผู้ทดสอบ: `qa/FINAL_TEST_ROUNDS.md`, `qa/REVIEW_STATUS.md` และ `qa/RELEASE_REVIEW.md`.

คำสั่งดูแลจาก `/opt/ai-app/plenoi-get-job` ใช้เฉพาะ Compose service `web` ของโครงการนี้:

```sh
cd /opt/ai-app/plenoi-get-job
sudo docker compose ps
sudo docker compose logs --tail=100 web
sudo docker compose up -d --build --no-deps web
```

หากต้อง rollback ให้แตกไฟล์สำรอง `previous-dist-20261030-0610.tar.gz` จาก root ของโครงการ ไฟล์เก็บ path ที่ขึ้นต้นด้วย `dist/` แล้ว build service `web` ของโครงการนี้ใหม่:

```sh
cd /opt/ai-app/plenoi-get-job
sudo tar -tzf previous-dist-20261030-0610.tar.gz
sudo tar -xzf previous-dist-20261030-0610.tar.gz -C /opt/ai-app/plenoi-get-job
sudo docker compose up -d --build --no-deps web
```

Release `f4f512e06a98c8f3b540dcdb0f39d9e82b76ac85` ใช้ browser build SHA-256 `63691929ca8ed848ea9b9e6012136a785603df506748d478e9b91cb164e944d8`. Production smoke check ผ่าน: 15 assets ตรงกันทุก byte, health 200, sibling `/mmit-bird/` ยังคงตอบ 302, office/choice feedback/story graph เปิดได้, ไม่มี browser page errors และไม่มี container อื่นถูก restart. ดูเวลาตรวจและรายละเอียดใน `qa/results/deployment.json`. การตรวจนี้ครอบคลุมเฉพาะ assets และเส้นทาง UI ที่ระบุ ไม่ได้ทดสอบทุกเส้นทางของเกม. ข้อมูลส่วนตัวของผู้เล่นไม่ต้องใช้ฐานข้อมูล บัญชีผู้ดูแลและ SSH อยู่ในไฟล์/ช่องทางที่ละเว้นจาก Git และห้าม commit secrets.
