<script setup lang="ts">
import { noviceClasses, avancedClasses, masterClasses } from '@/mock/classesMock';

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>
<template>
<div class="visible">
  <div class='header'>
    <h1>Les Classes</h1>
    <h2>Choississez celle qui<span> correspond </span></h2>
    <p>Au cours de votre aventure, il vous sera possible de changer de classe. Plusieurs vous intéressent ? Alternez entre elles !</p>
  </div>
  <div class="title-section no-margin">
    <h3>L'experience de classe</h3>
  </div>
  <article>
    <div class='flex desc'>
      <img src="@/assets/rpg_class.png"/>
      <div class="filter"></div>
      <p class='descOrga'>Lorsque vous passer à une classe d'un rang supérieur pour la première fois vous obetenez un bonus en caractéristiques à répartir dans la FOR, DEX et SAG</p>
    </div>
    <table>
      <thead>
        <tr>
          <td>Rang</td>
          <td>Avancée</td>
          <td>Maître</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p>Caract. gagnées</p></td>
          <td>+ 15</td>
          <td>+ 35</td>
        </tr>
      </tbody>
    </table>
  </article>

  <!-- <h3>Bases</h3>
  <div class="cards">
    <div class="card" v-for="c of basicClasses" :key="c.name">
      <img :src="getImageUrl(c.img)"/>
      <div class="filter"></div>
      <h2>
        {{ c.name }}
      </h2>
      <p class="card-desc">{{ c.desc }}</p>
      <div class="spec">
        <div class="green-cards">
          <h4>Prérequis</h4>
          <p><span v-for="w of c.weapons" :key="w">{{ w }}</span> </p>
        </div>
        <div class="green-cards">
          <h4>Bonus de maîtrise</h4>
          <p><span v-for="(w, index) of c.mastery" :key="w">{{ w }}<i v-if="index != c.mastery.length -1">, </i> </span> </p>
        </div>
      </div>
      <div v-if="c.spell?.length">
        <h4>Compétences</h4>
        <RouterLink :to="'/rules/spell'" class="spell" v-for="(w, index) of c.spell" :key="w">{{ w }}<i v-if="index != c.spell.length -1">, </i></RouterLink>
      </div>
    </div>
  </div> -->

  <h3>Novices</h3>
  <div class="cards">
    <div class="card" v-for="c of noviceClasses" :key="c.name">
      <img :src="getImageUrl(c.img)"/>
      <div class="filter"></div>
      <h2>
        {{ c.name }}
      </h2>
      <p class="card-desc">{{ c.desc }}</p>
      <div class="spec">
        <div class="green-cards">
          <h4>Prérequis</h4>
          <p><span v-for="w of c.required" :key="w">{{ w }}</span> </p>
        </div>
        <div class="green-cards">
          <h4>Bonus de maîtrise</h4>
          <p><span v-for="(w, index) of c.mastery" :key="w">{{ w }}<i v-if="index != c.mastery.length -1">, </i> </span> </p>
        </div>
      </div>
      <div v-if="c.spell?.length">
        <h4>Compétences</h4>
        <RouterLink :to="'/rules/spell#'+w" class="spell" v-for="(w, index) of c.spell" :key="w">{{ w }}<i v-if="index != c.spell.length -1">, </i></RouterLink>
      </div>
    </div>
  </div>

  <h3>Avancées</h3>
  <div class="cards">
    <div class="card" v-for="c of avancedClasses" :key="c.name">
      <img :src="getImageUrl(c.img)"/>
      <div class="filter"></div>
      <h2>
        {{ c.name }}
      </h2>
      <p class="card-desc">{{ c.desc }}</p>
      <div class="spec">
        <div class="green-cards">
          <h4>Prérequis</h4>
          <p><span v-for="w of c.required" :key="w">{{ w }}</span> </p>
        </div>
        <div class="green-cards">
          <h4>Bonus de maîtrise</h4>
          <p><span v-for="(w, index) of c.mastery" :key="w">{{ w }}<i v-if="index != c.mastery.length -1">, </i> </span> </p>
        </div>
      </div>
      <div v-if="c.spell?.length">
        <h4>Compétences</h4>
        <RouterLink :to="'/rules/spell#'+w" class="spell" v-for="(w, index) of c.spell" :key="w">{{ w }}<i v-if="index != c.spell.length -1">, </i></RouterLink>
      </div>
    </div>
  </div>

  <h3>Maîtres</h3>
  <div class="cards">
    <div class="card" v-for="c of masterClasses" :key="c.name">
      <img :src="getImageUrl(c.img)"/>
      <div class="filter"></div>
      <h2>
        {{ c.name }}
      </h2>
      <p class="card-desc">{{ c.desc }}</p>
      <div class="spec">
        <div class="green-cards">
          <h4>Prérequis</h4>
          <p><span v-for="w of c.required" :key="w">{{ w }}</span> </p>
        </div>
        <div class="green-cards">
          <h4>Bonus de maîtrise</h4>
          <p><span v-for="(w, index) of c.mastery" :key="w">{{ w }}<i v-if="index != c.mastery.length -1">, </i> </span> </p>
        </div>
      </div>
      <div v-if="c.spell?.length">
        <h4>Compétences</h4>
        <RouterLink :to="'/rules/spell#'+w" class="spell" v-for="(w, index) of c.spell" :key="w">{{ w }}<i v-if="index != c.spell.length -1">, </i></RouterLink>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
article {
  width: fit-content;
  max-width: 100%;
}
table {
  margin: 16px 0px 128px;
  width: 100%;
}
td p {
  background-color: var(--primaryColor);
  border-radius: 8px;
  color: black;
  padding: 4px 8px;
}
/* .desc {
  overflow: visible;
} */
.desc img {
  width: 620px;
  position: absolute;
  z-index: -1;
  top: 420px;
  right: 0;
  overflow: visible;
  height: 520px;
  object-fit: cover;
  overflow: auto;
  -webkit-mask-image: url(../assets/splash2.png);
  mask-image: url(../assets/splash2.png);
  mask-repeat: no-repeat;
  mask-size: 100% 100%, contain;

}
.desc .filter {
  width: 620px;
  position: absolute;
  overflow: visible;
  z-index: -1;
  top: 420px;
  right: 0;
  height: 520px;
  background: linear-gradient(0deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
}
.cards {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
}
.card img {
  width: 320px;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  height: -webkit-fill-available;
  object-fit: cover;
}
.card .filter {
  width: 320px;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  height: -webkit-fill-available;
  background: linear-gradient(90deg, var(--background) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
}
.spec {
  display: grid;
  gap: 34px;
  grid-template-columns: repeat(2, 1fr);
}
.card {
  background-color: var(--background);
  padding: 32px;
  border-radius: 6px;
  overflow: auto;
  z-index: 2;
  position: relative;
  transition: all 300ms ease-in-out;
}
.card h2 {
  font-size: 28px;
  margin-bottom: 16px;
  color:  var(--primaryColor);
}
.card h4 {
  font-size: 24px;
  color: var(--primaryColor);
}
.green-cards {
    background: rgba(36,190,116,0.8);
    color: black;
    border-radius: 4px;
    padding: 16px 32px;
    margin: 18px 0px;
    height: fit-content;
}
.green-cards h4 {
  font-size: 16px;
  color: black;
}

.card .card-desc {
  /* height: 0px;
  overflow: hidden; */
  text-shadow: 1px 1px white;
}
.card a {
  text-decoration: none;
  font-weight: bold;
  color: var(--textColor);
}
.card:hover .card-desc {
  /* height: 520px; */
}
.card:hover img {
  opacity: 0;
}
.card:hover {
  border: 2px var(--primaryColor) solid;
}
@media screen and (max-width: 1124px) {
  img, .filter {
    display: none;
  }
}
</style>