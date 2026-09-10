# Tests

## Lancer

```bash
npm run validate        # validation statique et logique (aucune dépendance)
npm run test:explore    # 4000 parties aléatoires, vérifie que chaque fin tombe
npm install             # facultatif : installe jsdom
npm run test:integration# démarre réellement le jeu dans un DOM et joue une partie
npm test                # validate + explore
```

## `tests/validate.mjs` — 44 vérifications

1. Les huit fichiers de données sont du JSON valide.
2. Aucun identifiant de scène en double ; chaque scène a un chapitre, du texte et une suite.
3. Les 233 transitions pointent toutes vers une scène existante.
4. Les 86 scènes sont atteignables depuis le début ; les 8 fins sont atteignables ; aucune fin déclarée n'est orpheline.
5. Identifiants de choix uniques, choix chronométrés dotés d'un repli valide, aucun choix sans suite.
6. Chaque indice, déduction, promesse, souvenir, limite, objet, entrée de codex et succès référencé possède un libellé et une fiche.
7. Toutes les conditions n'emploient que des clauses connues et référencent des entités existantes ; les trois opérateurs `all` / `any` / `not` sont réellement utilisés.
8. Chaque décor, musique, ambiance, bruitage, CG et locuteur référencé existe.
9. Chaque référence de sprite se résout, repli d'expression compris, vers un fichier réellement présent.
10. Les 552 sprites, 17 décors, 6 CG et 17 pistes audio déclarés existent sur le disque.
11. Ni `index.html` ni `assets.json` n'emploient de chemin absolu — compatibilité `/nom-du-depot/`.
12. **Exécution réelle du moteur** : 14 cas d'évaluation de conditions, anti-farming, plafond de gain par chapitre, bornes de relation, déclenchement des conséquences différées à l'échéance et pas avant.
13. **Sauvegardes** : rejet d'un JSON invalide, d'une sauvegarde incomplète, d'une version future ; migration v1 → v3 convertissant l'ancienne jauge d'affection en relation multidimensionnelle ; aller-retour export/import fidèle.
14. **Six parcours simulés** avec des stratégies différentes, chacun jusqu'à une fin, sans boucle ni impasse.
15. Volumétrie du cahier des charges : scènes, chapitres, choix, choix conditionnels, conséquences différées, personnages, décors, CG, fins.

## `tests/explore.mjs`

4000 parties aléatoires. Résultat obtenu :

```
   125 e1_deux_ombres          547 e3_main_creuse         1397 e5_ce_qui_reste
    33 e2_loi_et_homme         397 e4_grand_serment         103 e6_aube_sans_serment
   439 bad_nom_efface          959 bad_faille_ne_pardonne
```

Les huit fins tombent. Aucune n'est décorative.

## `tests/integration.mjs`

Démarre le vrai `index.html` dans jsdom, **avec une URL simulée sous `/les-serments-de-la-faille/`** pour reproduire GitHub Pages. Vérifie : chargement des données, écran-titre, création de personnage, résolution des chemins sous sous-répertoire, affichage du décor et du sprite, avance du texte, application réelle des effets d'un choix, ouverture des 14 panneaux, sauvegarde/chargement/export/import, réglages d'accessibilité, repli de sprite sur une combinaison inexistante, puis une partie complète jouée jusqu'à l'écran de fin (60 scènes, 249 actions).

## Ce qui n'est pas couvert

- Rendu visuel réel : jsdom n'applique pas les CSS. Les mises en page mobile et bureau ont été écrites mais **ne sont pas validées par un test automatique**.
- Lecture audio réelle : les tests neutralisent l'audio. Les fichiers OGG ont été générés et sont valides, mais leur restitution n'a pas été écoutée.
- Navigateurs réels : aucun test n'a été exécuté dans Chrome, Firefox ou Safari.
- Lecteurs d'écran : la structure ARIA est en place, aucun test avec NVDA ou VoiceOver n'a été fait.
