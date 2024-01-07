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
        </div>
        <span>Humains</span>
      </button>
      <button @click="type = 'elves'">
        <div>
          <img src="../assets/Races-logo/wood-elf.png"/>
        </div>
        <span>Elfes</span>
      </button>
      <button @click="type = 'dwarfs'">
        <div>
          <img src="../assets/Races-logo/dwarf.png"/>
        </div>
        <span>Nains</span>
      </button>
      <button @click="type = 'orcs'">
        <div>
          <img src="../assets/races/orc.png"/>
        </div>
        <span>Orcs</span>
      </button>
      <button @click="type = 'other'">
        <div>
          <img src="../assets/Races-logo/drak.png"/>
        </div>
        <span>Autres</span>
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
}
#races {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex: 1;
  gap: 64px;
  margin-bottom: 64px;
}
#races button {
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--textColor);
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
}
#races button div {
  width: 244px;
  height: 244px;
  border-radius: 8px;
  border: 3px solid var(--textColor);
  overflow: hidden;
}
#races button img {
  width: 244px;
  height: 244px;
}
#races button:hover img{
  transform: scale(1.2);
  cursor: pointer;
}
#races button span {
  font-size: 24px;
  font-family: cursive;
}
.race {
  margin-bottom: 68px;
}
.race img {
  width: 244px;
  border-radius: 8px;
  float: left;
  margin: 0 16px 16px 0;
  border: 3px solid var(--textColor);
}

</style>