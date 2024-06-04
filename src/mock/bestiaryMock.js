export const MOB = [
  {
    name: "Banshie",
    desc: "La mélancolique banshie est une créature malveillante formée à partir de l'esprit d'une femme elfe. Ses cheveux ceignent son visage tel un enchevêtrement désordonné, et son corps est vêtu de haillons vaporeux qui volent et tournent autour d'elle.",
    img: "bestiary/Banshee.png",
    cards: [
      {
        name: "Banshie",
        type: "Mort-vivant de taille Moyenne",
        PA: "0", PV: "58", FOR: "10",  MAG: "65", CHA: "70", CHM: "85",
        act: [
          {
            name: "Touché corrupteur",
            effect: "NC",
            dmg: "12 ou 3d6+2",
            type: "Physique",
            range: "CAC",
            target: "1",
            desc: "<span>Touché corrupteur.</span> Attaque de corps à corps, une cible. Touché : 12 (3d6+2)"
          },
          {
            name: "Gémissement",
            effect: "N'affecte pas les artificiels et morts-vivants",
            dmg: "10 ou 3d6",
            type: "Psychique",
            range: "9m",
            target: "zone",
            desc: "<span>Gémissement.</span> La banshie pousse un gémissement lugubre, ne produits aucun effet sur les artificiels et les morts-vivants. Toutes les autres créatures proches subissent 10 (3d6) dégât psychiques.",
          },
      ]
      },
    ]
  },
  {
    name: "Basilic",
    desc: "Le basilic est une horreur reptilienne munie de plusieurs paires de pattes, dont le regard transforme les victimes en pierre poreuse. La créature se nourrira ensuite de cette pierre, qu'elle brisera grâce à sa puissante mâchoire, qui reprendra sa forme organique une fois dans son gosier.",
    cards: [
      {
        name: "Basilic",
        type: "Monstruosité de taille Moyenne",
        PA: "5", PV: "52", FOR: "60",  MAG: "10", CHA: "40", CHM: "35",
        act: []
      },
    ],
  },
  {
    name: "Béhir",
    desc: "",
    img: "",
    cards: [
      {
        name: "Béhir",
        type: "Monstruosité de Très Grande taille",
        PA: "5", PV: "52", FOR: "60", MAG: "10", CHA: "40", CHM: "35",
        act: []
      },
    ],
  },
  {
    name: "Gobelins",
    desc: "Les gobelins sont de petits humanoïdes malveillants qui vivent dans des donjons abandonnés ou dans des taudis lugubres. Individuellement faibles, ils se rassemblent en grand nombre pour tourmenter les autres créatures.",
    img: "bestiary/gobelins.webp",
    cards: [
      {
        name: "Gobelins",
        type: "Humanoïdes de Petite taille",
        PA: "1", PV: "7", FOR: "40",  MAG: "50", CHA: "70", CHM: "40",
        act: [
          {
            name: "Epée",
            effect: "NC",
            dmg: "5 ou 1d6+2",
            type: "Physique",
            range: "CAC",
            target: "1",
            desc: "<span>Epée.</span> Attaque de corps à corps, une cible. Touché : 5 (1d6+2)"
          },
          {
            name: "Arc court",
            effect: "NC",
            dmg: "5 ou 1d6+2",
            type: "Physique",
            range: "50m",
            target: "1",
            desc: "<span>Arc court.</span> Attaque à l'arc, une cible. Touché : 5 (1d6+2)"
          },
        ]
      },
      {
        name: "Chef Gobelins",
        type: "Humanoïdes de Petite taille",
        PA: "2", PV: "21", FOR: "50", MAG: "50", CHA: "70", CHM: "50",
        act: [
          {
            name: "Attaques multiples",
            effect: "Double attaque",
            dmg: "",
            type: "",
            range: "",
            target: "",
            desc: "<span>Attaques multiples.</span> Attaque deux fois dans ce tour"
          },
          {
            name: "Epée",
            effect: "NC",
            dmg: "5 ou 1d6+2",
            type: "Physique",
            range: "CAC",
            target: "1",
            desc: "<span>Epée.</span> Attaque de corps à corps, une cible. Touché : 5 (1d6+2)"
          },
          {
            name: "Javeline",
            effect: "NC",
            dmg: "3 ou 1d6",
            type: "Physique",
            range: "30m",
            target: "1",
            desc: "<span>Javeline.</span> Attaque à distance, une cible. Touché : 3 (1d6)"
          },
        ]
      },
    ]
  },
  {
    name: "Mimique",
    desc: "",
    img: "bestiary/mimic.png",
    cards: [
      {
        name: "Mimique",
        type: "Monstruosité (métamorphe) de Taille Moyenne",
        PA: "0", PV: "58", FOR: "85", MAG: "25", CHA: "60", CHM: "45",
        act: [
          {
            name: "Morsure",
            effect: "NC",
            dmg: "11 ou 2d8+3",
            type: "Acide",
            range: "CAC",
            target: "1",
            desc: "<span>Morsure.</span> Attaque de corps à corps, une cible. Touché : 11 (2d6+3)"
          },
      ]
      },
    ]
  },
  {
    name: "Cultiste",
    desc: "Les cultistes prêtent allégeance à un sombre pouvoir. La plupart dissimulent leur engagement pour éviter d'être ostracisés, emprisonnés ou exécutés en raison de leurs croyances. Contrairement aux acolytes mauvais, les cultistes font souvent montre de signes de folie dans leurs croyances et l'accomplissement de leurs pratiques.",
    img: "",
    cards: [
      {
        name: "Cultiste",
        type: "Humanoïde (humain) de Taille Moyenne",
        PA: "2", PV: "9", FOR: "52", MAG: "52", CHA: "60", CHM: "50",
        act: [
          {
            name: "Cimeterre",
            effect: "NC",
            dmg: "4 ou 1d6+1",
            type: "Tranchant",
            range: "CAC",
            target: "1",
            desc: "<span>Cimeterre.</span> Attaque de corps à corps, une cible. Touché : 4 (1d6+1)"
          },
          {
            name: "Dague",
            effect: "NC",
            dmg: "4 ou 1d4+2",
            type: "Perforant",
            range: "CAC",
            target: "1",
            desc: "<span>Dague.</span> Attaque de corps à corps, une cible. Touché : 4 (1d4+2)"
          },
        ]
      },
    ]
  },
  {
    name: "Efrit",
    desc: "",
    img: "",
    cards: [
      {
        name: "Efrit",
        type: "Elementaire de Grande Taille",
        PA: "2", PV: "9", FOR: "52", MAG: "52", CHA: "60", CHM: "50",
        act: [
          {
            name: "Attaques multiples",
            effect: "Double attaque",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> L'efrit effectue deux attaques de cimeterre ou de jet de flammes."
          },
          {
            name: "Cimeterre",
            effect: "NC",
            dmg: "4 ou 1d6+1",
            type: "Tranchant",
            range: "CAC",
            target: "1",
            desc: "<span>Cimeterre.</span> Attaque de corps à corps, une cible. Touché : 4 (1d6+1)"
          },
          {
            name: "Jet de flammes",
            effect: "NC",
            dmg: "17 ou (5d6)",
            type: "Feu",
            range: "36m",
            target: "1",
            desc: "<span>Jet de flammes.</span> Attaque de sort à distance, une cible. Touché : 17 (5d6)"
          },
        ]
      },
    ]
  },
  {
    name: "Elémentaire du Feu",
    desc: "Un semblant de silhouette humanoïde apparaît au centre de la capricieuse dévastation qu'est un élémentaire du feu. Où qu'il passe, il embrase tout ce qui l'entoure, ne laissant derrière lui que cendre et fumée.",
    img: "",
    cards: [
      {
        name: "Elémentaire du Feu",
        type: "Elementaire de Grande Taille",
        PA: "0", PV: "102", FOR: "62", MAG: "55", CHA: "77", CHM: "55",
        act: [
          {
            name: "Attaques multiples",
            effect: "Double attaque",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> L'élémentaire effectue deux attaques de toucher."
          },
          {
            name: "Toucher",
            effect: "Brûle la cible, si elle est inflamable (1d5 / tour)",
            dmg: "10 ou 2d6+3",
            type: "Feu",
            range: "CAC",
            target: "1",
            desc: "<span>Toucher.</span> Attaque de corps à corps, une cible. Touché : 10 (2d6 + 3)"
          },
        ]
      },
    ]
  },
  {
    name: "Elémentaire de l'Eau",
    desc: "Les élémentaires de l'eau ressemblent aux crêtes des vagues qui roulent sur le sol. Un élémentaire de l'eau engloutit toutes les créatures qui se dressent contre lui.",
    img: "",
    cards: [
      {
        name: "Elémentaire de l'Eau",
        type: "Elementaire de Grande Taille",
        PA: "0", PV: "114", FOR: "75", MAG: "57", CHA: "62", CHM: "55",
        act: [
          {
            name: "Attaques multiples",
            effect: "Double attaque",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> L'élémentaire effectue deux attaques de coup."
          },
          {
            name: "Coup",
            effect: "NC",
            dmg: "13 ou 2d8+4",
            type: "Contondant",
            range: "CAC",
            target: "1",
            desc: "<span>Coup.</span> Attaque de corps à corps, une cible. Touché : 13 (2d8 + 4)"
          },
          {
            name: "Vague",
            effect: "Aggripe les personnages de plus petites taille, jet de Force > 70 pour en sortir, subissez des dégâts a chaque début de tours (13 ou 2d8+4)",
            dmg: "13 ou 2d8+4",
            type: "Contondant",
            range: "CAC",
            target: "Multiple",
            desc: "<span>Vague (Recharge 4 - 6).</span> Attaque de corps à corps, multi-cible. Touché : 13 (2d8+4)"
          },
        ]
      },
    ]
  },
  {
    name: "Elémentaire de l'Air",
    desc: "Un élémentaire de l'air est une masse d'air tourbillonnante prenant la vague apparence d'un visage. Il peut se transformer en un tourbillon hurlant, créant alors un cyclone destructeur qui éjecte tout sur son passage.",
    img: "",
    cards: [
      {
        name: "Elémentaire de l'Air",
        type: "Elementaire de Grande Taille",
        PA: "0", PV: "90", FOR: "57", MAG: "55", CHA: "90", CHM: "55",
        act: [
          {
            name: "Attaques multiples",
            effect: "Double attaque",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> L'élémentaire effectue deux attaques de coup."
          },
          {
            name: "Coup",
            effect: "NC",
            dmg: "14 ou 2d8+5",
            type: "Contondant",
            range: "CAC",
            target: "1",
            desc: "<span>Coup.</span> Attaque de corps à corps, une cible. Touché : 14 (2d8 + 5)"
          },
          {
            name: "Tourbillon",
            effect: "Repousse les personnages de plus petites taille sur 6 mètres, Collision (3 ou 1d3, / 3m)",
            dmg: "1d3 / 3m",
            type: "Contondant",
            range: "CAC",
            target: "Multiple",
            desc: "<span>Tourbillon (Recharge 4 - 6).</span> Attaque de corps à corps, multi-cible. Collision : 3(1d3, / 3m)"
          },
        ]
      },
    ]
  },
  {
    name: "Elémentaire de la Terre",
    desc: "Un élémentaire de la terre avance lourdement tel une colline humaine, balançant ses bras tels des massues. Sa tête et son corps sont fait de terre et de pierre, occasionnellement sertis de gros morceaux de métal, de gemmes et de minéraux luisants.",
    img: "",
    cards: [
      {
        name: "Elémentaire de la Terre",
        type: "Elementaire de Grande Taille",
        PA: "0", PV: "126", FOR: "90", MAG: "57", CHA: "50", CHM: "55",
        act: [
          {
            name: "Attaques multiples",
            effect: "Double attaque",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> L'élémentaire effectue deux attaques de coup."
          },
          {
            name: "Coup",
            effect: "NC",
            dmg: "14 ou 2d8+5",
            type: "Contondant",
            range: "CAC",
            target: "1",
            desc: "<span>Coup.</span> Attaque de corps à corps, une cible. Touché : 14 (2d8 + 5)"
          },
        ]
      },
    ]
  },
  {
    name: "Salamandre",
    desc: "",
    img: "",
    cards: [
      {
        name: "Salamandres",
        type: "Elementaire de Grande Taille",
        PA: "0", PV: "90", FOR: "70", MAG: "55", CHA: "62", CHM: "55",
        act: [
          {
            name: "Attaques multiples",
            effect: "Double attaque",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> L'élémentaire effectue deux attaques, une avec sa lance l'autre avec sa queue."
          },
          {
            name: "Lance",
            effect: "Inflige 7 (2d6) dégâts de feu supplémentaire",
            dmg: "13 ou 2d6+6",
            type: "Perforants",
            range: "CAC",
            target: "1",
            desc: "<span>Lance.</span> Attaque de corps à corps, une cible. Touché : 13 (2d6 + 6), plus 7 (2d6) dégâts de feu"
          },
          {
            name: "Queue",
            effect: "Inflige 7 (2d6) dégâts de feu supplémentaire, peux aggriper la cible",
            dmg: "11 ou 2d6+4",
            type: "Contondant",
            range: "CAC",
            target: "1",
            desc: "<span>Queue.</span> Attaque de corps à corps, une cible. Touché : 14 (2d8 + 5)"
          },
        ]
      },
      {
        name: "Serpent de Feu",
        type: "Elementaire de Taille Moyenne",
        PA: "", PV: "", FOR: "", MAG: "", CHA: "", CHM: "",
        act: [
          {
            name: "",
            effect: "NC",
            dmg: "",
            type: "",
            range: "",
            target: "",
            desc: "<span>.</span> "
          },
        ]
      },
    ]
  },
  {
    name: "Méphites",
    desc: "Les méphites sont des créatures élémentaires petites et malveillantes, formées à partir des essences brutes des différents éléments. Ils se divisent en plusieurs types, chacun incarnant un élément particulier, tels que la boue, la fumée, la glace, le magma, la poussière et la vapeur. Ces créatures sont connues pour leur nature sournoise et espiègle, souvent causant des ravages mineurs par pur plaisir.",
    img: "bestiary/magma-mephit.jpeg",
    cards: [
      {
        name: "Méphite Boueux",
        type: "Elementaire de Petite Taille",
        PA: "0", PV: "27", FOR: "45", MAG: "50", CHA: "50", CHM: "45",
        act: [
          {
            name: "Poings",
            effect: "NC",
            dmg: "4 ou (1d6+1)",
            type: "Contondant",
            range: "CAC",
            target: "1",
            desc: "<span>Poings.</span> Attaque de corps à corps, une cible. Touché : 4 (1d6 + 1)"
          },
          {
            name: "Souffle de boue",
            effect: "Entrave",
            dmg: "",
            type: "",
            range: "CAC",
            target: "1",
            desc: "<span>Souffle de boue (Recharge 6).</span> Le mephite souffle une boue visqueuse qui entrave la cible"
          },
        ]
      },
      {
        name: "Méphite Fumant",
        type: "Elementaire de Petite Taille",
        PA: "0", PV: "22", FOR: "40", MAG: "50", CHA: "60", CHM: "50",
        act: [
          {
            name: "Griffes",
            effect: "NC",
            dmg: "4 ou (1d4+2)",
            type: "Tranchants",
            range: "CAC",
            target: "1",
            desc: "<span>Griffes.</span> Attaque de corps à corps, une cible. Touché : 4 (1d4 + 2)"
          },
          {
            name: "Souffle de scories",
            effect: "Aveugle pendant 1 tours",
            dmg: "",
            type: "",
            range: "Cône 4,5m",
            target: "Multiple",
            desc: "<span>Souffle de scories (Recharge 6).</span> Le mephite souffle un cône de cendres ardentes qui aveugle les cibles touchées"
          },
        ]
      },
      {
        name: "Méphite Gelé",
        type: "Elementaire de Petite Taille",
        PA: "0", PV: "21", FOR: "40", MAG: "50", CHA: "55", CHM: "50",
        act: [
          {
            name: "Griffes",
            effect: "2 (1d4) dégâts de froid",
            dmg: "3 ou (1d4+1)",
            type: "Tranchants",
            range: "CAC",
            target: "1",
            desc: "<span>Griffes.</span> Attaque de corps à corps, une cible. Touché : 3 (1d4 + 1), plus 2 (1d4) dégâts de froid"
          },
          {
            name: "Souffle de givre",
            effect: "NC",
            dmg: "5 ou (2d4)",
            type: "Froid",
            range: "Cône 4,5m",
            target: "Multiple",
            desc: "<span>Souffle de givre (Recharge 6).</span> Le mephite souffle un cône d'air froid qui inflige 5 (2d4) dégâts de froid"
          },
        ]
      },
      {
        name: "Méphite Magmatique",
        type: "Elementaire de Petite Taille",
        PA: "0", PV: "22", FOR: "45", MAG: "50", CHA: "50", CHM: "45",
        act: [
          {
            name: "Griffes",
            effect: "2 (1d4) dégâts de feu",
            dmg: "3 ou (1d4+1)",
            type: "Tranchants",
            range: "CAC",
            target: "1",
            desc: "<span>Griffes.</span> Attaque de corps à corps, une cible. Touché : 3 (1d4 + 1), plus 2 (1d4) dégâts de feu"
          },
          {
            name: "Souffle de feu",
            effect: "NC",
            dmg: "5 ou (2d4)",
            type: "Feu",
            range: "Cône 4,5m",
            target: "Multiple",
            desc: "<span>Souffle de feu (Recharge 6).</span> Le mephite souffle un cône de feu qui inflige 7 (2d6) dégâts de feu"
          },
        ]
      },
      {
        name: "Méphite Poussiéreux",
        type: "Elementaire de Petite Taille",
        PA: "0", PV: "17", FOR: "35", MAG: "50", CHA: "60", CHM: "50",
        act: [
          {
            name: "Griffes",
            effect: "NC",
            dmg: "4 ou (1d4+2)",
            type: "Tranchants",
            range: "CAC",
            target: "1",
            desc: "<span>Griffes.</span> Attaque de corps à corps, une cible. Touché : 4 (1d4 + 2)"
          },
          {
            name: "Souffle aveuglant",
            effect: "Aveugle pendant 1 tours",
            dmg: "",
            type: "",
            range: "Cône 4,5m",
            target: "Multiple",
            desc: "<span>Souffle aveuglant (Recharge 6).</span> Le mephites souffle un cône de poussières qui aveugle les cibles touchées"
          },
        ]
      },
      {
        name: "Méphite Vaporeux",
        type: "Elementaire de Petite Taille",
        PA: "0", PV: "21", FOR: "40", MAG: "45", CHA: "40", CHM: "45",
        act: [
          {
            name: "Griffes",
            effect: "2 (1d4) dégâts de feu",
            dmg: "2 ou (1d4)",
            type: "Tranchants",
            range: "CAC",
            target: "1",
            desc: "<span>Griffes.</span> Attaque de corps à corps, une cible. Touché : 2 (1d4), plus 2 (1d4) dégâts de feu"
          },
          {
            name: "Souffle de vapeur",
            effect: "NC",
            dmg: "",
            type: "",
            range: "Cône 4,5m",
            target: "Multiple",
            desc: "<span>Souffle de vapeur (Recharge 6).</span> Le mephite souffle un cône de vapeur brûlante qui inflige 4 (1d8) dégâts de feu"
          },
        ]
      },
    ]
  },
  {
    name: "Balor",
    desc: "",
    img: "",
    cards: [
      {
        name: "Balor",
        type: "Démon de Très Grande Taille",
        PA: "0", PV: "262", FOR: "98", MAG: "68", CHA: "65", CHM: "79",
        act: [
          {
            name: "Attaques multiples",
            effect: "Double attaque",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> Le balor effectue deux attaques, une avec son épée longue et avec son fouet"
          },
          {
            name: "Aura de feu",
            effect: "Début de chaque tours, inflige 10 (3d6) de dégâts de feu, lorsqu'il subit des dégâts au corps à corps inflige 10 (3d6) dégâts de feu",
            dmg: "10 ou 3d6",
            type: "Feu",
            range: "CAC",
            target: "",
            desc: ""
          },
          {
            name: "Armes magiques",
            effect: "Tout les dégâts du Balor sont magiques",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: ""
          },
          {
            name: "Epée longue",
            effect: "Inflige 13 (3d8) dégâts de foudre",
            dmg: "21 ou (3d8+8)",
            type: "Tranchant",
            range: "CAC",
            target: "1",
            desc: "<span>Epée longue.</span> Attaque de corps à corps, une cible. Touché : 21 (3d8 + 8), plus 13 (3d8) dégâts de foudre"
          },
          {
            name: "Fouet",
            effect: "Inflige 10 (3d6) dégâts de feu et attire la cible vers le Balor",
            dmg: "14 ou 2d8+5",
            type: "Contondant",
            range: "9m",
            target: "1",
            desc: "<span>Fouet.</span> Attaque de corps à corps, une cible. Touché : 15 (2d6 + 8), plus 10 (3d6) dégâts de feu et attire la cible vers le Balor"
          },
          {
            name: "Téléportation",
            effect: "Se téléporte par magie vers un espaces dans son champs de vision à une distance maximale de 36m",
            dmg: "",
            type: "",
            range: "36m",
            target: "Soi-même",
            desc: ""
          },
        ]
      },
    ]
  },
  {
    name: "Molosse infernal",
    desc: "Démon cracheurs de feu à la silhouette canine, les chiens de chasse infernaux sont communément au service de créatures maléfiques qui les utilisent comme compagnons ou chiens de garde.",
    img: "",
    cards: [
      {
        name: "Molosse infernal",
        type: "Démon de Taille Moyenne",
        PA: "0", PV: "45", FOR: "65", MAG: "55", CHA: "60", CHM: "50",
        act: [
          {
            name: "Morsure",
            effect: "Inflige 7 (2d6) dégâts de feu",
            dmg: "7 ou (1d8+3)",
            type: "Perforants",
            range: "CAC",
            target: "1",
            desc: "<span>Morsure.</span> Attaque de corps à corps, une cible. Touché : 7 (1d8 + 3), plus 7 (2d6) dégâts de feu"
          },
          {
            name: "Souffle de feu",
            effect: "NC",
            dmg: "21 ou (6d6)",
            type: "Feu",
            range: "Cône 4,5m",
            target: "Multiple",
            desc: "<span>Souffle de feu (Recharge 5-6).</span> Le molosse soufle du feu en cône de 4,5m, inflige 21 (6d6) dégâts de feu"
          },
        ]
      },
    ]
  },
  
]