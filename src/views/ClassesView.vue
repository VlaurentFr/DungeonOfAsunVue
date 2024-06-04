<script setup lang="ts">
import { basicClasses, noviceClasses, avancedClasses, masterClasses } from '@/mock/classesMock';
import { ref } from 'vue';

const selected = ref(basicClasses);

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
    <div class='flex'>
      <p class='descOrga'>Pour maitriser et obtenir le bonus lier a une classe, il vous faudra combattre. Chaque combat rapporte un certains montant d'expériences et chaque classe nécessite un certains montant en fonction du tiers de cette dernière (Basique, Novice, Avancée ou Maître). Lorsque le montant est atteint vous obtenez alors le bonus de maîtrise lier a cette classe. Bonus permanant même si vous changer de classe dans le futur. </p>
    </div>
    <table>
      <thead>
        <tr>
          <td>Type</td>
          <td>Base</td>
          <td>Novice</td>
          <td>Avancée</td>
          <td>Maître</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p>Exp. Requis</p></td>
          <td>20 xp</td>
          <td>40 xp</td>
          <td>80 xp</td>
          <td>140 xp</td>
        </tr>
        <tr>
          <td><p>Exp. Gagné</p></td>
          <td>2 <i class="fas fa-dice-d20"></i> 6</td>
          <td>2 <i class="fas fa-dice-d20"></i> 6</td>
          <td>1 <i class="fas fa-dice-d20"></i> 6</td>
          <td>1 <i class="fas fa-dice-d20"></i> 6</td>
        </tr>
      </tbody>
    </table>
  </article>
  <article>
    <div class='flex'>
      <p class='descOrga'>Lorsque vous maîtriser une classe d'un rang pour la première fois vous obetenez un bonus en caractéristiques à répartir </p>
    </div>
    <table>
      <thead>
        <tr>
          <td>Rang</td>
          <td>Base</td>
          <td>Novice</td>
          <td>Avancée</td>
          <td>Maître</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Caractéristiques gagnées</td>
          <td>+ 5</td>
          <td>+ 10</td>
          <td>+ 20</td>
          <td>+ 40</td>
        </tr>
      </tbody>
    </table>
  </article>
  <div class="card tabs">
    <input id="tab-1" type="radio" class="tab tab-selector" checked="true" name="tab"/>
    <label for="tab-1" class="tab tab-primary" @click="selected = basicClasses">Base</label>
    <input id="tab-2" type="radio" class="tab tab-selector" name="tab"/>
    <label for="tab-2" class="tab tab-success" @click="selected = noviceClasses">Novices</label>
    <input id="tab-3" type="radio" class="tab tab-selector" name="tab" />
    <label for="tab-3" class="tab tab-default" @click="selected = avancedClasses">Avancées</label>
    <input id="tab-4" type="radio" class="tab tab-selector" name="tab" />
    <label for="tab-4" class="tab tab-warning" @click="selected = masterClasses">Maîtres</label>
  </div>
  <div class="cards" v-for="c of selected" :key="c.name">
    <img :src="getImageUrl(c.img)"/>
    <div class="filter"></div>
    <h2>
      {{ c.name }}
    </h2>
    <p>{{ c.desc }}</p>
    <div class="spec">
      <div class="green-cards">
        <h4>Prérequis</h4>
        <p><span v-for="w of c.weapons" :key="w">Maîtrise {{ w }}</span> </p>
      </div>
      <div class="green-cards">
        <h4>Bonus de maîtrise</h4>
        <p><span v-for="(w, index) of c.mastery" :key="w">{{ w }}<i v-if="index != c.mastery.length -1">, </i> </span> </p>
      </div>
    </div>
    <div v-if="c.spell?.length">
      <h4>Sorts</h4>
      <span class="spell" v-for="(w, index) of c.spell" :key="w">{{ w }}<i v-if="index != c.spell.length -1">, </i></span>
    </div>

  </div>
</div>
</template>
<style scoped>
article {
  width: fit-content;
  max-width: 100%;
  overflow: auto;
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
img {
  width: 320px;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  height: -webkit-fill-available;
  object-fit: cover;
}
.filter {
  width: 320px;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  height: -webkit-fill-available;
  background: linear-gradient(90deg, rgba(32,33,36,1) 0%, rgba(255,255,255,0) 80%);
}
.spec {
  display: flex;
  gap: 34px;
}
.cards {
  background-color: #202124;
  padding: 32px;
  margin: 32px 0;
  border-radius: 6px;
  overflow: auto;
  z-index: 2;
  position: relative;
}
.cards h2 {
  font-size: 28px;
  margin-bottom: 16px;
  color:  var(--primaryColor);
}
.cards h4 {
  font-size: 24px;
  color: var(--primaryColor);
}
.green-cards {
    background: var(--primaryColor);
    color: black;
    border-radius: 4px;
    padding: 16px 32px;
    margin: 18px 0px;
}
.green-cards h4 {
  font-size: 16px;
  color: black;
}
@media screen and (max-width: 425px) {
  img {
    display: none;
  }
}
</style>