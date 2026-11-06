// 흐르는 안개: 저주파 노이즈의 "명암 띠"(등고선처럼 부드럽게 겹치는 톤 차이)를 투명 webp 타일로 만든다.
// 선 없이 명암만 — intro_j 수묵 배경과 같은 톤. 좌우 이음매 없음(3배 타일 → 가운데 크롭).
import sharp from 'sharp'; import { mkdirSync } from 'node:fs';
const OUT = new URL('../public/img/ink/', import.meta.url).pathname; mkdirSync(OUT, { recursive: true });
const W = 1600, H = 620;
async function layer(name, { seed, fx, fy, bands, amp, blur, tone, bias }) {
  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><filter id="n" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="${fx} ${fy}" numOctaves="3" seed="${seed}" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`);
  const noise = await sharp(svg).png().toBuffer();
  const tile = await sharp({ create: { width: W * 3, height: H, channels: 3, background: '#000' } }).composite([0, 1, 2].map(i => ({ input: noise, left: i * W, top: 0 }))).png().toBuffer();
  const { data, info } = await sharp(tile).blur(5).raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(info.width * info.height * 4), ch = info.channels;
  for (let i = 0; i < info.width * info.height; i++) {
    const n = data[i * ch] / 255;                                  // 0..1, 평균 ≈ .5
    const band = 0.5 + 0.5 * Math.sin(n * 6.2832 * bands);          // 부드러운 등고선 띠
    const mass = Math.max(0, Math.min(1, (n - bias) * 2.6));       // 큰 덩어리(안개가 짙은 곳)
    const y = Math.floor(i / info.width) / info.height, win = Math.pow(Math.sin(Math.PI * y), 1.2);   // 위아래 경계가 선처럼 보이지 않게
    const a = amp * (0.35 * band + 0.65 * mass) * win;
    out[i * 4] = tone[0]; out[i * 4 + 1] = tone[1]; out[i * 4 + 2] = tone[2]; out[i * 4 + 3] = Math.round(Math.max(0, Math.min(1, a)) * 255);
  }
  const info2 = await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } }).blur(blur).extract({ left: W, top: 0, width: W, height: H }).webp({ quality: 62, alphaQuality: 70, effort: 6 }).toFile(OUT + name + '.webp');
  console.log(name, info2.size, 'B');
}
await layer('mist-a', { seed: 7, fx: 0.0016, fy: 0.0042, bands: 3.2, amp: 0.26, blur: 2.5, tone: [128, 124, 114], bias: 0.46 });
await layer('mist-b', { seed: 19, fx: 0.0022, fy: 0.0055, bands: 2.6, amp: 0.2, blur: 3, tone: [150, 146, 136], bias: 0.5 });
