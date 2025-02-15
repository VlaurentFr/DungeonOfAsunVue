// export const basicClasses = [
//   {
//     name: `Académicien`,
//     img: `classes/Academicien.png`,
//     spell: ['Sort mineur, n\'importe quel sort de niveau 1, Effet diviser par 2'],
//     required: ['Aucune'],
//     mastery: ['+ 5 Énergie'],
//     desc: "L'Académicien est un érudit dévoué à l'étude approfondie des arcanes et des mystères magiques. Passant des années dans les bibliothèques des tours magiques et des universités arcanes, il possède une connaissance encyclopédique des sorts, des rituels et des théories magiques. Expert dans l'analyse et l'enseignement des arts mystiques, l'Académicien en Magie peut déchiffrer des grimoires anciens, concocter des potions complexes et enseigner les principes de la magie à la prochaine génération de mages. Il est respecté pour sa sagesse, sa patience et son dévouement à l'avancement du savoir magique.",
//   },
//   {
//     name: `Aventurier`,
//     img: `classes/roturier.png`,
//     spell: ['Départ : +30po'],
//     required: ['Aucune'],
//     mastery: ['+ 5 PV'],
//     desc: "L'Aventurier est un explorateur intrépide, parcourant le monde à la recherche de trésors cachés, de mystères anciens et de défis à relever. Doté d'un esprit audacieux et d'une grande polyvalence, il s'adapte rapidement aux situations les plus dangereuses et imprévisibles. L'Aventurier excelle dans le combat, la survie et la navigation à travers des terrains hostiles. Qu'il s'agisse de braver des donjons sombres, de traverser des jungles inexplorées ou de défier des monstres redoutables, l'Aventurier est toujours prêt à l'action, motivé par la soif de découvertes et le désir de gloire."
//   },
// ];
export const noviceClasses = [
  {
    name: `Epéiste`,
    img: `classes/epeiste.png`,
    required: ['Epée C'],
    mastery: ['+ 10 PV', '+ 5 PdE'],
    spell: ['Attaque Lourde à l’épée'],
    desc: "Un combattant équilibré maîtrisant l’art de l’épée"
  },
  {
    name: `Trancheur`,
    img: `classes/Warrior.png`,
    required: ['Hache C'],
    mastery: ['+ 10 PV', '+ 5 PdE'],
    spell: ['Attaque Lourde à la hache'],
    desc: "Un guerrier brutal utilisant la hache pour détruire les défenses ennemies"
  },
  {
    name: `Archer`,
    img: `classes/Archer.png`,
    
    required: ['Arc C'],
    mastery: ['+ 10 PV', '+ 5 PdE'],
    spell: ['Tir Rapide'],
    desc: "Un combattant utilisant un arc pour attaquer à distance"
  },
  {
    name: `Surineur`,
    img: `classes/thief.png`,
    spell: ["Lame d'acide"],
    required: ['Dague C'],
    mastery: ['+ 10 PV', '+ 5 PdE'],
    desc: "Un combattant furtif qui attaque rapidement et précisément avec ses dagues"
  },
  {
    name: `Lancier`,
    img: `classes/lancier.png`,
    spell: ['Attaque Lourde à la lance'],
    required: ['Lance C'],
    mastery: ['+ 10 PV', '+ 5 PdE'],
    desc: "Un combattant utilisant une lance pour frapper avec précision à portée"
  },
  {
    name: `Pugiliste`,
    img: `classes/monk.png`,
    spell: ['Poing d\'air'],
    required: ['Poing C'],
    mastery: ['+ 10 PV', '+ 5 PdE'],
    desc: "Un combattant au corps à corps utilisant des armes de poings pour attaquer rapidement et avec force"
  },
  {
    name: `Portemasse`,
    img: `classes/combattant.png`,
    spell: ['Attaque Lourde à la masse'],
    required: ['Masse C'],
    mastery: ['+ 10 PV', '+ 5 PdE'],
    desc: "Un guerrier basique utilisant une masse pour infliger des dégâts physiques lourds"
  },
  // CLASSE MAGIQUE
  {
    name: `Mage de Feu`,
    img: `classes/pyromancer.png`,
    required: ['Boule de Feu'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "Utilise la magie de feu basique pour infliger des dégâts à distance"
  },
  {
    name: `Mage d'eau`,
    img: `classes/aquamancien.png`,
    required: ['Vague',],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "Utilise la magie de l'eau pour attaquer ses ennemis avec des vagues et des courants"
  },
  {
    name: `Mage d'air`,
    img: `classes/Zephyr.png`,
    required: ['Tornade'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "Utilise la magie du vent pour provoquer des tornades et attaquer à distance"
  },
  {
    name: `Mage de Terre`,
    img: `classes/druid.png`,
    required: ['Rocher destructeur'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "Utilise la magie de la terre pour infliger des dégâts en lançant des rochers"
  },
  {
    name: `Mage Noir`,
    img: `classes/necromancer.png`,
    required: ['Miasme'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "Utilise la magie noire pour infliger des malédictions et des dégâts corrosifs"
  },
  {
    name: `Clerc`,
    img: `classes/Clerc.png`,
    required: ['Soin luminescent'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "Utilise la magie de lumière pour soigner et protéger ses alliés"
  },
  // CLASSES COMBINEES
  {
    name: `Protecteur`,
    img: `classes/paladin.png`,
    spell: ['Frappe de justice'],
    required: ['Bouclier C','Épée C'],
    mastery: ['+ 10 PV', '+ 5 PdE'],
    desc: "Un guerrier défensif qui utilise le bouclier pour se protéger tout en attaquant à l’épée"
  },
  {
    name: `Rempart`,
    img: `classes/shield-berserker.png`,
    spell: ['Bouclier de Rage'],
    required: ['Bouclier C', 'Hache C'],
    mastery: ['+ 10 PV', '+ 5 PdE'],
    desc: "Un guerrier solide qui utilise le bouclier pour se défendre tout en frappant avec sa hache"
  },

]
export const avancedClasses = [
  {
    name: `Bretteur`,
    img: `classes/epeiste2.png`,
    required: ['Epee A'],
    spell: ['Attaque Lourde à l’épée', 'Frappe repoussante'],
    mastery: ['+ 20 PV', '+ 10 PdE'],
    desc: "Un guerrier agile spécialisé dans les duels à l’épée"
  },
  {
    name: `Berserker`,
    img: `classes/Warrior2.png`,
    required: ['Hache A'],
    mastery: ['+ 20 PV', '+ 10 PdE'],
    spell: ['Attaque Lourde à la hache', 'Entaille profonde'],
    desc: "Un combattant sauvage maîtrisant des attaques dévastatrices"
  },
  {
    name: `Tireur d'élite`,
    img: `classes/Archer2.png`,
    spell: ['Tir Rapide','Tir Arcanique'],
    required: ['Arc A'],
    mastery: ['+ 20 PV', '+ 10 PdE'],
    desc: "Un expert de l'arc capable de viser avec une grande précision à longue distance"
  },
  {
    name: `Trancheur Sombre`,
    img: `classes/thief2.png`,
    spell: ["Lame d'acide", 'Invisibilité'],
    required: ['Dague A'],
    mastery: ['+ 20 PV', '+ 10 PdE'],
    desc: "Un guerrier spécialisé dans les embuscades et les attaques rapides, frappant dans l'ombre"
  },
  {
    name: `Chevalier de la lance`,
    img: `classes/lancier2.png`,
    required: ['Lance A'],
    spell: ['Attaque Lourde à la lance', 'Envolée'],
    mastery: ['+ 20 PV', '+ 10 PdE'],
    desc: "Un guerrier spécialisé dans l'art du combat à la lance combinant portée et rapidité"
  },
  {
    name: `Moine`,
    img: `classes/monk2.png`,
    spell: ['Poing d\'air','Poing de feu'],
    required: ['Poing A'],
    mastery: ['+ 20 PV', '+ 10 PdE'],
    desc: "Un guerrier entraîné qui combine force physique et discipline spirituelle pour des attaques puissantes"
  },
  {
    name: `Brise Os`,
    img: `classes/combattant2.png`,
    required: ['Masse A'],
    spell: ['Attaque Lourde à la masse', 'Brise-mâchoire'],
    mastery: ['+ 20 PV', '+ 10 PdE'],
    desc: "Un combattant qui écrase ses ennemis avec des coups brutaux capables de briser les os"
  },
  // CLASSES MAGIQUES
  {
    name: `Pyromancien`,
    img: `classes/pyromancer2.png`,
    required: ['Bolganone'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Maîtrise des sorts de feu plus avancés afin de combattre ses adversaires"
  },
  {
    name: `Aquamancien`,
    img: `classes/aquamancien2.png`,
    required: ['Soin Aquatique'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Contrôle les pouvoirs de l'eau pour soigner et attaquer"
  },
  {
    name: `Cryomancien`,
    img: `classes/cryomancer2.png`,
    required: ['Cristaux de glace'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Utilise la magie de la glace pour ralentir et infliger des dégâts glacés à ses adversaires"
  },
  {
    name: `Zephyr`,
    img: `classes/Zephyr2.png`,
    required: ['Souffle ascendant'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Maîtrise des vents pour manipuler des objets à des fins utilitaires ou offensives"
  },
  {
    name: `Mage Gris`,
    img: `classes/grey-mage2.png`,
    required: ['Pic empoisonné'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Manipule la magie toxique pour infliger des dégâts persistants à ses ennemis"
  },
  {
    name: `Druide`,
    img: `classes/druid2.png`,
    required: ['Immobilisation verte'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Maîtrise les éléments terrestres en manipulant la terre et les racines pour contrôler ses ennemis"
  },
  {
    name: `Chaman`,
    img: `classes/chaman2.png`,
    required: ['Puissance Bestial'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Utilise la magie ancestrale pour puiser dans la force des esprits animaux et naturels"
  },
  {
    name: `Drakomancien`,
    img: `classes/Drakomancien2.png`,
    required: ['Thoron'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Manipule la foudre pour frapper ses ennemis avec des éclairs puissants"
  },
  {
    name: `Nécromancien`,
    img: `classes/necromancer2.png`,
    required: ['Animation des morts'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Contrôlant les morts-vivants, il est capable de lever des serviteurs squelettiques pour combattre à ses côtés"
  },
  {
    name: `Démoniste`,
    img: `classes/bloodMage.png`,
    required: ['Malédiction'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Un manipulateur des forces occultes utilisant des malédictions pour affaiblir ses ennemis"
  },
  {
    name: `Prêtre`,
    img: `classes/Clerc2.png`,
    required: ['Sagitae'],
    mastery: ['+ 20 PdE', '+ 10 PV'],
    desc: "Un maître des sorts de lumière capable d’infliger des dégâts tout en soignant"
  },
  // CLASSES MAGE GUERRIER
  {
    name: `Croisé`,
    img: `classes/Croise.png`,
    required: ['Lumière Divine + Épée, Lance ou Masse A'],
    mastery: ['+ 10 PV', '+ 20 PdE'],
    desc: "Un combattant sacré utilisant la lumière divine en combat"
  },
  {
    name: `Chevalier Noir`,
    img: `classes/dark-knight.png`,
    required: ['Piques noires + Épée, Lance ou Masse B'],
    mastery: ['+ 10 PV', '+ 20 PdE'],
    desc: "Un guerrier sombre utilisant la magie des ténèbres pour renforcer ses attaques physiques"
  },
  // CLASSES COMBINEES
  {
    name: `Paladin`,
    img: `classes/paladin.png`,
    required: ['Epee C, Bouclier B'],
    spell: ['Frappe de justice', 'Bouclier Divin'],
    mastery: ['+ 20 PV', '+ 10 PdE'],
    desc: "Un guerrier sacré maître de la défense et de l'attaque"
  },
  {
    name: `Garde Berserk`,
    img: `classes/shield-berserker.png`,
    required: ['Hache C, Bouclier B'],
    spell: ['Bouclier de Rage', 'Entaille précise'],
    mastery: ['+ 20 PV', '+ 10 PdE'],
    desc: "Un défenseur offensif combinant la brutalité de la hache à la protection du bouclier"
  },
  // {
  //   name: `Sentinelle du Jugement `,
  //   img: `classes/mace-shield.png`,
  //   required: ['Masse B, Bouclier C'],
  //   spell: [],
  //   mastery: ['+ 20 PV'],
  //   desc: ""
  // },
  // {
  //   name: `Protecteur Lancier`,
  //   img: `classes/spear-guard.png`,
  //   required: ['Lance B, Bouclier C'],
  //   spell: [],
  //   mastery: ['+ 20 PV'],
  //   desc: ""
  // },
];
export const masterClasses = [
  {
    name: `Maître Epéiste`,
    img: `classes/epeiste3.png`,
    spell: ['Attaque Lourde à l’épée', 'Frappe Repoussante', 'Fine Lame'],
    required: ['Epee M'],
    mastery: ['+ 40 PV', '+ 20 PdE'],
    desc: "Un expert ultime dans l’art de l’épée capable de parer et attaquer avec une précision chirurgicale"
  },
  {
    name: `Destructeur de batailles`,
    img: `classes/Warrior3.png`,
    spell: ['Attaque Lourde à la hache', 'Entaille profonde', 'Rage du Berserker'],
    required: ['Hache M'],
    mastery: ['+ 40 PV', '+ 20 PdE'],
    desc: "Un guerrier maître de la hache capable de briser même les défenses les plus solides"
  },
  {
    name: `Seigneur des flèches`,
    img: `classes/Archer3.png`,
    spell: ['Tir Rapide','Tir Arcanique', 'Tir Divin'],
    required: ['Arc M'],
    mastery: ['+ 40 PV', '+ 20 PdE'],
    desc: "Un maître archer dont les tirs sont presque inévitables, infligeant de lourds dégâts à distance"
  },
  {
    name: `Lame fantôme`,
    img: `classes/thief3.png`,
    spell: ["Lame d'acide", 'Invisibilité', 'Vif Eclair'],
    required: ['Dague M'],
    mastery: ['+ 40 PV', '+ 20 PdE'],
    desc: "Un maître de la discrétion capable de se rendre invisible et d'infliger des dégâts critiques avec ses dagues"
  },
  {
    name: `Héraut de la lance`,
    img: `classes/lancier3.png`,
    spell: ['Attaque Lourde à la lance', 'Envolée', 'Percée'],
    required: ['Lance M'],
    mastery: ['+ 40 PV', '+ 20 PdE'],
    desc: "Un maître lancier capable d'utiliser la portée et la puissance de la lance pour dominer le champ de bataille"
  },
  {
    name: `Chanoine suprême`,
    img: `classes/monk3.png`,
    spell: ['Poing d\'air', 'Poing de feu','Poing de foudre'],
    required: ['Poing M'],
    mastery: ['+ 40 PV', '+ 20 PdE'],
    desc: "Un maître des arts martiaux capable d'utiliser des armes de poings pour infliger des dégâts destructeurs"
  },
  {
    name: `Briseur de géants`,
    img: `classes/combattant3.png`,
    required: ['Masse M'],
    spell: ['Attaque Lourde à la masse', 'Brise-mâchoire', 'Brise-moëlle'],
    mastery: ['+ 40 PV', '+ 20 PdE'],
    desc: "Un maître de la masse capable de renverser même les adversaires les plus grands et puissants"
  },
  // CLASSES MAGIQUES
  {
    name: `Maître Pyromancien`,
    img: `classes/pyromancer3.png`,
    required: ['Ragnarok'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Contrôle le feu avec des sorts dévastateurs le rendant redoutable"
  },
  {
    name: `Maître Aquamancien`,
    img: `classes/aquamancien3.png`,
    required: ['Tsunami'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Maîtrise absolue de l'eau capable de provoquer des tsunamis dévastateurs"
  },
  {
    name: `Maître Cryomancien`,
    img: `classes/cryomancer3.png`,
    required: ['Fimbulvetr'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Un maître de la glace capable de créer des tempêtes glaciales et des attaques dévastatrices"
  },
  {
    name: `Maître Zephyr`,
    img: `classes/Zephyr3.png`,
    required: ['Excalidur'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Un manipulateur de l'air capable de provoquer des tempêtes violentes et tranchant tout sur son passage"
  },
  {
    name: `Maître Mage Gris`,
    img: `classes/grey-mage3.png`,
    required: ['Corrosion'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Un maître des poisons capable de faire fondre l’armure et affaiblir durablement ses ennemis"
  },
  {
    name: `Maître Druide`,
    img: `classes/druid3.png`,
    required: ['Seisme'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Un maître de la nature capable de provoquer des séismes et de manipuler la terre à volonté"
  },
  {
    name: `Maître Chaman`,
    img: `classes/chaman3.png`,
    required: ['Transformation Bestial'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Un expert chaman capable de se transformer en créature mythique combinant force physique et pouvoir spirituel"
  },
  {
    name: `Maître Drakomancien`,
    img: `classes/Drakomancien3.png`,
    required: ['Mjöllnir'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Un expert de la foudre capable de provoquer des tempêtes électriques destructrices écrasant ses adversaires"
  },
  {
    name: `Maître Nécromancien`,
    img: `classes/necromancer3.png`,
    required: ['Résurrection des morts'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Un maître des arts occultes capable de ressusciter les morts afin qu’ils combattent en autonomie à ses côtés"
  },
  {
    name: `Maître démoniste`,
    img: `classes/bloodMage2.png`,
    required: ['Invocation démoniaque'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Un sorcier des ténèbres capable d’invoquer des créatures démoniaques pour semer la terreur"
  },
  {
    name: `Evêque`,
    img: `classes/Clerc3.png`,
    required: ['Nosferatu'],
    mastery: ['+ 40 PdE', '+ 20 PV' ],
    desc: "Un expert ultime de la magie sacrée, capable de manipuler la lumière pour infliger des dégâts redoutables et absorber l’énergie vitale"
  },
  // CLASSE MAGE GUERRIER
  {
    name: `Templier`,
    img: `classes/Croise2.png`,
    required: ['Abraxas +  Épée, Lance ou Masse S'],
    mastery: ['+ 30 PV', '+ 20 PdE'],
    desc: "Un guerrier sombre utilisant la magie des ténèbres pour renforcer ses attaques physiques"
  },
  {
    name: `Chevalier du Néant`,
    img: `classes/dark-knight2.png`,
    required: ['Hadès + Épée, Lance ou Masse S'],
    mastery: ['+ 30 PV', '+ 20 PdE'],
    desc: "Un maître des ténèbre, combinant la force brute et les arts occultes pour anéantir ses adversaires"
  },
  // CLASSES COMBINEES
  {
    name: `Garde Sacrée`,
    img: `classes/paladin2.png`,
    required: ['Epee A, Bouclier S'],
    spell: ['Frappe de Justice', 'Bouclier Divin', 'Jugement Final'],
    mastery: ['+ 40 PV', '+ 20 PdE'],
    desc: "Un défenseur ultime capable de protéger ses alliés tout en frappant avec précision"
  },
  {
    name: `Rempart colossal`,
    img: `classes/shield-berserker2.png`,
    required: ['Hache A, Bouclier S'],
    spell: ['Bouclier de Rage', 'Entaille précise', 'Garde-Rage'],
    mastery: ['+ 40 PV', '+ 20 PdE'],
    desc: "Un défenseur imposant, inébranlable et dévastateur avec ses attaques"
  },
  // {
  //   name: `Gardien du Marteau`,
  //   img: `classes/mace-shield2.png`,
  //   required: ['Masse A+, Bouclier A'],
  //   spell: [],
  //   mastery: ['+ 40 PV'],
  //   desc: ""
  // },
  // {
  //   name: `Sentielle de l'aube`,
  //   img: `classes/spear-guard2.png`,
  //   required: ['Lance A+, Bouclier A'],
  //   spell: [],
  //   mastery: ['+ 40 PV'],
  //   desc: ""
  // },
];