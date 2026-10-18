<script lang="ts" setup>
  import { useScroll } from '@vueuse/core'
  import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
  import { RouterLink, useRoute, useRouter } from 'vue-router'
  import ARTICLES from '@/data/articles_index.json'
  import { toast } from 'vue3-toastify'
  import WikiAsideMenu from '@/components/WikiAsideMenu.vue'
  import WikiBreadcrumbs from '@/components/WikiBreadcrumbs.vue'
  import { useViewArticle } from '@/composables/useViewArticle'
  import { getImageUrl } from '@/composables/useImages'
  import { useMarkArticle } from '@/composables/useMarkArticle'
  import { useShowSecret } from '@/composables/useShowSecret'

  const isDisplayed = ref(true)
  const route = useRoute()
  const router = useRouter()
  const { directions } = useScroll(document)
  const { isShowed, toggleSecret } = useShowSecret()
  const key = ref(0)

  const ARTICLE = ref<any>(null)
  const ARTICLE_BASE = ref<any>(null)

  watch(directions, (newValue) => {
    if (newValue) {
      if (newValue.top) {
        isDisplayed.value = true
      } else if (newValue.bottom) {
        isDisplayed.value = false
      }
    }
  })

  const isLoadingData = ref(false)
  const errorDetect = ref(false)
  const initData = (type: String) => {
    isLoadingData.value = true

    const articleId = route.params.id

    ARTICLE_BASE.value = ARTICLES.find(
      (article) => article.id === Number(articleId) && article.type === type
    )

    import(`@/data/articles/${type}/article_${articleId}.json`)
      .then((module) => {
        ARTICLE.value = module.default
      })
      .catch(() => {
        errorDetect.value = true
        router.push({ name: 'wiki' })
      })
      .finally(() => {
        isLoadingData.value = false
        if (!useViewArticle().isConsulted(type, articleId) && !errorDetect.value) {
          useViewArticle().consultArticle(type, articleId)
        }
      })
  }

  watch(route, (newValue) => {
    if (newValue.path.startsWith('/wiki-factions/')) initData('peuple')
  })

  onMounted(() => {
    initData('peuple')
  })

  onBeforeUnmount(() => {
    if (errorDetect.value) {
      toast.error('Article non trouvé', {
        theme: 'dark'
      })
    }
  })

  const { markArticle, markedArticle, unmarkArticle } = useMarkArticle()
</script>

<template>
  <WikiAsideMenu></WikiAsideMenu>

  <div
    id="wiki_container"
    v-if="ARTICLE_BASE && ARTICLE"
  >
    <WikiBreadcrumbs></WikiBreadcrumbs>
    <section id="wiki_head">
      <div class="tags">
        <div
          v-for="value in ARTICLE?.tags"
          :key="value"
        >
          <p>{{ value }}</p>
        </div>
      </div>
      <h3>{{ ARTICLE_BASE.title }}</h3>
      <div class="citation_banner">
        <p>"{{ ARTICLE?.citation }}"</p>
        <p>- {{ ARTICLE?.citation_author }}</p>
      </div>
    </section>
    <section id="article_presentation">
      <div>
        <img :src="getImageUrl(ARTICLE_BASE.image)" />
        <h4>Présentation</h4>
        <p>{{ ARTICLE_BASE.description }}</p>
      </div>
      <div class="aside_presentation">
        <img :src="getImageUrl(ARTICLE.image)" />
        <h4>« Les Cornues »</h4>
        <p>
          Classification <span>{{ ARTICLE.class }}</span>
        </p>
        <p>
          Taille <span>{{ ARTICLE.height }}</span>
        </p>
        <p>
          Âge max <span>{{ ARTICLE.age }}</span>
        </p>
        <p>
          Repartition <span>{{ ARTICLE.repart }}</span>
        </p>
        <p>
          Trait Principaux <span>{{ ARTICLE.trait }}</span>
        </p>
        <p>
          Statut <span>{{ ARTICLE.statut }}</span>
        </p>
        <button
          v-if="
            markedArticle.findIndex(
              (art: any) => ARTICLE_BASE.type === art.type && ARTICLE_BASE.id === art.id
            ) === -1
          "
          @click="markArticle(ARTICLE_BASE.type, ARTICLE_BASE.id)"
        >
          <i class="far fa-bookmark"></i> Ajouter aux signets
        </button>
        <button
          v-else
          @click="unmarkArticle(ARTICLE_BASE.type, ARTICLE_BASE.id)"
        >
          <i class="fas fa-bookmark"></i> Retirer des signets
        </button>
      </div>
    </section>
    <section id="wiki_article">
      <!-- <div id="wiki_summary">
        <p id="wiki_summary_title">SOMMAIRE</p>
        <ol>
          <li v-for="section in ARTICLE?.sections.filter((s: any) => s.title)" :key="section.title">
            <p @click="scrollTo(section.title)" :class="{ 'dm-infos': section.type === 'dm-banner' }">{{ section.title }}</p>
          </li>
        </ol>
      </div> -->

      <article
        v-for="(section, index) in ARTICLE?.sections"
        :key="section.title"
        :id="section.title"
        class="wiki_section"
      >
        <h4
          v-if="section.title?.length"
          :style="{ 'border-left-color': `${section.title_border}` }"
        >
          {{ section.title }}
        </h4>

        <p v-if="section.type === 'text'">{{ section.content }}</p>

        <img
          v-else-if="section.type === 'image'"
          :src="getImageUrl(section.content)"
        />

        <div
          v-else-if="section.type === 'dm-banner'"
          class="dm-banner"
        >
          <p class="subtitle">NOTE INTERDITE</p>
          <p
            v-if="isShowed(ARTICLE_BASE.type, ARTICLE_BASE.id, index)"
            :key="key"
          >
            {{ section.content }}
          </p>
          <div v-else>
            <p>
              Réservé de préférence au MJ, cela pourrais vous révéler des éléments de l'intrigue
            </p>
          </div>
          <button @click="toggleSecret(ARTICLE_BASE.type, ARTICLE_BASE.id, index), key++">
            {{ isShowed(ARTICLE_BASE.type, ARTICLE_BASE.id, index) ? 'Masquer' : 'Afficher' }}
          </button>
        </div>

        <div
          v-else-if="section.type === 'banner'"
          class="banner"
        >
          <p>{{ section.content }}</p>
          <p class="subtitle">{{ section.subtitle }}</p>
        </div>

        <div
          v-else-if="section.type === 'cards'"
          class="section_cards"
        >
          <div
            v-for="(sectionContent, index) in section.content"
            class="section_card"
            :key="index"
            :style="{ 'border-top': `4px solid ${sectionContent.color}` }"
          >
            <h6 :style="{ color: `${sectionContent.color}` }">{{ sectionContent.headline }}</h6>
            <h5>{{ sectionContent.title }}</h5>
            <p>{{ sectionContent.content }}</p>
          </div>
        </div>

        <div
          v-else-if="section.type === 'politique_list_long'"
          class="section_politique_list_long"
        >
          <div
            v-for="(sectionContent, index) in section.content"
            class="section_politique_list_item_long"
            :key="index"
          >
            <div class="section_politique_list_item_long_title">
              <h5>{{ sectionContent.title }}</h5>
              <h6 :style="{ color: sectionContent.color }">
                <span :style="{ backgroundColor: sectionContent.color }"></span
                >{{ sectionContent.headline }}
              </h6>
            </div>
            <p>{{ sectionContent.content }}</p>
          </div>
        </div>
      </article>
    </section>

    <h4 class="linked_articles">Articles liées</h4>
    <section id="article_cards">
      <RouterLink
        :to="ARTICLES.find((article) => article.id === id)?.url + '/' + id"
        v-for="id in ARTICLE?.link_articles"
        :key="id"
        class="article_card"
      >
        <div>
          <h4>{{ ARTICLES.find((article) => article.id === id)?.type }}</h4>
          <div class="tag">{{ ARTICLES.find((article) => article.id === id)?.tag }}</div>
        </div>
        <h5>{{ ARTICLES.find((article) => article.id === id)?.title }}</h5>
        <p>{{ ARTICLES.find((article) => article.id === id)?.description }}</p>
        <p>Lire l'article</p>
      </RouterLink>
    </section>
  </div>
</template>

<style lang="css" scoped>
  #wiki_container {
    margin-left: 250px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  #wiki_head {
    margin-bottom: 32px;
  }

  #wiki_container #wiki_head h3 {
    font-size: 2.8rem;
    font-weight: bold;
    color: white;
    font-family: var(--font-display);
  }

  .tags {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-bottom: 16px;
  }
  .tags div {
    border: 1px solid #737880;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 8px;
    font-size: 0.8rem;
    text-transform: uppercase;
    transform: skewX(16deg);
  }

  .tags p {
    transform: skewX(-16deg);
  }

  .tags div:nth-child(1) {
    border: 1px solid var(--red-text);
  }

  .sub_tags {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
  }

  .sub_tags div {
    /* background: linear-gradient(100deg, rgba(201, 47, 24, 0.42) 0%, rgba(201, 47, 24, 0.12) 100%); */
    color: var(--textColorWhite);
    padding: 4px 16px;
  }

  .sub_tags span {
    color: var(--red-text);
  }

  .citation_banner {
    background-color: #7a0e1330;
    border-left: 4px solid #7a0e13;
    color: #737880;
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .citation_banner p:first-child {
    font-family: var(--font-display);
    color: white;
    font-size: 1rem;
    max-width: none;
  }
  .citation_banner p:last-child {
    font-family: var(--font-ui);
    font-size: 0.6rem;
    text-transform: uppercase;
  }

  #article_presentation {
    display: flex;
    gap: 16px;
  }

  #article_presentation h4 {
    font-size: 2rem;
    font-family: var(--font-display);
    color: white;
    border-radius: 4px;
    text-transform: none;
    margin-bottom: 12px;
  }

  #article_presentation div {
    display: flex;
    gap: 24px;
    white-space: pre-line;
    flex-direction: column;
  }
  #article_presentation div:not(.aside_presentation) p::first-letter {
    initial-letter: 2;
    font-weight: bold;
    color: var(--red-text);
    margin-right: 4px;
    font-family: var(--font-display);
  }

  #article_presentation div img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .aside_presentation {
    min-width: 320px;
    border-radius: 4px;
    background-color: #1a1c1e;
    gap: 0px !important;
    height: fit-content;
    border-top: #7a0e13 solid 4px;
  }
  .aside_presentation img {
    height: 120px !important;
    object-fit: contain !important;
  }

  .aside_presentation h4 {
    padding: 8px 16px;
    font-size: 1.2rem !important;
    color: var(--red-text) !important;
    border: none !important;
    text-align: center;
  }
  .aside_presentation p {
    padding: 8px 16px;
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: white;
    border: 0.5px solid #737880;
  }
  .aside_presentation span {
    font-weight: bold;
    justify-self: end;
    border-left: 1px solid white;
    width: 100%;
    text-align: right;
    padding-left: 24px;
    color: var(--red-text);
  }
  .aside_presentation p:nth-child(even) {
    background-color: #1c181a;
  }
  .aside_presentation button {
    background: linear-gradient(100deg, rgba(201, 47, 24, 0.42) 0%, rgba(201, 47, 24, 0.12) 100%);
    color: var(--textColorWhite);
    border: none;
    border-radius: 4px;
    padding: 8px 48px;
    width: fit-content;
    margin: 16px;
    align-self: center;
    cursor: pointer;
  }

  #wiki_article {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .wiki_section h4 {
    font-size: 2rem;
    font-family: var(--font-display);
    color: white;
    border-radius: 4px;
    text-transform: none;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  .banner {
    background-color: #c2660a30;
    border-left: 4px solid #c2660a;
    color: white;
    padding: 16px;
    border-radius: 4px;
    margin: 16px 0;
  }

  .banner > p,
  .dm-banner > p {
    transform: none;
  }

  .dm-banner div {
    border: 1px dashed#7a0e13;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .dm-banner button {
    background-color: transparent;
    border: 1px solid#7a0e13;
    color: white;
    font-size: 1rem;
    border-radius: 4px;
    padding: 4px 8px;
    margin-top: 16px;
  }

  .section_cards {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .section_card {
    background-color: #1a1c1e;
    padding: 16px;
    border-radius: 4px;
    flex: 1;
    min-width: 320px;
  }
  .section_card > p {
    transform: none;
  }
  .section_card h6 {
    color: var(--red-text);
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  .section_card h5 {
    color: white;
    font-size: 1.2rem;
    font-family: var(--font-display);
  }

  .section_politique_list_item_long {
    border-bottom: 1px solid #737880;
    padding: 16px;
    align-items: center;
  }
  .section_politique_list_item_long_title {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }

  .section_politique_list_item_long span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .section_politique_list_item_long p {
    color: var(--textColorWhite);
    font-size: 1rem;
  }
  .section_politique_list_item_long h6 {
    color: var(--textColorWhite);
    font-size: 1rem;
  }
  .section_politique_list_item_long h5 {
    color: var(--textColorWhite);
    font-family: var(--font-display);
    font-size: 1rem;
    text-decoration: underline;
  }

  .linked_articles {
    font-size: 1.6rem;
    color: var(--red-text);
    font-family: var(--font-display);
  }
  #article_cards {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .article_card {
    padding: 16px;
    background: linear-gradient(100deg, rgba(201, 47, 24, 0.14) 0%, #1c181a 42%);
    /* border: 1px solid #737880; */
    border-radius: 8px;
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 320px;
  }

  .article_card div {
    display: flex;
    justify-content: space-between;
  }

  .article_card .tag {
    border-radius: 8px;
    border: 1px solid var(--secondaryColor);
    color: var(--secondaryColor);
    padding: 4px 8px;
    font-size: 0.6rem;
    height: fit-content;
  }
  .article_card h4 {
    margin-bottom: 8px !important;
    text-transform: uppercase;
    color: var(--red-text);
  }
  .article_card h5 {
    font-size: 1.2rem;
    margin-top: 8px;
  }
  .article_card p:last-child {
    color: var(--secondaryColor);
    font-weight: bolder;
    margin-top: auto;
    align-self: flex-end;
  }

  #article_cards a {
    text-decoration: none;
    color: inherit;
  }

  #article_cards .tags {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-bottom: 16px;
  }

  #article_cards .tags p {
    display: inline-block;
    background-color: var(--secondaryColor);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 8px;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  #article_cards .tags p:nth-child(1) {
    background-color: #7a0e13;
  }

  .banner .subtitle {
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--secondaryColor);
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .dm-banner {
    background-color: #7a0e1330;
    border-left: 4px solid #7a0e13;
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
    background-color: #11151d;
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
    color: #7a0e13;
  }
</style>
