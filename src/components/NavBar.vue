<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useDark, useToggle, useWindowSize } from '@vueuse/core'
import { ref } from 'vue';

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { width } = useWindowSize()
const isOpen = ref(false)

const LINKS = [
  {
    url: '/Home',
    name: 'Accueil'
  },
  {
    url: '/Univers/story',
    name: 'Univers'
  },
  {
    url: '/Rules/creation',
    name: 'Règles du jeu'
  },
]

const showMenu = () => {
  isOpen.value = true;
}
const hideMenu = () => {
  isOpen.value = false;
}
</script>

<template>
  <header>
    <nav>
        <RouterLink id="main-title" to="/Home">Dungeon of Asun</RouterLink>
        <div id="content" v-if="width >= 1440">
          <div v-for="link of LINKS" :key="link.url">
            <RouterLink :to="link.url">{{ link.name }}</RouterLink>
          </div>
          <a id="coffee" href='https://www.buymeacoffee.com/dungeonOfAsun'>Buy me a coffee</a>
          <!-- <a href='https://www.paypal.com/paypalme/DungeonOfAsun?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000269&utm_unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&ppid=RT000269&cnac=FR&rsta=fr_FR%28fr-FR%29&cust=33MHU9E7LYTKW&unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&calc=f47253660671a&unp_tpcid=ppme-social-user-profile-created&page=main%3Aemail%3ART000269&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.178.0&xt=104038%2C127632'>Donnations</a> -->
          <div v-if="isDark" id="sun" @click="toggleDark()">
            <i class="fas fa-sun"></i>
          </div>
          <div v-if="!isDark" id="moon" @click="toggleDark()">
            <i class="fas fa-moon"></i>
          </div>
        </div>
        <div v-else @click="showMenu()">
          <i class="fas fa-bars"> </i> 
        </div>
    </nav>
  </header>
  <div id="menu" v-if="isOpen">
    <div @click="hideMenu()">
      <i class="fas fa-times"> </i> 
      <header>
        <nav>
            <RouterLink id="main-title" to="/Home">Dungeon of Asun</RouterLink>
            <div id="content">
              <div v-for="link of LINKS" :key="link.url">
                <RouterLink :to="link.url">{{ link.name }}</RouterLink>
              </div>
              <a id="coffee" href='https://www.buymeacoffee.com/dungeonOfAsun'>Buy me a coffee</a>
              <!-- <a href='https://www.paypal.com/paypalme/DungeonOfAsun?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000269&utm_unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&ppid=RT000269&cnac=FR&rsta=fr_FR%28fr-FR%29&cust=33MHU9E7LYTKW&unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&calc=f47253660671a&unp_tpcid=ppme-social-user-profile-created&page=main%3Aemail%3ART000269&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.178.0&xt=104038%2C127632'>Donnations</a> -->
              <div v-if="isDark" id="sun" @click="toggleDark()">
                <i class="far fa-sun"></i>
              </div>
              <div v-if="!isDark" id="moon" @click="toggleDark()">
                <i class="far fa-moon"></i>
              </div>
            </div>
        </nav>
      </header>
    </div>
  </div>
</template>

<style scoped>
#main-title {
  font-family: fantasy;
}
#content {
  display: contents;
}

#menu {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: var(--background);
  z-index: 1000;
}

#menu nav {
  display: flex;
  flex-direction: column;
}

#coffee {
  color: var(--secondaryColor);
}
.fa-bars, .fa-times {
  height: 24px;
  width: 24px;
}
.fa-times {
  position: absolute;
  right: 8px;
  top: 16px;
  z-index: 1001;
}
</style>
