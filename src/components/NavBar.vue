<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useDark, useToggle, useWindowSize } from '@vueuse/core'
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import { hasNavbar } from '@/composables/useNavbar';

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { width } = useWindowSize()
const route = useRoute()

const LINKS = [
  {
    url: '/accueil',
    name: 'Accueil'
  },
  {
    url: '/wiki',
    name: 'Wiki',
  },
  {
    url: '/regles',
    name: 'Règles du jeu',
  },
  {
    url: '/builder',
    name: 'Builder',
  },
]

</script>

<template>
    <nav :class="{'isDisplayed': hasNavbar}">
      <!-- <div class="background-blur"></div> -->
      <div>
        <RouterLink id="main-title" to="/Home"><img src="../assets/logo/DungeonOfAsun_logo_dark.png"/></RouterLink>
        <div id="content">
          <ul>
            <li class="link" v-for="link of LINKS" :key="link.url" :class="{ 'active': route.path.startsWith(link.url) }">
              <RouterLink :to="link.url" v-if="link.url" >{{ link.name }}</RouterLink>
              <a v-else >{{ link.name }}</a>
            </li>
          </ul>
          <button class="cta"><RouterLink to="/wiki"><span>Explorez le Wiki</span></RouterLink></button>
          <!-- <a id="coffee" href='https://www.buymeacoffee.com/dungeonOfAsun'>Soutenir</a> -->
          <!-- <RouterLink id="sign_up" to='/signUp'>S'inscrire</RouterLink> -->
          <!-- <RouterLink id="connect" to='/Connect'>Connexion</RouterLink> -->
          <!-- <a href='https://www.paypal.com/paypalme/DungeonOfAsun?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000269&utm_unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&ppid=RT000269&cnac=FR&rsta=fr_FR%28fr-FR%29&cust=33MHU9E7LYTKW&unptid=dfbce4e8-0c44-11ee-a37f-3cecef432e8b&calc=f47253660671a&unp_tpcid=ppme-social-user-profile-created&page=main%3Aemail%3ART000269&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.178.0&xt=104038%2C127632'>Donnations</a> -->
          <!-- <div v-if="isDark" id="sun" @click="toggleDark()">
            <i class="fas fa-sun"></i>
          </div>
          <div v-if="!isDark" id="moon" @click="toggleDark()">
            <i class="fas fa-moon"></i>
          </div> -->
        </div>
      </div>
    </nav>
</template>

<style scoped>
#main-title {
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
  margin: 0px;
  border: none;
}

#main-title img {
  /* filter: invert(1); */
  height: auto;
  width: 90px;
}
#content {
  display: flex;
  flex: auto;
  justify-content: space-between;
}

#menu {
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: var(--background);
  z-index: 1000;
  line-height: 48px;
}

nav {
  position: fixed;
  text-align: center;
  display: flex;
  width: 100%;
  height: 83px;
  background: transparent;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 999;
  align-items: center;
  justify-content: center;
  background-color: #090C11;
  color: #737880;
  border-bottom: 0.1rem solid #737880;
}

nav:not(.isDisplayed) {
  transform: translateY(-100px);
  transition: all 0.3s;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: .5rem;
  font-size: 2.2rem;
}

ul:before {
  content:"";
  position: absolute;
  position-anchor: --li;
  inset: auto anchor(right) calc(anchor(bottom) - 8px) anchor(left);
  background: var(--secondaryColor);
  height: 0.2rem;
  transition: .2s .2s;
}

ul li:is(:hover,.active) {
  anchor-name: --li;
  background-size: 100% 100%;
  color: var(--secondaryColor);
  transition: .2s;
}
ul:has(li:hover) li.active:not(:hover) {
  anchor-name: none;
  background-size: 100% 0%;
  transition: .2s;
}

ul li a {
  text-decoration: none;
  font-weight: 900;
  line-height: 1.5;
  padding-inline: 0;
  display: block;
}

nav > div {
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

nav a, nav p {
  color: inherit;
  position: relative;
  padding: 0 20px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-decoration: none;
  overflow: visible;
}
.cta {
  border: none;
  background-color: inherit;
}
.cta a{
  border-radius: 4px;
  padding: 8px 24px;
  border: 1px solid var(--secondaryColor);
  background-color: transparent;
  color: var(--secondaryColor);
  transform: skewX(-16deg);
}

.cta a span {
  display: block;
  transform: skewX(16deg);
}

.cta a:hover {
  background-color: var(--secondaryColor);
  color: var(--textColorWhite);
}



#coffee {
  margin-left: 32px;
  border-radius: 8px;
  border: 1px solid var(--textColor);
  padding: 8px 24px;
  transition: all 300ms ease-in-out;
}
#coffee:hover {
  border: 1px var(--primaryColor) solid;
  color: var(--primaryColor);
}
#connect:hover {
  background-color: var(--secondaryColor);

}
#connect {
  border-radius: 8px;
  padding: 8px 24px;
  transition: all 300ms ease-in-out;
  background-color:var(--primaryColor);
  color: var(--textColorWhite);
}

#content, #content > div {
  height: calc(48px + (16px * 2));
  display: flex;
  align-items: center;
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
