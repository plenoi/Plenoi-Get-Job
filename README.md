# PLENOI WIL Career Life Simulator

เว็บเกมจำลองชีวิตฝึกงาน 10 เดือน ใช้ข้อมูลตำแหน่งงานจากไฟล์ปีการศึกษา 2564–2568 จำนวน 584 รายการ

## เปิดเล่น

เปิด Terminal/PowerShell ในโฟลเดอร์นี้ แล้วรัน:

```powershell
python -m http.server 8000
```

จากนั้นเปิด http://localhost:8000

## ในเกมมีอะไรบ้าง

- ยื่น CV PDF ก่อนเริ่ม · อ่านข้อความและจับคู่ในเบราว์เซอร์เท่านั้น · CV, โปรไฟล์, คำตอบ และคะแนนไม่ถูกอัปโหลดหรือเก็บบนเซิร์ฟเวอร์ และจะหายเมื่อปิด/รีเฟรชแท็บ
- ศูนย์ฝึกทักษะ Soft Skill, Hard Skill และทักษะตรงตำแหน่ง · ตอบถูกจึงได้แต้ม · ระดับคำถามไต่ตามพลังสกิล
- ห้องสัมภาษณ์แบบเลือกคำตอบ ปรับความยากตามพลังสกิล · ต้องได้คะแนนสัมภาษณ์ 65/100 และพลัง CV+สกิลตำแหน่ง 70/100 · ถ้าไม่ผ่านจะวนกลับไปฝึก
- คลังเหตุการณ์ 1,000 เรื่องจาก 100 ธีม (20 สถานการณ์หลัก × 5 เหตุพลิกผัน) สุ่มเจอเดือนละ 6–10 เรื่อง รวม 60–100 เรื่องต่อรอบ
- ฉาก Pixel Art สร้างจากโค้ดครอบคลุมห้องสัมภาษณ์ ศูนย์ฝึก ออฟฟิศ แล็บ สตูดิโอ ประชุม พื้นที่พบลูกค้า เดโม ส่งมอบงาน และฉากจบ พร้อมสี ตัวละคร เสื้อผ้า และพร็อพมากกว่า 10,000 รูปแบบ
- แต่ละรอบเลือกเหตุการณ์ไม่ซ้ำจากคลังตามสายงานและลำดับเดือน พร้อมบทสนทนา ตัวละคร และฉาก Pixel Art ตามบริบท
- ฉากจบพร้อมบทสรุปและภาพประกอบ 2,500 รูปแบบ (4 ระดับผลลัพธ์ × 625 บทส่งท้าย/ภาพย่อย)

## ขอบเขตต้นแบบ

เป็นต้นแบบ front-end ที่ทำงานในเบราว์เซอร์ ไม่มีระบบบัญชี ฐานข้อมูลส่วนกลาง หรือระบบนัดสัมภาษณ์กับพนักงานจริง การอ่าน CV ใช้ PDF.js จาก CDN และประมวลผลข้อความในเบราว์เซอร์ โดยไม่มีข้อมูล CV ถูกส่งไปกับคำขอ CDN; ถ้าไม่มีข้อความที่ดึงได้ นักศึกษายังกรอกทักษะด้วยตนเองได้ คะแนนจับคู่เป็น heuristic สำหรับเกม ไม่ใช่การคัดเลือกเพื่อจ้างงานจริง


## ยืนยันว่าเป็นเกมจำลอง

ผู้สัมภาษณ์ โค้ช เพื่อนร่วมทีม ผู้ใช้ และเหตุการณ์ทั้งหมดเป็นตัวละคร/บทบาท AI จำลอง ไม่ได้เชื่อมต่อบริษัทหรือพนักงานจริง ตำแหน่งจาก Excel เป็นข้อมูลย้อนหลังสำหรับสร้างฉาก ไม่ใช่ประกาศรับสมัครหรือคำแนะนำการจ้างงาน การให้คะแนนเป็นกติกาของเกม ไม่ใช่การประเมินคัดเลือกจริง

## เปิดตัวอย่างที่บิลด์ไว้

ไฟล์เว็บที่พร้อมโฮสต์อยู่ใน `dist/`

- ศูนย์จัดหางาน CAMT WIL CENTER · ศูนย์บ่มเพาะทักษะ CAMT MMIT: ใช้หัวข้อหลักสูตรและรายชื่ออาจารย์จากหน้า CAMT; ชื่ออาจารย์ดัดแปลงคล้ายชื่อจริง · โค้ช AI มีภาพ Pixel Art และสาขาโค้ชสมมุติ ไม่กล่าวอ้างความถนัดจริงของอาจารย์แต่ละท่าน

- ตัวเอกใส่ชุดนักศึกษา มช. ในภาพฉากหลัก เลือกเพศและทรงผม Pixel Art ได้ หรือใช้แบบไม่ระบุ

- ตัวเอกปรับทรงผมได้ 20 แบบและเลือกสีผม 10 สี พร้อมตัวอย่าง avatar สดในหน้าใบสมัคร; สีหน้าเปลี่ยนตามความเหนื่อยล้าระหว่างเหตุการณ์

## Deploy with Docker Compose

The production app is static. CV, profile, answers, and scores remain in browser memory for the current session; the app does not upload or store player data on the server and has no player database. NGINX access logging is disabled. The container serves the read-only build behind the server Caddy proxy at `/Plenoi-Get-Job/`; its admin status page is protected with HTTP Basic Auth at `/Plenoi-Get-Job/admin/`. The generated admin credential is stored locally in the ignored `.deploy-secrets/admin-login.txt` file and is never committed.

On the server, from `/opt/ai-app/plenoi-get-job`, use:

```sh
docker compose ps
docker compose logs --tail=100 web
docker compose up -d --build
docker compose down
```

The Compose project joins the existing proxy network and publishes no host port. Rebuild and start it with `docker compose up -d --build` after updating the source/build.
