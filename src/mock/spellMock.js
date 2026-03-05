export const spell = [
  // Archer
  {
    name: "Tir Rapide",
    type: "DPS Phys.",
    lvl: 1,
    desc: "2 tir à l'arc, dégât du deuxième tir divisé par 2, peut toucher deux cible distincte",
    dices: ["2 attaque"],
    price: "3",
    range: "",
    el: "Physique"
  },
  {
    name: "Pluie de flèche",
    type: "DPS Phys.",
    lvl: 2,
    desc: "Dégâts d'armes  + Touche toute les cible dans un cercle de 6m",
    dices: [""],
    price: "5",
    range: "moyenne",
    el: "Physique"
  },
  {
    name: "Tir Divin",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Dégâts d'armes + 1d12+6 Peut traverser tout sur son passage sur portée armes, inflige des dégâts a chaque cible traversée",
    dices: [""],
    price: "7",
    range: "CàC",
    el: "Physique"
  },
  // Surineur 
  {
    name: "Lame d'acide",
    type: "DPS Phys.",
    lvl: 1,
    desc: "Vous attaquez avec une lame d'acide, infligeant des dégâts à la cible au corps à corps.",
    dices: ["1d8+4 dégâts + 1d4 d'acide"],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Invisibilité",
    type: "Buff Mag.",
    lvl: 2,
    desc: "Vous devenez invisible pendant 1d6+1 tours.",
    dices: ["Invisibilité"],
    price: "5",
    range: "Soi",
    el: "Physique"
  },
  {
    name: "Vif Eclair",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Attaque d’opportunité, permet d’attaquer à n’importe quel moment (1 fois par tour de personnage, hors tour personnel), dégâts d'armes maximun + 5",
    dices: [""],
    price: "7",
    range: "CàC",
    el: "Physique"
  },
  // Epeiste
  {
    name: "Attaque Lourde à l’épée",
    type: "DPS Phys.",
    lvl: 1,
    desc: "Vous attaquez avec toute votre force, permet d'infligé de lourd dégâts",
    dices: ["Dégât de l’armes + 5 "],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Frappe Repoussante",
    type: "DPS Phys.",
    lvl: 2,
    desc: "Dégâts d'armes, repousse la cible (3m) passe le tour de la cible",
    dices: ["Repousse"],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Fine Lame",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Dégâts d'armes + 1d20+6 + chiffre de la dizaine de la force",
    dices: ["1d20+6 + FOR/10"],
    price: "7",
    range: "CàC",
    el: "Physique"
  },
  // Trancheur
  {
    name: "Attaque Lourde à la hache",
    type: "DPS Phys.",
    lvl: 1,
    desc: "Vous attaquez avec toute votre force, permet d'infligé de lourd dégâts",
    dices: ["Dégât de l’armes + 5 "],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Entaille profonde",
    type: "DPS Phys.",
    lvl: 2,
    desc: "Dégâts d'armes + 1d4 + 5 (50% de chance de réussite critique si moins de 50% PV)",
    dices: [""],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Rage du Berserker",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Dégâts d'armes + 1 par 5 PV manq + convertis Def et Res (hors bonus allié) en dégâts pendant 1 tour",
    dices: [""],
    price: "7",
    range: "CàC",
    el: "Physique"
  },
  // Portemasse
  {
    name: "Attaque Lourde à la masse",
    type: "DPS Phys.",
    lvl: 1,
    desc: "Vous attaquez avec toute votre force, permet d'infligé de lourd dégâts",
    dices: ["Dégât de l’armes + 5 "],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Brise-mâchoire ",
    type: "DPS Phys.",
    lvl: 2,
    desc: "Dégâts d'armes + 1d4+5 ou + 1d12+6 dégâts si la cible est en pleine forme (> 50%PV)",
    dices: [""],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Brise-moëlle",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Dégâts d'armes + 1d12+6 + DEF",
    dices: ["1d12+6 + DEF"],
    price: "7",
    range: "CàC",
    el: "Physique"
  },
  // Lancier
  {
    name: "Attaque Lourde à la lance",
    type: "DPS Phys.",
    lvl: 1,
    desc: "Vous attaquez avec toute votre force, permet d'infligé de lourd dégâts",
    dices: ["Dégât de l’armes + 5 "],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Estoc agile",
    type: "DPS Phys.",
    lvl: 2,
    desc: "Dégâts d’armes + 10% sur esquive pendant 1 tour",
    dices: ["Dégât de l’arme"],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Percée défensive",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Dégâts d’arme + 1d4 + 5, +10% réussite + 6 Def et Res pendant 1 tour",
    dices: [""],
    price: "7",
    range: "CàC",
    el: "Physique"
  },
  // Moine
  {
    name: "Poing d'air",
    type: "DPS Phys.",
    lvl: 1,
    desc: "1d8+4 dégâts + repousse la cible (3m) passe le tour de la cible",
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Poing de Feu",
    type: "DPS Mag.",
    lvl: 2,
    desc: "Dégâts d'armes + 1d12+6 +(1d6+2) de feu",
    dices: [""],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Poing de Foudre",
    type: "DPS Mag.",
    lvl: 3,
    desc: "1d20+4 dégâts + vous traversez la cible + électrocute (étourdit)",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "CàC",
    el: "Physique"
  },
  // Paladin
  {
    name: "Frappe de Justice",
    type: "DPS Phys.",
    lvl: 1,
    desc: "1d8+4 dégâts + 10% de réussite pour la prochaine parade",
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Bouclier Divin",
    type: "Buff",
    lvl: 2,
    desc: "Augmente la Déf et Res d’un allié et soi de 4 pendant 1d4 tours",
    dices: [],
    price: "5",
    range: "Courte",
    el: "Physique"
  },
  {
    name: "Jugement Final",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Dégâts d'armes + 1d20+4 dégâts +1d12+6 lumière",
    dices: ["1d20+4 dégâts +1d12 lumière"],
    price: "7",
    range: "Courte",
    el: "Physique"
  },
  // Garde-Berserk
  {
    name: "Bouclier de Rage",
    type: "DPS Phys.",
    lvl: 1,
    desc: "Étourdit la cible",
    dices: ["Étourdit la cible"],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Entaille précise",
    type: "DPS Phys.",
    lvl: 2,
    desc: "1d12+6 dégâts + 1 par 5 PV manq",
    dices: ["1d12+6 dégâts + 1 par 5 PV manq"],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Garde-Rage",
    type: "Buff",
    lvl: 3,
    desc: "Permet de bloquer systématiquement les attaques physiques pendants 1d4 tours et divise par deux les dégâts magiques",
    dices: [],
    price: "7",
    range: "CàC",
    el: "Physique"
  },



  // Mage
  {
    name: "Boule de Feu",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Lancer en ligne, impact circulaire de 3m de rayon",
    dices: [
      "Arme + 5"
    ],
    price: "3",
    range: "15m",
    el: "Feu"
  },
  {
    name: "Bolganone",
    type: "DPS Mag.",
    lvl: 2,
    desc: "50% de chance de critique si PE < 50%, impact circulaire de 6m de rayon",
    dices: [
      "Arme + 1d4 + 5"
    ],
    price: "5",
    range: "25m",
    el: "Feu"
  },
  {
    name: "Ragnarok",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Geyser sous la cible, impact circulaire de 12m de rayon",
    dices: [
      "Arme + 1 / 5 énergie manquante"
    ],
    price: "7",
    range: "40m",
    el: "Feu"
  },
  {
    name: "Météore",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Fait tomber un météore, impact de 24m de rayon",
    dices: [
      "Arme + 1d20 +15"
    ],
    price: "10",
    range: "64m",
    el: "Feu"
  },
  {
    name: "Tornade",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Lancer en ligne, zone de 3m de rayon",
    dices: [
      "Arme + 5"
    ],
    price: "3",
    range: "15m",
    el: "Vent"
  },
  {
    name: "Souffle Ascendant",
    type: "Contrôle",
    lvl: 2,
    desc: "Zone circulaire de 6m de rayon",
    dices: [],
    price: "5",
    range: "25m",
    el: "Vent"
  },
  {
    name: "Vents tranchants",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Cône de 9m",
    dices: [
      "Arme + 1d20 +6 + sagesse/10"
    ],
    price: "7",
    range: "40m",
    el: "Vent"
  },
  {
    name: "Excalibur",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Impact de 18m, ne touche pas les alliés",
    dices: [
      "Arme + 1d20 +15"
    ],
    price: "10",
    range: "64m",
    el: "Vent"
  },
  {
    name: "Vague",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Lancer en ligne",
    dices: [
      "1d8+4 dégâts"
    ],
    price: "3",
    range: "15m",
    el: "Water"
  },
  {
    name: "Soin Aquatique",
    type: "Soin",
    lvl: 2,
    desc: "Soin ciblé",
    dices: [
      "1d12+6 PV"
    ],
    price: "5",
    range: "18m",
    el: "Water"
  },
  {
    name: "Prison Aquatique",
    type: "Contrôle",
    lvl: 3,
    desc: "Immobilisation 1d6 tours",
    dices: [],
    price: "7",
    range: "30m",
    el: "Water"
  },
  {
    name: "Tsunami",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vague de 12m de large",
    dices: [
      "Arme + 1d20+4"
    ],
    price: "10",
    range: "64m",
    el: "Water"
  },
  {
    name: "Rocher destructeur",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Lancer en ligne, impact 3m",
    dices: [
      "Arme + 5"
    ],
    price: "3",
    range: "15m",
    el: "Plant"
  },
  {
    name: "Immobilisation Verte",
    type: "Contrôle",
    lvl: 2,
    desc: "Immobilise 1d6 tours",
    dices: [],
    price: "5",
    range: "20m",
    el: "Plant"
  },
  {
    name: "Récupération",
    type: "Soin",
    lvl: 3,
    desc: "Soin ciblé",
    dices: [
      "Arme + 1d20+4"
    ],
    price: "7",
    range: "20m",
    el: "Plant"
  },
  {
    name: "Séisme",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Autour de soi, 18m rayon",
    dices: [
      "Arme + 1d20+4"
    ],
    price: "10",
    range: "soi-même",
    el: "Plant"
  },
  {
    name: "lumière divine",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Tombe depuis le ciel, impact circulaire de 3m de rayon",
    dices: [
      "1d8+4 dégâts"
    ],
    price: "3",
    range: "15m",
    el: "Light"
  },
  {
    name: "Soin luminescent",
    type: "Soin",
    lvl: 1,
    desc: "Cible",
    dices: [
      "1d8+4 soins"
    ],
    price: "3",
    range: "6m",
    el: "Light"
  },
  {
    name: "Fortification",
    type: "Buff",
    lvl: 2,
    desc: "Buff de 4 DEF et RES pendant 2 tours",
    dices: [],
    price: "5",
    range: "20m",
    el: "Light"
  },
  {
    name: "Sagitae",
    type: "DPS Mag.",
    lvl: 2,
    desc: "Tombe depuis le ciel, impact circulaire de 6m de rayon",
    dices: [
      "1d12+6 dégâts"
    ],
    price: "5",
    range: "25m",
    el: "Light"
  },
  {
    name: "Remède",
    type: "Soin",
    lvl: 3,
    desc: "Cible",
    dices: [
      "1d20+4 soins"
    ],
    price: "7",
    range: "20m",
    el: "Light"
  },
  {
    name: "Abraxas",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Depuis le ciel, impact circulaire de 12m de rayon",
    dices: [
      "1d20+4 dégâts"
    ],
    price: "7",
    range: "40m",
    el: "Light"
  },
  {
    name: "Nosferatu",
    type: "Drain",
    lvl: 3,
    desc: "PV sur soi + explosion magique depuis le ciel",
    dices: [
      "1d8+4 soins",
      "1d20+4 dégâts"
    ],
    price: "7",
    range: "40m",
    el: "Light"
  },
  {
    name: "Miasme Noir",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Cible, impact circulaire de 3m de rayon",
    dices: [
      "1d8+4 dégâts"
    ],
    price: "3",
    range: "15m",
    el: "Dark"
  },
  {
    name: "Corruption",
    type: "Contrôle",
    lvl: 2,
    desc: "Manipulez l'esprit de la cible (Dé SAG à la fin du tour, max 6 tours)",
    dices: [],
    price: "5",
    range: "20m",
    el: "Dark"
  },
  {
    name: "Absorption de vitalité",
    type: "Drain",
    lvl: 2,
    desc: "Vole de la vie",
    dices: [
      "1d6 soins"
    ],
    price: "5",
    range: "20m",
    el: "Dark"
  },
  {
    name: "Piques Noires",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Cible, impact circulaire de 12m de rayon",
    dices: [
      "1d20+4 dégâts"
    ],
    price: "7",
    range: "40m",
    el: "Dark"
  },
  {
    name: "Animation des morts",
    type: "Invocation",
    lvl: 3,
    desc: "Contrôle un cadavre (Dé SAG par tour pour garder le contrôle, max 6 tours)",
    dices: [],
    price: "7",
    range: "30m",
    el: "Dark"
  },
  {
    name: "Malédiction",
    type: "DOT",
    lvl: 3,
    desc: "1d20+4 contre la cible, effet DOT pendant 1d4+6 tours",
    dices: [],
    price: "7",
    range: "30m",
    el: "Dark"
  },
  {
    name: "Résurrection des morts",
    type: "Invocation",
    lvl: 4,
    desc: "Invoque un mort-vivant ou squelette",
    dices: [],
    price: "10",
    range: "soi",
    el: "Dark"
  },
  {
    name: "Invocation Démoniaque",
    type: "Invocation",
    lvl: 4,
    desc: "Invoque un démon mineur",
    dices: [],
    price: "10",
    range: "soi",
    el: "Dark"
  },
  {
    name: "Hades",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Explosion de magie noire autour de la cible, impact circulaire de 18m",
    dices: [
      "1d20+15 dégâts"
    ],
    price: "10",
    range: "64m",
    el: "Dark"
  },
  {
    name: "Glace",
    type: "DPS + Entrave",
    lvl: 2,
    desc: "Gèle un membre de la cible, entrave ses mouvements",
    dices: ["1d12+6 dégâts"],
    price: "5",
    range: "25m",
    el: "Mixte"
  },
  {
    name: "Fimbulvetr",
    type: "Zone / Givre",
    lvl: 4,
    desc: "Blizzard autour de la cible, impact de 18m, gèle partiellement",
    dices: ["1d20+4 dégâts"],
    price: "10",
    range: "64m",
    el: "Mixte"
  },
  {
    name: "Pics empoisonnés",
    type: "DOT",
    lvl: 2,
    desc: "Empoisonne 1d4 tours (1d12 dégâts/tour)",
    dices: ["1d12+6 dégâts"],
    price: "5",
    range: "25m",
    el: "Mixte"
  },
  {
    name: "Corrosion",
    type: "DOT",
    lvl: 4,
    desc: "Empoisonne pendant 1d4+6 tours (1d12 dégâts/tour)",
    dices: ["1d20+4 dégâts"],
    price: "10",
    range: "64m",
    el: "Mixte"
  },
  {
    name: "Sangsue",
    type: "Drain",
    lvl: 3,
    desc: "Drain de PV et dégâts sur la cible",
    dices: ["1d8+4 PV sur soi", "1d20+4 dégâts"],
    price: "7",
    range: "40m",
    el: "Mixte"
  },
  {
    name: "Miroir",
    type: "Défense Magique",
    lvl: 3,
    desc: "Renvoie les dégâts magiques, peut dévier une attaque physique",
    dices: [],
    price: "7",
    range: "Devant soi",
    el: "Mixte"
  },
  {
    name: "Illusion",
    type: "Illusion",
    lvl: 3,
    desc: "Crée une illusion",
    dices: [],
    price: "7",
    range: "30m",
    el: "Mixte"
  },
  {
    name: "Ronce",
    type: "Immobilisation + DOT",
    lvl: 3,
    desc: "Immobilise 1d6 tours + dégâts par tour",
    dices: ["1d12+6 dégâts/tour"],
    price: "7",
    range: "30m",
    el: "Mixte"
  },
  {
    name: "Tornade Electrique",
    type: "Zone / DPS",
    lvl: 3,
    desc: "Tornade de foudre, impact de 12m de rayon",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "40m",
    el: "Mixte"
  },
  {
    name: "Thoron",
    type: "DPS Mag. traversant",
    lvl: 2,
    desc: "Ligne, traverse les cibles",
    dices: ["1d12+6 dégâts"],
    price: "5",
    range: "25m",
    el: "Mixte"
  },
  {
    name: "Mjöllnir",
    type: "DPS Mag. traversant",
    lvl: 4,
    desc: "Ligne, traverse les cibles",
    dices: ["1d20+15 dégâts"],
    price: "10",
    range: "64m",
    el: "Mixte"
  },
  {
    name: "Éclair de Feu",
    type: "Zone / Feu",
    lvl: 3,
    desc: "Fait tomber la foudre, brûle le sol (1d12 dégâts au sol)",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "40m",
    el: "Mixte"
  },
  {
    name: "Danse du feu",
    type: "Multi-hit / Feu",
    lvl: 3,
    desc: "4 feux follets explosent chacun leur tour (6m de rayon)",
    dices: ["(1d20+4)/2 par feu follet"],
    price: "7",
    range: "40m",
    el: "Mixte"
  },
  {
    name: "Bouclier terrestre",
    type: "Défense",
    lvl: 3,
    desc: "Mur de 6m/6m protège de tous dégâts (1 tour)",
    dices: [],
    price: "7",
    range: "30m",
    el: "Mixte"
  },
  {
    name: "Puissance Bestiale",
    type: "Buff",
    lvl: 2,
    desc: "+10 FOR et DEX pendant 4 tours",
    dices: [],
    price: "5",
    range: "soi-même",
    el: "Mixte"
  },
  {
    name: "Transformation Bestiale",
    type: "Métamorphose",
    lvl: 4,
    desc: "Transformation en animal pendant 4 tours (taille équivalente ou inférieure)",
    dices: [],
    price: "10",
    range: "soi-même",
    el: "Mixte"
  }

]