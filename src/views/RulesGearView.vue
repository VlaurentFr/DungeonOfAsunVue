<script setup lang="ts">
import { ref } from 'vue';
import { stick, daggers, swords, Axes, spears, hands, bows, masses, gears, shields, spellBook, potions, feed, alcool, lunch, house, stones, treasure, divers } from '../mock/gearMock.js';

const selected = ref('WEAPONS');

</script>
<template>
  <div class='visible'>
    <div>
    <div>
      <div>
        <div class='header'>
          <h1>Les Objets</h1>
          <h2>Découvrez la liste des <span> objets </span></h2>
        </div>
        <p>1 po = 100 pa = 10 000 pc</p>
        <p>1 pa = 100 pc</p>
        <div class="card tabs">
          <input id="tab-1" type="radio" class="tab tab-selector" checked="true" name="tab"/>
          <label for="tab-1" class="tab tab-primary" @click="selected = 'WEAPONS'">Armes</label>
          <input id="tab-2" type="radio" class="tab tab-selector" name="tab"/>
          <label for="tab-2" class="tab tab-success" @click="selected = 'GEARS'">Armures</label>
          <input id="tab-3" type="radio" class="tab tab-selector" name="tab" />
          <label for="tab-3" class="tab tab-default" @click="selected = 'SHIELDS'">Bouclier</label>
          <input id="tab-4" type="radio" class="tab tab-selector" name="tab" />
          <label for="tab-4" class="tab tab-warning" @click="selected = 'MAGIC'">Magie</label>
          <input id="tab-5" type="radio" class="tab tab-selector" name="tab" />
          <label for="tab-5" class="tab tab-warning" @click="selected = 'FEEDS'">Repas</label>
          <input id="tab-6" type="radio" class="tab tab-selector" name="tab" />
          <label for="tab-6" class="tab tab-warning" @click="selected = 'HOUSES'">Logements</label>
          <input id="tab-7" type="radio" class="tab tab-selector" name="tab" />
          <label for="tab-7" class="tab tab-warning" @click="selected = 'TRESOR'">Trésors</label>
          <input id="tab-8" type="radio" class="tab tab-selector" name="tab" />
          <label for="tab-8" class="tab tab-warning" @click="selected = 'OTHERS'">Divers</label>
        </div>
        <article class='row'>
          <div  v-if="selected === 'WEAPONS'">
            <h3>Bâtons</h3>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of stick" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3>Dagues</h3>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of daggers" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3>Epées</h3>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of swords" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3>Haches</h3>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of Axes" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3>Lance</h3>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of spears" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3>Poings</h3>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of hands" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3>Arc</h3>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of bows" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3>Masses</h3>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of masses" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div  v-if="selected === 'GEARS'">
            <h3>Armures</h3>
            <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">DEF</th>
                  <th colspan="1">RES</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="g of gears" :key="g.name">
                  <td>{{g.name}}</td>
                  <td>{{g.def}}</td>
                  <td>{{g.res}}</td>
                  <td>{{g.type}}</td>
                  <td><p>{{g.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'SHIELDS'">
           <h3>Boucliers</h3>
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
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'FEEDS'">
           <h3>Nourriture</h3>
           <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of feed" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
           <h3>Alcool</h3>
           <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of alcool" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
           <h3>Repas</h3>
           <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of lunch" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'HOUSES'">
           <h3>Nourriture</h3>
           <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of house" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'MAGIC'">
           <h3>Sorts</h3>
           <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of spellBook" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
           <h3>Potions</h3>
           <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Effet</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of potions" :key="s.name">
                  <td>{{s.name}}</td>
                  <td>{{s.effect}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'TRESOR'">
           <h3>Pierres précieuses</h3>
           <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of stones" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
           <h3>Trésors</h3>
           <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of treasure" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'OTHERS'">
           <h3>Divers</h3>
           <table>
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of divers" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
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
table {
  width: 100%;
}
th, td {
  text-align: left;
}
td p {
  background-color: var(--primaryColor);
  border-radius: 8px;
  color: black;
  padding: 4px 8px;
  width: fit-content;
}
h3 {
  font-size: 24px;
  margin-top: 64px;
}
.tabs {
  margin-top: 64px;
}
.row {
  gap: 64px;
  width: 100%;
  overflow: auto;
}
.row div {
  flex: 1;
}

</style>