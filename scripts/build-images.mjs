// 원본 이미지 -> 최적화 webp. 원본은 저장소에 넣지 않고 결과물(public/img)만 커밋한다.
// 사용: SRC=<원본 저장소 모음 경로> node scripts/build-images.mjs
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

const SRC = process.env.SRC;
if (!SRC) throw new Error('SRC 환경변수 필요');
const OUT = new URL('../public/img/', import.meta.url).pathname;
const out = (...p) => { const d = join(OUT, ...p.slice(0, -1)); mkdirSync(d, { recursive: true }); return join(OUT, ...p); };
let total = 0;
async function conv(src, dst, { w, q = 72, fit = 'inside' } = {}) {
  const info = await sharp(src).rotate().resize({ width: w, withoutEnlargement: true, fit }).webp({ quality: q, effort: 5 }).toFile(dst);
  total += info.size; return info;
}

// 1) 프로젝트 캡처 (introme 에 이미 있는 실제 화면)
const capDir = join(SRC, 'introme/dist/assets/projects');
for (const f of readdirSync(capDir)) {
  const n = basename(f, extname(f));
  const isGif = f.endsWith('.gif');
  const mobile = /daltoori-(learn|profile|recording|mascot)|daltoori\.webp/.test(f);
  await sharp(join(capDir, f), { animated: false }).resize({ width: mobile ? 390 : 1000, withoutEnlargement: true })
    .webp({ quality: 68, effort: 5 }).toFile(out('p', n + '.webp')).then(i => (total += i.size));
}

// 2) 기존 포트폴리오 이미지 세트
const old = join(SRC, 'rnjswnghl.github.io/projects');
const map = {
  // 도서 카테고리/표지/저자 (한페이지)
  'project2/front/src/assets/categories': { dst: 'demo/hanpage/cat', names: { 건강: 'health', 경제경영: 'biz', 기타: 'etc', 사회과학: 'social', 소설: 'novel', 역사: 'history', 인문학: 'humanities', 자기계발: 'selfdev', 컴퓨터: 'computer' }, w: 420 },
  'project2/front/src/assets/cover': { dst: 'demo/hanpage/cover', names: { 달러구트꿈백화점: 'dallergut', 미드나잇라이브러리: 'midnight', 불편한편의점: 'convenience', 코스모스: 'cosmos', 클린코드: 'cleancode', 해커와화가: 'hacker' }, w: 360 },
  'project2/front/src/assets/author': { dst: 'demo/hanpage/author', names: { 김호연: 'kimhoyeon', 로버트c마틴: 'martin', 매트헤이그: 'haig', 이미예: 'leemiye', 칼세이건: 'sagan', 폴그레이엄: 'graham' }, w: 240 },
};
const nfc = s => s.normalize('NFC');
for (const [dir, cfg] of Object.entries(map)) {
  for (const f of readdirSync(join(old, dir))) {
    const key = nfc(basename(f, extname(f)));
    const name = cfg.names[key]; if (!name) { console.warn('skip', key); continue; }
    await conv(join(old, dir, f), out(...(cfg.dst + '-' + name + '.webp').split('/')), { w: cfg.w });
  }
}
// 의류 (On-Wear 데모)
const cl = join(old, 'project4/public/clothes'); let i = 1;
for (const f of readdirSync(cl).sort()) { await conv(join(cl, f), out('demo','onwear','clothes-' + String(i++).padStart(2, '0') + '.webp'), { w: 420, q: 70 }); }
await conv(join(old, 'project3/public/images/meeting.png'), out('demo','focusmate','meeting.webp'), { w: 720 });
await conv(join(old, 'project3/public/images/FMlogo.png'), out('demo','focusmate','logo.webp'), { w: 160 });

// 3) 안내 고양이 (introme 의 수묵 고양이)
await conv(join(SRC, 'introme/dist/assets/ink-cat.png'), out('ink', 'cat.webp'), { w: 360, q: 82 });

console.log('done, total', (total / 1024).toFixed(0), 'KB');
