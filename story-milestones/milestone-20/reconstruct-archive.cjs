#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const archiveName = 'plenoi_v1_story_milestone_20.zip';
const expectedSize = 7681268;
const expectedSha256 = 'c160871161efa8141b98223388bb08b2a1eb0a259d83eb96a8b958022edb38af';
const parts = [
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part001",
    "bytes": 524288,
    "sha256": "b6f0cc8524702994b1a79a4a1c4157156d7c5cbdd655172e36f858e2bdc9cae3"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part002",
    "bytes": 524288,
    "sha256": "5eca19b5b9994ebf6fae139e9151e4075289e40b2ca1ad5f29588530dd4a6b7b"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part003",
    "bytes": 524288,
    "sha256": "ba66b40579adb95df6cabefefa9a52b9cf146a88bad6219b5dcdc4bd6e942793"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part004",
    "bytes": 524288,
    "sha256": "e9db6590098ae38636e2b4d8e691363aa98bec4dc2fb64c7106726dd02641efe"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part005",
    "bytes": 524288,
    "sha256": "b62dce191d72ffc1575c66332b2abe0c1dbf3eee6bfb6f4de63d207c45f7df19"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part006",
    "bytes": 524288,
    "sha256": "583cb3cacfdee463ba9fe243685f0d24f36dfcb238b97d636e8e5f4f296d56a6"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part007",
    "bytes": 524288,
    "sha256": "b76772edd52bd541bb32bfc989f9fbfe23afb2ea8db68a72a80fe4d1bddfeef0"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part008",
    "bytes": 524288,
    "sha256": "2a2c0044dab48482232d6f9c87115f2f23f8d09c16d237683068e23da1099980"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part009",
    "bytes": 524288,
    "sha256": "d2b80efec2a58cbb8b8a83f7290723361b1a11ab589e3ba5f696dda44e0f0be0"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part010",
    "bytes": 524288,
    "sha256": "a741b2a578ffbd4c0805e4cb562f6645267a70bcc373a4ca6468e822a5e52eb7"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part011",
    "bytes": 524288,
    "sha256": "6557cce321d64f95ffab1b7a932c2b6c228abb18e918bae7b06aa9ab80c67a4f"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part012",
    "bytes": 524288,
    "sha256": "90f4a5f19700bc965b850cb1104bf2acc1cdb8a599d7cb835f5041b6ab47b471"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part013",
    "bytes": 524288,
    "sha256": "c518ff42b69574b50e937fa3868e040592ff1d8aed4df24591491e67aae484c6"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part014",
    "bytes": 524288,
    "sha256": "ada311cfa48290b4353c38fb9e41d7f1f4891ba50adaeaf5552fafe5a25bd791"
  },
  {
    "path": "parts/plenoi_v1_story_milestone_20.zip.part015",
    "bytes": 341236,
    "sha256": "2c3669a08085a0bfcc37a2f8606395689dfaaeca27a26536eefc5bd3d3b2bb65"
  }
];
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
try {
  const buffers = parts.map(part => {
    const data = fs.readFileSync(path.join(__dirname, part.path));
    if (data.length !== part.bytes || hash(data) !== part.sha256) {
      throw new Error('Part verification failed: ' + part.path);
    }
    return data;
  });
  const archive = Buffer.concat(buffers);
  if (archive.length !== expectedSize || hash(archive) !== expectedSha256) {
    throw new Error('Reconstructed archive verification failed. No archive was written.');
  }
  const destination = path.join(__dirname, archiveName);
  if (fs.existsSync(destination)) {
    const existing = fs.readFileSync(destination);
    if (existing.length !== expectedSize || hash(existing) !== expectedSha256) {
      throw new Error('Existing ZIP differs. Move or rename it before trying again; it was not overwritten.');
    }
    console.log('Existing archive verified; no file was changed.');
  } else {
    fs.writeFileSync(destination, archive, {flag: 'wx'});
    console.log('Reconstructed and verified ' + archiveName);
  }
  console.log('Bytes: ' + expectedSize);
  console.log('SHA-256: ' + expectedSha256);
} catch (error) {
  console.error('Unable to reconstruct archive: ' + error.message);
  process.exitCode = 1;
}
