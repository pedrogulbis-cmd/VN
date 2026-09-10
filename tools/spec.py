# -*- coding: utf-8 -*-
"""Spécification canonique des personnages et des assets.
Source unique de vérité : le générateur d'images, characters.json et asset.md
sont tous produits à partir de ce fichier.
"""

# ---------------------------------------------------------------- expressions
# Chaque expression modifie sourcils, paupières, regard, bouche, tension,
# inclinaison de la tête. Aucune n'est une simple variation de bouche.
EXPRESSIONS = {
    #                 brow_in brow_out brow_ang  lid   gaze_x gaze_y mouth_c m_open tilt blush tear sweat
    "calm":          dict(bi=0.00, bo=0.00, ba=0.00, lid=0.00, gx=0.00, gy=0.00, mc=0.02, mo=0.00, tilt=0,   blush=0.0, tear=0, sweat=0),
    "smile_soft":    dict(bi=0.03, bo=-0.02, ba=-0.04, lid=0.18, gx=0.02, gy=0.02, mc=0.34, mo=0.00, tilt=-2, blush=0.10, tear=0, sweat=0),
    "happy":         dict(bi=0.06, bo=-0.06, ba=-0.08, lid=0.34, gx=0.00, gy=0.00, mc=0.62, mo=0.28, tilt=-3, blush=0.16, tear=0, sweat=0),
    "amused":        dict(bi=-0.05, bo=-0.08, ba=-0.10, lid=0.26, gx=0.16, gy=0.02, mc=0.44, mo=0.10, tilt=-5, blush=0.06, tear=0, sweat=0),
    "tender":        dict(bi=0.08, bo=0.02, ba=0.04, lid=0.30, gx=0.05, gy=0.06, mc=0.30, mo=0.00, tilt=-4, blush=0.22, tear=0, sweat=0),
    "flustered":     dict(bi=0.14, bo=0.04, ba=0.06, lid=0.10, gx=-0.22, gy=0.10, mc=-0.06, mo=0.16, tilt=-6, blush=0.46, tear=0, sweat=0.3),
    "sad":           dict(bi=0.22, bo=0.10, ba=0.16, lid=0.22, gx=0.00, gy=0.26, mc=-0.34, mo=0.00, tilt=4,  blush=0.08, tear=0.4, sweat=0),
    "worried":       dict(bi=0.20, bo=0.06, ba=0.14, lid=-0.06, gx=-0.10, gy=0.14, mc=-0.20, mo=0.06, tilt=2, blush=0.0, tear=0, sweat=0.25),
    "wary":          dict(bi=-0.08, bo=0.10, ba=0.10, lid=0.34, gx=0.20, gy=-0.04, mc=-0.14, mo=0.00, tilt=-2, blush=0.0, tear=0, sweat=0),
    "angry":         dict(bi=-0.24, bo=0.14, ba=0.22, lid=-0.10, gx=0.00, gy=-0.06, mc=-0.30, mo=0.22, tilt=-3, blush=0.10, tear=0, sweat=0.1),
    "surprised":     dict(bi=0.16, bo=0.16, ba=0.00, lid=-0.34, gx=0.00, gy=-0.06, mc=0.02, mo=0.40, tilt=-1, blush=0.05, tear=0, sweat=0),
    "shocked":       dict(bi=0.24, bo=0.22, ba=0.02, lid=-0.48, gx=0.04, gy=-0.10, mc=-0.10, mo=0.58, tilt=3, blush=0.0, tear=0.15, sweat=0.45),
    "determined":    dict(bi=-0.16, bo=0.04, ba=0.16, lid=0.06, gx=0.00, gy=-0.10, mc=-0.06, mo=0.00, tilt=-2, blush=0.0, tear=0, sweat=0),
    "vulnerable":    dict(bi=0.24, bo=0.12, ba=0.14, lid=0.16, gx=-0.08, gy=0.20, mc=-0.18, mo=0.08, tilt=6, blush=0.20, tear=0.55, sweat=0.1),
    "avert":         dict(bi=0.06, bo=0.02, ba=0.04, lid=0.24, gx=-0.34, gy=0.12, mc=-0.08, mo=0.00, tilt=-7, blush=0.14, tear=0, sweat=0),
    "exhausted":     dict(bi=0.14, bo=0.14, ba=0.06, lid=0.52, gx=0.02, gy=0.20, mc=-0.16, mo=0.10, tilt=8, blush=0.0, tear=0, sweat=0.35),
    # Expressions réservées aux intérêts romantiques
    "affection":     dict(bi=0.10, bo=0.00, ba=0.02, lid=0.28, gx=0.08, gy=0.04, mc=0.24, mo=0.00, tilt=-5, blush=0.34, tear=0, sweat=0),
    "closeness":     dict(bi=0.12, bo=0.04, ba=0.02, lid=0.44, gx=0.02, gy=0.06, mc=0.16, mo=0.06, tilt=-8, blush=0.40, tear=0, sweat=0),
    "jealousy":      dict(bi=-0.14, bo=0.12, ba=0.16, lid=0.24, gx=-0.24, gy=0.04, mc=-0.22, mo=0.00, tilt=-4, blush=0.18, tear=0, sweat=0),
    "fear_of_loss":  dict(bi=0.26, bo=0.10, ba=0.18, lid=-0.18, gx=0.06, gy=0.02, mc=-0.26, mo=0.24, tilt=2, blush=0.12, tear=0.35, sweat=0.4),
    "relief":        dict(bi=0.10, bo=-0.02, ba=0.00, lid=0.40, gx=0.00, gy=0.08, mc=0.28, mo=0.06, tilt=-3, blush=0.16, tear=0.25, sweat=0),
    "breakup":       dict(bi=0.04, bo=0.16, ba=0.10, lid=0.30, gx=-0.28, gy=0.16, mc=-0.30, mo=0.00, tilt=5, blush=0.0, tear=0.30, sweat=0),
    "epilogue_good": dict(bi=0.04, bo=-0.04, ba=-0.04, lid=0.30, gx=0.00, gy=0.00, mc=0.52, mo=0.12, tilt=-3, blush=0.24, tear=0.18, sweat=0),
    "epilogue_bad":  dict(bi=0.18, bo=0.14, ba=0.10, lid=0.46, gx=-0.14, gy=0.22, mc=-0.28, mo=0.00, tilt=7, blush=0.0, tear=0.20, sweat=0),
}

BASE_EXPRESSIONS = ["calm", "smile_soft", "happy", "amused", "tender", "flustered",
                    "sad", "worried", "wary", "angry", "surprised", "shocked",
                    "determined", "vulnerable", "avert", "exhausted"]
ROMANCE_EXPRESSIONS = ["affection", "closeness", "jealousy", "fear_of_loss",
                       "relief", "breakup", "epilogue_good", "epilogue_bad"]
# Sous-ensemble utilisé pour les tenues secondaires et les états altérés
SHORT_EXPRESSIONS = ["calm", "worried", "wary", "angry", "shocked",
                     "determined", "vulnerable", "exhausted"]

POSES = ["neutral", "defensive", "dynamic"]

# ---------------------------------------------------------------- personnages
CHARACTERS = {
    "kael": dict(
        name="Kaël Ravier", age=29, role="Marcheur de Faille, contrebandier de serments",
        height=1.02, build="longiligne", face="ovale anguleux, mâchoire nette",
        skin="#C98F63", skin_shadow="#A9704A",
        hair="#1A2340", hair_light="#2E3E6B", streak="#4FD8E8", eyes="#4FD8E8",
        coat="#141C33", coat_light="#22304F", accent="#4FD8E8", trim="#8FA3C8",
        hair_style="mid_swept", romance=True,
        outfits={"default": "manteau long bleu nuit, col relevé, écharpe cyan usée",
                 "combat": "veste courte sanglée, avant-bras bandés, harnais de fioles"},
        states=["normal", "injured", "wet"],
        palette=["#141C33", "#22304F", "#4FD8E8", "#C98F63", "#8FA3C8"],
        immutable="Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche.",
    ),
    "noam": dict(
        name="Noam Sardou", age=32, role="Capitaine de la Garde des Serments",
        height=1.05, build="large d'épaules", face="carré, pommettes hautes",
        skin="#E8C3A0", skin_shadow="#C79A76",
        hair="#5A1E22", hair_light="#8A3A38", streak="#D9A441", eyes="#D9A441",
        coat="#3A0E16", coat_light="#5E1A24", accent="#D9A441", trim="#E0C98A",
        hair_style="short_back", romance=True,
        outfits={"default": "uniforme de la Garde, épaulières dorées, gorgerin gravé",
                 "civil": "chemise sombre ouverte, bretelles, sans insigne"},
        states=["normal", "injured", "wet"],
        palette=["#3A0E16", "#5E1A24", "#D9A441", "#E8C3A0", "#E0C98A"],
        immutable="Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche.",
    ),
    "ysee": dict(
        name="Ysée Marchand", age=34, role="Médecin des Rompus",
        height=0.99, build="fine, dos droit",
        face="losange, menton fin",
        skin="#8A5A3C", skin_shadow="#6B4229",
        hair="#2A1436", hair_light="#4A2A5C", streak="#7BE0A8", eyes="#7BE0A8",
        coat="#38214C", coat_light="#523070", accent="#7BE0A8", trim="#C7B0DC",
        hair_style="long_tied", romance=False,
        outfits={"default": "blouse violette sanglée, gants courts, sacoche de fioles"},
        states=["normal", "wet"],
        palette=["#38214C", "#523070", "#7BE0A8", "#8A5A3C", "#C7B0DC"],
        immutable="Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite.",
    ),
    "damien": dict(
        name="Damien Vaugrise-Loret", age=41, role="Chancelier du Bureau des Serments",
        height=1.03, build="droit, immobile",
        face="allongé, traits secs",
        skin="#EBD3BC", skin_shadow="#C6A98F",
        hair="#D8D2C4", hair_light="#F0EBE0", streak="#D9A441", eyes="#C9B06A",
        coat="#F2EEE4", coat_light="#FFFFFF", accent="#D9A441", trim="#8C7A4A",
        hair_style="slick_back", romance=False,
        outfits={"default": "manteau de chancelier ivoire, chaîne d'office, gants blancs"},
        states=["normal", "aura"],
        palette=["#F2EEE4", "#D9A441", "#8C7A4A", "#EBD3BC", "#2A2418"],
        immutable="Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert.",
    ),
    "theo": dict(
        name="Théo Vasseur", age=30, role="l'Ancre de la Faille",
        height=1.00, build="amaigri",
        face="ovale doux, cernes marqués",
        skin="#DCC9C4", skin_shadow="#B39C99",
        hair="#DCEAF2", hair_light="#FFFFFF", streak="#8FE7FF", eyes="#B9F2FF",
        coat="#20323F", coat_light="#31505F", accent="#8FE7FF", trim="#9FBFCC",
        hair_style="mid_swept", romance=False,
        outfits={"default": "robe d'ancre grise, coutures lumineuses, pieds nus",
                 "civil": "pull élimé et veste d'archiviste, tenue d'avant la Faille"},
        states=["normal", "aura", "injured"],
        palette=["#20323F", "#8FE7FF", "#DCEAF2", "#DCC9C4", "#31505F"],
        immutable="Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille.",
    ),
}

# ---------------------------------------------------------------- décors
BACKGROUNDS = [
    ("bg_pont_confluence_night", "Pont de la Confluence, nuit", "night", "bridge"),
    ("bg_pont_confluence_dawn", "Pont de la Confluence, aube", "dawn", "bridge"),
    ("bg_archives_bureau", "Salle des archives du Bureau", "interior", "archive"),
    ("bg_archives_bureau_dark", "Archives du Bureau, coupure de courant", "dark", "archive"),
    ("bg_grand_hall_bureau", "Grand hall du Bureau des Serments", "interior", "hall"),
    ("bg_quai_rompus_night", "Quai des Rompus, nuit", "night", "quay"),
    ("bg_quai_rompus_dawn", "Quai des Rompus, aube", "dawn", "quay"),
    ("bg_clinique_ysee", "Clinique d'Ysée, sous-sol", "interior", "clinic"),
    ("bg_appartement_ilan", "Appartement d'Ilan", "interior", "flat"),
    ("bg_ruelle_pluie", "Ruelle de la Basse-Ville sous la pluie", "rain", "alley"),
    ("bg_toit_orage", "Toit du Bureau, orage", "storm", "roof"),
    ("bg_marche_serments", "Marché noir des serments", "night", "market"),
    ("bg_coeur_faille", "Cœur de la Faille", "faille", "faille"),
    ("bg_chambre_ancre", "Chambre de l'Ancre", "faille", "anchor"),
    ("bg_faille_embrasee", "Cœur de la Faille embrasé", "burn", "faille"),
    ("bg_hall_vide", "Grand hall évacué", "dark", "hall"),
    ("bg_noir", "Écran noir narratif", "black", "black"),
]

# ---------------------------------------------------------------- CG
CGS = [
    ("cg_kael_serment_partage", "Kaël et Ilan scellent un serment partagé sur le pont",
     "Kaël tient le poignet d'Ilan au-dessus du garde-corps ; un fil de lumière cyan relie leurs avant-bras, la pluie s'immobilise autour d'eux.", "kael"),
    ("cg_noam_aveu_pluie", "Noam avoue à Ilan sous la pluie, uniforme ouvert",
     "Noam, tête nue, uniforme dégrafé, tend son insigne à Ilan sous une averse dorée par les lampadaires.", "noam"),
    ("cg_theo_revelation_ancre", "Révélation : Théo suspendu au cœur de la Faille",
     "Théo flotte au centre d'un anneau de lumière, les veines cyan courant sur tout son corps, Ilan à genoux sous lui.", "theo"),
    ("cg_grand_serment", "Le Grand Serment embrase le Grand hall",
     "Damien lève les bras au centre du hall, sept cents fils dorés convergent vers lui, la foule agenouillée.", "damien"),
    ("cg_ilan_rompu", "Ilan Rompu, son nom s'efface",
     "Ilan vu de dos face à un miroir brisé où son reflet perd ses traits, lettres de son nom se détachant en cendres.", None),
    ("cg_aube_sans_serment", "L'aube sans serment sur la ville libérée",
     "La Faille refermée en cicatrice lumineuse au-dessus de la ville à l'aube, silhouettes sur le pont, aucun fil de lumière.", None),
]

# ---------------------------------------------------------------- audio
MUSIC = [
    ("music_menu", "Thème du menu : nappe froide, arpège cyan, lent", 52),
    ("music_calm", "Thème calme : piano feutré, tenue grave", 48),
    ("music_romance", "Thème romantique : cordes chaudes, motif ascendant", 50),
    ("music_tension", "Thème de tension : ostinato bas, pulsation irrégulière", 44),
    ("music_danger", "Thème de danger : cluster grave, percussion sèche", 40),
    ("music_emotion", "Thème émotionnel : nappe majeure suspendue", 50),
    ("music_revelation", "Thème de révélation : montée harmonique, cloche", 46),
    ("music_ending", "Thème de fin : résolution lente, aigus cristallins", 56),
]
AMBIANCE = [
    ("amb_pluie", "Pluie continue sur pierre", 30),
    ("amb_faille", "Bourdon de la Faille, souffle harmonique", 30),
    ("amb_ville_nuit", "Ville nocturne lointaine, eau du fleuve", 30),
]
SFX = [
    ("sfx_confirm", "Validation : clic cristallin court", 0.35),
    ("sfx_locked", "Choix verrouillé : sourd, mat", 0.30),
    ("sfx_discovery", "Découverte d'indice : arpège ascendant", 0.90),
    ("sfx_menu", "Ouverture de menu : souffle bref", 0.40),
    ("sfx_chapter", "Changement de chapitre : cloche grave", 1.80),
    ("sfx_promise", "Serment scellé : résonance métallique", 1.40),
]

SPRITE_W, SPRITE_H = 720, 1080
BG_W, BG_H = 1920, 1080
CG_W, CG_H = 1920, 1080
