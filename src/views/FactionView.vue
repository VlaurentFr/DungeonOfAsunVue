<script setup lang="ts">
import { faction } from '@/mock/factionMock';
import { ref } from 'vue';

const selected = ref<number>(0);
const selectedRank = ref<number>(0);

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
function changeOrga(index: number) {
  selected.value = index;
  selectedRank.value = 0
}

</script>
<template>
  <div class="visible">
    <div class='header'>
      <h1>Les Factions</h1>
      <h2>Rejoignez celle qui<span> correspond </span></h2>
      <p>Au cours de votre aventure, il vous sera possible de rejoindre une faction d'Asun</p>
    </div>

    <div class='orga-container'>
      <div class="orga-title-list">
        <div class="orga-title" :class="{ 'selected-orga': selected === index }" v-for="(o, index) of faction" :key="o.title" @click="changeOrga(index)">
          <p>{{ o.title }}</p>
        </div>
      </div>
      <div class="orga-desc">
        <h3>Description</h3>
        <div v-html="faction[selected].desc"></div>
      </div>
      <div class="aside-img">
        <img :src="getImageUrl(faction[selected].img)"/>
        <div class="green-filter"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.orga-container {
  display: flex;
  margin-top: 80px;
  gap: 24px;
}
.orga-container h3 {
  font-size: 24px;
  margin: 10px 0 64px 0;
}
.orga-title-list {
  border-right: #FFF solid 1px;
  padding: 0 41px 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  height: min-content;
  width: 33%;
}
.orga-title {
  padding: 16px 32px;
  border-radius: 8px;
  cursor: pointer;
  flex: 1;
  flex-basis: calc(50% - 16px);
  height: fit-content;
}
.orga-title:hover {
  background-color: var(--backgroundColor);
}
.orga-title:hover p {
  color: var(--primaryColor);
}
.orga-title p {
  color: var(--textColor);
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.selected-orga {
  background-color: var(--primaryColor);
}
.selected-orga p {
  color: #000;
}
.orga-desc {
  max-width: 560px;
}
.orga-desc :deep(span) {
  color: var(--primaryColor);
}
.aside-img{
  position: fixed;
  top: 73px;
  height: calc(100vh - 73px);
  right: 0;
  width: 33%;
  z-index: -1;
}
.aside-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(); */
}
.green-filter {
  position: fixed;
  top: 73px;
  height: calc(100vh - 73px);
  right: 0;
  width: 33%;
  background: linear-gradient(90deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;

}
@media screen and (max-width: 768px) {
  .orga-container {
    flex-direction: column;
  }
  .orga-title-list {
    flex-wrap: nowrap;
    height: fit-content;
    overflow: auto;
    border-right: none;
    border-bottom: solid white 1px;
    width: auto;
  }
  .orga-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .orga-title p {
    font-size: 16px;
  }
}
@media screen and (max-width: 1024px) { 
  .aside-img {
    display: none;
  }
}
</style>