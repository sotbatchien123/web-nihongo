# Implementation Plan: Web học tiếng Nhật 50 bài (đặc tả nền)

**Branch**: `001-baseline-web-nihongo` | **Date**: 2026-11-13 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-baseline-web-nihongo/spec.md`

## Summary

Web tĩnh một trang (SPA định tuyến bằng hash) phục vụ lộ trình 50 bài Minna no Nihongo, đề luyện thi JLPT
N5/N4 sinh cố định từ dữ liệu bài học + ngân hàng câu tự soạn, trang Kiến thức nền và kiến thức N3–N1.
Toàn bộ dữ liệu là file JS gán vào `window.*`, được `tools/validate.js` kiểm tra trước khi commit.
Plan này mô tả kiến trúc đã xây dựng (hồi tố) để làm chuẩn cho các tính năng sau.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES2020 (trình duyệt hiện đại); Node.js cho script kiểm tra; Python 3 cho script tạo dữ liệu
**Primary Dependencies**: không có thư viện chạy trên web; Google Fonts (Noto Sans JP, Be Vietnam Pro); dữ liệu KanjiVG (CC BY-SA 3.0)
**Storage**: localStorage (tiền tố `n50:`) cho tùy chọn/kỷ lục; IndexedDB `n50/audio` cho file nghe người dùng nạp — đều bọc try/catch
**Testing**: `node tools/validate.js` (kiểm tra dữ liệu, đề, số câu, định dạng); thử trên trình duyệt qua `python -m http.server`
**Target Platform**: trình duyệt máy tính và điện thoại; triển khai GitHub Pages (nhánh `main`, thư mục gốc, có `.nojekyll`)
**Project Type**: web tĩnh (single project)
**Performance Goals**: tải lần đầu < 2 MB JS dữ liệu (lớn nhất `data/kanjivg.js` ~370 KB); chuyển trang tức thời
**Constraints**: không bước build; không gửi dữ liệu người dùng ra ngoài; nội dung tự biên soạn (constitution I)
**Scale/Scope**: 50 bài, 1.970 từ, 400 Hán tự, 44 đề (40 tự sinh), 13 trang Kiến thức nền

## Constitution Check

| Nguyên tắc | Đánh giá | Ghi chú |
|---|---|---|
| I. Bản quyền | PASS | `_tailieu/` trong .gitignore, 0 file bị theo dõi; nội dung tự soạn; chỉ link tài liệu chính thức; ghi công KanjiVG |
| II. Phạm vi bài | **FAIL → sửa** | Ngân hàng N5 có 5 chỗ dùng thể khả năng (bài 27) — xem tasks.md Phase Convergence (F1) |
| III. Sát JLPT | PASS | `EXAM_PLAN` + validate kiểm tra số câu, thời gian; câu nghe 3 phương án |
| IV. Cổng kiểm tra | PARTIAL | validate chưa có luật phát hiện ngữ pháp vượt cấp trong ngân hàng N5 (F2) |
| V. Web tĩnh | PASS | 21 trang không tràn ở 375px, không lỗi console; storage bọc try/catch |
| VI. Trung thực | PASS | Điểm quy đổi, chủ đề, cấp độ đều ghi chú là ước tính; validate in cảnh báo tỉ lệ lặp |

## Project Structure

### Documentation (this feature)

```text
specs/001-baseline-web-nihongo/
├── spec.md
├── plan.md              # File này
├── tasks.md
└── checklists/requirements.md
```

### Source Code (repository root)

```text
index.html               # khung trang + thứ tự nạp script (thứ tự quan trọng)
css/style.css            # token màu sáng/tối, mọi style
js/app.js                # định tuyến, TTS, 6 phần học, Luyện thi, IndexedDB file nghe
js/hub.js                # trang Kiến thức nền (#/k/...) và N3–N1
js/examgen.js            # bộ sinh 40 đề N5/N4 (EXAM_PLAN)
js/kana.js, js/yomi.js   # chuyển romaji→kana; từ điển cách đọc cho TTS
data/catalog.js, data/lessonNN.js           # 50 bài
data/exams.js, data/exams2.js               # 4 đề ngắn soạn tay
data/bank_n5.js, data/bank_n4.js            # ngân hàng câu tự soạn cho đề
data/kanjivg.js, data/kanjiparts.js         # nét chữ, bộ thủ/thành phần (sinh từ KanjiVG)
data/kanjimemo.js, data/radicals.js         # câu gợi nhớ, 214 bộ thủ
data/hub_data.js, data/advanced.js          # chuyên đề nền, kiến thức N3–N1
tools/validate.js                            # cổng kiểm tra
tools/build_kanjivg.py, tools/build_kanjiparts.py
```

**Structure Decision**: single project web tĩnh; dữ liệu tách khỏi giao diện, mỗi loại dữ liệu một file `data/*.js`
có chú thích định dạng ở đầu file.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Bộ sinh đề trộn dữ liệu bài học + ngân hàng soạn tay | Cần 40 đề đủ dạng câu mà dạng 言い換え/発話/即時 không sinh tự động tốt được | Soạn tay toàn bộ 3.000+ câu không khả thi; sinh tự động thuần cho câu vô nghĩa |
