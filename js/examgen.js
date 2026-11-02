// Sinh 20 đề N5 (bài 1–25) và 20 đề N4 (bài 26–50) theo cấu trúc phần thi JLPT,
// lấy câu hỏi từ dữ liệu bài học (window.LESSONS). Dùng hạt giống cố định nên mỗi đề luôn giống nhau.
(function () {
  "use strict";
  if (!window.LESSONS || !window.EXAMS) return;

  // ---------- Ngẫu nhiên có hạt giống ----------
  function rng(seed) {
    let a = seed >>> 0;
    return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  const shuffle = (arr, r) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pickN = (arr, n, r, not = []) => shuffle(arr.filter((x) => !not.includes(x)), r).slice(0, n);
  const hasKanji = (s) => /[一-鿿]/.test(s);
  const hasLatin = (s) => /[A-Za-zÀ-ỹ]/.test(s);
  const clean = (w) => !/[～〜［\[（(／/・]/.test(w);

  // ---------- Biến đổi cách đọc để làm phương án nhiễu (kiểu JLPT: đục/trong, っ, trường âm, âm ghép) ----------
  const DAKU = { か: "が", き: "ぎ", く: "ぐ", け: "げ", こ: "ご", さ: "ざ", し: "じ", す: "ず", せ: "ぜ", そ: "ぞ", た: "だ", ち: "ぢ", つ: "づ", て: "で", と: "ど", は: "ば", ひ: "び", ふ: "ぶ", へ: "べ", ほ: "ぼ" };
  const UNDAKU = Object.fromEntries(Object.entries(DAKU).map(([k, v]) => [v, k]));
  const SMALL = { ゃ: "や", ゅ: "ゆ", ょ: "よ" };
  const BIG = { や: "ゃ", ゆ: "ゅ", よ: "ょ" };
  const ORow = "おこそとのほもよろごぞどぼぽょ";
  function mutations(s) {
    const out = new Set();
    [...s].forEach((c, i) => {
      if (DAKU[c]) out.add(s.slice(0, i) + DAKU[c] + s.slice(i + 1));
      if (UNDAKU[c]) out.add(s.slice(0, i) + UNDAKU[c] + s.slice(i + 1));
      if (SMALL[c]) out.add(s.slice(0, i) + SMALL[c] + s.slice(i + 1));
      if (BIG[c] && i > 0 && /[きしちにひみりぎじびぴ]/.test(s[i - 1])) out.add(s.slice(0, i) + BIG[c] + s.slice(i + 1));
      if (c === "っ") out.add(s.slice(0, i) + s.slice(i + 1));
      if (c === "う" && i > 0 && ORow.includes(s[i - 1])) out.add(s.slice(0, i) + s.slice(i + 1));
      if (ORow.includes(c) && s[i + 1] !== "う" && i < s.length - 1) out.add(s.slice(0, i + 1) + "う" + s.slice(i + 1));
      if (i > 0 && i < s.length - 1 && /[かきくけこさしすせそたちつてとぱぴぷぺぽ]/.test(c) && s[i - 1] !== "っ" && !/[ゃゅょっん]/.test(s[i - 1])) out.add(s.slice(0, i) + "っ" + s.slice(i));
    });
    out.delete(s);
    return [...out];
  }

  // ---------- Gom dữ liệu theo dải bài ----------
  function pools(from, to) {
    const ls = [];
    for (let i = from; i <= to; i++) if (LESSONS[i]) ls.push(LESSONS[i]);
    const vocab = ls.flatMap((L) => L.vocab.map((v) => ({ ...v, lesson: L.id })));
    const usable = vocab.filter((v) => clean(v.w) && v.ex && v.ex.length && v.ex[0][0].includes(v.w));
    const sentences = [];
    ls.forEach((L) => {
      L.vocab.forEach((v) => (v.ex || []).forEach(([jp, vi]) => sentences.push({ jp, vi, lesson: L.id })));
      L.grammar.forEach((g) => g.usage.forEach((u) => u.ex.forEach(([jp, vi]) => sentences.push({ jp, vi, lesson: L.id }))));
      L.grammarQuiz.forEach((q) => { if (q.q.includes("（　）") && !hasLatin(q.q) && !q.q.includes("\n") && !q.q.includes("――")) sentences.push({ jp: q.q.replace("（　）", q.o[q.a]), vi: q.ex, lesson: L.id }); });
      if (L.listening) L.listening.script.forEach((l) => l.jp.split(/(?<=。)/).forEach((jp) => jp.trim() && sentences.push({ jp: jp.trim(), vi: l.vi, lesson: L.id })));
    });
    const grammar = ls.flatMap((L) => L.grammarQuiz.map((q) => ({ ...q, lesson: L.id })));
    // Hán tự của toàn bộ 50 bài để tạo cách viết sai; chữ đồng âm On làm phương án nhiễu hợp lý hơn.
    const allKanji = Object.values(LESSONS).flatMap((L) => L.kanji);
    const kanjiChars = allKanji.map((k) => k.c);
    const onOf = Object.fromEntries(allKanji.map((k) => [k.c, (k.on || "").split(/[・、]/).map((x) => x.trim()).filter((x) => x && x !== "—")]));
    const homophones = (c) => { const on = onOf[c] || []; return on.length ? kanjiChars.filter((k) => k !== c && (onOf[k] || []).some((x) => on.includes(x))) : []; };
    const realWords = new Set(Object.values(LESSONS).flatMap((L) => [...L.vocab.map((v) => v.w), ...L.kanji.flatMap((k) => k.words.map((w) => w[0]))]));
    return { ls, vocab, usable, sentences, grammar, kanjiChars, homophones, realWords };
  }

  // ---------- Từng dạng câu hỏi ----------
  const mark = (sent, w, shown) => sent.replace(w, `【${shown}】`);

  function kanjiReading(v, P, r) {
    if (!/^[ぁ-ゟ]+$/.test(v.r)) return null;
    const chars = [...v.w].filter(hasKanji);
    // Phương án nhiễu: biến đổi âm của chính từ đó; thiếu thì lấy cách đọc của từ có chung Hán tự.
    const near = P.usable.filter((x) => x.r !== v.r && /^[ぁ-ゟ]+$/.test(x.r) && Math.abs(x.r.length - v.r.length) <= 1 && [...x.w].some((c) => chars.includes(c))).map((x) => x.r);
    const opts = [...new Set([...shuffle(mutations(v.r), r), ...shuffle(near, r)])].filter((x) => x !== v.r).slice(0, 3);
    if (opts.length < 3) return null;
    return { q: `【　】の ことばは ひらがなで どう かきますか。\n${mark(v.ex[0][0], v.w, v.w)}`, o: [v.r, ...opts], a: 0,
      ex: `${v.w} đọc là 「${v.r}」 — ${v.vi}. Câu: ${v.ex[0][1]} (từ vựng bài ${v.lesson}). Mẹo: các phương án nhiễu thường đổi âm đục/trong, thêm bớt っ hoặc trường âm.` };
  }

  function kanjiWriting(v, P, r) {
    // Phương án nhiễu kiểu JLPT: thay một Hán tự bằng chữ đồng âm (cùng âm On) hoặc chữ khác trong kho.
    const idx = [...v.w].map((c, i) => (hasKanji(c) ? i : -1)).filter((i) => i >= 0);
    if (!idx.length) return null;
    const fakes = new Set();
    let guard = 0;
    while (fakes.size < 6 && guard++ < 40) {
      const i = idx[Math.floor(r() * idx.length)];
      const c = v.w[i];
      const homo = P.homophones(c);
      const list = homo.length && r() < 0.75 ? homo : P.kanjiChars;
      const sub = list[Math.floor(r() * list.length)];
      if (!sub || sub === c) continue;
      const fake = [...v.w].map((x, j) => (j === i ? sub : x)).join("");
      if (fake !== v.w && !P.realWords.has(fake)) fakes.add(fake);
    }
    const opts = shuffle([...fakes], r).slice(0, 3);
    if (opts.length < 3) return null;
    return { q: `【　】の ことばは どう かきますか。\n${mark(v.ex[0][0], v.w, v.r)}`, o: [v.w, ...opts], a: 0,
      ex: `「${v.r}」 viết là ${v.w} — ${v.vi}. Câu: ${v.ex[0][1]} (từ vựng bài ${v.lesson}).` };
  }

  // Cụm đứng ngay trước một từ trong câu ví dụ của chính từ đó (vd. "うちへ" trước 帰ります).
  const chunkBefore = (x) => { const parts = x.ex[0][0].split(x.w)[0].trim().split(/\s+/); return parts[parts.length - 1] || ""; };
  const chunkAfter = (x) => (x.ex[0][0].split(x.w)[1] || "").trim().split(/\s+/);
  function context(v, P, r) {
    // Chỉ dùng câu có ràng buộc kết hợp từ chặt (động từ sau cụm trợ từ; danh từ + trợ từ + động từ)
    // và loại phương án nhiễu có cùng kiểu kết hợp, để đáp án là duy nhất.
    const blanked = v.ex[0][0].replace(v.w, "（　）");
    const isVerb = v.t.startsWith("động từ"), isNoun = v.t.startsWith("danh từ");
    let same;
    if (isVerb) {
      const before = chunkBefore(v);
      const parts = blanked.split("（　）")[0].trim().split(/\s+/);
      if (parts.length < 2 || !/[をにでへが]$/.test(before)) return null;
      const prt = before.slice(-1);
      same = P.usable.filter((x) => x.t.startsWith("động từ") && x.w !== v.w && !v.ex[0][0].includes(x.w) && x.vi !== v.vi
        && /ます$/.test(x.w) === /ます$/.test(v.w) && !chunkBefore(x).endsWith(prt));
    } else if (isNoun) {
      const after = chunkAfter(v);
      // Sau trợ từ phải là động từ (tính từ như 大きい/多い thì nhiều danh từ cùng hợp).
      if (after.length < 2 || !/^[をがに]$/.test(after[0]) || !/(ます|ました|ません|て|た|ください)/.test(after[1])) return null;
      const key = after[1].replace(/(ます|ました|ません|て|た|。).*$/, "");
      // Vị ngữ quá chung (好き, します, あります, 行きます…) thì danh từ nào cũng hợp → bỏ.
      if (key.length < 1 || /^(好き|嫌い|欲し|大好き|し|あ|い|来|行|帰|見|買|使|な|上手|下手|わかり|分かり|でき|もら|あげ|くれ|持|探)/.test(key)) return null;
      same = P.usable.filter((x) => x.t.startsWith("danh từ") && x.w !== v.w && !v.ex[0][0].includes(x.w) && x.vi !== v.vi
        && !x.ex.some(([jp]) => jp.includes(key)));
    } else return null;
    const opts = [...new Set(shuffle(same, r).map((x) => x.w))].slice(0, 3);
    if (opts.length < 3) return null;
    const hint = opts.map((w) => `${w} = ${P.usable.find((x) => x.w === w).vi}`).join("; ");
    return { q: `（　）に なにを いれますか。\n${v.ex[0][0].replace(v.w, "（　）")}`, o: [v.w, ...opts], a: 0,
      ex: `Câu đầy đủ: ${v.ex[0][0]} — ${v.ex[0][1]}. ${v.w} = ${v.vi}. Các từ còn lại: ${hint}.` };
  }

  function star(s, r) {
    const body = s.jp.replace(/[。．]$/, "");
    if (/[「」―（）()？?]/.test(body) || hasLatin(body)) return null;
    const ch = body.split(/\s+/).filter(Boolean);
    if (ch.length < 5 || new Set(ch).size !== ch.length) return null;
    const start = Math.floor(r() * (ch.length - 4 + 1));
    const win = ch.slice(start, start + 4);
    // Loại cửa sổ có ≥2 cụm “di chuyển được” (chủ đề, trạng từ thời gian, cụm trợ từ cách) để tránh nhiều thứ tự đều đúng.
    const TIME = /^(今|毎朝|毎日|毎晩|毎週|来月|来週|来年|先週|先月|去年|きのう|あした|きょう|いつも|時々|もう|まだ|よく|ちょっと|とても|すぐ|たぶん|きっと|一人で|みんなで|ゆっくり|初めて|また|ぜひ|いちばん|全部|少し|たくさん|みんな|だいたい|いっしょに|必ず|絶対に|やっと|かなり|できるだけ|急に|ちゃんと|もうすぐ|だんだん)$/;
    const flexible = win.filter((c, i) => i < 3 && (/[はがもをにでへとまでから]、?$/.test(c) || TIME.test(c))).length;
    if (flexible >= 2) return null;
    const blanks = ["＿＿", "＿＿", "＿★＿", "＿＿"].join(" ");
    const q = `★ に はいる ものは どれですか。\n${[...ch.slice(0, start), blanks, ...ch.slice(start + 4)].join(" ")}。`;
    return { q, o: [win[2], ...win.filter((_, i) => i !== 2)], a: 0,
      ex: `Câu đúng: ${s.jp} — ${s.vi}. Thứ tự 4 ô: ${win.join(" / ")} → ô ★ (thứ 3) là 「${win[2]}」. Mẹo: ghép từng cụm “danh từ + trợ từ” trước, động từ đứng cuối cụm.` };
  }

  function readingSection(L, num) {
    const R = L.reading;
    const plain = (t) => t.split(" / ").map((x) => x.split("|")[0]).join("");
    return {
      name: `問題${num} 読解（Đọc hiểu）`,
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: R.paragraphs.map((p) => p.s.map((s) => plain(s.t)).join("")).join("\n"),
      items: R.questions.map((q) => {
        const [pi, si] = q.ev;
        return { q: q.q, o: q.o, a: q.a, ex: `Dữ kiện (đoạn ${pi + 1}, câu ${si + 1}): ${plain(R.paragraphs[pi].s[si].t)} — ${R.paragraphs[pi].s[si].vi}. Mẹo: ${q.tip} (bài đọc bài ${L.id})` };
      })
    };
  }

  function listeningSection(L, num) {
    const S = L.listening;
    const sp = (k) => (S.speakers[k].pitch >= 1.1 ? "F" : "M");
    return {
      name: `問題${num} 聴解（Nghe hiểu）— ${S.title}`,
      instruction: "はなしを きいて、しつもんに こたえて ください。(Nghe tối đa 2 lần)",
      listen: S.script.map((l) => [sp(l.sp), l.jp]),
      script: S.script.map((l) => `${S.speakers[l.sp].name}：${l.jp}`),
      items: S.questions.map((q) => ({ q: q.q, o: q.o, a: q.a,
        ex: `Dữ kiện (lời thoại ${q.ev[0] + 1}): ${S.script[q.ev[0]].jp} — ${S.script[q.ev[0]].vi}. Mẹo: ${q.tip} (bài nghe bài ${L.id})` }))
    };
  }

  // ---------- Lắp 20 đề cho mỗi cấp ----------
  function build(level, from, to, seed, plan, minutes) {
    const P = pools(from, to);
    if (!P.ls.length) return [];
    const R = rng(seed);
    const vocabK = shuffle(P.usable.filter((v) => hasKanji(v.w) && v.r !== v.w), R);
    const vocabC = shuffle(P.usable.filter((v) => v.t.startsWith("động từ") || v.t.startsWith("danh từ")), R);
    const gJp = shuffle(P.grammar.filter((q) => !hasLatin(q.q) && q.o.every((o) => !hasLatin(o))), R);
    const gAll = gJp.length >= plan.grammar * 20 ? gJp : [...gJp, ...shuffle(P.grammar.filter((q) => !gJp.includes(q)), R)];
    const sents = shuffle(P.sentences, R);
    const readOrder = shuffle(P.ls.filter((L) => L.reading), R);
    const listenOrder = shuffle(P.ls.filter((L) => L.listening), R);
    let kc = 0, cc = 0, gc = 0, sc = 0;
    const exams = [];
    for (let e = 0; e < 20; e++) {
      const r = rng(seed * 100 + e + 1);
      // Lấy n câu hợp lệ, không trùng đề bài trong cùng một đề.
      const take = (gen, list, idx, n) => { const out = []; const seen = new Set(); let guard = 0;
        while (out.length < n && guard < list.length) { const it = gen(list[(idx.v++) % list.length], P, r); guard++;
          if (it && !seen.has(it.q)) { seen.add(it.q); out.push(it); } }
        return out; };
      const kIdx = { v: kc }, cIdx = { v: cc }, sIdx = { v: sc };
      const reading = take((v) => kanjiReading(v, P, r), vocabK, kIdx, plan.reading);
      const writing = take((v) => kanjiWriting(v, P, r), vocabK, kIdx, plan.writing);
      const ctx = take((v) => context(v, P, r), vocabC, cIdx, plan.context);
      const grammar = []; for (let i = 0; i < plan.grammar; i++) { const g = gAll[(gc++) % gAll.length]; grammar.push({ q: g.q, o: g.o, a: g.a, ex: `${g.ex} (ngữ pháp bài ${g.lesson})` }); }
      const stars = take((s) => star(s, r), sents, sIdx, plan.star);
      kc = kIdx.v; cc = cIdx.v; sc = sIdx.v;
      const sections = [
        { name: "問題1 漢字読み（Cách đọc Hán tự）", instruction: "【　】の ことばは ひらがなで どう かきますか。", items: reading },
        { name: "問題2 表記（Cách viết）", instruction: "【　】の ことばは どう かきますか。", items: writing },
        { name: "問題3 文脈規定（Chọn từ theo ngữ cảnh）", instruction: "（　）に なにを いれますか。", items: ctx },
        { name: "問題4 文法形式の判断（Ngữ pháp）", instruction: "（　）に 何を 入れますか。いちばん いい ものを えらんで ください。", items: grammar },
        { name: "問題5 文の組み立て（Sắp xếp câu）", instruction: "★ に 入る ものは どれですか。", items: stars },
        readingSection(readOrder[e % readOrder.length], 6),
        listeningSection(listenOrder[(e * 2) % listenOrder.length], 7),
        listeningSection(listenOrder[(e * 2 + 1) % listenOrder.length], 8)
      ];
      exams.push({ id: `${level.toLowerCase()}-${String(e + 1).padStart(2, "0")}`, group: level, generated: true,
        name: `Đề ${level} số ${e + 1}`, minutes, sections });
    }
    return exams;
  }

  const plan = { reading: 7, writing: 5, context: 6, grammar: 9, star: 4 };
  window.EXAMS.push(...build("N5", 1, 25, 515, plan, 45), ...build("N4", 26, 50, 424, { ...plan, context: 7 }, 55));
})();
