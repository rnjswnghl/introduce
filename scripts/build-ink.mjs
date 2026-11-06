// 수묵 산수 배경 + 흐르는 곡선 구름결(서운문 느낌)을 코드로 생성한다. (고해상도, 투명 webp)
// 참고: 안개 낀 침식 봉우리 · 능선 위 소나무 · 상단에 평행한 가는 선이 S자로 흐르는 구름
import sharp from 'sharp'; import { mkdirSync } from 'node:fs';
const OUT = new URL('../public/img/ink/', import.meta.url).pathname; mkdirSync(OUT, { recursive: true });
const W = 2400, H = 1300;
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function noise1(r, n) { const v = Array.from({ length: n + 2 }, r); return x => { const i = Math.floor(x), f = x - i, s = f * f * (3 - 2 * f), m = k => ((k % n) + n) % n; return v[m(i)] * (1 - s) + v[m(i + 1)] * s; }; }
function ridge(seed, { base, amp, peaks, sharp = 1.0, freq = 1 }) {
  const r = rng(seed); const ns = [0, 1, 2, 3, 4].map(() => noise1(r, 64)); const cs = peaks.map(p => ({ c: p[0] * W, w: p[1] * W, h: p[2] }));
  const pts = [];
  for (let x = -20; x <= W + 20; x += 5) {
    let f = 0, a = 1, s = 0; for (let o = 0; o < 5; o++) { const n = ns[o](x / W * 6 * freq * 2 ** o); f += (1 - Math.abs(2 * n - 1)) * a; s += a; a *= 0.5; }
    f = Math.pow(f / s, sharp);
    let env = 0.18; for (const c of cs) env += c.h * Math.exp(-(((x - c.c) / c.w) ** 2));
    pts.push([x, base - amp * Math.min(1.15, env) * (0.35 + 0.9 * f)]);
  }
  return pts;
}
const pathOf = pts => `M${pts[0][0]},${H + 40} ` + pts.map(p => `L${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ` L${pts.at(-1)[0]},${H + 40} Z`;
function pines(pts, seed, n, size, dark) {
  const r = rng(seed); let s = '';
  for (let i = 0; i < n; i++) {
    const k = Math.floor(r() * (pts.length - 3)) + 1; const [x, y] = pts[k]; const slope = Math.abs(pts[k + 1][1] - pts[k - 1][1]);
    if (slope > 22) { i--; if (r() < 0.2) continue; else continue; }
    const cx = x + (r() - .5) * 30, cy = y + 4 + r() * 10; const m = 3 + Math.floor(r() * 4);
    for (let j = 0; j < m; j++) s += `<ellipse cx="${(cx + (r() - .5) * size * 2.2).toFixed(1)}" cy="${(cy - r() * size * 1.1).toFixed(1)}" rx="${(size * (.7 + r() * 1.1)).toFixed(1)}" ry="${(size * (.35 + r() * .45)).toFixed(1)}" fill="rgba(30,32,28,${dark})"/>`;
  }
  return s;
}
const defs = `
<filter id="rough" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.018 0.03" numOctaves="3" seed="3" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="22" xChannelSelector="R" yChannelSelector="G"/></filter>
<filter id="grain" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.05 0.012" numOctaves="4" seed="11" result="n"/>
  <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  2.4 0 0 0 -0.55" result="a"/>
  <feComposite in="SourceGraphic" in2="a" operator="in" result="tex"/>
  <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 .5 0" result="wash"/>
  <feMerge><feMergeNode in="wash"/><feMergeNode in="tex"/></feMerge></filter>
<filter id="blur3"><feGaussianBlur stdDeviation="3"/></filter><filter id="blur8"><feGaussianBlur stdDeviation="8"/></filter><filter id="blur40" x="-30%" y="-250%" width="160%" height="600%"><feGaussianBlur stdDeviation="46"/></filter><filter id="fuzz"><feGaussianBlur stdDeviation="1.1"/></filter>
<linearGradient id="gA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2c28" stop-opacity=".95"/><stop offset=".45" stop-color="#4a4c46" stop-opacity=".55"/><stop offset="1" stop-color="#6d6e66" stop-opacity="0"/></linearGradient>
<linearGradient id="gB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3c37" stop-opacity=".6"/><stop offset=".5" stop-color="#6b6c64" stop-opacity=".3"/><stop offset="1" stop-color="#8a8a80" stop-opacity="0"/></linearGradient>`;
const L = [
  { seed: 5, base: H * .56, amp: H * .30, peaks: [[.12, .1, .6], [.45, .12, .45], [.82, .1, .7]], sharp: 1.4, g: 'gB', blur: 'blur3', rough: 0 },
  { seed: 9, base: H * .70, amp: H * .46, peaks: [[.06, .09, 1.0], [.3, .08, .55], [.62, .1, .75], [.93, .08, .9]], sharp: 1.2, g: 'gB', blur: 'blur3', rough: 1, pines: [31, 170, 3.4, .42] },
  { seed: 17, base: H * .86, amp: H * .62, peaks: [[.1, .07, 1.0], [.2, .05, .7], [.8, .07, .9], [.9, .05, .8]], sharp: 1.0, g: 'gA', rough: 1, pines: [47, 230, 4.4, .55] },
  { seed: 29, base: H * 1.0, amp: H * .24, peaks: [[.02, .08, .9], [.45, .15, .5], [.97, .1, 1]], sharp: .9, g: 'gA', rough: 1, pines: [61, 210, 6.5, .68] },
];
// ── 레이어별 렌더 → 질감(dest-in) → 안개 사이사이 합성 ──
const wrap = inner => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${defs}</defs>${inner}</svg>`);
const grainSvg = seed => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><filter id="g" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.028 0.008" numOctaves="4" seed="${seed}"/><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1.0 0 0 0 0.22"/></filter><rect width="100%" height="100%" filter="url(#g)"/></svg>`);
const mist = (cx, cy, rx, ry, o) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="rgb(244,239,229)" fill-opacity="${o}" filter="url(#blur40)"/>`;
const layers = [];
for (let i = 0; i < L.length; i++) {
  const l = L[i]; const pts = ridge(l.seed, l);
  const clean = await sharp(wrap(`<g ${l.rough ? 'filter="url(#rough)"' : ''}><path d="${pathOf(pts)}" fill="url(#${l.g})"/>${l.pines ? `<g filter="url(#fuzz)">${pines(pts, ...l.pines)}</g>` : ''}</g>`)).png().toBuffer();
  const tex = await sharp(clean).composite([{ input: await sharp(grainSvg(11 + i * 7)).png().toBuffer(), blend: 'dest-in' }]).png().toBuffer();
  layers.push({ input: tex, top: 0, left: 0 });
  const y = [H * .60, H * .74, H * .88][i];
  if (y) layers.push({ input: await sharp(wrap(mist(W * .3, y, W * .5, 70, .85) + mist(W * .8, y + 30, W * .42, 60, .8) + mist(W * .55, y - 120, W * .35, 40, .55))).png().toBuffer(), top: 0, left: 0 });
}
// ── 흐르는 곡선 구름결: 평행한 가는 선 다발이 S자로 흐르다 모이고 퍼진다 (좌우 이음매 없음) ──
function ribbons(seed, rows) {
  const r = rng(seed); const T = 2400, RH = 560; let out = '';
  for (const row of rows) {
    const ph = [r() * 6.28, r() * 6.28, r() * 6.28], n = row.n;
    for (let k = 0; k < n; k++) {
      let d = ''; for (let x = 0; x <= T; x += 12) {
        const u = x / T * 6.28318;
        const y0 = row.cy + row.a1 * Math.sin(u * row.f1 + ph[0]) + row.a2 * Math.sin(u * row.f2 + ph[1]);
        const spread = row.gap * (1 + .9 * Math.sin(u * row.f3 + ph[2]));
        const y = y0 + (k - (n - 1) / 2) * spread;
        d += (x ? 'L' : 'M') + x + ',' + y.toFixed(1) + ' ';
      }
      const o = (.22 + .3 * (1 - Math.abs(k - (n - 1) / 2) / (n / 2))).toFixed(2);
      out += `<path d="${d}" fill="none" stroke="rgb(78,74,66)" stroke-opacity="${o}" stroke-width="${(.8 + r() * .8).toFixed(2)}" stroke-linecap="round"/>`;
    }
  }
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${T}" height="${RH}">${out}</svg>`);
}
await sharp(ribbons(3, [{ cy: 150, a1: 70, a2: 28, f1: 2, f2: 5, f3: 3, gap: 7, n: 11 }, { cy: 330, a1: 46, a2: 20, f1: 3, f2: 7, f3: 2, gap: 5, n: 8 }, { cy: 470, a1: 30, a2: 14, f1: 2, f2: 6, f3: 4, gap: 4, n: 6 }])).webp({ quality: 70, alphaQuality: 80 }).toFile(OUT + 'ribbon-a.webp');
await sharp(ribbons(8, [{ cy: 200, a1: 80, a2: 24, f1: 1, f2: 4, f3: 2, gap: 8, n: 12 }, { cy: 400, a1: 40, a2: 22, f1: 3, f2: 5, f3: 3, gap: 5, n: 7 }])).webp({ quality: 70, alphaQuality: 80 }).toFile(OUT + 'ribbon-b.webp');
const info = await (await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).composite(layers).png().toBuffer().then(b => sharp(b).resize({ width: 1920 }).webp({ quality: 58, alphaQuality: 70, effort: 6 }))).toFile(OUT + 'mountains.webp');
console.log('mountains', info.size, 'B');
