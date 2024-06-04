<script setup lang="ts">
import { computed, ref } from 'vue';
import {useRoute} from 'vue-router';
import { MOB } from '@/mock/bestiaryMock';

const route = useRoute();
const path = computed(() =>route.hash || "#");
</script>
<template>
  <aside>
    <div class="all" :class="{selected: path.includes('all')}">
      <a href="#all">
        <p>Tous</p>
      </a>
    </div>
    <div class='slot' v-for="(link, index) of (MOB as Array<any>)" :key="link.name">
      <a :href="'#'+link.name">
        <p 
        :class="{
          selected: path.includes(link.name),
          is_dot: index != 0 && link.name.slice(0,1) === MOB[index-1].name.slice(0,1)}"
        >
          {{ index == 0 || link.name.slice(0,1) !== MOB[index -1].name.slice(0,1) ? link.name.slice(0,1) : "·" }}
        </p>
      </a>
    </div>
  </aside>
</template>

<style scoped>
aside {
  position: fixed;
  background:black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 8px;
  transition: all 300ms ease-in-out;
  width: 73px;
  top: 82px;
  left: 0;
  border-radius: 0px;
  height: calc(100vh - 72px);
  overflow: auto;
  border-right: 1px solid grey;
}
@media screen and (max-width: 768px) {
  aside {
    position: fixed;
    background:black;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    z-index: 1;
    gap: 8px;
    transition: all 300ms ease-in-out;
    width: 100vw;
    top: calc(100vh - 73px);
    left: 0;
    border-radius: 0px;
    height: 73px;
    overflow: auto;
    border-top: 1px solid grey;
    border-right: none;
  }
}
.slot {
  display: flex;
  align-items: center;
  justify-content: center;
}
.slot p{
  height: 48px;
  width: 48px;
  font-style: normal;
  font-size: 24px;
  color: var(--textColor);
  padding: 6px;
  margin: 0 12px;
  transition: all ease-in-out 300ms;
  text-align: center;
}
.slot .is_dot {
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slot a, .all a {
  text-decoration: none;
}
.slot .selected {
  color: black;
  background-color: var(--secondaryColor);
  border-radius: 6px;
}
.slot p:hover {
  color: black;
  background-color: var(--secondaryColor);
  border-radius: 6px;
  cursor: pointer;
}
.all {
  display: flex;
  width: 48px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #202124;
  margin: 12px;
}
.selected {
  color: black;
  background-color: var(--secondaryColor);
  border-radius: 6px;
}
.all p {
  color: #FFF;
  font-family: Work Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
