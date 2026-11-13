# GHI NHỚ DỰ ÁN

## Trạng thái hiện tại

- Web trực tuyến: https://sotbatchien123.github.io/web-nihongo/ (GitHub Pages, nhánh `main`, tự dựng lại khi push). Kho công khai: https://github.com/sotbatchien123/web-nihongo.
- Dự án ở `E:\PROJECT\Web nihongo`, quản lý bằng Git (nhánh `main`, remote `origin`). Kiểm tra dữ liệu: `node tools/validate.js` (phải ra 0 lỗi trước khi commit).

- Web tĩnh chạy được đủ 6 phần; dữ liệu đầy đủ cho cả 50 bài (20–60 từ, 2–9 điểm ngữ pháp, 1 bài đọc, 1 bài nghe, 8 Hán tự, 9 câu ngữ pháp mỗi bài; tổng 400 Hán tự) và 4 đề thi thử: bài 1–3 (15 câu, 20 phút), bài 1–10 (18 câu, 25 phút), N5 bài 1–25 (25 câu, 40 phút), N4 bài 26–50 (28 câu, 45 phút) — `data/exams.js`, `data/exams2.js`; cộng 20 đề N5 (43 câu, 45 phút) và 20 đề N4 (44 câu, 55 phút) sinh tự động bởi `js/examgen.js`.
- Phần 1 trình bày theo bố cục Riki: mục lục, bảng từ vựng STT/Hiragana/Kanji/Ý nghĩa, ô ngữ pháp đánh số có giải thích + ví dụ 例.
- Danh sách từ đối chiếu với riki.edu.vn/minna-no-nihongo (chỉ để đủ từ); nghĩa, ví dụ, giải thích là tự viết. Danh sách của Riki có lỗi (vd. bài 7 ghi はし = cầu, かみ = tóc; bài 2 めいし ghi 名詞) — không tin tuyệt đối.
- Âm thanh dùng Web Speech API (giọng ja-JP của máy). Không có file nghe gốc vì bản quyền.
- Tạo lại `data/kanjivg.js`: `python tools/build_kanjivg.py data/kanjivg.js "<toàn bộ Hán tự>"` (cần mạng).

## Việc tiếp theo

- Nghe thử phần nghe bằng tai, bổ sung `js/yomi.js` khi thấy đọc sai.
- Rà soát chất lượng nội dung (người dạy tiếng Nhật đọc duyệt), nhất là bài 41–50 (kính ngữ).
- Giảm lặp câu giữa 40 đề sinh tự động (文脈規定 ~35%, ★ 22–60%): cần thêm câu ví dụ có ngữ cảnh chặt vào dữ liệu bài, hoặc thêm bài nghe (hiện 25 bài nghe/cấp cho 40 lượt).
- Đề sinh tự động chưa có các dạng 言い換え類義, 発話表現, 即時応答, 用法 (N4).

## Nhật ký phiên

### 2026-11-13 — Mở rộng từ tài liệu Drive (đợt 1: chữ cái + bộ thủ)
- Người dùng gửi 7 thư mục Drive (N5–N1, Kaiwa, Giáo trình N4). Đã liệt kê bằng `embeddedfolderview`, tải tài liệu (PDF/xlsx/pptx, bỏ mp3/video/zip) về `_tailieu/` — **đã thêm vào .gitignore, không được đưa lên Git** (sách thương mại, đề JLPT thật có bản quyền). Chỉ đọc để tham khảo kiến thức/format, không chép câu chữ.
- Kế hoạch người dùng duyệt: làm hết phần A (trừ tập viết Hán tự và đề thật), hết phần B; làm lại 40 đề N5–N4 cho giống đề thật; N3–N1 trước mắt chỉ bổ sung kiến thức, đề làm sau; đẩy web sau mỗi đợt.
- Đợt 4 (N3–N1, `data/advanced.js`): mỗi cấp có cấu trúc đề, điểm đỗ, lộ trình, sách tham khảo (tên sách trong Drive), mẫu ngữ pháp trọng tâm (N3 50, N2 50, N1 46) có cách nối/nghĩa/ví dụ tự viết + luyện 10 câu. Chưa làm đề N3–N1 (người dùng hẹn để sau).
- Đợt 3 (Kiến thức nền, `data/hub_data.js` + `js/hub.js`): 49 cặp tự/tha động từ (bảng + luyện が/を), phó từ N5–N4 theo 6 nhóm (+ luyện điền), 16 cặp ngữ pháp dễ nhầm, 12 hội thoại tình huống có chế độ Shadowing (nghe → máy dừng cho nói lại), luyện dịch Việt→Nhật bằng ghép cụm (câu từ ví dụ bài học), từ vựng theo chủ đề/cấp độ (chủ đề gán tự động theo từ khóa nghĩa tiếng Việt, khớp nguyên từ — vẫn còn ~470 từ ở "Khác"), trang tài liệu chính thức miễn phí (Irodori, NHK, Marugoto, Erin, đề mẫu JLPT — đã kiểm tra link 200). Phần 3: nạp file nghe của người dùng (IndexedDB `n50/audio`, theo bài, không tải lên mạng).
- Đợt 2 (đề thi): đọc đề N5 T7/2024 (bản scan — tách ảnh JPEG bằng script vì máy không có pdftoppm/PyMuPDF, cài pip bị chặn) và đề mẫu N4 để đối chiếu dạng câu, độ khó. Làm lại 40 đề tự sinh theo cấu trúc hiện hành: 3 phần thi giờ riêng (N5 20/40/30 phút, N4 25/55/35), N5 67 câu, N4 85 câu; đủ 言い換え, 用法 (N4), 文章の文法, 短文, 中文 (bài đọc của bài học), 情報検索, 課題理解, ポイント理解 (bài nghe của bài học), 発話表現 + 即時応答 (3 phương án không in, máy đọc 1・2・3; nghe 1 lần). 表記 dùng chữ giống hình làm phương án nhiễu như đề thật. Kết quả có điểm quy đổi /180 + điểm sàn (ước tính). Ngân hàng câu tự soạn: `data/bank_n5.js`, `data/bank_n4.js`.
- Hạn chế: kho câu tự soạn còn nhỏ so với 20 đề → lặp 50–79% ở 言い換え/用法/発話/即時/課題 (validate in cảnh báo). Muốn giảm thì thêm câu vào bank.
- Đợt 1: trang mới "Kiến thức nền" (`#/k`, `js/hub.js`): Bài 0 bảng chữ cái (清音, 濁音, 拗音, っ, trường âm, katakana mở rộng, cặp chữ dễ nhầm) + luyện nhận mặt chữ; 214 bộ thủ (`data/radicals.js`, tự soạn tên Hán Việt/nghĩa). Phần 4 Hán tự hiện bộ thủ, thành phần (`data/kanjiparts.js` sinh bằng `tools/build_kanjiparts.py` từ KanjiVG) và câu gợi nhớ (`data/kanjimemo.js`, 400 câu tự viết — là mẹo nhớ theo hình, không phải từ nguyên).

### 2026-11-02 — Đưa web lên mạng
- Tạo kho công khai `sotbatchien123/web-nihongo` (theo lựa chọn của người dùng), đẩy nhánh `main`, thêm `.nojekyll`, bật GitHub Pages (nguồn: `main` /). Trang dựng xong, HTTP 200.
- Kiểm tra trên trang thật: 50 bài, 44 đề, 400 Hán tự nạp đủ; mở thử Từ vựng bài 1, Bài đọc bài 25, Bài nghe bài 50, Hán tự bài 37, Luyện tập bài 12, danh sách đề; làm đề N5 số 7 đúng hết được 43/43; không lỗi console.
- README có địa chỉ web và quy trình cập nhật (validate → commit → push).

### 2026-11-02 — Git + script kiểm tra
- Thêm `tools/validate.js` (chạy `node tools/validate.js`): kiểm tra khai báo file, từ vựng, ngữ pháp, token bài đọc, 4 phương án/đáp án, `ev`, mẹo/giải thích, Hán tự trùng + nét chữ, đề thi, 40 đề tự sinh, `js/yomi.js`. Kết quả hiện tại: 0 lỗi, 4 cảnh báo (tỉ lệ lặp câu ở đề tự sinh). Đã thử làm hỏng bản sao dữ liệu → script bắt đúng lỗi.
- Khởi tạo Git (nhánh `main`), thêm `.gitignore` (bỏ qua `.claude/`, rác hệ điều hành), commit đầu tiên.

### 2026-11-01 (tiếp 8) — sửa phần nghe
- Thêm `js/yomi.js`: từ điển cách đọc cho giọng tổng hợp (何 なん/なに, 方 かた/ほう, 20歳 はたち, 2、3日, ngày tháng đặc biệt sau ～月, 一人/二人, 上手/下手…) — chỉ đổi âm đọc, không đổi chữ hiển thị. Thêm từ mới vào đây khi phát hiện giọng đọc sai.
- `js/app.js` (TTS): chọn giọng nữ / nam riêng nếu máy có (vd. Ayumi/Haruka – Ichiro), giới tính lấy từ độ cao giọng nhân vật (≥1,1 = nữ) hoặc F/M trong đề; cảnh báo `#ttsBanner` kèm hướng dẫn cài giọng khi máy không có giọng tiếng Nhật hoặc trình duyệt không hỗ trợ.
- Kiểm tra: Node thử 19 câu khó → đọc đúng kana; trình duyệt: bài 13 dùng giọng Ichiro (nam), đề N4 dùng Ayumi (nữ), giả lập máy không có giọng ja → hiện cảnh báo, khôi phục → ẩn. Chưa nghe thử bằng tai.

### 2026-11-01 (tiếp 7) — dự án đã chuyển sang E:\PROJECT\Web nihongo
- Thêm `js/examgen.js`: sinh 20 đề N5 (bài 1–25) + 20 đề N4 (bài 26–50) theo cấu trúc JLPT — 漢字読み 7, 表記 5, 文脈規定 6/7, 文法 9, 文の組み立て ★ 4, 読解 1 bài (4 câu), 聴解 2 đoạn (8 câu). Hạt giống cố định → mỗi số đề luôn giống nhau. Phương án nhiễu: biến âm (đục/trong, っ, trường âm), Hán tự đồng âm On, lọc ngữ cảnh để đáp án duy nhất.
- `js/app.js`: trang Luyện thi chia nhóm (theo mốc / N5 / N4), hiện kỷ lục; hỗ trợ `instruction` và nghe theo cả đoạn (`listen` cấp phần, tối đa 2 lần) + hiện lời thoại sau khi nộp. `css/style.css`: lưới đề. `index.html`: thêm `js/examgen.js`.
- Kiểm tra: Node sinh 40 đề, mỗi câu 4 phương án khác nhau, có giải thích, không trùng câu trong cùng đề; trình duyệt: 40/40 đề làm đủ câu, trả lời đúng hết được điểm tối đa, không lỗi console.
- Lưu ý: preview của app vẫn trỏ thư mục cũ → chạy `python -m http.server 8766` trong thư mục dự án để xem thử.

### 2026-11-01 (tiếp 6)
- Thêm 3 đề thi thử theo mốc trong `data/exams2.js` (bài 1–10, N5 bài 1–25, N4 bài 26–50), mỗi đề đủ 4 phần: chữ–từ vựng, ngữ pháp (có câu sắp xếp ★), đọc hiểu, nghe hiểu. Thêm script vào `index.html`; sửa câu giới thiệu trang Luyện thi trong `js/app.js` (N5/N4).
- Kiểm tra: script kiểm dữ liệu đề (4 phương án khác nhau, có giải thích); trình duyệt: 3 đề mở được, đồng hồ đúng, trả lời đúng hết được điểm tối đa, câu nào cũng hiện giải thích, không lỗi console.

### 2026-11-01 (tiếp 5)
- Soạn bài 41–50 (`data/lesson41.js`–`lesson50.js`), đối chiếu danh sách từ Riki (bài 48, 49 không có bảng từ; bài 50 chỉ có vài từ — soạn theo giáo trình). Thêm script vào `index.html`, tạo lại `data/kanjivg.js` (400 chữ).
- Kiểm tra: `node --check` + script kiểm dữ liệu cả 50 bài không lỗi, không trùng Hán tự. Trình duyệt: bài 41–50 đủ 5 tab, bài tập đọc/nghe hiện dữ kiện, có nét chữ, không lỗi console; trang chủ hiện đủ 50 bài, không còn bài "chưa có".

### 2026-11-01 (tiếp 4)
- Soạn bài 31–40 (`data/lesson31.js`–`lesson40.js`), đối chiếu danh sách từ Riki (bài 39 trên Riki không có bảng từ, soạn theo giáo trình). Thêm script vào `index.html` (bằng Edit), tạo lại `data/kanjivg.js` (320 chữ).
- Kiểm tra: `node --check` + script kiểm dữ liệu bài 1–40 không lỗi, không trùng Hán tự. Trình duyệt: bài 31–40 đủ 5 tab, bài tập đọc/nghe hiện dữ kiện, có nét chữ, không lỗi console; trang chủ hiện 40 bài.

### 2026-11-01 (tiếp 3)
- Kiểm tra trên trình duyệt bài 11–20: đủ 5 tab mở được, có nét chữ, không lỗi console.
- Soạn bài 21–30 (`data/lesson21.js`–`lesson30.js`), đối chiếu danh sách từ Riki (bài 22, 24 trên Riki bị cắt, bổ sung theo giáo trình). Thêm script vào `index.html`, tạo lại `data/kanjivg.js` (240 chữ).
- Kiểm tra trên trình duyệt bài 21–30: đủ 5 tab, bài tập đọc/nghe hiện dữ kiện, có nét chữ, không lỗi console; trang chủ hiện 30 bài.
- Lưu ý kỹ thuật: `index.html` dùng xuống dòng CRLF nên thay thế bằng chuỗi "\n" trong script không khớp — thêm thẻ script bằng công cụ Edit. Heredoc Python trong Git Bash có lúc lỗi mã hóa với tiếng Việt → viết script ra file (có `# -*- coding: utf-8 -*-`) rồi chạy.

### 2026-11-01 (tiếp 2)
- Soạn bài 11–20 (`data/lesson11.js`–`lesson20.js`), đối chiếu danh sách từ Riki (danh sách bài 11 trên Riki bị thiếu, đã bổ sung theo giáo trình); động từ bài 14–20 có ghi chú thể て/ない/từ điển/た.
- Thêm script vào `index.html`, tạo lại `data/kanjivg.js` (160 chữ).
- Kiểm tra: `node --check` + script kiểm dữ liệu bài 1–20 không lỗi. CHƯA mở thử bài 11–20 trên trình duyệt.

### 2026-11-01 (tiếp)
- Soạn bài 4–10 (`data/lesson04.js`–`lesson10.js`), bổ sung từ còn thiếu cho bài 1–4, tạo lại `data/kanjivg.js` (80 chữ), thêm script vào `index.html`.
- Đổi giao diện Phần 1 theo bố cục Riki (`js/app.js` viewVocab, `css/style.css`): mục lục, bảng từ vựng, ô ngữ pháp có 例; thêm trường tùy chọn `explain` cho ngữ pháp.
- Kiểm tra: `node --check` mọi file; script kiểm dữ liệu (ev, token, 4 phương án khác nhau, trùng từ, đủ nét chữ) không lỗi; trình duyệt mở đủ 5 tab của bài 5–10, không lỗi console.
- Còn lại: đề mô phỏng mới chỉ phủ bài 1–3.

### 2026-11-01
- Tạo dự án: `index.html`, `css/style.css`, `js/app.js`, `js/kana.js`, `data/catalog.js`, `data/lesson01–03.js`, `data/exams.js`, `data/kanjivg.js`, `tools/build_kanjivg.py`, `README.md`.
- Kiểm tra trên trình duyệt (localhost:8765): bài đọc + chú giải từ, bài tập đọc/nghe có dữ kiện, nét chữ, thẻ nhớ gõ romaji, quiz ngữ pháp/Hán tự, đề thi có hẹn giờ và chấm điểm; giao diện 375px không tràn ngang. Chưa kiểm tra chất lượng giọng đọc trên các máy khác.
- Quyết định: không tải file nghe/văn bản giáo trình và đề JLPT thật (bản quyền); thay bằng nội dung tự biên soạn + link đề mẫu chính thức.
