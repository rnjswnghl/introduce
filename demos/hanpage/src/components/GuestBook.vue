<template>
    <div class="guestbook-container">
        <h4>방문록 (이모지 남기기)</h4>
        <div class="emoji-selector">
            <div class="emoji-tabs">
                <button 
                    v-for="(category, index) in categories" 
                    :key="index"
                    :class="['tab-btn', { active: activeCategory === category.id }]"
                    @click="activeCategory = category.id"
                >
                    {{ category.icon }} {{ category.name }}
                </button>
            </div>
            <div class="emoji-content">
                <transition name="fade" mode="out-in">
                    <div :key="activeCategory" class="emoji-grid">
                        <span 
                            v-for="emoji in getEmojisByCategory(activeCategory)" 
                            :key="emoji" 
                            class="emoji-item"
                            @click="submitEmoji(emoji)"
                        >
                            {{ emoji }}
                        </span>
                    </div>
                </transition>
            </div>
        </div>
        <div class="guestbook-list">
            <div v-for="entry in entries" :key="entry.id" class="guestbook-entry">
                <div class="entry-content">
                    <span class="emoji">{{ entry.emoji }}</span>
                    <div class="entry-info">
                        <span class="username">{{ entry.author_username }}</span>
                        <span class="timestamp">{{ formatDate(entry.created_at) }}</span>
                    </div>
                    <button 
                        v-if="entry.author_username === currentUser" 
                        @click="deleteEntry(entry.id)" 
                        class="delete-btn"
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { fetchGuestbook, postGuestbook } from '@/utils/api'

const props = defineProps({
    userId: {
        type: Number,
        required: true,
    },
})

const categories = [
    { id: 'happy', name: '기쁨', icon: '😊' },
    { id: 'love', name: '사랑', icon: '❤️' },
    { id: 'fun', name: '재미', icon: '😄' },
    { id: 'nature', name: '자연', icon: '🌸' }
]

const emojiMap = {
    happy: ['😀', '😊', '😎', '🤩', '🙌', '👏', '👍', '💪'],
    love: ['😍', '🥰', '💌', '💝', '💖', '💕', '💓', '💗'],
    fun: ['😂', '🤣', '😄', '😆', '🤗', '🤔', '🎉', '🎵'],
    nature: ['✨', '🌸', '🌼', '🌈', '🍀', '🐰', '🐱', '🐶']
}

const activeCategory = ref('happy')
const entries = ref([])
const currentUser = ref('')

function getCookie(name) {
    let cookieValue = null
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';')
        for (let cookie of cookies) {
            cookie = cookie.trim()
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
                break
            }
        }
    }
    return cookieValue
}

const csrftoken = getCookie('csrftoken')

const getToken = () => {
    return localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')
}

const loadEntries = async () => {
    try {
        const res = await fetchGuestbook(props.userId)
        entries.value = res.data
    } catch (err) {
        console.error('방명록 불러오기 실패:', err.response?.data || err.message)
    }
}

const submitEmoji = async (emoji) => {
    try {
        await postGuestbook(props.userId, emoji)
        await loadEntries()
    } catch (err) {
        console.error('이모지 방명록 저장 실패:', err.response?.data || err.message)
        alert('이모지 방명록 작성에 실패했습니다.')
    }
}

const deleteEntry = async (entryId) => {
    try {
        const token = getToken()
        await axios.delete(`/api/guestbook/entry/${entryId}/`, {
            headers: {
                'X-CSRFToken': csrftoken,
                'Authorization': `Bearer ${token}`,
            }
        })
        await loadEntries()
    } catch (err) {
        console.error('방명록 삭제 실패:', err.response?.data || err.message)
        alert('방명록 삭제에 실패했습니다.')
    }
}

const formatDate = (datetimeStr) => {
    const date = new Date(datetimeStr)
    return date.toLocaleString()
}

const getEmojisByCategory = (category) => {
    return emojiMap[category] || []
}

onMounted(async () => {
    await loadEntries()
    try {
        const { data } = await axios.get('/api/accounts/current/', {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        })
        currentUser.value = data.username
    } catch (error) {
        console.error('현재 사용자 정보 불러오기 실패:', error)
    }
})
</script>

<style scoped>
/* 마이페이지 흰 패널을 가득 채운다(안쪽 카드, 폭 제한 없음) */
.guestbook-container {
    width: 100%;
    padding: 0.25rem;
}

h4 {
    margin: 0 0 1.2rem;
    padding-bottom: 0.7rem;
    font-weight: 700;
    font-size: 1.25rem;
    color: #2f3a33;
    border-bottom: 2px solid #5f7a69;
}

.emoji-selector {
    background-color: #fff;
    border: 1px solid #dfe5e0;
    border-radius: 10px;
    margin-bottom: 1.4rem;
    overflow: hidden;
}

.emoji-tabs {
    display: flex;
    background-color: #f4f7f4;
    border-bottom: 1px solid #dfe5e0;
}

.tab-btn {
    flex: 1;
    padding: 12px;
    border: none;
    background: none;
    cursor: pointer;
    font-weight: 500;
    color: #5b6760;
    transition: all 0.2s ease;
    position: relative;
}

.tab-btn:hover { color: #2f3a33; background-color: #ebf0ec; }
.tab-btn:focus { outline: none; }

.tab-btn.active {
    color: #3f5a4a;
    font-weight: 700;
    background-color: white;
}

.tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #5f7a69;
}

.emoji-content {
    padding: 16px;
    min-height: 90px;
}

.emoji-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
}

.emoji-item {
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
    text-align: center;
    padding: 8px;
    border-radius: 8px;
    background-color: #f4f7f4;
}

.emoji-item:hover {
    transform: scale(1.12);
    background-color: #e3ebe5;
}

@media (max-width: 700px) {
    .emoji-grid { grid-template-columns: repeat(4, 1fr); }
}

/* 애니메이션 */
.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

.guestbook-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 420px;
    overflow-y: auto;
}

.guestbook-list::-webkit-scrollbar { width: 8px; }
.guestbook-list::-webkit-scrollbar-track { background: #eef2ee; border-radius: 4px; }
.guestbook-list::-webkit-scrollbar-thumb { background: #b4c3b8; border-radius: 4px; }
.guestbook-list::-webkit-scrollbar-thumb:hover { background: #5f7a69; }

.guestbook-entry {
    background-color: #fff;
    padding: 14px 16px;
    border: 1px solid #dfe5e0;
    border-radius: 10px;
}

.entry-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.emoji {
    font-size: 2.2rem;
    line-height: 1;
}

.entry-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.username { font-weight: 700; color: #2f3a33; }
.timestamp { font-size: 0.85rem; color: #7b867e; }

.delete-btn {
    padding: 5px 12px;
    background: transparent;
    color: #b3413f;
    border: 1.5px solid #d9a9a8;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
}

.delete-btn:hover { background: #b3413f; color: #fff; border-color: #b3413f; }
</style>
