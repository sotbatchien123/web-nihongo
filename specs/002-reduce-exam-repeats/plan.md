# Implementation Plan: Giảm câu lặp giữa các đề N5/N4 xuống tối đa 5%

**Branch**: `002-reduce-exam-repeats` | **Date**: 2026-11-13 | **Spec**: [spec.md](./spec.md)

## Summary

Hiện 22/29 dạng câu lặp 13–79% vì kho câu nhỏ hơn số câu 20 đề cần. Giải pháp: (1) **mẫu sinh có tham số**
(tình huống × danh sách giá trị → nhiều câu cụ thể, đáp án suy ra từ tham số) cho các dạng hội thoại/bảng/
ghi chú; (2) **mở rộng ngân hàng soạn tay** cho dạng khó sinh (言い換え nhiều khung câu, 用法 thêm câu đúng/sai,
文脈規定 kết hợp từ, 文法 N4); (3) mở rộng nguồn câu ★ (thêm câu thoại của bài nghe, tối đa 2 vị trí ★ cho một câu);
(4) đổi cảnh báo lặp thành lỗi khi > 5%.

## Technical Context

**Language/Version**: JavaScript (trình duyệt + Node cho validate)
**Primary Dependencies**: không thêm thư viện; không dùng nguồn ngoài (xem Research)
**Storage**: N/A (dữ liệu tĩnh)
**Testing**: `node tools/repeat_stats.js`, `node tools/validate.js`, thử 40 đề trên trình duyệt
**Constraints**: giữ nguyên `EXAM_PLAN`; câu N5 trong phạm vi bài 1–25; sinh xác định (hạt giống cố định)
**Scale/Scope**: cần thêm ≈ 1.100 câu khác nhau (đo ngày 2026-11-13 bằng `tools/repeat_stats.js`)

## Research (nguồn ngoài)

| Nguồn | Giấy phép | Quyết định |
|---|---|---|
| Tatoeba | CC BY 2.0 FR | Không dùng đợt này: câu không tách cụm (★ cần cụm), không kiểm soát được phạm vi ngữ pháp từng bài, nghĩa tiếng Việt ít |
| JMdict / KANJIDIC | CC BY-SA 4.0 | Không cần: từ vựng – Hán tự đã có trong 50 bài |
| KanjiVG | CC BY-SA 3.0 | Đang dùng (nét, thành phần chữ giống hình cho 表記) |
| Đề / sách thương mại | Có bản quyền | Không dùng (constitution I) |

## Constitution Check

| Nguyên tắc | Đánh giá |
|---|---|
| I. Bản quyền | PASS — câu mới tự soạn/tự sinh từ dữ liệu tự soạn |
| II. Phạm vi | PASS nếu câu N5 qua luật phạm vi trong validate (bắt buộc) |
| III. Sát JLPT | PASS — giữ cấu trúc; mẫu sinh theo đúng tình huống đề thật (mua bán, hẹn giờ, bảng thông tin…) |
| IV. Cổng kiểm tra | Thêm luật lỗi khi lặp > 5%; 情報検索 sinh mới có đáp án tính bằng mã |
| V. Web tĩnh | PASS — chỉ thêm file `data/*.js` |
| VI. Trung thực | Báo cáo số đo trước/sau từng dạng |

## Project Structure

```text
data/bank_tpl_n5.js     # mẫu sinh có tham số cho N5 → đẩy vào BANK.N5 (kadai, hatsuwa, sokuji, tanbun, joho, bunsho, point)
data/bank_tpl_n4.js     # tương tự cho N4
data/bank_n5.js         # + iikae nhiều khung câu, bunmyaku (kết hợp từ)
data/bank_n4.js         # + iikae, youhou, bunmyaku, bunpo
js/examgen.js           # đọc thêm BANK.*.bunmyaku/bunpo/point; ★ thêm câu thoại; iikae nhiều khung
tools/repeat_stats.js   # đo lặp (dùng chung khóa với validate)
tools/validate.js       # lặp > 5% → lỗi
index.html              # nạp bank_tpl_*.js trước examgen.js
```
