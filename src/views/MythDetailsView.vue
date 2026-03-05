<script setup lang="ts">
import { computed } from 'vue';
import { kingGods, majorGods, minorGods, princeGods, otherGods } from '@/mock/godsMock'
import { miracles } from '@/mock/miracleMock';
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

const alignement = computed(() => {
  return kingGods.filter(p => p.name === godStore.god?.name)[0] || princeGods.filter(p => p.name === godStore.god?.name)[0] ? 'void' : 'lawfull'
})

const miracle = computed(() => {
  return miracles.filter(m => m.nom === godStore.god?.name)[0]
})

</script>
<template>
  <div v-if="godStore.god" :class="['visible', `${alignement}_mythology`]">
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
    <div class="desc">
      <div>
        <h3>Dogmes</h3>
        <h4>{{miracle.dogme}}</h4>
        <!-- <h5>Miracles</h5>
        <ul>
          <li v-for="m of miracle.dons_et_miracles" :key="m"> {{m}}</li>
        </ul> -->
        <!-- <h5>Interractions</h5> -->
        <!-- <ul>
          <li v-for="m of miracle.interractions" :key="m"> {{m}}</li>
        </ul> -->
      </div>
    </div>
    <!-- <div v-if="godStore.god.cults.length" class="head-religion">
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
    </div> -->
  </div>
</template>
<style>
  body:has(.void_mythology) {
    background-color: var(--textColor) !important;
    color: var(--backgroundColor) !important;
  }

  body:has(.void_mythology) .desc .filter {
   background: linear-gradient(90deg, var(--textColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
  }
   body:has(.void_mythology) nav p, body:has(.void_mythology) .header h1, body:has(.void_mythology) .header h2 {
    color: white !important;
   background: linear-gradient(90deg, var(--textColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
  }
</style>
<style scoped>
#back {
  background-color: var(--primaryColor);
  border: none;
  border-radius: 8px;
  color: white;
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
  background: linear-gradient(90deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
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

.desc h4{
  border-left: solid 4px var(--primaryColor);
  font-weight: 600;
  font-size: 20px;
  margin: 16px 0;
  padding-left: 8px;
  opacity: 0.5;
  max-width: 50ch;
}
.desc h5{
  font-weight: 600;
  font-size: 20px;
  margin: 16px 0;
  padding-left: 8px;
}
.desc ul li:nth-child(even) {
  color: #666
}
.desc li:hover {
  transform: scale(1.05);
  font-weight: 600;
  transition: all 300ms ease-in-out;
}
.desc li {
  max-width: 50ch;
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
  color: var(--textColor);
  z-index: 2;
}

.panth:hover img {
  transform: scale(1.2);
}
.panth-desc {
  display: flex;
  gap: 24px;
  overflow: hidden;
  -webkit-mask-image: url(../assets/splash.png);
  mask-image: url(../assets/splash.png);
  mask-repeat: no-repeat;
  mask-size: 100% 100%, contain;
}
</style>