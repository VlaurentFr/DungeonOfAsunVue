<script setup lang="ts">
import { gear } from '@/mock/legendaryGearMock';
import { computed, ref } from 'vue';

const search = ref("");
gear.sort((a,b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0))

const selected = computed(() => {
  return gear.filter(x => 
    x.type.toLowerCase().includes(search.value.toLowerCase()) ||
    x.el.toLowerCase().includes(search.value.toLowerCase()) ||
    x.name.toLowerCase().includes(search.value.toLowerCase())
    )
});

function clickSuggest(name: string) {
  search.value = name;
  console.log('click')
}
</script>
<template>
  <div class='visible'>
    <div class='header'>
      <h1>Les Objets légendaires</h1>
      <h2>Découvrez la liste des<span> Artéfacts </span></h2>
      <div id="search">
        <i class="fas fa-search"></i>
        <input placeholder="Rechercher un artéfact ou type d'artéfact..." type="text" v-model="search"/>
        <div v-if="selected.length !== gear.length" class="searh-suggest">
          <div class="suggest" v-for="m of selected" :key="m.name" @click="clickSuggest(m.name)">
            <p>
              {{ m.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="tags"><span>Aller à :</span>
      <div :class="'tag'" v-for="(s, index) of selected" v-show="s.type !== gear[index -1]?.type" >
        <a :href="'#'+s.type" >{{ s.type }}</a>
      </div>
    </div>
    <div class="title-section">
        <h3>Liste des objets</h3>
    </div>
    <div class="cards">
      <div class="card" v-for="(s, index) of selected" :key="s.name" :id="s.type !== gear[index -1]?.type ? s.type : s.name ">
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
            <i v-if="s.el == 'Eau'" class="fas fa-tint"></i>
            {{ s.name }}
          </h4>
          <br/>
          <p><span>Description :</span></p>
          <p>{{ s.desc }}</p>
        </div>
        <div class="side">
          <p><span>Type : </span><span class="type"> {{ s.type }}</span></p>
          <p><span>Effet :</span> {{ s.dices?.[0] }}</p>
          <p v-if="s.dices?.[1]"><span>+</span> {{ s.dices?.[1] }}</p>
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
  /* width: 520px; */
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
    width: fit-content;
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

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.tag a {
  width: fit-content;
  color: #000;
  background-color: var(--primaryColor);
  border-radius: 6px;
  padding: 8px;
  text-decoration: none;
  transition: all 300ms ease-in-out;
}
.tag a:hover {
  background-color: white;
}

</style>