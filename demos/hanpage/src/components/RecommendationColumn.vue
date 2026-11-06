<template>
    <div class="col-md-4 d-flex justify-content-center align-items-center position-relative">
        <button class="arrow me-2" aria-label="이전" @click="$emit('prev')" style="user-select: none;">
            ‹
        </button>

        <div class="text-center">
            <h5 class="mb-3 rec-title">{{ title }}</h5>
            <div v-if="books.length && currentBook">
                <router-link :to="`/books/${currentBook.id}`" class="text-decoration-none rec-link">
                    <div class="card rec-card mx-auto" style="width: 8rem;">
                        <img :src="currentBook.cover || defaultCover" class="card-img-top" alt="책 표지"
                            style="height: 12rem; object-fit: cover;" />
                        <div class="card-body p-2">
                            <p class="card-title text-truncate mb-0" :title="currentBook.title">
                                {{ currentBook.title }}
                            </p>
                        </div>
                    </div>
                </router-link>
            </div>
            <p v-else class="rec-empty">{{ emptyText }}</p>
        </div>

        <button class="arrow ms-2" aria-label="다음" @click="$emit('next')" style="user-select: none;">
            ›
        </button>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    books: Array,
    currentBook: Object,
    page: Number,
    defaultCover: String,
    emptyText: String
})
</script>

<style scoped>
.rec-title { color: #f6f1e1; font-size: 1.05rem; font-weight: 600; }
.rec-empty { color: #8f958f; }
.arrow {
  flex: none; width: 34px; height: 34px; border-radius: 50%; border: none; padding: 0;
  display: grid; place-items: center; line-height: 1; font-size: 1.4rem;
  background: rgba(95, 122, 105, 0.25); color: #cfe0d4; cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.arrow:hover { background: #5f7a69; color: #f6f1e1; transform: scale(1.06); }
.rec-link { text-decoration: none; }
.rec-card {
  background: #2a2a2a; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.rec-link:hover .rec-card { transform: translateY(-4px); box-shadow: 0 8px 18px rgba(0, 0, 0, 0.4); }
.rec-card .card-title { color: #f6f1e1; font-size: 0.9rem; }
.rec-card .card-body { background: transparent; }
</style>
