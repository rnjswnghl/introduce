// 09-pjt 의 fixtures(도서 398권·카테고리 9개)를 데모용으로 줄여 JSON으로 만든다.
import { readFileSync, writeFileSync } from 'node:fs';
const src = process.argv[2] ?? '/home/user/09-pjt/back/book/fixtures';
const books = JSON.parse(readFileSync(src + '/books.json', 'utf8'));
const cats = JSON.parse(readFileSync(src + '/categories.json', 'utf8'));
const out = {
  categories: cats.map(c => ({ id: c.pk, name: c.fields.name })),
  books: books.map(b => ({ id: b.pk, title: b.fields.title, sub_title: b.fields.sub_title || '', author: b.fields.author, publisher: b.fields.publisher, pubdate: b.fields.pubdate, isbn: b.fields.isbn, description: (b.fields.description || '').slice(0, 220), cover: b.fields.cover, pricestandard: b.fields.pricestandard, customer_review_rank: b.fields.customer_review_rank, category_id: b.fields.category_id })),
};
writeFileSync(new URL('../src/mock/data.json', import.meta.url), JSON.stringify(out));
console.log(out.books.length, 'books', out.categories.length, 'categories');
