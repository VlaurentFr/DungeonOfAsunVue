<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/FooterBar.vue'
import Nav from './components/NavBar.vue'
</script>

<template>
  <Nav></Nav>
  <div id="container">
    <RouterView />
    <!-- <Footer></Footer> -->
  </div>
  
</template>

<style scoped>

</style>
