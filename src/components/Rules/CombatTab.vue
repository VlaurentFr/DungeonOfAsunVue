<template>
  <section class="tab-pane">
    <div class="grid-3">
      <!-- Déroulement du Tour -->
      <div class="card card-container card-low">
        <div class="stack-y">
          <span class="label text-primary">Tactique de Round</span>
          <h3>Déroulement du Tour</h3>
          <ul class="stack-y text-sm">
            <li class="sub-box">
              <strong class="block">1. Initiative</strong>
              <span>Jet de DEX pur. Ordre décroissant des résultats.</span>
            </li>
            <li class="sub-box">
              <strong class="block">2. Économie d'Action</strong>
              <span
                >Chaque tour octroie pour ce tour <strong>1 Déplacement</strong> (jusqu'à 9m) +
                <strong>1 Action Principale</strong> (Attaque, Sort, Objet, Fuite).</span
              >
            </li>
            <li class="sub-box">
              <strong class="block">3. Réaction Automatique</strong>
              <span
                >L'esquive est automatique, elle est calculé sur votre DEX pour réduire le seuil de
                réussite de l'assailant.</span
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Seuil d'Esquive -->
      <div class="card card-container card-low">
        <div class="stack-y">
          <span class="label text-secondary">Défense Passive</span>
          <h3>Seuils d'Esquive &amp; Malus</h3>
          <p class="text-sm">
            Absorption (PR) : L'armure réduit les dégâts fixes contre tout type de dégâts. La parade
            lorsque l’on possède un bouclier est "automatique". Le bouclier augmentant la PR du
            porteur.
          </p>
          <p class="text-sm">
            Un score élevé de DEX rend le personnage insaisissable en imposant un malus direct aux
            attaques adverses :
          </p>
          <div class="stack-y text-xs">
            <div class="sub-box flex-between">
              <span>DEX 1 à 4</span><strong>Malus infligé : 0</strong>
            </div>
            <div class="sub-box flex-between">
              <span>DEX 5 à 7</span><strong class="text-primary">Malus attaquant : -1</strong>
            </div>
            <div class="sub-box flex-between">
              <span>DEX 8 à 9</span><strong class="text-primary">Malus attaquant : -2</strong>
            </div>
            <div class="sub-box flex-between">
              <span>DEX 10 à 11</span
              ><strong class="text-secondary font-bold">Malus attaquant : -3</strong>
            </div>
            <div class="sub-box flex-between">
              <span>DEX 12+</span
              ><strong class="text-secondary font-bold">Malus attaquant : -4</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Agonie & Mort -->
      <div class="card card-container card-low">
        <div class="stack-y">
          <span class="label text-error">Léthale Réalité</span>
          <h3>Soins</h3>
          <p class="text-sm">
            Lorsque vous êtes soigné par un sort, une potion ou tout autres moyens, vous récupérer
            ce montant de point de vie à ceux actuel sans jamais dépassé votre maximum l'excédent
            est juste perdu. Un soin sur une créature morte n'a aucun effet.
          </p>

          <h3>Tomber à 0 PV : L'Agonie</h3>
          <p class="text-sm">
            À 0 PV, le personnage est <strong class="text-error">Mourant</strong> au sol. Il subit
            l'état d'Agonie :
          </p>
          <div class="stack-y text-xs">
            <div class="sub-box">
              • Vouloir agir ou ramper exige un <strong>jet de Constitution</strong> (échec = +1
              Blessure).
            </div>
            <div class="sub-box">
              • Subir une attaque en agonie = <strong class="text-error">+2 Blessures</strong> (+3
              si Coup Critique).
            </div>
            <div class="sub-box text-error font-bold text-center">
              À 6 Points de Blessure = Mort Définitive
            </div>
          </div>
        </div>
        <span class="text-xs text-outline mt-3"
          >Récupération : 1 blessure soignée par repos complet en lieu fortifié sécurisé.</span
        >
      </div>
    </div>

    <!-- Table des Maîtrises -->
    <div class="card card-low mt-8">
      <div class="mb-4">
        <span class="label text-primary">Arbre Martiale</span>
        <h3 class="title-lg">Table de Progression des Maîtrises d'Armes</h3>
        <p class="text-sm">
          Cumul de points d'expérience requis, dés de dégâts additionnels et déblocage de manœuvres.
        </p>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Rang</th>
              <th>XP Cumulé</th>
              <th>Bonus Touche</th>
              <th>Dé Bonus de Dégâts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-bold text-outline">Rang E</td>
              <td>0 XP</td>
              <td>+0</td>
              <td class="text-outline">Aucun</td>
            </tr>
            <tr>
              <td class="font-bold">Rang D</td>
              <td>15 XP</td>
              <td class="text-primary font-semibold">+1</td>
              <td class="text-outline">+1d4</td>
            </tr>
            <tr>
              <td class="font-bold">Rang C</td>
              <td>35 XP</td>
              <td class="text-primary font-semibold">+1</td>
              <td class="text-primary font-bold">+1d6</td>
            </tr>
            <tr>
              <td class="font-bold text-secondary">Rang B</td>
              <td>65 XP</td>
              <td class="text-secondary font-semibold">+2</td>
              <td class="text-secondary font-bold">+1d8</td>
            </tr>
            <tr>
              <td class="font-bold text-secondary">Rang A</td>
              <td>110 XP</td>
              <td class="text-secondary font-semibold">+2</td>
              <td class="text-secondary font-bold">+1d10</td>
            </tr>
            <tr>
              <td class="font-bold text-primary">Rang S</td>
              <td>180 XP</td>
              <td class="text-primary font-semibold">+3</td>
              <td class="text-primary font-bold">+1d12</td>
            </tr>
            <tr>
              <td class="font-bold text-primary">Rang M</td>
              <td>275 XP</td>
              <td class="text-primary font-semibold">+3</td>
              <td class="text-primary font-bold">+1d20</td>
            </tr>
            <tr>
              <td class="font-extrabold text-primary">Rang H</td>
              <td class="font-semibold">400 XP</td>
              <td class="text-primary font-extrabold">+4</td>
              <td class="text-primary font-extrabold">+2d12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
