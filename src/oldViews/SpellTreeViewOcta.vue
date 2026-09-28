<template>
  <div class="flex">
    <svg :width="width" :height="height" viewBox="0 0 1000 1000">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="gray" />
        </marker>
      </defs>

      <!-- Cercles de niveaux -->
      <circle
        v-for="n in MAX_CIRCLES"
        :key="n"
        :cx="centerX"
        :cy="centerY"
        :r="n * stepRadius"
        fill="none"
        stroke="#ccc"
        stroke-dasharray="4"
      />

      <!-- Lignes de dépendance -->
      <line
        v-for="edge in edges"
        :key="`${edge.from}->${edge.to}`"
        :x1="positions[edge.from].x"
        :y1="positions[edge.from].y"
        :x2="positions[edge.to].x"
        :y2="positions[edge.to].y"
        stroke="#999"
        stroke-width="2"
        marker-end="url(#arrow)"
      />

      <!-- Nœuds -->
      <g
        v-for="skill in validSkills"
        :key="skill.id"
        @click="selected = skill"
        @mouseenter="hovered = skill.id"
        @mouseleave="hovered = null"
        style="cursor: pointer"
      >
        <polygon
          :points="getOctagonPoints(positions[skill.id].x, positions[skill.id].y, nodeSize)"
          :fill="hovered === skill.id ? '#f1c40f' : getLevelColor(skill.level)"
          stroke="#333"
        />
        <text
          :x="positions[skill.id].x"
          :y="positions[skill.id].y + 5"
          text-anchor="middle"
          font-size="12"
          fill="#fff"
        >
          {{ skill.label }}
        </text>
      </g>
    </svg>

    <!-- Panneau d'infos -->
    <div class="ml-6 p-4 border rounded w-64" v-if="selected">
      <h2 class="text-lg font-bold mb-2">{{ selected.label }}</h2>
      <p><strong>Niveau :</strong> {{ selected.level }}</p>
      <p class="mt-2"><strong>Dépend de :</strong></p>
      <ul class="list-disc pl-5">
        <li v-for="dep in selected.dependsOn" :key="dep">{{ dep }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// === Configuration ===
const width = 1000
const height = 1000
const centerX = width / 2
const centerY = height / 2
const stepRadius = 100 // distance entre les cercles
const nodeSize = 45
const MAX_CIRCLES = 5

// === Données des compétences ===
const skills = [
  // NIVEAU 1
  { id: 'eau', label: 'Eau', dependsOn: ['terre','air'], level: 'Débutant', circle: 1 },
  { id: 'air', label: 'Air', dependsOn: ['feu','eau'], level: 'Débutant', circle: 1 },
  { id: 'feu', label: 'Feu', dependsOn: ['terre','air'], level: 'Débutant', circle: 1 },
  { id: 'terre', label: 'Terre', dependsOn: ['feu','eau'], level: 'Débutant', circle: 1 },
  // NIVEAU 2
  { id: 'eau2', label: 'Eau', dependsOn: ['eau'], level: 'Intermédiaire', circle: 2 },
  { id: 'glace', label: 'Glace', dependsOn: ['air', 'eau'], level: 'Intermédiaire', circle: 2 },
  { id: 'air2', label: 'Air', dependsOn: ['air'], level: 'Intermédiaire', circle: 2 },
  { id: 'foudre', label: 'Foudre', dependsOn: ['air', 'feu'], level: 'Intermédiaire', circle: 2 },
  { id: 'feu2', label: 'Feu', dependsOn: ['feu'], level: 'Intermédiaire', circle: 2 },
  { id: 'chaman', label: 'Chaman', dependsOn: ['terre', 'feu'], level: 'Intermédiaire', circle: 2 },
  { id: 'terre2', label: 'Terre', dependsOn: ['terre'], level: 'Intermédiaire', circle: 2 },
  { id: 'poison', label: 'Poison', dependsOn: ['terre', 'eau'], level: 'Intermédiaire', circle: 2 },
  // NIVEAU 3
  { id: 'eau3', label: 'Eau', dependsOn: ['eau2'], level: 'Avancé', circle: 3 },
  { id: 'miroir', label: 'Miroir', dependsOn: ['eau2', 'glace'], level: 'Avancé', circle: 3 },
  { id: 'glace2', label: 'Glace', dependsOn: ['glace'], level: 'Avancé', circle: 3 },
  { id: 'illusion', label: 'illusion', dependsOn: ['glace', 'air2'], level: 'Avancé', circle: 3 },
  { id: 'air3', label: 'Air', dependsOn: ['air2'], level: 'Avancé', circle: 3 },
  { id: 'tornadeElec', label: 'tornade Electrique', dependsOn: ['foudre', 'air2'], level: 'Avancé', circle: 3 },
  { id: 'foudre2', label: 'Foudre', dependsOn: ['foudre'], level: 'Avancé', circle: 3 },
  { id: 'eclairDeFeu', label: 'Danse du feu', dependsOn: ['foudre', 'feu2'], level: 'Avancé', circle: 3 },
  { id: 'feu3', label: 'Feu', dependsOn: ['feu2'], level: 'Avancé', circle: 3 },
  { id: 'danseDuFeu', label: 'Danse du feu', dependsOn: ['chaman', 'feu2'], level: 'Avancé', circle: 3 },
  { id: 'chaman2', label: 'Chaman', dependsOn: ['chaman'], level: 'Avancé', circle: 3 },
  { id: 'bouc', label: 'Bouclier terrestre', dependsOn: ['chaman', 'terre2'], level: 'Avancé', circle: 3 },
  { id: 'terre3', label: 'Terre', dependsOn: ['terre2'], level: 'Avancé', circle: 3 },
  { id: 'ronce', label: 'Ronce', dependsOn: ['terre2','poison'], level: 'Avancé', circle: 3 },
  { id: 'poison2', label: 'Poison', dependsOn: ['poison'], level: 'Avancé', circle: 3 },


  // NIVEAU 4
  { id: 'eau4', label: 'Eau', dependsOn: ['eau3'], level: 'Expert', circle: 4 },
  { id: 'air4', label: 'Air', dependsOn: ['air3'], level: 'Expert', circle: 4 },
  { id: 'feu4', label: 'Feu', dependsOn: ['feu3'], level: 'Expert', circle: 4 },
  { id: 'terre4', label: 'Terre', dependsOn: ['terre3'], level: 'Expert', circle: 4 },
  
]

// === Ne garder que les niveaux 1 à 4
const validSkills = skills.filter(s => s.circle >= 1 && s.circle <= MAX_CIRCLES)

// === Lignes de dépendance à plat
const edges = computed(() => {
  const result = []
  for (const skill of validSkills) {
    for (const dep of skill.dependsOn) {
      result.push({ from: dep, to: skill.id })
    }
  }
  return result
})

// === Grouper les compétences par cercle
const groupedByCircle = computed(() => {
  const groups = {}
  for (const skill of validSkills) {
    const c = skill.circle
    if (!groups[c]) groups[c] = []
    groups[c].push(skill)
  }
  return groups
})

// === Calculer les positions sur les cercles
const positions = {}
for (const [circle, nodes] of Object.entries(groupedByCircle.value)) {
  const radius = stepRadius * parseInt(circle)
  const angleStep = (2 * Math.PI) / nodes.length
  nodes.forEach((node, i) => {
    const angle = angleStep * i
    positions[node.id] = {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    }
  })
}

// === Couleur selon le niveau
function getLevelColor(level) {
  switch (level) {
    case 'Débutant': return '#2ecc71'        // vert
    case 'Intermédiaire': return '#3498db'   // bleu
    case 'Avancé': return '#9b59b6'          // violet
    case 'Expert': return '#e74c3c'          // rouge
    default: return '#bdc3c7'
  }
}

// === Forme octogonale
function getOctagonPoints(cx, cy, size) {
  const points = []
  for (let i = 0; i < 8; i++) {
    const angle = (Math.PI / 4) * i
    const x = cx + size * Math.cos(angle)
    const y = cy + size * Math.sin(angle)
    points.push(`${x},${y}`)
  }
  return points.join(' ')
}

// === Sélection et survol
const selected = ref(null)
const hovered = ref(null)
</script>

<style scoped>
text {
  pointer-events: none;
}
</style>
