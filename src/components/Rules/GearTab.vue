<template>
  <section class="tab-pane">
    <!-- Armes Blanches -->
    <div class="card card-low">
      <h3 class="title-md mb-4">Arsenal : Armes de Contact &amp; Distance</h3>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Arme</th>
              <th>Dégâts de Base</th>
              <th>Attribut</th>
              <th>Propriétés &amp; Atouts</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-semibold">Dague d'Obsidienne</td>
              <td class="text-primary font-bold">1d4</td>
              <td>DEX</td>
              <td>Dissimulable</td>
              <td class="text-outline">10 EC</td>
            </tr>
            <tr>
              <td class="font-semibold">Cestes de pugiliste</td>
              <td class="text-primary font-bold">1d4</td>
              <td>DEX</td>
              <td>Dissimulable</td>
              <td class="text-outline">10 EC</td>
            </tr>
            <tr>
              <td class="font-semibold">Épée Courte Impériale</td>
              <td class="text-primary font-bold">1d6</td>
              <td>FOR</td>
              <td></td>
              <td class="text-outline">25 EC</td>
            </tr>
            <tr>
              <td class="font-semibold">Épée Longue des Veilleurs</td>
              <td class="text-primary font-bold">1d8</td>
              <td>FOR</td>
              <td>Polyvalente (1 ou 2 mains)</td>
              <td class="text-outline">40 EC</td>
            </tr>
            <tr>
              <td class="font-semibold">Lance d'Obsidienne</td>
              <td class="text-primary font-bold">1d8</td>
              <td>DEX</td>
              <td>Polyvalente (1 ou 2 mains)</td>
              <td class="text-outline">40 EC</td>
            </tr>
            <tr>
              <td class="font-semibold">Hache Courte Skurf</td>
              <td class="text-primary font-bold">1d6</td>
              <td>FOR</td>
              <td>Lançable</td>
              <td class="text-outline">25 EC</td>
            </tr>
            <tr>
              <td class="font-semibold">Hache de Brèche Morndal</td>
              <td class="text-primary font-bold">1d10</td>
              <td>FOR</td>
              <td>Lourde: Requiert FOR 6+</td>
              <td class="text-outline">60 EC</td>
            </tr>
            <tr>
              <td class="font-semibold">Masse Brise-Os</td>
              <td class="text-primary font-bold">1d6</td>
              <td>FOR</td>
              <td></td>
              <td class="text-outline">25 EC</td>
            </tr>
            <tr>
              <td class="font-semibold">Marteau Brise-Crâne</td>
              <td class="text-primary font-bold">1d10</td>
              <td>FOR</td>
              <td>Lourde: Requiert FOR 6+</td>
              <td class="text-outline">60 EC</td>
            </tr>
            <tr>
              <td class="font-semibold">Arc Composite Lythari</td>
              <td class="text-primary font-bold">1d8</td>
              <td>DEX</td>
              <td>Portée 20m, Tir précis, 2 mains</td>
              <td class="text-outline">30 EC</td>
            </tr>
            <tr>
              <td class="font-semibold">Arc Long Umiyori</td>
              <td class="text-primary font-bold">1d10</td>
              <td>DEX</td>
              <td>Portée 50m, Requiert FOR 5+</td>
              <td class="text-outline">70 EC</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 class="title-md mb-3">Focalisateurs Arcaniques</h3>
      <div class="stack-y">
        <div class="sub-box">
          <strong class="text-primary text-sm block">Fétiche de Sang (WIP)</strong
          ><span class="text-sm"
            >Permet de dépenser 3 PV à la place de 3 PE pour lancer un sort d'illusion ou
            nécromancie.</span
          >
        </div>
        <div class="sub-box">
          <strong class="text-primary text-sm block">Baguette en Bois-Fiel</strong
          ><span class="text-sm"
            >+1 au toucher des sorts à distance et réduction de 1 PE sur le premier sort du
            combat.</span
          >
        </div>
        <div class="sub-box">
          <strong class="text-primary text-sm block">Grimoire Scellé d'Asun</strong
          ><span class="text-sm"
            >Augmente la puissance des runes et autorise l'apprentissage d'un 5ème sort
            rituel.</span
          >
        </div>
      </div>
    </div>

    <!-- Armures -->
    <div class="card card-low mt-8">
      <h3 class="title-md mb-4">Protections &amp; Boucliers</h3>
      <div class="grid-4">
        <div class="card card-container">
          <div class="flex-between mb-2">
            <h4 class="title-md">Vêtements épais</h4>
            <span class="text-primary font-bold text-xs">PR 0</span>
          </div>
          <div class="text-xs text-outline">Malus DEX : 0 | Prix : 2 EC</div>
        </div>
        <div class="card card-container">
          <div class="flex-between mb-2">
            <h4 class="title-md">Cuir Souple</h4>
            <span class="text-primary font-bold text-xs">PR 1</span>
          </div>
          <div class="text-xs text-outline">Malus DEX : 0 | Prix : 20 EC</div>
        </div>
        <div class="card card-container">
          <div class="flex-between mb-2">
            <h4 class="title-md">Armure Matellasée</h4>
            <span class="text-primary font-bold text-xs">PR 2</span>
          </div>
          <div class="text-xs text-outline">Malus DEX : 0 | Prix : 45 EC</div>
        </div>
        <div class="card card-container">
          <div class="flex-between mb-2">
            <h4 class="title-md">Cotte de Mailles</h4>
            <span class="text-primary font-bold text-xs">PR 4</span>
          </div>
          <div class="text-xs text-outline">Malus DEX : -1 | Prix : 150 EC</div>
        </div>
        <div class="card card-container">
          <div class="flex-between mb-2">
            <h4 class="title-md">Plates de Fer</h4>
            <span class="text-primary font-bold text-xs">PR 7</span>
          </div>
          <div class="text-xs text-outline">Malus DEX : -2 | Prix : 400 EC</div>
        </div>
        <div class="card card-container">
          <div class="flex-between mb-2">
            <h4 class="title-md">Bouclier léger</h4>
            <span class="text-secondary font-bold text-xs">PR +1</span>
          </div>
          <div class="text-xs text-outline">Malus DEX : 0 | Prix : 35 EC</div>
        </div>
        <div class="card card-container">
          <div class="flex-between mb-2">
            <h4 class="title-md">Pavois (lourd)</h4>
            <span class="text-secondary font-bold text-xs">PR +3</span>
          </div>
          <div class="text-xs text-outline">Malus DEX : -1| Prix : 50 EC</div>
        </div>
      </div>
    </div>

    <!-- Consommables & Qualité -->
    <div class="grid-2 mt-8">
      <div class="card card-container card-low">
        <h3 class="title-md mb-3">Qualité d'équipement</h3>
        <p class="text-sm mb-4">
          Règle : Sur un Échec Sombre (20), l'arme, perd 1 point de Qualité, sur une réussite
          critique d’un assaillant, l'armure et/ou le bouclier perdent 1 point de Qualité. Si la
          Qualité tombe à 0, l'objet est brisé. On répare la Qualité chez un forgeron pour 10 EC /
          point
        </p>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Qualité</th>
                <th>Points (PQ)</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-semibold">Fortune</td>
                <td class="text-primary font-bold">1</td>
                <td class="text-outline">5 EC</td>
              </tr>
              <tr>
                <td class="font-semibold">Standard</td>
                <td class="text-primary font-bold">3</td>
                <td class="text-outline">Prix Normal</td>
              </tr>
              <tr>
                <td class="font-semibold">Maître</td>
                <td class="text-primary font-bold">5</td>
                <td class="text-outline">Prix x3</td>
              </tr>
              <tr>
                <td class="font-semibold">Légendaire</td>
                <td class="text-primary font-bold">10</td>
                <td class="text-outline">Non Achetable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card card-container card-low">
        <h3 class="title-md mb-3">Consommables Cruciaux (WIP)</h3>
        <div class="stack-y">
          <div class="sub-box flex-between">
            <div>
              <strong class="text-secondary text-sm block">Sels de Purge</strong
              ><span class="text-xs">Réduit la Corruption de 1d4 points immédiatement.</span>
            </div>
            <span class="text-xs font-bold">120 EC</span>
          </div>
          <div class="sub-box flex-between">
            <div>
              <strong class="text-sm block">Potion de Sang Vital</strong
              ><span class="text-xs">Restaure 2d8 + 4 PV en action d'urgence.</span>
            </div>
            <span class="text-xs font-bold">30 EC</span>
          </div>
          <div class="sub-box flex-between">
            <div>
              <strong class="text-sm block">Élixir d'Âme Ardente</strong
              ><span class="text-xs">Régénère 1d10 + 2 Points d'Énergie (PE).</span>
            </div>
            <span class="text-xs font-bold">40 EC</span>
          </div>
          <div class="sub-box flex-between">
            <div>
              <strong class="text-error text-sm block">Feu Grégeois d'Asun</strong
              ><span class="text-xs">Inflige 2d6 dégâts de zone et brûle pendant 2 tours.</span>
            </div>
            <span class="text-xs font-bold">25 EC</span>
          </div>
        </div>
        <p class="text-xs text-outline">Cf: WIKI pour liste complète</p>
      </div>
    </div>
  </section>
</template>
