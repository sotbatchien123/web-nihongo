// Trang "Kiến thức nền" (#/k/...): các chuyên đề dùng chung cho mọi bài.
// app.js gọi Hub.render(page, ctx); ctx cung cấp các hàm dùng chung (esc, speakBtn, mcq, ...).
(function () {
  "use strict";
  const PAGES = {};
  const Hub = { PAGES, render, radInfo };
  window.Hub = Hub;

  // ---------- Tiện ích bộ thủ ----------
  let radIndex = null;
  const EXTRA_ALIAS = { "氷": 85, "⻌": 162, "⻖": 170, "⻏": 163 };
  function radIndexBuild() {
    if (radIndex) return radIndex;
    radIndex = {};
    (window.RADICALS || []).forEach((r) => { radIndex[r[1]] = r; r[5].split(" ").filter(Boolean).forEach((v) => (radIndex[v] = radIndex[v] || r)); });
    Object.entries(EXTRA_ALIAS).forEach(([c, n]) => (radIndex[c] = window.RADICALS[n - 1]));
    return radIndex;
  }
  // Trả về {r: [số, bộ, nét, tên, nghĩa, biến thể], form, parts} cho một Hán tự, hoặc null.
  function radInfo(ch) {
    const p = window.KPARTS && KPARTS[ch]; if (!p) return null;
    const idx = radIndexBuild();
    const r = idx[p.rad] || idx[p.radForm] || null;
    const parts = [...new Set(p.parts.filter((x) => x && !/CDP/.test(x)))];
    return { r, form: p.radForm, parts };
  }
  function partName(c) { const r = radIndexBuild()[c]; return r ? `${c} (${r[3]})` : c; }
  Hub.partName = partName;

  // ---------- Trang mục lục ----------
  function render(page, ctx) {
    const p = PAGES[page];
    if (!p) return renderIndex(ctx);
    p.render(ctx);
  }
  function renderIndex(ctx) {
    const { app, esc } = ctx;
    const groups = {};
    Object.entries(PAGES).forEach(([k, p]) => (groups[p.group] = groups[p.group] || []).push([k, p]));
    app.innerHTML = `<h1>Kiến thức nền</h1>
      <p class="sub">Các chuyên đề dùng chung cho mọi bài: chữ cái, bộ thủ, tổng hợp ngữ pháp – từ vựng và luyện nói. Nội dung tự biên soạn.</p>
      ${Object.entries(groups).map(([g, list]) => `<h2>${esc(g)}</h2><div class="exam-grid">${list.map(([k, p]) =>
        `<a class="exam-tile card" href="#/k/${k}"><b>${esc(p.title)}</b><span class="small muted">${esc(p.desc)}</span></a>`).join("")}</div>`).join("")}`;
  }

  // ---------- 1. Bảng chữ cái ----------
  const ROWS = [
    ["Hàng あ", "あいうえお", "a i u e o"], ["Hàng か", "かきくけこ", "ka ki ku ke ko"], ["Hàng さ", "さしすせそ", "sa shi su se so"],
    ["Hàng た", "たちつてと", "ta chi tsu te to"], ["Hàng な", "なにぬねの", "na ni nu ne no"], ["Hàng は", "はひふへほ", "ha hi fu he ho"],
    ["Hàng ま", "まみむめも", "ma mi mu me mo"], ["Hàng や", "や・ゆ・よ", "ya - yu - yo"], ["Hàng ら", "らりるれろ", "ra ri ru re ro"],
    ["Hàng わ", "わ・・・を", "wa - - - wo"], ["ん", "ん・・・・", "n - - - -"]
  ];
  const DAKU = [["が", "がぎぐげご", "ga gi gu ge go"], ["ざ", "ざじずぜぞ", "za ji zu ze zo"], ["だ", "だぢづでど", "da ji zu de do"],
    ["ば", "ばびぶべぼ", "ba bi bu be bo"], ["ぱ", "ぱぴぷぺぽ", "pa pi pu pe po"]];
  const YOON = [["き", "きゃきゅきょ", "kya kyu kyo"], ["し", "しゃしゅしょ", "sha shu sho"], ["ち", "ちゃちゅちょ", "cha chu cho"],
    ["に", "にゃにゅにょ", "nya nyu nyo"], ["ひ", "ひゃひゅひょ", "hya hyu hyo"], ["み", "みゃみゅみょ", "mya myu myo"],
    ["り", "りゃりゅりょ", "rya ryu ryo"], ["ぎ", "ぎゃぎゅぎょ", "gya gyu gyo"], ["じ", "じゃじゅじょ", "ja ju jo"],
    ["び", "びゃびゅびょ", "bya byu byo"], ["ぴ", "ぴゃぴゅぴょ", "pya pyu pyo"]];
  const EXT = [["ファ", "fa"], ["フィ", "fi"], ["フェ", "fe"], ["フォ", "fo"], ["ティ", "ti"], ["ディ", "di"], ["トゥ", "tu"], ["ドゥ", "du"],
    ["ウィ", "wi"], ["ウェ", "we"], ["ウォ", "wo"], ["シェ", "she"], ["ジェ", "je"], ["チェ", "che"], ["ヴァ", "va"], ["ヴィ", "vi"], ["ヴ", "vu"]];
  const CONFUSE = [["さ", "ち", "Ngược chiều nhau: さ mở sang phải, ち mở sang trái (như số 5)."], ["ぬ", "め", "ぬ có vòng xoắn ở cuối, め thì không."],
    ["ね", "れ", "ね cuộn tròn ở cuối, れ hất ra ngoài."], ["る", "ろ", "る có vòng tròn nhỏ ở đuôi, ろ thì không."], ["わ", "れ", "わ cong tròn về bên phải, れ hất lên."],
    ["は", "ほ", "ほ có thêm một nét ngang ở trên."], ["シ", "ツ", "シ: các nét chấm nằm ngang, nét dài vẩy từ dưới lên; ツ: chấm đứng, nét dài kéo từ trên xuống."],
    ["ソ", "ン", "ソ: chấm đứng, nét dài từ trên xuống; ン: chấm nằm, nét dài vẩy từ dưới lên."], ["ク", "ケ", "ケ có nét ngang chìa ra ngoài."],
    ["ウ", "ワ", "ウ có chấm trên đầu, ワ không có."], ["ノ", "メ", "メ có thêm một nét cắt chéo."], ["コ", "ユ", "コ hở bên trái, ユ hở bên trên và có đáy dài."]];
  const cellsOf = (kana, ro) => { const k = kana.match(/[ぁ-ゟ][ゃゅょ]?|・/g) || []; const r = ro.split(" "); return k.map((c, i) => [c, r[i]]); };
  const allBasic = () => [...ROWS, ...DAKU, ...YOON].flatMap(([, k, r]) => cellsOf(k, r)).filter(([c]) => c !== "・");

  PAGES.kana = { group: "Nhập môn", title: "Bảng chữ cái Hiragana – Katakana", desc: "Bài 0: 46 chữ cơ bản, âm đục, âm ghép, âm ngắt, trường âm; luyện nhận mặt chữ.", render: renderKana };
  function renderKana(ctx) {
    const { app, esc, speakBtn, store } = ctx;
    const kata = store.get("kana:kata", false);
    const conv = (s) => (kata ? Kana.hiraToKata(s) : s);
    const table = (rows, cols) => `<div class="kana-table" style="--cols:${cols}">${rows.map(([label, k, r]) =>
      `<div class="kana-row"><span class="kana-label">${esc(label)}</span>${cellsOf(k, r).map(([c, ro]) => c === "・" ? `<span class="kana-cell empty"></span>`
        : `<button class="kana-cell" data-say="${esc(c)}"><b class="jp">${esc(conv(c))}</b><small>${esc(ro)}</small></button>`).join("")}</div>`).join("")}</div>`;
    app.innerHTML = `<h1>Bài 0 · Bảng chữ cái</h1>
      <p class="sub">Tiếng Nhật dùng 3 loại chữ: <b>Hiragana</b> (chữ mềm, viết từ thuần Nhật và đuôi ngữ pháp), <b>Katakana</b> (chữ cứng, viết từ ngoại lai, tên nước ngoài) và <b>Kanji</b> (Hán tự). Bấm vào ô để nghe.</p>
      <div class="row" style="margin-bottom:12px"><div class="seg" id="kmode"><button data-k="0" class="${kata ? "" : "on"}">Hiragana</button><button data-k="1" class="${kata ? "on" : ""}">Katakana</button></div>
        <a class="btn" href="#/k/kana-quiz">✎ Luyện nhận mặt chữ</a></div>
      <h2>1. 46 chữ cơ bản (清音)</h2>${table(ROWS, 5)}
      <h2>2. Âm đục (濁音) và bán đục (半濁音)</h2>
      <p>Thêm dấu <b class="jp">゛</b> (tenten) để làm âm đục: k→g, s→z, t→d, h→b. Thêm dấu <b class="jp">゜</b> (maru) vào hàng は để thành p.
        <span class="jp">じ／ぢ</span> đều đọc “ji”, <span class="jp">ず／づ</span> đều đọc “zu”; thường dùng <span class="jp">じ・ず</span>.</p>${table(DAKU, 5)}
      <h2>3. Âm ghép (拗音)</h2>
      <p>Chữ cột い (き, し, ち…) + <b class="jp">ゃ・ゅ・ょ</b> viết nhỏ → ghép thành một âm tiết: <span class="jp">き＋ゃ＝きゃ</span> (kya). Chữ nhỏ chiếm nửa ô, đọc liền một nhịp.</p>${table(YOON, 3)}
      <h2>4. Âm ngắt (促音) <span class="jp">っ／ッ</span></h2>
      <p><span class="jp">っ</span> viết nhỏ không đọc thành tiếng: ngừng một nhịp rồi bật mạnh phụ âm sau. Khi gõ romaji, gấp đôi phụ âm: <span class="jp">きって</span> = kitte (tem), khác <span class="jp">きて</span> = kite (đến).
        ${speakBtn("きって")} ${speakBtn("きて")}</p>
      <h2>5. Trường âm (長音)</h2>
      <ul><li>Hiragana kéo dài nguyên âm bằng cách thêm chữ: a→あ (<span class="jp">おかあさん</span>), i→い (<span class="jp">おにいさん</span>), u→う (<span class="jp">くうき</span>), e→い/え (<span class="jp">せんせい, おねえさん</span>), o→う/お (<span class="jp">おとうさん, おおきい</span>).</li>
        <li>Katakana dùng dấu gạch <b class="jp">ー</b>: <span class="jp">コーヒー, ノート</span>.</li>
        <li>Kéo dài hay không làm đổi nghĩa: <span class="jp">おばさん</span> (cô, dì) ≠ <span class="jp">おばあさん</span> (bà). ${speakBtn("おばさん")} ${speakBtn("おばあさん")}</li></ul>
      <h2>6. Chữ đặc biệt</h2>
      <ul><li><span class="jp">は</span> làm trợ từ đọc là <b>wa</b>: <span class="jp">わたしは</span>. <span class="jp">へ</span> làm trợ từ đọc là <b>e</b>. <span class="jp">を</span> chỉ dùng làm trợ từ, đọc là <b>o</b>.</li>
        <li><span class="jp">ん</span> đọc thành m/n/ng tùy âm phía sau: <span class="jp">さんぽ</span> (sampo), <span class="jp">おんな</span> (onna), <span class="jp">りんご</span> (ringo).</li></ul>
      <h2>7. Âm mở rộng trong Katakana</h2>
      <p>Dùng để ghi âm tiếng nước ngoài mà tiếng Nhật vốn không có.</p>
      <div class="kana-table" style="--cols:6"><div class="kana-row wrap">${EXT.map(([c, r]) => `<button class="kana-cell" data-say="${c}"><b class="jp">${c}</b><small>${r}</small></button>`).join("")}</div></div>
      <h2>8. Cặp chữ dễ nhầm</h2>
      <div class="stack">${CONFUSE.map(([a, b, t]) => `<div class="card row" style="flex-wrap:nowrap"><span class="jp" style="font-size:32px;min-width:90px">${a}　${b}</span><span>${esc(t)}</span></div>`).join("")}</div>
      <p class="small muted" style="margin-top:12px">Sau khi thuộc bảng chữ, chuyển sang <a href="#/l/1/vocab">Bài 1</a>. Cách gõ: dùng bộ gõ tiếng Nhật của máy, hoặc gõ romaji trực tiếp trong phần Luyện tập (web tự chuyển sang kana).</p>`;
    app.querySelector("#kmode").onclick = (e) => { const b = e.target.closest("button"); if (b) { store.set("kana:kata", b.dataset.k === "1"); renderKana(ctx); } };
  }

  // Luyện nhận mặt chữ: hiện kana, chọn cách đọc (4 phương án) hoặc ngược lại.
  PAGES["kana-quiz"] = { group: "Nhập môn", title: "Luyện nhận mặt chữ", desc: "Trắc nghiệm kana ↔ romaji, chọn phạm vi và bảng chữ.", render: renderKanaQuiz };
  function renderKanaQuiz(ctx) {
    const { app, esc, shuffle, store, TTS } = ctx;
    const st = store.get("kana:quiz", { set: "basic", script: "hira", dir: "k2r" });
    const pool = () => {
      let cells = st.set === "basic" ? ROWS.flatMap(([, k, r]) => cellsOf(k, r)) : st.set === "daku" ? DAKU.flatMap(([, k, r]) => cellsOf(k, r)) : st.set === "yoon" ? YOON.flatMap(([, k, r]) => cellsOf(k, r)) : allBasic();
      cells = cells.filter(([c]) => c !== "・");
      const toS = (c) => st.script === "kata" ? Kana.hiraToKata(c) : st.script === "mix" ? (Math.random() < 0.5 ? c : Kana.hiraToKata(c)) : c;
      return cells.map(([c, r]) => [toS(c), r]);
    };
    const opt = (name, val, label) => `<button data-o="${name}" data-v="${val}" class="${st[name] === val ? "on" : ""}">${label}</button>`;
    app.innerHTML = `<h1>Luyện nhận mặt chữ</h1><p class="sub"><a href="#/k/kana">← Bảng chữ cái</a></p>
      <div class="row" style="margin-bottom:8px"><div class="seg">${opt("set", "basic", "46 chữ cơ bản")}${opt("set", "daku", "Âm đục")}${opt("set", "yoon", "Âm ghép")}${opt("set", "all", "Tất cả")}</div></div>
      <div class="row" style="margin-bottom:8px"><div class="seg">${opt("script", "hira", "Hiragana")}${opt("script", "kata", "Katakana")}${opt("script", "mix", "Trộn")}</div>
        <div class="seg">${opt("dir", "k2r", "Chữ → cách đọc")}${opt("dir", "r2k", "Cách đọc → chữ")}</div></div>
      <div id="kq"></div>`;
    app.querySelectorAll("[data-o]").forEach((b) => (b.onclick = () => { st[b.dataset.o] = b.dataset.v; store.set("kana:quiz", st); renderKanaQuiz(ctx); }));
    const list = shuffle(pool()).slice(0, 20);
    let i = 0, score = 0;
    const root = app.querySelector("#kq");
    const step = () => {
      if (i >= list.length) { root.innerHTML = `<div class="card flash"><div class="score">${score}/${list.length}</div><button class="btn primary" id="again">Làm lượt mới</button></div>`;
        root.querySelector("#again").onclick = () => renderKanaQuiz(ctx); return; }
      const [c, r] = list[i]; const all = pool();
      const k2r = st.dir === "k2r";
      const right = k2r ? r : c;
      const wrong = shuffle([...new Set(all.map(([x, y]) => (k2r ? y : x)).filter((x) => x !== right))]).slice(0, 3);
      const opts = shuffle([right, ...wrong]);
      root.innerHTML = `<div class="progress"><i style="width:${(i / list.length) * 100}%"></i></div>
        <div class="card flash"><div class="small muted">Câu ${i + 1}/${list.length} · điểm ${score}</div>
        <div class="big ${k2r ? "jp" : ""}">${esc(k2r ? c : r)}</div>
        <div class="opts">${opts.map((o) => `<button class="opt ${k2r ? "" : "jp"}" data-a="${esc(o)}">${esc(o)}</button>`).join("")}</div><div id="kr"></div></div>`;
      root.querySelectorAll(".opt").forEach((b) => (b.onclick = () => {
        const ok = b.dataset.a === right; if (ok) score++;
        root.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (x.dataset.a === right) x.classList.add("ok"); });
        if (!ok) b.classList.add("bad");
        TTS.stop(); TTS.speak(Kana.kataToHira(c));
        root.querySelector("#kr").innerHTML = `<p class="${ok ? "result-ok" : "result-bad"}">${ok ? "✓ Đúng" : `✗ ${esc(c)} đọc là ${esc(r)}`}</p><button class="btn primary" id="nx">Tiếp →</button>`;
        root.querySelector("#nx").onclick = () => { i++; step(); };
      }));
    };
    step();
  }

  // ---------- 2. 214 bộ thủ ----------
  PAGES.radicals = { group: "Hán tự", title: "214 bộ thủ", desc: "Tên Hán Việt, nghĩa, biến thể và các Hán tự trên web thuộc từng bộ.", render: renderRadicals };
  function renderRadicals(ctx) {
    const { app, esc, openModal } = ctx;
    const R = window.RADICALS || [];
    // Hán tự trên web theo bộ thủ.
    const byRad = {};
    Object.values(window.LESSONS || {}).forEach((L) => L.kanji.forEach((k) => { const ri = radInfo(k.c); if (ri && ri.r) (byRad[ri.r[0]] = byRad[ri.r[0]] || []).push([k, L.id]); }));
    const strokes = [...new Set(R.map((r) => r[2]))];
    app.innerHTML = `<h1>214 bộ thủ</h1>
      <p class="sub">Bộ thủ là thành phần dùng để phân loại và tra Hán tự. Nhớ bộ thủ giúp đoán nghĩa chữ mới: chữ có bộ <span class="jp">氵</span> thường liên quan đến nước, bộ <span class="jp">言</span> liên quan đến lời nói…</p>
      <div class="row" style="margin-bottom:10px"><input id="rq" type="search" placeholder="Tìm theo tên (vd: thủy, tay) hoặc chữ" style="flex:1;min-width:200px">
        <select id="rs"><option value="">Mọi số nét</option>${strokes.map((s) => `<option value="${s}">${s} nét</option>`).join("")}</select>
        <label class="small"><input type="checkbox" id="rw"> Chỉ bộ có Hán tự trên web</label></div>
      <div class="rad-grid" id="rg"></div>`;
    const draw = () => {
      const q = app.querySelector("#rq").value.trim().toLowerCase(), s = +app.querySelector("#rs").value, w = app.querySelector("#rw").checked;
      app.querySelector("#rg").innerHTML = R.filter((r) => (!s || r[2] === s) && (!w || byRad[r[0]]) &&
        (!q || r[3].toLowerCase().includes(q) || r[4].toLowerCase().includes(q) || r[1] === q || r[5].includes(q)))
        .map((r) => `<button class="rad-tile" data-r="${r[0]}"><span class="n">${r[0]}</span><b class="jp">${r[1]}</b>${r[5] ? `<small class="jp">${esc(r[5])}</small>` : ""}
          <span class="nm">${esc(r[3])}</span>${byRad[r[0]] ? `<span class="cnt">${byRad[r[0]].length}</span>` : ""}</button>`).join("") || `<p class="muted">Không tìm thấy.</p>`;
    };
    ["input", "change"].forEach((ev) => app.querySelector(".row").addEventListener(ev, draw));
    draw();
    app.querySelector("#rg").onclick = (e) => {
      const b = e.target.closest("[data-r]"); if (!b) return;
      const r = R[+b.dataset.r - 1]; const ks = byRad[r[0]] || [];
      openModal(`<div class="row"><span class="jp" style="font-size:56px">${r[1]}</span><div><b>Bộ ${esc(r[3])}</b> (số ${r[0]}, ${r[2]} nét)<br>Nghĩa: ${esc(r[4])}${r[5] ? `<br>Biến thể: <span class="jp">${esc(r[5])}</span>` : ""}</div></div>
        <h3 style="margin-top:12px">Hán tự trên web thuộc bộ này (${ks.length})</h3>
        ${ks.length ? `<div class="kgrid">${ks.map(([k, id]) => `<a class="ktile" href="#/l/${id}/kanji?k=${encodeURIComponent(k.c)}" onclick="document.getElementById('modal').hidden=true"><div class="c">${k.c}</div><div class="hv">${esc(k.hv)} · B${id}</div></a>`).join("")}</div>`
          : `<p class="muted small">Chưa có chữ nào trong 400 Hán tự của web thuộc bộ này.</p>`}`);
    };
  }
})();
