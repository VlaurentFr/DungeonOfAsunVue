<script setup lang="ts">
import { spell } from '@/mock/spellMock';
import { computed, ref } from 'vue';

const search = ref("");

const selected = computed(() => {
  return spell.filter(x => 
    x.type.toLowerCase().includes(search.value.toLowerCase()) ||
    x.el.toLowerCase().includes(search.value.toLowerCase()) ||
    x.name.toLowerCase().includes(search.value.toLowerCase()) ||
    x.lvl.toString().includes(search.value.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name))
});

function clickSuggest(name: string) {
  search.value = name;
}
</script>
<template>
  <div class='visible'>
    <div class='header'>
      <h1>Les Compétences</h1>
      <h2>Découvrez la liste des<span> compétences </span></h2>
      <div id="search">
        <i class="fas fa-search"></i>
        <input placeholder="Rechercher une compétence ..." type="text" v-model="search"/>
        <div v-if="selected.length !== spell.length" class="searh-suggest">
          <div class="suggest" v-for="m of selected" :key="m.name" @click="clickSuggest(m.name)">
            <p>
              <i v-if="m.el == 'Feu'" class="fas fa-fire"></i>
              <i v-if="m.el == 'Glace'" class="fas fa-snowflake"></i>
              <i v-if="m.el == 'Vent'" class="fas fa-wind"></i>
              <i v-if="m.el == 'Plant'" class="fas fa-seedling"></i>
              <i v-if="m.el == 'Poison'" class="fas fa-skull-crossbones"></i>
              <i v-if="m.el == 'Dark'" class="fas fa-skull"></i>
              <i v-if="m.el == 'Light'" class="fas fa-sun"></i>
              <i v-if="m.el == 'Druid'" class="fas fa-paw"></i>
              <i v-if="m.el == 'Alchi'" class="fas fa-flask"></i>
              <i v-if="m.el == 'Foudre'" class="fas fa-bolt"></i>
              <i v-if="m.el == 'Psy'" class="fas fa-eye"></i>
              <i v-if="m.el == 'Blood'" class="fas fa-tint"></i>
              <i v-if="m.el == 'Illu'" class="fas fa-theater-masks"></i>
              {{ m.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <h3>Comment-ça marche ?</h3>
    <p>Pour toute les compétences de type Physique un jet de Force est demander, pour les autres un jet de Sagesse</p>
    <div class="title-section">
        <h3>Liste des compétences</h3>
    </div>
    <div class="cards">
      <div class="card" v-for="s of selected" :key="s.name">
        <div class="card-desc">
          <h4>
            <i v-if="s.el == 'Feu'" class="fas fa-fire"></i>
            <i v-if="s.el == 'Glace'" class="fas fa-snowflake"></i>
            <i v-if="s.el == 'Vent'" class="fas fa-wind"></i>
            <i v-if="s.el == 'Plant'" class="fas fa-seedling"></i>
            <i v-if="s.el == 'Poison'" class="fas fa-skull-crossbones"></i>
            <i v-if="s.el == 'Dark'" class="fas fa-skull"></i>
            <i v-if="s.el == 'Light'" class="fas fa-sun"></i>
            <i v-if="s.el == 'Druid'" class="fas fa-paw"></i>
            <i v-if="s.el == 'Alchi'" class="fas fa-flask"></i>
            <i v-if="s.el == 'Foudre'" class="fas fa-bolt"></i>
            <i v-if="s.el == 'Psy'" class="fas fa-eye"></i>
            <i v-if="s.el == 'Blood'" class="fas fa-tint"></i>
            <i v-if="s.el == 'Illu'" class="fas fa-theater-masks"></i>
            {{ s.name }}
          </h4>
          <p><span>Level :</span> {{ s.lvl }}</p>
          <p>{{ s.desc }}</p>
        </div>
        <div class="side">
          <p><span>Effet :</span> {{ s.dices?.[0] }}</p>
          <p><span>Type : </span><span class="type"> {{ s.type }}</span></p>
          <p><span>Coût :</span> {{ s.price }} d'énergie</p>
          <p><span>Portée :</span> {{ s.range }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#search {
  position: relative;
  display: flex;
  width: 640px;
  align-items: flex-start;
}
#search .fa-search {
  position: absolute;
  height: 24px;
  width: 24px;
  top: 16px;
  left: 16px;
}
#search .searh-suggest {
  visibility: hidden;
  position: absolute;
  top: 66px;
  background: #606367;
  border-radius: 16px;
  width: 100%;
}
#search .suggest {
  padding: 16px 56px;
  transition: all 300ms ease-in-out;
  border: 1px solid transparent;
  border-radius: 16px;
  cursor: pointer;
}
#search .suggest:hover {
  background-color: #202124;
  color: #24BE74;
  border: #24BE74 1px solid;
}
#search:focus-within .searh-suggest {
 visibility: visible;
}
input {
  width: 100%;
  padding: 18.5px 56px;
  border-radius: 16px;
  border: none;
  background-color: #202124;
  color: white;
  font-size: 16px;
}
input:focus-visible {
  outline: none;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
.card {
  display: flex;
  width: 520px;
  padding: 24px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  border-radius: 28px;
  background: #0F0F0F;
  transition: all .3s ease-in-out;
}
.card h4 {
  color: #24be74;
  font-family: Work Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  gap: 8px;
}
.card .side {
  display: flex;
    width: 200px;
    min-width: 200px;
    height: fit-content;
    padding: 8px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 8px;
    background: #202124;
}
.card .side .type {
  padding: 4px 8px;
  border-radius: 4px;
  background: #FFF;
  color: #000;
  font-weight: 400;
}
@media screen and (max-width: 768px) {
  #search {
    width: auto;
  }
}
</style>