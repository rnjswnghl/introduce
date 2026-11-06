<template>
  <div class="container my-5 recent">
    <h3 class="section-title mb-4">최근 쓰레드</h3>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="thread in recentThreads" :key="thread.id" class="col">
        <RouterLink :to="{ name: 'ThreadDetailView', params: { id: thread.id }}" class="t-card">
          <div class="t-img">
            <img :src="getFullImageUrl(thread.ai_image_url)" :alt="thread.title" class="thread-image" />
            <span class="t-date">{{ formatDate(thread.created_at) }}</span>
          </div>
          <div class="t-body">
            <h5 class="t-title">{{ thread.title }}</h5>
            <div class="t-meta">
              <span>{{ thread.author }}</span>
              <span class="t-more">자세히 보기 <i class="fas fa-arrow-right"></i></span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const recentThreads = ref([])

const fetchRecentThreads = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/threads/posts/')
    recentThreads.value = response.data.slice(0, 3) // 최근 3개만 가져오기
  } catch (error) {
    console.error('최근 쓰레드를 불러오는데 실패했습니다:', error)
  }
}

const getFullImageUrl = (imageUrl) => {
  if (!imageUrl) return ''
  if (imageUrl.startsWith('http')) return imageUrl
  return `http://localhost:8000${imageUrl}`
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) {
    return '오늘'
  } else if (diffDays === 1) {
    return '어제'
  } else if (diffDays < 7) {
    return `${diffDays}일 전`
  } else {
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}

onMounted(() => {
  fetchRecentThreads()
})
</script>

<style scoped>
.section-title {
  font-family: 'Noto Serif KR', serif;
  color: #2f3a33;
  border-bottom: 2px solid #5f7a69;
  display: inline-block;
  padding-bottom: 0.3rem;
}

.t-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #1f1f1f;
  color: #f3f1ea;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.t-card:hover { transform: translateY(-5px); box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35); color: #f3f1ea; }

.t-img { position: relative; height: 210px; overflow: hidden; background: #111; }
/* 생성 이미지 모서리의 워터마크가 보이지 않도록 살짝 확대해 가장자리를 잘라낸다 */
.thread-image { width: 100%; height: 100%; object-fit: cover; display: block; transform: scale(1.14); transform-origin: 70% 75%; transition: transform 0.4s ease; }
.t-card:hover .thread-image { transform: scale(1.2); }
.t-img::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(31, 31, 31, 0.85), rgba(31, 31, 31, 0) 55%); }
.t-date {
  position: absolute; z-index: 1; right: 10px; top: 10px;
  padding: 0.2rem 0.6rem; border-radius: 999px;
  background: rgba(31, 31, 31, 0.65); color: #f6f1e1; font-size: 0.78rem;
}

.t-body { padding: 1rem 1.15rem 1.1rem; display: flex; flex-direction: column; gap: 0.7rem; flex: 1; }
.t-title {
  margin: 0; font-size: 1.15rem; font-weight: 600; line-height: 1.45; color: #f6f1e1;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 2.9em;
}
.t-meta { display: flex; justify-content: space-between; align-items: center; margin-top: auto; font-size: 0.85rem; color: #aeb5ae; }
.t-more { color: #9fbfa9; font-weight: 600; transition: color 0.2s; }
.t-card:hover .t-more { color: #c9e0d0; }
.t-more i { font-size: 0.72rem; margin-left: 0.2rem; transition: transform 0.2s; }
.t-card:hover .t-more i { transform: translateX(3px); }
</style>
