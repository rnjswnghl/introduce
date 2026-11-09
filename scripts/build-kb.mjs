// 챗봇 지식 베이스: 사이트에 실린 "근거 있는 내용"만 모아 JSON 으로 만든다.
//  - public/chat-kb.json : 브라우저의 로컬 검색 모드용
//  - api/_kb.json        : LLM 모드(서버리스 함수)의 시스템 프롬프트 재료
// draft(검수 전) 항목은 unverified:true 로 표시해 "정리 중인 내용"이라는 단서를 달게 한다.
import { writeFileSync, mkdirSync } from 'node:fs';
import { build } from 'esbuild';
// Node 버전과 무관하게 동작하도록 TS 데이터를 esbuild 로 변환해서 읽는다
const loadTs = async (rel) => { const r = await build({ entryPoints: [new URL(rel, import.meta.url).pathname], bundle: true, format: 'esm', platform: 'node', write: false }); return import('data:text/javascript;base64,' + Buffer.from(r.outputFiles[0].text).toString('base64')); };
const { projects } = await loadTs('../src/data/projects.ts');
const { profile: P, peers, timeline, certs, skills, levelLabel } = await loadTs('../src/data/profile.ts');

const L = (a) => a.filter(Boolean).join(' ');
const profile = [
  { id: 'profile-intro', type: 'profile', title: '권주회는 누구인가요', text: `권주회(${P.en})는 IT 업계의 개발자로 일하기를 지망합니다. "${P.sentence}" 러시아학과 빅데이터학을 공부한 뒤 웹 개발 프로젝트를 수행했고, 화면부터 API, AI 서버까지 필요한 범위를 넓혀 왔습니다. ${P.one}`, url: '/#about' },
  { id: 'profile-strength', type: 'profile', title: '강점, 가치, 일하는 방식', text: `핵심 가치와 강점: ${P.values.map(v => `${v.t}, ${v.k}: ${v.d}`).join(', ')}. 일하는 방식: ${P.way}`, url: '/#about' },
  { id: 'profile-peers', type: 'profile', title: '동료들이 말해주는 권주회', text: '함께 교육을 받은 동료들이 반복해서 말해 준 모습입니다. ' + peers.map(x => `${x.t} — ${x.d}`).join(' '), url: '/#about' },
  { id: 'profile-goal', type: 'profile', title: '현재의 나와 목표', text: P.now.map(n => `${n.t}: ${n.d}`).join(' '), url: '/#about', unverified: P.now.some(n => n.draft) },
  { id: 'profile-edu', type: 'profile', title: '학력', text: `부산외국어대학교 러시아학, 빅데이터학 졸업(2019.03 — 2025.02). ${timeline.find(t => t.t.includes('부산외국어')).d}`, url: '/#history' },
  { id: 'profile-history', type: 'profile', title: '교육, 경험 이력', text: timeline.map(t => `${t.when} ${t.t}${t.org ? '(' + t.org + ')' : ''}${t.role ? ' ' + t.role : ''}: ${t.d}`).join(' / '), url: '/#history', unverified: timeline.some(t => t.draft) },
  { id: 'profile-cert', type: 'profile', title: '자격증', text: certs.map(c => `${c.t}(${c.org}, ${c.when})`).join('; ') + '.', url: '/#history' },
  { id: 'profile-skills', type: 'profile', title: '기술과 활용 수준', text: '활용 수준은 3단계입니다(1 프로젝트에서 사용, 2 핵심 기능을 직접 구현, 3 구조, 설계를 직접 결정). ' + skills.map(g => `${g.cat}: ` + g.items.map(i => `${i.t} 수준 ${i.lv} — ${i.d}`).join('; ')).join(' / '), url: '/#skills', unverified: skills.some(g => g.items.some(i => i.draft)) },
  { id: 'profile-career', type: 'profile', title: '프로젝트 경험 개요', text: `SSAFY에서 팀 프로젝트 4개(한페이지, FocusMate, On-Wear, DALTOORI)를, K-뉴딜 Aleph에서 AI 에이전트와 함께 6개 프로젝트(BurnIt, Cut&Note, byeol, SuGang, Reflex Hub, LLM Gateway)를 만들었습니다. 팀 프로젝트는 팀 전체가 만든 것과 직접 구현한 것을 구분해 적었고, AI가 코드를 쓴 프로젝트는 기획, 요구사항, 검수만 본인의 일로 적었습니다.`, url: '/#projects' },
  { id: 'profile-ai', type: 'profile', title: 'AI와 일하는 방식', text: 'K-뉴딜 Aleph 개인 프로젝트들은 AI 에이전트가 코드를 작성했고, 권주회는 기획, 요구사항 정의, 결과 검수를 맡았습니다. DALTOORI에서는 여러 LLM과 협업해 AI 서버를 개발하면서 생성된 코드의 보안 점검을 직접 했습니다. LLM Gateway에서는 관리자 콘솔을 서버의 실제 상태 기준으로 정리했고, Cut&Note에서는 "네트워크 전송 없음"이라는 검증 기준을 세웠습니다.', url: '/#projects' },
  { id: 'profile-contact', type: 'contact', title: '연락, 코드 확인', text: '코드와 작업 이력은 GitHub(https://github.com/rnjswnghl)에서, 경력은 LinkedIn(https://www.linkedin.com/in/joohoe-kwon)에서 확인할 수 있습니다. 이메일, 전화 등 다른 연락처는 이 사이트에 공개하지 않았습니다.', url: '/#contact' },
];

const chunks = [...profile];
const push = (c) => chunks.push(c);
for (const p of projects) {
  const base = { project: p.slug, projectName: p.name, url: `/projects/${p.slug}` };
  const unv = p.group === 'aleph';
  push({ ...base, id: `${p.slug}-overview`, type: 'overview', title: `${p.name} 개요`, text: `${p.name}(${p.kor}) — ${p.period}, ${p.kind === 'solo' ? '개인 프로젝트' : p.teamSize + '인 팀'}. 권주회의 역할: ${p.role}. ${p.summary}` });
  push({ ...base, id: `${p.slug}-goal`, type: 'goal', title: `${p.name}: 왜 만들었나`, text: `문제: ${p.goal.problem} 목표: ${p.goal.goal}` });
  push({ ...base, id: `${p.slug}-role`, type: 'role', title: `${p.name}: 맡은 일`, text: `${p.team.length ? '팀/공동 작업: ' + p.team.join('; ') + '. ' : ''}권주회가 직접 구현한 것: ${p.mine.join('; ')}.${p.mineNote ? ' (' + p.mineNote + ')' : ''}`, unverified: unv });
  push({ ...base, id: `${p.slug}-stack`, type: 'stack', title: `${p.name}: 기술과 사용 이유`, text: p.stack.map(s => `${s.t} — ${s.why}`).join('; ') + '. 구성: ' + p.arch.map(a => `${a.t}(${a.r})`).join(' → ') });
  p.troubles.forEach((t, i) => push({ ...base, id: `${p.slug}-trouble-${i}`, type: 'trouble', title: `${p.name}: ${t.title}`, text: `문제: ${t.problem}${t.cause ? ' 원인: ' + t.cause : ''} 해결: ${t.fix}${t.verify ? ' 검증: ' + t.verify : ''}${t.result ? ' 결과: ' + t.result : ''}`, unverified: !!t.draft }));
  push({ ...base, id: `${p.slug}-result`, type: 'result', title: `${p.name}: 구현 결과`, text: `구현한 것: ${p.done.join('; ')}.` });
  if (p.gaps.length) push({ ...base, id: `${p.slug}-gap`, type: 'gap', title: `${p.name}: 한계, 향후 개선`, text: p.gaps.join('; ') + '.' });
  push({ ...base, id: `${p.slug}-learn`, type: 'learn', title: `${p.name}: 배운 점`, text: p.learned.join(' '), unverified: !p.learnedFromReadme });
  if (p.demo) push({ ...base, id: `${p.slug}-demo`, type: 'demo', title: `${p.name}: 데모`, text: `${p.name}은(는) 상세 페이지에서 구현한 화면을 직접 눌러볼 수 있는 데모를 제공합니다.` });
}
const aliases = {
  hanpage: ['한페이지', 'hanpage', '북버스', 'bookverse', '도서'], focusmate: ['focusmate', '포커스메이트', '스터디'], 'on-wear': ['on-wear', 'onwear', '온웨어', '의류', '패션'],
  daltoori: ['daltoori', '달투리', '발음'], burnit: ['burnit', '번잇', '태우'], 'cut-and-note': ['cut&note', 'cutandnote', '컷앤노트', '짤', '편집기'], byeol: ['byeol', '별자리', '천문'],
  sugang: ['sugang', '수강', '시간표', 'plan'], 'reflex-hub': ['reflex', '리플렉스', '논문', '반응속도'], 'llm-gateway': ['llm gateway', 'llm-gateway', '게이트웨이', '민감정보', '마스킹'],
};
const out = { updated: new Date().toISOString().slice(0, 10), aliases, projects: projects.map(p => ({ slug: p.slug, name: p.name, kor: p.kor, demo: !!p.demo })), chunks };
mkdirSync(new URL('../api/', import.meta.url), { recursive: true });
writeFileSync(new URL('../public/chat-kb.json', import.meta.url), JSON.stringify(out));
writeFileSync(new URL('../api/_kb.json', import.meta.url), JSON.stringify(out));
console.log('kb chunks', chunks.length, 'bytes', JSON.stringify(out).length);
