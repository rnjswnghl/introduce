import { defineConfig } from 'astro/config';

// 정적 출력. 첫 화면에는 프레임워크 JS가 없고, 데모는 사용자가 누를 때만 iframe으로 로드한다.
export default defineConfig({
  site: 'https://introjj.vercel.app',
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
