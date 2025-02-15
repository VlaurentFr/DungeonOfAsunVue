export const spell = [
  // Archer
  {
    name: "Tir Rapide",
    type: "DPS Phys.",
    lvl: 1,
    desc: "Vous attaquez rapidement, permet de toucher 2 fois la cible avec son arme",
    dices: ["2 attaque"],
    price: "3",
    range: "",
    el: "Physique"
  },
  {
    name: "Tir arcanique",
    type: "DPS Phys.",
    lvl: 2,
    desc: "Vous tirez une flèche d'arcanes, infligeant des dégâts importants à la cible.",
    dices: ["1d12+6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Physique"
  },
  {
    name: "Tir Divin",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Peut traverser tout sur son passage sur portée armes",
    dices: ["1d12+6"],
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
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Invisibilité",
    type: "Buff Mag.",
    lvl: 2,
    desc: "Vous devenez invisible pendant 1d20+4 tours.",
    dices: ["Invisibilité"],
    price: "5",
    range: "Soi",
    el: "Physique"
  },
  {
    name: "Vif Eclair",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Attaque d’opportunité, permet d’attaquer à n’importe quel moment 1d20+4 dégâts",
    dices: ["1d20+4 dégâts"],
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
    dices: ["Dégât de l’armes x1,5 "],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Frappe Repoussante",
    type: "DPS Phys.",
    lvl: 2,
    desc: "Vous attaquez avec toute votre force, permet d'infliger des dégât d'armes et de repousser la cible",
    dices: ["Repousse"],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Fine Lame",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Vous infliger des dégâts supplémentaire en fonction de votre force",
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
    dices: ["Dégât de l’armes x1,5 "],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Entaille profonde",
    type: "DPS Phys.",
    lvl: 2,
    desc: "1d12+6 dégâts passe l’armure",
    dices: ["1d12+6 dégâts passe l’armure"],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Rage du Berserker",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Vous infliger des dégâts supplémentaire en fonction de vos points de vie manquant",
    dices: ["1d12+6 + 1 par 5PV manq"],
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
    dices: ["Dégât de l’armes x1,5 "],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Brise-mâchoire ",
    type: "DPS Phys.",
    lvl: 2,
    desc: "Vous infliger des dégâts accrue si la cible est en pleine forme (> 50%PV)",
    dices: ["1d8+4 ou 1d6 dégâts"],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Brise-moëlle",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Vous infliger des dégâts supplémentaire en fonction de votre défense",
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
    dices: ["Dégât de l’armes x1,5 "],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Envolée",
    type: "DPS Phys.",
    lvl: 2,
    desc: "Dégât de l’arme + Propulse la cible dans les airs",
    dices: ["Dégât de l’arme"],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Percée",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Vous infliger des dégâts à la personne derrière la cible",
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
    desc: "1d8+4 dégâts + repousse la cible (?m) passe le tour de la cible",
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Poing de Feu",
    type: "DPS Mag.",
    lvl: 2,
    desc: "Vous attaquez avec un poing enflammée, infligeant des dégâts importants à la cible.",
    dices: ["1d12+6 dégâts +1d6 de feu"],
    price: "5",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Poing de Foudre",
    type: "DPS Mag.",
    lvl: 3,
    desc: "1d20+4 dégâts + traverse la cible + électrocute (étourdit)  la cible pendant 1 tours",
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
    desc: "Attaque à l’épée, 1d8+4 dégâts",
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Bouclier Divin",
    type: "Buff",
    lvl: 2,
    desc: "Augmente la Déf et Res d’un allié ou soi de 4 pendant 1d4 tours",
    dices: [],
    price: "5",
    range: "Courte",
    el: "Physique"
  },
  {
    name: "Jugement Final",
    type: "DPS Phys.",
    lvl: 3,
    desc: "Attaque à l’épée, 1d20+4 dégâts +1d12 lumière",
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
    desc: "Étourdit la cible pendant 1d4 tours",
    dices: ["Étourdit la cible pendant 1d4 tours"],
    price: "3",
    range: "CàC",
    el: "Physique"
  },
  {
    name: "Entaille précise",
    type: "DPS Phys.",
    lvl: 2,
    desc: "Attaque à la hache, 1d12+6 dégâts + 1 par 5 PV manq",
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



  // EAU
  {
    name: "Vague",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Vous lancez une vague d'eau, infligeant des dégâts aquatiques à la cible.",
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "courte",
    el: "Water"
  },
  {
    name: "Soin Aquatique",
    type: "DPS Mag.",
    lvl: 2,
    desc: "Vous soignez un allié proche, lui rendant des points de vie.",
    dices: ["1d12+6 PV"],
    price: "3",
    range: "courte",
    el: "Water"
  },
  {
    name: "Prison Aquatique",
    type: "Soutien Mag.",
    lvl: 3,
    desc: "Vous faites une prison d’eau pour immobiliser la cible pendant 1d12 tours.",
    dices: ["Immobilisation"],
    price: "3",
    range: "moyenne",
    el: "Water"
  },
  {
    name: "Tsunami",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vous lancez une puissante vague d'eau, infligeant d'importants dégâts aquatiques à la cible.",
    dices: ["1d20+4 dégâts"],
    price: "10",
    range: "Universelle",
    el: "Water"
  },
  // FEU
  {
    name: "Boule de Feu",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Vous lancez une sphère de feu qui explose à l'impact, infligeant des dégâts de feu à la cible.",
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "courte",
    el: "Feu"
  },
  {
    name: "Bolganone",
    type: "DPS Mag.",
    lvl: 2,
    desc: "Vous lancez une grosse boule de feu, infligeant des dégâts importants à la cible.",
    dices: ["1d12+6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Feu"
  },
  {
    name: "Ragnarok",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Vous faites surgir du feu depuis le sol, infligeant d'importants dégâts aux ennemis dans la zone.",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "longue",
    el: "Feu"
  },
  {
    name: "Météore",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vous lancez une énorme météorite de feu, infligeant d'importants dégâts à une zone ciblée.",
    dices: ["1d20+4 dégâts"],
    price: "10",
    range: "Universelle",
    el: "Feu"
  },
  // TERRE
  {
    name: "Rocher destructeur",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Vous lancez un bloc de terre arraché du sol, infligeant des dégâts à la cible.",
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "courte",
    el: "Plant"
  },
  {
    name: "Immobilisation Verte",
    type: "Soutien Mag.",
    lvl: 2,
    desc: "Vous faites surgir des plantes pour immobiliser la cible pendant 1d6 tour.",
    dices: ["Immobilisation"],
    price: "5",
    range: "courte",
    el: "Plant"
  },
  {
    name: "Récupération",
    type: "Soin Mag.",
    lvl: 3,
    desc: "Vous soignez un joueur, lui rendant des points de vie.",
    dices: ["1d20+4 PV"],
    price: "7",
    range: "longue",
    el: "Plant"
  },
  {
    name: "Séisme",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vous créez un tremblement de terre qui inflige des dégâts dans une petite zone.",
    dices: ["1d20+4 dégâts"],
    price: "10",
    range: "Universelle",
    el: "Plant"
  },
  // AIR
  {
    name: "Tornade",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Vous faites virevolter l'air, créant une petite tornade qui inflige des dégâts de vent à la cible.",
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "courte",
    el: "Vent"
  },
  {
    name: "Souffle Ascendant",
    type: "DPS Mag.",
    lvl: 2,
    desc: "",
    dices: [""],
    price: "5",
    range: "moyenne",
    el: "Vent"
  },
  {
    name: "Vents Tranchants",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Vous faites virevolter l'air pour trancher l'adversaire, infligeant des dégâts importants à la cible.",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "Longue",
    el: "Vent"
  },
  {
    name: "Excalibur",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vous créez une nuée de vent tranchant, infligeant d'importants dégâts à une zone ciblée.",
    dices: ["1d20+4 dégâts"],
    price: "10",
    range: "Universelle",
    el: "Vent"
  },
  // Poison
  {
    name: "Pic empoisonné",
    type: "DPS Mag.",
    lvl: 2,
    desc: "Vous lancez une boule d'acide, infligeant des dégâts de poison à la cible.",
    dices: ["1d12+6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Poison"
  },
  {
    name: "Corrosion",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vous corrompez la peau de la cible pour lui infliger des dégâts.",
    dices: ["1d20+4 dégâts"],
    price: "10",
    range: "Universelle",
    el: "Poison"
  },
  // Chaman
  {
    name: "Puissance Bestial",
    type: "Buff Mag.",
    lvl: 2,
    desc: "Vous augmentez la Force et Dextérité de l'utilisateur de 10 pendant 4 tours.",
    dices: ["+10 FOR"],
    price: "5",
    range: "courte",
    el: "Druid"
  },
  {
    name: "Transformation Bestial",
    type: "Buff Mag.",
    lvl: 4,
    desc: "Vous vous transformez en un animal pendant 4 tours.",
    dices: ["Transformation"],
    price: "10",
    range: "courte",
    el: "Druid"
  },
  // FOUDRE
  {
    name: "Thoron",
    type: "DPS Mag.",
    lvl: 2,
    desc: "Vous lancez un gros trait de foudre, infligeant des dégâts à la cible.",
    dices: ["1d12+6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Foudre"
  },
  {
    name: "Mjöllnir",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vous lancez un gros trait de foudre, infligeant des dégâts à la cible.",
    dices: ["1d20+4 dégâts"],
    price: "10",
    range: "Universelle",
    el: "Foudre"
  },
  // GLACE 
  {
    name: "Cristaux de glace",
    type: "DPS Mag.",
    lvl: 2,
    desc: "Vous lancez un cristaux de glace, infligeant des dégâts importants à la cible.",
    dices: ["1d12+6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Glace"
  },
  {
    name: "Fimbulvetr",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vous créez une mini tempête de glace, infligeant d'importants dégâts à une zone ciblée.",
    dices: ["1d20+4 dégâts"],
    price: "10",
    range: "Universelle",
    el: "Glace"
  },
  // AUTRES
  {
    name: "Sangsue",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Vous infligez des dégâts de sang à la cible et vous vous soignez de 1d6 PV",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "Longue",
    el: "Blood"
  },
  {
    name: "Illusion",
    type: "Soutien Mag.",
    lvl: 3,
    desc: "Vous créez une illusion pouvant également causer des dégâts à la cible.",
    dices: [""],
    price: "7",
    range: "courte",
    el: "Illu"
  },
  {
    name: "Miroir",
    type: "Soutien Mag.",
    lvl: 3,
    desc: "Vous créez un miroir qui renvoie les dégats magiques. Peut dévier une attaque physique en se brisant",
    dices: [""],
    price: "7",
    range: "courte",
    el: "Illu"
  },
  {
    name: "Tornade électrique",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Vous faites surgir du feu depuis le sol, infligeant d'importants dégâts aux ennemis dans la zone.",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "longue",
    el: "Foudre"
  },
  {
    name: "Eclair de feu",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Vous faites surgir du feu depuis le sol, infligeant d'importants dégâts aux ennemis dans la zone.",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "longue",
    el: "Foudre"
  },
  {
    name: "Danse de feu",
    type: "Invoc. Mag.",
    lvl: 3,
    desc: "Vous faites surgir du feu depuis le sol, infligeant d'importants dégâts aux ennemis dans la zone.",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "courte",
    el: "Feu"
  },
  {
    name: "Bouclier Terrestre",
    type: "Buff Mag.",
    lvl: 3,
    desc: "Vous formez une barrière protégeant de tout type de dégats",
    dices: [""],
    price: "7",
    range: "longue",
    el: "Plant"
  },
  {
    name: "Ronce",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Vous faites surgir du feu depuis le sol, infligeant d'importants dégâts aux ennemis dans la zone.",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "longue",
    el: "Plant"
  },

  // LUMIERE
  {
    name: "Soin Luminescent",
    type: "Soin Mag.",
    lvl: 1,
    desc: "Vous soignez un allié proche, lui rendant des points de vie.",
    dices: ["1d8+4 PV"],
    price: "3",
    range: "courte",
    el: "Light"
  },
  {
    name: "Lumière Divine",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Vous lancez un rayon de lumière, infligeant des dégâts à la cible.",
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "courte",
    el: "Light"
  },
  {
    name: "Fortification",
    type: "Buff Phys.",
    lvl: 2,
    desc: "Vous créez un bouclier sur vous-même ou un allié, vous octroyant une armure supplémentaire de 4 pendant 2 tours.",
    dices: ["+4 DEF et RES"],
    price: "5",
    range: "moyenne",
    el: "Light"
  },
  {
    name: "Sagitae",
    type: "DPS Mag.",
    lvl: 2,
    desc: "Vous lancez un rayon de lumière, infligeant des dégâts importants à la cible.",
    dices: ["1d12+6 dégâts"],
    price: "5",
    range: "moyenne",
    el: "Light"
  },
  {
    name: "Remède",
    type: "Soin Mag.",
    lvl: 3,
    desc: "Vous soignez un joueur, lui rendant des points de vie.",
    dices: ["1d20+4 PV"],
    price: "7",
    range: "Longue",
    el: "Light"
  },
  {
    name: "Nosferatu",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Vous infligez des dégâts de lumière à la cible et vous vous soignez de 1d6 PV ",
    dices: ["1d8+4 dégâts"],
    price: "7",
    range: "longue",
    el: "Light"
  },
  {
    name: "Abraxas",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Vous lancez un puissant rayon de lumière, infligeant d'importants dégâts à la cible.",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "longue",
    el: "Light"
  },
  // NOIR
  {
    name: "Miasme",
    type: "DPS Mag.",
    lvl: 1,
    desc: "Vous faites apparaître des miasmes autour de l'adversaire pour l'affaiblir, infligeant des dégâts.",
    dices: ["1d8+4 dégâts"],
    price: "3",
    range: "courte",
    el: "Dark"
  },
  {
    name: "Corruption",
    type: "DPS Mag.",
    lvl: 2,
    desc: "",
    dices: ["1d12+6 Tours"],
    price: "5",
    range: "moyenne",
    el: "Dark"
  },
  {
    name: "Absorption de vitalité",
    type: "DPS Mag.",
    lvl: 2,
    desc: "",
    dices: ["1d12+6 Tours"],
    price: "5",
    range: "moyenne",
    el: "Dark"
  },
  {
    name: "Animation des morts",
    type: "DPS Mag.",
    lvl: 3,
    desc: "",
    dices: [""],
    price: "7",
    range: "Courte",
    el: "Dark"
  },
  {
    name: "Malédiction",
    type: "DPS Mag.",
    lvl: 3,
    desc: "",
    dices: ["1d20+4 Tours"],
    price: "7",
    range: "Longue",
    el: "Dark"
  },
  {
    name: "Piques Noirs",
    type: "DPS Mag.",
    lvl: 3,
    desc: "Vous lancez des piques noires de miasme sur une cible pour la transpercer, infligeant des dégâts importants.",
    dices: ["1d20+4 dégâts"],
    price: "7",
    range: "Longue",
    el: "Dark"
  },
  {
    name: "Résurrection des morts",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vous invoquez un mort-vivant ou un squelette pour attaquer votre ennemi.",
    dices: [""],
    price: "10",
    range: "Courte",
    el: "Dark"
  },
  {
    name: "Invocation démoniaque",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vous invoquez un démon pour attaquer votre ennemi.",
    dices: [""],
    price: "10",
    range: "Courte",
    el: "Dark"
  },
  {
    name: "Hades",
    type: "DPS Mag.",
    lvl: 4,
    desc: "Vous lancez un rayon de miasme, infligeant d'importants dégâts à la cible.",
    dices: ["1d20+4 dégâts"],
    price: "10",
    range: "Universelle",
    el: "Dark"
  },
 
  


 

]