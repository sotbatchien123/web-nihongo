# Nihongo 50 Bài Constitution

## Core Principles

### I. Tôn trọng bản quyền (NON-NEGOTIABLE)

- Văn bản, file âm thanh, hình ảnh của giáo trình thương mại (Minna no Nihongo, Shinkanzen, Soumatome,
  Mimikara, Speed Master, Goukaku Dekiru…) và đề JLPT thật MUST NOT được đưa vào kho mã hay lên web.
- Bài đọc, bài nghe, đề thi, giải thích, ví dụ, câu gợi nhớ MUST là nội dung tự biên soạn. Tài liệu tham
  khảo chỉ được dùng để học cấu trúc, dạng câu, độ khó, danh mục kiến thức chung.
- Thư mục `_tailieu/` (tài liệu tải về để tham khảo) MUST nằm trong `.gitignore`; mỗi lần commit phải
  không có file nào của nó (`git ls-files | grep _tailieu` = 0).
- Tài liệu chính thức miễn phí (Irodori, NHK, JLPT…) chỉ được dẫn link về trang gốc, không sao chép.
- Dữ liệu bên thứ ba có giấy phép mở (KanjiVG, CC BY-SA 3.0) MUST giữ ghi công ở chân trang và README.

Lý do: kho mã và web đều công khai; vi phạm bản quyền có thể khiến kho bị gỡ.

### II. Đúng phạm vi bài học

- Nội dung của bài N (ví dụ, bài đọc, bài nghe, quiz) MUST chỉ dùng từ vựng và ngữ pháp của bài 1…N.
- Ngân hàng câu N5 MUST nằm trong phạm vi bài 1–25; N4 trong bài 1–50. Mẫu ngữ pháp vượt cấp
  (vd. ～ながら, ～させる trong đề N5) MUST bị loại khi rà soát.
- Kiến thức N3–N1 nằm ở trang riêng (`#/k/n3…n1`) và MUST NOT trộn vào 50 bài Minna.

Lý do: người học đi theo lộ trình; gặp ngữ pháp chưa học làm hỏng trải nghiệm và đánh giá sai trình độ.

### III. Mô phỏng sát JLPT

- Đề tự sinh MUST theo cấu trúc JLPT hiện hành: số phần thi, thời gian, số câu từng dạng
  (định nghĩa trong `window.EXAM_PLAN`, được `tools/validate.js` kiểm tra).
- Mỗi câu hỏi MUST có đúng một đáp án đúng, 4 phương án khác nhau (3 với 発話表現 / 即時応答)
  và giải thích tiếng Việt chỉ ra dữ kiện hoặc quy tắc.
- Phương án nhiễu SHOULD mô phỏng kiểu nhiễu của đề thật (biến âm, chữ giống hình, cùng từ loại);
  câu có nguy cơ nhiều đáp án đúng MUST bị loại khỏi bộ sinh.

Lý do: giá trị chính của phần Luyện thi là làm quen với đề thật.

### IV. Cổng kiểm tra dữ liệu

- Mọi thay đổi dữ liệu hoặc mã MUST chạy `node tools/validate.js` ra 0 lỗi trước khi commit.
- Kiểu dữ liệu mới (file `data/*.js` mới, trường mới, dạng câu mới) MUST kèm luật kiểm tra tương ứng
  trong `tools/validate.js` trong cùng thay đổi.
- Thay đổi giao diện MUST được thử trên trình duyệt (máy chủ tĩnh cục bộ) và không có lỗi console.

Lý do: dữ liệu lớn (1.970 từ, 400 Hán tự, 40 đề) chỉ giữ được chất lượng khi có kiểm tra tự động.

### V. Web tĩnh, bền vững

- Web MUST là HTML/CSS/JS thuần, không bước build, không framework; chỉ tải font từ Google Fonts.
- Định tuyến bằng hash; mọi trang MUST chạy khi trình duyệt chặn localStorage/IndexedDB
  (bọc try/catch, lưu trữ chỉ là tiện ích).
- Dữ liệu người dùng (file nghe tự nạp, kỷ lục) MUST chỉ nằm trên máy người dùng, không gửi lên mạng.
- Giao diện MUST dùng được ở bề rộng điện thoại và ở cả chế độ sáng/tối.

Lý do: triển khai bằng GitHub Pages, người học dùng nhiều loại thiết bị.

### VI. Trung thực khi báo cáo

- Báo cáo MUST nêu rõ phần đã kiểm tra, phần chưa kiểm tra và hạn chế còn lại (vd. tỉ lệ lặp câu).
- Không dùng dữ liệu giả hoặc nội dung chưa hoàn thiện rồi báo là xong.
- Phỏng đoán (điểm quy đổi, chủ đề gán tự động, cấp độ từ vựng) MUST được ghi chú là ước tính trên giao diện.

Lý do: người dùng dựa vào báo cáo để quyết định; sai lệch làm mất niềm tin vào cả dự án.

## Ràng buộc nội dung & kỹ thuật

- Ngôn ngữ giao diện, giải thích, tài liệu dự án: tiếng Việt. Câu tiếng Nhật N5–N4 viết cách cụm
  (分かち書き) như giáo trình.
- Định dạng dữ liệu được mô tả ở đầu từng file `data/*.js` và trong `README.md`; thay đổi định dạng MUST
  cập nhật cả hai.
- Giọng đọc dùng Web Speech API; cách đọc dễ sai MUST được bổ sung vào `js/yomi.js` thay vì sửa chữ hiển thị.
- File nguồn có thể dùng CRLF: sửa bằng công cụ chỉnh sửa giữ nguyên kiểu xuống dòng.

## Quy trình phát triển (Spec Kit)

- Tính năng mới hoặc thay đổi lớn MUST đi theo: `/speckit-specify` → (`/speckit-clarify`) →
  `/speckit-plan` → `/speckit-tasks` → (`/speckit-analyze`) → `/speckit-implement`.
  Spec lưu ở `specs/NNN-ten-tinh-nang/`.
- Sửa lỗi nhỏ, sửa nội dung một bài có thể làm trực tiếp, nhưng vẫn qua Cổng kiểm tra (Nguyên tắc IV).
- Mỗi phiên làm việc MUST đọc và cập nhật `GHI_NHO.md` (trạng thái, việc tiếp theo, nhật ký).
- Commit, push, phát hành chỉ khi người dùng yêu cầu; push lên `main` sẽ tự cập nhật GitHub Pages.
- Commit kết thúc bằng dòng `Co-Authored-By` theo quy ước của phiên.

## Governance

- Constitution này ưu tiên hơn mọi quy ước khác của dự án; xung đột phải được sửa theo constitution
  hoặc sửa constitution trước.
- Sửa đổi: ghi lý do trong `GHI_NHO.md`, cập nhật phiên bản theo semver (MAJOR: bỏ/định nghĩa lại
  nguyên tắc; MINOR: thêm nguyên tắc/mục; PATCH: sửa câu chữ), cập nhật ngày sửa đổi.
- Kiểm tra tuân thủ: mục "Constitution Check" của mỗi plan và báo cáo `/speckit-analyze` MUST đối
  chiếu với 6 nguyên tắc trên; vi phạm ở Nguyên tắc I luôn là mức CRITICAL.

**Version**: 1.0.0 | **Ratified**: 2026-11-13 | **Last Amended**: 2026-11-13
