<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ARTICLES from '@/data/articles_index.json'
import WikiSearch from '@/components/WikiSearch.vue';
import { hasNavbar } from '@/composables/useNavbar';
import WikiAsideMenu from '@/components/WikiAsideMenu.vue';

const route = useRoute()

</script>

<template>
  <WikiSearch></WikiSearch>

  <WikiAsideMenu></WikiAsideMenu>
  <article id="wiki_container">
    <section id="wiki_head">
      <h4>Le monde d'Asun : un pacte de sang, une ombre inconnue et un dieu banni</h4>
      <p>Les dieux d'Asun protègent le monde au prix du sacrifice humain. Mais Neien, le dieu de la lumière, a refusé ce pacte et prépare une résistance silencieuse parmi les peuples.</p>
    </section>
    <section id="wiki_categories">
      <div>
        <h4>CATEGORIES</h4>
      </div>
      <div>
        <ul>
          <li><RouterLink to="/wiki-univers">
            <h5>Univers</h5>
            <p>Découvrez l'univers de Dungeon of Asun, sa cosmologie et ces divinités</p>
          </RouterLink></li>
          <li><RouterLink to="/wiki-histoire">
            <h5>Histoire</h5>
            <p>Découvrez l'histoire de Dungeon of Asun, de la création du monde à nos jours</p>
          </RouterLink></li>
          <li><RouterLink to="/wiki-geographie">
            <h5>Geographie</h5>
            <p>Découvrez la géographie de Dungeon of Asun, ses continents et ses régions</p>
          </RouterLink></li>
          <li><RouterLink to="/wiki-peuples">
            <h5>Peuples</h5>
            <p>Découvrez les peuples de Dungeon of Asun, leurs cultures et leurs sociétés</p>
          </RouterLink></li>
          <li><RouterLink to="/wiki-factions">
            <h5>Factions</h5>
            <p>Découvrez les factions de Dungeon of Asun, leurs objectifs et leurs relations</p>
          </RouterLink></li>
          <li><RouterLink to="/wiki-cultes">
            <h5>Cultes et religions</h5>
            <p>Découvrez les cultes et religions de Dungeon of Asun, leurs croyances et leurs pratiques</p>
          </RouterLink></li>
          <li><RouterLink to="/wiki-personnages">
            <h5>Personnages</h5>
            <p>Découvrez les personnages de Dungeon of Asun, leurs histoires et leurs caractéristiques</p>
          </RouterLink></li>
          <li><RouterLink to="/wiki-monstres">
            <h5>Monstres et Créatures</h5>
            <p>Découvrez les monstres et créatures de Dungeon of Asun, leurs habitats et leurs comportements</p>
          </RouterLink></li>
        </ul>
      </div>
    </section>

    <section>
      <div>
        <h4>TAGS</h4>
      </div>
    </section>
  </article>
</template>

<style lang="css" scoped>
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

#wiki_categories {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
}

#wiki_categories ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}

#wiki_categories ul li {
  width: calc(33.333% - 10.666px);
  transition: all 0.3s;
}

#wiki_categories ul li a {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  height: 100%;
  transform: skewX(16deg);
  border: 1px solid #737880;
  border-radius: 4px;
  background-color: #11151D;
}

#wiki_categories ul li a:hover {
  border: 1px solid var(--secondaryColor);
}

#wiki_categories ul li h5 {
  margin: 0 0 0 8px;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--secondaryColor);
  transform: skewX(-16deg);
}

#wiki_categories ul li p {
  margin: 0;
  font-size: 0.8rem;
  color: #737880;
  flex: 1;
  transform: skewX(-16deg);
}
</style>