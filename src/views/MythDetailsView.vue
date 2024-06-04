<script setup lang="ts">
import { kingGods, majorGods, minorGods, princeGods, otherGods } from '@/mock/godsMock'
import { panth } from '@/mock/panthsMock';
import { useGodsStore } from '@/stores/Gods';
import { useRouter } from 'vue-router';

const godStore = useGodsStore();
const router = useRouter()

if (!godStore.god) {
  back();
}
function back() {
  router.replace({ path: '/Univers/gods' })
}

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}

function navigate(panthIndex: number){
  godStore.panth = panthIndex
  router.push({ path: '/Univers/panthDetails' })
}
</script>
<template>
  <div v-if="godStore.god" class="visible">
    <div class='header'>
      <h1>{{ godStore.god.name }}</h1>
      <h2>{{ godStore.god.title }}</h2>
    </div>
    <div class='title-page'>
      <button id="back" @click="back">Retour</button>
    </div>
    <div class="desc">
      <img class="img-desc" :src="getImageUrl(godStore.god.img)" />
      <div class="filter"></div>
      <div>
        <h3>Description</h3>
        <p v-html="godStore.god.desc"></p>
      </div>
    </div>
    <div class="head-religion">
      <h3>Religions</h3>
      <p @click="$router.push({ path: '/Univers/panth'})">Voir toutes</p>
    </div>
    <div class="religions">
      <div class="panth" v-for="p of godStore.god.cults" :key="p" @click="navigate(p)">
        <p class="panth-name">{{ panth[p].name }}</p>
        <div class="panth-desc">
          <img :src="getImageUrl(panth[p].img) "/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#back {
  background-color: var(--primaryColor);
  border: none;
  border-radius: 8px;
  color: black;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
.img-desc {
  width: 33%;
  height: 100%;
  margin: 73px 0px 0 0;
  border-radius: 4px;
  position:fixed ;
  top: 0;
  right: 0;
  z-index: -1;
}
.filter {
  width: 33%;
  height: 100%;
  margin: 73px 0px 0 0;
  border-radius: 4px;
  position:fixed ;
  top: 0;
  right: 0;
  z-index: -1;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 80%);
}
@media screen and (max-width: 1024px) {
  .img-desc {
    position: initial;
    height: 344px;
    margin: 128px 0 0 0;
  }
  
}
.desc {
  display: flex;
  flex-wrap: wrap;
}
img {
  width: 320px;
  height: 164px;
  border-radius: 4px;
  object-fit: cover;
}
.head-religion {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.head-religion p {
  width: fit-content;
  margin-right: 128px;
  cursor: pointer;
}
.religions {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, 320px);
}
.panth {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
}
.panth-name {
  padding: 16px 32px;
  font-size: 16px;
  border-radius: 4px;
  text-align: center;
  width: fit-content;
  color: white;
  z-index: 2;
}

.panth:hover img {
  transform: scale(1.2);
}
.panth-desc {
  display: flex;
  gap: 24px;
  overflow: hidden;
}
</style>