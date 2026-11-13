# Tasks: Giảm câu lặp giữa các đề N5/N4 xuống tối đa 5%

**Input**: spec.md, plan.md trong `/specs/002-reduce-exam-repeats/`

## Format: `[ID] [P?] [Story] Description`

## Phase 1: Setup

- [X] T001 Công cụ đo lặp `tools/repeat_stats.js` (khóa chung với validate)

## Phase 2: Foundational

- [X] T002 [US1] `js/examgen.js`: đọc `BANK.*.bunmyaku`, `BANK.*.bunpo`, `BANK.*.point`; iikae có nhiều khung câu; ★ thêm câu thoại bài nghe và tối đa 2 vị trí ★/câu
- [X] T003 [US1] `index.html`: nạp `data/bank_tpl_n5.js`, `data/bank_tpl_n4.js` trước `js/examgen.js`

## Phase 3: User Story 1 & 2 — Mở rộng kho N5 (P1)

- [X] T004 [P] [US1] Mẫu sinh N5 `data/bank_tpl_n5.js`: 課題理解, ポイント理解, 発話表現, 即時応答, 短文, 情報検索 (đáp án tính từ bảng), 文章の文法
- [X] T005 [P] [US1] (thực hiện trong `data/bank_tpl_n5.js`, không sửa `data/bank_n5.js`): thêm khung câu cho 言い換え, thêm 文脈規定 kết hợp từ

## Phase 4: User Story 1 & 2 — Mở rộng kho N4 (P1)

- [X] T006 [P] [US1] Mẫu sinh N4 `data/bank_tpl_n4.js` (các dạng như T004, dùng ngữ pháp bài 26–50)
- [X] T007 [P] [US1] (thực hiện trong `data/bank_tpl_n4.js`): 言い換え nhiều khung, 用法 thêm câu đúng/sai, 文脈規定 kết hợp từ, 文法形式 bổ sung

## Phase 5: Cổng kiểm tra & xác minh

- [X] T008 [US1] `tools/validate.js`: lặp > 5% mỗi dạng → LỖI; kiểm tra định dạng mục ngân hàng mới
- [X] T009 [US2] Chạy validate (gồm luật phạm vi N5) + repeat_stats; ghi số đo trước/sau
- [X] T010 [US2] Thử trên trình duyệt: làm đúng hết 40 đề đạt tối đa, xem ngẫu nhiên câu mới, không lỗi console

## Phase 6: Polish

- [X] T011 [P] README, GHI_NHO, footer (nguồn câu); cập nhật T025 của 001 thành hoàn thành

## Kết quả (2026-11-13)

| | Trước | Sau |
|---|---|---|
| Dạng câu vượt 5% | 22/29 | 0/29 |
| Lặp cao nhất | 79% (N4 課題理解) | 4,2% (N4 文法形式の判断) |

- Nguồn thêm: mẫu sinh có tham số `data/bank_tpl_n5.js`, `data/bank_tpl_n4.js` (課題, ポイント, 発話, 即時, 短文, 情報検索 có đáp án tính từ bảng, 文章の文法) + câu soạn tay (言い換え 2 khung, 用法 2 câu đúng/từ, 文脈規定 kết hợp từ, 文法 N4, ★ có vị trí ô chỉ định).
- Không dùng nguồn ngoài (lý do: xem plan.md, Research).
- Kiểm tra: validate 0 lỗi (gồm luật phạm vi N5 và luật ≤5%); 40/40 đề trả lời đúng hết đạt 180/180 trên trình duyệt; không lỗi console.

## Convergence (2026-11-13)

Rà soát FR-001…FR-007, SC-001…SC-003 và constitution: không còn khoảng trống cần thêm task.
Câu nghe mới chưa được nghe thử bằng tai — thuộc task T026 của `001-baseline-web-nihongo`.
