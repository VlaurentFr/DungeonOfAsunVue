export const basicClasses = [
  {
    name: `Académicien`,
    img: `classes/Academicien.png`,
    spell: ['Sort mineur, n\'importe quel sort de niveau 1, Effet diviser par 2'],
    weapons: ['Aucune'],
    mastery: ['+ 5 Énergie'],
    desc: "L'Académicien est un érudit dévoué à l'étude approfondie des arcanes et des mystères magiques. Passant des années dans les bibliothèques des tours magiques et des universités arcanes, il possède une connaissance encyclopédique des sorts, des rituels et des théories magiques. Expert dans l'analyse et l'enseignement des arts mystiques, l'Académicien en Magie peut déchiffrer des grimoires anciens, concocter des potions complexes et enseigner les principes de la magie à la prochaine génération de mages. Il est respecté pour sa sagesse, sa patience et son dévouement à l'avancement du savoir magique.",
  },
  {
    name: `Aventurier`,
    img: `classes/roturier.png`,
    weapons: ['Aucune'],
    mastery: ['+ 5 PV'],
    desc: "L'Aventurier est un explorateur intrépide, parcourant le monde à la recherche de trésors cachés, de mystères anciens et de défis à relever. Doté d'un esprit audacieux et d'une grande polyvalence, il s'adapte rapidement aux situations les plus dangereuses et imprévisibles. L'Aventurier excelle dans le combat, la survie et la navigation à travers des terrains hostiles. Qu'il s'agisse de braver des donjons sombres, de traverser des jungles inexplorées ou de défier des monstres redoutables, l'Aventurier est toujours prêt à l'action, motivé par la soif de découvertes et le désir de gloire."
  },
];
export const noviceClasses = [
  {
    name: `Epéiste`,
    img: `classes/epeiste.png`,
    weapons: ['Epée C'],
    mastery: ['+ 10 PV'],
    spell: ['Attaque Double'],
    desc: "L'Épéiste est un maître de l'art du combat à l'épée, combinant agilité, précision et maîtrise technique. Il excelle dans les duels rapprochés, maniant son épée avec une grâce mortelle. La formation de l'Épéiste peut varier, allant des techniques traditionnelles transmises dans les écoles d'escrime aux méthodes plus informelles apprises au fil de l'expérience sur le champ de bataille. Souvent vêtu d'une armure légère pour préserver sa mobilité, l'Épéiste est capable de parer habilement les attaques adverses et de riposter avec une efficacité redoutable. En dehors du combat, son code d'honneur peut le guider, faisant de lui un défenseur intrépide de la justice ou un mercenaire pragmatique, suivant la voie tracée par la lame qu'il manie avec expertise."
  },
  {
    name: `Brigand`,
    img: `classes/Warrior.png`,
    
    weapons: ['Hache C'],
    mastery: ['+ 10 PV'],
    spell: ['Attaque Double'],
    desc: "Le Brigand a préféré mettre ses capacités au service d’une cause moins noble. La hache est sa plus fidèle alliée, capable de briser des portes, les coffres ou les caisses de transport standards et même, en de rares occasions, de briser les portes des maisonnettes des villages ne lui accordant pas l’hospitalité. Il n’use pas à proprement parler de technique au combat, préférant baser ses chances sur sa son avantage de force pour briser ses ennemis. Il préfèrera porter des armures intermédiaires, pouvant facilement l’aider à braver les éléments lorsqu’il attend de pouvoir commettre sa prochaine exaction. En dehors du combat, bien que patibulaire, le Brigand sait se montrer loyal envers qui le mérite."
  },
  {
    name: `Archer`,
    img: `classes/Archer.png`,
    
    weapons: ['Arc C'],
    mastery: ['+ 10 PV'],
    spell: ['Attaque Double'],
    desc: "Lorsque l’on pense à un champ de bataille, on pense souvent aux soldats se battant dans la boue, le sang et la mort. Mais l’on oublie souvent l’Archer, perché dans les hauteurs, dans les remparts ou sur les tours. Maniant avec adresse son arc, il est précis, agile et mortel qu’importe la distance. D’une efficacité incomparable à distance, produisant de véritable nuée de flèches harcelant ses ennemis avec un arc long, il est aussi mortel à courte distance avec un arc court, lui permettant de décocher même dans les endroits les plus étriqués. Au fil du temps, certains Archers finissent même par avoir des compétences spéciales ou même la capacité d’utiliser des flèches plus artisanales aux effets variés. Hors du combat, l’Archer excelle dans la chasse du gibier, utilisant ses capacités de reconnaissance hérité d’un passé d’éclaireur, ou encore un gardien immuable des frontières, utilisant ses capacités pour protéger son peuple des menaces."
  },
  {
    name: `Voleur`,
    img: `classes/thief.png`,
    
    spell: ["Lame d'acide"],
    weapons: ['Dague C'],
    mastery: ['+ 10 PV'],
    desc: "Le Voleur est un maître de l'art de l'infiltration et du vol. Agile et furtif, il excelle dans la discrétion et l'évitement. Le Voleur peut se faufiler dans l'ombre, éviter les pièges et les gardes, et dérober des objets précieux sans être détecté. Il est souvent équipé d'outils tels que des crochets, des poisons, et d'autres gadgets utiles pour ses activités illicites. En combat, le Voleur préfère les attaques sournoises, utilisant sa vitesse et sa ruse pour prendre ses ennemis par surprise. Certains Voleurs peuvent être des assassins experts, tandis que d'autres se spécialisent dans le vol à la tire ou le sabotage. En dehors du monde criminel, un Voleur peut trouver sa place en tant qu'éclaireur, explorateur, ou même en tant que membre d'une guilde d'espions travaillant pour des causes variées. Bien que souvent perçu comme immoral, le Voleur peut avoir ses propres codes d'éthique ou agir par nécessité dans un monde difficile."
  },
  {
    name: `Soldat`,
    img: `classes/lancier.png`,
    spell: ['Attaque Dévastatrice'],
    weapons: ['Lance C'],
    mastery: ['+ 10 PV'],
    desc: "Le Soldat manie la lance comme un artisan manie ses outils. Un entraînement, voir une carrière dans l’armée fait de lui un rempart naturel pour ses alliés, ou une menace agile et polyvalente sur le champ de bataille. Souvent rustre dans sa façon de procéder, le Soldat ne laisse pas place à l’hésitation, et agît à l’instinct tout en suivant nombre de codes appris et récités pendant des années. Nul n’irait mettre en doute la possibilité d’un assaut si un Soldat a exprimé son opinion. Hors du combat, il adopte la même ligne de conduite que les lances les plus affutées : Droiture et inflexibilité. Si vous connaissez et suivez le code moral, il sera un soutien à toute épreuve."
  },
  {
    name: `Pugiliste`,
    img: `classes/monk.png`,
    spell: ['Attaque Double'],
    weapons: ['Poing C'],
    mastery: ['+ 10 PV'],
    desc: "Le Pugiliste est un combattant spécialisé dans l'art du combat à mains nues. Expert en techniques de boxe, de coups de pied et de prises, le Pugiliste excelle dans les combats rapprochés. Sa force brute et sa rapidité font de lui un adversaire redoutable, capable de briser la défense de ses ennemis avec des attaques rapides et précises. Certains Pugilistes peuvent également maîtriser des techniques de contournement, évitant habilement les attaques adverses pour mieux riposter. Le Pugiliste peut être vu comme un artiste martial, utilisant son corps comme une arme mortelle. En dehors des arènes de combat, il peut être un protecteur des opprimés, utilisant ses compétences pour défendre ceux qui ne peuvent se défendre ou un compétiteur recherchant des défis pour tester et améliorer ses compétences."
  },
  {
    name: `Combattant`,
    img: `classes/combattant.png`,
    spell: ['Attaque Dévastatrice'],
    weapons: ['Masse C'],
    mastery: ['+ 10 PV'],
    desc: "Le Combattant est une force de la nature, brisant sans effort la plupart des défenses légères de ses ennemis. Sa masse fend l’air et les boucliers avec l’aisance du mistral. Maniant sa masse efficacement et sans efforts, sa présence sur le champ de bataille impose une idée commune ; il brisera tout objet ou personne entre lui et sa cible.  En dehors du combat, le Combattant s’entraîne sans relâche, prêt à affronter la plus grande et la plus robuste des menaces qui pourrait le confronter lui ou son peuple, prêt à donner sa vie pour le protéger ou imposer sa supériorité combative."
  },
  {
    name: `Apprenti Pyromancien`,
    img: `classes/pyromancer.png`,
    spell: ['Boule de Feu'],
    weapons: ['Magie C'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "L'Apprenti Pyromancien est un jeune praticien des arts du feu, cherchant à maîtriser les flammes et à canaliser le pouvoir ardent du pyromancien. Bien que ses compétences ne soient pas encore pleinement développées, l'Apprenti Pyromancien commence son voyage dans le monde de la magie en apprenant les rudiments de la manipulation du feu. Ses sorts peuvent inclure des petites boules de feu, des flammes qui dansent et peut-être même des flammèches contrôlées. Cependant, en raison de son inexpérience, ses pouvoirs peuvent parfois être imprévisibles et nécessitent une concentration intense. L'Apprenti Pyromancien est souvent guidé par un mentor plus expérimenté pour éviter les dangers potentiels liés à la magie du feu. En dehors de l'entraînement, il peut être perçu comme curieux, avide d'apprendre et parfois un peu trop enclin à tester ses capacités, parfois au détriment de la sécurité."
  },
  {
    name: `Apprenti Aquamancien`,
    img: `classes/aquamancien.png`,
    spell: ['Vague', 'Soin Aquatique',],
    weapons: ['Magie C'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "L'Apprenti Aquamancien est un magicien spécialisé dans la manipulation des forces aquatiques. Ayant débuté son apprentissage sous la tutelle d'un maître aquamancien, il apprend à canaliser la puissance de l'eau pour des sorts offensifs, défensifs et utilitaires. Les Apprentis Aquamanciens possèdent une affinité naturelle avec les milieux aquatiques et tirent leur pouvoir des courants, des marées et des sources sacrées."
  },
  {
    name: `Apprenti Cryomancien`,
    img: `classes/cryomancer.png`,
    spell: ['Main de Givre'],
    weapons: ['Magie C'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: " L'Apprenti Cryomancien est un étudiant débutant dans l'art de manipuler la glace et les éléments froids. En quête de maîtrise des forces cryomantiques, cet apprenti apprend à générer des rafales de froid, à créer de petites structures de glace, et à ralentir ses adversaires avec des techniques de givre. Ses pouvoirs sont souvent teintés d'une certaine inexpérience, pouvant parfois créer des effets inattendus ou être difficiles à contrôler. Guidé par un mentor expérimenté, l'Apprenti Cryomancien cherche à comprendre les subtilités de sa magie et à éviter les écueils liés à la manipulation de la glace. En dehors de l'entraînement, il peut être perçu comme quelqu'un qui apprécie la fraîcheur et la beauté de la glace, mais qui doit faire preuve de prudence pour ne pas laisser son pouvoir s'échapper de son emprise."
  },
  {
    name: `Apprenti Zephyr`,
    img: `classes/Zephyr.png`,
    spell: ['Tornade'],
    weapons: ['Magie C'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "L'Apprenti Zephyr est un étudiant engagé dans l'art de manipuler les vents et les courants d'air. Son initiation dans le domaine du Zephyr le conduit à apprendre à sentir et à diriger les flux atmosphériques. Les premiers pas de l'apprenti impliquent généralement la création de brises légères, la manipulation de petits tourbillons, ou même la capacité de déplacer de légères particules dans l'air. Toutefois, en raison de son statut d'apprenti, la maîtrise complète des tempêtes et des bourrasques est encore loin. L'Apprenti Zephyr est souvent supervisé par un maître expérimenté qui le guide à travers les subtilités de la manipulation des vents. En dehors de son apprentissage, il peut être perçu comme quelqu'un qui apprécie la liberté du vent et qui a un profond respect pour les forces naturelles."
  },
  {
    name: `Apprenti Mage Gris`,
    img: `classes/grey-mage.png`,
    spell: ["Boule d'Acide"],
    weapons: ['Magie C'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "Malgré son titre d’apprenti mage, il ne fait en général pas partie d’une caste classique de l’école de magie. En effet, l’on peut distinguer l’Apprenti Mage Gris des castes conventionnelles car la Magie Grise est enseignée par des assassins. Longtemps ignorée, la magie a fini par rejoindre l’éventail des capacités des plus grands assassins. Pouvoir empoisonner une cible à distance au lieu de se rapprocher de sa cible et de son verre, devenir invisible pour la poignarder dans une lieu bondé, tant de capacités qui furent longtemps éclipsées avant de mettre leurs égo de côté pour accepter cette “aide extérieure”. En général, le mentor de l’Apprenti Mage Gris ne lui enseigne pas comment utiliser ces magies, mais les utilise plutôt contre lui pour lui enseigner à s’en prémunir. Apprendre comment contrer ces sorts plutôt que de les utiliser, permet d’être plus efficace contre une cible habituée à ce genre de tactiques."
  },
  {
    name: `Apprenti Druide`,
    img: `classes/druid.png`,
    spell: ['Immobilisation verte', 'Rocher destructeur'],
    weapons: ['Magie C'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "L'Apprenti Druide est un élève au sein de l'ancienne tradition des druides, cherchant à comprendre et à maîtriser la magie liée à la nature. Initiant son parcours dans le monde des druides, il apprend les bases de la communication avec les éléments naturels, la guérison par les plantes, et la capacité à se connecter avec les esprits de la faune. Les sorts de l'Apprenti Druide peuvent inclure la croissance accélérée des plantes, la guérison légère, et la capacité à parler avec les animaux. Cependant, en tant qu'apprenti, son pouvoir est limité et nécessite une compréhension plus profonde pour atteindre son plein potentiel. Généralement guidé par un mentor expérimenté, l'Apprenti Druide explore les mystères de la nature et apprend à maintenir l'équilibre entre les forces du bien et du mal. En dehors de son apprentissage, il peut être perçu comme un individu respectueux de l'environnement, cherchant à protéger la nature et à vivre en harmonie avec elle."
  },
  {
    name: `Apprenti Chaman`,
    img: `classes/chaman.png`,
    spell: ['Force Bestial'],
    weapons: ['Magie C'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "L’apprenti Chaman puise sa force dans la nature. Ceux apprenant ce type de magie ont une tendance beaucoup plus grande à vivre dans la nature, entourés d’animaux ou de plantes, puisant dans cette ressource infinie pour la décliner sous forme magique. Souvent appareillé de tenue légère, représentant ce milieu qu’il affectionne tant, la puissance bestiale de son apparence suffit en un clin d’oeil à connaître son appartenance à ce groupe clos des chamans. Leurs magie, appelée Magie Bestiale, ou Magie Verte, faisant référence aux bêtes ou à la nature, est encore mal comprise par les castes classique de magicien, ne semblant pas venir de l’énergie mais presque de la nature, comme s’ils s’en servaient comme d’un énorme catalyseur."
  },
  {
    name: `Apprenti Illutionniste`,
    img: `classes/illutioniste.png`,
    spell: ['Illusion'],
    weapons: ['Magie C'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "L'Apprenti Illusionniste est un étudiant prometteur dans l'art complexe de la magie de l'illusion. Ses débuts dans ce domaine fascinant impliquent la création d'images trompeuses, la modification mineure de l'apparence des objets, et la capacité à altérer légèrement la perception de la réalité. Ses tours de magie peuvent inclure des illusions visuelles, des sons mystérieux, et même des changements mineurs dans l'environnement. Cependant, en tant qu'apprenti, la maîtrise complète des illusions éblouissantes et des enchantements complexes reste un objectif à atteindre. Souvent encadré par un mentor expérimenté, l'Apprenti Illusionniste cherche à perfectionner son art tout en apprenant à éviter les pièges de sa propre magie trompeuse. En dehors de son apprentissage, il peut être perçu comme quelqu'un qui apprécie l'aspect ludique de la magie, cherchant à émerveiller et surprendre plutôt qu'à causer des dommages."
  },
  {
    name: `Apprenti Drakomancien`,
    img: `classes/Drakomancien.png`,
    spell: ['Foudre'],
    weapons: ['Magie C'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "L’apprenti Drakomancien a une affinité particulière avec les Dragons, et particulièrement avec leurs attraits et leurs manipulations de la foudre. Souvent associé à la race des Drakeïdes, et ainsi aussi mal vu dans certaines régions, sa seule présence peut justifier certaines exactions à son encontre. Manipulant la foudre à moindre échelle, il peut créer un courant électrique dans sa paume, qu’il peut projeter sur sa cible sans grand effort. Physiquement et vestimentairement, il ressemble trait pour trait à un clerc, son armure étant plus proche de l’armure intermédiaire que légère, et son aura est plus menaçante que bienveillante, comme si la lumière salvatrice du Clerc avait été retournée pour châtier et non plus guérir."
  },
  {
    name: `Mage Noir`,
    img: `classes/necromancer.png`,
    
    weapons: ['Magie C'],
    spell: ['Miasme'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "Le Mage Noir est un praticien des arts obscurs, se penchant vers la magie noire et les forces ténébreuses. Maître de sorts impies, il tire son pouvoir des ombres, invoquant des énergies maléfiques pour atteindre ses objectifs. Les sorts du Mage Noir peuvent inclure des malédictions, des invocations démoniaques, et même des manipulations des âmes. Sa magie est souvent teintée d'une aura sinistre, et son apprentissage peut le conduire à des pactes obscurs pour accroître son pouvoir. Le Mage Noir peut être perçu comme un individu énigmatique, attiré par le pouvoir interdit et prêt à utiliser des moyens sombres pour parvenir à ses fins. Sur le champ de bataille, ses sorts peuvent semer la peur et infliger des blessures dévastatrices. En dehors du combat, le Mage Noir peut être un chercheur de connaissances interdites, un manipulateur des intrigues occultes, ou même un serviteur d'entités maléfiques."
  },
  {
    name: `Clerc`,
    img: `classes/Clerc.png`,
    weapons: ['Magie C'],
    spell: ['Soin', 'Lumière Divine'],
    mastery: ['+ 10 Énergie', '+ 5 PV'],
    desc: "Le Clerc est un serviteur dévoué de forces divines, canalisateur de la lumière et gardien des principes sacrés. Sa magie est empreinte de la bénédiction des dieux, lui conférant le pouvoir de guérir les blessures, de protéger contre les forces obscures, et même d'invoquer la colère divine sur les ennemis. Armé d'une foi inébranlable, le Clerc peut également avoir des compétences de purification, de restauration, et de résurrection. Son rôle est souvent celui d'un guérisseur sur le champ de bataille, mais il peut également être un conseiller spirituel, guidant sa communauté vers la vertu et la piété. Bien que la plupart des Clercs se consacrent aux divinités bienveillantes, certains peuvent choisir des chemins plus sombres, devenant des inquisiteurs ou des champions de divinités vengeresses. En dehors des conflits, le Clerc est souvent un membre central de la vie religieuse, dirigeant des rituels, dispensant des enseignements et fournissant des soins spirituels à ceux qui en ont besoin."
  },
]
export const avancedClasses = [
  {
    name: `Bretteur`,
    img: `classes/epeiste2.png`,
    weapons: ['Epee A'],
    spell: ['Attaque Double', 'Frappe Repoussante'],
    mastery: ['+ 20 PV'],
    desc: "Les bretteurs sont des maîtres dans l'art de manier l'épée, combinant une agilité exceptionnelle avec une expertise technique pour devenir des combattants redoutables en combat rapproché. Ces guerriers habiles se distinguent par leur style de combat élégant, rapide et acrobatique, utilisant la finesse plutôt que la force brute pour triompher de leurs adversaires."
  },
  {
    name: `Guerrier`,
    img: `classes/Warrior2.png`,
    weapons: ['Hache A'],
    mastery: ['+ 20 PV'],
    spell: ['Attaque Double', 'Opportunisme'],
    desc: "Le Guerrier a choisi de mettre ses compétences au service de l'honneur et de la protection. La hache est son arme de prédilection, maniée avec une maîtrise impressionnante, capable de fendre les armures et de terrasser ses ennemis avec force et précision. Contrairement au Brigand, le Guerrier utilise une technique de combat élaborée, combinant des mouvements stratégiques et des parades pour maximiser son efficacité au combat. Il préfère les armures lourdes, qui lui offrent une protection maximale tout en permettant une liberté de mouvement suffisante pour exécuter ses techniques complexes. Le Guerrier est souvent vu comme un pilier de la communauté, respecté pour sa bravoure et son sens de l'honneur. Il est dévoué à sa cause, qu'il s'agisse de défendre son royaume, protéger les innocents, ou combattre les forces du mal. En dehors du champ de bataille, le Guerrier est un leader naturel, capable de rallier les troupes et d'inspirer ceux qui l'entourent par son courage et sa détermination. Loyal et digne de confiance, il est prêt à tout pour défendre ceux qu'il aime et les valeurs qu'il chérit."
  },
  {
    name: `Archer d'élite`,
    img: `classes/Archer2.png`,
    spell: ['Attaque Double','Tir arcanique'],
    weapons: ['Arc A'],
    mastery: ['+ 20 PV'],
    desc: "L'Archer d'Élite est un maître incontesté dans l'art du tir à l'arc, surpassant ses pairs par sa précision et son expertise inégalées. Sa maîtrise de l'arc long ou du composite lui permet de frapper des cibles avec une précision mortelle même à des distances extrêmes. L'Archer d'Élite excelle dans la rapidité d'exécution, la discrétion et la capacité à tirer des flèches imprévisibles. En plus de ses compétences de tir exceptionnelles, il peut avoir des talents spéciaux tels que la capacité de décocher des flèches imprégnées de magie. Souvent employé dans des rôles d'éclaireur ou de tireur d'élite sur le champ de bataille, l'Archer d'Élite peut changer le cours d'une guerre avec une seule flèche bien placée. En dehors du combat, il peut être un chasseur émérite, un gardien des frontières ou un protecteur efficace contre les menaces lointaines."
  },
  {
    name: `Assassin`,
    img: `classes/thief2.png`,
    spell: ["Lame d'acide", 'Invisibilité'],
    weapons: ['Dague A'],
    mastery: ['+ 20 PV'],
    desc: "L'Assassin est une ombre mortelle, un maître de l'art de l'infiltration et de l'élimination silencieuse. Habile dans les arts de la discrétion, il excelle à se faufiler dans l'ombre, à éviter les pièges et à éliminer ses cibles avec une précision mortelle. Armé de lames empoisonnées, de dagues ou d'armes silencieuses, l'Assassin est capable de neutraliser ses ennemis sans éveiller de soupçons. Il peut aussi être un maître des déguisements et des illusions pour tromper ses adversaires. Les Assassins sont souvent employés pour des missions d'espionnage, d'assassinat politique ou de sabotage. Ils peuvent être des agents indépendants ou travailler pour des organisations obscures. En dehors de leurs activités meurtrières, les Assassins peuvent être des individus solitaires, méfiants et mystérieux, opérant dans l'ombre pour atteindre leurs objectifs."
  },
  {
    name: `Lancier`,
    img: `classes/lancier2.png`,
    weapons: ['Lance A'],
    spell: ['Attaque Dévastatrice', 'Percée'],
    mastery: ['+ 20 PV'],
    desc: "Le Lancier est un combattant spécialisé dans l'utilisation de la lance, une arme qui offre une portée étendue tout en conservant une grande maniabilité. Habile dans l'art de maintenir la distance avec ses ennemis, le Lancier excelle dans la défense de positions stratégiques et peut également être une force redoutable en attaque. Sa technique de combat implique souvent des mouvements de piétinement habiles pour transpercer les défenses adverses. En plus de la lance, certains Lanciers peuvent être équipés de boucliers pour une défense accrue. Sur le champ de bataille, le Lancier peut être un rempart impénétrable, capable de repousser les charges ennemies tout en infligeant des dégâts significatifs. En dehors du combat, le Lancier peut être un gardien des frontières, un membre d'une phalange disciplinée ou même un compétiteur dans des tournois de lance renommés."
  },
  {
    name: `Moine`,
    img: `classes/monk2.png`,
    spell: ['Attaque Double','Main de Givre'],
    weapons: ['Poing A'],
    mastery: ['+ 20 PV'],
    desc: "Le Moine est un maître martial qui allie discipline physique, spiritualité et techniques de combat raffinées. Guidé par des principes éthiques et une connexion spirituelle profonde, le Moine utilise souvent des arts martiaux uniques qui mettent l'accent sur la rapidité, l'agilité et la maîtrise de soi. Sa formation peut inclure des styles de combat à mains nues, l'utilisation d'armes traditionnelles comme le bâton ou les couteaux de moine, et même la maîtrise de techniques de guérison spirituelle. Sur le champ de bataille, le Moine est un adversaire redoutable, capable de se déplacer rapidement, d'esquiver les attaques et de délivrer des coups précis. En dehors du combat, il peut jouer le rôle d'un sage, d'un médiateur ou d'un guérisseur spirituel, utilisant ses compétences pour apporter l'harmonie et la paix à ceux qui l'entourent."
  },
  {
    name: `Mercenaire`,
    img: `classes/combattant2.png`,
    weapons: ['Masse A'],
    spell: ['Attaque Dévastatrice', 'Brise-mâchoire'],
    mastery: ['+ 20 PV'],
    desc: "Le Mercenaire est un guerrier aguerri, prêt à mettre ses compétences au service du plus offrant. Sa masse fend l'air et les boucliers avec une précision impitoyable. Maniant sa masse avec une efficacité redoutable, il s'impose sur le champ de bataille comme une force inarrêtable, capable de briser toute défense entre lui et son objectif. Sa loyauté est à vendre, et il choisit ses engagements en fonction de la récompense et du défi proposé. En dehors des combats, le Mercenaire s'entraîne rigoureusement pour maintenir son niveau d'excellence, toujours prêt à affronter les missions les plus dangereuses et les adversaires les plus redoutables. Opportuniste et pragmatique, il est prêt à tout pour atteindre ses objectifs, tout en respectant un code de conduite personnel qui lui permet de naviguer dans le monde des contrats et des alliances temporaires."
  },
  {
    name: `Pyromancien`,
    img: `classes/pyromancer2.png`,
    spell: ['Boule de Feu', 'Bolganone'],
    weapons: ['Magie A'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: " Le Pyromancien est un praticien des arts du feu, capable de manipuler les flammes avec une maîtrise exceptionnelle. Enflammant l'air autour de lui, il peut engendrer des boules de feu, des colonnes de flammes, et même contrôler le feu pour frapper ses ennemis à distance. La magie du Pyromancien est souvent spectaculaire, empreinte de puissance brute et de destruction. Certains Pyromanciens peuvent maîtriser des sorts plus complexes, tels que la création d'incendies massifs ou l'invo- cation de créatures liées au feu. Sur le champ de bataille, le Pyromancien est redoutable, infligeant des dégâts ravageurs à ses ennemis. En dehors du combat, il peut être un chercheur de connaissances interdites liées au feu, un manipulateur des éléments pour des tâches utilitaires, ou même un artisan spécialisé dans la forge magique. Bien que le feu puisse être perçu comme une force destructrice, certains Pyromanciens peuvent être motivés par la passion, la créativité ou même la protection de leur environnement."
  },
  {
    name: `Aquamancien`,
    img: `classes/aquamancien2.png`,
    spell: ['Vague', 'Soin Aquatique', 'Prison Aquatique',],
    weapons: ['Magie A'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: "L'Aquamancien est un maître des arts magiques aquatiques, capable de contrôler et de manipuler l'eau sous toutes ses formes. Grâce à des années d'étude et de pratique, il peut invoquer des tempêtes, créer des barrières protectrices d'eau et soigner ses alliés avec des eaux curatives. Relié profondément aux forces naturelles de l'eau, l'Aquamancien puise son pouvoir des rivières, des océans et des lacs sacrés, utilisant son savoir pour défendre, attaquer et restaurer l'équilibre dans le monde."
  },
  {
    name: `Cryomancien`,
    img: `classes/cryomancer2.png`,
    spell: ['Main de Givre', 'Couteau de glace'],
    weapons: ['Magie A'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: "Le Cryomancien est un maître de la magie du froid, capable de manipuler les éléments glacés pour geler ses ennemis et créer des conditions glaciales. Ses sorts peuvent inclure la création de projectiles de glace, des rafales de vent glacial, et même la formation de barrières de glace pour se protéger. Certains Cryomanciens peuvent étendre leur pouvoir pour contrôler la météo, créant des tempêtes de neige ou des blizzards. Sur le champ de bataille, le Cryomancien peut ralentir ses ennemis, créer des pièges gelés, et infliger des dommages considérables avec ses sorts de glace. En dehors du combat, il peut être un protecteur des régions froides, un expert en survie dans des environnements glaciaux, ou même un chercheur de secrets liés à la magie de la glace. Bien que son pouvoir soit souvent associé à la froideur, le Cryomancien peut avoir des motivations variées, que ce soit la recherche de connaissance, la préservation de l'équilibre naturel, ou la défense de son peuple contre les menaces glaciales."
  },
  {
    name: `Zephyr`,
    img: `classes/Zephyr2.png`,
    spell: ['Tornade', 'Vents Tranchants'],
    weapons: ['Magie A'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: "Le Zephyr est un manipulateur des vents, capable de canaliser et de diriger les courants d'air avec une habileté exceptionnelle. Sa magie est liée aux éléments atmosphériques, lui permettant de créer des bourrasques, des rafales, et même des tempêtes. Les Zephyrs peuvent influencer la vitesse du vent, altérer les trajectoires des projectiles, et même se déplacer avec une agilité surnaturelle en utilisant les courants d'air. Certains peuvent même posséder la capacité de contrôler la météo sur une petite échelle. Sur le champ de bataille, le Zephyr excelle dans la mobilité, évitant les attaques et infligeant des dégâts à distance avec des attaques éoliennes. En dehors du combat, il peut être un explorateur intrépide, un messager rapide, ou même un gardien des cieux, utilisant ses pouvoirs pour prévenir les catastrophes naturelles. Bien que certains Zephyrs puissent être considérés comme imprévisibles en raison de leur connexion avec les vents capricieux, d'autres peuvent chercher à maintenir l'équilibre naturel et à protéger les régions qu'ils considèrent comme sacrées."
  },
  {
    name: `Mage Gris`,
    img: `classes/grey-mage2.png`,
    spell: ['Boule d\'Acide', 'Invisibilité'],
    weapons: ['Magie A'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: "Le Mage Gris est un maître de la Magie Grise, une discipline enseignée par des assassins. Contrairement aux mages conventionnels, les Mages Gris utilisent leurs pouvoirs pour des actions furtives et létales, comme empoisonner à distance ou devenir invisibles pour frapper en pleine foule. Formés de manière intense et pragmatique, les Mages Gris apprennent à se prémunir contre la magie utilisée contre eux par leurs mentors. Cette méthode leur confère une résistance unique et une compréhension profonde des sorts qu'ils pourraient rencontrer. Opérant dans l'ombre, les Mages Gris acceptent la combinaison de la furtivité et de la magie, se montrant opportunistes et pragmatiques. Leur loyauté est complexe et dictée par des codes personnels, rendant ces mages imprévisibles et extrêmement dangereux."
  },
  {
    name: `Druide`,
    img: `classes/druid2.png`,
    spell: ['Immobilisation verte', 'Rocher destructeur', 'Récupération'],
    weapons: ['Magie A'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: "Le Druide est un gardien de la nature, un praticien des arts mystiques liés aux forces de la terre, de l'eau et du ciel. Sa magie est enracinée dans la connexion profonde avec les éléments naturels. Les Druides peuvent guérir, communiquer avec les animaux, et même influencer la croissance des plantes. Certains peuvent se transformer en formes animales, tandis que d'autres peuvent invoquer des esprits de la nature pour les aider. Sur le champ de bataille, le Druide peut être un guérisseur, un transformeur d'animorphe, ou un manipulateur des éléments naturels. En dehors du combat, il peut être un gardien des forêts, un protecteur de la vie sauvage, ou un conseiller spirituel. Les Druides sont souvent liés à des sociétés secrètes ou à des cultes anciens, et leur magie est imprégnée d'un profond respect pour l'équilibre naturel de la vie."
  },
  {
    name: `Chaman`,
    img: `classes/chaman2.png`,
    spell: ['Force Bestial', 'Agilité Bestial'],
    weapons: ['Magie A'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: "Le Chaman puise sa force directement dans la nature, vivant souvent en symbiose avec les animaux et les plantes. Leur magie, connue sous le nom de Magie Bestiale, utilise la nature comme un puissant catalyseur, ce qui la rend incompréhensible pour les castes classiques de magiciens. Les Chamans portent des tenues légères qui reflètent leur lien profond avec la nature. Leur apparence bestiale trahit immédiatement leur appartenance à ce groupe exclusif. En harmonie avec leur environnement, ils tirent leur puissance des ressources infinies de la nature. Leurs pouvoirs leur permettent de manipuler les forces naturelles pour se défendre, ainsi que pour invoquer des esprits animaux. Les Chamans sont respectés et parfois craints, grâce à leur capacité à canaliser la nature elle-même, faisant d'eux des protecteurs et des gardiens de l'équilibre naturel."
  },
  {
    name: `Illutionniste`,
    img: `classes/illutioniste2.png`,
    spell: ['Illusion', 'Invisibilité'],
    weapons: ['Magie A'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: "L'Illusionniste est un maître manipulateur de la réalité, capable de créer des illusions sensorielles qui trompent les sens et l'esprit. Sa magie va au-delà de simples tours de passe-passe, impliquant la création d'images, de sons et même de sensations tangibles qui peuvent induire en erreur ses observateurs. Les Illusionnistes peuvent rendre invisibles des objets, créer des copies d'eux-mêmes, ou même altérer l'apparence des environnements. Sur le champ de bataille, ils peuvent dérouter les ennemis, les poussant à attaquer des images fantômes tandis qu'eux-mêmes restent insaisissables. En dehors du combat, les Illusionnistes peuvent être des artistes renommés, des espions habiles, ou des diplomates manipulateurs. Bien que leur magie soit souvent associée à la tromperie, certains Illusionnistes peuvent utiliser leurs talents pour inspirer, divertir ou même pour des actions altruistes, démontrant que la frontière entre l'illusion et la réalité peut être complexe."
  },
  {
    name: `Drakomancien`,
    img: `classes/Drakomancien2.png`,
    spell: ['Foudre', 'Thoron'],
    weapons: ['Magie A'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: "Le Drakomancien a une affinité profonde avec les Dragons, en particulier avec leurs pouvoirs de manipulation de la foudre. Souvent associé à la race des Drakeïdes, il est parfois mal vu et même persécuté dans certaines régions. Maîtrisant la foudre à une échelle redoutable, il peut créer et projeter des éclairs avec une facilité déconcertante. Le Drakomancien ressemble à un clerc en apparence, portant une armure intermédiaire plutôt que légère. Cependant, son aura est plus menaçante que bienveillante, comme si la lumière salvatrice du Clerc avait été détournée pour châtier plutôt que guérir. Ses pouvoirs lui permettent de canaliser la foudre pour attaquer et défendre, utilisant l'énergie électrique pour terrasser ses ennemis. Le Drakomancien est respecté et craint, grâce à sa capacité à invoquer la puissance des dragons, faisant de lui un adversaire redoutable et un protecteur impitoyable de ses alliés."
  },
  {
    name: `Mage de Sang`,
    img: `classes/bloodMage.png`,
    
    weapons: ['Magie A'],
    spell: ['Sang', 'Sangsue'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: " Le Mage de Sang est un lanceur de sorts qui puise sa magie dans son propre essence vitale. Utilisant le pouvoir du sang, il peut infliger des malédictions débilitantes, absorber la force vitale de ses ennemis, et même sacrifier une partie de sa propre vie pour renforcer ses sorts. Les Mages de Sang sont souvent considérés comme des praticiens de magie noire en raison de leur utilisation de forces vitales. Sur le champ de bataille, ils peuvent être des sorciers offensifs, capables de drainer la vie de leurs ennemis tout en lançant des sorts dévastateurs. En dehors du combat, les Mages de Sang peuvent être des chercheurs de secrets occultes, des individus maudits cherchant des moyens de libérer leur malédiction, ou des praticiens de rituels sombres cherchant à atteindre une puissance supérieure. Leur magie unique les place souvent en marge de la société, suscitant à la fois fascination et méfiance."
  },
  {
    name: `Necromancien`,
    img: `classes/necromancer2.png`,
    
    weapons: ['Magie A'],
    spell: ['Miasme', 'Mort'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: "Le Nécromancien est un praticien des arts sombres, maître dans la manipulation des forces de la mort et des morts-vivants. Utilisant des sorts morbides et des rituels ténébreux, il peut évoquer des squelettes, des zombies et même des spectres pour accomplir sa volonté. Les Nécromanciens peuvent également maîtriser des sorts liés à la maladie et à la putréfaction. Sur le champ de bataille, ils commandent des armées de morts-vivants, drainent la vie de leurs ennemis, et peuvent même rechercher l'immortalité en liant leur propre existence à la mort. En dehors du combat, les Nécromanciens peuvent être des chercheurs de connaissances interdites, des chercheurs de l'au-delà, ou des individus corrompus cherchant à étendre leur pouvoir sur les âmes des défunts. Leur magie est souvent mal vue, et les Nécromanciens sont généralement craints et évités par la société."
  },
  {
    name: `Prêtre`,
    img: `classes/Clerc2.png`,
    weapons: ['Magie A'],
    spell: ['Soin', 'Lumière Divine','Nosferatu','Remède'],
    mastery: ['+ 20 Énergie', '+ 10 PV'],
    desc: "Les prêtres sont des serviteurs dévoués des puissances divines, canalisant la grâce sacrée pour guérir, protéger et purifier. Leur force réside dans leur foi inébranlable et leur capacité à invoquer les bénédictions divines pour soutenir leurs alliés tout en maudissant les forces du mal. Les prêtres peuvent varier dans leurs compétences spécifiques en fonction de la divinité à laquelle ils sont dévoués."
  },
  {
    name: `Croisé`,
    img: `classes/Croise.png`,
    weapons: ['1 Rang B, Magie C+'],
    spell: ['Lumière Divine','Sagitae'],
    mastery: ['+ 15 PV', '+ 10 Énergie'],
    desc: "Le Croisé est un guerrier dévoué, motivé par une foi inébranlable envers une cause sacrée ou une divinité. Armé de lourdes armures et de puissantes armes, le Croisé se distingue par sa loyauté, son courage et son engagement envers la justice. Sur le champ de bataille, il est le défenseur inflexible de la foi, capable de résister aux attaques ennemies tout en infligeant des dégâts considérables. Les Croisés peuvent également être dotés de pouvoirs divins, les aidant à guérir les blessures, à repousser les forces des ténèbres, et même à exorciser des entités maléfiques. En dehors du combat, le Croisé est souvent un champion de sa foi, voyageant pour répandre les enseignements sacrés, protéger les innocents et lutter contre les hérétiques ou les créatures maléfiques. Bien qu'ils puissent appartenir à des ordres religieux, les Croisés peuvent aussi être des individus agissant de manière indépendante, portant la lumière divine là où les ténèbres menacent d'envahir."
  },
  {
    name: `Chevalier Noir`,
    img: `classes/dark-knight.png`,
    weapons: ['1 Rang B, Magie C+'],
    spell: ['Miasme', 'Piques Noirs'],
    mastery: ['+ 15 PV', '+ 10 Énergie'],
    desc: "Le Chevalier Noir est un guerrier sombre et implacable, souvent lié à des forces obscures ou à des motifs sinistres. Revêtu d'une armure noire intimidante, le Chevalier Noir se distingue par son approche impitoyable du combat. Sa force physique combinée à une habileté au maniement des armes en fait un adversaire redoutable sur le champ de bataille. Contrairement au Chevalier classique, le Chevalier Noir tire son pouvoir de sources corrompues, que ce soit par la magie noire, des pactes démoniaques, ou simplement une volonté pervertie. Il peut manier des armes imprégnées de ténèbres, lancer des malédictions, et même commander des créatures des ombres. En dehors du combat, le Chevalier Noir peut être un chasseur de reliques maudites, un serviteur d'entités maléfiques, ou un mercenaire sans pitié accomplissant des tâches sombres. Sa présence est souvent source de crainte et d'hostilité, car il incarne la puissance des ténèbres dans un monde autrement éclairé."
  },
];
export const masterClasses = [
  {
    name: `Maître Epéiste`,
    img: `classes/epeiste3.png`,
    spell: ['Attaque Double', 'Frappe Repoussante', 'Fine Lame'],
    weapons: ['Epee S'],
    mastery: ['+ 40 PV' ],
    desc: "Le Maître Épéiste représente l'apogée de l'art du combat à l'épée. Grâce à des années d'entraînement intense et de perfectionnement de ses compétences, le Maître Épéiste est devenu une véritable légende parmi les guerriers. Sa maîtrise de l'épée est inégalée, et il est capable de réaliser des mouvements complexes avec une fluidité exceptionnelle. Le Maître Épéiste a transcendé les simples techniques de combat pour atteindre un niveau d'harmonie entre son esprit et son arme. Son regard perçant et sa concentration inébranlable font de lui un adversaire redoutable sur le champ de bataille. Certains Maîtres Épéistes, en plus de leurs compétences martiales, peuvent être des mentors, partageant leur sagesse et leurs enseignements avec la génération suivante d'épéistes aspirants."
  },
  {
    name: `Berserker`,
    img: `classes/Warrior3.png`,
    spell: ['Attaque Double', 'Opportunisme', 'Rage du Berserker'],
    weapons: ['Hache S'],
    mastery: ['+ 40 PV' ],
    desc: "Le Berserker incarne la fureur indomptable et la sauvagerie brutale sur le champ de bataille. Animé par une rage intérieure, le Berserker entre dans un état de transe lorsqu'il est confronté à ses ennemis, ignorant la douleur et la peur. Armé d'armes lourdes, telles que haches ou épées massives, le Berserker cherche le carnage, déferlant sur ses adversaires avec une force dévastatrice. Sa furie peut être déclenchée par la colère, l'honneur bafoué ou même la simple adrénaline du combat. Cependant, cette rage intense peut également le rendre imprudent, le poussant parfois à négliger la défense au profit de l'attaque. En dehors du champ de bataille, le Berserker peut être perçu comme une force chaotique, mais certains peuvent apprécier son sens de la loyauté et son engagement total envers la protection de ses proches."
  },
  {
    name: `Maître Archer`,
    img: `classes/Archer3.png`,
    spell: ['Attaque Double','Tir arcanique', 'Flèche Divine'],
    weapons: ['Arc S'],
    mastery: ['+ 40 PV' ],
    desc: " Le Maître Archer est un virtuose de l'art du tir à l'arc, ayant perfectionné ses compétences au-delà de la norme. Doté d'une précision exceptionnelle et d'une connaissance approfondie des arcs et des flèches, le Maître Archer excelle dans l'art de frapper ses cibles à distance avec une précision mortelle. Le Maître Archer est également capable de s'adapter à différentes situations sur le champ de bataille, que ce soit en escalade, en embuscade ou en combat à distance. En plus de ses compétences martiales, le Maître Archer peut être un expert en stratégie, utilisant son arc comme une extension de sa pensée tactique pour infliger des dégâts dévastateurs à ses ennemis."
  },
  {
    name: `Maître Assassin`,
    img: `classes/thief3.png`,
    spell: ["Lame d'acide", 'Invisibilité', 'Vif Eclair'],
    weapons: ['Dague S'],
    mastery: ['+ 40 PV' ],
    desc: "Le Maître Assassin est l'incarnation de l'ombre et de la mort silencieuse. Ayant perfectionné les arts de l'infiltration et de l'assassinat, il se fond dans les ténèbres pour atteindre sa cible sans être détecté. Doté d'une agilité exceptionnelle, le Maître Assassin excelle dans les attaques furtives, les mouvements silencieux et l'utilisation d'armes mortelles comme les dagues empoisonnées. Sa connaissance approfondie de l'anatomie humaine lui permet d'asséner des coups précis et mortels. Le Maître Assassin est également un expert en camouflage, se mêlant à la foule ou se fondant dans l'environnement pour échapper à toute détection. Bien qu'il puisse être perçu comme un agent des ombres, le Maître Assassin peut agir avec un code d'éthique, n'éliminant que ceux qu'il juge dignes de son art ou de ceux qui représentent une menace grave."
  },
  {
    name: `Grand Lancier`,
    img: `classes/lancier3.png`,
    spell: ['Attaque Dévastatrice', 'Percée', 'Fortification'],
    weapons: ['Lance S'],
    mastery: ['+ 40 PV' ],
    desc: "Le Grand Lancier est le maître incontesté de la lance, combinant une maîtrise technique exceptionnelle avec une portée dévastatrice. Doté d'une lance imposante, il excelle dans les charges dévastatrices et la création de lignes de défense infranchissables. La portée étendue de sa lance lui permet de garder les ennemis à distance, faisant de lui un adversaire redoutable sur le champ de bataille. Le Grand Lancier peut également utiliser sa lance pour repousser les assaillants, créant un périmètre de sécurité autour de lui. Certains Grand Lanciers peuvent également être formés à l'équitation, devenant des cavaliers redoutables capables de manœuvres stratégiques sur le champ de bataille. En dehors de la guerre, le Grand Lancier peut être perçu comme un gardien de la paix, prêt à défendre les frontières et à assurer la stabilité avec son habileté à manier sa lance avec une précision mortelle."
  },
  {
    name: `Grand Moine`,
    img: `classes/monk3.png`,
    spell: ['Attaque Double', 'Main de Givre','Main de feu'],
    weapons: ['Poing S'],
    mastery: ['+ 40 PV' ],
    desc: "Le Grand Moine est un maître spirituel et martial, fusionnant la sagesse spirituelle avec des compétences martiales exceptionnelles. Ayant consacré sa vie à la voie de la méditation et de l'entraînement physique, le Grand Moine incarne l'harmonie entre le corps et l'esprit. Il excelle dans les arts martiaux à mains nues, déployant des techniques de combat fluides et puissantes. La maîtrise du Grand Moine va au-delà de la simple force physique, englobant des capacités surnaturelles telles que la guérison par l'énergie intérieure, la préscience et la manipulation des énergies spirituelles. Certains Grand Moines peuvent également manier des armes exotiques ou utiliser des objets sacrés dans leur quête de justice et d'équilibre. En dehors du combat, le Grand Moine est souvent un conseiller sage, offrant des conseils spirituels et prodiguant des enseignements de vie à ceux qui recherchent la voie de l'harmonie."
  },
  {
    name: `Brise'Os`,
    img: `classes/combattant3.png`,
    weapons: ['Masse S'],
    spell: ['Attaque Dévastatrice', 'Brise-mâchoire', 'Brise-moëlle'],
    mastery: ['+ 40 PV' ],
    desc: " Le Brise-Os est un guerrier spécialisé dans le maniement d'armes contondantes, concentrant sa force brute sur la destruction des défenses adverses. Armé de masses, de marteaux ou de gourdins massifs, le Brise-Os peut pulvériser les armures, écraser les boucliers et infliger des dégâts considérables aux ennemis. Son approche axée sur la destruction des os et des protections en fait un adversaire redoutable sur le champ de bataille. En plus de sa force physique, le Brise-Os peut développer des compétences de contrôle de foule en assourdissant ses ennemis avec des impacts assourdissants. Certains Brise-Os peuvent même invoquer des séismes mineurs en frappant le sol avec une force terrifiante. En dehors du combat, le Brise-Os peut être perçu comme un artisan capable de forger des armes lourdes ou un protecteur des faibles, utilisant sa puissance pour défendre ceux qui ne peuvent se défendre."
  },
  {
    name: `Maître Pyromancien`,
    img: `classes/pyromancer3.png`,
    spell: ['Boule de Feu', 'Bolganone', 'Ragnarok', 'Météore'],
    weapons: ['Magie S'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: " Le Maître Pyromancien est un sorcier qui a atteint le sommet de la maîtrise des flammes, manipulant le feu avec une expertise incomparable. Ses sorts pyromanciens vont au-delà des simples boules de feu, embrasant le champ de bataille avec des flammes dévastatrices. Grâce à une connaissance approfondie des arts du feu, le Maître Pyromancien peut créer des tempêtes de flammes, des murs de feu impénétrables et même canaliser le pouvoir du feu pour renforcer ses propres capacités. Certains Maîtres Pyromanciens peuvent également maîtriser la métamorphose, prenant l'apparence de créatures enflammées pour intimider leurs adversaires. Cependant, avec un tel pouvoir destructeur vient également le risque de perdre le contrôle, et le Maître Pyromancien doit constamment équilibrer sa passion pour le feu avec la prudence nécessaire pour éviter des conséquences catastrophiques. En dehors du champ de bataille, le Maître Pyromancien peut être un chercheur de connaissances anciennes liées au feu ou un artisan spécialisé dans la forge des armes et armures enflammées."
  },
  {
    name: `Maître Aquamancien`,
    img: `classes/aquamancien3.png`,
    spell: ['Vague', 'Soin Aquatique', 'Prison Aquatique','Vague Déferlante'],
    weapons: ['Magie S'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: "Le Maître Aquamancien est l'ultime incarnation de la maîtrise de l'élément aquatique. Ayant atteint le sommet de son art, il commande les forces de l'eau avec une puissance inégalée. Capable d'invoquer des tsunamis, de modeler les courants océaniques et de créer des sanctuaires sous-marins, le Maître Aquamancien utilise ses pouvoirs pour influencer le monde naturel et magique. Il peut aussi communiquer avec les créatures marines, purifier des eaux corrompues, et est souvent consulté pour sa sagesse et sa connexion profonde avec les forces aquatiques."
  },
  {
    name: `Maître Cryomancien`,
    img: `classes/cryomancer3.png`,
    spell: ['Main de Givre', 'Couteau de glace', 'Foudroiment', 'Fimbulvetr'],
    weapons: ['Magie S'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: "Le Maître Cryomancien est un mage expert dans la manipulation des forces glaciales. Il a affiné son art au point de pouvoir plonger le monde dans un froid glacial et glaçant. Les sorts du Maître Cryomancien vont au-delà de simples rafales de froid, incluant la création de blizzards dévastateurs, la formation de golems de glace et même la capacité à geler le temps dans une zone spécifique. Ses compétences en cryomancie lui permettent également de ralentir ses ennemis, de créer des barrières de glace pour se protéger, et d'invoquer des armes gelées pour le combat. Le Maître Cryomancien peut également avoir la capacité de geler l'humidité de l'air pour créer des sculptures de glace complexes. Toutefois, l'utilisation excessive de cette magie peut entraîner des conditions météorologiques extrêmes et des effets collatéraux imprévus. En dehors du champ de bataille, le Maître Cryomancien peut être un gardien de terres gelées, un chercheur de secrets liés à la cryomancie, ou même un créateur d'objets magiques gelés d'une beauté glaciale."
  },
  {
    name: `Maître Zephyr`,
    img: `classes/Zephyr3.png`,
    spell: ['Tornade', 'Vents Tranchants', 'Excalidur'],
    weapons: ['Magie S'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: "Le Maître Zephyr est un sorcier spécialisé dans la maîtrise des vents et de l'air, manipulant la puissance des tempêtes avec une habileté incomparable. Sa magie de Zephyr va bien au-delà de simples bourrasques, lui permettant de générer des tornades, de contrôler la direction du vent, et même de canaliser l'énergie des tempêtes pour des attaques dévastatrices. Grâce à sa connexion profonde avec les courants d'air, le Maître Zephyr peut également se déplacer avec une agilité exceptionnelle, presque semblable à la lévitation, lui permettant de manœuvrer rapidement sur le champ de bataille. Certains Maîtres Zephyr peuvent avoir la capacité de prédire les changements météorologiques imminents et d'invoquer des éclairs puissants en utilisant l'électricité statique dans l'air. Cependant, la maîtrise de tels pouvoirs exige une compréhension subtile des flux atmosphériques et une sensibilité particulière aux changements dans la nature. En dehors du combat, le Maître Zephyr peut être un explorateur des cieux, cherchant à comprendre les mystères des vents et des nuages, ou un gardien de régions soumises à des conditions météorologiques extrêmes."
  },
  {
    name: `Maître Mage Gris`,
    img: `classes/grey-mage3.png`,
    spell: ['Boule d\'Acide', 'Invisibilité', 'Corrosion'],
    weapons: ['Magie S'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: "Le Maître Mage Gris est un expert incontesté de la Magie Grise. Sa connaissance approfondie des sorts d'assassinat et des techniques de furtivité en fait un adversaire redoutable et une autorité respectée parmi les Mages Gris. Fort d'une longue expérience sur le terrain, le Maître Mage Gris a acquis une sagesse inestimable en matière de manipulation magique et d'intrigue. En tant que leader de la guilde des Mages Gris, il guide et enseigne aux nouveaux apprentis les secrets de leur art, garantissant la pérennité de leur tradition. Sa réputation s'étend bien au-delà des frontières des guildes. Les rois et les seigneurs font appel à ses services pour des missions délicates et des assassinats politiques. Bien qu'il préfère opérer dans l'ombre, sa présence est largement ressentie dans les cercles les plus puissants de la société, où il est à la fois redouté et respecté pour ses talents et son intégrité."
  },
  {
    name: `Maître Druide`,
    img: `classes/druid3.png`,
    spell: ['Immobilisation verte', 'Rocher destructeur', 'Récupération', 'Seisme'],
    weapons: ['Magie S'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: "Le Maître Druide est un gardien de la nature et un maître des arts druidiques. Ayant atteint le sommet de sa connexion avec la terre, la faune et les éléments, le Maître Druide peut façonner la réalité elle-même. Il a le pouvoir de contrôler les plantes, de communiquer avec les animaux, et même d'invoquer des forces élémentaires pour défendre la nature. Sa capacité à se transformer en différentes formes animales lui confère une adaptabilité remarquable sur le champ de bataille, pouvant devenir une créature puissante pour attaquer ou un être insaisissable pour éviter les dangers. Les sorts du Maître Druide peuvent également guérir, régénérer la terre et maintenir l'équilibre écologique. En tant que gardien de la nature, il peut être impliqué dans des quêtes visant à protéger les écosystèmes ou à repousser des forces malveillantes qui menacent l'harmonie naturelle. En dehors du combat, le Maître Druide est souvent un sage conseiller, prodiguant des enseignements sur l'importance de la coexistence pacifique avec la nature."
  },
  {
    name: `Maître Chaman`,
    img: `classes/chaman3.png`,
    spell: ['Force Bestial', 'Agilité Bestial', 'Transformation Bestial'],
    weapons: ['Magie S'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: "Le Maître Chaman incarne la quintessence de la magie naturelle. Fort d'une profonde connexion avec la nature, il est un guide spirituel et un protecteur de l'équilibre naturel. Sa maîtrise des animaux et sa sagesse ancestrale font de lui une figure respectée et vénérée parmi les adeptes de la nature. Doté d'une expérience et d'une compréhension approfondies des mystères de la nature, le Maître Chaman guide les aspirants chamans sur le chemin de l'harmonie avec le monde naturel. En tant que leader de sa communauté, il transmet les enseignements ancestraux et veille à ce que les traditions chamaniques perdurent dans le temps. La réputation du Maître Chaman dépasse largement les frontières de sa communauté. Il est souvent consulté par les chefs de tribus, les rois et même les druides pour ses conseils avisés sur les questions liées à la nature et à la magie verte. Sa présence est synonyme de respect et de confiance, sa sagesse étant reconnue par tous ceux qui cherchent à préserver l'harmonie entre les hommes et la nature."
  },
  {
    name: `Maître Illutionniste`,
    img: `classes/illutioniste3.png`,
    spell: ['Illusion', 'Invisibilité', 'Doppelganger'],
    weapons: ['Magie S'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: "Le Maître Illusionniste est un virtuose de la manipulation de la réalité, capable de tordre les sens et l'esprit avec une maîtrise incomparable. Sa magie transcende les simples tours de passe-passe, impliquant la création d'illusions sensorielles qui peuvent induire en erreur même les esprits les plus aiguisés. Fort d'une expérience et d'une compréhension approfondies de l'illusion, le Maître Illusionniste est capable de créer des images, des sons et des sensations tangibles d'une réalisme saisissant. Sa maîtrise de la magie lui permet de rendre invisibles des objets, de créer des doubles d'eux-mêmes, ou même de altérer l'apparence des environnements avec une facilité déconcertante. Sur le champ de bataille, le Maître Illusionniste est un atout redoutable, capable de dérouter et de manipuler ses ennemis avec une habileté déconcertante. En dehors du combat, ses talents peuvent être utilisés pour une variété de fins, que ce soit comme artiste renommé, espion habile, ou diplomate manipulateur. Sa magie, bien que souvent associée à la tromperie, peut également être utilisée de manière altruiste, démontrant que la frontière entre l'illusion et la réalité peut être complexe et nuancée."
  },
  {
    name: `Maître Drakomancien`,
    img: `classes/Drakomancien3.png`,
    spell: ['Foudre', 'Thoron', 'Fulguration'],
    weapons: ['Magie S'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: "Le Maître Drakomancien est le sommet de l'art draconique, un être dont la maîtrise de la magie de la foudre et du lien avec les dragons inspire admiration et crainte. Sa présence est celle d'un être puissant, empreint d'une aura menaçante et dominante, symbolisant le pouvoir des dragons eux-mêmes. Fort d'une expérience incomparable, le Maître Drakomancien a exploré les profondeurs de la magie draconique et en a extrait une compréhension profonde et complexe. Ses connaissances des rituels anciens et des pouvoirs des dragons sont sans égal, faisant de lui une autorité incontestée dans son domaine. En tant que chef respecté de sa lignée de Drakomanciens, il guide les apprentis sur le chemin de la maîtrise, partageant ses enseignements et ses secrets avec ceux dignes de les recevoir. Son influence s'étend au-delà de sa propre lignée, ses conseils étant recherchés par les rois et les seigneurs pour des questions de stratégie militaire et de politique. La réputation du Maître Drakomancien est légendaire, sa réputation de mage draconique étant connue dans tout le royaume. Sa présence suscite à la fois respect et appréhension, sa puissance et sa maîtrise de la foudre étant vénérées par ceux qui le craignent et admirées par ceux qui le respectent."
  },
  {
    name: `Maître de Sang`,
    img: `classes/bloodMage2.png`,
    
    weapons: ['Magie S'],
    spell: ['Sang', 'Sangsue', 'Hades'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: "Le Maître de Sang est un expert dans l'art de manipuler la magie du sang. Puisant dans son essence vitale, il peut infliger des malédictions débilitantes, absorber la force vitale de ses ennemis et même sacrifier une partie de sa propre vie pour renforcer ses sorts. Fort d'une expérience et d'une compréhension approfondies des mystères du sang, le Maître de Sang est souvent marginalisé par la société en raison de la nature sombre et sinistre de sa magie. Malgré cela, il reste déterminé à explorer les arcanes de la magie noire pour atteindre une puissance supérieure. En dehors du combat, le Maître de Sang peut être un chercheur de secrets occultes, un individu maudit cherchant à se libérer de sa malédiction ou un praticien de rituels sombres cherchant à atteindre des sommets de puissance inimaginables. Sur le champ de bataille, il est un sorcier offensif redoutable, capable de drainer la vie de ses ennemis tout en lançant des sorts dévastateurs."
  },
  {
    name: `Maître Necromancien`,
    img: `classes/necromancer3.png`,
    
    weapons: ['Magie S'],
    spell: ['Miasme', 'Mort', 'Banshee'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: " Le Maître Nécromancien est un sorcier spécialisé dans la magie noire, manipulant les forces de la mort pour atteindre ses objectifs. Maître de la nécromancie, il a la capacité d'invoquer et de contrôler les morts, créant des serviteurs squelettiques ou des goules pour servir ses desseins. Ses sorts peuvent infliger des malédictions, drainer la vie de ses ennemis, et même manipuler les ombres pour semer la terreur parmi ses adversaires. Bien que souvent perçu comme sinistre, le Maître Nécromancien peut poursuivre des buts variés, de la recherche du savoir interdit à la défense de son peuple contre des menaces surnaturelles. Sur le champ de bataille, sa capacité à réanimer les morts peut inverser le cours d'une bataille, faisant de lui un adversaire redoutable. En dehors du combat, le Maître Nécromancien peut être un chercheur de secrets interdits, un gardien des frontières entre la vie et la mort, ou même un conseiller auprès de ceux qui acceptent la nature sombre de ses pouvoirs."
  },
  {
    name: `Evêque`,
    img: `classes/Clerc3.png`,
    weapons: ['Magie S'],
    spell: ['Soin', 'Lumière Divine','Nosferatu','Remède','Sagitae','Abraxas'],
    mastery: ['+ 30 Énergie', '+ 20 PV' ],
    desc: " L'Évêque est un prêtre de haut rang, investi d'une autorité ecclésiastique considérable. Au-delà de ses fonctions spirituelles, l'Évêque est doté de pouvoirs divins qui transcendent les simples pratiques religieuses. Il peut guérir les blessures, protéger contre les forces maléfiques et même infliger la colère divine à ceux qui menacent la foi. Sa connexion étroite avec la divinité lui confère également la capacité de prédire les événements futurs et de discerner le bien du mal. L'Évêque peut être un leader spirituel charismatique, guidant ses fidèles vers la vertu et la justice. Sur le champ de bataille, ses pouvoirs de guérison et de protection font de lui un soutien précieux, tandis que sa capacité à invoquer la lumière divine peut repousser les forces des ténèbres. En dehors du combat, l'Évêque peut jouer un rôle central dans la gestion des affaires religieuses et sociales de sa communauté, offrant conseils spirituels et aidant les nécessiteux."
  },
  {
    name: `Grand Croisé`,
    img: `classes/Croise2.png`,
    weapons: ['1 Rang A+, Magie A'],
    spell: ['Lumière Divine','Sagitae', 'Abraxas'],
    mastery: ['+ 30 PV', '+ 20 Énergie'],
    desc: "Le Grand Croisé est un guerrier dévoué, alliant la force martiale à une profonde foi religieuse. Portant une armure sacrée et maniant une épée bénie, le Grand Croisé est un champion de la foi prêt à défendre les valeurs sacrées. Sa mission est souvent liée à l'éradication du mal, à la protection des innocents et à la réalisation des desseins divins. Doté d'une détermination inébranlable, le Grand Croisé inspire ses alliés et incarne la vertu sur le champ de bataille. Il peut également avoir des compétences spéciales liées à la détection du mal, à la purification des lieux corrompus et à la résistance aux forces obscures. En tant que défenseur de la foi, le Grand Croisé peut être reconnu comme un symbole d'espoir et de justice. En dehors des conflits, il peut assumer un rôle de leader spirituel, encourageant la piété et guidant sa communauté vers la lumière."
  },
  {
    name: `Chevalier du Néant`,
    img: `classes/dark-knight2.png`,
    weapons: ['1 Rang A+, Magie A'],
    mastery: ['+ 30 PV', '+ 20 Énergie'],
    spell: ['Miasme', 'Piques Noirs', 'Hades'],
    desc: " Le Chevalier du Néant est un guerrier sombre, lié aux forces du chaos et du vide. Tandis que le Grand Croisé représente la lumière, le Chevalier du Néant incarne les ténèbres. Revêtu d'une armure corrompue et maniant des armes imprégnées d'énergie du néant, il est un serviteur des forces obscures. Les pouvoirs du Chevalier du Néant incluent la capacité d'invoquer des ombres pour obscurcir la vision de ses ennemis, de corrompre l'énergie vitale pour se guérir et d'invoquer des créatures du néant pour le servir. Son combat est souvent empreint de stratégies sournoises, utilisant les ténèbres pour se déplacer furtivement et surprendre ses adversaires. Le Chevalier du Néant peut être perçu comme un antihéros, cherchant à imposer sa vision chaotique du monde ou à se venger d'injustices passées. En dehors du champ de bataille, il peut être un individu solitaire, cherchant des artefacts anciens ou des connaissances interdites pour renforcer son pouvoir."
  },
];