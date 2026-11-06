<template>
  <div class="container-fluid my-4">
    <h3 class="text-center mb-4 section-title">🔥 베스트셀러 🔥</h3>

    <div class="slider">
      <button class="btn btn-primary nav-btn" @click="prev" :disabled="startIndex === 0" aria-label="이전">
        &lt;
      </button>

      <div class="d-flex flex-wrap justify-content-center cards-container">
        <div v-for="book in visibleBooks" :key="book.id" class="book-card-wrapper">
          <router-link :to="{ name: 'BookDetailView', params: { bookId: book.id } }" class="book-link">
            <img :src="book.cover" :alt="book.title" class="card-img-top" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate" :title="book.title">
                {{ book.title }}
              </h5>
            </div>
          </router-link>
        </div>
      </div>

      <button class="btn btn-primary nav-btn" @click="next" :disabled="startIndex + visibleCount >= sortedBooks.length" aria-label="다음">
        &gt;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const sortedBooks = ref([])
const startIndex = ref(0)
const visibleCount = 6

const visibleBooks = computed(() => {
  return sortedBooks.value.slice(startIndex.value, startIndex.value + visibleCount)
})

const next = () => {
  const maxStart = Math.max(sortedBooks.value.length - visibleCount, 0)
  if (startIndex.value < maxStart) {
    startIndex.value = Math.min(startIndex.value + visibleCount, maxStart)
  }
}

const prev = () => {
  if (startIndex.value > 0) {
    startIndex.value = Math.max(startIndex.value - visibleCount, 0)
  }
}

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/books/book-list/')
    sortedBooks.value = res.data.sort((a, b) => b.customer_review_rank - a.customer_review_rank)
  } catch (error) {
    console.error('도서 목록 불러오기 실패:', error)
  }
})
</script>

<style scoped>
.section-title {
  position: relative;
  font-size: 2.6rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
  color: black;
  background: none;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.15);
  font-family: 'Noto Serif KR', serif;
  letter-spacing: 1.5px;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  /* border-bottom 제거 */
  border-bottom: none;
}

/* 가상 요소로 밑줄 역할 */
.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;        /* 구분선 길이 조절 */
  height: 2px;        /* 선 굵기 */
  background-color: #ffb6a3;
  border-radius: 2px;
}


.best-title {
  font-size: 2.8rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(to right, #ff9800, #ec407a);
  -webkit-background-clip: text;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  letter-spacing: 2px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 1rem;
}

.book-card-wrapper {
  flex: 0 0 auto;
  width: 18vw;
  min-width: 180px;
  max-width: 280px;
}

.book-link {
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #1f1f1f;
}

.book-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.book-link img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid #444;
}

.card-body {
  padding: 1rem;
  text-align: center;
}

.card-title {
  margin: 0;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
}

.mt-3 {
  margin-top: 2rem !important;
}

button.btn {
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  background-color: #444;
  border: none;
  color: white;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button.btn:hover:not(:disabled) {
  background-color: #666;
  transform: scale(1.05);
  cursor: pointer;
}

button.btn:disabled {
  background-color: #999;
  cursor: not-allowed;
  color: #ccc;
}

/* 이전/다음 버튼은 책 줄의 좌우에 둔다 */
.slider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0 1rem;
}
.slider .cards-container {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0;
  gap: 1.25rem;
}
.nav-btn {
  flex: none;
}
@media (max-width: 991px) {
  /* 좁은 화면은 책이 세로로 쌓이므로 버튼을 아래에 둔다 */
  .slider { flex-wrap: wrap; row-gap: 1.5rem; }
  .slider .cards-container { order: -1; flex: 0 0 100%; }
}
@media (min-width: 992px) {
  .slider .book-link img { height: auto; aspect-ratio: 7 / 10; }
  .slider .cards-container { flex-wrap: nowrap; }
  .slider .book-card-wrapper { flex: 1 1 0; width: auto; min-width: 0; max-width: 264px; }
}

@media (max-width: 1200px) {
  .book-card-wrapper {
    width: 25vw;
  }
}

@media (max-width: 768px) {
  .book-card-wrapper {
    width: 40vw;
  }
}

@media (max-width: 480px) {
  .book-card-wrapper {
    width: 80vw;
  }
}
</style>