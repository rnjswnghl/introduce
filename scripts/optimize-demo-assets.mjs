// public/demos 안의 래스터 이미지를 "같은 파일명·같은 형식"으로 재압축한다. (코드 참조/원본 디자인 불변)
// 표시 크기보다 과하게 큰 이미지만 줄인다. 이미 작은 파일은 건드리지 않는다.
import sharp from 'sharp'; import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs'; import { join, extname } from 'node:path';
const root = new URL('../public/demos/', import.meta.url).pathname; let before = 0, after = 0, n = 0;
const walk = d => readdirSync(d).flatMap(f => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
for (const f of walk(root)) {
  const e = extname(f).toLowerCase(); if (!['.png', '.jpg', '.jpeg', '.webp'].includes(e)) continue;
  const buf = readFileSync(f); if (buf.length < 60_000) continue;
  const img = sharp(buf); const m = await img.metadata(); const w = Math.min(m.width, 700);
  let out = img.rotate().resize({ width: w, withoutEnlargement: true });
  out = e === '.png' ? out.png({ palette: true, quality: 80, effort: 7 }) : e === '.webp' ? out.webp({ quality: 72 }) : out.jpeg({ quality: 76, mozjpeg: true });
  const o = await out.toBuffer(); before += buf.length; if (o.length < buf.length * 0.9) { writeFileSync(f, o); after += o.length; n++; } else after += buf.length;
}
console.log(`${n} files recompressed: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
