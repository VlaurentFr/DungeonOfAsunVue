<script setup lang="ts">
import { panth } from '@/mock/panthsMock';
import { useGodsStore } from '@/stores/Gods';
import { useRouter } from 'vue-router';

const godStore = useGodsStore();
const router = useRouter()
console.log(godStore)
if (godStore.panth == null) {
  back();
}
function back() {
  router.back()
}

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>
<template>
  <div v-if="godStore.panth !== null" class="visible">
    <div class='header'>
      <h1>{{  panth[godStore.panth].name }}</h1>
    </div>
    <div class='title-page'>
      <button id="back" @click="back">Retour</button>
    </div>
    <div class="desc">
      <img class="img-desc" :src="getImageUrl( panth[godStore.panth].img)" />
      <div class="filter"></div>
      <div>
        <h3>Description</h3>
        <p v-html="panth[godStore.panth].desc"></p>
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
  color: black;
}
.desc {
  display: flex;
  flex-wrap: wrap;
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
  object-fit: cover;
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
    height: 244px;
    margin: 128px 0 0 0;
  }
  
}
</style>