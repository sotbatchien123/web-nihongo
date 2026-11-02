// Bài 20 — nội dung tự biên soạn theo phạm vi bài 20 Minna no Nihongo.
window.LESSONS[20] = {
  id: 20,
  title: "夏休みは どう するの？",
  titleVi: "Nghỉ hè cậu tính làm gì?",
  vocab: [
    { w: "要ります［ビザが～］", r: "いります", vi: "cần (visa)", t: "động từ nhóm I", ex: [["ビザが 要る？", "Có cần visa không?"]], note: "Thể thông thường: 要る / 要らない" },
    { w: "調べます", r: "しらべます", vi: "tìm hiểu, tra cứu", t: "động từ nhóm II", ex: [["インターネットで 調べる。", "Tra trên mạng."]], note: "Thể thông thường: 調べる" },
    { w: "直します", r: "なおします", vi: "sửa, chữa", t: "động từ nhóm I", ex: [["作文を 直して。", "Sửa bài văn giúp mình."]], note: "Thể thông thường: 直す" },
    { w: "修理します", r: "しゅうりします", vi: "sửa chữa (máy móc)", t: "động từ nhóm III", ex: [["自転車を 修理した。", "Mình đã sửa xe đạp."]], note: "Thể thông thường: 修理する" },
    { w: "電話します", r: "でんわします", vi: "gọi điện thoại", t: "động từ nhóm III", ex: [["あとで 電話する。", "Lát nữa mình gọi."]], note: "Thể thông thường: 電話する" },
    { w: "僕", r: "ぼく", vi: "tôi, tớ (nam giới, thân mật)", t: "đại từ", ex: [["僕は 学生だ。", "Tớ là sinh viên."]] },
    { w: "君", r: "きみ", vi: "cậu, em (dùng với người dưới, thân)", t: "đại từ", ex: [["君も 行く？", "Cậu cũng đi à?"]] },
    { w: "～君", r: "くん", vi: "cậu ~ (gọi nam giới ít tuổi hơn / ngang hàng)", t: "hậu tố", ex: [["田中君、元気？", "Tanaka, khỏe không?"]] },
    { w: "うん", r: "うん", vi: "ừ (thân mật của はい)", t: "thán từ", ex: [["うん、行く。", "Ừ, đi."]] },
    { w: "ううん", r: "ううん", vi: "không (thân mật của いいえ)", t: "thán từ", ex: [["ううん、行かない。", "Không, không đi."]] },
    { w: "サラリーマン", r: "サラリーマン", vi: "nhân viên văn phòng", t: "danh từ", ex: [["兄は サラリーマンだ。", "Anh tớ là nhân viên văn phòng."]] },
    { w: "言葉", r: "ことば", vi: "từ ngữ, ngôn ngữ", t: "danh từ", ex: [["この 言葉の 意味は 何？", "Từ này nghĩa là gì?"]] },
    { w: "物価", r: "ぶっか", vi: "vật giá", t: "danh từ", ex: [["東京は 物価が 高い。", "Tokyo vật giá đắt."]] },
    { w: "ビザ", r: "ビザ", vi: "visa, thị thực", t: "danh từ", ex: [["ビザが 要る。", "Cần visa."]] },
    { w: "初め", r: "はじめ", vi: "đầu, lúc bắt đầu", t: "danh từ", ex: [["8月の 初めに 帰る。", "Đầu tháng 8 mình về."]] },
    { w: "終わり", r: "おわり", vi: "cuối, kết thúc", t: "danh từ", ex: [["7月の 終わりまで 忙しい。", "Đến cuối tháng 7 mình bận."]] },
    { w: "こっち", r: "こっち", vi: "phía này (thân mật của こちら)", t: "đại từ", ex: [["こっちへ 来て。", "Lại đây."]] },
    { w: "そっち", r: "そっち", vi: "phía đó (thân mật của そちら)", t: "đại từ", ex: [["そっちは どう？", "Bên đó thế nào?"]] },
    { w: "あっち", r: "あっち", vi: "phía kia (thân mật của あちら)", t: "đại từ", ex: [["あっちに 駅が ある。", "Phía kia có ga."]] },
    { w: "どっち", r: "どっち", vi: "phía nào, cái nào (thân mật của どちら)", t: "từ để hỏi", ex: [["どっちが いい？", "Cái nào được?"]] },
    { w: "この 間", r: "このあいだ", vi: "hôm trước, gần đây", t: "danh từ", ex: [["この 間 京都へ 行った。", "Hôm trước mình đi Kyoto."]] },
    { w: "みんなで", r: "みんなで", vi: "mọi người cùng nhau", t: "phó từ", ex: [["みんなで 行かない？", "Mọi người cùng đi không?"]] },
    { w: "～けど", r: "けど", vi: "~ nhưng (thân mật của が)", t: "trợ từ nối câu", ex: [["その カレーは 辛いけど、おいしい。", "Cà ri đó cay nhưng ngon."]] },
    { w: "国へ 帰るの？", r: "くにへかえるの", vi: "cậu về nước à?", t: "cụm", ex: [["夏休み、国へ 帰るの？", "Nghỉ hè cậu về nước à?"]] },
    { w: "どう するの？", r: "どうするの", vi: "cậu định làm thế nào?", t: "cụm", ex: [["夏休みは どう するの？", "Nghỉ hè cậu định làm gì?"]] },
    { w: "どう しようかな", r: "どうしようかな", vi: "làm gì bây giờ nhỉ", t: "cụm", ex: [["うーん、どう しようかな。", "Ừm, làm gì bây giờ nhỉ."]] },
    { w: "よかったら", r: "よかったら", vi: "nếu được thì", t: "cụm", ex: [["よかったら、いっしょに 行かない？", "Nếu được thì đi cùng không?"]] },
    { w: "いろいろ", r: "いろいろ", vi: "nhiều thứ", t: "phó từ", ex: [["いろいろ ありがとう。", "Cảm ơn vì nhiều thứ."]] },
    { w: "作文", r: "さくぶん", vi: "bài văn", t: "danh từ", ex: [["作文を 書いた。", "Mình đã viết bài văn."]] }
  ],
  grammar: [
    {
      pattern: "Thể lịch sự（丁寧形）và thể thông thường（普通形）",
      func: "Tiếng Nhật có hai lối nói: lịch sự (です・ます) và thông thường. Thể thông thường dùng với bạn bè, gia đình, người dưới, và trong văn viết (báo, luận văn, nhật ký).",
      explain: ["Động từ: ます → thể từ điển / ない / た / なかった.", "Tính từ い: bỏ です (暑い / 暑くない / 暑かった / 暑くなかった).", "Tính từ な và danh từ: です → だ (静かだ / 静かじゃ ない / 静かだった / 静かじゃ なかった)."],
      parts: [["Động từ", "書く・書かない・書いた・書かなかった"], ["い-adj", "大きい・大きくない・大きかった・大きくなかった"], ["な-adj", "静かだ・静かじゃない・静かだった・静かじゃなかった"], ["N", "雨だ・雨じゃない・雨だった・雨じゃなかった"]],
      usage: [{ rule: "So sánh.", ex: [["あした 東京へ 行きます。→ あした 東京へ 行く。", "Mai tôi đi Tokyo. → Mai đi Tokyo."], ["きのうは 暇でした。→ きのうは 暇だった。", "Hôm qua tôi rảnh."]] }],
      notes: ["Thể thông thường của あります là ある, phủ định là ない."]
    },
    {
      pattern: "Dùng thể lịch sự hay thể thông thường?",
      func: "Chọn theo quan hệ với người nghe: người lạ, người trên, quan hệ công việc → thể lịch sự; bạn thân, gia đình, người nhỏ tuổi → thể thông thường.",
      explain: ["Dùng thể thông thường không đúng chỗ (với người trên) bị coi là thất lễ.", "Văn viết như báo, luận văn, nhật ký thường dùng thể thông thường."],
      parts: [["丁寧形", "người trên, người lạ"], ["普通形", "bạn bè, gia đình"]],
      usage: [{ rule: "Cùng một nội dung, hai lối nói.", ex: [["先生、あした 来ますか。", "Thưa thầy, mai thầy có đến không ạ?"], ["田中君、あした 来る？", "Tanaka, mai cậu đến không?"]] }],
      notes: []
    },
    {
      pattern: "Hội thoại bằng thể thông thường",
      func: "Những đặc điểm của văn nói thân mật.",
      explain: ["Câu hỏi thường bỏ か, lên giọng cuối câu: 飲む？ / 行く？", "Với danh từ, tính từ な: bỏ だ trong câu hỏi: 今 暇？", "Trợ từ は, を, へ… thường bị lược: ご飯［を］食べる？", "Trả lời はい/いいえ → うん/ううん."],
      parts: [["Câu hỏi", "～？ (bỏ か)"], ["だ", "bỏ だ khi hỏi: 元気？"], ["Trợ từ", "lược は・を・へ"]],
      usage: [
        { rule: "Hỏi – đáp thân mật.", ex: [["コーヒーを 飲む？ ―― うん、飲む。", "Uống cà phê không? — Ừ, uống."], ["あした 暇？ ―― ううん、暇じゃ ない。", "Mai rảnh không? — Không, không rảnh."]] },
        { rule: "Thể て ください → ～て.", ex: [["ちょっと 待って。", "Đợi chút."]] }
      ],
      notes: ["Nam giới hay dùng 僕, ～君; nữ giới thường giữ nhẹ nhàng hơn."]
    },
    {
      pattern: "S1 けど、S2",
      func: "けど là dạng thân mật của が (nhưng, hoặc lời mở đầu), dùng trong văn nói.",
      parts: [["けど", "= が (thân mật)"]],
      usage: [
        { rule: "Đối lập.", ex: [["その カレーは 辛いけど、おいしい。", "Cà ri đó cay nhưng ngon."]] },
        { rule: "Mở đầu.", ex: [["相撲の チケット ある けど、いっしょに 行かない？", "Mình có vé Sumo, đi cùng không?"]] }
      ],
      notes: []
    }
  ],
  reading: {
    title: "友達への メール",
    titleVi: "Email gửi bạn",
    source: "Bài đọc tự biên soạn (văn thông thường), chỉ dùng từ vựng – ngữ pháp bài 1–20.",
    paragraphs: [
      {
        s: [
          { t: "ハンさん||Hân / 、||, / 元気|げんき|khỏe / ？||?", vi: "Hân, khỏe không?" },
          { t: "僕|ぼく|tớ / は||(chủ đề) / 元気|げんき|khỏe / だ||(là) / よ||đấy / 。||", vi: "Tớ khỏe." },
          { t: "大阪|おおさか|Osaka / は||(chủ đề) / 最近|さいきん|gần đây / とても||rất / 暑い|あつい|nóng / 。||", vi: "Osaka dạo này rất nóng." },
          { t: "この 間|このあいだ|hôm trước / 、||, / 友達|ともだち|bạn / と||cùng / 京都|きょうと|Kyoto / の||(của) / お祭り|おまつり|lễ hội / へ||đến / 行った|いった|đã đi / 。||", vi: "Hôm trước tớ đi lễ hội ở Kyoto với bạn." },
          { t: "人|ひと|người / が||(chủ thể) / 多かった|おおかった|đã đông / けど||nhưng / 、||, / 楽しかった|たのしかった|đã vui / 。||", vi: "Đông người nhưng vui." }
        ],
        vi: "Đoạn 1: Hỏi thăm; tớ khỏe; Osaka nóng; hôm trước đi lễ hội Kyoto – đông nhưng vui."
      },
      {
        s: [
          { t: "夏休み|なつやすみ|nghỉ hè / は||(chủ đề) / 国|くに|nước / へ||về / 帰らない|かえらない|không về / 。||", vi: "Nghỉ hè tớ không về nước." },
          { t: "アルバイト||làm thêm / が||(đối tượng) / ある||có / から||vì / 。||", vi: "Vì có việc làm thêm." },
          { t: "でも||nhưng / 、||, / 8月|はちがつ|tháng 8 / の||(của) / 終わり|おわり|cuối / に||vào / 北海道|ほっかいどう|Hokkaido / へ||đến / 行きたい|いきたい|muốn đi / 。||", vi: "Nhưng cuối tháng 8 tớ muốn đi Hokkaido." },
          { t: "ハンさん||Hân / も||cũng / 日本|にほん|Nhật / へ||đến / 来ない|こない|không đến? / ？||?", vi: "Hân cũng sang Nhật không?" },
          { t: "ベトナム人|ベトナムじん|người VN / は||(chủ đề) / ビザ||visa / が||(đối tượng) / 要る|いる|cần / けど||nhưng / 、||, / 僕|ぼく|tớ / が||(chủ ngữ) / 調べる|しらべる|tìm hiểu / よ||đấy / 。||", vi: "Người Việt cần visa, nhưng tớ sẽ tìm hiểu cho." }
        ],
        vi: "Đoạn 2: Nghỉ hè không về nước vì làm thêm; cuối tháng 8 muốn đi Hokkaido, rủ Hân sang Nhật, sẽ tìm hiểu visa giúp."
      }
    ],
    summary: "Toàn bài: một email thân mật viết bằng thể thông thường (だ, ～た, ～ない, けど, câu hỏi bỏ か). Mẹo đọc: chuyển thầm sang thể lịch sự để hiểu đúng thì và khẳng định/phủ định — ví dụ 帰らない = 帰りません.",
    questions: [
      { q: "京都の お祭りは どうでしたか。", o: ["人が 多かったですが、楽しかったです", "人が 少なくて、静かでした", "暑くて、楽しくなかったです", "行きませんでした"], a: 0, ev: [0, 4], tip: "多かった けど 楽しかった = 多かったですが、楽しかったです." },
      { q: "夏休みに 国へ 帰りますか。", o: ["いいえ、帰りません", "はい、帰ります", "8月の 終わりに 帰ります", "わかりません"], a: 0, ev: [1, 0], tip: "帰らない = thể ない (phủ định)." },
      { q: "どうして 帰りませんか。", o: ["アルバイトが ありますから", "北海道へ 行きますから", "ビザが 要りますから", "暑いですから"], a: 0, ev: [1, 1], tip: "Câu ngắn ～から。 ngay sau là lý do của câu trước." },
      { q: "この 人は 何を 調べますか。", o: ["ビザの こと", "ホテル", "電車の 時間", "北海道の 天気"], a: 0, ev: [1, 4], tip: "僕が 調べるよ = tớ sẽ tra cứu (thể từ điển = tương lai)." }
    ]
  },
  listening: {
    title: "夏休みは どう するの？",
    titleVi: "Nghỉ hè tính làm gì?",
    source: "Hội thoại tự biên soạn (thể thông thường); âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "小林", pitch: 0.85 }, B: { name: "タワポン", pitch: 0.75 } },
    script: [
      { sp: "A", jp: "タワポン君、夏休みは 国へ 帰るの？", vi: "Thawaphon, nghỉ hè cậu về nước à?" },
      { sp: "B", jp: "ううん、帰りたいけど、物価が 高いから…。どう しようかな。", vi: "Không, muốn về nhưng đắt đỏ quá… Làm gì bây giờ nhỉ." },
      { sp: "A", jp: "富士山に 登った こと ある？", vi: "Cậu từng leo Phú Sĩ chưa?" },
      { sp: "B", jp: "ううん、ない。", vi: "Chưa." },
      { sp: "A", jp: "じゃ、よかったら、いっしょに 行かない？", vi: "Vậy nếu được thì đi cùng không?" },
      { sp: "B", jp: "うん、行く。いつ 行くの？", vi: "Ừ, đi. Khi nào đi?" },
      { sp: "A", jp: "8月の 初めは どう？", vi: "Đầu tháng 8 thế nào?" },
      { sp: "B", jp: "いいよ。じゃ、僕が 電車の 時間を 調べるね。", vi: "Được. Vậy tớ sẽ tra giờ tàu nhé." }
    ],
    questions: [
      { q: "タワポン君は 夏休みに 国へ 帰りますか。", o: ["いいえ、帰りません", "はい、帰ります", "8月に 帰ります", "わかりません"], a: 0, ev: [1], tip: "ううん = いいえ. 帰りたいけど… nghĩa là muốn nhưng không về." },
      { q: "タワポン君は 富士山に 登った ことが ありますか。", o: ["いいえ、ありません", "はい、あります", "何回も あります", "わかりません"], a: 0, ev: [3], tip: "ない = ありません (thể thông thường của あります là ある / ない)." },
      { q: "二人は いつ 富士山へ 行きますか。", o: ["8月の 初め", "8月の 終わり", "7月の 初め", "あした"], a: 0, ev: [6], tip: "Nghe 初め (đầu) / 終わり (cuối)." },
      { q: "タワポン君は 何を しますか。", o: ["電車の 時間を 調べます", "ホテルを 予約します", "切符を 買います", "車を 運転します"], a: 0, ev: [7], tip: "僕が ～ね: “tớ sẽ …”." }
    ]
  },
  kanji: [
    { c: "言", hv: "NGÔN", on: "ゲン・ゴン", kun: "い(う)・こと", vi: "nói, lời", words: [["言います", "いいます", "nói"], ["言葉", "ことば", "từ ngữ"], ["方言", "ほうげん", "phương ngữ"]], use: "Là bộ thủ 言 trong 話, 語, 読…" },
    { c: "葉", hv: "DIỆP", on: "ヨウ", kun: "は", vi: "lá", words: [["言葉", "ことば", "từ ngữ (biến âm ば)"], ["葉", "は", "lá"]], use: "艹 (cỏ) + 世 + 木." },
    { c: "調", hv: "ĐIỀU", on: "チョウ", kun: "しら(べる)", vi: "điều tra; giọng", words: [["調べます", "しらべます", "tìm hiểu"], ["調子", "ちょうし", "tình trạng"]], use: "Bộ 言 bên trái." },
    { c: "直", hv: "TRỰC", on: "チョク", kun: "なお(す)", vi: "thẳng; sửa", words: [["直します", "なおします", "sửa"], ["直接", "ちょくせつ", "trực tiếp"]], use: "Sơ cấp chủ yếu dùng なお(します)." },
    { c: "僕", hv: "BỘC", on: "ボク", kun: "—", vi: "tôi (nam)", words: [["僕", "ぼく", "tớ (nam)"]], use: "Bộ 亻 (người)." },
    { c: "君", hv: "QUÂN", on: "クン", kun: "きみ", vi: "cậu, anh", words: [["君", "きみ", "cậu"], ["～君", "くん", "cậu ~"]], use: "Đứng riêng きみ; hậu tố くん." },
    { c: "始", hv: "THỦY", on: "シ", kun: "はじ(める)", vi: "bắt đầu", words: [["始めます", "はじめます", "bắt đầu"], ["開始", "かいし", "khai mạc"]], use: "Bộ 女 bên trái. Trái nghĩa 終." },
    { c: "終", hv: "CHUNG", on: "シュウ", kun: "お(わる)", vi: "kết thúc", words: [["終わります", "おわります", "kết thúc"], ["終わり", "おわり", "cuối"], ["終電", "しゅうでん", "chuyến tàu cuối"]], use: "Bộ 糸 (sợi) bên trái." }
  ],
  grammarQuiz: [
    { q: "「行きます」の 普通形（現在・肯定）は？", o: ["行く", "行った", "行かない", "行きだ"], a: 0, ex: "ます → thể từ điển." },
    { q: "「飲みませんでした」の 普通形は？", o: ["飲まなかった", "飲まない", "飲んだ", "飲みなかった"], a: 0, ex: "Phủ định quá khứ: ない → なかった." },
    { q: "「暇でした」の 普通形は？", o: ["暇だった", "暇かった", "暇でした", "暇だ"], a: 0, ex: "な-adj quá khứ: だった." },
    { q: "「おいしくないです」の 普通形は？", o: ["おいしくない", "おいしくないだ", "おいしいじゃない", "おいしくなかった"], a: 0, ex: "い-adj: bỏ です." },
    { q: "「雨です」の 普通形は？", o: ["雨だ", "雨", "雨い", "雨だった"], a: 0, ex: "N です → N だ." },
    { q: "あした 暇（　）？(hỏi bạn thân)", o: ["（không cần gì）", "だ", "だか", "ですか"], a: 0, ex: "Câu hỏi thân mật với N/な-adj bỏ だ: 暇？" },
    { q: "コーヒー 飲む？ ―― （　）、飲まない。", o: ["ううん", "うん", "はい", "ええ"], a: 0, ex: "Phủ định thân mật: ううん." },
    { q: "その カレーは 辛い（　）、おいしい。", o: ["けど", "から", "し", "と"], a: 0, ex: "Thân mật của が (nhưng): けど." },
    { q: "Với ai nên dùng thể thông thường?", o: ["Bạn thân cùng lớp", "Giáo viên", "Khách hàng", "Người lần đầu gặp"], a: 0, ex: "Thể thông thường dùng với người thân thiết, ngang hàng hoặc nhỏ hơn." }
  ]
};
