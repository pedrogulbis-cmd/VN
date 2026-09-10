# Matrice des conséquences

Chaque ligne relie une décision à ses effets mesurables. Générée depuis les données.

## Conséquences différées

| Origine | Échéance | Condition | Effet | Message affiché |
|---|---|---|---|---|
| choix `ch1_10_c_garder` | chapitre 3 | drapeau solitaire | `{"rel": {"kael": {"tension": 10}, "noam": {"tension": 10}}}` | Ton silence du chapitre 1 commence à coûter cher. |
| choix `ch2_03_c_mentir` | chapitre 4 | drapeau mensonge_noam | `{"rel": {"noam": {"trust": -18, "tension": 16}}}` | Noam a fini par vérifier l’inventaire du chapitre II. |
| choix `ch2_n2_c_bruler` | chapitre 5 | drapeau ordre_brule | `{"stats": {"influence": -1}}` | Au chapitre V, il te manque la preuve écrite que tu as brûlée. |
| choix `ch2_y2_c_double` | chapitre 4 | drapeau agent_double | `{"rel": {"ysee": {"distrust": 16}}}` | Ton double jeu a fini par se voir. |
| choix `ch3_05_c_rien` | chapitre 5 | drapeau porte_forcee | `{"stats": {"sangfroid": -1}}` | Ce que tu as forcé au chapitre III te force à ton tour. |
| choix `ch3_05_c_mentir` | chapitre 4 | drapeau menti_faille | `{"stats": {"integrite": -1}}` | La Faille n’a pas oublié ton mensonge. |
| choix `ch3_13_c_seul` | chapitre 5 | drapeau solitaire | `{"rel": {"kael": {"trust": -12}, "noam": {"trust": -12}, "ysee": {"trust": -12}}}` | Personne ne se souvient de t’avoir vu demander de l’aide. |
| choix `ch4_02_c_renoncer` | chapitre 5 | drapeau sans_liste | `{"stats": {"influence": -1}}` | Sans les deux cents noms, personne ne t’écoute au Grand hall. |
| choix `ch4_09_c_double` | chapitre 5 | drapeau estrade_piegee | `{"stats": {"sangfroid": 1}}` | Trois jours de mensonge t’ont appris à tenir ton visage. |

## Promesses : où elles se font, où elles se paient

| Promesse | Faite en | Tenue en | Effet de la rupture |
|---|---|---|---|
| Aller jusqu’au bout (promesse faite à soi-même) | `p05_c_promesse` | — | relation dégradée, accès conditionnels perdus |
| Prévenir Ysée avant le Bureau | `ch1_06_c_promesse` | `ch1_10_c_ysee`, `ch3_13_c_ysee` | relation dégradée, accès conditionnels perdus |
| Dire la vérité à Noam, même la pire | `ch2_03_c_verite`, `ch2_n3_c_jurer` | `ch3_13_c_noam` | relation dégradée, accès conditionnels perdus |
| Sortir Théo de la lumière | `ch3_10_c_liberer`, `ch3_13_c_seul` | — | relation dégradée, accès conditionnels perdus |
| Revenir sur le pont | `ch4_11_c_kael` | — | relation dégradée, accès conditionnels perdus |
| Tenir ce serment ensemble | `ch4_n_c_oui` | — | relation dégradée, accès conditionnels perdus |
| Le premier serment de la ville nouvelle | `ch5_sec_c_premier` | — | relation dégradée, accès conditionnels perdus |

## Limites franchies (mémoire relationnelle négative)

| Identifiant | Texte affiché au joueur |
|---|---|
| `bnd_kael_bureau` | Tu lui as proposé de collaborer avec le Bureau. Il ne l’oubliera pas. |
| `bnd_kael_silence` | Tu lui as reproché son silence comme on reproche une trahison. |
| `bnd_kael_refus` | Tu as refusé ce qu’il t’offrait, et il t’avait prévenu qu’il ne demanderait qu’une fois. |
| `bnd_noam_accuse` | Tu l’as tenu pour responsable avant de savoir. |
| `bnd_noam_mensonge` | Tu lui as menti dans un couloir, et il a fini par vérifier. |
| `bnd_noam_abandonne` | Tu es parti pendant qu’il t’avouait la pire chose de sa vie. |
| `bnd_noam_refus` | Tu lui as demandé de ne rien jurer, à lui qui ne sait faire que ça. |

## Contreparties des statistiques élevées

| Statistique | Contrepartie à 8+ |
|---|---|
| Courage | Courage élevé : tu t’interposes avant d’avoir compris, et certains alliés ne te préviennent plus. |
| Empathie | Empathie élevée : tu portes des douleurs qui ne sont pas les tiennes et tu décides plus lentement. |
| Perspicacité | Perspicacité élevée : tu conclus avant que les gens aient fini de parler, ce qui blesse Théo et braque Noam. |
| Influence | Influence élevée : le Bureau te croit des siens, et les Rompus aussi finissent par le croire. |
| Sang-froid | Sang-froid élevé : ton calme passe pour de l’indifférence au pire moment. |
| Ingéniosité | Ingéniosité élevée : tu forces des portes qui gardaient quelque chose pour une raison. |
| Intégrité | Intégrité élevée : tu refuses les compromis qui auraient sauvé quelqu’un. |