// Bài 24 — nội dung tự biên soạn theo phạm vi bài 24 Minna no Nihongo.
window.LESSONS[24] = {
  id: 24,
  title: "手伝って くれますか",
  titleVi: "Bạn giúp tôi được không?",
  vocab: [
    { w: "くれます", r: "くれます", vi: "cho (tôi / người phía tôi)", t: "động từ nhóm II", ex: [["佐藤さんは 私に チョコレートを くれました。", "Chị Sato đã cho tôi sô-cô-la."]] },
    { w: "連れて 行きます", r: "つれていきます", vi: "dẫn (ai) đi", t: "động từ nhóm I", ex: [["子どもを 公園へ 連れて 行きます。", "Tôi dẫn con đi công viên."]] },
    { w: "連れて 来ます", r: "つれてきます", vi: "dẫn (ai) đến", t: "động từ nhóm III", ex: [["パーティーに 友達を 連れて 来ても いいですか。", "Tôi dẫn bạn đến tiệc được không?"]] },
    { w: "送ります［人を～］", r: "おくります", vi: "tiễn, đưa (ai)", t: "động từ nhóm I", ex: [["山田さんが 駅まで 送って くれました。", "Anh Yamada đã đưa tôi ra ga."]] },
    { w: "紹介します", r: "しょうかいします", vi: "giới thiệu", t: "động từ nhóm III", ex: [["友達が いい 先生を 紹介して くれました。", "Bạn đã giới thiệu cho tôi một thầy giáo giỏi."]] },
    { w: "案内します", r: "あんないします", vi: "hướng dẫn, dẫn đường", t: "động từ nhóm III", ex: [["京都を 案内して あげます。", "Tôi sẽ dẫn bạn đi tham quan Kyoto."]] },
    { w: "説明します", r: "せつめいします", vi: "giải thích", t: "động từ nhóm III", ex: [["先生が 文法を 説明して くれました。", "Thầy đã giải thích ngữ pháp cho tôi."]] },
    { w: "入れます［コーヒーを～］", r: "いれます", vi: "pha (cà phê)", t: "động từ nhóm II", ex: [["コーヒーを 入れて あげましょうか。", "Tôi pha cà phê cho bạn nhé?"]] },
    { w: "おじいさん／おじいちゃん", r: "おじいさん", vi: "ông; ông cụ", t: "danh từ", ex: [["おじいさんに 道を 教えて あげました。", "Tôi đã chỉ đường cho một ông cụ."]] },
    { w: "おばあさん／おばあちゃん", r: "おばあさん", vi: "bà; bà cụ", t: "danh từ", ex: [["おばあちゃんが セーターを 作って くれました。", "Bà đã đan áo len cho tôi."]] },
    { w: "準備", r: "じゅんび", vi: "chuẩn bị", t: "danh từ", ex: [["パーティーの 準備を 手伝って くれませんか。", "Bạn giúp tôi chuẩn bị tiệc được không?"]] },
    { w: "意味", r: "いみ", vi: "ý nghĩa", t: "danh từ", ex: [["友達が 言葉の 意味を 教えて くれました。", "Bạn đã cho tôi biết nghĩa của từ."]] },
    { w: "［お］菓子", r: "おかし", vi: "bánh kẹo", t: "danh từ", ex: [["隣の 人が お菓子を くれました。", "Người hàng xóm đã cho tôi bánh kẹo."]] },
    { w: "全部", r: "ぜんぶ", vi: "toàn bộ", t: "danh từ", ex: [["全部 自分で 作りました。", "Tôi tự làm toàn bộ."]] },
    { w: "自分で", r: "じぶんで", vi: "tự mình", t: "phó từ", ex: [["自分で 作った お弁当です。", "Đây là cơm hộp tôi tự làm."]] },
    { w: "ほかに", r: "ほかに", vi: "ngoài ra", t: "phó từ", ex: [["ほかに 何か 手伝いましょうか。", "Ngoài ra tôi giúp gì nữa nhé?"]] },
    { w: "ワゴン車", r: "ワゴンしゃ", vi: "xe chở hàng (xe van)", t: "danh từ", ex: [["ワゴン車で 荷物を 運んで くれました。", "Bạn đã chở đồ giúp bằng xe van."]] },
    { w: "［お］弁当", r: "おべんとう", vi: "cơm hộp", t: "danh từ", ex: [["母が お弁当を 作って くれました。", "Mẹ đã làm cơm hộp cho tôi."]] },
    { w: "母の日", r: "ははのひ", vi: "Ngày của Mẹ", t: "danh từ", ex: [["母の日に 花を あげました。", "Ngày của Mẹ tôi tặng hoa."]] },
    { w: "運びます", r: "はこびます", vi: "vận chuyển, mang", t: "động từ nhóm I", ex: [["荷物を 運んで あげましょうか。", "Tôi mang đồ giúp nhé?"]] },
    { w: "貸します", r: "かします", vi: "cho mượn", t: "động từ nhóm I", ex: [["友達が 傘を 貸して くれました。", "Bạn đã cho tôi mượn ô."]] }
  ],
  grammar: [
    {
      pattern: "N1（người）は 私に N2 を くれます",
      func: "くれます: người khác cho “tôi” (hoặc người thuộc phía tôi như gia đình). Khác あげます (tôi cho người khác).",
      explain: ["あげます: người cho → người khác; không dùng khi người nhận là tôi. ✗ 佐藤さんは 私に 花を あげました.", "くれます: người khác → tôi / người nhà tôi. Thường có thể lược 私に."],
      parts: [["あげます", "tôi / ai đó → người khác"], ["くれます", "người khác → tôi"], ["もらいます", "tôi nhận từ người khác"]],
      usage: [{ rule: "Cho – nhận vật.", ex: [["佐藤さんは 私に クリスマスカードを くれました。", "Chị Sato đã cho tôi thiệp Giáng sinh."], ["佐藤さんは 妹に お菓子を くれました。", "Chị Sato đã cho em gái tôi bánh kẹo."]] }],
      notes: []
    },
    {
      pattern: "V て あげます／もらいます／くれます",
      func: "Dùng các động từ cho – nhận với thể て để diễn tả việc làm một HÀNH ĐỘNG giúp người khác hoặc được người khác giúp, kèm cảm giác thiện ý / biết ơn.",
      explain: ["Vて あげます: tôi làm giúp người khác. Với người trên dễ nghe như kể ơn → nên dùng ～ましょうか (bài 14).", "Vて もらいます: tôi được (người khác) làm cho — người làm đi với に. Thể hiện lòng biết ơn.", "Vて くれます: (người khác) làm cho tôi — người làm là chủ ngữ (が/は)."],
      parts: [["Vて あげます", "làm cho người khác"], ["人に Vて もらいます", "được người đó làm cho"], ["人が Vて くれます", "người đó làm cho tôi"]],
      usage: [
        { rule: "Vて あげます.", ex: [["私は 木村さんに 本を 貸して あげました。", "Tôi đã cho chị Kimura mượn sách."]] },
        { rule: "Vて もらいます.", ex: [["私は 山田さんに 図書館の 電話番号を 教えて もらいました。", "Tôi được anh Yamada cho biết số điện thoại thư viện."]] },
        { rule: "Vて くれます.", ex: [["母は［私に］セーターを 送って くれました。", "Mẹ đã gửi áo len cho tôi."]] }
      ],
      notes: ["Cùng một sự việc: 山田さんが 教えて くれました ≈ 山田さんに 教えて もらいました (khác nhau ở góc nhìn chủ ngữ)."]
    },
    {
      pattern: "N（người）が V（câu với くれます）",
      func: "Khi hỏi / nói ai là người làm cho mình, người đó làm chủ ngữ với が (đặc biệt với từ để hỏi だれが).",
      parts: [["だれが ～て くれましたか", "ai đã làm cho bạn?"]],
      usage: [{ rule: "Hỏi người thực hiện.", ex: [["すてきな ネクタイですね。 ―― ええ、佐藤さんが くれました。", "Cà vạt đẹp nhỉ. — Vâng, chị Sato cho tôi."], ["だれが 手伝いに 行きますか。 ―― カリナさんが 行きます。", "Ai sẽ đi giúp? — Chị Karina."]] }],
      notes: []
    }
  ],
  reading: {
    title: "引っ越しの 日",
    titleVi: "Ngày chuyển nhà",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–24.",
    paragraphs: [
      {
        s: [
          { t: "日曜日|にちようび|chủ nhật / 、||, / 引っ越ししました|ひっこししました|đã chuyển nhà / 。||", vi: "Chủ nhật tôi chuyển nhà." },
          { t: "友達|ともだち|bạn / の||(của) / カリナ||Karina / さん||chị / が||(chủ ngữ) / 手伝って|てつだって|giúp / くれました||(cho tôi) / 。||", vi: "Chị Karina, bạn tôi, đã giúp tôi." },
          { t: "ワン||Wang / さん||anh / に||(bởi) / ワゴン車|ワゴンしゃ|xe van / を||(tân ngữ) / 貸して|かして|cho mượn / もらいました||(tôi được) / 。||", vi: "Tôi được anh Wang cho mượn xe van." },
          { t: "荷物|にもつ|đồ đạc / は||(chủ đề) / 全部|ぜんぶ|toàn bộ / ワン||Wang / さん||anh / が||(chủ ngữ) / 運んで|はこんで|chở / くれました||(cho tôi) / 。||", vi: "Đồ đạc thì anh Wang chở giúp toàn bộ." }
        ],
        vi: "Đoạn 1: Chủ nhật chuyển nhà: Karina giúp; được Wang cho mượn xe và chở hết đồ."
      },
      {
        s: [
          { t: "昼|ひる|trưa / は||(chủ đề) / カリナ||Karina / さん||chị / が||(chủ ngữ) / 作った|つくった|đã làm / お弁当|おべんとう|cơm hộp / を||(tân ngữ) / 食べました|たべました|đã ăn / 。||", vi: "Buổi trưa chúng tôi ăn cơm hộp do Karina làm." },
          { t: "とても||rất / おいしかった|おいしかった|đã ngon / です||(lịch sự) / 。||", vi: "Rất ngon." },
          { t: "私|わたし|tôi / は||(chủ đề) / 二人|ふたり|hai người / に||cho / コーヒー||cà phê / を||(tân ngữ) / 入れて|いれて|pha / あげました||(cho họ) / 。||", vi: "Tôi pha cà phê cho hai người." }
        ],
        vi: "Đoạn 2: Trưa ăn cơm hộp Karina làm; người viết pha cà phê cho hai người."
      },
      {
        s: [
          { t: "来週|らいしゅう|tuần sau / 、||, / 二人|ふたり|hai người / を||(tân ngữ) / 新しい|あたらしい|mới / うち||nhà / に||đến / 呼んで|よんで|mời / 、||, / 晩ご飯|ばんごはん|bữa tối / を||(tân ngữ) / 作って|つくって|nấu / あげたい|あげたい|muốn (cho họ) / です||(lịch sự) / 。||", vi: "Tuần sau tôi muốn mời hai người đến nhà mới và nấu bữa tối cho họ." }
        ],
        vi: "Đoạn 3: Muốn mời hai người đến nhà mới để nấu bữa tối cảm ơn."
      }
    ],
    summary: "Toàn bài: chuyện được giúp và giúp lại khi chuyển nhà, dùng đủ ～て くれました / ～て もらいました / ～て あげました. Mẹo: xác định “ai làm cho ai” — với くれます chủ ngữ là người làm; với もらいます người làm đứng trước に.",
    questions: [
      { q: "ワゴン車は だれの ですか。", o: ["ワンさん", "カリナさん", "この 人", "わかりません"], a: 0, ev: [0, 2], tip: "ワンさんに 貸して もらいました: người đứng trước に là người cho mượn → xe của Wang." },
      { q: "荷物を 運んだのは だれですか。", o: ["ワンさん", "カリナさん", "この 人", "三人で"], a: 0, ev: [0, 3], tip: "ワンさんが 運んで くれました: chủ ngữ が là người làm." },
      { q: "お弁当を 作ったのは だれですか。", o: ["カリナさん", "この 人", "ワンさん", "お店の 人"], a: 0, ev: [1, 0], tip: "Mệnh đề カリナさんが 作った bổ nghĩa cho お弁当 (bài 22)." },
      { q: "この 人は 二人に 何を して あげましたか。", o: ["コーヒーを 入れて あげました", "お弁当を 作って あげました", "荷物を 運んで あげました", "晩ご飯を 作って あげました"], a: 0, ev: [1, 2], tip: "晩ご飯 là kế hoạch tương lai (～たい), chưa làm." }
    ]
  },
  listening: {
    title: "手伝って くれますか",
    titleVi: "Giúp tôi được không?",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "ワン", pitch: 0.8 }, B: { name: "カリナ", pitch: 1.3 } },
    script: [
      { sp: "A", jp: "カリナさん、日曜日 引っ越しを 手伝って くれませんか。", vi: "Karina, chủ nhật giúp tôi chuyển nhà được không?" },
      { sp: "B", jp: "いいですよ。何時に 行きましょうか。", vi: "Được thôi. Mấy giờ tôi đến nhé?" },
      { sp: "A", jp: "9時ごろ お願いします。ミラーさんも 来て くれます。", vi: "Khoảng 9 giờ nhé. Anh Miller cũng đến giúp." },
      { sp: "B", jp: "車は ありますか。", vi: "Có xe không?" },
      { sp: "A", jp: "ええ、会社の 人に ワゴン車を 貸して もらいました。", vi: "Có, tôi được người công ty cho mượn xe van." },
      { sp: "B", jp: "じゃ、私は お弁当を 作って 行きます。", vi: "Vậy tôi sẽ làm cơm hộp mang đến." },
      { sp: "A", jp: "ありがとう ございます。助かります。", vi: "Cảm ơn chị. Đỡ cho tôi quá." }
    ],
    questions: [
      { q: "ワンさんは カリナさんに 何を 頼みましたか。", o: ["引っ越しの 手伝い", "車を 貸す こと", "お弁当を 作る こと", "荷物を 送る こと"], a: 0, ev: [0], tip: "～て くれませんか = lời nhờ lịch sự." },
      { q: "日曜日 何時に 集まりますか。", o: ["9時ごろ", "10時ごろ", "8時ごろ", "12時ごろ"], a: 0, ev: [2], tip: "～ごろ = khoảng (thời điểm)." },
      { q: "ワゴン車は だれに 借りましたか。", o: ["会社の 人", "カリナさん", "ミラーさん", "友達"], a: 0, ev: [4], tip: "人に 貸して もらいました: người trước に là người cho mượn." },
      { q: "カリナさんは 何を しますか。", o: ["お弁当を 作って 行きます", "車を 運転します", "コーヒーを 入れます", "何も しません"], a: 0, ev: [5], tip: "Câu cuối của Karina: 私は ～て 行きます." }
    ]
  },
  kanji: [
    { c: "紹", hv: "THIỆU", on: "ショウ", kun: "—", vi: "giới thiệu", words: [["紹介", "しょうかい", "giới thiệu"]], use: "Bộ 糸; gần như chỉ trong 紹介." },
    { c: "介", hv: "GIỚI", on: "カイ", kun: "—", vi: "ở giữa, môi giới", words: [["紹介", "しょうかい", "giới thiệu"]], use: "Người (人) đứng giữa hai nét." },
    { c: "案", hv: "ÁN", on: "アン", kun: "—", vi: "phương án; dẫn", words: [["案内", "あんない", "hướng dẫn"], ["案内書", "あんないしょ", "sách hướng dẫn"]], use: "安 + 木." },
    { c: "内", hv: "NỘI", on: "ナイ", kun: "うち", vi: "trong", words: [["案内", "あんない", "hướng dẫn"], ["家内", "かない", "vợ (mình)"], ["国内", "こくない", "trong nước"]], use: "Đối với 外 (ngoài)." },
    { c: "説", hv: "THUYẾT", on: "セツ", kun: "と(く)", vi: "nói, giải thích", words: [["説明", "せつめい", "giải thích"], ["小説", "しょうせつ", "tiểu thuyết"]], use: "Bộ 言." },
    { c: "準", hv: "CHUẨN", on: "ジュン", kun: "—", vi: "chuẩn", words: [["準備", "じゅんび", "chuẩn bị"]], use: "Bộ 氵 + 隹 + 十." },
    { c: "備", hv: "BỊ", on: "ビ", kun: "そな(える)", vi: "chuẩn bị, trang bị", words: [["準備", "じゅんび", "chuẩn bị"]], use: "Bộ 亻." },
    { c: "連", hv: "LIÊN", on: "レン", kun: "つ(れる)", vi: "liên, dẫn theo", words: [["連れて 行きます", "つれていきます", "dẫn đi"], ["連絡", "れんらく", "liên lạc"]], use: "辶 + 車: xe nối đuôi nhau." }
  ],
  grammarQuiz: [
    { q: "佐藤さんは 私に お菓子を（　）。", o: ["くれました", "あげました", "もらいました", "さしあげました"], a: 0, ex: "Người khác cho tôi → くれます." },
    { q: "私は 木村さんに 本を 貸して（　）。", o: ["あげました", "くれました", "もらいました", "ください"], a: 0, ex: "Tôi làm cho người khác → Vて あげます." },
    { q: "私は 山田さん（　）駅まで 送って もらいました。", o: ["に", "が", "を", "で"], a: 0, ex: "Vて もらいます: người làm đi với に." },
    { q: "母（　）セーターを 送って くれました。", o: ["が", "に", "を", "で"], a: 0, ex: "Vて くれます: người làm là chủ ngữ." },
    { q: "Chọn câu SAI:", o: ["佐藤さんは 私に 花を あげました。", "私は 佐藤さんに 花を あげました。", "佐藤さんは 私に 花を くれました。", "私は 佐藤さんに 花を もらいました。"], a: 0, ex: "Khi người nhận là “tôi”, không dùng あげます." },
    { q: "すてきな 時計ですね。―― ええ、父（　）くれました。", o: ["が", "に", "を", "と"], a: 0, ex: "Nêu người cho với くれます → が." },
    { q: "先生、荷物を（　）。(đề nghị giúp người trên)", o: ["持ちましょうか", "持って あげます", "持って もらいます", "持って くれます"], a: 0, ex: "Với người trên tránh ～て あげます; dùng ～ましょうか." },
    { q: "友達が 京都を 案内して（　）。(tôi được lợi)", o: ["くれました", "あげました", "もらいました", "いました"], a: 0, ex: "Chủ ngữ là người làm cho tôi → くれました." },
    { q: "だれ（　）手伝いに 来ますか。", o: ["が", "は", "を", "に"], a: 0, ex: "Từ để hỏi làm chủ ngữ → が." }
  ]
};
