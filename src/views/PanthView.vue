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
  width: 100%;
  height: 164px;
  border-radius: 4px;
  object-fit: cover;
}
.desc {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}
.panth {
  position: relative;
  margin: 24px 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
}
.panth-name {
  padding: 16px 32px;
  font-size: 16px;
  border-radius: 4px;
  text-align: center;
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