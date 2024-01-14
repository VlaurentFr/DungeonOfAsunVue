<script setup lang="ts">
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
        A l'origine les êtres du Néant vivaient seuls dans le Void, lorsqu'un jour l'un d'eux décida de créer un nouveau monde, une terre ou vivraient d'autres êtres vivants. Riannedos créa donc un monde en le protégeant de son corps, et créant ses enfants : les dragons et le temps.<br/><br/>

        Très vite, il fut rejoint par d'autres êtres comme Quara et son frère Gusius, créant la faune et la flore. <br/>
        Eone donna le savoir aux dragons, ce qui leur permit de vivre ensemble. <br/>
        Fauscht brisa leurs vies intemporelles, et leur fit don de la mortalité.<br/>
        Theomis et ses fils rejoignirent sa femme Quara, créant les hommes qui furent soumis a la puissance et le savoir des dragons. <br/>
        Mais cela ne dura qu'un temps ; Théomis, avide de sa création, voulait les rendre plus forts et demanda à son fils Edes de descendre sur ce monde pour les aider. Edes fut sans pitié pour la création de Riannedos et massacra la plupart d'entre eux, bien que certains hommes continuèrent à vivre avec les Dragons, donnant par ailleurs naissance aux Drakèides.<br/><br/>

        La domination des hommes était en marche sous la bannière d'Edes "Le Justicier".
        </p>
      </article>
      <div class="image">
        <img src="@/assets/gods/Riannedos.png" />
        <div class="filter"></div>
      </div>
    </div>
    <div class="row">
    <article>
      <div class="title-section">
        <h2>Ère des Hommes</h2>
        <h3>Royaume Saint de Lorus:</h3>
      </div>
        <p>
        Après avoir décimé la quasi-totalité des dragons, Edes créa le Royaume saint de Lorus. Un royaume qu’il régissait afin que les hommes puissent continuer à prospérer pendant de longs siècles.<br/><br/>

        Les hommes qui devinrent croyants aimaient Théomis et son fils Edes plus que tout, ceux-ci les ayant sortis de siècles de domination et de reprehension de la part des dragons. <br/>
        Si tous les hommes ne pensent pas que les dragons sont mauvais, à cette période la majorité le croit. Les hommes, dominant dorénavant le monde, décidèrent d'appréhender les autres races qui petit à petit apparaissait sous la bénédiction d'autres dieux.<br/><br/>

        Cette politique agressive fera naître plusieurs royaumes : <br/>
        L'Empire de Koven, fervent ennemi juré de Lorus, contrôlé par orcs. <br/>
        Le Royaume de Trésabia, un royaume bien plus pacifiste que les deux autres. <br/>
        Un 4ème royaume apparaîtra vers la fin de cette ère, La Dynastie Owrilia, issue du pacifisme de Trésabia et de l'aide des dragons, apparaîtra vers la fin de cette ère. Ils découvriront bien d'autres lieux sur cette planète, notamment le "Nouveau Monde".<br/>
        </p>
      </article>
      <div class="image">
        <img src="/assets/genese.png" />
        <div class="filter"></div>
      </div>
  </div>
  <div class="row">
    <article>
      <div class="title-section">
          <h2>Le nouveau Monde</h2>
          <h3>Exploration Millénaire</h3>
      </div>
        <p>
          Ce monde, bien plus vaste que les royaumes de Thierrion, Ikawora, Tangto et Harkinfall réunit, sera amené à être exploré par divers peuples et races pendant plus d'un millénaire avant de se stabiliser. Parmi ces races, beaucoup d'hommes ne croyant plus en la bénédiction unique de Théomis.<br/><br/>

          Une autre race apparue du void sur ce monde pour endiguer et corrompre l'œuvre des dieux. Celle des vampires qui était là pour se venger de Théomis et sa famille.<br/><br/>

          Si certains n'étaient pas chaleureux envers les hommes, ce n'était pas le cas de tous car ils savaient que les gens de ce monde pouvaient aider à détruire l'œuvre d'Edes, son Royaume, le Saint Royaume de Lorus...
        </p>
      </article>
      <div class="image">
        <img src="/assets/human.png" />
        <div class="filter"></div>
      </div>
    </div>
    <div class="row">
      <article>
      <div class="title-section">
          <h2>L'Empire</h2>
          <h3>Montée de l'Empire</h3>
      </div>
        <p>
        Sur ce continent ravagé par la disparité et la grandeur des terres et des peuples, un homme arrivera réunir sous la même bannière un grand nombre d'entre eux, créant l'empire.<br/><br/>

        Si l'empire n'a jamais contrôlé la totalité de ce monde, il en est la principale force armée et culturelle, le seul à avoir établi un environnement stable, sain et prospère pour la plupart de ses citoyens malgré quelques déboires au fils des siècles. Il arriva même à soumettre les forces de Thierion le reconnaissance comme plus puissant et plus grand qu'eux.
        </p>
      </article>
      <div class="image">
        <img src="@/assets/cults/six.png" />
        <div class="filter"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  /* position: relative; */
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
  width: 33%;
  height: 600px;
  z-index: -1;
}
.image img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.filter {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 80%);;
}
@media screen and (max-width: 768px) {
  .image {
    display: none;
  }
}
</style>