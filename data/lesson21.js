// Bài 21 — nội dung tự biên soạn theo phạm vi bài 21 Minna no Nihongo.
window.LESSONS[21] = {
  id: 21,
  title: "わたしも そう 思います",
  titleVi: "Tôi cũng nghĩ vậy",
  vocab: [
    { w: "思います", r: "おもいます", vi: "nghĩ, cho rằng", t: "động từ nhóm I", ex: [["あした 雨が 降ると 思います。", "Tôi nghĩ mai trời sẽ mưa."]] },
    { w: "言います", r: "いいます", vi: "nói", t: "động từ nhóm I", ex: [["寝る 前に 「お休みなさい」と 言います。", "Trước khi ngủ nói “Oyasuminasai”."]] },
    { w: "足ります", r: "たります", vi: "đủ", t: "động từ nhóm II", ex: [["お金が 足りないと 思います。", "Tôi nghĩ không đủ tiền."]] },
    { w: "勝ちます", r: "かちます", vi: "thắng", t: "động từ nhóm I", ex: [["どちらが 勝つと 思いますか。", "Bạn nghĩ bên nào sẽ thắng?"]] },
    { w: "負けます", r: "まけます", vi: "thua", t: "động từ nhóm II", ex: [["日本は 負けたと 思います。", "Tôi nghĩ Nhật đã thua."]] },
    { w: "あります［お祭りが～］", r: "あります", vi: "có, diễn ra (lễ hội)", t: "động từ nhóm I", ex: [["京都で お祭りが あります。", "Ở Kyoto có lễ hội."]] },
    { w: "役に 立ちます", r: "やくにたちます", vi: "có ích", t: "động từ nhóm I", ex: [["この 辞書は 役に 立ちます。", "Quyển từ điển này có ích."]] },
    { w: "むだ［な］", r: "むだ", vi: "lãng phí, vô ích", t: "tính từ な", ex: [["むだな 会議が 多いと 思います。", "Tôi nghĩ có nhiều cuộc họp vô ích."]] },
    { w: "不便［な］", r: "ふべん", vi: "bất tiện", t: "tính từ な", ex: [["車が ありませんから、不便です。", "Vì không có xe nên bất tiện."]] },
    { w: "同じ", r: "おなじ", vi: "giống, cùng", t: "tính từ", ex: [["私も 同じ 意見です。", "Tôi cũng cùng ý kiến."]], note: "Trước danh từ không có な/の: 同じ 意見." },
    { w: "すごい", r: "すごい", vi: "ghê, giỏi, tuyệt", t: "tính từ い", ex: [["すごい 人ですね。", "Người ghê thật nhỉ."]] },
    { w: "首相", r: "しゅしょう", vi: "thủ tướng", t: "danh từ", ex: [["首相は 来月 アメリカへ 行くと 言いました。", "Thủ tướng nói tháng sau sẽ đi Mỹ."]] },
    { w: "大統領", r: "だいとうりょう", vi: "tổng thống", t: "danh từ", ex: [["大統領の スピーチを 聞きました。", "Tôi đã nghe bài phát biểu của tổng thống."]] },
    { w: "政治", r: "せいじ", vi: "chính trị", t: "danh từ", ex: [["政治に ついて どう 思いますか。", "Bạn nghĩ gì về chính trị?"]] },
    { w: "ニュース", r: "ニュース", vi: "tin tức", t: "danh từ", ex: [["ニュースを 見ましたか。", "Bạn đã xem tin tức chưa?"]] },
    { w: "スピーチ", r: "スピーチ", vi: "bài phát biểu", t: "danh từ", ex: [["スピーチは とても よかったと 思います。", "Tôi nghĩ bài phát biểu rất hay."]] },
    { w: "試合", r: "しあい", vi: "trận đấu", t: "danh từ", ex: [["あした サッカーの 試合が あります。", "Mai có trận bóng đá."]] },
    { w: "アルバイト", r: "アルバイト", vi: "làm thêm", t: "danh từ", ex: [["アルバイトは 役に 立つと 思います。", "Tôi nghĩ làm thêm có ích."]] },
    { w: "意見", r: "いけん", vi: "ý kiến", t: "danh từ", ex: [["あなたの 意見は？", "Ý kiến của bạn thì sao?"]] },
    { w: "話", r: "はなし", vi: "câu chuyện, bài nói", t: "danh từ", ex: [["社長の 話は 長かったです。", "Bài nói của giám đốc dài."]] },
    { w: "ユーモア", r: "ユーモア", vi: "hài hước", t: "danh từ", ex: [["スピーチには ユーモアが 大切だと 思います。", "Tôi nghĩ bài phát biểu cần sự hài hước."]] },
    { w: "デザイン", r: "デザイン", vi: "thiết kế", t: "danh từ", ex: [["この 車は デザインが いいと 思います。", "Tôi nghĩ xe này thiết kế đẹp."]] },
    { w: "交通", r: "こうつう", vi: "giao thông", t: "danh từ", ex: [["東京は 交通が 便利です。", "Tokyo giao thông tiện lợi."]] },
    { w: "ラッシュ", r: "ラッシュ", vi: "giờ cao điểm", t: "danh từ", ex: [["朝の ラッシュは 大変です。", "Giờ cao điểm buổi sáng vất vả."]] },
    { w: "最近", r: "さいきん", vi: "gần đây", t: "danh từ", ex: [["最近 忙しいです。", "Gần đây tôi bận."]] },
    { w: "たぶん", r: "たぶん", vi: "có lẽ", t: "phó từ", ex: [["たぶん 来ないと 思います。", "Tôi nghĩ có lẽ anh ấy không đến."]] },
    { w: "きっと", r: "きっと", vi: "chắc chắn", t: "phó từ", ex: [["きっと 勝つと 思います。", "Tôi nghĩ chắc chắn sẽ thắng."]] },
    { w: "本当に", r: "ほんとうに", vi: "thật sự", t: "phó từ", ex: [["本当に すごいと 思います。", "Tôi nghĩ thật sự rất giỏi."]] },
    { w: "そんなに", r: "そんなに", vi: "(không) … đến thế (đi với phủ định)", t: "phó từ", ex: [["そんなに 難しくないと 思います。", "Tôi nghĩ không khó đến thế."]] },
    { w: "～に ついて", r: "について", vi: "về ~", t: "cụm trợ từ", ex: [["日本の 交通に ついて 話します。", "Tôi nói về giao thông Nhật Bản."]] },
    { w: "しかたが ありません", r: "しかたがありません", vi: "đành chịu, không còn cách nào", t: "cụm", ex: [["雨ですから、しかたが ありません。", "Trời mưa nên đành chịu."]] },
    { w: "しばらくですね", r: "しばらくですね", vi: "lâu rồi không gặp nhỉ", t: "cụm", ex: [["しばらくですね。お元気でしたか。", "Lâu rồi không gặp. Anh vẫn khỏe chứ?"]] },
    { w: "～でも 飲みませんか", r: "でものみませんか", vi: "uống ~ hay gì đó nhé?", t: "cụm", ex: [["ビールでも 飲みませんか。", "Uống bia hay gì đó nhé?"]] },
    { w: "見ないと…", r: "みないと", vi: "phải xem mới được…", t: "cụm", ex: [["きょうの 試合、見ないと…。", "Trận hôm nay phải xem mới được."]] },
    { w: "もちろん", r: "もちろん", vi: "dĩ nhiên", t: "phó từ", ex: [["もちろん 行きます。", "Dĩ nhiên tôi đi."]] },
    { w: "カンガルー", r: "カンガルー", vi: "chuột túi", t: "danh từ", ex: [["オーストラリアに カンガルーが います。", "Ở Úc có chuột túi."]] }
  ],
  grammar: [
    {
      pattern: "Thể thông thường + と 思います",
      func: "Diễn đạt suy đoán hoặc ý kiến, nhận định của người nói: “tôi nghĩ là …”. Nội dung trước と luôn ở thể thông thường.",
      explain: ["Suy đoán: あした 雨が 降ると 思います. Phủ định nội dung thì phủ định ở vế trước と: 来ないと 思います (tôi nghĩ không đến), không nói 来ると 思いません.", "Ý kiến: 日本は 物価が 高いと 思います. Hỏi ý kiến: ～に ついて どう 思いますか (không có と sau どう).", "Đồng ý: 私も そう 思います. Với な-adj, danh từ: 静かだと 思います, 雨だと 思います (có だ)."],
      parts: [["V／い-adj thể thông thường + と", "降ると, 高いと"], ["な-adj／N + だ + と", "静かだと, 雨だと"], ["どう 思いますか", "hỏi ý kiến"]],
      usage: [
        { rule: "Suy đoán.", ex: [["ミラーさんは もう 帰ったと 思います。", "Tôi nghĩ anh Miller đã về rồi."], ["テレーザちゃんは たぶん 来ないと 思います。", "Tôi nghĩ có lẽ bé Teresa không đến."]] },
        { rule: "Ý kiến.", ex: [["日本は 物価が 高いと 思います。", "Tôi nghĩ ở Nhật vật giá đắt."]] },
        { rule: "Hỏi ý kiến và trả lời.", ex: [["新しい 空港に ついて どう 思いますか。 ―― きれいですが、ちょっと 交通が 不便だと 思います。", "Bạn nghĩ gì về sân bay mới? — Đẹp nhưng tôi nghĩ giao thông hơi bất tiện."]] },
        { rule: "Đồng ý / không đồng ý.", ex: [["私も そう 思います。", "Tôi cũng nghĩ vậy."], ["私は そう 思いません。", "Tôi không nghĩ vậy."]] }
      ],
      notes: []
    },
    {
      pattern: "「câu」／ thể thông thường + と 言います",
      func: "Trích dẫn lời người khác: trực tiếp (giữ nguyên trong 「」) hoặc gián tiếp (chuyển sang thể thông thường).",
      parts: [["「…」と 言います", "trích dẫn trực tiếp"], ["thể thông thường + と 言いました", "trích dẫn gián tiếp"]],
      usage: [
        { rule: "Trực tiếp.", ex: [["寝る 前に 「お休みなさい」と 言います。", "Trước khi ngủ nói “Chúc ngủ ngon”."], ["ミラーさんは 「来週 東京へ 出張します」と 言いました。", "Anh Miller đã nói: “Tuần sau tôi đi công tác Tokyo”."]] },
        { rule: "Gián tiếp.", ex: [["ミラーさんは 来週 東京へ 出張すると 言いました。", "Anh Miller nói tuần sau đi công tác Tokyo."]] }
      ],
      notes: ["Thì của 言いました không ảnh hưởng thì trong vế trích dẫn."]
    },
    {
      pattern: "Thể thông thường + でしょう？（xác nhận）",
      func: "Lên giọng ở cuối để xác nhận điều người nói nghĩ người nghe cũng biết / đồng ý: “… phải không?”.",
      parts: [["V／い-adj thể thông thường + でしょう？", ""], ["な-adj／N（bỏ だ）+ でしょう？", ""]],
      usage: [{ rule: "Xác nhận.", ex: [["あした パーティーに 行くでしょう？ ―― ええ、行きます。", "Mai bạn đi tiệc chứ? — Vâng, tôi đi."], ["北海道は 寒かったでしょう？ ―― いいえ、そんなに 寒くなかったです。", "Hokkaido lạnh chứ? — Không, không lạnh đến thế."]] }],
      notes: ["でしょう nghĩa “có lẽ” (xuống giọng) học ở bài 32."]
    },
    {
      pattern: "N1（địa điểm）で N2 が あります",
      func: "Khi N2 là sự kiện (lễ hội, trận đấu, cuộc họp, buổi tiệc…), あります nghĩa là “diễn ra, tổ chức”. Nơi diễn ra dùng で (không phải に).",
      parts: [["で", "nơi sự kiện diễn ra"]],
      usage: [{ rule: "Sự kiện.", ex: [["東京で 日本と ブラジルの サッカーの 試合が あります。", "Ở Tokyo có trận bóng Nhật – Brazil."]] }],
      notes: ["So sánh: 部屋に 机が あります (vật tồn tại → に) / 部屋で 会議が あります (sự kiện → で)."]
    },
    {
      pattern: "N（dịp）で",
      func: "で sau danh từ chỉ dịp, sự kiện: “trong / tại (dịp) N”.",
      parts: [["N で", "会議で, パーティーで"]],
      usage: [{ rule: "Trong dịp.", ex: [["会議で 何か 意見を 言いましたか。", "Trong cuộc họp bạn có phát biểu ý kiến gì không?"]] }],
      notes: []
    },
    {
      pattern: "N でも V",
      func: "Đưa ra một ví dụ khi mời, đề nghị, gợi ý — không giới hạn ở N: “N hay gì đó”.",
      parts: [["N でも", ""]],
      usage: [{ rule: "Mời nhẹ nhàng.", ex: [["ちょっと ビールでも 飲みませんか。", "Uống chút bia hay gì đó không?"]] }],
      notes: []
    },
    {
      pattern: "V ない と…",
      func: "Rút gọn của ～ないと いけません: “phải … mới được”. Văn nói.",
      parts: [["Vない + と", "phải V"]],
      usage: [{ rule: "Nghĩa vụ (văn nói).", ex: [["もう 帰らないと…。", "Phải về rồi."]] }],
      notes: []
    }
  ],
  reading: {
    title: "日本の 交通",
    titleVi: "Giao thông Nhật Bản",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–21.",
    paragraphs: [
      {
        s: [
          { t: "日本|にほん|Nhật / の||(của) / 交通|こうつう|giao thông / に ついて||về / 話します|はなします|nói / 。||", vi: "Tôi sẽ nói về giao thông Nhật Bản." },
          { t: "私|わたし|tôi / は||(chủ đề) / 日本|にほん|Nhật / の||(của) / 電車|でんしゃ|tàu điện / は||(chủ đề) / とても||rất / 便利|べんり|tiện / だ||(là) / と||(rằng) / 思います|おもいます|nghĩ / 。||", vi: "Tôi nghĩ tàu điện ở Nhật rất tiện." },
          { t: "時間|じかん|thời gian / が||(chủ thể) / 正確|せいかく|chính xác / です||(là) / から||vì / 。||", vi: "Vì giờ giấc chính xác." }
        ],
        vi: "Đoạn 1: Tác giả cho rằng tàu điện Nhật rất tiện vì đúng giờ."
      },
      {
        s: [
          { t: "でも||nhưng / 、||, / 朝|あさ|sáng / の||(của) / ラッシュ||giờ cao điểm / は||(chủ đề) / 本当に|ほんとうに|thật sự / 大変|たいへん|vất vả / です||(là) / 。||", vi: "Nhưng giờ cao điểm buổi sáng thật sự vất vả." },
          { t: "友達|ともだち|bạn / の||(của) / リン||Linh / さん||chị / は||(chủ đề) / 「||« / 電車|でんしゃ|tàu / は||(chủ đề) / 人|ひと|người / が||(chủ thể) / 多い|おおい|đông / 」||» / と||(trích dẫn) / 言いました|いいました|đã nói / 。||", vi: "Chị Linh, bạn tôi, nói: « Tàu đông người quá. »" },
          { t: "リン||Linh / さん||chị / は||(chủ đề) / 自転車|じてんしゃ|xe đạp / の||(của) / ほう||phía / が||(chủ thể) / いい||tốt / と||(rằng) / 言って います|いっています|đang nói / 。||", vi: "Chị Linh nói đi xe đạp thì tốt hơn." }
        ],
        vi: "Đoạn 2: Giờ cao điểm rất vất vả; Linh nói tàu quá đông và cho rằng đi xe đạp tốt hơn."
      },
      {
        s: [
          { t: "私|わたし|tôi / は||(chủ đề) / そう||như vậy / 思いません|おもいません|không nghĩ / 。||", vi: "Tôi không nghĩ vậy." },
          { t: "雨|あめ|mưa / の||(của) / 日|ひ|ngày / は||(chủ đề) / 自転車|じてんしゃ|xe đạp / は||(chủ đề) / 危ない|あぶない|nguy hiểm / と||(rằng) / 思います|おもいます|nghĩ / 。||", vi: "Tôi nghĩ ngày mưa đi xe đạp nguy hiểm." },
          { t: "たぶん||có lẽ / 、||, / 電車|でんしゃ|tàu / の||(của) / ほう||phía / が||(chủ thể) / 安全|あんぜん|an toàn / だ||(là) / と||(rằng) / 思います|おもいます|nghĩ / 。||", vi: "Có lẽ tàu điện an toàn hơn." }
        ],
        vi: "Đoạn 3: Tác giả không đồng ý với Linh: ngày mưa xe đạp nguy hiểm, tàu điện có lẽ an toàn hơn."
      }
    ],
    summary: "Toàn bài: tác giả nêu ý kiến về giao thông Nhật (～と 思います), trích lời bạn (～と 言いました), rồi phản bác (そう 思いません). Mẹo: với bài nêu ý kiến, phải tách rõ ý của TÁC GIẢ và ý của NGƯỜI KHÁC được trích dẫn.",
    questions: [
      { q: "筆者は 日本の 電車に ついて どう 思って いますか。", o: ["便利だと 思って います", "不便だと 思って います", "危ないと 思って います", "高いと 思って います"], a: 0, ev: [0, 1], tip: "筆者 = tác giả. Ý của tác giả là câu có 私は … と 思います." },
      { q: "リンさんは 何が いいと 言いましたか。", o: ["自転車", "電車", "バス", "車"], a: 0, ev: [1, 2], tip: "Câu có tên リンさん + と 言って います." },
      { q: "筆者は リンさんの 意見に 賛成ですか。(Có đồng ý không?)", o: ["いいえ、賛成じゃ ありません", "はい、賛成です", "半分 賛成です", "わかりません"], a: 0, ev: [2, 0], tip: "私は そう 思いません = không đồng ý với ý vừa được nhắc." },
      { q: "筆者は どうして 自転車が よくないと 思いますか。", o: ["雨の 日は 危ないから", "遅いから", "高いから", "ラッシュが あるから"], a: 0, ev: [2, 1], tip: "Lý do nằm ở câu ngay sau câu phản bác." }
    ]
  },
  listening: {
    title: "試合を 見ましたか",
    titleVi: "Có xem trận đấu không?",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "松本", pitch: 0.85 }, B: { name: "ミラー", pitch: 0.75 } },
    script: [
      { sp: "A", jp: "しばらくですね。ビールでも 飲みませんか。", vi: "Lâu rồi không gặp. Uống bia hay gì đó không?" },
      { sp: "B", jp: "いいですね。あ、きょうは 日本と ブラジルの 試合が ありますね。", vi: "Hay đấy. À, hôm nay có trận Nhật – Brazil nhỉ." },
      { sp: "A", jp: "そうですね。ミラーさんは どちらが 勝つと 思いますか。", vi: "Đúng thế. Anh Miller nghĩ bên nào thắng?" },
      { sp: "B", jp: "もちろん ブラジルだと 思います。", vi: "Dĩ nhiên tôi nghĩ là Brazil." },
      { sp: "A", jp: "でも、最近 日本も 強く なりましたよ。", vi: "Nhưng gần đây Nhật cũng mạnh lên rồi đấy." },
      { sp: "B", jp: "そうですね。でも、きっと ブラジルが 勝つと 思います。", vi: "Đúng vậy. Nhưng tôi nghĩ chắc chắn Brazil sẽ thắng." },
      { sp: "A", jp: "じゃ、見ないと…。いっしょに 見ましょう。", vi: "Vậy phải xem mới được… Cùng xem đi." }
    ],
    questions: [
      { q: "きょう 何が ありますか。", o: ["サッカーの 試合", "お祭り", "会議", "パーティー"], a: 0, ev: [1], tip: "Sự kiện + が あります = diễn ra. (Bài không nói rõ môn, nhưng ブラジル và 試合 gợi ý bóng đá.)" },
      { q: "ミラーさんは どちらが 勝つと 思って いますか。", o: ["ブラジル", "日本", "わからない", "どちらも"], a: 0, ev: [5], tip: "Miller giữ ý kiến dù Matsumoto nói Nhật mạnh lên: きっと ブラジル…" },
      { q: "松本さんは 日本の チームに ついて 何と 言いましたか。", o: ["強く なった", "弱く なった", "負けた", "勝った"], a: 0, ev: [4], tip: "～く なりました = trở nên ~." },
      { q: "二人は これから 何を しますか。", o: ["いっしょに 試合を 見ます", "ビールを 買いに 行きます", "家へ 帰ります", "サッカーを します"], a: 0, ev: [6], tip: "Câu kết thúc bằng ～ましょう là kế hoạch tiếp theo." }
    ]
  },
  kanji: [
    { c: "思", hv: "TƯ", on: "シ", kun: "おも(う)", vi: "nghĩ", words: [["思います", "おもいます", "nghĩ"], ["思い出します", "おもいだします", "nhớ lại"]], use: "田 + 心: điều trong lòng." },
    { c: "勝", hv: "THẮNG", on: "ショウ", kun: "か(つ)", vi: "thắng", words: [["勝ちます", "かちます", "thắng"], ["優勝", "ゆうしょう", "vô địch"]], use: "Bộ 月 bên trái." },
    { c: "負", hv: "PHỤ", on: "フ", kun: "ま(ける)", vi: "thua", words: [["負けます", "まけます", "thua"], ["勝負", "しょうぶ", "thắng thua"]], use: "Trái nghĩa 勝." },
    { c: "同", hv: "ĐỒNG", on: "ドウ", kun: "おな(じ)", vi: "giống", words: [["同じ", "おなじ", "giống"], ["同時", "どうじ", "đồng thời"]], use: "同じ đứng trước danh từ không có な." },
    { c: "政", hv: "CHÍNH", on: "セイ", kun: "—", vi: "chính trị", words: [["政治", "せいじ", "chính trị"], ["政府", "せいふ", "chính phủ"]], use: "正 + 攵." },
    { c: "治", hv: "TRỊ", on: "ジ・チ", kun: "なお(る)", vi: "cai trị; chữa", words: [["政治", "せいじ", "chính trị"], ["治ります", "なおります", "khỏi bệnh"]], use: "Bộ 氵." },
    { c: "意", hv: "Ý", on: "イ", kun: "—", vi: "ý", words: [["意見", "いけん", "ý kiến"], ["意味", "いみ", "ý nghĩa"]], use: "音 + 心: tiếng lòng." },
    { c: "交", hv: "GIAO", on: "コウ", kun: "まじ(わる)", vi: "giao", words: [["交通", "こうつう", "giao thông"], ["交差点", "こうさてん", "ngã tư"]], use: "Hình người bắt chéo chân." }
  ],
  grammarQuiz: [
    { q: "あした 雨が（　）と 思います。", o: ["降る", "降ります", "降って", "降るだ"], a: 0, ex: "Trước と 思います là thể thông thường." },
    { q: "あの 町は 静か（　）と 思います。", o: ["だ", "な", "の", "（không cần）"], a: 0, ex: "な-adj + だ + と 思います." },
    { q: "ミラーさんは たぶん（　）と 思います。(không đến)", o: ["来ない", "来ません", "来なくて", "来る ない"], a: 0, ex: "Phủ định nằm ở vế trước と, ở thể thông thường." },
    { q: "新しい 空港に ついて（　）思いますか。", o: ["どう", "どうと", "何と", "どんな"], a: 0, ex: "Hỏi ý kiến: どう 思いますか." },
    { q: "ミラーさんは 来週 出張する（　）言いました。", o: ["と", "を", "が", "に"], a: 0, ex: "Trích dẫn: ～と 言いました." },
    { q: "東京で サッカーの 試合（　）あります。", o: ["が", "を", "で", "に"], a: 0, ex: "Sự kiện: N が あります." },
    { q: "会議室（　）会議が あります。", o: ["で", "に", "を", "が"], a: 0, ex: "Nơi diễn ra sự kiện → で." },
    { q: "ちょっと ビール（　）飲みませんか。", o: ["でも", "しか", "だけ", "まで"], a: 0, ex: "Gợi ý một ví dụ: N でも." },
    { q: "北海道は 寒かった（　）？ (xác nhận, lên giọng)", o: ["でしょう", "ですか", "だ", "と"], a: 0, ex: "Thể thông thường + でしょう？ để xác nhận." }
  ]
};
