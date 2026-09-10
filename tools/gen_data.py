# -*- coding: utf-8 -*-
"""Produit les fichiers de données dérivés de spec.py ET de l'arborescence réelle.
Rien n'est déclaré s'il n'existe pas sur le disque.
"""
import json
import os
import sys

from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from spec import (CHARACTERS, EXPRESSIONS, BASE_EXPRESSIONS, ROMANCE_EXPRESSIONS,
                  SHORT_EXPRESSIONS, POSES, BACKGROUNDS, CGS, MUSIC, AMBIANCE, SFX,
                  SPRITE_W, SPRITE_H, BG_W, BG_H)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

FR_EXPR = {
    "calm": "neutre", "smile_soft": "sourire discret", "happy": "heureux", "amused": "amusé",
    "tender": "tendre", "flustered": "gêné", "sad": "triste", "worried": "inquiet",
    "wary": "méfiant", "angry": "en colère", "surprised": "surpris", "shocked": "choqué",
    "determined": "déterminé", "vulnerable": "vulnérable", "avert": "regard détourné",
    "exhausted": "épuisé", "affection": "affection contenue", "closeness": "proximité émotionnelle",
    "jealousy": "jalousie maîtrisée", "fear_of_loss": "peur de perdre le protagoniste",
    "relief": "soulagement", "breakup": "rupture", "epilogue_good": "épilogue positif",
    "epilogue_bad": "épilogue négatif",
}
FR_POSE = {"neutral": "pose neutre de conversation", "defensive": "pose fermée, défensive",
           "dynamic": "pose dynamique, engagée"}
FR_STATE = {"normal": "état normal", "injured": "blessé, bandages et sang séché",
            "wet": "trempé par la pluie", "aura": "traversé par l'énergie de la Faille"}


def dims(path):
    try:
        with Image.open(path) as im:
            return list(im.size)
    except Exception:
        return None


def build():
    manifest = []
    characters = {}

    for cid, ch in CHARACTERS.items():
        exprs = BASE_EXPRESSIONS + (ROMANCE_EXPRESSIONS if ch["romance"] else [])
        sprites = {}
        for outfit in ch["outfits"]:
            for pose in POSES:
                for ex in EXPRESSIONS:
                    for st in ch["states"]:
                        name = f"character_{cid}_{outfit}_{pose}_{ex}_{st}.webp"
                        p = os.path.join(ROOT, "assets", "characters", name)
                        if not os.path.exists(p):
                            continue
                        sprites.setdefault(outfit, {}).setdefault(pose, {}).setdefault(ex, {})[st] = \
                            "assets/characters/" + name
                        manifest.append({
                            "id": name[:-5], "path": "assets/characters/" + name, "type": "sprite",
                            "character": cid, "outfit": outfit, "pose": pose, "expression": ex,
                            "state": st, "dimensions": dims(p), "transparency": True,
                            "status": "placeholder-procedural",
                            "alt": f"{ch['name']}, {FR_POSE[pose]}, expression {FR_EXPR.get(ex, ex)}, {FR_STATE.get(st, st)}.",
                        })
        characters[cid] = {
            "id": cid, "name": ch["name"], "age": ch["age"], "role": ch["role"],
            "palette": ch["palette"], "accent": ch["accent"], "eyes": ch["eyes"],
            "hair": ch["hair"], "romanceable": ch["romance"],
            "outfits": ch["outfits"], "states": ch["states"],
            "expressions": exprs,
            "immutable": ch["immutable"],
            "sprites": sprites,
            "fallback": {"outfit": "default", "pose": "neutral", "expression": "calm", "state": "normal"},
            "expressionFallback": {
                "affection": "smile_soft", "closeness": "tender", "jealousy": "wary",
                "fear_of_loss": "worried", "relief": "smile_soft", "breakup": "sad",
                "epilogue_good": "happy", "epilogue_bad": "sad", "tender": "smile_soft",
                "amused": "smile_soft", "flustered": "avert", "shocked": "surprised",
                "exhausted": "sad", "vulnerable": "sad", "avert": "calm", "wary": "worried",
                "determined": "calm", "surprised": "calm", "angry": "wary", "sad": "worried",
                "worried": "calm", "happy": "smile_soft", "smile_soft": "calm", "calm": "calm",
            },
        }

    backgrounds = {}
    for bid, label, kind, fam in BACKGROUNDS:
        p = os.path.join(ROOT, "assets", "backgrounds", bid + ".webp")
        if not os.path.exists(p):
            continue
        backgrounds[bid] = {"path": "assets/backgrounds/" + bid + ".webp", "label": label}
        manifest.append({"id": bid, "path": "assets/backgrounds/" + bid + ".webp", "type": "background",
                         "dimensions": dims(p), "transparency": False,
                         "status": "placeholder-procedural", "alt": label})

    cgs = {}
    for cid, title, desc, char in CGS:
        p = os.path.join(ROOT, "assets", "cg", cid + ".webp")
        if not os.path.exists(p):
            continue
        cgs[cid] = {"path": "assets/cg/" + cid + ".webp", "title": title, "alt": desc, "character": char}
        manifest.append({"id": cid, "path": "assets/cg/" + cid + ".webp", "type": "cg",
                         "character": char, "dimensions": dims(p), "transparency": False,
                         "status": "placeholder-procedural", "alt": desc})

    audio = {"music": {}, "ambiance": {}, "sfx": {}}
    for key, coll in (("music", MUSIC), ("ambiance", AMBIANCE), ("sfx", SFX)):
        for aid, label, dur in coll:
            for ext in ("ogg", "wav"):
                p = os.path.join(ROOT, "assets", "audio", aid + "." + ext)
                if os.path.exists(p):
                    audio[key][aid] = {"path": "assets/audio/" + aid + "." + ext, "label": label,
                                       "duration": dur}
                    manifest.append({"id": aid, "path": "assets/audio/" + aid + "." + ext,
                                     "type": key, "dimensions": None, "transparency": False,
                                     "status": "placeholder-procedural (synthèse)", "alt": label})
                    break

    ui = {}
    for name in sorted(os.listdir(os.path.join(ROOT, "assets", "ui"))) if os.path.isdir(
            os.path.join(ROOT, "assets", "ui")) else []:
        p = os.path.join(ROOT, "assets", "ui", name)
        ui[os.path.splitext(name)[0]] = "assets/ui/" + name
        manifest.append({"id": os.path.splitext(name)[0], "path": "assets/ui/" + name, "type": "ui",
                         "dimensions": dims(p), "transparency": name.endswith((".png", ".webp", ".svg")),
                         "status": "placeholder-procedural", "alt": "Élément d'interface " + name})

    write(os.path.join(ROOT, "data", "characters.json"), {"characters": characters})
    write(os.path.join(ROOT, "data", "assets.json"),
          {"backgrounds": backgrounds, "cg": cgs, "audio": audio, "ui": ui})
    write(os.path.join(ROOT, "docs", "asset-manifest.json"),
          {"generatedFrom": "tools/spec.py + tools/gen_art.py + tools/gen_audio.py",
           "count": len(manifest), "assets": manifest})
    write_asset_md(manifest)
    print("assets déclarés :", len(manifest))
    return manifest


def write(path, obj):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=1)


NEG = ("Contraintes négatives : pas de texte ni de watermark, pas de cadre, pas de fond blanc "
       "sur un sprite, pas de doigts déformés, pas de changement de coiffure ou de couleur d'yeux, "
       "pas de style 3D ou photoréaliste, pas de personnage mineur, pas de logo de marque.")


def write_asset_md(manifest):
    L = []
    L.append("# asset.md — inventaire complet et prompts de production AAA\n")
    L.append("Ce fichier liste **chaque fichier réellement présent** dans `/assets`. ")
    L.append("Tous les visuels livrés sont des **placeholders procéduraux** dessinés par "
             "`tools/gen_art.py` : ils sont cohérents, détourés et jamais cassés, mais ils ne "
             "prétendent pas être des illustrations finales.\n")
    L.append("Pour chaque fichier : le nom exact à conserver, les dimensions, la transparence, "
             "et un prompt autonome utilisable dans un générateur d'images ou comme brief "
             "d'illustrateur.\n")
    L.append("## Style directeur commun\n")
    L.append("> Illustration manhwa dark fantasy contemporaine haut de gamme, encrage net, "
             "ombres colorées, lumière de bord froide venant du haut-droite, palette bleu nuit "
             "`#141C33`, violet `#38214C`, cyan `#4FD8E8`, rouge sombre `#3A0E16`, or `#D9A441`. "
             "Rendu peinture numérique cel-shading 2 tons + spéculaires, pas de line-art tremblant. "
             "Cadrage cinématographique, atmosphère nocturne urbaine.\n")
    L.append("## Fiches personnages immuables\n")
    for cid, ch in CHARACTERS.items():
        L.append(f"### {ch['name']} (`{cid}`)")
        L.append(f"- Âge : {ch['age']} ans (adulte). Rôle : {ch['role']}.")
        L.append(f"- Morphologie : {ch['build']} — visage {ch['face']}.")
        L.append(f"- Cheveux `{ch['hair']}` (mèches `{ch['hair_light']}`, mèche signature `{ch['streak']}`), "
                 f"yeux `{ch['eyes']}`, carnation `{ch['skin']}` / ombre `{ch['skin_shadow']}`.")
        L.append(f"- Manteau `{ch['coat']}` / `{ch['coat_light']}`, accent `{ch['accent']}`, liseré `{ch['trim']}`.")
        L.append(f"- Tenues : " + " ; ".join(f"**{k}** — {v}" for k, v in ch["outfits"].items()) + ".")
        L.append(f"- **Ne doit jamais changer** : {ch['immutable']}\n")
    L.append("## Inventaire fichier par fichier\n")
    for a in manifest:
        L.append(f"### `{a['path']}`")
        d = a["dimensions"]
        L.append(f"- Dimensions : {d[0]}×{d[1]} px" if d else "- Fichier audio")
        L.append(f"- Transparence : {'oui (alpha réel)' if a['transparency'] else 'non'}")
        L.append(f"- Statut livré : {a['status']}")
        L.append(f"- Texte alternatif : {a['alt']}")
        L.append("- Prompt AAA :")
        L.append("  > " + prompt_for(a))
        L.append("")
    with open(os.path.join(ROOT, "docs", "asset.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(L))


def prompt_for(a):
    t = a["type"]
    if t == "sprite":
        ch = CHARACTERS[a["character"]]
        return (f"Sprite de visual novel manhwa, {ch['name']}, {ch['age']} ans, homme adulte "
                if a["character"] in ("kael", "noam", "damien", "theo") else
                f"Sprite de visual novel manhwa, {ch['name']}, {ch['age']} ans, femme adulte ") + \
            (f"— {ch['build']}, visage {ch['face']}, cheveux {ch['hair']} avec mèche signature {ch['streak']}, "
             f"yeux {ch['eyes']}, carnation {ch['skin']}. Tenue « {a['outfit']} » : "
             f"{ch['outfits'][a['outfit']]}. {FR_POSE[a['pose']].capitalize()}. "
             f"Expression : {FR_EXPR.get(a['expression'], a['expression'])} — sourcils, paupières, "
             f"direction du regard, bouche et inclinaison de tête cohérents entre eux. "
             f"État : {FR_STATE.get(a['state'], a['state'])}. "
             f"Cadrage mi-cuisse, personnage centré, regard vers la caméra, fond 100% transparent, "
             f"lumière de bord {ch['accent']} venant du haut-droite, ombre cel bleu nuit en bas-gauche. "
             f"Élément immuable : {ch['immutable']} "
             f"Sortie {SPRITE_W}×{SPRITE_H} px, PNG-32 ou WebP avec canal alpha réel, nommé "
             f"`{os.path.basename(a['path'])}`. Utiliser la character sheet canonique comme image de "
             f"référence pour garantir un visage identique. {NEG}")
    if t == "background":
        return (f"Décor de visual novel, {a['alt']}. Peinture numérique manhwa dark fantasy urbain, "
                f"perspective large sans personnage, profondeur atmosphérique, lumières pratiques "
                f"(néons, lanternes, reflets sur pierre mouillée), palette bleu nuit / violet / cyan / or. "
                f"Zone centrale basse laissée lisible pour la boîte de dialogue, zone médiane laissée "
                f"dégagée pour l'incrustation des sprites. Sortie {BG_W}×{BG_H} px, WebP qualité 90, "
                f"sans transparence, nommé `{os.path.basename(a['path'])}`. {NEG}")
    if t == "cg":
        return (f"Illustration CG pleine page de visual novel : {a['alt']} Composition "
                f"cinématographique en plan large, contre-jour coloré, ombres portées longues, "
                f"détail des mains et des regards, aucune nudité, personnages explicitement adultes. "
                f"Palette bleu nuit / cyan / or. Sortie {BG_W}×{BG_H} px, WebP qualité 92, sans "
                f"transparence, nommé `{os.path.basename(a['path'])}`. {NEG}")
    if t in ("music", "ambiance"):
        return (f"Piste audio libre de droits, {a['alt']}. Boucle parfaite sans clic de raccord, "
                f"durée 45–90 s, tempo lent, mixage laissant la place à une voix intérieure, "
                f"−16 LUFS, OGG Vorbis q5 ou WAV 44,1 kHz, nommé `{os.path.basename(a['path'])}`.")
    if t == "sfx":
        return (f"Effet sonore court, {a['alt']}. Attaque nette, pas de réverbération longue, "
                f"mono, −18 LUFS, OGG ou WAV 44,1 kHz, nommé `{os.path.basename(a['path'])}`.")
    return (f"Élément d'interface : {a['alt']}. Style fantasy contemporain raffiné, traits fins or "
            f"sur fond bleu nuit, lisible à 24 px comme à 512 px, sans texte incrusté, "
            f"nommé `{os.path.basename(a['path'])}`. {NEG}")


if __name__ == "__main__":
    build()
