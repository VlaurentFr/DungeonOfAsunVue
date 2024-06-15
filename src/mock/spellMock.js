export const spell = [
  {
    name: "Boule de Feu",
    type: "DPS",
    lvl: 1,
    desc: "Vous lancez une sphère de feu qui explose à l'impact, infligeant des dégâts de feu à la cible.",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Feu"
  },
  {
    name: "Tornade",
    type: "DPS",
    lvl: 1,
    desc: "Vous faites virevolter l'air, créant une petite tornade qui inflige des dégâts de vent à la cible.",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Vent"
  },
  {
    name: "Main de Givre",
    type: "DPS",
    lvl: 1,
    desc: "Vous attaquez avec une main de givre, infligeant des dégâts de glace à la cible.",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Glace"
  },
  {
    name: "Boule d'acide",
    type: "DPS",
    lvl: 1,
    desc: "Vous lancez une boule d'acide, infligeant des dégâts de poison à la cible.",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Poison"
  },
  {
    name: "Immobilisation Verte",
    type: "Soutien",
    lvl: 1,
    desc: "Vous faites surgir des plantes pour immobiliser la cible pendant 1 tour.",
    dices: ["Immobilisation"],
    price: "3",
    range: "courte",
    el: "Plant"
  },
  {
    name: "Rocher destructeur",
    type: "DPS",
    lvl: 1,
    desc: "Vous lancez un bloc de terre arraché du sol, infligeant des dégâts à la cible.",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Plant"
  },
  {
    name: "Illusion",
    type: "Soutien",
    lvl: 1,
    desc: "Vous créez une illusion pouvant également causer des dégâts à la cible.",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Illu"
  },
  {
    name: "Foudre",
    type: "DPS",
    lvl: 1,
    desc: "Vous lancez un éclair de foudre, infligeant des dégâts à la cible.",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Foudre"
  },
  {
    name: "Force Bestial",
    type: "Buff",
    lvl: 1,
    desc: "Vous augmentez la force de l'utilisateur de 10 pendant 4 tours.",
    dices: ["+10 FRC"],
    price: "3",
    range: "courte",
    el: "Druid"
  },
  {
    name: "Soin",
    type: "Soin",
    lvl: 1,
    desc: "Vous soignez un allié proche, lui rendant des points de vie.",
    dices: ["2d6 PV"],
    price: "3",
    range: "courte",
    el: "Light"
  },
  {
    name: "Lumière Divine",
    type: "DPS",
    lvl: 1,
    desc: "Vous lancez un rayon de lumière, infligeant des dégâts à la cible.",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Light"
  },
  {
    name: "Sang",
    type: "DPS",
    lvl: 1,
    desc: "Vous lancez une attaque de sang solide, infligeant des dégâts à la cible.",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Blood"
  },
  {
    name: "Miasme",
    type: "DPS",
    lvl: 1,
    desc: "Vous faites apparaître des miasmes autour de l'adversaire pour l'affaiblir, infligeant des dégâts.",
    dices: ["2d6 dégâts"],
    price: "3",
    range: "courte",
    el: "Dark"
  },
  {
    name: "Lame d'acide",
    type: "DPS",
    lvl: 1,
    desc: "Vous attaquez avec une lame d'acide, infligeant des dégâts à la cible au corps à corps.",
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
    desc: "Vous lancez une grosse boule de feu, infligeant des dégâts importants à la cible.",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Feu"
  },
  {
    name: "Main de Feu",
    type: "DPS",
    lvl: 2,
    desc: "Vous attaquez avec une main enflammée, infligeant des dégâts importants à la cible.",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "courte",
    el: "Feu"
  },
  {
    name: "Tir arcanique",
    type: "DPS",
    lvl: 2,
    desc: "Vous tirez une flèche d'arcanes, infligeant des dégâts importants à la cible.",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Psy"
  },
  {
    name: "Couteau de glace",
    type: "DPS",
    lvl: 2,
    desc: "Vous lancez un couteau de glace, infligeant des dégâts importants à la cible.",
    dices: ["3d6 dégâts"],
    price: "3",
    range: "moyenne",
    el: "Glace"
  },
  {
    name: "Vents Tranchants",
    type: "DPS",
    lvl: 2,
    desc: "Vous faites virevolter l'air pour trancher l'adversaire, infligeant des dégâts importants à la cible.",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Vent"
  },
  {
    name: "Invisibilité",
    type: "Buff",
    lvl: 2,
    desc: "Vous devenez invisible pendant 4d6 tours.",
    dices: ["Invisibilité"],
    price: "5",
    range: "Soi",
    el: "Illu"
  },
  {
    name: "Remède",
    type: "Soin",
    lvl: 2,
    desc: "Vous soignez un joueur, lui rendant des points de vie.",
    dices: ["3d6 PV"],
    price: "5",
    range: "moyenne",
    el: "Light"
  },
  {
    name: "Nosferatu",
    type: "DPS",
    lvl: 2,
    desc: "Vous infligez des dégâts de lumière à la cible et vous vous soignez de 1d6 PV ",
    dices: ["2d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Light"
  },
  {
    name: "Récupération",
    type: "Soin",
    lvl: 2,
    desc: "Vous soignez un joueur, lui rendant des points de vie.",
    dices: ["3d6 PV"],
    price: "5",
    range: "longue",
    el: "Plant"
  },
  {
    name: "Mort",
    type: "DPS",
    lvl: 2,
    desc: "Vous invoquez un mort-vivant ou un squelette pour attaquer votre ennemi.",
    dices: ["3d6 Tours"],
    price: "5",
    range: "moyenne",
    el: "Dark"
  },
  {
    name: "Sangsue",
    type: "DPS",
    lvl: 2,
    desc: "Vous infligez des dégâts de sang à la cible et vous vous soignez de 1d6 PV",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Blood"
  },
  {
    name: "Thoron",
    type: "DPS",
    lvl: 2,
    desc: "Vous lancez un gros trait de foudre, infligeant des dégâts à la cible.",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Foudre"
  },

  {
    name: "Agilité Bestial",
    type: "Buff",
    lvl: 2,
    desc: "Vous augmentez l'agilité de l'utilisateur de 10 pendant 4 tours.",
    dices: ["+10 DEX"],
    price: "5",
    range: "courte",
    el: "Druid"
  },
  {
    name: "Sagitae",
    type: "DPS",
    lvl: 2,
    desc: "Vous lancez un rayon de lumière, infligeant des dégâts importants à la cible.",
    dices: ["3d6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Light"
  },
  {
    name: "Piques Noirs",
    type: "DPS",
    lvl: 2,
    desc: "Vous lancez des piques noires de miasme sur une cible pour la transpercer, infligeant des dégâts importants.",
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
    desc: "Vous faites surgir du feu depuis le sol, infligeant d'importants dégâts aux ennemis dans la zone.",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Feu"
  },
  {
    name: "Météore",
    type: "DPS",
    lvl: 3,
    desc: "Vous lancez une énorme météorite de feu, infligeant d'importants dégâts à une zone ciblée.",
    dices: ["4d6 dégâts"],
    price: "10",
    range: "universelle",
    el: "Feu"
  },
  {
    name: "Fimbulvetr",
    type: "DPS",
    lvl: 3,
    desc: "Vous créez une mini tempête de glace, infligeant d'importants dégâts à une zone ciblée.",
    dices: ["4d6 dégâts"],
    price: "10",
    range: "universelle",
    el: "Glace"
  },
  {
    name: "Foudroiement",
    type: "DPS",
    lvl: 3,
    desc: "Vous créez une vague de froid, infligeant d'importants dégâts à une zone ciblée.",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Glace"
  },
  {
    name: "Excalibur",
    type: "DPS",
    lvl: 3,
    desc: "Vous créez une nuée de vent tranchant, infligeant d'importants dégâts à une zone ciblée.",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Vent"
  },
  {
    name: "Vif Eclair",
    type: "DPS",
    lvl: 3,
    desc: "Vous attaquez aussi rapidement que la foudre, infligeant d'importants dégâts à une cible au corps à corps.",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "CàC",
    el: "Foudre"
  },
  {
    name: "Corrosion",
    type: "DPS",
    lvl: 3,
    desc: "Vous corrompez la peau de la cible pour lui infliger des dégâts.",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Poison"
  },
  {
    name: "Séisme",
    type: "DPS",
    lvl: 3,
    desc: "Vous créez un tremblement de terre qui inflige des dégâts dans une petite zone.",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Plant"
  },
  {
    name: "Hades",
    type: "DPS",
    lvl: 3,
    desc: "Vous lancez un rayon de miasme, infligeant d'importants dégâts à la cible.",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Dark"
  },
  {
    name: "Banshee",
    type: "DPS",
    lvl: 3,
    desc: "Vous lancez un rayon de miasme, infligeant d'importants dégâts à la cible.",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Dark"
  },
  {
    name: "Doppelganger",
    type: "Soutien",
    lvl: 3,
    desc: "Vous créez un double de vous-même.",
    dices: ["Double"],
    price: "7",
    range: "courte",
    el: "Illu"
  },
  {
    name: "Fulguration",
    type: "DPS",
    lvl: 3,
    desc: "Vous lancez un trait de foudre depuis les cieux, infligeant d'importants dégâts à la cible.",
    dices: ["4d6 dégâts"],
    price: "10",
    range: "universelle",
    el: "Foudre"
  },
  {
    name: "Transformation Bestial",
    type: "Buff",
    lvl: 3,
    desc: "Vous vous transformez en un animal pendant 4 tours.",
    dices: ["Transformation"],
    price: "7",
    range: "courte",
    el: "Druid"
  },
  {
    name: "Fortification",
    type: "Buff",
    lvl: 3,
    desc: "Vous créez un bouclier sur vous-même, vous octroyant une armure supplémentaire de 2 pendant 2 tours.",
    dices: ["+2 DEF et RES"],
    price: "7",
    range: "courte",
    el: "Light"
  },
  {
    name: "Abraxas",
    type: "DPS",
    lvl: 3,
    desc: "Vous lancez un puissant rayon de lumière, infligeant d'importants dégâts à la cible.",
    dices: ["4d6 dégâts"],
    price: "7",
    range: "longue",
    el: "Light"
  },
]