<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Footer from './components/FooterBar.vue'
import Nav from './components/NavBar.vue'
import { ref, watch } from 'vue';

const route = useRoute()
const loading = ref(true)

watch(route, (newValue) => {
  if(newValue.name == 'home'){
    setTimeout(() => loading.value = false, 2000)
  } else {
    loading.value = false;
  }
})
</script>

<template>
  <div v-if="!loading" class="visible">
    <Nav></Nav>
    <div id="container">
      <RouterView />
      <!-- <Footer></Footer> -->
    </div>
  </div>
  <div v-else>
    <div id="container">
      <img id="logo-loading" src="../src/assets/DoA.svg"/>
    </div>
  </div>
  
</template>

<style scoped>
#logo-loading {
  height: 200px;
  margin: auto;
}
</style>
