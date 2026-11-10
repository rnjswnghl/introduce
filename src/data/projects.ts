// 프로젝트 포트폴리오 6단 구성: ①개요 ②문제 정의, 목표 ③시스템 설계 ④팀 공동 vs 내 구현 ⑤문제 해결, 검증 ⑥결과, 회고
// 원칙: 저장소(README, 소스, 커밋)에서 확인된 내용만 쓴다. 실측 근거 없는 수치는 쓰지 않는다. draft:true = 본인 확인 필요.
export type Trouble = { title: string; problem: string; cause?: string; fix: string; verify?: string; result?: string; draft?: boolean };
export type Shot = { src: string; cap: string; mobile?: boolean };
export type ArchNode = { t: string; r: string };
export type Project = {
  slug: string; no: string; name: string; kor: string; group: 'ssafy' | 'aleph'; kind: 'team' | 'solo'; teamSize?: number;
  period: string; role: string; roleShort: string; tagline: string; accent: string; cover: string;
  summary: string;                       // ① 한 문단 개요
  goal: { problem: string; goal: string };   // ② 왜 필요한가 / 무엇을 목표로 했나
  stack: { t: string; why: string }[];       // 기술 + 왜/어떻게 썼나 (나열 금지)
  arch: ArchNode[]; archNote?: string;       // ③ 구성도(위→아래 데이터 흐름)
  team: string[]; mine: string[]; mineNote?: string;   // ④ 공동 구현 / 개인 구현
  troubles: Trouble[];                       // ⑤
  done: string[]; gaps: string[]; learned: string[];   // ⑥
  shots: Shot[]; demo?: 'hanpage' | 'focusmate' | 'onwear' | 'daltoori';
  links: { label: string; href: string }[]; ai?: string; evidence?: string[]; learnedFromReadme?: boolean;
};
const P = (n: string, cap: string, mobile = false): Shot => ({ src: `/img/p/${n}.webp`, cap, mobile });

export const projects: Project[] = [
  {
    slug: 'hanpage', no: '壹', name: '한페이지', kor: '도서 추천, 독서 기록 커뮤니티', group: 'ssafy', kind: 'team', teamSize: 2,
    period: '2025.05.22 — 05.28', role: '풀스택', roleShort: 'Full-stack', tagline: '문장 속 당신을 만나는 곳', accent: '#55705f', cover: 'hanpage-cover.cf2241c8',
    summary: '책을 좋아하는 사람들이 자유롭게 소통하는 도서 커뮤니티 웹 서비스입니다. Vue와 Django REST Framework로 만든 2인 팀 프로젝트에서 도서 데이터 수집과 백엔드 초기 구조, 도서 탐색과 추천, 근처 도서관 지도, 마이페이지(찜, 이모지 방문록)를 구현했습니다. 이 화면의 데모에는 외부 지도 연동을 제외했습니다.',
    goal: { problem: '책을 좋아하는 사람들이 책을 찾고, 읽은 감상을 남기고, 서로 소통하는 공간이 필요했습니다.', goal: '감성적이고 따뜻한 분위기의 도서 커뮤니티를 만들고, 추천과 위치 기반 기능으로 사용 경험을 높이는 것.' },
    stack: [
      { t: 'Django REST Framework', why: '계정, 도서, 쓰레드, 방명록, 추천을 5개 앱으로 나누고 모델과 API를 설계' },
      { t: 'Vue 3, Pinia, Vue Router', why: '화면을 SPA로 구성하고, 로그인 상태는 스토어로 공유하며, 로그인이 필요한 페이지는 라우터 가드로 접근을 제한' },
      { t: '알라딘 Open API', why: '주제별 도서 검색 결과를 9개 대분류로 정리해 실제 도서 398권을 DB 시드 데이터로 구성' },
      { t: '카카오맵 API', why: '현재 위치 주변의 도서관을 지도에 표시' },
      { t: 'SQLite, ERD', why: '사용자, 도서, 쓰레드, 댓글, 찜, 방명록, 좋아요, 팔로우의 관계를 ERD로 먼저 설계' },
    ],
    arch: [{ t: '알라딘 API', r: '주제별 도서 검색' }, { t: '카테고리 정리 → JSON(fixtures)', r: '9개 대분류, 도서 398권' }, { t: 'Django REST (5개 앱)', r: 'accounts, books, threads, guestbook, recommendations' }, { t: 'Vue 3 SPA (Pinia, Router)', r: '탐색, 상세, 쓰레드, 마이페이지(찜, 방문록)' }],
    archNote: '외부 연동: 알라딘(도서 데이터), 카카오맵(근처 도서관)',
    team: [],
    mine: [
      '알라딘 API로 도서를 수집해 카테고리를 정리하고 DB에 저장, Django 백엔드 초기 구조(앱 분리, 모델) 설계',
      '도서 목록: 카테고리 필터와 제목, 저자, 출판사 검색',
      '도서 상세 화면 구성: 책 정보, 소개, 해당 도서의 쓰레드, 추천, 근처 도서관 지도',
      '도서 추천: 같은 저자, 같은 카테고리, 랜덤 3종을 한 번에 내려주고 상세 화면에 연결',
      '근처 도서관 지도: 카카오맵 API로 현재 위치 주변 도서관 표시',
      '마이페이지: 프로필 수정(선호 카테고리, 프로필 사진), 팔로우, 내가 쓴 쓰레드',
      '찜: 사용자가 폴더를 직접 만들고 수정, 삭제하며 책을 담는 기능(같은 폴더에 같은 책은 한 번만)',
      '이모지 방문록: 마이페이지에 이모지를 남기고, 작성자와 주인이 삭제',
      '백엔드 틀이 잡힌 뒤에는 프론트 화면을 다듬고 꾸미는 일을 맡음(메인, 쓰레드 목록, 마이페이지 레이아웃)',
    ],
    mineNote: '추천은 선호 카테고리를 활용한 개인화를 목표로 시작했지만, 개발 기간과 처음 해 보는 범위를 고려해 저자, 카테고리, 랜덤 3가지 기준으로 정리했습니다. 지도도 대출 가능 여부를 보여주는 API를 신청했지만 응답을 받지 못했고, 기간 안에 끝내기 어려워 근처 도서관 표시로 방향을 바꿨습니다.',
    troubles: [
      { title: '찜한 책이 마이페이지에서 보이지 않음', problem: '책을 찜하는 것은 됐지만, 마이페이지에서 폴더별로 찜한 책을 불러오는 부분이 제대로 동작하지 않았습니다.', cause: '폴더 API가 폴더 id와 이름만 내려주고, 찜 응답에는 어느 폴더에 속하는지가 없어서 폴더별로 책을 묶어 보여줄 수 없는 구조였습니다. 폴더와 찜을 따로 두는 구조 자체도 복잡했습니다.', fix: '폴더 응답 안에 찜한 책 목록(bookmarks)을 함께 담고, 찜 응답에 폴더 정보를 넣었습니다. 폴더 사이 이동, 책 기준 찜 여부 확인과 취소 API를 추가해 상세 화면과 마이페이지가 같은 데이터를 쓰게 했습니다.' },
      { title: '로그인 토큰 오류', problem: '로그인 후에도 인증이 필요한 요청에서 토큰 오류가 발생했습니다.', cause: '로그인 상태를 담는 스토어가 같은 이름(user)으로 두 파일(user.js, userStore.js)에 있었고, 화면마다 서로 다른 쪽을 불러오고 있었습니다.', fix: '스토어를 하나로 합치고, 토큰을 요청 헤더에 붙이는 일은 axios 요청 인터셉터에서 일괄 처리하도록 정리했습니다. 병합 과정에서 중복 파일이 한 번 되살아나 다음 날 다시 정리했습니다.', draft: true },
      { title: '이모지 방문록 삭제가 동작하지 않음', problem: '이모지는 남길 수 있었지만, 남긴 이모지를 삭제하는 요청이 동작하지 않았습니다.', cause: '삭제 주소의 변수 이름(entry_id)과 DRF 상세 뷰가 찾는 식별자(pk)가 맞지 않았습니다.', fix: '주소와 뷰의 식별자 이름을 id로 맞추고, 개발 서버 주소를 CSRF 허용 출처에 추가했습니다. 삭제는 작성자와 방명록 주인만 할 수 있도록 권한 클래스를 따로 두었습니다.', draft: true },
    ],
    done: ['도서 탐색(카테고리 필터, 검색)과 상세, 저자 / 카테고리 / 랜덤 추천 3종', '근처 도서관 지도', '마이페이지(프로필 수정, 팔로우, 내가 쓴 쓰레드), 찜 폴더, 이모지 방문록'],
    gaps: [],
    learned: [
      'Vue와 DRF로 도서 커뮤니티를 만들며 화면, API, DB가 이어지는 전체 흐름을 익혔습니다.',
      'ERD로 관계를 먼저 설계하면서, 찜(폴더와 책), 방명록, 팔로우처럼 관계가 있는 기능을 구조로 풀어내는 연습을 했습니다.',
      '사용자 입장에서 기능을 정했습니다. 소통은 가볍게 이모지 방문록으로, 저장은 직접 만드는 찜 폴더로 풀었습니다.',
      'Git으로 브랜치를 나눠 협업하면서, db.sqlite3 같은 공유하지 않을 파일을 정하지 않으면 병합 때마다 충돌이 난다는 점을 겪었습니다.',
    ],
    learnedFromReadme: true,
    shots: [P('hanpage-home.cf2241c8', '메인, 히어로'), P('hanpage-bestsellers.d34c0fc0', '베스트셀러, 카테고리'), P('hanpage-recent-threads.95b4924a', '최근 쓰레드'), P('hanpage-books-filter.4b19c120', '도서 탐색, 카테고리 필터'), P('hanpage-books-search.9f610c5d', '제목 검색'), P('hanpage-book-detail.692c0e9f', '도서 상세'), P('hanpage-book-author.b80928e2', '저자 정보, 연관 쓰레드'), P('hanpage-thread-write.be674238', '쓰레드 작성'), P('hanpage-threads.da6cd1a4', '전체 쓰레드 목록'), P('hanpage-thread-detail.726588ec', '쓰레드 상세, 댓글'), P('hanpage-mypage.1407eb5d', '마이페이지, 내가 쓴 쓰레드'), P('hanpage-mypage-bookmarks.f2a36e98', '도서 찜 폴더'), P('hanpage-guestbook.b7768184', '방문록, 이모지 남기기'), P('hanpage-profile.79adb20b', '프로필 수정'), P('hanpage-login.e435e498', '로그인'), P('hanpage-signup.59410ad8', '회원가입')],
    demo: 'hanpage', links: [],
  },
  {
    slug: 'focusmate', no: '貳', name: 'FocusMate', kor: '스터디 모집, 일정, 화상 학습 플랫폼', group: 'ssafy', kind: 'team', teamSize: 5,
    period: '2025.07.27 — 08.18', role: '프론트엔드 — 스터디 생성, 검색, 상세, 권한별 화면', roleShort: 'Frontend', tagline: '나만의 스터디를 찾아보세요', accent: '#b4513c', cover: 'focusmate-home',
    summary: '스터디 모집부터 일정, 출석, 화상 학습까지 한곳에서 관리하는 웹 서비스입니다. Vue 3 + TypeScript 프론트엔드에서 스터디 생성, 검색, 상세와 리더/팀원 권한별 화면, 공지, 게시글, 마이페이지를 구현했습니다.',
    goal: { problem: '스터디 구인은 오픈채팅, 커뮤니티에 흩어져 있고, 모집 이후의 일정 관리, 출석 확인, 화상 모임은 또 다른 도구를 써야 합니다.', goal: '스터디를 찾고(검색) → 참여하고 → 일정, 출석, 학습(화상)까지 이어지는 흐름을 한 서비스에 담고, 방장과 팀원이 서로 다른 화면을 보도록 권한을 분리하는 것.' },
    stack: [
      { t: 'Vue 3 + TypeScript + Vite', why: '화면이 많아(라우트 30여 개) 타입으로 API 응답과 컴포넌트 props를 맞춰 협업 중 오류를 줄임' },
      { t: 'Pinia', why: '여러 화면이 로그인, 스터디 상태를 공유해야 해서 사용' },
      { t: 'OpenVidu', why: '브라우저에서 실시간 화상 학습(스터디룸)을 제공하기 위해 사용' },
    ],
    arch: [{ t: 'Vue 3 SPA', r: '라우팅, 권한별 화면(방장/팀원), 컴포넌트' }, { t: 'Pinia + API 레이어(axios)', r: '로그인, 스터디 상태 공유, 서비스별 API 모듈' }, { t: 'Spring 백엔드 (팀원 담당)', r: 'JWT 인증, 스터디/일정/퀴즈 API' }, { t: 'OpenVidu 서버', r: '화상 세션' }],
    team: ['백엔드(Spring Security, JWT, Redis 메일 인증), 배포(Docker, Jenkins) — 팀원 담당', '퀴즈(출석, AI 퀴즈), 랭킹, 스터디룸 타이머, 화상 등 학습 기능 일부 — 공동 작업', '인증, 회원가입 화면, 캘린더 컴포넌트 — 공동 작업'],
    mine: ['스터디 생성, 검색(이름, 카테고리, 시간), 상세 화면', '방장/팀원 권한별 라우팅과 화면 분기', '공지, 게시글, 마이페이지', 'Pinia 스토어, API 모듈 구성, OpenVidu 세션 연동'],
    mineNote: '역할 구분은 기존에 정리한 담당 업무 기준입니다. 세부 분담은 확인 후 보강합니다.',
    troubles: [
      { title: '리더/팀원 경로에서 404, 화상 세션 API가 TypeScript 빌드를 깨뜨림', problem: '권한별 경로로 이동하면 404가 났고, OpenVidu 세션 API 호출 타입이 맞지 않아 빌드가 실패했습니다.', fix: '리더/팀원 경로를 정리하고 세션 API를 “스터디 ID 기준”으로 통일해 타입을 맞췄습니다.', verify: '타입 체크, 빌드 통과, 방장/팀원 계정으로 각각 진입해 화면 분기 확인', result: '권한별 화면 진입과 화상 연결 흐름 정상화' },
    ],
    done: ['스터디 생성, 검색, 상세, 방장/팀원 화면 분기, 공지, 게시글, 마이페이지, 출석 퀴즈, 스터디룸 화상 연결'],
    gaps: [],
    learned: ['라우트가 많은 앱에서는 권한 분기를 라우터에서 한 번에 정리하는 것이 화면마다 막는 것보다 안전합니다.'],
    shots: [P('focusmate-home', '메인'), P('focusmate-study-list', '스터디 목록'), P('focusmate-study-search', '스터디 검색'), P('focusmate-study-results', '검색 결과'), P('focusmate-study-detail', '스터디 상세'), P('focusmate-leader', '방장 화면'), P('focusmate-mate', '팀원 화면'), P('focusmate-activity', '활동 기록')],
    demo: 'focusmate', links: [],
  },
  {
    slug: 'on-wear', no: '參', name: 'On-Wear', kor: '가상 피팅, 개인화 의류 추천', group: 'ssafy', kind: 'team', teamSize: 6,
    period: '2025.08.25 — 09.29', role: '프론트엔드 — 검색, 핫아이템, 의류 상세 모달', roleShort: 'Frontend', tagline: '나만의 패션 큐레이터', accent: '#6b8f1f', cover: 'onwear-main',
    summary: '사진 한 장으로 의상을 가상 시착하고 개인화된 의류를 추천받는 웹 서비스입니다. React + TypeScript 프론트엔드에서 검색(실시간 추천, 필터, 무한 스크롤), 핫아이템, 의류 상세 모달과 찜 상태를 구현했습니다.',
    goal: { problem: '온라인에서 옷을 고를 때 “내가 입으면 어떨지”를 알기 어렵고, 비슷한 옷을 찾으려면 키워드를 잘 떠올려야 합니다.', goal: '가상 피팅, 이미지 검색, 개인화 추천을 한 서비스로 묶고, 그 입구가 되는 검색, 인기 상품, 상세 화면의 사용 흐름을 끊기지 않게 만드는 것.' },
    stack: [
      { t: 'React + TypeScript + Vite', why: '기능 모듈(fitting, hotitems, imagesearch, main, recommend, search)로 나눠 6명이 병렬 개발' },
      { t: 'Zustand (persist)', why: '새로고침 뒤에도 인증 상태를 유지하고, 찜 상태를 화면 간에 공유' },
      { t: 'Axios 인터셉터', why: '토큰 주입과 인증 오류 처리를 한 곳에 모으기 위해 사용' },
      { t: 'Emotion', why: '모달, 필터 등 상태에 따라 스타일이 바뀌는 컴포넌트를 CSS-in-JS로 관리' },
      { t: 'Playwright', why: '피팅룸, 마이페이지 시나리오를 E2E 테스트로 점검(팀 저장소에 테스트 포함)' },
    ],
    arch: [{ t: 'React SPA (기능별 모듈)', r: 'search, hotitems, clothes_detail, fittingroom, recommend' }, { t: 'Zustand + Axios 인터셉터', r: '인증, 찜 상태 / 토큰 주입, 오류 처리' }, { t: 'Spring 백엔드', r: '상품, 검색, 찜 API (팀원 담당)' }, { t: 'AI 서버 (팀원 담당)', r: '가상 피팅, 이미지 검색, 추천' }],
    team: ['가상 피팅룸, 이미지 검색, 추천 페이지 등 AI 연동 화면', '백엔드, AI 서버, 배포', '메인 화면과 공통 레이아웃'],
    mine: ['소셜 로그인과 실시간 검색 모달(추천어, 인기 순위, 비회원 최근 검색어)', '검색 결과 화면: 필터(정렬, 가격, 브랜드), 페이지네이션, 무한 스크롤, “더보기”', '의류/코디/피팅 상세 모달 통일, 찜(like/unlike) 상태 동기화', '핫아이템 페이지와 로딩 스켈레톤'],
    mineNote: '저장소 커밋 경로로 확인한 본인 작업 영역(search, clothes_detail, hotitems 중심)입니다.',
    troubles: [
      { title: '핫아이템 로딩이 데이터 도착 후에도 1초 대기', problem: '로딩 연출을 위해 넣은 고정 지연 코드 때문에 응답이 와도 화면이 1초간 멈춰 있었습니다.', cause: '데이터와 무관한 임의 지연(setTimeout)', fix: '강제 지연과 스피너를 제거하고 스켈레톤 UI로 대체했습니다.', verify: '페이지 진입 시 데이터가 오는 즉시 렌더링되는지 확인', result: '체감 로딩 개선. “느림”의 원인이 네트워크가 아니라 코드일 수 있다는 교훈 — 이 포트폴리오 데모 최적화의 출발점' },
      { title: '적용한 필터와 검색 결과가 어긋남', problem: '정렬 필터를 취소하면 중복이 제거되는 등 화면에 표시된 필터와 실제 결과가 달라졌습니다.', fix: '적용된 필터 영역과 “전체 취소” 버튼을 정리하고, 검색 조건과 결과가 한 상태에서 파생되도록 맞췄습니다.', verify: '정렬, 가격, 브랜드 조합을 바꿔가며 결과와 칩 표시가 일치하는지 QA' },
      { title: '찜 상태가 모달, 목록 사이에서 어긋나고 요청이 중복됨', problem: '상세 모달에서 찜을 눌러도 목록이 갱신되지 않거나 요청이 중복 호출됐습니다.', fix: '찜 요청을 like / unlike 액션으로 구분하고, 모달 내부 리렌더링과 중복 호출을 수정했습니다.', verify: '모달 ↔ 목록 ↔ 핫아이템에서 같은 상품의 찜 상태가 동일한지 확인' },
    ],
    done: ['검색(실시간 추천, 필터, 무한 스크롤), 핫아이템, 의류 상세 모달, 찜, 소셜 로그인 흐름'],
    gaps: [],
    learned: ['여러 화면에서 같은 데이터(찜, 필터)를 쓰면 “한 곳에서 파생”시키는 구조가 버그를 줄입니다.', '로딩 UX는 임의 지연이 아니라 스켈레톤처럼 실제 상태를 반영해야 합니다.'],
    shots: [P('onwear-main', '메인'), P('onwear-search-input', '검색 모달'), P('onwear-search-results', '검색 결과'), P('onwear-fitting', '가상 피팅룸'), P('onwear-image-search', '이미지 검색'), P('onwear-recommend', '추천'), P('onwear-hotitems', '핫아이템')],
    demo: 'onwear', links: [{ label: 'On-Wear 조직 (GitHub)', href: 'https://github.com/On-Wear-SSAFY-13' }],
  },
  {
    slug: 'daltoori', no: '肆', name: 'DALTOORI', kor: '한국어 발음, 억양 분석 학습 앱', group: 'ssafy', kind: 'team', teamSize: 5,
    period: '2025.10.30 — 11.24', role: 'AI 서버(FastAPI) — 음성 평가, TTS, 즉시 피드백 API (LLM과 함께 개발)', roleShort: 'Backend, AI', tagline: '말하면 바로 알려주는 발음 코치', accent: '#d08a3c', cover: 'daltoori-icon',
    summary: '한국어 발음과 억양을 분석해 학습자에게 즉시 피드백을 주는 모바일 서비스입니다. 저는 AI 서버 쪽에서 음성 평가, 참조음 생성, 피드백 API를 FastAPI로 구현했고, 이 영역은 여러 LLM과 협업하며 개발했습니다.',
    goal: { problem: '외국인 한국어 학습자는 자기 발음이 어디가 틀렸는지 스스로 알기 어렵고, 교정은 사람 선생님에게 의존합니다.', goal: '학습자가 문장을 읽으면 표준 발음(참조음)과 비교한 음절별 평가와 억양 피드백을 바로 돌려주는 것.' },
    stack: [
      { t: 'Whisper', why: '학습자 음성을 텍스트로 인식해 읽은 문장과 비교' },
      { t: 'Montreal Forced Aligner (MFA)', why: '음성과 텍스트를 음소 구간으로 정렬해 음절별 평가의 기준을 만듦' },
      { t: 'MeloTTS', why: '비교 기준이 되는 표준 발음(참조음)을 자동 생성' },
      { t: 'FastAPI', why: '인식, 정렬, 합성, 평가 모델을 각각 API로 분리해 제공하고, 긴 분석은 비동기로 처리' },
      { t: 'Firebase', why: '녹음, 참조음 파일 저장과 피드백 이력 조회에 사용' },
    ],
    arch: [{ t: '모바일 앱 (Expo RN)', r: '문장 선택, 녹음, 결과 화면 (팀원 담당)' }, { t: 'FastAPI AI 서버', r: '인증, 평가 요청 접수, 비동기 처리' }, { t: 'Whisper → MFA → 평가', r: '음성 인식 → 음소 구간 정렬 → 점수, 피드백' }, { t: 'MeloTTS + Firebase', r: '참조음 생성, 녹음/참조음 저장, 이력' }],
    team: ['모바일 앱 화면(Expo), 사용자, 학습 백엔드, 인프라, 배포', 'AI 파이프라인 일부 — 팀원과 역할을 나눠 개발'],
    mine: ['FastAPI 인증, 평가 시스템과 “즉시 피드백” API', 'MeloTTS 기반 참조음 자동 생성, Whisper 인식, MFA 정렬을 이용한 평가 로직', '종합 피드백 API 응답 형식, 피드백 이력 조회(참조음, 녹음 URL 제공), Firebase 경로 구조', '긴 분석 요청의 비동기 처리, RunPod 테스트, Railway 배포'],
    mineNote: '이 프로젝트는 여러 LLM을 활용해 개발했습니다. 생성된 코드를 그대로 쓰지 않고 동작을 확인하며 수정한 부분을 아래에 적었습니다.',
    troubles: [
      { title: '평가 점수가 일부 문장에서 어긋남', problem: '평가 결과에서 점수를 뽑는 순서가 잘못돼 일부 문장의 점수가 어긋났습니다.', fix: '전체 항목(all_items)을 우선 사용하도록 추출 로직을 고치고, Whisper 인식과 MFA 평가를 보강했습니다.', verify: '같은 문장을 반복 입력해 점수와 음절별 결과가 일관되게 나오는지 확인', draft: true },
      { title: '긴 분석 요청이 응답을 붙잡음', problem: '음성 분석이 오래 걸려 요청이 대기 상태에 묶였습니다.', fix: '요청을 비동기로 전환하고, 빠르게 줄 수 있는 결과는 “즉시 피드백” API로 분리했습니다.', verify: 'RunPod 환경에서 테스트 후 Railway에 배포', draft: true },
      { title: 'AI가 만든 코드의 보안 점검', problem: '여러 LLM이 생성한 코드에 안전하지 않은 부분이 남아 있을 수 있었습니다.', fix: '마지막 주에 취약 요소를 점검해 제거했습니다(커밋 “ai 보안 취약 제거”).', draft: true },
    ],
    done: ['음성 평가, 참조음 생성, 즉시/종합 피드백 API, 피드백 이력 조회, 앱 연동'],
    gaps: [],
    learned: ['낯선 영역(음성 처리)을 여러 LLM과 협업하며 실제로 동작하는 API까지 연결했습니다. 생성된 코드의 점수 로직, 보안을 직접 실행하며 고친 부분을 위 문제 해결에 적었습니다.'],
    shots: [P('daltoori', '홈', true), P('daltoori-learn', '학습 카테고리', true), P('daltoori-recording', '발음 녹음', true), P('daltoori-profile', '학습 피드백', true), P('daltoori-script', '스크립트 선택 흐름', true), P('daltoori-feedback', '종합 피드백', true)],
    demo: 'daltoori', links: [{ label: 'GitHub', href: 'https://github.com/DALTOORI-SSAFY-13/e101' }], ai: 'Codex, Claude 등 여러 LLM과 협업',
  },
  {
    slug: 'burnit', no: '伍', name: 'BurnIt', kor: '글과 그림을 불태우는 인터랙티브 웹', group: 'aleph', kind: 'solo', period: '2026.09', role: '기획, 요구사항 정의, 검수 (코드는 AI 에이전트 작성)', roleShort: 'Web, Interactive', tagline: '태워서 보내는 마음', accent: '#c4552d', cover: 'burnit-main',
    summary: '글과 이미지를 종이 위에 담고 불꽃으로 태워 보내는 인터랙티브 웹 서비스입니다. Canvas로 종이의 연소, 그을음, 입자를 그립니다.',
    goal: { problem: '지우고 싶은 말이나 흘려보내고 싶은 마음을 “삭제 버튼”이 아닌 의식(ritual)으로 마무리하고 싶다는 아이디어에서 출발했습니다.', goal: '쓰기 → 태우기 → 저장/공유까지 이어지는 짧고 몰입감 있는 경험 만들기.' },
    stack: [{ t: 'Canvas API', why: '종이 연소, 그을음, 입자를 렌더링 루프에서 직접 그림' }, { t: 'React + TypeScript', why: '소각 도구, 템플릿, 게임 모드의 UI 상태 관리' }, { t: 'Web Audio API', why: '도구별 효과음' }],
    arch: [{ t: '입력', r: '자유 필기, 이미지 업로드, 템플릿(일기, 서약서)' }, { t: 'React 상태', r: '도구(성냥, 라이터, 잉걸불), 모드 선택' }, { t: 'Canvas 렌더링 루프', r: '연소 진행, 그을음, 입자' }, { t: '출력', r: 'PNG 저장, 30초 BURN RUSH 게임' }],
    team: [], mine: ['서비스 아이디어, 기능 구성(소각 스튜디오, 닉네임 룰렛, 비밀 일기, 망각의 서약서, 이미지 소각, 게임)', 'AI 에이전트에게 요구사항을 전달하고 결과를 실행해 보며 수정 지시', '화면, 동작 검수'],
    mineNote: '코드는 AI 에이전트(Codex)가 작성했습니다. 제가 한 일은 기획과 검수입니다.',
    troubles: [], done: ['소각 스튜디오, 닉네임 룰렛, 비밀 일기, 망각의 서약서, 자유 도화지, 이미지 소각, BURN RUSH 게임'], gaps: [], learned: ['아이디어를 구체적인 요구사항으로 쪼개는 능력이 AI 협업의 품질을 좌우합니다.'],
    shots: [P('burnit-studio', '소각 스튜디오'), P('burnit-nickname', '닉네임 룰렛'), P('burnit-diary', '비밀 일기'), P('burnit-vow', '망각의 서약서'), P('burnit-drawing', '자유 도화지'), P('burnit-upload', '이미지 업로드'), P('burnit-burning', '이미지 소각'), P('burnit-game-ready', 'BURN RUSH'), P('burnit-game-play', '플레이')],
    links: [{ label: '서비스', href: 'https://burnit.rnjswnghl.chatgpt.site/' }, { label: 'GitHub', href: 'https://github.com/rnjswnghl/burn_it' }], ai: 'K-뉴딜 Aleph 과제, AI 에이전트가 코드 작성',
  },
  {
    slug: 'cut-and-note', no: '陸', name: 'Cut&Note', kor: '짤, 카드 스튜디오', group: 'aleph', kind: 'solo', period: '2026.09 — 10', role: '기획, 요구사항 정의, 검수 (코드는 AI 에이전트 작성)', roleShort: 'Web, Interactive', tagline: '인생네컷과 디카 감성의 로컬 편집기', accent: '#a33b2a', cover: 'cutandnote-main',
    summary: '사진, 문구, 프레임, 스티커를 조합해 이미지로 저장하는 브라우저 편집기입니다. 서버 업로드 없이 Canvas로만 처리해 사진이 기기 밖으로 나가지 않습니다.',
    goal: { problem: '사진 꾸미기 서비스는 대부분 사진을 서버에 올려야 하고, 작업 도중 새로고침하면 편집 내용이 사라집니다.', goal: '로그인, 업로드 없이 브라우저 안에서 끝나고, 닫았다 열어도 작업을 이어갈 수 있는 편집기.' },
    stack: [{ t: 'Canvas API', why: '사진, 프레임, 텍스트, 스티커를 합성하고 PNG/JPEG로 내보냄' }, { t: '순수 JavaScript (의존 패키지 없음)', why: '설치 없이 실행되고 네트워크 호출이 없다는 점을 보장' }, { t: 'LocalStorage + JSON 백업', why: '자동 저장과 사진 원본까지 포함한 완전 복원' }, { t: 'Playwright', why: '브라우저 시나리오 검증 스크립트' }],
    arch: [{ t: '파일 로드', r: 'PNG/JPEG 최대 4장, 오류 파일 처리' }, { t: '편집 상태(레이어)', r: '사진, 텍스트, 스티커, 프레임, 실행 취소/다시 실행' }, { t: 'Canvas 합성', r: '1:1, 4:5, 9:16 (1080 기준)' }, { t: '저장', r: 'PNG, JPEG, PDF 내보내기, 자동 저장, JSON 백업/복원' }],
    team: [], mine: ['인생네컷, 디지털카메라 감성의 기획, 6종 프레임, 비율, 스티커 요구사항 정의', '개인정보 보호 원칙(서버 전송 없음) 설정과 검증 요구', '결과물 검수와 수정 지시'],
    mineNote: '코드는 AI 에이전트가 작성했고, 요구사항, 검수, 검증 기준 설정을 제가 맡았습니다.',
    troubles: [{ title: '개인 사진이 서버로 나가지 않는다는 것을 어떻게 보장하나', problem: '사진 편집기는 업로드가 개인정보 이슈가 됩니다.', fix: '이미지 처리를 전부 브라우저 Canvas에서 수행하도록 요구하고, 소스에 fetch/XHR/sendBeacon/WebSocket 호출이 없음을 확인하는 검증 항목을 두었습니다.', verify: '소스 검색과 테스트 스크립트(npm test)로 확인', result: '로컬 전용 편집기' }],
    done: ['6종 프레임, 3종 비율, 다중 텍스트, 스티커, 레이어, 사용자 템플릿, 실행 취소/다시 실행, JSON 백업/복원, PNG, JPEG, PDF 내보내기'], gaps: [], learned: ['“할 수 없는 것”(네트워크 전송 금지)을 명시하고 검증 가능한 기준으로 만들면 AI에게 맡긴 결과도 확인할 수 있습니다.'],
    shots: [P('cutandnote-templates', '템플릿 선택'), P('cutandnote-photos', '사진 불러오기'), P('cutandnote-text', '텍스트 편집'), P('cutandnote-stickers', '스티커'), P('cutandnote-layers', '레이어 편집'), P('cutandnote-custom', '직접 만들기'), P('cutandnote-save', '저장, 내보내기'), P('cutandnote-import', 'JSON 불러오기')],
    links: [{ label: '서비스', href: 'https://cutandnote.rnjswnghl.chatgpt.site/' }, { label: 'GitHub', href: 'https://github.com/rnjswnghl/studio' }], ai: 'K-뉴딜 Aleph 과제, AI 에이전트와 협업',
  },
  {
    slug: 'byeol', no: '柒', name: 'byeol (별)', kor: '지구본과 별자리 천문대', group: 'aleph', kind: 'solo', period: '2026.10', role: '기획, 데이터 출처 검증, 검수 (코드는 AI와 협업)', roleShort: 'Web, Data', tagline: '세계지도와 실제 천문 좌표를 잇는 작은 천문대', accent: '#2f3e4e', cover: 'byeol-icon',
    summary: '지구본/지도에서 위치를 고르면 그 지평선 위 하늘과 별자리, 실제 구름량 예보를 보여주는 웹 앱입니다. 데이터의 출처와 한계를 화면과 문서에 명시했습니다.',
    goal: { problem: '별자리 앱은 “지금 내 위치에서 실제로 보이는가”를 구름, 시간과 함께 보여주지 않는 경우가 많습니다.', goal: '선택한 위치, 시각의 별 위치와 구름량 예보를 한 화면에서 비교하고, 외부 데이터가 실패해도 원인과 복구가 보이게 하는 것.' },
    stack: [{ t: 'D3 Celestial 데이터 + Astronomy Engine', why: '별 좌표와 태양 고도를 계산해 지평선 위 하늘을 표현' }, { t: 'MET Norway Locationforecast', why: '실제 구름량 예보 조회(현장 실측이 아님을 표기)' }, { t: 'Cloudflare D1 + Drizzle', why: '일별 조회 기록 저장' }, { t: 'Next.js', why: '앱과 API 라우트를 한 프로젝트로 구성' }],
    arch: [{ t: '위치, 시각 선택', r: '지구본/지도, 도시, ±12시간' }, { t: '천문 계산', r: '별 좌표(J2000), 항성시, 태양 고도' }, { t: '구름량 예보 조회', r: 'MET Norway, 원자료/정규화 값/두 시각 표시' }, { t: 'D1 기록', r: 'KST 일별 기록, 실패/복구 시험' }],
    team: [], mine: ['기능 범위와 데이터 의미(근사 계산, 예보는 실측이 아님) 정의', '공개 fixture 9종으로 실패, 복구 시험을 설계하고 결과 검수', '출처, 라이선스 표기'], mineNote: '코드는 AI와 협업해 작성했고, 데이터 정직성 기준과 검증을 제가 정했습니다.',
    troubles: [{ title: '외부 예보가 실패했을 때의 화면', problem: '예보 API가 실패하면 사용자는 값이 없는 이유를 알 수 없습니다.', fix: '실패 원인, 오래된 값, 다시 시도 버튼을 보여주고 공개 fixture 9종으로 실패, 복구를 시험했습니다.', verify: '합성 실패에서 기존 값(105)이 보존되고 복구 후 120과 2개 행이 보이는지 확인 (README 확인법)' }],
    done: ['지구본/지도 전환, 별, 별자리 레이어, 생일 12궁 강조, ±12시간 시뮬레이션, 구름량 예보 비교, 일별 기록'], gaps: ['굴절, 지형, 세차를 반영한 정밀 관측 도구가 아님(근사 계산)', '실제 서로 다른 날짜 기록이 쌓이기 전에는 비교가 “대기”로 표시됨'], learned: ['외부 데이터를 쓰는 화면은 “성공 화면”보다 “실패, 오래된 값” 화면의 설계가 신뢰를 좌우합니다.'],
    shots: [], links: [{ label: '서비스', href: 'https://byeol.rnjswnghl.chatgpt.site' }, { label: 'GitHub', href: 'https://github.com/rnjswnghl/byeol' }], ai: 'K-뉴딜 Aleph 과제, AI와 협업',
  },
  {
    slug: 'sugang', no: '捌', name: 'SuGang (plan)', kor: '나만의 수강신청 — 시간표, 할 일, 회고', group: 'aleph', kind: 'solo', period: '2026.10', role: '기획, 요구사항 정의, 검수 (코드는 AI와 협업)', roleShort: 'Web, Productivity', tagline: '활동을 수강신청처럼, 하루를 시간표처럼', accent: '#55705f', cover: 'sugang-icon',
    summary: '취준생, 직장인이 활동과 목표를 등록하면 주간 시간표가 만들어지고, 할 일, 일지, 회고까지 이어지는 계획 앱입니다. 시간 중복 검사와 드래그 일정 편집이 핵심입니다.',
    goal: { problem: '할 일 앱은 “해야 할 것”만 쌓고, 일정이 겹치는지, 실제로 했는지, 왜 못 했는지는 돌아보지 못합니다.', goal: '활동 등록 → 시간 중복 없는 시간표 → 실행 기록 → 회고 → 다음 계획으로 이어지는 순환.' },
    stack: [{ t: 'Next.js', why: '화면과 API 라우트를 함께 구성' }, { t: 'Neon (Postgres)', why: '새로고침 후에도 유지되는 저장. DB가 없으면 메모리 미리보기로 동작' }, { t: 'Vitest, pnpm', why: '시간 중복 검사 등 핵심 로직의 테스트' }],
    arch: [{ t: '활동, 목표 등록', r: '수강신청 목록' }, { t: '시간 중복 검사', r: '신청 완료 시 시간표 생성' }, { t: '월, 주, 일 보기', r: '범위 드래그, 블록 이동 후 확인 저장' }, { t: '할 일, 일지, 회고', r: '변경 이력, 회고 집계, JSON 내보내기' }],
    team: [], mine: ['서비스 컨셉(“수강신청” 은유)과 기능 범위 정의', '저장 충돌, 중복 요청 등 예외 상황 요구와 검수'], mineNote: '코드는 AI와 협업해 작성했습니다.',
    troubles: [], done: ['수강신청 목록, 시간 중복 검사, 월, 주, 일 시간표, 할 일, 일지, 회고 집계, 계획 변경 이력, JSON 내보내기'], gaps: ['로그인 없이 단일 사용자 가정'], learned: ['은유(수강신청)를 정하면 기능 범위와 화면 언어가 일관됩니다.'],
    shots: [], links: [{ label: '서비스', href: 'https://sugang.rnjswnghl.chatgpt.site' }, { label: 'GitHub', href: 'https://github.com/rnjswnghl/plan' }], ai: 'K-뉴딜 Aleph 과제',
  },
  {
    slug: 'reflex-hub', no: '玖', name: 'Reflex Hub', kor: '“미리 주는 화면 신호는 반응을 빠르게 하는가” 실험, 논문', group: 'aleph', kind: 'solo', period: '2026.10', role: '연구 설계, 실험 페이지, 분석 계획 (AI와 함께 쓴 첫 논문)', roleShort: 'Research, Web', tagline: '가설 → 사전 등록 → 실험 → 논문', accent: '#2f3e4e', cover: 'reflex-hub-icon',
    summary: '반응속도 미니게임 허브를 실험 도구로 삼아, 목표 자극 500ms 전의 화면 테두리 신호가 반응을 빠르게 하는지 검증하는 연구 프로젝트입니다.',
    goal: { problem: '“미리 신호를 주면 반응이 빨라진다”는 직관이 실제로 맞는지, 웹 환경에서 통제된 실험으로 확인한 적이 없습니다.', goal: '가설을 사전 등록하고, 무작위 비교군으로 데이터를 모아, 결과 수치가 분석 코드에서만 논문에 들어가도록 재현 가능한 파이프라인을 만드는 것.' },
    stack: [{ t: 'React + Vite', why: '미니게임, 전후 비교 실험실 화면' }, { t: 'Vercel Blob + API', why: '판 저장, 순위표, 수집 현황(숫자만)' }, { t: 'Python', why: '원자료 정리와 사전 등록 분석, 그림 생성' }, { t: 'XeLaTeX', why: '수치를 분석 스크립트가 만든 매크로로만 논문에 삽입' }],
    arch: [{ t: '실험 페이지', r: '번개 반사 (연구 데이터는 여기서만 수집)' }, { t: '저장, 현황 API', r: '판 저장, 순위표, 수집 현황' }, { t: '사전 등록 분석 코드', r: 'Python, 원자료 → 분석 → 그림' }, { t: '논문 빌드', r: '수치 매크로 → XeLaTeX 원고' }],
    team: [], mine: ['가설, 문헌 검토(10편, 2회 검증)와 사전 등록(v3)', '실험 설계와 수집 페이지 요구사항, 분석 파이프라인 구조', 'AI와의 작업 기록 문서화(“AI와 나의 판단”)'], mineNote: 'AI 도구를 쓰되 가설, 설계, 판단의 근거를 문서로 남겼습니다.',
    troubles: [], done: ['실험 페이지, 사전 등록(v3), 분석 코드, 논문 원고 초안, 재현 패키지'], gaps: ['데이터 수집 대기 중 — 결과, 해석 절은 수집 후 작성'], learned: ['결과 수치를 손으로 옮기지 않고 코드가 만든 값만 논문에 들어가게 하면 재현성과 신뢰가 올라갑니다.'],
    shots: [], links: [{ label: '실험 사이트', href: 'https://reflex-hub.vercel.app' }, { label: 'GitHub', href: 'https://github.com/rnjswnghl/reflex-hub' }], ai: 'K-뉴딜 Aleph 과제, Claude 스킬로 논문 작업 파이프라인 구성',
  },
  {
    slug: 'llm-gateway', no: '拾', name: 'LLM Gateway', kor: '사내 LLM 사용 시 민감정보 마스킹 프록시', group: 'aleph', kind: 'team', teamSize: 6,
    period: '2026.10.27 — 11.05', role: '관리자 콘솔(프론트), Chrome 확장 QA/개선, 감사/설정 API — 최종 발표', roleShort: 'Console, Extension', tagline: 'redact → forward → restore', accent: '#8e3a2a', cover: 'llm-gateway-icon',
    summary: '사내 앱이 ChatGPT, Claude 같은 외부 LLM을 호출할 때 민감정보를 가린 채 내보내고, 응답이 오면 원래 값으로 되돌려주는 프록시입니다. 산업별 탐지 템플릿과 관리자 콘솔, Chrome 확장을 갖추고 최종 발표까지 했습니다.',
    goal: { problem: '직원이 업무 중 외부 LLM에 고객 정보, 내부 수치, API 키를 붙여넣으면 회사 밖으로 유출됩니다. 막기만 하면 업무에 쓸 수 없고, 아무것도 안 하면 위험합니다.', goal: '유출될 값만 자리표시자로 바꿔 내보내고 응답에서 원래 값으로 복원해 “쓸 수 있으면서 안전한” 경로를 만들고, 관리자가 무엇이 나갔는지 감사할 수 있게 하는 것.' },
    stack: [
      { t: 'FastAPI (OpenAI 호환 입구)', why: '사내 앱이 코드 변경 없이 주소만 바꿔 쓸 수 있도록 입구를 OpenAI 호환으로 통일' },
      { t: '산업별 YAML 템플릿', why: '개발자가 아니어도 탐지 규칙을 추가, 검사(스키마, 테스트)할 수 있게 코드와 분리' },
      { t: 'SQLite 감사 로그', why: '값은 저장하지 않고 유형, 건수, 경로, 시간만 기록해 감사 자체가 유출 경로가 되지 않게 함' },
      { t: 'Chrome 확장(MV3)', why: '웹 ChatGPT에서도 입력 직전에 가림. 단, 사용자가 끌 수 있어 “막는” 수단이 아님을 명시' },
      { t: 'pytest', why: '탐지, 정책, 스트리밍 복원 동작을 자동으로 검증' },
    ],
    arch: [{ t: '사내 앱 / 브라우저 확장', r: '프롬프트 송신' }, { t: 'Gateway (detector → policy → sanitizer)', r: '민감값 탐지, redact/block/internal_only 결정, 자리표시자 치환' }, { t: '외부 LLM (OpenAI / Claude)', r: '가려진 문장만 전달, 응답 스캔' }, { t: '복원 + 감사 로그 + 관리자 콘솔', r: '스트리밍에서도 원래 값 복원, 유형/건수 기록, 예외 승인' }],
    team: ['게이트웨이 코어(탐지, 정책, 치환, 스트리밍 복원) 및 산업별 템플릿 — 팀원 담당', 'Chrome 확장의 초기 구현 — 팀원과 분담'],
    mine: ['관리자 콘솔 프론트: 감사 로그 필터(기간, 사이트, 부서, 예외), 멤버, 가입 승인, 설정(Slack 웹훅, 보관 기간)', 'Chrome 확장 QA와 개선: 예외 요청 폼, 카운트다운 칩, 입력창 인식 개선, 연결 설정 팝업', '콘솔을 위한 API 추가: 감사 통계, 멤버, 설정, 예외 필터', '발표용 시드 데이터와 데모 시나리오'],
    mineNote: '역할은 커밋 이력(콘솔, 확장, API) 기준으로 정리했습니다. 세부 분담은 확인 후 보강합니다.',
    troubles: [
      { title: '관리자 콘솔이 서버의 실제 상태와 어긋남', problem: '콘솔의 일부 항목이 서버에 저장된 값이 아닌 임시 값으로 채워져 있어 관리자가 현재 상태를 신뢰하기 어려웠습니다.', fix: '임시 값을 걷어내고, 실제 감사 로그에서 이상 징후를 계산해 보여주도록 교체했습니다. 시연 데이터는 실제 요청 경로를 통과시켜 쌓는 시드 스크립트로 만들었습니다.', verify: '시드 데이터가 실제 요청 경로로 쌓이고 콘솔 통계와 일치하는지 확인', result: '콘솔이 서버가 가진 값만 표시' },
      { title: '확장 프로그램은 “막는” 수단이 아니라 “가려주는” 수단', problem: '확장은 사용자가 끌 수 있어 웹 ChatGPT를 실제로 차단할 수 없습니다.', fix: '네트워크(방화벽, DNS 차단), 사내 채팅 화면 사용, MDM 강제 설치의 단계적 방향으로 한계와 대책을 문서화했습니다.', result: 'README의 “한계” 섹션에 정직하게 명시' },
      { title: '확장의 입력창 인식 실패(창 폭이 좁을 때)', problem: '좁은 창에서 ChatGPT 입력창이 다른 요소라 “입력창을 찾지 못함” 안내가 계속 떴습니다.', fix: '좁은 창용 입력창(textarea#mobile-composer-prompt)을 인식하도록 추가하고, 안내는 포커스 후 잠시 기다렸다가 인식되면 사라지게 했습니다.', verify: '실제 사이트에서 창 폭을 바꿔가며 확인(커밋 이력)' },
    ],
    evidence: ['자동화 테스트 189개(pytest) 존재 — 탐지, 정책, 스트림 복원 등'],
    done: ['redact → forward → restore, 응답 스캔, 산업별 템플릿 9종, 감사 로그와 통계, 관리자 콘솔, Chrome 확장, 최종 발표'],
    gaps: ['이름만 있는 경우(직함 없음), 한글 비밀번호, 여러 줄 개인 키 블록의 스트리밍 탐지 한계', '게이트웨이 호출 측 인증 없음(통계/관리 API만 토큰 보호)'],
    learned: ['“막을 수 있는 것”과 “가려줄 수 있는 것”을 구분해 한계를 먼저 밝히는 것이 보안 도구의 신뢰를 만듭니다.', '시연용 데이터와 실제 데이터를 분리하지 않으면 화면이 거짓말을 하게 됩니다.'],
    shots: [], links: [], ai: 'K-뉴딜 Aleph 팀 과제, 최종 발표',
  },
];
export const bySlug = (s: string) => projects.find(p => p.slug === s)!;
