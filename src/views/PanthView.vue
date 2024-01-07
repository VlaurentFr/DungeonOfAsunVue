<script setup lang="ts">
import { panth } from '@/mock/panthsMock';
import { useGodsStore } from '@/stores/Gods';
import { useRouter } from 'vue-router';

const godStore = useGodsStore();
const router = useRouter()

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}

function navigate(panthIndex: number){
  godStore.panth = panthIndex
  router.push({ path: '/Univers/panthDetails' })
}
</script>
<template>
  <div class="visible">
    <div class='header'>
      <h1>Les Panthéons</h1>
      <h2>Découvrez la liste des<span> Panthéon </span></h2>
    </div>
    <div class="desc">
      <div class="panth" v-for="(p, index) of panth" :key="p.name" @click="navigate(index)">
        <p class="panth-name">{{ p.name }}</p>
        <div class="panth-desc">
          <img :src="getImageUrl(p.img) "/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
  justify-content: center;
  align-items: center;
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