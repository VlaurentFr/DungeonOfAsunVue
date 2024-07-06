<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
  <main>
    <div>
      <div>
				<section>
					<div class='title-page'>
						<div id="redirect">
							<div class="title-container">
								<h1><span>Jouez</span>à notre système de JDR fait maison</h1>
								<p>Plongez dans un univers captivant et laissez libre cours à votre imagination. Avec un système inspiré de tactical RPG</p>
								<div>
									<RouterLink id="main" to="/Rules/creation">Démarrer mon aventure</RouterLink>
									<a href="#intro">Découvrir</a>
								</div>
							</div>
							<img src="@/assets/cults/orc.png"/>
							<div class="filter"></div>
						</div>
					</div>
				</section>
			</div>
			<div>
					<section id="intro">
						<h3>Découvrez un univers riche et détaillé</h3>
						<p>Un univers riche en histoires épiques, créatures légendaires, et défis sans fin. Que vous soyez un aventurier chevronné ou un novice curieux, notre monde vous offre une expérience unique de jeu de rôle avec ses propres règles, classes, maîtrise d'armes, mythologie, panthéon, objets et sorts.</p>
						<article id="goods">
							<div class="good">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-swords" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
									<path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11z" />
									<path d="M5 13l6 6" />
									<path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" />
									<path d="M10 5.5l-2 -2.5h-5v5l3 2.5" />
								</svg>
								<p>Heroic Fantasy</p>
							</div>
							<div class="good">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-swords" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
									<path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11z" />
									<path d="M5 13l6 6" />
									<path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" />
									<path d="M10 5.5l-2 -2.5h-5v5l3 2.5" />
								</svg>
								<p>Epic fantasy</p>
							</div>
							<div class="good">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-swords" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
									<path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11z" />
									<path d="M5 13l6 6" />
									<path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" />
									<path d="M10 5.5l-2 -2.5h-5v5l3 2.5" />
								</svg>
								<p>Mythic Fantasy</p>
							</div>
							<div class="good">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-swords" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
									<path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11z" />
									<path d="M5 13l6 6" />
									<path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" />
									<path d="M10 5.5l-2 -2.5h-5v5l3 2.5" />
								</svg>
								<p>Dark Fantasy</p>
							</div>
						</article>
					</section>

					<section id="rules">
						<div class="row">
							<div>
								<h3>Des mécaniques de jeu innovantes et intuitives.</h3>
								<p>Découvrez notre système de jeu de rôle sur table avec des mécaniques innovantes et faciles à apprendre.</p>
								<RouterLink to="/Rules/creation">Consulter les règles</RouterLink>
							</div>
							<img src="@/assets/gods/rhabus2-character.png"/>
						</div>
						<div class="wrapper option-1 option-1-1">
							<ol class="stepper">
								<li class="stepper__item">
									<h5 class="stepper__title" @click="() => router.push('/Rules/creation')">1</h5>
									<p class="stepper__desc">Créez votre personnage</p>
								</li>
								<li class="stepper__item">
									<h5 class="stepper__title" @click="() => router.push('/Rules/class')">2</h5>
									<p class="stepper__desc">Choissisez votre classe</p>
								</li>
								<li class="stepper__item">
									<h5 class="stepper__title" @click="() => router.push('/Rules/weapons')">3</h5>
									<p class="stepper__desc">Choisissez vos maîtrises d'armes</p>
								</li>
								<li class="stepper__item">
									<h5 class="stepper__title" @click="() => router.push('/Rules/gear')">4</h5>
									<p class="stepper__desc">Equipez-vous</p>
								</li>
								<li class="stepper__item">
									<h5 class="stepper__title" @click="() => router.push('/Rules/creation#combat')">5</h5>
									<p class="stepper__desc">Combattez !</p>
								</li>
							</ol>
						</div>
					</section>
					<section id="basics">
						<div class="row">
							<img src="@/assets/gods/theomis2-character.png"/>
							<div>
								<h3>Les basique du JdR</h3>
								<p>Les jeux de rôle sont des expériences immersives où l'interaction narrative, l'interprétation de personnages, et la résolution de conflits à travers des règles définies permettent de créer des histoires partagées et mémorables. Le JdR reposent sur l'équilibre entre structure (règles et mécaniques) et créativité (narration et interprétation).</p>
								<article id="goods" class="col">
									<div class="good">
										<i class="fas fa-dice-d20"></i>
										<div>
											<p><span>Des caractéristiques simples :</span></p>
											<p>La force, La Dextérité, La Sagesse et Le Charisme</p>
										</div>
									</div>
									<div class="good">
										<i class="fas fa-dice-d20"></i>
										<div>
											<p><span>Retrouvez des races communes et rares :</span></p>
											<p>Inspiré d'autres jeu de rôles</p>
										</div>
									</div>
									<div class="good">
										<i class="fas fa-dice-d20"></i>
										<div>
											<p><span>Changement de classe et évolution facile :</span></p>
											<p>maîtrise d'aremes et de classe, inpiré de Tactical RPG</p>
										</div>
									</div>
								</article>
							</div>
						</div>
					</section>
					<section id="features">
						<h3>Nos Caractéristiques Uniques</h3>
						<div id="features-slider">
							<div class="feature">
									<h4>Mythologie et Panthéon</h4>
									<p>Plongez dans une mythologie riche et complexe. Découvrez les dieux, déesses et créatures mythiques qui influencent le destin du monde et de ses habitants.</p>
									<img src="@/assets/gods/emhjir2.png"/>
									<div class="filter"></div>
							</div>
							<div class="feature">
								<h4>Classes Personnalisées</h4>
								<p>Découvrez des classes uniques, chacune avec ses propres compétences et capacités spéciales. Devenez un guerrier intrépide, un mage mystérieux, un voleur agile ou une multitude d'autres héros.</p>
								<img src="@/assets/classes/epeiste.png"/>
								<div class="filter"></div>
							</div>
							<div class="feature">
									<h4>Maîtrise d'Armes</h4>
									<p>Notre système de maîtrise d'armes permet une personnalisation poussée de vos capacités de combat. Choisissez votre arme de prédilection et développez vos compétences pour devenir un maître redouté.</p>
									<img src="@/assets/swords.png"/>
									<div class="filter"></div>
							</div>
							<div class="feature">
									<h4>Objets et Sorts</h4>
									<p>Equipez-vous d'objets magiques puissants et apprenez des sorts mystérieux pour surmonter les défis. Notre collection d'objets et de sorts uniques vous offre des possibilités stratégiques infinies.</p>
									<img src="@/assets/spellbook.png"/>
									<div class="filter"></div>
							</div>
						</div>
					</section>
					<section id="section-jouez">
						<div class="banner banner-fade">
							<h3>Jouez</h3>
							<p>Prêt à partir à l'aventure ? Alors n'attendez plus et créer un puissant personnages qu'il soi un mage savant ou bien un grand guerrier intrépide!</p>
							<RouterLink to="/Rules/creation">Créez votre personnages</RouterLink>
							<img class="banner-img" src="../assets/combats/combat3.png" />
						</div>
					</section>
					<section id="FAQ">
						<h3>FAQ</h3>
						<details>
							<summary>Qu'est-ce que Dungeons of Asun ?</summary>
							<div>
								Dungeons of Asun est un jeu de rôle (JdR) immersif où les joueurs incarnent des personnages dans un univers fantastique. Les joueurs interagissent avec l'univers et entre eux en suivant les règles spécifiques du jeu.
							</div>
						</details>
						<details>
							<summary>Où puis-je trouver les règles ?</summary>
							<div>
								Les règles complètes de Dungeons of Asun sont disponibles dans notre section "Règles du Jeu" sur le site. Vous y trouverez des guides détaillés sur la création de personnages, les mécaniques de jeu, les sorts, et plus encore.
							</div>
						</details>
						<details>
							<summary>Quelle est la mécanique principale utilisée pour les actions et les combats ?</summary>
							<div>
								LA mécanique principale est le lancé de dés 100, si le résultat est en dessous de votre caractéristique alors c'est une réussite, sinon c'est un échec. Si vous oubtenez entre 1-5 ou 96-100 cela rend la réussite ou l'échec critique.
							</div>
						</details>
						<details>
							<summary>Est-ce un système basé sur des dés, des cartes, ou autre chose ?</summary>
							<div>
								Afin d'avoir une mise en place rapide, le système de jeu ce base sur uniquement des dès 4, 6, 8, 12, 20,100.
							</div>
						</details>
						<details>
							<summary>Les règles sont-elles faciles à comprendre pour un débutant ?</summary>
							<div>
								D'après divers test fait avec tout type de niveau de joueurs, il en resort que les règles sont faciles à prendre en main et abordable pour tout type de niveau.
							</div>
						</details>
						<details>
							<summary>Existe-t-il des ressources ou des guides pour les nouveaux joueurs ?</summary>
							<div>
								Vous avez la section Règles du jeu / Système de Jeu ainsi que plein d'autre section pour comprendre. Mais pas de guide spécifiques pour débutant.
							</div>
						</details>
						<details>
							<summary>À quoi ressemble le monde du jeu ? Est-ce médiéval-fantastique, science-fiction, post-apocalyptique, etc. ?</summary>
							<div>
								Dungeons of Asun est un jeu de rôle médiéval-fantastique.
							</div>
						</details>
						<details>
							<summary>Quelles sont les races et classes disponibles pour les personnages joueurs ?</summary>
							<div>
								Pour les races vous aurez un choix varier de peuple Humains, Elfes, Nains, Orc et d'autres encore.
								Les classes quand à elle sont aussi nombreuses que les magies et les armes existes. Si au début vous aurez le choix uniquemententre Noble et Roturier très vite vous pourrez devenir un Epeiste, Brigand, Archer, Voleur ou bien un apprenti en une magie spécifique etc.
							</div>
						</details>
						<details>
							<summary>Y a-t-il des compétences, des talents, des équipements spécifiques ?</summary>
							<div>
								Bien sûr, chaque classe possède des compétences ou sorts différents. De plus, au fils de vos aventures vous pourrez débloquer moultes objets légendaires qui ne sont pas dans la liste des objets d'aventuriers.
							</div>
						</details>
						<details>
							<summary>Faut-il acheter des dés spéciaux, des figurines, des cartes ou d'autres accessoires pour jouer ?</summary>
							<div>
								Pas nécessairement, le seul requis sont les dés 4, 6, 8, 12, 20,100.
							</div>
						</details>
						<details>
							<summary>Y a-t-il des applications ou des outils en ligne recommandés ?</summary>
							<div>
								Comme vous préférez. Rien n'est obligatoire mais pour améliorer l'immersion des joueurs vous pouvez opté pour une soundboard de sound, un peu de musique d'ambience, des accesoires divers et variés.
							</div>
						</details>
						<details>
							<summary>Où peut-on trouver des groupes de joueurs ou des forums pour discuter du jeu ?</summary>
							<div>
								Vous pourrez trouver des joueurs et MJ pour discuter ou former un groupes sur <a href="https://discord.gg/WGR68mBEu3">notre discord</a> en constante évolution. 
							</div>
						</details>
						<details>
							<summary>Y a-t-il des ressources en ligne, comme des forums, des vidéos explicatives, des tutoriels ?</summary>
							<div>
								Vous avez ce site officiel, ainsi que <a href="https://discord.gg/WGR68mBEu3">notre discord</a>.
							</div>
						</details>
						<details>
							<summary>Le jeu a-t-il un support officiel pour les questions et les problèmes </summary>
							<div>
								La section prévue a cette effet de <a href="https://discord.gg/WGR68mBEu3">notre discord</a>.
							</div>
						</details>
						<details>
							<summary>ombien de temps faut-il généralement pour bien comprendre et maîtriser les règles du jeu ?</summary>
							<div>
								Pour les joueurs selon leur expériences en tant que rolliste il leur faudra jusqu'à 1h pour bien acquérir l'essentiel des automatisemes, sans les spécificité ponctuelle.
								Pour un MJ, le temps est plus difficile à estimer car il y a les règles spécifiques en plus, comme par exemple a quel niveau de maitrise d'armes ou quelle nombre d'expereince un joueurs maitrise-t-il sa classe ou peut-il en changer. 
							</div>
						</details>
					</section>
			</div>
		</div>
  </main>
</template>

<style scoped>
h3 {
	max-width: 600px;
}
#redirect {
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 64px;
    flex-wrap: wrap;
    width: fit-content;
}

#redirect img {
	position: absolute;
	top: 0px;
	left: 0;
	right: 0;
	width: 100vw;
	height: 80vh;
	object-fit: cover;
	z-index: -1;
	transform: scaleX(-1);
}
#redirect .filter {
	position: absolute;
	top: 0px;
	left: 0;
	right: 0;
	width: 100vw;
	height: 80vh;
	object-fit: cover;
	z-index: -1;
	background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(36, 190, 116, 0.0) 100%), lightgray 50% / cover no-repeat;
	mix-blend-mode: multiply;

}

.title-container h1 {
	display: flex;
	flex-wrap: wrap;
	max-width: 900px;
	font-size: 56px;
}

.title-container h1 span {
 flex: 1;
}

.title-container p {
	margin-bottom: 10vh;
}
.title-container div {
	display: flex;
	gap: 32px;
	margin-bottom: 20vh;
}
.title-container #main, .title-container a, #rules a, .banner a  {
	border-radius: 8px;
	font-size: 1rem;
	padding: 8px 16px;
	transition: all 300ms ease-in-out;
	cursor: pointer;
	text-decoration: none;
	color: white;
	border: solid transparent 2px;
}

.title-container #main, #rules a, .banner a {
	background-color: var(--primaryColor);
	color: black;

}
.title-container a:hover {
	border: solid white 2px;
}

.title-container #main:hover, #rules a:hover, .banner a:hover {
	border: solid var(--primaryColor) 2px;
	background-color: transparent;
	color: var(--primaryColor);
}

#intro {
	margin: auto;
	text-align: center;
	width: 100%;
}

#intro h3 {
	margin-left: auto;
	margin-right: auto;
}
#intro p {
	margin-left: auto;
	margin-right: auto;
	max-width: 60ch;
}

#goods {
	margin-left: auto;
	margin-right: auto;
	margin-top: 64px;
	display: flex;
	gap: 32px;
	width: fit-content;
	flex-wrap: wrap;
}
#goods.col {
	flex-direction: column;
	margin-left: 0px;
}
#goods .good {
	display: flex;
	gap: 16px;
}

.good svg {
	font-size: 60px;
	padding: 15px;
	margin: 0 15px 0px 0;
	color: var(--primaryColor);
	border: #24BE74 solid 1px;
	border-radius: 8px;
	width: 56px !important;
	height: 56px;
}

.good p {
	display: flex;
	/* justify-content: center; */
	align-items: center;
}

#rules, #basics {
	margin-top: 200px;
	margin-bottom: 200px;
}

#rules p {
	margin-bottom: 32px;
}
#rules .wrapper {
	margin-top: 200px;
}

/************************/
/********* Stepper **********/
/************************/
.stepper {
  display: flex;
	padding: 0;
}

.stepper__item {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
}

.stepper__item:not(:last-child):after {
	content: "";
	position: relative;
	top: calc(clamp(1.5rem, 5vw, 3rem) / 2);
	width: calc(100% - clamp(1.5rem, 5vw, 3rem) - calc(clamp(0.25rem, 2vw, 0.5rem) * 2));
	left: calc(50% + calc(clamp(1.5rem, 5vw, 3rem) / 2 + clamp(0.25rem, 2vw, 0.5rem)));
	height: 2px;
	background-color: #e0e0e0;
	order: -1;
}
.stepper__title {
  font-weight: bold;
  font-size: clamp(1rem, 4vw, 1.25rem);
  margin-bottom: 0.5rem;
	width: clamp(1.5rem, 5vw, 3rem);
	height: clamp(1.5rem, 5vw, 3rem);
	border-radius: 50%;
	border: var(--primaryColor) 4px solid;
	margin: 0 auto 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 300ms ease-in-out;
	cursor: pointer;
}
.stepper__title:hover {
  background-color: var(--primaryColor);
	color: black;
}

.stepper__desc {
  font-size: clamp(0.85rem, 2vw, 1rem);
  padding-left: clamp(0.25rem, 2vw, 0.5rem);
  padding-right: clamp(0.25rem, 2vw, 0.5rem);
}
/************************/
/********* BANNIERE JOUER **********/
/************************/
.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
}
.banner::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100vw;
  height: 600px;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
}
.banner-fade::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100vw;
  height: 500px;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
}
.banner h3 {
  margin: 100px auto 0;
  z-index: 1;
}
.banner h4 {
  margin: auto;
  z-index: 1;
  font-size: 20px;
}
.banner a {
  width: fit-content;
  z-index: 1;
}
.banner p {
  text-align: center;
  z-index: 1;
}
.banner-fade img {
  position: absolute;
  width: 100vw;
  left: 0;
	right: 0;
  height: 500px;
  z-index: -1;
  object-fit: cover;
  object-position: center;
}

/************************/
/********* FAQ **********/
/************************/
details{
  background-color: #303030;
  color: #fff;
  font-size: 1rem;
	border-radius: 8px;
	border: 1px solid #aaa;
	margin-bottom: 8px;
}

summary {
  padding: .5em 1.3rem;
  list-style: none;
  display: flex;
  justify-content: space-between;  
  transition: all 300ms ease-in-out;
	font-size: 1.2rem;
	cursor: pointer;
	margin-bottom: 0em;
}

summary::-webkit-details-marker {
  display: none;
}

summary:after{
  content: "\002B";
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: .5em;
}

details[open] summary:after{
  content: "\00D7";
}

details[open] div{
  padding: .5em 1em;
}
details a {
	color: var(--primaryColor);
}
</style>

<style scoped>
/************************/
/********* Features **********/
/************************/
#features-slider {
	display: flex;
	flex-direction: row;
	gap: 12px;
}
.feature {
	background: #202124;
	width: 100%;
	margin: 1rem 0;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	position: relative;
	border: #24BE74 solid 1px;
	text-shadow: 1px 1px 2px black;
	overflow: hidden;
	margin-bottom: 200px;
}
.feature:hover {
	width: 200%;
}
.feature p {
	height: 170px;
	position: relative;
	opacity: 0;
	padding: 1em;
	z-index: 2;
}

.feature h4 {
	padding: 1em;
	z-index: 2;
}

.feature:hover p {
	opacity: 1;
}

.feature img {
	top: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
	position: absolute;
	/* filter: blur(2px); */
	z-index: 1;
}

.feature .filter {
	top: 0;
	height: 100%;
	width: 100%;
	position: absolute;
	background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(36, 190, 116, 0.0) 100%), lightgray 50% / cover no-repeat;
	mix-blend-mode: multiply;
	z-index: 1;
}

h4 {
	position: relative;
	margin-bottom: 64px;
}

h4:after {
  content: "";
  width: calc(100% - 40px);
  height: 4px;
  background-color: #24BE74;
  position: absolute;
  bottom: -16px;
  right: 40px;
  animation: discover 1800ms ease-in-out 300ms;
}

#rules img, #basics img {
	height: 400px;
	-webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient (black, transparent);
}

@media screen and (max-width: 1270px) {
	#rules img, #rules .filter {
		display: none;
	}
}
@media screen and (max-width: 768px) {
	#features-slider {
		flex-direction: column;
	}
	.feature {
		margin-bottom: 1rem;
	}
	.feature:hover {
		width: 100%;
	}
	#basics img {
		display: none;
	}
}

footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1em 0;
}


</style>
