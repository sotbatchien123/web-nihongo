#!/usr/bin/env node
// Thống kê lặp câu giữa 20 đề mỗi cấp: số câu cần, số câu khác nhau, tỉ lệ lặp. Chạy: node tools/repeat_stats.js
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
for (const [, src] of html.matchAll(/<script src="([^"]+)"><\/script>/g)) if (src !== "js/app.js") vm.runInContext(fs.readFileSync(path.join(ROOT, src), "utf8"), ctx, { filename: src });
// Khóa nhận diện "cùng một câu": đề bài + câu hỏi nghe + đáp án đúng + toàn bộ đoạn văn + câu thoại đầu.
const key = (it, s) => [it.q, it.ask || "", it.o[it.a], (it.passage || s.passage || ""), ((it.listen || [])[0] || [])[1] || ""].join("|");
const rows = [];
for (const lv of ["N5", "N4"]) {
  const by = {};
  ctx.EXAMS.filter((e) => e.group === lv).forEach((e) => e.parts.forEach((p) => p.sections.forEach((s) => {
    const nm = s.name.replace(/^もんだい\d+\s*/, ""); (by[nm] = by[nm] || []).push(...s.items.map((it) => key(it, s)));
  })));
  Object.entries(by).forEach(([nm, arr]) => { const u = new Set(arr).size; rows.push([lv, nm, arr.length, u, Math.round(1000 * (1 - u / arr.length)) / 10]); });
}
if (require.main === module) { rows.forEach((r) => console.log(r.join("\t"))); }
module.exports = { rows, key };
