// Bài 3 — nội dung tự biên soạn theo phạm vi bài 3 Minna no Nihongo.
window.LESSONS[3] = {
  id: 3,
  title: "これを ください",
  titleVi: "Cho tôi cái này",
  vocab: [
    { w: "ここ", r: "ここ", vi: "chỗ này, ở đây", t: "đại từ nơi chốn", ex: [["ここは 食堂です。", "Đây là nhà ăn."]] },
    { w: "そこ", r: "そこ", vi: "chỗ đó", t: "đại từ nơi chốn", ex: [["そこは 受付です。", "Chỗ đó là quầy lễ tân."]] },
    { w: "あそこ", r: "あそこ", vi: "chỗ kia", t: "đại từ nơi chốn", ex: [["あそこは トイレです。", "Chỗ kia là nhà vệ sinh."]] },
    { w: "どこ", r: "どこ", vi: "ở đâu", t: "từ để hỏi", ex: [["トイレは どこですか。", "Nhà vệ sinh ở đâu?"]] },
    { w: "こちら", r: "こちら", vi: "phía này, chỗ này (lịch sự của ここ)", t: "đại từ", ex: [["エレベーターは こちらです。", "Thang máy ở phía này ạ."]] },
    { w: "そちら", r: "そちら", vi: "phía đó (lịch sự)", t: "đại từ", ex: [["会議室は そちらです。", "Phòng họp ở phía đó."]] },
    { w: "あちら", r: "あちら", vi: "phía kia (lịch sự)", t: "đại từ", ex: [["受付は あちらです。", "Lễ tân ở phía kia ạ."]] },
    { w: "どちら", r: "どちら", vi: "phía nào, đâu (lịch sự của どこ)", t: "từ để hỏi", ex: [["お国は どちらですか。", "Anh là người nước nào ạ?"]] },
    { w: "教室", r: "きょうしつ", vi: "phòng học", t: "danh từ", ex: [["教室は 3階です。", "Phòng học ở tầng 3."]] },
    { w: "食堂", r: "しょくどう", vi: "nhà ăn", t: "danh từ", ex: [["食堂は 地下です。", "Nhà ăn ở tầng hầm."]] },
    { w: "事務所", r: "じむしょ", vi: "văn phòng", t: "danh từ", ex: [["事務所は 2階です。", "Văn phòng ở tầng 2."]] },
    { w: "会議室", r: "かいぎしつ", vi: "phòng họp", t: "danh từ", ex: [["会議室は どこですか。", "Phòng họp ở đâu?"]] },
    { w: "受付", r: "うけつけ", vi: "quầy lễ tân", t: "danh từ", ex: [["受付は あそこです。", "Lễ tân ở kia."]] },
    { w: "部屋", r: "へや", vi: "căn phòng", t: "danh từ", ex: [["ミラーさんの 部屋は どこですか。", "Phòng anh Miller ở đâu?"]] },
    { w: "トイレ（お手洗い）", r: "トイレ", vi: "nhà vệ sinh", t: "danh từ", ex: [["すみません、トイレは どこですか。", "Xin lỗi, nhà vệ sinh ở đâu?"]], note: "お手洗い (おてあらい) lịch sự hơn." },
    { w: "階段", r: "かいだん", vi: "cầu thang bộ", t: "danh từ", ex: [["階段は あちらです。", "Cầu thang ở phía kia."]] },
    { w: "エレベーター", r: "エレベーター", vi: "thang máy", t: "danh từ", ex: [["エレベーターは そこです。", "Thang máy ở đó."]] },
    { w: "国", r: "くに", vi: "đất nước", t: "danh từ", ex: [["お国は どちらですか。", "Đất nước của anh là đâu?"]] },
    { w: "会社", r: "かいしゃ", vi: "công ty", t: "danh từ", ex: [["会社は どちらですか。", "Công ty anh là công ty nào ạ?"]] },
    { w: "家", r: "うち", vi: "nhà", t: "danh từ", ex: [["サントスさんの うちは どこですか。", "Nhà anh Santos ở đâu?"]] },
    { w: "電話", r: "でんわ", vi: "điện thoại", t: "danh từ", ex: [["電話は あそこです。", "Điện thoại ở kia."]] },
    { w: "靴", r: "くつ", vi: "giày", t: "danh từ", ex: [["これは イタリアの 靴です。", "Đây là giày của Ý."]] },
    { w: "ネクタイ", r: "ネクタイ", vi: "cà vạt", t: "danh từ", ex: [["この ネクタイは いくらですか。", "Cà vạt này bao nhiêu tiền?"]] },
    { w: "ワイン", r: "ワイン", vi: "rượu vang", t: "danh từ", ex: [["ワイン売り場は 地下です。", "Quầy rượu vang ở tầng hầm."]] },
    { w: "売り場", r: "うりば", vi: "quầy bán", t: "danh từ", ex: [["時計売り場は 何階ですか。", "Quầy đồng hồ ở tầng mấy?"]] },
    { w: "地下", r: "ちか", vi: "tầng hầm", t: "danh từ", ex: [["靴売り場は 地下です。", "Quầy giày ở tầng hầm."]] },
    { w: "～階", r: "かい", vi: "tầng thứ ~", t: "hậu tố", ex: [["食堂は 5階です。", "Nhà ăn ở tầng 5."]], note: "1階 いっかい, 3階 さんがい, 何階 なんがい." },
    { w: "何階", r: "なんがい", vi: "tầng mấy", t: "từ để hỏi", ex: [["事務所は 何階ですか。", "Văn phòng ở tầng mấy?"]] },
    { w: "～円", r: "えん", vi: "~ yên", t: "hậu tố", ex: [["これは 3,500円です。", "Cái này 3.500 yên."]] },
    { w: "いくら", r: "いくら", vi: "bao nhiêu tiền", t: "từ để hỏi", ex: [["この 時計は いくらですか。", "Đồng hồ này bao nhiêu tiền?"]] },
    { w: "百", r: "ひゃく", vi: "trăm", t: "số từ", ex: [["300円 (さんびゃくえん)", "300 yên"]], note: "300 さんびゃく, 600 ろっぴゃく, 800 はっぴゃく." },
    { w: "千", r: "せん", vi: "nghìn", t: "số từ", ex: [["3,000円 (さんぜんえん)", "3.000 yên"]], note: "3000 さんぜん, 8000 はっせん." },
    { w: "万", r: "まん", vi: "mười nghìn", t: "số từ", ex: [["10,000円 (いちまんえん)", "10.000 yên"]] },
    { w: "すみません", r: "すみません", vi: "xin lỗi (gọi người, hỏi đường)", t: "cụm", ex: [["すみません、エレベーターは どこですか。", "Xin lỗi, thang máy ở đâu?"]] },
    { w: "どうも", r: "どうも", vi: "cảm ơn (ngắn gọn)", t: "cụm", ex: [["どうも。", "Cảm ơn."]] },
    { w: "見せて ください", r: "みせてください", vi: "cho tôi xem", t: "cụm", ex: [["それを 見せて ください。", "Cho tôi xem cái đó."]] },
    { w: "じゃ", r: "じゃ", vi: "vậy thì", t: "liên từ", ex: [["じゃ、これを ください。", "Vậy thì cho tôi cái này."]] },
    { w: "ください", r: "ください", vi: "xin cho tôi", t: "cụm", ex: [["これを ください。", "Cho tôi cái này."]], note: "Mẫu ～を ください học như cụm cố định ở bài này." },
    { w: "ロビー", r: "ロビー", vi: "sảnh, đại sảnh", t: "danh từ", ex: [["ロビーは あそこです。", "Sảnh ở kia."]] },
    { w: "エスカレーター", r: "エスカレーター", vi: "thang cuốn", t: "danh từ", ex: [["エスカレーターは あちらです。", "Thang cuốn ở phía kia."]] },
    { w: "たばこ", r: "たばこ", vi: "thuốc lá", t: "danh từ", ex: [["これは アメリカの たばこです。", "Đây là thuốc lá Mỹ."]] },
    { w: "～で ございます", r: "でございます", vi: "là (cách nói rất lịch sự của です)", t: "cụm", ex: [["ワイン売り場は 地下で ございます。", "Quầy rượu vang ở tầng hầm ạ."]], note: "Nhân viên cửa hàng hay dùng với khách." },
    { w: "イタリア", r: "イタリア", vi: "Ý (nước)", t: "danh từ riêng", ex: [["これは イタリアの 靴です。", "Đây là giày Ý."]] },
    { w: "スイス", r: "スイス", vi: "Thụy Sĩ", t: "danh từ riêng", ex: [["スイスの 時計です。", "Đồng hồ Thụy Sĩ."]] },
    { w: "新大阪", r: "しんおおさか", vi: "Shin-Osaka (tên ga ở Osaka)", t: "danh từ riêng", ex: [["ここは 新大阪です。", "Đây là ga Shin-Osaka."]] }
  ],
  grammar: [
    {
      pattern: "ここ / そこ / あそこ は N（場所） です",
      func: "Đại từ chỉ nơi chốn: chỉ và giới thiệu địa điểm theo khoảng cách người nói – người nghe.",
      parts: [["ここ", "Nơi người nói đang ở."], ["そこ", "Nơi người nghe đang ở / gần người nghe."], ["あそこ", "Nơi xa cả hai."]],
      usage: [
        { rule: "Giới thiệu nơi chốn.", ex: [["ここは 食堂です。", "Đây là nhà ăn."], ["あそこは 事務所です。", "Kia là văn phòng."]] },
        { rule: "Khi hai người đứng cùng một chỗ, nơi cả hai đứng là ここ, chỗ hơi xa là そこ, chỗ xa hơn là あそこ.", ex: [["そこは 受付です。", "Chỗ đó là quầy lễ tân."]] }
      ],
      notes: []
    },
    {
      pattern: "N は 場所 です",
      func: "Chỉ ra vị trí của người/ vật/ nơi chốn: “N ở (nơi) ~”.",
      parts: [["場所", "Có thể là ここ・そこ・あそこ・こちら…, tên tầng (～階), tên địa điểm."]],
      usage: [
        { rule: "Hỏi và trả lời vị trí.", ex: [["トイレは どこですか。 ―― あそこです。", "Nhà vệ sinh ở đâu? — Ở kia."], ["山田さんは 事務所です。", "Anh Yamada ở văn phòng."]] },
        { rule: "Hỏi tầng: 何階ですか.", ex: [["靴売り場は 何階ですか。 ―― 地下です。", "Quầy giày ở tầng mấy? — Tầng hầm."]] }
      ],
      notes: ["Đây là cách nói gọn bằng です. Mẫu あります・います cho vị trí sẽ học ở bài 10."]
    },
    {
      pattern: "こちら / そちら / あちら / どちら",
      func: "Từ chỉ phương hướng, đồng thời là dạng lịch sự của ここ・そこ・あそこ・どこ.",
      parts: [["こちら・そちら・あちら", "Phía này/đó/kia — nhân viên dùng với khách."], ["どちら", "Lịch sự của どこ."]],
      usage: [
        { rule: "Chỉ đường lịch sự.", ex: [["エレベーターは あちらです。", "Thang máy ở phía kia ạ."]] },
        { rule: "Hỏi lịch sự về nước, công ty, trường: お国 / 会社 / 学校 は どちらですか.", ex: [["お国は どちらですか。 ―― ベトナムです。", "Anh từ nước nào ạ? — Việt Nam."], ["会社は どちらですか。 ―― IMCです。", "Anh làm ở công ty nào? — IMC."]] }
      ],
      notes: ["Khi hỏi tên công ty/ nước, どちら mang nghĩa “nào” chứ không phải “ở đâu”."]
    },
    {
      pattern: "N1 の N2 (xuất xứ: nước / công ty sản xuất)",
      func: "Mở rộng của の: N1 là nước hoặc công ty làm ra N2. Hỏi bằng どこの N.",
      parts: [["どこの N", "N của nước nào / hãng nào."]],
      usage: [
        { rule: "Hỏi và nói xuất xứ.", ex: [["これは どこの ワインですか。 ―― イタリアの ワインです。", "Đây là rượu vang nước nào? — Rượu vang Ý."], ["それは どこの 車ですか。 ―― 日本の 車です。", "Đó là xe hãng/nước nào? — Xe Nhật."]] }
      ],
      notes: ["Phân biệt: 何の N (nội dung – bài 2), だれの N (sở hữu – bài 2), どこの N (xuất xứ – bài 3)."]
    },
    {
      pattern: "N は いくらですか",
      func: "Hỏi giá tiền.",
      parts: [["いくら", "Bao nhiêu tiền. Trả lời: số + 円 です."]],
      usage: [{ rule: "Hỏi giá.", ex: [["この ネクタイは いくらですか。 ―― 3,000円です。", "Cà vạt này bao nhiêu? — 3.000 yên."]] }],
      notes: ["Chú ý biến âm: 300 さんびゃく, 600 ろっぴゃく, 800 はっぴゃく, 3000 さんぜん, 8000 はっせん."]
    },
    {
      pattern: "Bảng こ・そ・あ・ど",
      func: "Hệ thống từ chỉ định tổng hợp bài 2 và 3.",
      parts: [["こ-", "gần người nói: これ・この・ここ・こちら"], ["そ-", "gần người nghe: それ・その・そこ・そちら"], ["あ-", "xa cả hai: あれ・あの・あそこ・あちら"], ["ど-", "nghi vấn: どれ*・どの*・どこ・どちら (*học ở bài sau)"]],
      usage: [{ rule: "Chọn đúng nhóm theo vị trí của vật/ nơi so với người nói và người nghe.", ex: [["ここは 教室です。そこは 事務所です。あそこは 食堂です。", "Đây là phòng học. Đó là văn phòng. Kia là nhà ăn."]] }],
      notes: []
    }
  ],
  reading: {
    title: "さくらデパート",
    titleVi: "Cửa hàng bách hóa Sakura",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–3.",
    paragraphs: [
      {
        s: [
          { t: "ここ||chỗ này / は||(chủ đề) / さくらデパート||bách hóa Sakura / です||là / 。||", vi: "Đây là cửa hàng bách hóa Sakura." },
          { t: "受付|うけつけ|lễ tân / は||(chủ đề) / 1階|いっかい|tầng 1 / です||là / 。||", vi: "Quầy lễ tân ở tầng 1." },
          { t: "エレベーター||thang máy / は||(chủ đề) / 受付|うけつけ|lễ tân / の||(của) / あちら||phía kia / です||là / 。||", vi: "Thang máy ở phía bên kia lễ tân." }
        ],
        vi: "Đoạn 1: Giới thiệu bách hóa Sakura — lễ tân tầng 1, thang máy ở phía kia lễ tân."
      },
      {
        s: [
          { t: "靴|くつ|giày / 売り場|うりば|quầy bán / は||(chủ đề) / 2階|にかい|tầng 2 / です||là / 。||", vi: "Quầy giày ở tầng 2." },
          { t: "時計|とけい|đồng hồ / 売り場|うりば|quầy bán / は||(chủ đề) / 3階|さんがい|tầng 3 / です||là / 。||", vi: "Quầy đồng hồ ở tầng 3." },
          { t: "ワイン||rượu vang / 売り場|うりば|quầy bán / は||(chủ đề) / 地下|ちか|tầng hầm / です||là / 。||", vi: "Quầy rượu vang ở tầng hầm." },
          { t: "食堂|しょくどう|nhà ăn / は||(chủ đề) / 7階|ななかい|tầng 7 / です||là / 。||", vi: "Nhà ăn ở tầng 7." }
        ],
        vi: "Đoạn 2: Sơ đồ các tầng: giày – 2, đồng hồ – 3, rượu vang – hầm, nhà ăn – 7."
      },
      {
        s: [
          { t: "この||… này / 時計|とけい|đồng hồ / は||(chủ đề) / スイス||Thụy Sĩ / の||(của) / 時計|とけい|đồng hồ / です||là / 。||", vi: "Chiếc đồng hồ này là đồng hồ Thụy Sĩ." },
          { t: "18,000円|いちまんはっせんえん|18.000 yên / です||là / 。||", vi: "Giá 18.000 yên." },
          { t: "あの||… kia / 時計|とけい|đồng hồ / は||(chủ đề) / 日本|にほん|Nhật / の||(của) / です||là / 。||", vi: "Chiếc đồng hồ kia là của Nhật." },
          { t: "8,600円|はっせんろっぴゃくえん|8.600 yên / です||là / 。||", vi: "Giá 8.600 yên." }
        ],
        vi: "Đoạn 3: Ở quầy đồng hồ có hai chiếc: đồng hồ Thụy Sĩ 18.000 yên và đồng hồ Nhật 8.600 yên."
      }
    ],
    summary: "Toàn bài: hướng dẫn các tầng trong bách hóa Sakura và so sánh giá hai đồng hồ. Dạng bài “tìm thông tin” (情報検索) — đọc câu hỏi trước, rồi quét tìm từ khóa (tên quầy, tên nước) trong bài.",
    questions: [
      { q: "時計売り場は 何階ですか。", o: ["3階", "2階", "7階", "地下"], a: 0, ev: [1, 1], tip: "Quét tìm từ khóa 時計売り場. Đọc 3階 là さんがい (biến âm)." },
      { q: "ワインを 買います。どこへ 行きますか。(Muốn mua rượu vang thì đi đâu?)", o: ["地下", "1階", "2階", "7階"], a: 0, ev: [1, 2], tip: "Câu hỏi có động từ chưa học — chỉ cần bắt từ khóa ワイン rồi tìm ワイン売り場." },
      { q: "スイスの 時計は いくらですか。", o: ["18,000円", "8,600円", "1,800円", "86,000円"], a: 0, ev: [2, 1], tip: "Giá nằm ở câu ngay sau câu nhắc スイスの時計. Cẩn thận phương án nhiễu đổi vị trí chữ số." },
      { q: "日本の 時計は どれですか。", o: ["あの 時計", "この 時計", "その 時計", "どの 時計"], a: 0, ev: [2, 2], tip: "Bài dùng あの時計 cho đồng hồ Nhật và この時計 cho đồng hồ Thụy Sĩ." }
    ]
  },
  listening: {
    title: "デパートで",
    titleVi: "Ở bách hóa",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "客", pitch: 0.85 }, B: { name: "店員", pitch: 1.25 } },
    script: [
      { sp: "A", jp: "すみません、ネクタイ売り場は どこですか。", vi: "Xin lỗi, quầy cà vạt ở đâu ạ?" },
      { sp: "B", jp: "4階で ございます。", vi: "Ở tầng 4 ạ." },
      { sp: "A", jp: "どうも。", vi: "Cảm ơn." },
      { sp: "A", jp: "すみません、その ネクタイを 見せて ください。", vi: "Xin lỗi, cho tôi xem cái cà vạt đó." },
      { sp: "B", jp: "はい、どうぞ。イタリアの ネクタイです。", vi: "Vâng, xin mời. Cà vạt của Ý ạ." },
      { sp: "A", jp: "いくらですか。", vi: "Bao nhiêu tiền?" },
      { sp: "B", jp: "6,800円です。", vi: "6.800 yên ạ." },
      { sp: "A", jp: "じゃ、これを ください。", vi: "Vậy cho tôi cái này." }
    ],
    questions: [
      { q: "ネクタイ売り場は 何階ですか。", o: ["4階", "8階", "2階", "地下"], a: 0, ev: [1], tip: "で ございます là cách nói rất lịch sự của です mà nhân viên cửa hàng hay dùng — nghe con số đứng trước 階." },
      { q: "どこの ネクタイですか。", o: ["イタリア", "日本", "フランス", "スイス"], a: 0, ev: [4], tip: "Nghe tên nước + の ngay trước ネクタイ." },
      { q: "ネクタイは いくらですか。", o: ["6,800円", "8,600円", "6,080円", "680円"], a: 0, ev: [6], tip: "ろくせん はっぴゃく: tách theo mốc 千 rồi 百. Ghi nhanh số lên giấy khi nghe." },
      { q: "お客さんは ネクタイを 買いましたか。(Khách có mua không?)", o: ["はい、買いました", "いいえ、買いませんでした", "わかりません", "あとで 買います"], a: 0, ev: [7], tip: "～を ください = mua/lấy món đó. Câu cuối hội thoại thường chứa quyết định." }
    ]
  },
  kanji: [
    { c: "円", hv: "VIÊN", on: "エン", kun: "まる(い)", vi: "tròn; đồng yên", words: [["円", "えん", "yên (tiền)"], ["百円", "ひゃくえん", "100 yên"], ["円い", "まるい", "tròn"]], use: "Đơn vị tiền tệ đọc エン." },
    { c: "国", hv: "QUỐC", on: "コク", kun: "くに", vi: "đất nước", words: [["国", "くに", "nước"], ["外国", "がいこく", "nước ngoài"], ["中国", "ちゅうごく", "Trung Quốc"]], use: "Đứng riêng くに; trong từ ghép コク/ゴク (biến âm)." },
    { c: "電", hv: "ĐIỆN", on: "デン", kun: "—", vi: "điện", words: [["電話", "でんわ", "điện thoại"], ["電車", "でんしゃ", "tàu điện"], ["電気", "でんき", "điện, đèn"]], use: "Hầu như luôn đọc デン." },
    { c: "話", hv: "THOẠI", on: "ワ", kun: "はな(す)・はなし", vi: "nói chuyện", words: [["電話", "でんわ", "điện thoại"], ["話す", "はなす", "nói"], ["話", "はなし", "câu chuyện"]], use: "Từ ghép đọc ワ; động từ はなす." },
    { c: "所", hv: "SỞ", on: "ショ・ジョ", kun: "ところ", vi: "nơi chốn", words: [["事務所", "じむしょ", "văn phòng"], ["台所", "だいどころ", "nhà bếp"], ["所", "ところ", "nơi"]], use: "Cuối từ ghép thường ショ/ジョ; đứng riêng ところ (đôi khi biến âm どころ)." },
    { c: "売", hv: "MẠI", on: "バイ", kun: "う(る)", vi: "bán", words: [["売り場", "うりば", "quầy bán"], ["売る", "うる", "bán"], ["売店", "ばいてん", "quầy hàng"]], use: "Ở sơ cấp chủ yếu gặp う(る), う(り)." },
    { c: "階", hv: "GIAI", on: "カイ", kun: "—", vi: "tầng, bậc", words: [["～階", "かい/がい", "tầng ~"], ["階段", "かいだん", "cầu thang"], ["何階", "なんがい", "tầng mấy"]], use: "1階 いっかい, 3階・何階 biến âm thành がい." },
    { c: "事", hv: "SỰ", on: "ジ", kun: "こと", vi: "việc", words: [["事務所", "じむしょ", "văn phòng"], ["仕事", "しごと", "công việc"], ["食事", "しょくじ", "bữa ăn"]], use: "Từ ghép đọc ジ; 仕事 biến âm thành ごと." }
  ],
  grammarQuiz: [
    { q: "（　）は 食堂です。(Nơi mình đang đứng)", o: ["ここ", "これ", "この", "こちらの"], a: 0, ex: "Chỉ nơi chốn → ここ (không phải これ = đồ vật)." },
    { q: "トイレは（　）ですか。―― あそこです。", o: ["どこ", "なん", "だれ", "どなた"], a: 0, ex: "Trả lời là nơi chốn → hỏi どこ." },
    { q: "お国は（　）ですか。―― ベトナムです。", o: ["どちら", "どこの", "何", "いくら"], a: 0, ex: "Hỏi lịch sự về nước → お国は どちらですか." },
    { q: "これは（　）の ワインですか。―― フランスの ワインです。", o: ["どこ", "だれ", "何", "どちら"], a: 0, ex: "Hỏi xuất xứ → どこの N." },
    { q: "この 傘は（　）ですか。―― 1,500円です。", o: ["いくら", "何階", "どこ", "何"], a: 0, ex: "Trả lời bằng giá tiền → いくら." },
    { q: "靴売り場は（　）ですか。―― 地下です。", o: ["何階", "いくら", "だれ", "何の"], a: 0, ex: "地下 là tầng → hỏi 何階 (なんがい)." },
    { q: "山田さんは（　）。(Anh Yamada đang ở văn phòng)", o: ["事務所です", "事務所の です", "事務所は です", "事務所か"], a: 0, ex: "N は 場所 です: 山田さんは 事務所です." },
    { q: "「300円」の 読み方は？", o: ["さんびゃくえん", "さんひゃくえん", "さんぴゃくえん", "さんばくえん"], a: 0, ex: "Biến âm: 3 + 百 → さんびゃく." }
  ]
};
