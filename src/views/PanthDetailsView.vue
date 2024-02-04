<script setup lang="ts">
import { panth } from '@/mock/panthsMock';
import { kingGods, majorGods, minorGods, princeGods, otherGods } from '@/mock/godsMock'
import { useGodsStore } from '@/stores/Gods';
import { useRouter } from 'vue-router';

const router = useRouter()
const godStore = useGodsStore();

function navigate(godValue: any) {
  godStore.god = godValue
  router.push({ path: '/Univers/godsDetails' })
}

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
    <h3>Les dieux associés</h3>
    <div class="god-container">
      <div class="god" :class="{'none': !major.cults.includes(godStore.panth)}"
        v-for="major of majorGods" :key="major.name" @click="navigate(major)">
        <img class="god-image" :src="getImageUrl(major.img)"/>
        <img class="character" :src="major.character ? getImageUrl(major.character) : getImageUrl(major.img)"/>
        <div class="character filter"></div>
        <div class="logo-type">
          <img src="../assets/Lawfull.svg"/>
        </div>
        <p class="god-name">{{ major.name }}</p>
        <p class="god-title"> {{ major.title }}</p>
      </div>
      <div class="god" :class="{'none': !major.cults.includes(godStore.panth)}"
        v-for="major of minorGods" :key="major.name" @click="navigate(major)">
        <img class="god-image" :src="getImageUrl(major.img)"/>
        <img class="character" :src="major.character ? getImageUrl(major.character) : getImageUrl(major.img)"/>
        <div class="character filter"></div>
        <div class="logo-type">
          <img src="../assets/Lawfull.svg"/>
        </div>
        <p class="god-name">{{ major.name }}</p>
        <p class="god-title"> {{ major.title }}</p>
      </div>
      <div class="god" :class="{'none': !major.cults.includes(godStore.panth)}"
        v-for="major of kingGods" :key="major.name" @click="navigate(major)">
        <img class="god-image" :src="getImageUrl(major.img)"/>
        <img class="character" :src="major.character ? getImageUrl(major.character) : getImageUrl(major.img)"/>
        <div class="character filter"></div>
        <div class="logo-type">
          <img src="../assets/Void.svg"/>
        </div>
        <p class="god-name">{{ major.name }}</p>
        <p class="god-title"> {{ major.title }}</p>
      </div>
      <div class="god" :class="{'none': !major.cults.includes(godStore.panth)}"
        v-for="major of princeGods" :key="major.name" @click="navigate(major)">
        <img class="god-image" :src="getImageUrl(major.img)"/>
        <img class="character" :src="major.character ? getImageUrl(major.character) : getImageUrl(major.img)"/>
        <div class="character filter"></div>
        <div class="logo-type">
          <img src="../assets/Void.svg"/>
        </div>
        <p class="god-name">{{ major.name }}</p>
        <p class="god-title"> {{ major.title }}</p>
      </div>
      <div class="god" :class="{'none': !major.cults.includes(godStore.panth)}"
        v-for="major of otherGods" :key="major.name" @click="navigate(major)">
        <img class="god-image" :src="getImageUrl(major.img)"/>
        <img class="character" :src="major.character ? getImageUrl(major.character) : getImageUrl(major.img)"/>
        <div class="character filter"></div>
        <div class="logo-type">
          <img src="../assets/Lawfull.svg"/>
        </div>
        <p class="god-name">{{ major.name }}</p>
        <p class="god-title"> {{ major.title }}</p>
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
.desc .filter {
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

<style scoped>
.none {
  display: none;
}
.god-image, .character {
  height: 244px;
  width: 124px;
  object-fit: cover;
  border: 4px solid var(--primaryColor);
  border-radius: 4px;
}
.god-container {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}
.god {
  position: relative;
  cursor: pointer;
  width: 124px;
}
.logo-type {
  position: absolute;
  border-radius: 50%;
  padding: 16px;
  background-color: var(--primaryColor);
  height: 64px;
  width: 64px;
  top: 212px;
  left: 32px;
}
.god:hover .god-image {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  filter: opacity(0.3);
}
.logo-type img {
  border: none;
  width: 100%;
  height: 100%;
}
.god-name {
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
}
.god-title {
  text-align: center;
}
.character {
  width: 100%;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  left: 0;
  border: none;
}
.filter {
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%);
  height: 244px;
  width: 100%;
  top: 0;
}
.god:hover .character {
  opacity: 1;
  height: 304px;
  transform: translate3d(0%, -84px, 100px);
}
</style>