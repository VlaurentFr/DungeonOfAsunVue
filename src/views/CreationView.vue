<script setup lang="ts">
import FightView from './FightView.vue';
</script>
<template>
  <div class='visible'>
		<div class='header'>
      <h1>La creation de personnage</h1>
      <h2>Découvrez comment créer votre personnage pour<span> jouer </span></h2>
			<!-- <p>
				Bienvenue sur la page de création de personnage de notre jeu de rôle épique ! Ici, vous pouvez donner vie à votre héros, le personnaliser à votre guise et le préparer pour des aventures palpitantes dans notre univers fantastique. Suivez les étapes ci-dessous pour créer votre personnage unique.
			</p> -->
    </div>
		<div class="fight-wrapper">
			<div class='fight-container'>
				<div class='title-section'>
					<h3>
						Étape 1 : Personnalisation
					</h3>
				</div>
				<p>
					Commencez par choisir la race de votre personnage parmi nos options variées, chacune ayant ses propres avantages et déavantages lier au lore de cette dernière (Sans influence statistique directe). Que vous préfériez être un elfe élégant, un nain robuste, un humain polyvalent ou une race unique de notre monde.
				</p>
				<p>
					Une fois votre race choisie, sélectionnez une classe qui déterminera le style de jeu de votre personnage. Voulez-vous être un puissant guerrier, un sorcier habile, un voleur rusé ou une classe plus unique ? Votre classe dictera vos compétences de base et votre rôle dans le groupe. Pour commencer vous aurez le choix entre <span>Noble</span>, qui peut utiliser la magie et <span>Roturier</span> qui ne peux pas sans s'entrainer au préalable. Après un rude entrainement si vous atteignez les maîtrises nécessaire pour une classe plus avancée vous pourrez changer à tout moment pour cette dernière.
					Dans certains cas, vous pouvez être amené à vouloir un personnage avec déjà de l'experiencesn il est donc possible de commencer en <span>Novice</span> ou <span>Avancée</span>. Vous pourez. dans ce cas choisir une classe pour chaque rang inférieur à maitriser afin d'obtenir ses bonus.
				</p>
				<p>
					Passez à l'étape de personnalisation de l'apparence pour créer un personnage visuellement unique. Modifiez les traits de son visage, la couleur de ses yeux, sa coiffure, et bien plus encore. Laissez libre cours à votre créativité pour donner vie à votre héros.
				</p>
				<p>
					Donnez un nom mémorable à votre personnage, un nom qui résonnera à travers les légendes de notre jeu. Assurez-vous qu'il correspond à l'univers fantastique que nous avons créé.
				</p>
			</div>
			<div class='fight-container'>
				<div class='title-section'>
					<h3>
						Étape 2 : Attribuez vos Caractéristiques
					</h3>
				</div>
				<p>
					Vous pouvez maintenant répartir vos points d'attribut pour déterminer les forces et les faiblesses de votre personnage.
				</p>
				<p>
					 Choisissez judicieusement, car cela influencera vos compétences et capacités. Les guerriers auront besoin de force, les mages de la sagesse, et ainsi de suite. Vous possèdez <span>220 points</span> à répartir entre <span>la Force</span> (FRC), <span>la Sagesse</span> (SAG), <span>la Dextérité</span> (DEX) et <span>le Charisme</span> (CHM) avec au maximum 70 et minimum 30 dans chaque caractéristiques (hors bonus/malus de race). Ainsi que <span>30 points</span> pour <span>les points de vie et d'énergie</span> (PV et PdE).
				</p>
				<p>Vous pouvez également choisir votre rang d'armes, pour cela vous avez le droit de commencer avec un rang <span>D+</span>, 2 rang <span>D</span> et <span>E+</span> le reste sera de rang <span>E</span><br/>
				Dans le cas d'une classe avancées vous commencer avec le rang <span>nécessaire</span> à votre classe à la place du rang <span>D+</span>. 
				</p>
			</div>
			<div class='fight-container'>
				<div class='title-section'>
					<h3>
						Étape 3 : Historique et Histoire
					</h3>
				</div>
				<p>
					Rédigez une brève histoire de votre personnage, son passé, ses motivations, ses objectifs, ou même sa destinée. Cette histoire contribuera à façonner votre personnage et à le rendre encore plus immersif.
				</p>
			</div>
			<div class='fight-container'>
				<div class='title-section'>
					<h3>
						Étape 4 : Achetez votre équipement
					</h3>
				</div>
				<p>
					Achetez votre équipement, vous possèdez pour cela de <span>60 po</span> de départ à consommer pour vous équiper de la tête aux pieds, multiplier par le rang de votre classe soi 120 po pour Novice et 180 po pour Avancée. Penser à en gardez un peu de côté pour vos aventures.
				</p>
			</div>
			<div class='fight-container'>
				<div class='title-section'>
					<h3>
						Étape 5 : Finalisation
					</h3>
				</div>
				<p>
					Revoyez toutes vos sélections et assurez-vous que votre personnage est prêt à entrer dans le monde du jeu. Une fois que vous êtes satisfait, confirmez votre choix.
				</p>
			</div>
			<div class='fight-container'>
				<div class='title-section'>
					<h3>
					 Commencer votre Aventure !
					</h3>
				</div>
				<p>
					Félicitations, vous avez maintenant créé votre propre héros pour le jeu de rôle. Préparez-vous à vivre des aventures épiques, à explorer des mondes fantastiques, à rencontrer des personnages inoubliables et à forger votre propre légende. Rejoignez-nous maintenant et que l'aventure commence !
				</p>
				<a href="https://discord.gg/WGR68mBEu3"><i class="fab fa-discord"></i> Rejoingner nous sur Discord</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
h3 {
	margin: 0 0 24px 0;
	font-size: 28px;
}
.fight-wrapper {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 24px;
	flex: 2;
	margin-bottom: 200px;
}
.fight-container {
	display: flex;
	padding: 24px;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;
	border-radius: 28px;
	background: #202124;
	transition: all .3s ease-in-out;
}

.fight-container span {
	color: var(--primaryColor);
}
.fight-container:nth-child(1){
	flex: 1 1 calc(50% - 12px);
}
.fight-container:nth-child(2){
	flex: 1 1 calc(33% - 12px);
}
.fight-container:nth-child(3){
	flex: 1 1 calc(50% - 12px);
}
.fight-container:nth-child(4){
	flex: 1 1 calc(50% - 12px);
}
.fight-container:nth-child(5){
	flex: 1 1 25%;
}
.fight-container:nth-child(6){
	flex: 1 1 calc(75% - 24px);
}
.fight-container:nth-child(6) h3{
	font-size: 40px;
}
a {
	background-color: #7289da;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	font-size: 20px;
	margin: auto;
	cursor: pointer;
	text-decoration: none;
	align-items: center;
	display: flex;
	gap: 8px;
}
a:hover {
	padding: 12px 24px;
}
</style>


