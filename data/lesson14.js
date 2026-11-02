// Bài 14 — nội dung tự biên soạn theo phạm vi bài 14 Minna no Nihongo.
window.LESSONS[14] = {
  id: 14,
  title: "みどり町まで お願いします",
  titleVi: "Cho tôi đến Midori-cho",
  vocab: [
    { w: "つけます", r: "つけます", vi: "bật (điện, máy)", t: "động từ nhóm II", ex: [["電気を つけて ください。", "Hãy bật đèn lên."]], note: "Thể て: つけて" },
    { w: "消します", r: "けします", vi: "tắt (điện, máy)", t: "động từ nhóm I", ex: [["エアコンを 消しましょうか。", "Tôi tắt điều hòa nhé?"]], note: "Thể て: 消して" },
    { w: "開けます", r: "あけます", vi: "mở", t: "động từ nhóm II", ex: [["窓を 開けて ください。", "Hãy mở cửa sổ."]], note: "Thể て: 開けて" },
    { w: "閉めます", r: "しめます", vi: "đóng", t: "động từ nhóm II", ex: [["ドアを 閉めて ください。", "Hãy đóng cửa."]], note: "Thể て: 閉めて" },
    { w: "急ぎます", r: "いそぎます", vi: "vội, gấp", t: "động từ nhóm I", ex: [["急いで ください。", "Hãy nhanh lên."]], note: "Thể て: 急いで" },
    { w: "待ちます", r: "まちます", vi: "đợi", t: "động từ nhóm I", ex: [["ちょっと 待って ください。", "Hãy đợi một chút."]], note: "Thể て: 待って" },
    { w: "持ちます", r: "もちます", vi: "cầm, mang", t: "động từ nhóm I", ex: [["荷物を 持ちましょうか。", "Tôi cầm đồ giúp nhé?"]], note: "Thể て: 持って" },
    { w: "取ります", r: "とります", vi: "lấy", t: "động từ nhóm I", ex: [["塩を 取って ください。", "Lấy giúp tôi lọ muối."]], note: "Thể て: 取って" },
    { w: "手伝います", r: "てつだいます", vi: "giúp đỡ", t: "động từ nhóm I", ex: [["手伝いましょうか。", "Tôi giúp nhé?"]], note: "Thể て: 手伝って" },
    { w: "呼びます", r: "よびます", vi: "gọi", t: "động từ nhóm I", ex: [["タクシーを 呼んで ください。", "Hãy gọi taxi giúp tôi."]], note: "Thể て: 呼んで" },
    { w: "話します", r: "はなします", vi: "nói chuyện", t: "động từ nhóm I", ex: [["ゆっくり 話して ください。", "Hãy nói chậm thôi."]], note: "Thể て: 話して" },
    { w: "止めます", r: "とめます", vi: "dừng, đỗ (xe)", t: "động từ nhóm II", ex: [["ここで 止めて ください。", "Dừng ở đây giúp tôi."]], note: "Thể て: 止めて" },
    { w: "見せます", r: "みせます", vi: "cho xem", t: "động từ nhóm II", ex: [["パスポートを 見せて ください。", "Cho tôi xem hộ chiếu."]], note: "Thể て: 見せて" },
    { w: "教えます［住所を～］", r: "おしえます", vi: "chỉ cho, nói cho (địa chỉ)", t: "động từ nhóm II", ex: [["住所を 教えて ください。", "Hãy cho tôi biết địa chỉ."]], note: "Thể て: 教えて" },
    { w: "降ります［雨が～］", r: "ふります", vi: "rơi (mưa)", t: "động từ nhóm I", ex: [["雨が 降って います。", "Trời đang mưa."]], note: "Thể て: 降って" },
    { w: "コピーします", r: "コピーします", vi: "photo, sao chép", t: "động từ nhóm III", ex: [["これを コピーして ください。", "Hãy photo cái này."]], note: "Thể て: コピーして" },
    { w: "曲がります［右へ～］", r: "まがります", vi: "rẽ (phải)", t: "động từ nhóm I", ex: [["あの 信号を 右へ 曲がって ください。", "Hãy rẽ phải ở đèn giao thông kia."]], note: "Thể て: 曲がって" },
    { w: "エアコン", r: "エアコン", vi: "máy điều hòa", t: "danh từ", ex: [["エアコンを つけましょうか。", "Tôi bật điều hòa nhé?"]] },
    { w: "パスポート", r: "パスポート", vi: "hộ chiếu", t: "danh từ", ex: [["パスポートを 見せて ください。", "Cho xem hộ chiếu."]] },
    { w: "名前", r: "なまえ", vi: "tên", t: "danh từ", ex: [["名前を 書いて ください。", "Hãy viết tên."]] },
    { w: "住所", r: "じゅうしょ", vi: "địa chỉ", t: "danh từ", ex: [["住所を 教えて ください。", "Hãy cho tôi địa chỉ."]] },
    { w: "地図", r: "ちず", vi: "bản đồ", t: "danh từ", ex: [["地図を 書きましょうか。", "Tôi vẽ bản đồ cho nhé?"]] },
    { w: "塩", r: "しお", vi: "muối", t: "danh từ", ex: [["塩を 取って ください。", "Lấy giúp lọ muối."]] },
    { w: "砂糖", r: "さとう", vi: "đường", t: "danh từ", ex: [["砂糖を 入れますか。", "Có cho đường không?"]] },
    { w: "読み方", r: "よみかた", vi: "cách đọc", t: "danh từ", ex: [["この 漢字の 読み方を 教えて ください。", "Chỉ tôi cách đọc chữ Hán này."]] },
    { w: "～方", r: "かた", vi: "cách ~", t: "hậu tố", ex: [["使い方を 教えて ください。", "Chỉ tôi cách dùng."]] },
    { w: "信号", r: "しんごう", vi: "đèn giao thông", t: "danh từ", ex: [["次の 信号を 左へ 曲がって ください。", "Rẽ trái ở đèn tiếp theo."]] },
    { w: "ゆっくり", r: "ゆっくり", vi: "chậm rãi, thong thả", t: "phó từ", ex: [["もう 少し ゆっくり 話して ください。", "Hãy nói chậm thêm chút nữa."]] },
    { w: "すぐ", r: "すぐ", vi: "ngay lập tức", t: "phó từ", ex: [["すぐ 来て ください。", "Hãy đến ngay."]] },
    { w: "また", r: "また", vi: "lại", t: "phó từ", ex: [["また 来て ください。", "Lần sau lại đến nhé."]] },
    { w: "あとで", r: "あとで", vi: "lát nữa, sau", t: "phó từ", ex: [["あとで 電話します。", "Lát nữa tôi gọi."]] },
    { w: "もう 少し", r: "もうすこし", vi: "thêm một chút nữa", t: "phó từ", ex: [["もう 少し 待って ください。", "Đợi thêm chút nữa."]] },
    { w: "もう ～", r: "もう", vi: "thêm ~ (nữa)", t: "phó từ", ex: [["もう 一つ ください。", "Cho thêm một cái nữa."]] },
    { w: "まっすぐ", r: "まっすぐ", vi: "thẳng", t: "phó từ", ex: [["まっすぐ 行って ください。", "Hãy đi thẳng."]] },
    { w: "いいですよ", r: "いいですよ", vi: "được thôi", t: "cụm", ex: [["手伝って ください。 ―― いいですよ。", "Giúp tôi với. — Được thôi."]] },
    { w: "さあ", r: "さあ", vi: "nào (thúc giục)", t: "thán từ", ex: [["さあ、行きましょう。", "Nào, đi thôi."]] },
    { w: "あれ？", r: "あれ", vi: "ơ? (ngạc nhiên)", t: "thán từ", ex: [["あれ？ 鍵が ありません。", "Ơ? Không có chìa khóa."]] },
    { w: "お釣り", r: "おつり", vi: "tiền thừa", t: "danh từ", ex: [["はい、お釣りです。", "Đây là tiền thừa."]] },
    { w: "これで お願いします", r: "これでおねがいします", vi: "lấy tiền này nhé (khi trả tiền)", t: "cụm", ex: [["1万円ですが、これで お願いします。", "Tôi có tờ 10.000, anh lấy tờ này nhé."]] },
    { w: "みどり町", r: "みどりちょう", vi: "Midori-cho (tên khu phố)", t: "danh từ riêng", ex: [["みどり町まで お願いします。", "Cho tôi đến Midori-cho."]] }
  ],
  grammar: [
    {
      pattern: "Ba nhóm động từ",
      func: "Động từ tiếng Nhật chia thành 3 nhóm theo cách biến đổi. Nhận biết qua âm đứng trước ます.",
      explain: ["Nhóm I: âm trước ます thuộc hàng い (き, ぎ, し, ち, に, び, み, り, い): 書きます, 待ちます, 読みます.", "Nhóm II: âm trước ます thuộc hàng え (食べます, 開けます) và một số ít thuộc hàng い (見ます, 起きます, 借ります, います…) — phải học thuộc.", "Nhóm III: します (và N します) và 来ます."],
      parts: [["Nhóm I", "書きます, 話します, 待ちます, 呼びます…"], ["Nhóm II", "食べます, 見せます, 見ます, 起きます…"], ["Nhóm III", "します, 来ます, 勉強します…"]],
      usage: [{ rule: "Ví dụ phân loại.", ex: [["書きます（I）・食べます（II）・来ます（III）", "viết (I) · ăn (II) · đến (III)"]] }],
      notes: ["Đây là nền tảng cho mọi thể sau này (て, ない, từ điển, た…)."]
    },
    {
      pattern: "Cách tạo thể て",
      func: "Thể て là dạng nối, dùng trong rất nhiều mẫu ngữ pháp. Cách tạo khác nhau theo nhóm.",
      explain: ["Nhóm I theo âm trước ます: い・ち・り → って (買って, 待って, 取って); み・び・に → んで (読んで, 呼んで, 死んで); き → いて (書いて); ぎ → いで (急いで); し → して (話して).", "Ngoại lệ: 行きます → 行って.", "Nhóm II: bỏ ます + て (食べて, 見て).", "Nhóm III: します → して, 来ます → 来て (きて)."],
      parts: [["い・ち・り", "→ って"], ["み・び・に", "→ んで"], ["き / ぎ", "→ いて / いで"], ["し", "→ して"], ["Nhóm II", "ます → て"], ["Nhóm III", "して / きて"]],
      usage: [{ rule: "Ví dụ.", ex: [["買います → 買って、読みます → 読んで、書きます → 書いて", "mua → 買って, đọc → 読んで, viết → 書いて"], ["食べます → 食べて、します → して、来ます → 来て", "ăn → 食べて, làm → して, đến → 来て"]] }],
      notes: []
    },
    {
      pattern: "V て ください",
      func: "Nhờ vả, chỉ thị, hoặc mời mọc người nghe làm gì: “Hãy … / Xin vui lòng …”.",
      explain: ["Với người trên hoặc khi nhờ việc lớn, nên mềm hóa bằng すみませんが、～て ください."],
      parts: [["Vて + ください", ""]],
      usage: [
        { rule: "Nhờ vả.", ex: [["すみませんが、この 漢字の 読み方を 教えて ください。", "Xin lỗi, chỉ giúp tôi cách đọc chữ Hán này."]] },
        { rule: "Chỉ thị.", ex: [["ここに 住所と 名前を 書いて ください。", "Hãy viết địa chỉ và tên vào đây."]] },
        { rule: "Mời.", ex: [["どうぞ たくさん 食べて ください。", "Mời ăn nhiều vào."]] }
      ],
      notes: []
    },
    {
      pattern: "V て います（đang）",
      func: "Diễn tả hành động đang diễn ra tại thời điểm nói: “đang …”.",
      parts: [["Vて + います", "đang V"], ["Phủ định", "Vて いません"]],
      usage: [
        { rule: "Đang làm.", ex: [["ミラーさんは 今 電話を かけて います。", "Anh Miller đang gọi điện thoại."], ["今 雨が 降って いますか。 ―― はい、降って います。", "Bây giờ trời có đang mưa không? — Có, đang mưa."]] }
      ],
      notes: ["Các nghĩa khác của ～て います (trạng thái, thói quen) học ở bài 15, 28, 29."]
    },
    {
      pattern: "V（ます bỏ ます）ましょうか",
      func: "Đề nghị làm giúp người nghe: “Tôi … giúp nhé?”.",
      parts: [["～ましょうか", "Tôi làm cho nhé?"]],
      usage: [{ rule: "Đề nghị giúp và cách trả lời.", ex: [["暑いですね。窓を 開けましょうか。 ―― ええ、お願いします。", "Nóng nhỉ. Tôi mở cửa sổ nhé? — Vâng, nhờ anh."], ["傘を 貸しましょうか。 ―― いいえ、けっこうです。", "Tôi cho mượn ô nhé? — Thôi, không cần ạ."]] }],
      notes: ["Phân biệt: ～ましょう (cùng làm) / ～ましょうか (tôi làm giúp nhé)."]
    },
    {
      pattern: "S1 が、S2（mở đầu）",
      func: "が ở đây không mang nghĩa “nhưng” mà là lời mở đầu, dẫn vào câu nhờ vả / câu hỏi cho mềm mại.",
      parts: [["すみませんが、～", "Xin lỗi, …"]],
      usage: [{ rule: "Mở đầu lịch sự.", ex: [["失礼ですが、お名前は？", "Xin lỗi, tên anh là gì?"], ["すみませんが、塩を 取って ください。", "Xin lỗi, lấy giúp tôi lọ muối."]] }],
      notes: []
    },
    {
      pattern: "N が V（mô tả hiện tượng）",
      func: "Khi mô tả một hiện tượng / sự việc nhìn thấy, nghe thấy như nó đang xảy ra, chủ thể đi với が.",
      parts: [["が", "chủ thể của hiện tượng"]],
      usage: [{ rule: "Mô tả trực tiếp.", ex: [["雨が 降って います。", "Trời đang mưa."], ["あ、マリアさんが 来ました。", "A, chị Maria đến rồi."]] }],
      notes: []
    }
  ],
  reading: {
    title: "タクシーで",
    titleVi: "Trên taxi",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–14.",
    paragraphs: [
      {
        s: [
          { t: "きのう||hôm qua / は||(chủ đề) / 雨|あめ|mưa / が||(chủ thể) / 降って|ふって|rơi / いました||(đã đang) / 。||", vi: "Hôm qua trời mưa." },
          { t: "私|わたし|tôi / は||(chủ đề) / 駅|えき|ga / から||từ / タクシー||taxi / で||bằng / 帰りました|かえりました|đã về / 。||", vi: "Tôi đi taxi từ ga về." },
          { t: "「||« / みどり町|みどりちょう|Midori-cho / まで||đến / お願いします|おねがいします|nhờ / 。||. / 急いで|いそいで|vội / ください||hãy / 」||»", vi: "« Cho tôi đến Midori-cho. Xin đi nhanh giúp. »" }
        ],
        vi: "Đoạn 1: Hôm qua trời mưa, đi taxi từ ga về, nhờ tài xế đi nhanh tới Midori-cho."
      },
      {
        s: [
          { t: "運転手|うんてんしゅ|tài xế / 「||« / まっすぐ||thẳng / 行きますか|いきますか|đi không? / 」||»", vi: "Tài xế: « Đi thẳng phải không? »" },
          { t: "「||« / はい||vâng / 。||. / 次|つぎ|tiếp theo / の||(của) / 信号|しんごう|đèn giao thông / を||(qua) / 右|みぎ|phải / へ||về / 曲がって|まがって|rẽ / ください||hãy / 」||»", vi: "« Vâng. Rẽ phải ở đèn tiếp theo. »" },
          { t: "「||« / あの||kia / 白い|しろい|trắng / ビル||tòa nhà / の||(của) / 前|まえ|trước / で||ở / 止めて|とめて|dừng / ください||hãy / 」||»", vi: "« Dừng trước tòa nhà trắng kia. »" }
        ],
        vi: "Đoạn 2: Chỉ đường: đi thẳng, rẽ phải ở đèn tiếp theo, dừng trước tòa nhà trắng."
      },
      {
        s: [
          { t: "料金|りょうきん|tiền cước / は||(chủ đề) / 1,800円|せんはっぴゃくえん|1.800 yên / でした||đã là / 。||", vi: "Tiền cước là 1.800 yên." },
          { t: "私|わたし|tôi / は||(chủ đề) / 2,000円|にせんえん|2.000 yên / を||(tân ngữ) / 出しました|だしました|đã đưa ra / 。||", vi: "Tôi đưa 2.000 yên." },
          { t: "お釣り|おつり|tiền thừa / は||(chủ đề) / 200円|にひゃくえん|200 yên / でした||đã là / 。||", vi: "Tiền thừa là 200 yên." }
        ],
        vi: "Đoạn 3: Cước 1.800 yên, đưa 2.000 yên, nhận lại 200 yên tiền thừa."
      }
    ],
    summary: "Toàn bài: một chuyến taxi ngày mưa với các câu nhờ vả ～て ください (急いで, 曲がって, 止めて). Bài kiểm tra khả năng theo dõi chỉ dẫn đường và tính tiền. Mẹo: với bài chỉ đường, ghi lại các bước theo thứ tự (thẳng → rẽ phải → dừng).",
    questions: [
      { q: "きのうの 天気は どうでしたか。", o: ["雨でした", "雪でした", "いい 天気でした", "曇りでした"], a: 0, ev: [0, 0], tip: "雨が 降って いました = trời đang mưa (ở thời điểm quá khứ)." },
      { q: "次の 信号を どちらへ 曲がりますか。", o: ["右", "左", "まっすぐ", "曲がりません"], a: 0, ev: [1, 1], tip: "Tìm 曲がって ください và từ chỉ hướng đứng trước へ." },
      { q: "タクシーは どこで 止まりましたか。", o: ["白い ビルの 前", "駅の 前", "信号の 前", "黒い ビルの 前"], a: 0, ev: [1, 2], tip: "止めて ください: nơi dừng là phần đứng trước で." },
      { q: "お釣りは いくらでしたか。", o: ["200円", "1,800円", "2,000円", "800円"], a: 0, ev: [2, 2], tip: "Có 3 con số: cước, tiền đưa, tiền thừa. Đọc kỹ danh từ đi kèm (お釣り)." }
    ]
  },
  listening: {
    title: "手伝いましょうか",
    titleVi: "Tôi giúp nhé?",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "カリナ", pitch: 1.3 }, B: { name: "ワン", pitch: 0.8 } },
    script: [
      { sp: "A", jp: "ワンさん、今 何を して いますか。", vi: "Anh Wang, bây giờ anh đang làm gì vậy?" },
      { sp: "B", jp: "会議の 資料を コピーして います。", vi: "Tôi đang photo tài liệu cho cuộc họp." },
      { sp: "A", jp: "たくさん ありますね。手伝いましょうか。", vi: "Nhiều nhỉ. Tôi giúp nhé?" },
      { sp: "B", jp: "ありがとう ございます。じゃ、これを 20枚 コピーして ください。", vi: "Cảm ơn chị. Vậy chị photo cái này 20 bản giúp tôi." },
      { sp: "A", jp: "20枚ですね。わかりました。", vi: "20 bản nhỉ. Được." },
      { sp: "B", jp: "それから、すみませんが、会議室の エアコンを つけて ください。", vi: "Và xin lỗi, bật giúp điều hòa ở phòng họp." },
      { sp: "A", jp: "いいですよ。会議は 何時からですか。", vi: "Được thôi. Cuộc họp từ mấy giờ?" },
      { sp: "B", jp: "3時からです。急いで ください。", vi: "Từ 3 giờ. Nhanh lên giúp tôi nhé." }
    ],
    questions: [
      { q: "ワンさんは 今 何を して いますか。", o: ["コピーを して います", "会議を して います", "エアコンを つけて います", "電話を かけて います"], a: 0, ev: [1], tip: "～て います = đang làm. Câu trả lời trực tiếp cho câu hỏi đầu tiên." },
      { q: "カリナさんは 何枚 コピーしますか。", o: ["20枚", "2枚", "12枚", "30枚"], a: 0, ev: [3], tip: "Số + 枚; Karina nhắc lại 20枚ですね để xác nhận." },
      { q: "カリナさんは コピーの あとで 何を しますか。", o: ["会議室の エアコンを つけます", "窓を 開けます", "資料を 持って 行きます", "会議に 出ます"], a: 0, ev: [5], tip: "それから = việc nhờ thứ hai." },
      { q: "会議は 何時からですか。", o: ["3時", "2時", "4時", "1時"], a: 0, ev: [7], tip: "Nghe số + 時から." }
    ]
  },
  kanji: [
    { c: "待", hv: "ĐÃI", on: "タイ", kun: "ま(つ)", vi: "đợi", words: [["待ちます", "まちます", "đợi"], ["招待", "しょうたい", "mời"]], use: "Bộ 彳 (bước đi) bên trái." },
    { c: "持", hv: "TRÌ", on: "ジ", kun: "も(つ)", vi: "cầm, mang", words: [["持ちます", "もちます", "cầm"], ["気持ち", "きもち", "cảm xúc"]], use: "Bộ 扌 (tay). Phân biệt với 待 (bộ 彳)." },
    { c: "急", hv: "CẤP", on: "キュウ", kun: "いそ(ぐ)", vi: "gấp", words: [["急ぎます", "いそぎます", "vội"], ["急行", "きゅうこう", "tàu nhanh"], ["特急", "とっきゅう", "tàu tốc hành"]], use: "Động từ いそ(ぎます); từ ghép キュウ." },
    { c: "開", hv: "KHAI", on: "カイ", kun: "あ(ける)・ひら(く)", vi: "mở", words: [["開けます", "あけます", "mở"], ["開始", "かいし", "bắt đầu"]], use: "Bộ 門 (cổng). Trái nghĩa: 閉." },
    { c: "閉", hv: "BẾ", on: "ヘイ", kun: "し(める)", vi: "đóng", words: [["閉めます", "しめます", "đóng"], ["閉店", "へいてん", "đóng cửa hàng"]], use: "Bộ 門 + 才." },
    { c: "名", hv: "DANH", on: "メイ・ミョウ", kun: "な", vi: "tên", words: [["名前", "なまえ", "tên"], ["有名", "ゆうめい", "nổi tiếng"], ["名刺", "めいし", "danh thiếp"]], use: "名前 đọc な; từ ghép メイ." },
    { c: "地", hv: "ĐỊA", on: "チ・ジ", kun: "—", vi: "đất", words: [["地図", "ちず", "bản đồ"], ["地下", "ちか", "tầng hầm"], ["地下鉄", "ちかてつ", "tàu điện ngầm"]], use: "Bộ 土 (đất)." },
    { c: "方", hv: "PHƯƠNG", on: "ホウ", kun: "かた", vi: "hướng; cách; vị", words: [["読み方", "よみかた", "cách đọc"], ["あの方", "あのかた", "vị kia"], ["～の ほう", "ほう", "phía ~"]], use: "Sau Vます stem đọc かた (cách làm)." }
  ],
  grammarQuiz: [
    { q: "「待ちます」の て形は？", o: ["待って", "待んで", "待いて", "待ちて"], a: 0, ex: "ち → って." },
    { q: "「読みます」の て形は？", o: ["読んで", "読って", "読みて", "読いて"], a: 0, ex: "み → んで." },
    { q: "「行きます」の て形は？", o: ["行って", "行いて", "行きて", "行んで"], a: 0, ex: "Ngoại lệ: 行きます → 行って." },
    { q: "「急ぎます」の て形は？", o: ["急いで", "急いて", "急って", "急んで"], a: 0, ex: "ぎ → いで." },
    { q: "「来ます」の て形は？", o: ["来て（きて）", "来って", "来んで", "来いて"], a: 0, ex: "Nhóm III: 来ます → 来て (きて)." },
    { q: "すみませんが、塩を 取って（　）。", o: ["ください", "います", "ましょう", "ましょうか"], a: 0, ex: "Nhờ vả: Vて ください." },
    { q: "ミラーさんは 今 電話を かけて（　）。", o: ["います", "ください", "ましょうか", "ます"], a: 0, ex: "Đang làm: Vて います." },
    { q: "暑いですね。窓を 開け（　）。 ―― ええ、お願いします。", o: ["ましょうか", "て ください", "ませんか", "て います"], a: 0, ex: "Đề nghị làm giúp: ～ましょうか." },
    { q: "Động từ nào thuộc nhóm II?", o: ["見せます", "話します", "待ちます", "曲がります"], a: 0, ex: "見せます: âm trước ます là せ (hàng え) → nhóm II." }
  ]
};
