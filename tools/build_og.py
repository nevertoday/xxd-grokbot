#!/usr/bin/env python3
"""分享大图：生成 assets/social.svg（中文）和 assets/en/social.svg（英文），再用 Chrome 转成 public/og.png、public/og-en.png。

    python3 tools/build_og.py

配色和 xxd-pstack 的插画同一张纸：接近白的画布、淡边、纯白卡片、墨色字。标志是站点那张 bot 脸，不用官方图标。
"""
import os
import subprocess
from html import escape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
W, H = 1280, 640
INK, MUTED, LINE, PAPER, CARD, ACCENT = "#111111", "#6B6964", "#E9E7E4", "#FAFAF8", "#FFFFFF", "#E8F0FF"

TEXT = {
    "zh": {
        "font": "'PingFang SC','Hiragino Sans GB','Noto Sans SC',sans-serif",
        "kicker": "非官方 · 免费 · 开源",
        "title": ["Grok Bot 新手教程"],
        "sub": "用大白话，把一件反复做的事交给 bot",
        "steps": ["先定目标", "讲清做法", "教它判断", "让它自己开工"],
        "step_size": 24,
        "foot": "grokbot.xiaoxiaodong.ai",
    },
    "en": {
        "font": "'Inter','Helvetica Neue',Arial,sans-serif",
        "kicker": "Unofficial · Free · Open source",
        "title": ["Grok Bot for beginners"],
        "sub": "Hand a job you keep repeating to a bot, in plain words",
        "steps": ["Start with the goal", "Tell it your process", "Teach how you judge", "Let it run on its own"],
        "step_size": 21,
        "foot": "grokbot.xiaoxiaodong.ai",
    },
}


def mark(x, y, s):
    k = s / 20
    r = lambda rx, ry, rw, rh, op=1: f'<rect x="{x + rx * k:.1f}" y="{y + ry * k:.1f}" width="{rw * k:.1f}" height="{rh * k:.1f}" fill="{CARD}" opacity="{op}"/>'
    return f'<rect x="{x}" y="{y}" width="{s}" height="{s}" fill="{INK}"/>' + r(5, 6, 3, 3) + r(12, 6, 3, 3) + r(5, 12.5, 10, 2, 0.62)


def svg(lang):
    t = TEXT[lang]
    f = t["font"]
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">',
           f'<rect width="{W}" height="{H}" fill="{PAPER}"/>',
           f'<rect x="24" y="24" width="{W - 48}" height="{H - 48}" fill="{CARD}" stroke="{LINE}" stroke-width="2"/>',
           f'<rect x="24" y="24" width="{W - 48}" height="10" fill="{ACCENT}"/>',
           mark(96, 104, 56),
           f'<text x="172" y="142" font-family="{f}" font-size="26" fill="{MUTED}">{escape(t["kicker"])}</text>']
    y = 262
    for line in t["title"]:
        out.append(f'<text x="96" y="{y}" font-family="{f}" font-size="84" font-weight="700" fill="{INK}">{escape(line)}</text>')
        y += 96
    out.append(f'<text x="96" y="{y - 20}" font-family="{f}" font-size="34" fill="{INK}">{escape(t["sub"])}</text>')
    sx, sy, gap = 96, 440, 16
    bw = (W - 192 - gap * 3) / 4
    for i, step in enumerate(t["steps"]):
        bx = sx + i * (bw + gap)
        out.append(f'<rect x="{bx:.1f}" y="{sy}" width="{bw:.1f}" height="78" fill="{CARD}" stroke="{LINE}" stroke-width="2"/>')
        out.append(f'<text x="{bx + 20:.1f}" y="{sy + 34}" font-family="{f}" font-size="18" fill="{MUTED}">0{i + 1}</text>')
        out.append(f'<text x="{bx + 20:.1f}" y="{sy + 62}" font-family="{f}" font-size="{t["step_size"]}" font-weight="600" fill="{INK}">{escape(step)}</text>')
    out.append(f'<text x="96" y="{H - 64}" font-family="{f}" font-size="22" fill="{MUTED}">{escape(t["foot"])}</text>')
    out.append("</svg>")
    return "\n".join(out) + "\n"


def png(svg_path, png_path, tmp):
    html = os.path.join(tmp, "og.html")
    with open(html, "w") as fh:
        fh.write(f'<!doctype html><meta charset="utf-8"><style>html,body{{margin:0;width:{W}px;height:{H}px;overflow:hidden}}</style><img src="file://{svg_path}" width="{W}" height="{H}">')
    subprocess.run([CHROME, "--headless=new", "--hide-scrollbars", "--allow-file-access-from-files", "--force-device-scale-factor=1",
                    f"--window-size={W},{H}", f"--user-data-dir={os.path.join(tmp, 'chrome')}", f"--screenshot={png_path}", f"file://{html}"],
                   check=True, capture_output=True)


if __name__ == "__main__":
    tmp = os.environ.get("TMPDIR", "/tmp")
    for lang, sub, out in [("zh", "", "og.png"), ("en", "en", "og-en.png")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        p = os.path.join(d, "social.svg")
        with open(p, "w") as fh:
            fh.write(svg(lang))
        if os.path.exists(CHROME):
            png(p, os.path.join(ROOT, "public", out), tmp)
            print("wrote", p, "and public/" + out)
        else:
            print("wrote", p, "(no Chrome, skipped PNG)")
