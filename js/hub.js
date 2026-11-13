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

  // ---------- 3. Cặp tự động từ – tha động từ ----------
  const HD = () => window.HUBDATA || {};
  PAGES.jita = { group: "Từ vựng – ngữ pháp tổng hợp", title: "Cặp tự động từ – tha động từ", desc: "50 cặp N5–N4 (開く/開ける…), quy luật nhận biết, ví dụ が/を và luyện chọn.", render: renderJita };
  function renderJita(ctx) {
    const { app, esc, speakBtn, shuffle, mcq } = ctx;
    const J = HD().jita || [];
    app.innerHTML = `<h1>Cặp tự động từ – tha động từ</h1>
      <p class="sub"><b>Tự động từ</b> (自動詞) diễn tả sự việc tự xảy ra, đi với <b class="jp">が</b>: <span class="jp">ドアが 開きます</span>.
        <b>Tha động từ</b> (他動詞) có người tác động vào đối tượng, đi với <b class="jp">を</b>: <span class="jp">ドアを 開けます</span>.</p>
      <div class="card"><b>Quy luật hay gặp</b> (chỉ là xu hướng, có ngoại lệ):
        <ul><li>～aru (tự) / ～eru (tha): <span class="jp">上がる／上げる、始まる／始める、閉まる／閉める</span></li>
          <li>～eru (tự) / ～su (tha): <span class="jp">壊れる／壊す、汚れる／汚す、消える／消す</span></li>
          <li>～u (tự) / ～eru (tha): <span class="jp">開く／開ける、付く／付ける、届く／届ける</span></li>
          <li>～reru (tự) / ～ru (tha): <span class="jp">割れる／割る、折れる／折る、切れる／切る</span></li></ul>
        <b>Đi kèm thể ている / てある:</b> <span class="jp">電気が ついて います</span> (đèn đang sáng — trạng thái) · <span class="jp">電気が つけて あります</span> (đèn đã được ai đó bật sẵn).</div>
      <div class="row" style="margin:12px 0"><button class="btn primary" id="jq">✎ Luyện chọn が / を</button></div><div id="jqz"></div>
      <div class="vtable-wrap"><table class="vtable"><thead><tr><th>Tự động từ (が)</th><th>Tha động từ (を)</th><th>Ví dụ</th><th>Bài</th></tr></thead><tbody>
        ${J.map(([a, ar, b, br, av, bv, n, l]) => `<tr><td><span class="jp">${esc(a)}</span><br><small class="jp muted">${esc(ar)}</small><br><small>${esc(av)}</small></td>
          <td><span class="jp">${esc(b)}</span><br><small class="jp muted">${esc(br)}</small><br><small>${esc(bv)}</small></td>
          <td class="jp">${esc(n)}が ${esc(a)} ${speakBtn(`${n}が ${a}`)}<br>${esc(n)}を ${esc(b)} ${speakBtn(`${n}を ${b}`)}</td><td>${l}</td></tr>`).join("")}</tbody></table></div>`;
    app.querySelector("#jq").onclick = () => {
      const root = app.querySelector("#jqz"); root.innerHTML = "";
      shuffle(J).slice(0, 10).forEach(([a, , b, , av, bv, n], i) => {
        const useJi = Math.random() < 0.5;
        const q = { q: `${n}${useJi ? "が" : "を"} （　　）。`, o: [useJi ? a : b, useJi ? b : a], a: 0 };
        q.o.push(...shuffle(J.filter((x) => x[0] !== a)).slice(0, 2).map((x) => (useJi ? x[0] : x[2])));
        root.appendChild(mcq(q, i + 1, () => `${esc(n)}が ${esc(a)} (${esc(av)}) · ${esc(n)}を ${esc(b)} (${esc(bv)}). Trợ từ ${useJi ? "が → tự động từ" : "を → tha động từ"}.`));
      });
      root.scrollIntoView({ behavior: "smooth" });
    };
  }

  // ---------- 4. Phó từ ----------
  PAGES.fukushi = { group: "Từ vựng – ngữ pháp tổng hợp", title: "Phó từ thường gặp N5–N4", desc: "Tần suất, mức độ, thời gian, phỏng đoán, cách thức, từ nối — có ví dụ và luyện tập.", render: renderFukushi };
  function renderFukushi(ctx) {
    const { app, esc, speakBtn, shuffle, mcq } = ctx;
    const F = HD().fukushi || {};
    app.innerHTML = `<h1>Phó từ thường gặp</h1><p class="sub">Phó từ bổ nghĩa cho động từ, tính từ hoặc cả câu. Chú ý các phó từ <b>bắt buộc đi với phủ định</b> (あまり, ぜんぜん, めったに…).</p>
      <nav class="toc card"><div class="toc-title">Nhóm</div><ol>${Object.keys(F).map((g, i) => `<li><a href="#" data-g="${i}">${esc(g)}</a></li>`).join("")}</ol></nav>
      ${Object.entries(F).map(([g, list], i) => `<h2 id="fg-${i}">${esc(g)}</h2><div class="stack">${list.map(([w, m, ex, exv, note]) => `<div class="card">
        <div class="row"><b class="jp" style="font-size:20px">${esc(w)}</b> — ${esc(m)}</div>
        <div class="ex row" style="flex-wrap:nowrap">${speakBtn(ex)}<div><div class="jp">${esc(ex)}</div><div class="small muted">${esc(exv)}</div></div></div>
        ${note ? `<div class="small" style="margin-top:4px">💡 ${esc(note)}</div>` : ""}</div>`).join("")}</div>`).join("")}
      <h2>Luyện tập</h2><button class="btn primary" id="fq">✎ 10 câu điền phó từ</button><div id="fqz" class="stack" style="margin-top:10px"></div>`;
    app.querySelectorAll("[data-g]").forEach((a) => (a.onclick = (e) => { e.preventDefault(); app.querySelector("#fg-" + a.dataset.g).scrollIntoView({ behavior: "smooth" }); }));
    const all = Object.values(F).flat();
    app.querySelector("#fq").onclick = () => {
      const root = app.querySelector("#fqz"); root.innerHTML = "";
      // Chỉ lấy câu mà phó từ xuất hiện nguyên dạng (bỏ phần “～ない”, “/”).
      const items = all.map(([w, m, ex, exv]) => { const word = w.split(" / ")[0].replace(/～.*$/, ""); return ex.includes(word) ? { word, m, ex, exv } : null; }).filter(Boolean);
      shuffle(items).slice(0, 10).forEach((it, i) => {
        const wrong = shuffle(items.filter((x) => x.word !== it.word && !it.ex.includes(x.word))).slice(0, 3).map((x) => x.word);
        root.appendChild(mcq({ q: `${it.ex.replace(it.word, "（　　）")}　(${it.exv})`, o: [it.word, ...wrong], a: 0 }, i + 1, () => `${esc(it.word)} = ${esc(it.m)}. ${esc(it.ex)}`));
      });
    };
  }

  // ---------- 5. So sánh ngữ pháp dễ nhầm ----------
  PAGES.hikaku = { group: "Từ vựng – ngữ pháp tổng hợp", title: "So sánh ngữ pháp dễ nhầm", desc: "は/が, に/で, から/ので, ために/ように, と/ば/たら/なら, そうです… kèm mẹo phân biệt.", render: renderHikaku };
  function renderHikaku(ctx) {
    const { app, esc, speakBtn } = ctx;
    const H = HD().hikaku || [];
    app.innerHTML = `<h1>So sánh ngữ pháp dễ nhầm</h1><p class="sub">Tổng hợp các cặp mẫu câu hay bị nhầm trong đề N5–N4, gom từ nhiều bài Minna.</p>
      <nav class="toc card"><div class="toc-title">Mục lục</div><ol>${H.map(([t], i) => `<li><a href="#" data-h="${i}" class="jp">${esc(t)}</a></li>`).join("")}</ol></nav>
      ${H.map(([t, rows, tip], i) => `<section class="gbox" id="hk-${i}"><h3 class="jp">${i + 1}. ${esc(t)}</h3>
        <div class="vtable-wrap"><table class="vtable"><thead><tr><th>Mẫu</th><th>Cách dùng</th><th>Ví dụ</th></tr></thead><tbody>
        ${rows.map(([p, u, ex, exv]) => `<tr><td class="jp"><b>${esc(p)}</b></td><td>${esc(u)}</td><td><div class="row" style="flex-wrap:nowrap">${speakBtn(ex)}<div><div class="jp">${esc(ex)}</div><div class="small muted">${esc(exv)}</div></div></div></td></tr>`).join("")}
        </tbody></table></div><div class="notes"><b>Mẹo phân biệt:</b> ${esc(tip)}</div></section>`).join("")}`;
    app.querySelectorAll("[data-h]").forEach((a) => (a.onclick = (e) => { e.preventDefault(); ctx.flash(app.querySelector("#hk-" + a.dataset.h)); }));
  }

  // ---------- 6. Hội thoại tình huống + shadowing ----------
  PAGES.kaiwa = { group: "Luyện nói – nghe", title: "Hội thoại tình huống & Shadowing", desc: "12 tình huống thường gặp; nghe cả đoạn, luyện nói đuổi (shadowing) từng câu.", render: renderKaiwa };
  function renderKaiwa(ctx) {
    const { app, esc, speakBtn, TTS, store } = ctx;
    const K = HD().kaiwa || [];
    const cur = Math.min(store.get("kaiwa:i", 0), K.length - 1);
    const d = K[cur];
    const people = [...new Set(d.lines.map((l) => l[0]))];
    const voice = (p) => (people.indexOf(p) % 2 ? { gender: "M", pitch: 0.8 } : { gender: "F", pitch: 1.25 });
    app.innerHTML = `<h1>Hội thoại tình huống</h1>
      <p class="sub"><b>Shadowing</b>: nghe một câu → máy dừng → bạn nói lại y hệt (cả ngữ điệu) → câu tiếp theo. Mỗi ngày 10–15 phút giúp nghe và nói tự nhiên hơn.</p>
      <div class="row" style="margin-bottom:10px"><select id="ks">${K.map((k, i) => `<option value="${i}" ${i === cur ? "selected" : ""}>${i + 1}. ${esc(k.title)} — ${esc(k.vi)}</option>`).join("")}</select></div>
      <div class="card stack"><h3 class="jp" style="font-size:22px">${esc(d.title)} <span class="muted small">— ${esc(d.vi)}</span></h3>
        <div class="player"><button class="btn primary" id="kplay">▶ Nghe cả đoạn</button><button class="btn" id="kshadow">🗣 Shadowing</button>
          <label class="small">Thời gian nói lại <select id="kgap"><option value="1">ngắn</option><option value="1.5" selected>vừa</option><option value="2.2">dài</option></select></label>
          <label class="small"><input type="checkbox" id="khide"> Ẩn chữ Nhật</label><label class="small"><input type="checkbox" id="kvi" checked> Hiện nghĩa</label></div>
        <div class="script" id="kscript">${d.lines.map(([p, jp, vi], i) => `<div class="line" id="k-${i}"><span class="sp">${esc(p)}</span>
          <div style="flex:1"><div class="jp kj">${esc(jp)}</div><div class="vi small muted">${esc(vi)}</div></div>${speakBtn(jp)}</div>`).join("")}</div>
        <div class="notice"><b>Mẫu câu chính:</b> ${esc(d.note)}</div><div id="kstat" class="small muted"></div></div>`;
    const sc = app.querySelector("#kscript");
    app.querySelector("#ks").onchange = (e) => { store.set("kaiwa:i", +e.target.value); renderKaiwa(ctx); };
    app.querySelector("#khide").onchange = (e) => sc.querySelectorAll(".kj").forEach((x) => (x.style.visibility = e.target.checked ? "hidden" : ""));
    app.querySelector("#kvi").onchange = (e) => sc.querySelectorAll(".vi").forEach((x) => (x.hidden = !e.target.checked));
    const hl = (i) => sc.querySelectorAll(".line").forEach((x, k) => x.classList.toggle("playing", k === i));
    let stop = null, timer = null;
    const halt = () => { if (stop) stop(); stop = null; clearTimeout(timer); TTS.stop(); hl(-1); app.querySelector("#kstat").textContent = ""; };
    app.querySelector("#kplay").onclick = () => { halt(); stop = TTS.queue(d.lines.map(([p, jp]) => ({ text: jp, ...voice(p) })), hl, () => (stop = null)); };
    app.querySelector("#kshadow").onclick = () => {
      halt(); let i = 0; const gap = +app.querySelector("#kgap").value;
      const next = () => {
        if (i >= d.lines.length) { hl(-1); app.querySelector("#kstat").textContent = "✓ Xong một lượt. Thử lại với “Ẩn chữ Nhật” để luyện nghe thuần."; return; }
        const [p, jp] = d.lines[i]; hl(i); app.querySelector("#kstat").textContent = `Câu ${i + 1}/${d.lines.length}: nghe…`;
        const t0 = Date.now();
        TTS.speak(jp, { ...voice(p), onend: () => {
          // Dừng để người học nói lại: dài bằng thời lượng câu × hệ số.
          const wait = Math.max(1500, (Date.now() - t0) * gap);
          app.querySelector("#kstat").textContent = `Câu ${i + 1}/${d.lines.length}: 🗣 nói lại…`;
          timer = setTimeout(() => { i++; next(); }, wait); } });
      };
      next();
    };
    ctx.setCleanup(halt);
  }

  // ---------- 7. Luyện dịch Việt → Nhật ----------
  PAGES.honyaku = { group: "Luyện nói – nghe", title: "Luyện dịch Việt → Nhật", desc: "Đọc câu tiếng Việt, ghép các cụm từ tiếng Nhật đúng thứ tự (câu lấy từ ví dụ của bài học).", render: renderHonyaku };
  function renderHonyaku(ctx) {
    const { app, esc, shuffle, store, TTS, speakBtn } = ctx;
    const L = window.LESSONS || {};
    const ids = Object.keys(L).map(Number).sort((a, b) => a - b);
    const st = store.get("honyaku", { from: 1, to: 10 });
    app.innerHTML = `<h1>Luyện dịch Việt → Nhật</h1><p class="sub">Bấm các cụm từ theo đúng thứ tự để tạo câu tiếng Nhật. Bấm lại vào cụm đã chọn để bỏ. Câu lấy từ ví dụ từ vựng và ngữ pháp của các bài bạn chọn.</p>
      <div class="row" style="margin-bottom:12px">Từ bài <select id="hf">${ids.map((i) => `<option ${i === st.from ? "selected" : ""}>${i}</option>`).join("")}</select>
        đến bài <select id="ht">${ids.map((i) => `<option ${i === st.to ? "selected" : ""}>${i}</option>`).join("")}</select></div><div id="hz"></div>`;
    const reload = () => { st.from = +app.querySelector("#hf").value; st.to = Math.max(st.from, +app.querySelector("#ht").value); store.set("honyaku", st); renderHonyaku(ctx); };
    app.querySelector("#hf").onchange = reload; app.querySelector("#ht").onchange = reload;
    const pool = ids.filter((i) => i >= st.from && i <= st.to).flatMap((i) => [
      ...L[i].vocab.flatMap((v) => v.ex || []), ...L[i].grammar.flatMap((g) => g.usage.flatMap((u) => u.ex))]).map(([jp, vi]) => ({ jp, vi }))
      .filter((x) => { const n = x.jp.replace(/[。？！]$/, "").split(/\s+/).length; return n >= 3 && n <= 7 && !/[「」（）()／/―～…]/.test(x.jp); });
    const list = shuffle(pool).slice(0, 10);
    let i = 0, score = 0;
    const root = app.querySelector("#hz");
    const step = () => {
      if (!list.length) { root.innerHTML = `<p class="muted">Không có câu phù hợp trong phạm vi này.</p>`; return; }
      if (i >= list.length) { root.innerHTML = `<div class="card flash"><div class="score">${score}/${list.length}</div><button class="btn primary" id="hagain">Lượt mới</button></div>`; root.querySelector("#hagain").onclick = () => renderHonyaku(ctx); return; }
      const it = list[i]; const end = (it.jp.match(/[。？！]$/) || ["。"])[0];
      const chunks = it.jp.replace(/[。？！]$/, "").split(/\s+/);
      let picked = [];
      const order = shuffle(chunks.map((c, k) => k));
      root.innerHTML = `<div class="progress"><i style="width:${(i / list.length) * 100}%"></i></div><div class="card flash">
        <div class="small muted">Câu ${i + 1}/${list.length} · điểm ${score}</div><div style="font-size:20px;margin:6px 0 12px">${esc(it.vi)}</div>
        <div class="answer jp" id="hans"></div><div class="chips" id="hch">${order.map((k) => `<button class="chip jp" data-k="${k}">${esc(chunks[k])}</button>`).join("")}</div>
        <div class="row" style="justify-content:center;margin-top:10px"><button class="btn primary" id="hok">Kiểm tra</button><button class="btn" id="hskip">Xem đáp án</button></div><div id="hres"></div></div>`;
      const draw = () => { root.querySelector("#hans").innerHTML = picked.map((k) => `<button class="chip jp on" data-k="${k}">${esc(chunks[k])}</button>`).join("") + (picked.length ? `<span class="jp">${end}</span>` : `<span class="muted small">Chọn cụm từ bên dưới…</span>`);
        root.querySelectorAll("#hch .chip").forEach((b) => (b.disabled = picked.includes(+b.dataset.k))); };
      draw();
      root.querySelector(".card").onclick = (e) => { const b = e.target.closest(".chip"); if (!b || b.disabled) return; const k = +b.dataset.k;
        picked = b.classList.contains("on") ? picked.filter((x) => x !== k) : [...picked, k]; draw(); };
      const done = (ok, shown) => { if (ok) score++;
        root.querySelector("#hres").innerHTML = `<p class="${ok ? "result-ok" : "result-bad"}">${ok ? "✓ Chính xác" : shown ? "Đáp án:" : "✗ Chưa đúng — đáp án:"}</p>
          <div class="row" style="justify-content:center"><span class="jp" style="font-size:20px">${esc(it.jp)}</span>${speakBtn(it.jp)}</div>
          ${!ok && !shown ? `<p class="small muted">Một số câu có thể đổi vị trí cụm thời gian/chủ đề mà vẫn đúng; web chỉ so với câu mẫu.</p>` : ""}<button class="btn primary" id="hnext">Tiếp →</button>`;
        root.querySelector("#hok").disabled = true; root.querySelector("#hskip").disabled = true; TTS.stop(); TTS.speak(it.jp);
        root.querySelector("#hnext").onclick = () => { i++; step(); }; };
      root.querySelector("#hok").onclick = () => { const got = picked.map((k) => chunks[k]).join(" "); done(got === chunks.join(" ") && picked.length === chunks.length, false); };
      root.querySelector("#hskip").onclick = () => done(false, true);
    };
    step();
  }

  // ---------- 8. Từ vựng theo chủ đề / cấp độ ----------
  // Chủ đề gán tự động theo từ khóa trong nghĩa tiếng Việt (gần đúng); từ không khớp xếp vào "Khác".
  // So khớp nguyên từ (không khớp "xe" trong "xem", "mỹ" trong "mỹ thuật").
  const kw = (list) => new RegExp(`(?<!\\p{L})(?:${list.join("|")})(?!\\p{L})`, "iu");
  const TOPICS = [
    ["Chào hỏi – giao tiếp", null],
    ["Quốc gia – ngôn ngữ", kw(["tiếng [\\p{L} ]+", "nước \\)", "\\(nước", "việt nam", "nhật bản", "trung quốc", "hàn quốc", "mỹ(?! thuật)", "mexico", "anh \\(nước\\)", "pháp", "đức", "ý \\(nước\\)", "thái lan", "ấn độ", "indonesia", "brazil", "thụy sĩ", "bắc kinh", "bangkok", "london", "los angeles", "người nước ngoài", "quốc tịch", "đất nước"])],
    ["Gia đình – con người", kw(["bố", "mẹ", "cha", "anh trai", "chị", "chị gái", "em trai", "em gái", "ông", "bà", "vợ", "chồng", "con", "con cái", "gia đình", "họ hàng", "cháu", "chú", "dì", "bạn", "bạn bè", "người lớn", "trẻ em", "đàn ông", "phụ nữ", "em bé", "anh chị em"])],
    ["Thời gian", kw(["giờ", "phút", "giây", "ngày", "tháng", "năm", "tuần", "buổi", "sáng", "trưa", "chiều", "tối", "đêm", "hôm nay", "hôm qua", "hôm kia", "ngày mai", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy", "chủ nhật", "mùa", "lúc", "sớm", "muộn", "hiện tại", "tương lai", "quá khứ", "rưỡi"])],
    ["Ăn uống", kw(["ăn", "uống", "cơm", "bánh", "bánh mì", "thịt", "cá", "rau", "hoa quả", "quả", "trà", "cà phê", "rượu", "bia", "sữa", "món", "nấu", "đũa", "đĩa", "bát", "cốc", "trứng", "táo", "cam", "đồ ăn", "thức ăn", "gia vị", "muối", "ngọt", "cay", "đắng", "nước ép", "sô-cô-la", "nhà hàng", "nước", "thìa", "dao", "dĩa", "nĩa"])],
    ["Nơi chốn – giao thông", kw(["ga", "nhà ga", "tàu", "tàu điện", "xe", "xe buýt", "xe ô tô", "ô tô", "đường", "sân bay", "bến", "cầu", "ngã tư", "thành phố", "thị trấn", "làng", "công viên", "bệnh viện", "trường", "trường học", "ngân hàng", "bưu điện", "cửa hàng", "siêu thị", "khách sạn", "thư viện", "phòng", "phòng học", "tòa nhà", "bãi", "quầy", "lối", "tầng", "nhà", "nhà vệ sinh", "bảo tàng", "cầu thang", "thang máy", "thang cuốn", "taxi", "máy bay", "thuyền", "cửa", "đền", "chùa", "sân", "bể bơi", "tầng hầm", "vườn", "sảnh", "đại sảnh", "thành", "địa danh"])],
    ["Học tập – công việc", kw(["học", "giáo viên", "thầy", "sinh viên", "học sinh", "bài", "thi", "kỳ thi", "công ty", "làm việc", "công việc", "họp", "cuộc họp", "nhân viên", "giám đốc", "trưởng phòng", "sách", "vở", "bút", "từ điển", "lớp", "báo cáo", "tài liệu", "nghề", "lương", "kỹ sư", "nhà nghiên cứu", "nghiên cứu", "giáo sư", "chuyên môn", "văn phòng", "hội nghị", "giấy tờ", "y tá", "danh thiếp"])],
    ["Thiên nhiên – thời tiết", kw(["trời", "mưa", "tuyết", "gió", "nắng", "núi", "sông", "biển", "hoa", "cây", "mây", "nóng", "lạnh", "ấm", "mát", "thời tiết", "động vật", "chó", "mèo", "chim", "khỉ", "bão", "động đất", "ngựa", "hồ"])],
    ["Cơ thể – sức khỏe", kw(["đầu", "mắt", "tai", "mũi", "miệng", "tay", "chân", "răng", "bụng", "lưng", "họng", "bệnh", "ốm", "đau", "thuốc", "sốt", "bị cảm", "cảm cúm", "khỏe", "bác sĩ", "bị thương", "cơ thể", "tóc"])],
    ["Mua sắm – đồ dùng", kw(["áo", "áo len", "quần", "giày", "mũ", "túi", "ô", "dù", "đồng hồ", "tiền", "giá", "mua", "bán", "rẻ", "đắt", "máy", "máy tính", "điện thoại", "ti vi", "tivi", "ảnh", "chìa khóa", "kính", "cặp", "ví", "đồ dùng", "bàn", "ghế", "giường", "tạp chí", "thẻ", "radio", "đài radio", "cà vạt", "quà", "báo", "thư", "tem", "bưu thiếp", "vé", "xe đạp", "tủ", "hộp", "giấy", "kéo", "chăn"])],
    ["Sở thích – giải trí", kw(["phim", "nhạc", "âm nhạc", "thể thao", "bơi", "bóng đá", "bóng chày", "du lịch", "chơi", "hát", "tranh", "trò chơi", "sở thích", "lễ hội", "tiệc", "câu cá", "leo núi", "đàn", "vẽ", "nhảy", "mỹ thuật", "sinh nhật", "video", "băng"])]
  ];
  const topicOf = (v) => {
    if (/cụm chào|thán từ/.test(v.t) || (/^cụm/.test(v.t) && /(chào|cảm ơn|xin lỗi|xin|mời|tạm biệt|rất vui|vâng)/i.test(v.vi))) return TOPICS[0][0];
    const hit = TOPICS.slice(1).find(([, re]) => re.test(v.vi));
    if (hit) return hit[0];
    // Không khớp chủ đề nào: xếp theo loại từ để vẫn dễ học theo nhóm.
    const k = kindOf(v.t);
    return k === "Động từ" ? "Hành động thường ngày" : k === "Tính từ" ? "Tính chất – cảm xúc" : /phó từ|liên từ|từ để hỏi|trợ từ|đại từ|chỉ định|hậu tố|tiền tố|số từ/.test(v.t) ? "Từ chức năng – từ để hỏi" : "Khác";
  };
  const kindOf = (t) => /^danh từ|đại từ|số từ/.test(t) ? "Danh từ" : /động từ/.test(t) ? "Động từ" : /^tính từ/.test(t) ? "Tính từ" : /phó từ/.test(t) ? "Phó từ" : /^cụm/.test(t) ? "Cụm từ" : "Khác";
  PAGES.chude = { group: "Từ vựng – ngữ pháp tổng hợp", title: "Từ vựng theo chủ đề & cấp độ", desc: "Toàn bộ 1.970 từ của 50 bài, lọc theo cấp N5/N4, chủ đề, loại từ.", render: renderChude };
  function renderChude(ctx) {
    const { app, esc, speakBtn, store } = ctx;
    const st = store.get("chude", { lv: "", tp: "", kd: "", q: "" });
    const all = Object.values(window.LESSONS || {}).flatMap((L) => L.vocab.map((v) => ({ ...v, id: L.id, lv: L.id <= 25 ? "N5" : "N4", tp: topicOf(v), kd: kindOf(v.t) })));
    const names = [...TOPICS.map((t) => t[0]), "Hành động thường ngày", "Tính chất – cảm xúc", "Từ chức năng – từ để hỏi", "Khác"];
    app.innerHTML = `<h1>Từ vựng theo chủ đề & cấp độ</h1>
      <p class="sub">Cấp độ theo giáo trình: bài 1–25 ≈ <b>N5</b>, bài 26–50 ≈ <b>N4</b> (JLPT không công bố danh sách từ chính thức nên đây là mức tương đối). Chủ đề được xếp tự động theo nghĩa, có thể chưa chuẩn với một số từ.</p>
      <div class="row" style="margin-bottom:10px">
        <select id="clv"><option value="">N5 + N4</option><option value="N5" ${st.lv === "N5" ? "selected" : ""}>N5 (bài 1–25)</option><option value="N4" ${st.lv === "N4" ? "selected" : ""}>N4 (bài 26–50)</option></select>
        <select id="ctp"><option value="">Mọi chủ đề</option>${names.map((n) => `<option ${st.tp === n ? "selected" : ""}>${esc(n)}</option>`).join("")}</select>
        <select id="ckd"><option value="">Mọi loại từ</option>${["Danh từ", "Động từ", "Tính từ", "Phó từ", "Cụm từ", "Khác"].map((n) => `<option ${st.kd === n ? "selected" : ""}>${n}</option>`).join("")}</select>
        <input id="cq" type="search" placeholder="Tìm (kana, kanji, nghĩa)" value="${esc(st.q)}" style="flex:1;min-width:160px"></div>
      <p class="small muted" id="ccount"></p>
      <div class="vtable-wrap"><table class="vtable"><thead><tr><th>Từ</th><th>Cách đọc</th><th>Nghĩa</th><th>Loại</th><th>Bài</th><th></th></tr></thead><tbody id="cbody"></tbody></table></div>`;
    const draw = () => {
      st.lv = app.querySelector("#clv").value; st.tp = app.querySelector("#ctp").value; st.kd = app.querySelector("#ckd").value; st.q = app.querySelector("#cq").value.trim();
      store.set("chude", st);
      const q = st.q.toLowerCase();
      const list = all.filter((v) => (!st.lv || v.lv === st.lv) && (!st.tp || v.tp === st.tp) && (!st.kd || v.kd === st.kd) && (!q || v.w.includes(q) || v.r.includes(q) || v.vi.toLowerCase().includes(q)));
      app.querySelector("#ccount").textContent = `${list.length} từ`;
      app.querySelector("#cbody").innerHTML = list.slice(0, 400).map((v) => `<tr><td class="jp">${esc(v.w)}</td><td class="jp">${esc(v.r)}</td><td>${esc(v.vi)}</td><td class="small">${esc(v.t)}</td>
        <td><a href="#/l/${v.id}/vocab">${v.id}</a></td><td>${speakBtn(v.r)}</td></tr>`).join("") + (list.length > 400 ? `<tr><td colspan="6" class="muted small">… còn ${list.length - 400} từ — lọc thêm để xem.</td></tr>` : "");
    };
    ["#clv", "#ctp", "#ckd"].forEach((s) => (app.querySelector(s).onchange = draw));
    app.querySelector("#cq").oninput = draw;
    draw();
  }
  Hub.topicOf = topicOf;

  // ---------- 9. Tài liệu chính thức miễn phí (chỉ dẫn link về trang gốc) ----------
  const FREE = [
    ["いろどり 生活の日本語 (Irodori)", "https://www.irodori.jpf.go.jp/", "Giáo trình hội thoại sinh hoạt miễn phí của Japan Foundation, có file nghe giọng thật (trình độ A1–A2, tương đương N5–N4)."],
    ["NHK WORLD-JAPAN – Easy Japanese (tiếng Việt)", "https://www.nhk.or.jp/lesson/vi/", "48 bài hội thoại ngắn có giọng thật, giải thích bằng tiếng Việt."],
    ["Marugoto Plus", "https://marugotoweb.jp/", "Video, hội thoại theo chủ đề của Japan Foundation."],
    ["Erin's Challenge (エリンが挑戦！)", "https://www.erin.jpf.go.jp/", "Video tình huống đời sống học đường, có phụ đề."],
    ["JLPT – Đề mẫu chính thức", "https://www.jlpt.jp/e/samples/forlearners.html", "Đề mẫu và file nghe chính thức N1–N5 do ban tổ chức công bố."]
  ];
  PAGES.free = { group: "Luyện nói – nghe", title: "Tài liệu chính thức miễn phí", desc: "Giọng người Nhật thật: Irodori, NHK, Marugoto, Erin, đề mẫu JLPT — dẫn về trang gốc.", render: ({ app, esc }) => {
    app.innerHTML = `<h1>Tài liệu chính thức miễn phí</h1><p class="sub">Các nguồn dưới đây do tổ chức chính thức phát hành miễn phí, có <b>giọng người Nhật thật</b>. Web chỉ dẫn link về trang gốc (không sao chép nội dung) để đúng điều khoản sử dụng của họ.</p>
      <div class="stack">${FREE.map(([n, u, d]) => `<a class="card exam-tile" href="${u}" target="_blank" rel="noopener"><b>${esc(n)}</b><span class="small">${esc(d)}</span><span class="small muted">${esc(u)}</span></a>`).join("")}</div>
      <p class="small muted" style="margin-top:12px">Gợi ý: học xong bài N trên web → nghe bài hội thoại cùng chủ đề trên Irodori/NHK → luyện shadowing ở mục “Hội thoại tình huống”.</p>`;
  } };
})();
