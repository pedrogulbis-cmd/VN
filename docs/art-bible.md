# Bible graphique

## Direction

Manhwa dark fantasy contemporain. Encrage net, aplats cel-shading deux tons plus spéculaires, ombres colorées jamais grises. Lumière de bord froide venant systématiquement du **haut-droite** ; ombre de contact bleu nuit en **bas-gauche**. Cette direction lumineuse est identique sur les 552 sprites livrés — c'est ce qui les rend cohérents entre eux.

## Palette

| Rôle | Hex | Usage |
|---|---|---|
| Encre | `#04060E` | contours, fonds extrêmes |
| Nuit | `#0B1024` | fond d'interface, décors nocturnes |
| Violet | `#2B1A3E` | Faille, clinique, intériorité |
| Cyan | `#4FD8E8` | énergie de la Faille, Kaël, indices |
| Or | `#D9A441` | Bureau, Noam, interface, serments tenus |
| Sang | `#7A1E28` | rupture, danger, Garde |
| Papier | `#E9E7E1` | texte |

Un personnage = une couleur d'accent, jamais partagée. Kaël cyan, Noam or sur rouge sombre, Ysée vert sur violet, Damien or sur ivoire, Théo cyan pâle sur ardoise.

## Sprites

- Format **720 × 1080**, WebP alpha réel, cadrage mi-cuisse, personnage centré.
- **24 expressions paramétriques** définies dans `tools/spec.py` : chacune modifie simultanément sourcil intérieur, sourcil extérieur, angle du sourcil, ouverture des paupières, direction du regard (x et y), courbure et ouverture de la bouche, inclinaison de la tête, rougeur, larmes, sueur. Aucune expression n'est une simple variation de bouche.
- **3 poses** : neutre de conversation, fermée/défensive, dynamique engagée.
- **États** : normal, blessé, trempé, traversé par l'énergie de la Faille.
- **16 expressions de base** pour tous ; **8 expressions romantiques supplémentaires** (affection contenue, proximité, jalousie maîtrisée, peur de perdre, soulagement, rupture, épilogue positif, épilogue négatif) réservées aux deux personnages romançables.

## Décors

**1920 × 1080**, WebP sans alpha. Zone basse centrale laissée lisible pour la boîte de dialogue, zone médiane dégagée pour l'incrustation des sprites. Dix-sept décors couvrant huit lieux plus leurs variantes d'heure et d'événement (aube, nuit, coupure de courant, embrasement, hall évacué).

## Illustrations CG

**1920 × 1080**. Six moments : serment partagé sur le pont, aveu sous la pluie, révélation de l'Ancre, embrasement du Grand hall, Ilan Rompu devant un miroir, aube sans serment. Chacune est déverrouillée par une branche distincte et consultable dans la galerie.

## Statut honnête des visuels livrés

Les 575 images du dossier `assets/` sont des **placeholders procéduraux** dessinés par `tools/gen_art.py` avec Pillow. Ils sont réellement dessinés, cohérents entre eux, détourés avec un canal alpha valide, et le jeu ne présente jamais d'image cassée. Ils ne prétendent pas être des illustrations manhwa finales.

`docs/asset.md` fournit, pour **chacun des 597 fichiers livrés**, un prompt de production autonome incluant le nom de fichier exact, les dimensions, la contrainte de transparence, les invariants du personnage et les contraintes négatives. Remplacer un fichier par une illustration produite depuis ce prompt ne demande aucune modification de code : les chemins sont identiques.
