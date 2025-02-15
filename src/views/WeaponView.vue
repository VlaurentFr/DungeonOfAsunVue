<script setup lang="ts">
import { computed, ref } from 'vue';
import { masterySword, masteryMagic, masteryShield } from '@/mock/weaponMasteryMock'

const selectedRankW = ref("H")
const selectedRankM = ref("E")
const selectedRankB = ref("E")

const compRankW = computed(() => {
  const res = masterySword.filter((v) => v.rank == selectedRankW.value )[0]
  return res
})
// MAGIE
const compRankM = computed(() => {
  const res = masteryMagic.filter((v) => v.rank == selectedRankM.value )[0]
  return res
})
// BOUCLIER
const compRankB = computed(() => {
  const res = masteryShield.filter((v) => v.rank == selectedRankB.value )[0]
  return res
})
</script>
<template>
  <div class='visible'>
    <div class='header'>
      <h1>Les Types d'armes</h1>
    </div>
    <table id="table-weapons">
      <thead>
        <tr>
          <td>Armes</td>
          <td>Catégorie</td>
          <td>Description</td>
          <td>Basé sur</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p>Epée</p></td>
          <td>Tranchant</td>
          <td>Les épées offrent un bon équilibre entre portée et puissance. Idéales pour les combats rapprochés, elles permettent à leur utilisateur de parer et d'attaquer avec efficacité</td>
          <td>FOR</td>
        </tr>
        <tr>
          <td><p>Hache</p></td>
          <td>Tranchant</td>
          <td>Conçue pour infliger des coups puissants, la hache est une arme brutale, capable de briser les défenses et de couper à travers les armures</td>
          <td>FOR</td>
        </tr>
        <tr>
          <td><p>Masse</p></td>
          <td>Contondant</td>
          <td>Arme lourde et imposante, la masse est parfaite pour écraser les os et les armures. Sa force d'impact peut étourdir ou briser la concentration d’un adversaire</td>
          <td>FOR</td>
        </tr>
        <tr>
          <td><p>Poing</p></td>
          <td>Contondant</td>
          <td>Les armes poings sont l'arme ultime pour le combat au corps à corps direct. Utilisés par les guerriers, ils offrent une vitesse inégalée et permettent des enchaînements rapides. Un utilisateur expert peut exploiter la rapidité et la précision des coups pour neutraliser ses adversaires</td>
          <td>FOR/DEX</td>
        </tr>
        <tr>
          <td><p>Bouclier</p></td>
          <td>Défensif</td>
          <td>Le bouclier est l’arme défensive par excellence, offrant une protection accrue contre les attaques ennemies. Utilisé en combinaison avec d'autres armes, il permet de parer les coups</td>
          <td>FOR</td>
        </tr>
        <tr>
          <td><p>Arc</p></td>
          <td>Perforant</td>
          <td>L’arc est l'arme de prédilection des archers, combinant vitesse et précision. Avec une portée considérable, il permet d'attaquer à distance avec des flèches perçantes</td>
          <td>DEX</td>
        </tr>
        <tr>
          <td><p>Arbalète</p></td>
          <td>Perforant</td>
          <td>L'arbalète est une arme de tir précise et puissante, capable de tirer des carreaux à haute vitesse. Elle demande plus de temps pour être rechargée que l'arc, mais chaque tir est plus perforant</td>
          <td>DEX</td>
        </tr>
        <tr>
          <td><p>Lance</p></td>
          <td>Perforant</td>
          <td>La lance offre une excellente portée, permettant à son porteur de garder ses adversaires à distance. Elle est idéale pour les combats en ligne, tout en pouvant être lancée pour des attaques à distance</td>
          <td>DEX</td>
        </tr>
        <tr>
          <td><p>Dague</p></td>
          <td>Tranchant</td>
          <td>Légère et rapide, la dague est une arme discrète et mortelle, parfaite pour les attaques sournoises ou les combats rapides. Elle permet des attaques rapides et précises, mais manque de portée et de puissance brute</td>
          <td>DEX</td>
        </tr>
      </tbody>
    </table>
    <div class="title-section">
      <h3>Complément</h3>
    </div>
    <p>Les dégâts et jet de réussite d’attaque sont basés sur une statistique en fonction de la catégorie de l’arme. Les armes de combat plus brutales comme la plupart des armes tranchantes et contondantes dépendent de la force du personnage. Tandis que les armes plus techniques et rapides sont basées sur la dextérité du personnage.</p>
    <div class="header second-header">
      <h1>Les Maîtrises d'armes</h1>
    </div>
    <div class="title-section">
      <h3>Qu'est-ce que c'est ?</h3>
    </div>
    <div class="desc">
      <img src="@/assets/rpg_weapon.png"/>
      <div class="filter"></div>
      <p>Afin d'obtenir l'accès a certaines classe et de nouvelles compétences il vous faudra vous entrainer à manier vos armes. Pour cela vous pouvez lors d'un entrainement, entrainer soit une ou deux armes a la fois, vous pouvez également vous faire aider par quelqu'un possèdant une plus grande maitrise que vous afin d'obtenir un bonus d'expériences lors de l'entrainement. Chaque entrainement permet de lancer  2 <i class="fas fa-dice-d20"></i> 6 se qui revient a 1 <i class="fas fa-dice-d20"></i> 6 par armes. Le tuteur (un maître dans la maîtrise de l'arme) quand a lui multiplie le résultat obtenue par x1,5. Votre maitrise d'armes s'accompagnera alors de nouveau bonus lorsque vous serez equipé de l'arme associer.</p>
    </div>
    <div class="title-section">
      <h3>L'expériences</h3>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th colspan="13">Niveau de maîtrise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>Niveau de Maîtrise</p></td>
            <td>E</td>
            <td>D</td>
            <td>C</td>
            <td>B</td>
            <td>A</td>
            <td>S</td>
            <td>M(aître)</td>
            <td>H(éros)</td>
          </tr>
          <tr>
            <td><p>Exp. Cumul. requises</p></td>
            <td>0</td>
            <td>21</td>
            <td>52</td>
            <td>100</td>
            <td>170</td>
            <td>276</td>
            <td>436</td>
            <td>675</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colspan="4">Entraînement d'armes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>Type d'entrainement</p></td>
            <td>1 arme</td>
            <td>2 armes</td>
            <td>Tutoré</td>
          </tr>
          <tr>
            <td><p>Exp. Gagné / Armes</p></td>
            <td>2 <i class="fas fa-dice-d20"></i> 6</td>
            <td>1 <i class="fas fa-dice-d20"></i> 6</td>
            <td>x1,5</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colspan="9">Nombre de combats entre les rangs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>Rang</p></td>
            <td>E</td>
            <td>D</td>
            <td>C</td>
            <td>B</td>
            <td>A</td>
            <td>S</td>
            <td>M(aître)</td>
            <td>H(éros)</td>
          </tr>
          <tr>
            <td><p>Combat pour passer au rang suivant</p></td>
            <td>~3</td>
            <td>~5</td>
            <td>~7</td>
            <td>~10</td>
            <td>~15</td>
            <td>~22</td>
            <td>~34</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class='title-section'>
      <h3>Les bonus</h3>
    </div>
    <div class="cards">
      <div class="card">
        <div class="illustration">
          <img src="../assets/swords.png"/>
        </div>
        <div class="card-content">
          <div class="card-head">
            <div>
              <h4>Physiques</h4>
              <p class="sub-title">Epée, Hache, Arc, Lance ...</p>
            </div>
            <div class="row">
              <p>Rang : </p>
              <select v-model="selectedRankW">
                <option>E</option>
                <option>D</option>
                <option>C</option>
                <option>B</option>
                <option>A</option>
                <option>S</option>
                <option>M</option>
                <option>H</option>
              </select>
            </div>
          </div>
          <div class="card-value">
            <div class="current-value-container">
              <p><span>Gain du rang </span></p>
              <p class="current-value">{{ compRankW.bonus }} <span>{{ compRankW.type }}</span></p>
            </div>
            <div>
              <p><span>Bonus cumulées </span></p>
              <ul>
                <li v-for="(b, index) of compRankW?.total" :key="index" :class="{'upgraded': b?.upgraded == true}">
                  <p>{{ b?.bonus }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="illustration">
          <img src="../assets/spellbook.png"/>
        </div>
        <div class="card-content">
          <div class="card-head">
            <div>
              <h4>Magie</h4>
            </div>
            <div class="row">
              <p>Rang : </p>
              <select v-model="selectedRankM">
                <option>E</option>
                <option>D</option>
                <option>C</option>
                <option>B</option>
                <option>A</option>
                <option>S</option>
                <option>M</option>
                <option>H</option>
              </select>
            </div>
          </div>
          <div class="card-value">
            <div class="current-value-container">
              <p><span>Gain du rang </span></p>
              <p class="current-value">{{ compRankM.bonus }} <span>{{ compRankM.type }}</span></p>
            </div>
            <div>
              <p><span>Bonus cumulées </span></p>
              <ul>
                <li v-for="(b, index) of compRankM?.total" :key="index" :class="{'upgraded': b?.upgraded == true}">
                  <p>{{ b?.bonus }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="illustration">
          <img src="../assets/shield.png"/>
        </div>
        <div class="card-content">
          <div class="card-head">
            <div>
              <h4>Boucliers</h4>
            </div>
            <div class="row">
              <p>Rang : </p>
              <select v-model="selectedRankB">
                <option>E</option>
                <option>D</option>
                <option>C</option>
                <option>B</option>
                <option>A</option>
                <option>S</option>
                <option>M</option>
                <option>H</option>
              </select>
            </div>
          </div>
          <div class="card-value">
            <div class="current-value-container">
              <p><span>Gain du rang </span></p>
              <p class="current-value">{{ compRankB.bonus }} <span>{{ compRankB.type }}</span></p>
            </div>
            <div>
              <p><span>Bonus cumulées </span></p>
              <ul>
                <li v-for="(b, index) of compRankB?.total" :key="index" :class="{'upgraded': b?.upgraded == true}">
                  <p>{{ b?.bonus }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title-section">
      <h3>Complément</h3>
    </div>
    <p>Les bonus indiqués sont des bonus de dégâts aux lancers d’attaque, augmentant ainsi les dégâts du personnage. Ces bonus s'appliquent également sur les compétences de classe. Il est aussi possible de débloquer une classe selon le niveau de maîtrise de son ou ses armes, offrant des bonus de statistiques ainsi que des compétences.</p>
  </div>
</template>

<style scoped>
.second-header {
  margin-top: 240px;
}
table {
  margin-bottom: 120px;
}
#table-weapons td{
  text-align: left;
}
td p {
  background-color: var(--primaryColor);
  border-radius: 8px;
  color: var(--textColor);
  padding: 4px 8px;
}
select {
  width: 68px;
  padding: 8px;
  margin-left: 24px;
  border-radius: 4px;
  color: var(--textColor);
  background-color: var(--backgroundColor);
  height: fit-content;
}
select:-ms-expand {
  right: 8px;
  background-color: aliceblue;
}

.desc img {
  width: 620px;
  position: absolute;
  z-index: -1;
  /* top: 0; */
  right: 0;
  overflow: visible;
  height: 745px;
  object-fit: cover;
  overflow: auto;
  -webkit-mask-image: url(../assets/splash2.png);
  mask-image: url(../assets/splash2.png);
  mask-repeat: no-repeat;
  mask-size: 100% 100%, contain;

}
.desc .filter {
  width: 620px;
  position: absolute;
  overflow: visible;
  z-index: -1;
  /* top: 0; */
  right: 0;
  height: 745px;
  background: linear-gradient(90deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
}

@media screen and (max-width: 1124px) {
  img, .filter {
    display: none;
  }
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}
.card {
  display: flex;
  border-radius: 28px;
  background: var(--background);
  overflow: hidden;
}
.illustration {
  position: relative;
  width: 150px;
}
.illustration img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* filter: grayscale(); */
}
/* .illustration::before {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  content: "";
  z-index: 1;
  background: linear-gradient(90deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
}
.illustration::after {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  content: "";
  background: linear-gradient(0deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
} */
.card-content {
  display: flex;
  width: 395px;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  transition: all .3s ease-in-out;
}
.card-head {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.card-head .sub-title {
  font-style: italic;
}
.card-value {
  display: flex;
}
.current-value-container {
  flex: 1;
}
.current-value {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primaryColor);
  border-radius: 8px;
  font-size: 48px;
}
.current-value span {
  font-weight: 400;
  font-size: 16px;
}
.card h4 {
  font-weight: 600;
  font-size: 24px;
}
ul {
  padding: 0 20px;
}
ul .upgraded {
  color: var(--primaryColor);
}
</style>