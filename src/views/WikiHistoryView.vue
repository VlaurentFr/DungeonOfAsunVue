<script lang="ts" setup>
import { useScroll } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ARTICLES from '@/data/articles_index.json'
import WikiSearch from '@/components/WikiSearch.vue';
import WikiAsideMenu from '@/components/WikiAsideMenu.vue';

const isDisplayed = ref(true)
const route = useRoute()
const { directions } = useScroll(document)

watch(directions, (newValue) => {
  if(newValue){
    if(newValue.top) {
      isDisplayed.value = true;
    } else if(newValue.bottom) {
      isDisplayed.value = false;
    }
  }
})


// const ARTICLES = [
//   {
//     id: 1,
//     title: 'Les Temps Innommables',
//     description: "Les Temps Innommables désignent la période la plus ancienne de l'existence d'Asun. Elle précède toute histoire fiable, toute civilisation...",
//     image: '../assets/cosmic.png',
//     tag: 'Public',
//     url: '/wiki-histoire'
//   },
//   {
//     id: 2,
//     title: 'Les Temps Innommables',
//     description: "Les Temps Innommables ",
//     image: '../assets/cosmic.png',
//     tag: 'DM',
//     url: '/wiki-histoire'
//   },
// ]
const filters = ref<string[]>([])
const comp__ARTICLES = computed(() => {
  if(filters.value.length === 0) return ARTICLES.filter(article => article.type === 'histoire')
  else return ARTICLES.filter(article => article.type === 'histoire').filter(article => filters.value.includes(article.tag))
})

const filterArticles = (tag: string) => {
  if(filters.value.includes(tag)){
    filters.value = filters.value.filter(t => t !== tag)
  } else {
    filters.value.push(tag)
  }
}

const getImageUrl = (path: string) => {
  return new URL(`${path}`, import.meta.url).href
}
</script>

<template>
  <WikiSearch></WikiSearch>>

  <WikiAsideMenu></WikiAsideMenu>

  <article id="wiki_container" v-if="route.name === 'wiki-histoire'">
    <section id="wiki_head">
      <h4>Une chronologie de sang, de pactes et de révolte</h4>
      <p>Découvrez l'histoire de Dungeon of Asun, de la création du monde à nos jours</p>
    </section>
    <section id="wiki_filters">
       <div>
        <h4>FILTRES</h4>
      </div>
      <div id="filtre_tags">
        <p :class="[{ 'active': filters.includes('DM') }, 'tag-dm']" @click="() => filterArticles('DM')">DM</p>
        <p :class="[{ 'active': filters.includes('Public') }, 'tag-public']" @click="() => filterArticles('Public')">Public</p>
      </div>
    </section>
    <section id="wiki_articles">
      <div>
        <h4>ARTICLES</h4>
      </div>
      <div>
        <ul class="grid-container">
          <li v-for="article in comp__ARTICLES" :key="article.url" class="grid-item">
            <RouterLink :to="{path: article.url+ '/'+article.id}">
              <img :src="getImageUrl(article.image)"/>
              <h5>{{ article.title }}</h5>
              <p>{{ article.description }}</p>
              <p :class="`tag-${article.tag.toLowerCase()}`">{{ article.tag }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </article>

  <RouterView v-else>
  </RouterView>
</template>

<style lang="css" scoped>

#wiki_search {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: var(--heigtSearchBar);
  color: var(--textColorWhite);
  width: 100%;
  border-bottom: 1px solid #737880;
  transition: all 0.3s;
  background-color: #090C11;
}

#wiki_search.hasNavbar {
  top: 83px;
}

#wiki_search button {
  background-color: transparent;
  color: #737880;
  border: none;
  padding: 8px 64px 8px 16px;
  border-radius: 4px;
  border: 1px solid #737880;
  display: flex;
  align-items: center;
  gap: 8px;
}

aside {
  position: fixed;
  left: 0;
  top: var(--heigtSearchBar);
  width: 300px;
  height: 100%;
  color: var(--secondaryColor);
  padding: 8px 16px;
  border-right: 1px solid #737880;
  transition: all 0.3s;
}

aside.hasNavbar {
  top: calc(83px + var(--heigtSearchBar));
}

aside h3 {
  font-size: 0.8rem;
  margin-bottom: 24px;
  text-transform: uppercase;
}

aside ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #737880;
}

.grid-container {
  columns: 1;
  column-gap: 1rem;
}

@media (min-width: 640px) {
  .grid-container {
    columns: 3;
  }
}

@media (min-width: 1024px) {
  .grid-container {
    columns: 4;
  }
}

.grid-item {
  break-inside: avoid;
  display: block;
  margin-bottom: 1rem;
}

aside ul li a {
  display: block;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #737880;
  text-decoration: none;
  color: inherit;
  /* transform: skewX(16deg); */
  margin: 0px 16px 0px 8px;
}

aside ul li a:hover {
  background-color: var(--secondaryColor);
  color: var(--textColorWhite);
  /* transform: skewX(0); */
}

aside ul li a.active {
  background-color: var(--secondaryColor);
  color: var(--textColorWhite);
}

#wiki_head {
  margin-bottom: 32px;
}

#wiki_container #wiki_head h4 {
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
}

article {
  margin-left: 300px;
  padding: 32px 0px;
}

#wiki_articles {
  display: flex;
  flex-direction: column;
}

#wiki_container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

#wiki_container h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--secondaryColor);
  margin-bottom: 24px;
}

#wiki_articles ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}

#wiki_articles ul li {
  transition: all 0.3s;
}

#wiki_articles ul li a {
  position: relative;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  /* transform: skewX(16deg); */
  border: 1px solid #737880;
  border-radius: 4px;
  background-color: #11151D;
}

#wiki_articles ul li a:hover {
  border: 1px solid var(--secondaryColor);
}

#wiki_articles ul li a img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

#wiki_articles ul li h5 {
  margin: 0 0 0 8px;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--secondaryColor);
  /* transform: skewX(-16deg); */
}

#wiki_articles ul li p {
  margin: 0;
  font-size: 0.8rem;
  color: #737880;
  /* transform: skewX(-16deg); */
}

#filtre_tags {
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 16px;
}

p.tag-public {
  background-color: transparent;
  border: 1px solid var(--secondaryColor);
  color: white !important;
  padding: 4px 8px;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
}
p.tag-dm {
  background-color: transparent;
  border: 1px solid #7A0E13;
  color: white !important;
  padding: 4px 8px;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
}

p.tag-public.active {
  background-color: var(--secondaryColor);
  color: white !important;
  padding: 4px 8px;
  border-radius: 4px;
}
p.tag-dm.active {
  background-color: #7A0E13;
  color: white !important;
  padding: 4px 8px;
  border-radius: 4px;
}

a .tag-public {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: var(--secondaryColor);
  color: white !important;
  padding: 4px 8px;
  border-radius: 4px;
}
a .tag-dm {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #7A0E13;
  color: white !important;
  padding: 4px 8px;
  border-radius: 4px;
}
</style>