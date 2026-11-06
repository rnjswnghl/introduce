// {Shan, Shui}* (Lingdong Huang, MIT) 의 산·나무·전각 생성 함수를 빌드 때 한 번 호출해 장면을 만들고,
// 선화에 먹 번짐을 더해 "잉크=알파" 투명 webp 로 저장한다. 런타임에는 이미지 한 장만 쓴다(성능).
// 사용: SSI=<shan-shui-inf 저장소 경로> node scripts/build-shanshui.mjs [seed]
import { createRequire } from 'node:module'; import sharp from 'sharp';
const require = createRequire(import.meta.url); const { chromium } = require('playwright');
const SSI = process.env.SSI; if (!SSI) throw new Error('SSI 환경변수 필요 (shan-shui-inf 저장소 경로)');
const seed = +(process.argv[2] ?? 20261106);
const OUT = new URL('../public/img/ink/', import.meta.url).pathname;
const W = 2400, H = 1300;
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: W, height: H } });
await p.goto('file://' + SSI + '/index.html'); await p.waitForTimeout(1200);
await p.evaluate(([W, H, seed]) => {
  Math.seed(seed); let s = '';
  const g = (op, inner) => `<g opacity="${op}">${inner}</g>`;
  const mist = (y, h, o) => `<rect x="0" y="${y}" width="${W}" height="${h}" fill="url(#mg)" opacity="${o}"/>`;
  // 원경: 멀리 겹쳐진 능선
  s += g(.5, Mount.distMount(-100, 540, 11, { hei: 250, len: 2700 })) + g(.7, Mount.distMount(200, 620, 29, { hei: 330, len: 2600 }));
  s += mist(470, 220, .9);
  // 중경: 봉우리를 촘촘히 겹쳐 능선이 이어지게
  [[0, 780, 560, 5], [430, 520, 480, 7], [820, 700, 560, 9], [1200, 480, 500, 11], [1580, 760, 560, 13], [1960, 560, 520, 15], [2320, 820, 600, 17]].forEach(([x, hei, wid, sd]) => { s += g(.8, Mount.mountain(x, 880, sd, { hei, wid, tex: 320, veg: true })); });
  s += mist(690, 260, .9);
  // 근경: 크고 진한 봉우리
  [[-100, 980, 760, 21], [520, 470, 520, 23], [920, 600, 560, 25], [1320, 430, 520, 27], [1720, 560, 560, 29], [2100, 780, 620, 31], [2450, 1000, 740, 33]].forEach(([x, hei, wid, sd]) => { s += Mount.mountain(x, 1130, sd, { hei, wid, tex: 340, veg: true }); });
  s += mist(1010, 200, .5);
  s += Mount.flatMount(500, 1240, 3, { wid: 1000, hei: 90, cho: .55 }) + Mount.flatMount(1700, 1250, 5, { wid: 900, hei: 80, cho: .5 });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs><linearGradient id="mg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect width="100%" height="100%" fill="#fff"/>${s}</svg>`;
  document.documentElement.style.background = '#fff'; document.body.style.margin = '0'; document.body.innerHTML = svg;
}, [W, H, seed]);
const png = await p.screenshot({ type: 'png' }); await b.close();

// 후처리: 선화 → 먹 번짐(자기 블러와 곱) → 어두운 정도를 알파로
const gray = await sharp(png).grayscale().raw().toBuffer({ resolveWithObject: true });
const blur = await sharp(png).grayscale().blur(16).raw().toBuffer();
const n = W * H, rgba = Buffer.alloc(n * 4);
for (let i = 0; i < n; i++) {
  const l = gray.data[i] / 255, bl = blur[i] / 255;
  const wash = Math.pow(bl, 1.6);               // 선이 모인 곳일수록 짙은 번짐
  const v = Math.max(0, Math.min(1, l * (0.35 + 0.65 * wash)));
  const a = Math.min(1, Math.pow(1 - v, 0.95) * 1.7);
  rgba[i * 4] = 38; rgba[i * 4 + 1] = 36; rgba[i * 4 + 2] = 32; rgba[i * 4 + 3] = Math.round(a * 255);
}
const info = await sharp(rgba, { raw: { width: W, height: H, channels: 4 } }).resize({ width: 1920 }).webp({ quality: 55, alphaQuality: 62, effort: 6 }).toFile(OUT + 'shanshui.webp');
console.log('shanshui.webp', info.size, 'B');
