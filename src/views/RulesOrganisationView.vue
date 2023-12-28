<script setup lang="ts">
import SideMenuRules from '@/components/SideMenuRules.vue';
import { orga } from '@/mock/orgaMock';
import { ref } from 'vue';

const selected = ref<null | {title: string, color: string, desc:string, img: string, rank: Array<{name: string, desc: string}>}>(null)

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}

</script>
<template>
  <SideMenuRules></SideMenuRules>
  <div class="visible">
    <div class='title-page'>
      <h1>Organisations</h1>
      <h2>Découvrez les organisations de l'univers</h2>
    </div>
    <div v-if="!selected">
      <div class='title-section'>
        <h3>Comment jouer ?</h3>
      </div>
      <div class='descOrga'>
        <p>Lorsque vous créer voter personnages ou au cours de vos aventures il vous sera possible de rejoindre une des organisations d'Asun. On en dénombre 7 grandes organisation : Les cercles d'Emeraude, de Rubis et de Saphir, Le Xaral, L'ordre du gantelet, l'Unenmir et la Lance noire<br/><br/> Chacune de ces organisation possèdent plusieurs rangs et chaque rangs possèdent des avantages qui seront décider par votre MJ dans des contexte donner. C'est également le MJ qui décide si le joueur correspond au critères pour demander un nouveau rangs. Il vous sera par ailleurs possible de rejoindre une ou plusieurs de ces organisation a la fois !</p>
      </div>
    </div>
    <div v-if="!selected" class="visible">
        <div>
          <div class='title-section'>
            <h3>Les organisations jouables</h3>
          </div>
          <div class='orga-container'>
            <div
              v-for="v of orga"
              :key="v.title"
              class='orga-card'
              @click="() => selected = v"
            >
              <img :src="getImageUrl(v.img)"/>
              <div class='dark-filter'></div>
              <div
                class='corner'
                :style="{ 'background': v.color }"
              >
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <p>{{v.title}}</p>
            </div>
          </div>
        </div>
    </div>
    <div v-if="selected" class="visible">
      <button id='back' @click="() => selected = null">
          <p>Retour à la liste</p>
      </button>
      <div class='title-section'>
        <h3>{{selected.title}}</h3>
      </div>
      <div class='descOrga'>
            <p>{{selected?.desc}}</p>
            <img :src="getImageUrl(selected.img)"/>
      </div>
      <div class='title-section'>
        <h3>Rangs</h3>
      </div>
      <ul>
        <li v-for="v of selected.rank" :key="v.name">
          <span class='title'>{{v.name}}</span> {{v.desc}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#back {
  background-color: var(--primaryColor);
  border: none;
  border-radius: 8px;
  color: var(--textColor);
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
.orga-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
}
.orga-card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 160px;
    border-radius: 16px;
    border: 1px solid #FBFAF8;
}
.orga-card:hover {
    cursor: pointer;
}
.orga-card img {
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
}
.orga-card img
.orga-card .dark-filter {
    position: relative;
    width: 100%;
}
.orga-card .dark-filter:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 160px;
    width: 100%;
    background: linear-gradient(0deg, rgba(22, 22, 22, 0.6), rgba(22, 22, 22, 0.1));
}
.orga-card .corner {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 0 0 16px;
    background-color: var(--primaryColor);
    display: flex;
    justify-content: center;
    align-items: center;

}
.orga-card .corner svg {
    width: 24px;
    height: 24px;
    color: white;
}
.orga-card p {
    color: white;
    z-index: 2;
    margin: 32px;
    text-align: center;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
}

.descOrga {
    margin: 0 0 24px 0;
}

.descOrga img {
    height: 300px;
    border-radius: 16px;
    margin: 0 0 0 48px;
}

.descOrga p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
}
</style>