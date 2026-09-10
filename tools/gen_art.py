# -*- coding: utf-8 -*-
"""Générateur d'illustrations procédurales pour Les Serments de la Faille.

Ces images sont des PLACEHOLDERS PROPRES : elles sont réellement dessinées,
cohérentes entre elles (même visage, mêmes couleurs, mêmes proportions pour un
personnage donné), avec un vrai canal alpha, mais elles ne remplacent pas une
illustration manhwa produite par un illustrateur ou une IA d'image.
Les prompts de remplacement sont dans /docs/asset.md.
"""
import math
import os
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageChops

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from spec import (CHARACTERS, EXPRESSIONS, BASE_EXPRESSIONS, ROMANCE_EXPRESSIONS,
                  SHORT_EXPRESSIONS, POSES, BACKGROUNDS, CGS,
                  SPRITE_W, SPRITE_H, BG_W, BG_H, CG_W, CG_H)

S = 2  # supersampling
W, H = SPRITE_W * S, SPRITE_H * S


def hx(c, a=255):
    c = c.lstrip("#")
    return (int(c[0:2], 16), int(c[2:4], 16), int(c[4:6], 16), a)


def mix(c1, c2, t):
    return tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))


def shade(c, f):
    return (max(0, min(255, int(c[0] * f))), max(0, min(255, int(c[1] * f))),
            max(0, min(255, int(c[2] * f))), c[3] if len(c) > 3 else 255)


def bez(p0, p1, p2, n=24):
    pts = []
    for i in range(n + 1):
        t = i / n
        x = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0]
        y = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1]
        pts.append((x, y))
    return pts


# --------------------------------------------------------------------- visage
HEAD_CX, HEAD_CY = W // 2, int(430 * S / 2 * 2 / 2) or 0
HEAD_CX = W // 2
HEAD_CY = 232 * S
HEAD_RX = 84 * S
HEAD_RY = 108 * S


def face_path(cx, cy, rx, ry):
    top = bez((cx - rx, cy - ry * 0.18), (cx, cy - ry * 1.30), (cx + rx, cy - ry * 0.18), 30)
    right = bez((cx + rx, cy - ry * 0.18), (cx + rx * 0.96, cy + ry * 0.44),
                (cx + rx * 0.54, cy + ry * 0.88), 18)
    chin = bez((cx + rx * 0.54, cy + ry * 0.88), (cx, cy + ry * 1.10),
               (cx - rx * 0.54, cy + ry * 0.88), 14)
    left = bez((cx - rx * 0.54, cy + ry * 0.88), (cx - rx * 0.96, cy + ry * 0.44),
               (cx - rx, cy - ry * 0.18), 18)
    return top + right + chin + left


def draw_head(layer, ch, e, flip=1):
    d = ImageDraw.Draw(layer, "RGBA")
    skin = hx(ch["skin"])
    skin_sh = hx(ch["skin_shadow"])
    cx, cy = HEAD_CX, HEAD_CY
    rx, ry = HEAD_RX, HEAD_RY
    hair = hx(ch["hair"])
    hair_l = hx(ch["hair_light"])
    style = ch["hair_style"]

    # --- masse de cheveux arriere
    if style == "long_tied":
        d.ellipse([cx - rx - 30 * S, cy - ry - 24 * S, cx + rx + 30 * S, cy + ry * 0.6], fill=hair)
        d.polygon([(cx + 36 * S, cy + 30 * S), (cx + 104 * S, cy + 330 * S),
                   (cx + 46 * S, cy + 348 * S), (cx + 6 * S, cy + 60 * S)], fill=shade(hair, 0.86))
        d.polygon([(cx - rx - 26 * S, cy - 20 * S), (cx - rx - 6 * S, cy + 210 * S),
                   (cx - rx + 34 * S, cy + 200 * S), (cx - rx + 26 * S, cy - 30 * S)], fill=shade(hair, 0.92))
    elif style == "slick_back":
        d.ellipse([cx - rx - 12 * S, cy - ry - 16 * S, cx + rx + 12 * S, cy + ry * 0.48], fill=hair)
    elif style == "short_back":
        d.ellipse([cx - rx - 16 * S, cy - ry - 18 * S, cx + rx + 16 * S, cy + ry * 0.52], fill=hair)
    else:
        d.ellipse([cx - rx - 22 * S, cy - ry - 20 * S, cx + rx + 22 * S, cy + ry * 0.74], fill=hair)

    # --- cou court + creux claviculaire
    ny0, ny1 = cy + ry * 0.78, cy + ry * 1.62
    d.polygon([(cx - 30 * S, ny0), (cx + 30 * S, ny0), (cx + 34 * S, ny1), (cx - 34 * S, ny1)], fill=skin)
    d.polygon([(cx - 30 * S, ny0), (cx + 30 * S, ny0), (cx + 24 * S, ny0 + 26 * S),
               (cx - 24 * S, ny0 + 26 * S)], fill=shade(skin_sh, 1.0))

    # --- visage
    fp = face_path(cx, cy, rx, ry)
    d.polygon(fp, fill=skin)
    # ombre de la frange
    fsh = Image.new("RGBA", layer.size, (0, 0, 0, 0))
    ImageDraw.Draw(fsh).polygon(
        [(cx - rx * 0.99, cy - ry * 0.44), (cx + rx * 0.99, cy - ry * 0.44),
         (cx + rx * 0.88, cy - ry * 0.06), (cx, cy - ry * 0.20),
         (cx - rx * 0.88, cy - ry * 0.06)], fill=skin_sh[:3] + (58,))
    layer.alpha_composite(fsh.filter(ImageFilter.GaussianBlur(4 * S)))
    # joue
    d.polygon([(cx + rx * 0.52, cy + ry * 0.34), (cx + rx * 0.92, cy + ry * 0.14),
               (cx + rx * 0.44, cy + ry * 0.86)], fill=skin_sh[:3] + (52,))
    # oreilles
    for sgn in (-1, 1):
        d.ellipse([cx + sgn * rx - 16 * S, cy + 8 * S, cx + sgn * rx + 4 * S, cy + 46 * S], fill=skin)
        d.line([(cx + sgn * rx - 9 * S, cy + 18 * S), (cx + sgn * rx - 5 * S, cy + 36 * S)],
               fill=skin_sh[:3] + (130,), width=int(2.6 * S))

    # --- yeux
    eye_y = cy + ry * 0.10
    eye_dx = rx * 0.53
    ew, eh = 30 * S, 25 * S
    for sgn in (-1, 1):
        draw_eye(layer, cx + sgn * eye_dx, eye_y, ew, eh, e["lid"], e, ch, sgn)

    # --- sourcils
    for sgn in (-1, 1):
        bx = cx + sgn * eye_dx
        base_y = eye_y - 38 * S
        inner = (bx - sgn * 20 * S, base_y + e["bi"] * 56 * S + e["ba"] * 20 * S)
        outer = (bx + sgn * 24 * S, base_y + e["bo"] * 56 * S - e["ba"] * 20 * S)
        midc = ((inner[0] + outer[0]) / 2, min(inner[1], outer[1]) - 7 * S)
        pts = bez(inner, midc, outer, 14)
        d.line(pts, fill=shade(hair, 0.82), width=int(8 * S), joint="curve")

    # --- nez et bouche
    ny = cy + ry * 0.46
    d.line([(cx + 5 * S, ny - 6 * S), (cx + 9 * S, ny + 9 * S), (cx - 1 * S, ny + 12 * S)],
           fill=skin_sh[:3] + (165,), width=int(3.4 * S), joint="curve")
    draw_mouth(layer, cx, cy + ry * 0.64, e, skin, skin_sh)

    if e["blush"] > 0.02:
        bl = Image.new("RGBA", layer.size, (0, 0, 0, 0))
        bd = ImageDraw.Draw(bl)
        for sgn in (-1, 1):
            bd.ellipse([cx + sgn * 56 * S - 30 * S, cy + 42 * S - 12 * S,
                        cx + sgn * 56 * S + 30 * S, cy + 42 * S + 14 * S],
                       fill=(232, 96, 112, int(130 * e["blush"])))
        layer.alpha_composite(bl.filter(ImageFilter.GaussianBlur(6 * S)))

    if e["tear"] > 0.05:
        for sgn in (-1, 1):
            tx = cx + sgn * (eye_dx + 20 * S)
            ty = eye_y + 12 * S
            d.ellipse([tx - 5 * S, ty, tx + 5 * S, ty + int(24 * S * e["tear"] + 8 * S)],
                      fill=(196, 238, 255, int(210 * min(1, e["tear"] + 0.3))))
    if e["sweat"] > 0.1:
        sx, sy = cx + rx * 0.86, cy - ry * 0.44
        d.ellipse([sx - 8 * S, sy - 5 * S, sx + 8 * S, sy + 19 * S], fill=(212, 242, 255, 195))

    draw_bangs(layer, ch, cx, cy)


def draw_eye(layer, ex, ey, ew, eh, lid, e, ch, sgn):
    eye = Image.new("RGBA", (int(ew * 2.6), int(eh * 3.4)), (0, 0, 0, 0))
    ed = ImageDraw.Draw(eye)
    ox, oy = eye.width / 2, eye.height / 2
    open_f = max(0.10, 1.0 - lid)
    hh = eh * open_f
    top = bez((ox - ew, oy + 2), (ox, oy - hh * 2.1), (ox + ew, oy - 2), 26)
    bot = bez((ox + ew, oy - 2), (ox, oy + hh * 1.35), (ox - ew, oy + 2), 26)
    almond = top + bot
    mask = Image.new("L", eye.size, 0)
    ImageDraw.Draw(mask).polygon(almond, fill=255)
    ed.polygon(almond, fill=(246, 248, 252, 255))

    iris_c = hx(ch["eyes"])
    irx = ox + e["gx"] * ew * 0.55 * sgn * 0 + e["gx"] * ew * 0.55
    iry = oy + e["gy"] * eh * 0.6 - hh * 0.15
    r = eh * 0.98
    ir = Image.new("RGBA", eye.size, (0, 0, 0, 0))
    ird = ImageDraw.Draw(ir)
    ird.ellipse([irx - r, iry - r, irx + r, iry + r], fill=shade(iris_c, 0.55))
    ird.ellipse([irx - r * 0.82, iry - r * 0.62, irx + r * 0.82, iry + r * 0.95], fill=iris_c)
    ird.ellipse([irx - r * 0.38, iry - r * 0.38, irx + r * 0.38, iry + r * 0.38], fill=(14, 14, 22, 255))
    ird.ellipse([irx - r * 0.62, iry - r * 0.7, irx - r * 0.18, iry - r * 0.26], fill=(255, 255, 255, 235))
    ird.ellipse([irx + r * 0.2, iry + r * 0.28, irx + r * 0.46, iry + r * 0.54], fill=(255, 255, 255, 130))
    ir.putalpha(ImageChops.multiply(ir.split()[3], mask))
    eye.alpha_composite(ir)

    ed.line(top, fill=shade(hx(ch["hair"]), 0.5), width=int(5.5 * S), joint="curve")
    ed.line(bot, fill=(70, 58, 70, 95), width=int(2.4 * S), joint="curve")
    # cil externe
    ed.line([top[-1], (top[-1][0] + 10 * S * (1 if sgn > 0 else 1), top[-1][1] - 8 * S)],
            fill=shade(hx(ch["hair"]), 0.55), width=int(6 * S))
    if sgn < 0:
        eye = eye.transpose(Image.FLIP_LEFT_RIGHT)
    layer.alpha_composite(eye, (int(ex - eye.width / 2), int(ey - eye.height / 2)))


def draw_mouth(layer, cx, my, e, skin, skin_sh):
    d = ImageDraw.Draw(layer, "RGBA")
    mw = 29 * S
    mc = e["mc"]
    mo = e["mo"]
    upper = bez((cx - mw, my), (cx, my - mc * 26 * S), (cx + mw, my), 22)
    if mo > 0.04:
        lower = bez((cx + mw, my), (cx, my + mo * 46 * S + max(0, mc) * 10 * S), (cx - mw, my), 22)
        d.polygon(upper + lower, fill=(88, 32, 42, 255))
        d.polygon(bez((cx - mw * 0.8, my + 2 * S), (cx, my + mo * 40 * S), (cx + mw * 0.8, my + 2 * S), 18)
                  + [(cx + mw * 0.8, my + 2 * S), (cx - mw * 0.8, my + 2 * S)], fill=(120, 48, 60, 200))
        if mc > 0.4:
            d.polygon(bez((cx - mw * 0.82, my + 1 * S), (cx, my - mc * 18 * S),
                          (cx + mw * 0.82, my + 1 * S), 18)
                      + [(cx + mw * 0.82, my + 9 * S), (cx - mw * 0.82, my + 9 * S)],
                      fill=(248, 246, 244, 225))
    d.line(upper, fill=shade(skin_sh, 0.72), width=int(6 * S), joint="curve")
    d.line([(cx - mw * 0.5, my + 22 * S), (cx + mw * 0.5, my + 22 * S)],
           fill=skin_sh[:3] + (60,), width=int(3 * S))


def draw_bangs(layer, ch, cx, cy):
    d = ImageDraw.Draw(layer, "RGBA")
    hair = hx(ch["hair"]); hair_l = hx(ch["hair_light"]); streak = hx(ch["streak"])
    rx, ry = HEAD_RX, HEAD_RY
    style = ch["hair_style"]
    top = cy - ry * 1.16

    def strand(x0, y0, x1, y1, x2, y2, col):
        d.polygon(bez((x0, y0), (x1, y1), (x2, y2), 16) + [(x2, y2 - 40 * S), (x0, y0 - 40 * S)], fill=col)

    if style == "slick_back":
        d.polygon([(cx - rx - 6 * S, cy - ry * 0.22), (cx - rx * 0.6, top),
                   (cx + rx * 0.6, top), (cx + rx + 6 * S, cy - ry * 0.22),
                   (cx + rx * 0.90, cy - ry * 0.46), (cx, cy - ry * 0.60),
                   (cx - rx * 0.90, cy - ry * 0.46)], fill=hair)
        for i in range(6):
            x0 = cx - rx * 0.86 + i * rx * 0.34
            d.line([(x0, cy - ry * 0.52), (x0 + 14 * S, top + 18 * S)], fill=hair_l, width=int(4.5 * S))
    elif style == "short_back":
        d.polygon([(cx - rx - 5 * S, cy - ry * 0.12), (cx - rx * 0.86, top + 4 * S),
                   (cx + rx * 0.72, top - 2 * S), (cx + rx + 5 * S, cy - ry * 0.16),
                   (cx + rx * 0.74, cy - ry * 0.22), (cx + rx * 0.18, cy - ry * 0.50),
                   (cx - rx * 0.30, cy - ry * 0.16), (cx - rx * 0.76, cy - ry * 0.42)], fill=hair)
        d.polygon([(cx + rx * 0.14, cy - ry * 0.52), (cx + rx * 0.58, top + 14 * S),
                   (cx + rx * 0.84, cy - ry * 0.24)], fill=hair_l)
    elif style == "long_tied":
        d.polygon([(cx - rx - 8 * S, cy - ry * 0.06), (cx - rx * 0.90, top + 2 * S),
                   (cx + rx * 0.66, top - 4 * S), (cx + rx + 8 * S, cy - ry * 0.12),
                   (cx + rx * 0.70, cy - ry * 0.20), (cx - rx * 0.04, cy - ry * 0.54),
                   (cx - rx * 0.56, cy - ry * 0.06)], fill=hair)
        d.polygon([(cx - rx * 0.10, cy - ry * 0.52), (cx + rx * 0.34, top + 10 * S),
                   (cx + rx * 0.54, cy - ry * 0.28)], fill=hair_l)
        d.line(bez((cx - rx * 0.62, cy - ry * 0.22), (cx - rx * 0.80, cy + ry * 0.10),
                   (cx - rx * 0.58, cy + ry * 0.52), 14), fill=streak, width=int(5 * S), joint="curve")
    else:
        d.polygon([(cx - rx - 7 * S, cy - ry * 0.10), (cx - rx * 0.88, top + 2 * S),
                   (cx + rx * 0.70, top - 4 * S), (cx + rx + 7 * S, cy - ry * 0.16),
                   (cx + rx * 0.74, cy - ry * 0.26), (cx + rx * 0.12, cy - ry * 0.58),
                   (cx - rx * 0.34, cy - ry * 0.10), (cx - rx * 0.72, cy - ry * 0.40)], fill=hair)
        d.polygon([(cx + rx * 0.06, cy - ry * 0.56), (cx + rx * 0.50, top + 8 * S),
                   (cx + rx * 0.80, cy - ry * 0.26)], fill=hair_l)
        d.polygon([(cx + rx * 0.54, cy - ry * 0.52), (cx + rx * 0.78, top + 22 * S),
                   (cx + rx * 0.94, cy - ry * 0.18)], fill=streak)
        d.polygon([(cx - rx * 0.94, cy - ry * 0.34), (cx - rx * 0.70, top + 16 * S),
                   (cx - rx * 0.44, cy - ry * 0.06)], fill=shade(hair, 0.86))


# ---------------------------------------------------------------------- corps
def body_points(ch, pose):
    cx = W // 2
    sh_y = HEAD_CY + int(HEAD_RY * 1.90)
    sc = ch["height"]
    sw = int(164 * S * sc)          # demi-largeur epaules
    lean = {"neutral": 0, "defensive": -12 * S, "dynamic": 22 * S}[pose]
    return cx, sh_y, sw, lean


def draw_body(layer, ch, pose, outfit, e):
    d = ImageDraw.Draw(layer, "RGBA")
    cx, sh_y, sw, lean = body_points(ch, pose)
    coat = hx(ch["coat"]); coat_l = hx(ch["coat_light"])
    accent = hx(ch["accent"]); trim = hx(ch["trim"])
    skin = hx(ch["skin"])
    inner = shade(coat, 0.52)
    if outfit != "default":
        coat = shade(coat, 1.24); coat_l = shade(coat_l, 1.16); inner = shade(inner, 1.2)

    waist_y = sh_y + 290 * S
    hip_y = sh_y + 430 * S
    bottom = H + 30 * S
    ww = sw * 0.72
    hw = sw * 0.84

    # jambes / bas du corps (cadrage mi-cuisse)
    d.polygon([(cx - hw, hip_y - 40 * S), (cx + hw, hip_y - 40 * S),
               (cx + hw * 0.94, bottom), (cx + hw * 0.10, bottom),
               (cx + hw * 0.06, hip_y + 120 * S), (cx - hw * 0.06, hip_y + 120 * S),
               (cx - hw * 0.10, bottom), (cx - hw * 0.94, bottom)], fill=shade(inner, 0.86))

    # torse (chemise / dessous)
    d.polygon([(cx - sw * 0.86, sh_y - 10 * S), (cx + sw * 0.86, sh_y - 10 * S),
               (cx + ww, waist_y), (cx + hw, hip_y + 30 * S),
               (cx - hw, hip_y + 30 * S), (cx - ww, waist_y)], fill=inner)

    # epaules et col
    d.polygon([(cx - 42 * S, sh_y - 46 * S), (cx + 42 * S, sh_y - 46 * S),
               (cx + sw, sh_y + 6 * S), (cx + sw * 0.92, sh_y + 40 * S),
               (cx - sw * 0.92, sh_y + 40 * S), (cx - sw, sh_y + 6 * S)], fill=coat)

    # panneaux de manteau ouverts
    for sgn in (-1, 1):
        d.polygon([(cx + sgn * 46 * S, sh_y - 42 * S),
                   (cx + sgn * sw * 1.00, sh_y + 10 * S),
                   (cx + sgn * (ww + 26 * S) + lean * 0.3, waist_y),
                   (cx + sgn * (hw + 52 * S) + lean, bottom),
                   (cx + sgn * (hw * 0.30) + lean * 0.8, bottom),
                   (cx + sgn * 22 * S, waist_y - 20 * S)], fill=coat)
        d.line([(cx + sgn * 46 * S, sh_y - 42 * S), (cx + sgn * 22 * S, waist_y - 20 * S),
                (cx + sgn * (hw * 0.30) + lean * 0.8, bottom)], fill=coat_l, width=int(8 * S), joint="curve")

    # revers de col (contraste garanti meme sur manteau clair)
    lum = (coat[0] * 0.299 + coat[1] * 0.587 + coat[2] * 0.114) / 255.0
    lapel = coat_l if lum < 0.55 else shade(coat, 0.80)
    for sgn in (-1, 1):
        d.polygon([(cx + sgn * 46 * S, sh_y - 46 * S), (cx + sgn * 2 * S, sh_y - 40 * S),
                   (cx + sgn * 14 * S, sh_y + 84 * S), (cx + sgn * 66 * S, sh_y + 18 * S)], fill=lapel)
        d.line([(cx + sgn * 46 * S, sh_y - 46 * S), (cx + sgn * 66 * S, sh_y + 18 * S)],
               fill=shade(coat, 0.62), width=int(3 * S))

    # bras
    if pose == "neutral":
        arms = [((cx - sw * 0.90, sh_y + 8 * S), (cx - sw * 1.10, sh_y + 210 * S), (cx - sw * 0.96, sh_y + 420 * S)),
                ((cx + sw * 0.90, sh_y + 8 * S), (cx + sw * 1.10, sh_y + 210 * S), (cx + sw * 0.96, sh_y + 420 * S))]
    elif pose == "defensive":
        arms = [((cx - sw * 0.90, sh_y + 14 * S), (cx - sw * 1.16, sh_y + 180 * S), (cx + sw * 0.34, sh_y + 232 * S)),
                ((cx + sw * 0.90, sh_y + 14 * S), (cx + sw * 1.18, sh_y + 150 * S), (cx - sw * 0.26, sh_y + 292 * S))]
    else:
        arms = [((cx - sw * 0.90, sh_y + 6 * S), (cx - sw * 1.34, sh_y + 190 * S), (cx - sw * 1.52, sh_y + 372 * S)),
                ((cx + sw * 0.90, sh_y + 6 * S), (cx + sw * 1.46, sh_y + 130 * S), (cx + sw * 1.22, sh_y + 320 * S))]
    for a in arms:
        pts = bez(a[0], a[1], a[2], 20)
        d.line(pts, fill=coat, width=int(50 * S), joint="curve")
        d.line(pts[:9], fill=coat_l, width=int(11 * S), joint="curve")
        hxp, hyp = pts[-1]
        d.ellipse([hxp - 23 * S, hyp - 20 * S, hxp + 23 * S, hyp + 30 * S], fill=skin)

    # signes distinctifs
    if ch["accent"] == "#4FD8E8" and ch["coat"] == "#141C33":       # Kael : echarpe cyan
        d.polygon([(cx - 62 * S, sh_y - 52 * S), (cx + 62 * S, sh_y - 52 * S),
                   (cx + 52 * S, sh_y + 22 * S), (cx - 52 * S, sh_y + 22 * S)], fill=accent)
        d.polygon([(cx + 24 * S, sh_y + 6 * S), (cx + 76 * S, sh_y + 210 * S),
                   (cx + 38 * S, sh_y + 222 * S), (cx + 2 * S, sh_y + 16 * S)], fill=shade(accent, 0.84))
        d.line([(cx - sw * 1.02, sh_y + 300 * S), (cx - sw * 0.92, sh_y + 380 * S)],
               fill=(214, 120, 120, 220), width=int(6 * S))
    if ch["accent"] == "#D9A441" and ch["coat"] == "#3A0E16":       # Noam : epaulieres + insigne
        for sgn in (-1, 1):
            d.polygon([(cx + sgn * sw * 0.94, sh_y - 6 * S), (cx + sgn * sw * 1.24, sh_y + 48 * S),
                       (cx + sgn * sw * 0.82, sh_y + 74 * S), (cx + sgn * sw * 0.58, sh_y + 12 * S)], fill=accent)
        for i in range(7):
            a = -1.2 + i * 0.32
            px = cx + sw * 0.90 + math.cos(a) * 26 * S
            py = sh_y + 34 * S + math.sin(a) * 26 * S
            d.ellipse([px - 5 * S, py - 5 * S, px + 5 * S, py + 5 * S], fill=trim)
        d.polygon([(cx - 34 * S, sh_y + 40 * S), (cx + 34 * S, sh_y + 40 * S),
                   (cx + 30 * S, sh_y + 64 * S), (cx - 30 * S, sh_y + 64 * S)], fill=trim)
    if ch["coat"] == "#F2EEE4":                                     # Damien : chaine d office
        pts = bez((cx - 56 * S, sh_y + 16 * S), (cx, sh_y + 104 * S), (cx + 56 * S, sh_y + 16 * S), 18)
        for i in range(0, len(pts), 2):
            d.ellipse([pts[i][0] - 7 * S, pts[i][1] - 7 * S, pts[i][0] + 7 * S, pts[i][1] + 7 * S], fill=accent)
        d.polygon([(cx, sh_y + 96 * S), (cx + 16 * S, sh_y + 126 * S),
                   (cx, sh_y + 156 * S), (cx - 16 * S, sh_y + 126 * S)], fill=trim)
    if ch["coat"] == "#38214C":                                     # Ysee : fioles + anneaux verts
        for i in range(3):
            d.rectangle([cx + sw * 0.52 + i * 22 * S, sh_y + 250 * S,
                         cx + sw * 0.52 + 14 * S + i * 22 * S, sh_y + 300 * S], fill=accent)
        for i in range(3):
            d.ellipse([cx - sw * 1.06 - 10 * S, sh_y + 360 * S + i * 22 * S,
                        cx - sw * 1.06 + 12 * S, sh_y + 374 * S + i * 22 * S], outline=accent, width=int(4 * S))
    if ch["coat"] == "#20323F":                                     # Theo : coutures lumineuses
        for i in range(7):
            y = sh_y + 30 * S + i * 52 * S
            d.line([(cx - sw * 0.66, y), (cx + sw * 0.66, y + 10 * S)],
                   fill=accent[:3] + (120,), width=int(3 * S))
        d.line(bez((cx - sw * 0.94, sh_y + 400 * S), (cx - 60 * S, sh_y + 120 * S),
                   (cx - 26 * S, sh_y - 40 * S), 20), fill=accent[:3] + (200,), width=int(5 * S), joint="curve")


def state_overlay(img, ch, state, e):
    d = ImageDraw.Draw(img, "RGBA")
    cx, sh_y, sw, lean = body_points(ch, "neutral")
    if state == "injured":
        d.line([(cx + 40 * S, HEAD_CY + 20 * S), (cx + 76 * S, HEAD_CY + 96 * S)],
               fill=(150, 24, 34, 220), width=int(7 * S))
        d.polygon([(cx - 90 * S, sh_y + 180 * S), (cx - 20 * S, sh_y + 210 * S),
                   (cx - 34 * S, sh_y + 268 * S), (cx - 96 * S, sh_y + 240 * S)], fill=(122, 20, 30, 190))
        for i in range(4):
            y = HEAD_CY - 40 * S + i * 30 * S
            d.line([(cx - 120 * S, sh_y + 60 * S + i * 22 * S), (cx - 40 * S, sh_y + 52 * S + i * 22 * S)],
                   fill=(232, 228, 220, 235), width=int(12 * S))
    elif state == "wet":
        wet = Image.new("RGBA", img.size, (0, 0, 0, 0))
        wd = ImageDraw.Draw(wet)
        wd.rectangle([0, 0, img.width, img.height], fill=(16, 30, 56, 70))
        wet.putalpha(ImageChops.multiply(wet.split()[3], img.split()[3]))
        img.alpha_composite(wet)
        for i in range(26):
            x = (i * 53 % (sw * 2)) + cx - sw
            y = HEAD_CY + 120 * S + (i * 97 % (620 * S))
            d.line([(x, y), (x, y + 22 * S)], fill=(190, 232, 255, 150), width=int(3 * S))
    elif state == "aura":
        glow = Image.new("RGBA", img.size, (0, 0, 0, 0))
        gd = ImageDraw.Draw(glow)
        acc = hx(ch["accent"])
        for i in range(34):
            x = cx + ((i * 137) % (sw * 3)) - sw * 1.5
            y = HEAD_CY - 120 * S + ((i * 211) % (900 * S))
            r = 4 * S + (i % 4) * 3 * S
            gd.ellipse([x - r, y - r, x + r, y + r], fill=acc[:3] + (190,))
        glow = glow.filter(ImageFilter.GaussianBlur(3 * S))
        img.alpha_composite(glow)
        edge = alpha_edge(img, 10 * S)
        col = Image.new("RGBA", img.size, acc[:3] + (255,))
        col.putalpha(edge)
        img.alpha_composite(col.filter(ImageFilter.GaussianBlur(2 * S)))


Q = 4  # les opérations morphologiques tournent en quart de résolution


def _small(a):
    return a.resize((a.width // Q, a.height // Q), Image.BILINEAR)


def _big(a, size):
    return a.resize(size, Image.BILINEAR)


def alpha_edge(img, px):
    a = img.split()[3]
    sa = _small(a)
    r = max(1, int(px / Q))
    k = min(9, r * 2 + 1)
    shrunk = sa.filter(ImageFilter.MinFilter(k))
    for _ in range(max(0, r // 4)):
        shrunk = shrunk.filter(ImageFilter.MinFilter(9))
    return _big(ImageChops.subtract(sa, shrunk), a.size)


def outline(img, px=3):
    a = img.split()[3]
    sa = _small(a)
    k = min(9, max(3, int(px / Q) * 2 + 1))
    grown = _big(sa.filter(ImageFilter.MaxFilter(k)), a.size)
    ring = ImageChops.subtract(grown, a)
    ink = Image.new("RGBA", img.size, (8, 9, 20, 255))
    ink.putalpha(ring.point(lambda v: int(v * 0.92)))
    out = Image.new("RGBA", img.size, (0, 0, 0, 0))
    out.alpha_composite(ink)
    out.alpha_composite(img)
    return out


def post_light(img, ch):
    a = img.split()[3]
    # rim light directionnel : haut / droite uniquement
    edge = alpha_edge(img, 10 * S)
    shifted = ImageChops.offset(edge, int(-8 * S), int(-8 * S))
    rim = ImageChops.multiply(shifted, a)
    grad = Image.linear_gradient("L").rotate(-90).resize(img.size, Image.BILINEAR)
    rim = ImageChops.multiply(rim, grad)
    col = Image.new("RGBA", img.size, hx(ch["accent"])[:3] + (255,))
    col.putalpha(rim.point(lambda v: int(v * 0.78)))
    img.alpha_composite(col.filter(ImageFilter.GaussianBlur(1.0 * S)))
    # ombre cel bas / gauche
    sh = ImageChops.subtract(a, ImageChops.offset(a, int(30 * S), int(34 * S)))
    grad2 = ImageChops.invert(grad)
    shl = Image.new("RGBA", img.size, (10, 12, 30, 255))
    shl.putalpha(ImageChops.multiply(ImageChops.multiply(sh, a), grad2).point(lambda v: int(v * 0.5)))
    img.alpha_composite(shl.filter(ImageFilter.GaussianBlur(3 * S)))
    return img


_BODY_CACHE = {}


def render_sprite(cid, outfit, pose, expr, state):
    ch = CHARACTERS[cid]
    e = EXPRESSIONS[expr]
    key = (cid, outfit, pose)
    if key not in _BODY_CACHE:
        b = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        draw_body(b, ch, pose, outfit, e)
        _BODY_CACHE.clear()
        _BODY_CACHE[key] = b
    img = _BODY_CACHE[key].copy()

    head = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw_head(head, ch, e)
    if abs(e["tilt"]) > 0.4:
        head = head.rotate(-e["tilt"], resample=Image.BICUBIC, center=(HEAD_CX, HEAD_CY + 150 * S))
    img.alpha_composite(head)

    state_overlay(img, ch, state, e)
    img = outline(img, int(3.2 * S))
    img = post_light(img, ch)
    img = img.resize((SPRITE_W, SPRITE_H), Image.LANCZOS)
    # nettoyage du halo : on éteint les pixels quasi transparents
    r, g, b, a = img.split()
    a = a.point(lambda v: 0 if v < 8 else v)
    return Image.merge("RGBA", (r, g, b, a))


# ------------------------------------------------------------------- décors
PAL = {
    "night": ["#080B18", "#141F3C", "#243E6B", "#4FD8E8", "#8A2740"],
    "dawn": ["#1A1430", "#3A2A50", "#7A5478", "#E8A87C", "#4FD8E8"],
    "interior": ["#0F1220", "#1E2438", "#3A4260", "#D9A441", "#7BE0A8"],
    "dark": ["#05060C", "#0D1120", "#1C2438", "#4FD8E8", "#8A2740"],
    "rain": ["#070A14", "#101A2E", "#1E3050", "#6FA8C8", "#4FD8E8"],
    "storm": ["#06080F", "#0E1526", "#243352", "#B8C8E8", "#D9A441"],
    "faille": ["#0A0616", "#1C0E32", "#3A1A5C", "#8FE7FF", "#D9A441"],
    "burn": ["#150606", "#3A0E16", "#7A1E24", "#D9A441", "#FFD98A"],
    "black": ["#000000", "#05060A", "#0A0C12", "#141824", "#1E2434"],
}


def render_background(bid, kind, family):
    w, h = BG_W, BG_H
    pal = [hx(c) for c in PAL[kind]]
    img = Image.new("RGBA", (w, h), pal[0])
    d = ImageDraw.Draw(img, "RGBA")
    # ciel dégradé
    for y in range(h):
        t = y / h
        c = mix(pal[1], pal[0], min(1, t * 1.6))
        d.line([(0, y), (w, y)], fill=c)
    if family == "faille":
        for i in range(9):
            r = 120 + i * 95
            d.ellipse([w * 0.5 - r * 1.5, h * 0.42 - r, w * 0.5 + r * 1.5, h * 0.42 + r],
                      outline=pal[3][:3] + (max(8, 90 - i * 9),), width=6)
        d.polygon([(w * 0.5, 0), (w * 0.62, h * 0.5), (w * 0.5, h), (w * 0.38, h * 0.5)],
                  fill=pal[3][:3] + (60,))
    if family in ("bridge", "quay", "market", "alley", "roof", "hall", "archive", "clinic", "flat", "anchor"):
        # skyline / structures
        import random
        rnd = random.Random(hash(bid) & 0xffff)
        base = int(h * (0.62 if family in ("bridge", "quay", "roof", "market") else 0.98))
        for i in range(46):
            bw = rnd.randint(40, 190)
            bh = rnd.randint(60, 520)
            x = rnd.randint(-60, w)
            col = mix(pal[1], pal[2], rnd.random() * 0.7)
            d.rectangle([x, base - bh, x + bw, base + 80], fill=col)
            for wy in range(base - bh + 20, base, 44):
                for wx in range(x + 12, x + bw - 12, 34):
                    if rnd.random() < 0.28:
                        d.rectangle([wx, wy, wx + 12, wy + 18], fill=pal[3][:3] + (rnd.randint(60, 170),))
        if family in ("bridge", "quay"):
            d.rectangle([0, base + 60, w, h], fill=mix(pal[0], pal[2], 0.35))
            for i in range(70):
                y = base + 70 + rnd.randint(0, h - base - 70)
                d.line([(rnd.randint(0, w), y), (rnd.randint(0, w) + rnd.randint(40, 200), y)],
                       fill=pal[3][:3] + (rnd.randint(10, 60),), width=3)
        if family == "bridge":
            d.rectangle([0, int(h * 0.72), w, int(h * 0.78)], fill=mix(pal[1], pal[2], 0.5))
            for x in range(0, w, 150):
                d.line([(x, int(h * 0.72)), (x, int(h * 0.62))], fill=pal[2], width=10)
            d.line([(0, int(h * 0.62)), (w, int(h * 0.62))], fill=pal[2], width=8)
        if family in ("archive", "hall", "clinic", "flat", "anchor"):
            img2 = Image.new("RGBA", (w, h), (0, 0, 0, 0))
            d2 = ImageDraw.Draw(img2, "RGBA")
            d2.rectangle([0, 0, w, h], fill=pal[1][:3] + (215,))
            for x in range(0, w, 230):
                d2.rectangle([x, 0, x + 26, h], fill=pal[2])
            if family == "archive":
                for x in range(60, w, 300):
                    for y in range(120, h - 100, 96):
                        d2.rectangle([x, y, x + 210, y + 74], fill=mix(pal[1], pal[0], 0.4))
                        for k in range(9):
                            d2.rectangle([x + 10 + k * 22, y + 8, x + 26 + k * 22, y + 66],
                                         fill=mix(pal[2], pal[3], (k % 3) * 0.3))
            if family == "hall":
                d2.polygon([(w * 0.5 - 300, h), (w * 0.5 - 120, 60), (w * 0.5 + 120, 60), (w * 0.5 + 300, h)],
                           fill=mix(pal[1], pal[2], 0.55))
                for i in range(7):
                    d2.ellipse([w * 0.5 - 240 + i * 74, 200, w * 0.5 - 200 + i * 74, 240], fill=pal[3])
            if family == "clinic":
                for i in range(6):
                    d2.rectangle([120 + i * 300, h * 0.55, 400 + i * 300, h * 0.72],
                                 fill=mix(pal[2], pal[4], 0.3))
            if family == "anchor":
                d2.ellipse([w * 0.5 - 340, h * 0.18, w * 0.5 + 340, h * 0.86],
                           outline=pal[3], width=10)
                d2.ellipse([w * 0.5 - 220, h * 0.28, w * 0.5 + 220, h * 0.76],
                           outline=pal[3][:3] + (120,), width=6)
            img.alpha_composite(img2)
    if kind in ("rain", "storm"):
        rn = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        rd = ImageDraw.Draw(rn)
        import random
        rnd = random.Random(7)
        for i in range(900):
            x, y = rnd.randint(0, w), rnd.randint(0, h)
            rd.line([(x, y), (x - 9, y + 40)], fill=(200, 226, 255, rnd.randint(20, 80)), width=2)
        img.alpha_composite(rn)
    if kind == "burn":
        gl = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        gd = ImageDraw.Draw(gl)
        gd.ellipse([w * 0.2, h * 0.2, w * 0.8, h * 1.1], fill=(217, 164, 65, 90))
        img.alpha_composite(gl.filter(ImageFilter.GaussianBlur(90)))
    # vignette + grain lumineux
    vig = Image.new("L", (w, h), 0)
    ImageDraw.Draw(vig).ellipse([-w * 0.25, -h * 0.35, w * 1.25, h * 1.35], fill=255)
    vig = vig.filter(ImageFilter.GaussianBlur(180))
    dark = Image.new("RGBA", (w, h), (2, 3, 10, 255))
    dark.putalpha(ImageChops.invert(vig).point(lambda v: int(v * 0.72)))
    img.alpha_composite(dark)
    return img.convert("RGB")


def render_cg(cid, title, desc, char):
    w, h = CG_W, CG_H
    kind = "faille" if "theo" in cid or "aube" in cid else ("rain" if "noam" in cid else "night")
    if "grand_serment" in cid:
        kind = "burn"
    if "rompu" in cid:
        kind = "dark"
    img = render_background(cid, kind, "faille" if kind == "faille" else "bridge").convert("RGBA")
    if char:
        ch = CHARACTERS[char]
        sp = render_sprite(char, "default", "dynamic",
                           {"kael": "affection", "noam": "vulnerable", "theo": "exhausted",
                            "damien": "determined"}[char], "aura" if char == "theo" else "normal")
        sp = sp.resize((int(SPRITE_W * 1.45), int(SPRITE_H * 1.45)), Image.LANCZOS)
        img.alpha_composite(sp, (int(w * 0.52), int(h - sp.height * 0.92)))
    # protagoniste stylisé de dos / halo narratif
    d = ImageDraw.Draw(img, "RGBA")
    d.polygon([(w * 0.16, h), (w * 0.22, h * 0.42), (w * 0.34, h * 0.42), (w * 0.40, h)],
              fill=(10, 14, 30, 235))
    d.ellipse([w * 0.235, h * 0.30, w * 0.325, h * 0.44], fill=(14, 18, 36, 245))
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([w * 0.30, h * 0.24, w * 0.72, h * 0.66], fill=(79, 216, 232, 70))
    img.alpha_composite(glow.filter(ImageFilter.GaussianBlur(120)))
    return img.convert("RGB")


# ---------------------------------------------------------------------- main
def save(img, path, quality=86):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if img.mode == "RGBA":
        img.save(path, "WEBP", quality=quality, method=5, lossless=False, exact=True)
    else:
        img.save(path, "WEBP", quality=quality, method=5)


def combos(cid):
    ch = CHARACTERS[cid]
    out = []
    exprs = BASE_EXPRESSIONS + (ROMANCE_EXPRESSIONS if ch["romance"] else [])
    for pose in POSES:
        for ex in exprs:
            out.append(("default", pose, ex, "normal"))
    for outfit in ch["outfits"]:
        if outfit == "default":
            continue
        for pose in POSES:
            for ex in SHORT_EXPRESSIONS:
                out.append((outfit, pose, ex, "normal"))
    for st in ch["states"]:
        if st == "normal":
            continue
        for pose in POSES:
            for ex in SHORT_EXPRESSIONS:
                out.append(("default", pose, ex, st))
    return out


def _job(args):
    root, cid, outfit, pose, ex, st = args
    name = f"character_{cid}_{outfit}_{pose}_{ex}_{st}.webp"
    p = os.path.join(root, "assets", "characters", name)
    if os.path.exists(p):
        return name
    save(render_sprite(cid, outfit, pose, ex, st), p, 84)
    return name


def main(root):
    from multiprocessing import Pool
    jobs = [(root, cid, o, p_, e_, s_) for cid in CHARACTERS for (o, p_, e_, s_) in combos(cid)]
    print("sprites à générer :", len(jobs), flush=True)
    with Pool(processes=os.cpu_count()) as pool:
        for i, _ in enumerate(pool.imap_unordered(_job, jobs, chunksize=4)):
            if i % 25 == 0:
                print("sprites", i, "/", len(jobs), flush=True)
    n = len(jobs)
    for bid, label, kind, fam in BACKGROUNDS:
        save(render_background(bid, kind, fam), os.path.join(root, "assets", "backgrounds", bid + ".webp"), 82)
        n += 1
    for cid, title, desc, char in CGS:
        save(render_cg(cid, title, desc, char), os.path.join(root, "assets", "cg", cid + ".webp"), 84)
        n += 1
    print("total", n)


if __name__ == "__main__":
    main(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
