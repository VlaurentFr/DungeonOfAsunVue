<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/FooterBar.vue'
import Nav from './components/NavBar.vue'

import { useDark } from '@vueuse/core'


const isDark = useDark()
</script>

<template>
  <span v-if="isDark" class='background'></span>
  <Nav></Nav>
  <div id="container">
    <RouterView />
  </div>
  <Footer></Footer>
</template>

<style scoped>

</style>
