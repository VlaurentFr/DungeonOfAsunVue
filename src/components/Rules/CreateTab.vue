<template>
  <section class="tab-pane">
    <!-- Étape 1 : Le Sang -->
    <div class="card card-low">
      <div class="step-header">
        <span class="step-num">1</span>
        <div>
          <h3>Étape 1 : Le Sang (Origines &amp; 11 Peuples d'Asun)</h3>
          <p class="text-sm">
            Chaque peuple confère un bonus d'Attribut direct et un Trait Inné unique.
          </p>
        </div>
      </div>
      <div class="grid-3">
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Valm</h4>
            <span class="badge-sm">+1 au choix</span>
          </div>
          <span class="italic-subtitle">« Ceux des terres habitées » <br />(Humains)</span>
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Conquérant</strong>
            <p class="text-sm">Avantage aux jets de résistance contre la Corruption de Neien.</p>
          </div>
        </div>
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Urielar</h4>
            <span class="badge-sm">+1 INT</span>
          </div>
          <span class="italic-subtitle">« Enfants d'Uriel » <br />(Hauts-Elfes)</span>
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Éloquence</strong>
            <p class="text-sm">
              Avantage lors de toute tentative de persuasion, diplomatie ou négociation.
            </p>
          </div>
        </div>
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Lythari</h4>
            <span class="badge-sm secondary">+1 DEX</span>
          </div>
          <span class="italic-subtitle"
            >« Peuple des feuilles portées par le vent » <br />(Elfes des Bois)</span
          >
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Œil de Faucon</strong>
            <p class="text-sm">
              Avantage permanent sur tous les jets de Perception visuelle et pistage.
            </p>
          </div>
        </div>
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Virelith</h4>
            <span class="badge-sm">+1 FOR</span>
          </div>
          <span class="italic-subtitle">« Peuple de la pierre obscure » <br />(Elfes Noir)</span>
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Nyctalope</strong>
            <p class="text-sm">
              Vision parfaite dans le noir absolu sans source de lumière requise.
            </p>
          </div>
        </div>
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Umiyori</h4>
            <span class="badge-sm secondary">+1 DEX</span>
          </div>
          <span class="italic-subtitle">« Lys des Mers » <br />(Elfes des Mers)</span>
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Souffle des Marées</strong>
            <p class="text-sm">Temps d'apnée multiplié par 2 et aisance aquatique totale.</p>
          </div>
        </div>
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Morndal</h4>
            <span class="badge-sm">+1 FOR</span>
          </div>
          <span class="italic-subtitle"
            >« Habitants des hautes pierres » <br />(Nains des Montagnes)</span
          >
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Alcoolisme &amp; Robustesse</strong>
            <p class="text-sm">
              Avantage aux jets de constitution contre le poison, toxines et alcool fort.
            </p>
          </div>
        </div>
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Gnome de Tirwar</h4>
            <span class="badge-sm secondary">+1 SAG</span>
          </div>
          <span class="italic-subtitle">« Les Rats de Métal » <br />(Gnomes)</span>
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Réparation</strong>
            <p class="text-sm">
              Les kits de réparation restaurent 2 fois plus de Points de Qualité (PQ).
            </p>
          </div>
        </div>
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Kovraks</h4>
            <span class="badge-sm">+1 FOR</span>
          </div>
          <span class="italic-subtitle">« Guerriers de Koven» <br />(Orcs)</span>
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Résistance Orc</strong>
            <p class="text-sm">
              Avantage sur tout jet d'intimidation et tolérance accrue aux blessures critiques.
            </p>
          </div>
        </div>
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Dra'Zuun</h4>
            <span class="badge-sm secondary">+1 SAG</span>
          </div>
          <span class="italic-subtitle">« Dragons Errants » <br />(Drakéides)</span>
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Volonté du Dragon</strong>
            <p class="text-sm">
              Avantage absolu contre la peur, la terreur spectrale et les charmes mentaux.
            </p>
          </div>
        </div>
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Vhaerith</h4>
            <span class="badge-sm">+1 INT</span>
          </div>
          <span class="italic-subtitle">« Les Cornues » <br />(Tieffelin)</span>
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Être de Magie</strong>
            <p class="text-sm">
              Double les effets numériques de toutes les potions et élixirs alchimiques ingérés.
            </p>
          </div>
        </div>
        <div class="card card-container">
          <div class="flex-between">
            <h4 class="title-md">Fenghou</h4>
            <span class="badge-sm secondary">+1 DEX</span>
          </div>
          <span class="italic-subtitle">« Singe du Vent » <br />(Homme Singe)</span>
          <div class="sub-box mt-3">
            <strong class="text-xs block">Trait : Escalade Agile</strong>
            <p class="text-sm">
              Avantage sur tous les jets d'acrobatie, varappe et équilibre précaire.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Étape 2 : L'Âme -->
    <div class="card card-low mt-8">
      <div class="step-header">
        <span class="step-num">2</span>
        <div>
          <h3>Étape 2 : L'Âme (Répartition des 25 Points)</h3>
          <p class="text-sm">Distribution tactique entre FOR, DEX, INT et SAG.</p>
        </div>
      </div>
      <div class="grid-3">
        <div class="card card-container">
          <span class="label text-primary block mb-1">Règles de Répartition</span>
          <ul class="stack-y text-sm">
            <li>
              • Répartissez exactement <strong>25 points</strong> entre les 4 caractéristiques.
            </li>
            <li>• Puis ajoutez votre bonus de Sang (Raciale)</li>
            <li>• Score initial minimum : <strong>1</strong> par attribut.</li>
            <li>
              • Score initial maximum à la création : <strong>10</strong>. (hors bonus de Sang)
            </li>
          </ul>
        </div>
        <div class="card card-container">
          <span class="label text-secondary block mb-1">Plafonds Légaux</span>
          <ul class="stack-y text-sm">
            <li>• Plafond brut absolu : <strong>12</strong> (sans modificateur magique).</li>
            <li>• Plafond absolu tout bonus confondu : <strong>16</strong>.</li>
          </ul>
        </div>
        <div class="card card-container">
          <span class="label block mb-1">Gains en Progression</span>
          <p class="text-sm">
            Vous gagnez <strong class="text-primary">+1 point d'Attribut libre</strong> à chaque
            passage aux Rangs de Maîtrise d'arme majeurs : <strong>B, S et H</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Étape 3 : L'Acier -->
    <div class="card card-low mt-8">
      <div class="step-header">
        <span class="step-num">3</span>
        <div>
          <h3>Étape 3 : L'Acier (Sélection des Maîtrises)</h3>
          <p class="text-sm">
            À la création, le personnage choisit :
            <strong class="text-primary">2 maîtrises au Rang D</strong> et
            <strong class="text-primary">1 maîtrise au Rang C</strong>. Les autres démarrent au Rang
            E.
          </p>
        </div>
      </div>
      <div class="grid-tags">
        <div class="tag-box">Épée</div>
        <div class="tag-box">Hache</div>
        <div class="tag-box">Lance</div>
        <div class="tag-box">Masse</div>
        <div class="tag-box">Arc</div>
        <div class="tag-box">Dague</div>
        <div class="tag-box">Poing</div>
        <div class="tag-box">Magie</div>
      </div>
      <div class="text-sm mt-8">
        Le niveau de maitrise vous octroie des Point de Compétences (PC) ou Point de Magie (PM) à
        dépenser dans l'arbres de compétences (ou de magie si s'il provient de la maitrise magique)
        comme suivant :
        <strong class="text-primary">1 PC par Rang supérieur ou égale à C </strong> à l'exception du
        rang M qui en donne 2
      </div>
    </div>

    <!-- Étape 4 : Le Corps -->
    <div class="card card-low mt-8">
      <div class="step-header">
        <span class="step-num">4</span>
        <div>
          <h3>Étape 4 : Le Corps (Formules des PV &amp; PE)</h3>
          <p class="text-sm">Calcul strict de la résistance physique et de la réserve de sorts.</p>
        </div>
      </div>
      <div class="grid-2">
        <div class="card card-container">
          <div class="stack-y">
            <span class="title-md">Points de Vie (PV)</span>
            <div class="code-box">
              <code class="text-primary font-bold"
                >PV = [FOR + DEX] + 10 + (20 × Rangs &gt; C)</code
              >
            </div>
            <p class="text-sm">
              On prend en compte le <strong>Rang de maîtrise le plus élevé</strong> du personnage :
            </p>
            <div class="grid-5-sm text-center text-xs">
              <div class="sub-box"><strong>B</strong><br />+20 PV</div>
              <div class="sub-box"><strong>A</strong><br />+40 PV</div>
              <div class="sub-box"><strong>S</strong><br />+60 PV</div>
              <div class="sub-box"><strong>M</strong><br />+80 PV</div>
              <div class="sub-box text-primary"><strong>H</strong><br />+100 PV</div>
            </div>
          </div>
        </div>
        <div class="card card-container">
          <div class="stack-y">
            <span class="title-md">Points d'Énergie (PE)</span>
            <div class="code-box">
              <code class="text-secondary font-bold">PE = [INT + SAG] × 2</code>
            </div>
            <p class="text-sm">
              Les PE alimentent les sorts magiques, les techniques de combat martiales et les
              manœuvres extraordinaires. Sans PE, le personnage est épuisé et ne peut plus incanter.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Étape 5 : La Vie -->
    <div class="card card-low mt-8">
      <div class="step-header">
        <span class="step-num">5</span>
        <div>
          <h3>Étape 5 : La Vie (12 Dons &amp; 8 Handicaps)</h3>
          <p class="text-sm">
            Personnalisez votre aventurier avec 1 Don initial. Choisir un Handicap permet d'octroyer
            un Don supplémentaire. Au rang A et M vous pouvez obtenir 1 Don supplémentaire sans
            Handicap
          </p>
        </div>
      </div>
      <!-- Dons -->
      <div class="mb-8">
        <h4 class="title-md text-primary mb-4">Les Dons Majeurs</h4>
        <div class="grid-3">
          <div class="card card-container">
            <strong class="text-sm block">Robustesse Épique</strong
            ><span class="text-xs">+10 PV Max permanents.<br />(Requis: Aucun)</span>
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Bras de Fer</strong
            ><span class="text-xs"
              >+2 aux dégâts de corps-à-corps utilisant FOR.<br />(Requis: FOR 6+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Indomptable</strong
            ><span class="text-xs"
              >1 fois par combat, ignore une attaque fatale et reste à 1 PV.<br />(Requis: FOR
              6+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Porteur de Tourmente</strong
            ><span class="text-xs"
              >Permet de manier une arme lourde à deux mains avec une seule main, permettant de
              porter un bouclier.<br />(Requis: FOR 8+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Esprit Analytique</strong
            ><span class="text-xs"
              >Avantage sur la détection des pièges et mécanismes d'Asun.<br />(Requis: INT
              6+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Surchauffe Runique</strong
            ><span class="text-xs"
              >Sacrifier 5 PV pour ajouter +1d6 de dégâts magiques à ton prochain sort.<br />(Requis:
              INT 7+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Contre-Sort</strong
            ><span class="text-xs"
              >Utilise ton action pour tenter de dissiper ou dévier un sortilège lancé par un ennemi
              à vue.<br />(Requis: INT 8+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Attaque en Puissance</strong
            ><span class="text-xs"
              >Subit -2 au toucher pour infliger +4 aux dégâts physiques.<br />(Requis: Aucun)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Volonté de Fer</strong
            ><span class="text-xs"
              >Bonus de +3 pour résister aux effets de peur, de folie ou de possession.<br />(Requis:
              SAG 6+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Sixième Sens</strong
            ><span class="text-xs"
              >Jet de Perception se fait automatiquement avec un bonus de +2.<br />(Requis: SAG
              7+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Guérisseur Pragmatique</strong
            ><span class="text-xs"
              >Lorsque vous utilisez n’importe qu’elle soins (sauf repos), vous lancez deux fois
              l’effet. <br />(Requis: SAG 7+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Pas de Chat</strong
            ><span class="text-xs"
              >Avantage sur le déplacement silencieux et l'escalade légère.<br />(Requis: DEX
              6+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Aisance des mouvements</strong
            ><span class="text-xs"
              >Suppression des malus de Dextérité des Armures.<br />(Requis: DEX 8+)</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Chanceux</strong
            ><span class="text-xs"
              >Un 2 au d20 est aussi compté comme une Réussite Héroïque.<br />(Requis: DEX 9+)</span
            >
          </div>
        </div>
      </div>
      <!-- Handicaps -->
      <div>
        <h4 class="title-md text-error mb-4">Les Handicaps Sombres</h4>
        <div class="grid-4">
          <div class="card card-container">
            <strong class="text-sm block">Chétif</strong
            ><span class="text-xs">-10 PV Max permanents.</span>
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Lent d'esprit</strong
            ><span class="text-xs">-4 PE Max et désavantage aux énigmes.</span>
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Boiteux</strong
            ><span class="text-xs">Vitesse réduite de moitié, fuite difficile.</span>
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Téméraire</strong
            ><span class="text-xs">Ne peut pas refuser un défi en duel.</span>
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Phobique</strong
            ><span class="text-xs"
              >Désavantage en présence de son angoisse (araignées, feu, sang).</span
            >
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Maladroit</strong
            ><span class="text-xs">Un 19 au d20 est aussi compté comme Échec Sombre.</span>
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Esprit Poreux</strong
            ><span class="text-xs">+1 point de corruption supplémentaire subi.</span>
          </div>
          <div class="card card-container">
            <strong class="text-sm block">Arrogant</strong
            ><span class="text-xs"
              >Désavantage lors des tentatives d'apaisement ou de diplomatie humble.</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Étape 6 : Le Passé -->
    <div class="card card-low mt-8">
      <div class="step-header">
        <span class="step-num">6</span>
        <div>
          <h3>Étape 6 : Le Passé (Métiers &amp; Antécédents)</h3>
          <p class="text-sm">
            Chaque métier dote l'aventurier d'une compétence d'expertise.<br />
            Libre à vous de proposez d'autres métiers et de négocier l'avantage donnée par ce
            dernier avec votre MJ
          </p>
        </div>
      </div>
      <div class="grid-5-sm">
        <div class="card card-container">
          <strong class="text-sm block">Chasseur</strong
          ><span class="text-xs">Pistage &amp; piégeage en milieu hostile</span>
        </div>
        <div class="card card-container">
          <strong class="text-sm block">Garde</strong
          ><span class="text-xs">Vigilance &amp; détection d'embuscades</span>
        </div>
        <div class="card card-container">
          <strong class="text-sm block">Mercenaire</strong
          ><span class="text-xs">Connaissance des tactiques de guerre</span>
        </div>
        <div class="card card-container">
          <strong class="text-sm block">Voleur</strong
          ><span class="text-xs">Crochetage &amp; marché noir urbain</span>
        </div>
        <div class="card card-container">
          <strong class="text-sm block">Marchand</strong
          ><span class="text-xs">Estimation des reliques &amp; négoce</span>
        </div>
        <div class="card card-container">
          <strong class="text-sm block">Paladin Déchu</strong
          ><span class="text-xs">Résistance aux spectres &amp; hérésie</span>
        </div>
        <div class="card card-container">
          <strong class="text-sm block">Herboriste</strong
          ><span class="text-xs">Confection de remèdes &amp; cataplasmes</span>
        </div>
        <div class="card card-container">
          <strong class="text-sm block">Marin</strong
          ><span class="text-xs">Navigation fluviale souterraine &amp; nœuds</span>
        </div>
        <div class="card card-container">
          <strong class="text-sm block">Érudit</strong
          ><span class="text-xs">Déchiffrage d'anciens parchemins d'Asun</span>
        </div>
        <div class="card card-container">
          <strong class="text-sm block">Occultiste</strong
          ><span class="text-xs">Compréhension des rituels de Neien</span>
        </div>
      </div>
    </div>
  </section>
</template>
