export const spell = [
  {
    name: "Feu",
    type: "DPS",
    lvl: 1,
    desc: "lance une boule de feu ",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Feu"
  },
  {
    name: "Vent",
    type: "DPS",
    lvl: 1,
    desc: "fait virevoleter l'air pour trancher l'adversaire",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Vent"
  },
  {
    name: "Glacier",
    type: "DPS",
    lvl: 1,
    desc: "lance une boule de glace",
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
    desc: "faire surgir des plante pour immobiliser la cible pendant 1 tours",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Plant"
  },
  {
    name: "Terre",
    type: "DPS",
    lvl: 1,
    desc: "lance une bloc de terre",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Plant"
  },
  {
    name: "Illusion",
    type: "Soutien",
    lvl: 1,
    desc: "permet de creer un illusion pouvant egalement causer des degats",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Psy"
  },
  {
    name: "Foudre",
    type: "DPS",
    lvl: 1,
    desc: "permet de creer un illusion pouvant egalement causer des degats",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Foudre"
  },
  {
    name: "Force Bestial",
    type: "Renforcement",
    lvl: 1,
    desc: "augmente la force de l'utilisateur de 10 pendant 2d6 tour",
    dices: ["+10 FRC"],
    price: "3",
    range: "courte",
    el: "Druid"
  },
  {
    name: "Transmutation Mineur",
    type: "DPS",
    lvl: 1,
    desc: "permet de creer un sorts mineur (level 1 effet/2)",
    dices: [],
    price: "3",
    range: "courte",
    el: "Alchi"
  },
  {
    name: "Soin",
    type: "Soin",
    lvl: 1,
    desc: "soigne un allier proche",
    dices: ["2d6 PV"],
    price: "3",
    range: "courte",
    el: "Light"
  },
  {
    name: "Lumière",
    type: "DPS",
    lvl: 1,
    desc: "lance un rayon de lumière",
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
    name: "Bolganone",
    type: "DPS",
    lvl: 2,
    desc: "lance une grosse boule de feu",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Feu"
  },
  {
    name: "Luna",
    type: "DPS",
    lvl: 2,
    desc: "lance une grosse boule de glace",
    dices: ["3d6 dégâts"],
    price: "3",
    range: "moyenne",
    el: "Glace"
  },
  {
    name: "Vents Tranchants",
    type: "DPS",
    lvl: 2,
    desc: "fait virevoleter l'air pour trancher l'adversaire",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Vent"
  },
  {
    name: "Invisibilité",
    type: "Renforcement",
    lvl: 2,
    desc: "rend invisible pendant 2d6 tours",
    price: "5",
    range: "courte",
    el: "Illu"
  },
  {
    name: "Remède",
    type: "Soin",
    lvl: 2,
    desc: "heal un joueur",
    dices: ["3d6 PV"],
    price: "5",
    range: "moyenne",
    el: "Light"
  },
  {
    name: "Nosferatu",
    type: "DPS",
    lvl: 2,
    desc: "inflige des degat de lumière et heal le lanceur",
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
    desc: "invoque un mort vivant ou squelette ",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Dark"
  },
  {
    name: "Sangsue",
    type: "DPS",
    lvl: 2,
    desc: "inflige des degat de sang et heal le lanceur",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Blood"
  },
  {
    name: "Thoron",
    type: "DPS",
    lvl: 2,
    desc: "lance un gros trait de foudre",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Foudre"
  },

  {
    name: "Agilité Bestial",
    type: "Renforcement",
    lvl: 2,
    desc: "augmente l'agilité de l'utilisateur de 10 pendant 2d6 tour",
    dices: ["+10 CHA"],
    price: "5",
    range: "courte",
    el: "Druid"
  },
  {
    name: "Transmutation",
    type: "DPS",
    lvl: 2,
    desc: "permet de creer un sort level 1",
    dices: [],
    price: "5",
    range: "moyenne",
    el: "Alchi"
  },
  {
    name: "Sagitae",
    type: "DPS",
    lvl: 2,
    desc: "lance un rayon de lumière",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Light"
  },
  {
    name: "Piques Noirs",
    type: "DPS",
    lvl: 2,
    desc: "lance des pique noirs de miasme sur une cible pour la transpercer",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Dark"
  },
  {
    name: "Ragnarok",
    type: "DPS",
    lvl: 3,
    desc: "fait surgir du feu depuis le sol",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Feu"
  },
  {
    name: "Météore",
    type: "DPS",
    lvl: 3,
    desc: "lance une enorme boule de feu",
    dices: ["4d6 dégâts"],
    price: "10",
    range: "universelle",
    el: "Feu"
  },
  {
    name: "Fimbulvetr",
    type: "DPS",
    lvl: 3,
    desc: "creer une mini tempete de glace",
    dices: ["4d6 dégâts"],
    price: "10",
    range: "universelle",
    el: "Glace"
  },
  {
    name: "Foudroiement",
    type: "DPS",
    lvl: 3,
    desc: "creer un vague de froid",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Glace"
  },
  {
    name: "Excalibur",
    type: "DPS",
    lvl: 3,
    desc: "creer une nue de vent tranchant",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Vent"
  },
  {
    name: "Corrosion",
    type: "DPS",
    lvl: 3,
    desc: "corrompt la peau de la cible pour lui infliger des degat",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Poison"
  },
  {
    name: "Aura",
    type: "DPS",
    lvl: 3,
    desc: "soigne les personne proches",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "courte",
    el: "Ligth"
  },
  {
    name: "Séisme",
    type: "DPS",
    lvl: 3,
    desc: "creer un tremblement de terre qui inflige des degats dans une petite zone",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Plant"
  },
  {
    name: "Hades",
    type: "DPS",
    lvl: 3,
    desc: "lance un rayon de miasme",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Dark"
  },
  {
    name: "Banshee",
    type: "DPS",
    lvl: 3,
    desc: "lance un rayon de miasme",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Dark"
  },
  {
    name: "Doppelganger",
    type: "Soutien",
    lvl: 3,
    desc: "creer un double de vous",
    dices: [],
    price: "7",
    range: "courte",
    el: "Illu"
  },
  {
    name: "Fulguration",
    type: "DPS",
    lvl: 3,
    desc: "lance un trait de foudre depuis les cieux",
    dices: ["4d6 dégâts"],
    price: "10",
    range: "universelle",
    el: "Foudre"
  },
  {
    name: "Transformation Bestial",
    type: "Renforcement",
    lvl: 3,
    desc: "permet de se transformer en un animal",
    dices: [],
    price: "7",
    range: "courte",
    el: "Druid"
  },
  {
    name: "Transmutation Majeur",
    type: "DPS",
    lvl: 3,
    desc: "permet de creer un puissant sort level 2",
    dices: [],
    price: "7",
    range: "longue",
    el: "Alchi"
  },
  {
    name: "Fortification",
    type: "Renforcement",
    lvl: 3,
    desc: "creer un bouclier sur soi de 10 pv (non cmulable)",
    dices: [],
    price: "7",
    range: "courte",
    el: "Light"
  },
  {
    name: "Abraxas",
    type: "DPS",
    lvl: 3,
    desc: "lance un rayon de lumière",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Light"
  },
]