<script setup lang="ts">
import { computed, ref } from 'vue';
import {useRoute} from 'vue-router'

const LINKS = [
  {
    url: '/Univers/story',
    name: 'Histoires générales'
  },
  {
    url: '/Univers/races',
    name: 'Races & Peuples'
  },
]

const route = useRoute();
const path = computed(() =>route.path);

const isOpen = ref(true);

</script>
<template>
  <side class='sideNav' :class="{close: !isOpen}" >
    <div class=' sideMenuHeader'>
      <h4>Menu des règles</h4>
      <div id="open-side-nav" @click="isOpen = !isOpen">
        <div v-if="!isOpen" >
          <i class="fas fa-chevron-right"></i>
        </div>
        <div v-else>
          <i class="fas fa-chevron-left"></i>
        </div>
      </div>
    </div>
    <div class=' sideMenuContent'>
      <div class='slot' v-for="link of LINKS" :key="link.url">
        <RouterLink :to="link.url">
          <p :class="{selected: path == link.url}">{{ link.name }}</p>
        </RouterLink>
      </div>
    </div>
  </side>
</template>

<style>
#open-side-nav {
  position: absolute;
  right: -8px;
  top: 8px;
  border: var(--secondaryColor) solid 1px;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
}
#open-side-nav:hover{
  background-color: var(--secondaryColor);
}
</style>
