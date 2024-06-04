<script setup lang="ts">
import { computed, ref } from 'vue';
import { masterySword, masteryMagic, masteryShield } from '@/mock/weaponMasteryMock'

const selectedRankW = ref("S+")
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
      <h1>La Maîtrises d'armes</h1>
      <!-- <h2>Découvrez comment créer votre personnage pour<span> jouer </span></h2> -->
    </div>
      <div class="title-section">
        <h3>Qu'est-ce que c'est ?</h3>
      </div>
      <div>
        <p>Afin d'obtenir l'accès a certaines classe et de nouvelles compétences il vous faudra vous entrainer à manier vos armes. Pour cela vous pouvez lors d'un entrainement, entrainer soit une ou deux armes a la fois, vous pouvez également vous faire aider par quelqu'un possèdant une plus grande maitrise que vous afin d'obtenir un bonus d'expériences lors de l'entrainement. Chaque entrainement permet de lancer  2 <i class="fas fa-dice-d20"></i> 6 se qui revient a 1 <i class="fas fa-dice-d20"></i> 6 par armes. Le tuteur quand a lui multiplie le résultat obtenue par x1,5. Votre maitrise d'armes s'accompagnera alors de nouveau bonus lorsque vous serez equipé de l'arme associer.</p>
      </div>
      <div class="title-section">
        <h3>Capacités</h3>
      </div>
      <div>
        <p>Au cours de votre progressions vous pourrez débloquer deux capacité, utilisable au besoin :</p>
        <br/>
        <ul>
          <li>
            <p><span>Dash</span> permet de reculer ou avancer rapide a n'importe quel moment, 2 fois par combat</p>
          </li>
          <li>
            <p><span>Secours</span> permet de téléporté un allier à moins de 10m a côté de soi, 1 fois par comba</p>
          </li>
        </ul>
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
              <td>E+</td>
              <td>D</td>
              <td>D+</td>
              <td>C</td>
              <td>C+</td>
              <td>B</td>
              <td>B+</td>
              <td>A</td>
              <td>A+</td>
              <td>S</td>
              <td>S+</td>
            </tr>
            <tr>
              <td><p>Exp. Cumul. requises</p></td>
              <td>0</td>
              <td>3</td>
              <td>9</td>
              <td>21</td>
              <td>39</td>
              <td>66</td>
              <td>102</td>
              <td>150</td>
              <td>210</td>
              <td>284</td>
              <td>372</td>
              <td>488</td>
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
                  <option>E+</option>
                  <option>D</option>
                  <option>D+</option>
                  <option>C</option>
                  <option>C+</option>
                  <option>B</option>
                  <option>B+</option>
                  <option>A</option>
                  <option>A+</option>
                  <option>S</option>
                  <option>S+</option>
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
                  <option>E+</option>
                  <option>D</option>
                  <option>D+</option>
                  <option>C</option>
                  <option>C+</option>
                  <option>B</option>
                  <option>B+</option>
                  <option>A</option>
                  <option>A+</option>
                  <option>S</option>
                  <option>S+</option>
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
                  <option>E+</option>
                  <option>D</option>
                  <option>D+</option>
                  <option>C</option>
                  <option>C+</option>
                  <option>B</option>
                  <option>B+</option>
                  <option>A</option>
                  <option>A+</option>
                  <option>S</option>
                  <option>S+</option>
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
  </div>
</template>

<style scoped>
td p {
  background-color: var(--primaryColor);
  border-radius: 8px;
  color: black;
  padding: 4px 8px;
}
select {
  width: 68px;
  padding: 8px;
  margin-left: 24px;
  border-radius: 4px;
  color: white;
  background-color: #202124;
  height: fit-content;
}
select:-ms-expand {
  right: 8px;
  background-color: aliceblue;
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
  background: #0F0F0F;
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
  filter: grayscale();
}
.illustration::before {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  content: "";
  z-index: 1;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%,rgba(0, 0, 0, 0.20) 100%);
}
.illustration::after {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  content: "";
  background: linear-gradient(0deg, rgba(36, 190, 116, 0.60) 0%,rgba(36, 190, 116, 0.20) 100%);
}
.card-content {
  display: flex;
  width: 400px;
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