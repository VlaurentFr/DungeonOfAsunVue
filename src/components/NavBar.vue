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
    name: 'Univers',
    sub: [
      {
        url: '/Univers/story',
        name: 'Histoires générales'
      },
      {
        url: '/Univers/gods',
        name: 'Mythologie'
      },
      {
        url: '/Univers/panth',
        name: 'Panthéons'
      },
      {
        url: '/Univers/races',
        name: 'Races & Peuples'
      },
      {
        url: '/Univers/faction',
        name: 'Factions & Royaumes'
      },
      {
        url: '/Univers/orga',
        name: 'Organisations'
      },
    ]
  },
  {
    name: 'Règles du jeu',
    sub: [
      {
        url: '/Rules/creation',
        name: 'Système de Jeu'
      },
      // {
      //   url: '/Rules/creation',
      //   name: 'Création de personnage'
      // },
      // {
      //   url: '/Rules/fight',
      //   name: 'Combats'
      // },
      {
        url: '/Rules/class',
        name: 'Classes'
      },
      {
        url: '/Rules/weapons',
        name: 'Maîtrises d\'armes'
      },
      {
        url: '/Rules/spell',
        name: 'Listes des Compétences'
      },
      // {
      //   url: '/Rules/spell',
      //   name: 'Listes des Sorts'
      // },
      {
        url: '/Rules/gear',
        name: "Objets d'aventurier"
      },
    ]
  },
  {
    name: 'Compendium',
    sub: [
      // {
      //   url: '/Rules/spell',
      //   name: 'Liste des Sorts'
      // },
      // {
      //   url: '/Rules/gear',
      //   name: `Objets d'aventurier`
      // },
      {
        url: '/Rules/legendary-gear',
        name: 'Objets Légendaires'
      },
      {
        url: '/Bestiary',
        name: 'Bestiaire'
      },
    ]
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
    <nav>
        <RouterLink id="main-title" to="/Home"><img src="../assets/DoA.svg"/></RouterLink>
        <div id="content" v-if="width >= 1440">
          <div :class="{'dropdown': !link.url}" v-for="link of LINKS" :key="link.url">
            <RouterLink v-if="link.url" :to="link.url">{{ link.name }}</RouterLink>
            <div v-else><a>{{ link.name }}</a></div>
            <div class="subNav">
              <div v-for="sublink of link.sub" :key="sublink.url">
                  <RouterLink v-if="sublink.url" :to="sublink.url">{{ sublink.name }}</RouterLink>
                </div>
            </div>
          </div>
          <a id="coffee" href='https://www.buymeacoffee.com/dungeonOfAsun'>Buy me a coffee</a>
          <!-- <a href='https://www.paypal.com/paypalme/DungeonOfAsun?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000269&utm_unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&ppid=RT000269&cnac=FR&rsta=fr_FR%28fr-FR%29&cust=33MHU9E7LYTKW&unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&calc=f47253660671a&unp_tpcid=ppme-social-user-profile-created&page=main%3Aemail%3ART000269&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.178.0&xt=104038%2C127632'>Donnations</a> -->
          <!-- <div v-if="isDark" id="sun" @click="toggleDark()">
            <i class="fas fa-sun"></i>
          </div>
          <div v-if="!isDark" id="moon" @click="toggleDark()">
            <i class="fas fa-moon"></i>
          </div> -->
        </div>
        <div v-else @click="showMenu()">
          <i class="fas fa-bars"> </i> 
        </div>
    </nav>
  <div id="menu" v-if="isOpen">
    <div @click="hideMenu()">
      <i class="fas fa-times"> </i> 
        <nav>
            <RouterLink id="main-title" to="/Home"><img src="../assets/DoA.svg"/></RouterLink>
            <div id="content">
              <div v-for="link of LINKS" :key="link.url">
                <RouterLink v-if="link.url" :to="link.url">{{ link.name }}</RouterLink>
                <div v-for="sublink of link.sub" :key="sublink.url">
                  <RouterLink v-if="sublink.url" :to="sublink.url">{{ sublink.name }}</RouterLink>
                </div>
              </div>
              <a id="coffee" href='https://www.buymeacoffee.com/dungeonOfAsun'>Buy me a coffee</a>
              <!-- <div v-if="isDark" id="sun" @click="toggleDark()">
                <i class="far fa-sun"></i>
              </div>
              <div v-if="!isDark" id="moon" @click="toggleDark()">
                <i class="far fa-moon"></i>
              </div> -->
            </div>
        </nav>
    </div>
  </div>
</template>

<style scoped>
#main-title {
  font-family: fantasy;
  max-height: 48px;
}
#content {
  display: contents;
}

#menu {
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: var(--background);
  z-index: 1000;
  line-height: 48px;
}

#menu nav {
  display: flex;
  flex-direction: column;
}

#coffee {
  border-radius: 16px;
  border: 1px solid white;
  padding: 8px 24px;
  transition: all 300ms ease-in-out;
}
#coffee:hover {
  border: 1px var(--primaryColor) solid;
  color: var(--primaryColor);
}
.subNav {
  display: none;
  position: absolute;
  top: 52px;
  z-index: 3;
  color: white;
  background-color: #202124;
  border-radius: 6px;
  line-height: 48px;
  text-align: left;
}
/* Show the dropdown menu on hover */
.dropdown:hover .subNav {display: block;}

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
