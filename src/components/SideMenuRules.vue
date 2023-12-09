<script setup lang="ts">
import { computed, ref } from 'vue';
import {useRoute} from 'vue-router'
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
      <div class='slot'>
        <RouterLink to='/Rules/creation'>
          <p :class="{selected: path == '/Rules/creation'}">Création de personnage</p>
        </RouterLink>
      </div>
      <div class='slot'>
        <RouterLink to='/Rules/fight'>
          <p :class="{selected: path == '/Rules/fight'}">Combat</p>
        </RouterLink>
      </div>
      <div class='slot'>
        <RouterLink to='/Rules/class'>
          <p :class="{selected: path == '/Rules/class'}">Classes</p>
        </RouterLink>
      </div>
      <div class='slot'>
        <RouterLink to='/Rules/archetype'>
          <p :class="{selected: path == '/Rules/archetype'}">Archetypes</p>
        </RouterLink>
      </div>
      <div class='slot'>
        <RouterLink to='/Rules/weapon'>
          <p :class="{selected: path == '/Rules/weapon'}">Maîtrise d'armes</p>
        </RouterLink>
      </div>
      <div class='slot'>
        <RouterLink to='/Rules/orga'>
          <p :class="{selected: path == '/Rules/orga'}">Organisations</p>
        </RouterLink>
      </div>
      <div class='slot'>
        <RouterLink to='/Rules/spell'>
          <p :class="{selected: path == '/Rules/spell'}">Sorts</p>
        </RouterLink>
      </div>
      <div class='slot'>
        <RouterLink to='/Rules/gear'>
          <p :class="{selected: path == '/Rules/gear'}">Equipements</p>
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
