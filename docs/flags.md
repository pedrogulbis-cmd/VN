# Drapeaux, routes et variables d’état

Généré depuis les données. Tout drapeau posé par le scénario apparaît ici.

## Routes

| Route | Posée par |
|---|---|
| `coop` | `ch1_06_c_promesse` (open), `ch1_10_c_kael` (open), `ch1_10_c_ysee` (open), `ch2_04_c_ysee` (open), `ch2_y2_c_rejoindre` (open), `ch2_y2_c_double` (open), `ch3_13_c_ysee` (open), `ch4_y_c_organiser` (open), `ch4_y_c_ciblee` (open), `ch4_09_c_accepter` (lock), `ch4_11_c_ysee` (open), `ch5_03_c_evacuer` (open) |
| `kael` | `ch1_10_c_kael` (open), `ch2_04_c_kael` (open), `ch2_k2_c_entrer` (open), `ch3_13_c_kael` (open), `ch4_k_c_oui` (open), `ch4_k_c_non` (close), `ch4_n_c_oui` (lock), `ch4_11_c_kael` (open) |
| `noam` | `ch1_10_c_noam` (open), `ch2_03_c_verite` (open), `ch2_04_c_noam` (open), `ch2_n3_c_jurer` (open), `ch3_13_c_noam` (open), `ch4_k_c_oui` (lock), `ch4_n_c_oui` (open), `ch4_n_c_non` (close), `ch4_11_c_noam` (open) |
| `opposition` | `ch2_k2_c_entrer` (close), `ch2_y2_c_rejoindre` (close), `ch3_10_c_calcul` (open), `ch4_09_c_accepter` (open), `ch4_09_c_refuser` (close), `ch5_03_c_lire` (open) |
| `secret` | `ch3_10_c_quatre` (open), `ch4_06_c_quatrieme` (open), `ch4_07_c_ded (succès)` (open), `ch4_09_c_secret` (open), `ch5_03_c_dissoudre` (open) |
| `truth` | `ch1_10_c_garder` (open), `ch2_n2_c_bruler` (close), `ch3_10_c_liberer` (open), `ch4_06_c_remplacer` (open), `ch4_09_c_double` (open), `ch5_03_c_interrompre` (open) |

## Drapeaux

| Drapeau | Posé par |
|---|---|
| `a_dissous` | `ch5_03_c_dissoudre` → True |
| `a_dormi_ch1` | `ch1_08_c_pause` → True |
| `a_evacue` | `ch5_03_c_evacuer` → True |
| `a_jure_seul` | `p05_c_promesse` → True |
| `a_lu` | `ch5_03_c_lire` → True |
| `a_parle` | `ch5_03_c_interrompre` → True |
| `a_rien_fait` | `ch5_03_c_rien` → True |
| `a_tenu_la_main` | `p03_c_aider` → True |
| `agent_double` | `ch2_y2_c_double` → True |
| `alliance_noam` | `ch1_10_c_noam` → True |
| `assume_dissolution` | `ch5_sec_c_assumer` → True |
| `blesse_ch1` | `ch1_05_c_battre` → True |
| `celia_rencontree` | `ch4_05_c_parler` → True |
| `compagnon` | `ch3_02_c_kael` → kael, `ch3_02_c_noam` → noam |
| `compagnon_autorise` | `ch3_01_c_conditions` → True |
| `confie_ch3` | `ch3_13_c_kael` → kael, `ch3_13_c_noam` → noam, `ch3_13_c_ysee` → ysee, `ch3_13_c_seul` → personne |
| `damien_ancre` | `ch5_tr_c_damien` → True |
| `damien_confronte` | `ch3_12_c_dur` → True |
| `damien_touche` | `ch3_12_c_compassion` → True |
| `demande_onze` | `ch1_01_c_accept` → True |
| `descente_seul` | `ch3_02_c_seul` → True |
| `dix_neuf_sauves` | `ch5_co_c_porter` → True |
| `entre_faille_ch2` | `ch2_k2_c_entrer` → True |
| `envisage_sacrifice` | `ch4_06_c_remplacer` → True |
| `estrade_acceptee` | `ch4_09_c_accepter` → True |
| `estrade_piegee` | `ch4_09_c_double` → True |
| `estrade_refusee` | `ch4_09_c_refuser` → True |
| `evacuation_preparee` | `ch4_y_c_organiser` → True |
| `fuite_rompus` | `ch1_10_c_kael` → True |
| `insigne_rendu` | `ch2_y2_c_rejoindre` → True |
| `kael_ajourne` | `ch4_k_c_pas_maintenant` → True |
| `kael_laisse_partir` | `p04_c_laisser` → True |
| `kael_negocie` | `p04_c_parler` → True |
| `kael_offense` | `ch1_04_c_rendre` → True |
| `kael_reproche` | `ch2_k1_c_colere` → True |
| `kael_saisi` | `p04_c_retenir` → True |
| `liste_volee` | `ch4_02_c_voler` → True |
| `mensonge_noam` | `ch2_03_c_mentir` → True |
| `menti_faille` | `ch3_05_c_mentir` → True |
| `niveau_zero_vu` | `ch2_02_c_forcer` → True |
| `noam_abandonne` | `ch2_n1_c_partir` → True |
| `noam_accuse` | `ch1_07_c_accuser` → True |
| `noam_ajourne` | `ch4_n_c_attendre` → True |
| `noam_date` | `ch1_07_c_pousser` → True |
| `noam_provoque` | `p02_c_defi` → True |
| `noam_sait_theo` | `ch2_03_c_verite` → True |
| `noam_somme` | `ch2_03_c_retourner` → True |
| `ordre_brule` | `ch2_n2_c_bruler` → True |
| `penche_grand_serment` | `ch3_10_c_calcul` → True |
| `porte_forcee` | `ch3_05_c_rien` → True |
| `porte_ouverte_serment` | `ch3_05_c_promesses` → True |
| `prudent_archives` | `p06_c_prudence` → True |
| `quatrieme_voie` | `ch3_10_c_quatre` → True |
| `refus_conclure` | `ch3_04_c_refus` → True |
| `refus_damien_ch3` | `ch3_01_c_refuser` → True |
| `refus_pacte_noam` | `ch2_n3_c_refuser` → True |
| `refus_respecte` | `ch5_co_c_respecter` → True |
| `refuse_de_jurer` | `p05_c_silence` → True |
| `refuse_promesse_ysee` | `ch1_06_c_honnete` → True |
| `sacrifice_ilan` | `ch5_tr_c_moi` → True |
| `sans_liste` | `ch4_02_c_renoncer` → True |
| `secret_revele_damien` | `ch4_09_c_secret` → True |
| `solitaire` | `ch1_10_c_garder` → True, `ch3_13_c_seul` → True |
| `style_ironique` | `p01_c_ironie` → True |
| `style_methodique` | `p01_c_methode` → True |
| `style_obstine` | `p01_c_obstine` → True |
| `sympathie_damien` | `ch1_09_c_arithmetique` → True |
| `theo_evoque_damien` | `ch1_09_c_theo` → True |
| `theo_memoire_nourrie` | `ch4_06_c_memoire` → True |
| `theo_reproche` | `ch3_08_c_colere` → True |
| `triage_ch4` | `ch4_y_c_ciblee` → True |
| `veille_seul` | `ch4_11_c_seul` → True |
| `volontaire_trouve` | `ch5_tr_c_volontaire` → True |
| `ysee_sait_theo` | `ch2_01_c_dire` → True |

## Variables persistantes (nouvelle partie enrichie)

- `endings` : fins découvertes, toutes parties confondues.
- `cg` : illustrations débloquées (galerie persistante).
- `achievements` : succès obtenus.
- `truths` : déductions déjà formulées — la route secrète s’ouvre d’emblée en NG+.