<template>
  <aside :class="{'hasNavbar': hasNavbar}">
    <h3>Base de connaissances</h3>
    <ul>
      <li><RouterLink to="/wiki" :class="{'active': route.name === 'wiki'}"><span>Accueil</span></RouterLink></li>
      <li><RouterLink to="/wiki-univers" :class="{'active': route.path.includes('wiki-univers')}"><span>Univers</span><span>{{ ARTICLES.filter(a => a.type === 'univers').length }}</span></RouterLink></li>
      <li><RouterLink to="/wiki-histoire" :class="{'active': route.path.includes('wiki-histoire')}"><span>Histoire</span><span>{{ ARTICLES.filter(a => a.type === 'histoire').length }}</span></RouterLink></li>
      <li><RouterLink to="/wiki-geographie" :class="{'active': route.path.includes('wiki-geographie')}"><span>Geographie</span><span>{{ ARTICLES.filter(a => a.type === 'geographie').length }}</span></RouterLink></li>
      <li><RouterLink to="/wiki-peuples" :class="{'active': route.path.includes('wiki-peuples')}"><span>Peuples</span><span>{{ ARTICLES.filter(a => a.type === 'peuple').length }}</span></RouterLink></li>
      <li><RouterLink to="/wiki-factions" :class="{'active': route.path.includes('wiki-factions')}"><span>Factions</span><span>{{ ARTICLES.filter(a => a.type === 'factions').length }}</span></RouterLink></li>
      <li><RouterLink to="/wiki-cultes" :class="{'active': route.path.includes('wiki-cultes')}"><span>Cultes et religions</span><span>{{ ARTICLES.filter(a => a.type === 'cultes').length }}</span></RouterLink></li>
      <li><RouterLink to="/wiki-personnages" :class="{'active': route.path.includes('wiki-personnages')}"><span>Personnages</span><span>{{ ARTICLES.filter(a => a.type === 'personnages').length }}</span></RouterLink></li>
      <li><RouterLink to="/wiki-monstres" :class="{'active': route.path.includes('wiki-monstres')}"><span>Monstres et Créatures</span><span>{{ ARTICLES.filter(a => a.type === 'monstres').length }}</span></RouterLink></li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import ARTICLES from '@/data/articles_index.json'
import { hasNavbar } from '@/composables/useNavbar';

const route = useRoute()
</script>

<style lang="css" scoped>

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

aside ul li a {
  display: flex;
  justify-content: space-between;
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
</style>