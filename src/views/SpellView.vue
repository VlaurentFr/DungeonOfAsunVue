<script setup lang="ts">
import { spell } from '@/mock/spellMock';
import { computed, ref } from 'vue';

const search = ref("");

const selected = computed(() => {
  return spell.filter(x => 
    x.type.toLowerCase().includes(search.value.toLowerCase()) ||
    x.name.toLowerCase().includes(search.value.toLowerCase()) ||
    x.lvl.toString().includes(search.value.toLowerCase())
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
      <h1>Les Sorts</h1>
      <h2>Découvrez la liste des<span> sorts </span></h2>
      <div id="search">
        <i class="fas fa-search"></i>
        <input placeholder="Rechercher un sort ..." type="text" v-model="search"/>
        <div v-if="selected.length !== spell.length" class="searh-suggest">
          <div class="suggest" v-for="m of selected" :key="m.name" @click="clickSuggest(m.name)">
            <p>{{ m.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="title-section">
        <h3>Liste des sorts</h3>
    </div>
    <div class="cards">
      <div class="card" v-for="s of selected" :key="s.name">
        <div class="card-desc">
          <h4>{{ s.name }}</h4>
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
#search svg {
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

</style>