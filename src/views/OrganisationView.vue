<script setup lang="ts">
import { orga } from '@/mock/orgaMock';
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
      <h1>Les organisations</h1>
      <h2>Rejoignez celle qui<span> correspond </span></h2>
      <p>Au cours de votre aventure, il vous sera possible de rejoindre une des  7 organisations d'Asun. Plusieurs vous intéressent ? <br/>Rejoignez les toutes !</p>
    </div>

    <div class='orga-container'>
      <div class="orga-title-list">
        <div class="orga-title" :class="{ 'selected-orga': selected === index }" v-for="(o, index) of orga" :key="o.title">
          <p @click="changeOrga(index)">{{ o.title }}</p>
        </div>
      </div>
      <div class="orga-desc">
        <h3>Description</h3>
        <p>{{ orga[selected].desc }}</p>
        <div class="rank-number-container">
          <div v-for="(rank, index) of orga[selected].rank" :key="rank.name">
            <p @click="selectedRank = index" :class="{ 'selected': selectedRank === index }">{{ index + 1 }}</p>
          </div>
        </div>
        <p><span>{{ orga[selected].rank[selectedRank].name }}</span> {{ orga[selected].rank[selectedRank].desc }}</p>
      </div>
      <div class="aside-img">
        <div class="green-filter"></div>
        <img :src="getImageUrl(orga[selected].img)"/>
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
  flex-direction: column;
  gap: 16px;
}
.orga-title {
  padding: 16px 32px;
  border-radius: 8px;
  cursor: pointer;
}
.orga-title p {
  color: #FFF;
  font-family: Work Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.selected-orga {
  background-color: var(--primaryColor);
}
.selected-orga p {
  color: #000;
  font-family: Work Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.orga-desc {
  max-width: 560px;
}
.rank-number-container {
  display: flex;
  margin: 64px 0 24px 0;
  gap: 4px;
  border-bottom: solid var(--primaryColor) 4px;
}
.rank-number-container p {
  height: 48px;
  width: 48px;
  font-size: 24px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: #202124;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rank-number-container .selected {
  background: var(--primaryColor);
  color: #000;
}
.aside-img{
  position: absolute;
  top: 73px;
  height: calc(100vh - 73px);
  right: 0;
  width: 200px;
}
.aside-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.green-filter {
  position: absolute;
  top: 0px;
  height: calc(100vh - 73px);
  right: 0;
  width: 200px;
  background: linear-gradient(0deg, rgba(36, 190, 116, 0.80) 0%, rgba(36, 190, 116, 0.80) 100%), lightgray 50% / cover no-repeat;
  mix-blend-mode: multiply;
}
@media screen and (max-width: 768px) {
  .orga-container {
    flex-direction: column;
  }
  .orga-title-list {
    flex-direction: row;
    height: fit-content;
    overflow: scroll;
    border-right: none;
    border-bottom: solid white 1px;
  }
  .orga-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .orga-title p {
    font-size: 16px;
  }
  .rank-number-container {
    overflow: auto;
  }
}
@media screen and (max-width: 1024px) { 
  .aside-img {
    display: none;
  }
}
</style>