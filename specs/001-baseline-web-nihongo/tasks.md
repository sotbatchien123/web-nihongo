# Tasks: Web học tiếng Nhật 50 bài (đặc tả nền)

**Input**: Design documents from `/specs/001-baseline-web-nihongo/`
**Prerequisites**: plan.md, spec.md

**Ghi chú**: Phase 1–9 ghi lại công việc đã làm trước khi áp dụng Spec Kit (hồi tố, đã hoàn thành).
Phase Convergence là kết quả rà soát mã nguồn so với spec/plan/constitution ngày 2026-11-13.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Phase 1: Setup (Shared Infrastructure)

- [X] T001 Khung trang, định tuyến hash, giao diện sáng/tối trong `index.html`, `css/style.css`, `js/app.js`
- [X] T002 [P] Bộ chuyển romaji→kana trong `js/kana.js`
- [X] T003 [P] Danh mục 50 bài trong `data/catalog.js`

## Phase 2: Foundational (Blocking Prerequisites)

- [X] T004 Cổng kiểm tra dữ liệu `tools/validate.js`
- [X] T005 [P] Dữ liệu nét chữ `data/kanjivg.js` qua `tools/build_kanjivg.py`
- [X] T006 Git, GitHub Pages, `.gitignore` (gồm `_tailieu/`)

## Phase 3: User Story 1 - Học một bài theo lộ trình (P1) 🎯 MVP

- [X] T007 [US1] Dữ liệu bài 1–50 `data/lesson01.js` … `data/lesson50.js` (đối chiếu danh sách từ với Riki, nội dung tự viết)
- [X] T008 [US1] Phần 1 bố cục kiểu Riki trong `js/app.js` (`viewVocab`)
- [X] T009 [US1] Rà soát phạm vi ngữ pháp từng bài (đã sửa nhiều ví dụ vượt bài)

## Phase 4: User Story 2 - Đọc hiểu (P1)

- [X] T010 [US2] `viewRead`: furigana, nghĩa từ/câu/đoạn, câu hỏi có dữ kiện + mẹo trong `js/app.js`

## Phase 5: User Story 3 - Nghe hiểu (P1)

- [X] T011 [US3] TTS giọng nam/nữ, cảnh báo thiếu giọng, `js/yomi.js`
- [X] T012 [US3] Nạp file nghe riêng (IndexedDB) trong `js/app.js`

## Phase 6: User Story 4 & 5 - Hán tự, Luyện tập (P2)

- [X] T013 [P] [US4] `data/kanjiparts.js` (`tools/build_kanjiparts.py`), `data/radicals.js`, `data/kanjimemo.js`; hiển thị trong `viewKanji`
- [X] T014 [P] [US5] `viewPractice`: thẻ nhớ, quiz ngữ pháp, quiz Hán tự (chỉ nghĩa/cách dùng)

## Phase 7: User Story 6 - Luyện thi JLPT (P1)

- [X] T015 [US6] Bộ sinh `js/examgen.js` theo `EXAM_PLAN` (3 phần, đủ dạng câu)
- [X] T016 [US6] Ngân hàng câu `data/bank_n5.js`, `data/bank_n4.js`
- [X] T017 [US6] `viewExam`: 3 phần giờ riêng, nghe 1 lần, phương án nói, điểm quy đổi
- [X] T018 [US6] Luật kiểm tra số câu/thời gian/3–4 phương án trong `tools/validate.js`

## Phase 8: User Story 7 - Kiến thức nền (P2)

- [X] T019 [US7] `js/hub.js` + `data/hub_data.js`: kana, bộ thủ, tự/tha, phó từ, so sánh ngữ pháp, chủ đề từ vựng, hội thoại + shadowing, luyện dịch, tài liệu chính thức

## Phase 9: User Story 8 - Kiến thức N3–N1 (P3)

- [X] T020 [US8] `data/advanced.js` + trang `#/k/n3`, `#/k/n2`, `#/k/n1`

---

## Phase 10: Convergence

**Purpose**: Close gaps between spec/plan/constitution and current implementation identified by `/speckit-converge` on 2026-11-13.

- [X] T021 [US6] F1 (CRITICAL, contradicts FR-012 / Constitution II): bỏ thể khả năng (bài 27) khỏi ngân hàng N5 — `data/bank_n5.js` kadai「ねられません」「かりられません」, tanbun thư viện「かりられません／かりられる」, joho「行けない」「行けますか」
- [X] T022 [US6] F2 (HIGH, partial FR-015 / Constitution IV): thêm luật validate phát hiện mẫu ngữ pháp N4 (thể khả năng, ので, んです, ように, ながら, つもり, ておく, てしまう, させ) trong ngân hàng N5 — `tools/validate.js`
- [X] T023 [P] [US6] F4 (LOW, partial FR-012): phương án nhiễu「ので」(N4) trong bài 文章の文法 N5 số 3 — đổi sang trợ từ N5 trong `data/bank_n5.js`
- [X] T024 [P] F5 (MEDIUM, partial Governance): ghi quy trình Spec Kit vào `README.md` và cập nhật mục "Việc tiếp theo" đã lỗi thời trong `GHI_NHO.md`
- [X] T025 [US6] F3 (MEDIUM, partial SC-004) — xong qua `specs/002-reduce-exam-repeats` (lặp tối đa 4,2%);: bổ sung ngân hàng câu để tỉ lệ lặp mỗi dạng ≤ 50% (hiện 50–79% ở 言い換え, 用法, 発話表現, 即時応答, 課題理解, 短文) — `data/bank_n5.js`, `data/bank_n4.js`. Nên làm qua spec riêng `002-…`
- [ ] T026 [US3] F6 (LOW, unverified FR-004): nghe thử bằng tai bài nghe và câu nghe trong đề; bổ sung `js/yomi.js` khi đọc sai (cần người dùng)

## Dependencies & Execution Order

- T021 → T022 (luật validate phải chạy trên ngân hàng đã sửa để ra 0 lỗi).
- T023, T024 độc lập.
- T025 lớn, nên tách thành tính năng mới qua `/speckit-specify`.
