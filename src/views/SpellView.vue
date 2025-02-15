<script setup lang="ts">
import { spell } from '@/mock/spellMock';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import BookIcon from '@/assets/tabler_book.vue'
import SwordIcon from '@/assets/tabler_sword.vue'
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

const route = useRoute()
const params = ref(route.hash)

const setCurrentSpell = () => {
  const items = document.getElementsByClassName('card')

  for(let i = 0; i <items.length; i++) {
   if(items[i].id == params.value) {
    items[i].classList.add('current-spell')
   }
  }

}

watch(route, (newValue)=> {
  params.value = newValue.hash.slice(1,newValue.hash.length)
  setCurrentSpell()

}, {immediate: true, deep: true})

onMounted(() => {
  setCurrentSpell()

})

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
              {{ m.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <h3>Comment-ça marche ?</h3>
    <p>Pour toute les compétences de type Physique un jet du type d'arme équipé est demander, pour les autres (la magie) un jet de Sagesse</p><br/>
    <!-- <p> Vous pouvez avoir jusqu’à 8 sorts à la fois, si vous en acquérez plus il faudra choisir d’en oublier un pour utiliser votre nouveau sort.</p> -->
    <div class="title-section">
        <h3>Liste des compétences</h3>
    </div>
    <div class="cards">
      <div class="card" v-for="s of selected" :key="s.name" :id="s.name">
        <div class="card-desc">
          <h4>
            <SwordIcon v-if="s.el == 'Physique'"></SwordIcon>
            <BookIcon v-else></BookIcon>
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
  background: var(--background);
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
  background-color: var(--background);
  color: var(--primaryColor);
  border: var(--primaryColor) 1px solid;
}
#search:focus-within .searh-suggest {
 visibility: visible;
}
input {
  width: 100%;
  padding: 18.5px 56px;
  border-radius: 16px;
  border: none;
  background-color: var(--background);
  color: var(--textColor);
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
  background: var(--background);
  transition: all .3s ease-in-out;
}

.current-spell {
  animation: selected 3s;
}

@keyframes selected {
  0% {
    background-color: var(--primaryColor);
  }
  100% {
    background-color: var(--background);
  }
}
.card h4 {
  color: var(--primaryColor);
  font-family: Work Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  gap: 8px;
}
.card h4 svg {
  height: 20px;
  width: 20px;
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
    background: var(--backgroundColor);
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