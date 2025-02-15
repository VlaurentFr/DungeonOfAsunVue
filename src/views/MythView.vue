<script setup lang="ts">
import { kingGods, majorGods, minorGods, princeGods, otherGods } from '@/mock/godsMock'
import { useGodsStore } from '@/stores/Gods';
import { useRouter } from 'vue-router';

const router = useRouter()
const godStore = useGodsStore();

function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}

function navigate(godValue: any) {
  godStore.god = godValue
  router.push({ path: '/Univers/godsDetails' })
}
</script>
<template>
  <div class="visible">
    <div class='header'>
      <div class="hero"></div>
      <h1>La Mythologie</h1>
      <h2>Découvrez la liste des <span> Dieux </span></h2>
    </div>
    <h3>Dieux Majeurs</h3>
    <div class="god-container">
      <div class="god" v-for="major of majorGods" :key="major.name" @click="navigate(major)">
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
    <h3>Dieux Mineur</h3>
    <div class="god-container">
      <div class="god" v-for="major of minorGods" :key="major.name" @click="navigate(major)">
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
    <div class="banner"></div>
    <h3 class="title-margin">Roi des ténèbres</h3>
    <div class="god-container">
      <div class="god" v-for="major of kingGods" :key="major.name" @click="navigate(major)">
        <img class="god-image" :src="getImageUrl(major.img)"/>
        <img class="character" :src="major.character ? getImageUrl(major.character) : getImageUrl(major.img)"/>
        <div class="character filter"></div>
        <div class="logo-type">
          <img src="../assets/Void.svg"/>
        </div>
        <p class="god-name">{{ major.name }}</p>
        <p class="god-title"> {{ major.title }}</p>
      </div>
    </div>
    <h3>Prince des ténèbres</h3>
    <div class="god-container">
      <div class="god" v-for="major of princeGods" :key="major.name" @click="navigate(major)">
        <img class="god-image" :src="getImageUrl(major.img)"/>
        <img class="character" :src="major.character ? getImageUrl(major.character) : getImageUrl(major.img)"/>
        <div class="character filter"></div>
        <div class="logo-type">
          <img src="../assets/Void.svg"/>
        </div>
        <p class="god-name">{{ major.name }}</p>
        <p class="god-title"> {{ major.title }}</p>
      </div>
    </div>
    <div class="banner-end"></div>
    <!-- <h3>Autre divinité</h3>
    <div class="god-container">
      <div class="god" v-for="major of otherGods" :key="major.name" @click="navigate(major)">
        <img class="god-image" :src="getImageUrl(major.img)"/>
        <img class="character" :src="major.character ? getImageUrl(major.character) : getImageUrl(major.img)"/>
        <div class="character filter"></div>
        <div class="logo-type">
          <img src="../assets/Lawfull.svg"/>
        </div>
        <p class="god-name">{{ major.name }}</p>
        <p class="god-title"> {{ major.title }}</p>
      </div> 
    </div> -->
  </div>
</template>
<style scoped>
h3 {
  margin-left: auto;
  margin-right: auto;
}
h3::after {
  height: 0px;
  animation: none;
}
.god-image, .character {
  height: 244px;
  width: 244px;
  object-fit: cover;
  /* border: 4px solid var(--primaryColor); */
  border-radius: 4px;
  -webkit-mask-image: url(../assets/splash.png);
  mask-image: url(../assets/splash.png);
  mask-repeat: no-repeat;
  mask-size: 100% 100%, contain;
}
.god-container {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 128px;
}
.god {
  position: relative;
  cursor: pointer;
  width: 244px;
}
.logo-type {
  position: absolute;
  border-radius: 50%;
  padding: 16px;
  background-color: var(--primaryColor);
  height: 64px;
  width: 64px;
  top: 212px;
  transform: translateX(calc((244px - 64px) / 2));
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
.title-margin {
  margin-top: 750px;
}

.banner {
  position: absolute;
  width: 100vw;
  left: 0;
  height: 520px;
  z-index: -1;
  background-size: cover;
  background-position: top;
  background-image: url(../assets/hellFosse.png);
  background-attachment: fixed;
  clip-path: polygon(0% 14%, 14% 0, 29% 12%, 41% 0, 49% 34%, 62% 6%, 82% 14%, 83% 7%, 100% 10%, 100% 99%, 81% 89%, 68% 100%, 59% 87%, 48% 100%, 40% 85%, 28% 94%, 16% 70%, 4% 100%, 0% 89%, 0% 89%, 0 50%);
}
.hero {
  position: absolute;
  width: 100vw;
  left: 0;
  top: 0;
  height: 333px;
  z-index: -1;
  background-size: cover;
  /* background-position: top; */
  background-image: url(../assets/combats/combat4.png);
  background-attachment: fixed;
	clip-path: polygon(0 0, 100% 0, 100% 100%, 90% 100%, 80% 94%, 50% 99%, 36% 83%, 21% 94%, 7% 88%, 0 100%);
}
.hero::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100vw;
  height: 333px;
  background: linear-gradient(180deg, var(--backgroundColor) 10%, #f1f1f100 100%), no-repeat;
}
.banner-end {
  position: absolute;
  width: 100vw;
  left: 0;
  height: 680px;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/hell.png);
  background-attachment: fixed;
  clip-path: polygon(0% 14%, 14% 0, 29% 12%, 41% 0, 49% 34%, 62% 6%, 82% 14%, 83% 7%, 100% 10%, 100% 100%, 0 100%);
}
.banner-end::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100vw;
  height: 680px;
  background: linear-gradient(0deg, var(--backgroundColor) 10%, #f1f1f100 100%), no-repeat;
}
</style>