// Bài 1 — nội dung tự biên soạn theo phạm vi từ vựng/ngữ pháp bài 1 Minna no Nihongo.
// Định dạng token câu: "chữ|cách đọc|nghĩa" cách nhau bởi " / ". Cách đọc để trống nếu chữ đã là kana.
window.LESSONS[1] = {
  id: 1,
  title: "はじめまして",
  titleVi: "Rất vui được gặp bạn",
  vocab: [
    { w: "私", r: "わたし", vi: "tôi", t: "đại từ", ex: [["私は マイク・ミラーです。", "Tôi là Mike Miller."], ["私も 学生です。", "Tôi cũng là sinh viên."]] },
    { w: "私たち", r: "わたしたち", vi: "chúng tôi, chúng ta", t: "đại từ", ex: [["私たちは 会社員です。", "Chúng tôi là nhân viên công ty."]] },
    { w: "あなた", r: "あなた", vi: "bạn, anh, chị (ngôi thứ hai)", t: "đại từ", ex: [["あなたは 学生ですか。", "Bạn là sinh viên phải không?"]], note: "Ít dùng với người trên; thường gọi bằng tên + さん." },
    { w: "あの人", r: "あのひと", vi: "người kia, người đó", t: "đại từ", ex: [["あの人は だれですか。", "Người kia là ai vậy?"]] },
    { w: "あの方", r: "あのかた", vi: "vị kia (lịch sự của あの人)", t: "đại từ", ex: [["あの方は どなたですか。", "Vị kia là ai ạ?"]] },
    { w: "～さん", r: "さん", vi: "anh, chị, ông, bà (hậu tố gắn sau tên người khác)", t: "hậu tố", ex: [["ミラーさんは アメリカ人です。", "Anh Miller là người Mỹ."]], note: "Không dùng cho chính mình." },
    { w: "～ちゃん", r: "ちゃん", vi: "bé ~ (hậu tố thân mật cho trẻ em)", t: "hậu tố", ex: [["テレーザちゃんは 9歳です。", "Bé Teresa 9 tuổi."]] },
    { w: "～君", r: "くん", vi: "cậu ~ (hậu tố cho bé trai, cấp dưới nam)", t: "hậu tố", ex: [["太郎君は 8歳です。", "Cậu Taro 8 tuổi."]] },
    { w: "～人", r: "じん", vi: "người nước ~", t: "hậu tố", ex: [["私は ベトナム人です。", "Tôi là người Việt Nam."]] },
    { w: "先生", r: "せんせい", vi: "thầy/cô giáo, bác sĩ (dùng để gọi, không dùng cho bản thân)", t: "danh từ", ex: [["ワット先生は イギリス人です。", "Thầy Watt là người Anh."]] },
    { w: "教師", r: "きょうし", vi: "giáo viên (nói về nghề của mình)", t: "danh từ", ex: [["私は 教師です。", "Tôi là giáo viên."]] },
    { w: "学生", r: "がくせい", vi: "học sinh, sinh viên", t: "danh từ", ex: [["サントスさんは 学生じゃ ありません。", "Anh Santos không phải là sinh viên."]] },
    { w: "会社員", r: "かいしゃいん", vi: "nhân viên công ty", t: "danh từ", ex: [["山田さんは 会社員です。", "Anh Yamada là nhân viên công ty."]] },
    { w: "社員", r: "しゃいん", vi: "nhân viên (của công ty ~)", t: "danh từ", ex: [["ミラーさんは IMCの 社員です。", "Anh Miller là nhân viên của IMC."]] },
    { w: "銀行員", r: "ぎんこういん", vi: "nhân viên ngân hàng", t: "danh từ", ex: [["あの人は 銀行員です。", "Người kia là nhân viên ngân hàng."]] },
    { w: "医者", r: "いしゃ", vi: "bác sĩ", t: "danh từ", ex: [["ワンさんは 医者です。", "Anh Wang là bác sĩ."]] },
    { w: "研究者", r: "けんきゅうしゃ", vi: "nhà nghiên cứu", t: "danh từ", ex: [["カリナさんは 研究者じゃ ありません。", "Chị Karina không phải là nhà nghiên cứu."]] },
    { w: "大学", r: "だいがく", vi: "trường đại học", t: "danh từ", ex: [["私は さくら大学の 学生です。", "Tôi là sinh viên Đại học Sakura."]] },
    { w: "病院", r: "びょういん", vi: "bệnh viện", t: "danh từ", ex: [["ワンさんは 神戸病院の 医者です。", "Anh Wang là bác sĩ của Bệnh viện Kobe."]] },
    { w: "だれ", r: "だれ", vi: "ai", t: "từ để hỏi", ex: [["あの人は だれですか。", "Người kia là ai?"]] },
    { w: "どなた", r: "どなた", vi: "vị nào (lịch sự của だれ)", t: "từ để hỏi", ex: [["あの方は どなたですか。", "Vị kia là ai ạ?"]] },
    { w: "～歳", r: "さい", vi: "~ tuổi", t: "hậu tố", ex: [["私は 28歳です。", "Tôi 28 tuổi."]] },
    { w: "何歳", r: "なんさい", vi: "mấy tuổi", t: "từ để hỏi", ex: [["テレーザちゃんは 何歳ですか。", "Bé Teresa mấy tuổi?"]] },
    { w: "おいくつ", r: "おいくつ", vi: "bao nhiêu tuổi (lịch sự)", t: "từ để hỏi", ex: [["失礼ですが、おいくつですか。", "Xin lỗi, anh bao nhiêu tuổi ạ?"]] },
    { w: "はい", r: "はい", vi: "vâng, dạ, có", t: "thán từ", ex: [["はい、学生です。", "Vâng, tôi là sinh viên."]] },
    { w: "いいえ", r: "いいえ", vi: "không", t: "thán từ", ex: [["いいえ、医者じゃ ありません。", "Không, tôi không phải bác sĩ."]] },
    { w: "失礼ですが", r: "しつれいですが", vi: "xin lỗi, cho phép tôi hỏi… (mở đầu câu hỏi riêng tư)", t: "cụm chào hỏi", ex: [["失礼ですが、お名前は？", "Xin lỗi, tên anh là gì ạ?"]] },
    { w: "お名前は？", r: "おなまえは", vi: "tên bạn là gì?", t: "cụm chào hỏi", ex: [["お名前は？ ―― イーです。", "Tên chị là gì? — Là Lee."]] },
    { w: "初めまして", r: "はじめまして", vi: "rất hân hạnh (lần đầu gặp mặt)", t: "cụm chào hỏi", ex: [["初めまして。ミラーです。", "Rất hân hạnh. Tôi là Miller."]] },
    { w: "どうぞ よろしく お願いします", r: "どうぞよろしくおねがいします", vi: "rất mong được giúp đỡ", t: "cụm chào hỏi", ex: [["アメリカから 来ました。どうぞ よろしく お願いします。", "Tôi đến từ Mỹ. Rất mong được giúp đỡ."]] },
    { w: "こちらは ～さんです", r: "こちらはさんです", vi: "đây là anh/chị ~ (giới thiệu người khác)", t: "cụm chào hỏi", ex: [["こちらは 山田さんです。", "Đây là anh Yamada."]] },
    { w: "～から 来ました", r: "からきました", vi: "đến từ ~", t: "cụm chào hỏi", ex: [["ベトナムから 来ました。", "Tôi đến từ Việt Nam."]] },
    { w: "アメリカ", r: "アメリカ", vi: "Mỹ", t: "danh từ riêng", ex: [["ミラーさんは アメリカ人です。", "Anh Miller là người Mỹ."]] },
    { w: "ベトナム", r: "ベトナム", vi: "Việt Nam", t: "danh từ riêng", ex: [["私は ベトナム人です。", "Tôi là người Việt Nam."]] },
    { w: "日本", r: "にほん", vi: "Nhật Bản", t: "danh từ riêng", ex: [["山田さんは 日本人です。", "Anh Yamada là người Nhật."]] },
    { w: "皆さん", r: "みなさん", vi: "mọi người, các bạn", t: "đại từ", ex: [["皆さん、初めまして。", "Chào mọi người, rất hân hạnh."]] },
    { w: "エンジニア", r: "エンジニア", vi: "kỹ sư", t: "danh từ", ex: [["シュミットさんは エンジニアです。", "Anh Schmidt là kỹ sư."]] },
    { w: "電気", r: "でんき", vi: "điện, đèn điện", t: "danh từ", ex: [["パワー電気の 社員です。", "Tôi là nhân viên công ty điện Power."]] },
    { w: "イギリス", r: "イギリス", vi: "Anh (nước)", t: "danh từ riêng", ex: [["ワット先生は イギリス人です。", "Thầy Watt là người Anh."]] },
    { w: "インド", r: "インド", vi: "Ấn Độ", t: "danh từ riêng", ex: [["グプタさんは インド人です。", "Anh Gupta là người Ấn Độ."]] },
    { w: "インドネシア", r: "インドネシア", vi: "Indonesia", t: "danh từ riêng", ex: [["インドネシアから 来ました。", "Tôi đến từ Indonesia."]] },
    { w: "韓国", r: "かんこく", vi: "Hàn Quốc", t: "danh từ riêng", ex: [["イーさんは 韓国人です。", "Chị Lee là người Hàn Quốc."]] },
    { w: "タイ", r: "タイ", vi: "Thái Lan", t: "danh từ riêng", ex: [["タイから 来ました。", "Tôi đến từ Thái Lan."]] },
    { w: "中国", r: "ちゅうごく", vi: "Trung Quốc", t: "danh từ riêng", ex: [["ワンさんは 中国人です。", "Anh Wang là người Trung Quốc."]] },
    { w: "ドイツ", r: "ドイツ", vi: "Đức", t: "danh từ riêng", ex: [["シュミットさんは ドイツ人です。", "Anh Schmidt là người Đức."]] },
    { w: "フランス", r: "フランス", vi: "Pháp", t: "danh từ riêng", ex: [["カリナさんは フランス人じゃ ありません。", "Chị Karina không phải người Pháp."]] },
    { w: "ブラジル", r: "ブラジル", vi: "Brazil", t: "danh từ riêng", ex: [["サントスさんは ブラジル人です。", "Anh Santos là người Brazil."]] }
  ],
  grammar: [
    {
      pattern: "N1 は N2 です",
      func: "Câu khẳng định danh từ: giới thiệu, định nghĩa, nêu nghề nghiệp/quốc tịch/tuổi của N1. Tương đương “N1 là N2”.",
      parts: [
        ["は", "Trợ từ chủ đề — đọc là “wa” (không đọc “ha”). Đánh dấu N1 là chủ đề mà câu nói về."],
        ["です", "Kết thúc câu danh từ một cách lịch sự, đóng vai trò như “là”. Không biến đổi theo ngôi hay số."]
      ],
      usage: [
        { rule: "Giới thiệu bản thân / người khác.", ex: [["私は マイク・ミラーです。", "Tôi là Mike Miller."], ["こちらは 山田さんです。", "Đây là anh Yamada."]] },
        { rule: "Nói nghề nghiệp, quốc tịch.", ex: [["サントスさんは ブラジル人です。", "Anh Santos là người Brazil."]] },
        { rule: "Nói tuổi: N は ～歳です.", ex: [["私は 28歳です。", "Tôi 28 tuổi."]] }
      ],
      notes: ["Có thể lược N1 khi đã rõ chủ đề: (私は) ミラーです。", "Không dùng ～さん cho chính mình."]
    },
    {
      pattern: "N1 は N2 じゃ（では） ありません",
      func: "Phủ định của です: “N1 không phải là N2”.",
      parts: [["じゃ ありません", "Dạng văn nói. では ありません (đọc là “dewa”) trang trọng hơn, dùng trong văn viết, phát biểu."]],
      usage: [
        { rule: "Phủ định nghề nghiệp, quốc tịch…", ex: [["サントスさんは 学生じゃ ありません。", "Anh Santos không phải là sinh viên."], ["私は 医者では ありません。", "Tôi không phải là bác sĩ."]] }
      ],
      notes: ["では ở đây đọc là “dewa”."]
    },
    {
      pattern: "S か",
      func: "Biến câu trần thuật thành câu hỏi. Đặt か ở cuối câu, lên giọng nhẹ ở か.",
      parts: [["か", "Trợ từ nghi vấn cuối câu. Trật tự từ không đổi."]],
      usage: [
        { rule: "Câu hỏi có/không (Yes/No): trả lời bằng はい / いいえ.", ex: [["ミラーさんは アメリカ人ですか。 ―― はい、アメリカ人です。", "Anh Miller là người Mỹ phải không? — Vâng, là người Mỹ."], ["ミラーさんは 先生ですか。 ―― いいえ、先生じゃ ありません。", "Anh Miller là giáo viên phải không? — Không, không phải giáo viên."]] },
        { rule: "Câu hỏi có từ để hỏi (だれ, どなた, 何歳…): thay phần muốn hỏi bằng từ để hỏi, vị trí giữ nguyên; trả lời trực tiếp, không dùng はい/いいえ.", ex: [["あの方は どなたですか。 ―― ワット先生です。", "Vị kia là ai ạ? — Là thầy Watt."], ["テレーザちゃんは 何歳ですか。 ―― 9歳です。", "Bé Teresa mấy tuổi? — 9 tuổi."]] }
      ],
      notes: ["Trong bài 1 dấu chấm câu vẫn là 「。」, không cần 「？」."]
    },
    {
      pattern: "N も",
      func: "“Cũng” — dùng thay は khi nội dung giống với điều vừa nói về người/vật trước.",
      parts: [["も", "Thay thế trợ từ は (không dùng は も)."]],
      usage: [
        { rule: "Khẳng định giống nội dung trước.", ex: [["ミラーさんは 会社員です。グプタさんも 会社員です。", "Anh Miller là nhân viên công ty. Anh Gupta cũng là nhân viên công ty."]] },
        { rule: "Hỏi “cũng … phải không?”: trả lời はい、～も… hoặc いいえ、～は…じゃ ありません.", ex: [["ワンさんも 研究者ですか。 ―― いいえ、ワンさんは 医者です。", "Anh Wang cũng là nhà nghiên cứu à? — Không, anh Wang là bác sĩ."]] }
      ],
      notes: ["Khi trả lời phủ định, đổi も về lại は."]
    },
    {
      pattern: "N1 の N2",
      func: "Trợ từ の nối hai danh từ; N1 bổ nghĩa cho N2. Trong bài 1: N1 là tổ chức/nơi chốn mà N2 thuộc về.",
      parts: [["の", "“của”, “thuộc” — N1 đứng trước, N2 là danh từ chính (ngược trật tự tiếng Việt)."]],
      usage: [
        { rule: "Nơi làm việc/học tập của người.", ex: [["ミラーさんは IMCの 社員です。", "Anh Miller là nhân viên của IMC."], ["私は さくら大学の 学生です。", "Tôi là sinh viên Đại học Sakura."]] }
      ],
      notes: ["Phạm vi bài 1 chỉ có nghĩa “thuộc tổ chức”. Các nghĩa khác của の (sở hữu, nội dung, xuất xứ…) được mở rộng ở bài 2, 3."]
    },
    {
      pattern: "～さん / ～ちゃん / ～君",
      func: "Hậu tố gắn sau tên (họ hoặc tên) để tỏ lịch sự / thân mật.",
      parts: [["さん", "Dùng rộng rãi cho cả nam, nữ."], ["ちゃん・君", "ちゃん cho trẻ em; 君 (くん) cho bé trai."]],
      usage: [
        { rule: "Gọi người nghe bằng tên + さん thay cho あなた.", ex: [["ミラーさんは 学生ですか。", "Anh Miller (= bạn) là sinh viên à?"]] }
      ],
      notes: ["Không bao giờ dùng さん sau tên của chính mình."]
    }
  ],
  reading: {
    title: "自己紹介",
    titleVi: "Tự giới thiệu",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1.",
    paragraphs: [
      {
        s: [
          { t: "初めまして|はじめまして|rất hân hạnh / 。||", vi: "Rất hân hạnh được gặp các bạn." },
          { t: "私|わたし|tôi / は||(chủ đề) / グエン・アン||Nguyễn An / です||là / 。||", vi: "Tôi là Nguyễn An." },
          { t: "ベトナム||Việt Nam / から||từ / 来ました|きました|đã đến / 。||", vi: "Tôi đến từ Việt Nam." },
          { t: "私|わたし|tôi / は||(chủ đề) / さくら大学|さくらだいがく|Đại học Sakura / の||của / 学生|がくせい|sinh viên / です||là / 。||", vi: "Tôi là sinh viên Đại học Sakura." },
          { t: "20歳|はたち|20 tuổi / です||là / 。||", vi: "Tôi 20 tuổi." }
        ],
        vi: "Đoạn 1: An tự giới thiệu tên, quê (Việt Nam), trường (Đại học Sakura) và tuổi (20)."
      },
      {
        s: [
          { t: "こちら||đây (người này) / は||(chủ đề) / 田中|たなか|Tanaka / さん||anh/chị / です||là / 。||", vi: "Đây là anh Tanaka." },
          { t: "田中|たなか|Tanaka / さん||anh / は||(chủ đề) / 日本人|にほんじん|người Nhật / です||là / 。||", vi: "Anh Tanaka là người Nhật." },
          { t: "田中|たなか|Tanaka / さん||anh / も||cũng / さくら大学|さくらだいがく|Đại học Sakura / の||của / 学生|がくせい|sinh viên / です||là / 。||", vi: "Anh Tanaka cũng là sinh viên Đại học Sakura." },
          { t: "田中|たなか|Tanaka / さん||anh / は||(chủ đề) / 22歳|にじゅうにさい|22 tuổi / です||là / 。||", vi: "Anh Tanaka 22 tuổi." }
        ],
        vi: "Đoạn 2: An giới thiệu bạn Tanaka — người Nhật, cùng trường, 22 tuổi."
      },
      {
        s: [
          { t: "あの||kia / 方|かた|vị / は||(chủ đề) / 木村|きむら|Kimura / 先生|せんせい|thầy/cô / です||là / 。||", vi: "Vị kia là cô Kimura." },
          { t: "木村|きむら|Kimura / 先生|せんせい|cô / は||(chủ đề) / さくら大学|さくらだいがく|Đại học Sakura / の||của / 教師|きょうし|giáo viên / じゃ ありません||không phải là / 。||", vi: "Cô Kimura không phải là giáo viên của Đại học Sakura." },
          { t: "神戸病院|こうべびょういん|Bệnh viện Kobe / の||của / 医者|いしゃ|bác sĩ / です||là / 。||", vi: "Cô là bác sĩ của Bệnh viện Kobe." },
          { t: "どうぞ||xin / よろしく||(mong) giúp đỡ / お願いします|おねがいします|xin nhờ / 。||", vi: "Rất mong được mọi người giúp đỡ." }
        ],
        vi: "Đoạn 3: Giới thiệu bà Kimura — được gọi là 先生 nhưng thật ra là bác sĩ ở Bệnh viện Kobe, không phải giáo viên. Kết thúc bằng lời chào mong giúp đỡ."
      }
    ],
    summary: "Toàn bài: Nguyễn An (20 tuổi, người Việt, sinh viên ĐH Sakura) tự giới thiệu, rồi giới thiệu bạn Tanaka (22 tuổi, người Nhật, cùng trường) và bà Kimura (bác sĩ Bệnh viện Kobe). Điểm bẫy: 先生 có thể dùng để gọi bác sĩ, không nhất thiết là giáo viên.",
    questions: [
      { q: "アンさんは 何歳ですか。", o: ["20歳", "22歳", "28歳", "9歳"], a: 0, ev: [0, 4], tip: "Câu hỏi 何歳 → tìm từ có ～歳 trong đoạn nói về chính An (đoạn 1). Đừng nhầm với 22歳 của Tanaka ở đoạn 2. Lưu ý 20歳 đọc đặc biệt là はたち." },
      { q: "田中さんは どこの 学生ですか。", o: ["さくら大学", "神戸病院", "ベトナム", "IMC"], a: 0, ev: [1, 2], tip: "Câu 田中さん も さくら大学の学生です — trợ từ も cho biết Tanaka giống An, nên đáp án là trường của An." },
      { q: "木村先生は 何ですか。（しごと）", o: ["医者", "教師", "学生", "会社員"], a: 0, ev: [2, 2], tip: "Bẫy: thấy 先生 dễ chọn 教師. Câu 2 đoạn 3 phủ định (じゃ ありません) 教師, câu 3 nói rõ 医者. Luôn đọc đến câu phủ định/khẳng định cuối cùng." },
      { q: "正しい ものは どれですか。(Câu nào đúng?)", o: ["田中さんは 日本人です。", "アンさんは 日本人です。", "木村先生は さくら大学の 先生です。", "田中さんは 20歳です。"], a: 0, ev: [1, 1], tip: "Với câu hỏi “câu nào đúng”, kiểm tra từng lựa chọn với từng câu trong bài; loại các lựa chọn mâu thuẫn với câu có ベトナムから, じゃ ありません, 22歳." }
    ]
  },
  listening: {
    title: "パーティーで",
    titleVi: "Ở buổi tiệc",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp tiếng Nhật của trình duyệt.",
    speakers: { A: { name: "山田", pitch: 0.9 }, B: { name: "リン", pitch: 1.25 }, C: { name: "スミス", pitch: 0.7 } },
    script: [
      { sp: "A", jp: "初めまして。山田です。", vi: "Rất hân hạnh. Tôi là Yamada." },
      { sp: "B", jp: "初めまして。リンです。タイから 来ました。", vi: "Rất hân hạnh. Tôi là Linh. Tôi đến từ Thái Lan." },
      { sp: "A", jp: "リンさんは 学生ですか。", vi: "Chị Linh là sinh viên phải không?" },
      { sp: "B", jp: "いいえ、学生じゃ ありません。銀行員です。", vi: "Không, tôi không phải là sinh viên. Tôi là nhân viên ngân hàng." },
      { sp: "A", jp: "そうですか。あの方は どなたですか。", vi: "Vậy à. Vị kia là ai vậy?" },
      { sp: "B", jp: "スミスさんです。スミスさんも 銀行員です。", vi: "Là anh Smith. Anh Smith cũng là nhân viên ngân hàng." },
      { sp: "C", jp: "初めまして。スミスです。イギリス人です。どうぞ よろしく。", vi: "Rất hân hạnh. Tôi là Smith. Tôi là người Anh. Rất mong được giúp đỡ." }
    ],
    questions: [
      { q: "リンさんは どこから 来ましたか。", o: ["タイ", "イギリス", "日本", "アメリカ"], a: 0, ev: [1], tip: "Nghe cụm “～から 来ました” — từ đứng ngay trước から là nước xuất xứ." },
      { q: "リンさんの しごとは 何ですか。", o: ["銀行員", "学生", "医者", "教師"], a: 0, ev: [3], tip: "Chú ý いいえ: 学生 bị phủ định, đáp án nằm ở câu sau đó (銀行員です). Đề nghe hay cài từ bị phủ định làm phương án nhiễu." },
      { q: "スミスさんは 何人ですか。", o: ["イギリス人", "タイ人", "日本人", "アメリカ人"], a: 0, ev: [6], tip: "Quốc tịch = tên nước + 人 (じん). Câu tự giới thiệu cuối cùng của Smith chứa thông tin này." },
      { q: "スミスさんの しごとは 何ですか。", o: ["銀行員", "学生", "会社員", "研究者"], a: 0, ev: [5], tip: "Trợ từ も (“cũng”) báo hiệu thông tin giống người trước: Smith cũng là 銀行員 như Linh." }
    ]
  },
  kanji: [
    { c: "私", hv: "TƯ", on: "シ", kun: "わたし・わたくし", vi: "riêng tư; tôi", words: [["私", "わたし", "tôi"], ["私立", "しりつ", "tư lập (trường tư)"], ["私たち", "わたしたち", "chúng tôi"]], use: "Đứng một mình đọc わたし (thường ngày) hoặc わたくし (rất trang trọng). Trong từ ghép Hán đọc シ." },
    { c: "人", hv: "NHÂN", on: "ジン・ニン", kun: "ひと", vi: "người", words: [["人", "ひと", "người"], ["日本人", "にほんじん", "người Nhật"], ["あの人", "あのひと", "người kia"], ["三人", "さんにん", "ba người"]], use: "Sau tên nước đọc ジン (quốc tịch). Đếm người đọc ニン (三人). Đứng một mình/ sau あの đọc ひと." },
    { c: "先", hv: "TIÊN", on: "セン", kun: "さき", vi: "trước, đi trước", words: [["先生", "せんせい", "thầy/cô, bác sĩ"], ["先週", "せんしゅう", "tuần trước"], ["先に", "さきに", "trước (làm trước)"]], use: "Trong từ ghép đọc セン; đứng riêng đọc さき." },
    { c: "生", hv: "SINH", on: "セイ・ショウ", kun: "い(きる)・う(まれる)", vi: "sống, sinh ra", words: [["学生", "がくせい", "sinh viên"], ["先生", "せんせい", "giáo viên"], ["一生", "いっしょう", "cả đời"]], use: "Phổ biến nhất là セイ trong 学生・先生." },
    { c: "学", hv: "HỌC", on: "ガク", kun: "まな(ぶ)", vi: "học", words: [["学生", "がくせい", "sinh viên"], ["大学", "だいがく", "đại học"], ["学校", "がっこう", "trường học"]], use: "Đứng trước âm k thì ガク biến thành ガッ (学校 → がっこう)." },
    { c: "大", hv: "ĐẠI", on: "ダイ・タイ", kun: "おお(きい)", vi: "to, lớn", words: [["大学", "だいがく", "đại học"], ["大きい", "おおきい", "to lớn"], ["大切", "たいせつ", "quan trọng"]], use: "ダイ trong 大学; タイ trong một số từ như 大切; おお khi là tính từ." },
    { c: "会", hv: "HỘI", on: "カイ", kun: "あ(う)", vi: "gặp, hội họp", words: [["会社", "かいしゃ", "công ty"], ["会社員", "かいしゃいん", "nhân viên công ty"], ["会う", "あう", "gặp"]], use: "Trong từ ghép đọc カイ; động từ 会う đọc あう." },
    { c: "社", hv: "XÃ", on: "シャ", kun: "やしろ", vi: "đền; công ty, xã hội", words: [["会社", "かいしゃ", "công ty"], ["社員", "しゃいん", "nhân viên"], ["社会", "しゃかい", "xã hội"]], use: "Gần như luôn đọc シャ ở trình độ sơ cấp." }
  ],
  grammarQuiz: [
    { q: "私（　）ミラーです。", o: ["は", "の", "か", "も"], a: 0, ex: "Nêu chủ đề của câu “Tôi là Miller” → trợ từ は (đọc wa)." },
    { q: "ミラーさんは IMC（　）社員です。", o: ["の", "は", "も", "か"], a: 0, ex: "N1 の N2: nhân viên thuộc công ty IMC." },
    { q: "サントスさんは 学生（　）。", o: ["じゃ ありません", "じゃ です", "ありません です", "では です"], a: 0, ex: "Phủ định của です là じゃ（では） ありません." },
    { q: "ミラーさんは 会社員です。グプタさん（　）会社員です。", o: ["も", "は", "の", "か"], a: 0, ex: "Nội dung giống câu trước (cũng là nhân viên) → dùng も thay は." },
    { q: "あの方は（　）ですか。―― 木村さんです。", o: ["どなた", "何歳", "おいくつ", "はい"], a: 0, ex: "Câu trả lời là tên người → hỏi “ai” lịch sự: どなた (vì dùng あの方)." },
    { q: "テレーザちゃんは（　）ですか。―― 9歳です。", o: ["何歳", "だれ", "どなた", "何人"], a: 0, ex: "Trả lời bằng ～歳 → hỏi tuổi: 何歳 (với trẻ em)." },
    { q: "ワンさんは 研究者ですか。―― いいえ、（　）。", o: ["研究者じゃ ありません", "研究者です", "はい、研究者です", "研究者も です"], a: 0, ex: "Đã trả lời いいえ thì phần sau phải ở dạng phủ định." },
    { q: "Câu nào SAI?", o: ["私は ミラーさんです。", "あの人は 山田さんです。", "こちらは 木村さんです。", "ミラーさんは アメリカ人です。"], a: 0, ex: "Không gắn さん sau tên của chính mình." },
    { q: "ワンさんも 医者ですか。―― いいえ、ワンさん（　）研究者です。", o: ["は", "も", "の", "か"], a: 0, ex: "Trả lời phủ định câu hỏi có も → đổi lại thành は." }
  ]
};
