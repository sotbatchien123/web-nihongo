// Đề luyện thi mô phỏng định dạng JLPT N5 — câu hỏi TỰ BIÊN SOẠN (không phải đề thi thật).
// Đề thi thật của JLPT thuộc bản quyền Japan Foundation / JEES; xem đề mẫu chính thức trong OFFICIAL_LINKS.
window.OFFICIAL_LINKS = [
  { name: "JLPT – Đề mẫu chính thức (Sample Questions)", url: "https://www.jlpt.jp/e/samples/forlearners.html" },
  { name: "JLPT – Cấu trúc đề thi theo cấp độ", url: "https://www.jlpt.jp/e/guideline/testsections.html" }
];

window.EXAMS = [
  {
    id: "n5-mock-1",
    name: "Đề mô phỏng N5 số 1 (phạm vi bài 1–3)",
    minutes: 20,
    sections: [
      {
        name: "もじ・ごい (Chữ – Từ vựng)",
        items: [
          { q: "＿＿の ことばは ひらがなで どう かきますか。\n私は 学生です。（学生）", o: ["がくせい", "がっせい", "かくせい", "がくせえ"], a: 0, ex: "学 (ガク) + 生 (セイ) = がくせい. がっ chỉ xuất hiện khi theo sau là âm k (学校)." },
          { q: "＿＿の ことばは ひらがなで どう かきますか。\nあれは 会社の 車です。（車）", o: ["くるま", "しゃ", "くろま", "ぐるま"], a: 0, ex: "車 đứng riêng đọc くるま; シャ chỉ dùng trong từ ghép (電車)." },
          { q: "＿＿の ことばは どう かきますか。\nこれは にほんごの ほんです。（ほん）", o: ["本", "木", "体", "休"], a: 0, ex: "本 (sách). 木 (cây) thiếu nét ngang ngắn phía dưới — bẫy thường gặp." },
          { q: "（　）に なにを いれますか。\nトイレは 2（　）です。", o: ["かい", "さい", "えん", "じん"], a: 0, ex: "Nói vị trí trong tòa nhà → tầng (階 かい)." },
          { q: "＿＿の ぶんと だいたい おなじ いみの ぶんは どれですか。\nあの かたは せんせいです。", o: ["あの ひとは きょうしです。", "あの ひとは がくせいです。", "あの ひとは いしゃじゃ ありません。", "あの ひとは かいしゃいんです。"], a: 0, ex: "せんせい (cách gọi) ≈ きょうし (nghề giáo viên). Câu 3 dù đúng một phần nhưng không cùng nghĩa." }
        ]
      },
      {
        name: "ぶんぽう (Ngữ pháp)",
        items: [
          { q: "ミラーさんは IMC（　）しゃいんです。", o: ["の", "は", "を", "が"], a: 0, ex: "N1 の N2: nhân viên thuộc IMC (bài 1)." },
          { q: "A「それは（　）の ほんですか。」\nB「コンピューターの ほんです。」", o: ["なん", "だれ", "どこ", "どなた"], a: 0, ex: "Trả lời nội dung (máy tính) → なんの (bài 2)." },
          { q: "A「この かさは あなたのですか。」\nB「いいえ、（　）。」", o: ["ちがいます", "そうです", "わたしのです", "どうぞ"], a: 0, ex: "いいえ + phủ định câu danh từ → ちがいます." },
          { q: "A「おくには（　）ですか。」\nB「ベトナムです。」", o: ["どちら", "なん", "いくら", "だれ"], a: 0, ex: "Hỏi lịch sự về đất nước → どちら (bài 3)." },
          { q: "★ に はいる ものは どれですか。\nあれは ＿＿ ＿＿ ＿★＿ ＿＿ か。", o: ["くつ", "の", "イタリア", "です"], a: 0, ex: "Câu đúng: あれは イタリア の くつ です か → vị trí ★ (thứ 3) là くつ. Mẹo: ghép cụm N の N trước; です luôn đứng sát か cuối câu." }
        ]
      },
      {
        name: "どっかい (Đọc hiểu)",
        passage: "わたしは リンです。タイから きました。さくらだいがくの がくせいです。\nこちらは ハンさんです。ハンさんは ベトナムじんです。ハンさんも さくらだいがくの がくせいです。ハンさんは 19さいです。わたしは 21さいです。",
        items: [
          { q: "ハンさんは なんさいですか。", o: ["19さい", "21さい", "20さい", "わかりません"], a: 0, ex: "Câu “ハンさんは 19さいです”. 21さい là tuổi của người viết (リン) — phương án nhiễu." },
          { q: "ただしい ものは どれですか。", o: ["リンさんと ハンさんは おなじ だいがくの がくせいです。", "リンさんは ベトナムじんです。", "ハンさんは タイから きました。", "ハンさんは せんせいです。"], a: 0, ex: "Trợ từ も trong “ハンさんも さくらだいがくの がくせいです” cho biết hai người cùng trường." }
        ]
      },
      {
        name: "ちょうかい (Nghe hiểu)",
        items: [
          { q: "おとこの ひとの かばんは どれですか。", listen: [["F", "すみません、この かばんは あなたのですか。"], ["M", "いいえ、ちがいます。わたしのは あの かばんです。"]], o: ["あの かばん", "この かばん", "その かばん", "おんなの ひとの かばん"], a: 0, ex: "Sau ちがいます người nam nói rõ: わたしのは あの かばんです — の thay cho かばん." },
          { q: "ワインは いくらですか。", listen: [["M", "すみません、この ワインは いくらですか。"], ["F", "それは 2,500えんです。"], ["M", "あの ワインは？"], ["F", "あれは 5,200えんです。"], ["M", "じゃ、この ワインを ください。"]], o: ["2,500えん", "5,200えん", "7,700えん", "2,050えん"], a: 0, ex: "Người nam cuối cùng chọn この ワイン — tức chai được hỏi đầu tiên (2,500えん). Câu hỏi nghe luôn chú ý quyết định cuối cùng." },
          { q: "じむしょは なんがいですか。", listen: [["F", "すみません、じむしょは 3がいですか。"], ["M", "いいえ、3がいは きょうしつです。じむしょは 5かいです。"]], o: ["5かい", "3がい", "1かい", "ちか"], a: 0, ex: "3がい bị phủ định (là phòng học). Thông tin đúng nằm sau いいえ." }
        ]
      }
    ]
  }
];
