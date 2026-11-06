<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
  
      <!-- ✅ 회원가입 버튼 추가 -->
      <p>계정이 없으신가요?
        <router-link to="/signup" class="signup-link">회원가입</router-link>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/stores/user'
  
  const username = ref('')
  const password = ref('')
  const router = useRouter()
  const userStore = useUserStore()
  
const handleLogin = async () => {
  console.log('handleLogin 호출됨');
  try {
    const success = await userStore.login({ username: username.value, password: password.value });
    console.log('login 결과:', success);
    if (success) {
      router.push('/');
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        alert('존재하지 않는 계정입니다.');
      } else {
        alert('로그인에 실패했습니다.');
      }
    } else {
      alert('로그인에 실패했습니다.');
    }
  }
};

  </script>
  
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 4rem auto;
    padding: 2.2rem 2rem 2rem;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin: 0 0 1.4rem;
    padding-bottom: 0.7rem;
    font-size: 1.5rem;
    color: #2f3a33;
    border-bottom: 2px solid #5f7a69;
  }

  input {
    display: block;
    width: 100%;
    height: 44px;
    margin-bottom: 0.9rem;
    padding: 0 0.85rem;
    border: 1.5px solid #cbd3cd;
    border-radius: 8px;
    font-size: 0.95rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  input:focus { outline: none; border-color: #5f7a69; box-shadow: 0 0 0 3px rgba(95, 122, 105, 0.2); }

  button {
    width: 100%;
    height: 46px;
    margin-top: 0.3rem;
    background-color: #5f7a69;
    border: none;
    border-radius: 8px;
    color: #f6f1e1;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  button:hover { background-color: #4d6556; }

  p { margin: 1.1rem 0 0; text-align: center; color: #555; }

  .signup-link {
    color: #3f5a4a;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: #7f9c8b;
    text-underline-offset: 3px;
  }
  </style>
