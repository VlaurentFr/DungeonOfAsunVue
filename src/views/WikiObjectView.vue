<script lang="ts" setup>
  import WikiAsideMenu from '@/components/WikiAsideMenu.vue'
  import WikiBreadcrumbs from '@/components/WikiBreadcrumbs.vue'
</script>
<template>
  <WikiAsideMenu></WikiAsideMenu>

  <article id="wiki_container">
    <WikiBreadcrumbs></WikiBreadcrumbs>
    <details
      class="accordion-item"
      open
    >
      <summary class="accordion-item__summary">
        <span class="accordion-item__summary-title">
          <p>Consommables</p>
        </span>
      </summary>
      <div class="accordion-item__content">
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Propriétés</th>
                <th>Prix</th>
                <th>Rareté</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-semibold">Sels de Purge</td>
                <td>Réduit la jauge de Corruption de 1d4 points.</td>
                <td class="text-outline">100 EC</td>
                <td class="text-outline">Très rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Bandages</td>
                <td>Soigne 1d4 PV.</td>
                <td class="text-outline">5 EC</td>
                <td class="text-outline">Commun</td>
              </tr>
              <tr>
                <td class="font-semibold">Potion de soin diluée</td>
                <td>Soigne 1d6+6 PV.</td>
                <td class="text-outline">25 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Potion de soin</td>
                <td>Soigne 2d6+12 PV.</td>
                <td class="text-outline">50 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Potion de soin Majeur</td>
                <td>Soigne 4d6+24 PV.</td>
                <td class="text-outline">100 EC</td>
                <td class="text-outline">Très rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Elixir des Héros</td>
                <td>Soigne 1d6+3 PdE.</td>
                <td class="text-outline">25 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Tonique des Héros</td>
                <td>Soigne 2d6+6 PdE.</td>
                <td class="text-outline">50 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Ambroisie des Héros</td>
                <td>Soigne 4d6+12 PdE.</td>
                <td class="text-outline">100 EC</td>
                <td class="text-outline">Très rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Feu grégeois</td>
                <td>Liquide collant enflammer (1d4 / tours, dégâts de feu).</td>
                <td class="text-outline">50 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Antidote</td>
                <td>Soigne empoisonnement.</td>
                <td class="text-outline">25 EC</td>
                <td class="text-outline">Commun</td>
              </tr>
              <tr>
                <td class="font-semibold">Acide</td>
                <td>Inflige 2d6 dégâts d'acide.</td>
                <td class="text-outline">50 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Poison (Fiole)</td>
                <td>Liquide empoisonnant (1d4 / tours, dégâts de poison).</td>
                <td class="text-outline">50 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Poison (Huile)</td>
                <td>Huile pour armes, empoisonnant (1d4 / tours, dégâts de poison).</td>
                <td class="text-outline">100 EC</td>
                <td class="text-outline">Très rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Kit crochetage</td>
                <td>Permet de crocheter une serrure - Jet de DEX.</td>
                <td class="text-outline">50 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Kit de Réparation</td>
                <td>Permet de réparer de 1d4 PQ un équipement.</td>
                <td class="text-outline">20 EC</td>
                <td class="text-outline">Commun</td>
              </tr>
              <tr>
                <td class="font-semibold">Chaînes</td>
                <td>Chaînes en fer de 2m.</td>
                <td class="text-outline">10 EC</td>
                <td class="text-outline">Commun</td>
              </tr>
              <tr>
                <td class="font-semibold">Cordes en chanvre</td>
                <td>Corde en chanvre de 2m.</td>
                <td class="text-outline">5 EC</td>
                <td class="text-outline">Commun</td>
              </tr>
              <tr>
                <td class="font-semibold">Livre de sort (lvl 1)</td>
                <td>Permet d'apprendre un sort de niveau 1.</td>
                <td class="text-outline">500 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Livre de sort (lvl 2)</td>
                <td>Permet d'apprendre un sort de niveau 2 (nécessite les autres avant).</td>
                <td class="text-outline">875 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Livre de sort (lvl 3)</td>
                <td>Permet d'apprendre un sort de niveau 3 (nécessite les autres avant).</td>
                <td class="text-outline">1750 EC</td>
                <td class="text-outline">Très Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Parchemin de sort (lvl 1)</td>
                <td>Permet de lancer un sort de niveau 1 (consommable).</td>
                <td class="text-outline">375 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Parchemin de sort (lvl 2)</td>
                <td>Permet de lancer un sort de niveau 2 (consommable).</td>
                <td class="text-outline">500 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
              <tr>
                <td class="font-semibold">Parchemin de sort (lvl 3)</td>
                <td>Permet de lancer un sort de niveau 3 (consommable).</td>
                <td class="text-outline">875 EC</td>
                <td class="text-outline">Rare</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </details>
    <details
      class="accordion-item"
      open
    >
      <summary class="accordion-item__summary">
        <span class="accordion-item__summary-title">
          <p>Arsenal d'armes</p>
        </span>
      </summary>
      <div class="accordion-item__content">
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
                <td>Lourde: Requiert FOR 6+ (2 mains)</td>
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
                <td>Lourde: Requiert FOR 6+ (2 mains)</td>
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
      </div>
    </details>
    <details
      class="accordion-item"
      open
    >
      <summary class="accordion-item__summary">
        <span class="accordion-item__summary-title">
          <p>Arsenal d'équipement</p>
        </span>
      </summary>
      <div class="accordion-item__content">
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Armure / Protection</th>
                <th>Protection (PR)</th>
                <th>Malus DEX</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-semibold">Vêtements épais</td>
                <td class="text-primary font-bold">PR 0</td>
                <td>0</td>
                <td class="text-outline">2 EC</td>
              </tr>
              <tr>
                <td class="font-semibold">Cuir Souple</td>
                <td class="text-primary font-bold">PR 1</td>
                <td>0</td>
                <td class="text-outline">20 EC</td>
              </tr>
              <tr>
                <td class="font-semibold">Armure Matelassée</td>
                <td class="text-primary font-bold">PR 2</td>
                <td>0</td>
                <td class="text-outline">45 EC</td>
              </tr>
              <tr>
                <td class="font-semibold">Cotte de Mailles</td>
                <td class="text-primary font-bold">PR 4</td>
                <td>-1</td>
                <td class="text-outline">150 EC</td>
              </tr>
              <tr>
                <td class="font-semibold">Plates de Fer</td>
                <td class="text-primary font-bold">PR 7</td>
                <td>-2</td>
                <td class="text-outline">400 EC</td>
              </tr>
              <tr>
                <td class="font-semibold">Bouclier léger</td>
                <td class="text-primary font-bold">PR +1</td>
                <td>0</td>
                <td class="text-outline">35 EC</td>
              </tr>
              <tr>
                <td class="font-semibold">Pavois (lourd)</td>
                <td class="text-primary font-bold">PR +3</td>
                <td>-1</td>
                <td class="text-outline">50 EC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </details>
  </article>
</template>

<style scoped>
  article {
    margin-left: 250px;
  }
  #wiki_container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: inherit;
  }
  .accordion-item {
    margin-top: 6px;
    background-color: #1e2022;
    border-radius: 8px;
    width: 100%;
  }
  .accordion-item__summary {
    padding: 12px;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5ch;
    transition: color 300ms ease-in-out;
  }
  .accordion-item__summary:hover {
    color: var(--red-text);
    transition: color 300ms ease-in-out;
  }
</style>

<style lang="scss" scoped>
  /* --- Design System / Variables CSS du Thème (Material Dark) --- */
  article {
    --bg-surface: #121416;
    --surface-container-lowest: #0c0e10;
    --surface-container-low: #1a1c1e;
    --surface-container: #1e2022;
    --surface-container-high: #282a2c;
    --surface-container-highest: #333537;

    --primary: #cf2c1d;
    --primary-container: #cf2c1d;
    --on-primary: #690100;

    --secondary: #cf2c1d;
    --secondary-container: #b72301;

    --text-main: #e2e2e5;
    --text-variant: white;
    --text-outline: rgb(243, 238, 222);
    --error: #cf2c1d;

    color: var(--text-main);
    font-family: 'Inter', sans-serif;
    width: 100%;
  }

  :deep() {
    /* Base Typo */
    h2,
    h3,
    h4,
    .title-lg,
    .title-md {
      font-family: 'Epilogue', sans-serif;
      color: var(--text-main);
      margin: 0;
    }

    .title-lg {
      font-size: 1.5rem;
      font-weight: 7rem;
    }
    .title-md {
      font-size: 1.1rem;
      font-weight: 600;
    }
    .text-sm {
      font-size: 0.875rem;
      color: var(--text-variant);
    }
    .text-xs {
      font-size: 0.75rem;
      color: var(--text-variant);
    }
    .text-outline {
      color: var(--text-outline);
    }
    .text-primary {
      color: var(--primary);
    }
    .text-secondary {
      color: var(--secondary);
    }
    .text-error {
      color: var(--error);
    }
    .text-main {
      color: var(--text-main);
    }
    .font-bold {
      font-weight: 700;
    }

    /* Utilities */
    .block {
      display: block;
    }
    .flex-between {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .stack-y > * + * {
      margin-top: 0.75rem;
    }
    .mt-3 {
      margin-top: 0.75rem;
    }
    .mt-8 {
      margin-top: 2rem;
    }
    .mb-2 {
      margin-bottom: 0.5rem;
    }
    .mb-3 {
      margin-bottom: 0.75rem;
    }
    .mb-4 {
      margin-bottom: 1rem;
    }
    .mb-6 {
      margin-bottom: 1.5rem;
    }
    .text-center {
      text-align: center;
    }

    ul {
      list-style-type: none;
      margin-block-start: 0;
      padding-inline-start: 0;
    }
    /* En-tête / Hero */
    .hero-header {
      background-color: var(--surface-container-lowest);
      padding: 1.5rem;
      border-radius: 0.75rem;
      margin-bottom: 2rem;
    }
    @media (min-width: 768px) {
      .hero-header {
        padding: 2.5rem;
      }
    }

    .badge-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    .badge {
      padding: 0.25rem 0.625rem;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-radius: 0.25rem;
    }
    .primary-badge {
      background: linear-gradient(100deg, rgba(201, 47, 24, 0.42) 0%, rgba(201, 47, 24, 0.12) 100%);
      color: var(--text-main);
    }
    .surface-badge {
      background-color: var(--surface-container);
    }
    .secondary-badge {
      background-color: rgba(183, 35, 1, 0.4);
      color: white;
    }

    .hero-main {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    @media (min-width: 1024px) {
      .hero-main {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
      }
    }

    .action-buttons {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    /* Buttons */
    .btn {
      padding: 0.625rem 1rem;
      border-radius: 0.25rem;
      font-family: 'Epilogue', sans-serif;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .btn-primary {
      background-color: var(--primary-container);
      color: white;
    }
    .btn-primary:hover {
      background-color: var(--secondary-container);
    }
    .btn-surface {
      background-color: var(--surface-container-high);
      color: var(--text-main);
    }
    .btn-surface:hover {
      background-color: var(--surface-container-highest);
    }
    .btn-sm {
      font-size: 0.75rem;
      padding: 0.375rem 0.75rem;
    }

    /* Navigation par Onglets */
    .tab-nav {
      display: flex;
      gap: 0.5rem;
      overflow-x: auto;
      padding-bottom: 0.75rem;
      margin-bottom: 2rem;
    }
    .tab-btn {
      padding: 0.625rem 1rem;
      font-family: 'Epilogue', sans-serif;
      font-size: 0.875rem;
      white-space: nowrap;
      border: none;
      background-color: var(--surface-container-high);
      color: var(--text-main);
      cursor: pointer;
      transition: all 0.2s;
      transform: skewX(16deg);
    }
    .tab-btn p {
      transform: skewX(-16deg);
    }
    .tab-btn:hover {
      background-color: var(--surface-container-highest);
    }
    .tab-btn.active {
      background: linear-gradient(100deg, rgba(201, 47, 24, 0.42) 0%, rgba(201, 47, 24, 0.12) 100%);
      color: white;
    }

    /* Grids Layouts */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    .grid-calc {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    @media (min-width: 768px) {
      .grid-2 {
        grid-template-columns: repeat(2, 1fr);
      }
      .grid-3 {
        grid-template-columns: repeat(3, 1fr);
      }
      .grid-4 {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .grid-4 {
        grid-template-columns: repeat(4, 1fr);
      }
      .grid-calc {
        grid-template-columns: 5fr 7fr;
      }
    }

    .grid-5-sm {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
    @media (min-width: 640px) {
      .grid-5-sm {
        grid-template-columns: repeat(5, 1fr);
      }
    }

    .grid-6 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 0.5rem;
    }

    .grid-tags {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }
    @media (min-width: 640px) {
      .grid-tags {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    @media (min-width: 768px) {
      .grid-tags {
        grid-template-columns: repeat(8, 1fr);
      }
    }

    /* Cards & Containers */
    .card {
      padding: 1.25rem;
      border-radius: 0.75rem;
    }
    .card-low {
      background: var(--bg-surface);
    }
    .card-container {
      background-color: var(--surface-container);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .card-lowest {
      background-color: var(--surface-container-lowest);
    }

    .sub-box {
      background-color: var(--surface-container-lowest);
      padding: 0.75rem;
      border-radius: 0.25rem;
    }

    .code-box {
      background-color: var(--surface-container-lowest);
      padding: 0.75rem;
      border-radius: 0.25rem;
      text-align: center;
      margin: 0.5rem 0;
    }

    .tag-footer {
      margin-top: 1rem;
      padding-top: 0.75rem;
      background-color: var(--surface-container-lowest);
      padding: 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      color: var(--text-outline);
    }

    .step-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
    .step-num {
      width: 2rem;
      height: 2rem;
      border-radius: 0.25rem;
      background-color: var(--primary-container);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .tag-box {
      background-color: var(--surface-container);
      padding: 0.75rem;
      border-radius: 0.25rem;
      text-align: center;
      font-family: 'Epilogue', sans-serif;
      font-size: 0.875rem;
    }

    .italic-subtitle {
      font-size: 0.75rem;
      color: var(--text-outline);
      font-style: italic;
    }

    .badge-sm {
      padding: 0.125rem 0.5rem;
      background-color: var(--surface-container-highest);
      color: var(--primary);
      font-size: 0.75rem;
      border-radius: 0.25rem;
    }
    .badge-sm.secondary {
      color: var(--secondary);
    }
    .badge-sm.error {
      background-color: rgba(147, 0, 10, 0.4);
      color: var(--error);
    }
    .badge-sm.primary {
      background-color: var(--primary-container);
      color: var(--text-main);
    }

    /* Table Styles */
    .table-responsive {
      overflow-x: auto;
    }
    .data-table {
      width: 100%;
      text-align: left;
      border-collapse: collapse;
      font-size: 0.875rem;
    }
    .data-table th {
      background-color: var(--surface-container-highest);
      color: var(--primary);
      padding: 0.75rem;
      text-transform: uppercase;
      font-size: 0.75rem;
    }
    .data-table td {
      padding: 0.75rem;
      border-bottom: 1px solid var(--surface-container-low);
    }
    .data-table tr:nth-child(even) {
      background-color: var(--surface-container-high);
    }
    .data-table tr:nth-child(odd) {
      background-color: var(--surface-container);
    }

    /* Interactive Calculator Elements */
    .stat-number {
      font-family: 'Epilogue', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      margin: 0.25rem 0;
    }

    .range-field {
      margin-bottom: 0.75rem;
    }
    .range-input {
      width: 100%;
      accent-color: var(--primary-container);
      background: var(--surface-container-highest);
      height: 0.5rem;
      border-radius: 0.25rem;
      cursor: pointer;
    }

    .select-input {
      width: 100%;
      background-color: var(--surface-container-lowest);
      color: var(--text-main);
      font-size: 0.875rem;
      padding: 0.625rem;
      border: none;
      border-radius: 0.25rem;
    }

    .wound-btn {
      padding: 0.75rem 0;
      background-color: var(--surface-container-lowest);
      color: var(--text-main);
      border: none;
      border-radius: 0.25rem;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .wound-btn:hover {
      background-color: var(--surface-container-high);
    }
    .wound-btn.active {
      background-color: var(--primary-container);
      color: white;
    }
  }
</style>
