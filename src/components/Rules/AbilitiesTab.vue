<template>
  <section class="tab-pane abilities-layout">
    <div class="page-header">
      <div class="breadcrumb">
        <span>Codex Primordial d'Asun</span> • <span>Section Arcanes & Disciplines</span> •
        <span>Transcription Intégrale</span>
      </div>
      <div class="title-row">
        <div class="cat-pills">
          <button
            class="pill-btn"
            :class="{ active: activeCategory === 'all' }"
            @click="setCategory('all')"
          >
            Toutes les Voies
          </button>
          <button
            class="pill-btn"
            :class="{ active: activeCategory === 'elemental' }"
            @click="setCategory('elemental')"
          >
            Élémentaires
          </button>
          <button
            class="pill-btn"
            :class="{ active: activeCategory === 'occult_celestial' }"
            @click="setCategory('occult_celestial')"
          >
            Occultes & Célestes
          </button>
          <button
            class="pill-btn"
            :class="{ active: activeCategory === 'martial' }"
            @click="setCategory('martial')"
          >
            Disciplines Martiales
          </button>
        </div>
      </div>

      <div class="filter-bar">
        <input
          type="text"
          class="search-input"
          v-model="searchQuery"
          placeholder="Filtrer par nom, mot-clé, dégât..."
        />
        <div class="tier-filters">
          <span class="filter-label">Palier :</span>
          <button
            class="tier-btn"
            :class="{ active: activeTier === 'all' }"
            @click="setTier('all')"
          >
            Tous
          </button>
          <button
            class="tier-btn"
            :class="{ active: activeTier === '1' }"
            @click="setTier('1')"
          >
            Nv 1
          </button>
          <button
            class="tier-btn"
            :class="{ active: activeTier === '2' }"
            @click="setTier('2')"
          >
            Nv 2
          </button>
          <button
            class="tier-btn"
            :class="{ active: activeTier === '3' }"
            @click="setTier('3')"
          >
            Nv 3
          </button>
          <button
            class="tier-btn"
            :class="{ active: activeTier === '4' }"
            @click="setTier('4')"
          >
            Nv 4
          </button>
        </div>
      </div>
    </div>

    <!-- Sections Dynamiques -->
    <div
      v-for="section in filteredSections"
      :key="section.id"
      class="voie-section"
    >
      <div
        class="section-header"
        :class="section.colorClass"
      >
        <div class="section-title-group">
          <h2 class="section-title">{{ section.title }}</h2>
        </div>
        <span class="section-meta">{{ section.meta }}</span>
      </div>

      <div
        class="voie-grid"
        :class="section.gridClass"
      >
        <div
          v-for="subCat in section.subCategories"
          :key="subCat.name"
          class="voie-column"
        >
          <div class="voie-column-header">
            <div>
              <span
                class="voie-column-label"
                :class="subCat.colorClass"
                >{{ subCat.label }}</span
              >
              <h3 class="voie-column-title">{{ subCat.name }}</h3>
            </div>
            <span
              v-if="subCat.badge"
              class="voie-column-badge"
              :class="subCat.badgeClass"
              >{{ subCat.badge }}</span
            >
            <span
              v-else
              class="voie-column-count"
              >{{ getAbilitiesForSubCat(subCat.name).length }} Formules</span
            >
          </div>
          <div class="voie-list">
            <article
              v-for="spell in getAbilitiesForSubCat(subCat.name)"
              :key="spell.id"
              class="ability-card"
              :class="{ learned: isLearned(spell.id) }"
              @click="openInspector(spell)"
            >
              <div class="card-header">
                <div>
                  <div class="card-title-row">
                    <h4 class="card-title">{{ spell.name }}</h4>
                  </div>
                  <span class="card-subcat">{{ spell.subCategory }}</span>
                </div>
                <span
                  class="card-tier"
                  :class="{ 'tier-apex': spell.tier === 4 }"
                  >{{ spell.tierLabel }}</span
                >
              </div>
              <div class="card-meta">
                <span :class="spell.tier === 4 ? 'text-primary font-bold' : 'text-secondary'">{{
                  spell.cost
                }}</span>

                <span>•</span><span>{{ spell.range }}</span>
              </div>
              <p class="card-desc">{{ spell.desc }}</p>
              <div class="card-footer">
                <span :class="isLearned(spell.id) ? 'text-secondary font-bold' : 'text-muted'">
                  {{ isLearned(spell.id) ? '• Mémorisé' : '— Non Mémorisé' }}
                </span>
                <span class="card-action">Détails →</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <!-- Inspector Modal -->
    <div
      v-if="inspectorOpen"
      class="modal-backdrop"
      @click.self="closeInspector"
    >
      <div class="modal-panel">
        <div class="modal-header">
          <div>
            <div class="modal-meta-row">
              <span class="modal-category">— Voie d'Asun • {{ currentSpell.subCategory }}</span>
              <span class="text-muted">•</span>
              <span class="modal-tier">{{ currentSpell.tierLabel }}</span>
            </div>
            <h2 class="modal-title">{{ currentSpell.name }}</h2>
          </div>
          <!-- <button
            class="modal-close"
            @click="closeInspector"
          >
            Fermer
          </button> -->
        </div>

        <div class="modal-body">
          <div class="specs-matrix">
            <div class="spec-item">
              <span class="spec-label">Coût Actif</span>
              <span class="spec-value text-secondary">{{ currentSpell.cost }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Portée / Zone</span>
              <span class="spec-value text-parchment">{{ currentSpell.range }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Prérequis</span>
              <span class="spec-value text-muted">{{ currentSpell.req }}</span>
            </div>
          </div>

          <div class="desc-section">
            <h4 class="desc-title">Formule & Effets Officiels</h4>
            <p class="desc-text">{{ currentSpell.desc }}</p>
          </div>
        </div>

        <div class="modal-footer">
          <span class="modal-state"
            >État :
            <span class="text-parchment font-bold">{{
              isLearned(currentSpell.id) ? 'Appris' : 'Non appris'
            }}</span></span
          >
          <button
            class="btn-learn"
            :class="{ learned: isLearned(currentSpell.id) }"
            @click="toggleLearnSpell"
          >
            {{ isLearned(currentSpell.id) ? 'Oublier la Capacité' : 'Apprendre la Capacité' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import ASUN_ABILITIES from '../../data/rules/spellsAndAbilities.json'
  import { useStorage } from '@vueuse/core'

  // Structure des sections
  const SECTIONS_DEF = [
    {
      id: 'elemental',
      num: 'I',
      title: 'Voies Élémentaires Primordiales',
      meta: '4 Voies Fondatrices • 4 Variations • 32 Incantations Référencées',
      colorClass: 'border-primary',
      textClass: 'text-primary',
      gridClass: 'grid-4',
      subCategories: [
        {
          name: 'Feu',
          label: 'Voie I-A'
        },
        {
          name: 'Eau',
          label: 'Voie I-B'
        },
        {
          name: 'Air',
          label: 'Voie I-C'
        },
        {
          name: 'Terre',
          label: 'Voie I-D'
        },
        {
          name: 'Foudre',
          label: 'Voie I-E'
        },
        {
          name: 'Druidyque',
          label: 'Voie I-F'
        },
        {
          name: 'Glace',
          label: 'Voie I-G'
        },
        {
          name: 'Poison',
          label: 'Voie I-H'
        }
      ]
    },
    {
      id: 'occult_celestial',
      num: 'II',
      title: 'Voies Occultes, Nécromancie & Lumière Céleste',
      meta: 'Disciplines Rares • Démoniaques & Divines',
      colorClass: 'border-secondary',
      textClass: 'text-secondary',
      gridClass: 'grid-3',
      subCategories: [
        {
          name: 'Voie Noire & Nécromancie',
          label: 'Voie Interdite • II-A'
        },
        {
          name: 'Voie Céleste',
          label: 'Voie Sacrée • II-B'
        },
        {
          name: 'Voie Stellaire',
          label: 'Voie Sacrée • II-C'
        }
      ]
    },
    {
      id: 'martial',
      num: 'III',
      title: "Disciplines Martiales & Techniques d'Armes",
      meta: "8 Écoles Physiques • Dépense d'Énergie Directe (PE)",
      colorClass: 'border-muted',
      textClass: 'text-muted',
      gridClass: 'grid-3',
      subCategories: [
        {
          name: 'Danse de combat',
          label: 'Discipline III-A',
          colorClass: 'text-muted',
          badge: 'Régie DEX',
          badgeClass: 'badge-stat'
        },
        {
          name: 'Archerie',
          label: 'Discipline III-B',
          colorClass: 'text-muted',
          badge: 'Régie DEX',
          badgeClass: 'badge-stat'
        },
        {
          name: 'Berserker',
          label: 'Discipline III-C',
          colorClass: 'text-muted',
          badge: 'Régie FOR',
          badgeClass: 'badge-stat'
        },
        {
          name: 'Assassinat',
          label: 'Discipline III-D',
          colorClass: 'text-muted',
          badge: 'Régie DEX',
          badgeClass: 'badge-stat'
        },
        {
          name: 'Arts Martiaux',
          label: 'Discipline III-E',
          colorClass: 'text-muted',
          badge: 'Régie DEX',
          badgeClass: 'badge-stat'
        },
        {
          name: 'Tactique',
          label: 'Discipline III-F',
          colorClass: 'text-muted',
          badge: 'Régie DEX',
          badgeClass: 'badge-stat'
        },
        {
          name: 'Finesse',
          label: 'Discipline III-G',
          colorClass: 'text-muted',
          badge: 'Régie FOR',
          badgeClass: 'badge-stat'
        },
        {
          name: 'Impact',
          label: 'Discipline III-H',
          colorClass: 'text-muted',
          badge: 'Régie FOR',
          badgeClass: 'badge-stat'
        }
      ]
    }
  ]

  // --- STATE ---
  const activeCategory = ref('all')
  const activeTier = ref('all')
  const searchQuery = ref('')

  const learnedSpells = useStorage('abilities-learned', [], localStorage, {
    mergeDefaults: true
  })

  const inspectorOpen = ref(false)
  const currentSpell = ref(null)
  const rollResult = ref(null)
  const rollVerdict = ref('')
  const rollColorClass = ref('')

  // --- COMPUTED ---

  const filteredSections = computed(() => {
    if (activeCategory.value === 'all') return SECTIONS_DEF
    return SECTIONS_DEF.filter((s) => s.id === activeCategory.value)
  })

  // --- METHODS ---
  function setCategory(cat) {
    activeCategory.value = cat
  }

  function setTier(tier) {
    activeTier.value = tier
  }

  function isLearned(id) {
    const learned = new Set(learnedSpells.value)
    return learned.has(id)
  }

  function getAbilitiesForSubCat(subCatName) {
    const q = searchQuery.value.toLowerCase()
    return ASUN_ABILITIES.filter((spell) => {
      if (spell.subCategory !== subCatName) return false

      // Tier filter
      if (activeTier.value !== 'all' && spell.tier.toString() !== activeTier.value) return false

      // Search filter
      if (q) {
        if (!spell.name.toLowerCase().includes(q) && !spell.desc.toLowerCase().includes(q)) {
          return false
        }
      }

      return true
    }).sort((a, b) => a.tier - b.tier)
  }

  function openInspector(spell) {
    currentSpell.value = spell
    rollResult.value = null
    rollVerdict.value = ''
    inspectorOpen.value = true
  }

  function closeInspector() {
    inspectorOpen.value = false
    currentSpell.value = null
  }

  function toggleLearnSpell() {
    if (!currentSpell.value) return
    const id = currentSpell.value.id

    // Create new Set to trigger reactivity properly
    const newSet = new Set(learnedSpells.value)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }

    learnedSpells.value = Array.from(newSet)
  }

  // Global escape key listener
  const handleKeydown = (e) => {
    if (e.key === 'Escape' && inspectorOpen.value) {
      closeInspector()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
</script>

<style scoped>
  /* ==========================================================================
   CSS CUSTOM PROPERTIES (Thème Dungeon of Asun)
   ========================================================================== */
  .abilities-layout {
    --bg-base: #0a0c10;
    --bg-surface: #12151c;

    --border-ash: #272c38;

    --text-main: #e1e2eb;
    --text-variant: #e0bfb9;
    --text-muted: #9ca3af;
    --text-parchment: #dfd5be;

    --primary: #ffb4a8;
    --primary-container: #c84433;
    --on-primary-container: #fff;

    --on-secondary: #251a00;

    --tertiary: #cfc6af;
    --crimson: #ff6b6b;
    --crimson-glow: #e03131;

    --font-headline: 'Playfair Display', 'Cinzel', serif;
    --font-cinzel: 'Cinzel', serif;
    --font-body: 'Inter', sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

    background-color: var(--bg-base);
    color: var(--text-main);
    font-family: var(--font-body);
    min-height: 100vh;
    user-select: none;
  }

  /* ==========================================================================
   UTILITY CLASSES
   ========================================================================== */
  .text-primary {
    color: var(--primary);
  }
  .text-secondary {
    color: var(--secondaryColor);
  }
  .text-tertiary {
    color: var(--tertiary);
  }
  .text-crimson {
    color: var(--crimson);
  }
  .text-muted {
    color: var(--text-muted);
  }
  .text-parchment {
    color: var(--text-parchment);
  }
  .font-bold {
    font-weight: 700;
  }
  .font-mono {
    font-family: var(--font-mono);
  }

  /* ==========================================================================
   HEADER / TOP BAR
   ========================================================================== */
  .top-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background-color: rgba(18, 21, 28, 0.95);
    border-bottom: 1px solid rgba(39, 44, 56, 0.8);
    z-index: 40;
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }

  .header-left,
  .header-right {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .brand-title {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .brand-accent {
    width: 6px;
    height: 16px;
    background-color: var(--primary);
    display: inline-block;
  }

  .brand-text {
    font-family: var(--font-cinzel);
    font-size: 15px;
    font-weight: 700;
    color: var(--text-parchment);
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .brand-subtitle {
    font-size: 10px;
    color: var(--secondaryColor);
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin-left: 14px;
  }

  .main-nav {
    display: none;
    border-left: 1px solid var(--border-ash);
    padding-left: 24px;
    gap: 4px;
  }
  @media (min-width: 1280px) {
    .main-nav {
      display: flex;
    }
  }

  .main-nav a {
    font-size: 11px;
    color: var(--text-variant);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 4px 12px;
    transition: color 0.2s;
  }

  .main-nav a:hover {
    color: var(--text-parchment);
  }
  .main-nav a.active {
    color: var(--text-parchment);
    background-color: var(--surface-container);
    border-bottom: 2px solid var(--secondaryColor);
  }

  .ledger-box {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: var(--surface-container-lowest);
    padding: 6px 16px;
    border: 1px solid var(--border-ash);
    text-align: right;
  }

  .ledger-item {
    display: flex;
    flex-direction: column;
  }

  .ledger-item.border-right {
    border-right: 1px solid var(--border-ash);
    padding-right: 12px;
  }

  .ledger-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }

  .ledger-value {
    font-size: 13px;
    font-weight: 700;
    color: var(--text-parchment);
  }

  .campaign-box {
    border: 1px solid var(--border-ash);
    padding: 4px 12px;
    background-color: var(--surface-container);
    text-align: right;
  }

  .campaign-label {
    font-size: 9px;
    text-transform: uppercase;
    color: var(--text-muted);
    letter-spacing: 0.1em;
  }
  .campaign-value {
    font-size: 11px;
    font-weight: 600;
    color: var(--text-parchment);
    text-transform: uppercase;
  }

  /* ==========================================================================
   SIDEBAR & LAYOUT
   ========================================================================== */
  .content-wrapper {
    padding-top: 64px;
    padding-left: 256px;
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 64px;
    bottom: 0;
    width: 256px;
    background-color: var(--bg-surface);
    border-right: 1px solid var(--border-ash);
    z-index: 30;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sidebar-content {
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;
  }

  .sidebar-title {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--secondaryColor);
    border-bottom: 1px solid var(--border-ash);
    padding-bottom: 4px;
    margin-bottom: 8px;
  }

  .sidebar-title.text-muted {
    color: var(--text-muted);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .muted-links div {
    padding: 4px 12px;
    font-size: 12px;
    color: var(--text-variant);
  }
  .muted-links div:first-child {
    color: var(--text-parchment);
  }

  .nav-btn {
    width: 100%;
    text-align: left;
    padding: 6px 12px;
    font-size: 13px;
    background: transparent;
    border: none;
    border-left: 2px solid transparent;
    color: var(--text-variant);
    cursor: pointer;
    transition: all 0.2s;
  }

  .nav-btn:hover {
    color: var(--text-parchment);
    background-color: var(--surface-container);
  }
  .nav-btn.active {
    color: var(--text-parchment);
    background-color: var(--surface-container);
    border-left-color: var(--primary);
    font-weight: 500;
  }

  .rule-box {
    background-color: var(--surface-container-lowest);
    border: 1px solid var(--border-ash);
    padding: 12px;
    font-size: 11px;
    line-height: 1.5;
    color: var(--text-variant);
  }

  .rule-title {
    display: block;
    color: var(--secondaryColor);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 4px;
  }

  .sidebar-footer {
    padding: 16px;
    border-top: 1px solid var(--border-ash);
    background-color: var(--surface-container-lowest);
    font-size: 10px;
    color: var(--text-muted);
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
  }

  /* ==========================================================================
   MAIN CONTENT
   ========================================================================== */
  .main-content {
    padding: 32px;
    max-width: 1700px;
    margin: 0 auto;
  }

  .page-header {
    border-bottom: 1px solid var(--border-ash);
    padding-bottom: 24px;
    margin-bottom: 24px;
  }

  .breadcrumb {
    display: flex;
    gap: 8px;
    font-size: 10px;
    color: var(--secondaryColor);
    font-family: var(--font-cinzel);
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .title-row {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media (min-width: 1024px) {
    .title-row {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
  }

  .headline {
    font-family: var(--font-headline);
    font-size: 30px;
    color: var(--text-parchment);
    font-weight: 700;
    margin: 0 0 8px 0;
  }
  @media (min-width: 768px) {
    .headline {
      font-size: 36px;
    }
  }

  .description {
    font-size: 14px;
    color: var(--text-variant);
    max-width: 800px;
    line-height: 1.6;
    margin: 0;
  }

  .cat-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .pill-btn {
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background-color: var(--surface-container);
    border: 1px solid var(--border-ash);
    color: var(--text-variant);
    cursor: pointer;
    transition: all 0.2s;
  }
  .pill-btn:hover {
    background-color: var(----surface-container-highestt);
    color: var(--text-parchment);
  }
  .pill-btn.active {
    border-color: var(--secondaryColor);
    color: var(--secondaryColor);
  }

  .filter-bar {
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid rgba(39, 44, 56, 0.6);
    background-color: var(--surface-container-low);
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media (min-width: 768px) {
    .filter-bar {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .search-input {
    width: 100%;
    max-width: 400px;
    background-color: var(--bg-base);
    border: 1px solid var(--border-ash);
    color: var(--text-parchment);
    padding: 8px 12px;
    font-size: 12px;
    outline: none;
  }
  .search-input:focus {
    border-color: var(--secondaryColor);
  }
  .search-input::placeholder {
    color: var(--text-muted);
  }

  .tier-filters {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 12px;
  }
  .filter-label {
    color: var(--text-muted);
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 8px;
  }
  .tier-btn {
    padding: 4px 10px;
    background-color: var(--bg-base);
    border: 1px solid var(--border-ash);
    color: var(--text-muted);
    font-family: var(--font-mono);
    cursor: pointer;
  }
  .tier-btn:hover {
    color: var(--text-parchment);
  }
  .tier-btn.active {
    background-color: var(--surface-container-highest);
    border-color: var(--secondaryColor);
    color: var(--secondaryColor);
    font-weight: 500;
  }

  /* ==========================================================================
   VOIES SECTIONS & GRIDS
   ========================================================================== */
  .voie-section {
    margin-bottom: 48px;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 2px solid;
    padding-bottom: 8px;
    margin-bottom: 24px;
  }
  .section-header.border-primary {
    border-color: var(--secondaryColor);
  }
  .section-header.border-secondary {
    border-color: var(--secondaryColor);
  }
  .section-header.border-muted {
    border-color: var(--border-ash);
  }

  .section-title-group {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }
  .section-label {
    font-size: 12px;
    font-family: var(--font-mono);
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .section-title {
    font-family: var(--font-headline);
    font-size: 24px;
    color: var(--text-parchment);
    font-weight: 700;
    margin: 0;
  }
  .section-meta {
    font-size: 12px;
    font-family: var(--font-mono);
    color: var(--text-muted);
    text-transform: uppercase;
  }

  .voie-grid {
    display: grid;
    gap: 20px;
  }
  .grid-4 {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) {
    .grid-4 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1280px) {
    .grid-4 {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .grid-3 {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) {
    .grid-3 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1280px) {
    .grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .grid-2 {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 1024px) {
    .grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .voie-column {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-ash);
  }

  .voie-column-header {
    padding: 12px;
    background-color: var(--surface-container-low);
    border-bottom: 1px solid var(--border-ash);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .voie-column-label {
    font-size: 10px;
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 2px;
  }
  .voie-column-title {
    font-family: var(--font-headline);
    font-size: 16px;
    color: var(--text-parchment);
    font-weight: 700;
    margin: 0;
  }
  .voie-column-desc {
    font-size: 12px;
    color: var(--text-variant);
    margin: 4px 0 0 0;
  }
  .voie-column-count {
    font-size: 11px;
    font-family: var(--font-mono);
    color: var(--text-muted);
  }

  .voie-column-badge {
    font-size: 12px;
    font-family: var(--font-mono);
    padding: 2px 8px;
    border: 1px solid;
    text-transform: uppercase;
  }
  .badge-crimson {
    border-color: var(--primary);
    color: var(--crimson);
  }
  .badge-secondary {
    border-color: var(--secondaryColor);
    color: var(--secondaryColor);
  }
  .badge-stat {
    border-color: transparent;
    color: var(--secondaryColor);
    padding: 0;
  }

  .voie-list {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }

  /* ==========================================================================
   CARDS
   ========================================================================== */
  .ability-card {
    padding: 12px;
    border: 1px solid var(--border-ash);
    background-color: var(--bg-base);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .ability-card:hover {
    background-color: var(--surface-container-low);
    border-color: var(--text-muted);
  }

  .ability-card.learned {
    background-color: var(--surface-container);
    border-color: var(--secondaryColor);
    box-shadow: inset 0 0 10px rgba(236, 193, 90, 0.1);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 6px;
  }

  .card-title-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .card-accent {
    width: 4px;
    height: 10px;
    background-color: var(--border-ash);
    display: inline-block;
  }
  .card-accent.active {
    background-color: var(--secondaryColor);
  }
  .card-title {
    font-family: var(--font-headline);
    font-size: 14px;
    font-weight: 700;
    color: var(--text-parchment);
    margin: 0;
    transition: color 0.2s;
  }
  .ability-card.learned .card-title {
    color: var(--secondaryColor);
  }
  .ability-card:hover .card-title {
    color: var(--secondaryColor);
  }

  .card-subcat {
    font-size: 9px;
    font-family: var(--font-mono);
    text-transform: uppercase;
    color: var(--text-muted);
    display: block;
    padding-left: 10px;
  }

  .card-tier {
    font-size: 9px;
    font-family: var(--font-mono);
    text-transform: uppercase;
    padding: 2px 6px;
    border: 1px solid var(--border-ash);
    color: var(--text-muted);
    min-width: fit-content;
    margin-right: 4px;
  }
  .card-tier.tier-apex {
    border-color: var(--primary);
    color: var(--crimson);
    font-weight: 700;
  }

  .card-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    font-family: var(--font-mono);
    color: var(--text-muted);
    margin-bottom: 8px;
    padding-left: 10px;
  }

  .card-desc {
    font-size: 11px;
    line-height: 1.5;
    color: var(--text-variant);
    margin: 0 0 8px 0;
    padding-left: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-footer {
    padding-top: 8px;
    border-top: 1px solid rgba(39, 44, 56, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    font-family: var(--font-mono);
    padding-left: 10px;
  }
  .card-action {
    color: var(--text-muted);
    text-transform: uppercase;
    font-size: 9px;
    transition: color 0.2s;
  }
  .ability-card:hover .card-action {
    color: var(--text-parchment);
  }

  /* ==========================================================================
   MODAL INSPECTOR
   ========================================================================== */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  .modal-panel {
    background-color: var(--bg-surface);
    border: 2px solid var(--border-ash);
    width: 100%;
    max-width: 672px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  .modal-header {
    padding: 20px;
    background-color: var(--surface-container-low);
    border-bottom: 1px solid var(--border-ash);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .modal-meta-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }
  .modal-category {
    font-size: 10px;
    font-family: var(--font-mono);
    text-transform: uppercase;
    color: var(--secondaryColor);
    font-weight: 700;
  }
  .modal-tier {
    font-size: 10px;
    font-family: var(--font-mono);
    text-transform: uppercase;
    color: var(--text-parchment);
    background-color: var(--surface-container);
    padding: 2px 8px;
  }
  .modal-title {
    font-family: var(--font-headline);
    font-size: 24px;
    color: var(--text-parchment);
    font-weight: 700;
    margin: 0;
  }
  .modal-close {
    background: var(--bg-base);
    border: 1px solid var(--border-ash);
    color: var(--text-muted);
    font-size: 12px;
    font-family: var(--font-mono);
    text-transform: uppercase;
    padding: 4px 10px;
    cursor: pointer;
  }
  .modal-close:hover {
    color: var(--text-parchment);
  }

  .modal-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .specs-matrix {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 12px;
    background-color: var(--surface-container-lowest);
    border: 1px solid var(--border-ash);
  }
  @media (min-width: 640px) {
    .specs-matrix {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .spec-item {
    display: flex;
    flex-direction: column;
  }
  .spec-label {
    font-size: 10px;
    text-transform: uppercase;
    color: var(--text-muted);
  }
  .spec-value {
    font-size: 14px;
    font-family: var(--font-mono);
    font-weight: 700;
  }

  .desc-section {
    margin-top: 8px;
  }
  .desc-title {
    font-size: 12px;
    text-transform: uppercase;
    font-family: var(--font-cinzel);
    font-weight: 700;
    color: var(--secondaryColor);
    border-bottom: 1px solid var(--border-ash);
    padding-bottom: 4px;
    margin: 0 0 8px 0;
  }
  .desc-text {
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-variant);
    margin: 0;
  }

  .conversion-note {
    padding: 12px;
    background-color: var(--bg-base);
    border-left: 2px solid var(--secondaryColor);
    font-size: 12px;
    color: var(--text-variant);
    line-height: 1.5;
  }

  .simulator-box {
    padding: 16px;
    background-color: var(--surface-container-lowest);
    border: 1px solid var(--border-ash);
  }
  .sim-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .sim-title {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    font-family: var(--font-cinzel);
    font-weight: 700;
    color: var(--text-parchment);
  }
  .sim-subtitle {
    font-size: 11px;
    color: var(--text-muted);
  }
  .btn-roll {
    background-color: var(--primary-container);
    color: var(--on-primary-container);
    border: none;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: var(--font-mono);
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .btn-roll:hover {
    opacity: 0.8;
  }

  .roll-result {
    padding: 12px;
    background-color: var(--bg-base);
    border: 1px solid var(--border-ash);
    text-align: center;
  }
  .roll-label {
    font-size: 11px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
  }
  .roll-number {
    font-size: 36px;
    font-family: var(--font-mono);
    font-weight: 700;
    margin: 4px 0;
  }
  .roll-verdict {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: var(--font-mono);
  }

  .modal-footer {
    padding: 16px 20px;
    background-color: var(--surface-container-low);
    border-top: 1px solid var(--border-ash);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-state {
    font-size: 12px;
    color: var(--text-muted);
  }
  .btn-learn {
    padding: 8px 20px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: var(--font-mono);
    background-color: var(--secondaryColor);
    color: var(--on-secondary);
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .btn-learn:hover {
    background-color: var(--secondaryColor);
  }
  .btn-learn.learned {
    background-color: var(--surface-container-high);
    color: var(--crimson);
    border: 1px solid rgba(255, 107, 107, 0.4);
  }
  .btn-learn.learned:hover {
    background-color: var(----surface-container-highestt);
  }
</style>
