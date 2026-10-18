<template>
  <aside :class="{ hasNavbar: hasNavbar }">
    <WikiSearch></WikiSearch>
    <ul>
      <li>
        <RouterLink
          to="/wiki"
          :class="{ active: route.name === 'wiki' }"
        >
          <div>
            <i class="fas fa-align-justify"></i>
            <p>Sommaire</p>
          </div>
          <span>{{ ARTICLES.length }}</span></RouterLink
        >
      </li>
    </ul>
    <h3>Categories</h3>
    <ul>
      <li>
        <RouterLink
          to="/wiki-univers"
          :class="{ active: route.path.includes('wiki-univers') }"
        >
          <div>
            <i class="fas fa-globe-europe"></i>
            <p>Univers</p>
          </div>
          <span>{{ ARTICLES.filter((a) => a.type === 'univers').length }}</span></RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/wiki-histoire"
          :class="{ active: route.path.includes('wiki-histoire') }"
        >
          <div>
            <i class="fas fa-book"></i>
            <p>Histoire</p>
          </div>
          <span>{{ ARTICLES.filter((a) => a.type === 'histoire').length }}</span></RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/wiki-geographie"
          :class="{ active: route.path.includes('wiki-geographie') }"
        >
          <div>
            <i class="fas fa-map-marked-alt"></i>
            <p>Geographie</p>
          </div>
          <span>{{ ARTICLES.filter((a) => a.type === 'geographie').length }}</span></RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/wiki-peuples"
          :class="{ active: route.path.includes('wiki-peuples') }"
        >
          <div>
            <i class="fas fa-users"></i>
            <p>Peuples</p>
          </div>
          <span>{{ ARTICLES.filter((a) => a.type === 'peuple').length }}</span></RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/wiki-factions"
          :class="{ active: route.path.includes('wiki-factions') }"
        >
          <div>
            <i class="fas fa-user-shield"></i>
            <p>Factions</p>
          </div>
          <span>{{ ARTICLES.filter((a) => a.type === 'faction').length }}</span></RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/wiki-cults"
          :class="{ active: route.path.includes('wiki-cults') }"
        >
          <div>
            <i class="fas fa-praying-hands"></i>
            <p>Cultes et religions</p>
          </div>
          <span>{{ ARTICLES.filter((a) => a.type === 'cult').length }}</span></RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/wiki-personnages"
          :class="{ active: route.path.includes('wiki-personnages') }"
        >
          <div>
            <i class="fas fa-user"></i>
            <p>Personnages</p>
          </div>
          <span>{{ ARTICLES.filter((a) => a.type === 'personnages').length }}</span></RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/wiki-monstres"
          :class="{ active: route.path.includes('wiki-monstres') }"
        >
          <div>
            <i class="fas fa-skull"></i>
            <p>Créatures</p>
          </div>
          <span>{{ ARTICLES.filter((a) => a.type === 'monstres').length }}</span></RouterLink
        >
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import ARTICLES from '@/data/articles_index.json'
  import { hasNavbar } from '@/composables/useNavbar'
  import WikiSearch from './WikiSearch.vue'

  const route = useRoute()
</script>

<style lang="css" scoped>
  aside {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height: 100%;
    color: var(--secondaryColor);
    /* border-right: 1px solid #737880; */
    transition: all 0.3s;
    overflow: hidden;
    z-index: 999;
  }

  aside.hasNavbar {
    top: 83px;
  }

  aside h3 {
    font-size: 0.8rem;
    margin-bottom: 24px;
    margin: 8px 16px;
    text-transform: uppercase;
  }

  aside ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    color: #737880;
    margin-left: 16px;
  }

  aside ul li a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    /* border-radius: 4px; */
    /* border: 1px solid #737880; */
    text-decoration: none;
    color: inherit;
    transform: skewX(16deg);
  }

  aside ul li a:hover {
    background: linear-gradient(100deg, rgba(201, 47, 24, 0.14) 0%, #1c181a 42%);
    color: var(--textColorWhite);
    /* transform: skewX(0); */
  }

  aside ul li a.active {
    background: linear-gradient(100deg, rgba(201, 47, 24, 0.42) 0%, rgba(201, 47, 24, 0.12) 100%);
    color: var(--textColorWhite);
  }

  aside ul li a.active svg {
    background: linear-gradient(100deg, rgba(201, 47, 24, 0.42) 0%, rgba(201, 47, 24, 0.12) 100%);
    color: var(--red-text);
  }

  span,
  svg,
  p {
    transform: skewX(-16deg);
  }

  aside ul li a div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  aside ul li a span:last-child {
    background-color: #11151d;
    color: white;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 0.6rem;
    border: 0.5px solid #737880;
  }
</style>
