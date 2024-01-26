<script setup lang="ts">

import { ref } from 'vue';
import { human, elf, dwarf, orc, other } from '@/mock/racesMock.js';

const type = ref("")
function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>
<template>
  <div class="visible">
    <div class='header'>
      <h1>Les Races</h1>
      <h2>Découvrez la liste des <span> races </span></h2>
    </div>
    <div class='title-page'>
      <button id="back" v-if="type" @click="type = ''">Retour à la liste</button>
    </div>
    <div id="races" v-if="!type">
      <button @click="type = 'humans'">
        <div>
          <img src="../assets/Races-logo/humans.png"/>
          <span>Humains</span>
        </div>
      </button>
      <button @click="type = 'elves'">
        <div>
          <img src="../assets/Races-logo/wood-elf.png"/>
          <span>Elfes</span>
        </div>
      </button>
      <button @click="type = 'dwarfs'">
        <div>
          <img src="../assets/Races-logo/dwarf.png"/>
          <span>Nains</span>
        </div>
      </button>
      <button @click="type = 'orcs'">
        <div>
          <img src="../assets/races/orc.png"/>
          <span>Orcs</span>
        </div>
      </button>
      <button @click="type = 'other'">
        <div>
          <img src="../assets/Races-logo/drak.png"/>
          <span>Autres</span>
        </div>
      </button>
    </div>
    <!-- HUMANS -->
    <div v-if="type == 'humans'">
      <div v-for="h of human" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img :src="getImageUrl(h.img)"/>
          <p>{{ h.desc }}</p>
        </div>
      </div>
    </div>
    <!-- ELVES -->
    <div v-if="type == 'elves'">
      <div v-for="h of elf" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img :src="getImageUrl(h.img)"/>
          <p>{{ h.desc }}</p>
        </div>
      </div>
    </div>
     <!-- DWARFS -->
     <div v-if="type == 'dwarfs'">
      <div v-for="h of dwarf" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img :src="getImageUrl(h.img)"/>
          <p>{{ h.desc }}</p>
        </div>
      </div>
    </div>
    <!-- ELVES -->
    <div v-if="type == 'orcs'">
      <div v-for="h of orc" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img :src="getImageUrl(h.img)"/>
          <p>{{ h.desc }}</p>
        </div>
      </div>
    </div>
    <!-- OTHER -->
    <div v-if="type == 'other'">
      <div v-for="h of other" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img :src="getImageUrl(h.img)"/>
          <p>{{ h.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
#races {
  position: absolute;
  left: 0;
  top: auto;
  width: 99%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex: 1;
  margin-bottom: 64px;
}
#races button {
  position: relative;
  background-color: transparent;
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--textColor);
  justify-content: center;
  align-items: center;
  transition: all 600ms ease-in-out;
  padding: 0;
}
#races button:hover {
  transform-origin: bottom;
  transform: scale(1.05);
  z-index: 1;
}
#races button div {
  position: relative;
  height: 100%;
  width: inherit;
  overflow: hidden;
}
#races button img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(0.5);
}
#races button:after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: all 800ms ease-in-out;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 50%);
}
#races button:hover:after {
  background: linear-gradient(0deg, rgba(36, 190, 116, 0.80) 0%,rgba(255,255,255,0) 50%) ;
}
#races button:hover img{
  transform: scale(1.2);
  filter: none;
  cursor: pointer;
}
#races button span {
  padding: 8px 16px;
  color: black;
  border-radius: 4px;
  font-size: 48px;
  font-family: Work Sans;
  position: absolute;
  bottom: 64px;
  left: 50%;
  transform: translate(-50%, 100px);
  opacity: 0;
  z-index: 3;
  transition: all 800ms ease-in-out;
}
#races button:hover span {
  opacity: 1;
  transform: translate(-50%, 0px);
}
.race {
  display: flex;
  margin-bottom: 68px;
  position: relative;
}
.race img {
  width: 244px;
  border-radius: 8px;
  margin: 0 48px 16px 0;
  object-fit: cover;
  background: linear-gradient(to bottom, rgba(255,0,0,0) 0%,rgba(255,0,0,0.65) 100%);

}
.race:after {
  position: absolute;
  content:'';
  height: 100%;
  width:244px;
  top:0;
  left:0;
  background: linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 80%);
}

@media screen and (max-width: 768px) {
  #races {
    flex-direction: column;
    justify-content: flex-start;
  }
}

</style>