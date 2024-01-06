<script setup lang="ts">
import { weapons, lightgears, gears, heavygears, shields } from '../mock/gearMock.js';

</script>
<template>
  <div class='visible'>
    <div>
    <div>
      <div>
        <div className='title-page'>
          <h1>Equipements</h1>
          <h2>Découvrez la liste des équipements de l'univers</h2>
        </div>
        <h3>Liste des équipements</h3>
        <article class='row'>
          <div>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of weapons" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{w.cost}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">DEF</th>
                  <th colspan="1">RES</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="g of lightgears" :key="g.name">
                  <td>{{g.name}}</td>
                  <td>{{g.def}}</td>
                  <td>{{g.res}}</td>
                  <td>{{g.cost}}</td>
                </tr>
              </tbody>
           </table>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">DEF</th>
                  <th colspan="1">RES</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="g of gears" :key="g.name">
                  <td>{{g.name}}</td>
                  <td>{{g.def}}</td>
                  <td>{{g.res}}</td>
                  <td>{{g.cost}}</td>
                </tr>
              </tbody>
           </table>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">DEF</th>
                  <th colspan="1">RES</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="g of heavygears" :key="g.name">
                  <td>{{g.name}}</td>
                  <td>{{g.def}}</td>
                  <td>{{g.res}}</td>
                  <td>{{g.cost}}</td>
                </tr>
              </tbody>
           </table>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">DEF</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of shields" :key="s.name">
                  <td>{{s.name}}</td>
                  <td>{{s.def}}</td>
                  <td>{{s.cost}}</td>
                </tr>
              </tbody>
           </table>
          </div>
        </article>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.row {
  gap: 64px;
  overflow: auto;
}

</style>