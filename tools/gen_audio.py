# -*- coding: utf-8 -*-
"""Synthèse audio procédurale (aucun contenu protégé n'est utilisé).
Les boucles sont générées en WAV puis encodées en OGG Vorbis avec ffmpeg.
Toutes les musiques bouclent proprement : la durée est un multiple entier de la
mesure et les enveloppes se referment sur elles-mêmes.
"""
import os
import subprocess
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from spec import MUSIC, AMBIANCE, SFX

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SR = 44100
OUT = os.path.join(ROOT, "assets", "audio")

NOTE = {"C": 0, "C#": 1, "D": 2, "D#": 3, "E": 4, "F": 5, "F#": 6, "G": 7,
        "G#": 8, "A": 9, "A#": 10, "B": 11}


def f(name, octv):
    return 440.0 * 2 ** ((NOTE[name] + (octv - 4) * 12 - 9) / 12.0)


def env(n, a=0.02, d=0.2, s=0.6, r=0.4):
    t = np.linspace(0, 1, n)
    e = np.ones(n)
    ai, di, ri = int(n * a), int(n * d), int(n * r)
    e[:ai] = np.linspace(0, 1, ai)
    e[ai:ai + di] = np.linspace(1, s, di)
    e[ai + di:n - ri] = s
    e[n - ri:] = np.linspace(s, 0, ri)
    return e


def tone(freq, dur, kind="sine", detune=0.0, amp=0.3):
    n = int(SR * dur)
    t = np.arange(n) / SR
    fr = freq * (1 + detune)
    if kind == "sine":
        y = np.sin(2 * np.pi * fr * t)
    elif kind == "tri":
        y = 2 * np.abs(2 * ((t * fr) % 1) - 1) - 1
    elif kind == "saw":
        y = 2 * ((t * fr) % 1) - 1
        y = np.convolve(y, np.ones(24) / 24, mode="same")
    elif kind == "bell":
        y = (np.sin(2 * np.pi * fr * t) + 0.5 * np.sin(2 * np.pi * fr * 2.76 * t)
             + 0.3 * np.sin(2 * np.pi * fr * 5.4 * t))
        y *= np.exp(-t * 3.2)
    else:
        y = np.sin(2 * np.pi * fr * t)
    return y * amp


def place(buf, y, at):
    i = int(at * SR)
    n = min(len(y), len(buf) - i)
    if n > 0:
        buf[i:i + n] += y[:n]


def pad(buf, chord, start, dur, base_amp=0.16, kind="tri"):
    for k, fq in enumerate(chord):
        y = tone(fq, dur, kind, detune=0.002 * (k - 1), amp=base_amp / (1 + k * 0.35))
        y *= env(len(y), 0.18, 0.2, 0.75, 0.35)
        place(buf, y, start)


def arp(buf, notes, start, step, dur, amp=0.12, kind="sine"):
    for i, fq in enumerate(notes):
        y = tone(fq, dur, kind, amp=amp)
        y *= env(len(y), 0.01, 0.25, 0.35, 0.55)
        place(buf, y, start + i * step)


def noise_bed(n, lo=0.2, hi=0.9):
    x = np.random.default_rng(4).normal(0, 1, n)
    k = np.ones(int(SR * 0.004)) / (SR * 0.004)
    return np.convolve(x, k, mode="same") * 0.4


def loopify(y, fade=0.9):
    """Cross-fade la fin sur le début pour une boucle sans clic."""
    nf = int(SR * fade)
    if len(y) <= nf * 2:
        return y
    head = y[:nf].copy()
    tail = y[-nf:].copy()
    ramp = np.linspace(0, 1, nf)
    y[:nf] = head * ramp + tail * (1 - ramp)
    return y[:-nf]


def normalize(y, peak=0.82):
    m = np.max(np.abs(y)) or 1.0
    return y / m * peak


def stereo(y, width=0.25):
    d = int(SR * 0.011)
    l = y.copy()
    r = np.concatenate([np.zeros(d), y[:-d]]) * (1 - width) + y * width
    return np.stack([l, r], axis=1)


def write(name, y, stereo_out=True):
    os.makedirs(OUT, exist_ok=True)
    y = normalize(np.nan_to_num(y))
    data = stereo(y) if stereo_out else np.stack([y, y], axis=1)
    pcm = (np.clip(data, -1, 1) * 32767).astype("<i2")
    wav = os.path.join(OUT, name + ".wav")
    import wave
    with wave.open(wav, "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())
    ogg = os.path.join(OUT, name + ".ogg")
    try:
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav,
                        "-c:a", "libvorbis", "-q:a", "4", ogg], check=True)
        os.remove(wav)
        return ogg
    except Exception as ex:
        print("  ffmpeg indisponible, WAV conservé :", ex)
        return wav


# ------------------------------------------------------------------ musiques
CHORDS = {
    "menu":       [["A", 3, "C", 4, "E", 4], ["F", 3, "A", 3, "C", 4],
                   ["G", 3, "B", 3, "D", 4], ["E", 3, "G", 3, "B", 3]],
    "calm":       [["D", 3, "F", 3, "A", 3], ["A", 3, "C", 4, "E", 4],
                   ["B", 2, "D", 3, "F", 3], ["G", 3, "B", 3, "D", 4]],
    "romance":    [["F", 3, "A", 3, "C", 4], ["C", 3, "E", 3, "G", 3],
                   ["D", 3, "F", 3, "A", 3], ["A#", 2, "D", 3, "F", 3]],
    "tension":    [["D", 2, "A", 2, "D", 3], ["D#", 2, "A#", 2, "D#", 3],
                   ["C", 2, "G", 2, "C", 3], ["D", 2, "G#", 2, "D", 3]],
    "danger":     [["C", 2, "C#", 2, "G", 2], ["C", 2, "F#", 2, "C", 3],
                   ["A#", 1, "F", 2, "A#", 2], ["C", 2, "C#", 2, "G", 2]],
    "emotion":    [["G", 3, "B", 3, "D", 4], ["E", 3, "G", 3, "B", 3],
                   ["C", 3, "E", 3, "G", 3], ["D", 3, "F#", 3, "A", 3]],
    "revelation": [["A", 2, "E", 3, "A", 3], ["F", 2, "C", 3, "F", 3],
                   ["G", 2, "D", 3, "G", 3], ["C", 3, "G", 3, "C", 4]],
    "ending":     [["C", 3, "G", 3, "C", 4], ["A", 2, "E", 3, "A", 3],
                   ["F", 2, "C", 3, "F", 3], ["G", 2, "D", 3, "G", 3]],
}
TEMPO = {"menu": 3.4, "calm": 3.6, "romance": 3.2, "tension": 2.2,
         "danger": 1.9, "emotion": 3.4, "revelation": 2.8, "ending": 4.0}


def make_music(key, dur):
    bars = CHORDS[key]
    bl = TEMPO[key]
    total = dur + 1.0
    n = int(SR * total)
    buf = np.zeros(n)
    tcur = 0.0
    i = 0
    while tcur < total:
        c = bars[i % len(bars)]
        chord = [f(c[0], c[1]), f(c[2], c[3]), f(c[4], c[5])]
        pad(buf, chord, tcur, bl * 1.05, 0.20 if key != "danger" else 0.26,
            "saw" if key in ("danger", "tension") else "tri")
        # basse
        b = tone(chord[0] / 2, bl * 0.98, "sine", amp=0.26)
        b *= env(len(b), 0.03, 0.3, 0.55, 0.4)
        place(buf, b, tcur)
        # motif mélodique
        if key in ("menu", "romance", "emotion", "ending", "revelation"):
            mel = [chord[2] * 2, chord[1] * 2, chord[2] * 2, chord[0] * 4]
            arp(buf, mel, tcur + bl * 0.12, bl / 4.6, bl / 3.2,
                0.10 if key != "revelation" else 0.13, "sine")
        if key in ("tension", "danger"):
            for k in range(4):
                p = tone(chord[0], 0.10, "sine", amp=0.22)
                p *= env(len(p), 0.005, 0.2, 0.1, 0.7)
                place(buf, p, tcur + k * bl / 4)
        if key == "revelation" and i % 2 == 0:
            place(buf, tone(chord[2] * 4, 2.4, "bell", amp=0.20), tcur)
        if key == "ending" and i % 2 == 1:
            place(buf, tone(chord[2] * 4, 3.0, "bell", amp=0.14), tcur)
        tcur += bl
        i += 1
    buf += noise_bed(n) * (0.05 if key in ("tension", "danger") else 0.022)
    return loopify(buf, 0.9)


def make_ambiance(key, dur):
    n = int(SR * (dur + 1.0))
    rng = np.random.default_rng(11)
    if key == "amb_pluie":
        y = rng.normal(0, 1, n)
        k = np.ones(9) / 9
        y = np.convolve(y, k, mode="same") * 0.5
        mod = 1 + 0.15 * np.sin(2 * np.pi * 0.13 * np.arange(n) / SR)
        y *= mod
        for _ in range(60):
            at = rng.uniform(0, dur)
            place(y, tone(rng.uniform(900, 2400), 0.05, "sine", amp=0.08), at)
    elif key == "amb_faille":
        t = np.arange(n) / SR
        y = np.zeros(n)
        for h, a in ((55, 0.30), (110, 0.16), (164.8, 0.10), (220, 0.07), (277, 0.05)):
            y += a * np.sin(2 * np.pi * h * t + 3 * np.sin(2 * np.pi * 0.07 * t))
        y *= 1 + 0.2 * np.sin(2 * np.pi * 0.11 * t)
        y += noise_bed(n) * 0.05
    else:
        t = np.arange(n) / SR
        y = noise_bed(n) * 0.28
        y += 0.06 * np.sin(2 * np.pi * 62 * t)
        for _ in range(18):
            at = rng.uniform(0, dur)
            place(y, tone(rng.uniform(180, 400), 0.6, "sine", amp=0.03), at)
    return loopify(y, 1.0)


def make_sfx(key, dur):
    n = int(SR * dur)
    t = np.arange(n) / SR
    if key == "sfx_confirm":
        y = tone(f("E", 6), dur, "sine", amp=0.5) + tone(f("B", 6), dur, "sine", amp=0.25)
        y *= np.exp(-t * 14)
    elif key == "sfx_locked":
        y = tone(f("C", 3), dur, "tri", amp=0.5) * np.exp(-t * 18)
        y += noise_bed(n) * 0.2 * np.exp(-t * 26)
    elif key == "sfx_discovery":
        y = np.zeros(n)
        for i, nt in enumerate([("C", 5), ("E", 5), ("G", 5), ("C", 6)]):
            s = tone(f(*nt), dur - i * 0.18, "sine", amp=0.34)
            s *= np.exp(-np.arange(len(s)) / SR * 7)
            place(y, s, i * 0.18)
    elif key == "sfx_menu":
        y = noise_bed(n) * 0.5 * np.exp(-t * 9)
        y += tone(f("A", 4), dur, "sine", amp=0.16) * np.exp(-t * 10)
    elif key == "sfx_chapter":
        y = tone(f("A", 2), dur, "bell", amp=0.55) + tone(f("E", 3), dur, "bell", amp=0.25)
    else:  # sfx_promise
        y = tone(f("D", 4), dur, "bell", amp=0.45) + tone(f("A", 4), dur, "bell", amp=0.3)
        y += tone(f("D", 5), dur, "sine", amp=0.12) * np.exp(-t * 2.2)
    return y


def main():
    for aid, label, dur in MUSIC:
        write(aid, make_music(aid.replace("music_", ""), dur))
        print("♪", aid)
    for aid, label, dur in AMBIANCE:
        write(aid, make_ambiance(aid, dur))
        print("~", aid)
    for aid, label, dur in SFX:
        write(aid, make_sfx(aid, dur), stereo_out=False)
        print("·", aid)


if __name__ == "__main__":
    main()
