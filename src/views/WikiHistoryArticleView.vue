<script lang="ts" setup>
import { useScroll } from '@vueuse/core';
import { computed, onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import ARTICLES from '@/data/articles_index.json'
import WikiSearch from '@/components/WikiSearch.vue';

const isDisplayed = ref(true)
const route = useRoute()
const router = useRouter()
const { directions } = useScroll(document)

const ARTICLE = ref<any>(null)
const ARTICLE_BASE = ref<any>(null)

watch(directions, (newValue) => {
  if(newValue){
    if(newValue.top) {
      isDisplayed.value = true;
    } else if(newValue.bottom) {
      isDisplayed.value = false;
    }
  }
})

const initData = () => {
    const articleId = route.params.id
  
    ARTICLE_BASE.value = ARTICLES.find(article => article.id === Number(articleId))
  
    import(`@/data/articles/histoire/article_${articleId}.json`).then((module) => {
          ARTICLE.value = module.default
      }).catch(() => router.push({name: 'wiki'}))
}

watch(route, () => {
  initData()
})

onMounted(() => {
  initData()
})

const getImageUrl = (path: string) => {
  return new URL(`${path}`, import.meta.url).href
}

const scrollTo = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <!-- <WikiSearch></WikiSearch>

  <aside :class="{'hasNavbar': isDisplayed}">
    <h3>Base de connaissances</h3>
    <ul>
      <li><RouterLink to="/wiki" :class="{'active': route.name === 'wiki'}"><span>Accueil</span></RouterLink></li>
      <li><RouterLink to="/wiki-univers" :class="{'active': route.path.includes('wiki-univers')}"><span>Univers</span></RouterLink></li>
      <li><RouterLink to="/wiki-histoire" :class="{'active': route.path.includes('wiki-histoire')}"><span>Histoire</span></RouterLink></li>
      <li><RouterLink to="/wiki-geographie" :class="{'active': route.path.includes('wiki-geographie')}"><span>Geographie</span></RouterLink></li>
      <li><RouterLink to="/wiki-peuples" :class="{'active': route.path.includes('wiki-peuples')}"><span>Peuples</span></RouterLink></li>
      <li><RouterLink to="/wiki-factions" :class="{'active': route.path.includes('wiki-factions')}"><span>Factions</span></RouterLink></li>
      <li><RouterLink to="/wiki-cultes" :class="{'active': route.path.includes('wiki-cultes')}"><span>Cultes et religions</span></RouterLink></li>
      <li><RouterLink to="/wiki-personnages" :class="{'active': route.path.includes('wiki-personnages')}"><span>Personnages</span></RouterLink></li>
      <li><RouterLink to="/wiki-monstres" :class="{'active': route.path.includes('wiki-monstres')}"><span>Monstres et Créatures</span></RouterLink></li>
    </ul>
  </aside> -->

  <div id="wiki_container" v-if="ARTICLE_BASE">
    <section id="wiki_head">
      <div class="tags">
        <p v-for="value in ARTICLE?.tags" :key="value">{{ value }}</p>
      </div>
      <h4>{{ARTICLE_BASE.title}}</h4>
      <p>{{ ARTICLE?.citation }}</p>
    </section>
    <section id="wiki_article">
     <img :src="getImageUrl(ARTICLE_BASE.image)"/>
      <div id="wiki_summary">
        <p id="wiki_summary_title">SOMMAIRE</p>
        <ol>
          <li v-for="section in ARTICLE?.sections.filter((s: any) => s.title)" :key="section.title">
            <p @click="scrollTo(section.title)" :class="{ 'dm-infos': section.type === 'dm-banner' }">{{ section.title }}</p>
          </li>
        </ol>
      </div>
      <article v-for="section in ARTICLE?.sections" :key="section.title" :id="section.title" class="wiki_section">
        <h5 v-if="section.title?.length">{{ section.title }}</h5>
        <p v-if="section.type === 'text'">{{ section.content }}</p>
        <img v-else-if="section.type === 'image'" :src="getImageUrl(section.content)"/>
        <div v-else-if="section.type === 'dm-banner'" class="dm-banner">
          <p class="subtitle">NOTE INTERDITE</p>
          <p>{{ section.content }}</p>
        </div>
        <div v-else-if="section.type === 'banner'" class="banner">
          <p>{{ section.content }}</p>
          <p class="subtitle">{{ section.subtitle }}</p>
        </div>
      </article>
    </section>
    <section id="article_cards">
      <h4>Articles liées</h4>
      <RouterLink :to="ARTICLES.find(article => article.id === id)?.url+'/'+id" v-for="id in ARTICLE?.link_articles" :key="id" class="article_card">
        <h4>{{ ARTICLES.find(article => article.id === id)?.type }}</h4>
        <h5>{{ ARTICLES.find(article => article.id === id)?.title }}</h5>
        <p>{{ ARTICLES.find(article => article.id === id)?.description }}</p>
        <p>Lire l'article</p>
      </RouterLink>
    </section>
  </div>
</template>

<style lang="css" scoped>
#article_cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.article_card {
  padding: 16px;
  background-color: #11151D;
  border: 1px solid #737880;
  border-radius: 8px;
  cursor: pointer;
}
.article_card h4 {
  margin-bottom: 8px !important;
}
.article_card h5 {
  font-size: 1.2rem;
  margin-top: 8px;
}
.article_card p:last-child {
  color: var(--secondaryColor);
  font-weight: bolder;
  margin-top: 16px;
}

#article_cards a {
  text-decoration: none;
  color: inherit;
}

h5 {
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
  margin-top: 24px;
}
img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid #737880
}
.tags {
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 16px;
}

.tags p {
  display: inline-block;
  background-color: var(--secondaryColor);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.tags p:nth-child(1) {
  background-color: #7A0E13;
}

.banner {
  background-color: #C2660A30;
  border-left: 4px solid #C2660A;
  color: #737880;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.banner .subtitle {
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--secondaryColor);
  text-transform: uppercase;
  margin-bottom: 8px;
}

.dm-banner {
  background-color: #7A0E1330;
  border-left: 4px solid #7A0E13;
  color: #737880;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.dm-banner .subtitle {
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--secondaryColor);
  text-transform: uppercase;
  margin-bottom: 8px;
}

#wiki_summary {
  border: 1px solid #737880;
  padding: 16px;
  border-radius: 4px;
  background-color: #11151D;
  width: fit-content;
}

#wiki_summary_title {
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--secondaryColor);
  text-transform: uppercase;
  margin-bottom: 8px;
}

#wiki_summary ol li p:hover {
  color: var(--secondaryColor);
  cursor: pointer;
}
#wiki_summary ol li p.dm-infos {
  color: #7A0E13;
}

.wiki_section {
  white-space: pre-line;
}

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
#wiki_search a {
  color: inherit;
  text-decoration: none;
}

#wiki_search a:hover {
  color: var(--secondaryColor);
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

#wiki_search p > span {
  color: var(--secondaryColor);
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
  transition: all 0.3s;;
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
  border: 1px solid #737880;;
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

#wiki_container {
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
}
p.tag-dm {
  background-color: transparent;
  border: 1px solid #7A0E13;
  color: white !important;
  padding: 4px 8px;
  border-radius: 4px;
  width: fit-content;
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