// 요약 페이지(/summary)를 A4 가로 PDF로 만든다. 내용(src/data)을 바꾼 뒤 다시 실행해 public/ 의 PDF를 갱신한다.
//   npm run build && npx astro preview --port 4321 &   →   node scripts/build-pdf.mjs
import { createRequire } from 'node:module'; import { execSync } from 'node:child_process';
const require = createRequire(import.meta.url);
let chromium; try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require(execSync('npm root -g').toString().trim() + '/playwright')); }
const url = process.argv[2] || 'http://localhost:4321/summary';
const out = new URL('../public/Portfolio_For_JooHoe.K.pdf', import.meta.url).pathname;
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(url, { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready);
await p.emulateMedia({ media: 'print' });
await p.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
await b.close(); console.log('saved', out);
