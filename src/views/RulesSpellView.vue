<script setup lang="ts">
import SideMenuRules from '../components/SideMenuRules.vue'
import { spell } from '@/mock/spellMock';
</script>
<template>
  <SideMenuRules></SideMenuRules>
  <div class='visible'>
    <div class='title-page'>
      <h1>Sorts</h1>
      <h2>Découvrez la liste des sorts de l'univers</h2>
    </div>
    <div class="title-section">
        <h3>Liste des sorts</h3>
    </div>
    <article class="row">
      <table>
        <thead>
          <tr>
            <th colspan="1">Nom</th>
            <th colspan="1">Type</th>
            <th colspan="1">Niveau</th>
            <th colspan="1">Description</th>
            <th colspan="1">Effet</th>
            <th colspan="1">Coûts</th>
            <th colspan="1">Portée</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s of spell" :key="s.name">
            <td>{{s.name}}</td>
            <td>{{s.type}}</td>
            <td>{{s.lvl}}</td>
            <td>{{s.desc}}</td>
            <td>{{s.dices?.[0]}}</td>
            <td>{{s.price}}</td>
            <td>{{s.range}}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </div>
</template>

<style scoped>
.row {
  gap: 64px;
  overflow: auto;
}

</style>