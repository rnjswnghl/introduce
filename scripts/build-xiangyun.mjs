// 서운문(祥雲) 스프라이트 생성
// 1) 원들의 부드러운 합집합(메타볼) 등고선 → 자연스럽게 부푼 윤곽  2) 반지름이 줄어드는 원 사슬 → 하나로 이어진 가는 꼬리
// 3) 소용돌이 머리 + 안쪽 결선 + 옅은 먹 번짐.  투명 webp.
import sharp from 'sharp'; import { mkdirSync } from 'node:fs';
const OUT = new URL('../public/img/ink/', import.meta.url).pathname; mkdirSync(OUT, { recursive: true });
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const INK = '#2f2c27';

function contour(circles, W, H, cell = 3) {
  const nx = Math.ceil(W / cell) + 1, ny = Math.ceil(H / cell) + 1, f = new Float32Array(nx * ny);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const x = i * cell, y = j * cell; let v = 0; for (const [cx, cy, r] of circles) { const dx = x - cx, dy = y - cy, d2 = dx * dx + dy * dy, R = r * 1.8; if (d2 < R * R) { const q = 1 - d2 / (R * R); v += q * q * q; } } f[j * nx + i] = v; }
  const at = (i, j) => f[j * nx + i], T = 0.33, segs = new Map(), pts = new Map();
  const interp = (a, b, va, vb) => a + (b - a) * ((T - va) / (vb - va));
  const edge = (i, j, k) => { // k: 0 top, 1 right, 2 bottom, 3 left → id & point
    let id, p;
    if (k === 0) { id = `h${i},${j}`; p = [interp(i * cell, (i + 1) * cell, at(i, j), at(i + 1, j)), j * cell]; }
    if (k === 2) { id = `h${i},${j + 1}`; p = [interp(i * cell, (i + 1) * cell, at(i, j + 1), at(i + 1, j + 1)), (j + 1) * cell]; }
    if (k === 3) { id = `v${i},${j}`; p = [i * cell, interp(j * cell, (j + 1) * cell, at(i, j), at(i, j + 1))]; }
    if (k === 1) { id = `v${i + 1},${j}`; p = [(i + 1) * cell, interp(j * cell, (j + 1) * cell, at(i + 1, j), at(i + 1, j + 1))]; }
    pts.set(id, p); return id;
  };
  const link = (a, b) => { if (!segs.has(a)) segs.set(a, []); if (!segs.has(b)) segs.set(b, []); segs.get(a).push(b); segs.get(b).push(a); };
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const c = [at(i, j) >= T, at(i + 1, j) >= T, at(i + 1, j + 1) >= T, at(i, j + 1) >= T];
    const cr = []; if (c[0] !== c[1]) cr.push(0); if (c[1] !== c[2]) cr.push(1); if (c[2] !== c[3]) cr.push(2); if (c[3] !== c[0]) cr.push(3);
    if (cr.length === 2) link(edge(i, j, cr[0]), edge(i, j, cr[1]));
    else if (cr.length === 4) { const m = (at(i, j) + at(i + 1, j) + at(i + 1, j + 1) + at(i, j + 1)) / 4 >= T; if (m) { link(edge(i, j, 0), edge(i, j, 3)); link(edge(i, j, 1), edge(i, j, 2)); } else { link(edge(i, j, 0), edge(i, j, 1)); link(edge(i, j, 2), edge(i, j, 3)); } }
  }
  const seen = new Set(), loops = [];
  for (const start of segs.keys()) { if (seen.has(start)) continue; const loop = []; let prev = null, cur = start;
    while (cur && !seen.has(cur)) { seen.add(cur); loop.push(pts.get(cur)); const nb = segs.get(cur).filter(n => n !== prev); prev = cur; cur = nb.find(n => !seen.has(n)); }
    if (loop.length > 12) loops.push(loop); }
  return loops;
}
const smooth = (p) => { const m = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], n = p.length; let d = `M${m(p[0], p[1]).map(v => v.toFixed(1))}`; for (let i = 1; i <= n; i++) { const a = p[i % n], b = p[(i + 1) % n]; d += ` Q${a[0].toFixed(1)},${a[1].toFixed(1)} ${m(a, b).map(v => v.toFixed(1))}`; } return d + 'Z'; };
const spiral = (cx, cy, R, turns, flip) => { let d = ''; const T = turns * 6.283; for (let t = 0; t <= T; t += 0.2) { const rr = Math.max(1.5, R * Math.pow(1 - t / T, 0.9)); d += (t ? 'L' : 'M') + (cx + flip * Math.cos(t + 1) * rr).toFixed(1) + ',' + (cy + Math.sin(t + 1) * rr).toFixed(1) + ' '; } return d; };

function cloud(seed, W, H, o) {
  const r = rng(seed), S = o.S, B = H * o.base, circles = [], heads = [];
  const leftTail = Math.max(0, ...o.tails.filter(t => t.dir < 0).map(t => t.len)); let x = Math.max(W * o.x0, leftTail + 50);
  // 아랫단: 넓게 이어진 몸통
  for (let i = 0; i < o.n1; i++) { const rr = (30 + r() * 20) * S; circles.push([x + rr * .6, B - rr * .55 + (r() - .5) * 8 * S, rr]); x += rr * 1.25; }
  const bx0 = Math.max(W * o.x0, leftTail + 50), bx1 = x;
  // 윗단/머리: 한쪽으로 쏠려 솟은 둥근 머리들 (여기에 소용돌이)
  for (let k = 0; k < o.heads; k++) { const rr = (20 + r() * 20) * S, fx = o.hpos + (k / Math.max(1, o.heads - 1)) * (o.hspan ?? .6), cx = bx0 + (bx1 - bx0) * Math.min(.95, fx) + (r() - .5) * 20 * S, cy = B - (40 + (k % 2) * 30 + r() * 22) * S; circles.push([cx, cy, rr]); heads.push([cx, cy, rr]); }
  // 꼬리: 반지름이 줄어드는 사슬 (사인파로 흐름)
  for (const tl of o.tails) { let tx = tl.dir > 0 ? bx1 - 8 * S : bx0 + 8 * S, t = 0; const ty0 = B + tl.dy * S; let rr = tl.r0 * S;
    while (rr > 1.6) { const k = t / tl.len; circles.push([tx, ty0 + Math.sin(k * 6.283 * .85 + tl.ph) * tl.amp * S * (0.2 + k), rr]); const step = Math.max(2.5, rr * .75); tx += tl.dir * step; t += step; rr = tl.r0 * S * Math.pow(Math.max(0, 1 - t / tl.len), 1.5); } }
  const loops = contour(circles, W, H, 3); const d = loops.map(smooth).join(' ');
  let g = `<clipPath id="c"><path d="${d}"/></clipPath>`;
  g += `<path d="${d}" fill="#f8f4ec" fill-opacity=".97"/>`;
  g += `<g clip-path="url(#c)">` + circles.filter(c => c[2] > 14 * S).map(([cx, cy, rr]) => `<path d="M${(cx - rr * .78).toFixed(1)},${(cy + rr * .35).toFixed(1)} A${(rr * .8).toFixed(1)},${(rr * .8).toFixed(1)} 0 0 1 ${(cx + rr * .55).toFixed(1)},${(cy - rr * .55).toFixed(1)}" fill="none" stroke="${INK}" stroke-opacity=".5" stroke-width="${(o.sw * .5).toFixed(1)}" stroke-linecap="round"/>`).join('') + `<rect x="0" y="${B - 4 * S}" width="${W}" height="${H}" fill="url(#shade)"/></g>`;
  g += `<path d="${d}" fill="none" stroke="${INK}" stroke-width="${o.sw}" stroke-linejoin="round" filter="url(#wob)"/>`;
  heads.forEach(([cx, cy, rr], i) => { g += `<path d="${spiral(cx, cy + rr * .05, rr * .52, 1.5, i % 2 ? 1 : -1)}" fill="none" stroke="${INK}" stroke-width="${o.sw * .8}" stroke-linecap="round" stroke-linejoin="round" filter="url(#wob)"/>`; });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs>
    <filter id="wob" x="-5%" y="-10%" width="110%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="${seed}" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="2.6"/></filter>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6f6b61" stop-opacity=".0"/><stop offset="1" stop-color="#4b4840" stop-opacity=".30"/></linearGradient></defs>${g}</svg>`;
}
const specs = [
  { seed: 4, W: 1500, H: 480, S: 1.5, x0: .05, base: .78, n1: 5, heads: 5, hpos: .1, hspan: .75, sw: 3.2, tails: [{ dir: 1, len: 520, r0: 15, dy: -4, amp: 14, ph: 0 }, { dir: 1, len: 360, r0: 8, dy: 14, amp: 10, ph: 1.4 }, { dir: -1, len: 150, r0: 9, dy: 2, amp: 6, ph: 0 }] },
  { seed: 12, W: 1500, H: 440, S: 1.4, x0: .08, base: .8, n1: 4, heads: 4, hpos: .25, hspan: .6, sw: 3.2, tails: [{ dir: 1, len: 640, r0: 14, dy: 0, amp: 18, ph: .6 }, { dir: 1, len: 430, r0: 7, dy: 16, amp: 12, ph: 2 }] },
  { seed: 21, W: 1500, H: 500, S: 1.5, x0: .16, base: .76, n1: 6, heads: 5, hpos: .05, hspan: .85, sw: 3.2, tails: [{ dir: -1, len: 330, r0: 13, dy: 0, amp: 12, ph: 0 }, { dir: 1, len: 230, r0: 10, dy: 8, amp: 10, ph: 1 }] },
  { seed: 33, W: 1400, H: 460, S: 1.45, x0: .06, base: .78, n1: 4, heads: 4, hpos: .05, hspan: .55, sw: 3.2, tails: [{ dir: 1, len: 600, r0: 15, dy: -4, amp: 15, ph: .3 }, { dir: 1, len: 430, r0: 8, dy: 12, amp: 11, ph: 1.8 }, { dir: 1, len: 300, r0: 5, dy: 28, amp: 8, ph: 3 }] },
];
for (let i = 0; i < specs.length; i++) { const s = specs[i]; const info = await sharp(Buffer.from(cloud(s.seed, s.W, s.H, s))).webp({ quality: 72, alphaQuality: 85, effort: 5 }).toFile(OUT + `xy-${i + 1}.webp`); console.log(`xy-${i + 1}`, info.size, 'B'); }
