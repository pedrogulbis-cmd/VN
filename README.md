# Les Serments de la Faille

Visual novel narratif francophone. Enquête, fantasy urbaine, romance Boys' Love adulte, tension psychologique. Entièrement statique : HTML5, CSS3, JavaScript modules ES, données JSON locales. Aucun serveur, aucune dépendance, aucun CDN, aucune API.

> *Un serment tenu coûte. Un serment brisé coûte davantage.*

Il y a dix-neuf ans, une Faille s'est ouverte au-dessus de Vaurance. Depuis, toute parole donnée près d'elle devient contraignante : la briser fait perdre d'abord les extrémités, puis les souvenirs, puis le nom. Ilan Vasseur lit les serments pour le Bureau et n'en a jamais prêté un seul. La nuit où un homme meurt sur le pont en murmurant qu'on lui a « pris le nom », il commence à tirer sur un fil qui tient toute la ville — et qui mène à son frère disparu six ans plus tôt.

---

## Jouer tout de suite

Le jeu utilise les modules ES et `fetch`. Il **ne fonctionne pas** en ouvrant `index.html` directement depuis le disque (`file://`) : les navigateurs bloquent le chargement des données. Un serveur local suffit.

```bash
cd les-serments-de-la-faille
python3 -m http.server 8000     # ou : npx serve .
```

Puis ouvrir <http://localhost:8000>.

Si vous ouvrez malgré tout le fichier en `file://`, le jeu affiche un message d'erreur explicite avec la commande à lancer, plutôt qu'un écran noir.

## Publier sur GitHub Pages

1. Créez un dépôt et poussez le contenu de ce dossier sur `main`.
2. *Settings → Pages → Build and deployment → Source* : **GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` valide le scénario puis publie automatiquement à chaque poussée sur `main`.

Le jeu est prévu pour fonctionner sous `https://<compte>.github.io/<nom-du-depot>/` : tous les chemins sont relatifs et résolus à l'exécution à partir de l'emplacement réel de `index.html`. Aucune configuration à changer, quel que soit le nom du dépôt. Ce point est vérifié par un test automatique et a été validé en servant réellement le jeu depuis un sous-répertoire.

## Commandes

```bash
npm run validate         # 44 vérifications sur le scénario, les assets et le moteur
npm run test:explore     # 4000 parties aléatoires : vérifie que les 8 fins tombent
npm install              # facultatif, installe jsdom
npm run test:integration # démarre le jeu dans un DOM et joue une partie complète
npm test                 # validate + explore
npm run build:data       # régénère characters.json, assets.json, asset.md et les docs
npm run build:assets     # régénère les 575 images et les 17 pistes audio (Python + ffmpeg)
```

Aucune dépendance n'est nécessaire pour jouer, ni pour `validate` et `explore`.

## Structure

```
index.html                  coquille du jeu, HUD, panneaux, ARIA
css/    main · mobile · desktop · animations · accessibility
js/     app · engine · state · condition-parser · save-manager
        ui-manager · scene-renderer · character-renderer
        asset-manager · audio-manager · accessibility-manager
        achievement-manager · consequence-manager · event-bus
data/   chapters · characters · assets · endings · achievements
        codex · labels · relationships · story/ (7 fichiers de scènes)
assets/ characters (552) · backgrounds (17) · cg (6) · audio (17) · ui (5)
docs/   concept · synopsis · chronologie · personnages · enquête
        carte de ramification · matrice des conséquences · drapeaux
        fins · bible graphique · asset.md · tests
tests/  validate.mjs · explore.mjs · integration.mjs
tools/  spec.py · gen_art.py · gen_audio.py · gen_data.py · gen_docs.py · gen_ui.py
```

## Ce que le jeu contient

| | |
|---|---|
| Scènes écrites | **86** — prologue, 5 chapitres, épilogue variable |
| Choix | **144**, dont 28 conditionnels, 22 irréversibles, 8 déductions, 3 chronométrés, 4 secrets |
| Conséquences différées | **9**, déclenchées 1 à 3 chapitres plus tard |
| Fins | **8** — 2 romantiques, coopération, opposition, vérité, 1 secrète, 2 sombres |
| Personnages majeurs | **5**, dont 2 romançables |
| Enquête | 54 indices, 9 déductions, 8 fausses pistes |
| Promesses traçables | 7, avec états *faite / tenue / brisée* |
| Sprites | **552** — 5 personnages × tenues × 3 poses × 24 expressions × états |
| Décors | 17 · **CG** 6 · **musiques** 8 · **ambiances** 3 · **bruitages** 6 |

### Systèmes

- **Sept statistiques** plafonnées, à rendements décroissants au-delà de 7, avec anti-farming par identifiant de récompense et plafond de gain par chapitre. Chacune a une contrepartie narrative explicite au-delà de 8.
- **Relations à sept dimensions** indépendantes par personnage : affinité, confiance, méfiance, respect, tension, vulnérabilité partagée, attraction. Plus les souvenirs marquants, les limites franchies, les promesses et les secrets partagés.
- **Mémoire narrative** : tons employés avec chaque personnage, scènes vues, répliques déjà lues, décisions horodatées dans un journal consultable.
- **Conditions imbriquées** `all` / `any` / `not` sur statistiques, relations, drapeaux, indices, déductions, promesses, routes, factions, scènes vues et données persistantes.
- **Sauvegardes** : automatique, rapide, cinq emplacements, export et import JSON validés, migration de format v1 → v3, mémoire persistante pour la nouvelle partie enrichie.
- **Accessibilité** : taille de texte 80–180 %, police alternative très lisible, contraste renforcé, réduction des animations, suppression des transitions, blocage des effets de flash, désactivation des choix chronométrés, confirmation des choix critiques, vitesse de texte, mode automatique, avance rapide du texte déjà lu, région live ARIA, navigation clavier complète, cibles tactiles de 48 px minimum, respect de `prefers-reduced-motion`.
- **Mode immersif ou transparent** : au choix, les prérequis d'un choix verrouillé s'affichent sous forme d'indication narrative ou de valeurs exactes.

## État honnête du livrable

**Ce qui est écrit, exécuté et vérifié automatiquement :** l'intégralité du scénario, du moteur, de l'interface, des données et des tests. `npm test` passe : 44 vérifications, aucune erreur, aucun avertissement. Les 86 scènes sont atteignables, les 8 fins tombent sur 4000 parties aléatoires, une partie complète a été jouée de bout en bout dans un DOM simulé sous une URL de sous-répertoire, et le jeu a été réellement servi en HTTP depuis un sous-dossier avec vérification de chaque type d'asset.

**Ce qui est un remplacement documenté :** les 575 images et les 17 pistes audio. Les images sont des **placeholders procéduraux** dessinés par `tools/gen_art.py` avec Pillow — réellement dessinées, cohérentes entre elles, avec un canal alpha valide, jamais cassées à l'écran, mais ce ne sont pas des illustrations manhwa finales. Les pistes audio sont synthétisées par `tools/gen_audio.py` avec numpy, bouclées sans clic, mais ce ne sont pas des compositions.

`docs/asset.md` fournit pour **chacun des 597 fichiers livrés** un prompt de production autonome, avec le nom de fichier exact, les dimensions, la contrainte de transparence, les invariants du personnage et les contraintes négatives. Remplacer un fichier ne demande aucune modification de code.

**Ce qui n'a pas été testé :** le rendu visuel réel (jsdom n'applique pas les CSS, les mises en page mobile et bureau ne sont pas validées automatiquement), la restitution audio, les navigateurs réels, et les lecteurs d'écran. Voir `docs/testing.md`.

## Contenu

Romance entre adultes, aucun contenu sexuel explicite. Thèmes présents : deuil, disparition d'un proche, perte de mémoire et d'identité, sacrifice, dilemme utilitariste avec morts assumées, détention arbitraire. Les fins sombres décrivent la dissolution progressive d'une personne. Tous les personnages représentés sont des adultes.

## Licence

MIT — voir `LICENSE`.
