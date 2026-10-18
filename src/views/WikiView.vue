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
  <WikiAsideMenu></WikiAsideMenu>
  <article id="wiki_container">
    <section id="wiki_head">
      <h4>Le monde d'Asun </h4>
      <h5>Un pacte de sang, une ombre inconnue et un dieu banni</h5>
      <p>Les dieux d'Asun protègent le monde au prix du sacrifice humain. Mais Neien, le dieu de la lumière, a refusé ce pacte et prépare une résistance silencieuse parmi les peuples.</p>
    </section>
    <section id="wiki_categories">
      <div>
        <h4>CATEGORIES</h4>
      </div>
      <div>
        <ul>
          <li><RouterLink to="/wiki-univers">
            <i class="fas fa-globe-europe"></i>
            <div>
              <h5>Univers</h5>
              <p>Découvrez l'univers de Dungeon of Asun, sa cosmologie et ces divinités</p>
            </div>
          </RouterLink></li>
          <li><RouterLink to="/wiki-histoire">
            <i class="fas fa-book"></i>
            <div>
              <h5>Histoire</h5>
              <p>Découvrez l'histoire de Dungeon of Asun, de la création du monde à nos jours</p>
            </div>
          </RouterLink></li>
          <li><RouterLink to="/wiki-geographie">
           <i class="fas fa-map-marked-alt"></i>
            <div>
              <h5>Geographie</h5>
              <p>Découvrez la géographie de Dungeon of Asun, ses continents et ses régions</p>
            </div>
          </RouterLink></li>
          <li><RouterLink to="/wiki-peuples">
            <i class="fas fa-users"></i>
            <div>
              <h5>Peuples</h5>
              <p>Découvrez les peuples de Dungeon of Asun, leurs cultures et leurs sociétés</p>
            </div>
          </RouterLink></li>
          <li><RouterLink to="/wiki-factions">
            <i class="fas fa-user-shield"></i>
            <div>
              <h5>Factions</h5>
              <p>Découvrez les factions de Dungeon of Asun, leurs objectifs et leurs relations</p>
            </div>
          </RouterLink></li>
          <li><RouterLink to="/wiki-cultes">
            <i class="fas fa-praying-hands"></i>
            <div>
              <h5>Cultes et religions</h5>
              <p>Découvrez les cultes et religions de Dungeon of Asun, leurs croyances et leurs pratiques</p>
            </div>
          </RouterLink></li>
          <li><RouterLink to="/wiki-personnages">
            <i class="fas fa-user"></i>
            <div>
              <h5>Personnages</h5>
              <p>Découvrez les personnages de Dungeon of Asun, leurs histoires et leurs caractéristiques</p>
            </div>
          </RouterLink></li>
          <li><RouterLink to="/wiki-monstres">
            <i class="fas fa-skull"></i>
            <div>
              <h5>Créatures</h5>
              <p>Découvrez les monstres et créatures de Dungeon of Asun, leurs habitats et leurs comportements</p>
            </div>
          </RouterLink></li>
        </ul>
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
  font-family: var(--font-display);
}

#wiki_container #wiki_head h5 {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  font-family: var(--font-ui);
}

article {
  margin-left: 250px;
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
  width: calc(50% - 10.666px);
  transition: all 0.3s;
}

#wiki_categories ul li a {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px 86px 16px 16px;
  height: 100%;
  transform: skewX(16deg);
  border: 1px solid #11151D;
  border-radius: 4px;
  background: linear-gradient(100deg, rgba(201, 47, 24, 0.14) 0%, #1c181a 42%);
}

#wiki_categories ul li a svg {
  background-color: rgba(201, 47, 24, 0.14);
  border-radius: 50%;
  padding: 16px;
  width: 48px;
  height: 48px;
  font-size: 4px;
  transform: skewX(-16deg);
  color: var(--red-text);
} 

#wiki_categories ul li a:hover {
  /* border: 1px solid var(--secondaryColor); */
    background: linear-gradient(-100deg, rgba(201, 47, 24, 0.42) 0%, rgba(201, 47, 24, 0.12) 100%);

}

#wiki_categories ul li h5 {
  margin: 0 0 0 8px;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--red-text);
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