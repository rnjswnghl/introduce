# 사용한 오픈소스, 스킬 정리

사용하면 좋은 도구는 적극적으로 쓰고, 여기에 근거와 라이선스를 함께 적는다. (새로 쓰면 이 표에 추가)

## 오픈소스
| 도구 | 용도 | 왜 | 라이선스 |
|---|---|---|---|
| Astro 5 | 정적 사이트 생성 | 첫 화면 JS 0KB. 콘텐츠 중심 포트폴리오에 최적 | MIT |
| sharp | 이미지 리사이즈, webp 변환, 구름 텍스처 생성 | 캡처 17.0MB → 0.9MB, 데모 이미지 재압축 | Apache-2.0 |
| @fontsource/nanum-myeongjo | 제목 서체 자체 호스팅(unicode-range 서브셋) | 외부 폰트 서버, 렌더 차단 제거 | OFL-1.1 |
| fonttools + brotli (Python) | On-Wear 데모 폰트 woff → woff2 | 폰트 전송량 725KB → 503KB | MIT |
| Playwright (Chromium) | 화면, 콘솔 오류 검증 | 빌드 결과를 실제 브라우저로 확인 | Apache-2.0 |
| Vite, Vue 3, React 18 | 원본 프로젝트 프론트를 그대로 데모로 빌드 | 원본 디자인 유지 | MIT |
| Expo / react-native-web | DALTOORI 모바일 앱의 웹 빌드(기존 산출물 사용) | 원본 화면 유지 | MIT |

## 스킬 / 에이전트 도구
- Claude Code 파일, 브라우저 검증 도구(Playwright 연동): 화면 캡처로 디자인, 콘솔 오류 확인
- (사용 예정) `design:design-critique`, `design:accessibility-review`: 디자인, 접근성 점검
- (사용 예정) `engineering:code-review`: 배포 전 리뷰

## 에셋 출처
- 수묵 산수 배경: 기존 `introme`(intro_j)의 AI 생성 배경 이미지 재사용 (Shan Shui Infinite, 직접 생성 시도는 톤이 맞지 않아 채택하지 않음)
- 배경 모션: `FlowingSky.astro`의 WebGL 셰이더가 그림의 밝은 영역(안개, 구름결)만 일렁이게 함
- 도서 표지, 카테고리, 의류 사진: 기존 포트폴리오의 이미지 세트(데모용). **의류 사진, 도서 표지는 외부 쇼핑몰/출판사 이미지라 공개 전 사용 허가 확인 필요**
