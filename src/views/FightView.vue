<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
  <div id="combat" class="visible">
    <div class='header'>
      <h1>Les Combats</h1>
      <h2>Découvrez comment ce déroule les <span> combats </span></h2>
      <div class="banner banner-fade">
        <div class="hero" ></div>
      </div>
    </div>
    <div id="section-1">
      <div>
        <h3>Les mecaniques de bases</h3>
        <p>La mécanique de base est celle du lancé de dés pour réussir une actions. L'actions est réussi si la valeur obtenue est inférieur à la statistique exigée. On aura donc soit un jets de <span>FOR(ce)</span> pour un déplacement complexe ou une attaque avec une arme, soit un jet de <span>SAG(esse)</span> pour l'usage de la magie. Lorsqu'une attaque est réussi qu'elle soit magique ou physique, un certains nombres de dés sont lancées afin de déterminer les points de vie infligées à la cible dépendant du sort et de l'armes utilisées. Lorsque vous êtes attaqué, vous avez <span>DEX %</span> d'esquiver dans la mesure du possible (-10 par esquive dans le tour) et <span>FOR %</span> de chance de parrer par armes équiper le permettant.</p>
      </div>
      <div class="image-left no-clip">
        <img src="@/assets/combats/combat8.png" />
        <div class="filter-left"></div>
      </div>
      <div class="image-left no-clip">
        <img src="@/assets/combats/combat6.png" />
        <div class="filter-left"></div>
      </div>
    </div>
    <div id="section-2">
      <div>
        <h3>Les points</h3>
        <div class="row">
          <div>
            <h4><i class="fas fa-shield-alt"></i> Armures</h4>
            <p>Cette règle modifie celle des points de vie et d'attaque. Lorsqu'un personnage est équipé d'une armure et qu'il reçoit une attaque, il peut soustraire au nombre de points d'attaque de son ennemi ses points de défense (DEF). Cependant dans le cas d'attaque magique cela se base sur la deuxième statistique de l'armure appelé "Résistance" ou RES. Une Armure peut donc avoir un grand nombre de points de Défense mais une faible Résistance et dans ce cas ne pas prémunir d'une bonne protection contre les mages et inversement. Elle peut avoir peu de points de défense mais beaucoup de résistance protégeant mieux des mages que de n'importe qu'elle autres guerriers sanguinaires qui chercherai a vous faire la peaux. Si une attaque fait 6 de dégâts mais que la cible a 3 points d'armure, l'attaque ne fera que 3 points de dégâts (6-3 = 3).</p>
          </div>
          <div>
            <h4><i class="fas fa-bolt"></i> Energie</h4>
            <p class="little-text">Les points d'énergie sont dépensés quand un personnage utilise un pouvoir magique ou pour optimiser ses chances de réussite (+5 par pts). Ils ne se régénèrent que dans des circonstances particulières, comme du repos ou l'usage de potions.  Si un personnage tente d'utiliser de la magie ou d'augmenter ses chances de réussite sur un lancer sans points d'énergie, il utilisera des points de vie à la place.</p>
          </div>
        </div>
      </div>
      <div class="image">
        <img src="@/assets/combats/combat2.png" />
        <div class="filter"></div>
      </div>
    </div>
    <div id="section-2" class="second">
      <div>
        <h3>Les Parades & Protections</h3>
        <div class="row">
          <div>
            <h4><i class="fas fa-shield-alt"></i> Parade</h4>
            <p>Si vous possèdez une armes pouvant parrer (exemple: Bouclier, épée, dague...) pour chacune d'elle vous pouvez parrer un coup par tour basé sur un jet de <span>FORCE</span>. Permettant de réduire les dégâts tranchants et contondants en plus de la <u>Défense</u> de votre équipement</p>
          </div>
          <div>
            <h4><i class="fas fa-book"></i> Protection</h4>
            <p class="little-text">La protection fonctionne de la même manière que la parade, elle parre un coup et réduits les dégâts perforants et magiques en plus de votre <u>Résistance</u></p>
          </div>
        </div>
      </div>
    </div>
    <div id="section-3">
      <div>
        <h3>Temps Stratégiques</h3>
        <p>Une fois par combat, les joueurs peuvent demander un point « Strat ». Si le MJ l'accorde, les joueurs peuvent se concerter (hors RP) sur une stratégie commune durant un temps décidé par le MJ.</p>
      </div>
      <div class="image-left">
        <img src="@/assets/combats/chrono.png" />
        <div class="filter-left"></div>
      </div>
    </div>
    <div id="section-4">
      <div class="banner banner-fade">
        <h3>Pour aller plus loin</h3>
        <p>Les mechaniques avancées sont là pour pimenter le jeu, elles sont donc plus complexe à apréhender et peuvent être mise de côté dans certaines campagne afin de profiter d'avantages de l'histoire que du gameplay. Chaque mécaniques est optionnelle.</p>
        <div src="../assets/combats/combat3.png"></div>
      </div>
    </div>
    <div id="section-5" class="row">
      <div>
        <h3>Les postures</h3>
        <p>
          Les postures sont des possibilités tactiques offertes aux personnages pour mettre l'accent sur une approche des situations au détriment d'autres caractéristiques. La posture peut être changée en début de tour uniquement.
          <span>La posture offensive</span> permet à un personnage d'infliger automatiquement le maximum de dégâts possibles, sans avoir à jeter de dé de dégâts. En revanche, toute possibilité de défense est annulée.
          <span>La posture défensive</span> permet à l'utilisateur de répondre à une attaque réussie par une action de défense, comme une parade ou une esquive, annulant les dégâts. Si vous subisser deux attaque consecutif vous pouver faire la deuxieme action de défense pas encore réalisé lors de ce tour. L'esquive n'est normalement pas active contre une attaque magique mais, pour ne pas la réduire à une attaque à "dêgats automatique", le joueur en posture défensive peut esquiver les attaques magiques sur une réussite critique.
          <span>La posture focus</span> réduit le nombre de points d'énergie nécessaires pour utiliser l'énergie est réduites de 1 tout les 5 points de magie utilisés et octroie un bonus aux jets de sagesse (+5 SAG). En revanche, toute possibilité de défense est annulée.
        </p>
      </div>
      <div class="little-text">
        <h3>Les avantages et déavantages</h3>
        <p >
          À la suite de certaines actions, le MJ peut accorder un avantage ou infliger un désavantage à un joueur, comme lors d'une tactique bien montée, d'une déduction éclairée pour les avantages ou à l'inverse d'un empoisonnement ou d'un échec cuisant pour les désavantages. Un seul avantage et un seul désavantage peuvent être cumulés. Les avantages peuvent être utilisés par le joueur lorsqu'il le souhaite pour prendre l'initiative ou gagner un bonus de 10 sur un jet. Les désavantages sont quant à eux utilisés par le MJ lorsqu'il le souhaite pour infliger des malus similaires.
        </p>
      </div>
    </div>
    <div id="section-6">
      <div class="banner banner-fade">
        <h3>Augmenter votre puissance</h3>
        <h4>Grâce aux maîtrises</h4>
        <button @click="router.push({ path: '/Rules/weapons' })">Voir les maîtrises</button>
        <div class="banner-img" src="../assets/combats/combat4.png" ></div>
      </div>
    </div>
</div>
</template>

<style scoped>
p span {
  color:var(--primaryColor);
}
#section-1 {
  display: flex;
  justify-content: center;
  height: 600px;
  margin-top: 256px;
}
p, h3 {
  position: relative;
  z-index: 1;
}
#section-2 {
  display: flex;
  height: 800px;
}
#section-2.second {
  height: 500px;
}
#section-2 .row {
  justify-content: space-between;
  gap: 64px;
}
#section-2 h4 {
  color: var(--textColor);
  font-family: Work Sans;
  font-size: 20px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
}
#section-2 p {
  max-width: 50ch;
}
#section-2 .little-text {
  max-width: 40ch;
}
#section-3 {
  display: flex;
  justify-content: center;
  height: 500px;
}
#section-3 p {
  max-width: 40ch;
}
#section-5 {
  justify-content: space-between;
  gap: 64px;
}
#section-5 h3 {
  font-size: 24px;
}
#section-5 .little-text {
  max-width: 40ch;
}
.image-left {
  position: absolute;
  left: 0;
  width: 30%;
  height: 600px;
}
.filter-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-90deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
}
.image {
  position: absolute;
  right: 0;
  height: 800px;
  transform: translateY(25%);
}
.image::before {
  content: '';
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
}
.filter {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
}
.image img {
  border-radius: 8px;
  height: 800px;
  object-fit: cover;
}
.image-left img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-mask-image: url(../assets/splash2.png);
  mask-image: url(../assets/splash2.png);
  mask-repeat: no-repeat;
  mask-size: 100% 100%, contain;
  transform: scaleX(-1);
}
.image-left.no-clip img {
  mask-image: none;
}
.banner {
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  color: var(--textColor);
}
/* .banner::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100vw;
  height: 600px;
  background: linear-gradient(0deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
} */
.banner-fade::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100vw;
  height: 750px;
  background: linear-gradient(0deg, var(--backgroundColor) 10%, #f1f1f100 100%), no-repeat;
}
.banner h3 {
  margin: 120px auto 0;
  z-index: 1;
}
.banner h4 {
  margin: auto;
  z-index: 1;
  font-size: 20px;
}
.banner button {
  border-radius: 8px;
  border: none;
  background-color: var(--primaryColor);
  padding: 16px 32px;
  cursor: pointer;
  width: fit-content;
  z-index: 1;
}
.banner p {
  text-align: center;
  z-index: 1;
}
.banner div {
  /* position: absolute;
  width: 100vw;
  left: 0;
  height: 600px;
  z-index: -1;
  object-fit: cover;
  object-position: bottom;
  clip-path: polygon(5% 3%, 45% 10%, 55% 0, 83% 15%, 100% 0, 100% 100%, 0 100%, 0 34%, 0 24%, 0 12%); */
  position: absolute;
  width: 100vw;
  left: 0;
  height: 750px;
  z-index: -1;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  clip-path: polygon(5% 3%, 45% 10%, 55% 0, 83% 15%, 100% 0, 100% 100%, 0 100%, 0 34%, 0 24%, 0 12%);
}
.banner-fade .banner-img {
  background-position: top;
  background-image: url(../assets/rpg_weapon.png);
}
.banner-fade .hero {
  background-image: url(../assets/combats/combat1.png);
  clip-path: none;
  background-position: bottom;
  top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 90% 100%, 80% 94%, 50% 99%, 36% 83%, 21% 94%, 7% 88%, 0 100%);

}
.banner-fade {
  margin-bottom: 128px;
}
.banner-fade div {
  position: absolute;
  width: 100vw;
  left: 0;
  height: 750px;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/village.png);
  background-attachment: fixed;
  clip-path: polygon(5% 3%, 45% 10%, 55% 0, 83% 15%, 100% 0, 100% 100%, 0 100%, 0 34%, 0 24%, 0 12%);
}
@media screen and (max-width: 768px) {
  .image, .image-left {
    display: none;
  }
  #section-3 {
    justify-content: flex-start;
  }
  #section-2 {
    height: auto;
  }
}
</style>