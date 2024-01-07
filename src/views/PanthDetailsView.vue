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
      <div>
        <h3>Description</h3>
        <p>{{ panth[godStore.panth].desc }}</p>
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
.desc {
  display: flex;
  flex-wrap: wrap;
}
.img-desc {
  width: 244px;
  height: 244px;
  margin: 128px 64px 0 0;
  border-radius: 4px;
}
</style>