<template>
  
  <div class="container-tree" @click="hideTooltip()" 
    @wheel.prevent="handleWheel"
    @mousedown="startPan"
    @mousemove="onPan"
    @mouseup="endPan"
    @mouseleave="endPan">
    <div class="buttons-tree">
    <button @click="tree = 'elemental'">Magie Elementaire</button>
    <button @click="tree = 'dark'">Magie Noire</button>
    <button @click="tree = 'light'">Magie de Lumière</button>
    <p>Points de magie: {{ pts }}</p>
  </div>
    <svg ref="svgRef" viewBox="0 0 1010 994" class="elemental" v-if="tree === 'elemental'">
      <g :transform="transform">
      <!-- Connexions -->
        <defs>
          <template v-for="line in lines" :key="line.gradientId">
            <linearGradient :id="line.gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="30%" :stop-color="line.toColor" />
              <stop offset="100%" :stop-color="line.fromColor" />
            </linearGradient>
          </template>
          <pattern id="imageStroke" patternUnits="userSpaceOnUse" width="3000" height="2000">
            <image :href="strokeImg" x="0" y="0" width="3000" height="2000" />
          </pattern>
        </defs>

        <template v-for="line in lines" :key="line.gradientId">
          <line
            :x1="line.x1"
            :y1="line.y1"
            :x2="line.x2"
            :y2="line.y2"
            :stroke="line.stroke"
            :stroke-width="line.strokeWidth"
          />
        </template>
  
      <!-- Exemple de compétence -->
      <g v-for="(skill, index) in skills" :key="index" :transform="`translate(${skill.x}, ${skill.y})`" @click.stop="selected= skill; showTooltip($event, skill)" :class="[{'selected': selected?.id === skill.id}, {'disabled': isDisabledNode(skill)}, {'lock': lockSkills.some((s) => s.id === skill.id)}]">
        <path
          class="shadow"
          :d="hexagonPoints(52)"
          :stroke="'white'"
          fill="transparent"
          :stroke-width="'8'"
        />

        <path
          :d="hexagonPoints(40)"
          :stroke="lockSkills.some((s) => s.id === skill.id) ? 'url(#imageStroke)' : 'white'"
          fill="#252535"
          :stroke-width="lockSkills.some((s) => s.id === skill.id) ? '4' : '2'"
        />
        
        <text
          v-if="!skill?.el"
          x="0"
          :y="skill?.label2 ? 0: 5"
          text-anchor="middle"
          :fill="skill.color ?? 'white'"
          font-size="8"
          font-family="Arial"
        >
          {{ skill.label }}
          <tspan x="0" y="10">{{skill?.label2}}</tspan>
        </text>

        <fireIcon v-if="skill.el === 'fire'" :color="isDisabledNode(skill) ? '#757575' : skill.color" style="overflow: visible;"></fireIcon>
        <treeIcon v-if="skill.el === 'plant'" :color="isDisabledNode(skill) ? '#757575' : skill.color" style="overflow: visible;"></treeIcon>
        <tornadoIcon v-if="skill.el === 'wind'" :color="isDisabledNode(skill) ? '#757575' : skill.color" style="overflow: visible;"></tornadoIcon>
        <waterIcon v-if="skill.el === 'water'" :color="isDisabledNode(skill) ? '#757575' : skill.color" style="overflow: visible;"></waterIcon>
        <iceIcon v-if="skill.el === 'ice'" :color="isDisabledNode(skill) ? '#757575' : skill.color" style="overflow: visible;"></iceIcon>
        <poisonIcon v-if="skill.el === 'poison'" :color="isDisabledNode(skill) ? '#757575' : skill.color" style="overflow: visible;"></poisonIcon>
        <pawIcon v-if="skill.el === 'chaman'" :color="isDisabledNode(skill) ? '#757575' : skill.color" style="overflow: visible;"></pawIcon>
        <boltIcon v-if="skill.el === 'foudre'" :color="isDisabledNode(skill) ? '#757575' : skill.color" style="overflow: visible;"></boltIcon>
      </g>
    </g>
    </svg>
    <!--DARK-->
    <svg ref="svgRef" viewBox="0 0 800 700" class="cosmic" v-if="tree === 'dark'">
      <g :transform="transform">
      <!-- Connexions -->
        <defs>
          <template v-for="line in darkLines" :key="line.gradientId">
            <linearGradient :id="line.gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="30%" :stop-color="line.toColor" />
              <stop offset="100%" :stop-color="line.fromColor" />
            </linearGradient>
          </template>
          <pattern id="imageStroke" patternUnits="userSpaceOnUse" width="3000" height="2000">
            <image :href="strokeImg" x="0" y="0" width="3000" height="2000" />
          </pattern>
        </defs>

        <template v-for="line in darkLines" :key="line.gradientId">
          <line
            :x1="line.x1"
            :y1="line.y1"
            :x2="line.x2"
            :y2="line.y2"
            :stroke="line.stroke"
            :stroke-width="line.strokeWidth"
          />
        </template>
  
      <!-- Exemple de compétence -->
      <g v-for="(skill, index) in darkSkills" :key="index" :transform="`translate(${skill.x}, ${skill.y})`" @click.stop="selected= skill; showTooltip($event, skill)" :class="[{'selected': selected?.id === skill.id}, {'disabled': isDisabledNode(skill)}, {'lock': lockSkills.some((s) => s.id === skill.id)}]">
        <path
          class="shadow"
          :d="darkHexagonPoints(52)"
          :stroke="'white'"
          fill="#DDD"
          :stroke-width="'8'"
        />

        <path
          :d="darkHexagonPoints(40)"
          :stroke="lockSkills.some((s) => s.id === skill.id) ? 'url(#imageStroke)' : 'white'"
          fill="#252535"
          :stroke-width="lockSkills.some((s) => s.id === skill.id) ? '4' : '2'"
        />
        
        <text
          v-if="!skill?.el"
          x="0"
          :y="skill?.label2 ? 0: 5"
          text-anchor="middle"
          :fill="skill.color ?? 'white'"
          font-size="8"
          font-family="Arial"
        >
          <!-- {{ skill.label }}
          <tspan x="0" y="10">{{skill?.label2}}</tspan> -->
        </text>

        <skullIcon :color="isDisabledNode(skill) ? '#757575' : 'black'" style="overflow: visible;"></skullIcon>
      </g>
    </g>
    </svg>
    <!--LIGHT-->
    <svg ref="svgRef" viewBox="0 0 800 700" class="holy" v-if="tree === 'light'">
      <g :transform="transform">
      <!-- Connexions -->
      <line
        v-for="(line, i) in lightLines"
        :key="'line-' + i"
        :x1="line.x1"
        :y1="line.y1"
        :x2="line.x2"
        :y2="line.y2"
        stroke="white"
        stroke-width="2"
      />
  
      <!-- Exemple de compétence -->
      <g v-for="(skill, index) in lightSkills" :key="index" :transform="`translate(${skill.x}, ${skill.y})`" @click.stop="selected= skill; showTooltip($event, skill)" :class="[{'selected': selected?.id === skill.id}, {'disabled': isDisabledNode(skill)}, {'lock': lockSkills.some((s) => s.id === skill.id)}]">
        <path
          class="shadow"
          :d="lightHexagonPoints(52)"
          :stroke="'white'"
          fill="#DDD"
          :stroke-width="'8'"
        />

        <path
          :d="lightHexagonPoints(40)"
          :stroke="'white'"
          fill="#252535"
          :stroke-width="lockSkills.some((s) => s.id === skill.id) ? '4' : '2'"
        />
        
        <!-- <text
          x="0"
          :y="skill?.label2 ? 0: 5"
          text-anchor="middle"
          :fill="skill.color ?? 'white'"
          font-size="8"
          font-family="Arial"
        >
          {{ skill.label }}
          <tspan x="0" y="10">{{skill?.label2}}</tspan>
        </text> -->
        <sunIcon :color="isDisabledNode(skill) ? '#757575' : 'orange'" style="overflow: visible;"></sunIcon>

      </g>
    </g>
    </svg>

    <div
      v-if="tooltip.visible"
      :style="{ position: 'fixed', left: tooltip.x + 'px', top: tooltip.y + 'px', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '5px 10px', borderRadius: '5px', zIndex: 1000 }"
    >
      <h4>{{ selected?.label }} {{selected?.label2}}</h4>

      <p v-if="!lockSkills.some((s) => s.id === selected?.id)">Nombres de points requis : {{ selected?.pc !== undefined ? `${selected.pc}pts` : "1pts"}}</p>
      <p v-else>Appris ({{ selected?.pc !== undefined ? `${selected.pc}pts` : "1pts"}})</p>

      <div class="button-tooltip">
        <button v-if="!lockSkills.some((s) => s.id === selected?.id)" :class="[{'disabled-button': isDisabledNode(selected)}]" :disabled="isDisabledNode(selected)" @click.stop="lock">Apprendre</button>
        <button v-else @click.stop="unlock">Désapprendre</button>

        <button
        v-if="!lockSkills.some((s) => s.id === selected?.id)"
        :class="[{'disabled-button': isDisabledNode(selected)}]"
        :disabled="isDisabledNode(selected)"
        @click.stop="learn">Apprendre avec un grimoire</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import fireIcon from '@/assets/icons/fire.vue'
import treeIcon from '@/assets/icons/tree.vue'
import tornadoIcon from '@/assets/icons/tornado.vue'
import waterIcon from '@/assets/icons/water.vue'
import iceIcon from '@/assets/icons/ice.vue'
import poisonIcon from '@/assets/icons/poison.vue'
import pawIcon from '@/assets/icons/paw.vue'
import boltIcon from '@/assets/icons/bolt.vue'
import skullIcon from '@/assets/icons/skull.vue'
import sunIcon from '@/assets/icons/sun.vue'

import strokeImg from '@/assets/goldTexture.jpg'
// Tooltip
const tooltip = ref({ visible: false, x: 0, y: 0 })

function showTooltip(event, skill) {
  tooltip.value = {
    visible: true,
    x: event.clientX + 10,
    y: event.clientY + 10,
  }
}

function hideTooltip() {
  tooltip.value.visible = false
  selected.value = null
}

// ZOOM

const zoom = ref(1)
const offsetX = ref(0)
const offsetY = ref(0)

const svgRef = ref(null)
let isPanning = false
let startX = 0
let startY = 0

const transform = computed(() => {
  return `translate(${offsetX.value}, ${offsetY.value}) scale(${zoom.value})`
})

function handleWheel(event) {
  const svg = svgRef.value
  const rect = svg.getBoundingClientRect()

  // Coordonnées de la souris dans le SVG
  const mouseX = event.clientX - rect.left
  const mouseY = event.clientY - rect.top

  const scaleAmount = event.deltaY > 0 ? 0.9 : 1.1
  const newZoom = Math.min(3, Math.max(0.3, zoom.value * scaleAmount))

  // Ajuster le décalage pour garder le zoom centré
  offsetX.value = mouseX - ((mouseX - offsetX.value) * newZoom) / zoom.value
  offsetY.value = mouseY - ((mouseY - offsetY.value) * newZoom) / zoom.value

  zoom.value = newZoom
}

function startPan(event) {
  isPanning = true
  startX = event.clientX
  startY = event.clientY
}

function onPan(event) {
  if (!isPanning) return
  offsetX.value += (event.clientX - startX)
  offsetY.value += (event.clientY - startY)
  startX = event.clientX
  startY = event.clientY
}

function endPan() {
  isPanning = false
}

// UNlock
const lockSkills = ref([])
const pts = ref(7)

const lock = () => {
  if(pts.value >= selected.value.pc || (selected.value.pc === undefined && pts.value > 0) ) {
    pts.value -= selected.value.pc ? selected.value.pc : 1
    lockSkills.value.push(selected.value)
  }
}

const learn = () => {
  lockSkills.value.push({...selected.value, grimoire: true})
}

const unlock = () => {
  const index = lockSkills.value.findIndex((s) => s.id == selected.value?.id)
  if(index >= 0) {
    if(!lockSkills.value[index]?.grimoire) {
      pts.value += selected.value?.pc ? selected.value.pc : 1
    }
    lockSkills.value.splice(index, 1)
  }
}

const isDisabledNode = (skill) => {
  // Initial Water
  if(skill.id === 1) {
    const oppositeLearned = lockSkills.value.some(
        s => s.id === 3
      )
      if (oppositeLearned && !lockSkills.value.some(
        s => s.id === 2 || s.id === 4
      )) {
        return true
      } else {
        return false
      }
  }
  // Initial Wind
  if(skill.id === 2) {
    const oppositeLearned = lockSkills.value.some(
        s => s.id === 4
      )
      if (oppositeLearned && !lockSkills.value.some(
        s => s.id === 1 || s.id === 3
      )) {
        return true
      } else {
        return false
      }
  }
  // Initial Feu
  if(skill.id === 3) {
    const oppositeLearned = lockSkills.value.some(
        s => s.id === 1
      )
      if (oppositeLearned && !lockSkills.value.some(
        s => s.id === 2 || s.id === 4
      )) {
        return true
      } else {
        return false
      }
  }
  // Initial Terre
  if(skill.id === 4) {
    const oppositeLearned = lockSkills.value.some(
        s => s.id === 2
      )
      if (oppositeLearned && !lockSkills.value.some(
        s => s.id === 3 || s.id === 1
      )) {
        return true
      } else {
        return false
      }
  }
  
  if (skill?.dependsOn?.length) {
    // Si au moins une dépendance n'est pas présente dans lockSkills, on disable
    return skill.dependsOn.some(dep => {
      return !lockSkills.value.some(
        s => s.id === dep
      );
    });
  } else {
    return false; // Pas de dépendance = pas désactivé
  }
}
// Close et select
const selected = ref(null)
const tree = ref('elemental')

const skills = [
  // Niveau 1
  { x: 435, y: 570, id: 1, label: "Vague", level: 1, color: "#4590C9", el:"water" },
  { x: 435, y: 570, id: 1, label: "Vague2", level: 1, color: "#4590C9", el:"water" },
  { x: 570, y: 570, id: 2,label: "Tornade", level: 1, color: "#add8e6", el:"wind" },
  { x: 570, y: 435, id: 3,label: "Boule de feu", level: 1, color: "#FF474C", el:"fire" },
  { x: 435, y: 435, id: 4,label: "Rocher", label2: "destructeur" , level: 1, color: "#90ee90", el:"plant" },
  // Niveau 2
  { x: 505, y: 635, id: 5, label: "Cristaux", label2: "de glace", level: 2, color:"#ABD1F3", dependsOn: [1,2],  el:"ice" },
  { x: 650, y: 635, id: 6, label: "Vents", label2:"Ascendant", level: 2, color: "#add8e6", dependsOn: [2], el:"wind" },
  { x: 360, y: 635, id: 7, label: "Soin", label2: "aquatique", level: 2, color: "#4590C9", dependsOn: [1], el:"water" },
  { x: 655, y: 500, id: 8, label: "Thoron", level: 2, color:"#FDFA72", dependsOn: [3,2], el:"foudre" },
  { x: 645, y: 360, id: 9, label: "Bolganone", level: 2, color: "#FF474C", dependsOn: [3], el:"fire" },
  { x: 505, y: 360, id: 10, label: "Puissance", label2:"Bestiale", level: 2, color:"#b5651d", dependsOn: [3,4], el:"chaman" },
  { x: 360, y: 360, id: 11, label: "Immobilisation", label2:"vert", level: 2, color: "#90ee90", dependsOn: [4], el:"plant" },
  { x: 350, y: 500, id: 12, label: "Pic", label2:"empoisonné", level: 2, color:"#BF77F6", dependsOn: [1,4], el:"poison" },
  // Niveau 3
  { x: 725, y: 710, id: 13, label: "Vents", label2:"Tranchants", level: 3, color: "#add8e6", dependsOn: [6], el:"wind" },
  { x: 570, y: 710, id: 14, label: "Illusion", level: 3, color:"#ABD1F3", dependsOn: [6,5], el:"ice" },
  { x: 435, y: 710, id: 15, label: "Miroir", level: 3, color:"#ABD1F3", dependsOn: [5,7], el:"ice" },
  { x: 290, y: 705, id: 16, label: "Prison", label2: "aquatique", level: 3, color: "#4590C9", dependsOn: [7], el:"water" },
  { x: 725, y: 435, id: 17, label: "Eclair", label2:"de feu", level: 3, color:"#FDFA72", dependsOn: [8,9], el:"foudre" },
  { x: 725, y: 570, id: 18, label: "Tornade", label2:"électrique", level: 3, color:"#FDFA72", dependsOn: [8,6], el:"foudre" },
  { x: 285, y: 570, id: 19, label: "Sangsue", level: 3, color:"#BF77F6", dependsOn: [12,7], el:"poison" },
  { x: 285, y: 435, id: 20, label: "Ronce", level: 3, color:"#BF77F6", dependsOn: [12,11], el:"poison" },
  { x: 285, y: 285, id: 21, label: "Récupération", level: 3, color: "#90ee90", dependsOn: [11], el:"plant" },
  { x: 435, y: 285, id: 22, label: "Bouclier", label2:"terrestre", level: 3, color:"#b5651d", dependsOn: [10,11], el:"chaman" },
  { x: 570, y: 285, id: 23, label: "Danse", label2:"du feu", level: 3, color:"#b5651d", dependsOn: [9,10], el:"chaman" },
  { x: 725, y: 290, id: 24, label: "Météore", level: 3, color: "#FF474C", dependsOn: [9], el:"fire" },
  // Niveau 4
  { x: 210, y: 500, id: 25, label: "Corrosion", level: 4, color:"#BF77F6", pc:2, dependsOn: [12], el:"poison" },
  { x: 215, y: 210, id: 26, label: "Séisme", level: 4, color: "#90ee90", pc:2, dependsOn: [21], el:"plant" },
  { x: 505, y: 215, id: 27, label: "Transformation", label2:"bestiale", level: 4, color:"#b5651d", pc:2, dependsOn: [10], el:"chaman" },
  { x: 790, y: 220, id: 28, label: "Ragnarok", level: 4, color: "#FF474C", pc:2, dependsOn: [24], el:"fire" },
  { x: 795, y: 500, id: 29, label: "Mjöllnir", level: 4, color:"#FDFA72", pc:2, dependsOn: [8], el:"foudre" },
  { x: 500, y: 780, id: 30, label: "Fimbulvetr", level: 4, color:"#ABD1F3", pc:2, dependsOn: [5], el:"ice" },
  { x: 795, y: 780, id: 31, label: "Excalibur", level: 4, color: "#add8e6", pc:2, dependsOn: [13], el:"wind" },
  { x: 220, y: 775, id: 32, label: "Tsunami", level: 4, color: "#4590C9", pc:2, dependsOn: [16], el:"water" },
  
  
]

function generateLines(skills) {
  const lines = []

  const opposites = {
  fire: "water",
  water: "fire",
  wind: "plant",
  plant: "wind"
};
  // Extraire les skills de niveau 1
  const level1Skills = skills.filter(skill => skill.level === 1)

  // Connecter chaque pair de skills de niveau 1
  for (let i = 0; i < level1Skills.length; i++) {
    for (let j = i + 1; j < level1Skills.length; j++) {
      const from = level1Skills[i]
      const to = level1Skills[j]

      // Vérifie que les éléments ne sont pas opposés
      if (opposites[from.el] === to.el) continue;

      lines.push({
        x1: from.x,
        y1: from.y,
        x2: to.x,
        y2: to.y,
        stroke: '#BEBEBE',
        strokeWidth: 4,
        useGradient: false,
        gradientId: `none-${from.id}-${to.id}`,
      })
    }
  }

  skills.forEach(skill => {
    if (skill.dependsOn && skill.dependsOn.length > 0) {
      skill.dependsOn.forEach(depId => {
        const parentSkill = skills.find(s => s.id === depId)
        if (!parentSkill) return

        const isParentLocked = lockSkills.value.some(s => s.id === parentSkill.id)
        const isChildLocked = lockSkills.value.some(s => s.id === skill.id)

        const bothLocked = isParentLocked && isChildLocked
        if (parentSkill) {
          lines.push({
            x1: parentSkill.x,
            y1: parentSkill.y,
            x2: skill.x,
            y2: skill.y,
            stroke: bothLocked ? 'url(#imageStroke)' : isParentLocked ? '#252535' : `#BEBEBE`,
            strokeWidth: bothLocked ? '6' : `4`,
            useGradient: !bothLocked,
            gradientId: `gradient-${parentSkill.id}-${skill.id}`,
          })
        }
      })
    }
  })

  return lines
}

const lines = computed(() => generateLines(skills))


const darkSkills = [
{ x: 349, y: 208, id: 33, label: "Miasme", level: 1, },
{ x: 425, y: 274, id: 34, label: "Absorption", label2:"de vitalité", level: 2, dependsOn: [33] },
{ x: 273, y: 274, id: 35, label: "Corruption", level: 2, dependsOn: [33] },
{ x: 491, y: 449, id: 36, label: "Résurrection", label2:"des morts", level: 4, pc:2, dependsOn: [39]},
{ x: 349, y: 449, id: 37, label: "Hadès", level: 4, pc: 1, dependsOn: [41] },
{ x: 200, y: 449, id: 38, label: "Invocation", label2:"démoniaque", level: 4, pc:2, dependsOn: [40] },
{ x: 491, y: 340, id: 39, label: "Animation", label2:"des morts", level: 3, dependsOn: [34]},
{ x: 200, y: 340, id: 40, label: "Malédiction", level: 3, dependsOn: [35] },
{ x: 349, y: 340, id: 41, label: "Piques", label2:"noires", level: 3, dependsOn: [35,34] },
]

const darkLines = computed(() => generateLines(darkSkills))

const lightSkills = [
{ x: 447, y: 195, id: 42, label: "Soin", label2:"luminescent", level: 1 },
{ x: 523, y: 261, id: 43, label: "Lumière", label2:"divine", level: 2, dependsOn: [42] },
{ x: 371, y: 261, id: 44, label: "Fortification", level: 2, dependsOn: [42] },
{ x: 371, y: 463, id: 45, label: "Nosferatu", level: 4, pc: 2, dependsOn: [44,47] },
{ x: 265, y: 463, id: 46, label: "Remède", level: 3, dependsOn: [44] },
{ x: 523, y: 362, id: 47, label: "Sagitae", level: 3, dependsOn: [43] },
{ x: 523, y: 463, id: 48, label: "Abraxas", level: 3, dependsOn: [47] },
]

const lightLines = computed(() => generateLines(lightSkills))

/**
 * Retourne les points d'un hexagone centré à (0,0) avec un rayon donné
 */
function darkHexagonPoints(radius, concavity = -0.2, jitter = 0.2) {
  const sides = 6
  const angleStep = (2 * Math.PI) / sides

  // Valeurs fixes pour perturber chaque sommet (entre -1 et 1)
  const jitterOffsets = [0.1, -0.7, 0.1, -0.1, 0.7, -0.3]

  const points = Array.from({ length: sides }, (_, i) => {
    const angle = angleStep * i - Math.PI / 2

    // Applique une variation fixe par sommet
    const jitterFactor = 1 + jitterOffsets[i] * jitter
    const r = radius * jitterFactor

    return {
      x: r * Math.cos(angle),
      y: r * Math.sin(angle),
    }
  })

  let d = ''
  for (let i = 0; i < sides; i++) {
    const p1 = points[i]
    const p2 = points[(i + 1) % sides]

    const mx = (p1.x + p2.x) / 2
    const my = (p1.y + p2.y) / 2

    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    const length = Math.hypot(dx, dy)
    const nx = -dy / length
    const ny = dx / length

    const cx = mx + nx * -radius * concavity
    const cy = my + ny * -radius * concavity

    if (i === 0) {
      d += `M ${p1.x},${p1.y} `
    }
    d += `Q ${cx},${cy} ${p2.x},${p2.y} `
  }

  d += 'Z'
  return d
}

function hexagonPoints(radius, concavity = -0.1, jitter = 0.2) {
  const sides = 6
  const angleStep = (2 * Math.PI) / sides

  // Valeurs fixes pour perturber chaque sommet (entre -1 et 1)
  const jitterOffsets = [0.1, -0.5, 0.1, -0.1, 0.5, -0.3]

  const points = Array.from({ length: sides }, (_, i) => {
    const angle = angleStep * i - Math.PI / 2

    // Applique une variation fixe par sommet
    const jitterFactor = 1 + jitterOffsets[i] * jitter
    const r = radius * jitterFactor

    return {
      x: r * Math.cos(angle),
      y: r * Math.sin(angle),
    }
  })

  let d = ''
  for (let i = 0; i < sides; i++) {
    const p1 = points[i]
    const p2 = points[(i + 1) % sides]

    const mx = (p1.x + p2.x) / 2
    const my = (p1.y + p2.y) / 2

    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    const length = Math.hypot(dx, dy)
    const nx = -dy / length
    const ny = dx / length

    const cx = mx + nx * -radius * concavity
    const cy = my + ny * -radius * concavity

    if (i === 0) {
      d += `M ${p1.x},${p1.y} `
    }
    d += `Q ${cx},${cy} ${p2.x},${p2.y} `
  }

  d += 'Z'
  return d
}

function lightHexagonPoints(radius, concavity = -0.4, jitter = 0) {
  const sides = 6
  const angleStep = (2 * Math.PI) / sides

  // Valeurs fixes pour perturber chaque sommet (entre -1 et 1)
  const jitterOffsets = [0, -0, 0, -0, 0, -0]

  const points = Array.from({ length: sides }, (_, i) => {
    const angle = angleStep * i - Math.PI / 2

    // Applique une variation fixe par sommet
    const jitterFactor = 1 + jitterOffsets[i] * jitter
    const r = radius * jitterFactor

    return {
      x: r * Math.cos(angle),
      y: r * Math.sin(angle),
    }
  })

  let d = ''
  for (let i = 0; i < sides; i++) {
    const p1 = points[i]
    const p2 = points[(i + 1) % sides]

    const mx = (p1.x + p2.x) / 2
    const my = (p1.y + p2.y) / 2

    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    const length = Math.hypot(dx, dy)
    const nx = -dy / length
    const ny = dx / length

    const cx = mx + nx * -radius * concavity
    const cy = my + ny * -radius * concavity

    if (i === 0) {
      d += `M ${p1.x},${p1.y} `
    }
    d += `Q ${cx},${cy} ${p2.x},${p2.y} `
  }

  d += 'Z'
  return d
}
</script>

<style scoped>
.buttons-tree {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 1;
  display: flex;
  gap: 16px;
}
.buttons-tree p{
  background-color: cornflowerblue;
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
}
button {
  border: none;
  background-color: #757575;
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  cursor: pointer;
}
button:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}
.button-tooltip {
  display: flex;
  gap: 8px;
}

.container-tree {
  position: relative;
  width: 100%;
}
svg {
  background-color: #DDD;
  position: relative;
  width: 100%;
  cursor: grab;
  user-select: none;
  background-size: cover;
  background-image: url('@/assets/Spell tree.png');
}
/* svg.cosmic {
  background-color: #DDD;
  position: relative;
  width: 100%;
  cursor: grab;
  user-select: none;
  background-size: cover;
  background-image: url('@/assets/cosmic.png');
}
svg.holy {
  background-color: #DDD;
  position: relative;
  width: 100%;
  cursor: grab;
  user-select: none;
  background-size: cover;
  background-image: url('@/assets/holy.png');
} */

.dark-tree g text {
  fill: white
}

path {
  z-index: 1;
}
g.disabled path:not(.shadow) {
  fill: white !important;
}
g.disabled text {
  fill: #757575 !important;
}

g g:hover .shadow {
  opacity: 1;
}

/* line {
  stroke: #BEBEBE;
} */
.shadow {
  opacity: 0;;
  transition: all 300ms ease-in-out;
}

path:not(.shadow) {
  fill: var(--primaryColor) !important;
}

.selected path {
  position: relative;
  filter: drop-shadow(0 0 20px hsl(16,100%,60%));
  animation: animate 2s linear infinite;
  transform: scale(0);
  transition: all 300ms linear;
}

@keyframes animate {
  0%   {transform: scale(1.2)}
  50%   {transform: scale(1)}
  100% {transform: scale(1.2)}
}
</style>
