// Chuyển romaji → hiragana/katakana để gõ đáp án khi không có bộ gõ tiếng Nhật.
(function () {
  const T = {
    kya: "きゃ", kyu: "きゅ", kyo: "きょ", gya: "ぎゃ", gyu: "ぎゅ", gyo: "ぎょ",
    sha: "しゃ", shu: "しゅ", sho: "しょ", she: "しぇ", sya: "しゃ", syu: "しゅ", syo: "しょ",
    ja: "じゃ", ju: "じゅ", jo: "じょ", je: "じぇ", jya: "じゃ", jyu: "じゅ", jyo: "じょ",
    cha: "ちゃ", chu: "ちゅ", cho: "ちょ", che: "ちぇ", tya: "ちゃ", tyu: "ちゅ", tyo: "ちょ",
    nya: "にゃ", nyu: "にゅ", nyo: "にょ", hya: "ひゃ", hyu: "ひゅ", hyo: "ひょ",
    bya: "びゃ", byu: "びゅ", byo: "びょ", pya: "ぴゃ", pyu: "ぴゅ", pyo: "ぴょ",
    mya: "みゃ", myu: "みゅ", myo: "みょ", rya: "りゃ", ryu: "りゅ", ryo: "りょ",
    shi: "し", chi: "ち", tsu: "つ", thi: "てぃ", dhi: "でぃ", fa: "ふぁ", fi: "ふぃ", fe: "ふぇ", fo: "ふぉ", wi: "うぃ", we: "うぇ", vu: "ゔ",
    ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ", ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご",
    sa: "さ", si: "し", su: "す", se: "せ", so: "そ", za: "ざ", zi: "じ", ji: "じ", zu: "ず", ze: "ぜ", zo: "ぞ",
    ta: "た", ti: "ち", tu: "つ", te: "て", to: "と", da: "だ", di: "ぢ", du: "づ", de: "で", do: "ど",
    na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の", ha: "は", hi: "ひ", hu: "ふ", fu: "ふ", he: "へ", ho: "ほ",
    ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ", pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ",
    ma: "ま", mi: "み", mu: "む", me: "め", mo: "も", ya: "や", yu: "ゆ", yo: "よ",
    ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ", wa: "わ", wo: "を", "n'": "ん",
    a: "あ", i: "い", u: "う", e: "え", o: "お", "-": "ー",
    xa: "ぁ", xi: "ぃ", xu: "ぅ", xe: "ぇ", xo: "ぉ", xtu: "っ", xya: "ゃ", xyu: "ゅ", xyo: "ょ"
  };
  const keys = Object.keys(T).sort((a, b) => b.length - a.length);

  function toHira(input) {
    let s = input.toLowerCase(), out = "";
    while (s.length) {
      // Phụ âm đôi → っ (trừ nn)
      if (s.length > 1 && s[0] === s[1] && /[bcdfghjklmpqrstvwxyz]/.test(s[0]) && s[0] !== "n") { out += "っ"; s = s.slice(1); continue; }
      if (s.startsWith("tch")) { out += "っ"; s = s.slice(1); continue; }
      if (s.startsWith("nn") && (s.length === 2 || !/[aiueoy]/.test(s[2]))) { out += "ん"; s = s.slice(2); continue; }
      const k = keys.find((x) => s.startsWith(x));
      if (k) { out += T[k]; s = s.slice(k.length); continue; }
      // n đứng trước phụ âm (không phải y) hoặc ở cuối → ん
      if (s[0] === "n" && (s.length === 1 || !/[aiueoy]/.test(s[1]))) { out += "ん"; s = s.slice(1); continue; }
      out += s[0]; s = s.slice(1);
    }
    return out;
  }
  const hiraToKata = (s) => s.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
  const kataToHira = (s) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
  const isKata = (s) => /[ァ-ヺ]/.test(s) && !/[ぁ-ゖ]/.test(s);

  window.Kana = { toHira, hiraToKata, kataToHira, isKata,
    // Chuyển chuỗi gõ vào sang bảng chữ của đáp án (romaji → kana; kana giữ nguyên).
    convert(input, target) {
      const raw = input.trim();
      if (!/[a-z\-']/i.test(raw)) return raw;
      const h = toHira(raw);
      return isKata(target) ? hiraToKata(h) : h;
    }
  };
})();
