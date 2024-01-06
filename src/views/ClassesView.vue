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
  <div class="title-section no-margin">
          <h3>L'experience de classe</h3>
      </div>
      <article class='row selected-item'>
        <div class='flex'>
          <p class='descOrga'>Pour maitriser et obtenir le bonus lier a une classe, il vous faudra combattre. Chaque combat rapporte un certains montant d'expériences et chaque classe nécessite un certains montant en fonction du tiers de cette dernière (Basique, Novice, Avancée ou Maître). Lorsque le montant est atteint vous obtenez alors le bonus de maîtrise lier a cette classe. Bonus permanant même si vous changer de classe dans le futur. </p>
        </div>
        <table>
          <thead>
            <tr>
              <th colspan="5">Expérience de Classe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Type</td>
              <td>Base</td>
              <td>Novice</td>
              <td>Avancée</td>
              <td>Maître</td>
            </tr>
            <tr>
              <td>Exp. Requis</td>
              <td>20</td>
              <td>40</td>
              <td>80</td>
              <td>140</td>
            </tr>
            <tr>
              <td>Exp. Gagné</td>
              <td>2d6</td>
              <td>2d6</td>
              <td>1d6</td>
              <td>2d6</td>
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
      <div>
        <h4>Prérequis</h4>
        <p><span v-for="w of c.weapons" :key="w">{{ w }}</span> </p>
      </div>
      <div>
        <h4>Bonus de maîtrise</h4>
        <p><span v-for="w of c.mastery" :key="w">{{ w }}</span> </p>
      </div>
    </div>
    <div v-if="c.spell?.length">
      <h4>Sorts</h4>
      <p class="spell" v-for="w of c.spell" :key="w">{{ w }}</p>
    </div>

  </div>
</div>
</template>
<style scoped>
table {
  margin: 16px 64px;
}
img {
  width: 240px;
  height: 240px;
  border-radius: 6px;
  border: 6px solid brown;
  margin: 24px;
  float: right;
}
h4 {
  margin: 18px 0;
  text-decoration: underline;
}
.spell {
  color: black;
}
.spec {
  display: flex;
  gap: 34px;
}
.cards {
  background-color: antiquewhite;
  color: brown;
  padding: 32px;
  border-top: 10px solid brown;
  border-bottom: 10px solid brown;
  margin: 32px 0;
  border-radius: 6px;
  overflow: auto;
}
</style>

<style scoped>
.tabs {
  text-align: left;
  position: relative;
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
  color: var(--secondaryColor);
}

.tabs input + label {
  margin: 12px -8px;
  transition: all 0.3s;
  text-align: center;
  border: none;
  border-bottom: 0.5pt solid #1d1e22;
  color: #e7e9f5;
  display: inline-flex;
  -webkit-box-pack: center;
  padding: 5pt 10pt;
  vertical-align: top;
  justify-content: flex-start;
  background: #333;
  box-shadow: 1px 1px 2px 1px #231f20;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 8pt;
  background: #26292c;
  margin-bottom: 0.5px;
  border-radius: 7px 7px 0 0 !important;
  border-top: 1px solid #3b3d3f;
  letter-spacing: 0.1666666667em !important;
  background: hsl(232deg 6% 17%);
  cursor: pointer;
}

.tabs input {
  position: relative;
  opacity: 0;
  margin: auto !important;
  padding: 0;
}

</style>