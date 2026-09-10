# Carte de ramification

Générée automatiquement depuis `data/story/*.json` par `tools/gen_docs.py`.

**86 scènes**, **144 choix**, **8 fins**.


## Prologue — Ce que la vitre a retenu

### `p01_archives` — Ce que la vitre a retenu
*décor `bg_archives_bureau`*
- 5 répliques
- **Noter la formule exacte, l’heure estimée, la position des mains.** `méthodique`
  - → `p02_convocation`
- **Écrire dans la marge : « deux idiots, un mardi ».** `ironique`
  - → `p02_convocation`
- **Relire la vitre une quatrième fois pour chercher un troisième nom.** `obstiné`
  - → `p02_convocation`

### `p02_convocation` — Le capitaine descend
*décor `bg_archives_bureau`*
- 5 répliques
- **« Le temps de prendre ma sacoche, capitaine. »** `respectueux`
  - → `p03_pont`
- **« Et si je refusais, vous descendriez me chercher vous-même ? »** `provocateur`
  - → `p03_pont`
- **Rassembler tes affaires sans répondre.** `distant`
  - → `p03_pont`

### `p03_pont` — Le pont de la Confluence
*décor `bg_pont_confluence_night`*
- 5 répliques
- **Lui prendre la main et rester avec lui.** `chaleureux`
  - → `p04_kael`
- **S’accroupir et lire ce qui reste du serment sur ses poignets.** `méthodique`
  - → `p04_kael`
- **Demander un périmètre élargi et un procès-verbal immédiat.** `institutionnel`
  - → `p04_kael`

### `p04_kael` — L’homme qui ne jure plus
*décor `bg_pont_confluence_night`*
- 5 répliques
- **Le saisir par le poignet.** `direct`
  - → `p05_appartement`
- **Détourner le regard et le laisser partir.** `complice`
  - → `p05_appartement`
- **« Montre-la-moi. Après, tu la gardes. »** `négociateur`
  - → `p05_appartement`

### `p05_appartement` — Six ans, quatre mois
*décor `bg_appartement_ilan`*
- 4 répliques
- **« Cette fois je vais jusqu’au bout. » — se le promettre à voix haute.** `sincère · irréversible`
  - → `p06_indice`
- **Ne rien dire. Ranger le dossier.** `distant`
  - → `p06_indice`
- **Se servir un verre et relire la liste des Rompus de l’année.** `obstiné`
  - → `p06_indice`

### `p06_indice` — Ce qui manque au registre
*décor `bg_archives_bureau_dark`*
- 3 répliques
- **Formuler une première hypothèse à partir de ce que tu as vu cette nuit.** `méthodique · déduction`
  - réussite si : indice « Un nom effacé du registre » ET (indice « Traces de rupture forcée » OU indice « La fiole verte » OU indice « Onze Rompus en dix-huit mois »)
  - succès → `p07_ysee` · échec → `p07_ysee`
- **Ne rien écrire nulle part. Mémoriser, refermer, partir.** `prudent`
  - → `p07_ysee`

### `p07_ysee` — La médecin des Rompus
*décor `bg_clinique_ysee`*
- 5 répliques
- **« Onze noms ont été effacés du registre. Je vous le dis parce que vous le saurez de toute façon. »** `sincère`
  - → `p08_transition`
- **Poser des questions sans rien donner en retour.** `méthodique`
  - → `p08_transition`
- **Retirer votre manteau et aider à changer les perfusions avant de parler.** `chaleureux`
  - requiert : Empathie >= 4
  - → `p08_transition`

### `p08_transition` — Ce qui commence
*décor `bg_quai_rompus_dawn`*
- 3 répliques
- → `ch1_01_convocation`


## Chapitre I — Le nom sur la vitre

### `ch1_01_convocation` — Le Grand hall
*décor `bg_grand_hall_bureau`*
- 7 répliques
- **« J’accepte. Et je veux les onze autres dossiers. »** `direct`
  - → `ch1_02_dossier`
- **« J’accepte, chancelier. » — et rien d’autre.** `prudent`
  - → `ch1_02_dossier`
- **Chercher le sceau à sept anneaux sur sa chaîne d’office.** `méthodique`
  - requiert : indice « Le sceau à sept anneaux »
  - → `ch1_02_dossier`

### `ch1_02_dossier` — Ce que Noam ne dit pas
*décor `bg_archives_bureau`*
- 5 répliques
- **« Comment s’appelait le troisième ? »** `direct`
  - → `ch1_03_marche`
- **« Vous me prévenez. Pourquoi vous, et pourquoi maintenant ? »** `sincère`
  - → `ch1_03_marche`
- **« Je note. Le dossier, capitaine. »** `distant`
  - → `ch1_03_marche`

### `ch1_03_marche` — Le marché des serments
*décor `bg_marche_serments`*
- 3 répliques
- **Payer un indicateur pour retrouver l’acheteur de la suspension.** `méthodique`
  - requiert : Influence >= 3
  - → `ch1_04_kael_marche`
- **Lire les résidus de serments sur les tables de négoce.** `obstiné`
  - → `ch1_04_kael_marche`
- **Ne rien acheter, ne rien toucher. Regarder qui regarde.** `prudent`
  - → `ch1_04_kael_marche`

### `ch1_04_kael_marche` — Marcheur de Faille
*décor `bg_marche_serments`*
- 5 répliques
- **« Montre-moi. »** `direct`
  - → `ch1_05_ruelle`
- **« Rends la fiole au Bureau et je t’obtiens l’immunité. »** `institutionnel`
  - → `ch1_05_ruelle`
- **« Ton bras gauche. Qui as-tu trahi ? »** `provocateur`
  - → `ch1_05_ruelle`

### `ch1_05_ruelle` — Trois hommes sans visage
*décor `bg_ruelle_pluie`*
- 3 répliques
- **Se placer dos à dos avec Kaël.** `direct · chronométré 9s`
  - requiert : Courage >= 4
  - → `ch1_06_clinique`
- **Fuir par les toits en entraînant Kaël.** `prudent · chronométré 9s`
  - → `ch1_06_clinique`
- **Lever les mains et annoncer ton matricule.** `institutionnel · chronométré 9s`
  - → `ch1_06_clinique`

### `ch1_06_clinique` — Ce que soigne Ysée
*décor `bg_clinique_ysee`*
- 5 répliques
- **« Je trouverai qui leur fait ça. Et je vous le dirai avant de le dire au Bureau. »** `sincère · irréversible`
  - → `ch1_07_noam_toit`
- **« Je ne vous promets rien. Je vais chercher, c’est tout. »** `sincère`
  - → `ch1_07_noam_toit`
- **Rester près de Kaël pendant qu’elle recoud.** `chaleureux`
  - → `ch1_07_noam_toit`

### `ch1_07_noam_toit` — Sur le toit, sous l’orage
*décor `bg_toit_orage`*
- 5 répliques
- **« Six ans. Quel mois ? »** `direct`
  - → `ch1_08_deduction`
- **Retirer ton manteau et le lui poser sur les épaules.** `chaleureux`
  - → `ch1_08_deduction`
- **« Vous avez signé. Ça fait de vous une partie du problème. »** `provocateur`
  - → `ch1_08_deduction`

### `ch1_08_deduction` — Onze noms, un motif
*décor `bg_appartement_ilan`*
- 2 répliques
- **Ils ont tous prêté le même serment il y a dix-neuf ans.** `méthodique · déduction`
  - réussite si : indice « Un nom effacé du registre » ET indice « Le sceau à sept anneaux » ET (indice « Une formule d’ancrage d’occasion » OU indice « Un laboratoire qui n’existe pas » OU indice « La perte du nom chez Line »)
  - succès → `ch1_09_damien` · échec → `ch1_09_damien`
- **Quelqu’un élimine méthodiquement les survivants d’un événement ancien.** `obstiné · déduction`
  - réussite si : indice « Un nom effacé du registre » ET (indice « Trois lecteurs avant toi » OU indice « Onze Rompus en dix-huit mois »)
  - succès → `ch1_09_damien` · échec → `ch1_09_damien`
- **Arrêter. Dormir. Reprendre demain avec les idées claires.** `prudent`
  - → `ch1_09_damien`

### `ch1_09_damien` — L’offre du chancelier
*décor `bg_grand_hall_bureau`*
- 6 répliques
- **« Les deux cents ont des noms. Donnez-les-moi. »** `sincère`
  - → `ch1_10_allegeance`
- **« Quatre cent mille contre deux cents. Je comprends le calcul. »** `institutionnel`
  - → `ch1_10_allegeance`
- **« Mon frère a disparu il y a six ans. Est-ce qu’il est dans votre arithmétique ? »** `direct`
  - → `ch1_10_allegeance`

### `ch1_10_allegeance` — À qui tu donnes ce que tu sais
*décor `bg_quai_rompus_night`*
- 2 répliques
- **La donner à Kaël. Les Rompus doivent savoir avant tout le monde.** `complice · irréversible`
  - → `ch1_11_nuit`
- **La donner à Noam. Réformer l’institution de l’intérieur.** `institutionnel · irréversible`
  - → `ch1_11_nuit`
- **La donner à Ysée. Ses patients d’abord.** `chaleureux · irréversible`
  - → `ch1_11_nuit`
- **Les brûler toutes les trois. Personne ne saura avant que tu saches tout.** `obstiné · irréversible`
  - → `ch1_11_nuit`

### `ch1_11_nuit` — Le manteau sur la chaise
*décor `bg_appartement_ilan`*
- 4 répliques
- → `ch1_12_fin`

### `ch1_12_fin` — Fin du chapitre I
*décor `bg_coeur_faille`*
- 3 répliques
- → `ch2_01_reveil`


## Chapitre II — Ceux qui rompent

### `ch2_01_reveil` — Ceux qui rompent
*décor `bg_clinique_ysee`*
- 5 répliques
- **Lui parler de Théo. Tout, depuis le début.** `sincère`
  - → `ch2_02_registre`
- **« Rien qui vous serve. » — et changer de sujet.** `distant`
  - → `ch2_02_registre`
- **Demander à parler seul à Line.** `méthodique`
  - → `ch2_02_registre`

### `ch2_02_registre` — L’étage qui n’existe pas
*décor `bg_archives_bureau_dark`*
- 2 répliques
- **Forcer le mécanisme avec ce que tu as sous la main.** `obstiné`
  - requiert : Ingéniosité >= 5
  - → `ch2_03_confrontation`
- **Emprunter le badge d’un archiviste de nuit.** `prudent`
  - → `ch2_03_confrontation`
- **Appeler Kaël. Les Marcheurs savent entrer partout.** `complice`
  - requiert : Kaël Ravier.Confiance >= 25
  - → `ch2_03_confrontation`

### `ch2_03_confrontation` — Le capitaine dans le couloir
*décor `bg_archives_bureau_dark`*
- 3 répliques
- **Tout lui dire. Le niveau zéro, Théo, la lumière qui dit « frère ».** `sincère`
  - → `ch2_04_divergence`
- **Inventer une vérification d’inventaire.** `distant`
  - → `ch2_04_divergence`
- **« Descendez avec moi. Ou arrêtez-moi. Choisissez maintenant. »** `provocateur`
  - → `ch2_04_divergence`

### `ch2_04_divergence` — Trois portes
*décor `bg_quai_rompus_night`*
- 5 répliques
- **Le vieux quai. Kaël.** `complice`
  - → `ch2_k1_quai`
- **Le bureau de la Garde. Noam.** `sincère`
  - → `ch2_n1_signature`
- **La clinique. Line.** `chaleureux`
  - → `ch2_y1_line`

### `ch2_k1_quai` — Ce qu’il n’a jamais dit
*route **kael**, décor `bg_quai_rompus_night`*
- 5 répliques
- **« Six ans. Tu m’as regardé chercher pendant six ans. »** `provocateur`
  - → `ch2_k2_choix`
- **« Tu viens de te rompre pour moi. Je ne l’oublierai pas. »** `sincère`
  - → `ch2_k2_choix`
- **Prendre son avant-bras gauche et suivre la cicatrice du bout des doigts.** `chaleureux`
  - requiert : Kaël Ravier.Affinité >= 30
  - → `ch2_k2_choix`

### `ch2_k2_choix` — Une porte dans la lumière
*route **kael**, décor `bg_coeur_faille`*
- 2 répliques
- **Entrer avec lui.** `direct · irréversible`
  - → `ch2_k3_dedans`
- **« Pas encore. J’ai besoin de savoir ce que je vais y trouver. »** `prudent`
  - → `ch2_k3_dedans`

### `ch2_k3_dedans` — La voix qui connaît ton prénom
*route **kael**, décor `bg_coeur_faille`*
- 4 répliques
- → `ch2_convergence`

### `ch2_n1_signature` — Sa propre main
*route **noam**, décor `bg_grand_hall_bureau`*
- 5 répliques
- **Rester. Écouter jusqu’au bout.** `chaleureux`
  - → `ch2_n2_ordre`
- **Prendre l’ordre et sortir sans un mot.** `distant`
  - → `ch2_n2_ordre`
- **« Alors vous allez m’ouvrir le niveau zéro. »** `négociateur`
  - → `ch2_n2_ordre`

### `ch2_n2_ordre` — Qui a dicté l’ordre
*route **noam**, décor `bg_archives_bureau`*
- 2 répliques
- **Reconstituer la chaîne de décision.** `méthodique · déduction`
  - réussite si : indice « L’ordre de scellement signé Sardou » ET (indice « Le sceau à sept anneaux » OU indice « La chaîne d’office du chancelier »)
  - succès → `ch2_n3_pacte` · échec → `ch2_n3_pacte`
- **Brûler l’ordre. Le protéger.** `complice · irréversible`
  - → `ch2_n3_pacte`

### `ch2_n3_pacte` — Un serment entre nous
*route **noam**, décor `bg_toit_orage`*
- 2 répliques
- **« Je te le promets. »** `sincère · irréversible`
  - → `ch2_convergence`
- **« Je ne promets rien à personne. Jamais. »** `distant`
  - → `ch2_convergence`

### `ch2_y1_line` — Ce que Line a entendu
*route **coop**, décor `bg_clinique_ysee`*
- 4 répliques
- **Nommer ce que tout le monde évite de nommer.** `obstiné · déduction`
  - réussite si : indice « Il y a un homme dedans » ET (indice « Le Premier Serment » OU indice « Une formule d’ancrage d’occasion » OU indice « La lumière l’appelle « frère » »)
  - succès → `ch2_y2_pacte` · échec → `ch2_y2_pacte`
- **S’asseoir près d’elle et lui tenir ce qui reste de sa main.** `chaleureux`
  - → `ch2_y2_pacte`

### `ch2_y2_pacte` — La Main Creuse
*route **coop**, décor `bg_quai_rompus_night`*
- 3 répliques
- **Retirer ton insigne et le poser sur la table.** `sincère · irréversible`
  - → `ch2_convergence`
- **Garder ton poste et les renseigner en secret.** `négociateur`
  - → `ch2_convergence`

### `ch2_convergence` — Fin du chapitre II
*décor `bg_faille_embrasee`*
- 4 répliques
- → `ch3_01_convocation`


## Chapitre III — L’Ancre

### `ch3_01_convocation` — L’Ancre
*décor `bg_grand_hall_bureau`*
- 4 répliques
- **« Pourquoi moi ? »** `direct`
  - → `ch3_02_descente`
- **« J’y descends avec quelqu’un de mon choix. »** `négociateur`
  - requiert : Influence >= 5
  - → `ch3_02_descente`
- **« Non. Je descendrai quand j’aurai compris, pas quand vous l’aurez décidé. »** `obstiné`
  - → `ch3_02_descente`

### `ch3_02_descente` — Le huitième bouton
*décor `bg_archives_bureau_dark`*
- 3 répliques
- **Descendre seul.** `prudent`
  - → `ch3_03_niveau_zero`
- **Envoyer un mot à Kaël avant de descendre.** `complice`
  - requiert : drapeau compagnon_autorise ET Kaël Ravier.Confiance >= 30
  - → `ch3_03_niveau_zero`
- **Demander au capitaine Sardou de descendre avec toi.** `sincère`
  - requiert : drapeau compagnon_autorise ET Noam Sardou.Confiance >= 30
  - → `ch3_03_niveau_zero`

### `ch3_03_niveau_zero` — Niveau zéro
*décor `bg_chambre_ancre`*
- 3 répliques
- **Lire le septième nom.** `direct`
  - → `ch3_04_deduction`
- **Lire d’abord les six noms rayés.** `méthodique`
  - → `ch3_04_deduction`

### `ch3_04_deduction` — Ce que sept noms veulent dire
*décor `bg_chambre_ancre`*
- 1 répliques
- **La Faille est tenue par une personne, remplacée quand elle cède.** `méthodique · déduction`
  - réussite si : indice « Sept stèles, six ratures » ET (déduction « La Faille est tenue par une ancre vivante » OU indice « Il y a un homme dedans » OU indice « Une voix qui connaît ton prénom » OU indice « Les six ancres précédentes »)
  - succès → `ch3_05_porte` · échec → `ch3_05_porte`
- **Refuser de conclure. Pas devant ce nom-là.** `sincère`
  - → `ch3_05_porte`

### `ch3_05_porte` — La porte qui demande
*décor `bg_chambre_ancre`*
- 3 répliques
- **Réciter les promesses que tu as faites.** `sincère`
  - requiert : (promesse « Prévenir Ysée avant le Bureau » = made OU promesse « Dire la vérité à Noam, même la pire » = made OU promesse « Aller jusqu’au bout (promesse faite à soi-même) » = made OU promesse « Prévenir Ysée avant le Bureau » = kept)
  - → `ch3_06_couloir`
- **« Rien. À personne. Et j’entre quand même. »** `obstiné`
  - → `ch3_06_couloir`
- **Mentir à la Faille.** `provocateur`
  - → `ch3_06_couloir`

### `ch3_06_couloir` — Le couloir des voix
*décor `bg_coeur_faille`*
- 4 répliques
- → `ch3_07_chambre`

### `ch3_07_chambre` — Ce qui tient la ville
*décor `bg_coeur_faille`, CG `cg_theo_revelation_ancre`*
- 3 répliques
- → `ch3_08_theo`

### `ch3_08_theo` — Théo
*décor `bg_coeur_faille`*
- 5 répliques
- **« Tu m’as laissé six ans avec un manteau sur une chaise. »** `provocateur`
  - → `ch3_09_verite`
- **« Tu as l’air fatigué. Assieds-toi. » — bêtement, comme avant.** `chaleureux`
  - → `ch3_09_verite`
- **« Combien de temps il te reste ? »** `méthodique`
  - → `ch3_09_verite`

### `ch3_09_verite` — Le Premier Serment
*décor `bg_coeur_faille`*
- 4 répliques
- → `ch3_10_options`

### `ch3_10_options` — Trois manières de finir
*décor `bg_coeur_faille`*
- 3 répliques
- **« Il y a une quatrième. Tu ne me l’as pas dite. »** `obstiné · secret`
  - requiert : Perspicacité >= 6 ET déduction « La Faille est tenue par une ancre vivante »
  - → `ch3_11_promesse`
- **« Je vais te sortir de là. Je ne sais pas encore comment. »** `sincère · irréversible`
  - → `ch3_11_promesse`
- **« Deux cents contre quatre cent mille. Ton chancelier a peut-être raison. »** `institutionnel`
  - → `ch3_11_promesse`

### `ch3_11_promesse` — Ce qu’il te demande
*décor `bg_coeur_faille`*
- 3 répliques
- → `ch3_12_damien`

### `ch3_12_damien` — Le chancelier au bord de la lumière
*décor `bg_chambre_ancre`*
- 5 répliques
- **« Vous n’êtes pas obligé de la tuer pour prouver que vous êtes juste. »** `sincère`
  - → `ch3_13_remontee`
- **« Vous vous êtes construit une arithmétique pour ne pas avoir à choisir. »** `provocateur`
  - → `ch3_13_remontee`
- **« Montrez-moi votre main droite, chancelier. »** `méthodique`
  - requiert : Perspicacité >= 6
  - → `ch3_13_remontee`

### `ch3_13_remontee` — Remonter avec ça
*décor `bg_archives_bureau_dark`*
- 3 répliques
- **Aller voir Kaël.** `complice`
  - → `ch3_14_fin`
- **Aller voir Noam.** `sincère`
  - → `ch3_14_fin`
- **Aller voir Ysée.** `chaleureux`
  - → `ch3_14_fin`
- **N’aller voir personne.** `distant`
  - → `ch3_14_fin`

### `ch3_14_fin` — Fin du chapitre III
*décor `bg_hall_vide`*
- 4 répliques
- → `ch4_01_neuf_jours`


## Chapitre IV — Le prix du silence

### `ch4_01_neuf_jours` — Le prix du silence
*décor `bg_ruelle_pluie`*
- 3 répliques
- → `ch4_02_liste`

### `ch4_02_liste` — Deux cents noms
*décor `bg_archives_bureau`*
- 1 répliques
- **La voler pendant la relève de nuit.** `obstiné`
  - requiert : Ingéniosité >= 5
  - → `ch4_03_branche`
- **Demander à Noam de la réquisitionner officiellement.** `institutionnel`
  - requiert : Noam Sardou.Confiance >= 40
  - → `ch4_03_branche`
- **Reconstituer la liste à partir des registres de la clinique.** `chaleureux`
  - requiert : Ysée Marchand.Confiance >= 40
  - → `ch4_03_branche`
- **Renoncer à la liste. Les chiffres ne changeront rien.** `distant`
  - → `ch4_03_branche`

### `ch4_03_branche` — À qui tu tiens
*décor `bg_appartement_ilan`*
- 1 répliques
- → `ch4_k_intimite` si Kaël Ravier.Affinité >= 45 ET Kaël Ravier.Attraction >= 25
- → `ch4_n_intimite` si Noam Sardou.Affinité >= 45 ET Noam Sardou.Attraction >= 25
- → `ch4_y_reseau` si Ysée Marchand.Confiance >= 45
- → `ch4_solo`

### `ch4_k_intimite` — Ce qu’on se dit à voix basse
*route **kael**, décor `bg_appartement_ilan`*
- 5 répliques
- **Traverser la pièce et lui prendre le visage à deux mains.** `sincère · irréversible`
  - → `ch4_05_celia`
- **« Pas maintenant. Pas avec neuf jours devant nous. »** `prudent`
  - → `ch4_05_celia`
- **« Je ne peux pas te donner ça. Je suis désolé. »** `sincère`
  - → `ch4_05_celia`

### `ch4_n_intimite` — Sans les anneaux
*route **noam**, décor `bg_appartement_ilan`*
- 4 répliques
- **« Alors dis-le. Je le tiendrai avec toi. »** `sincère · irréversible`
  - → `ch4_05_celia`
- **« Remets les anneaux. On reparlera de ça dans dix jours. »** `prudent`
  - → `ch4_05_celia`
- **« Ne jure rien. Surtout pas à moi. »** `distant`
  - → `ch4_05_celia`

### `ch4_y_reseau` — Deux cents portes
*route **coop**, décor `bg_clinique_ysee`*
- 3 répliques
- **Passer les neuf jours à organiser l’évacuation.** `méthodique`
  - → `ch4_05_celia`
- **Concentrer les moyens sur les vingt cas les plus avancés.** `institutionnel`
  - → `ch4_05_celia`

### `ch4_solo` — Personne à appeler
*route **truth**, décor `bg_appartement_ilan`*
- 3 répliques
- → `ch4_05_celia`

### `ch4_05_celia` — Celle qui n’a plus de nom
*décor `bg_clinique_ysee`*
- 4 répliques
- **Comprendre ce que Damien prépare vraiment.** `méthodique · déduction`
  - réussite si : indice « Célia Vaugrise-Loret » ET indice « Le chancelier vient tous les mardis » ET (indice « L’alliance noire du chancelier » OU indice « La chaîne d’office du chancelier » OU déduction « L’ordre venait du cabinet du chancelier »)
  - succès → `ch4_06_theo` · échec → `ch4_06_theo`
- **S’asseoir et recopier le mot avec elle.** `chaleureux`
  - → `ch4_06_theo`

### `ch4_06_theo` — Ce que la lumière a pris
*décor `bg_coeur_faille`*
- 3 répliques
- **« Parle-moi de la quatrième voie. Maintenant. »** `obstiné · secret`
  - requiert : drapeau quatrieme_voie
  - → `ch4_07_deduction`
- **Lui raconter tout ce dont tu te souviens de votre enfance.** `chaleureux`
  - → `ch4_07_deduction`
- **« Et si c’était moi, la prochaine ancre ? »** `sincère`
  - → `ch4_07_deduction`

### `ch4_07_deduction` — Le Premier Serment, mot à mot
*décor `bg_archives_bureau_dark`*
- 2 répliques
- **Il existe une manière de dissoudre le Premier Serment sans le remplacer.** `obstiné · déduction`
  - réussite si : (indice « Un contrat se rompt à deux » OU indice « Il existe une quatrième voie ») ET Perspicacité >= 7 ET (indice « Une formule d’ancrage d’occasion » OU indice « Le Premier Serment »)
  - succès → `ch4_08_arrestation` · échec → `ch4_08_arrestation`
- **Fermer les carnets. Tu n’as plus le temps de chercher.** `prudent`
  - → `ch4_08_arrestation`

### `ch4_08_arrestation` — Ils ont pris quelqu’un
*décor `bg_ruelle_pluie`*
- 2 répliques
- → `ch4_09_choix` si route kael = open
- → `ch4_09_choix` si route coop = open
- → `ch4_09_choix`

### `ch4_09_choix` — Point de non-retour
*décor `bg_hall_vide`*
- 4 répliques
- **Accepter. Monter sur l’estrade.** `institutionnel · irréversible`
  - → `ch4_10_consequence`
- **Refuser. Et le lui dire en le regardant.** `direct · irréversible`
  - → `ch4_10_consequence`
- **Accepter — et prévoir de dire autre chose sur l’estrade.** `négociateur · irréversible`
  - requiert : Ingéniosité >= 6 ET Sang-froid >= 5
  - → `ch4_10_consequence`
- **« Il existe une quatrième voie, chancelier. Et vous le savez depuis le début. »** `provocateur · secret`
  - requiert : déduction « Le Premier Serment peut être dissous à deux voix » ET route secret = open
  - → `ch4_10_consequence`

### `ch4_10_consequence` — Ce que ça coûte
*décor `bg_quai_rompus_night`*
- 3 répliques
- → `ch4_11_veille`

### `ch4_11_veille` — La veille
*décor `bg_pont_confluence_night`*
- 2 répliques
- **Kaël.** `chaleureux`
  - requiert : Kaël Ravier.Affinité >= 30
  - → `ch4_12_fin`
- **Noam.** `sincère`
  - requiert : Noam Sardou.Affinité >= 30
  - → `ch4_12_fin`
- **Ysée, à la clinique, jusqu’au matin.** `chaleureux`
  - → `ch4_12_fin`
- **Seul, sur le pont, jusqu’au jour.** `distant`
  - → `ch4_12_fin`

### `ch4_12_fin` — Fin du chapitre IV
*décor `bg_hall_vide`*
- 3 répliques
- → `ch5_01_hall`


## Chapitre V — Le Grand Serment

### `ch5_01_hall` — Le Grand Serment
*décor `bg_grand_hall_bureau`*
- 4 répliques
- → `ch5_02_estrade`

### `ch5_02_estrade` — Sur l’estrade
*décor `bg_grand_hall_bureau`*
- 4 répliques
- → `ch5_03_moment`

### `ch5_03_moment` — Le moment
*décor `bg_grand_hall_bureau`*
- 2 répliques
- **Lire le Premier Serment. Sauver quatre cent mille personnes.** `institutionnel · irréversible`
  - requiert : (drapeau estrade_acceptee OU drapeau estrade_piegee)
  - → `ch5_op_serment`
- **Interrompre. Dire la vérité à trois mille personnes.** `direct · irréversible`
  - requiert : (indice « Les deux cents Rompus vivants » OU déduction « L’ancre actuelle est Théo »)
  - → `ch5_tr_verite`
- **Sortir du hall et rejoindre la Main Creuse dans le quartier nord.** `chaleureux · irréversible`
  - requiert : route coop = open
  - → `ch5_co_nord`
- **Prononcer la formule de dissolution. À deux voix, avec Théo.** `obstiné · secret · irréversible`
  - requiert : déduction « Le Premier Serment peut être dissous à deux voix » ET route secret = open ET Intégrité >= 6
  - → `ch5_sec_formule`
- **Ne rien faire.** `distant · irréversible`
  - → `ch5_bad_rupture`

### `ch5_op_serment` — Trois mille voix
*route **opposition**, décor `bg_faille_embrasee`, CG `cg_grand_serment`*
- 4 répliques
- → `ch5_op_apres`

### `ch5_op_apres` — Ce qu’on a acheté
*route **opposition**, décor `bg_hall_vide`*
- 4 répliques
- → `ch5_tr_verite` si drapeau estrade_piegee
- → `ep_opposition`

### `ch5_tr_verite` — Ce que trois mille personnes entendent
*route **truth**, décor `bg_grand_hall_bureau`*
- 3 répliques
- → `ch5_tr_choix`

### `ch5_tr_choix` — Ce qu’on fait d’une vérité
*route **truth**, décor `bg_coeur_faille`*
- 3 répliques
- **Prendre sa place.** `sincère · irréversible`
  - → `ep_truth`
- **Demander un volontaire à la ville qui vient d’entendre la vérité.** `direct`
  - requiert : Influence >= 6
  - → `ep_truth`
- **« Le chancelier a une place réservée depuis le début. Demandez-lui. »** `provocateur`
  - requiert : déduction « Le chancelier veut se sacrifier »
  - → `ep_truth`

### `ch5_co_nord` — Quartier nord
*route **coop**, décor `bg_quai_rompus_dawn`*
- 4 répliques
- **Descendre porter les dix-neuf qui ont refusé.** `chaleureux`
  - → `ep_coop`
- **Respecter leur refus et fermer les réservoirs à l’heure.** `sincère`
  - → `ep_coop`

### `ch5_sec_formule` — À deux voix
*route **secret**, décor `bg_coeur_faille`*
- 4 répliques
- → `ch5_sec_prix`

### `ch5_sec_prix` — Le prix de la quatrième voie
*route **secret**, décor `bg_faille_embrasee`*
- 3 répliques
- **Assumer. Une ville libre est une ville qui doit réapprendre.** `obstiné`
  - → `ep_secret`
- **Prêter le premier serment de la ville nouvelle, à voix haute, devant tout le monde.** `sincère`
  - requiert : Influence >= 5
  - → `ep_secret`

### `ch5_bad_rupture` — Ce qui arrive quand personne ne bouge
*décor `bg_faille_embrasee`*
- 3 répliques
- → `ep_bad_nom` si drapeau a_jure_seul
- → `ep_bad_faille`


## Épilogue

### `ep_opposition` — Épilogue — l’ordre
*route **opposition**, décor `bg_pont_confluence_dawn`*
- 4 répliques
- → `ep_lien` si Kaël Ravier.Attraction >= 55 ET Kaël Ravier.Affinité >= 45
- → `ep_lien` si Noam Sardou.Attraction >= 55 ET Noam Sardou.Affinité >= 45
- → `ep_opposition_fin`

### `ep_opposition_fin` — Le Grand Serment
*route **opposition**, décor `bg_grand_hall_bureau`, CG `cg_grand_serment`*
- 3 répliques
- → **fin e4_grand_serment**

### `ep_coop` — Épilogue — la Main Creuse
*route **coop**, décor `bg_quai_rompus_dawn`*
- 4 répliques
- → `ep_lien` si Kaël Ravier.Attraction >= 55 ET Kaël Ravier.Affinité >= 45
- → `ep_lien` si Noam Sardou.Attraction >= 55 ET Noam Sardou.Affinité >= 45
- → `ep_coop_fin`

### `ep_coop_fin` — La Main Creuse
*route **coop**, décor `bg_clinique_ysee`*
- 3 répliques
- → **fin e3_main_creuse**

### `ep_truth` — Épilogue — la vérité
*route **truth**, décor `bg_coeur_faille`*
- 4 répliques
- → `ep_lien` si NON(drapeau sacrifice_ilan) ET Kaël Ravier.Attraction >= 55
- → `ep_lien` si NON(drapeau sacrifice_ilan) ET Noam Sardou.Attraction >= 55
- → `ep_truth_fin`

### `ep_truth_fin` — Ce qui reste de Théo
*route **truth**, décor `bg_coeur_faille`, CG `cg_theo_revelation_ancre`*
- 5 répliques
- → **fin e5_ce_qui_reste**

### `ep_secret` — Épilogue — l’aube sans serment
*route **secret**, décor `bg_pont_confluence_dawn`*
- 4 répliques
- → `ep_lien` si Kaël Ravier.Attraction >= 55 ET Kaël Ravier.Affinité >= 45
- → `ep_lien` si Noam Sardou.Attraction >= 55 ET Noam Sardou.Affinité >= 45
- → `ep_secret_fin`

### `ep_secret_fin` — L’Aube sans serment
*route **secret**, décor `bg_pont_confluence_dawn`, CG `cg_aube_sans_serment`*
- 4 répliques
- → **fin e6_aube_sans_serment**

### `ep_kael` — Deux ombres sur le pont
*route **kael**, décor `bg_pont_confluence_dawn`, CG `cg_kael_serment_partage`*
- 5 répliques
- → **fin e1_deux_ombres**

### `ep_noam` — La loi et l’homme
*route **noam**, décor `bg_toit_orage`, CG `cg_noam_aveu_pluie`*
- 5 répliques
- → **fin e2_loi_et_homme**

### `ep_bad_nom` — Le nom effacé
*décor `bg_archives_bureau_dark`, CG `cg_ilan_rompu`*
- 4 répliques
- → **fin bad_nom_efface**

### `ep_bad_faille` — La Faille ne pardonne pas
*décor `bg_faille_embrasee`*
- 4 répliques
- → **fin bad_faille_ne_pardonne**

### `ep_lien` — Avant que tout change
*décor `bg_pont_confluence_dawn`*
- 2 répliques
- → `ep_kael` si Kaël Ravier.Attraction >= 55
- → `ep_noam` si Noam Sardou.Attraction >= 55
- → `ep_coop_fin`
