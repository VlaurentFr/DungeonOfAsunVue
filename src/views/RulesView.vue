<script setup>
  import AbilitiesTab from '@/components/Rules/AbilitiesTab.vue'
  import CombatTab from '@/components/Rules/CombatTab.vue'
  import CreateTab from '@/components/Rules/CreateTab.vue'
  import EcoTab from '@/components/Rules/EcoTab.vue'
  import EngineTab from '@/components/Rules/EngineTab.vue'
  import GearTab from '@/components/Rules/GearTab.vue'
  import { ref, computed } from 'vue'

  // --- États des Onglets ---
  const activeTab = ref('tab-engine')

  function switchTab(tabId) {
    activeTab.value = tabId
  }

  // --- Calculateur Dynamique ---
  const inputFor = ref(6)
  const inputDex = ref(7)
  const inputInt = ref(6)
  const inputSag = ref(6)
  const selectRank = ref(20)

  const calcPv = computed(() => {
    return Number(inputFor.value) + Number(inputDex.value) + 10 + Number(selectRank.value)
  })

  const calcPe = computed(() => {
    return (Number(inputInt.value) + Number(inputSag.value)) * 2
  })

  const calcDodge = computed(() => {
    const d = Number(inputDex.value)
    if (d >= 14) return -4
    if (d >= 12) return -3
    if (d >= 10) return -2
    if (d >= 7) return -1
    return 0
  })

  function resetCalculator() {
    inputFor.value = 6
    inputDex.value = 7
    inputInt.value = 6
    inputSag.value = 6
    selectRank.value = 20
  }

  // --- Compteur de Blessures ---
  const activeWounds = ref(0)

  function toggleWound(index) {
    if (activeWounds.value === index) {
      activeWounds.value = index - 1
    } else {
      activeWounds.value = index
    }
  }

  const woundStatusText = computed(() => {
    if (activeWounds.value === 0) return 'État actuel : En pleine santé ou blessures légères.'
    if (activeWounds.value < 4)
      return `État actuel : ${activeWounds.value} blessure(s) grave(s). Pénalité de mouvement.`
    if (activeWounds.value < 6)
      return `État critique : ${activeWounds.value} blessures ! Jet de mort requis à chaque action.`
    return 'MORT DÉFINITIVE DU PERSONNAGE (6 Blessures atteintes).'
  })

  // --- Jauge de Corruption ---
  const corruptionVal = ref(3)

  const corruptionStatusText = computed(() => {
    const val = Number(corruptionVal.value)
    if (val <= 5)
      return "Statut : <span class='text-primary font-bold'>Pur</span> (0-5) — Aucun effet négatif actif."
    if (val <= 15)
      return "Statut : <span class='text-secondary font-bold'>Entaché</span> (6-15) — Veines sombres, désavantage contre le néant."
    if (val <= 19)
      return "Statut : <span class='text-error font-bold'>Sombre</span> (16-19) — <strong class='text-error'>Repos inopérant : impossible de soigner ses PV !</strong>"
    return "Statut : <span class='text-primary font-extrabold uppercase'>Perdu</span> (20+) — Transformation en monstre PNJ sous le contrôle du MJ."
  })
</script>

<template>
  <div class="rules-view-container">
    <!-- En-tête / Hero Bandeau Synthétique -->
    <header class="hero-header">
      <div class="hero-content">
        <div class="badge-group">
          <span class="badge primary-badge">Moteur d20 Roll-Under / Inverse</span>
          <span class="badge surface-badge text-primary">Système v2.0</span>
          <span class="badge surface-badge text-variant">4 Attributs Fondamentaux</span>
          <span class="badge secondary-badge">Gestion Dynamique PV/PE/Corruption</span>
        </div>

        <div class="hero-main">
          <div class="hero-titles">
            <h2>Système de Jeu v2.0 — Codex des Règles &amp; Gestion de Personnage</h2>
            <p>
              Le moteur D20, la création d'aventurier, le combat tactique, la corruption de Neien et
              l'aide-mémoire en jeu pour aventuriers et Maîtres de Donjon.
            </p>
          </div>

          <div class="action-buttons">
            <button
              class="btn btn-primary"
              @click="switchTab('tab-sheet')"
            >
              Fiche Mémo PJ
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Navigation par Onglets Horizontaux Discrets -->
    <nav
      class="tab-nav"
      aria-label="Sections du Manuel de Règles"
    >
      <button
        :class="['tab-btn', activeTab === 'tab-engine' ? 'active' : '']"
        @click="switchTab('tab-engine')"
      >
        <p>I. Moteur de Jeu &amp; Attributs</p>
      </button>
      <button
        :class="['tab-btn', activeTab === 'tab-creation' ? 'active' : '']"
        @click="switchTab('tab-creation')"
      >
        <p>II. Création (Étapes 1 à 6)</p>
      </button>
      <button
        :class="['tab-btn', activeTab === 'tab-combat' ? 'active' : '']"
        @click="switchTab('tab-combat')"
      >
        <p>III. Combat, Dégâts &amp; Survie</p>
      </button>
      <button
        :class="['tab-btn', activeTab === 'tab-corruption' ? 'active' : '']"
        @click="switchTab('tab-corruption')"
      >
        <p>IV. Corruption &amp; Économie</p>
      </button>
      <button
        :class="['tab-btn', activeTab === 'tab-gear' ? 'active' : '']"
        @click="switchTab('tab-gear')"
      >
        <p>V. Arsenal &amp; Consommables</p>
      </button>
      <button
        :class="['tab-btn', activeTab === 'tab-abilities' ? 'active' : '']"
        @click="switchTab('tab-abilities')"
      >
        <p>VI. Sorts &amp; Compétences</p>
      </button>
      <button
        :class="['tab-btn', activeTab === 'tab-sheet' ? 'active' : '']"
        @click="switchTab('tab-sheet')"
      >
        <p>Fiche Récap &amp; Mémento</p>
      </button>
    </nav>

    <!-- TAB 1 : MOTEUR DE JEU & ATTRIBUTS -->
    <EngineTab v-show="activeTab === 'tab-engine'"></EngineTab>

    <!-- TAB 2 : CRÉATION DE PERSONNAGE -->
    <CreateTab v-show="activeTab === 'tab-creation'"></CreateTab>

    <!-- TAB 3 : COMBAT, DÉGÂTS & SURVIE -->
    <CombatTab v-show="activeTab === 'tab-combat'"></CombatTab>

    <!-- TAB 4 : CORRUPTION & ÉCONOMIE -->
    <EcoTab v-show="activeTab === 'tab-corruption'"></EcoTab>

    <!-- TAB 5 : ARSENAL & CONSOMMABLES -->
    <GearTab v-show="activeTab === 'tab-gear'"></GearTab>

    <AbilitiesTab v-show="activeTab === 'tab-abilities'"></AbilitiesTab>

    <!-- TAB 6 : FICHE RÉCAP & MÉMENTO -->
    <section
      v-show="activeTab === 'tab-sheet'"
      class="tab-pane"
    >
      <div class="card card-low">
        <div class="flex-between mb-6">
          <div>
            <span class="label text-primary">Outil de Table</span>
            <h3 class="title-lg mt-1">Mémento Interactif &amp; Calculateur Dynamique</h3>
            <p class="text-sm">
              Ajustez vos statistiques pour recalculer instantanément les jauges vitales et seuils
              défensifs de votre héros.
            </p>
          </div>
          <button
            class="btn btn-surface btn-sm"
            @click="resetCalculator"
          >
            Réinitialiser
          </button>
        </div>

        <div class="grid-calc">
          <!-- Inputs (Left Column) -->
          <div class="card card-container stack-y">
            <h4 class="title-md mb-2">Attributs &amp; Maîtrise</h4>

            <div class="range-field">
              <div class="flex-between text-xs font-semibold">
                <span>FORCE (FOR)</span>
                <span class="text-primary font-bold">{{ inputFor }}</span>
              </div>
              <input
                v-model="inputFor"
                type="range"
                min="1"
                max="16"
                class="range-input"
              />
            </div>

            <div class="range-field">
              <div class="flex-between text-xs font-semibold">
                <span>DEXTÉRITÉ (DEX)</span>
                <span class="text-secondary font-bold">{{ inputDex }}</span>
              </div>
              <input
                v-model="inputDex"
                type="range"
                min="1"
                max="16"
                class="range-input"
              />
            </div>

            <div class="range-field">
              <div class="flex-between text-xs font-semibold">
                <span>INTELLIGENCE (INT)</span>
                <span class="text-primary font-bold">{{ inputInt }}</span>
              </div>
              <input
                v-model="inputInt"
                type="range"
                min="1"
                max="16"
                class="range-input"
              />
            </div>

            <div class="range-field">
              <div class="flex-between text-xs font-semibold">
                <span>SAGESSE (SAG)</span>
                <span class="text-secondary font-bold">{{ inputSag }}</span>
              </div>
              <input
                v-model="inputSag"
                type="range"
                min="1"
                max="16"
                class="range-input"
              />
            </div>

            <div class="pt-2">
              <label class="block text-xs font-semibold mb-1">Rang de Maîtrise Maximal</label>
              <select
                v-model="selectRank"
                class="select-input"
              >
                <option :value="0">Rang E ou D (+0 PV bonus)</option>
                <option :value="0">Rang C (+0 PV bonus)</option>
                <option :value="20">Rang B (+20 PV bonus)</option>
                <option :value="40">Rang A (+40 PV bonus)</option>
                <option :value="60">Rang S (+60 PV bonus)</option>
                <option :value="80">Rang M (+80 PV bonus)</option>
                <option :value="100">Rang H (+100 PV bonus)</option>
              </select>
            </div>
          </div>

          <!-- Results (Right Column) -->
          <div class="stack-y card-container">
            <div class="grid-3">
              <div class="card card-container text-center">
                <span class="text-xs text-outline font-semibold uppercase block"
                  >Points de Vie Max</span
                >
                <p class="stat-number text-primary my-1">{{ calcPv }}</p>
                <span class="text-xs">[FOR+DEX]+10+Rang</span>
              </div>
              <div class="card card-container text-center">
                <span class="text-xs text-outline font-semibold uppercase block"
                  >Énergie Max (PE)</span
                >
                <p class="stat-number text-secondary my-1">{{ calcPe }}</p>
                <span class="text-xs">[INT+SAG] × 2</span>
              </div>
              <div class="card card-container text-center">
                <span class="text-xs text-outline font-semibold uppercase block"
                  >Malus Attaquant</span
                >
                <p class="stat-number my-1">{{ calcDodge === 0 ? '0' : calcDodge }}</p>
                <span class="text-xs">Calculé selon DEX</span>
              </div>
            </div>

            <!-- Blessures -->
            <div class="card card-container stack-y">
              <div class="flex-between">
                <span class="title-md text-error">Compteur de Blessures d'Agonie</span>
                <span class="text-xs text-outline">Mort à 6</span>
              </div>
              <div class="grid-6">
                <button
                  v-for="k in 6"
                  :key="k"
                  :class="['wound-btn', k <= activeWounds ? 'active' : '']"
                  @click="toggleWound(k)"
                >
                  {{ k }}
                </button>
              </div>
              <span class="text-xs block">{{ woundStatusText }}</span>
            </div>

            <!-- Corruption -->
            <div class="card card-container stack-y">
              <div class="flex-between">
                <span class="title-md">Jauge de Corruption en direct</span>
                <span class="stat-value text-primary font-bold">{{ corruptionVal }} / 20</span>
              </div>
              <input
                v-model="corruptionVal"
                type="range"
                min="0"
                max="20"
                class="range-input"
              />
              <div
                class="sub-box text-xs"
                v-html="corruptionStatusText"
              ></div>
            </div>
          </div>
        </div>

        <!-- Mémo Rapide -->
        <div class="card card-lowest mt-8 p-4">
          <span class="label text-outline block uppercase mb-2"
            >Aide-Mémoire d'Urgence du MJ &amp; Joueurs</span
          >
          <div class="grid-3 text-xs">
            <div>
              <strong class="block mb-1">Résolution d'Attaque :</strong>
              Lancez d20 ≤ [FOR ou DEX + Maîtrise - Malus Esquive de la Cible].
            </div>
            <div>
              <strong class="block mb-1">Dégâts Reçus :</strong>
              [Dégâts de l'Arme + Bonus Rang] - [Protection PR de l'Armure].
            </div>
            <div>
              <strong class="block mb-1">Régénération :</strong>
              Repos court = 1d6 PV + 1d4 PE. Repos long = Totalité (sauf Corruption Sombre 16+).
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  /* --- Design System / Variables CSS du Thème (Material Dark) --- */
  .rules-view-container {
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
