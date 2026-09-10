# asset.md — inventaire complet et prompts de production AAA

Ce fichier liste **chaque fichier réellement présent** dans `/assets`. 
Tous les visuels livrés sont des **placeholders procéduraux** dessinés par `tools/gen_art.py` : ils sont cohérents, détourés et jamais cassés, mais ils ne prétendent pas être des illustrations finales.

Pour chaque fichier : le nom exact à conserver, les dimensions, la transparence, et un prompt autonome utilisable dans un générateur d'images ou comme brief d'illustrateur.

## Style directeur commun

> Illustration manhwa dark fantasy contemporaine haut de gamme, encrage net, ombres colorées, lumière de bord froide venant du haut-droite, palette bleu nuit `#141C33`, violet `#38214C`, cyan `#4FD8E8`, rouge sombre `#3A0E16`, or `#D9A441`. Rendu peinture numérique cel-shading 2 tons + spéculaires, pas de line-art tremblant. Cadrage cinématographique, atmosphère nocturne urbaine.

## Fiches personnages immuables

### Kaël Ravier (`kael`)
- Âge : 29 ans (adulte). Rôle : Marcheur de Faille, contrebandier de serments.
- Morphologie : longiligne — visage ovale anguleux, mâchoire nette.
- Cheveux `#1A2340` (mèches `#2E3E6B`, mèche signature `#4FD8E8`), yeux `#4FD8E8`, carnation `#C98F63` / ombre `#A9704A`.
- Manteau `#141C33` / `#22304F`, accent `#4FD8E8`, liseré `#8FA3C8`.
- Tenues : **default** — manteau long bleu nuit, col relevé, écharpe cyan usée ; **combat** — veste courte sanglée, avant-bras bandés, harnais de fioles.
- **Ne doit jamais changer** : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche.

### Noam Sardou (`noam`)
- Âge : 32 ans (adulte). Rôle : Capitaine de la Garde des Serments.
- Morphologie : large d'épaules — visage carré, pommettes hautes.
- Cheveux `#5A1E22` (mèches `#8A3A38`, mèche signature `#D9A441`), yeux `#D9A441`, carnation `#E8C3A0` / ombre `#C79A76`.
- Manteau `#3A0E16` / `#5E1A24`, accent `#D9A441`, liseré `#E0C98A`.
- Tenues : **default** — uniforme de la Garde, épaulières dorées, gorgerin gravé ; **civil** — chemise sombre ouverte, bretelles, sans insigne.
- **Ne doit jamais changer** : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche.

### Ysée Marchand (`ysee`)
- Âge : 34 ans (adulte). Rôle : Médecin des Rompus.
- Morphologie : fine, dos droit — visage losange, menton fin.
- Cheveux `#2A1436` (mèches `#4A2A5C`, mèche signature `#7BE0A8`), yeux `#7BE0A8`, carnation `#8A5A3C` / ombre `#6B4229`.
- Manteau `#38214C` / `#523070`, accent `#7BE0A8`, liseré `#C7B0DC`.
- Tenues : **default** — blouse violette sanglée, gants courts, sacoche de fioles.
- **Ne doit jamais changer** : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite.

### Damien Vaugrise-Loret (`damien`)
- Âge : 41 ans (adulte). Rôle : Chancelier du Bureau des Serments.
- Morphologie : droit, immobile — visage allongé, traits secs.
- Cheveux `#D8D2C4` (mèches `#F0EBE0`, mèche signature `#D9A441`), yeux `#C9B06A`, carnation `#EBD3BC` / ombre `#C6A98F`.
- Manteau `#F2EEE4` / `#FFFFFF`, accent `#D9A441`, liseré `#8C7A4A`.
- Tenues : **default** — manteau de chancelier ivoire, chaîne d'office, gants blancs.
- **Ne doit jamais changer** : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert.

### Théo Vasseur (`theo`)
- Âge : 30 ans (adulte). Rôle : l'Ancre de la Faille.
- Morphologie : amaigri — visage ovale doux, cernes marqués.
- Cheveux `#DCEAF2` (mèches `#FFFFFF`, mèche signature `#8FE7FF`), yeux `#B9F2FF`, carnation `#DCC9C4` / ombre `#B39C99`.
- Manteau `#20323F` / `#31505F`, accent `#8FE7FF`, liseré `#9FBFCC`.
- Tenues : **default** — robe d'ancre grise, coutures lumineuses, pieds nus ; **civil** — pull élimé et veste d'archiviste, tenue d'avant la Faille.
- **Ne doit jamais changer** : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille.

## Inventaire fichier par fichier

### `assets/characters/character_kael_default_neutral_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_calm_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression neutre, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_calm_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_calm_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression neutre, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_calm_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_worried_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression inquiet, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_worried_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_worried_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression inquiet, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_worried_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_wary_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression méfiant, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_wary_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_wary_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression méfiant, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_wary_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_angry_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression en colère, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_angry_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_angry_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression en colère, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_angry_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_shocked_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression choqué, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_shocked_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_shocked_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression choqué, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_shocked_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_determined_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression déterminé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_determined_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_determined_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression déterminé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_determined_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_vulnerable_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression vulnérable, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_vulnerable_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_vulnerable_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression vulnérable, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_vulnerable_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_exhausted_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression épuisé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_exhausted_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_exhausted_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression épuisé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_exhausted_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_affection_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression affection contenue, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : affection contenue — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_affection_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_closeness_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression proximité émotionnelle, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : proximité émotionnelle — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_closeness_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_jealousy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression jalousie maîtrisée, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : jalousie maîtrisée — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_jealousy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_fear_of_loss_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression peur de perdre le protagoniste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : peur de perdre le protagoniste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_fear_of_loss_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_relief_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression soulagement, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : soulagement — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_relief_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_breakup_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression rupture, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : rupture — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_breakup_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_epilogue_good_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression épilogue positif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : épilogue positif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_epilogue_good_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_neutral_epilogue_bad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression épilogue négatif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose neutre de conversation. Expression : épilogue négatif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_neutral_epilogue_bad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_calm_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression neutre, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_calm_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_calm_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression neutre, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_calm_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_worried_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression inquiet, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_worried_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_worried_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression inquiet, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_worried_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_wary_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression méfiant, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_wary_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_wary_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression méfiant, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_wary_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_angry_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression en colère, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_angry_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_angry_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression en colère, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_angry_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_shocked_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression choqué, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_shocked_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_shocked_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression choqué, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_shocked_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_determined_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression déterminé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_determined_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_determined_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression déterminé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_determined_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_vulnerable_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression vulnérable, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_vulnerable_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_vulnerable_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression vulnérable, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_vulnerable_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_exhausted_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression épuisé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_exhausted_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_exhausted_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression épuisé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_exhausted_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_affection_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression affection contenue, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : affection contenue — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_affection_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_closeness_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression proximité émotionnelle, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : proximité émotionnelle — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_closeness_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_jealousy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression jalousie maîtrisée, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : jalousie maîtrisée — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_jealousy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_fear_of_loss_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression peur de perdre le protagoniste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : peur de perdre le protagoniste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_fear_of_loss_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_relief_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression soulagement, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : soulagement — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_relief_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_breakup_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression rupture, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : rupture — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_breakup_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_epilogue_good_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression épilogue positif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : épilogue positif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_epilogue_good_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_defensive_epilogue_bad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression épilogue négatif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose fermée, défensive. Expression : épilogue négatif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_defensive_epilogue_bad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_calm_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression neutre, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_calm_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_calm_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression neutre, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_calm_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_worried_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression inquiet, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_worried_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_worried_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression inquiet, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_worried_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_wary_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression méfiant, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_wary_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_wary_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression méfiant, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_wary_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_angry_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression en colère, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_angry_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_angry_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression en colère, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_angry_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_shocked_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression choqué, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_shocked_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_shocked_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression choqué, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_shocked_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_determined_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression déterminé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_determined_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_determined_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression déterminé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_determined_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_vulnerable_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression vulnérable, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_vulnerable_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_vulnerable_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression vulnérable, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_vulnerable_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_exhausted_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression épuisé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_exhausted_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_exhausted_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression épuisé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_exhausted_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_affection_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression affection contenue, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : affection contenue — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_affection_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_closeness_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression proximité émotionnelle, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : proximité émotionnelle — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_closeness_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_jealousy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression jalousie maîtrisée, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : jalousie maîtrisée — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_jealousy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_fear_of_loss_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression peur de perdre le protagoniste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : peur de perdre le protagoniste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_fear_of_loss_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_relief_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression soulagement, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : soulagement — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_relief_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_breakup_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression rupture, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : rupture — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_breakup_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_epilogue_good_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression épilogue positif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : épilogue positif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_epilogue_good_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_default_dynamic_epilogue_bad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression épilogue négatif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « default » : manteau long bleu nuit, col relevé, écharpe cyan usée. Pose dynamique, engagée. Expression : épilogue négatif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_default_dynamic_epilogue_bad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_neutral_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_neutral_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_neutral_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_neutral_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_neutral_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_neutral_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_neutral_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_neutral_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_neutral_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_neutral_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_neutral_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_neutral_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_neutral_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_neutral_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_neutral_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose neutre de conversation, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_neutral_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_defensive_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_defensive_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_defensive_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_defensive_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_defensive_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_defensive_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_defensive_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_defensive_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_defensive_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_defensive_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_defensive_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_defensive_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_defensive_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_defensive_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_defensive_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose fermée, défensive, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_defensive_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_dynamic_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_dynamic_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_dynamic_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_dynamic_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_dynamic_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_dynamic_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_dynamic_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_dynamic_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_dynamic_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_dynamic_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_dynamic_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_dynamic_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_dynamic_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_dynamic_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_kael_combat_dynamic_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël Ravier, pose dynamique, engagée, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Kaël Ravier, 29 ans, homme adulte — longiligne, visage ovale anguleux, mâchoire nette, cheveux #1A2340 avec mèche signature #4FD8E8, yeux #4FD8E8, carnation #C98F63. Tenue « combat » : veste courte sanglée, avant-bras bandés, harnais de fioles. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #4FD8E8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_kael_combat_dynamic_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_calm_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression neutre, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_calm_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_calm_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression neutre, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_calm_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_worried_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression inquiet, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_worried_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_worried_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression inquiet, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_worried_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_wary_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression méfiant, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_wary_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_wary_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression méfiant, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_wary_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_angry_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression en colère, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_angry_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_angry_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression en colère, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_angry_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_shocked_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression choqué, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_shocked_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_shocked_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression choqué, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_shocked_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_determined_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression déterminé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_determined_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_determined_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression déterminé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_determined_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_vulnerable_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression vulnérable, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_vulnerable_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_vulnerable_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression vulnérable, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_vulnerable_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_exhausted_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression épuisé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_exhausted_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_exhausted_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression épuisé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_exhausted_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_affection_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression affection contenue, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : affection contenue — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_affection_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_closeness_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression proximité émotionnelle, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : proximité émotionnelle — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_closeness_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_jealousy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression jalousie maîtrisée, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : jalousie maîtrisée — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_jealousy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_fear_of_loss_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression peur de perdre le protagoniste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : peur de perdre le protagoniste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_fear_of_loss_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_relief_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression soulagement, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : soulagement — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_relief_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_breakup_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression rupture, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : rupture — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_breakup_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_epilogue_good_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression épilogue positif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : épilogue positif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_epilogue_good_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_neutral_epilogue_bad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression épilogue négatif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose neutre de conversation. Expression : épilogue négatif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_neutral_epilogue_bad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_calm_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression neutre, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_calm_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_calm_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression neutre, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_calm_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_worried_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression inquiet, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_worried_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_worried_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression inquiet, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_worried_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_wary_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression méfiant, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_wary_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_wary_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression méfiant, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_wary_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_angry_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression en colère, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_angry_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_angry_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression en colère, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_angry_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_shocked_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression choqué, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_shocked_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_shocked_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression choqué, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_shocked_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_determined_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression déterminé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_determined_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_determined_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression déterminé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_determined_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_vulnerable_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression vulnérable, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_vulnerable_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_vulnerable_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression vulnérable, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_vulnerable_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_exhausted_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression épuisé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_exhausted_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_exhausted_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression épuisé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_exhausted_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_affection_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression affection contenue, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : affection contenue — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_affection_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_closeness_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression proximité émotionnelle, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : proximité émotionnelle — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_closeness_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_jealousy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression jalousie maîtrisée, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : jalousie maîtrisée — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_jealousy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_fear_of_loss_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression peur de perdre le protagoniste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : peur de perdre le protagoniste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_fear_of_loss_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_relief_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression soulagement, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : soulagement — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_relief_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_breakup_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression rupture, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : rupture — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_breakup_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_epilogue_good_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression épilogue positif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : épilogue positif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_epilogue_good_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_defensive_epilogue_bad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression épilogue négatif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose fermée, défensive. Expression : épilogue négatif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_defensive_epilogue_bad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_calm_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression neutre, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_calm_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_calm_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression neutre, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_calm_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_worried_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression inquiet, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_worried_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_worried_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression inquiet, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_worried_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_wary_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression méfiant, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_wary_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_wary_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression méfiant, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_wary_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_angry_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression en colère, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_angry_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_angry_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression en colère, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_angry_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_shocked_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression choqué, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_shocked_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_shocked_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression choqué, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_shocked_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_determined_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression déterminé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_determined_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_determined_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression déterminé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_determined_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_vulnerable_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression vulnérable, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_vulnerable_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_vulnerable_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression vulnérable, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_vulnerable_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_exhausted_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression épuisé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_exhausted_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_exhausted_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression épuisé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_exhausted_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_affection_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression affection contenue, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : affection contenue — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_affection_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_closeness_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression proximité émotionnelle, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : proximité émotionnelle — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_closeness_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_jealousy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression jalousie maîtrisée, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : jalousie maîtrisée — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_jealousy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_fear_of_loss_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression peur de perdre le protagoniste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : peur de perdre le protagoniste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_fear_of_loss_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_relief_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression soulagement, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : soulagement — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_relief_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_breakup_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression rupture, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : rupture — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_breakup_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_epilogue_good_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression épilogue positif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : épilogue positif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_epilogue_good_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_default_dynamic_epilogue_bad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression épilogue négatif, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « default » : uniforme de la Garde, épaulières dorées, gorgerin gravé. Pose dynamique, engagée. Expression : épilogue négatif — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_default_dynamic_epilogue_bad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_neutral_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_neutral_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_neutral_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_neutral_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_neutral_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_neutral_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_neutral_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_neutral_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_neutral_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_neutral_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_neutral_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_neutral_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_neutral_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_neutral_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_neutral_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose neutre de conversation, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_neutral_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_defensive_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_defensive_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_defensive_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_defensive_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_defensive_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_defensive_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_defensive_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_defensive_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_defensive_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_defensive_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_defensive_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_defensive_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_defensive_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_defensive_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_defensive_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose fermée, défensive, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_defensive_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_dynamic_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_dynamic_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_dynamic_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_dynamic_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_dynamic_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_dynamic_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_dynamic_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_dynamic_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_dynamic_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_dynamic_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_dynamic_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_dynamic_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_dynamic_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_dynamic_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_noam_civil_dynamic_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Noam Sardou, pose dynamique, engagée, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Noam Sardou, 32 ans, homme adulte — large d'épaules, visage carré, pommettes hautes, cheveux #5A1E22 avec mèche signature #D9A441, yeux #D9A441, carnation #E8C3A0. Tenue « civil » : chemise sombre ouverte, bretelles, sans insigne. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_noam_civil_dynamic_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_calm_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression neutre, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_calm_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_worried_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression inquiet, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_worried_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_wary_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression méfiant, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_wary_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_angry_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression en colère, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_angry_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_shocked_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression choqué, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_shocked_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_determined_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression déterminé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_determined_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_vulnerable_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression vulnérable, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_vulnerable_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_neutral_exhausted_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose neutre de conversation, expression épuisé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_neutral_exhausted_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_calm_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression neutre, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_calm_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_worried_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression inquiet, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_worried_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_wary_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression méfiant, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_wary_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_angry_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression en colère, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_angry_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_shocked_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression choqué, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_shocked_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_determined_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression déterminé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_determined_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_vulnerable_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression vulnérable, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_vulnerable_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_defensive_exhausted_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose fermée, défensive, expression épuisé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_defensive_exhausted_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_calm_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression neutre, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_calm_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_worried_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression inquiet, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_worried_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_wary_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression méfiant, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_wary_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_angry_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression en colère, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_angry_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_shocked_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression choqué, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_shocked_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_determined_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression déterminé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_determined_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_vulnerable_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression vulnérable, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_vulnerable_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_ysee_default_dynamic_exhausted_wet.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Ysée Marchand, pose dynamique, engagée, expression épuisé, trempé par la pluie.
- Prompt AAA :
  > Sprite de visual novel manhwa, Ysée Marchand, 34 ans, femme adulte — fine, dos droit, visage losange, menton fin, cheveux #2A1436 avec mèche signature #7BE0A8, yeux #7BE0A8, carnation #8A5A3C. Tenue « default » : blouse violette sanglée, gants courts, sacoche de fioles. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : trempé par la pluie. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #7BE0A8 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_ysee_default_dynamic_exhausted_wet.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_calm_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression neutre, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_calm_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_worried_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression inquiet, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_worried_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_wary_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression méfiant, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_wary_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_angry_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression en colère, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_angry_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_shocked_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression choqué, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_shocked_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_determined_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression déterminé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_determined_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_vulnerable_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression vulnérable, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_vulnerable_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_neutral_exhausted_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose neutre de conversation, expression épuisé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_neutral_exhausted_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_calm_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression neutre, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_calm_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_worried_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression inquiet, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_worried_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_wary_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression méfiant, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_wary_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_angry_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression en colère, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_angry_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_shocked_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression choqué, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_shocked_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_determined_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression déterminé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_determined_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_vulnerable_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression vulnérable, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_vulnerable_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_defensive_exhausted_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose fermée, défensive, expression épuisé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_defensive_exhausted_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_calm_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression neutre, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_calm_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_worried_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression inquiet, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_worried_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_wary_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression méfiant, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_wary_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_angry_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression en colère, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_angry_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_shocked_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression choqué, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_shocked_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_determined_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression déterminé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_determined_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_vulnerable_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression vulnérable, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_vulnerable_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_damien_default_dynamic_exhausted_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Damien Vaugrise-Loret, pose dynamique, engagée, expression épuisé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Damien Vaugrise-Loret, 41 ans, homme adulte — droit, immobile, visage allongé, traits secs, cheveux #D8D2C4 avec mèche signature #D9A441, yeux #C9B06A, carnation #EBD3BC. Tenue « default » : manteau de chancelier ivoire, chaîne d'office, gants blancs. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #D9A441 venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_damien_default_dynamic_exhausted_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_calm_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression neutre, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_calm_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_calm_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression neutre, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_calm_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_worried_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression inquiet, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_worried_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_worried_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression inquiet, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_worried_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_wary_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression méfiant, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_wary_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_wary_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression méfiant, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_wary_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_angry_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression en colère, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_angry_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_angry_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression en colère, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_angry_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_shocked_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression choqué, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_shocked_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_shocked_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression choqué, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_shocked_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_determined_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression déterminé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_determined_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_determined_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression déterminé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_determined_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_vulnerable_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression vulnérable, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_vulnerable_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_vulnerable_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression vulnérable, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_vulnerable_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_exhausted_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression épuisé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_exhausted_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_neutral_exhausted_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression épuisé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_neutral_exhausted_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_calm_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression neutre, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_calm_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_calm_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression neutre, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_calm_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_worried_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression inquiet, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_worried_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_worried_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression inquiet, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_worried_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_wary_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression méfiant, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_wary_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_wary_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression méfiant, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_wary_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_angry_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression en colère, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_angry_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_angry_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression en colère, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_angry_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_shocked_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression choqué, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_shocked_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_shocked_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression choqué, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_shocked_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_determined_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression déterminé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_determined_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_determined_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression déterminé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_determined_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_vulnerable_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression vulnérable, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_vulnerable_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_vulnerable_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression vulnérable, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_vulnerable_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_exhausted_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression épuisé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_exhausted_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_defensive_exhausted_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression épuisé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_defensive_exhausted_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_calm_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression neutre, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_calm_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_calm_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression neutre, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_calm_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_smile_soft_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression sourire discret, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : sourire discret — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_smile_soft_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_happy_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression heureux, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : heureux — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_happy_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_amused_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression amusé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : amusé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_amused_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_tender_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression tendre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : tendre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_tender_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_flustered_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression gêné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : gêné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_flustered_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_sad_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression triste, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : triste — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_sad_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_worried_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression inquiet, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_worried_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_worried_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression inquiet, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_worried_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_wary_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression méfiant, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_wary_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_wary_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression méfiant, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_wary_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_angry_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression en colère, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_angry_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_angry_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression en colère, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_angry_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_surprised_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression surpris, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : surpris — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_surprised_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_shocked_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression choqué, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_shocked_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_shocked_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression choqué, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_shocked_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_determined_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression déterminé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_determined_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_determined_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression déterminé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_determined_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_vulnerable_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression vulnérable, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_vulnerable_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_vulnerable_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression vulnérable, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_vulnerable_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_avert_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression regard détourné, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : regard détourné — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_avert_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_exhausted_aura.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression épuisé, traversé par l'énergie de la Faille.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : traversé par l'énergie de la Faille. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_exhausted_aura.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_default_dynamic_exhausted_injured.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression épuisé, blessé, bandages et sang séché.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « default » : robe d'ancre grise, coutures lumineuses, pieds nus. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : blessé, bandages et sang séché. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_default_dynamic_exhausted_injured.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_neutral_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose neutre de conversation. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_neutral_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_neutral_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose neutre de conversation. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_neutral_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_neutral_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose neutre de conversation. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_neutral_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_neutral_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose neutre de conversation. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_neutral_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_neutral_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose neutre de conversation. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_neutral_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_neutral_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose neutre de conversation. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_neutral_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_neutral_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose neutre de conversation. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_neutral_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_neutral_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose neutre de conversation, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose neutre de conversation. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_neutral_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_defensive_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose fermée, défensive. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_defensive_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_defensive_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose fermée, défensive. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_defensive_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_defensive_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose fermée, défensive. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_defensive_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_defensive_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose fermée, défensive. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_defensive_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_defensive_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose fermée, défensive. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_defensive_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_defensive_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose fermée, défensive. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_defensive_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_defensive_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose fermée, défensive. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_defensive_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_defensive_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose fermée, défensive, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose fermée, défensive. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_defensive_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_dynamic_calm_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression neutre, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose dynamique, engagée. Expression : neutre — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_dynamic_calm_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_dynamic_worried_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression inquiet, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose dynamique, engagée. Expression : inquiet — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_dynamic_worried_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_dynamic_wary_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression méfiant, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose dynamique, engagée. Expression : méfiant — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_dynamic_wary_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_dynamic_angry_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression en colère, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose dynamique, engagée. Expression : en colère — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_dynamic_angry_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_dynamic_shocked_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression choqué, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose dynamique, engagée. Expression : choqué — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_dynamic_shocked_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_dynamic_determined_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression déterminé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose dynamique, engagée. Expression : déterminé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_dynamic_determined_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_dynamic_vulnerable_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression vulnérable, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose dynamique, engagée. Expression : vulnérable — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_dynamic_vulnerable_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/characters/character_theo_civil_dynamic_exhausted_normal.webp`
- Dimensions : 720×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Théo Vasseur, pose dynamique, engagée, expression épuisé, état normal.
- Prompt AAA :
  > Sprite de visual novel manhwa, Théo Vasseur, 30 ans, homme adulte — amaigri, visage ovale doux, cernes marqués, cheveux #DCEAF2 avec mèche signature #8FE7FF, yeux #B9F2FF, carnation #DCC9C4. Tenue « civil » : pull élimé et veste d'archiviste, tenue d'avant la Faille. Pose dynamique, engagée. Expression : épuisé — sourcils, paupières, direction du regard, bouche et inclinaison de tête cohérents entre eux. État : état normal. Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, lumière de bord #8FE7FF venant du haut-droite, ombre cel bleu nuit en bas-gauche. Élément immuable : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille. Sortie 720×1080 px, PNG-32 ou WebP avec canal alpha réel, nommé `character_theo_civil_dynamic_exhausted_normal.webp`. Utiliser la character sheet canonique comme image de référence pour garantir un visage identique. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_pont_confluence_night.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Pont de la Confluence, nuit
- Prompt AAA :
  > Décor de visual novel, Pont de la Confluence, nuit. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_pont_confluence_night.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_pont_confluence_dawn.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Pont de la Confluence, aube
- Prompt AAA :
  > Décor de visual novel, Pont de la Confluence, aube. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_pont_confluence_dawn.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_archives_bureau.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Salle des archives du Bureau
- Prompt AAA :
  > Décor de visual novel, Salle des archives du Bureau. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_archives_bureau.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_archives_bureau_dark.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Archives du Bureau, coupure de courant
- Prompt AAA :
  > Décor de visual novel, Archives du Bureau, coupure de courant. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_archives_bureau_dark.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_grand_hall_bureau.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Grand hall du Bureau des Serments
- Prompt AAA :
  > Décor de visual novel, Grand hall du Bureau des Serments. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_grand_hall_bureau.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_quai_rompus_night.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Quai des Rompus, nuit
- Prompt AAA :
  > Décor de visual novel, Quai des Rompus, nuit. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_quai_rompus_night.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_quai_rompus_dawn.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Quai des Rompus, aube
- Prompt AAA :
  > Décor de visual novel, Quai des Rompus, aube. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_quai_rompus_dawn.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_clinique_ysee.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Clinique d'Ysée, sous-sol
- Prompt AAA :
  > Décor de visual novel, Clinique d'Ysée, sous-sol. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_clinique_ysee.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_appartement_ilan.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Appartement d'Ilan
- Prompt AAA :
  > Décor de visual novel, Appartement d'Ilan. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_appartement_ilan.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_ruelle_pluie.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Ruelle de la Basse-Ville sous la pluie
- Prompt AAA :
  > Décor de visual novel, Ruelle de la Basse-Ville sous la pluie. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_ruelle_pluie.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_toit_orage.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Toit du Bureau, orage
- Prompt AAA :
  > Décor de visual novel, Toit du Bureau, orage. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_toit_orage.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_marche_serments.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Marché noir des serments
- Prompt AAA :
  > Décor de visual novel, Marché noir des serments. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_marche_serments.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_coeur_faille.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Cœur de la Faille
- Prompt AAA :
  > Décor de visual novel, Cœur de la Faille. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_coeur_faille.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_chambre_ancre.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Chambre de l'Ancre
- Prompt AAA :
  > Décor de visual novel, Chambre de l'Ancre. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_chambre_ancre.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_faille_embrasee.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Cœur de la Faille embrasé
- Prompt AAA :
  > Décor de visual novel, Cœur de la Faille embrasé. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_faille_embrasee.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_hall_vide.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Grand hall évacué
- Prompt AAA :
  > Décor de visual novel, Grand hall évacué. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_hall_vide.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/backgrounds/bg_noir.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Écran noir narratif
- Prompt AAA :
  > Décor de visual novel, Écran noir narratif. Peinture numérique manhwa dark fantasy urbain, perspective large sans personnage, profondeur atmosphérique, lumières pratiques (néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée dégagée pour l'incrustation des sprites. Sortie 1920×1080 px, WebP qualité 90, sans transparence, nommé `bg_noir.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/cg/cg_kael_serment_partage.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Kaël tient le poignet d'Ilan au-dessus du garde-corps ; un fil de lumière cyan relie leurs avant-bras, la pluie s'immobilise autour d'eux.
- Prompt AAA :
  > Illustration CG pleine page de visual novel : Kaël tient le poignet d'Ilan au-dessus du garde-corps ; un fil de lumière cyan relie leurs avant-bras, la pluie s'immobilise autour d'eux. Composition cinématographique en plan large, contre-jour coloré, ombres portées longues, détail des mains et des regards, aucune nudité, personnages explicitement adultes. Palette bleu nuit / cyan / or. Sortie 1920×1080 px, WebP qualité 92, sans transparence, nommé `cg_kael_serment_partage.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/cg/cg_noam_aveu_pluie.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Noam, tête nue, uniforme dégrafé, tend son insigne à Ilan sous une averse dorée par les lampadaires.
- Prompt AAA :
  > Illustration CG pleine page de visual novel : Noam, tête nue, uniforme dégrafé, tend son insigne à Ilan sous une averse dorée par les lampadaires. Composition cinématographique en plan large, contre-jour coloré, ombres portées longues, détail des mains et des regards, aucune nudité, personnages explicitement adultes. Palette bleu nuit / cyan / or. Sortie 1920×1080 px, WebP qualité 92, sans transparence, nommé `cg_noam_aveu_pluie.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/cg/cg_theo_revelation_ancre.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Théo flotte au centre d'un anneau de lumière, les veines cyan courant sur tout son corps, Ilan à genoux sous lui.
- Prompt AAA :
  > Illustration CG pleine page de visual novel : Théo flotte au centre d'un anneau de lumière, les veines cyan courant sur tout son corps, Ilan à genoux sous lui. Composition cinématographique en plan large, contre-jour coloré, ombres portées longues, détail des mains et des regards, aucune nudité, personnages explicitement adultes. Palette bleu nuit / cyan / or. Sortie 1920×1080 px, WebP qualité 92, sans transparence, nommé `cg_theo_revelation_ancre.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/cg/cg_grand_serment.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Damien lève les bras au centre du hall, sept cents fils dorés convergent vers lui, la foule agenouillée.
- Prompt AAA :
  > Illustration CG pleine page de visual novel : Damien lève les bras au centre du hall, sept cents fils dorés convergent vers lui, la foule agenouillée. Composition cinématographique en plan large, contre-jour coloré, ombres portées longues, détail des mains et des regards, aucune nudité, personnages explicitement adultes. Palette bleu nuit / cyan / or. Sortie 1920×1080 px, WebP qualité 92, sans transparence, nommé `cg_grand_serment.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/cg/cg_ilan_rompu.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : Ilan vu de dos face à un miroir brisé où son reflet perd ses traits, lettres de son nom se détachant en cendres.
- Prompt AAA :
  > Illustration CG pleine page de visual novel : Ilan vu de dos face à un miroir brisé où son reflet perd ses traits, lettres de son nom se détachant en cendres. Composition cinématographique en plan large, contre-jour coloré, ombres portées longues, détail des mains et des regards, aucune nudité, personnages explicitement adultes. Palette bleu nuit / cyan / or. Sortie 1920×1080 px, WebP qualité 92, sans transparence, nommé `cg_ilan_rompu.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/cg/cg_aube_sans_serment.webp`
- Dimensions : 1920×1080 px
- Transparence : non
- Statut livré : placeholder-procedural
- Texte alternatif : La Faille refermée en cicatrice lumineuse au-dessus de la ville à l'aube, silhouettes sur le pont, aucun fil de lumière.
- Prompt AAA :
  > Illustration CG pleine page de visual novel : La Faille refermée en cicatrice lumineuse au-dessus de la ville à l'aube, silhouettes sur le pont, aucun fil de lumière. Composition cinématographique en plan large, contre-jour coloré, ombres portées longues, détail des mains et des regards, aucune nudité, personnages explicitement adultes. Palette bleu nuit / cyan / or. Sortie 1920×1080 px, WebP qualité 92, sans transparence, nommé `cg_aube_sans_serment.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/audio/music_menu.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Thème du menu : nappe froide, arpège cyan, lent
- Prompt AAA :
  > Piste audio libre de droits, Thème du menu : nappe froide, arpège cyan, lent. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `music_menu.ogg`.

### `assets/audio/music_calm.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Thème calme : piano feutré, tenue grave
- Prompt AAA :
  > Piste audio libre de droits, Thème calme : piano feutré, tenue grave. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `music_calm.ogg`.

### `assets/audio/music_romance.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Thème romantique : cordes chaudes, motif ascendant
- Prompt AAA :
  > Piste audio libre de droits, Thème romantique : cordes chaudes, motif ascendant. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `music_romance.ogg`.

### `assets/audio/music_tension.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Thème de tension : ostinato bas, pulsation irrégulière
- Prompt AAA :
  > Piste audio libre de droits, Thème de tension : ostinato bas, pulsation irrégulière. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `music_tension.ogg`.

### `assets/audio/music_danger.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Thème de danger : cluster grave, percussion sèche
- Prompt AAA :
  > Piste audio libre de droits, Thème de danger : cluster grave, percussion sèche. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `music_danger.ogg`.

### `assets/audio/music_emotion.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Thème émotionnel : nappe majeure suspendue
- Prompt AAA :
  > Piste audio libre de droits, Thème émotionnel : nappe majeure suspendue. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `music_emotion.ogg`.

### `assets/audio/music_revelation.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Thème de révélation : montée harmonique, cloche
- Prompt AAA :
  > Piste audio libre de droits, Thème de révélation : montée harmonique, cloche. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `music_revelation.ogg`.

### `assets/audio/music_ending.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Thème de fin : résolution lente, aigus cristallins
- Prompt AAA :
  > Piste audio libre de droits, Thème de fin : résolution lente, aigus cristallins. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `music_ending.ogg`.

### `assets/audio/amb_pluie.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Pluie continue sur pierre
- Prompt AAA :
  > Piste audio libre de droits, Pluie continue sur pierre. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `amb_pluie.ogg`.

### `assets/audio/amb_faille.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Bourdon de la Faille, souffle harmonique
- Prompt AAA :
  > Piste audio libre de droits, Bourdon de la Faille, souffle harmonique. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `amb_faille.ogg`.

### `assets/audio/amb_ville_nuit.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Ville nocturne lointaine, eau du fleuve
- Prompt AAA :
  > Piste audio libre de droits, Ville nocturne lointaine, eau du fleuve. Boucle parfaite sans clic de raccord, durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, −16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `amb_ville_nuit.ogg`.

### `assets/audio/sfx_confirm.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Validation : clic cristallin court
- Prompt AAA :
  > Effet sonore court, Validation : clic cristallin court. Attaque nette, pas de réverbération longue, mono, −18 LUFS, OGG ou WAV 44,1 kHz, nommé `sfx_confirm.ogg`.

### `assets/audio/sfx_locked.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Choix verrouillé : sourd, mat
- Prompt AAA :
  > Effet sonore court, Choix verrouillé : sourd, mat. Attaque nette, pas de réverbération longue, mono, −18 LUFS, OGG ou WAV 44,1 kHz, nommé `sfx_locked.ogg`.

### `assets/audio/sfx_discovery.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Découverte d'indice : arpège ascendant
- Prompt AAA :
  > Effet sonore court, Découverte d'indice : arpège ascendant. Attaque nette, pas de réverbération longue, mono, −18 LUFS, OGG ou WAV 44,1 kHz, nommé `sfx_discovery.ogg`.

### `assets/audio/sfx_menu.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Ouverture de menu : souffle bref
- Prompt AAA :
  > Effet sonore court, Ouverture de menu : souffle bref. Attaque nette, pas de réverbération longue, mono, −18 LUFS, OGG ou WAV 44,1 kHz, nommé `sfx_menu.ogg`.

### `assets/audio/sfx_chapter.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Changement de chapitre : cloche grave
- Prompt AAA :
  > Effet sonore court, Changement de chapitre : cloche grave. Attaque nette, pas de réverbération longue, mono, −18 LUFS, OGG ou WAV 44,1 kHz, nommé `sfx_chapter.ogg`.

### `assets/audio/sfx_promise.ogg`
- Fichier audio
- Transparence : non
- Statut livré : placeholder-procedural (synthèse)
- Texte alternatif : Serment scellé : résonance métallique
- Prompt AAA :
  > Effet sonore court, Serment scellé : résonance métallique. Attaque nette, pas de réverbération longue, mono, −18 LUFS, OGG ou WAV 44,1 kHz, nommé `sfx_promise.ogg`.

### `assets/ui/dialogue-frame.webp`
- Dimensions : 600×200 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Élément d'interface dialogue-frame.webp
- Prompt AAA :
  > Élément d'interface : Élément d'interface dialogue-frame.webp. Style fantasy contemporain raffiné, traits fins or sur fond bleu nuit, lisible à 24 px comme à 512 px, sans texte incrusté, nommé `dialogue-frame.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/ui/favicon.svg`
- Fichier audio
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Élément d'interface favicon.svg
- Prompt AAA :
  > Élément d'interface : Élément d'interface favicon.svg. Style fantasy contemporain raffiné, traits fins or sur fond bleu nuit, lisible à 24 px comme à 512 px, sans texte incrusté, nommé `favicon.svg`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/ui/icon.webp`
- Dimensions : 512×512 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Élément d'interface icon.webp
- Prompt AAA :
  > Élément d'interface : Élément d'interface icon.webp. Style fantasy contemporain raffiné, traits fins or sur fond bleu nuit, lisible à 24 px comme à 512 px, sans texte incrusté, nommé `icon.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/ui/share.webp`
- Dimensions : 1200×630 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Élément d'interface share.webp
- Prompt AAA :
  > Élément d'interface : Élément d'interface share.webp. Style fantasy contemporain raffiné, traits fins or sur fond bleu nuit, lisible à 24 px comme à 512 px, sans texte incrusté, nommé `share.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.

### `assets/ui/title-bg.webp`
- Dimensions : 1920×1080 px
- Transparence : oui (alpha réel)
- Statut livré : placeholder-procedural
- Texte alternatif : Élément d'interface title-bg.webp
- Prompt AAA :
  > Élément d'interface : Élément d'interface title-bg.webp. Style fantasy contemporain raffiné, traits fins or sur fond bleu nuit, lisible à 24 px comme à 512 px, sans texte incrusté, nommé `title-bg.webp`. Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.
