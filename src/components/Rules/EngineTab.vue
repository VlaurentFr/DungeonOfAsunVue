<template>
  <section class="tab-pane">
    <div class="grid-3">
      <!-- Carte Roll Under -->
      <div class="card card-container card-low">
        <div class="card-body">
          <div class="card-header-sm">
            <span class="label text-primary">Mécanique Maîtresse</span>
          </div>
          <h3>Le Jet Roll-Under (d20)</h3>
          <p>
            Pour réussir une action, lancez un d20. Le résultat doit être
            <strong>inférieur ou égal</strong> au score de l'Attribut testé, augmenté du
            <span class="text-primary font-semibold">Rang de Maîtrise</span> lié à l'action.
          </p>
          <div class="code-box">
            <code>Résultat d20 ≤ [Attribut + Maîtrise]</code>
          </div>
        </div>
        <div class="card-footer-box">
          <span class="label">Formule Tactique</span>
          <p class="text-sm">
            Un score élevé et une bonne maîtrise d'arme augmentent mathématiquement la fenêtre de
            succès.
          </p>
        </div>
      </div>

      <!-- Critique & Échec -->
      <div class="card card-container card-low">
        <div class="card-body">
          <div class="card-header-sm">
            <span class="label text-secondary">Dénouements Extrêmes</span>
          </div>
          <h3>1 &amp; 20 Naturels</h3>
          <div class="stack-y">
            <div class="sub-box">
              <span class="text-primary font-bold block">1 Naturel : Critique Héroïque</span>
              <p class="text-sm mt-1">
                Succès éclatant inconditionnel. Dégâts doublés, manœuvre tactique gratuite ou
                avantage narratif majeur concédé par le MJ.
              </p>
            </div>
            <div class="sub-box">
              <span class="text-error font-bold block">20 Naturel : Échec Sombre</span>
              <p class="text-sm mt-1">
                Complication critique immédiate : perte d'1 Point de Qualité (PQ) sur l'arme,
                désarmement ou prise directe d'1 point de Corruption de Neien.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Avantages et Désavantages -->
      <div class="card card-container card-low">
        <div class="card-body">
          <div class="card-header-sm text-primary">
            <span class="label">Modulateurs Situationnels</span>
          </div>
          <h3>Avantages &amp; Désavantages</h3>
          <p>
            Les circumstances tactiques, le terrain ou les dons altèrent le lancer en jetant
            <strong>deux dés de 20</strong> :
          </p>
          <ul class="stack-y text-sm">
            <li class="sub-box">
              <strong class="text-primary">Avantage :</strong> Lancez 2d20 et conservez le
              <strong>résultat le plus bas</strong> (favorable).
            </li>
            <li class="sub-box">
              <strong class="text-error">Désavantage :</strong> Lancez 2d20 et conservez le
              <strong>résultat le plus élevé</strong> (défavorable).
            </li>
          </ul>
        </div>
        <span class="text-sm text-outline"
          >Un avantage et un désavantage simultanés s'annulent mutuellement.</span
        >
      </div>
    </div>

    <!-- Les 4 Attributs Fondamentaux -->
    <div class="card card-low mt-8">
      <div class="mb-6">
        <span class="label text-primary">Piliers de l'Aventurier</span>
        <h3 class="title-lg">Les 4 Attributs Fondamentaux</h3>
        <p>
          Chaque être explorant le gouffre d'Asun est défini par quatre piliers intérieurs,
          étalonnés de 1 à 10 lors de la création.
        </p>
      </div>
      <div class="grid-4">
        <!-- FOR -->
        <div class="card card-container">
          <div>
            <div class="card-header-sm">
              <span class="stat-value text-primary">FOR</span>
            </div>
            <h4 class="title-md">Force</h4>
            <p class="text-sm">
              Puissance musculaire, port de charge lourde, frappes dévastatrices au corps-à-corps,
              athlétisme brut et résistance aux écrasements.
            </p>
          </div>
          <div class="tag-footer">Régit : Haches, Masses, Épées, PV Max</div>
        </div>
        <!-- DEX -->
        <div class="card card-container">
          <div>
            <div class="card-header-sm">
              <span class="stat-value text-secondary">DEX</span>
            </div>
            <h4 class="title-md">Dextérité</h4>
            <p class="text-sm">
              Agilité, réflexes d'esquive instinctive, furtivité, crochetage et précision
              millimétrée aux armes de tir et de finesse.
            </p>
          </div>
          <div class="tag-footer">Régit : Arcs, Dagues, Seuil d'esquive</div>
        </div>
        <!-- INT -->
        <div class="card card-container">
          <div>
            <div class="card-header-sm">
              <span class="stat-value text-primary">INT</span>
            </div>
            <h4 class="title-md">Intelligence</h4>
            <p class="text-sm">
              Capacité d'analyse, mémoire arcanique, déchiffrage de runes anciennes, alchimie et
              puissance des incantations ésotériques.
            </p>
          </div>
          <div class="tag-footer">Régit : Sortilèges, Connaissances, PE Max</div>
        </div>
        <!-- SAG -->
        <div class="card card-container">
          <div>
            <div class="card-header-sm">
              <span class="stat-value text-secondary">SAG</span>
            </div>
            <h4 class="title-md">Sagesse</h4>
            <p class="text-sm">
              Perception affûtée, intuition instinctive, volonté psychique inébranlable et
              résistance spirituelle contre l'emprise de Neien.
            </p>
          </div>
          <div class="tag-footer">Régit : Résistance Corruption, Survie, PE Max</div>
        </div>
      </div>

      <!-- Tableau des Bonus de Maîtrise -->
      <div class="card card-container mt-8">
        <h4 class="title-md mb-3">Bonus de Touche conféré par le Rang de Maîtrise d'Arme</h4>
        <div class="grid-5-sm">
          <div class="sub-box text-center">
            <span class="stat-value text-outline">Rang E</span>
            <p class="title-lg text-main">+0</p>
            <span class="text-xs">Inexpérimenté</span>
          </div>
          <div class="sub-box text-center">
            <span class="stat-value">Rangs D / C</span>
            <p class="title-lg text-primary">+1</p>
            <span class="text-xs">Initié &amp; Entraîné</span>
          </div>
          <div class="sub-box text-center">
            <span class="stat-value text-secondary">Rangs B / A</span>
            <p class="title-lg text-primary">+2</p>
            <span class="text-xs">Vétéran &amp; Expert</span>
          </div>
          <div class="sub-box text-center">
            <span class="stat-value text-primary">Rangs S / M</span>
            <p class="title-lg text-primary font-bold">+3</p>
            <span class="text-xs">Supérieur &amp; Maître</span>
          </div>
          <div class="sub-box text-center">
            <span class="stat-value text-primary font-bold">Rang H</span>
            <p class="title-lg text-primary font-bold">+4</p>
            <span class="text-xs">Héroïque Légendaire</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
