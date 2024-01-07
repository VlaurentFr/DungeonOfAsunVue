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
      <div>
        <h3>Description</h3>
        <p>{{ godStore.god.desc }}</p>
      </div>
    </div>
    <h3>Panthéon</h3>
    <div class="desc">
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
  color: var(--textColor);
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
.img-desc {
  width: 244px;
  height: 244px;
  margin: 128px 64px 0 0;
  border-radius: 4px;
}
.desc {
  display: flex;
  flex-wrap: wrap;
}
img {
  width: 264px;
  height: 164px;
  border-radius: 4px;
  object-fit: cover;
}
.desc {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
.panth {
  position: relative;
  margin: 24px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: white solid 4px;
  cursor: pointer;
  border-radius: 8px;
}
.panth-name {
  position: absolute;
  bottom: -32px;
  padding: 16px 32px;
  max-width: 75%;
  font-size: 16px;
  border-radius: 4px;
  text-align: center;
  width: fit-content;
  background-color: white;
  color: var(--primaryColor);
  z-index: 2;
}
.panth:hover .panth-name {
  position: absolute;
  bottom: -32px;
  padding: 16px 32px;
  max-width: 75%;
  font-size: 16px;
  border-radius: 4px;
  text-align: center;
  width: fit-content;
  background-color: var(--primaryColor);
  color: black;
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