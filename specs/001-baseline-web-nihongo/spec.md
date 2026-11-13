# Feature Specification: Web học tiếng Nhật 50 bài (đặc tả nền)

**Feature Branch**: `001-baseline-web-nihongo`

**Created**: 2026-11-13

**Status**: Implemented (đặc tả hồi tố cho phần đã xây dựng, dùng làm mốc rà soát)

**Input**: User description: "Web học tiếng Nhật theo 50 bài Minna no Nihongo: từ vựng & ngữ pháp, bài đọc,
bài nghe, Hán tự, luyện tập, luyện thi JLPT N5/N4 giống đề thật; kiến thức nền (chữ cái, bộ thủ, tổng hợp
ngữ pháp, hội thoại, luyện dịch) và kiến thức N3–N1. Nội dung tự biên soạn, không vi phạm bản quyền."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Học một bài theo lộ trình (Priority: P1)

Người học chọn bài N, xem bảng từ vựng (STT · Hiragana · Kanji · Nghĩa), bấm từ để xem ví dụ và nghe
phát âm, đọc các ô ngữ pháp có giải thích và ví dụ chỉ trong phạm vi bài N.

**Why this priority**: là lõi của lộ trình 50 bài; mọi phần khác dựa trên dữ liệu này.

**Independent Test**: mở `#/l/1/vocab`, thấy đủ từ của bài 1, bấm một dòng mở ví dụ, bấm 🔊 nghe được.

**Acceptance Scenarios**:

1. **Given** bài 1–50, **When** mở Phần 1, **Then** có mục lục, bảng từ vựng và các ô ngữ pháp đánh số có ví dụ 例.
2. **Given** một dòng từ vựng, **When** bấm vào dòng, **Then** hiện cửa sổ có cách đọc, loại từ, nghĩa, ví dụ và liên kết Hán tự của bài.
3. **Given** ví dụ bất kỳ của bài N, **When** rà soát, **Then** không dùng ngữ pháp của bài sau N.

---

### User Story 2 - Đọc hiểu có chú thích (Priority: P1)

Người học đọc bài đọc của bài N với furigana, bấm từng từ xem nghĩa, bật nghĩa từng câu, làm bài tập
và được chỉ ra câu chứa dữ kiện kèm mẹo.

**Why this priority**: yêu cầu gốc của người dùng (Phần 2).

**Independent Test**: mở `#/l/25/read`, bấm một từ thấy nghĩa; trả lời một câu thấy dữ kiện và nút "Xem trong bài".

**Acceptance Scenarios**:

1. **Given** bài đọc, **When** bấm "Ẩn furigana"/"Hiện nghĩa từng câu", **Then** giao diện bật/tắt tương ứng.
2. **Given** một câu hỏi, **When** chọn đáp án, **Then** hiện đúng/sai, câu dữ kiện (đoạn, câu) và mẹo.

---

### User Story 3 - Nghe hiểu (Priority: P1)

Người học phát bài nghe bằng giọng đọc tiếng Nhật của thiết bị (giọng nam/nữ nếu có), chỉnh tốc độ,
ẩn/hiện lời thoại, làm bài tập có chỉ ra lời thoại chứa dữ kiện; có thể nạp file nghe riêng từ máy.

**Why this priority**: yêu cầu gốc (Phần 3); không được phát tán file nghe có bản quyền.

**Independent Test**: mở `#/l/5/listen`, bấm phát, thấy dòng đang đọc được tô sáng; chọn file mp3 từ máy, tải lại trang vẫn còn.

**Acceptance Scenarios**:

1. **Given** máy không có giọng tiếng Nhật, **When** mở trang, **Then** hiện cảnh báo kèm hướng dẫn cài giọng.
2. **Given** người học chọn file nghe, **When** quay lại bài đó, **Then** file vẫn phát được; file không được gửi lên mạng.

---

### User Story 4 - Hán tự (Priority: P2)

Mỗi bài có 8 Hán tự (tổng 400, không trùng) với Hán Việt, On/Kun, nghĩa, từ thường gặp, trường hợp dùng,
hoạt hình thứ tự nét từ một nguồn duy nhất, bộ thủ, thành phần và câu gợi nhớ.

**Why this priority**: yêu cầu gốc (Phần 4), bổ sung theo tài liệu Drive (bộ thủ, mẹo nhớ).

**Independent Test**: mở `#/l/37/kanji`, nét chữ chạy hoạt hình; bảng thông tin có dòng "Bộ thủ".

**Acceptance Scenarios**:

1. **Given** một Hán tự, **When** chọn, **Then** thấy nét chữ đánh số, bộ thủ (tên Hán Việt, nghĩa) và câu gợi nhớ.

---

### User Story 5 - Luyện tập theo bài (Priority: P2)

Thẻ nhớ gõ hiragana/katakana (gõ romaji tự chuyển) rồi chọn nghĩa; trắc nghiệm ngữ pháp; trắc nghiệm
Hán tự chỉ hỏi nghĩa và cách dùng; phạm vi: bài này / bài 1→N / tất cả.

**Independent Test**: mở `#/l/12/practice`, gõ "gakusei" thấy chuyển thành がくせい.

**Acceptance Scenarios**:

1. **Given** thẻ từ có Kanji, **When** gõ đúng cách đọc, **Then** sang bước chọn nghĩa; điểm tính tối đa 2/thẻ.

---

### User Story 6 - Luyện thi JLPT N5/N4 giống đề thật (Priority: P1)

Người học làm 20 đề N5 và 20 đề N4 theo đúng cấu trúc JLPT hiện hành: 3 phần thi có giờ riêng, đủ dạng
câu, nghe 1 lần, câu 発話表現/即時応答 không in phương án; nộp xong có giải thích từng câu và điểm quy đổi.

**Why this priority**: yêu cầu gốc (Phần 6) và yêu cầu "làm lại đề cho giống thật".

**Independent Test**: mở `#/exam/n5-03`, thấy 3 bước 20/40/30 phút; trả lời đúng hết được 67/67 và 180/180.

**Acceptance Scenarios**:

1. **Given** đề N5, **When** đếm câu, **Then** 漢字読み 7 · 表記 5 · 文脈規定 6 · 言い換え 3 · 文法 9 · ★ 4 · 文章の文法 4 · 短文 2 · 中文 2 · 情報検索 1 · 課題 7 · ポイント 6 · 発話 5 · 即時 6.
2. **Given** đề N4, **When** đếm câu, **Then** 7·5·8·4·用法4 · 13·4·4·3·3·2 · 8·7·5·8 và thời gian 25/55/35.
3. **Given** hết giờ một phần, **When** đồng hồ về 0, **Then** phần đó tự nộp và chuyển sang phần sau.
4. **Given** câu 発話表現, **When** đang thi, **Then** chỉ hiện nút 1・2・3, chữ phương án hiện sau khi nộp.

---

### User Story 7 - Kiến thức nền (Priority: P2)

Trang `#/k` gồm: Bài 0 bảng chữ cái + luyện kana; 214 bộ thủ; cặp tự/tha động từ; phó từ; so sánh ngữ pháp
dễ nhầm; từ vựng theo chủ đề & cấp độ; hội thoại tình huống + shadowing; luyện dịch Việt→Nhật; tài liệu
chính thức miễn phí.

**Independent Test**: mở `#/k`, thấy các nhóm chuyên đề; mỗi trang mở được và có phần luyện.

**Acceptance Scenarios**:

1. **Given** trang Hội thoại, **When** bấm Shadowing, **Then** máy đọc từng câu rồi dừng cho người học nói lại.
2. **Given** trang Luyện dịch, **When** ghép đúng thứ tự cụm, **Then** báo đúng và đọc câu mẫu.

---

### User Story 8 - Kiến thức N3–N1 (Priority: P3)

Mỗi cấp N3, N2, N1 có cấu trúc đề, điểm đỗ, lộ trình, sách tham khảo, mẫu ngữ pháp trọng tâm có ví dụ và luyện tập.
Đề thi N3–N1 chưa thuộc phạm vi (người dùng hẹn làm sau).

**Independent Test**: mở `#/k/n2`, thấy bảng cấu trúc đề và danh sách mẫu, bấm "Luyện 10 câu".

---

### Edge Cases

- Trình duyệt chặn localStorage/IndexedDB → trang vẫn chạy, chỉ mất tiện ích lưu.
- Máy không có giọng tiếng Nhật / trình duyệt không hỗ trợ Web Speech → cảnh báo, không vỡ trang.
- Bề rộng 375px → không tràn ngang (bảng dài cuộn trong khung riêng).
- Câu ★ có thể có nhiều thứ tự đúng → bộ sinh loại cửa sổ có ≥2 cụm di chuyển được.
- Bộ sinh không đủ câu hợp lệ cho một dạng → validate báo lỗi số câu.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Hệ thống MUST có dữ liệu cho đủ 50 bài; mỗi bài có từ vựng (có ví dụ), ngữ pháp, 1 bài đọc, 1 bài nghe, 8 Hán tự, quiz ngữ pháp.
- **FR-002**: Nội dung mỗi bài MUST chỉ dùng từ vựng – ngữ pháp trong phạm vi bài đó (constitution II).
- **FR-003**: Bài đọc MUST có token "chữ|đọc|nghĩa" cho mọi từ, nghĩa từng câu, ý đoạn, ý toàn bài, câu hỏi có dữ kiện + mẹo.
- **FR-004**: Bài nghe MUST phát bằng Web Speech API, có từ điển cách đọc (`js/yomi.js`), cảnh báo thiếu giọng, chỉnh tốc độ.
- **FR-005**: Người dùng MUST nạp được file nghe riêng theo từng bài; file lưu cục bộ, không gửi lên mạng.
- **FR-006**: Hán tự MUST có nét chữ từ một nguồn duy nhất (KanjiVG), bộ thủ, thành phần, câu gợi nhớ; 400 chữ không trùng.
- **FR-007**: Luyện Hán tự MUST chỉ hỏi nghĩa và cách dùng/cách đọc trong từ (không hỏi bộ thủ, nét).
- **FR-008**: Có 20 đề N5 + 20 đề N4 sinh cố định theo hạt giống, đúng số câu từng dạng và thời gian (US6).
- **FR-009**: Mọi câu thi MUST có đúng 1 đáp án, 4 phương án khác nhau (3 với 発話/即時) và giải thích tiếng Việt.
- **FR-010**: Phần nghe trong đề MUST chỉ nghe 1 lần; lời thoại hiện sau khi nộp.
- **FR-011**: Kết quả đề MUST có điểm từng phần, điểm quy đổi /180, điểm sàn, ghi rõ là ước tính.
- **FR-012**: Ngân hàng câu N5 MUST nằm trong phạm vi bài 1–25 (constitution II).
- **FR-013**: Trang Kiến thức nền MUST có đủ 10 chuyên đề ở US7 và 3 trang N3/N2/N1 ở US8.
- **FR-014**: Tài liệu có bản quyền tải về MUST nằm ngoài Git (`_tailieu/` trong .gitignore); liên kết ngoài chỉ tới nguồn chính thức.
- **FR-015**: `tools/validate.js` MUST kiểm tra mọi kiểu dữ liệu (bài học, đề, bộ thủ, gợi nhớ, hub, N3–N1) và trả mã 1 khi có lỗi.
- **FR-016**: Giao diện MUST dùng được ở 375px, chế độ sáng/tối, không lỗi console.

### Key Entities

- **Lesson**: id, tiêu đề, vocab[], grammar[], reading, listening, kanji[8], grammarQuiz[].
- **Exam**: id, group (N5/N4), parts[3] → sections[] → items {q, o[3|4], a, ex, listen?, ask?, spoken?, passage?}.
- **Bank**: kho câu tự soạn theo cấp (iikae, youhou, hatsuwa, sokuji, kadai, tanbun, joho, bunsho).
- **Radical / KanjiParts / KanjiMemo**: bộ thủ 214, thành phần chữ, câu gợi nhớ theo Hán tự.
- **HubData / ADV**: dữ liệu chuyên đề nền và kiến thức N3–N1.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: `node tools/validate.js` ra 0 lỗi trên toàn bộ dữ liệu.
- **SC-002**: 40/40 đề làm đúng hết đạt điểm tối đa; mỗi đề đúng số câu từng dạng như US6.
- **SC-003**: 21 trang chính không tràn ngang ở 375px và không có lỗi console.
- **SC-004**: Tỉ lệ câu lặp giữa 20 đề cùng cấp ở mỗi dạng ≤ 50% (mục tiêu; hiện vượt ở các dạng lấy từ ngân hàng câu).
- **SC-005**: 0 file của `_tailieu/` trong Git.

## Assumptions

- Cấp độ từ vựng lấy theo giáo trình (bài 1–25 ≈ N5, 26–50 ≈ N4) vì JLPT không công bố danh sách chính thức.
- Phần nghe dùng giọng tổng hợp của thiết bị; chất lượng phụ thuộc giọng cài trên máy.
- Chủ đề từ vựng gán tự động theo từ khóa, chấp nhận sai lệch nhỏ.
- Triển khai bằng GitHub Pages từ nhánh `main`.
