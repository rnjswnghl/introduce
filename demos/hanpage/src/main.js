import '@/mock/install'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/modal.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import api from '@/utils/api'  // ★ api 인스턴스 가져오기

const accessToken = localStorage.getItem('accessToken')
if (accessToken) {
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast)

app.mount('#app')

import('bootstrap/dist/js/bootstrap.bundle.min.js')
