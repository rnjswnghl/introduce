<template>
  <form @submit.prevent="submitProfileEdit" class="signup-form">

    <div class="name">이름(First name)</div>
    <input v-model.trim="form.first_name" placeholder="이름(First name)" required />

    <div class="name">성(Last name)</div>
    <input v-model.trim="form.last_name" placeholder="성(Last name)" required />

    <div class="name">이메일</div>
    <input type="email" v-model.trim="form.email" placeholder="이메일" required />

    <GenderSelector v-model="form.gender" />

    <div class="name">선호하는 카테고리</div>
    <div class="category-selector">
      <div v-for="category in categories" :key="category.id" class="category-item">
        <input
          type="checkbox"
          :id="'category-' + category.id"
          :value="category.id"
          v-model="form.favorite_category_ids"
        />
        <label :for="'category-' + category.id">{{ category.name }}</label>
      </div>
    </div>

    <div class="name">프로필 사진</div>
    <input type="file" @change="onFileChange" accept="image/*" />

    <button type="submit" :disabled="loading">저장하기</button>
    <button type="button" class="btn-danger" @click="confirmDelete" :disabled="loading">
      회원 탈퇴
    </button>
  </form>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import GenderSelector from './GenderSelector.vue';
import api from '@/utils/api';

const props = defineProps({
  profile: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['updateProfile', 'accountDeleted']);

const form = ref({
  first_name: '',
  last_name: '',
  email: '',
  gender: 'M',
  photo: null,
  favorite_category_ids: [],
});

const loading = ref(false);
const categories = ref([]);

const fetchCategories = async () => {
  try {
    const { data } = await api.get('books/categories/');
    categories.value = data;
  } catch (error) {
    console.error('카테고리 목록을 불러오는데 실패했습니다:', error);
  }
};

watch(
  () => props.profile,
  (newProfile) => {
    if (newProfile) {
      form.value.first_name = newProfile.first_name || '';
      form.value.last_name = newProfile.last_name || '';
      form.value.email = newProfile.email || '';
      form.value.gender = newProfile.gender || 'M';
      form.value.favorite_category_ids = newProfile.favorite_categories?.map(cat => cat.id) || [];
    }
  },
  { immediate: true }
);

function onFileChange(event) {
  form.value.photo = event.target.files[0];
}

async function submitProfileEdit() {
  if (loading.value) return;
  loading.value = true;

  const formData = new FormData();
  formData.append('first_name', form.value.first_name);
  formData.append('last_name', form.value.last_name);
  formData.append('gender', form.value.gender);

  if (form.value.photo) {
    formData.append('photo', form.value.photo);
  }

  if (form.value.favorite_category_ids && form.value.favorite_category_ids.length > 0) {
    formData.append('favorite_category_ids', JSON.stringify(form.value.favorite_category_ids));
  } else {
    formData.append('favorite_category_ids', JSON.stringify([]));
  }

  try {
    await api.patch('accounts/profile/', formData);
    alert('프로필이 성공적으로 수정되었습니다.');
    emit('updateProfile');
  } catch (error) {
    console.error('프로필 수정 실패:', error);
    if (error.response && error.response.data) {
      alert('프로필 수정에 실패했습니다: ' + JSON.stringify(error.response.data));
    } else {
      alert('프로필 수정에 실패했습니다.');
    }
  } finally {
    loading.value = false;
  }
}

function confirmDelete() {
  if (loading.value) return;
  if (confirm('정말로 회원 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
    deleteAccount();
  }
}

async function deleteAccount() {
  loading.value = true;
  try {
    await api.delete('accounts/delete/');
    alert('회원 탈퇴가 완료되었습니다.');
    emit('accountDeleted');
  } catch (error) {
    console.error('회원 탈퇴 실패:', error);
    alert('회원 탈퇴에 실패했습니다.');
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchCategories();
});
</script>


<style scoped>
/* 마이페이지 흰 패널 안에서 카드를 또 만들지 않고, 폼을 그대로 펼친다 */
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  padding: 0.5rem 0 1rem;
  font-family: inherit;
}

.name {
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0.9rem 0 0.2rem;
  color: #2f3a33;
}
.name:first-child { margin-top: 0; }

/* type 속성이 없는 입력창까지 같은 모양으로 맞춘다 */
input:not([type='checkbox']):not([type='radio']):not([type='file']) {
  height: 42px;
  padding: 0 0.8rem;
  border: 1.5px solid #cbd3cd;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #222;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
input[type='file'] {
  padding: 8px 0.6rem;
  border: 1.5px solid #cbd3cd;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  background: #fff;
}

input:focus {
  border-color: #5f7a69;
  box-shadow: 0 0 0 3px rgba(95, 122, 105, 0.2);
  outline: none;
}

.category-selector {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 12px;
  margin: 0.3rem 0 0.5rem;
}

.category-item { display: flex; align-items: center; gap: 8px; }
.category-item input[type='checkbox'] { width: 18px; height: 18px; cursor: pointer; accent-color: #5f7a69; }
.category-item label { font-size: 0.9rem; color: #444; cursor: pointer; }

button[type='submit'],
button.btn-danger {
  height: 46px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 0.6rem;
}

button[type='submit'] {
  background-color: #5f7a69;
  color: #f6f1e1;
  border: none;
  margin-top: 1.2rem;
}
button[type='submit']:hover { background-color: #4d6556; }

button.btn-danger {
  background: transparent;
  color: #b3413f;
  border: 1.5px solid #d9a9a8;
}
button.btn-danger:hover { background: #b3413f; color: #fff; border-color: #b3413f; }
</style>
