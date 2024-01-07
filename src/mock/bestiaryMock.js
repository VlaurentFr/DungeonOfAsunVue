export const MOB = [
  {
    name: "Banshie",
    desc: "La Banshie, créature légendaire des contrées mystérieuses, est une entité surnaturelle dont le cri déchirant glace le sang. Cette apparition fantomatique se distingue par sa silhouette élancée et son voile spectral qui flotte dans les brises nocturnes. Les légendes rapportent que la Banshie est une messagère des ténèbres, avertissant de manière lugubre les mortels de la proximité imminente de la mort. Son visage, souvent dissimulé par le voile, dégage une aura mélancolique et inquiétante. La Banshie est connue pour son cri strident capable de pénétrer l'âme des vivants. Ce hurlement spectral est considéré comme un présage funeste, annonçant la disparition prochaine d'un être cher. Certains récits parlent également de la capacité de la Banshie à prédire les tragédies futures. Elle est souvent associée aux événements fatidiques et aux destinées sombres. La Banshie est généralement liée aux lieux chargés d'histoire, tels que les anciens cimetières, les ruines oubliées et les landes désolées. Elle choisit des endroits isolés pour murmurer ses avertissements dans la nuit, ajoutant une dimension mystique à sa présence. Bien que redoutable, la Banshie est vulnérable aux rituels de protection, aux amulettes bénies et à certains objets sacrés. Les mélodies apaisantes et les prières peuvent également repousser temporairement cette créature funeste. Cependant, il est conseillé d'éviter tout contact direct avec la Banshie, car sa malédiction peut persister longtemps après l'interaction. Rencontrer une Banshie est une expérience terrifiante, et les habitants des régions où elle est connue redoublent de vigilance pour éviter d'attirer son attention. Les récits autour de cette créature persistante ajoutent une touche de mystère et de terreur aux récits folkloriques de nombreuses cultures.",
    img: "bestiary/Banshee.jpeg",
    cards: [
      {
        name: "Banshie",
        type: "Mort-vivant de taille Moyenne",
        PA: "0",
        PV: "58",
        FOR: "10",
        MAG: "65",
        CHA: "70",
        CHM: "85",
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
    desc: "Le Basilic, créature mythique aux origines anciennes, incarne la terreur avec sa nature reptilienne et son regard mortel. Doté d'une envergure imposante et d'écailles luisantes, le Basilic est souvent décrit comme un serpent géant au corps massif et à la tête couronnée de cornes menaçantes. Son regard, légendairement pétrifiant, est source de cauchemars pour ceux qui croisent sa route. Le pouvoir redoutable du Basilic réside dans son regard mortel. La légende raconte que le simple fait de croiser les yeux de cette créature peut pétrifier instantanément ses victimes, figeant leur corps dans une pose de terreur éternelle. Certains récits suggèrent que la seule protection contre ce regard mortel est de voir la créature à travers un miroir, évitant ainsi le contact visuel direct. Les Basilics sont souvent associés aux endroits reculés, tels que les profondes cavernes, les forêts sombres et les lieux où la magie ancienne perdure. Leurs repaires sont jalousement gardés, dissimulés dans des environnements inhospitaliers où peu osent s'aventurer. Bien que redoutable, le Basilic n'est pas sans ses faiblesses. Certains récits mentionnent que la plupart des Basilics craignent la chant du coq, dont le chant aurait le pouvoir de neutraliser leur regard pétrifiant. Les miroirs, en plus de fournir une protection, peuvent également être utilisés pour refléter le regard du Basilic contre lui-même. Rencontrer un Basilic est une aventure périlleuse, et de nombreuses légendes mettent en garde contre l'exploration imprudente de territoires où ces créatures redoutables errent. Les contes autour du Basilic se transmettent de génération en génération, ajoutant une aura de mystère et de danger à ces reptiles mythiques..",
    cards: [
      {
        name: "Basilic",
        type: "Monstruosité de taille Moyenne",
        PA: "5",
        PV: "52",
        FOR: "60",
        MAG: "10",
        CHA: "40",
        CHM: "35",
        act: []
      },
    ],
  },
  {
    name: "Béhir",
    desc: "Le Béhir est une créature impressionnante et reptilienne qui se dresse sur de puissantes pattes, rappelant un hybride de serpent et de dragon. Ses écailles épaisses et rugueuses sont d'un bleu profond, avec des crêtes dorsales qui s'étendent le long de son corps. Ses yeux électriques brillent d'une lueur malveillante, et ses multiples pattes terminées par des griffes acérées sont prêtes à capturer et déchiqueter ses proies. Le Béhir est une créature massive et musclée, capable de se déplacer à grande vitesse malgré sa taille imposante. Sa gueule massive est munie de crocs redoutables, et ses longs serpents électriques qui entourent sa tête lui permettent d'électrocuter ses adversaires. Cette créature reptilienne est également capable de cracher un souffle d'énergie électrique dévastateur. Les Béhirs sont souvent trouvés dans des environnements montagneux, particulièrement dans des cavernes profondes où ils peuvent se tapir en attendant leurs proies. Ils sont également associés à des terrains électriques, tels que des régions fréquentées par des orages magiques. Les Béhirs sont généralement considérés comme des créatures chaotiques et malveillantes. Leur nature prédatrice et leur propension à attaquer sans avertissement les rendent redoutables pour les aventuriers imprudents. Les Béhirs sont attirés par les métaux précieux et peuvent amasser des trésors en pillant des caravanes ou des aventuriers qui traversent leur territoire. Ils sont connus pour garder leurs trésors dans des nids rocheux ou des cavernes isolées. Bien que puissant, le Béhir peut être vulnérable aux attaques coordonnées. Étant une créature plutôt solitaire, il peut être surpris et submergé par des groupes d'aventuriers. Les résistances électriques peuvent également offrir une protection contre certaines de ses attaques. Rencontrer un Béhir est une épreuve redoutable pour les aventuriers, et les histoires de ces créatures impressionnantes qui surgissent des montagnes hantent les récits des voyageurs intrépides.",
    img: "bestiary/behir.jpeg",
    cards: [
      {
        name: "Béhir",
        type: "Monstruosité de taille Moyenne",
        PA: "5",
        PV: "52",
        FOR: "60",
        MAG: "10",
        CHA: "40",
        CHM: "35",
        act: []
      },
    ],
  },
  {
    name: "Gobelins",
    desc: "Les Gobelins, créatures malicieuses et souvent belliqueuses, peuplent les recoins sombres et reculés du monde fantastique. De petite taille, avec des traits grotesques, ils ont une apparence reptilienne, des peaux rugueuses et des yeux perçants qui révèlent leur nature fourbe. Leurs vêtements dépareillés et leurs armes rudimentaires témoignent de leur existence dans des sociétés tribales. Les Gobelins sont agiles et rapides, compensant leur taille modeste par une astuce sournoise. Leurs compétences furtives et leur capacité à se fondre dans les ombres font d'eux d'excellents embusqués. Bien qu'ils ne soient pas particulièrement forts, leur nombre et leur nature opportuniste les rendent dangereux en groupe. Généralement trouvés dans des terres sauvages, des cavernes ou des souterrains, les Gobelins évitent souvent les endroits fortement peuplés. Leur société est souvent tribale, dirigée par des chamans ou des chefs de guerre, et marquée par des rivalités internes. Les Gobelins sont souvent chaotiques et malveillants, se laissant guider par leurs instincts sauvages. Leurs motivations varient, allant de la simple survie à la recherche de butins et de richesses aux dépens des autres. Généralement attirés par des objets brillants et précieux, les Gobelins amassent des trésors rudimentaires dans leurs repaires. Cependant, leurs richesses sont souvent le fruit de pillages plutôt que d'artisanat. Individuellement faibles, les Gobelins peuvent être vaincus avec une force suffisante. Leur manque de discipline et leurs querelles internes peuvent également être exploités par des adversaires avisés. Cependant, sous-estimer leur nombre et leur ruse peut conduire à des rencontres désastreuses. Rencontrer des Gobelins est un défi fréquent pour les aventuriers, car ces créatures espiègles sont souvent engagées dans des embuscades sournoises. Leurs raids impulsifs et leurs rires cruels laissent une empreinte indélébile dans les histoires des voyageurs intrépides.",
    img: "bestiary/gobelins.webp",
    cards: [
      {
        name: "Gobelins",
        type: "Humanoïdes de Petite taille",
        PA: "5",
        PV: "52",
        FOR: "60",
        MAG: "10",
        CHA: "40",
        CHM: "35",
        act: []
      },
      {
        name: "Shaman Gobelins",
        type: "Humanoïdes de Petite taille",
        PA: "5",
        PV: "52",
        FOR: "60",
        MAG: "10",
        CHA: "40",
        CHM: "35",
        act: []
      },
      {
        name: "Chef Gobelins",
        type: "Humanoïdes de Petite taille",
        PA: "5",
        PV: "52",
        FOR: "60",
        MAG: "10",
        CHA: "40",
        CHM: "35",
        act: []
      },
    ]
  },
  {
    name: "Mimique",
    desc: "La Mimique, maître de la dissimulation, est une créature étrange et dangereuse qui se fond habilement dans son environnement en prenant l'apparence d'objets inanimés. Souvent confondue avec un coffre, un tonneau ou même une porte, la Mimique attend patiemment qu'une proie imprudente s'approche avant de révéler sa véritable forme. La Mimique possède une texture visqueuse et une capacité innée à imiter parfaitement la texture et la couleur de son environnement. Elle est capable de déplacer des parties de son corps pour former des appendices semblables à des tentacules, qu'elle utilise pour saisir sa proie. Sa bouche, cachée sous une surface trompeuse, est remplie de dents pointues. On trouve généralement les Mimiques dans des endroits où des trésors sont stockés, tels que des donjons, des caves ou des salles au trésor. Elles ont un penchant pour les environnements clos où la surprise est leur alliée. Les Mimiques sont souvent considérées comme neutres maléfiques, agissant selon leurs instincts de chasse et de survie. Leur nature prédatrice les pousse à attaquer toute créature qui se trouve à portée. Étant souvent associées à des coffres ou à d'autres objets de valeur, les Mimiques peuvent posséder des trésors qu'elles ont accumulés en attirant et dévorant des aventuriers malchanceux. Bien que camouflée, la Mimique peut être détectée par des observateurs avertis qui notent des détails inhabituels, tels que des textures incohérentes ou des mouvements imperceptibles. Le feu est également une faiblesse connue des Mimiques, car il peut les forcer à révéler leur forme véritable. Rencontrer une Mimique est une expérience redoutée par les aventuriers, car elle remet en question la confiance même dans les objets apparemment inoffensifs. Les récits d'explorateurs trompés par ces créatures insidieuses circulent largement, faisant de la Mimique une menace persistante dans le monde fantastique.",
    cards: [
      {
        name: "Mimique",
        type: "Monstruosité (métamorphe) de Taille Moyenne",
        PA: "0",
        PV: "58",
        FOR: "85",
        MAG: "25",
        CHA: "60",
        CHM: "45",
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
  }
]