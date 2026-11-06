// 빌드 결과(dist)를 로컬 서버로 띄워 실제 요청을 brotli 크기로 집계한다.
// 사용: npm run build && npx astro preview --port 4321 & node scripts/measure.mjs  (playwright 필요)
import { createRequire } from 'node:module'; import zlib from 'node:zlib';
const require = createRequire(import.meta.url); const { chromium } = require('playwright');
const base = process.env.BASE ?? 'http://localhost:4321';
const br = b => zlib.brotliCompressSync(b).length;
async function run(path, act) {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1366, height: 800 } });
  const t = { js: 0, css: 0, font: 0, img: 0, html: 0, req: 0 };
  p.on('response', async r => { try { const ty = r.request().resourceType(); const body = await r.body(); const n = /image|font/.test(ty) ? body.length : br(body); t.req++; if (ty === 'script') t.js += n; else if (ty === 'stylesheet') t.css += n; else if (ty === 'font') t.font += n; else if (ty === 'image') t.img += n; else if (ty === 'document') t.html += n; } catch {} });
  await p.goto(base + path, { waitUntil: 'networkidle' }); if (act) { await act(p); await p.waitForLoadState('networkidle'); }
  const nav = await p.evaluate(() => { const n = performance.getEntriesByType('navigation')[0]; const lcp = performance.getEntriesByType('largest-contentful-paint'); return { dcl: Math.round(n.domContentLoadedEventEnd), load: Math.round(n.loadEventEnd), lcp: Math.round(lcp.at(-1)?.startTime ?? 0) }; });
  await b.close(); return { path, ...t, total: t.js + t.css + t.font + t.img + t.html, ...nav };
}
const rows = [await run('/'), await run('/projects/on-wear'), await run('/demos/hanpage/'), await run('/demos/focusmate/'), await run('/demos/onwear/'), await run('/demos/daltoori/')];
console.log(JSON.stringify(rows.map(r => ({ path: r.path, js_KB: +(r.js / 1024).toFixed(0), css_KB: +(r.css / 1024).toFixed(0), font_KB: +(r.font / 1024).toFixed(0), img_KB: +(r.img / 1024).toFixed(0), total_KB: +(r.total / 1024).toFixed(0), req: r.req, load_ms: r.load })), null, 1));
