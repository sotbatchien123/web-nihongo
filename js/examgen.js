// Sinh 20 đề N5 (bài 1–25) và 20 đề N4 (bài 26–50) theo đúng cấu trúc JLPT hiện hành:
// 3 phần thi có giờ riêng, đủ các dạng câu (kể cả 言い換え, 用法, 文章の文法, 情報検索, 発話表現, 即時応答).
// Nguồn câu: dữ liệu bài học (window.LESSONS) + ngân hàng câu tự soạn (window.BANK, data/bank_n5.js, data/bank_n4.js).
// Dùng hạt giống cố định nên mỗi số đề luôn giống nhau.
(function () {
  "use strict";
  if (!window.LESSONS || !window.EXAMS) return;
  const BANK = window.BANK || {};

  // ---------- Ngẫu nhiên có hạt giống ----------
  function rng(seed) {
    let a = seed >>> 0;
    return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  const shuffle = (arr, r) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
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

  // ---------- Chữ giống hình (phương án nhiễu cho 表記, như đề thật: 立/位, 学/字, 下/上/止/不) ----------
  const LOOKALIKE = ["上下止不", "右石左在", "千干午牛手", "土士工王", "未末来米", "人入八大", "日目白田由", "大太犬天夫", "休体本木", "学字子", "今会令", "先洗生", "円内肉", "力刀方万", "見貝買覚", "時持待特詩",
    "話語読記試", "間聞問門開閉", "雨両", "電雷", "金全会", "校交効", "前後", "外夕多", "東車束", "西四酒", "北比", "長張帳", "書昼画", "国図回", "行待往", "早草", "朝期", "近遠", "社祖礼", "新親", "休林",
    "立位泣", "食飲館", "家安字室", "出山", "母毎海", "花化", "名各", "男町", "女好", "気汽", "歩少", "走足起", "道首", "思恩", "住注主", "使便", "作昨", "員買", "場湯", "強弱", "持指", "便使", "急意", "始治", "終級", "答合", "週調"];
  const lookMap = {};
  LOOKALIKE.forEach((g) => [...g].forEach((c) => (lookMap[c] = [...new Set([...(lookMap[c] || []), ...[...g].filter((x) => x !== c)])])));

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
      if (L.listening) L.listening.script.forEach((l) => l.jp.split(/(?<=。)/).forEach((jp) => jp.trim() && sentences.push({ jp: jp.trim(), vi: l.vi, lesson: L.id })));
      L.grammarQuiz.forEach((q) => { if (q.q.includes("（　）") && !hasLatin(q.q) && !q.q.includes("\n") && !q.q.includes("――")) sentences.push({ jp: q.q.replace("（　）", q.o[q.a]), vi: q.ex, lesson: L.id }); });
    });
    const grammar = ls.flatMap((L) => L.grammarQuiz.map((q) => ({ ...q, lesson: L.id })));
    const allKanji = Object.values(LESSONS).flatMap((L) => L.kanji);
    const kanjiChars = allKanji.map((k) => k.c);
    const parts = window.KPARTS || {};
    // Chữ có chung thành phần (vd. 語/話/読 cùng 言) — thêm vào danh sách chữ giống hình.
    const sharePart = (c) => { const p = (parts[c] && parts[c].parts) || []; return p.length ? kanjiChars.filter((k) => k !== c && ((parts[k] && parts[k].parts) || []).some((x) => p.includes(x))) : []; };
    const realWords = new Set(Object.values(LESSONS).flatMap((L) => [...L.vocab.map((v) => v.w), ...L.kanji.flatMap((k) => k.words.map((w) => w[0]))]));
    return { ls, vocab, usable, sentences, grammar, kanjiChars, sharePart, realWords };
  }

  // ---------- Phần 1: chữ – từ vựng ----------
  const mark = (sent, w, shown) => sent.replace(w, `【${shown}】`);

  function kanjiReading(v, P, r) {
    if (!/^[ぁ-ゟ]+$/.test(v.r)) return null;
    const chars = [...v.w].filter(hasKanji);
    // Phương án nhiễu: biến âm của chính từ đó; thiếu thì lấy cách đọc của từ cùng loại có độ dài gần bằng.
    const near = P.usable.filter((x) => x.r !== v.r && /^[ぁ-ゟ]+$/.test(x.r) && Math.abs(x.r.length - v.r.length) <= 1 && ([...x.w].some((c) => chars.includes(c)) || x.t === v.t)).map((x) => x.r);
    const opts = [...new Set([...shuffle(mutations(v.r), r), ...shuffle(near, r)])].filter((x) => x !== v.r).slice(0, 3);
    if (opts.length < 3) return null;
    return { q: mark(v.ex[0][0], v.w, v.w), o: [v.r, ...opts], a: 0,
      ex: `${v.w} đọc là 「${v.r}」 — ${v.vi}. Câu: ${v.ex[0][1]} (từ vựng bài ${v.lesson}). Mẹo: phương án nhiễu thường đổi âm đục/trong, thêm bớt っ hoặc trường âm.` };
  }

  function kanjiWriting(v, P, r) {
    // Như đề thật: thay một Hán tự bằng chữ giống hình (cùng thành phần, hay bị nhầm); không dùng từ có thật.
    const idx = [...v.w].map((c, i) => (hasKanji(c) ? i : -1)).filter((i) => i >= 0);
    if (!idx.length) return null;
    const fakes = new Set();
    for (let guard = 0; fakes.size < 6 && guard < 60; guard++) {
      const i = idx[Math.floor(r() * idx.length)];
      const c = v.w[i];
      const cand = [...(lookMap[c] || []), ...P.sharePart(c)];
      if (!cand.length) continue;
      const sub = cand[Math.floor(r() * cand.length)];
      const fake = [...v.w].map((x, j) => (j === i ? sub : x)).join("");
      if (fake !== v.w && !P.realWords.has(fake)) fakes.add(fake);
    }
    const opts = shuffle([...fakes], r).slice(0, 3);
    if (opts.length < 3) return null;
    return { q: mark(v.ex[0][0], v.w, v.r), o: [v.w, ...opts], a: 0,
      ex: `「${v.r}」 viết là ${v.w} — ${v.vi}. Câu: ${v.ex[0][1]} (bài ${v.lesson}). Các phương án sai thay một chữ bằng chữ giống hình: nhìn kỹ từng thành phần của chữ.` };
  }

  // Cụm đứng ngay trước / sau một từ trong câu ví dụ của chính từ đó.
  const chunkBefore = (x) => { const parts = x.ex[0][0].split(x.w)[0].trim().split(/\s+/); return parts[parts.length - 1] || ""; };
  const chunkAfter = (x) => (x.ex[0][0].split(x.w)[1] || "").trim().split(/\s+/);
  function context(v, P, r) {
    // Chỉ dùng câu có ràng buộc kết hợp từ chặt; phương án nhiễu cùng từ loại, cùng dạng (như đề thật: はきます/つけます/かけます/かぶります).
    const blanked = v.ex[0][0].replace(v.w, "（　　）");
    const isVerb = v.t.startsWith("động từ"), isNoun = v.t.startsWith("danh từ");
    let same;
    if (isVerb) {
      const before = chunkBefore(v);
      const parts = blanked.split("（　　）")[0].trim().split(/\s+/);
      if (parts.length < 2 || !/[をにでへが]$/.test(before)) return null;
      const prt = before.slice(-1);
      same = P.usable.filter((x) => x.t.startsWith("động từ") && x.w !== v.w && !v.ex[0][0].includes(x.w) && x.vi !== v.vi
        && /ます$/.test(x.w) === /ます$/.test(v.w) && !chunkBefore(x).endsWith(prt));
    } else if (isNoun) {
      const after = chunkAfter(v);
      if (after.length < 2 || !/^[をがに]$/.test(after[0]) || !/(ます|ました|ません|て|た|ください)/.test(after[1])) return null;
      const key = after[1].replace(/(ます|ました|ません|て|た|。).*$/, "");
      if (key.length < 1 || /^(好き|嫌い|欲し|大好き|し|あ|い|来|行|帰|見|買|使|な|上手|下手|わかり|分かり|でき|もら|あげ|くれ|持|探)/.test(key)) return null;
      same = P.usable.filter((x) => x.t.startsWith("danh từ") && x.w !== v.w && !v.ex[0][0].includes(x.w) && x.vi !== v.vi
        && !x.ex.some(([jp]) => jp.includes(key)) && /^[ァ-ヶー]+$/.test(x.w) === /^[ァ-ヶー]+$/.test(v.w));
    } else return null; // Tính từ dễ có nhiều đáp án hợp nghĩa (夏は 暑い/長い) nên không dùng.
    const opts = [...new Set(shuffle(same, r).map((x) => x.w))].slice(0, 3);
    if (opts.length < 3) return null;
    const hint = opts.map((w) => `${w} = ${P.usable.find((x) => x.w === w).vi}`).join("; ");
    return { q: blanked, o: [v.w, ...opts], a: 0,
      ex: `Câu đầy đủ: ${v.ex[0][0]} — ${v.ex[0][1]}. ${v.w} = ${v.vi}. Các từ còn lại: ${hint}.` };
  }

  // Ngân hàng: 言い換え [câu có 【đoạn】 hoặc câu, đúng, sai1, sai2, sai3, ghi chú]
  function iikae(b) {
    const [sent, ok, ...rest] = b; const note = rest.pop(); const wrong = rest;
    const m = sent.match(/【(.+?)】/);
    const full = (x) => (m ? sent.replace(m[0], x) : x);
    return { q: m ? sent : `【${sent}】`, o: [full(ok), ...wrong.map(full)], a: 0,
      ex: `${m ? `「${m[1]}」 ≈ 「${ok}」. ` : ""}${note}` };
  }
  // 用法 [từ, câu đúng, sai1, sai2, sai3, ghi chú] — từ cần xét được đánh dấu 【】 trong câu.
  function youhou(b) {
    const [w, ok, s1, s2, s3, note] = b;
    return { q: w, o: [ok, s1, s2, s3], a: 0, ex: note };
  }

  // ---------- Phần 2: ngữ pháp – đọc hiểu ----------
  function star(s, r) {
    const body = s.jp.replace(/[。．]$/, "");
    if (/[「」―（）()？?]/.test(body) || hasLatin(body)) return null;
    const ch = body.split(/\s+/).filter(Boolean);
    if (ch.length < 5 || new Set(ch).size !== ch.length) return null;
    // Câu soạn tay có vị trí 4 ô chỉ định sẵn (đoạn thứ tự cố định); câu khác chọn ngẫu nhiên rồi lọc.
    const start = s.start != null ? s.start : Math.floor(r() * (ch.length - 4 + 1));
    const win = ch.slice(start, start + 4);
    // Loại cửa sổ có ≥2 cụm “di chuyển được” để tránh nhiều thứ tự đều đúng.
    const TIME = /^(今|毎朝|毎日|毎晩|毎週|来月|来週|来年|先週|先月|去年|きのう|あした|きょう|いつも|時々|もう|まだ|よく|ちょっと|とても|すぐ|たぶん|きっと|一人で|みんなで|ゆっくり|初めて|また|ぜひ|いちばん|全部|少し|たくさん|みんな|だいたい|いっしょに|必ず|絶対に|やっと|かなり|できるだけ|急に|ちゃんと|もうすぐ|だんだん)$/;
    const flexible = win.filter((c, i) => i < 3 && (/[はがもをにでへとまでから]、?$/.test(c) || TIME.test(c))).length;
    if (flexible >= 2 && s.start == null) return null;
    const q = [...ch.slice(0, start), "＿＿ ＿＿ ＿★＿ ＿＿", ...ch.slice(start + 4)].join(" ") + "。";
    return { q, o: [win[2], ...win.filter((_, i) => i !== 2)], a: 0,
      ex: `Câu đúng: ${s.jp} — ${s.vi}. Thứ tự 4 ô: ${win.join(" / ")} → ô ★ (thứ 3) là 「${win[2]}」. Mẹo: ghép từng cụm “danh từ + trợ từ” trước, động từ đứng cuối cụm.` };
  }
  // 文章の文法 {text có （１）…（４）, items: [[đúng, sai1, sai2, sai3, ghi chú] ×4]}
  function bunsho(b, num) {
    return { name: `もんだい${num} 文章の文法`, instruction: "（　）に 何を 入れますか。文章の 意味を 考えて、いちばん いい ものを えらんで ください。",
      passage: b.text, items: b.items.map(([ok, w1, w2, w3, note], i) => ({ q: `（${i + 1}）`, o: [ok, w1, w2, w3], a: 0, ex: note })) };
  }
  // 短文 [văn bản, câu hỏi, đúng, sai1, sai2, sai3, ghi chú]
  const tanbun = ([text, q, ok, w1, w2, w3, note]) => ({ passage: text, q, o: [ok, w1, w2, w3], a: 0, ex: note });
  // 中文: lấy bài đọc của bài học, chọn n câu hỏi.
  function chubun(L, n, r, num) {
    const R = L.reading;
    const plain = (t) => t.split(" / ").map((x) => x.split("|")[0]).join("");
    const qs = shuffle(R.questions, r).slice(0, n);
    return { name: `もんだい${num} 内容理解（中文）`, instruction: "つぎの 文章を 読んで、しつもんに こたえて ください。",
      passage: R.paragraphs.map((p) => p.s.map((s) => plain(s.t)).join("")).join("\n"),
      items: qs.map((q) => { const [pi, si] = q.ev;
        return { q: q.q, o: q.o, a: q.a, ex: `Dữ kiện (đoạn ${pi + 1}, câu ${si + 1}): ${plain(R.paragraphs[pi].s[si].t)} — ${R.paragraphs[pi].s[si].vi}. Mẹo: ${q.tip}` }; }) };
  }
  // 情報検索 {text (bảng thông tin), qs: [[câu hỏi, đúng, sai1, sai2, sai3, ghi chú], ...]}
  function joho(b, n, num) {
    return { name: `もんだい${num} 情報検索`, instruction: "右の ページを 見て、下の しつもんに こたえて ください。", passage: b.text, pre: true,
      items: b.qs.slice(0, n).map(([q, ok, w1, w2, w3, note]) => ({ q, o: [ok, w1, w2, w3], a: 0, ex: note })) };
  }

  // ---------- Phần 3: nghe hiểu ----------
  const parseLines = (s) => s.split("|").map((x) => { const i = x.indexOf(":"); return [x.slice(0, i).trim(), x.slice(i + 1).trim()]; });
  // 課題理解 [câu hỏi, "M:…|F:…", đúng, sai1, sai2, sai3, ghi chú]
  const kadai = ([ask, lines, ok, w1, w2, w3, note]) => ({ q: "", ask, listen: parseLines(lines), o: [ok, w1, w2, w3], a: 0, ex: note });
  // ポイント理解: một câu hỏi của bài nghe trong bài học (cả đoạn hội thoại).
  function point(L, q) {
    const S = L.listening;
    const sp = (k) => (S.speakers[k].pitch >= 1.1 ? "F" : "M");
    return { q: "", ask: q.q, listen: S.script.map((l) => [sp(l.sp), l.jp]), o: q.o, a: q.a,
      ex: `Dữ kiện (lời thoại ${q.ev[0] + 1}): ${S.script[q.ev[0]].jp} — ${S.script[q.ev[0]].vi}. Mẹo: ${q.tip} (bài nghe bài ${L.id})` };
  }
  // 発話表現 [mô tả tranh, câu hỏi, đúng, sai1, sai2, ghi chú] — phương án không in, máy đọc 1・2・3.
  const hatsuwa = ([pic, ask, ok, w1, w2, note]) => ({ q: "", pic, ask: `${ask}　何と 言いますか。`, o: [ok, w1, w2], a: 0, spoken: true, voice: "F", ex: note });
  // 即時応答 [câu nói, đúng, sai1, sai2, ghi chú] — nghe một câu, chọn câu đáp.
  const sokuji = ([say, ok, w1, w2, note], k) => ({ q: "", listen: [[k % 2 ? "F" : "M", say]], o: [ok, w1, w2], a: 0, spoken: true, voice: k % 2 ? "M" : "F", ex: note });

  // ---------- Lắp đề ----------
  // Mỗi dạng câu có một kho đã khử trùng, xáo theo hạt giống; đề e lấy đoạn bắt đầu ở e*n,
  // nên không câu nào bị dùng lại trước khi kho của dạng đó cạn (spec 002, FR-003).
  const chunk = (list, e, n) => { const out = []; for (let i = 0; i < n && list.length; i++) out.push(list[(e * n + i) % list.length]); return [...new Set(out)]; };
  const itemKey = (it) => [it.q, it.ask || "", it.o[it.a], (it.passage || ""), ((it.listen || [])[0] || [])[1] || ""].join("|");
  const dedupe = (items) => { const seen = new Set(); return items.filter((it) => { if (!it) return false; const k = itemKey(it); if (seen.has(k)) return false; seen.add(k); return true; }); };
  // 言い換え: phần tử đầu có thể là mảng nhiều khung câu (cùng cặp từ, ngữ cảnh khác) → mỗi khung một câu.
  const expandIikae = (b) => (Array.isArray(b[0]) ? b[0].map((s) => [s, ...b.slice(1)]) : [b]);
  // 用法: [từ, câu đúng | [nhiều câu đúng], sai1, sai2, sai3, …, ghi chú] → mỗi câu đúng một câu hỏi, xoay vòng câu sai.
  function expandYouhou(b) {
    const [w, okRaw, ...rest] = b; const note = rest.pop(); const oks = Array.isArray(okRaw) ? okRaw : [okRaw];
    return oks.map((ok, i) => { const wr = rest.map((_, k) => rest[(i + k) % rest.length]).slice(0, 3); return [w, ok, ...wr, note]; });
  }
  // 文脈規定 soạn tay: [câu có （　　）, đúng, sai1, sai2, sai3, ghi chú]
  const bunmyakuB = ([q, ok, w1, w2, w3, note]) => ({ q, o: [ok, w1, w2, w3], a: 0, ex: note });
  // 文法 soạn tay: {q, o, a, ex} như grammarQuiz của bài học.
  const bunpoB = (g) => ({ q: g.q, o: g.o, a: g.a || 0, ex: g.ex });

  function build(level, from, to, seed, plan) {
    const P = pools(from, to);
    const B = BANK[level] || {};
    if (!P.ls.length) return [];
    const R = rng(seed);
    // Phần 1: chữ – từ vựng (sinh từ dữ liệu bài học; 文脈規定 cộng thêm câu kết hợp từ soạn tay).
    const vocabK = shuffle(P.usable.filter((v) => hasKanji(v.w) && v.r !== v.w), R);
    const yomiPool = dedupe(vocabK.map((v) => kanjiReading(v, P, R)));
    const hyokiPool = dedupe(shuffle(vocabK, R).map((v) => kanjiWriting(v, P, R)));
    const vocabC = shuffle(P.usable.filter((v) => /^(động từ|danh từ)/.test(v.t)), R);
    const ctxPool = shuffle(dedupe([...vocabC.map((v) => context(v, P, R)), ...(B.bunmyaku || []).map(bunmyakuB)]), R);
    // Phần 2: ngữ pháp – đọc.
    const gJp = P.grammar.filter((q) => !hasLatin(q.q) && q.o.every((o) => !hasLatin(o)));
    const bunpoPool = dedupe([...shuffle(gJp.map((g) => ({ q: g.q, o: g.o, a: g.a, ex: `${g.ex} (ngữ pháp bài ${g.lesson})` })), R),
      ...shuffle((B.bunpo || []).map(bunpoB), R),
      ...shuffle(P.grammar.filter((q) => !gJp.includes(q)).map((g) => ({ q: g.q, o: g.o, a: g.a, ex: `${g.ex} (ngữ pháp bài ${g.lesson})` })), R)]);
    // ★: mỗi câu cho tối đa 2 vị trí ô khác nhau.
    // Câu soạn tay cho ★: [câu tiếng Nhật có cách cụm, nghĩa].
    const starPool = dedupe(shuffle([...P.sentences, ...(B.star || []).map(([jp, vi, start]) => ({ jp, vi, start }))], R).flatMap((s) => (s.start != null ? [star(s, R)] : [star(s, R), star(s, R)])));
    const readLs = shuffle(P.ls.filter((L) => L.reading && L.reading.questions.length >= plan.chubun), R);
    // Phần 3: ポイント理解 = câu hỏi của bài nghe trong bài học + đoạn soạn sẵn; một đề không lấy hai câu của cùng một đoạn.
    const pointPool = shuffle([...P.ls.filter((L) => L.listening).flatMap((L) => L.listening.questions.map((q) => ({ g: "L" + L.id, it: point(L, q) }))),
      ...(B.point || []).map((b, i) => ({ g: "B" + i, it: kadai(b) }))], R);
    const bank = (k, map) => shuffle(dedupe((B[k] || []).map(map)), R);
    const BK = {
      iikae: (B.iikae || []).flatMap(expandIikae).map(iikae), youhou: shuffle((B.youhou || []).flatMap(expandYouhou), R).map(youhou),
      tanbun: bank("tanbun", tanbun), kadai: bank("kadai", kadai), hatsuwa: bank("hatsuwa", hatsuwa),
      sokuji: shuffle(dedupe((B.sokuji || []).map((b, k) => sokuji(b, k))), R),
      bunsho: shuffle(B.bunsho || [], R), joho: shuffle(B.joho || [], R)
    };
    BK.iikae = shuffle(dedupe(BK.iikae), R); BK.youhou = dedupe(BK.youhou);
    // Xếp xen kẽ các đoạn hội thoại (mỗi lượt lấy một câu của mỗi đoạn) để câu liền nhau thuộc đoạn khác nhau.
    const byG = {}; pointPool.forEach((x) => (byG[x.g] = byG[x.g] || []).push(x));
    const pointSeq = []; for (let k = 0; pointSeq.length < pointPool.length; k++) Object.values(byG).forEach((l) => l[k] && pointSeq.push(l[k]));
    const exams = [];
    for (let e = 0; e < 20; e++) {
      const r = rng(seed * 100 + e + 1);
      const points = []; const usedG = new Set();
      for (let i = e * plan.point, guard = 0; points.length < plan.point && guard < pointSeq.length; i++, guard++) {
        const x = pointSeq[i % pointSeq.length]; if (usedG.has(x.g)) continue; usedG.add(x.g); points.push(x.it); }
      let num = 0;
      const sec = (name, instruction, items) => ({ name: `もんだい${++num} ${name}`, instruction, items });
      const p1 = [
        sec("漢字読み", "＿＿の ことばは ひらがなで どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんで ください。", chunk(yomiPool, e, plan.yomi)),
        sec("表記", "＿＿の ことばは どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんで ください。", chunk(hyokiPool, e, plan.hyoki)),
        sec("文脈規定", "（　　）に なにを いれますか。1・2・3・4から いちばん いい ものを ひとつ えらんで ください。", chunk(ctxPool, e, plan.bunmyaku)),
        sec("言い換え類義", "＿＿の ぶんと だいたい おなじ いみの ぶんが あります。1・2・3・4から いちばん いい ものを ひとつ えらんで ください。", chunk(BK.iikae, e, plan.iikae))
      ];
      if (plan.youhou) p1.push(sec("用法", "つぎの ことばの つかいかたで いちばん いい ものを 1・2・3・4から ひとつ えらんで ください。", chunk(BK.youhou, e, plan.youhou)));
      num = 0;
      const p2 = [
        sec("文法形式の判断", "（　　）に 何を 入れますか。1・2・3・4から いちばん いい ものを 一つ えらんで ください。", chunk(bunpoPool, e, plan.bunpo)),
        sec("文の組み立て", "つぎの 文の ＿★＿ に 入る ものは どれですか。1・2・3・4から いちばん いい ものを 一つ えらんで ください。", chunk(starPool, e, plan.star))
      ];
      if (BK.bunsho.length) p2.push(bunsho(BK.bunsho[e % BK.bunsho.length], ++num));
      p2.push(sec("内容理解（短文）", "つぎの 文章を 読んで、しつもんに こたえて ください。こたえは、1・2・3・4から いちばん いい ものを 一つ えらんで ください。", chunk(BK.tanbun, e, plan.tanbun)));
      if (readLs.length) p2.push(chubun(readLs[e % readLs.length], plan.chubun, r, ++num));
      if (BK.joho.length) p2.push(joho(BK.joho[e % BK.joho.length], plan.joho, ++num));
      num = 0;
      const p3 = [
        sec("課題理解", "まず しつもんを 聞いて ください。それから 話を 聞いて、1から4の 中から、いちばん いい ものを 一つ えらんで ください。", chunk(BK.kadai, e, plan.kadai)),
        sec("ポイント理解", "まず しつもんを 聞いて ください。そのあと、せんたくしを 読んで ください。それから 話を 聞いて、いちばん いい ものを 一つ えらんで ください。", points),
        sec("発話表現", "絵を 見ながら しつもんを 聞いて ください。→（やじるしの 人）は 何と 言いますか。1から3の 中から、いちばん いい ものを 一つ えらんで ください。", chunk(BK.hatsuwa, e, plan.hatsuwa)),
        sec("即時応答", "絵などが ありません。まず 文を 聞いて ください。それから、その へんじを 聞いて、1から3の 中から、いちばん いい ものを 一つ えらんで ください。", chunk(BK.sokuji, e, plan.sokuji))
      ];
      exams.push({ id: `${level.toLowerCase()}-${String(e + 1).padStart(2, "0")}`, group: level, generated: true, name: `Đề ${level} số ${e + 1}`,
        parts: [{ name: "言語知識（文字・語彙）", minutes: plan.min[0], sections: p1 }, { name: "言語知識（文法）・読解", minutes: plan.min[1], sections: p2 }, { name: "聴解", minutes: plan.min[2], sections: p3 }] });
      // Đánh số lại các phần đọc hiểu theo thứ tự xuất hiện.
      p2.forEach((s, i) => (s.name = s.name.replace(/^もんだい\d+/, `もんだい${i + 1}`)));
    }
    return exams;
  }

  // Số câu theo đề JLPT hiện hành (từ 2020).
  const N5 = { yomi: 7, hyoki: 5, bunmyaku: 6, iikae: 3, youhou: 0, bunpo: 9, star: 4, tanbun: 2, chubun: 2, joho: 1, kadai: 7, point: 6, hatsuwa: 5, sokuji: 6, min: [20, 40, 30] };
  const N4 = { yomi: 7, hyoki: 5, bunmyaku: 8, iikae: 4, youhou: 4, bunpo: 13, star: 4, tanbun: 3, chubun: 3, joho: 2, kadai: 8, point: 7, hatsuwa: 5, sokuji: 8, min: [25, 55, 35] };
  window.EXAM_PLAN = { N5, N4 };
  window.EXAMS.push(...build("N5", 1, 25, 515, N5), ...build("N4", 26, 50, 424, N4));
})();
