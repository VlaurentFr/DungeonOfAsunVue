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
						</div>
					</div>
				</section>
			</div>
			<div>
				<section>
					<div>
						<div class='title-page'>
							<h3>Bienvenue dans DungeonOfAsun</h3>
							<article>
								<p>Plongez dans un monde de magie, de mystères et d'aventures épiques. Dungeon of Asun est un jeu de rôle qui vous transporte dans un univers fantastique où votre destin est entre vos mains. Incarnez un héros, explorez d'anciens donjons, affrontez des créatures légendaires, et tissez votre propre histoire dans ce royaume en constante évolution.</p>
							</article>
							<h3>Créez votre personnage :</h3>
							<article>
								<p>Concevez un héros unique en choisissant parmi une variété de races, de classes, et de compétences. Personnalisez l'apparence de votre personnage pour qu'il corresponde à votre vision du protagoniste ultime. Au cœur de Dungeon of Asun se trouve la possibilité de créer un héros qui incarne vos rêves les plus fous. Vous avez le choix entre une variété de races, chacune avec ses propres avantages et attributs, des elfes gracieux aux nains robustes en passant par les humains polyvalents. Personnalisez l'apparence de votre personnage, de son visage aux détails les plus subtils, et choisissez une classe qui déterminera votre style de jeu, que ce soit en tant que guerrier intrépide, mage puissant, assassin furtif, ou l'une des classes uniques qui vous sont proposées. Les possibilités sont infinies.</p>
							</article>
							<h3>Explorez un monde vaste : </h3>
							<article>
								<p>Asun est un monde composé de contrées variées, allant des vastes plaines aux sommets enneigés des montagnes, en passant par des jungles luxuriantes et des déserts brûlants. Chaque région a sa propre histoire, ses peuples et sa culture. Les cités florissantes regorgent de marchands, de quêtes et de rencontres avec des personnages non-joueurs captivants. Les étendues sauvages sont habitées par des créatures sauvages et des donjons oubliés. Explorez cet univers vivant et respirez la liberté de l'aventure.</p>
							</article>
							<h3>Aventures épiques : </h3>
							<article>
								<p>Laissez-vous entraîner dans des quêtes épiques qui vous conduiront dans des contrées lointaines, à la recherche de trésors fabuleux, de connaissances oubliées et de vérités insondables. Affrontez des monstres légendaires, résolvez des énigmes complexes et triomphez des donjons les plus dangereux. Chaque quête est une opportunité de vous révéler en tant qu'aventurier intrépide, et chaque donjon est un défi qui teste votre intelligence et vos compétences.</p>
							</article>
							<h3>Alliés et Ennemis Inoubliables :</h3>
							<article>
								<p>Dungeon of Asun est peuplé de personnages non-joueurs mémorables. Tissez des liens avec des alliés fidèles, accomplissez des quêtes avec eux et découvrez leur histoire. Méfiez-vous des ennemis redoutables, des créatures mythiques et des boss surpuissants. Vos choix dans le jeu ont un impact significatif sur le monde qui vous entoure, et les conséquences de vos actes se feront ressentir à chaque tournant.</p>
							</article>
							<h3>Système d'Évolution et de Personnalisation :</h3>
							<article>
								<p>Votre personnage évoluera au fil de son aventure, gagnant de l'expérience, maîtrisant de nouvelles compétences et s'améliorant au fur et à mesure. Choisissez comment vous souhaitez personnaliser votre héros en fonction de votre style de jeu, débloquez des compétences uniques et devenez un maître dans votre classe. Participez à la guerre ou au commerce, devenez un artisan accompli ou explorez les secrets de la magie. L'avenir de votre personnage dépend entièrement de vous.</p>
							</article>
						</div>
					</div>
				</section>
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
}
#redirect .redirect-card {
    position: relative;
    width: 252px;
    /* height: 348px; */
    background-color: var(--background);
    border-radius: 8px;
    overflow: hidden;
    transition: all 300ms ease-in-out;
}

#redirect .redirect-card h1{
    font-size: 32px;
}

/* #redirect:hover .redirect-card {
    filter: blur(8px);
    transform: scale(0.9);
    opacity: .9;
} */
#redirect .redirect-card:hover {
    filter: blur(0px);
    transform: scale(1);
    opacity: 1;
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
