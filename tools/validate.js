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
EXAMS.forEach((e) => {
  if (ids.has(e.id)) err(`đề ${e.id}`, "id bị trùng");
  ids.add(e.id);
  if (!(e.minutes > 0)) err(`đề ${e.id}`, "thiếu thời gian làm bài");
  const qs = new Set();
  e.sections.forEach((s, si) => {
    (s.listen || []).forEach(([sp]) => { if (!["F", "M"].includes(sp)) err(`đề ${e.id} phần ${si + 1}`, `người nói phải là F/M: ${sp}`); });
    s.items.forEach((it, ii) => {
      const w = `đề ${e.id} phần ${si + 1} câu ${ii + 1}`;
      opts4(w, it);
      if (!it.ex) err(w, "thiếu giải thích");
      (it.listen || []).forEach(([sp]) => { if (!["F", "M"].includes(sp)) err(w, `người nói phải là F/M: ${sp}`); });
      if (qs.has(it.q) && !it.listen && !s.listen && !s.passage) err(w, "trùng đề bài trong cùng một đề");
      qs.add(it.q);
    });
  });
});

const gen = EXAMS.filter((e) => e.generated);
for (const lv of ["N5", "N4"]) {
  const list = gen.filter((e) => e.group === lv);
  if (list.length !== 20) err("examgen", `cần 20 đề ${lv}, có ${list.length}`);
  const min = lv === "N5" ? [7, 5, 6, 9, 4] : [7, 5, 7, 9, 4];
  list.forEach((e) => e.sections.slice(0, 5).forEach((s, i) => { if (s.items.length < min[i]) err(`đề ${e.id}`, `${s.name} chỉ có ${s.items.length}/${min[i]} câu`); }));
  // Tỉ lệ lặp câu giữa các đề (chỉ cảnh báo)
  const pct = [2, 4].map((si) => { const all = list.flatMap((e) => e.sections[si].items.map((it) => it.q)); return [list[0] && list[0].sections[si].name, Math.round(100 * (1 - new Set(all).size / all.length))]; });
  pct.forEach(([name, p]) => { if (p > 0) warn(`đề ${lv}`, `${name}: ${p}% câu lặp giữa các đề`); });
}

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
