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
  <div class="visible mythology">
    <div class='header'>
      <div class="hero"></div>
      <h1>La Mythologie</h1>
      <h2>Découvrez la liste des <span> Dieux </span></h2>
    </div>
    <section>
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
      <h3>Dieux Mineurs</h3>
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
    </section>
    <div class="banner"></div>
    <section class="void">
      <h3 class="title-margin">Rois Primordiaux</h3>
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
      <h3>Princes Primordiaux</h3>
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
    </section>
    <!-- <div class="banner-end"></div> -->
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
<style>
  #container:has(.mythology) {
     display: flex;
    max-width: none !important;
    margin: 122px auto 0px;
    padding: 0;
    font-weight: normal;
    flex: 1;
    width: -webkit-fill-available;
  }
</style>
<style scoped>
  .void {
    background-color: var(--textColor);
    color: var(--backgroundColor);
  }
h3 {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
}
h3::after {
  height: 0px;
  animation: none;
}
.god-image, .character {
  height: 244px;
  width: 100%;
  object-fit: cover;
  /* border: 4px solid var(--primaryColor); */
  border-radius: 4px;
  /* -webkit-mask-image: url(../assets/splash.png);
  mask-image: url(../assets/splash.png); */
  mask-repeat: no-repeat;
  mask-size: 100% 100%, contain;
}
.god-container {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 128px;
  margin: auto 180px;
}
.god {
  position: relative;
  cursor: pointer;
  width: 180px;
}
.logo-type {
  position: absolute;
  border-radius: 50%;
  padding: 16px;
  background-color: var(--primaryColor);
  color: white;
  height: 64px;
  width: 64px;
  top: 212px;
  transform: translateX(100%);
}
.god:hover .god-image  {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  /* box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75); */
  filter: opacity(0.8) grayscale(100%);
}
.god:hover .logo-type {
  transform: perspective(900px) translateY(-30%) rotateX(25deg) translateZ(0) translateX(100%);
}

.logo-type img {
  border: none;
  width: 100%;
  height: 100%;
  filter: invert();
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
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
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
  width: 104%;
  transform: translate3d(-2%, -78px, 100px);
}

.title-margin {
  margin-top: 500px;
  padding-top: 250px;
}

.banner {
  position: absolute;
  width: 100vw;
  left: 0;
  height: 520px;
  z-index: -1;
  background-size: cover;
  background-position: top;
  background-image: url(/src/assets/hell.png);
  background-attachment: fixed;
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
  background-image: url(/src/assets/forest.png);
  background-attachment: fixed;
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
  background-image: url(/src/assets/hell.png);
  background-attachment: fixed;
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