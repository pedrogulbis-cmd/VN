# Personnages

Fiches générées depuis `tools/spec.py` (source unique des couleurs et des invariants visuels).


## Kaël Ravier
- Identifiant : `kael` — 29 ans — Marcheur de Faille, contrebandier de serments
- Romançable : oui
- Palette : `#141C33` `#22304F` `#4FD8E8` `#C98F63` `#8FA3C8`
- Tenues : **default** (manteau long bleu nuit, col relevé, écharpe cyan usée) ; **combat** (veste courte sanglée, avant-bras bandés, harnais de fioles)
- États : normal, injured, wet
- Expressions disponibles : 24
- Invariants visuels : Cicatrice de serment rompu barrant l'avant-bras gauche, mèche cyan à droite, boucle d'oreille anneau à gauche.
- Sprites livrés : 144
- Apparaît dans 9 scènes

## Noam Sardou
- Identifiant : `noam` — 32 ans — Capitaine de la Garde des Serments
- Romançable : oui
- Palette : `#3A0E16` `#5E1A24` `#D9A441` `#E8C3A0` `#E0C98A`
- Tenues : **default** (uniforme de la Garde, épaulières dorées, gorgerin gravé) ; **civil** (chemise sombre ouverte, bretelles, sans insigne)
- États : normal, injured, wet
- Expressions disponibles : 24
- Invariants visuels : Insigne à sept anneaux sur l'épaule droite, entaille verticale sur le sourcil gauche.
- Sprites livrés : 144
- Apparaît dans 11 scènes

## Ysée Marchand
- Identifiant : `ysee` — 34 ans — Médecin des Rompus
- Romançable : non
- Palette : `#38214C` `#523070` `#7BE0A8` `#8A5A3C` `#C7B0DC`
- Tenues : **default** (blouse violette sanglée, gants courts, sacoche de fioles)
- États : normal, wet
- Expressions disponibles : 16
- Invariants visuels : Trois anneaux de fil vert au poignet gauche (un par patient perdu), tresse basse à droite.
- Sprites livrés : 72
- Apparaît dans 10 scènes

## Damien Vaugrise-Loret
- Identifiant : `damien` — 41 ans — Chancelier du Bureau des Serments
- Romançable : non
- Palette : `#F2EEE4` `#D9A441` `#8C7A4A` `#EBD3BC` `#2A2418`
- Tenues : **default** (manteau de chancelier ivoire, chaîne d'office, gants blancs)
- États : normal, aura
- Expressions disponibles : 16
- Invariants visuels : Chaîne d'office à sept maillons, alliance noire à la main droite, jamais de col ouvert.
- Sprites livrés : 72
- Apparaît dans 11 scènes

## Théo Vasseur
- Identifiant : `theo` — 30 ans — l'Ancre de la Faille
- Romançable : non
- Palette : `#20323F` `#8FE7FF` `#DCEAF2` `#DCC9C4` `#31505F`
- Tenues : **default** (robe d'ancre grise, coutures lumineuses, pieds nus) ; **civil** (pull élimé et veste d'archiviste, tenue d'avant la Faille)
- États : normal, aura, injured
- Expressions disponibles : 16
- Invariants visuels : Veines lumineuses cyan remontant du poignet gauche à la tempe, cheveux décolorés par la Faille.
- Sprites livrés : 120
- Apparaît dans 9 scènes

## Dimensions relationnelles

| Dimension | Bornes | Rôle |
|---|---|---|
| Affinité | -100 → 100 | Sympathie générale. Peut devenir négative. |
| Confiance | 0 → 100 | Ce que le personnage est prêt à te confier. |
| Méfiance | 0 → 100 | Indépendante de la confiance : on peut apprécier quelqu’un et s’en méfier. |
| Respect | 0 → 100 | Estime professionnelle et morale. |
| Tension | 0 → 100 | Conflit latent. Alimente aussi bien la rupture que l’attirance. |
| Vulnérabilité partagée | 0 → 100 | Ce que vous avez laissé voir l’un à l’autre. |
| Attraction | 0 → 100 | Uniquement pour les personnages romançables. |

## Arcs

- **Kaël Ravier** — Kaël réagit à la loyauté concrète, pas aux déclarations. La tension élevée ne le fait pas fuir ; le mépris institutionnel, si.
  - seuil chapitre 2 : Kaël Ravier.Affinité >= 30
  - seuil chapitre 4 : Kaël Ravier.Affinité >= 45 ET Kaël Ravier.Attraction >= 25
- **Noam Sardou** — Noam s’ouvre par la vérité, pas par la douceur. Un mensonge découvert coûte durablement.
  - seuil chapitre 2 : Noam Sardou.Confiance >= 30
  - seuil chapitre 4 : Noam Sardou.Affinité >= 45 ET Noam Sardou.Attraction >= 25
- **Ysée Marchand** — Alliance. Se gagne par des actes envers ses patients, jamais par des promesses verbales.
- **Damien Vaugrise-Loret** — Antagoniste. Le respect monte quand on le contredit avec des faits ; la confiance monte quand on accepte son arithmétique.
- **Théo Vasseur** — Lien fraternel. La mémoire partagée le maintient lucide plus longtemps.