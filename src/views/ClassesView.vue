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
          <td>Exp. Requis</td>
          <td>20 xp</td>
          <td>40 xp</td>
          <td>80 xp</td>
          <td>140 xp</td>
        </tr>
        <tr>
          <td>Exp. Gagné</td>
          <td>2 <i class="fas fa-dice-d20"></i> 6</td>
          <td>2 <i class="fas fa-dice-d20"></i> 6</td>
          <td>1 <i class="fas fa-dice-d20"></i> 6</td>
          <td>1 <i class="fas fa-dice-d20"></i> 6</td>
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
  <div class="tabsShadow"></div>
  <div class="glider"></div>
</div>
  <div class="cards" v-for="c of selected" :key="c.name">
    <img :src="getImageUrl(c.img)"/>
    <h2>
      {{ c.name }}
    </h2>
    <p>{{ c.desc }}</p>
    <div class="spec">
      <div class="green-cards">
        <h4>Prérequis</h4>
        <p><span v-for="w of c.weapons" :key="w">{{ w }}</span> </p>
      </div>
      <div class="green-cards">
        <h4>Bonus de maîtrise</h4>
        <p><span v-for="w of c.mastery" :key="w">{{ w }}</span> </p>
      </div>
    </div>
    <div v-if="c.spell?.length">
      <h4>Sorts</h4>
      <span class="spell" v-for="w of c.spell" :key="w">{{ w }}, </span>
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
img {
  width: 320px;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  height: -webkit-fill-available;
  object-fit: cover;
  mix-blend-mode: overlay;
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

<style scoped>
.tabs {
  text-align: left;
  position: relative;
  border-bottom: solid var(--primaryColor) 4px;
}
.tabs input {
  position: absolute;
  opacity: 0;
  margin: 0;
  padding: 0;
}

.tabs input + label:hover {
  color: var(--primaryColor);
}

.tab:checked + label {
  color: black;
  background-color: var(--primaryColor);
}
.tab:checked + label:hover {
  color: white;
}

.tabs input + label {
  margin: 12px 0 0 0;
  transition: all 0.3s;
  text-align: center;
  color: #e7e9f5;
  height: 48px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding: 5pt 10pt;
  font-size: 16px;
  background: #202124;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
}

.tabs input {
  position: relative;
  opacity: 0;
  margin: auto !important;
  padding: 0;
}

</style>