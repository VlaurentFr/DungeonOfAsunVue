<script lang="ts" setup>
  import { useScroll } from '@vueuse/core'
  import { computed, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import ARTICLES from '@/data/articles_index.json'
  import WikiAsideMenu from '@/components/WikiAsideMenu.vue'
  import WikiBreadcrumbs from '@/components/WikiBreadcrumbs.vue'
  import { useViewArticle } from '@/composables/useViewArticle'
  import { getImageUrl } from '@/composables/useImages'

  const isDisplayed = ref(true)
  const { directions } = useScroll(document)

  watch(directions, (newValue) => {
    if (newValue) {
      if (newValue.top) {
        isDisplayed.value = true
      } else if (newValue.bottom) {
        isDisplayed.value = false
      }
    }
  })

  const filters = ref<string[]>([])
  const comp__ARTICLES = computed(() => {
    if (filters.value.length === 0) return ARTICLES.filter((article) => article.type === 'histoire')
    else
      return ARTICLES.filter((article) => article.type === 'histoire').filter(
        (article) => article.tag && filters.value.includes(article.tag)
      )
  })

  const filterArticles = (tag: string) => {
    if (filters.value.includes(tag)) {
      filters.value = filters.value.filter((t) => t !== tag)
    } else {
      filters.value.push(tag)
    }
  }

  const { isConsulted } = useViewArticle()
</script>

<template>
  <WikiAsideMenu></WikiAsideMenu>

  <article id="wiki_container">
    <WikiBreadcrumbs></WikiBreadcrumbs>
    <section id="wiki_head">
      <h4>Une chronologie</h4>
      <h5>de sang, de pactes et de révolte</h5>
      <p>Découvrez l'histoire de Dungeon of Asun, de la création du monde à nos jours</p>
    </section>
    <section id="wiki_filters">
      <div>
        <h4>FILTRES</h4>
      </div>
      <div id="filtre_tags">
        <p
          :class="[{ active: filters.includes('Dungeon Master') }, 'tag-dm']"
          @click="() => filterArticles('Dungeon Master')"
        >
          Dungeon Master
        </p>
        <p
          :class="[{ active: filters.includes('Public') }, 'tag-public']"
          @click="() => filterArticles('Public')"
        >
          Public
        </p>
      </div>
    </section>
    <section id="wiki_articles">
      <div>
        <h4>ARTICLES</h4>
      </div>
      <div>
        <ul class="grid-container">
          <li
            v-for="article in comp__ARTICLES"
            :key="article.url"
            class="grid-item"
          >
            <RouterLink :to="{ path: article.url + '/' + article.id }">
              <img :src="getImageUrl(article.image)" />
              <div
                v-if="article.tag"
                :class="{
                  'tag-dm': article.tag === 'Dungeon Master',
                  'tag-public': article.tag === 'Public'
                }"
              >
                <p>{{ article.tag }}</p>
              </div>

              <p
                class="consulted"
                v-if="isConsulted(article.type, article.id)"
              >
                <span><i class="far fa-eye"></i> Déjà vu</span>
              </p>
              <h5>{{ article.title }}</h5>
              <p>{{ article.description }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<style lang="css" scoped>
  .consulted {
    position: absolute;
    right: 16px;
    border: 1px solid white;
    filter: drop-shadow(2px 4px 6px black);
    background-color: #1c181a !important;
    border-radius: 4px;
    color: white !important;
    padding: 4px;
  }

  .grid-container {
    columns: 1;
    column-gap: 1rem;
  }

  @media (min-width: 640px) {
    .grid-container {
      columns: 2;
    }
  }

  @media (min-width: 1024px) {
    .grid-container {
      columns: 3;
    }
  }

  .grid-item {
    break-inside: avoid;
    display: block;
    margin-bottom: 1rem;
  }

  .grid-item p {
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* number of lines to show */
    line-clamp: 6;
    -webkit-box-orient: vertical;
  }

  #wiki_head {
    margin-bottom: 32px;
  }

  #wiki_container #wiki_head h4 {
    font-size: 2.2rem;
    font-weight: bold;
    color: white;
    font-family: var(--font-display);
  }
  #wiki_container #wiki_head h5 {
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    font-family: var(--font-ui);
  }

  article {
    margin-left: 250px;
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
    /* transform: skewX(4deg); */
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
    border: 1px solid #11151d;
    border-radius: 4px;
    transition: all 300ms ease-in-out;
    background: linear-gradient(100deg, rgba(201, 47, 24, 0.14) 0%, #1c181a 42%);
  }

  #wiki_articles ul li a:hover {
    /* border: 1px solid var(--secondaryColor); */
    background: linear-gradient(100deg, rgba(201, 47, 24, 0.42) 0%, rgba(201, 47, 24, 0.12) 100%);
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
    color: var(--red-text);
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
    border: 1px solid #7a0e13;
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
    background-color: #7a0e13;
    color: white !important;
    padding: 4px 8px;
    border-radius: 4px;
  }

  a .tag-public {
    border: 1px solid var(--secondaryColor);
    color: white !important;
    padding: 4px 8px;
    border-radius: 4px;
    transform: skewX(16deg);
    width: fit-content;
  }
  a .tag-dm {
    border: 1px solid #7a0e13;
    color: white !important;
    padding: 4px 8px;
    border-radius: 4px;
    transform: skewX(16deg);
    width: fit-content;
  }

  a .tag-dm p,
  a .tag-public p {
    color: white !important;
    transform: skewX(-16deg);
  }
</style>
