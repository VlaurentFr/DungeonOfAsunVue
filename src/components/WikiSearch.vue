<template>
  <section id="wiki_search" :class="{'hasNavbar': hasNavbar, 'iconOnly': iconOnly}">
    <button @click="openSearch()"><i class="fas fa-search"></i>{{!iconOnly ? 'Rechercher un article...': ''}}</button>
  </section>
  
  <transition name="fade">
    <div  v-if="searchOpenned" class="backdrop">
      <OnClickOutside @trigger="closeSearch">
        <dialog open id="search_dialog" class="dialog">
          <div id="search_dialog_content">
            <div id="search_dialog_header">
              <i class="fas fa-search"></i>Rechercher un article...
            </div>
            <input v-model="searchQuery" type="text" ref="searchbar" id="searchBar" autocomplete="off" placeholder="Rechercher un article..."/>
            <ul ref="listeRef" class="list">
              <li v-for="article of comp__ARTICLES" :key="article.id">
                <RouterLink :to="article.url+'/'+article.id">
                  <div class="title_article">
                    <h5>{{ article.title }}</h5>
                    <div>
                      <p>{{ article.type }}</p>
                      <p class="tag">{{ article.tag }}</p>
                    </div>
                  </div>
                  <p>{{ article.description.slice(0,65) }} {{ article.description.length > 65 ? '...' : '' }}</p>
                </RouterLink>
              </li>
            </ul>
          </div>
        </dialog>
      </OnClickOutside>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { hasNavbar } from '@/composables/useNavbar';
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { OnClickOutside } from '@vueuse/components'
import ARTICLES from '@/data/articles_index.json'
import { useFocusWithin } from '@vueuse/core';
import { searchQuery } from '@/composables/useSearch';

defineProps({
  iconOnly: {
    type: Boolean,
    required: false,
    default: false
  }
})

const route = useRoute()
const router = useRouter()

watch(route, async () => {
  await nextTick()
  closeSearch()
})

const searchbar = ref<HTMLElement | null>(null)
const searchOpenned = ref(false)

const openSearch = async () => {
  searchOpenned.value = true
  await nextTick()
  if(searchbar.value) {
    searchbar.value.focus()
  }

}

const closeSearch = () => {
  searchOpenned.value = false
}
const listeRef = ref<HTMLElement | null>(null)
const index = ref(-1)   

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    closeSearch()
  } else if (event.key === 'Enter' && comp__ARTICLES.value.length && focusedSearchBar){
    router.push(comp__ARTICLES.value[0].url+'/'+comp__ARTICLES.value[0].id)
  } else if (event.key === 'ArrowUp') {
    if(index.value === 0 && listeRef.value?.querySelectorAll('a')) {
      index.value = listeRef.value?.querySelectorAll('a')?.length - 1|| 0
      
    } else {
      index.value--

    }

    listeRef.value?.querySelectorAll('a')?.[index.value].focus()
  } else if (event.key === 'ArrowDown' && listeRef.value?.querySelectorAll('a')) {
    if(index.value < listeRef.value?.querySelectorAll('a')?.length -1) {
      index.value++

    } else {
      index.value = 0
    }
    listeRef.value?.querySelectorAll('a')?.[index.value].focus()
  }
}
const { focused: focusedSearchBar } = useFocusWithin(searchbar)

watch(searchOpenned, (visible) => {
  if (visible) {
    window.addEventListener('keydown', handleKeydown)
  } else {
    window.removeEventListener('keydown', handleKeydown)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})

const comp__ARTICLES = computed(() => {
  if(searchQuery.value === '') return []
  else {
    return ARTICLES.filter(article => 
    article.description.toUpperCase()
      .includes(
        searchQuery.value.toUpperCase()
      ) || 
    article.title.toUpperCase()
      .includes(
        searchQuery.value.toUpperCase()
      ))
  }
})
</script>

<style lang="css" scoped>
.iconOnly {
  width: fit-content !important;
}
.iconOnly button {
  padding: 8px !important;
  border: none !important;
  color: white;
}
.title_article {
  display: flex;
  flex-direction: row !important;
  justify-content: space-between !important;
}

.title_article p {
  text-transform: uppercase;
  font-size: 0.8rem;
}

.title_article div {
  display: flex;
  flex-direction: row !important;
  gap: 8px;
  justify-content: flex-end !important;
}

.title_article .tag {
  border-radius: 8px;
  border: 1px solid var(--secondaryColor);
  padding: 0px 8px;
  text-transform: capitalize;
}

#wiki_search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: var(--heigtSearchBar);
  color: var(--textColorWhite);
  width: 100%;
  transition: all 0.3s;
  background-color: transparent;
  z-index: 999;
  cursor: pointer;
}

#wiki_search.hasNavbar {
  top: 83px;
}

#wiki_search a {
  color: inherit;
  text-decoration: none;
}

#wiki_search a:hover {
  color: var(--secondaryColor);
}

#wiki_search div ol li:last-child a {
  color: var(--secondaryColor)
}

#search_dialog_header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  color: var(--secondaryColor);
  gap: 8px;
}

button, input {
  background-color: transparent;
  color: #737880;
  border: none;
  border-radius: 4px;
  border: 1px solid #737880;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
}

#wiki_search button, input {
  padding: 8px 24px 8px 16px;
}

.dialog a {
  color: #737880;
  text-decoration: none;
}

.dialog li {
  border-top: 1px solid #737880;
  padding: 8px;
}

.dialog h5 {
  color: var(--secondaryColor);
  font-weight: bold;
}

#searchBar {
  width: 100%;
  margin-top: 8px;
}

.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  /* Animate backdrop */
  transition: background-color 300ms ease;
}

/* Dialog base */
.dialog {
  position: absolute;
  background: #11151D;
  left: calc(50% - 200px);
  top: 200px;
  border: 1px solid #737880;
  border-radius: 8px;
  padding: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  transition: transform 300ms ease,
    opacity 300ms ease;
  opacity: 1;
}

.dialog div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.list {
  max-height: 60vh;
  overflow: auto;
}

.dialog ul {
  padding: 0;
}

/* Default transition classes */
.fade-enter-active {
  animation: fadeIn 300ms ease forwards;
}

.fade-leave-active {
  animation: fadeOut 300ms ease forwards;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}

/* Alignement de la liste */
ol {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 8px;
}

#wiki_search li:not(:last-child)::after {
  content: ">";
  margin-left: 8px;
  color: #ccc;
}

/* Gestion du menu au survol (...) */
.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.ellipsis {
  padding: 0 4px;
  font-weight: bold;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 10;
  min-width: 120px;
}

.dropdown-item {
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  color: #333;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

/* Affichage au survol */
.dropdown:hover .dropdown-menu {
  display: flex;
  flex-direction: column;
}
</style>