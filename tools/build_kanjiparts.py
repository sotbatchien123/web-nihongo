"""Read radical + top-level components of each kanji from KanjiVG (CC BY-SA 3.0) and emit data/kanjiparts.js.

Usage: python -I build_kanjiparts.py <output_js> <kanji_string>
Output: window.KPARTS = {"休": {"rad": "人", "radForm": "亻", "parts": ["亻", "木"]}, ...}
"""
import json
import sys
import urllib.request
import xml.etree.ElementTree as ET

URL = "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/{:05x}.svg"
NS = "{https://kanjivg.tagaini.net/}"
SVG = "{http://www.w3.org/2000/svg}"


def fetch(ch):
    with urllib.request.urlopen(URL.format(ord(ch)), timeout=20) as r:
        return r.read().decode("utf-8")


def parse(svg, ch):
    # Bỏ DOCTYPE (khai báo entity kvg) để ElementTree đọc được thuộc tính kvg:*.
    body = svg[svg.index("<svg"):]
    root = ET.fromstring(body)
    top = next(g for g in root.iter(SVG + "g") if g.get(NS + "element") == ch)
    rad = form = None
    # Ưu tiên bộ thủ "general" (bộ dùng để tra từ điển), sau đó "tradit", "nelson".
    for kind in ("general", "tradit", "nelson"):
        for g in top.iter(SVG + "g"):
            if g.get(NS + "radical") == kind and g.get(NS + "element"):
                form = g.get(NS + "element")
                rad = g.get(NS + "original") or form
                break
        if rad:
            break
    parts = [g.get(NS + "element") for g in top.findall(SVG + "g") if g.get(NS + "element")]
    return {"rad": rad, "radForm": form, "parts": parts}


def main():
    out, chars = sys.argv[1], sys.argv[2]
    data = {}
    for ch in dict.fromkeys(chars):
        try:
            data[ch] = parse(fetch(ch), ch)
        except Exception as e:  # báo và bỏ qua; giao diện vẫn chạy khi thiếu
            print("FAIL", ch, e, file=sys.stderr)
    with open(out, "w", encoding="utf-8") as f:
        f.write("// Radical and components from KanjiVG (https://kanjivg.tagaini.net), CC BY-SA 3.0, (c) Ulrich Apel.\n")
        f.write("window.KPARTS = " + json.dumps(data, ensure_ascii=False) + ";\n")
    print("wrote", len(data), "kanji;", sum(1 for d in data.values() if not d["rad"]), "without radical")


if __name__ == "__main__":
    main()
