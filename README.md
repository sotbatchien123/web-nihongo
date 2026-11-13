# Nihongo 50 Bài — web học tiếng Nhật theo lộ trình Minna no Nihongo

**Web trực tuyến:** https://sotbatchien123.github.io/web-nihongo/ · Mã nguồn: https://github.com/sotbatchien123/web-nihongo

> **Quy định:** đọc `GHI_NHO.md` trước khi làm việc với dự án và cập nhật nó cuối mỗi phiên.

Web tĩnh (HTML/CSS/JS thuần, không cần build). 6 phần:

1. **Từ vựng & Ngữ pháp** — bố cục kiểu Riki: mục lục, bảng từ vựng (STT · Hiragana · Kanji · Ý nghĩa), bấm dòng để xem ghi chú và ví dụ; mỗi điểm ngữ pháp là một ô đánh số, có giải thích, thành phần và ví dụ 例 ngay trong ô (chỉ trong phạm vi bài).
2. **Bài đọc** — furigana, bấm từng từ xem nghĩa, nghĩa từng câu, ý từng đoạn, ý toàn bài; bài tập có chỉ ra câu chứa dữ kiện + mẹo.
3. **Bài nghe** — phát bằng giọng đọc tiếng Nhật của trình duyệt (Web Speech API), giọng nam/nữ riêng nếu máy có, cảnh báo khi máy thiếu giọng tiếng Nhật, chỉnh tốc độ, lời thoại ẩn/hiện; bài tập chỉ ra lời thoại chứa dữ kiện, nghe lại đúng câu đó.
4. **Hán tự** — Hán Việt, On/Kun, nghĩa, từ thường gặp, trường hợp sử dụng, hoạt hình thứ tự nét từ một nguồn duy nhất (KanjiVG).
5. **Luyện tập** — thẻ nhớ gõ hiragana/katakana (gõ romaji tự chuyển) rồi chọn nghĩa; trắc nghiệm ngữ pháp; trắc nghiệm Hán tự (cách đọc, nghĩa).
6. **Luyện thi** — 20 đề N5 + 20 đề N4 theo đúng cấu trúc JLPT hiện hành: 3 phần thi giờ riêng (N5 20/40/30 phút, N4 25/55/35), đủ dạng 漢字読み, 表記, 文脈規定, 言い換え, 用法 (N4), 文法, ★, 文章の文法, 短文, 中文, 情報検索, 課題理解, ポイント理解, 発話表現, 即時応答 (nghe 1 lần, phương án không in); kết quả có điểm quy đổi /180 và điểm sàn (ước tính). Mỗi dạng câu lặp tối đa 5% giữa 20 đề cùng cấp (đo bằng `node tools/repeat_stats.js`, validate báo lỗi nếu vượt). Thêm 4 đề ngắn theo mốc bài học.
7. **Kiến thức nền** (`#/k`) — Bài 0 bảng chữ cái + luyện kana; 214 bộ thủ; cặp tự/tha động từ; phó từ; so sánh ngữ pháp dễ nhầm; từ vựng theo chủ đề & cấp độ; hội thoại tình huống + shadowing; luyện dịch Việt→Nhật; tài liệu chính thức miễn phí (Irodori, NHK…); kiến thức N3, N2, N1 (cấu trúc đề, lộ trình, mẫu ngữ pháp trọng tâm + luyện tập).

Phần 3 có ô **nạp file nghe của riêng bạn** (lưu trong trình duyệt bằng IndexedDB, không tải lên mạng). Phần 4 hiện bộ thủ, thành phần chữ và câu gợi nhớ cho 400 Hán tự.

Thư mục `_tailieu/` (tài liệu tham khảo tải từ Drive, có bản quyền) nằm trong `.gitignore` — **không bao giờ đưa lên Git**.

## Quy trình phát triển (Spec Kit)

Dự án dùng [Spec Kit](https://github.com/github/spec-kit) (`specify` CLI 1.4.0, tích hợp Claude):

- **Nguyên tắc dự án**: `.specify/memory/constitution.md` (bản quyền, phạm vi bài, sát JLPT, cổng kiểm tra, web tĩnh, trung thực).
- **Đặc tả nền** của toàn bộ phần đã xây dựng: `specs/001-baseline-web-nihongo/` (spec, plan, tasks + kết quả rà soát Convergence).
- **Tính năng mới** đi theo: `/speckit-specify` → (`/speckit-clarify`) → `/speckit-plan` → `/speckit-tasks` → (`/speckit-analyze`) → `/speckit-implement` → `/speckit-converge`. Mỗi tính năng một thư mục `specs/NNN-ten/`.
- Skill nằm trong `.claude/skills/speckit-*`; script PowerShell trong `.specify/scripts/powershell/` (chạy qua PowerShell, không qua bash).

## Bản quyền nội dung

Danh sách từ của từng bài được đối chiếu với trang tổng hợp của Riki (riki.edu.vn/minna-no-nihongo) để đủ từ theo giáo trình; nghĩa, ví dụ và giải thích ngữ pháp là tự viết, không sao chép văn bản của Riki.

Bài đọc, bài nghe và đề thi trong `data/` là **tự biên soạn** theo từ vựng – ngữ pháp từng bài. Không đưa vào: văn bản / file âm thanh gốc của giáo trình Minna no Nihongo và sách đi kèm (bản quyền 3A Corporation), đề thi JLPT thật (bản quyền Japan Foundation / JEES). Trang Luyện thi liên kết tới đề mẫu chính thức miễn phí của JLPT.

Dữ liệu nét chữ `data/kanjivg.js` lấy từ [KanjiVG](https://kanjivg.tagaini.net) — CC BY-SA 3.0, © Ulrich Apel. Khi deploy phải giữ ghi công này (đã có ở chân trang).

## Chạy thử

Mở `index.html` trực tiếp trên trình duyệt, hoặc chạy máy chủ tĩnh:

```bash
python -m http.server 8765
```

## Cập nhật web trực tuyến

Web chạy bằng GitHub Pages từ nhánh `main` (thư mục gốc). Mỗi lần đẩy code lên `main`, GitHub tự dựng lại trang sau khoảng 1–2 phút:

```bash
node tools/validate.js
git add -A
git commit -m "mô tả thay đổi"
git push
```

Nếu trình duyệt vẫn hiện bản cũ, tải lại trang bằng Ctrl+F5.

## Cấu trúc

```
index.html          khung trang, nạp dữ liệu và script
css/style.css       giao diện (sáng/tối tự động)
js/app.js           định tuyến hash + 6 phần
js/kana.js          chuyển romaji → hiragana/katakana
js/examgen.js       sinh 20 đề N5 + 20 đề N4 từ dữ liệu bài (hạt giống cố định)
js/yomi.js          từ điển cách đọc cho giọng tổng hợp (sửa chữ dễ đọc sai)
tools/validate.js   kiểm tra toàn bộ dữ liệu (node tools/validate.js)
tools/build_kanjivg.py  tạo data/kanjivg.js từ KanjiVG
data/catalog.js     danh mục 50 bài (chủ điểm ngữ pháp)
data/lessonNN.js    dữ liệu từng bài (đủ 01–50)
data/exams.js       đề bài 1–3 + link đề mẫu chính thức
data/exams2.js      đề thi thử theo mốc (1–10, N5, N4)
data/kanjivg.js     nét chữ KanjiVG cho các Hán tự đang dùng
```

## Kiểm tra dữ liệu

Sau mỗi lần sửa dữ liệu hoặc code, chạy (cần Node.js):

```bash
node tools/validate.js
```

Script nạp mọi file theo đúng thứ tự trong `index.html` và kiểm tra: file bài học đã khai báo đủ; từ vựng có đủ trường và ví dụ, không trùng; token bài đọc đúng định dạng `chữ|đọc|nghĩa`; mọi câu hỏi có đúng 4 phương án khác nhau, có giải thích / mẹo; `ev` trỏ đúng câu/lời thoại; Hán tự không trùng giữa các bài và có dữ liệu nét chữ; đề thi hợp lệ; bộ sinh đề tạo đủ 20 đề N5 + 20 đề N4; từ điển cách đọc hợp lệ. Có lỗi thì thoát mã 1; tỉ lệ câu lặp giữa các đề tự sinh chỉ in cảnh báo.

## Thêm bài mới

1. Sao chép `data/lesson03.js` thành `data/lessonNN.js`, đổi `window.LESSONS[NN]` và nội dung.
   - Token câu đọc: `"chữ|cách đọc|nghĩa"` nối bằng `" / "`; dấu câu viết `"。||"`.
   - Ngữ pháp có thể thêm `explain: ["đoạn giải thích", …]` để hiện thêm đoạn giải thích trong ô.
   - `ev` của câu hỏi đọc là `[đoạn, câu]` (đếm từ 0); của câu hỏi nghe là `[dòng]`.
2. Thêm `<script src="data/lessonNN.js"></script>` vào `index.html`.
3. Chạy `node tools/validate.js` để kiểm tra.
4. Nếu có Hán tự mới, tạo lại `data/kanjivg.js` bằng `python tools/build_kanjivg.py data/kanjivg.js "<toàn bộ Hán tự>"` (truyền chuỗi toàn bộ Hán tự cần dùng).
