import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import { getUserProfile } from '@/utils/mockData'

// 데모: 원본 화면 캡처와 같은 "로그인된 상태"로 시작한다 (데모 계정 test)
try {
  if (!localStorage.getItem('accessToken')) {
    localStorage.setItem('accessToken', 'demo-token')
    localStorage.setItem('loginId', 'test')
    localStorage.setItem('user', JSON.stringify(getUserProfile('test')))
  }
} catch {}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
