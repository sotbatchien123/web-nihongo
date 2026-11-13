#!/usr/bin/env node
// Kiểm tra toàn bộ dữ liệu của web. Chạy: node tools/validate.js
// Thoát với mã 1 nếu có LỖI; CẢNH BÁO chỉ in ra để tham khảo.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

// ---------- 1. Nạp các file theo đúng thứ tự trong index.html ----------
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
const ctx = { window: {}, console };
ctx.window = ctx;
vm.createContext(ctx);
for (const src of scripts) {
  const file = path.join(ROOT, src);
  if (!fs.existsSync(file)) { err("index.html", `thiếu file ${src}`); continue; }
  if (src === "js/app.js") continue; // app.js cần DOM; chỉ kiểm tra cú pháp
  try { vm.runInContext(fs.readFileSync(file, "utf8"), ctx, { filename: src }); }
  catch (e) { err(src, `lỗi khi chạy: ${e.message}`); }
}
try { new vm.Script(fs.readFileSync(path.join(ROOT, "js/app.js"), "utf8"), { filename: "js/app.js" }); }
catch (e) { err("js/app.js", `lỗi cú pháp: ${e.message}`); }

// File bài học có trong data/ nhưng chưa khai báo trong index.html
for (const f of fs.readdirSync(path.join(ROOT, "data")).filter((f) => /^lesson\d+\.js$/.test(f)))
  if (!scripts.includes(`data/${f}`)) err("index.html", `chưa khai báo data/${f}`);

const { CATALOG = [], LESSONS = {}, EXAMS = [], KANJIVG = {}, YOMI = [], KPARTS = {}, KMEMO = {}, RADICALS = [] } = ctx;
if (RADICALS.length !== 214) err("data/radicals.js", `cần 214 bộ thủ, có ${RADICALS.length}`);
RADICALS.forEach((r, i) => { if (r[0] !== i + 1 || r.length !== 6) err("data/radicals.js", `mục #${i + 1} sai định dạng [số, bộ, nét, tên, nghĩa, biến thể]`); });

// ---------- 2. Kiểm tra từng bài ----------
const opts4 = (where, q) => {
  if (!Array.isArray(q.o) || q.o.length !== 4) return err(where, `cần đúng 4 phương án (có ${q.o && q.o.length})`);
  if (new Set(q.o).size !== 4) err(where, `phương án bị trùng: ${q.o.join(" / ")}`);
  if (!(q.a >= 0 && q.a < 4)) err(where, `chỉ số đáp án không hợp lệ: ${q.a}`);
};
const plain = (t) => t.split(" / ").map((x) => x.split("|")[0]).join("");
const kanjiSeen = new Map();

if (CATALOG.length !== 50) err("catalog", `cần 50 bài, có ${CATALOG.length}`);
for (const c of CATALOG) {
  const L = LESSONS[c.id];
  const W = `bài ${c.id}`;
  if (!L) { err(W, "chưa có dữ liệu"); continue; }
  for (const k of ["title", "titleVi", "vocab", "grammar", "reading", "listening", "kanji", "grammarQuiz"]) if (!L[k]) err(W, `thiếu trường ${k}`);
  if (!L.vocab) continue;

  // Từ vựng
  const seen = new Set();
  L.vocab.forEach((v, i) => {
    const w = `${W} từ vựng #${i + 1} (${v.w})`;
    if (!v.w || !v.r || !v.vi || !v.t) err(w, "thiếu w / r / vi / t");
    if (!Array.isArray(v.ex) || !v.ex.length) err(w, "thiếu câu ví dụ");
    else v.ex.forEach((e) => { if (!Array.isArray(e) || e.length !== 2 || !e[0] || !e[1]) err(w, "ví dụ phải là [câu tiếng Nhật, nghĩa]"); });
    if (/[一-鿿]/.test(v.r)) err(w, `cách đọc chứa Hán tự: ${v.r}`);
    const key = v.w + "|" + v.r;
    if (seen.has(key)) err(w, "từ bị trùng trong bài");
    seen.add(key);
  });

  // Ngữ pháp
  L.grammar.forEach((g, i) => {
    const w = `${W} ngữ pháp #${i + 1}`;
    if (!g.pattern || !g.func) err(w, "thiếu pattern / func");
    if (!Array.isArray(g.parts) || !Array.isArray(g.usage) || !g.usage.length) err(w, "thiếu parts / usage");
    (g.usage || []).forEach((u) => { if (!u.rule || !Array.isArray(u.ex) || !u.ex.length) err(w, "cách dùng thiếu rule hoặc ví dụ"); });
    if (!Array.isArray(g.notes)) err(w, "notes phải là mảng");
  });
  L.grammarQuiz.forEach((q, i) => { const w = `${W} quiz ngữ pháp #${i + 1}`; opts4(w, q); if (!q.ex) err(w, "thiếu giải thích"); });
  if (L.grammarQuiz.length < 8) warn(W, `chỉ có ${L.grammarQuiz.length} câu quiz ngữ pháp`);

  // Bài đọc
  const R = L.reading;
  R.paragraphs.forEach((p, pi) => p.s.forEach((s, si) => {
    s.t.split(" / ").forEach((tok) => { if (tok.split("|").length !== 3) err(`${W} bài đọc đoạn ${pi + 1} câu ${si + 1}`, `token sai định dạng "chữ|đọc|nghĩa": ${tok}`); });
    if (!s.vi) err(`${W} bài đọc đoạn ${pi + 1} câu ${si + 1}`, "thiếu nghĩa câu");
  }));
  R.questions.forEach((q, i) => {
    const w = `${W} câu hỏi đọc #${i + 1}`;
    opts4(w, q);
    const [pi, si] = q.ev || [];
    if (!R.paragraphs[pi] || !R.paragraphs[pi].s[si]) err(w, `ev [${q.ev}] không trỏ tới câu nào`);
    if (!q.tip) err(w, "thiếu mẹo");
  });

  // Bài nghe
  const S = L.listening;
  S.script.forEach((l, i) => { if (!S.speakers[l.sp]) err(`${W} bài nghe dòng ${i + 1}`, `người nói "${l.sp}" chưa khai báo`); if (!l.jp || !l.vi) err(`${W} bài nghe dòng ${i + 1}`, "thiếu jp / vi"); });
  S.questions.forEach((q, i) => {
    const w = `${W} câu hỏi nghe #${i + 1}`;
    opts4(w, q);
    if (!S.script[q.ev && q.ev[0]]) err(w, `ev [${q.ev}] không trỏ tới lời thoại nào`);
    if (!q.tip) err(w, "thiếu mẹo");
  });

  // Hán tự
  L.kanji.forEach((k) => {
    const w = `${W} Hán tự ${k.c}`;
    if (!k.hv || !k.vi || !k.words || !k.words.length || !k.use) err(w, "thiếu hv / vi / words / use");
    if (!KANJIVG[k.c]) err(w, "chưa có dữ liệu nét chữ (chạy lại tools/build_kanjivg.py)");
    else if (!KANJIVG[k.c].p.length) err(w, "dữ liệu nét chữ rỗng");
    if (!KPARTS[k.c] || !KPARTS[k.c].rad) err(w, "chưa có bộ thủ (chạy lại tools/build_kanjiparts.py)");
    if (!KMEMO[k.c]) err(w, "chưa có câu gợi nhớ trong data/kanjimemo.js");
    if (kanjiSeen.has(k.c)) err(w, `trùng với bài ${kanjiSeen.get(k.c)}`);
    kanjiSeen.set(k.c, c.id);
  });
}

// ---------- 3. Đề thi ----------
const ids = new Set();
const partsOf = (e) => e.parts || [{ name: "", minutes: e.minutes, sections: e.sections }];
EXAMS.forEach((e) => {
  if (ids.has(e.id)) err(`đề ${e.id}`, "id bị trùng");
  ids.add(e.id);
  const qs = new Set();
  partsOf(e).forEach((p, pi) => {
    if (!(p.minutes > 0)) err(`đề ${e.id} phần thi ${pi + 1}`, "thiếu thời gian làm bài");
    p.sections.forEach((s, si) => {
      (s.listen || []).forEach(([sp]) => { if (!["F", "M"].includes(sp)) err(`đề ${e.id} mục ${si + 1}`, `người nói phải là F/M: ${sp}`); });
      s.items.forEach((it, ii) => {
        const w = `đề ${e.id} (${p.name || "bài"}) ${s.name} câu ${ii + 1}`;
        // Câu nghe 発話表現 / 即時応答 có 3 phương án như đề thật; còn lại 4.
        if (it.spoken) { if (it.o.length !== 3 || new Set(it.o).size !== 3 || !(it.a >= 0 && it.a < 3)) err(w, "câu nghe không in phương án cần đúng 3 phương án khác nhau"); }
        else opts4(w, it);
        if (!it.ex) err(w, "thiếu giải thích");
        (it.listen || []).forEach(([sp, t]) => { if (!["F", "M"].includes(sp) || !t) err(w, `lời thoại sai định dạng (người nói F/M): ${sp}`); });
        const key = it.q + "|" + it.o[it.a] + "|" + (it.ask || "") + "|" + ((it.listen || [])[0] || [])[1];
        if (qs.has(key)) err(w, "trùng câu trong cùng một đề");
        qs.add(key);
      });
    });
  });
});

const gen = EXAMS.filter((e) => e.generated);
const PLAN = ctx.EXAM_PLAN || {};
// Số câu từng dạng theo đề thật (N5/N4 từ 2020).
const SECT = { "漢字読み": "yomi", "表記": "hyoki", "文脈規定": "bunmyaku", "言い換え類義": "iikae", "用法": "youhou", "文法形式の判断": "bunpo", "文の組み立て": "star",
  "文章の文法": 4, "内容理解（短文）": "tanbun", "内容理解（中文）": "chubun", "情報検索": "joho", "課題理解": "kadai", "ポイント理解": "point", "発話表現": "hatsuwa", "即時応答": "sokuji" };
for (const lv of ["N5", "N4"]) {
  const list = gen.filter((e) => e.group === lv);
  if (list.length !== 20) err("examgen", `cần 20 đề ${lv}, có ${list.length}`);
  const plan = PLAN[lv]; if (!plan) { err("examgen", `thiếu EXAM_PLAN.${lv}`); continue; }
  const all = {};
  list.forEach((e) => {
    if (!e.parts || e.parts.length !== 3) return err(`đề ${e.id}`, "cần 3 phần thi");
    e.parts.forEach((p, pi) => { if (p.minutes !== plan.min[pi]) err(`đề ${e.id}`, `${p.name}: ${p.minutes} phút, cần ${plan.min[pi]}`); });
    const names = e.parts.flatMap((p) => p.sections.map((s) => s.name.replace(/^もんだい\d+\s*/, "")));
    Object.entries(SECT).forEach(([nm, k]) => {
      const need = typeof k === "number" ? k : plan[k];
      const s = e.parts.flatMap((p) => p.sections).find((x) => x.name.replace(/^もんだい\d+\s*/, "") === nm);
      if (!need) return;
      if (!s) return err(`đề ${e.id}`, `thiếu dạng ${nm}`);
      if (s.items.length !== need) err(`đề ${e.id}`, `${nm} có ${s.items.length}/${need} câu`);
      (all[nm] = all[nm] || []).push(...s.items.map((it) => it.q + "|" + (it.ask || "") + "|" + it.o[it.a] + "|" + (s.passage || "").slice(0, 30)));
    });
    if (names.length !== new Set(names).size) err(`đề ${e.id}`, "lặp tên dạng câu");
  });
  // Tỉ lệ lặp câu giữa 20 đề (chỉ cảnh báo).
  Object.entries(all).forEach(([nm, arr]) => { const p = Math.round(100 * (1 - new Set(arr).size / arr.length)); if (p > 0) warn(`đề ${lv}`, `${nm}: ${p}% câu lặp giữa các đề`); });
}

// ---------- Phạm vi ngữ pháp của ngân hàng câu N5 (constitution II) ----------
// Các mẫu thuộc bài 26 trở đi (N4) không được xuất hiện trong ngân hàng N5. Danh sách theo dấu hiệu chữ,
// tránh khớp nhầm (vd. だれのです, そうですか là N5 hợp lệ).
const N4_MARKS = [["thể khả năng (bài 27)", /(られ|れ)ませ|られる|られます|(行け|書け|読め|話せ|使え|飲め|来られ)[なまる]/],
  ["～ので (bài 39)", /(る|た|い|だ|な) ?ので/], ["～んです (bài 26)", /(る|った|いた|した|きた|ない|かった)んです|んですが/], ["～ように (bài 36)", /ように/],
  ["～ながら (bài 28)", /ながら/], ["～つもり (bài 31)", /つもり/], ["～て おく (bài 30)", /て ?(おきま|おいて|おいた|おく)/], ["～て しまう (bài 29)", /て ?しま[いっう]/],
  ["使役／受身 (bài 37, 48)", /させ|られまし/]];
(() => {
  const B = (ctx.BANK || {}).N5; if (!B) return;
  const strs = [];
  const walk = (x, p) => { if (typeof x === "string") strs.push([p, x]); else if (Array.isArray(x)) x.forEach((y, i) => walk(y, `${p}[${i}]`)); else if (x && typeof x === "object") Object.entries(x).forEach(([k, v]) => walk(v, `${p}.${k}`)); };
  walk(B, "N5");
  strs.forEach(([p, t]) => {
    if (!/[ぁ-んァ-ン]/.test(t)) return; // bỏ qua giải thích thuần tiếng Việt
    N4_MARKS.forEach(([name, re]) => { const m = t.match(re); if (m) err(`data/bank_n5.js ${p}`, `dùng ngữ pháp N4 — ${name}: "${m[0]}" trong ${t.slice(0, 40)}`); });
  });
})();

// ---------- Kiến thức nền & N3–N1 ----------
const H = ctx.HUBDATA || {};
(H.jita || []).forEach((r, i) => { if (r.length !== 8 || r.slice(0, 7).some((x) => !x)) err("data/hub_data.js", `cặp tự/tha #${i + 1} sai định dạng`); });
Object.entries(H.fukushi || {}).forEach(([g, l]) => l.forEach((r) => { if (r.length !== 5 || !r[0] || !r[2]) err("data/hub_data.js", `phó từ ${g}: ${r[0]} sai định dạng`); }));
(H.kaiwa || []).forEach((k) => k.lines.forEach((l) => { if (l.length !== 3 || !l[1] || !l[2]) err("data/hub_data.js", `hội thoại ${k.title}: dòng sai định dạng`); }));
Object.entries(ctx.ADV || {}).forEach(([lv, D]) => {
  const seenP = new Set();
  D.grammar.forEach((g) => { if (g.length !== 6 || g.slice(0, 5).some((x) => !x)) err(`data/advanced.js ${lv}`, `mẫu ${g[0]} sai định dạng`); if (seenP.has(g[0])) err(`data/advanced.js ${lv}`, `trùng mẫu ${g[0]}`); seenP.add(g[0]); });
});

// ---------- 4. Từ điển cách đọc ----------
// (RegExp tạo trong vm context khác nên không dùng instanceof được.)
const isRegExp = (x) => Object.prototype.toString.call(x) === "[object RegExp]";
YOMI.forEach((e, i) => { if (!isRegExp(e[0]) || typeof e[1] !== "string") err("js/yomi.js", `mục #${i + 1} phải là [RegExp, chuỗi]`); });

// ---------- Kết quả ----------
const lessons = Object.keys(LESSONS).length;
const vocab = Object.values(LESSONS).reduce((n, L) => n + (L.vocab || []).length, 0);
console.log(`Đã kiểm tra: ${lessons} bài, ${vocab} từ vựng, ${kanjiSeen.size} Hán tự, ${EXAMS.length} đề (${gen.length} đề sinh tự động), ${YOMI.length} mục cách đọc.`);
if (warnings.length) { console.log(`\nCẢNH BÁO (${warnings.length}):`); warnings.forEach((w) => console.log("  - " + w)); }
if (errors.length) { console.log(`\nLỖI (${errors.length}):`); errors.slice(0, 200).forEach((e) => console.log("  ✗ " + e)); if (errors.length > 200) console.log(`  … và ${errors.length - 200} lỗi khác`); process.exit(1); }
console.log("\n✓ Không có lỗi.");
