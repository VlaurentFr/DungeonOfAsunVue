export const spell = [
  {
    name: "Feu",
    type: "DPS",
    lvl: 1,
    desc: "Lance une boule de feu ",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Feu"
  },
  {
    name: "Vent",
    type: "DPS",
    lvl: 1,
    desc: "Fait virevoleter l'air pour trancher l'adversaire",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Vent"
  },
  {
    name: "Main de Givre",
    type: "DPS",
    lvl: 1,
    desc: "Attaque avec une main de givre",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Glace"
  },
  {
    name: "Poison",
    type: "DPS",
    lvl: 1,
    desc: "Lance une boule de poison ",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Poison"
  },
  {
    name: "Plante",
    type: "Soutien",
    lvl: 1,
    desc: "Fait surgir des plante pour immobiliser la cible pendant 1 tours",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Plant"
  },
  {
    name: "Terre",
    type: "DPS",
    lvl: 1,
    desc: "Lance une bloc de terre",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Plant"
  },
  {
    name: "Illusion",
    type: "Soutien",
    lvl: 1,
    desc: "Permet de creer un illusion pouvant egalement causer des degats",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Illu"
  },
  {
    name: "Foudre",
    type: "DPS",
    lvl: 1,
    desc: "Permet de lancer un éclair de foudre",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Foudre"
  },
  {
    name: "Force Bestial",
    type: "Buff",
    lvl: 1,
    desc: "Augmente la force de l'utilisateur de 10 pendant 4 tours",
    dices: ["+10 FRC"],
    price: "3",
    range: "courte",
    el: "Druid"
  },
  {
    name: "Soin",
    type: "Soin",
    lvl: 1,
    desc: "Soigne un allier proche",
    dices: ["2d6 PV"],
    price: "3",
    range: "courte",
    el: "Light"
  },
  {
    name: "Lumière",
    type: "DPS",
    lvl: 1,
    desc: "Lance un rayon de lumière",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Light"
  },
  {
    name: "Sang",
    type: "DPS",
    lvl: 1,
    desc: "Lance une attaque de sang solide",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Blood"
  },
  {
    name: "Miasme",
    type: "DPS",
    lvl: 1,
    desc: "Fait apparaitre des miasmes autour de l'adversaire pour l'affaiblir",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Dark"
  },
  {
    name: "Lame d'acide",
    type: "DPS",
    lvl: 1,
    desc: "Attaque avec une lame d'acide",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "CàC",
    el: "Poison"
  },
  
  // NIVEAU 2
  
  {
    name: "Bolganone",
    type: "DPS",
    lvl: 2,
    desc: "Lance une grosse boule de feu",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Feu"
  },
  {
    name: "Main de Feu",
    type: "DPS",
    lvl: 2,
    desc: "Attaque avec une main enflammé",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "courte",
    el: "Feu"
  },
  {
    name: "Tir arcanique",
    type: "DPS",
    lvl: 2,
    desc: "Tir une flèche d'arcanes",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Psy"
  },
  {
    name: "Couteau de glace",
    type: "DPS",
    lvl: 2,
    desc: "Lance un couteau de glace",
    dices: ["3d6 dégâts"],
    price: "3",
    range: "moyenne",
    el: "Glace"
  },
  {
    name: "Vents Tranchants",
    type: "DPS",
    lvl: 2,
    desc: "Fait virevoleter l'air pour trancher l'adversaire",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Vent"
  },
  {
    name: "Invisibilité",
    type: "Buff",
    lvl: 2,
    desc: "Rend invisible pendant 4d6 tours",
    price: "5",
    range: "Soi",
    el: "Illu"
  },
  {
    name: "Remède",
    type: "Soin",
    lvl: 2,
    desc: "Soigne un joueur",
    dices: ["3d6 PV"],
    price: "5",
    range: "moyenne",
    el: "Light"
  },
  {
    name: "Nosferatu",
    type: "DPS",
    lvl: 2,
    desc: "Inflige des dégât de lumière et heal le lanceur",
    dices: ["2d6 dégâts sur la cible", "1d6 PV sur le lanceur"],
    price: "5",
    range: "moyenne",
    el: "Light"
  },
  {
    name: "Récupération",
    type: "Soin",
    lvl: 2,
    desc: "Soigne un joueur",
    dices: ["3d6 PV"],
    price: "5",
    range: "longue",
    el: "Plant"
  },
  {
    name: "Mort",
    type: "DPS",
    lvl: 2,
    desc: "Invoque un mort vivant ou squelette ",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Dark"
  },
  {
    name: "Sangsue",
    type: "DPS",
    lvl: 2,
    desc: "Inflige des dégâts de sang et heal le lanceur",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Blood"
  },
  {
    name: "Thoron",
    type: "DPS",
    lvl: 2,
    desc: "Lance un gros trait de foudre",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Foudre"
  },

  {
    name: "Agilité Bestial",
    type: "Buff",
    lvl: 2,
    desc: "Augmente l'agilité de l'utilisateur de 10 pendant 4 tours",
    dices: ["+10 CHA"],
    price: "5",
    range: "courte",
    el: "Druid"
  },
  {
    name: "Sagitae",
    type: "DPS",
    lvl: 2,
    desc: "Lance un rayon de lumière",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Light"
  },
  {
    name: "Piques Noirs",
    type: "DPS",
    lvl: 2,
    desc: "Lance des pique noirs de miasme sur une cible pour la transpercer",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Dark"
  },

  // NIVEAU 3

  {
    name: "Ragnarok",
    type: "DPS",
    lvl: 3,
    desc: "Fait surgir du feu depuis le sol",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Feu"
  },
  {
    name: "Météore",
    type: "DPS",
    lvl: 3,
    desc: "Lance une enorme boule de feu",
    dices: ["4d6 dégâts"],
    price: "10",
    range: "universelle",
    el: "Feu"
  },
  {
    name: "Fimbulvetr",
    type: "DPS",
    lvl: 3,
    desc: "Creer une mini tempete de glace",
    dices: ["4d6 dégâts"],
    price: "10",
    range: "universelle",
    el: "Glace"
  },
  {
    name: "Foudroiement",
    type: "DPS",
    lvl: 3,
    desc: "Creer un vague de froid",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Glace"
  },
  {
    name: "Excalibur",
    type: "DPS",
    lvl: 3,
    desc: "Creer une nuée de vent tranchant",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Vent"
  },
  {
    name: "Vif Eclair",
    type: "DPS",
    lvl: 3,
    desc: "Attaque aussi rapidement que la foudre",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "CàC",
    el: "Foudre"
  },
  {
    name: "Corrosion",
    type: "DPS",
    lvl: 3,
    desc: "Corrompt la peau de la cible pour lui infliger des degat",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Poison"
  },
  {
    name: "Aura",
    type: "DPS",
    lvl: 3,
    desc: "Soigne les personne proches",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "courte",
    el: "Light"
  },
  {
    name: "Séisme",
    type: "DPS",
    lvl: 3,
    desc: "Creer un tremblement de terre qui inflige des degats dans une petite zone",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Plant"
  },
  {
    name: "Hades",
    type: "DPS",
    lvl: 3,
    desc: "Lance un rayon de miasme",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Dark"
  },
  {
    name: "Banshee",
    type: "DPS",
    lvl: 3,
    desc: "Lance un rayon de miasme",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Dark"
  },
  {
    name: "Doppelganger",
    type: "Soutien",
    lvl: 3,
    desc: "Creer un double de vous",
    dices: [],
    price: "7",
    range: "courte",
    el: "Illu"
  },
  {
    name: "Fulguration",
    type: "DPS",
    lvl: 3,
    desc: "Lance un trait de foudre depuis les cieux",
    dices: ["4d6 dégâts"],
    price: "10",
    range: "universelle",
    el: "Foudre"
  },
  {
    name: "Transformation Bestial",
    type: "Buff",
    lvl: 3,
    desc: "Permet de se transformer en un animal pendant 4 tours",
    dices: [],
    price: "7",
    range: "courte",
    el: "Druid"
  },
  {
    name: "Fortification",
    type: "Buff",
    lvl: 3,
    desc: "Creer un bouclier sur soi de 2 d'armure pendant 2 tours",
    dices: ["+2 PA"],
    price: "7",
    range: "courte",
    el: "Light"
  },
  {
    name: "Abraxas",
    type: "DPS",
    lvl: 3,
    desc: "Lance un rayon de lumière",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Light"
  },
]