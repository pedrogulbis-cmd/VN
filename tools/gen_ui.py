# -*- coding: utf-8 -*-
"""Éléments d'interface : favicon SVG, icône d'application, image de partage."""
import os, sys
from PIL import Image, ImageDraw, ImageFilter
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gen_art as G

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UI = os.path.join(ROOT, "assets", "ui")
os.makedirs(UI, exist_ok=True)

FAVICON = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Les Serments de la Faille">
  <rect width="64" height="64" rx="12" fill="#0b1024"/>
  <path d="M32 6 L38 32 L32 58 L26 32 Z" fill="#4fd8e8" opacity="0.9"/>
  <circle cx="32" cy="32" r="18" fill="none" stroke="#d9a441" stroke-width="2.4"/>
  <circle cx="32" cy="32" r="26" fill="none" stroke="#d9a441" stroke-width="1.1" opacity="0.5"/>
</svg>'''
open(os.path.join(UI, "favicon.svg"), "w", encoding="utf-8").write(FAVICON)


def mark(size, ring=True):
    S = 4
    img = Image.new("RGBA", (size * S, size * S), (11, 16, 36, 255))
    d = ImageDraw.Draw(img, "RGBA")
    c = size * S / 2
    glow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(glow).polygon([(c, c * 0.12), (c * 1.22, c), (c, c * 1.88), (c * 0.78, c)],
                                 fill=(79, 216, 232, 235))
    img.alpha_composite(glow.filter(ImageFilter.GaussianBlur(size * S / 40)))
    if ring:
        for i, w in ((0.56, 5), (0.80, 2)):
            d.ellipse([c - c * i, c - c * i, c + c * i, c + c * i],
                      outline=(217, 164, 65, 255 if i < 0.6 else 120), width=int(w * S))
    return img.resize((size, size), Image.LANCZOS)


mark(512).convert("RGB").save(os.path.join(UI, "icon.webp"), "WEBP", quality=92)

share = G.render_background("bg_pont_confluence_night", "night", "bridge").convert("RGBA")
share = share.resize((1200, 630), Image.LANCZOS)
d = ImageDraw.Draw(share, "RGBA")
d.rectangle([0, 380, 1200, 630], fill=(4, 6, 14, 205))
m = mark(150)
share.alpha_composite(m, (60, 420))
share.convert("RGB").save(os.path.join(UI, "share.webp"), "WEBP", quality=88)

title = G.render_background("bg_pont_confluence_night", "night", "bridge").convert("RGB")
title.save(os.path.join(UI, "title-bg.webp"), "WEBP", quality=86)

frame = Image.new("RGBA", (600, 200), (0, 0, 0, 0))
fd = ImageDraw.Draw(frame)
fd.rounded_rectangle([2, 2, 598, 198], 14, outline=(217, 164, 65, 190), width=3)
fd.line([(24, 2), (24, 198)], fill=(79, 216, 232, 160), width=3)
frame.save(os.path.join(UI, "dialogue-frame.webp"), "WEBP", quality=90, lossless=False, exact=True)

print("UI :", sorted(os.listdir(UI)))
