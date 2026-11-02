// Bài 11 — nội dung tự biên soạn theo phạm vi bài 11 Minna no Nihongo.
window.LESSONS[11] = {
  id: 11,
  title: "これ、お願いします",
  titleVi: "Nhờ anh gửi cái này",
  vocab: [
    { w: "います", r: "います", vi: "có (con, anh chị em…)", t: "động từ", ex: [["私は 兄弟が 3人 います。", "Tôi có 3 anh chị em."]] },
    { w: "［日本に～］います", r: "にほんにいます", vi: "ở (Nhật)", t: "động từ", ex: [["1年 日本に います。", "Tôi ở Nhật 1 năm."]] },
    { w: "かかります", r: "かかります", vi: "mất, tốn (thời gian, tiền)", t: "động từ", ex: [["大阪から 東京まで 3時間 かかります。", "Từ Osaka đến Tokyo mất 3 tiếng."]] },
    { w: "休みます［会社を～］", r: "やすみます", vi: "nghỉ (làm)", t: "động từ", ex: [["会社を 2日 休みました。", "Tôi đã nghỉ làm 2 ngày."]] },
    { w: "一つ", r: "ひとつ", vi: "1 cái", t: "số từ", ex: [["りんごを 一つ ください。", "Cho tôi 1 quả táo."]] },
    { w: "二つ", r: "ふたつ", vi: "2 cái", t: "số từ", ex: [["みかんを 二つ 買いました。", "Tôi mua 2 quả quýt."]] },
    { w: "三つ", r: "みっつ", vi: "3 cái", t: "số từ", ex: [["卵が 三つ あります。", "Có 3 quả trứng."]] },
    { w: "四つ", r: "よっつ", vi: "4 cái", t: "số từ", ex: [["箱が 四つ あります。", "Có 4 cái hộp."]] },
    { w: "五つ", r: "いつつ", vi: "5 cái", t: "số từ", ex: [["五つ ください。", "Cho tôi 5 cái."]] },
    { w: "六つ", r: "むっつ", vi: "6 cái", t: "số từ", ex: [["六つ あります。", "Có 6 cái."]] },
    { w: "七つ", r: "ななつ", vi: "7 cái", t: "số từ", ex: [["七つ 買います。", "Mua 7 cái."]] },
    { w: "八つ", r: "やっつ", vi: "8 cái", t: "số từ", ex: [["八つ あります。", "Có 8 cái."]] },
    { w: "九つ", r: "ここのつ", vi: "9 cái", t: "số từ", ex: [["九つ ください。", "Cho 9 cái."]] },
    { w: "十", r: "とお", vi: "10 cái", t: "số từ", ex: [["りんごが 十 あります。", "Có 10 quả táo."]] },
    { w: "いくつ", r: "いくつ", vi: "mấy cái", t: "từ để hỏi", ex: [["みかんを いくつ 買いましたか。", "Bạn mua mấy quả quýt?"]] },
    { w: "一人", r: "ひとり", vi: "1 người", t: "số từ", ex: [["一人で 来ました。", "Tôi đến một mình."]] },
    { w: "二人", r: "ふたり", vi: "2 người", t: "số từ", ex: [["子どもが 二人 います。", "Tôi có 2 con."]] },
    { w: "～人", r: "にん", vi: "~ người", t: "hậu tố đếm", ex: [["学生が 5人 います。", "Có 5 sinh viên."]], note: "4人 よにん." },
    { w: "～台", r: "だい", vi: "~ chiếc (máy, xe)", t: "hậu tố đếm", ex: [["車が 2台 あります。", "Có 2 chiếc ô tô."]] },
    { w: "～枚", r: "まい", vi: "~ tờ, tấm (vật mỏng)", t: "hậu tố đếm", ex: [["切手を 5枚 ください。", "Cho tôi 5 con tem."]] },
    { w: "～回", r: "かい", vi: "~ lần", t: "hậu tố đếm", ex: [["1週間に 2回 テニスを します。", "Một tuần chơi tennis 2 lần."]], note: "1回 いっかい, 6回 ろっかい, 8回 はっかい, 10回 じゅっかい." },
    { w: "りんご", r: "りんご", vi: "táo", t: "danh từ", ex: [["りんごを 四つ 買いました。", "Tôi mua 4 quả táo."]] },
    { w: "みかん", r: "みかん", vi: "quýt", t: "danh từ", ex: [["みかんは いくつ ありますか。", "Có mấy quả quýt?"]] },
    { w: "サンドイッチ", r: "サンドイッチ", vi: "bánh sandwich", t: "danh từ", ex: [["サンドイッチを 二つ ください。", "Cho tôi 2 cái sandwich."]] },
    { w: "カレー［ライス］", r: "カレー", vi: "cơm cà ri", t: "danh từ", ex: [["カレーを 一つ ください。", "Cho tôi 1 cơm cà ri."]] },
    { w: "アイスクリーム", r: "アイスクリーム", vi: "kem", t: "danh từ", ex: [["アイスクリームを 三つ ください。", "Cho 3 cây kem."]] },
    { w: "切手", r: "きって", vi: "tem", t: "danh từ", ex: [["80円の 切手を 5枚 ください。", "Cho 5 con tem 80 yên."]] },
    { w: "はがき", r: "はがき", vi: "bưu thiếp", t: "danh từ", ex: [["はがきを 2枚 ください。", "Cho 2 tấm bưu thiếp."]] },
    { w: "封筒", r: "ふうとう", vi: "phong bì", t: "danh từ", ex: [["封筒を 1枚 ください。", "Cho 1 cái phong bì."]] },
    { w: "速達", r: "そくたつ", vi: "chuyển phát nhanh", t: "danh từ", ex: [["速達で お願いします。", "Gửi chuyển phát nhanh giúp tôi."]] },
    { w: "書留", r: "かきとめ", vi: "thư bảo đảm", t: "danh từ", ex: [["書留で 送ります。", "Gửi thư bảo đảm."]] },
    { w: "エアメール（航空便）", r: "エアメール", vi: "thư máy bay", t: "danh từ", ex: [["エアメールで いくら かかりますか。", "Gửi đường hàng không hết bao nhiêu?"]], note: "航空便 đọc こうくうびん." },
    { w: "船便", r: "ふなびん", vi: "gửi đường biển", t: "danh từ", ex: [["船便で 2か月 かかります。", "Đường biển mất 2 tháng."]] },
    { w: "両親", r: "りょうしん", vi: "bố mẹ", t: "danh từ", ex: [["両親は 国に います。", "Bố mẹ tôi ở trong nước."]] },
    { w: "兄弟", r: "きょうだい", vi: "anh chị em", t: "danh từ", ex: [["兄弟が 何人 いますか。", "Bạn có mấy anh chị em?"]] },
    { w: "兄", r: "あに", vi: "anh trai (mình)", t: "danh từ", ex: [["兄が 一人 います。", "Tôi có 1 anh trai."]] },
    { w: "お兄さん", r: "おにいさん", vi: "anh trai (người khác)", t: "danh từ", ex: [["お兄さんは 何歳ですか。", "Anh trai bạn bao nhiêu tuổi?"]] },
    { w: "姉", r: "あね", vi: "chị gái (mình)", t: "danh từ", ex: [["姉は 銀行員です。", "Chị tôi là nhân viên ngân hàng."]] },
    { w: "お姉さん", r: "おねえさん", vi: "chị gái (người khác)", t: "danh từ", ex: [["お姉さんは どこに いますか。", "Chị gái bạn ở đâu?"]] },
    { w: "弟", r: "おとうと", vi: "em trai (mình)", t: "danh từ", ex: [["弟は 学生です。", "Em trai tôi là sinh viên."]] },
    { w: "弟さん", r: "おとうとさん", vi: "em trai (người khác)", t: "danh từ", ex: [["弟さんは 何歳ですか。", "Em trai bạn mấy tuổi?"]] },
    { w: "妹", r: "いもうと", vi: "em gái (mình)", t: "danh từ", ex: [["妹が 二人 います。", "Tôi có 2 em gái."]] },
    { w: "妹さん", r: "いもうとさん", vi: "em gái (người khác)", t: "danh từ", ex: [["妹さんは 学生ですか。", "Em gái bạn là sinh viên à?"]] },
    { w: "外国", r: "がいこく", vi: "nước ngoài", t: "danh từ", ex: [["外国の 切手です。", "Tem nước ngoài."]] },
    { w: "留学生", r: "りゅうがくせい", vi: "du học sinh", t: "danh từ", ex: [["クラスに 留学生が 10人 います。", "Lớp có 10 du học sinh."]] },
    { w: "クラス", r: "クラス", vi: "lớp học", t: "danh từ", ex: [["クラスに 学生が 何人 いますか。", "Lớp có bao nhiêu học sinh?"]] },
    { w: "～時間", r: "じかん", vi: "~ tiếng (khoảng thời gian)", t: "hậu tố", ex: [["毎日 8時間 働きます。", "Mỗi ngày làm 8 tiếng."]] },
    { w: "～週間", r: "しゅうかん", vi: "~ tuần", t: "hậu tố", ex: [["2週間 休みます。", "Nghỉ 2 tuần."]] },
    { w: "～か月", r: "かげつ", vi: "~ tháng", t: "hậu tố", ex: [["3か月 日本語を 勉強しました。", "Tôi học tiếng Nhật 3 tháng."]] },
    { w: "～年", r: "ねん", vi: "~ năm", t: "hậu tố", ex: [["2年 日本に います。", "Tôi ở Nhật 2 năm."]] },
    { w: "～ぐらい", r: "ぐらい", vi: "khoảng ~", t: "trợ từ", ex: [["30分ぐらい かかります。", "Mất khoảng 30 phút."]] },
    { w: "どのくらい", r: "どのくらい", vi: "bao lâu", t: "từ để hỏi", ex: [["どのくらい 日本語を 勉強しましたか。", "Bạn học tiếng Nhật bao lâu?"]] },
    { w: "全部で", r: "ぜんぶで", vi: "tất cả, tổng cộng", t: "phó từ", ex: [["全部で 500円です。", "Tổng cộng 500 yên."]] },
    { w: "みんな", r: "みんな", vi: "mọi người, tất cả", t: "danh từ", ex: [["みんな 元気です。", "Mọi người đều khỏe."]] },
    { w: "～だけ", r: "だけ", vi: "chỉ ~", t: "trợ từ", ex: [["休みは 日曜日だけです。", "Ngày nghỉ chỉ có chủ nhật."]] },
    { w: "かしこまりました", r: "かしこまりました", vi: "tôi hiểu rồi ạ (rất lịch sự)", t: "cụm", ex: [["かしこまりました。", "Vâng, tôi hiểu rồi ạ."]] },
    { w: "いい 天気ですね", r: "いいてんきですね", vi: "trời đẹp nhỉ", t: "cụm", ex: [["いい 天気ですね。", "Trời đẹp nhỉ."]] },
    { w: "お出かけですか", r: "おでかけですか", vi: "anh/chị đi ra ngoài à?", t: "cụm", ex: [["お出かけですか。 ―― ええ、ちょっと 郵便局まで。", "Đi đâu đấy? — Vâng, ra bưu điện chút."]] },
    { w: "行って いらっしゃい", r: "いっていらっしゃい", vi: "đi nhé (người ở nhà nói)", t: "cụm", ex: [["行って いらっしゃい。", "Đi cẩn thận nhé."]] },
    { w: "行って まいります", r: "いってまいります", vi: "tôi đi đây (người đi nói)", t: "cụm", ex: [["行って まいります。", "Tôi đi đây."]] },
    { w: "それから", r: "それから", vi: "và thêm nữa, sau đó", t: "liên từ", ex: [["切手を 5枚 ください。それから、はがきも。", "Cho 5 tem. Và cả bưu thiếp nữa."]] },
    { w: "オーストラリア", r: "オーストラリア", vi: "Úc", t: "danh từ riêng", ex: [["オーストラリアまで エアメールで いくらですか。", "Gửi máy bay đến Úc bao nhiêu?"]] }
  ],
  grammar: [
    {
      pattern: "Cách đếm số lượng",
      func: "Tiếng Nhật đếm đồ vật bằng số + từ đếm (助数詞) tùy loại vật. Bài 11 học ～つ (đồ vật chung), ～人 (người), ～台 (máy, xe), ～枚 (vật mỏng), ～回 (lần), và các từ đếm khoảng thời gian.",
      explain: ["～つ chỉ dùng từ 1 đến 9; 10 là とお; từ 11 trở đi dùng số đếm thường (じゅういち…).", "Người: 1人 ひとり, 2人 ふたり, từ 3 trở đi số + にん (4人 よにん)."],
      parts: [["～つ", "đồ vật nói chung, quả, cái"], ["～人", "người"], ["～台", "máy móc, xe"], ["～枚", "giấy, tem, áo, đĩa…"], ["～回", "số lần"]],
      usage: [
        { rule: "Đếm theo loại.", ex: [["りんごを 四つ 買いました。", "Tôi mua 4 quả táo."], ["パソコンが 2台 あります。", "Có 2 cái máy tính."], ["切手を 3枚 ください。", "Cho tôi 3 con tem."]] },
        { rule: "Hỏi số lượng: いくつ (cho ～つ), 何＋từ đếm (何人, 何台, 何枚).", ex: [["みかんを いくつ 買いましたか。 ―― 八つ 買いました。", "Mua mấy quả quýt? — 8 quả."], ["クラスに 学生が 何人 いますか。", "Lớp có bao nhiêu học sinh?"]] }
      ],
      notes: []
    },
    {
      pattern: "Vị trí của số từ: N を／が + số từ + V",
      func: "Số từ (số + từ đếm) thường đứng ngay trước động từ, sau N を／が, không cần trợ từ.",
      parts: [["N を số từ V", "りんごを 四つ 買います"], ["N が số từ あります／います", "子どもが 二人 います"]],
      usage: [
        { rule: "Số lượng đồ vật / người.", ex: [["80円の 切手を 5枚 ください。", "Cho tôi 5 con tem 80 yên."], ["外国人の 学生が 二人 います。", "Có 2 sinh viên nước ngoài."]] }
      ],
      notes: ["Khoảng thời gian (～時間, ～日…) cũng đứng trước động từ: 3時間 かかります."]
    },
    {
      pattern: "Khoảng thời gian: ～時間・～日・～週間・～か月・～年",
      func: "Diễn tả độ dài thời gian. Hỏi bằng どのくらい. Thêm ぐらい sau số để nói “khoảng”.",
      explain: ["～分 và ～日 dùng chung cho cả thời điểm và khoảng thời gian; 時 (giờ) chỉ thời điểm, 時間 (tiếng) chỉ khoảng.", "Khoảng thời gian không dùng に."],
      parts: [["どのくらい", "bao lâu"], ["～ぐらい", "khoảng"]],
      usage: [
        { rule: "Hỏi thời gian kéo dài.", ex: [["どのくらい 日本語を 勉強しましたか。 ―― 3年 勉強しました。", "Bạn học tiếng Nhật bao lâu? — 3 năm."]] },
        { rule: "Hỏi thời gian di chuyển với かかります.", ex: [["大阪から 東京まで 新幹線で どのくらい かかりますか。 ―― 2時間半 かかります。", "Từ Osaka đến Tokyo bằng Shinkansen mất bao lâu? — 2 tiếng rưỡi."]] },
        { rule: "Khoảng.", ex: [["学校に 先生が 30人ぐらい います。", "Trường có khoảng 30 giáo viên."]] }
      ],
      notes: []
    },
    {
      pattern: "Số từ（khoảng thời gian）に ～回 V",
      func: "Diễn tả tần suất: “trong (khoảng thời gian) làm ~ lần”.",
      parts: [["に", "Đứng sau khoảng thời gian làm mốc."]],
      usage: [{ rule: "Tần suất.", ex: [["1か月に 2回 映画を 見ます。", "Một tháng tôi xem phim 2 lần."], ["1週間に 1回 両親に 電話を かけます。", "Mỗi tuần tôi gọi cho bố mẹ 1 lần."]] }],
      notes: []
    },
    {
      pattern: "Số từ だけ ／ N だけ",
      func: "だけ = “chỉ”, giới hạn số lượng hoặc phạm vi, không có thêm.",
      parts: [["だけ", "Đặt sau số từ hoặc danh từ."]],
      usage: [
        { rule: "Giới hạn số lượng.", ex: [["パワー電気に 外国人の 社員が 一人だけ います。", "Ở Power Electric chỉ có 1 nhân viên nước ngoài."]] },
        { rule: "Giới hạn phạm vi.", ex: [["休みは 日曜日だけです。", "Ngày nghỉ chỉ có chủ nhật."]] }
      ],
      notes: []
    }
  ],
  reading: {
    title: "私の 家族",
    titleVi: "Gia đình tôi",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–11.",
    paragraphs: [
      {
        s: [
          { t: "私|わたし|tôi / は||(chủ đề) / 5人|ごにん|5 người / 家族|かぞく|gia đình / です||là / 。||", vi: "Gia đình tôi có 5 người." },
          { t: "両親|りょうしん|bố mẹ / と||và / 兄|あに|anh trai / が||(chủ thể) / 一人|ひとり|1 người / 、||, / 妹|いもうと|em gái / が||(chủ thể) / 一人|ひとり|1 người / います||có / 。||", vi: "Có bố mẹ, 1 anh trai và 1 em gái." },
          { t: "兄|あに|anh trai / は||(chủ đề) / 銀行員|ぎんこういん|nhân viên ngân hàng / です||là / 。||", vi: "Anh trai tôi là nhân viên ngân hàng." },
          { t: "妹|いもうと|em gái / は||(chủ đề) / 高校生|こうこうせい|học sinh cấp 3 / です||là / 。||", vi: "Em gái tôi là học sinh cấp 3." }
        ],
        vi: "Đoạn 1: Gia đình 5 người: bố mẹ, anh trai (nhân viên ngân hàng), em gái (học sinh cấp 3) và tôi."
      },
      {
        s: [
          { t: "私|わたし|tôi / は||(chủ đề) / 日本|にほん|Nhật / に||ở / 2年|にねん|2 năm / います||ở / 。||", vi: "Tôi ở Nhật được 2 năm." },
          { t: "家族|かぞく|gia đình / は||(chủ đề) / みんな||mọi người / ベトナム||Việt Nam / に||ở / います||ở / 。||", vi: "Cả gia đình đều ở Việt Nam." },
          { t: "1週間|いっしゅうかん|1 tuần / に||(trong) / 1回|いっかい|1 lần / 両親|りょうしん|bố mẹ / に||cho / 電話|でんわ|điện thoại / を||(tân ngữ) / かけます||gọi / 。||", vi: "Mỗi tuần tôi gọi điện cho bố mẹ 1 lần." }
        ],
        vi: "Đoạn 2: Tôi ở Nhật 2 năm; gia đình ở Việt Nam; tuần gọi về 1 lần."
      },
      {
        s: [
          { t: "きのう||hôm qua / 、||, / 郵便局|ゆうびんきょく|bưu điện / で||ở / 妹|いもうと|em gái / に||cho / 荷物|にもつ|bưu phẩm / を||(tân ngữ) / 送りました|おくりました|đã gửi / 。||", vi: "Hôm qua tôi gửi bưu phẩm cho em gái ở bưu điện." },
          { t: "船便|ふなびん|đường biển / で||bằng / 1か月|いっかげつ|1 tháng / ぐらい||khoảng / かかります||mất / 。||", vi: "Gửi đường biển mất khoảng 1 tháng." },
          { t: "エアメール||đường hàng không / で||bằng / 1週間|いっしゅうかん|1 tuần / だけ||chỉ / です||là / が||nhưng / 、||, / 高い|たかい|đắt / です||(là) / から||vì / 、||, / 船便|ふなびん|đường biển / で||bằng / 送りました|おくりました|đã gửi / 。||", vi: "Đường hàng không chỉ 1 tuần nhưng đắt nên tôi gửi đường biển." }
        ],
        vi: "Đoạn 3: Gửi bưu phẩm cho em gái: chọn đường biển (khoảng 1 tháng) vì máy bay (1 tuần) đắt."
      }
    ],
    summary: "Toàn bài: giới thiệu gia đình 5 người, thời gian ở Nhật (2 năm), tần suất gọi điện (1 tuần 1 lần) và việc gửi bưu phẩm bằng đường biển. Bài kiểm tra kỹ năng đọc số lượng (人), khoảng thời gian (年, か月, 週間) và tần suất (に～回).",
    questions: [
      { q: "この 人の 兄弟は 何人ですか。(không tính mình)", o: ["2人", "3人", "5人", "1人"], a: 0, ev: [0, 1], tip: "Bẫy: 5人 là cả gia đình. Anh chị em = 兄 一人 + 妹 一人 = 2 người." },
      { q: "どのくらい 日本に いますか。", o: ["2年", "1年", "1か月", "1週間"], a: 0, ev: [1, 0], tip: "どのくらい → tìm số + 年/か月 đi với động từ います (ở)." },
      { q: "どのくらい 両親に 電話を かけますか。", o: ["1週間に 1回", "1か月に 1回", "1週間に 2回", "毎日"], a: 0, ev: [1, 2], tip: "Tần suất = khoảng thời gian + に + số lần (回)." },
      { q: "どうして 船便で 送りましたか。", o: ["エアメールは 高いですから", "船便は 速いですから", "エアメールは ありませんから", "荷物が 大きいですから"], a: 0, ev: [2, 2], tip: "Lý do nằm trước から; chú ý vế が (nhưng) — ưu điểm của máy bay bị gạt đi." }
    ]
  },
  listening: {
    title: "郵便局で",
    titleVi: "Ở bưu điện",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "リー", pitch: 1.3 }, B: { name: "局員", pitch: 0.85 } },
    script: [
      { sp: "A", jp: "すみません。これ、オーストラリアまで お願いします。", vi: "Xin lỗi. Nhờ anh gửi cái này đi Úc." },
      { sp: "B", jp: "はい。船便ですか、エアメールですか。", vi: "Vâng. Gửi đường biển hay đường hàng không ạ?" },
      { sp: "A", jp: "船便で いくらですか。", vi: "Đường biển bao nhiêu ạ?" },
      { sp: "B", jp: "1,200円です。2か月ぐらい かかります。", vi: "1.200 yên. Mất khoảng 2 tháng." },
      { sp: "A", jp: "エアメールは？", vi: "Còn máy bay?" },
      { sp: "B", jp: "3,500円です。1週間ぐらい かかります。", vi: "3.500 yên. Mất khoảng 1 tuần." },
      { sp: "A", jp: "じゃ、エアメールで お願いします。それから、80円の 切手を 5枚 ください。", vi: "Vậy gửi máy bay giúp tôi. Và cho tôi 5 con tem 80 yên." },
      { sp: "B", jp: "かしこまりました。全部で 3,900円です。", vi: "Vâng ạ. Tổng cộng 3.900 yên." }
    ],
    questions: [
      { q: "リーさんは 何で 荷物を 送りますか。", o: ["エアメール", "船便", "速達", "書留"], a: 0, ev: [6], tip: "Quyết định cuối cùng nằm sau じゃ (vậy thì)." },
      { q: "エアメールで どのくらい かかりますか。", o: ["1週間ぐらい", "2か月ぐらい", "2週間ぐらい", "1か月ぐらい"], a: 0, ev: [5], tip: "Hai phương án có số liệu giống nhau về dạng; ghi chép theo cặp (đường biển: 1.200 yên / 2 tháng; máy bay: 3.500 yên / 1 tuần)." },
      { q: "切手を 何枚 買いましたか。", o: ["5枚", "8枚", "80枚", "3枚"], a: 0, ev: [6], tip: "80円 là giá mỗi tem; số lượng là số đứng trước 枚." },
      { q: "全部で いくらですか。", o: ["3,900円", "3,500円", "1,200円", "4,700円"], a: 0, ev: [7], tip: "Kiểm tra: 3.500 + 80×5 = 3.900. 全部で = tổng cộng." }
    ]
  },
  kanji: [
    { c: "一", hv: "NHẤT", on: "イチ・イツ", kun: "ひと(つ)", vi: "một", words: [["一つ", "ひとつ", "1 cái"], ["一人", "ひとり", "1 người"], ["一回", "いっかい", "1 lần"]], use: "Đếm bằng ～つ, ～人 đọc ひと; còn lại イチ (một số biến âm いっ)." },
    { c: "二", hv: "NHỊ", on: "ニ", kun: "ふた(つ)", vi: "hai", words: [["二つ", "ふたつ", "2 cái"], ["二人", "ふたり", "2 người"], ["二月", "にがつ", "tháng 2"]], use: "Đếm bằng ～つ, ～人 đọc ふた." },
    { c: "三", hv: "TAM", on: "サン", kun: "みっ(つ)", vi: "ba", words: [["三つ", "みっつ", "3 cái"], ["三人", "さんにん", "3 người"]], use: "Ba nét ngang, nét dưới dài nhất." },
    { c: "四", hv: "TỨ", on: "シ", kun: "よ・よっ(つ)・よん", vi: "bốn", words: [["四つ", "よっつ", "4 cái"], ["四人", "よにん", "4 người"], ["四月", "しがつ", "tháng 4"]], use: "Đọc よ/よん trong hầu hết các trường hợp; シ trong 四月." },
    { c: "五", hv: "NGŨ", on: "ゴ", kun: "いつ(つ)", vi: "năm", words: [["五つ", "いつつ", "5 cái"], ["五日", "いつか", "ngày 5"]], use: "Đếm ～つ và ngày đọc いつ." },
    { c: "六", hv: "LỤC", on: "ロク", kun: "むっ(つ)", vi: "sáu", words: [["六つ", "むっつ", "6 cái"], ["六日", "むいか", "ngày 6"], ["六百", "ろっぴゃく", "600"]], use: "Biến âm ろっ trước âm p/k." },
    { c: "七", hv: "THẤT", on: "シチ", kun: "なな(つ)", vi: "bảy", words: [["七つ", "ななつ", "7 cái"], ["七時", "しちじ", "7 giờ"], ["七日", "なのか", "ngày 7"]], use: "Giờ đọc しち; số đếm thường hay dùng なな." },
    { c: "八", hv: "BÁT", on: "ハチ", kun: "やっ(つ)", vi: "tám", words: [["八つ", "やっつ", "8 cái"], ["八日", "ようか", "ngày 8"], ["八百", "はっぴゃく", "800"]], use: "Biến âm はっ trước âm p/k." }
  ],
  grammarQuiz: [
    { q: "りんごを（　）買いました。(4 quả)", o: ["四つ", "四枚", "四台", "四人"], a: 0, ex: "Quả, đồ vật chung → ～つ: よっつ." },
    { q: "切手を 5（　）ください。", o: ["枚", "台", "つ", "人"], a: 0, ex: "Tem là vật mỏng → 枚." },
    { q: "車が 2（　）あります。", o: ["台", "枚", "回", "人"], a: 0, ex: "Xe, máy móc → 台." },
    { q: "子どもが（　）います。(2 người)", o: ["二人", "二つ", "二台", "二枚"], a: 0, ex: "2 người: ふたり." },
    { q: "大阪から 東京まで（　）かかりますか。―― 3時間です。", o: ["どのくらい", "いくつ", "何回", "いつ"], a: 0, ex: "Hỏi độ dài thời gian → どのくらい." },
    { q: "1か月（　）2回 映画を 見ます。", o: ["に", "で", "を", "が"], a: 0, ex: "Tần suất: khoảng thời gian に ～回." },
    { q: "休みは 日曜日（　）です。(chỉ)", o: ["だけ", "ぐらい", "まで", "から"], a: 0, ex: "Giới hạn: だけ." },
    { q: "みかんを（　）買いましたか。―― 八つ 買いました。", o: ["いくつ", "何枚", "何人", "どのくらい"], a: 0, ex: "Câu trả lời dùng ～つ → hỏi いくつ." },
    { q: "Câu nào đúng trật tự?", o: ["りんごを 三つ 食べました。", "三つ りんごを を 食べました。", "りんごを 食べました 三つ。", "りんご 三つを 食べました。"], a: 0, ex: "Số từ đứng sau N を và ngay trước động từ, không có trợ từ." }
  ]
};
