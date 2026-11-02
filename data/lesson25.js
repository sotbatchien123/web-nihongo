// Bài 25 — nội dung tự biên soạn theo phạm vi bài 25 Minna no Nihongo.
window.LESSONS[25] = {
  id: 25,
  title: "いろいろ お世話に なりました",
  titleVi: "Cảm ơn anh chị đã giúp đỡ nhiều",
  vocab: [
    { w: "考えます", r: "かんがえます", vi: "suy nghĩ", t: "động từ nhóm II", ex: [["よく 考えてから、答えて ください。", "Hãy suy nghĩ kỹ rồi trả lời."]] },
    { w: "着きます［駅に～］", r: "つきます", vi: "đến nơi (ga)", t: "động từ nhóm I", ex: [["駅に 着いたら、電話して ください。", "Đến ga thì gọi điện cho tôi."]] },
    { w: "留学します", r: "りゅうがくします", vi: "du học", t: "động từ nhóm III", ex: [["お金が あったら、留学したいです。", "Nếu có tiền, tôi muốn đi du học."]] },
    { w: "取ります［年を～］", r: "とります", vi: "có tuổi, già đi", t: "động từ nhóm I", ex: [["年を 取っても、働きたいです。", "Dù có tuổi tôi vẫn muốn làm việc."]] },
    { w: "田舎", r: "いなか", vi: "quê, nông thôn", t: "danh từ", ex: [["年を 取ったら、田舎に 住みたいです。", "Khi về già tôi muốn sống ở quê."]] },
    { w: "大使館", r: "たいしかん", vi: "đại sứ quán", t: "danh từ", ex: [["ビザが 要ったら、大使館へ 行って ください。", "Nếu cần visa hãy đến đại sứ quán."]] },
    { w: "グループ", r: "グループ", vi: "nhóm", t: "danh từ", ex: [["グループで 旅行します。", "Đi du lịch theo nhóm."]] },
    { w: "チャンス", r: "チャンス", vi: "cơ hội", t: "danh từ", ex: [["チャンスが あったら、日本で 働きたいです。", "Nếu có cơ hội tôi muốn làm việc ở Nhật."]] },
    { w: "億", r: "おく", vi: "trăm triệu", t: "số từ", ex: [["1億円 あったら、何を しますか。", "Nếu có 100 triệu yên bạn sẽ làm gì?"]] },
    { w: "もし［～たら］", r: "もし", vi: "nếu như", t: "phó từ", ex: [["もし 1億円 あったら、家を 買います。", "Nếu có 100 triệu yên, tôi sẽ mua nhà."]] },
    { w: "いくら［～ても］", r: "いくら", vi: "dù … bao nhiêu đi nữa", t: "phó từ", ex: [["いくら 考えても、わかりません。", "Nghĩ mãi vẫn không hiểu."]] },
    { w: "転勤", r: "てんきん", vi: "chuyển công tác", t: "danh từ", ex: [["来月 東京へ 転勤します。", "Tháng sau tôi chuyển công tác lên Tokyo."]] },
    { w: "こと", r: "こと", vi: "việc, chuyện", t: "danh từ", ex: [["困った ことが あったら、言って ください。", "Nếu có chuyện gì khó khăn, hãy nói."]] },
    { w: "一杯 飲みましょう", r: "いっぱいのみましょう", vi: "cùng uống một ly nhé", t: "cụm", ex: [["仕事が 終わったら、一杯 飲みましょう。", "Xong việc thì cùng làm một ly nhé."]] },
    { w: "［いろいろ］お世話に なりました", r: "おせわになりました", vi: "cảm ơn đã giúp đỡ (nhiều)", t: "cụm", ex: [["いろいろ お世話に なりました。", "Cảm ơn anh chị đã giúp đỡ nhiều."]] },
    { w: "頑張ります", r: "がんばります", vi: "cố gắng", t: "động từ nhóm I", ex: [["東京へ 行っても、頑張って ください。", "Dù lên Tokyo cũng hãy cố gắng nhé."]] },
    { w: "どうぞ お元気で", r: "どうぞおげんきで", vi: "chúc giữ gìn sức khỏe (lời chia tay)", t: "cụm", ex: [["どうぞ お元気で。", "Chúc anh mạnh khỏe."]] },
    { w: "困ります", r: "こまります", vi: "khó khăn, rắc rối", t: "động từ nhóm I", ex: [["困ったら、いつでも 電話して ください。", "Nếu gặp khó khăn cứ gọi cho tôi."]] }  ],
  grammar: [
    {
      pattern: "Thể thông thường quá khứ + ら、～（nếu …）",
      func: "Điều kiện giả định: “nếu … thì …”. Tạo bằng cách thêm ら vào thể quá khứ thông thường. Vế sau có thể là ý chí, mong muốn, nhờ vả.",
      explain: ["Động từ: Vた + ら (行ったら, 行かなかったら). い-adj: ～かったら (安かったら). な-adj / N: ～だったら (暇だったら, 雨だったら).", "Khác ～と (bài 23): ～たら dùng được với vế sau là ý chí, mong muốn, nhờ vả."],
      parts: [["V", "Vたら / Vなかったら"], ["い-adj", "～かったら / ～くなかったら"], ["な-adj / N", "～だったら / ～じゃなかったら"]],
      usage: [
        { rule: "Giả định.", ex: [["お金が あったら、旅行します。", "Nếu có tiền tôi sẽ đi du lịch."], ["時間が なかったら、テレビを 見ません。", "Nếu không có thời gian thì tôi không xem TV."]] },
        { rule: "Tính từ / danh từ.", ex: [["安かったら、パソコンを 買いたいです。", "Nếu rẻ tôi muốn mua máy tính."], ["暇だったら、手伝って ください。", "Nếu rảnh thì giúp tôi với."], ["いい 天気だったら、散歩しませんか。", "Nếu trời đẹp thì đi dạo không?"]] }
      ],
      notes: []
    },
    {
      pattern: "V たら、～（sau khi / khi … xong）",
      func: "Khi chắc chắn sự việc trong vế trước sẽ xảy ra, ～たら nghĩa là “sau khi … thì …, … xong thì …”.",
      explain: ["Vế sau không dùng thì quá khứ trong cách dùng này (nói về tương lai)."],
      parts: [["Vたら", "sau khi V"]],
      usage: [{ rule: "Chắc chắn xảy ra.", ex: [["10時に なったら、出かけましょう。", "10 giờ thì ra ngoài nhé."], ["うちへ 帰ったら、すぐ シャワーを 浴びます。", "Về nhà xong tôi tắm ngay."]] }],
      notes: []
    },
    {
      pattern: "V て → ～ても ／ い-adj ～くても ／ な-adj・N ～でも",
      func: "Điều kiện nghịch: “dù … cũng …”. Kết quả vế sau trái với điều thường mong đợi từ vế trước.",
      parts: [["V", "Vても (雨が 降っても)"], ["い-adj", "～くても (高くても)"], ["な-adj / N", "～でも (暇でも, 日曜日でも)"]],
      usage: [
        { rule: "Dù … vẫn.", ex: [["雨が 降っても、洗濯します。", "Dù mưa tôi vẫn giặt đồ."], ["安くても、わたしは グループ旅行が 嫌いです。", "Dù rẻ tôi vẫn không thích du lịch theo nhóm."], ["便利でも、パソコンを 使いません。", "Dù tiện tôi cũng không dùng máy tính."], ["日曜日でも、働きます。", "Dù chủ nhật tôi vẫn làm."]] }
      ],
      notes: []
    },
    {
      pattern: "もし ～たら ／ いくら ～ても",
      func: "もし nhấn mạnh tính giả định của ～たら; いくら nhấn mạnh mức độ của ～ても (“dù … bao nhiêu đi nữa”).",
      parts: [["もし ～たら", "nếu như"], ["いくら ～ても", "dù … đến đâu"]],
      usage: [{ rule: "Nhấn mạnh.", ex: [["もし 1億円 あったら、いろいろな 国を 旅行したいです。", "Nếu như có 100 triệu yên, tôi muốn du lịch nhiều nước."], ["いくら 考えても、わかりません。", "Dù nghĩ thế nào cũng không hiểu."]] }],
      notes: []
    },
    {
      pattern: "N が（chủ ngữ trong mệnh đề ～たら・～ても）",
      func: "Chủ ngữ của mệnh đề phụ ～たら / ～ても / ～とき / ～と dùng が.",
      parts: [["が", ""]],
      usage: [{ rule: "Ví dụ.", ex: [["友達が 来たら、一杯 飲みましょう。", "Bạn đến thì cùng làm một ly."], ["いくら 雨が 降っても、行きます。", "Dù mưa to thế nào tôi vẫn đi."]] }],
      notes: []
    }
  ],
  reading: {
    title: "もし 1億円 あったら",
    titleVi: "Nếu có 100 triệu yên",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–25.",
    paragraphs: [
      {
        s: [
          { t: "もし||nếu như / 1億円|いちおくえん|100 triệu yên / あったら||nếu có / 、||, / 何|なに|gì / を||(tân ngữ) / しますか||làm? / 。||", vi: "Nếu có 100 triệu yên, bạn sẽ làm gì?" },
          { t: "私|わたし|tôi / は||(chủ đề) / まず||trước tiên / 、||, / 両親|りょうしん|bố mẹ / に||cho / 新しい|あたらしい|mới / 家|いえ|nhà / を||(tân ngữ) / 買って|かって|mua / あげたい|あげたい|muốn (cho) / です||(lịch sự) / 。||", vi: "Trước tiên tôi muốn mua nhà mới cho bố mẹ." },
          { t: "それから||sau đó / 、||, / 1年|いちねん|1 năm / ぐらい||khoảng / 外国|がいこく|nước ngoài / に||(ở) / 留学したい|りゅうがくしたい|muốn du học / です||(lịch sự) / 。||", vi: "Sau đó tôi muốn du học nước ngoài khoảng 1 năm." }
        ],
        vi: "Đoạn 1: Nếu có 100 triệu yên: mua nhà cho bố mẹ, rồi đi du học khoảng 1 năm."
      },
      {
        s: [
          { t: "でも||nhưng / 、||, / お金|おかね|tiền / が||(chủ thể) / たくさん||nhiều / あっても||dù có / 、||, / 会社|かいしゃ|công ty / を||(tân ngữ) / やめません||không bỏ / 。||", vi: "Nhưng dù có nhiều tiền, tôi vẫn không bỏ công ty." },
          { t: "仕事|しごと|công việc / が||(đối tượng) / 好き|すき|thích / です||(là) / から||vì / 。||", vi: "Vì tôi thích công việc." },
          { t: "年|とし|tuổi / を||(tân ngữ) / 取ったら|とったら|khi về già / 、||, / 田舎|いなか|quê / に||ở / 住んで|すんで|sống / 、||, / 野菜|やさい|rau / を||(tân ngữ) / 作りたい|つくりたい|muốn trồng / です||(lịch sự) / 。||", vi: "Khi về già tôi muốn sống ở quê và trồng rau." }
        ],
        vi: "Đoạn 2: Dù giàu vẫn không bỏ việc vì thích công việc; về già muốn sống ở quê trồng rau."
      }
    ],
    summary: "Toàn bài: giả định (もし ～たら), chắc chắn xảy ra (年を 取ったら) và điều kiện nghịch (～ても). Mẹo: ～たら + ý chí/mong muốn; ～ても = kết quả trái với mong đợi — đề hay hỏi “dù … thì làm gì”.",
    questions: [
      { q: "1億円 あったら、この 人は まず 何を しますか。", o: ["両親に 家を 買って あげます", "留学します", "会社を やめます", "田舎に 住みます"], a: 0, ev: [0, 1], tip: "Từ khóa まず (trước tiên)." },
      { q: "どのくらい 留学したいですか。", o: ["1年ぐらい", "半年ぐらい", "2年ぐらい", "1か月ぐらい"], a: 0, ev: [0, 2], tip: "Khoảng thời gian + ぐらい." },
      { q: "お金が たくさん あったら、会社を やめますか。", o: ["いいえ、やめません", "はい、やめます", "年を 取ったら やめます", "わかりません"], a: 0, ev: [1, 0], tip: "～ても + phủ định: dù … vẫn không." },
      { q: "年を 取ったら、何を したいですか。", o: ["田舎で 野菜を 作りたい", "外国に 住みたい", "会社で 働きたい", "旅行したい"], a: 0, ev: [1, 2], tip: "年を 取ったら = khi về già (chắc chắn xảy ra)." }
    ]
  },
  listening: {
    title: "お世話に なりました",
    titleVi: "Cảm ơn đã giúp đỡ",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "ミラー", pitch: 0.75 }, B: { name: "山田", pitch: 0.9 } },
    script: [
      { sp: "B", jp: "ミラーさん、来月 東京へ 転勤ですね。", vi: "Anh Miller, tháng sau anh chuyển lên Tokyo nhỉ." },
      { sp: "A", jp: "ええ。いろいろ お世話に なりました。", vi: "Vâng. Cảm ơn anh đã giúp đỡ nhiều." },
      { sp: "B", jp: "東京へ 行っても、頑張って ください。", vi: "Lên Tokyo rồi cũng cố gắng nhé." },
      { sp: "A", jp: "ありがとう ございます。山田さんも 東京へ 来たら、電話して ください。", vi: "Cảm ơn anh. Anh Yamada lên Tokyo thì gọi cho tôi." },
      { sp: "B", jp: "ええ。じゃ、来月 出張で 行きますから、時間が あったら、一杯 飲みましょう。", vi: "Vâng. Tháng sau tôi đi công tác lên đó, nếu có thời gian thì cùng làm một ly." },
      { sp: "A", jp: "いいですね。どうぞ お元気で。", vi: "Hay đấy. Chúc anh mạnh khỏe." }
    ],
    questions: [
      { q: "ミラーさんは 来月 どう しますか。", o: ["東京へ 転勤します", "国へ 帰ります", "会社を やめます", "大阪へ 転勤します"], a: 0, ev: [0], tip: "転勤 = chuyển công tác." },
      { q: "ミラーさんの お願い：山田さんが 東京へ 来たら、何を しますか。", o: ["ミラーさんに 電話します", "ミラーさんに 手紙を 書きます", "お土産を 持って 行きます", "何も しなくても いいです"], a: 0, ev: [3], tip: "～たら + ～て ください: điều kiện + lời nhờ." },
      { q: "山田さんは どうして 来月 東京へ 行きますか。", o: ["出張です", "転勤です", "旅行です", "引っ越しです"], a: 0, ev: [4], tip: "N で 行きます: 出張で = vì công tác." },
      { q: "二人は 東京で 何を しますか。", o: ["時間が あったら、一杯 飲みます", "会議を します", "いっしょに 働きます", "映画を 見ます"], a: 0, ev: [4], tip: "Điều kiện 時間が あったら gắn với 一杯 飲みましょう." }
    ]
  },
  kanji: [
    { c: "考", hv: "KHẢO", on: "コウ", kun: "かんが(える)", vi: "suy nghĩ", words: [["考えます", "かんがえます", "suy nghĩ"], ["参考", "さんこう", "tham khảo"]], use: "Phân biệt với 老 (lão – già)." },
    { c: "留", hv: "LƯU", on: "リュウ・ル", kun: "と(める)", vi: "lưu lại", words: [["留学", "りゅうがく", "du học"], ["留守", "るす", "vắng nhà"]], use: "Bộ 田 phía dưới." },
    { c: "田", hv: "ĐIỀN", on: "デン", kun: "た", vi: "ruộng", words: [["田舎", "いなか", "quê (đọc đặc biệt)"], ["山田", "やまだ", "Yamada"], ["田中", "たなか", "Tanaka"]], use: "Họ người Nhật hay dùng た／だ." },
    { c: "舎", hv: "XÁ", on: "シャ", kun: "—", vi: "nhà, quán", words: [["田舎", "いなか", "quê"], ["校舎", "こうしゃ", "tòa nhà trường"]], use: "田舎 là cách đọc đặc biệt (熟字訓)." },
    { c: "億", hv: "ỨC", on: "オク", kun: "—", vi: "trăm triệu", words: [["一億", "いちおく", "100 triệu"]], use: "Đơn vị số: 万 → 億 (10^8)." },
    { c: "頑", hv: "NGOAN", on: "ガン", kun: "—", vi: "bền bỉ, cứng đầu", words: [["頑張ります", "がんばります", "cố gắng"]], use: "Bộ 頁 bên phải." },
    { c: "張", hv: "TRƯƠNG", on: "チョウ", kun: "は(る)", vi: "căng, kéo", words: [["頑張ります", "がんばります", "cố gắng"], ["出張", "しゅっちょう", "công tác"]], use: "Bộ 弓 (cung) + 長." },
    { c: "勤", hv: "CẦN", on: "キン", kun: "つと(める)", vi: "làm việc chăm", words: [["転勤", "てんきん", "chuyển công tác"], ["勤めます", "つとめます", "làm việc (cho)"]], use: "Bộ 力 (sức) bên phải." }
  ],
  grammarQuiz: [
    { q: "お金が（　）、旅行したいです。", o: ["あったら", "あると", "あっても", "あって"], a: 0, ex: "Giả định + mong muốn → ～たら." },
    { q: "安（　）、買います。", o: ["かったら", "いたら", "くたら", "だったら"], a: 0, ex: "い-adj: ～かったら." },
    { q: "暇（　）、手伝って ください。", o: ["だったら", "かったら", "なったら", "でたら"], a: 0, ex: "な-adj: ～だったら." },
    { q: "駅に（　）、電話して ください。", o: ["着いたら", "着くと", "着いても", "着いて"], a: 0, ex: "Vế sau là nhờ vả → không dùng と, dùng ～たら." },
    { q: "雨が（　）、洗濯します。(dù mưa)", o: ["降っても", "降ったら", "降ると", "降って"], a: 0, ex: "Điều kiện nghịch → ～ても." },
    { q: "高（　）、この パソコンを 買います。", o: ["くても", "かっても", "いでも", "でも"], a: 0, ex: "い-adj: ～くても." },
    { q: "日曜日（　）、働きます。", o: ["でも", "だったら", "ても", "くても"], a: 0, ex: "N: ～でも." },
    { q: "（　）考えても、わかりません。", o: ["いくら", "もし", "まず", "きっと"], a: 0, ex: "いくら ～ても." },
    { q: "（　）1億円 あったら、何を しますか。", o: ["もし", "いくら", "たぶん", "きっと"], a: 0, ex: "もし ～たら." }
  ]
};
