<template>
  <div class="book-search d-flex flex-column gap-3 mb-4">
    <div class="d-flex align-items-center gap-2">
      <div class="field-dd" ref="dd">
        <button type="button" class="field-btn" :class="{ open }" @click="open = !open" aria-haspopup="listbox" :aria-expanded="open">
          <span>{{ currentLabel }}</span>
          <i class="fas fa-chevron-down caret"></i>
        </button>
        <ul v-if="open" class="field-menu" role="listbox">
          <li v-for="o in options" :key="o.value" role="option" :aria-selected="o.value === localSearchField"
              :class="{ active: o.value === localSearchField }" @click="pick(o.value)">
            {{ o.label }}
          </li>
        </ul>
      </div>

      <input
        type="text"
        v-model="localSearchQuery"
        class="form-control search-input"
        :placeholder="placeholderText"
        @input="onInput"
        autocomplete="off"
      />
    </div>

    <CategoriesList v-model:category="localSelectedCategory" />
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import debounce from 'lodash.debounce'
import CategoriesList from '@/components/CategoriesList.vue'

const emit = defineEmits(['update:searchQuery', 'update:searchField', 'update:selectedCategory', 'triggerSearch'])

const props = defineProps({
  searchQuery: String,
  selectedCategory: String,
  searchField: String
})

// 로컬 상태로 복사
const localSearchQuery = ref(props.searchQuery || '')
const localSearchField = ref(props.searchField || 'all')
const localSelectedCategory = ref(props.selectedCategory)

// 검색 기준 드롭다운
const options = [
  { value: 'all', label: '전체' },
  { value: 'title', label: '책 제목' },
  { value: 'author', label: '저자' },
  { value: 'publisher', label: '출판사' },
]
const open = ref(false)
const dd = ref(null)
const currentLabel = computed(() => options.find(o => o.value === localSearchField.value)?.label || '전체')
const pick = (v) => { localSearchField.value = v; open.value = false }
const onDocClick = (e) => { if (dd.value && !dd.value.contains(e.target)) open.value = false }
onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))

// 검색어 변경 시 debounce로 emit
const emitSearchQuery = debounce(() => {
  emit('update:searchQuery', localSearchQuery.value)
  emit('update:searchField', localSearchField.value)
  emit('triggerSearch')
}, 300)

const onInput = () => {
  emitSearchQuery()
}

// 검색 필드 변경 감지
watch(localSearchField, () => {
  emit('update:searchField', localSearchField.value)
  emit('triggerSearch')
})

// 카테고리 변경 감지
watch(localSelectedCategory, (newVal) => {
  emit('update:selectedCategory', newVal)
  emit('triggerSearch')
})

const placeholderText = computed(() => {
  switch (localSearchField.value) {
    case 'title': return '책 제목을 입력하세요'
    case 'author': return '저자 이름을 입력하세요'
    case 'publisher': return '출판사를 입력하세요'
    default: return '검색어를 입력하세요'
  }
})
</script>

<style scoped>
.field-dd { position: relative; flex: none; }
.field-btn {
  display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;
  min-width: 96px; padding: 0.375rem 0.75rem;
  background: #fff; color: #333; border: 1px solid #dee2e6; border-radius: 8px;
  font-size: 1rem; line-height: 1.5; cursor: pointer;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.field-btn:hover { border-color: #adb5bd; }
.field-btn.open, .field-btn:focus-visible { outline: none; border-color: #3ea6ff; box-shadow: 0 0 0 3px rgba(62, 166, 255, 0.2); }
.caret { font-size: 0.7rem; color: #868e96; transition: transform 0.15s; }
.field-btn.open .caret { transform: rotate(180deg); }
.field-menu {
  position: absolute; z-index: 20; top: calc(100% + 4px); left: 0; min-width: 100%;
  margin: 0; padding: 4px; list-style: none;
  background: #fff; border: 1px solid #dee2e6; border-radius: 8px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}
.field-menu li { padding: 0.4rem 0.75rem; border-radius: 6px; color: #333; cursor: pointer; white-space: nowrap; }
.field-menu li:hover { background: #f1f3f5; }
.field-menu li.active { background: #e7f1ff; color: #0b5ed7; font-weight: 600; }
</style>
