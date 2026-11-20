#!/usr/bin/env python3
"""README 里的三张配图（SVG，轻动画，和头图 hero.svg 同一套深色风格）。

    python3 tools/build_readme_svgs.py

输出 assets/readme/<名字>.svg（中文）和 assets/en/readme/<名字>.svg（英文）：
  chat-vs-bot   聊天的 AI 回你一段话；bot 在云端电脑上把事一件件做完
  goal          晚饭：过程一步步亮起，指向目标；下面另一条路（叫外卖）也到同一个目标
  lessons       新手入门三课：每课多长、学完你手里多了什么
系统设了「减少动效」时直接显示最后的样子。文字改 TEXT。
"""
import os
from html import escape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BG, PANEL, INK, MUTED, HOT, LINE, PAPER = "#171612", "#211f1a", "#f3f0ea", "#a7a194", "#ff7a4d", "#3a372f", "#f3f0ea"
MONO = "ui-monospace,Menlo,monospace"
REDUCE = "@media (prefers-reduced-motion:reduce){*{animation:none!important;opacity:1!important;transform:none!important}}"

TEXT = {
    "zh": {
        "font": "'PingFang SC','Noto Sans SC','Microsoft YaHei',sans-serif",
        "demo": "示意",
        "chat": {
            "left": "聊天的 AI", "right": "Grok Bot 的 bot",
            "ask": "帮我把这周进展做成幻灯片",
            "reply": ["好的，下面是一份大纲：", "1. 本周完成　2. 遇到的问题", "3. 下周计划……"],
            "left_cap": "回你一段话，剩下的还是你来做",
            "steps": ["翻这周的邮件和工作群", "对着项目表格核对数字", "做好幻灯片，放进共享文件夹", "每周五 16:00 自己再做一遍"],
            "right_cap": "在它的云端电脑上，把事做完",
        },
        "goal": {
            "goal": "目标", "goal_name": "一桌晚饭",
            "process": "过程",
            "steps": ["买菜", "洗菜", "切菜", "下锅"],
            "alt": "累的那天，叫个外卖",
            "cap": ["目标是你最后要的东西，过程是怎么拿到它。", "过程可以换，目标不变。把过程交给 bot，你只管要结果。"],
        },
        "lessons": {
            "items": [
                ("第 1 课", "说清你要什么", "10 分钟", "几句说清结果的大白话"),
                ("第 2 课", "建一个 Potato", "15 分钟", "一个记住目标的 bot"),
                ("第 3 课", "交出一件事", "30 分钟", "一个每周自己开工的 bot"),
            ],
            "get": "学完你有：",
        },
    },
    "en": {
        "font": "'Avenir Next','Segoe UI',Helvetica,Arial,sans-serif",
        "demo": "Illustration",
        "chat": {
            "left": "A chat AI", "right": "Your Grok Bot",
            "ask": "Turn this week's progress into slides",
            "reply": ["Sure, here's an outline:", "1. Done this week  2. Problems", "3. Next week…"],
            "left_cap": "It replies. The rest is still on you.",
            "steps": ["Reads this week's email and chat", "Checks numbers against the sheet", "Saves the slides to the shared folder", "Does it again every Friday at 4 PM"],
            "right_cap": "On its cloud computer, it gets it done.",
        },
        "goal": {
            "goal": "Goal", "goal_name": "Dinner on the table",
            "process": "Process",
            "steps": ["Shop", "Wash", "Chop", "Cook"],
            "alt": "Tired night? Order in.",
            "cap": ["The goal is what you want at the end. The process is how you get there.", "The process can change. The goal stays. Hand the process to a bot."],
        },
        "lessons": {
            "items": [
                ("Lesson 1", "Say what you want", "10 min", "A goal in your own words"),
                ("Lesson 2", "Make Potato", "15 min", "A bot that remembers it"),
                ("Lesson 3", "Hand over a job", "30 min", "A bot that runs every week"),
            ],
            "get": "You get:",
        },
    },
}


def face(x, y, s, body=INK, eye=BG, mouth=HOT):
    k = s / 20
    return (f'<rect x="{x}" y="{y}" width="{s}" height="{s}" fill="{body}"/>'
            f'<rect x="{x + 5 * k:.1f}" y="{y + 6 * k:.1f}" width="{3 * k:.1f}" height="{3 * k:.1f}" fill="{eye}"/>'
            f'<rect x="{x + 12 * k:.1f}" y="{y + 6 * k:.1f}" width="{3 * k:.1f}" height="{3 * k:.1f}" fill="{eye}"/>'
            f'<rect x="{x + 5 * k:.1f}" y="{y + 12.5 * k:.1f}" width="{10 * k:.1f}" height="{2 * k:.1f}" fill="{mouth}"/>')


def t(x, y, s, size, fill, font, weight=400, anchor="start", cls=""):
    c = f' class="{cls}"' if cls else ""
    return f'<text{c} x="{x}" y="{y}" font-family="{font}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">{escape(s)}</text>'


def show(name, start, dur, total, fade_out=None):
    """在 start 秒淡入，fade_out 秒（默认循环结束前）淡出。"""
    p = lambda s: f"{s / total * 100:.2f}%"
    end = fade_out if fade_out is not None else total - 0.8
    return (f"@keyframes {name}{{0%,{p(start)}{{opacity:0;transform:translateY(6px)}}{p(start + dur)},{p(end)}{{opacity:1;transform:translateY(0)}}"
            f"{p(end + .5)},100%{{opacity:0}}}}.{name}{{animation:{name} {total}s infinite;transform-box:fill-box}}")


def wrap(w, h, css, body, label):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="{escape(label)}">'
            f'<style>{css}{REDUCE}</style><rect width="{w}" height="{h}" fill="{BG}"/>{body}</svg>\n')


def chat_vs_bot(lang):
    T, f = TEXT[lang]["chat"], TEXT[lang]["font"]
    W, H, TOTAL = 1200, 440, 10.0
    css, out = [], []
    # 左：聊天
    out.append(f'<rect x="40" y="40" width="540" height="300" fill="{PANEL}" stroke="{LINE}" stroke-width="2"/>')
    out.append(t(64, 82, T["left"], 24, INK, f, 700))
    aw = int(len(T["ask"]) * (19 if lang == "zh" else 9.6)) + 40
    out.append(f'<g class="ask"><rect x="{556 - aw}" y="104" width="{aw}" height="48" fill="{PAPER}"/>{t(556 - aw + 18, 135, T["ask"], 19, BG, f)}</g>')
    out.append(f'<g class="reply"><rect x="64" y="170" width="380" height="{len(T["reply"]) * 32 + 22}" fill="{BG}" stroke="{LINE}" stroke-width="2"/>')
    for i, line in enumerate(T["reply"]):
        out.append(t(82, 200 + i * 32, line, 19, INK, f))
    out.append("</g>")
    out.append(t(310, 384, T["left_cap"], 21, MUTED, f, 500, "middle"))
    css += [show("ask", .3, .4, TOTAL), show("reply", 1.2, .5, TOTAL)]
    # 中间
    out.append(t(600, 200, "vs", 26, MUTED, MONO, 700, "middle"))
    # 右：bot
    out.append(f'<rect x="620" y="40" width="540" height="300" fill="{PANEL}" stroke="{HOT}" stroke-width="2"/>')
    out.append(face(644, 58, 30))
    out.append(t(686, 82, T["right"], 24, INK, f, 700))
    for i, step in enumerate(T["steps"]):
        y = 112 + i * 54
        name = f"st{i}"
        out.append(f'<g class="{name}"><rect x="644" y="{y}" width="30" height="30" fill="{HOT}"/>'
                   f'<path d="M651 {y + 15} l6 6 l11 -12" stroke="{BG}" stroke-width="3.5" fill="none"/>'
                   f'{t(690, y + 23, step, 20, INK, f)}</g>')
        css.append(show(name, 2.4 + i * 1.2, .4, TOTAL))
    out.append(t(890, 384, T["right_cap"], 21, HOT, f, 600, "middle"))
    out.append(t(1160, 424, TEXT[lang]["demo"], 15, MUTED, f, 400, "end"))
    return wrap(W, H, "".join(css), "".join(out), f'{T["left"]}: {T["left_cap"]} {T["right"]}: {T["right_cap"]}')


def goal(lang):
    T, f = TEXT[lang]["goal"], TEXT[lang]["font"]
    W, H, TOTAL = 1200, 420, 9.0
    cw = 22 if lang == "zh" else 12.5
    css, out = [], []
    gx, top, bottom = 880, 40, 300
    # 过程：一排步骤
    out.append(t(48, 70, T["process"], 24, MUTED, f, 700))
    x, y, gap = 48, 96, 18
    for i, step in enumerate(T["steps"]):
        w = max(112, int(len(step) * cw) + 44)
        name = f"p{i}"
        out.append(f'<g class="{name}"><rect x="{x}" y="{y}" width="{w}" height="58" fill="{PANEL}" stroke="{INK}" stroke-width="2"/>'
                   f'{t(x + 14, y + 22, f"0{i + 1}", 13, MUTED, MONO, 700)}{t(x + 14, y + 46, step, 21, INK, f, 600)}</g>')
        css.append(show(name, .3 + i * .7, .35, TOTAL))
        if i < len(T["steps"]) - 1:
            out.append(f'<path class="{name}" d="M{x + w + 3} {y + 29} h{gap - 6}" stroke="{MUTED}" stroke-width="2.5"/>')
        x += w + gap
    out.append(f'<g class="arrow"><path d="M{x - gap + 12} {y + 29} H{gx - 20}" stroke="{HOT}" stroke-width="3"/>'
               f'<path d="M{gx - 28} {y + 21} l10 8 l-10 8" stroke="{HOT}" stroke-width="3" fill="none"/></g>')
    css.append(show("arrow", 3.1, .4, TOTAL))
    # 另一条路：换个过程，到同一个目标
    ay = 200
    aw = int(len(T["alt"]) * (22 if lang == "zh" else 10.5)) + 44
    out.append(f'<g class="alt"><rect x="48" y="{ay}" width="{aw}" height="58" fill="{BG}" stroke="{MUTED}" stroke-width="2" stroke-dasharray="7 6"/>'
               f'{t(62, ay + 37, T["alt"], 21, INK, f, 600)}'
               f'<path d="M{48 + aw + 12} {ay + 29} H{gx - 20}" stroke="{HOT}" stroke-width="3" stroke-dasharray="9 7"/>'
               f'<path d="M{gx - 28} {ay + 21} l10 8 l-10 8" stroke="{HOT}" stroke-width="3" fill="none"/></g>')
    css.append(show("alt", 5.2, .5, TOTAL))
    # 目标：一碗冒着热气的饭
    out.append(f'<g class="goal"><rect x="{gx}" y="{top}" width="280" height="{bottom - top}" fill="{PANEL}" stroke="{HOT}" stroke-width="2.5"/>')
    out.append(t(gx + 24, top + 38, T["goal"], 24, HOT, f, 700))
    cx, cy, r = gx + 140, 176, 72
    for k in (-1, 0, 1):
        sx = cx + k * 28
        out.append(f'<path class="steam" d="M{sx} {cy - 22} c-10 -12 10 -20 0 -32 c-10 -12 10 -20 0 -30" stroke="{MUTED}" stroke-width="4" fill="none" stroke-linecap="round"/>')
    out.append(f'<ellipse cx="{cx}" cy="{cy + r * .78}" rx="{r * .42}" ry="7" fill="#c9783c"/>')
    out.append(f'<path d="M{cx - r} {cy} A{r} {r * .8} 0 0 0 {cx + r} {cy} Z" fill="#e3a35a"/>')
    out.append(f'<ellipse cx="{cx}" cy="{cy}" rx="{r}" ry="13" fill="#c9783c"/>')
    out.append(f'<ellipse cx="{cx}" cy="{cy - 3}" rx="{r - 8}" ry="9" fill="#f6d39b"/>')
    out.append(t(cx, bottom - 24, T["goal_name"], 22, INK, f, 600, "middle"))
    out.append("</g>")
    css.append(show("goal", 3.6, .5, TOTAL))
    css.append("@keyframes rise{0%,100%{transform:translateY(0);opacity:.55}50%{transform:translateY(-6px);opacity:1}}"
               ".steam{animation:rise 2.4s ease-in-out infinite;transform-box:fill-box}")
    # 说明
    size = 22 if lang == "zh" else 20
    for i, line in enumerate(T["cap"]):
        out.append(t(48, 356 + i * 34, line, size, INK, f, 500))
    return wrap(W, H, "".join(css), "".join(out), " ".join(T["cap"]))


def lessons(lang):
    T, f = TEXT[lang]["lessons"], TEXT[lang]["font"]
    W, H, TOTAL = 1200, 330, 8.0
    css, out = [], []
    cw, gap, x0, y0 = 352, 32, 48, 48
    out.append(f'<rect x="{x0}" y="{y0 + 118}" width="{cw * 3 + gap * 2}" height="4" fill="{LINE}"/>')
    out.append(f'<rect class="bar" x="{x0}" y="{y0 + 118}" width="{cw * 3 + gap * 2}" height="4" fill="{HOT}"/>')
    css.append(f"@keyframes bar{{0%{{transform:scaleX(0);opacity:1}}70%,92%{{transform:scaleX(1);opacity:1}}100%{{transform:scaleX(1);opacity:0}}}}.bar{{transform-origin:{x0}px 0;animation:bar {TOTAL}s infinite}}")
    for i, (num, title, mins, get) in enumerate(T["items"]):
        x = x0 + i * (cw + gap)
        name = f"l{i}"
        out.append(f'<g class="{name}"><rect x="{x}" y="{y0}" width="{cw}" height="236" fill="{PANEL}" stroke="{HOT if i == 2 else LINE}" stroke-width="2"/>')
        out.append(t(x + 24, y0 + 40, num, 18, HOT, f, 700))
        out.append(t(x + cw - 24, y0 + 40, mins, 17, MUTED, MONO, 600, "end"))
        out.append(t(x + 24, y0 + 88, title, 28, INK, f, 700))
        out.append(t(x + 24, y0 + 168, T["get"], 17, MUTED, f, 500))
        out.append(t(x + 24, y0 + 200, get, 20, INK, f, 600))
        out.append("</g>")
        css.append(show(name, .2 + i * 1.6, .45, TOTAL, TOTAL - .4))
    return wrap(W, H, "".join(css), "".join(out), " · ".join(f"{n} {ti} ({m}): {g}" for n, ti, m, g in T["items"]))


if __name__ == "__main__":
    for lang, sub in [("zh", "readme"), ("en", "en/readme")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        for name, fn in [("chat-vs-bot", chat_vs_bot), ("goal", goal), ("lessons", lessons)]:
            with open(os.path.join(d, f"{name}.svg"), "w") as fh:
                fh.write(fn(lang))
        print("wrote", f"assets/{sub}/" + "{chat-vs-bot,goal,lessons}.svg")
