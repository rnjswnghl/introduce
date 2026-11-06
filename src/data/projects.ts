// 모든 수치는 저장소(git log / 소스 집계)에서 직접 계산한 값. 출처는 stat.src 에 적는다.
// draft: true  = 원인·결과를 커밋/코드로 추정한 초안. 본인 확인 후 false 로 바꾼다.
export type Stat = { v: string; label: string; src?: string };
export type Trouble = { title: string; problem: string; cause?: string; fix: string; result?: string; draft?: boolean };
export type Shot = { src: string; cap: string; mobile?: boolean };
export type Project = {
  slug: string; no: string; name: string; kor?: string; group: 'ssafy' | 'aleph';
  kind: 'team' | 'solo'; teamSize?: number; period: string; role: string; roleShort: string;
  tagline: string; summary: string; mine: string[]; stack: string[]; stats: Stat[];
  troubles: Trouble[]; decisions?: { t: string; d: string }[]; learned?: string[];
  shots: Shot[]; demo?: 'hanpage' | 'focusmate' | 'onwear' | 'daltoori';
  links: { label: string; href: string }[]; ai?: string; cover: string; accent: string;
};
const P = (n: string, cap: string, mobile = false): Shot => ({ src: `/img/p/${n}.webp`, cap, mobile });

export const projects: Project[] = [
  {
    slug: 'hanpage', no: '壹', name: '한페이지', kor: '도서 추천·독서 기록 커뮤니티', group: 'ssafy', kind: 'team', teamSize: 2,
    period: '2025.05.22 — 05.28', role: '팀장 · 풀스택(프론트 비중 높음)', roleShort: 'Team Lead · Full-stack',
    tagline: '문장 속 당신을 만나는 곳', accent: '#55705f', cover: 'hanpage-home',
    summary: '도서를 검색하고 취향에 맞는 책을 추천받으며 독서 기록(쓰레드)을 나누는 웹 서비스입니다. Django REST 백엔드와 Vue 3 프론트로, 2인 팀을 이끌며 데이터 구성부터 화면까지 맡았습니다.',
    mine: ['알라딘 API로 도서 398권·카테고리 9개 초기 데이터 구성과 전처리', 'Django 백엔드 구조 설계 (accounts·books·threads·guestbook·recommendations 5개 앱)', '저자·장르·랜덤 추천, 카테고리 필터·검색, 도서 상세 화면', '마이페이지(팔로우, 좋아요한 글, 개인정보 수정), 방문록, 카카오맵 지도'],
    stack: ['Vue 3', 'Pinia', 'Django', 'DRF', 'SQLite', 'Aladin API', 'Kakao Maps', 'gTTS'],
    stats: [
      { v: '80 / 110', label: '팀 커밋 중 본인 커밋 (73%)', src: 'git shortlog, 본인 계정 3개 합산' },
      { v: '46', label: 'Vue 컴포넌트 · 13개 라우트', src: 'front/src' },
      { v: '398', label: '도서 시드 데이터 (9개 카테고리)', src: 'back/book/fixtures' },
      { v: '5', label: 'Django 앱으로 도메인 분리', src: 'back/' },
      { v: '7일', label: '기획에서 1차 완성까지', src: '첫 커밋 05.22 → 05.28' },
    ],
    troubles: [
      { title: '인증 토큰 오류로 추천 요청이 막힘', problem: '로그인 후에도 추천 API가 인증 오류를 반환해 도서 상세의 추천 영역이 비어 있었습니다.', fix: '토큰 전달과 사용자 식별 흐름을 점검해 수정한 뒤 저자·장르 기반 추천을 연결했습니다.', result: '동일 저자·동일 장르·랜덤 3종 추천이 상세 화면에서 동작', draft: true },
      { title: '병합 충돌 뒤 기능 흐름 복구', problem: '2인이 같은 앱을 동시에 수정하며 “merge error”류 커밋이 반복됐고 마이페이지·도서 상세 연결이 끊겼습니다.', cause: 'SQLite DB 파일(db.sqlite3)까지 저장소에 포함돼 바이너리 충돌이 잦았음', fix: '충돌을 해소한 뒤 쓰레드↔작성자 마이페이지 경로, 도서별 쓰레드 표출을 다시 연결했습니다.', result: '이후 Git 이슈는 fixtures(JSON) 기반으로 시드를 관리하는 쪽으로 정리해야 한다는 교훈', draft: true },
    ],
    decisions: [{ t: '왜 Django REST + Vue를 분리했나', d: '도서·유저·쓰레드 모델과 인증을 서버가 맡고, 화면은 SPA로 분리해 2인이 서로 다른 레이어를 동시에 작업할 수 있게 했습니다.' }],
    learned: ['기능을 붙일 때마다 다른 곳에서 버그가 생기는 경험 → 브랜치 단위와 DB 파일 관리 규칙의 필요성'],
    shots: [P('hanpage-home', '메인'), P('hanpage-books', '도서 탐색'), P('hanpage-book-detail', '도서 상세'), P('hanpage-threads', '전체 독서 기록'), P('hanpage-thread-detail', '독서 기록 상세'), P('hanpage-thread-write', '기록 작성'), P('hanpage-guestbook', '방문록'), P('hanpage-mypage', '마이페이지'), P('hanpage-login', '로그인'), P('hanpage-signup', '회원가입')],
    demo: 'hanpage', links: [], ai: '',
  },
  {
    slug: 'focusmate', no: '貳', name: 'FocusMate', kor: '스터디 모집·일정·화상 학습 플랫폼', group: 'ssafy', kind: 'team', teamSize: 5,
    period: '2025.07.27 — 08.18', role: '프론트엔드', roleShort: 'Frontend',
    tagline: '나만의 스터디를 찾아보세요', accent: '#b4513c', cover: 'focusmate-home',
    summary: '스터디 모집부터 일정·출석·화상 학습까지 한곳에서 관리하는 웹 서비스입니다. Vue 3 + TypeScript 프론트엔드에서 스터디 생성·검색·상세, 리더/팀원 권한별 화면을 맡았습니다.',
    mine: ['스터디 생성·검색(이름·카테고리·시간)·상세 화면', '리더/팀원 권한별 라우팅과 화면 분기', '공지·게시글·마이페이지, 출석 퀴즈, 스터디룸(OpenVidu 화상) 연동', 'Pinia 스토어와 API 레이어, 백엔드 없이 개발할 수 있는 MOCK 모드 가이드'],
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'OpenVidu', 'FullCalendar', 'Chart.js', 'MediaPipe'],
    stats: [
      { v: '105', label: 'Vue 컴포넌트·뷰 (팀 FE 전체)', src: 'gongtong_frontend/src' },
      { v: '36.7k줄', label: 'TS/Vue 코드 (팀 FE 전체)', src: 'wc -l' },
      { v: '32', label: '라우트 정의 (권한별 리더/팀원 분기 포함)', src: 'router/index.ts' },
      { v: '10', label: 'API 모듈 · 5개 Pinia 스토어', src: 'src/api, src/stores' },
      { v: '5인', label: '팀 구성 · 3주', src: '2025.07.27 — 08.18' },
    ],
    troubles: [
      { title: '권한별 라우팅 404 · 타입 오류', problem: '리더·팀원 경로에서 404가 나고 OpenVidu 세션 API 호출이 TypeScript 빌드 오류를 냈습니다.', fix: '리더/팀원 경로를 정리하고 세션 API를 스터디 ID 기준으로 통일해 타입을 맞췄습니다.', result: '권한별 화면 진입과 화상 연결 흐름이 빌드 통과 상태로 동작' },
      { title: '백엔드 없이도 화면을 개발하려면', problem: 'API 명세가 확정되기 전에는 프론트가 막혀 병렬 작업이 어려웠습니다.', fix: 'MOCK 모드와 사용 가이드(MOCK_MODE_README)를 만들어 하드코딩 데이터로 UI·시나리오를 먼저 검증했습니다.', result: '이 포트폴리오의 데모 방식(더미 데이터 프론트)의 원형' },
    ],
    decisions: [{ t: '왜 Pinia · OpenVidu', d: '여러 화면이 로그인·스터디 상태를 공유해야 해서 Pinia를, 브라우저에서 실시간 화상 학습을 제공하기 위해 OpenVidu를 사용했습니다.' }],
    shots: [P('focusmate-home', '메인'), P('focusmate-study-list', '스터디 목록'), P('focusmate-study-search', '스터디 검색'), P('focusmate-study-results', '검색 결과'), P('focusmate-study-detail', '스터디 상세'), P('focusmate-leader', '방장 화면'), P('focusmate-mate', '팀원 화면'), P('focusmate-activity', '활동 기록')],
    demo: 'focusmate', links: [], ai: '',
  },
  {
    slug: 'on-wear', no: '參', name: 'On-Wear', kor: '가상 피팅·개인화 의류 추천', group: 'ssafy', kind: 'team', teamSize: 6,
    period: '2025.08.25 — 09.29', role: '프론트엔드 (검색·핫아이템·상세 모달)', roleShort: 'Frontend',
    tagline: '나만의 패션 큐레이터', accent: '#6b8f1f', cover: 'onwear-main',
    summary: '사진 한 장으로 의상을 가상 시착하고 개인화된 의류를 추천받는 웹 서비스입니다. React + TypeScript 프론트엔드에서 검색·핫아이템·의류 상세 모달과 찜 상태를 맡았습니다.',
    mine: ['소셜 로그인과 실시간 검색(추천어·인기 순위), 검색 결과 화면', '필터(정렬·가격·브랜드)·페이지네이션·무한 스크롤·“더보기”', '의류/코디/피팅 상세 모달 통일, 찜(like/unlike) 상태 동기화', '비회원 최근 검색어, 핫아이템 페이지와 로딩 스켈레톤'],
    stack: ['React', 'TypeScript', 'Vite', 'Zustand', 'Emotion', 'Axios', 'Playwright'],
    stats: [
      { v: '147 / 464', label: '프론트 저장소 커밋 중 본인 (32%, 팀 최다)', src: 'git shortlog' },
      { v: '20.1k줄', label: 'TS/TSX (팀 FE 전체) · 61 TSX 파일', src: 'wc -l' },
      { v: '300', label: 'search · hotitems · 상세 모달 파일 변경 횟수', src: 'git log --name-only (145+70+85)' },
      { v: '6', label: '기능 모듈 (fitting·hotitems·imagesearch·main·recommend·search)', src: 'src/features' },
      { v: '1초 → 0', label: '핫아이템 로딩의 강제 지연 제거', src: '커밋 메시지' },
    ],
    troubles: [
      { title: '핫아이템 페이지의 “강제 1초 지연” 제거', problem: '로딩 연출용으로 넣은 고정 지연 코드 때문에 데이터가 도착해도 화면이 1초간 대기했습니다.', fix: '임의 지연과 파란 스피너를 제거하고 스켈레톤 UI로 대체했습니다.', result: '체감 로딩 개선. “느리게 느껴지는 UX”의 원인이 네트워크가 아닌 코드일 수 있다는 교훈' },
      { title: '필터 상태와 결과 화면 불일치', problem: '정렬 필터를 취소하면 중복이 제거되는 등 적용된 필터와 검색 결과가 어긋났습니다.', fix: '적용 필터 영역·전체 취소 버튼을 정리하고 검색 조건과 결과를 한 상태로 맞췄습니다.', result: '검색 결과 화면 QA 이슈 해소' },
      { title: '찜 상태 동기화와 중복 호출', problem: '상세 모달에서 찜을 눌러도 목록이 갱신되지 않거나 요청이 중복됐습니다.', fix: '찜 요청을 like/unlike로 구분하고 모달 안 리렌더링·중복 호출을 수정했습니다.', result: '서버 응답과 UI 상태 일치' },
    ],
    decisions: [{ t: '왜 Zustand Persist · Axios 인터셉터', d: '새로고침 뒤에도 인증 상태를 유지하고, 토큰 주입과 인증 오류 처리를 인터셉터 한곳에 모으기 위해 사용했습니다.' }],
    shots: [P('onwear-main', '메인'), P('onwear-search-input', '검색 모달'), P('onwear-search-results', '검색 결과'), P('onwear-fitting', '가상 피팅룸'), P('onwear-image-search', '이미지 검색'), P('onwear-recommend', '추천'), P('onwear-hotitems', '핫아이템')],
    demo: 'onwear', links: [{ label: 'On-Wear 조직 (GitHub)', href: 'https://github.com/On-Wear-SSAFY-13' }], ai: '',
  },
  {
    slug: 'daltoori', no: '肆', name: 'DALTOORI', kor: '한국어 발음·억양 분석 학습 앱', group: 'ssafy', kind: 'team', teamSize: 5,
    period: '2025.10.30 — 11.24', role: '백엔드(AI) — LLM과 함께 개발', roleShort: 'Backend · AI',
    tagline: '말하면 바로 알려주는 발음 코치', accent: '#d08a3c', cover: 'daltoori',
    summary: '한국어 발음과 억양을 분석해 학습자에게 즉시 피드백을 주는 모바일 웹 서비스입니다. FastAPI로 음성 평가·AI 피드백·TTS 참조음 생성 API를 개발했고, 여러 LLM 도구와 협업해 구현했습니다.',
    mine: ['FastAPI 인증·평가 시스템과 즉시 피드백 API', 'MeloTTS 참조음 자동 생성, Whisper 인식·MFA 정렬 기반 평가 로직', 'Firebase 경로 구조와 피드백 이력(참조음·녹음 URL) 제공', '긴 분석 요청의 비동기 처리, RunPod 테스트, Railway 배포'],
    stack: ['FastAPI', 'Python', 'Whisper', 'MFA', 'MeloTTS', 'Firebase', 'Docker', 'Railway'],
    stats: [
      { v: '14', label: 'DALTOORI 프로젝트 커밋 (팀 저장소의 MeloTTS 원본 이력 제외)', src: 'git shortlog' },
      { v: '5일', label: 'FastAPI 인증·평가·즉시 피드백 API 구현 기간', src: '11.15 — 11.20 커밋' },
      { v: '3종', label: '음성 인식(Whisper)·정렬(MFA)·합성(MeloTTS) 파이프라인', src: 'ai/' },
      { v: '5인', label: '팀 구성 · 3.5주', src: '2025.10.30 — 11.24' },
    ],
    troubles: [
      { title: '평가 점수가 잘못 추출됨', problem: '평가 결과에서 점수를 뽑는 순서가 잘못돼 일부 문장에서 점수가 어긋났습니다.', fix: '전체 항목(all_items)을 우선 사용하도록 추출 로직을 수정하고 Whisper 인식과 MFA 평가를 보완했습니다.', result: '종합 피드백 API 응답 형식 개선과 함께 안정화' },
      { title: '긴 분석 요청이 응답을 막음', problem: '음성 분석이 오래 걸려 요청이 대기 상태에 묶였습니다.', fix: '요청을 비동기로 전환하고 Firebase 경로를 개편했습니다.', result: '즉시 피드백 API로 분리' },
      { title: 'AI 코드의 보안 취약점 제거', problem: '여러 LLM이 생성한 코드에 보안상 취약한 부분이 남아 있었습니다.', fix: '마지막 주에 취약 요소를 점검·제거했습니다.', draft: true },
    ],
    decisions: [{ t: '왜 모델을 API로 쪼갰나', d: '음성 인식, 발음 구간 정렬, 비교용 표준 음성 생성, 분석 모델을 각각 분리해 FastAPI로 제공했습니다.' }],
    learned: ['“할 줄 아는 게 없다”고 느낄 만큼 낯선 영역이었지만, LLM에 맥락을 주고 결과를 검증·교정하는 방식으로 실제 동작하는 API를 끝까지 연결했습니다.'],
    shots: [P('daltoori', '홈', true), P('daltoori-learn', '학습 카테고리', true), P('daltoori-recording', '발음 녹음', true), P('daltoori-profile', '학습 피드백', true), P('daltoori-script', '스크립트 선택 흐름(GIF 캡처)', true), P('daltoori-feedback', '종합 피드백(GIF 캡처)', true)],
    demo: 'daltoori', links: [{ label: 'GitHub', href: 'https://github.com/DALTOORI-SSAFY-13/e101' }], ai: 'Codex·Claude 등 여러 LLM과 협업',
  },
  {
    slug: 'burnit', no: '伍', name: 'BurnIt', kor: '글과 그림을 불태우는 인터랙티브 웹', group: 'aleph', kind: 'solo',
    period: '2026.09', role: '기획·제작 (바이브 코딩)', roleShort: 'Web · Interactive',
    tagline: '태워서 보내는 마음', accent: '#c4552d', cover: 'burnit-main',
    summary: '글과 이미지를 종이 위에 담고 불꽃으로 태워 보내는 인터랙티브 웹 서비스입니다. Canvas로 종이의 연소·그을음·입자를 그립니다.',
    mine: ['소각 도구(성냥·라이터·잉걸불)와 자유 필기·이미지 업로드', 'Canvas 연소 렌더링 루프, Web Audio 효과음, PNG 저장', '닉네임 룰렛·비밀 일기·망각의 서약서·30초 BURN RUSH 게임'],
    stack: ['React', 'TypeScript', 'Vite', 'Canvas API', 'Web Audio API'],
    stats: [{ v: '9', label: '플레이 모드·템플릿', src: '화면 캡처' }, { v: '17', label: '커밋 (AI 에이전트 작성)', src: 'git shortlog' }, { v: '1인', label: '아이디어·지시·검수', src: '' }],
    troubles: [], decisions: [{ t: 'Canvas · React 역할 분리', d: '연소·입자는 Canvas 렌더링 루프에서, 도구·템플릿·게임 모드 UI 상태는 React에서 관리합니다.' }],
    shots: [P('burnit-studio', '소각 스튜디오'), P('burnit-nickname', '닉네임 룰렛'), P('burnit-diary', '비밀 일기'), P('burnit-vow', '망각의 서약서'), P('burnit-drawing', '자유 도화지'), P('burnit-upload', '이미지 업로드'), P('burnit-burning', '이미지 소각'), P('burnit-game-ready', 'BURN RUSH'), P('burnit-game-play', '플레이')],
    links: [{ label: '서비스', href: 'https://burnit.rnjswnghl.chatgpt.site/' }, { label: 'GitHub', href: 'https://github.com/rnjswnghl/burn_it' }],
    ai: 'K-디지털 트레이닝 Aleph 과제 · 아이디어와 요구사항은 직접, 코드는 AI 에이전트(Codex)가 작성',
  },
  {
    slug: 'cut-and-note', no: '陸', name: 'Cut&Note', kor: '짤·카드 스튜디오', group: 'aleph', kind: 'solo',
    period: '2026.09 — 10', role: '기획·제작 (바이브 코딩)', roleShort: 'Web · Interactive',
    tagline: '인생네컷과 디카 감성의 로컬 편집기', accent: '#a33b2a', cover: 'cutandnote-main',
    summary: '사진·문구·프레임·스티커를 조합해 이미지로 저장하는 브라우저 편집기입니다. 서버 업로드 없이 Canvas로만 처리해 개인정보가 밖으로 나가지 않습니다.',
    mine: ['최대 4장 사진, 다중 텍스트·스티커, 6종 프레임, 1:1·4:5·9:16 비율', '레이어 이동·크기·회전, 실행 취소/다시 실행', '자동 저장과 JSON 완전 백업·복원, PNG·JPEG·PDF 내보내기'],
    stack: ['JavaScript', 'HTML/CSS', 'Canvas API', 'LocalStorage', 'Playwright'],
    stats: [{ v: '0', label: '외부 의존 패키지 · 네트워크 호출', src: 'package.json · 소스 검색' }, { v: '3', label: '출력 비율 (1080 기준 PNG 저장)', src: 'README' }, { v: '6', label: '프레임 종류', src: 'README' }, { v: '17', label: '본인·AI 협업 커밋', src: 'git shortlog' }],
    troubles: [{ title: '개인 사진을 서버로 보내지 않는 구조', problem: '사진 편집기에서 업로드는 개인정보 이슈가 됩니다.', fix: '이미지 처리를 전부 브라우저 Canvas에서 수행하고, 소스에 fetch/XHR/WebSocket이 없음을 테스트로 확인했습니다.', result: '로컬 전용 편집기' }],
    shots: [P('cutandnote-templates', '템플릿 선택'), P('cutandnote-photos', '사진 불러오기'), P('cutandnote-text', '텍스트 편집'), P('cutandnote-stickers', '스티커'), P('cutandnote-layers', '레이어 편집'), P('cutandnote-custom', '직접 만들기'), P('cutandnote-save', '저장·내보내기'), P('cutandnote-import', 'JSON 불러오기')],
    links: [{ label: '서비스', href: 'https://cutandnote.rnjswnghl.chatgpt.site/' }, { label: 'GitHub', href: 'https://github.com/rnjswnghl/studio' }],
    ai: 'Aleph 과제 · AI 에이전트와 협업',
  },
  {
    slug: 'byeol', no: '柒', name: 'byeol · 별', kor: '지구본과 별자리 천문대', group: 'aleph', kind: 'solo',
    period: '2026.10', role: '기획·제작 (바이브 코딩)', roleShort: 'Web · Data',
    tagline: '세계지도와 실제 천문 좌표를 잇는 작은 천문대', accent: '#2f3e4e', cover: '',
    summary: '관성 회전 지구본과 펼친 지도에서 위치를 고르면 그 지평선 위 하늘과 별자리, 실제 구름량 예보를 보여주는 웹 앱입니다. 데이터 출처·한계를 화면과 문서에 명시했습니다.',
    mine: ['지구본/지도 전환, 별·별자리 레이어, 생일 12궁 강조', '어제·오늘·내일 및 ±12시간 시뮬레이션, 방위각·고도 비교', 'MET Norway 구름량 예보 조회와 D1 일별 기록, 실패·복구 시험'],
    stack: ['Next.js', 'D3', 'Astronomy Engine', 'Drizzle', 'Cloudflare D1'],
    stats: [{ v: '9종', label: '공개 fixture 기반 실패·복구 시험', src: 'README' }, { v: '5', label: '커밋', src: 'git shortlog' }],
    troubles: [], shots: [], links: [{ label: 'GitHub', href: 'https://github.com/rnjswnghl/byeol' }], ai: 'Aleph 과제 · AI와 협업, “AI와 내 판단” 문서화',
  },
  {
    slug: 'sugang', no: '捌', name: 'SuGang (plan)', kor: '나만의 수강신청 — 시간표·할 일·회고', group: 'aleph', kind: 'solo',
    period: '2026.10', role: '기획·제작 (바이브 코딩)', roleShort: 'Web · Productivity',
    tagline: '활동을 수강신청처럼, 하루를 시간표처럼', accent: '#55705f', cover: '',
    summary: '취준생·직장인이 활동과 목표를 등록하면 주간 시간표가 만들어지고, 할 일·일지·회고까지 이어지는 계획 앱입니다. 시간 중복 검사와 드래그 일정 편집이 핵심입니다.',
    mine: ['시간 중복 검사와 신청 완료 후 시간표 생성', '월간·주간·일간 보기, 범위 드래그·블록 이동 후 확인 저장', '계획 변경 이력, 회고 집계, 전체 JSON 내보내기, 저장 충돌·중복 요청 처리'],
    stack: ['Next.js', 'pnpm', 'Neon(Postgres)', 'Vitest'],
    stats: [{ v: '4', label: 'DB 마이그레이션 SQL', src: 'db/' }, { v: '16', label: '커밋', src: 'git shortlog' }],
    troubles: [], shots: [], links: [{ label: 'GitHub', href: 'https://github.com/rnjswnghl/plan' }], ai: 'Aleph 과제',
  },
  {
    slug: 'reflex-hub', no: '玖', name: 'Reflex Hub', kor: '“미리 주는 화면 신호는 반응을 빠르게 하는가” 실험·논문', group: 'aleph', kind: 'solo',
    period: '2026.10', role: '연구 설계·웹 실험 제작 (AI와 함께 쓴 첫 논문)', roleShort: 'Research · Web',
    tagline: '가설 → 사전 등록 → 실험 → 논문', accent: '#2f3e4e', cover: '',
    summary: '반응속도 미니게임 허브를 실험 도구로 삼아, 목표 자극 500ms 전의 화면 테두리 신호가 반응을 빠르게 하는지 검증하는 연구 프로젝트입니다. 사전 등록 분석 코드와 논문 원고, 재현 패키지를 갖췄습니다.',
    mine: ['웹 실험 페이지(React+Vite)와 순위표·수집 현황 API (Vercel Blob)', '사전 등록(v3) 분석 코드(Python), 문헌 10편 2회 검증', '수치가 분석 스크립트가 만든 매크로로만 들어가는 논문 빌드(XeLaTeX)'],
    stack: ['React', 'Vite', 'Vercel Blob', 'Python', 'XeLaTeX'],
    stats: [{ v: '10편', label: '문헌 · 2회 검증', src: 'README' }, { v: 'v3', label: '사전 등록 버전', src: 'README' }, { v: '5종', label: '미니게임·비교 실험실', src: 'README' }],
    troubles: [], shots: [], links: [{ label: '실험 사이트', href: 'https://reflex-hub.vercel.app' }, { label: 'GitHub', href: 'https://github.com/rnjswnghl/reflex-hub' }], ai: 'Aleph 과제 · Claude 스킬로 논문 작업 파이프라인 구성',
  },
  {
    slug: 'llm-gateway', no: '拾', name: 'LLM Gateway', kor: '사내 LLM 사용 시 민감정보 마스킹 프록시', group: 'aleph', kind: 'team', teamSize: 6,
    period: '2026.10.27 — 11.05', role: '관리자 콘솔(프론트)·Chrome 확장 QA·감사/설정 API — 최종 발표', roleShort: 'Console · Extension',
    tagline: 'redact → forward → restore', accent: '#8e3a2a', cover: '',
    summary: '사내 앱이 ChatGPT·Claude 같은 외부 LLM을 호출할 때 민감정보를 가린 채 내보내고, 응답이 오면 원래 값으로 되돌려주는 프록시입니다. 산업별 탐지 템플릿 9종과 관리자 콘솔, Chrome 확장을 갖추고 최종 발표까지 진행했습니다.',
    mine: ['관리자 콘솔 프론트엔드: 감사 로그 필터(기간·사이트·부서·예외), 멤버·가입 승인, 설정(Slack 웹훅·보관 기간)', 'Chrome 확장 QA·개선: 예외 요청 폼, 카운트다운 칩, 입력창 인식 개선', '감사 통계·멤버·설정 API 추가, 발표용 시드 데이터와 데모 시나리오'],
    stack: ['FastAPI', 'Python', 'SQLite', 'Chrome MV3', 'YAML 템플릿', 'pytest'],
    stats: [
      { v: '85 / 148', label: '팀 커밋 중 본인 (57%)', src: 'git shortlog' },
      { v: '189', label: '자동화 테스트 함수 · 테스트 코드 2.4k줄', src: 'tests/' },
      { v: '9', label: '산업별 탐지 템플릿 (의료·금융·법률 등)', src: 'industries/' },
      { v: '10일', label: '착수에서 최종 발표까지', src: '커밋 10.27 → 11.05' },
      { v: '6인', label: '팀 구성', src: '' },
    ],
    troubles: [
      { title: '확장 프로그램은 “막는” 수단이 아니라 “가려주는” 수단', problem: '확장은 사용자가 끌 수 있어 웹 ChatGPT를 실제로 차단할 수 없습니다.', fix: '네트워크(방화벽·DNS)·사내 채팅 화면 사용·MDM 강제 설치의 4단계 방향으로 한계와 대책을 문서화했습니다.', result: 'README에 한계 섹션으로 정직하게 명시' },
      { title: '스트리밍 응답의 조각 경계 복원', problem: '스트리밍 응답에서 자리표시자([이메일_1])가 조각 경계에 걸리면 복원이 깨집니다.', fix: '스트림 필터가 경계에서 보류 후 복원하도록 설계(팀 코어 구현)했고, 알려진 한계를 문서화했습니다.', result: '본인은 콘솔·확장 QA에서 이를 검증', draft: true },
      { title: '가짜 데이터 제거와 실제 상태 표시', problem: '콘솔에 데모용 가짜 멤버·알림이 섞여 있어 실제 시스템 상태와 구분되지 않았습니다.', fix: '가짜 값 라벨을 걷어내고 실제 이상 징후·감사 로그 기반으로 교체했습니다.', result: '콘솔이 서버의 실제 상태만 표시' },
    ],
    shots: [], links: [], ai: 'Aleph 팀 과제 · 최종 발표',
  },
];
export const bySlug = (s: string) => projects.find(p => p.slug === s)!;
