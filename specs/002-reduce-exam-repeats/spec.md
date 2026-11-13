# Feature Specification: Giảm câu lặp giữa các đề N5/N4 xuống tối đa 5%

**Feature Branch**: `002-reduce-exam-repeats`

**Created**: 2026-11-13

**Status**: Draft

**Input**: User description: "Có thể dùng các dữ liệu ở các nguồn ngoài có liên quan hoặc nằm ở phạm vi cho phép
để giảm xuống sao cho chỉ có nhiều nhất 5% trùng thôi" (tiếp nối task T025 của 001).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Làm nhiều đề không gặp lại câu cũ (Priority: P1)

Người học làm lần lượt 20 đề N5 (hoặc N4). Ở mỗi dạng câu, gần như mọi câu đều mới; số câu gặp lại
không quá 5% tổng số câu của dạng đó trên 20 đề.

**Why this priority**: câu lặp làm người học nhớ đáp án thay vì luyện kỹ năng, giảm giá trị luyện thi.

**Independent Test**: chạy thống kê lặp trên 20 đề mỗi cấp; mọi dạng câu ≤ 5%.

**Acceptance Scenarios**:

1. **Given** 20 đề N5, **When** gom câu của từng dạng (漢字読み … 即時応答), **Then** tỉ lệ câu trùng mỗi dạng ≤ 5%.
2. **Given** 20 đề N4, **When** gom tương tự (gồm 用法), **Then** mỗi dạng ≤ 5%.
3. **Given** cổng kiểm tra dữ liệu, **When** một dạng vượt 5%, **Then** báo LỖI (không chỉ cảnh báo).

---

### User Story 2 - Câu mới vẫn đúng chuẩn đề thật (Priority: P1)

Các câu được thêm hoặc sinh mới vẫn giữ đúng cấu trúc, số câu, độ khó, phạm vi ngữ pháp và có giải thích như
các câu hiện có.

**Why this priority**: giảm lặp mà làm hỏng chất lượng thì vô nghĩa (constitution II, III).

**Independent Test**: validate 0 lỗi (gồm luật phạm vi N5); mở ngẫu nhiên 3 đề mỗi cấp, đọc thử câu mới.

**Acceptance Scenarios**:

1. **Given** câu mới của đề N5, **When** kiểm tra phạm vi, **Then** không có ngữ pháp N4.
2. **Given** câu 情報検索 sinh mới, **When** tính lại từ bảng, **Then** đáp án đúng là duy nhất.
3. **Given** câu nghe sinh mới, **When** nghe, **Then** lời thoại tự nhiên, có dữ kiện rõ cho đáp án.

---

### User Story 3 - Theo dõi được nguồn câu (Priority: P3)

Người bảo trì xem được thống kê lặp của từng dạng và biết câu đến từ đâu (bài học, ngân hàng soạn tay,
mẫu sinh có tham số, nguồn ngoài nếu có).

**Independent Test**: chạy `node tools/repeat_stats.js` thấy bảng từng dạng.

### Edge Cases

- Kho của một dạng nhỏ hơn số câu cần → phải báo lỗi rõ dạng nào thiếu bao nhiêu.
- Mẫu sinh có tham số tạo hai câu giống hệt nhau → coi là trùng, loại bỏ.
- Một đoạn hội thoại ポイント理解 không được dùng hai lần trong cùng một đề.
- Nguồn ngoài có giấy phép không rõ hoặc không cho phép dùng lại → không dùng.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Mỗi dạng câu của 20 đề N5 và 20 đề N4 MUST có tỉ lệ lặp ≤ 5% (khóa nhận diện: đề bài + câu hỏi
  nghe + đáp án + đầu đoạn văn + câu thoại đầu).
- **FR-002**: Cổng kiểm tra MUST báo lỗi khi một dạng vượt 5%.
- **FR-003**: Bộ sinh MUST phân bổ câu sao cho không dùng lại câu nào trước khi kho của dạng đó cạn.
- **FR-004**: Có thể sinh câu từ mẫu có tham số (hội thoại mua bán, hẹn giờ, bảng thông tin…) nếu mỗi câu sinh ra
  có đúng một đáp án và đáp án được suy ra từ tham số.
- **FR-005**: Nguồn ngoài chỉ được dùng nếu giấy phép cho phép dùng lại kèm ghi công, và nội dung lọt vào đề phải
  qua luật phạm vi; ghi công MUST hiện ở chân trang/README.
- **FR-006**: Câu mới MUST có giải thích tiếng Việt như câu cũ.
- **FR-007**: Cấu trúc đề (số câu từng dạng, thời gian) MUST giữ nguyên.

### Key Entities

- **Template (mẫu sinh)**: họ câu có tham số (danh sách giá trị) → nhiều câu cụ thể có đáp án tính được.
- **Pool (kho dạng câu)**: hợp các câu từ bài học + ngân hàng + mẫu sinh, đã khử trùng, xáo theo hạt giống.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 29/29 dạng câu (14 dạng N5 + 15 dạng N4) có tỉ lệ lặp ≤ 5%.
- **SC-002**: `node tools/validate.js` 0 lỗi, kể cả luật phạm vi N5 và luật ≤ 5%.
- **SC-003**: 40/40 đề làm đúng hết đạt điểm tối đa trên trình duyệt; không lỗi console.

## Assumptions

- Nguồn ngoài đã cân nhắc: Tatoeba (CC BY 2.0 FR) có nhiều câu Nhật nhưng không tách cụm từ (cần cho ★)
  và không đảm bảo phạm vi ngữ pháp từng bài; JMdict (CC BY-SA) chỉ là từ điển. Phương án chính là **mẫu sinh có
  tham số** dựa trên từ vựng tự soạn của 50 bài + ngân hàng soạn tay bổ sung; chỉ dùng nguồn ngoài nếu cần và hợp lệ.
- Đề thật cũng lặp lại chủ điểm/tình huống; câu "khác" nghĩa là khác nội dung cụ thể (đồ vật, giờ, số lượng, lý do…).
- Tỉ lệ lặp đo theo khóa nhận diện ở FR-001 (đã dùng ở `tools/repeat_stats.js`).
