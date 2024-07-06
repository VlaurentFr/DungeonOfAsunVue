<script setup lang="ts">
import { computed, ref } from 'vue';
import SideMenuBestiary from '@/components/SideMenuBestiary.vue';
import { MOB } from '@/mock/bestiaryMock';

const search = ref("");
const openSpell = ref<Array<string>>([]);
const isActive = ref(false);
const MobSorted = MOB.sort((a, b) => a.name.localeCompare(b.name))

const selected = computed(() => {
  return MobSorted.filter(x => 
    x.cards.some(g => g.type.toLowerCase().includes(search.value.toLowerCase())) ||
    x.cards.some(g => g.name.toLowerCase().includes(search.value.toLowerCase())))
});

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
function clickSuggest(name: string) {
  search.value = name;
  console.log('click')
}
function toggle() {
  isActive.value = !isActive.value;
}
</script>
<template>
  <SideMenuBestiary></SideMenuBestiary>
  <div class="visible" id="all">
    <div class='header'>
      <h1>Retrouvez les monstres</h1>
      <h2>de vos Campagnes<span> préférées </span></h2>
      <div id="search">
        <i class="fas fa-search"></i>
        <input placeholder="Rechercher de monstre ..." type="text" v-model="search"/>
        <div v-if="selected.length !== MOB.length" class="searh-suggest">
          <div class="suggest" v-for="m of selected" :key="m.name" @click="clickSuggest(m.name)">
            <p>{{ m.name }}</p>
          </div>
        </div>
        <div class="row">
          <p>Caractéristiques seulement</p>
          <button
            class="simplify_button"
            :class="{active:isActive}"
            @click="toggle"
            >{{isActive ? 'Oui' : 'Non'}}
          </button>
        </div>
      </div>
    </div>
    <div class="content" :id="mobs.name" v-for="mobs of selected" :key="mobs.name">
      <div>
        <h3>{{ mobs.name }}</h3>
        <p v-if="!isActive && mobs.desc" class="general-desc">{{ mobs.desc }}</p>
      </div>
      <div v-if="!isActive && (mobs.desc || mobs.img)" class="img-container">
        <div class="img-filter" v-if="mobs.img && !mobs.by"></div>
        <img class="background-img" src="../assets/Void-green.svg">
        <img class="mob-img" v-if="mobs.img" :src="getImageUrl(mobs.img)"/>
        <i v-if="mobs.by">by: {{ mobs.by }}</i>
      </div>
      <div class="cards-container">
        <h4 v-if="!isActive">Caractéristiques</h4>
        <div class="cards">
          <div class="mob" v-for="(m, index) of mobs.cards" :key="m.name">
            <div class="mob-wrapper">
              <div class="mob-header">
                <h5>{{ m.name }}</h5>
                <p>{{ m.type }}</p>
              </div>
              <div class="stats">
                <div class="life-and-shield">
                  <div class="green-mini-card">
                    <div class="icon-text">
                      <img src="../assets/tabler_shield-filled.svg"/>
                      <p>Armure</p>
                    </div>
                    <p class="value">{{ m.PA }}</p>
                  </div>
                  <div class="green-mini-card">
                    <div class="icon-text" >
                      <img src="../assets/tabler_heart-filled.svg"/>
                      <p>Vie</p>
                    </div>
                    <p class="value">{{ m.PV }}</p>
                  </div>
                </div>
                <div class="stats-card">
                  <div class="stat">
                    <p class="stat-title">Force</p>
                    <p class="stat-value">{{ m.FOR }}</p>
                  </div>
                  <div class="stat">
                    <p class="stat-title">Dextérité</p>
                    <p class="stat-value">{{ m.DEX }}</p>
                  </div>
                  <div class="stat">
                    <p class="stat-title">Sagesse</p>
                    <p class="stat-value">{{ m.SAG }}</p>
                  </div>
                  <div class="stat">
                    <p class="stat-title">Charisme</p>
                    <p class="stat-value">{{ m.CHM }}</p>
                  </div>
                </div>
              </div>
            </div>
            <p v-if="!openSpell.includes(m.name + index) && m.act.length" class="open-spell" @click="openSpell.push(m.name + index)">Voir les actions</p>
            <div v-if="openSpell.includes(m.name + index)" class="spell-container">
              <div class="spell" v-for="s of m.act" :key="s.name">
                <div>
                  <h6>{{ s.name }}</h6>
                  <p class="effect"><span>Effet:</span> {{ s.effect }}</p>
                  <p class="spell-desc" v-html="s.desc"></p>
                </div>
                <div class="card" v-if="s.dmg || s.type || s.range || s.target">
                  <div v-if="s.dmg">
                    <p><span>Dégâts : </span>{{ s.dmg }}</p>
                  </div>
                  <div v-if="s.type">
                    <p><span>Type : </span><span class="type">{{ s.type }}</span></p>
                  </div>
                  <div v-if="s.range">
                    <p><span>Portée : </span>{{ s.range }}</p>
                  </div>
                  <div v-if="s.target">
                    <p><span>Cible : </span>{{ s.target }}</p>
                  </div>
                </div>
              </div>
            </div>
            <p
              v-if="openSpell.includes(m.name + index)"
              class="open-spell"
              @click="openSpell = openSpell.filter((i) => i !== (m.name + index))">
              Reduire les actions
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#all {
  display: flex;
  flex-direction: column;
  gap: 80px;
  overflow: visible;
}
.header {
  width: fit-content;
  margin: auto;
}
.header h2, .header h1 {
  text-align: center;
}
.header h1 {
  color: #FFF;
  font-family: Work Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.header h2 {
  color: #FFF;
  font-family: Caladea;
  font-size: 32px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 48px;
}
.header h2 span {
  font-weight: 400;
  padding: 0 0 6px 0;
  border-bottom: 1px solid var(--primaryColor);
}
#search {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 640px;
  align-items: center;
  gap: 20px;
}
.active {
  background-color: var(--primaryColor);
}
.simplify_button {
  border-radius: 6px;
  border: none;
  margin-left: 20px;
  width: 40px;
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
.content {
  display: flex;
  flex-wrap: wrap;
}
.content h3 {
  margin: 0 0 34px 0;
}
.general-desc {
  width: 560px;
  margin-bottom: 80px;
  margin-right: 106px;
}
.img-container {
  width: 300px;
  height: 300px;
  position: relative;
  overflow: visible;
  margin-left: auto;
  text-align: center;

}
.background-img {
  position: absolute;
  width: 440px;
  top: -42px;
  left: -72px;
  z-index: -1;
}
.mob-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.img-filter {
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 95.01%), lightgray 145.633px 0px / 77.824% 100% no-repeat;
  mix-blend-mode: multiply;
}
h4 {
  margin: 80px 0 24px;
  color: #FFF;
  font-family: Work Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.cards-container {
  width: 100%;
}
.cards {
  display: grid;
  grid-template-columns:repeat(auto-fill, 530px);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  margin-bottom: 80px;
}
.mob {
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 28px;
  background: #0F0F0F;
  transition: all 300ms ease-in-out;
}
.mob-wrapper {
  display: flex;
  gap: 32px;
  width: 100%;
}
.mob-header h5 {
  color: #FFF;
  font-family: Work Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;
}
.mob-header p {
  color: #FFF;
  font-family: Work Sans;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
}
.stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}
.life-and-shield {
  display: flex;
  gap: 16px;
  flex: 1;
}
.life-and-shield .green-mini-card {
  border-radius: 12px;
  background-color: var(--primaryColor);
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.life-and-shield .value {
  color: #000;
  text-align: center;
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 16px;
}
.life-and-shield .icon-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 16px;
  border-right: 1px solid black;
  border-radius: 0px;
}
.icon-text img {
  width: 24px;
  height: 24px;
}
.icon-text p {
  color: #000;
  font-family: Work Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.stats-card {
  display: flex;
  background: #202124;
  border-radius: 12px;
  padding: 8px 16px;
}
.stats-card .stat {
  display: flex;
  width: 86px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.stats-card .stat-title {
  padding-bottom: 8px;
  border-bottom: 1px solid white;
  width: 64px;
  text-align: center;
}
.stats-card .stat-value {
  padding-top: 8px;
}
.open-spell {
  text-decoration: underline;
  cursor: pointer;
}
.spell-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.spell {
  display: flex;
  gap: 24px;
}
.spell .card {
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
.spell .card .type {
  padding: 4px 8px;
  border-radius: 4px;
  background: #FFF;
  color: #000;
  font-weight: 400;
}
.spell h6 {
  color: #24BE74;
  font-family: Work Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.spell .effect {
  color: #FFF;
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 16px 0 12px 0;
}
.spell .effect span {
  color: #FFF;
  font-family: Work Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.spell .spell-desc {
  color: #FFF;
  font-family: Work Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;
}
.spell .spell-desc :deep(span){
  color: #24BE74;
  font-family: Work Sans;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
}

@media screen and (max-width: 768px) {
  #all {
    overflow: hidden;
  }
  #search {
    width: auto;
  }
  .general-desc {
    width: auto;
  }
  .img-container {
    margin-left: auto;
  }
  .cards {
    grid-template-columns: repeat(auto-fill, 270px);
  }
  .mob {
    width: fit-content;
  }
  .mob-wrapper {
    flex-direction: column;
  }
  .life-and-shield {
    flex-direction: column;
  }
  .stats-card {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .spell {
    flex-direction: column;
  }
}
</style>