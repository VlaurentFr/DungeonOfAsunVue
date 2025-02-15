<script setup lang="ts">
import { useRouter } from 'vue-router';

 const router = useRouter()
</script>
<template>
  <div class="visible">
    <div class='header'>
      <h1>L'Histoire générale</h1>
      <h2>L'Aube d'Asun : Une Épopée à travers les<span> Âges </span></h2>
    </div>
    <div class="row">
      <article>
        <div class="title-section">
            <h2>La genèse</h2>
            <h3>Introduction</h3>
        </div>
        <p>
          Au commencement, il n'y avait que le Néant, un vide infini habité par des entités éternelles connues sous le nom d'<span>Êtres du Néant</span>. Parmi eux, un être singulier ressentit le besoin de créer, de façonner quelque chose de nouveau. Ce fut <span>Riannedos</span>, le dragon primordial, qui, par un acte de volonté divine, enveloppa son propre corps pour donner naissance à un monde. Ainsi naquit <span>Asun</span>, un berceau façonné par le Temps et protégé par les écailles cosmiques de son créateur.<br><br>
          Riannedos n'était pas seul longtemps. D'autres Êtres du Néant vinrent à lui, fascinés par sa création. <span>Quaara</span>, déesse de la nature, et son frère <span>Gusius</span>, dieu des animaux, insufflèrent la vie dans ce monde, donnant naissance à des forêts luxuriantes, des créatures majestueuses, et des océans sans fin.<br><br>
          <span>Eone</span>, dieu des savoirs, offrit la connaissance aux premiers habitants : les Dragons. Ces derniers régnèrent en maîtres sur Asun, forts de leur sagesse et de leur puissance. Mais la vie éternelle s'avéra être un fardeau. C'est alors qu'intervint <span>Fauscht</span>, dieu de la mort, qui offrit aux dragons le don de la mortalité, libérant ainsi leur essence de l'ennui de l'éternité.<br><br>
          Enfin, <span>Théomis</span>, dieu de l'ordre, descendit avec ses enfants pour façonner les <span>Hommes</span>, destinés à vivre sous la domination des Dragons, afin d'apprendre et de prospérer sous leur tutelle divine.
        </p>
      </article>
      <div class="image">
        <img src="@/assets/bestiary/white_dragon.png" />
        <div class="filter"></div>
      </div>
    </div>
    <div class="row-reverse">
    <article>
      <div class="title-section">
        <h2>L'ère des Hommes</h2>
        <h3>Royaume Saint de Lorus</h3>
      </div>
        <p>
          Le fragile équilibre fut rompu lorsque Théomis confia à son fils, <span>Edes</span>, la mission de protéger les Hommes. Animé par une soif de justice intransigeante, Edes mena une croisade impitoyable contre les Dragons, les décimant presque jusqu'à leur extinction. Seuls quelques survivants se mêlèrent aux hommes, donnant naissance aux <span>Drakèides</span>, héritiers d'un sang mêlé de gloire et de malédiction.<br><br>
          Après sa victoire, Edes fonda le <span>Royaume Saint de Lorus</span>, un empire théocratique où l'homme dominait, glorifiant Théomis et Edes comme des divinités suprêmes. Ce royaume devint le symbole de la puissance humaine, mais aussi de l'arrogance des mortels face aux autres races bénies par les dieux.<br><br>
          La politique expansionniste et belliqueuse de Lorus entraîna la naissance de nouveaux royaumes :
          <span>L'Empire de Koven</span>, dominé par des orcs, ennemis jurés de Lorus.
          <span>Le Royaume de Trésabia</span>, havre de paix et de diplomatie.
          <span>La Dynastie Owrilia</span>, issue de l'union des dragons survivants et des habitants pacifistes de Trésabia, fondée sur des principes d'équilibre et de coexistence.
        </p>
      </article>
      <div class="image-left">
        <img src="@/assets/races/lorus.png" />
        <div class="filter-left"></div>
      </div>
  </div>
  <div class="row">
    <article>
      <div class="title-section">
          <h2>Le nouveau Monde</h2>
          <h3>Exploration Millénaire</h3>
      </div>
        <p>
          Au-delà des frontières connues d'Asun s'étend un territoire inexploré, appelé le <span>Nouveau Monde</span>. Pendant des millénaires, des peuples divers s'y aventurèrent, cherchant richesse, savoir, et rédemption. Ce fut un terrain d'expansion, mais aussi de conflits, car les vieilles croyances s'effritaient. De nouveaux dieux, de nouvelles races, et de nouveaux empires virent le jour.<br><br>
          C'est dans ce chaos qu'apparurent les <span>Vampires</span>, êtres du Void, avatars de vengeance contre Théomis et sa lignée. Rejetant les doctrines du Royaume Saint de Lorus, ils cherchèrent à corrompre l'œuvre des dieux et à renverser l'ordre établi.
        </p>
      </article>
      <div class="image">
        <img src="@/assets/orga/dwarf.png" />
        <div class="filter"></div>
      </div>
    </div>
    <div class="row-reverse">
      <article>
        <div class="title-section">
          <h2>L'Empire</h2>
          <h3>Montée de l'Empire</h3>
        </div>
        <p>
          Sur ce continent fracturé, un homme parvint à unir des peuples disparates sous une seule bannière : <span>l'Empire Cytanique</span>. Bien qu'il n'ait jamais dominé la totalité du monde, il s'imposa comme la plus grande force militaire, culturelle, et politique d'Asun. Il établit des cités prospères, des routes commerciales florissantes, et des institutions stables, surpassant même la puissance du Saint Royaume de Lorus.<br><br>
          Cependant, l'ombre d'un ancien pouvoir plane encore sur Asun...
          
        </p>
      </article>
      <div class="image-left">
        <img src="@/assets/races/humans.png" />
        <div class="filter-left"></div>
      </div>
    </div>
    <div class="row">
      <article>
        <div class="title-section">
            <h2>Le secret millénaires</h2>
            <h3>Reliques de Neien</h3>
        </div>
          <p>
            Parmi tous les dieux, <span>Neien</span> fut le plus puissant. Anciennement dieu de la miséricorde, il fut trahi, banni, et enfermé par ses pairs au fin fond du <span>Donjon d'Asun</span>, connu sous le nom des <span>Enfers</span>. Son essence fut fracturée et dispersée à travers Asun sous forme de <span>Reliques</span>.<br><br>
            Ces artefacts, imprégnés de fragments de sa divinité, offrent à quiconque les détient un pouvoir égal à celui d’un dieu. Leur influence est un appel irrésistible pour les aventuriers, les rois, et même les dieux eux-mêmes.<br><br>
            L'histoire d'Asun est celle d'un monde façonné par des dieux, mais peut-être, un jour, sera-t-il façonné par des mortels.<br><br>
            <i>Bienvenue dans le monde d'Asun, où chaque choix peut façonner le destin des dieux et des hommes.</i>
          </p>
        </article>
        <div class="image">
          <img src="@/assets/gods/neien2.png" />
          <div class="filter"></div>
        </div>
      </div>
    <div class="banner">
      <h3>Ecrivez l'histoire</h3>
      <button @click="router.push({ path: '/Rules/creation' })">Commencer</button>
      <div class="banner-img"></div>
    </div>
  </div>
</template>

<style scoped>
.row {
  align-items: center;
  height: 700px;
}
.row-reverse {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 700px;
}
.title-section h2 {
  font-weight: 600;
  letter-spacing: 0.125rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin: 0 0 12px 0;
}
h3 {
  margin: 0 0 64px 0;
  font-size: 1.75rem;
}
.image {
  position: absolute;
  right: 0;
  width: 40%;
  height: 600px;
  z-index: -1;
}
.image img, .image-left img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-mask-image: url(../assets/splash.png);
  mask-image: url(../assets/splash.png);
  mask-repeat: no-repeat;
  mask-size: 100% 100%, contain;

}
.image img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-mask-image: url(../assets/splash3.png);
  mask-image: url(../assets/splash3.png);
  mask-repeat: no-repeat;
  mask-size: 100% 100%, contain;

}
.filter {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background:  linear-gradient(90deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
}
.image-left {
  position: absolute;
  left: 0;
  width: 40%;
  height: 600px;
  z-index: -1;
  transform: scaleX(-1);
}
.filter-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background:  linear-gradient(-90deg, var(--backgroundColor) 0%, rgba(36, 190, 116, 0) 50%), no-repeat;
  transform: scaleX(-1);
}
.banner {
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
}
.banner h3 {
  margin: auto;
  color: var(--textColorWhite);
}
.banner button {
  border-radius: 8px;
  border: none;
  background-color: var(--primaryColor);
  padding: 16px 32px;
  cursor: pointer;
  width: fit-content;
}
.banner div {
  position: absolute;
  width: 100vw;
  left: 0;
  height: 480px;
  z-index: -1;
  background-size: cover;
  background-position: top;
  background-image: url(../assets/combats/combat3.png);
  background-attachment: fixed;
  clip-path: polygon(5% 3%, 45% 10%, 55% 0, 83% 15%, 100% 0, 100% 100%, 0 100%, 0 34%, 0 24%, 0 12%);
}
@media screen and (max-width: 768px) {
  .image, .image-left {
    display: none;
  }
  .row-reverse, .row {
    justify-content: space-around;
    height: fit-content;
    margin-bottom: 128px;
  }
}
</style>