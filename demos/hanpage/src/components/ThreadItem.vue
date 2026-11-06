<template>
  <div class="thread-item">
    <RouterLink v-if="thread.id" :to="{ name: 'ThreadDetailView', params: { id: thread.id } }" class="thread-link">
      <div class="thread-header">
        <div class="thread-user">
          <span class="avatar">{{ (thread.author || '?').charAt(0).toUpperCase() }}</span>
          <span class="username">{{ thread.author || '알 수 없음' }}</span>
        </div>
        <div class="thread-meta">
          <span class="thread-date">{{ formatDate(thread.created_at) }}</span>
          <div class="thread-stats">
            <span class="stat-item">
              <i class="fas fa-comment"></i>
              {{ thread.comment_count || 0 }}
            </span>
            <span class="stat-item">
              <i class="fas fa-heart"></i>
              {{ thread.like_count || 0 }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="thread-content">
        <h4 class="thread-title">{{ thread.title }}</h4>
        <p class="thread-excerpt">
          {{ thread.content && thread.content.length > 100
            ? thread.content.slice(0, 100) + '...'
            : thread.content || '내용을 불러올 수 없습니다.' }}
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  thread: {
    type: Object,
    required: true,
  },
})

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
</script>

<style scoped>
.thread-item {
  position: relative;
  background: #1f1f1f;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
}
.thread-item::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #5f7a69; transition: width 0.2s; }
.thread-item:hover { transform: translateY(-3px); box-shadow: 0 10px 22px rgba(0, 0, 0, 0.32); }
.thread-item:hover::before { width: 7px; }

.thread-link { text-decoration: none; color: inherit; display: block; padding: 1.25rem 1.5rem 1.25rem 1.75rem; }

.thread-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; }
.thread-user { display: flex; align-items: center; gap: 0.6rem; }
.avatar {
  width: 30px; height: 30px; border-radius: 50%;
  display: grid; place-items: center;
  background: #5f7a69; color: #f6f1e1; font-weight: 700; font-size: 0.9rem;
}
.username { font-weight: 600; color: #e8e4d8; font-size: 0.95rem; }

.thread-meta { display: flex; align-items: center; gap: 0.9rem; }
.thread-date { color: #8f958f; font-size: 0.85rem; }
.thread-stats { display: flex; gap: 0.5rem; }
.stat-item {
  display: flex; align-items: center; gap: 0.35rem;
  padding: 0.15rem 0.6rem; border-radius: 999px;
  background: rgba(255, 255, 255, 0.08); color: #c7ccc6; font-size: 0.82rem;
}
.stat-item i { font-size: 0.78rem; color: #9fbfa9; }

.thread-content { margin-bottom: 0; }
.thread-title { margin: 0 0 0.45rem; font-size: 1.25rem; font-weight: 700; color: #f6f1e1; line-height: 1.4; }
.thread-excerpt {
  margin: 0; color: #aeb3ad; font-size: 0.98rem; line-height: 1.7;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}

@media (max-width: 768px) {
  .thread-link { padding: 1rem 1rem 1rem 1.25rem; }
  .thread-header { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
  .thread-meta { width: 100%; justify-content: space-between; }
  .thread-title { font-size: 1.1rem; }
  .thread-excerpt { font-size: 0.9rem; }
}
</style>
