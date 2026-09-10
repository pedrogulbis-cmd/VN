# -*- coding: utf-8 -*-
"""Documentation dérivée des données réelles.
Rien n'est écrit à la main ici : si le scénario change, les docs changent.
"""
import json
import os
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(ROOT, "data")
DOCS = os.path.join(ROOT, "docs")


def load(p):
    with open(os.path.join(ROOT, p), encoding="utf-8") as f:
        return json.load(f)


chapters = load("data/chapters.json")
labels = load("data/labels.json")
endings = load("data/endings.json")["endings"]
characters = load("data/characters.json")["characters"]
achievements = load("data/achievements.json")["achievements"]

story = {}
for f in chapters["files"]:
    story.update(load(f)["scenes"])

CH = {c["number"]: c["title"] for c in chapters["list"]}


def write(name, text):
    with open(os.path.join(DOCS, name), "w", encoding="utf-8") as f:
        f.write(text)
    print("écrit :", name)


def cond_txt(c):
    if not c:
        return ""
    if "all" in c:
        return " ET ".join(cond_txt(x) for x in c["all"])
    if "any" in c:
        return "(" + " OU ".join(cond_txt(x) for x in c["any"]) + ")"
    if "not" in c:
        return "NON(" + cond_txt(c["not"]) + ")"
    op = c.get("op", ">=")
    if "stat" in c:
        return f"{labels['stats'].get(c['stat'], c['stat'])} {op} {c['value']}"
    if "rel" in c:
        return f"{labels['chars'].get(c['rel'], c['rel'])}.{labels['rel'].get(c['field'], c['field'])} {op} {c['value']}"
    if "clue" in c:
        return f"indice « {labels['clues'].get(c['clue'], c['clue'])} »"
    if "deduction" in c:
        return f"déduction « {labels['deductions'].get(c['deduction'], c['deduction'])} »"
    if "promise" in c:
        return f"promesse « {labels['promises'].get(c['promise'], c['promise'])} » = {c.get('status', 'kept')}"
    if "flag" in c:
        return f"drapeau {c['flag']}" + ("" if c.get("value", True) else " = faux")
    if "route" in c:
        return f"route {c['route']} = {c.get('status', 'open')}"
    if "seen" in c:
        return f"scène {c['seen']} déjà vue"
    if "item" in c:
        return f"objet {c['item']}"
    if "chapter" in c:
        return f"chapitre {op} {c['value']}"
    if "faction" in c:
        return f"faction {c['faction']} {op} {c['value']}"
    return json.dumps(c, ensure_ascii=False)


# ---------------------------------------------------------------- branching
def branching():
    L = ["# Carte de ramification\n",
         "Générée automatiquement depuis `data/story/*.json` par `tools/gen_docs.py`.",
         f"\n**{len(story)} scènes**, "
         f"**{sum(len(s.get('choices', [])) for s in story.values())} choix**, "
         f"**{len(endings)} fins**.\n"]
    by_ch = defaultdict(list)
    for sid, s in story.items():
        by_ch[s["chapter"]].append(sid)
    for ch in sorted(by_ch):
        L.append(f"\n## {CH.get(ch, 'Chapitre ' + str(ch))}\n")
        for sid in by_ch[ch]:
            s = story[sid]
            L.append(f"### `{sid}` — {s.get('title', '')}")
            meta = []
            if s.get("route") and s["route"] != "commune":
                meta.append(f"route **{s['route']}**")
            if s.get("background"):
                meta.append(f"décor `{s['background']}`")
            if s.get("cg"):
                meta.append(f"CG `{s['cg']}`")
            if meta:
                L.append("*" + ", ".join(meta) + "*")
            L.append(f"- {len(s.get('lines', []))} répliques")
            for c in s.get("choices", []):
                bits = [f"- **{c['text']}**"]
                tags = []
                if c.get("tone"):
                    tags.append(labels["tones"].get(c["tone"], c["tone"]))
                if c.get("secret"):
                    tags.append("secret")
                if c.get("irreversible"):
                    tags.append("irréversible")
                if c.get("timed"):
                    tags.append(f"chronométré {c['timed']}s")
                if c.get("deduction"):
                    tags.append("déduction")
                if tags:
                    bits.append(f"`{' · '.join(tags)}`")
                L.append(" ".join(bits))
                if c.get("requires"):
                    L.append(f"  - requiert : {cond_txt(c['requires'])}")
                if c.get("deduction"):
                    d = c["deduction"]
                    L.append(f"  - réussite si : {cond_txt(d.get('requires'))}")
                    L.append(f"  - succès → `{d.get('successScene', c.get('next'))}` · échec → `{d.get('failScene', c.get('next'))}`")
                elif c.get("ending"):
                    L.append(f"  - → **fin {c['ending']}**")
                else:
                    L.append(f"  - → `{c.get('next')}`")
                    for b in c.get("nextIf", []):
                        L.append(f"  - → `{b['scene']}` si {cond_txt(b['when'])}")
            if not s.get("choices"):
                for b in s.get("nextIf", []):
                    L.append(f"- → `{b['scene']}` si {cond_txt(b['when'])}")
                if s.get("ending"):
                    L.append(f"- → **fin {s['ending']}**")
                elif s.get("next"):
                    L.append(f"- → `{s['next']}`")
            L.append("")
    return "\n".join(L)


# ------------------------------------------------------- matrice conséquences
def consequences():
    L = ["# Matrice des conséquences\n",
         "Chaque ligne relie une décision à ses effets mesurables. Générée depuis les données.\n"]
    L.append("## Conséquences différées\n")
    L.append("| Origine | Échéance | Condition | Effet | Message affiché |")
    L.append("|---|---|---|---|---|")
    for sid, s in story.items():
        blocks = [("scène " + sid, s.get("enter"))]
        for c in s.get("choices", []):
            blocks.append((f"choix `{c['id']}`", c.get("effects")))
            if c.get("deduction"):
                blocks.append((f"déduction `{c['id']}` (succès)", c["deduction"].get("successEffects")))
                blocks.append((f"déduction `{c['id']}` (échec)", c["deduction"].get("failEffects")))
        for origin, fx in blocks:
            if not fx:
                continue
            for d in fx.get("deferred", []):
                due = f"chapitre {d['chapter']}" if "chapter" in d else (
                    f"scène `{d['scene']}`" if "scene" in d else d.get("trigger", "—"))
                eff = json.dumps(d.get("effects", {}), ensure_ascii=False)
                L.append(f"| {origin} | {due} | {cond_txt(d.get('when')) or '—'} | `{eff}` | {d.get('note', '—')} |")
    L.append("\n## Promesses : où elles se font, où elles se paient\n")
    L.append("| Promesse | Faite en | Tenue en | Effet de la rupture |")
    L.append("|---|---|---|---|")
    made, kept = defaultdict(list), defaultdict(list)
    for sid, s in story.items():
        for c in s.get("choices", []):
            for pid, status in (c.get("effects") or {}).get("promises", {}).items():
                (made if status == "made" else kept)[pid].append(c["id"])
        for pid, status in (s.get("enter") or {}).get("promises", {}).items():
            (made if status == "made" else kept)[pid].append(sid)
    for pid, lab in labels["promises"].items():
        L.append(f"| {lab} | {', '.join('`%s`' % x for x in made.get(pid, [])) or '—'} "
                 f"| {', '.join('`%s`' % x for x in kept.get(pid, [])) or '—'} "
                 f"| relation dégradée, accès conditionnels perdus |")
    L.append("\n## Limites franchies (mémoire relationnelle négative)\n")
    L.append("| Identifiant | Texte affiché au joueur |")
    L.append("|---|---|")
    for k, v in labels["boundaries"].items():
        L.append(f"| `{k}` | {v} |")
    L.append("\n## Contreparties des statistiques élevées\n")
    L.append("| Statistique | Contrepartie à 8+ |")
    L.append("|---|---|")
    for k, v in labels["statDrawbacks"].items():
        L.append(f"| {labels['stats'][k]} | {v} |")
    return "\n".join(L)


# ------------------------------------------------------------------- flags
def flags_doc():
    used = defaultdict(list)
    routes = defaultdict(list)
    for sid, s in story.items():
        srcs = [(sid, s.get("enter"))] + [(c["id"], c.get("effects")) for c in s.get("choices", [])]
        for c in s.get("choices", []):
            if c.get("deduction"):
                srcs.append((c["id"] + " (succès)", c["deduction"].get("successEffects")))
                srcs.append((c["id"] + " (échec)", c["deduction"].get("failEffects")))
        for origin, fx in srcs:
            if not fx:
                continue
            for k, v in (fx.get("flags") or {}).items():
                used[k].append(f"`{origin}` → {v}")
            for kind in ("open", "close", "lock"):
                for r in (fx.get("routes") or {}).get(kind, []):
                    routes[r].append(f"`{origin}` ({kind})")
    L = ["# Drapeaux, routes et variables d’état\n",
         "Généré depuis les données. Tout drapeau posé par le scénario apparaît ici.\n",
         "## Routes\n", "| Route | Posée par |", "|---|---|"]
    for r, v in sorted(routes.items()):
        L.append(f"| `{r}` | {', '.join(v)} |")
    L.append("\n## Drapeaux\n")
    L.append("| Drapeau | Posé par |")
    L.append("|---|---|")
    for k, v in sorted(used.items()):
        L.append(f"| `{k}` | {', '.join(v)} |")
    L.append("\n## Variables persistantes (nouvelle partie enrichie)\n")
    L.append("- `endings` : fins découvertes, toutes parties confondues.")
    L.append("- `cg` : illustrations débloquées (galerie persistante).")
    L.append("- `achievements` : succès obtenus.")
    L.append("- `truths` : déductions déjà formulées — la route secrète s’ouvre d’emblée en NG+.")
    return "\n".join(L)


# ------------------------------------------------------------------ endings
def endings_doc():
    L = ["# Fins\n", f"{len(endings)} fins, toutes vérifiées atteignables par `tests/explore.mjs`.\n"]
    reach = defaultdict(list)
    for sid, s in story.items():
        if s.get("ending"):
            reach[s["ending"]].append(sid)
        for c in s.get("choices", []):
            if c.get("ending"):
                reach[c["ending"]].append(f"{sid}/{c['id']}")
    for eid, e in endings.items():
        L.append(f"\n## {e['title']}")
        L.append(f"*{e['code']}*\n")
        L.append(e["summary"])
        L.append(f"\n- Atteinte par : {', '.join('`%s`' % x for x in reach.get(eid, [])) or '—'}")
        L.append(f"- Indice affiché tant qu’elle est verrouillée : {e.get('hint', '—')}")
        if e.get("cg"):
            L.append(f"- Illustration : `{e['cg']}`")
    L.append("\n## Succès\n")
    L.append("| Succès | Description | Obtention |")
    L.append("|---|---|---|")
    for aid, a in achievements.items():
        cond = cond_txt(a.get("condition")) if a.get("condition") else "accordé par le scénario"
        L.append(f"| {a['title']} | {a['text']} | {cond} |")
    return "\n".join(L)


# ----------------------------------------------------------------- personnages
def characters_doc():
    L = ["# Personnages\n",
         "Fiches générées depuis `tools/spec.py` (source unique des couleurs et des invariants visuels).\n"]
    for cid, c in characters.items():
        L.append(f"\n## {c['name']}")
        L.append(f"- Identifiant : `{cid}` — {c['age']} ans — {c['role']}")
        L.append(f"- Romançable : {'oui' if c['romanceable'] else 'non'}")
        L.append(f"- Palette : " + " ".join(f"`{x}`" for x in c["palette"]))
        L.append(f"- Tenues : " + " ; ".join(f"**{k}** ({v})" for k, v in c["outfits"].items()))
        L.append(f"- États : " + ", ".join(c["states"]))
        L.append(f"- Expressions disponibles : {len(c['expressions'])}")
        L.append(f"- Invariants visuels : {c['immutable']}")
        n = sum(len(e) for o in c["sprites"].values() for p in o.values() for e in p.values())
        L.append(f"- Sprites livrés : {n}")
        scenes = [sid for sid, s in story.items()
                  if any(x["id"] == cid for x in s.get("characters", []))]
        L.append(f"- Apparaît dans {len(scenes)} scènes")
    L.append("\n## Dimensions relationnelles\n")
    rel = load("data/relationships.json")
    L.append("| Dimension | Bornes | Rôle |")
    L.append("|---|---|---|")
    for k, v in rel["dimensions"].items():
        L.append(f"| {v['label']} | {v['min']} → {v['max']} | {v['note']} |")
    L.append("\n## Arcs\n")
    for cid, a in rel["arcs"].items():
        L.append(f"- **{labels['chars'][cid]}** — {a['note']}")
        for g in a.get("gates", []):
            L.append(f"  - seuil chapitre {g['chapter']} : {cond_txt(g['requires'])}")
    return "\n".join(L)


# --------------------------------------------------------------------- indices
def clues_doc():
    L = ["# Enquête : indices, déductions et fausses pistes\n"]
    src = defaultdict(list)
    for sid, s in story.items():
        blocks = [(sid, s.get("enter"))]
        for i, l in enumerate(s.get("lines", [])):
            blocks.append((f"{sid}/ligne {i}", l.get("effects")))
        for c in s.get("choices", []):
            blocks.append((c["id"], c.get("effects")))
            if c.get("deduction"):
                blocks.append((c["id"] + " (succès)", c["deduction"].get("successEffects")))
        for origin, fx in blocks:
            for cl in (fx or {}).get("clues", []):
                src[cl].append(origin)
    L.append(f"## {len(labels['clues'])} indices\n")
    L.append("| Indice | Source narrative | Obtenu dans |")
    L.append("|---|---|---|")
    for cid, lab in labels["clues"].items():
        det = labels["clueDetails"].get(cid, {})
        L.append(f"| {lab} | {det.get('source', '—')} | {', '.join('`%s`' % x for x in src.get(cid, [])) or '—'} |")
    L.append(f"\n## {len(labels['deductions'])} déductions\n")
    for did, lab in labels["deductions"].items():
        det = labels["deductionDetails"].get(did, {})
        L.append(f"\n### {lab}")
        L.append(det.get("text", ""))
        for sid, s in story.items():
            for c in s.get("choices", []):
                d = c.get("deduction")
                if d and did in (d.get("successEffects") or {}).get("deductions", []):
                    L.append(f"- Formulée dans `{sid}` / `{c['id']}` — condition : {cond_txt(d.get('requires'))}")
    L.append("\n## Fausses pistes\n")
    for k, v in labels["falseLeads"].items():
        L.append(f"- `{k}` — {v}")
    return "\n".join(L)


if __name__ == "__main__":
    os.makedirs(DOCS, exist_ok=True)
    write("branching-map.md", branching())
    write("consequence-matrix.md", consequences())
    write("flags.md", flags_doc())
    write("endings.md", endings_doc())
    write("characters.md", characters_doc())
    write("investigation.md", clues_doc())
