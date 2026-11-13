// Ứng dụng một trang: định tuyến bằng hash, dữ liệu lấy từ window.LESSONS / window.EXAMS.
(function () {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const app = $("#app");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const TABS = [["vocab", "1 · Từ vựng & Ngữ pháp"], ["read", "2 · Bài đọc"], ["listen", "3 · Bài nghe"], ["kanji", "4 · Hán tự"], ["practice", "5 · Luyện tập"]];

  // ---------- Lưu trạng thái (chỉ là tiện ích, trang vẫn chạy khi bị chặn storage) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem("n50:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("n50:" + k, JSON.stringify(v)); } catch (e) { /* storage bị chặn: bỏ qua lưu */ } }
  };

  // ---------- Đọc to bằng Web Speech API ----------
  const FEMALE = /Nanami|Kyoko|Haruka|Ayumi|Sayaka|Mizuki|Aoi|Shiori|Mayu|Female/i;
  const MALE = /Ichiro|Keita|Otoya|Takumi|Daichi|Naoki|Hattori|Male/i;
  const TTS = {
    voice: null, female: null, male: null, rate: store.get("rate", 0.9), ok: "speechSynthesis" in window,
    // status: "checking" → "ok" (có giọng ja) / "none" (không có giọng ja) / "unsupported"
    status: "speechSynthesis" in window ? "checking" : "unsupported",
    init() {
      if (!this.ok) { renderTtsBanner(); return; }
      const pick = () => {
        const vs = speechSynthesis.getVoices().filter((v) => /^ja/i.test(v.lang));
        this.female = vs.find((v) => FEMALE.test(v.name)) || null;
        this.male = vs.find((v) => MALE.test(v.name)) || null;
        this.voice = this.female || vs.find((v) => /Google/i.test(v.name)) || vs[0] || null;
        if (vs.length) this.status = "ok";
        else if (speechSynthesis.getVoices().length) this.status = "none";
        renderTtsBanner();
      };
      pick(); speechSynthesis.onvoiceschanged = pick;
      // Một số trình duyệt nạp danh sách giọng chậm hoặc không bắn sự kiện: sau 2,5 giây vẫn chưa có thì coi là không có.
      setTimeout(() => { if (this.status === "checking") { this.status = "none"; renderTtsBanner(); } }, 2500);
    },
    clean(t) {
      let s = t.replace(/――|～|★|＿+|\(.*?\)|（.*?）/g, " ");
      (window.YOMI || []).forEach(([re, rep]) => { s = s.replace(re, rep); });
      return s.replace(/、/g, "、 ");
    },
    speak(text, opt = {}) {
      if (!this.ok) { alert("Trình duyệt không hỗ trợ đọc tiếng Nhật (Web Speech API)."); return; }
      const u = new SpeechSynthesisUtterance(this.clean(text));
      // Giọng nam / nữ riêng nếu máy có; khi đã có giọng riêng thì chỉ chỉnh nhẹ độ cao để phân biệt nhiều người cùng giới.
      const gv = opt.gender === "M" ? this.male : opt.gender === "F" ? this.female : null;
      const v = gv || this.voice;
      u.lang = "ja-JP"; if (v) u.voice = v;
      const p = opt.pitch || 1;
      u.rate = opt.rate || this.rate; u.pitch = gv ? 1 + (p - 1) * 0.3 : p;
      u.onend = opt.onend || null; u.onerror = opt.onend || null;
      speechSynthesis.speak(u);
    },
    stop() { if (this.ok) speechSynthesis.cancel(); },
    // Phát lần lượt các dòng; onLine(i) để tô sáng dòng đang đọc.
    queue(lines, onLine, onDone) {
      this.stop(); let i = 0; const self = this; let stopped = false;
      const next = () => {
        if (stopped || i >= lines.length) { onLine && onLine(-1); onDone && onDone(); return; }
        onLine && onLine(i);
        const L = lines[i++];
        self.speak(L.text, { pitch: L.pitch, gender: L.gender, onend: () => setTimeout(next, 350) });
      };
      next();
      return () => { stopped = true; self.stop(); onLine && onLine(-1); };
    }
  };
  // Cảnh báo khi máy không đọc được tiếng Nhật (hiện ở mọi trang, ngay dưới thanh tiêu đề).
  function renderTtsBanner() {
    const el = document.getElementById("ttsBanner"); if (!el) return;
    if (TTS.status === "ok" || TTS.status === "checking") { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = `<b>⚠ ${TTS.status === "unsupported" ? "Trình duyệt này không hỗ trợ đọc giọng nói" : "Máy của bạn chưa có giọng đọc tiếng Nhật"}</b> — phần nghe và nút 🔊 sẽ không có tiếng hoặc đọc sai.
      <details><summary>Cách cài giọng tiếng Nhật</summary><ul>
        <li><b>Windows:</b> Cài đặt → Thời gian &amp; ngôn ngữ → Giọng nói → Thêm giọng nói → chọn 日本語 (Japanese), rồi tải lại trang.</li>
        <li><b>Android:</b> Cài/cập nhật “Dịch vụ chuyển văn bản sang lời nói của Google” → Cài đặt → tải dữ liệu giọng tiếng Nhật.</li>
        <li><b>iPhone/iPad, macOS:</b> Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói → Tiếng Nhật → tải một giọng.</li>
        <li>Dùng trình duyệt Chrome hoặc Edge bản mới thường có sẵn giọng tiếng Nhật trực tuyến.</li></ul></details>`;
  }
  TTS.init();
  const speakBtn = (text) => `<button class="speak" data-say="${esc(text)}" title="Nghe" aria-label="Nghe">🔊</button>`;
  document.addEventListener("click", (e) => { const b = e.target.closest("[data-say]"); if (b) { e.stopPropagation(); TTS.stop(); TTS.speak(b.dataset.say); } });

  // ---------- Modal ----------
  const modal = $("#modal");
  function openModal(html) { $("#modalBody").innerHTML = html; modal.hidden = false; }
  function closeModal() { modal.hidden = true; TTS.stop(); }
  modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest(".modal-close")) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  // ---------- Header ----------
  const sel = $("#lessonSelect");
  sel.innerHTML = CATALOG.map((c) => `<option value="${c.id}">${c.id}${LESSONS[c.id] ? "" : " (chưa có)"}</option>`).join("");
  sel.addEventListener("change", () => { const r = parseRoute(); location.hash = `#/l/${sel.value}/${r.tab || "vocab"}`; });

  function renderTabs(r) {
    const id = r.id || store.get("last", 1);
    $("#tabs").innerHTML = TABS.map(([k, n]) => `<a href="#/l/${id}/${k}" class="${r.view === "lesson" && r.tab === k ? "on" : ""}">${n}</a>`).join("") +
      `<a href="#/exam" class="${r.view === "exam" ? "on" : ""}">6 · Luyện thi</a>` +
      `<a href="#/k" class="${r.view === "hub" ? "on" : ""}">Kiến thức nền</a>`;
    sel.value = id;
  }

  function parseRoute() {
    const p = location.hash.replace(/^#\/?/, "").split("?")[0].split("/");
    if (p[0] === "l") return { view: "lesson", id: +p[1] || 1, tab: TABS.some((t) => t[0] === p[2]) ? p[2] : "vocab" };
    if (p[0] === "exam") return { view: "exam", examId: p[1] };
    if (p[0] === "k") return { view: "hub", page: p[1] || "" };
    return { view: "home" };
  }

  let cleanup = null;
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    TTS.stop();
    const r = parseRoute();
    renderTabs(r);
    if (r.view === "lesson") {
      store.set("last", r.id);
      const L = LESSONS[r.id];
      if (!L) return renderMissing(r.id);
      ({ vocab: viewVocab, read: viewRead, listen: viewListen, kanji: viewKanji, practice: viewPractice })[r.tab](L);
    } else if (r.view === "exam") viewExam(r.examId);
    else if (r.view === "hub") Hub.render(r.page, hubCtx());
    else viewHome();
    app.focus({ preventScroll: true }); window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  // Các hàm dùng chung truyền cho js/hub.js (trang Kiến thức nền).
  const hubCtx = () => ({ app, $, $$, esc, shuffle, store, TTS, speakBtn, mcq, openModal, exList, flash, quizRun, setCleanup: (f) => (cleanup = f) });

  const lessonHead = (L, part) => `<h1 class="jp">第${L.id}課　${esc(L.title)}</h1><p class="sub">${esc(L.titleVi)} · ${part}</p>`;

  // ---------- Trang chủ ----------
  function viewHome() {
    const done = Object.keys(LESSONS).length;
    app.innerHTML = `
      <h1>Học tiếng Nhật theo lộ trình 50 bài</h1>
      <p class="sub">Đã có nội dung đầy đủ cho ${done}/50 bài. Mỗi bài gồm 5 phần học + phần Luyện thi chung.</p>
      <div class="notice">Bài đọc, bài nghe và đề luyện thi ở đây là <b>nội dung tự biên soạn</b> bám theo từ vựng – ngữ pháp từng bài.
      Văn bản, file nghe gốc của giáo trình và đề thi JLPT thật đều có bản quyền nên không được đưa lên. Âm thanh dùng giọng đọc tiếng Nhật có sẵn trong trình duyệt.</div>
      <h2>Chọn bài</h2>
      <div class="lesson-grid">${CATALOG.map((c) => `<a class="lesson-tile ${LESSONS[c.id] ? "" : "off"}" href="#/l/${c.id}/vocab">
        <b>Bài ${c.id}</b> ${LESSONS[c.id] ? `<span class="jp">${esc(LESSONS[c.id].title)}</span>` : `<span class="pill">chưa có</span>`}
        <small class="jp">${esc(c.topic)}</small></a>`).join("")}</div>`;
  }

  function renderMissing(id) {
    const c = CATALOG.find((x) => x.id === id);
    app.innerHTML = `<h1>Bài ${id}</h1><p class="sub jp">${esc(c ? c.topic : "")}</p>
      <div class="notice">Bài này chưa có dữ liệu. Thêm file <code>data/lesson${String(id).padStart(2, "0")}.js</code> theo cùng định dạng với bài 1–3 và khai báo trong <code>index.html</code> là trang tự hiển thị.</div>`;
  }

  // ---------- Phần 1: Từ vựng & Ngữ pháp ----------
  function viewVocab(L) {
    const hasKanji = (s) => /[一-鿿]/.test(s);
    app.innerHTML = `${lessonHead(L, "Phần 1 · Từ vựng & Ngữ pháp")}
      <nav class="toc card"><div class="toc-title">Mục lục</div><ol>
        <li><button data-jump="vocab">I. Từ vựng bài ${L.id}</button></li>
        ${L.grammar.map((g, i) => `<li><button data-jump="g-${i}" class="jp">${i + 1}. ${esc(g.pattern)}</button></li>`).join("")}</ol></nav>
      <h2 id="vocab">I. Từ vựng bài ${L.id} <span class="pill">${L.vocab.length} từ</span></h2>
      <p class="small muted">Bấm vào một dòng để xem ghi chú và ví dụ.</p>
      <div class="vtable-wrap"><table class="vtable"><thead><tr><th>STT</th><th>Hiragana</th><th>Kanji</th><th>Ý nghĩa</th><th></th></tr></thead><tbody>
        ${L.vocab.map((v, i) => `<tr data-v="${i}"><td>${i + 1}</td><td class="jp">${esc(v.r)}</td><td class="jp">${hasKanji(v.w) ? esc(v.w) : ""}</td><td>${esc(v.vi)}</td><td>${speakBtn(v.r)}</td></tr>`).join("")}
      </tbody></table></div>
      <h2>II. Ngữ pháp bài ${L.id}</h2>
      <p class="small muted">Chỉ trình bày cách dùng trong phạm vi bài ${L.id}; các cách dùng mở rộng sẽ có ở bài sau.</p>
      ${L.grammar.map((g, i) => { let n = 0; return `<section class="gbox" id="g-${i}"><h3 class="jp">${i + 1}. ${esc(g.pattern)}</h3>
        <div class="func"><b>Giải thích:</b> ${esc(g.func)}${(g.explain || []).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        <ul class="parts">${g.parts.map(([a, b]) => `<li><b class="jp">${esc(a)}</b>: ${esc(b)}</li>`).join("")}</ul>
        ${g.usage.map((u, k) => `<div class="use"><b>${g.usage.length > 1 ? `Cách dùng ${k + 1}: ` : ""}${esc(u.rule)}</b>
          ${u.ex.map(([jp, vi]) => `<div class="rei">${speakBtn(jp)}<div><span class="rei-n">例${++n}：</span><span class="jp">${esc(jp)}</span><div class="small muted">${esc(vi)}</div></div></div>`).join("")}</div>`).join("")}
        ${g.notes.length ? `<div class="notes"><b>Lưu ý:</b><br>${g.notes.map(esc).join("<br>")}</div>` : ""}</section>`; }).join("")}`;
    app.addEventListener("click", onV);
    cleanup = () => app.removeEventListener("click", onV);
    function onV(e) {
      const j = e.target.closest("[data-jump]"); if (j) { flash($("#" + j.dataset.jump)); return; }
      const b = e.target.closest("[data-v]"); if (!b || e.target.closest("[data-say]")) return;
      const v = L.vocab[+b.dataset.v];
      const ks = [...v.w].filter((ch) => L.kanji.some((k) => k.c === ch));
      openModal(`<div class="row"><div class="jp" style="font-size:36px;font-weight:600">${esc(v.w)}</div>${speakBtn(v.r)}</div>
        <div class="jp muted">${esc(v.r)} · <span class="pill">${esc(v.t)}</span></div>
        <p style="font-size:18px">${esc(v.vi)}</p>${v.note ? `<div class="notice">${esc(v.note)}</div>` : ""}
        <h3 style="margin-top:14px">Ví dụ</h3>${exList(v.ex)}
        ${ks.length ? `<p class="small">Hán tự trong bài: ${ks.map((c) => `<a href="#/l/${L.id}/kanji?k=${encodeURIComponent(c)}" class="jp" onclick="document.getElementById('modal').hidden=true">${c}</a>`).join(" ")}</p>` : ""}`);
    }
  }
  const exList = (ex) => ex.map(([jp, vi]) => `<div class="ex row" style="flex-wrap:nowrap;align-items:flex-start">${speakBtn(jp)}<div><div class="jp">${esc(jp)}</div><div class="small muted">${esc(vi)}</div></div></div>`).join("");

  // ---------- Câu hỏi trắc nghiệm dùng chung ----------
  // explainFn(q) trả về HTML giải thích; onAnswer(correct) để tính điểm.
  function mcq(q, idx, explainFn, onAnswer) {
    const order = shuffle(q.o.map((_, i) => i));
    const el = document.createElement("div"); el.className = "q card";
    el.innerHTML = `<div class="qt">${idx != null ? `<b>${idx}.</b> ` : ""}${esc(q.q)}</div>
      <div class="opts">${order.map((i) => `<button class="opt" data-i="${i}">${esc(q.o[i])}</button>`).join("")}</div><div class="exp"></div>`;
    el.querySelector(".opts").addEventListener("click", (e) => {
      const b = e.target.closest(".opt"); if (!b) return;
      const pick = +b.dataset.i, ok = pick === q.a;
      $$(".opt", el).forEach((x) => { x.disabled = true; if (+x.dataset.i === q.a) x.classList.add("ok"); });
      if (!ok) b.classList.add("bad");
      el.querySelector(".exp").innerHTML = `<div class="explain"><span class="${ok ? "result-ok" : "result-bad"}">${ok ? "✓ Chính xác" : "✗ Chưa đúng — đáp án: " + esc(q.o[q.a])}</span><br>${explainFn(q)}</div>`;
      onAnswer && onAnswer(ok);
    });
    return el;
  }

  // ---------- Phần 2: Bài đọc ----------
  const toks = (t) => t.split(" / ").map((x) => { const [s, r, m] = x.split("|"); return { s, r, m }; });
  const plain = (t) => toks(t).map((x) => x.s).join("");
  const tokHtml = (x) => !x.m && !x.r ? `<span class="tok punct">${esc(x.s)}</span>`
    : `<span class="tok" data-m="${esc(x.m)}" data-r="${esc(x.r || "")}">${x.r ? `<ruby>${esc(x.s)}<rt>${esc(x.r)}</rt></ruby>` : esc(x.s)}</span>`;

  function viewRead(L) {
    const R = L.reading;
    app.innerHTML = `${lessonHead(L, "Phần 2 · Bài đọc")}
      <div class="row" style="margin-bottom:10px">
        <button class="btn" id="tgVi">Hiện nghĩa từng câu</button><button class="btn" id="tgFuri">Ẩn furigana</button>
        <button class="btn" id="readAll">🔊 Đọc cả bài</button></div>
      <div class="card" id="text"><h3 class="jp" style="font-size:22px">${esc(R.title)} <span class="muted small">— ${esc(R.titleVi)}</span></h3>
        <p class="small muted">${esc(R.source)} Bấm vào từng từ để xem nghĩa.</p>
        ${R.paragraphs.map((p, pi) => `<div class="para">${p.s.map((s, si) => `<span class="sent" id="s-${pi}-${si}">
          <span class="jpline">${toks(s.t).map(tokHtml).join("")}</span> ${speakBtn(plain(s.t))}<span class="vi">→ ${esc(s.vi)}</span></span>`).join("")}
          <div class="para-vi"><b>Ý đoạn ${pi + 1}:</b> ${esc(p.vi.replace(/^Đoạn \d+:\s*/, ""))}</div></div>`).join("")}
        <div class="notice"><b>Ý toàn bài:</b> ${esc(R.summary)}</div></div>
      <h2>Bài tập đọc hiểu</h2><div id="qs" class="stack"></div>`;
    const text = $("#text");
    $("#tgVi").onclick = (e) => { text.classList.toggle("show-vi"); e.target.textContent = text.classList.contains("show-vi") ? "Ẩn nghĩa từng câu" : "Hiện nghĩa từng câu"; };
    $("#tgFuri").onclick = (e) => { text.classList.toggle("hide-furi"); e.target.textContent = text.classList.contains("hide-furi") ? "Hiện furigana" : "Ẩn furigana"; };
    const flat = R.paragraphs.flatMap((p, pi) => p.s.map((s, si) => ({ id: `s-${pi}-${si}`, text: plain(s.t) })));
    let stopRead = null;
    $("#readAll").onclick = () => { if (stopRead) { stopRead(); stopRead = null; return; }
      stopRead = TTS.queue(flat, (i) => { $$(".sent", text).forEach((x) => x.classList.remove("hl")); if (i >= 0) $("#" + flat[i].id).classList.add("hl"); }, () => { stopRead = null; }); };
    const gl = glossTip(text);
    cleanup = () => { gl(); stopRead && stopRead(); };
    const qs = $("#qs");
    R.questions.forEach((q, i) => qs.appendChild(mcq(q, i + 1, (q) => {
      const [pi, si] = q.ev; const s = R.paragraphs[pi].s[si];
      return `<b>Dữ kiện:</b> đoạn ${pi + 1}, câu ${si + 1} — <span class="ev">${esc(plain(s.t))}</span> <button class="btn sm" data-goto="s-${pi}-${si}">Xem trong bài</button><br><b>Mẹo:</b> ${esc(q.tip)}`;
    })));
    qs.addEventListener("click", (e) => { const b = e.target.closest("[data-goto]"); if (b) flash($("#" + b.dataset.goto)); });
  }
  function flash(el) { el.scrollIntoView({ behavior: "smooth", block: "center" }); el.classList.add("hl"); setTimeout(() => el.classList.remove("hl"), 2500); }
  function glossTip(root) {
    const tip = document.createElement("div"); tip.className = "gloss"; tip.hidden = true; document.body.appendChild(tip);
    const show = (e) => { const t = e.target.closest(".tok[data-m]"); if (!t) return;
      $$(".tok.on", root).forEach((x) => x.classList.remove("on")); t.classList.add("on");
      tip.innerHTML = `${t.dataset.r ? `<span class="jp">${esc(t.dataset.r)}</span><br>` : ""}${esc(t.dataset.m)}`; tip.hidden = false;
      const b = t.getBoundingClientRect(); tip.style.left = Math.min(b.left, innerWidth - 270) + "px"; tip.style.top = (b.bottom + 6) + "px"; };
    const hide = (e) => { if (!e.target.closest(".tok[data-m]")) { tip.hidden = true; $$(".tok.on", root).forEach((x) => x.classList.remove("on")); } };
    root.addEventListener("click", show); document.addEventListener("click", hide, true); window.addEventListener("scroll", () => (tip.hidden = true), { passive: true });
    return () => { tip.remove(); document.removeEventListener("click", hide, true); };
  }

  // ---------- Phần 3: Bài nghe ----------
  function viewListen(L) {
    const S = L.listening;
    const lines = S.script.map((l) => ({ text: l.jp, pitch: S.speakers[l.sp].pitch, gender: S.speakers[l.sp].pitch >= 1.1 ? "F" : "M" }));
    app.innerHTML = `${lessonHead(L, "Phần 3 · Bài nghe")}
      <div class="card stack"><h3 class="jp" style="font-size:22px">${esc(S.title)} <span class="muted small">— ${esc(S.titleVi)}</span></h3>
        <p class="small muted">${esc(S.source)}${TTS.ok ? "" : " — Trình duyệt này không hỗ trợ đọc giọng nói."}</p>
        <div class="player"><button class="btn primary" id="play">▶ Phát bài nghe</button>
          <label class="small">Tốc độ <select id="rate">${[0.7, 0.8, 0.9, 1, 1.1].map((r) => `<option ${r === TTS.rate ? "selected" : ""}>${r}</option>`).join("")}</select></label>
          <button class="btn" id="tgScript">Hiện lời thoại</button><button class="btn" id="tgViL">Hiện nghĩa</button></div>
        <p class="small muted">Gợi ý: nghe 1–2 lần, làm bài tập trước, sau đó mới mở lời thoại để kiểm tra.</p>
        <div class="script blur" id="script">${S.script.map((l, i) => `<div class="line" id="l-${i}"><span class="sp">${esc(S.speakers[l.sp].name)}</span>
          <div style="flex:1"><div class="jp">${esc(l.jp)}</div><div class="vi" hidden>${esc(l.vi)}</div></div>${speakBtn(l.jp)}</div>`).join("")}</div></div>
      <h2>Bài tập nghe</h2><div id="qs" class="stack"></div>`;
    let stop = null;
    const sc = $("#script");
    const hl = (i) => $$(".line", sc).forEach((x, k) => x.classList.toggle("playing", k === i));
    $("#play").onclick = (e) => {
      if (stop) { stop(); stop = null; e.target.textContent = "▶ Phát bài nghe"; return; }
      e.target.textContent = "■ Dừng";
      stop = TTS.queue(lines, hl, () => { stop = null; e.target.textContent = "▶ Phát bài nghe"; });
    };
    $("#rate").onchange = (e) => { TTS.rate = +e.target.value; store.set("rate", TTS.rate); };
    $("#tgScript").onclick = (e) => { sc.classList.toggle("blur"); e.target.textContent = sc.classList.contains("blur") ? "Hiện lời thoại" : "Ẩn lời thoại"; };
    $("#tgViL").onclick = (e) => { const v = $$(".vi", sc); const h = !v[0].hidden; v.forEach((x) => (x.hidden = h)); e.target.textContent = h ? "Hiện nghĩa" : "Ẩn nghĩa"; };
    cleanup = () => stop && stop();
    const qs = $("#qs");
    S.questions.forEach((q, i) => qs.appendChild(mcq(q, i + 1, (q) => {
      const l = S.script[q.ev[0]];
      return `<b>Dữ kiện:</b> lời thoại thứ ${q.ev[0] + 1} (${esc(S.speakers[l.sp].name)}) — <span class="ev">${esc(l.jp)}</span>
        <button class="btn sm" data-line="${q.ev[0]}">🔊 Nghe lại câu này</button><br><b>Mẹo:</b> ${esc(q.tip)}`;
    })));
    qs.addEventListener("click", (e) => { const b = e.target.closest("[data-line]"); if (!b) return;
      const i = +b.dataset.line; sc.classList.remove("blur"); $("#tgScript").textContent = "Ẩn lời thoại"; flash($("#l-" + i));
      TTS.stop(); TTS.speak(S.script[i].jp, { pitch: lines[i].pitch, gender: lines[i].gender }); });
  }

  // ---------- Phần 4: Hán tự ----------
  function viewKanji(L) {
    const want = decodeURIComponent((location.hash.split("?k=")[1] || ""));
    app.innerHTML = `${lessonHead(L, "Phần 4 · Hán tự")}
      <div class="kgrid">${L.kanji.map((k, i) => `<button class="ktile" data-k="${i}"><div class="c">${k.c}</div><div class="hv">${esc(k.hv)}</div></button>`).join("")}</div>
      <div id="kd" style="margin-top:16px"></div>
      <p class="small muted">Thứ tự nét lấy thống nhất từ một nguồn duy nhất: dữ liệu KanjiVG (giấy phép CC BY-SA 3.0), hiển thị theo cùng một khung.</p>`;
    const show = (i) => {
      const k = L.kanji[i];
      $$(".ktile").forEach((t, j) => (t.style.borderColor = j === i ? "var(--accent)" : ""));
      $("#kd").innerHTML = `<div class="card kdetail"><div><div class="stroke-box" id="sb"></div>
          <div class="row" style="margin-top:8px"><button class="btn sm" id="replay">↻ Xem lại nét</button><span class="small muted" id="sc"></span></div></div>
        <div><div class="row"><span class="jp" style="font-size:40px">${k.c}</span><b>${esc(k.hv)}</b> — ${esc(k.vi)}</div>
          <table class="kinfo"><tr><td>Âm On</td><td class="jp">${esc(k.on)}</td></tr><tr><td>Âm Kun</td><td class="jp">${esc(k.kun)}</td></tr>
            ${(() => { const ri = Hub.radInfo(k.c); if (!ri) return "";
              return `${ri.r ? `<tr><td>Bộ thủ</td><td><a href="#/k/radicals" class="jp">${esc(ri.form || ri.r[1])}</a> — bộ ${esc(ri.r[3])} (${esc(ri.r[4])}), số ${ri.r[0]}</td></tr>` : ""}
                ${ri.parts.length > 1 ? `<tr><td>Thành phần</td><td class="jp">${ri.parts.map((c) => esc(Hub.partName(c))).join(" ＋ ")}</td></tr>` : ""}`; })()}</table>
          ${window.KMEMO && KMEMO[k.c] ? `<div class="memo"><b>💡 Gợi nhớ:</b> ${esc(KMEMO[k.c])}</div>` : ""}
          <h3 style="margin-top:12px">Từ thường gặp</h3>
          ${k.words.map(([w, r, vi]) => `<div class="ex row" style="flex-wrap:nowrap">${speakBtn(r.split("/")[0])}<div><span class="jp" style="font-size:19px">${esc(w)}</span> <span class="jp muted">${esc(r)}</span> — ${esc(vi)}</div></div>`).join("")}
          <div class="notice" style="margin-top:10px"><b>Trường hợp sử dụng:</b> ${esc(k.use)}</div></div></div>`;
      drawStrokes($("#sb"), k.c);
      $("#replay").onclick = () => drawStrokes($("#sb"), k.c);
    };
    app.addEventListener("click", onK); cleanup = () => app.removeEventListener("click", onK);
    function onK(e) { const b = e.target.closest("[data-k]"); if (b) show(+b.dataset.k); }
    const start = Math.max(0, L.kanji.findIndex((k) => k.c === want));
    show(start);
  }
  function drawStrokes(box, ch) {
    const d = window.KANJIVG && KANJIVG[ch];
    if (!d) { box.innerHTML = `<p class="small muted" style="padding:12px">Chưa có dữ liệu nét cho chữ này.</p>`; return; }
    const ns = "http://www.w3.org/2000/svg";
    box.innerHTML = `<svg viewBox="0 0 109 109" xmlns="${ns}" role="img" aria-label="Thứ tự nét chữ ${ch}">
      ${d.p.map((p) => `<path class="ghost" d="${p}"/>`).join("")}${d.p.map((p) => `<path class="st" d="${p}"/>`).join("")}
      ${d.n.map(([x, y], i) => `<text x="${x}" y="${y}">${i + 1}</text>`).join("")}</svg>`;
    $("#sc") && ($("#sc").textContent = `${d.p.length} nét`);
    let delay = 0;
    $$("path.st", box).forEach((p) => {
      const len = p.getTotalLength(); const dur = Math.max(250, len * 9);
      p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
      p.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], { duration: dur, delay, fill: "forwards", easing: "ease-in-out" });
      delay += dur + 150;
    });
  }

  // ---------- Phần 5: Luyện tập ----------
  function viewPractice(L) {
    const mode = store.get("pmode", "vocab"), scope = store.get("pscope", "this");
    app.innerHTML = `${lessonHead(L, "Phần 5 · Luyện tập")}
      <div class="row" style="margin-bottom:14px"><div class="seg" id="mode">
        <button data-m="vocab">Từ vựng</button><button data-m="grammar">Ngữ pháp</button><button data-m="kanji">Hán tự</button></div>
        <select id="scope"><option value="this">Chỉ bài ${L.id}</option><option value="upto">Bài 1 → ${L.id}</option><option value="all">Tất cả bài đã có</option></select></div>
      <div id="pz"></div>`;
    $("#scope").value = scope;
    $$("#mode button").forEach((b) => b.classList.toggle("on", b.dataset.m === mode));
    $("#mode").onclick = (e) => { const b = e.target.closest("button"); if (b) { store.set("pmode", b.dataset.m); viewPractice(L); } };
    $("#scope").onchange = (e) => { store.set("pscope", e.target.value); viewPractice(L); };
    const ls = Object.values(LESSONS).filter((x) => scope === "all" || (scope === "upto" ? x.id <= L.id : x.id === L.id));
    const pz = $("#pz");
    if (mode === "vocab") vocabDrill(pz, shuffle(ls.flatMap((x) => x.vocab)));
    else if (mode === "grammar") quizRun(pz, shuffle(ls.flatMap((x) => x.grammarQuiz)), "grammar");
    else quizRun(pz, shuffle(kanjiQuestions(ls)).slice(0, 15), "kanji");
  }

  const norm = (s) => s.replace(/[\s～~・、。？?！!]/g, "");
  function vocabDrill(root, list) {
    let i = 0, score = 0;
    const step = () => {
      if (i >= list.length) { root.innerHTML = `<div class="card flash"><div class="score">${score}/${list.length * 2}</div><p>Hoàn thành bộ thẻ!</p><button class="btn primary" id="again">Làm lại</button></div>`;
        $("#again").onclick = () => vocabDrill(root, shuffle(list)); return; }
      const v = list[i]; const kanaOnly = v.w === v.r || norm(v.w) === norm(v.r);
      root.innerHTML = `<div class="progress"><i style="width:${(i / list.length) * 100}%"></i></div>
        <div class="card flash"><div class="small muted">Thẻ ${i + 1}/${list.length} · điểm ${score}</div>
          ${kanaOnly ? `<div style="font-size:22px">${esc(v.vi)}</div><p class="small muted">Viết từ này bằng ${Kana.isKata(v.r) ? "katakana" : "hiragana"}</p>`
                     : `<div class="big">${esc(v.w)}</div><p class="small muted">Gõ cách đọc bằng ${Kana.isKata(v.r) ? "katakana" : "hiragana"} (gõ romaji cũng được, ví dụ: gakusei)</p>`}
          <form id="f"><input type="text" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" lang="ja" aria-label="Cách đọc">
          <div class="preview" id="pv"></div><button class="btn primary">Kiểm tra</button> <button type="button" class="btn" id="skip">Không biết</button></form>
          <div id="res"></div></div>`;
      const inp = $("#ans"); inp.focus();
      inp.oninput = () => ($("#pv").textContent = Kana.convert(inp.value, v.r));
      const check = (given) => {
        const want = norm(v.r), got = norm(given);
        const ok = got === want;
        const scriptOnly = !ok && Kana.kataToHira(got) === Kana.kataToHira(want);
        if (ok) score++;
        $("#f").hidden = true;
        $("#res").innerHTML = `<p class="${ok ? "result-ok" : "result-bad"}">${ok ? "✓ Đúng phát âm" : scriptOnly ? "≈ Đúng âm nhưng sai bảng chữ" : "✗ Chưa đúng"}</p>
          <div class="row" style="justify-content:center"><span class="jp" style="font-size:24px">${esc(v.w)}</span><span class="jp">【${esc(v.r)}】</span>${speakBtn(v.r)}</div>
          ${kanaOnly ? `<p>${esc(v.vi)}</p><button class="btn primary" id="nx">Tiếp →</button>` : `<p class="small muted">Bước 2 — Chọn nghĩa đúng:</p><div id="mq"></div>`}`;
        TTS.speak(v.r);
        if (kanaOnly) { score++; $("#nx").onclick = () => { i++; step(); }; return; }
        const pool = shuffle(list.filter((x) => x.vi !== v.vi)).slice(0, 3).map((x) => x.vi);
        const q = { q: "", o: [v.vi, ...pool], a: 0 };
        const el = mcq(q, null, () => `${exList(v.ex.slice(0, 1))}<button class="btn primary" id="nx">Tiếp →</button>`, (good) => { if (good) score++; });
        el.querySelector(".qt").remove(); el.classList.remove("card");
        $("#mq").appendChild(el);
        $("#mq").addEventListener("click", (e) => { if (e.target.id === "nx") { i++; step(); } });
      };
      $("#f").onsubmit = (e) => { e.preventDefault(); check(Kana.convert(inp.value, v.r)); };
      $("#skip").onclick = () => check("");
    };
    step();
  }

  function quizRun(root, list, kind) {
    let i = 0, score = 0;
    const step = () => {
      if (i >= list.length) { const best = store.get("best:" + kind, 0); if (score > best) store.set("best:" + kind, score);
        root.innerHTML = `<div class="card flash"><div class="score">${score}/${list.length}</div><p>Kỷ lục ${kind === "grammar" ? "ngữ pháp" : "Hán tự"}: ${Math.max(best, score)}</p><button class="btn primary" id="again">Làm lại</button></div>`;
        $("#again").onclick = () => quizRun(root, shuffle(list), kind); return; }
      root.innerHTML = `<div class="progress"><i style="width:${(i / list.length) * 100}%"></i></div><p class="small muted">Câu ${i + 1}/${list.length} · điểm ${score}</p>`;
      root.appendChild(mcq(list[i], null, (q) => `${esc(q.ex)}<br><button class="btn primary" id="nx" style="margin-top:8px">Tiếp →</button>`, (ok) => { if (ok) score++; }));
      root.onclick = (e) => { if (e.target.id === "nx") { i++; step(); } };
    };
    step();
  }

  // Sinh câu hỏi Hán tự: cách đọc trong từ, nghĩa của chữ, chọn từ theo nghĩa.
  function kanjiQuestions(ls) {
    const ks = ls.flatMap((x) => x.kanji);
    const words = ks.flatMap((k) => k.words.map(([w, r, vi]) => ({ w, r, vi, k })));
    const pick = (arr, n, not) => shuffle(arr.filter((x) => !not.includes(x))).slice(0, n);
    const out = [];
    words.forEach((x) => {
      const others = [...new Set(words.map((y) => y.r))];
      out.push({ q: `Cách đọc của「${x.w}」là gì?`, o: [x.r, ...pick(others, 3, [x.r])], a: 0, ex: `${x.w}【${x.r}】: ${x.vi}. ${x.k.use}` });
      out.push({ q: `Từ nào có nghĩa “${x.vi}”?`, o: [x.w, ...pick([...new Set(words.map((y) => y.w))], 3, [x.w])], a: 0, ex: `${x.w}【${x.r}】 = ${x.vi}. Chữ ${x.k.c} (${x.k.hv}) mang nghĩa “${x.k.vi}”.` });
    });
    ks.forEach((k) => out.push({ q: `Chữ「${k.c}」mang nghĩa gì?`, o: [k.vi, ...pick([...new Set(ks.map((y) => y.vi))], 3, [k.vi])], a: 0, ex: `${k.c} — ${k.hv}: ${k.vi}. On: ${k.on}; Kun: ${k.kun}.` }));    return out.filter((q) => new Set(q.o).size === 4);
  }

  // ---------- Phần 6: Luyện thi ----------
  const examCount = (e) => e.sections.reduce((n, s) => n + s.items.length, 0);
  function examGroup(title, list, note) {
    if (!list.length) return "";
    return `<h2>${esc(title)}</h2>${note ? `<p class="small muted">${esc(note)}</p>` : ""}
      <div class="exam-grid">${list.map((e) => { const best = store.get("exam:" + e.id, null);
        return `<a class="exam-tile card" href="#/exam/${e.id}"><b>${esc(e.name)}</b>
          <span class="small muted">${examCount(e)} câu · ${e.minutes} phút</span>
          <span class="small">${best == null ? "Chưa làm" : `Kỷ lục: ${best}/${examCount(e)}`}</span></a>`; }).join("")}</div>`;
  }
  function viewExam(examId) {
    const ex = EXAMS.find((e) => e.id === examId);
    if (!ex) {
      app.innerHTML = `<h1>Phần 6 · Luyện thi</h1><p class="sub">Làm đề có giới hạn thời gian, chấm điểm và giải thích chi tiết từng câu.</p>
        <div class="notice">Đề thi JLPT thật (các năm từ 2000 đến nay) thuộc bản quyền của Japan Foundation và JEES nên không thể đưa lên web.
        Các đề dưới đây là <b>đề mô phỏng tự biên soạn</b> theo cấu trúc phần thi JLPT N5/N4 (chữ – từ vựng, ngữ pháp, đọc hiểu, nghe hiểu). Để làm đề chính thức, hãy dùng đề mẫu do JLPT công bố miễn phí:</div>
        <ul>${OFFICIAL_LINKS.map((l) => `<li><a href="${l.url}" target="_blank" rel="noopener">${esc(l.name)}</a></li>`).join("")}</ul>
        ${examGroup("Đề theo mốc bài học", EXAMS.filter((e) => !e.group))}
        ${examGroup("20 đề N5 (từ dữ liệu bài 1–25)", EXAMS.filter((e) => e.group === "N5"), "Mỗi đề gồm: 漢字読み, 表記, 文脈規定, 文法, 文の組み立て (★), 読解, 聴解 (2 đoạn hội thoại). Đề được sinh tự động từ dữ liệu bài học, cố định cho mỗi số đề; một số câu có thể lặp lại giữa các đề.")}
        ${examGroup("20 đề N4 (từ dữ liệu bài 26–50)", EXAMS.filter((e) => e.group === "N4"), "Cấu trúc giống đề N5, độ khó theo phạm vi bài 26–50.")}`;
      return;
    }
    const all = ex.sections.flatMap((s, si) => s.items.map((it, ii) => ({ ...it, key: `${si}-${ii}` })));
    const orders = Object.fromEntries(all.map((it) => [it.key, shuffle(it.o.map((_, i) => i))]));
    const answers = {}; const plays = {}; let n = 0;
    const endAt = Date.now() + ex.minutes * 60000;
    app.innerHTML = `<h1>${esc(ex.name)}</h1><div class="timer" id="timer"></div>
      <p class="small muted">Phần nghe: mỗi câu được nghe tối đa 2 lần. Hết giờ bài sẽ tự nộp.</p>
      ${ex.sections.map((s, si) => `<h2 class="jp">${esc(s.name)}</h2>${s.instruction ? `<p class="jp small muted">${esc(s.instruction)}</p>` : ""}
        ${s.listen ? `<button class="btn" data-play="s${si}">🔊 Nghe đoạn hội thoại (còn 2 lần)</button><div class="jp small script-reveal" id="script-s${si}" hidden></div><div style="height:8px"></div>` : ""}
        ${s.passage ? `<div class="passage">${esc(s.passage)}</div>` : ""}
        <div class="stack">${s.items.map((it, ii) => { const k = `${si}-${ii}`; n++;
          return `<div class="q card" data-key="${k}"><div class="qt"><b>${n}.</b> ${esc(it.q)}</div>
            ${it.listen ? `<button class="btn sm" data-play="${k}">🔊 Nghe (còn 2 lần)</button><div style="height:8px"></div>` : ""}
            <div class="opts">${orders[k].map((i) => `<button class="opt" data-i="${i}">${esc(it.o[i])}</button>`).join("")}</div><div class="exp"></div></div>`; }).join("")}</div>`).join("")}
      <div class="row" style="margin-top:20px"><button class="btn primary" id="submit">Nộp bài</button><a href="#/exam">Thoát</a></div><div id="result"></div>`;
    const byKey = Object.fromEntries(all.map((it) => [it.key, it]));
    app.addEventListener("click", onE);
    function onE(e) {
      const pb = e.target.closest("[data-play]");
      if (pb) { const k = pb.dataset.play; plays[k] = (plays[k] || 0) + 1; if (plays[k] > 2) return;
        const lines = k.startsWith("s") ? ex.sections[+k.slice(1)].listen : byKey[k].listen;
        TTS.queue(lines.map(([sp, t]) => ({ text: t, pitch: sp === "F" ? 1.3 : 0.75, gender: sp })));
        pb.textContent = `🔊 Nghe${k.startsWith("s") ? " đoạn hội thoại" : ""} (còn ${2 - plays[k]} lần)`; if (plays[k] >= 2) pb.disabled = true; return; }
      const o = e.target.closest(".opt"); if (!o || o.disabled) return;
      const q = o.closest(".q"); answers[q.dataset.key] = +o.dataset.i;
      $$(".opt", q).forEach((x) => x.classList.toggle("picked", x === o));
    }
    let finished = false;
    const tick = () => { const left = Math.max(0, endAt - Date.now()); const m = Math.floor(left / 60000), s = Math.floor(left / 1000) % 60;
      const t = $("#timer"); if (!t) return; t.textContent = `⏱ ${m}:${String(s).padStart(2, "0")}`; t.classList.toggle("warn", left < 120000);
      if (left === 0) finish(true); };
    const timer = setInterval(tick, 500); tick();
    function finish(auto) {
      if (finished) return; finished = true; clearInterval(timer); TTS.stop();
      let score = 0;
      $$(".q[data-key]").forEach((q) => { const it = byKey[q.dataset.key]; const pick = answers[q.dataset.key]; const ok = pick === it.a; if (ok) score++;
        $$(".opt", q).forEach((x) => { x.disabled = true; if (+x.dataset.i === it.a) x.classList.add("ok"); else if (+x.dataset.i === pick) x.classList.add("bad"); });
        q.querySelector(".exp").innerHTML = `<div class="explain"><span class="${ok ? "result-ok" : "result-bad"}">${ok ? "✓ Đúng" : pick == null ? "— Bỏ trống" : "✗ Sai"}</span> · Đáp án: <b class="jp">${esc(it.o[it.a])}</b><br>${esc(it.ex)}
          ${it.listen ? `<div style="margin-top:6px" class="jp small">${it.listen.map(([sp, t]) => `${sp === "F" ? "女" : "男"}：${esc(t)}`).join("<br>")}</div>` : ""}</div>`; });
      ex.sections.forEach((s, si) => { const el = $("#script-s" + si); if (el && s.listen) { el.hidden = false;
        el.innerHTML = `<div class="explain"><b>Lời thoại:</b><br>${(s.script || s.listen.map(([sp, t]) => `${sp === "F" ? "女" : "男"}：${t}`)).map(esc).join("<br>")}</div>`; } });
      const btn = $("#submit"); btn.disabled = true; $$("[data-play]").forEach((b) => (b.disabled = true));
      const best = store.get("exam:" + ex.id, 0); if (score > best) store.set("exam:" + ex.id, score);
      $("#result").innerHTML = `<div class="card flash" style="margin-top:16px"><div class="score">${score}/${all.length}</div>
        <p>${auto ? "Hết giờ — bài đã tự nộp. " : ""}Kỷ lục: ${Math.max(best, score)}/${all.length}. Xem giải thích dưới mỗi câu.</p><a class="btn" href="#/exam">Về danh sách đề</a></div>`;
      $("#result").scrollIntoView({ behavior: "smooth" });
    }
    $("#submit").onclick = () => { const miss = all.length - Object.keys(answers).length;
      if (miss && !confirm(`Còn ${miss} câu chưa làm. Nộp bài?`)) return; finish(false); };
    cleanup = () => { clearInterval(timer); app.removeEventListener("click", onE); };
  }

  route();
})();
