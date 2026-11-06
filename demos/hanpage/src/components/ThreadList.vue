<script setup>
import ThreadItem from '@/components/ThreadItem.vue'
import { onMounted, watch } from 'vue'
import { useThreadStore } from '@/stores/threadStore'

const props = defineProps({
  userId: {
    type: Number,
    required: false,
  },
  bookId: {
    type: Number,
    required: false,
  },
  autoFetch: {
    type: Boolean,
    default: true,
  },
})

const threadStore = useThreadStore()

const fetchBasedOnProps = () => {
  if (props.bookId != null) {
    threadStore.fetchThreads({ book: props.bookId })
  } else if (props.userId != null) {
    threadStore.fetchThreads({ user: props.userId })
  } else if (props.autoFetch) {
    threadStore.fetchThreads()
  }
}

onMounted(() => {
  fetchBasedOnProps()
})

watch(
  () => [props.userId, props.bookId],
  () => {
    fetchBasedOnProps()
  }
)
</script>

<template>
  <div class="thread-list-container">
    <div v-if="bookId == null" class="thread-list-header">
      <h3 class="thread-list-title">
        {{ userId ? '내가 쓴 쓰레드' : '전체 쓰레드 목록' }}
      </h3>
      <div class="thread-list-stats">
        <span class="thread-count">총 {{ threadStore.threads.length }}개의 쓰레드</span>
      </div>
    </div>

    <div v-if="threadStore.threads.length === 0" class="empty-state">
      <i class="fas fa-comments"></i>
      <p>아직 작성된 쓰레드가 없습니다.</p>
    </div>

    <div v-else class="thread-list">
      <ThreadItem
        v-for="thread in threadStore.threads"
        :key="thread.id"
        :thread="thread"
        class="thread-item"
      />
    </div>
  </div>
</template>

<style scoped>
.thread-list-container {
  background: transparent;
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.thread-list-header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #5f7a69;
}

.thread-list-title {
  margin: 0;
  color: #2f3a33;
  font-size: 1.6rem;
}

.thread-list-stats {
  color: #5b6760;
  font-size: 0.9rem;
}

.empty-state {
  text-align: center;
  padding: 1.5rem 1rem;
  color: #5b6760;
}

.empty-state i {
  display: none;
}

.empty-state p {
  margin: 0;
  font-size: 1.05rem;
}

.thread-list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.thread-item {
  transition: transform 0.2s;
}

.thread-item:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .thread-list-container {
    padding: 1rem;
  }

  .thread-list-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .thread-list-title {
    font-size: 1.2rem;
  }
}
</style>
