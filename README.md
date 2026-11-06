# introJJ — 권주회 포트폴리오

동양풍(수묵, 한지) 디자인의 개발자 포트폴리오. 프로젝트 10개, 원본 화면 그대로의 데모 4개.

## 구조
- `src/` Astro 사이트 (홈, 프로젝트 상세 10개, 성능 기록)
- `src/data/projects.ts` 모든 프로젝트 콘텐츠, 수치(출처 포함). `draft: true` = 검수 전 초안
- `demos/` 원본 프로젝트 프론트 소스(한페이지, FocusMate, On-Wear, DALTOORI). 화면 코드는 원본 그대로
- `public/demos/` 위 데모의 빌드 결과(정적). 배포는 이 폴더를 그대로 사용
- `scripts/` (배경 모션은 FlowingSky 셰이더), 이미지/데모 에셋 최적화, 성능 측정
- `docs/TOOLS.md` 사용한 오픈소스, 스킬

## 실행
```bash
npm install
npm run dev      # 개발
npm run build    # dist/
```
데모 다시 빌드: `cd demos/<이름> && npm ci && npx vite build --outDir ../../public/demos/<이름> --emptyOutDir`

## 배포
Vercel 프로젝트 `introjj` (GitHub 연동). Astro 자동 감지, 빌드 `npm run build`, 출력 `dist/`.

## 안내 고양이 챗봇
- 화면 오른쪽 아래 고양이를 누르면 "권주회에 대해" 물어볼 수 있습니다.
- **기본 모드(키 불필요):** `public/chat-kb.json`(사이트 콘텐츠에서 자동 생성)을 브라우저에서 검색해 근거 있는 내용만 답합니다. 기록에 없으면 모른다고 답합니다.
- **LLM 모드(선택):** Vercel 환경변수 `ANTHROPIC_API_KEY`를 설정하면 `/api/chat`이 기록을 근거로 자연어로 답합니다. 키가 없거나 오류가 나면 기본 모드로 자동 전환됩니다. (모델 변경: `ANTHROPIC_MODEL`, 기본 `claude-haiku-5-5`)
- 지식 베이스는 `npm run build`(prebuild)에서 `scripts/build-kb.mjs`가 `src/data/projects.ts`로부터 다시 만듭니다. 콘텐츠를 고치면 챗봇 답도 같이 바뀝니다.
- 검수 전(`draft`) 내용은 "정리 중인 내용"이라는 단서를 달아 답합니다.
