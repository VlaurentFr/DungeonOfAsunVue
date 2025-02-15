<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Footer from './components/FooterBar.vue'
import Nav from './components/NavBar.vue'
import MegaNavBar from './components/MegaNavBar.vue';
import { ref, watch } from 'vue';

const route = useRoute()
const loading = ref(true)

watch(route, (newValue) => {
  if(newValue.name == 'home'){
    setTimeout(() => loading.value = false, 2000)
  } else {
    loading.value = false;
  }
  window.scrollTo(0,0);
})
</script>

<template>
  <div v-if="!loading" class="visible">
    <Nav></Nav>x
    <!-- <MegaNavBar></MegaNavBar> -->
    <div id="container">
      <RouterView />
      <!-- <Footer></Footer> -->
    </div>
  </div>
  <div v-else>
    <div id="container">
      <img id="logo-loading" src="../src/assets/DoA.png"/>
    </div>
  </div>
  
</template>

<style scoped>
#logo-loading {
  height: 400px;
  margin: auto;
}
</style>

<style>
.tabs {
  text-align: left;
  position: relative;
  border-bottom: solid var(--primaryColor) 4px;
}
.tabs input {
  position: absolute;
  opacity: 0;
  margin: 0;
  padding: 0;
}

.tabs input + label:hover {
  color: var(--primaryColor);
}

.tab:checked + label {
  color: black;
  background-color: var(--primaryColor);
}
.tab:checked + label:hover {
  color: var(--textColor);
}

.tabs input + label {
  margin: 12px 0 0 0;
  transition: all 0.3s;
  text-align: center;
  color: var(--textColor);
  height: 48px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding: 5pt 10pt;
  font-size: 16px;
  background: var(--backgroundColor);
  border-radius: 4px 4px 0 0;
  cursor: pointer;
}

.tabs input {
  position: relative;
  opacity: 0;
  margin: auto !important;
  padding: 0;
}

</style>
