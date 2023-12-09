<script setup lang="ts">
import { ref } from 'vue';
import { human } from '@/mock/racesMock.js';

const type = ref("humans")

</script>
<template>
  <div>
    <div className='title-page'>
      <h1>Races</h1>
      <h2>Découvrez la liste des races de l'univers</h2>
      <button id="back" v-if="type" @click="type = ''">Retour à la liste</button>
    </div>
    <div id="races" v-if="!type">
      <button @click="type = 'humans'">
        <img src="../assets/Races-logo/humans.png"/>
        <span>humains</span>
      </button>
      <button @click="type = 'elves'">
        <img src="../assets/Races-logo/wood-elf.png"/>
        <span>Elfes</span>
      </button>
      <button @click="type = 'dwarfs'">
        <img src="../assets/Races-logo/dwarf.png"/>
        <span>Nains</span>
      </button>
      <button @click="type = 'orcs'">
        <img src="../assets/Races-logo/green-orc.png"/>
        <span>Orcs</span>
      </button>
      <button @click="type = 'other'">
        <img src="../assets/Races-logo/drak.png"/>
        <span>Autres</span>
      </button>
    </div>
    <div v-if="type == 'humans'">
      <div v-for="h of human" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img :src="`/src/assets/${h.img}`"/>
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
}
#races {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex: 1;
  gap: 64px;
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
#races button img {
  width: 244px;
  border-radius: 8px;
}
#races button:hover {
  transform: scale(1.2);
}
#races button span {
  font-size: 24px;
}
.race img {
  width: 244px;
  border-radius: 8px;
  float: left;
  margin: 0 16px 0 0;
  border: 3px solid var(--textColor);
}

</style>