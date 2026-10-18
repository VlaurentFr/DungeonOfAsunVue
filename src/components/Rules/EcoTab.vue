<template>
  <section class="tab-pane">
    <div class="card card-low">
      <div class="mb-6">
        <h3 class="title-lg">L'Emprise de Neien : Les 4 Stades de Corruption</h3>
        <p class="text-sm">
          Chaque immersion prolongée dans les failles d'Asun ronge la chair et l'esprit.
        </p>
      </div>
      <div class="grid-4">
        <div class="card card-container">
          <div class="flex-between mb-2">
            <span class="stat-value text-sm">0 – 5 pts</span>
            <span class="badge-sm">PUR</span>
          </div>
          <h4 class="title-md mb-2">Aura Intacte</h4>
          <p class="text-sm">
            L'esprit est limpide. Aucun signe d'altération visible. Le repos permet la récupération
            normale de tous les PV et PE.
          </p>
        </div>
        <div class="card card-container">
          <div class="flex-between mb-2">
            <span class="stat-value text-secondary text-sm">6 – 15 pts</span>
            <span class="badge-sm secondary">ENTACHÉ</span>
          </div>
          <h4 class="title-md text-secondary mb-2">Marques Noires</h4>
          <p class="text-sm">
            Veines noircies, cauchemars récurrents, frissons. Désavantage sur les jets de résistance
            mentale contre les créatures du néant.
          </p>
        </div>
        <div class="card card-container">
          <div class="flex-between mb-2">
            <span class="stat-value text-error text-sm">16 – 19 pts</span>
            <span class="badge-sm error">SOMBRE</span>
          </div>
          <h4 class="title-md text-error mb-2">Agonie Psychique</h4>
          <p class="text-sm">
            <strong class="text-error"
              >Impossibilité absolue de soigner ses PV lors des repos.</strong
            >
            Voix lancinantes, paranoïa aiguë, mutation physique partielle.
          </p>
        </div>
        <div class="card card-container">
          <div class="flex-between mb-2">
            <span class="stat-value text-primary font-bold text-sm">20+ pts</span>
            <span class="badge-sm primary font-bold">PERDU</span>
          </div>
          <h4 class="title-md text-primary mb-2">Damnation</h4>
          <p class="text-sm">
            Perte totale de contrôle. L'aventurier se transforme immédiatement en
            <strong class="text-primary">PNJ monstrueux</strong> hostile au groupe sous contrôle du
            MJ.
          </p>
        </div>
      </div>
    </div>

    <div class="grid-2 mt-8">
      <!-- Économie -->
      <div class="card card-container card-low">
        <div class="stack-y">
          <span class="label text-secondary">Monnaie &amp; Richesse</span>
          <h3>Éclats de Cristal (EC)</h3>
          <p>
            L'or a perdu toute valeur dans les profondeurs d'Asun. Seuls les
            <strong>Éclats de Cristal (EC)</strong>, fragments résiduels d'énergie condensée,
            servent de monnaie d'échange auprès des marchands et clans troglodytes.
          </p>
          <div class="stack-y text-xs">
            <div class="sub-box flex-between">
              <span>Ration de survie / Torche</span><strong>2 EC</strong>
            </div>
            <div class="sub-box flex-between">
              <span>Nuitée en auberge fortifiée</span><strong>15 EC</strong>
            </div>
            <div class="sub-box flex-between">
              <span>Fiole de Sels de Purge (réduit corruption)</span
              ><strong class="text-primary font-bold">120 EC</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Usure -->
      <div class="card card-container card-low">
        <div class="stack-y">
          <span class="label">Entretien du Matériel</span>
          <h3>Points de Qualité (PQ)</h3>
          <p>
            Chaque arme et armure possède une réserve de Points de Qualité (généralement 3 à 5 PQ).
          </p>
          <ul class="stack-y text-xs">
            <li class="sub-box">
              <strong class="text-error">• Perte d'1 PQ pour une arme :</strong> survient sur un
              <strong>Échec Sombre (20 naturel)</strong>. À 0 PQ, l'arme se brise définitivement.
            </li>
            <li class="sub-box">
              <strong class="text-error">• Perte d'1 PQ pour une armure :</strong> survient
              lorsqu'un ennemi assène un Coup Critique.
            </li>
            <li class="sub-box">
              <strong class="text-primary">• Réparation :</strong> Coûte
              <strong>10 EC par PQ restauré</strong> auprès d'un forgeron ou avec un kit d'artisan.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
