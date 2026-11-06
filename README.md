# introJJ — 권주회 포트폴리오

동양풍(수묵·한지·인장) 디자인의 프론트엔드 포트폴리오. 프로젝트 10개, 원본 화면 그대로의 데모 4개.

## 구조
- `src/` Astro 사이트 (홈, 프로젝트 상세 10개, 성능 기록)
- `src/data/projects.ts` 모든 프로젝트 콘텐츠·수치(출처 포함). `draft: true` = 검수 전 초안
- `demos/` 원본 프로젝트 프론트 소스(한페이지·FocusMate·On-Wear·DALTOORI). 화면 코드는 원본 그대로, 서버 자리에만 목업을 연결
- `public/demos/` 위 데모의 빌드 결과(정적). 배포는 이 폴더를 그대로 사용
- `scripts/` 산수(build-shanshui)·서운문 구름(build-xiangyun) 생성, 이미지/데모 에셋 최적화, 성능 측정
- `docs/TOOLS.md` 사용한 오픈소스·스킬

## 실행
```bash
npm install
npm run dev      # 개발
npm run build    # dist/
```
데모 다시 빌드: `cd demos/<이름> && npm ci && npx vite build --outDir ../../public/demos/<이름> --emptyOutDir`

## 배포
Vercel 프로젝트 `introjj` (GitHub 연동). Astro 자동 감지, 빌드 `npm run build`, 출력 `dist/`.
