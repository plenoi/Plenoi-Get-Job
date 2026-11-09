Plenoi-Get-Job: story milestone 20

Cumulative frozen delivery: 20 Thai story roles (ROLE-001 through ROLE-020),
8,244 authored scene nodes and 860 complete routes. All 20 roles passed story
review and simulated DOM checks. Each role has 3 main endings plus 4 additional
paths per month across 10 months (43 routes per role).
Maximum shared nonterminal scene ratio: 50%. No exact or near-duplicate
narrative pairs were found in this snapshot's review.

The original ZIP is provided as 15 binary parts for reliable transfer.
The reconstruction script checks every part, then verifies the complete ZIP
before writing it. This restores the original frozen archive byte-for-byte.
It refuses missing/corrupt parts and never silently overwrites a different ZIP.

Open the text pilot locally
1. Download this repository branch as a ZIP and extract it, or clone this branch.
2. In a terminal, enter story-milestones/milestone-20/.
3. With an already installed Node.js, run:
   node reconstruct-archive.cjs
4. Extract plenoi_v1_story_milestone_20.zip into a NEW, separate folder.
   On systems with unzip, for example:
   unzip plenoi_v1_story_milestone_20.zip -d milestone-20-extracted
5. Enter the extracted folder and run:
   node story-pilot/serve-pilot.js
6. Open http://127.0.0.1:4182/v1/ in your browser.
No npm install is needed.

Optional integrity verification, after reconstruction:
sha256sum -c SHA256SUMS.txt

Optional role checks, from the extracted folder:
node story-pilot/v1/ROLE-001/reader-test.js
node story-pilot/v1/ROLE-001/all-routes-reader-test.js
These are simulated DOM checks, not real-browser tests.

Latest batch (roles 016-020)
- ROLE-016: บริษัท อีเล็คโทรเซรามิคส์ (ไทยแลนด์) จำกัด / qa trainee
- ROLE-017: บริษัท ฟีดแบค 180 จำกัด / พัฒนาซอฟต์แวร์
- ROLE-018: บริษัท ฟอร์ท สมาร์ท เซอร์วิส จำกัด (มหาชน) / พัฒนาซอฟต์แวร์
- ROLE-019: โฟร์ซีซั่น รีสอร์ท เชียงใหม่ / จัดซื้อ รับสินค้า และคลังสินค้า
- ROLE-020: โฟร์ซีซั่น รีสอร์ท เชียงใหม่ / กิจกรรมนันทนาการสำหรับแขก
The archive's README lists all 20 roles and their original company/title names.

Scope and limits
- Real-browser rendering and real-browser storage behavior remain unverified.
- This is not the completed 299-role game. No artwork is included.
- Characters, incidents, project data and employment outcomes are fictional.
  Employer/title provenance is preserved in source documents.
- Internal editorial/review notes and unfinished role 021 onward are excluded.
- Only this milestone delivery is added. Existing project files and milestone 10
  remain unchanged. This draft PR does not merge, deploy, replace the current
  game, or confirm a copy to MSI.

Original archive: plenoi_v1_story_milestone_20.zip
Size: 7,681,268 bytes; 1,060 files after extraction.
SHA-256: c160871161efa8141b98223388bb08b2a1eb0a259d83eb96a8b958022edb38af
