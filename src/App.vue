<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Footer from './components/FooterBar.vue'
import Nav from './components/NavBar.vue'
import MegaNavBar from './components/MegaNavBar.vue';
import { ref, watch } from 'vue';
import { useNavbar } from './composables/useNavbar.js';

const route = useRoute()
const loading = ref(true)

watch(route, (newValue) => {
  if(newValue.name == 'accueil'){
    setTimeout(() => loading.value = false, 1000)
  } else {
    loading.value = false;
  }
  window.scrollTo(0,0);
})

useNavbar()
</script>

<template>
  <div v-if="!loading" class="visible">
    <Nav></Nav>
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
