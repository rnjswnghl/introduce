// 데모 전용 목업 서버: 백엔드(Django) 없이 같은 화면이 보이도록 axios 어댑터를 교체한다.
// 화면 코드는 원본 그대로이고, 네트워크 계층만 바뀐다. 데이터는 실제 도서 fixtures(알라딘 API)에서 가져왔다.
import axios from 'axios'
import data from './data.json'

try { if (!localStorage.getItem('accessToken')) { localStorage.setItem('accessToken', 'demo'); localStorage.setItem('refreshToken', 'demo') } } catch (e) {}

const cats = data.categories
const catOf = id => cats.find(c => c.id === id) || { id, name: '기타' }
const book = b => ({ ...b, cover: (b.cover || '').replace('/coversum/', '/cover/'), category: catOf(b.category_id) })
const books = data.books.map(book)
const me = { id: 1, username: 'demo', email: 'demo@example.com', first_name: '데모', last_name: '', gender: 'F', photo: null, reading_amount: 12, favorite_categories: cats.slice(0, 2), followers: [{ id: 2, username: 'reader01', photo: null }], following: [{ id: 3, username: 'bookworm', photo: null }], followers_count: 1, following_count: 1, introduction: '책과 문장을 좋아합니다.' }
const now = () => new Date().toISOString()
let seq = 100
const folders = [{ id: 1, name: '읽고 싶은 책', bookmarks: [] }]
const posts = [
  [7, '밤새 읽은 소설', '마지막 장을 덮고 한참을 앉아 있었습니다.'], [12, '다시 읽는 고전', '두 번째 읽을 때 보이는 문장들이 있네요.'], [25, '출근길 한 권', '짧은 호흡이라 지하철에서 읽기 좋았어요.'], [40, '오늘의 문장', '“천천히, 그러나 끝까지.”'], [60, '추천합니다', '같은 저자의 다른 책도 읽어 보려고요.'],
].map(([bid, title, content], i) => ({ id: i + 1, author: i % 2 ? 'reader01' : 'demo', title, content, book: books[bid].id, book_detail: books[bid], ai_image_url: '', created_at: now(), updated_at: now(), comments: i === 0 ? [{ id: 1, author: 'reader01', content: '저도 읽어 보고 싶어요!', created_at: now() }] : [], like_count: 3 + i, is_liked: false }))
const guest = [{ id: 1, owner: 1, author: 2, author_username: 'reader01', emoji: '😊', created_at: now() }, { id: 2, owner: 1, author: 3, author_username: 'bookworm', emoji: '📚', created_at: now() }]

const ok = (config, d, status = 200) => ({ data: d, status, statusText: 'OK', headers: {}, config, request: {} })
function route(m, path, q, body) {
  let r
  if (path === 'books/categories/') return cats
  if ((r = path.match(/^books\/(\d+)\/$/))) return books.find(b => b.id === +r[1]) || books[0]
  if (path === 'books/') {
    let l = books; if (q.category) l = l.filter(b => String(b.category.id) === String(q.category))
    if (q.search) { const s = q.search.toLowerCase(), f = q.searchField; l = l.filter(b => (f === 'title' ? b.title : f === 'author' ? b.author : f === 'publisher' ? b.publisher : b.title + b.author + b.publisher).toLowerCase().includes(s)) }
    return l
  }
  if (path === 'books/author-info/') return { author_info: '저자 소개는 데모에서 생략됩니다. 실제 서비스에서는 위키 API로 가져옵니다.' }
  if (path === 'books/folders/') { if (m === 'post') { const f = { id: ++seq, name: body?.name || '새 폴더', bookmarks: [] }; folders.push(f); return f } return folders }
  if ((r = path.match(/^books\/folders\/(\d+)\/$/))) { const f = folders.find(x => x.id === +r[1]); if (m === 'put' && f) f.name = body.name; if (m === 'delete') folders.splice(folders.indexOf(f), 1); return f || {} }
  if (path === 'books/bookmarks/') { if (m === 'post') { const f = folders.find(x => x.id === +body.folder_id) || folders[0]; const bm = { id: ++seq, book: books.find(b => b.id === +body.book_id) || books[0], folder: f.id }; f.bookmarks.push(bm); return bm } return folders.flatMap(f => f.bookmarks) }
  if ((r = path.match(/^books\/bookmarks\/check\/(\d+)\/$/))) return { is_bookmarked: folders.some(f => f.bookmarks.some(b => b.book.id === +r[1])) }
  if ((r = path.match(/^books\/bookmarks\/(\d+)\/$/))) { folders.forEach(f => (f.bookmarks = f.bookmarks.filter(b => b.book.id !== +r[1] && b.id !== +r[1]))); return null }
  if (path === 'threads/posts/') { if (m === 'post') { const bk = books.find(b => b.id === +body.book) || books[0]; const p = { id: ++seq, author: 'demo', title: body.title, content: body.content, book: bk.id, book_detail: bk, ai_image_url: '', created_at: now(), updated_at: now(), comments: [], like_count: 0, is_liked: false }; posts.unshift(p); return p } return q.book ? posts.filter(p => String(p.book) === String(q.book)) : posts }
  if (path === 'threads/liked/') return posts.filter(p => p.is_liked)
  if ((r = path.match(/^threads\/posts\/(\d+)\/toggle-like\/$/))) { const p = posts.find(x => x.id === +r[1]); if (p) { p.is_liked = !p.is_liked; p.like_count += p.is_liked ? 1 : -1 } return { liked: p?.is_liked, is_liked: p?.is_liked, like_count: p?.like_count } }
  if ((r = path.match(/^threads\/posts\/(\d+)\/comments\/(\d+)\/$/))) { const p = posts.find(x => x.id === +r[1]); if (p) p.comments = p.comments.filter(c => c.id !== +r[2]); return null }
  if ((r = path.match(/^threads\/posts\/(\d+)\/comments\/$/))) { const p = posts.find(x => x.id === +r[1]); if (m === 'post' && p) { const c = { id: ++seq, author: 'demo', content: body.content, created_at: now() }; p.comments.push(c); return c } return p?.comments || [] }
  if ((r = path.match(/^threads\/posts\/(\d+)\/$/))) return posts.find(x => x.id === +r[1]) || posts[0]
  if (path === 'recommendations/') return books.slice(100, 106).map((b, i) => ({ id: i + 1, user: 1, base_book: books[i], recommended_book: b, reason: '같은 장르의 책', created_at: now() }))
  if ((r = path.match(/^recommendations\/by-book\/(\d+)\/$/))) { const b = books.find(x => x.id === +r[1]) || books[0]; const same = books.filter(x => x.category.id === b.category.id && x.id !== b.id).slice(0, 4); return same.map((x, i) => ({ id: i, base_book: b, recommended_book: x, reason: '같은 장르', created_at: now() })) }
  if (path === 'accounts/login/') return { access: 'demo', refresh: 'demo', token: 'demo', user: me }
  if (path === 'accounts/signup/') return me
  if (path === 'accounts/current/' || path === 'accounts/profile/') return me
  if (path === 'accounts/delete/') return null
  if ((r = path.match(/^guestbook\/(\d+)\/$/))) { if (m === 'post') { const g = { id: ++seq, owner: 1, author: 1, author_username: 'demo', emoji: body.emoji, created_at: now() }; guest.unshift(g); return g } return guest }
  if ((r = path.match(/^guestbook\/entry\/(\d+)\/$/))) { const i = guest.findIndex(g => g.id === +r[1]); if (i >= 0) guest.splice(i, 1); return null }
  return []
}
axios.defaults.adapter = config => {
  const url = (config.url || '').replace(/^https?:\/\/[^/]+/, '').replace(/^\/?api\//, '').replace(/^\//, '').split('?')[0]
  const q = { ...(config.params || {}) }; const ix = (config.url || '').indexOf('?'); if (ix > 0) new URLSearchParams(config.url.slice(ix)).forEach((v, k) => (q[k] = v))
  let body = {}; try { body = typeof config.data === 'string' ? JSON.parse(config.data) : config.data || {} } catch (e) {}
  const d = route((config.method || 'get').toLowerCase(), url, q, body)
  return Promise.resolve(ok(config, d, d === null ? 204 : (config.method || 'get') === 'post' ? 201 : 200))
}
