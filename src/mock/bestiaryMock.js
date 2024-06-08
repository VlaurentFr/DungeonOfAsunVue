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
        PA: "2", PV: "200", FOR: "90", MAG: "75", CHA: "70", CHM: "85",
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
            dmg: "13 ou 2d6+6",
            type: "Tranchant",
            range: "CAC",
            target: "1",
            desc: "<span>Cimeterre.</span> Attaque de corps à corps, une cible. Touché : 13 (2d6+6)"
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
            effect: "Esquive, subissez la moitier des dégâts",
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
            effect: "Esquive, subissez la moitier des dégâts",
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
            effect: "Esquive, subissez la moitier des dégâts",
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
    img: "bestiary/hellhound.jpeg",
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
            effect: "Esquive, subissez la moitier des dégâts",
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
  {
    name: "Dragon Rouge",
    desc: "Une odeur de soufre et de roche volcanique enveloppe un dragon rouge, dont la silhouette se reconnaît à ses cornes et sa crête dorsale aiguisées. De la fumée s'échappe en permanence de son museau incurvé, et des flammes dansent dans ses yeux lorsqu'il se met en colère.",
    img: "bestiary/red_dragon.png",
    cards: [
      {
        name: "Dragon Rouge Vénérable",
        type: "Dragon de Très Grande Taille",
        PA: "0", PV: "546", FOR: "100", MAG: "60", CHA: "73", CHM: "90",
        act: [
          {
            name: "Attaques multiples",
            effect: "Attaque morsure puis deux attaque de griffes",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> Le dragon effectue trois attaques, une sa mâchoires et deux avec ses griffes"
          },
          {
            name: "Morsure",
            effect: "Inflige 14 (4d6) dégâts de feu",
            dmg: "21 ou (2d10+10)",
            type: "Perforants",
            range: "CAC",
            target: "1",
            desc: "<span>Morsure.</span> Attaque de corps à corps, une cible. Touché : 21 (2d10 + 10), plus 14 (4d6) dégâts de feu"
          },
          {
            name: "Griffe",
            effect: "NC",
            dmg: "17 ou (2d6+10)",
            type: "Tranchants",
            range: "CAC",
            target: "1",
            desc: "<span>Griffe.</span> Attaque de corps à corps, une cible. Touché : 17 (2d6 + 10)"
          },
          {
            name: "Queue",
            effect: "NC",
            dmg: "19 ou (2d8+10)",
            type: "Contondants",
            range: "CAC",
            target: "1",
            desc: "<span>Queue.</span> Attaque de corps à corps, une cible. Touché : 19 (2d8 + 10)"
          },
          {
            name: "Souffle de feu",
            effect: "Esquive, subissez la moitier des dégâts",
            dmg: "91 ou (26d6)",
            type: "Feu",
            range: "Cône 27m",
            target: "Multiple",
            desc: "<span>Souffle de feu (Recharge 5-6).</span> Le dragon soufle du feu en cône de 27m, inflige 91 (26d6) dégâts de feu"
          },
        ]
      },
      {
        name: "Dragon Rouge Adulte",
        type: "Dragon de Grande Taille",
        PA: "0", PV: "256", FOR: "90", MAG: "63", CHA: "50", CHM: "80",
        act: [
          {
            name: "Attaques multiples",
            effect: "Attaque morsure puis deux attaque de griffes",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> Le dragon effectue trois attaques, une sa mâchoires et deux avec ses griffes"
          },
          {
            name: "Morsure",
            effect: "Inflige 7 (2d6) dégâts de feu",
            dmg: "19 ou (2d10+8)",
            type: "Perforants",
            range: "CAC",
            target: "1",
            desc: "<span>Morsure.</span> Attaque de corps à corps, une cible. Touché : 19 (2d10 + 8), plus 7 (2d6) dégâts de feu"
          },
          {
            name: "Griffe",
            effect: "NC",
            dmg: "15 ou (2d6+8)",
            type: "Tranchants",
            range: "CAC",
            target: "1",
            desc: "<span>Griffe.</span> Attaque de corps à corps, une cible. Touché : 15 (2d6 + 8)"
          },
          {
            name: "Queue",
            effect: "NC",
            dmg: "17 ou (2d8+8)",
            type: "Contondants",
            range: "CAC",
            target: "1",
            desc: "<span>Queue.</span> Attaque de corps à corps, une cible. Touché : 17 (2d8 + 8)"
          },
          {
            name: "Souffle de feu",
            effect: "Esquive, subissez la moitier des dégâts",
            dmg: "63 ou (18d6)",
            type: "Feu",
            range: "Cône 18m",
            target: "Multiple",
            desc: "<span>Souffle de feu (Recharge 5-6).</span> Le dragon soufle du feu en cône de 18m, inflige 63 (18d6) dégâts de feu"
          },
        ]
      },
      {
        name: "Jeune Dragon Rouge",
        type: "Dragon de Taille Gigantesque",
        PA: "0", PV: "178", FOR: "75", MAG: "48", CHA: "40", CHM: "65",
        act: [
          {
            name: "Attaques multiples",
            effect: "Attaque morsure puis deux attaque de griffes",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> Le dragon effectue trois attaques, une sa mâchoires et deux avec ses griffes"
          },
          {
            name: "Morsure",
            effect: "Inflige 3 (1d6) dégâts de feu",
            dmg: "17 ou (2d10+6)",
            type: "Perforants",
            range: "CAC",
            target: "1",
            desc: "<span>Morsure.</span> Attaque de corps à corps, une cible. Touché : 17 (2d10 + 6), plus 3 (1d6) dégâts de feu"
          },
          {
            name: "Griffe",
            effect: "NC",
            dmg: "13 ou (2d6+6)",
            type: "Tranchants",
            range: "CAC",
            target: "1",
            desc: "<span>Griffe.</span> Attaque de corps à corps, une cible. Touché : 13 (2d6 + 6)"
          },
          {
            name: "Souffle de feu",
            effect: "Esquive, subissez la moitier des dégâts",
            dmg: "56 ou (16d6)",
            type: "Feu",
            range: "Cône 9m",
            target: "Multiple",
            desc: "<span>Souffle de feu (Recharge 5-6).</span> Le dragon soufle du feu en cône de 9m, inflige 56 (16d6) dégâts de feu"
          },
        ]
      },
    ]
  },
  {
    name: "Bandits",
    desc: "Les bandits vagabondent en bandes et sont parfois dirigés par des malfrats, des vétérans ou des mages. Tous les bandits ne sont pas mauvais. L'oppression, la sécheresse, les épidémies ou la famine peuvent souvent entraîner d'honnêtes gens vers une vie de banditisme. Les pirates sont des bandits de haute mer. Ils peuvent être des flibustiers intéressés uniquement par les trésors et le meurtre, ou être des corsaires légitimés par la couronne pour attaquer et piller les navires d'une nation ennemie.",
    img: "bestiary/bandits.jpeg",
    cards: [
      {
        name: "Bandit",
        type: "Humanoïde de Taille Moyenne",
        PA: "1", PV: "11", FOR: "55", MAG: "50", CHA: "52", CHM: "47",
        act: [
          {
            name: "Cimeterre",
            effect: "NC",
            dmg: "5 ou (1d8+1)",
            type: "Tranchants",
            range: "CAC",
            target: "1",
            desc: "<span>Cimeterre.</span> Attaque de corps à corps, une cible. Touché : 5 (1d8 + 1)"
          },
          {
            name: "Arbalète légère",
            effect: "NC",
            dmg: "4 ou (1d6+1)",
            type: "Perforants",
            range: "24/96m",
            target: "1",
            desc: "<span>Arbalète légère.</span> Attaque d'arme à distance, Touché : 4 (1d6 + 1)"
          },    
        ]
      },
      {
        name: "Capitaine Bandit",
        type: "Humanoïde de Taille Moyenne",
        PA: "2", PV: "65", FOR: "60", MAG: "50", CHA: "57", CHM: "52",
        act: [
          {
            name: "Attaques multiples",
            effect: "Attaque deux fois avec son cimeterre puis une attaque de dague ou Lance deux fois ses dagues",
            dmg: "",
            type: "",
            range: "",
            target: "Soi-même",
            desc: "<span>Attaques multiples.</span> Attaque deux fois avec son cimeterre puis une attaque de dague ou Lance deux fois ses dagues"
          },
          {
            name: "Cimeterre",
            effect: "NC",
            dmg: "6 ou (1d6+3)",
            type: "Tranchants",
            range: "CAC",
            target: "1",
            desc: "<span>Cimeterre.</span> Attaque de corps à corps, une cible. Touché : 6 (1d6 + 3)"
          },
          {
            name: "Dagues",
            effect: "NC",
            dmg: "5 ou (1d4+3)",
            type: "Perforants",
            range: "CAC ou 6/18m",
            target: "1",
            desc: "<span>Dagues.</span> Attaque d'arme au corps à corps ou  à distance, Touché : 5 (1d4 + 3)"
          },
        ]
      },
    ]
  },
  
]