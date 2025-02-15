<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useDark, useToggle, useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue';
import { MOB } from '@/mock/bestiaryMock';
import { gear } from '@/mock/legendaryGearMock';
import { spell } from '@/mock/spellMock';

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { width } = useWindowSize()
const isOpen = ref(false)

const mobList = MOB.sort((a, b) => a.name.localeCompare(b.name))
const gearList = gear.sort((a, b) => a.name.localeCompare(b.name)).filter((w) => w.type == 'Armure' || w.type == 'Amulette' || w.type == 'Anneau' )
const weaponsList = gear.sort((a, b) => a.name.localeCompare(b.name)).filter((w) => w.type != 'Armure' && w.type != 'Amulette' && w.type != 'Anneau')
const spellList = spell.filter((x) => x.type.toLowerCase().includes('mag')).sort((a, b) => a.name.localeCompare(b.name)).slice(0,13)
const compList = spell.sort((a, b) => a.name.localeCompare(b.name)).filter((x) => x.type.toLowerCase().includes('phys'))


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
      // {
      //   url: '/Rules/creation',
      //   name: 'Système de Jeu'
      // },
      {
        url: '/Rules/creation',
        name: 'Création de personnage'
      },
      {
        url: '/Rules/fight',
        name: 'Combats'
      },
      {
        url: '/Rules/class2',
        name: 'Classes'
      },
      {
        url: '/Rules/weapons',
        name: 'Armes'
      },
      {
        url: '/Rules/spell',
        name: 'Listes des compétences'
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
    mega: true,
    sub: [
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
      <div class="background-blur"></div>
      <div>
        <RouterLink id="main-title" to="/Home"><img src="../assets/DoA.png"/></RouterLink>
        <div id="content" v-if="width >= 1440">
          <div class="link" :class="[{'dropdown': !link.url}, {'mega': link.mega}]" v-for="link of LINKS" :key="link.url">
            <div v-if="link.url">
              <RouterLink :to="link.url">{{ link.name }}</RouterLink>
            </div>
            <div v-else>
              <p>{{ link.name }}</p>
            </div>
            <div v-if="!link.mega" class="subNav">
              <div v-for="sublink of link.sub" :key="sublink.url">
                  <RouterLink v-if="sublink.url" :to="sublink.url">{{ sublink.name }}</RouterLink>
                </div>
            </div>
            <div v-else class="subNav">
              <ul>
                <li>
                  <p><RouterLink :to="'/bestiary'">Bestiaire</RouterLink></p>
                  <div class="nav">
                    <div class="nav-wrapper">
                      <div class="col"><img class="huge-img" src="@/assets/dragon.png"/></div>
                      <div class="col">
                        <h4>A - D</h4>
                        <div class="row">
                          <div>
                            <RouterLink :to="'/bestiary#'+m.name" v-for="m of mobList.filter((mob) => mob.name.startsWith('A') ||  mob.name.startsWith('B') ||  mob.name.startsWith('C') ||  mob.name.startsWith('D')).slice(0,4)" :key="m.name"> {{ m.name }}</RouterLink>
                            <RouterLink class="button" :to="'/bestiary#A'">Voir plus</RouterLink>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <h4>E - H</h4>
                        <div class="row">
                          <div>
                            <RouterLink :to="'/bestiary#'+m.name" v-for="m of mobList.filter((mob) => mob.name.startsWith('E') ||  mob.name.startsWith('F') ||  mob.name.startsWith('G') ||  mob.name.startsWith('H')).slice(0,4)" :key="m.name"> {{ m.name }}</RouterLink>
                            <RouterLink class="button" :to="'/bestiary#E'">Voir plus</RouterLink>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <h4>I - L</h4>
                        <div class="row">
                          <div>
                            <RouterLink :to="'/bestiary#'+m.name" v-for="m of mobList.filter((mob) => mob.name.startsWith('I') ||  mob.name.startsWith('J') ||  mob.name.startsWith('K') ||  mob.name.startsWith('L')).slice(0,4)" :key="m.name"> {{ m.name }}</RouterLink>
                            <RouterLink class="button" :to="'/bestiary#I'">Voir plus</RouterLink>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <h4>M - P</h4>
                        <div class="row">
                          <div>
                            <RouterLink :to="'/bestiary#'+m.name" v-for="m of mobList.filter((mob) => mob.name.startsWith('M') ||  mob.name.startsWith('N') ||  mob.name.startsWith('0') ||  mob.name.startsWith('P')).slice(0,4)" :key="m.name"> {{ m.name }}</RouterLink>
                            <RouterLink class="button" :to="'/bestiary#M'">Voir plus</RouterLink>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <h4>Q - T</h4>
                        <div class="row">
                          <div>
                            <RouterLink :to="'/bestiary#'+m.name" v-for="m of mobList.filter((mob) => mob.name.startsWith('Q') ||  mob.name.startsWith('R') ||  mob.name.startsWith('S') ||  mob.name.startsWith('R')).slice(0,4)" :key="m.name"> {{ m.name }}</RouterLink>
                            <RouterLink class="button" :to="'/bestiary#Q'">Voir plus</RouterLink>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <h4>U - Z</h4>
                        <div class="row">
                          <div>
                            <RouterLink :to="'/bestiary#'+m.name" v-for="m of mobList.filter((mob) => mob.name.startsWith('U') ||  mob.name.startsWith('V') ||  mob.name.startsWith('W') ||  mob.name.startsWith('X') ||  mob.name.startsWith('Y') ||  mob.name.startsWith('Z')).slice(0,4) " :key="m.name"> {{ m.name }}</RouterLink>
                            <RouterLink class="button" :to="'/bestiary#U'">Voir plus</RouterLink>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>
                <li><p><RouterLink :to="'/Rules/gear'">Objets d'Aventurier</RouterLink></p></li>
                <li><p><RouterLink :to="'/Rules/legendary-gear'">Objets Légendaires</RouterLink></p>
                  <div class="nav">
                    <div class="nav-wrapper">
                      <div class="col"><img class="huge-img" src="@/assets/Spear.png"/></div>
                      <div class="col">
                        <h4>Equipements</h4>
                        <div class="row">
                          <div>
                            <RouterLink :to="'/Rules/legendary-gear#'+m.name" v-for="m of gearList.slice(0,5)" :key="m.name"> {{ m.name }}</RouterLink>
                            <RouterLink class="button" :to="'/Rules/legendary-gear'">Voir plus</RouterLink>
                          </div>
                          <div>
                            <RouterLink :to="'/Rules/legendary-gear#'+m.name" v-for="m of gearList.slice(5,10)" :key="m.name"> {{ m.name }}</RouterLink>
                          </div>
                          <div>
                            <RouterLink :to="'/Rules/legendary-gear#'+m.name" v-for="m of gearList.slice(10)" :key="m.name"> {{ m.name }}</RouterLink>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <h4>Armes</h4>
                        <div class="row">
                          <div>
                            <RouterLink :to="'/Rules/legendary-gear#'+m.name" v-for="m of weaponsList.slice(0,5)" :key="m.name"> {{ m.name }}</RouterLink>
                          </div>
                          <div>
                            <RouterLink :to="'/Rules/legendary-gear#'+m.name" v-for="m of weaponsList.slice(5,10)" :key="m.name"> {{ m.name }}</RouterLink>
                          </div>
                          <div>
                            <RouterLink :to="'/Rules/legendary-gear#'+m.name" v-for="m of weaponsList.slice(10,14)" :key="m.name"> {{ m.name }}</RouterLink>
                            <RouterLink class="button" :to="'/Rules/legendary-gear'">Voir plus</RouterLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><p><RouterLink :to="'/Rules/spell'">Liste des compétences</RouterLink></p>
                  <div class="nav">
                    <div class="nav-wrapper">
                      <div class="col"><img class="huge-img" src="@/assets/spellbook.png"/></div>
                      <div class="col">
                        <h4>Magiques</h4>
                        <div class="row">
                          <div>
                            <RouterLink :to="'/Rules/spell#'+m.name" v-for="m of spellList.slice(0,5)" :key="m.name"> {{ m.name }}</RouterLink>
                          </div>
                          <div>
                            <RouterLink :to="'/Rules/spell#'+m.name" v-for="m of spellList.slice(5,10)" :key="m.name"> {{ m.name }}</RouterLink>
                          </div>
                          <div>
                            <RouterLink :to="'/Rules/spell#'+m.name" v-for="m of spellList.slice(10,14)" :key="m.name"> {{ m.name }}</RouterLink>
                            <RouterLink class="button" :to="'/Rules/spell'">Voir plus</RouterLink>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <h4>Physiques</h4>
                        <div class="row">
                          <div>
                            <RouterLink :to="'/Rules/spell#'+m.name" v-for="m of compList.slice(0,5)" :key="m.name"> {{ m.name }}</RouterLink>
                          </div>
                          <div>
                            <RouterLink :to="'/Rules/spell#'+m.name" v-for="m of compList.slice(5,10)" :key="m.name"> {{ m.name }}</RouterLink>
                          </div>
                          <div>
                            <RouterLink :to="'/Rules/spell#'+m.name" v-for="m of compList.slice(10,14)" :key="m.name"> {{ m.name }}</RouterLink>
                            <RouterLink class="button" :to="'/Rules/spell'">Voir plus</RouterLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
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
      </div>
    </nav>
  <div id="menu" v-if="isOpen">
    <div @click="hideMenu()">
      <i class="fas fa-times"> </i> 
        <nav>
            <RouterLink id="main-title" to="/Home"><img src="../assets/DoA.png"/></RouterLink>
            <div id="content">
              <div v-for="link of LINKS" :key="link.url" :class="{'mega': link.mega}">
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
#main-title img {
height: 120px;
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
  border: 1px solid var(--textColor);
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
  top: calc(48px + (16px * 2));
  z-index: 3;
  color: var(--textColor);
  background-color: var(--background);
  border-radius: 6px;
  line-height: 48px;
  text-align: left;
  border-top: solid var(--primaryColor) 4px;
}
/* Show the dropdown menu on hover */
.dropdown:hover .subNav {
  display: block;
}

.mega .subNav {
  width: 100%;
  left: 0;
  background-color: var(--background);
  position: absolute;
}

.mega ul {
  display: flex;
  margin: auto;
  max-width: 1120px;
  list-style-type: none;
  justify-content: center;
  gap: 20px;
  
}
.mega ul li > p{
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 2px transparent solid;
  border-top: 2px transparent solid;
}
.mega ul li:hover > p{
  border-bottom: 2px var(--primaryColor) solid;
  border-top: 2px var(--primaryColor) solid;
}
.mega ul li > p a{
  border-bottom: none;
}
.mega ul li .nav {
  height: 0px;
  position: absolute;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  border-bottom: 2px solid #1B1B1B;
  background: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(4px);
  /* height: 180px; */
  overflow: hidden;
}
.mega .nav-wrapper {
  max-width: 1120px;
  margin: auto;
  display: flex;
}
.mega ul li:hover .nav {
  height: 184px;
}
.mega ul li .nav h4 {
  color: var(--primaryColor);
  font-weight: bold;
  padding: 0 20px;
  margin: 0 10px;
  font-size: larger;
}
.mega ul li .nav .col {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}
.mega ul li .nav .col .huge-img {
  height: 180px;
}
.mega ul li .nav a {
  margin: 0 10px;
  padding: 0 20px;
  line-height: 24px;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 15ch;
  text-align: left;
  justify-content: flex-start;
}
.mega ul li .nav a:hover {
  color: var(--primaryColor);
}
.mega ul li .nav .button {
  color: var(--primaryColor);
  font-weight: bold;
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
