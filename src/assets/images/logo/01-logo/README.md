# Logo Dungeon of Asun

Kit complet du logo, généré depuis le fichier vectoriel d'origine (`_sources/DoA.svg`). Les tracés sont identiques à l'original : seules les couleurs et la composition des formes changent.

## Les trois formes

| Forme | Usage |
| --- | --- |
| `logo-dungeon-of-asun-horizontal-*` | Forme principale : en-tête de site, couverture du livre, affiches, signature |
| `logo-dungeon-of-asun-vertical-*` | Espaces carrés ou hauts : dos de boîte, kakémono, slide de fin, visuel carré |
| `symbole-dungeon-of-asun-*` | Emblème de Nein seul : avatar, favicon, dos de cartes, sceau, marque-page |

La forme verticale (emblème au-dessus du nom) n'existait pas dans les fichiers d'origine : elle a été composée pour ce kit.

## Quelle version utiliser

| Version | Usage |
| --- | --- |
| `couleur` | Version principale à l'écran, sur fond sombre (nuit #1d2945 ou #0f141c) : cœur en braise #e5785f, lettres et étoiles en #eef1f6 |
| `couleur-fond-clair` | Sur fond clair (papier, #f3f5f1) : cœur en braise #a3352a, lettres et étoiles en encre #16202c |
| `encre` | Monochrome encre #16202c, sur fond clair. Version la plus sûre en petite taille |
| `blanc` | Monochrome blanc : sur fond sombre, sur illustration ou photo avec un aplat sombre |
| `braise` | Monochrome braise #a3352a : impression une couleur, tampon, usage décoratif sur fond clair |
| `noir` | Monochrome noir : gravure, découpe, impression noir et blanc |

Le symbole n'a pas de version `braise` : sa version `couleur-fond-clair` est déjà entièrement en braise.

## Web (`web/`)

- `svg/` : format à privilégier sur le site (net à toutes les tailles, léger).
- `png/` : fond transparent, par hauteur (horizontal 48, 96, 200, 400 px ; vertical 96, 200, 400, 800 px ; symbole 64 à 512 px). Prendre le double de la taille affichée pour les écrans Retina.
- `png/logo-dungeon-of-asun-fond-nuit-1200x630.png` : visuel de partage (Open Graph, aperçu de lien sur les réseaux).
- `png/logo-dungeon-of-asun-vertical-fond-nuit-1200px.png` : visuel carré (publication, couverture de profil).
- `png/avatar-dungeon-of-asun-nuit-800px.png` et `avatar-dungeon-of-asun-clair-800px.png` : photo de profil carrée (Discord, Instagram, pages de financement participatif).
- `favicon/` : `favicon.ico` (16/32/48), `favicon.svg` (passe en braise clair quand le navigateur est en mode sombre), PNG 16 à 512, `apple-touch-icon-180.png` sur fond nuit.

## Print (`print/`)

- `pdf-cmjn/` et `eps-cmjn/` : vectoriels en CMJN, à envoyer à l'imprimeur (livre, cartes, boîte, goodies).
- `pdf-rvb/` : vectoriels RVB pour Word, Canva, documents bureautiques.
- `png-300dpi/` : logo horizontal à 80 mm de large, logo vertical à 60 mm de large et symbole à 40 mm de haut, 300 dpi, pour les outils qui n'acceptent pas le vectoriel.

Les versions `couleur` et `blanc` contiennent du blanc : sur fond blanc elles paraissent vides, c'est normal. Elles se posent sur un aplat sombre. En print, le blanc correspond au papier (aucune encre).

### Valeurs CMJN utilisées

| Couleur | RVB | CMJN |
| --- | --- | --- |
| Braise (fond clair) | #a3352a | C0 M68 J74 N36 |
| Braise nuit (fond sombre) | #e5785f | C0 M48 J58 N10 |
| Encre | #16202c | C50 M27 J0 N83 |
| Noir | #000000 | N100 |

Conversion calculée, pas encore validée sur épreuve : demander un BAT papier à l'imprimeur au premier tirage. Si un Pantone est choisi ensuite, mettre à jour ces valeurs.

## Règles d'usage (design system)

- Fonds de référence : nuit #0f141c ou #1d2945 à l'écran, pierre claire #f3f5f1 sur papier. Un support est entièrement clair ou entièrement sombre, jamais un mélange des deux.
- Taille minimale : logo horizontal 160 px de large à l'écran (32 mm en print), sinon passer au symbole.
- Zone de protection : la hauteur du « O » de OF tout autour du logo.
- L'emblème du cœur représente Nein, le dieu trahi : ne pas l'utiliser comme simple décoration.
- Les étoiles du logo gardent toujours la couleur des lettres.
- Ne pas déformer, recolorer, ombrer ni poser sur une illustration chargée sans aplat.
