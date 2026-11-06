// 수묵풍 구름 텍스처(가로로 이어붙는 알파 PNG→webp)를 한 번만 생성한다. 런타임엔 transform 이동만 사용.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
const OUT = new URL('../public/img/ink/', import.meta.url).pathname; mkdirSync(OUT, { recursive: true });
const W = 1600, H = 420;
function svg(seed, freq, thr, soft) {
  // stitchTiles 로 좌우 이음매 없는 노이즈 -> 알파로 변환
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
   <filter id="f" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="${freq}" numOctaves="4" seed="${seed}" stitchTiles="stitch"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.96  0 0 0 0 0.94  0 0 0 0 0.89  ${soft} 0 0 0 ${-thr}"/>
    <feGaussianBlur stdDeviation="7"/>
   </filter>
   <linearGradient id="m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".35" stop-color="#fff"/><stop offset=".7" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
   <mask id="mm"><rect width="${W}" height="${H}" fill="url(#m)"/></mask>
  </defs>
  <rect width="${W}" height="${H}" filter="url(#f)" mask="url(#mm)"/></svg>`;
}
const layers = [
  ['fog-a', 7, '0.0014 0.0090', 1.8, 0.62],
  ['fog-b', 21, '0.0020 0.0110', 2.0, 0.72],
];
for (const [n, seed, freq, soft, thr] of layers) {
  const info = await sharp(Buffer.from(svg(seed, freq, thr, soft))).webp({ quality: 60, alphaQuality: 70, effort: 5 }).toFile(OUT + n + '.webp');
  console.log(n, info.size, 'B');
}
