// Bài 36 — nội dung tự biên soạn theo phạm vi bài 36 Minna no Nihongo.
window.LESSONS[36] = {
  id: 36,
  title: "頭と 体を 使うように して います",
  titleVi: "Tôi cố gắng vận động cả đầu óc lẫn cơ thể",
  vocab: [
    { w: "届きます［荷物が～］", r: "とどきます", vi: "(hành lý) được gửi tới", t: "động từ nhóm I", ex: [["荷物が 届きました。", "Hàng đã được gửi tới."]] },
    { w: "出ます［試合に～］", r: "でます", vi: "tham gia (trận đấu)", t: "động từ nhóm II", ex: [["試合に 出られるように、毎日 練習して います。", "Để được tham gia trận đấu, ngày nào tôi cũng tập."]] },
    { w: "打ちます［ワープロを～］", r: "うちます", vi: "đánh (máy chữ)", t: "động từ nhóm I", ex: [["速く 打てるように なりました。", "Tôi đã gõ nhanh được rồi."]] },
    { w: "貯金します", r: "ちょきんします", vi: "tiết kiệm tiền", t: "động từ nhóm III", ex: [["家が 買えるように、貯金して います。", "Tôi đang tiết kiệm để có thể mua nhà."]] },
    { w: "太ります", r: "ふとります", vi: "béo lên", t: "động từ nhóm I", ex: [["太らないように、甘い 物を 食べません。", "Để không béo lên, tôi không ăn đồ ngọt."]] },
    { w: "やせます", r: "やせます", vi: "gầy đi", t: "động từ nhóm II", ex: [["運動して、やせました。", "Tập thể dục nên tôi đã gầy đi."]] },
    { w: "過ぎます［7時を～］", r: "すぎます", vi: "quá (7 giờ)", t: "động từ nhóm II", ex: [["もう 7時を 過ぎました。", "Đã quá 7 giờ rồi."]] },
    { w: "慣れます［習慣に～］", r: "なれます", vi: "quen (với tập quán)", t: "động từ nhóm II", ex: [["日本の 生活に 慣れました。", "Tôi đã quen với cuộc sống Nhật."]] },
    { w: "硬い", r: "かたい", vi: "cứng", t: "tính từ い", ex: [["この パンは 硬いです。", "Bánh mì này cứng."]] },
    { w: "軟らかい", r: "やわらかい", vi: "mềm", t: "tính từ い", ex: [["軟らかい 物しか 食べられません。", "Tôi chỉ ăn được đồ mềm."]] },
    { w: "電子～", r: "でんし", vi: "~ điện tử", t: "tiền tố", ex: [["電子辞書", "từ điển điện tử"]] },
    { w: "携帯～", r: "けいたい", vi: "~ cầm tay", t: "tiền tố", ex: [["携帯電話", "điện thoại di động"]] },
    { w: "工場", r: "こうじょう", vi: "nhà máy", t: "danh từ", ex: [["工場を 見学しました。", "Tôi tham quan nhà máy."]] },
    { w: "健康", r: "けんこう", vi: "sức khỏe", t: "danh từ", ex: [["健康に 気を つけて、毎日 歩くように して います。", "Tôi chú ý sức khỏe và cố gắng đi bộ mỗi ngày."]] },
    { w: "剣道", r: "けんどう", vi: "kiếm đạo", t: "danh từ", ex: [["剣道が できるように なりたいです。", "Tôi muốn biết chơi kiếm đạo."]] },
    { w: "毎週", r: "まいしゅう", vi: "mỗi tuần", t: "danh từ", ex: [["毎週 プールで 泳ぐように して います。", "Tôi cố gắng tuần nào cũng bơi."]] },
    { w: "毎月", r: "まいつき", vi: "mỗi tháng", t: "danh từ", ex: [["毎月 貯金して います。", "Tháng nào tôi cũng tiết kiệm."]] },
    { w: "毎年", r: "まいとし", vi: "mỗi năm", t: "danh từ", ex: [["毎年 国へ 帰ります。", "Năm nào tôi cũng về nước."]] },
    { w: "やっと", r: "やっと", vi: "cuối cùng thì", t: "phó từ", ex: [["やっと 泳げるように なりました。", "Cuối cùng tôi đã bơi được."]] },
    { w: "かなり", r: "かなり", vi: "khá", t: "phó từ", ex: [["かなり 話せるように なりました。", "Tôi đã nói được khá."]] },
    { w: "必ず", r: "かならず", vi: "nhất định, chắc chắn", t: "phó từ", ex: [["必ず 宿題を 出すように して ください。", "Hãy nhất định nộp bài tập."]] },
    { w: "絶対に", r: "ぜったいに", vi: "tuyệt đối", t: "phó từ", ex: [["絶対に 遅れないように して ください。", "Tuyệt đối đừng đến muộn."]] },
    { w: "上手に", r: "じょうずに", vi: "giỏi, khéo", t: "phó từ", ex: [["上手に 話せるように なりたいです。", "Tôi muốn nói giỏi."]] },
    { w: "できるだけ", r: "できるだけ", vi: "càng … càng tốt, trong khả năng", t: "phó từ", ex: [["できるだけ 野菜を 食べるように して います。", "Tôi cố gắng ăn rau nhiều nhất có thể."]] },
    { w: "このごろ", r: "このごろ", vi: "dạo này", t: "danh từ", ex: [["このごろ 早く 寝るように して います。", "Dạo này tôi cố gắng ngủ sớm."]] },
    { w: "特別［な］", r: "とくべつ", vi: "đặc biệt", t: "tính từ な", ex: [["特別な ことは して いません。", "Tôi không làm gì đặc biệt."]] },
    { w: "水泳", r: "すいえい", vi: "bơi lội", t: "danh từ", ex: [["水泳とか、ジョギングとか、して います。", "Tôi bơi, chạy bộ, v.v."]] },
    { w: "～とか、～とか", r: "とかとか", vi: "~ hay ~ chẳng hạn", t: "trợ từ", ex: [["テニスとか、サッカーとか…。", "Tennis hay bóng đá chẳng hạn…"]] },
    { w: "チャレンジします", r: "チャレンジします", vi: "thử thách", t: "động từ nhóm III", ex: [["新しい ことに チャレンジします。", "Thử thách bản thân với điều mới."]] },
    { w: "気持ち", r: "きもち", vi: "tâm trạng, cảm xúc", t: "danh từ", ex: [["若い 気持ちを 忘れないように して います。", "Tôi cố gắng không quên tinh thần trẻ."]] },
    { w: "乗り物", r: "のりもの", vi: "phương tiện", t: "danh từ", ex: [["昔の 乗り物は 遅かったです。", "Phương tiện ngày xưa chậm."]] },
    { w: "歴史", r: "れきし", vi: "lịch sử", t: "danh từ", ex: [["乗り物の 歴史を 調べました。", "Tôi tìm hiểu lịch sử phương tiện."]] },
    { w: "～世紀", r: "せいき", vi: "thế kỷ ~", t: "hậu tố", ex: [["19世紀に 汽車が できました。", "Thế kỷ 19 có tàu hơi nước."]] },
    { w: "遠く", r: "とおく", vi: "nơi xa", t: "danh từ", ex: [["遠くへ 行けるように なりました。", "Con người đã có thể đi xa."]] },
    { w: "汽車", r: "きしゃ", vi: "tàu hơi nước", t: "danh từ", ex: [["汽車で 旅行しました。", "Du lịch bằng tàu hơi nước."]] },
    { w: "汽船", r: "きせん", vi: "tàu thủy hơi nước", t: "danh từ", ex: [["汽船で 海を 渡りました。", "Vượt biển bằng tàu hơi nước."]] },
    { w: "大勢の ～", r: "おおぜいの", vi: "nhiều (người)", t: "liên thể từ", ex: [["大勢の 人が 集まりました。", "Nhiều người đã tập trung."]] },
    { w: "運びます", r: "はこびます", vi: "chở, vận chuyển", t: "động từ nhóm I", ex: [["荷物を 運べるように なりました。", "Đã có thể chở hàng."]] },
    { w: "安全［な］", r: "あんぜん", vi: "an toàn", t: "tính từ な", ex: [["安全に 運転するように して ください。", "Hãy cố gắng lái xe an toàn."]] },
    { w: "地球", r: "ちきゅう", vi: "Trái Đất", t: "danh từ", ex: [["地球の 周りを 回る ことが できるように なりました。", "Đã có thể bay vòng quanh Trái Đất."]] }
  ],
  grammar: [
    {
      pattern: "V1 る／V1 ない ＋ ように、V2",
      func: "V2 là hành động có chủ ý để đạt tới trạng thái / mục tiêu V1: “để (có thể) V1 / để không V1, thì làm V2”.",
      explain: ["V1 thường là động từ không mang ý chí: thể khả năng (見える, 話せる, 書ける…), わかる, 聞こえる, hoặc thể phủ định (忘れない, 遅れない).", "Phân biệt với ～ために (bài 42): ～ために dùng với động từ có ý chí và chủ ngữ hai vế giống nhau."],
      parts: [["Vる（không ý chí）+ ように", "để có thể"], ["Vない + ように", "để không"]],
      usage: [
        { rule: "Để đạt được.", ex: [["速く 泳げるように、毎日 練習して います。", "Để bơi được nhanh, tôi tập luyện hằng ngày."], ["後ろの 人にも 聞こえるように、大きい 声で 話して ください。", "Hãy nói to để người phía sau cũng nghe được."]] },
        { rule: "Để không.", ex: [["忘れないように、メモして ください。", "Hãy ghi chú lại để không quên."], ["風邪を ひかないように、気を つけて ください。", "Hãy cẩn thận để không bị cảm."]] }
      ],
      notes: []
    },
    {
      pattern: "V る ように なります ／ V なく なります",
      func: "Diễn tả sự thay đổi về năng lực hoặc thói quen: “đã có thể / đã trở nên (làm)” và “đã không còn (làm)”.",
      explain: ["Với thể khả năng: 泳げるように なりました (đã bơi được). Với động từ thường: 毎日 新聞を 読むように なりました (đã có thói quen đọc báo).", "Phủ định: Vない → なく なります (食べなく なりました = đã không ăn nữa).", "Câu hỏi ～ように なりましたか; trả lời phủ định: いいえ、まだ ～ません."],
      parts: [["Vる + ように なります", "trở nên có thể / có thói quen"], ["Vない → なく なります", "không còn …"]],
      usage: [
        { rule: "Năng lực.", ex: [["毎日 練習すれば、泳げるように なります。", "Nếu tập mỗi ngày thì sẽ bơi được."], ["やっと 自転車に 乗れるように なりました。", "Cuối cùng tôi đã đi xe đạp được."]] },
        { rule: "Thói quen.", ex: [["日本人は 牛肉を 食べるように なりました。", "Người Nhật đã có thói quen ăn thịt bò."]] },
        { rule: "Không còn.", ex: [["年を 取って、目が よく 見えなく なりました。", "Có tuổi rồi mắt không còn nhìn rõ nữa."]] }
      ],
      notes: []
    },
    {
      pattern: "V る／V ない ＋ ように します",
      func: "Diễn tả việc cố gắng, nỗ lực duy trì thói quen: “cố gắng (làm / không làm)”. Dạng ～ように して います = đang cố gắng duy trì.",
      explain: ["Dạng ～ように して ください: yêu cầu người nghe cố gắng (mềm hơn ～て ください)."],
      parts: [["Vる／Vない + ように して います", "đang cố gắng"], ["Vる／Vない + ように して ください", "hãy cố gắng"]],
      usage: [
        { rule: "Đang cố gắng.", ex: [["毎日 運動して、何でも 食べるように して います。", "Tôi cố gắng mỗi ngày vận động và ăn đủ mọi thứ."], ["歯に 悪いですから、甘い 物を 食べないように して います。", "Vì hại răng nên tôi cố gắng không ăn đồ ngọt."]] },
        { rule: "Yêu cầu cố gắng.", ex: [["もっと 野菜を 食べるように して ください。", "Hãy cố gắng ăn nhiều rau hơn."], ["あしたは 絶対に 遅れないように して ください。", "Ngày mai tuyệt đối đừng đến muộn nhé."]] }
      ],
      notes: []
    },
    {
      pattern: "～とか、～とか",
      func: "Liệt kê ví dụ trong văn nói (giống や ～など): “… hay … chẳng hạn”.",
      parts: [["N とか N とか", ""]],
      usage: [{ rule: "Liệt kê.", ex: [["どんな スポーツを して いますか。 ―― テニスとか、水泳とか…。", "Bạn chơi môn thể thao nào? — Tennis, bơi lội chẳng hạn…"]] }],
      notes: []
    }
  ],
  reading: {
    title: "健康の 秘密",
    titleVi: "Bí quyết sức khỏe",
    source: "Bài đọc tự biên soạn (phỏng vấn), chỉ dùng từ vựng – ngữ pháp bài 1–36.",
    paragraphs: [
      {
        s: [
          { t: "木村|きむら|Kimura / さん||bà / は||(chủ đề) / 80歳|はちじゅっさい|80 tuổi / です||là / が||nhưng / 、||, / とても||rất / 元気|げんき|khỏe / です||(là) / 。||", vi: "Bà Kimura 80 tuổi nhưng rất khỏe." },
          { t: "毎朝|まいあさ|mỗi sáng / 30分|さんじゅっぷん|30 phút / 歩く|あるく|đi bộ / ように||(cố gắng) / して|して|làm / います||(duy trì) / 。||", vi: "Bà cố gắng mỗi sáng đi bộ 30 phút." },
          { t: "それから||ngoài ra / 、||, / 甘い|あまい|ngọt / 物|もの|đồ / は||(chủ đề) / できるだけ||hết mức có thể / 食べない|たべない|không ăn / ように||(cố gắng) / して|して|làm / います||(duy trì) / 。||", vi: "Ngoài ra, bà cố gắng hạn chế tối đa đồ ngọt." }
        ],
        vi: "Đoạn 1: Bà Kimura 80 tuổi vẫn khỏe: cố gắng đi bộ 30 phút mỗi sáng, hạn chế đồ ngọt."
      },
      {
        s: [
          { t: "70歳|ななじゅっさい|70 tuổi / の||(của) / とき||khi / 、||, / パソコン教室|パソコンきょうしつ|lớp máy tính / に||(đến) / 通いました|かよいました|đã đi học / 。||", vi: "Khi 70 tuổi bà đi học lớp máy tính." },
          { t: "初め|はじめ|lúc đầu / は||(chủ đề) / 難しかった|むずかしかった|đã khó / です||(lịch sự) / が||nhưng / 、||, / 今|いま|bây giờ / は||(đối chiếu) / メール||email / が||(đối tượng) / 書けるように|かけるように|viết được / なりました||đã trở nên / 。||", vi: "Lúc đầu khó nhưng bây giờ đã viết được email." },
          { t: "孫|まご|cháu / と||cùng / 話せる|はなせる|nói chuyện được / ように||để / 、||, / 英語|えいご|tiếng Anh / も||cũng / 勉強して|べんきょうして|học / います||(đang) / 。||", vi: "Để nói chuyện được với cháu, bà cũng đang học tiếng Anh." }
        ],
        vi: "Đoạn 2: 70 tuổi học máy tính, giờ viết được email; học tiếng Anh để nói chuyện với cháu."
      }
    ],
    summary: "Toàn bài: ba nghĩa của ～ように: cố gắng duy trì (～ように して います), thay đổi năng lực (～ように なりました), mục đích (～ように、V). Mẹo: “để làm gì” → tìm ～ように、; “đã có thể làm gì” → tìm ～ように なりました.",
    questions: [
      { q: "木村さんは 毎朝 何を して いますか。", o: ["30分 歩いて います", "30分 泳いで います", "パソコンを 習って います", "甘い 物を 食べて います"], a: 0, ev: [0, 1], tip: "～ように して います = cố gắng duy trì." },
      { q: "木村さんが しない ように して いる ことは 何ですか。", o: ["甘い 物を 食べる こと", "歩く こと", "英語を 勉強する こと", "メールを 書く こと"], a: 0, ev: [0, 2], tip: "Vない + ように して います." },
      { q: "今 木村さんは 何が できるように なりましたか。", o: ["メールを 書く こと", "英語を 話す こと", "泳ぐ こと", "運転する こと"], a: 0, ev: [1, 1], tip: "～ように なりました = đã có thể (thay đổi năng lực)." },
      { q: "木村さんは どうして 英語を 勉強して いますか。", o: ["孫と 話せるように", "旅行に 行けるように", "パソコンが 使えるように", "仕事で 使うから"], a: 0, ev: [1, 2], tip: "Vる（khả năng）+ ように、V2: mục đích." }
    ]
  },
  listening: {
    title: "やっと 泳げるように なりました",
    titleVi: "Cuối cùng đã bơi được",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "中村", pitch: 1.3 }, B: { name: "ミラー", pitch: 0.75 } },
    script: [
      { sp: "A", jp: "ミラーさん、このごろ やせましたね。", vi: "Anh Miller dạo này gầy đi nhỉ." },
      { sp: "B", jp: "ええ。毎週 プールで 泳ぐように して いるんです。", vi: "Vâng. Tôi cố gắng tuần nào cũng bơi ở hồ bơi." },
      { sp: "A", jp: "前から 泳げたんですか。", vi: "Trước đây anh đã bơi được à?" },
      { sp: "B", jp: "いいえ。先月 やっと 泳げるように なりました。", vi: "Không. Tháng trước cuối cùng mới bơi được." },
      { sp: "A", jp: "すごいですね。私は 太らないように、エレベーターに 乗らないで、階段を 使って います。", vi: "Giỏi thật. Tôi thì để không béo lên, không đi thang máy mà dùng cầu thang bộ." },
      { sp: "B", jp: "それは いいですね。", vi: "Thế thì tốt nhỉ." }
    ],
    questions: [
      { q: "ミラーさんは どうして やせましたか。", o: ["毎週 泳いで いるから", "毎日 歩いて いるから", "甘い 物を 食べないから", "階段を 使うから"], a: 0, ev: [1], tip: "～ように して いるんです = lời giải thích (んです)." },
      { q: "ミラーさんは いつ 泳げるように なりましたか。", o: ["先月", "先週", "去年", "子どもの とき"], a: 0, ev: [3], tip: "やっと ～ように なりました + mốc thời gian." },
      { q: "中村さんは どうして 階段を 使って いますか。", o: ["太らないように", "やせたから", "エレベーターが 壊れて いるから", "健康に 悪いから"], a: 0, ev: [4], tip: "Vない + ように、V2: mục đích." },
      { q: "中村さんが しない ように して いる ことは 何ですか。", o: ["エレベーターに 乗る こと", "階段を 使う こと", "泳ぐ こと", "甘い 物を 食べる こと"], a: 0, ev: [4], tip: "～ないで、～: không làm A mà làm B." }
    ]
  },
  kanji: [
    { c: "届", hv: "GIỚI", on: "—", kun: "とど(く)・とど(ける)", vi: "đến nơi, gửi tới", words: [["届きます", "とどきます", "được gửi tới"], ["届けます", "とどけます", "gửi tới"]], use: "Bộ 尸 + 由." },
    { c: "過", hv: "QUÁ", on: "カ", kun: "す(ぎる)", vi: "quá, vượt", words: [["過ぎます", "すぎます", "quá"], ["過去", "かこ", "quá khứ"]], use: "Bộ 辶." },
    { c: "慣", hv: "QUÁN", on: "カン", kun: "な(れる)", vi: "quen", words: [["慣れます", "なれます", "quen"], ["習慣", "しゅうかん", "tập quán"]], use: "Bộ 忄." },
    { c: "固", hv: "CỐ", on: "コ", kun: "かた(い)", vi: "cứng, chắc", words: [["固い", "かたい", "cứng"], ["固定", "こてい", "cố định"]], use: "古 trong 口." },
    { c: "健", hv: "KIỆN", on: "ケン", kun: "すこ(やか)", vi: "khỏe mạnh", words: [["健康", "けんこう", "sức khỏe"]], use: "Bộ 亻 + 建." },
    { c: "康", hv: "KHANG", on: "コウ", kun: "—", vi: "yên ổn, khỏe", words: [["健康", "けんこう", "sức khỏe"]], use: "Gần như chỉ trong 健康." },
    { c: "歴", hv: "LỊCH", on: "レキ", kun: "—", vi: "lịch (sử)", words: [["歴史", "れきし", "lịch sử"]], use: "厂 + 林 + 止." },
    { c: "史", hv: "SỬ", on: "シ", kun: "—", vi: "sử", words: [["歴史", "れきし", "lịch sử"]], use: "Phân biệt 史 với 使 (sử dụng)." }
  ],
  grammarQuiz: [
    { q: "忘れない（　）、メモして ください。", o: ["ように", "ために", "とおりに", "ほど"], a: 0, ex: "Để không: Vない ように." },
    { q: "速く 泳げる（　）、毎日 練習します。", o: ["ように", "ために に", "まで", "あとで"], a: 0, ex: "Thể khả năng + ように: để có thể." },
    { q: "やっと 自転車に 乗れる（　）なりました。", o: ["ように", "ことに", "ために", "と"], a: 0, ex: "Thay đổi năng lực: ～ように なりました." },
    { q: "年を 取って、目が よく 見え（　）なりました。", o: ["なく", "ないで", "ないように", "なくて"], a: 0, ex: "Không còn: Vない → なく なります." },
    { q: "甘い 物を 食べない ように（　）います。", o: ["して", "なって", "あって", "おいて"], a: 0, ex: "Cố gắng duy trì: ～ように して います." },
    { q: "あしたは 遅れない ように（　）ください。", o: ["して", "なって", "いて", "あって"], a: 0, ex: "Hãy cố gắng: ～ように して ください." },
    { q: "テニス（　）、水泳とか…。", o: ["とか", "や", "と", "など"], a: 0, ex: "Văn nói liệt kê: ～とか、～とか." },
    { q: "毎日 練習すれば、日本語が 話せる（　）なりますよ。", o: ["ように", "ことに", "ほど", "とおりに"], a: 0, ex: "～ように なります." },
    { q: "Câu nào dùng ～ように ĐÚNG?", o: ["後ろの 人にも 聞こえるように、大きい 声で 話します。", "大きい 声で 話すように、後ろの 人に 聞こえます。", "聞こえるように なって ください。", "聞こえないように なって います。"], a: 0, ex: "V1 không ý chí + ように, V2 là hành động có chủ ý." }
  ]
};
