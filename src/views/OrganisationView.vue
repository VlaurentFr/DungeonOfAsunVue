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
      <p>Au cours de votre aventure, il vous sera possible de rejoindre une des organisations d'Asun. Plusieurs vous intéressent ? <br/>Rejoignez les toutes !</p>
    </div>

    <div class='orga-container'>
      <div class="orga-title-list">
        <div class="orga-title" :class="{ 'selected-orga': selected === index }" v-for="(o, index) of orga" :key="o.title" @click="changeOrga(index)">
          <p>{{ o.title }}</p>
        </div>
      </div>
      <div class="orga-desc">
        <h3>Description</h3>
        <p>{{ orga[selected].desc }}</p>
        <h3 class="rank-title">Rangs</h3>
        <div class="rank-number-container">
          <div v-for="(rank, index) of orga[selected].rank" :key="rank.name">
            <p @click="selectedRank = index" class="rank-number" :class="{ 'selected': selectedRank === index }">{{ index + 1 }}</p>
          </div>
        </div>
        <p><span>{{ orga[selected].rank[selectedRank].name }}</span> {{ orga[selected].rank[selectedRank].desc }}</p>
      </div>
      <div class="aside-img">
        <img :src="getImageUrl(orga[selected].img)"/>
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
  flex-direction: column;
  gap: 16px;
}
.orga-title {
  padding: 16px 32px;
  border-radius: 8px;
  cursor: pointer;
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
  font-size: 20px;
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
.rank-title {
  margin: 64px 0 !important;
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
  background: var(--backgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.rank-number-container p:hover {
  background: var(--primaryColor);
  color: #000;
}
.rank-number-container .selected {
  background: var(--primaryColor);
  color: #000;
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