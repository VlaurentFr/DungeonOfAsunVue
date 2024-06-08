<script setup lang="ts">

</script>

<template>
  <main>
    <div>
      <div>
				<section>
					<div class='title-page'>
						<div id="play">
							<img src="../assets/DoA.svg"/>
						</div>
						<div id="redirect">
							<div class='redirect-card'>
								<div class='circle'>
									<h1>Univers</h1>
								</div>
								<div class='card-content'>
									<h2>Découvrez l'univers de Dungeons of Asun</h2>
                  <RouterLink to="/Univers/story">Découvrir</RouterLink>
								</div>
							</div>
							<div class='redirect-card'>
								<div class='circle'>
									<h1>Règles du jeu</h1>
								</div>
								<div class='card-content'>
									<h2>Découvrez les règles de Dungeons of Asun</h2>
                  <RouterLink to="/Rules/creation">Découvrir</RouterLink>
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
							<h3>Bienvenue dans DungeonOfAsun</h3>
							<p>Bienvenue dans Dungeon of Asun, un univers riche en histoires épiques, créatures légendaires, et défis sans fin. Que vous soyez un aventurier chevronné ou un novice curieux, notre monde vous offre une expérience unique de jeu de rôle avec ses propres règles, classes, maîtrise d'armes, mythologie, panthéon, objets et sorts.</p>
							<img src="@/assets/gods/theomis2-character.png"/>
							<div class="filter"></div>
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

					<section id="perso">
						<h3>Créez votre personnage :</h3>
						<article>
							<p>Concevez un héros unique en choisissant parmi une variété de races, de classes, et de compétences. Personnalisez l'apparence de votre personnage pour qu'il corresponde à votre vision du protagoniste ultime. Au cœur de Dungeon of Asun se trouve la possibilité de créer un héros qui incarne vos rêves les plus fous. Vous avez le choix entre une variété de races, chacune avec ses propres avantages et attributs, des elfes gracieux aux nains robustes en passant par les humains polyvalents. Personnalisez l'apparence de votre personnage, de son visage aux détails les plus subtils, et choisissez une classe qui déterminera votre style de jeu, que ce soit en tant que guerrier intrépide, mage puissant, assassin furtif, ou l'une des classes uniques qui vous sont proposées. Les possibilités sont infinies.</p>
						</article>
						<!-- <img src="@/assets/combats/combat2.png"/> -->
						<img src="@/assets/gods/rhabus2-character.png"/>
						<div class="filter"></div>
					</section>
					<section id="world-explore">
						<h3>Explorez un monde vaste : </h3>
						<article>
							<p>Asun est un monde composé de contrées variées, allant des vastes plaines aux sommets enneigés des montagnes, en passant par des jungles luxuriantes et des déserts brûlants. Chaque région a sa propre histoire, ses peuples et sa culture. Les cités florissantes regorgent de marchands, de quêtes et de rencontres avec des personnages non-joueurs captivants. Les étendues sauvages sont habitées par des créatures sauvages et des donjons oubliés. Explorez cet univers vivant et respirez la liberté de l'aventure.</p>
						</article>
					</section>
					<section id="adventure">
						<h3>Aventures épiques : </h3>
						<article>
							<p>Laissez-vous entraîner dans des quêtes épiques qui vous conduiront dans des contrées lointaines, à la recherche de trésors fabuleux, de connaissances oubliées et de vérités insondables. Affrontez des monstres légendaires, résolvez des énigmes complexes et triomphez des donjons les plus dangereux. Chaque quête est une opportunité de vous révéler en tant qu'aventurier intrépide, et chaque donjon est un défi qui teste votre intelligence et vos compétences.</p>
						</article>
						<img src="@/assets/gods/quara2-character.png"/>
						<div class="filter"></div>
					</section>
					<section id="pnj">
						<h3>Alliés et Ennemis Inoubliables :</h3>
						<article>
							<p>Dungeon of Asun est peuplé de personnages non-joueurs mémorables. Tissez des liens avec des alliés fidèles, accomplissez des quêtes avec eux et découvrez leur histoire. Méfiez-vous des ennemis redoutables, des créatures mythiques et des boss surpuissants. Vos choix dans le jeu ont un impact significatif sur le monde qui vous entoure, et les conséquences de vos actes se feront ressentir à chaque tournant.</p>
						</article>
					</section>
					<section id="systeme">
							<h3>Système d'Évolution et de Personnalisation :</h3>
							<article>
								<p>Votre personnage évoluera au fil de son aventure, gagnant de l'expérience, maîtrisant de nouvelles compétences et s'améliorant au fur et à mesure. Choisissez comment vous souhaitez personnaliser votre héros en fonction de votre style de jeu, débloquez des compétences uniques et devenez un maître dans votre classe. Participez à la guerre ou au commerce, devenez un artisan accompli ou explorez les secrets de la magie. L'avenir de votre personnage dépend entièrement de vous.</p>
							</article>
					</section>

					<!-- <section id="start">
							<h3>Commencez Votre Aventure</h3>
							<p>Prêt à commencer? <a href="#telecharger">Téléchargez les règles</a> et créez votre personnage dès aujourd'hui. Plongez dans le monde de Dungeon of Asun et écrivez votre propre légende.</p>
					</section>

					<footer>
							<section id="contact">
									<h2>Contactez-nous</h2>
									<p>Si vous avez des questions ou besoin d'aide, n'hésitez pas à nous contacter via notre <a href="#page-contact">page de contact</a>.</p>
							</section>
							<p>&copy; 2024 Dungeon of Asun. Tous droits réservés.</p>
					</footer> -->
			</div>
		</div>
  </main>
</template>

<style scoped>
#play {
	margin: auto;
	width: fit-content;
}
#play img {
  height: 164px;
}

#redirect {
    margin: 64px auto;
    display: flex;
    justify-content: center;
    gap: 64px;
    flex-wrap: wrap;
    width: fit-content;
		position: relative;
}

#redirect img {
	position: absolute;
	top: -400px;
	width: 100vw;
	height: 900px;
	right: calc(-50vw + 280px);
	object-fit: cover;
	z-index: -1;
}
#redirect .filter {
	position: absolute;
	top: -400px;
	width: 100vw;
	height: 900px;
	right: calc(-50vw + 280px);
	object-fit: cover;
	z-index: -1;
	background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(36, 190, 116, 0.0) 100%), lightgray 50% / cover no-repeat;
	mix-blend-mode: multiply;

}
#redirect .redirect-card {
    position: relative;
    width: 252px;
    background-color: var(--background);
    border-radius: 8px;
    overflow: hidden;
    transition: all 300ms ease-in-out;
		border: var(--primaryColor) solid 1px;
	}
	
	#redirect .redirect-card h1{
		font-size: 32px;
	}
	
	#redirect .redirect-card:hover {
		border: white solid 1px;
		transform: scale(1.2);
}
#redirect .redirect-card .card-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#redirect .redirect-card .card-content h3 {
    margin: 0px;
    font-size: 16px;
}
#redirect .redirect-card .card-content a {
    margin: 24px;
    padding: 8px;
    border-radius: 8px;
    background-color: var(--primaryColor);
    color: var(--textColor);
    text-decoration: none;
}
#redirect .redirect-card .circle {
    position: relative;
    width: 100%;
    height: 180px;
    /* height: 420px; */
    background-color: var(--primaryColor);
    clip-path: circle(180px at center 0);
    text-align: center;
    transition: all 300ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<style scoped>

#features-slider {
	display: flex;
	flex-direction: row;
	gap: 12px;
}
.feature {
    background: #202124;
    margin: 1em 0;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		width: 15%;
		position: relative;
		border: #24BE74 solid 1px;
		text-shadow: 1px 1px 2px black;
		overflow: hidden;
}
.feature:hover {
	width: 50%;
}
.feature p {
	height: 150px;
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

#perso, #adventure, #intro {
	position: relative;
}

#perso img {
	position: absolute;
	left: 50%;
	top: 0;
}
#adventure img, #intro img {
	position: absolute;
	right: 85%;
	top: 0;
}
#perso .filter {
	position: absolute;
	left: 65%;
	top: 0;
	background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(36, 190, 116, 0.0) 100%), lightgray 50% / cover no-repeat;
	mix-blend-mode: multiply;
	width: 1024px;
	height: 1024px;
}
#adventure .filter, #intro .filter {
	position: absolute;
	right: 100%;
	top: 0;
	background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(36, 190, 116, 0.0) 100%), lightgray 50% / cover no-repeat;
	mix-blend-mode: multiply;
	width: 1024px;
	height: 1024px;
}

footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 1em 0;
}


</style>
