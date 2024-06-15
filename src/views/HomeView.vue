<script setup lang="ts">

</script>

<template>
  <main>
    <div>
      <div>
				<section>
					<div class='title-page'>
						<div id="redirect">
							<div class="title-container">
								<h1><span>Jouez</span>à un JDR innovant</h1>
								<p>Inspiré de tactical game</p>
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
						<h3>Univers</h3>
						<p>Un univers riche en histoires épiques, créatures légendaires, et défis sans fin. Que vous soyez un aventurier chevronné ou un novice curieux, notre monde vous offre une expérience unique de jeu de rôle avec ses propres règles, classes, maîtrise d'armes, mythologie, panthéon, objets et sorts.</p>
						<article id="goods">
							<div class="good">
								<i class="fas fa-dice-d20"></i>
								<p>heroïque fantaisie</p>
							</div>
							<div class="good">
								<i class="fas fa-dice-d20"></i>
								<p>heroïque fantaisie</p>
							</div>
							<div class="good">
								<i class="fas fa-dice-d20"></i>
								<p>heroïque fantaisie</p>
							</div>
						</article>
					</section>

					<section id="rules">
						<div class="row">
							<div>
								<h3>Des règles abordables</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor libero id dicta aut quisquam dolores, nostrum pariatur repudiandae voluptate esse soluta placeat quos. Qui culpa natus nobis quidem quasi.</p>
								<RouterLink to="/Rules/fight">Consulter les règles</RouterLink>
							</div>
							<img src="@/assets/gods/rhabus2-character.png"/>
						</div>
						<div class="wrapper option-1 option-1-1">
							<ol class="stepper">
								<li class="stepper__item">
									<h5 class="stepper__title">Etape 1</h5>
									<p class="stepper__desc">Créez votre personnage</p>
								</li>
								<li class="stepper__item">
									<h5 class="stepper__title">Etape 2</h5>
									<p class="stepper__desc">Choissisez votre classe</p>
								</li>
								<li class="stepper__item">
									<h5 class="stepper__title">Etape 3</h5>
									<p class="stepper__desc">Choisissez vos maîtrises d'armes</p>
								</li>
								<li class="stepper__item">
									<h5 class="stepper__title">Etape 4</h5>
									<p class="stepper__desc">Combattez !</p>
								</li>
							</ol>
						</div>
					</section>
					<section id="basics">
						<div class="row">
							<img src="@/assets/gods/theomis2-character.png"/>
							<div>
								<h3>les basique du jeu de rôles</h3>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum exercitationem necessitatibus dolor ipsam ipsa sapiente quos nemo debitis earum, itaque fugit aliquid, rem illum sit cupiditate aperiam perspiciatis nam?</p>
								<article id="goods" class="col">
									<div class="good">
										<i class="fas fa-dice-d20"></i>
										<p>Des caractéristiques simples</p>
									</div>
									<div class="good">
										<i class="fas fa-dice-d20"></i>
										<p>Races communes et rares</p>
									</div>
									<div class="good">
										<i class="fas fa-dice-d20"></i>
										<p>Changement de classe facile</p>
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
					<section id="FAQ">
						<h3>FAQ</h3>
						<details>
							<summary>Qu'est-ce que Dungeon of Asun ?</summary>
							<div>
								Dungeon of Asun est un jeu de rôle (JdR) immersif où les joueurs incarnent des personnages dans un univers fantastique. Les joueurs interagissent avec l'univers et entre eux en suivant les règles spécifiques du jeu.
							</div>
						</details>
						<details>
							<summary>Où puis-je trouver les règles ?</summary>
							<div>
								Les règles complètes de Dungeon of Asun sont disponibles dans notre section "Règles du Jeu" sur le site. Vous y trouverez des guides détaillés sur la création de personnages, les mécaniques de jeu, les sorts, et plus encore.
							</div>
						</details>
					</section>
			</div>
		</div>
  </main>
</template>

<style scoped>
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
	width: 100vw;
	height: 80vh;
	object-fit: cover;
	z-index: -1;
	transform: scaleX(-1);
}
#redirect .filter {
	position: absolute;
	top: 0px;
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
	width: 500px;
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
.title-container #main, .title-container a, #rules a {
	border-radius: 8px;
	font-size: 1rem;
	padding: 8px 16px;
	transition: all 300ms ease-in-out;
	cursor: pointer;
	text-decoration: none;
	color: white;
}

.title-container #main, #rules a {
	background-color: var(--primaryColor);
	border: solid var(--primaryColor) 2px;
	color: black;

}

.title-container #main:hover, .title-container a:hover , #rules a:hover {
	background-color: white;
	color: black;
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
	justify-content: center;
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
.stepper__item:before {
	content: "";
	display: block;
	width: clamp(1.5rem, 5vw, 3rem);
	height: clamp(1.5rem, 5vw, 3rem);
	border-radius: 50%;
	background-color: var(--primaryColor);
	margin: 0 auto 1rem;
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
}

.stepper__desc {
  font-size: clamp(0.85rem, 2vw, 1rem);
  padding-left: clamp(0.25rem, 2vw, 0.5rem);
  padding-right: clamp(0.25rem, 2vw, 0.5rem);
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
  transition: height 1s ease;
	font-size: 1.5rem;
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
	margin: 1em 0;
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

footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1em 0;
}


</style>
