// 데모용 네트워크 계층: 원본 화면 코드는 그대로 두고, axios 어댑터만 바꿔 같은 형태의 응답을 돌려준다.
// 응답 형태는 09-pjt 백엔드(DRF) 시리얼라이저 기준이고, 도서 데이터는 실제 fixtures(알라딘 API, 398권)에서 가져왔다.
import axios from 'axios'
import data from './data.json'
import cover1 from '@/assets/cover/불편한편의점.jpg'
import cover2 from '@/assets/cover/달러구트꿈백화점.jpg'
import cover3 from '@/assets/cover/미드나잇라이브러리.jpg'
import cover4 from '@/assets/cover/코스모스.jpg'
import cover5 from '@/assets/cover/해커와화가.jpg'
import cover6 from '@/assets/cover/클린코드.jpg'
import au1 from '@/assets/author/김호연.jpg'
import au2 from '@/assets/author/이미예.jpg'
import au3 from '@/assets/author/매트헤이그.jpg'
import au4 from '@/assets/author/칼세이건.jpg'
import au5 from '@/assets/author/폴그레이엄.png'
import au6 from '@/assets/author/로버트c마틴.jpg'
import img소설 from '@/assets/소설.jpeg'
import img인문 from '@/assets/인문학.jpeg'
import img컴퓨터 from '@/assets/컴퓨터.jpeg'
import img자기 from '@/assets/자기계발.jpg'
import img역사 from '@/assets/역사.jpg'
import img건강 from '@/assets/건강.jpeg'

try { if (!localStorage.getItem('accessToken')) { localStorage.setItem('accessToken', 'demo'); localStorage.setItem('refreshToken', 'demo') } } catch (e) {}

const abs = u => (/^https?:/.test(u) ? u : location.origin + u) // 원본 화면이 상대 경로에 서버 주소를 붙이므로 절대 주소로 준다
const cats = data.categories
const catOf = id => cats.find(c => c.id === id) || cats[0]
const big = u => (u || '').replace('/coversum/', '/cover/')

// 화면에서 가장 먼저 보이는 대표 도서 6권(표지, 저자 사진은 직접 준비한 이미지)
const featured = [
  { id: 1001, title: '불편한 편의점', author: '김호연 (지은이)', publisher: '나무옆의자', pubdate: '2021-04-20', cover: cover1, cat: 1, rank: 10, desc: '서울역 노숙인 독고 씨가 심야 편의점 야간 근무를 시작하면서 벌어지는 이야기. 동네 편의점에 드나드는 사람들이 서로의 사정을 알아 가며 조금씩 가까워지는 과정을 따뜻하게 그린 소설입니다.', au: au1, bio: '소설가. 영화 시나리오 작업을 거쳐 소설을 쓰기 시작했습니다. 「불편한 편의점」으로 많은 독자에게 알려졌고, 일상 속 사람들의 관계를 따뜻한 시선으로 풀어냅니다.' },
  { id: 1002, title: '달러구트 꿈 백화점', author: '이미예 (지은이)', publisher: '팩토리나인', pubdate: '2020-07-08', cover: cover2, cat: 1, rank: 10, desc: '잠들어야만 입장할 수 있는 꿈 백화점에서 손님에게 꿈을 파는 이야기. 신입 점원 페니의 눈으로 꿈을 만들고 사고파는 독특한 세계를 소개하는 판타지 소설입니다.', au: au2, bio: '소설가. 꿈을 사고파는 백화점이라는 독창적인 설정의 「달러구트 꿈 백화점」 시리즈를 썼습니다.' },
  { id: 1003, title: '미드나잇 라이브러리', author: '매트 헤이그 (지은이)', publisher: '인플루엔셜', pubdate: '2021-04-26', cover: cover3, cat: 1, rank: 10, desc: '삶과 죽음 사이에 있는 도서관에서, 노라가 자신이 선택하지 않은 수많은 삶을 살아 보며 진짜 원하는 삶이 무엇인지 찾아가는 이야기입니다.', au: au3, bio: '영국의 소설가, 에세이스트. 우울증을 겪은 경험을 솔직하게 쓴 글과 소설로 널리 읽히는 작가입니다.' },
  { id: 1004, title: '코스모스', author: '칼 세이건 (지은이)', publisher: '사이언스북스', pubdate: '2006-12-20', cover: cover4, cat: 7, rank: 10, desc: '우주의 기원부터 별, 행성, 생명의 탄생까지 인류가 우주를 이해해 온 과정을 따라가는 과학 교양서의 고전. 어려운 개념을 시적인 문장으로 풀어 줍니다.', au: au4, bio: '미국의 천문학자, 행성과학자이자 과학 저술가. 대중에게 우주를 알린 TV 시리즈와 「코스모스」로 유명합니다.' },
  { id: 1005, title: '해커와 화가', author: '폴 그레이엄 (지은이)', publisher: '한빛미디어', pubdate: '2014-06-02', cover: cover5, cat: 5, rank: 10, desc: '프로그래머를 해커이자 만드는 사람으로 바라보며, 좋은 소프트웨어와 창업, 일하는 방식에 대한 생각을 에세이로 풀어낸 책입니다.', au: au5, bio: '프로그래머, 에세이스트, 벤처 투자자. 스타트업 투자 프로그램 Y Combinator를 공동 설립했고 Lisp 관련 글로도 알려져 있습니다.' },
  { id: 1006, title: '클린 코드', author: '로버트 C. 마틴 (지은이)', publisher: '인사이트', pubdate: '2013-12-24', cover: cover6, cat: 5, rank: 10, desc: '읽기 좋은 코드를 쓰기 위한 원칙과 사례, 리팩터링 방법을 다룬 소프트웨어 개발 서적입니다. 이름 짓기, 함수, 주석, 오류 처리까지 구체적으로 설명합니다.', au: au6, bio: '소프트웨어 엔지니어이자 강연자. "Uncle Bob"으로 불리며 애자일, 클린 코드, 클린 아키텍처를 널리 알렸습니다.' },
]
const authorInfo = {}
for (const f of featured) authorInfo[f.author.replace(/\s*\(.*?\)\s*/g, '').trim()] = { description: f.bio, image_url: f.au }

const mk = (b, i) => ({ id: b.id, title: b.title, sub_title: b.sub_title || '', author: b.author, publisher: b.publisher, pubdate: b.pubdate, isbn: b.isbn || '', description: b.description, cover: big(b.cover), pricestandard: b.pricestandard || 0, customer_review_rank: b.customer_review_rank ?? 0, category: catOf(b.category_id) })
const books = [
  ...featured.map(f => ({ id: f.id, title: f.title, sub_title: '', author: f.author, publisher: f.publisher, pubdate: f.pubdate, isbn: '', description: f.desc, cover: f.cover, pricestandard: 0, customer_review_rank: f.rank, category: catOf(f.cat) })),
  ...data.books.map(mk),
]
const byId = id => books.find(b => b.id === +id)

const me = { id: 1, username: 'reader', email: 'reader@example.com', first_name: '독자', last_name: '', gender: 'F', photo: null, photo_url: null, bio: '책과 문장을 좋아합니다.', reading_amount: 12, favorite_categories: [catOf(1), catOf(7)], followers: [{ id: 2, username: 'bookworm', photo: null }], followings: [{ id: 3, username: 'pagefriend', photo: null }], is_following: false }
const others = { bookworm: { ...me, id: 2, username: 'bookworm', email: 'bookworm@example.com', first_name: '책벌레', followers: [], followings: [{ id: 1, username: 'reader', photo: null }] }, pagefriend: { ...me, id: 3, username: 'pagefriend', email: 'pagefriend@example.com', first_name: '페이지', followers: [{ id: 1, username: 'reader', photo: null }], followings: [] } }
const day = n => new Date(Date.now() - n * 864e5).toISOString()
let seq = 100
const folders = [{ id: 1, name: '읽고 싶은 책', bookmarks: [{ id: 1, book: byId(1004), folder: 1 }, { id: 2, book: byId(1001), folder: 1 }] }, { id: 2, name: '올해의 책', bookmarks: [{ id: 3, book: byId(1003), folder: 2 }] }]

const P = (id, author, bookId, title, content, img, likes, liked, comments, ago) => ({ id, author, title, content, book: bookId, book_detail: byId(bookId), ai_image_url: abs(img), created_at: day(ago), updated_at: day(ago), comments, like_count: likes, is_liked: liked })
const C = (id, author, content, ago) => ({ id, author, content, created_at: day(ago) })
const posts = [
  P(1, 'reader', 1004, '코스모스를 읽고 올려다본 밤하늘', '“우리는 별의 물질로 이루어져 있다.” 이 한 문장 때문에 한참 동안 책을 덮고 하늘을 올려다봤어요. 천천히 읽을수록 좋은 책입니다.', img인문, 8, true, [C(1, 'bookworm', '저도 이 문장에서 멈췄어요. 마지막 장까지 꼭 읽어 보세요!', 1), C(2, 'pagefriend', '겨울 밤에 다시 읽고 싶어지네요.', 0)], 1),
  P(2, 'bookworm', 1001, '편의점이 이렇게 따뜻한 공간이라니', '야간 근무 이야기인데도 읽고 나면 마음이 따뜻해져요. 동네에 이런 가게 하나쯤 있으면 좋겠다는 생각이 들었습니다.', img소설, 5, false, [C(3, 'reader', '독고 씨 캐릭터가 오래 기억에 남아요.', 2)], 2),
  P(3, 'pagefriend', 1006, '클린 코드, 두 번째 읽기', '처음 읽을 땐 이름 짓기 장이 와닿지 않았는데, 팀 프로젝트를 하고 나서 다시 읽으니 한 줄 한 줄이 다 맞는 말이었습니다.', img컴퓨터, 6, false, [], 3),
  P(4, 'reader', 1003, '선택하지 않은 삶들에 대하여', '노라가 다른 삶을 살아 볼 때마다 지금 내 삶을 다시 보게 됐어요. 후회가 많은 날에 읽기 좋은 책.', img자기, 4, false, [C(4, 'bookworm', '후회도 결국 나를 만든 한 페이지죠.', 3)], 4),
  P(5, 'bookworm', 1005, '만드는 사람의 관점', '프로그래머를 해커이자 만드는 사람으로 바라본 시선이 신선했습니다. 일하는 방식에 대한 생각이 많아졌어요.', img컴퓨터, 3, false, [], 5),
  P(6, 'reader', 1002, '잠들기 전에 읽기 좋은 책', '꿈을 사고파는 상상력이 정말 귀엽습니다. 가볍게 읽기 시작했다가 새벽까지 읽어 버렸어요.', img소설, 7, true, [], 6),
]

const cc = p => ({ ...p, comment_count: p.comments.length })
const uid = { reader: 1, bookworm: 2, pagefriend: 3 }
const ok = (config, d, status = 200) => ({ data: d, status, statusText: 'OK', headers: {}, config, request: {} })
const ci = v => String(v || '').toLowerCase()
function route(m, path, q, body) {
  let r
  if (path === 'books/categories/') return cats
  if (path === 'books/book-list/') {
    let l = books
    if (q.category) l = l.filter(b => String(b.category.id) === String(q.category))
    if (q.author) l = l.filter(b => ci(b.author).includes(ci(q.author)))
    if (q.search) { const s = ci(q.search), f = q.searchField; l = l.filter(b => ci(f === 'title' ? b.title : f === 'author' ? b.author : f === 'publisher' ? b.publisher : b.title + ' ' + b.author + ' ' + b.publisher).includes(s)) }
    return l
  }
  if ((r = path.match(/^books\/book-list\/(\d+)\/$/))) return byId(r[1]) || books[0]
  if (path === 'books/author-info/') { const n = (q.name || '').trim(); return { author_info: authorInfo[n] || { description: '', image_url: '' } } }
  if (path === 'books/folders/') { if (m === 'post') { const f = { id: ++seq, name: body?.name || '새 폴더', bookmarks: [] }; folders.push(f); return f } return folders }
  if ((r = path.match(/^books\/folders\/(\d+)\/$/))) { const f = folders.find(x => x.id === +r[1]); if (m === 'put' && f) f.name = body.name; if (m === 'delete' && f) folders.splice(folders.indexOf(f), 1); return f || {} }
  if (path === 'books/bookmarks/') { if (m === 'post') { const f = folders.find(x => x.id === +body.folder) || folders[0]; const bk = { id: ++seq, book: byId(body.book) || books[0], folder: f.id }; f.bookmarks.push(bk); return bk } return folders.flatMap(f => f.bookmarks) }
  if ((r = path.match(/^books\/bookmarks\/check\/(\d+)\/$/))) { const bm = folders.flatMap(f => f.bookmarks).find(b => b.book.id === +r[1]); return { is_bookmarked: !!bm, bookmarked: !!bm, bookmark_id: bm?.id } }
  if ((r = path.match(/^books\/bookmarks\/(\d+)\/$/))) { folders.forEach(f => (f.bookmarks = f.bookmarks.filter(b => b.id !== +r[1] && b.book.id !== +r[1]))); return null }
  if ((r = path.match(/^recommendations\/by-book\/(\d+)\/$/))) {
    const b = byId(r[1]) || books[0]
    const pool = books.filter(x => x.id !== b.id)
    return { authorBooks: pool.filter(x => ci(x.author) === ci(b.author)).slice(0, 10), categoryBooks: pool.filter(x => x.category.id === b.category.id && x.id !== b.id).slice(0, 10), randomBooks: [...pool].sort((a, c) => ((a.id * 7919) % 101) - ((c.id * 7919) % 101)).slice(0, 10) }
  }
  if (path === 'recommendations/') return []
  if (path === 'threads/posts/') { if (m === 'post') { const bk = byId(body.book) || books[0]; const p = P(++seq, me.username, bk.id, body.title, body.content, img역사, 0, false, [], 0); posts.unshift(p); return p } let l = posts; if (q.book) l = l.filter(p => String(p.book) === String(q.book)); if (q.user) l = l.filter(p => String(uid[p.author]) === String(q.user)); return l.map(cc) }
  if (path === 'threads/liked/') return posts.filter(p => p.is_liked).map(cc)
  if ((r = path.match(/^threads\/posts\/(\d+)\/toggle-like\/$/))) { const p = posts.find(x => x.id === +r[1]); if (p) { p.is_liked = !p.is_liked; p.like_count += p.is_liked ? 1 : -1 } return { liked: p?.is_liked, is_liked: p?.is_liked, like_count: p?.like_count } }
  if ((r = path.match(/^threads\/posts\/(\d+)\/comments\/(\d+)\/$/))) { const p = posts.find(x => x.id === +r[1]); if (p) p.comments = p.comments.filter(c => c.id !== +r[2]); return null }
  if ((r = path.match(/^threads\/posts\/(\d+)\/comments\/$/))) { const p = posts.find(x => x.id === +r[1]); if (m === 'post' && p) { const c = C(++seq, me.username, body.content, 0); p.comments.push(c); return c } return p?.comments || [] }
  if ((r = path.match(/^threads\/posts\/(\d+)\/$/))) { const p = posts.find(x => x.id === +r[1]) || posts[0]; if (m === 'get') return cc(p); if (m === 'put') { Object.assign(p, { title: body.title ?? p.title, content: body.content ?? p.content }); return p } if (m === 'delete') { posts.splice(posts.indexOf(p), 1); return null } return p }
  if (path === 'accounts/login/') return { access: 'demo', refresh: 'demo' }
  if (path === 'accounts/signup/') return me
  if (path === 'accounts/current/') return { id: me.id, username: me.username, email: me.email }
  if ((r = path.match(/^accounts\/profile\/([^/]+)\/$/))) return others[decodeURIComponent(r[1])] || me
  if (path === 'accounts/profile/') { if (m === 'patch' || m === 'put') return me; return me }
  if ((r = path.match(/^accounts\/follow\/(\d+)\/$/))) { const o = Object.values(others).find(x => x.id === +r[1]); if (o) o.is_following = !o.is_following; return { is_following: !!o?.is_following } }
  if (path === 'accounts/delete/') return null
  if (path === 'accounts/logout/') return null
  const gb = guest
  if ((r = path.match(/^guestbook\/(\d+)\/$/))) { if (m === 'post') { const g = { id: ++seq, owner: +r[1], author: 1, author_username: me.username, emoji: body.emoji, created_at: day(0) }; gb.unshift(g); return g } return gb }
  if ((r = path.match(/^guestbook\/entry\/(\d+)\/$/))) { const i = gb.findIndex(g => g.id === +r[1]); if (i >= 0) gb.splice(i, 1); return null }
  return []
}
const guest = [{ id: 1, owner: 1, author: 2, author_username: 'bookworm', emoji: '😊', created_at: day(1) }, { id: 2, owner: 1, author: 3, author_username: 'pagefriend', emoji: '📚', created_at: day(2) }, { id: 3, owner: 1, author: 2, author_username: 'bookworm', emoji: '👍', created_at: day(4) }]
axios.defaults.adapter = config => {
  const full = config.url || ''
  const url = full.replace(/^https?:\/\/[^/]+/, '').replace(/^\/?api\//, '').replace(/^\//, '').split('?')[0]
  const q = { ...(config.params || {}) }; const ix = full.indexOf('?'); if (ix > 0) new URLSearchParams(full.slice(ix)).forEach((v, k) => (q[k] = v))
  let body = {}; try { body = typeof config.data === 'string' ? JSON.parse(config.data) : (config.data instanceof FormData ? Object.fromEntries(config.data) : config.data || {}) } catch (e) {}
  const raw = route((config.method || 'get').toLowerCase(), url, q, body)
  // 실제 서버처럼 매번 새 응답 객체를 돌려준다(같은 배열을 돌려주면 Vue가 변경을 감지하지 못해 화면이 갱신되지 않는다)
  const d = raw && typeof raw === 'object' ? structuredClone(raw) : raw
  return Promise.resolve(ok(config, d, d === null ? 204 : (config.method || 'get') === 'post' ? 201 : 200))
}
