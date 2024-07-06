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
    <div class='title-page'>
      <button id="back" v-if="type" @click="type = ''">〈 Retour à la liste</button>
    </div>
    <div class='header'>
      <h1 v-if="!type">Les Races</h1>
      <h1 v-else>Les {{ type }}</h1>
      <h2>Découvrez la liste des <span v-if="!type"> races </span> <span v-if="type"> {{ type }} </span></h2>
    </div>
    <div id="races" v-if="!type">
      <button @click="type = 'Humains'">
        <div>
          <img src="../assets/races/humans.png"/>
          <span>Humains</span>
        </div>
      </button>
      <button @click="type = 'Elfes'">
        <div>
          <img src="../assets/races/wood-elf.png"/>
          <span>Elfes</span>
        </div>
      </button>
      <button @click="type = 'Nains'">
        <div>
          <img src="../assets/races/dwarf.png"/>
          <span>Nains</span>
        </div>
      </button>
      <button @click="type = 'Orcs'">
        <div>
          <img src="../assets/races/orc.png"/>
          <span>Orcs</span>
        </div>
      </button>
      <button @click="type = 'Autres'">
        <div>
          <img src="../assets/races/drak.png"/>
          <span>Autres</span>
        </div>
      </button>
    </div>
    <!-- HUMANS -->
    <div v-if="type == 'Humains'">
      <div v-for="(h, index) of human" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img v-if="!(index % 2)" :src="getImageUrl(h.img)"/>
          <div>
            <p v-html="h.desc"></p><br/>
            <p><span>Caractéristique : </span>{{h.caract}}</p>
            <p>{{ h.talent }}</p>
          </div>
          <img v-if="(index % 2)" class="img-right" :src="getImageUrl(h.img)"/>
        </div>
      </div>
    </div>
    <!-- ELVES -->
    <div v-if="type == 'Elfes'">
      <div v-for="(h, index) of elf" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img v-if="!(index % 2)" :src="getImageUrl(h.img)"/>
          <div>
            <p v-html="h.desc"></p><br/>
            <p><span>Caractéristique : </span>{{h.caract}}</p>
            <p>{{ h.talent }}</p>
          </div>
          <img v-if="(index % 2)" class="img-right" :src="getImageUrl(h.img)"/>
        </div>
      </div>
    </div>
     <!-- DWARFS -->
     <div v-if="type == 'Nains'">
      <div v-for="(h, index) of dwarf" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img v-if="!(index % 2)" :src="getImageUrl(h.img)"/>
          <div>
            <p v-html="h.desc"></p><br/>
            <p><span>Caractéristique : </span>{{h.caract}}</p>
            <p>{{ h.talent }}</p>
          </div>
          <img v-if="(index % 2)" class="img-right" :src="getImageUrl(h.img)"/>
        </div>
      </div>
    </div>
    <!-- ELVES -->
    <div v-if="type == 'Orcs'">
      <div v-for="(h, index) of orc" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img v-if="!(index % 2)" :src="getImageUrl(h.img)"/>
          <div>
            <p v-html="h.desc"></p><br/>
            <p><span>Caractéristique : </span>{{h.caract}}</p>
            <p>{{ h.talent }}</p>
          </div>
          <img v-if="(index % 2)" class="img-right" :src="getImageUrl(h.img)"/>
        </div>
      </div>
    </div>
    <!-- OTHER -->
    <div v-if="type == 'Autres'">
      <div v-for="(h, index) of other" :key="h.name">
        <h3>{{ h.name }}</h3>
        <div class="race">
          <img v-if="!(index % 2)" :src="getImageUrl(h.img)"/>
          <div>
            <p v-html="h.desc"></p><br/>
            <p><span>Caractéristique : </span>{{h.caract}}</p>
            <p>{{ h.talent }}</p>
          </div>
          <img v-if="(index % 2)" class="img-right" :src="getImageUrl(h.img)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#back {
  background-color: var(--primaryColor);
  border: solid 2px var(--primaryColor);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  color: black;
  transition: all 300ms ease-in-out;
}

#back:hover {
  background-color: transparent;
  color: var(--primaryColor);
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
  overflow: hidden;
  border: solid transparent 4px;
}
#races button:hover {
  transform-origin: bottom;
  transform: scale(1.05);
  z-index: 1;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border: solid var(--primaryColor) 4px
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
  font-family: Caladea;
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
  min-height: 500px;
}
.race span {
  color: var(--primaryColor);
}
.race img {
  width: 300px;
  border-radius: 8px;
  margin: 0 48px 16px 0;
  object-fit: cover;
  -webkit-mask-image: linear-gradient(-90deg, transparent 0%,black 100%);
  mask-image: linear-gradient(-90deg, transparent 0%,black 100%);
}

.race .img-right {
  -webkit-mask-image: linear-gradient(90deg, transparent 0%,black 100%);
  mask-image: linear-gradient(90deg, transparent 0%,black 100%);
}

@media screen and (max-width: 768px) {
  #races {
    flex-direction: column;
    justify-content: flex-start;
  }
  .race img{
    display: none
  }
}

</style>