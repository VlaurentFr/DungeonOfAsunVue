<script setup lang="ts">
import { computed, ref } from 'vue';

import { stick, daggers, swords, Axes, spears, hands, bows, masses, gears, shields, spellBook, potions, feed, alcool, lunch, house, stones, treasure, divers } from '../mock/gearMock.js';

const search = ref("");

const selectedGear = computed(() => {
  return {
    stick: stick.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    daggers: daggers.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    swords: swords.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    Axes: Axes.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    spears: spears.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    hands: hands.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    bows: bows.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    masses: masses.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    gears: gears.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    shields: shields.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    spellBook: spellBook.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    potions: potions.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    feed: feed.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    lunch: lunch.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    house: house.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    stones: stones.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    alcool: alcool.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    treasure: treasure.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
    divers: divers.filter(x => x.name.toLowerCase().includes(search.value.toLowerCase())),
  }
});

function clickSuggest(name: string) {
  search.value = name;
}

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
          <div id="search">
            <i class="fas fa-search"></i>
            <input placeholder="Rechercher un objet ..." type="text" v-model="search"/>
            <!-- <div class="searh-suggest">
              <div class="suggest" v-for="m of selectedGear" :key="m.name" @click="clickSuggest(m.name)">
                <p>
                  {{ m.name }}
                </p>
              </div>
            </div> -->
          </div>
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
            <h3 v-if="selectedGear.stick.length">Bâtons</h3>
            <table v-if="selectedGear.stick.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of selectedGear.stick" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3 v-if="selectedGear.daggers.length">Dagues</h3>
            <table v-if="selectedGear.daggers.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Effets</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of selectedGear.daggers" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{ w.effect }}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3 v-if="selectedGear.swords.length">Epées</h3>
            <table v-if="selectedGear.swords.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Effets</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of selectedGear.swords" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{ w.effect }}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3 v-if="selectedGear.Axes.length">Haches</h3>
            <table v-if="selectedGear.Axes.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Effets</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of selectedGear.Axes" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{ w.effect }}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3 v-if="selectedGear.spears.length">Lance</h3>
            <table v-if="selectedGear.spears.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Effets</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of selectedGear.spears" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{ w.effect }}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3 v-if="selectedGear.hands.length">Poings</h3>
            <table v-if="selectedGear.hands.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Effets</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of selectedGear.hands" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{ w.effect }}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3 v-if="selectedGear.bows.length">Arc</h3>
            <table v-if="selectedGear.bows.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Effets</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of selectedGear.bows" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{ w.effect }}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
            <h3 v-if="selectedGear.masses.length">Masses</h3>
            <table v-if="selectedGear.masses.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Effets</th>
                  <th colspan="1">Type</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="w of selectedGear.masses" :key="w.name">
                  <td>{{w.name}}</td>
                  <td>{{w.dmg}}</td>
                  <td>{{ w.effect }}</td>
                  <td>{{w.type}}</td>
                  <td><p>{{w.cost}}</p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div  v-if="selected === 'GEARS'">
            <h3 v-if="selectedGear.gears.length">Armures</h3>
            <table v-if="selectedGear.gears.length">
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
                <tr v-for="g of selectedGear.gears" :key="g.name">
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
           <h3 v-if="selectedGear.shields.length">Boucliers</h3>
            <table v-if="selectedGear.shields.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">DEF</th>
                  <th colspan="1">Dégâts</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of selectedGear.shields" :key="s.name">
                  <td>{{s.name}}</td>
                  <td>{{s.def}}</td>
                  <td>{{s.dmg}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'FEEDS'">
           <h3 v-if="selectedGear.feed.length">Nourriture</h3>
           <table v-if="selectedGear.feed.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of selectedGear.feed" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
           <h3 v-if="selectedGear.alcool.length">Alcool</h3>
           <table v-if="selectedGear.alcool.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of selectedGear.alcool" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
           <h3 v-if="selectedGear.lunch.length">Repas</h3>
           <table v-if="selectedGear.lunch.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of selectedGear.lunch" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'HOUSES'">
           <h3 v-if="selectedGear.house.length">Logements</h3>
           <table v-if="selectedGear.house.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of selectedGear.house" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'MAGIC'">
           <h3 v-if="selectedGear.spellBook.length">Sorts</h3>
           <table v-if="selectedGear.spellBook.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of selectedGear.spellBook" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
           <h3 v-if="selectedGear.potions.length">Potions</h3>
           <table v-if="selectedGear.potions.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Effet</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of selectedGear.potions" :key="s.name">
                  <td>{{s.name}}</td>
                  <td>{{s.effect}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'TRESOR'">
           <h3 v-if="selectedGear.stones.length">Pierres précieuses</h3>
           <table v-if="selectedGear.stones.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of selectedGear.stones" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
           <h3 v-if="selectedGear.treasure.length">Trésors</h3>
           <table v-if="selectedGear.treasure.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of selectedGear.treasure" :key="s.name">
                  <td>{{s.name}}</td>
                  <td><p>{{s.cost}}</p></td>
                </tr>
              </tbody>
           </table>
          </div>
          <div  v-if="selected === 'OTHERS'">
           <h3 v-if="selectedGear.divers.length">Divers</h3>
           <table v-if="selectedGear.divers.length">
              <thead>
                <tr>
                  <th colspan="1">Nom</th>
                  <th colspan="1">Coûts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s of selectedGear.divers" :key="s.name">
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

#search {
  position: relative;
  display: flex;
  width: 640px;
  align-items: flex-start;
}
#search .fa-search {
  position: absolute;
  height: 24px;
  width: 24px;
  top: 16px;
  left: 16px;
}
#search .searh-suggest {
  visibility: hidden;
  position: absolute;
  top: 66px;
  background: #606367;
  border-radius: 16px;
  width: 100%;
}
#search .suggest {
  padding: 16px 56px;
  transition: all 300ms ease-in-out;
  border: 1px solid transparent;
  border-radius: 16px;
  cursor: pointer;
}
#search .suggest:hover {
  background-color: #202124;
  color: #24BE74;
  border: #24BE74 1px solid;
}
#search:focus-within .searh-suggest {
 visibility: visible;
}
#search input {
  width: 100%;
  padding: 18.5px 56px;
  border-radius: 16px;
  border: none;
  background-color: #202124;
  color: white;
  font-size: 16px;
}
#search input:focus-visible {
  outline: none;
}
@media screen and (max-width: 768px) {
  #search {
    width: auto;
  }
}
</style>