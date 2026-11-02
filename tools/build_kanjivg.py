"""Download KanjiVG stroke data (CC BY-SA 3.0) and emit data/kanjivg.js.

Usage: python -I build_kanjivg.py <output_js> <kanji_string>
"""
import json
import re
import sys
import urllib.request

URL = "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/{:05x}.svg"


def fetch(ch):
    with urllib.request.urlopen(URL.format(ord(ch)), timeout=20) as r:
        return r.read().decode("utf-8")


def parse(svg):
    paths = re.findall(r'<path[^>]*\sd="([^"]+)"', svg)
    nums = re.findall(r'<text[^>]*transform="matrix\(1 0 0 1 ([\d.]+) ([\d.]+)\)"[^>]*>(\d+)</text>', svg)
    return {"p": paths, "n": [[float(x), float(y)] for x, y, _ in nums]}


def main():
    out, chars = sys.argv[1], sys.argv[2]
    data = {}
    for ch in dict.fromkeys(chars):
        try:
            data[ch] = parse(fetch(ch))
        except Exception as e:  # report and continue; missing kanji show a notice in the UI
            print("FAIL", ch, e, file=sys.stderr)
    with open(out, "w", encoding="utf-8") as f:
        f.write("// Stroke data from KanjiVG (https://kanjivg.tagaini.net), CC BY-SA 3.0, (c) Ulrich Apel.\n")
        f.write("window.KANJIVG = " + json.dumps(data, ensure_ascii=False) + ";\n")
    print("wrote", len(data), "kanji")


if __name__ == "__main__":
    main()
