// Bài 26 — nội dung tự biên soạn theo phạm vi bài 26 Minna no Nihongo.
window.LESSONS[26] = {
  id: 26,
  title: "ごみは どこに 出したら いいですか",
  titleVi: "Rác thì nên vứt ở đâu?",
  vocab: [
    { w: "見ます／診ます", r: "みます", vi: "xem; khám (bệnh)", t: "động từ nhóm II", ex: [["医者に 診て もらいました。", "Tôi đã được bác sĩ khám."]] },
    { w: "探します／捜します", r: "さがします", vi: "tìm (đồ, việc / người, vật bị mất)", t: "động từ nhóm I", ex: [["今 アパートを 探して いるんです。", "Bây giờ tôi đang tìm căn hộ."]] },
    { w: "遅れます［時間に～］", r: "おくれます", vi: "trễ, muộn (giờ)", t: "động từ nhóm II", ex: [["どうして 遅れたんですか。", "Sao bạn đến muộn vậy?"]] },
    { w: "間に 合います［時間に～］", r: "まにあいます", vi: "kịp (giờ)", t: "động từ nhóm I", ex: [["急がないと、間に 合いませんよ。", "Không nhanh thì không kịp đâu."]] },
    { w: "やります", r: "やります", vi: "làm (thân mật của します)", t: "động từ nhóm I", ex: [["宿題を やりましたか。", "Làm bài tập chưa?"]] },
    { w: "拾います", r: "ひろいます", vi: "nhặt", t: "động từ nhóm I", ex: [["道で 財布を 拾いました。", "Tôi nhặt được ví trên đường."]] },
    { w: "連絡します", r: "れんらくします", vi: "liên lạc", t: "động từ nhóm III", ex: [["遅れる とき、連絡して ください。", "Khi bị muộn hãy liên lạc."]] },
    { w: "気分が いい", r: "きぶんがいい", vi: "cảm thấy dễ chịu", t: "cụm", ex: [["きょうは 気分が いいんです。", "Hôm nay tôi thấy dễ chịu."]] },
    { w: "気分が 悪い", r: "きぶんがわるい", vi: "cảm thấy khó chịu, mệt", t: "cụm", ex: [["気分が 悪いんですか。", "Bạn thấy khó chịu à?"]] },
    { w: "運動会", r: "うんどうかい", vi: "hội thao", t: "danh từ", ex: [["あした 運動会が あるんです。", "Mai có hội thao."]] },
    { w: "盆踊り", r: "ぼんおどり", vi: "múa Bon (lễ hội mùa hè)", t: "danh từ", ex: [["盆踊りに 参加したいんですが。", "Tôi muốn tham gia múa Bon…"]] },
    { w: "フリーマーケット", r: "フリーマーケット", vi: "chợ đồ cũ", t: "danh từ", ex: [["フリーマーケットで 安い 服を 買いました。", "Tôi mua quần áo rẻ ở chợ đồ cũ."]] },
    { w: "場所", r: "ばしょ", vi: "địa điểm", t: "danh từ", ex: [["場所は どこですか。", "Địa điểm ở đâu?"]] },
    { w: "ボランティア", r: "ボランティア", vi: "tình nguyện", t: "danh từ", ex: [["ボランティアを したいんですが。", "Tôi muốn làm tình nguyện…"]] },
    { w: "財布", r: "さいふ", vi: "ví", t: "danh từ", ex: [["財布を なくしたんです。", "Tôi làm mất ví."]] },
    { w: "ごみ", r: "ごみ", vi: "rác", t: "danh từ", ex: [["ごみは どこに 出したら いいですか。", "Rác thì nên bỏ ở đâu?"]] },
    { w: "国会議事堂", r: "こっかいぎじどう", vi: "tòa nhà Quốc hội", t: "danh từ", ex: [["国会議事堂を 見学したいんですが。", "Tôi muốn tham quan tòa nhà Quốc hội…"]] },
    { w: "平日", r: "へいじつ", vi: "ngày thường", t: "danh từ", ex: [["平日は 忙しいんです。", "Ngày thường tôi bận."]] },
    { w: "～弁", r: "べん", vi: "giọng, tiếng địa phương ~", t: "hậu tố", ex: [["大阪弁が わかるんですか。", "Bạn hiểu tiếng Osaka à?"]] },
    { w: "今度", r: "こんど", vi: "lần tới", t: "danh từ", ex: [["今度 いっしょに 行きませんか。", "Lần tới cùng đi không?"]] },
    { w: "ずいぶん", r: "ずいぶん", vi: "khá, rất", t: "phó từ", ex: [["ずいぶん 上手ですね。", "Khá giỏi nhỉ."]] },
    { w: "直接", r: "ちょくせつ", vi: "trực tiếp", t: "phó từ", ex: [["直接 先生に 聞いて ください。", "Hãy hỏi trực tiếp giáo viên."]] },
    { w: "いつでも", r: "いつでも", vi: "lúc nào cũng", t: "phó từ", ex: [["いつでも 連絡して ください。", "Lúc nào cũng có thể liên lạc."]] },
    { w: "どこでも", r: "どこでも", vi: "ở đâu cũng", t: "phó từ", ex: [["どこでも いいです。", "Ở đâu cũng được."]] },
    { w: "だれでも", r: "だれでも", vi: "ai cũng", t: "phó từ", ex: [["だれでも 参加しても いいです。", "Ai tham gia cũng được."]] },
    { w: "何でも", r: "なんでも", vi: "cái gì cũng", t: "phó từ", ex: [["何でも 食べます。", "Cái gì tôi cũng ăn."]] },
    { w: "こんな ～", r: "こんな", vi: "~ như thế này", t: "liên thể từ", ex: [["こんな 服は どうですか。", "Quần áo như thế này thì sao?"]] },
    { w: "そんな ～", r: "そんな", vi: "~ như thế đó", t: "liên thể từ", ex: [["そんな ことは ありません。", "Không có chuyện đó đâu."]] },
    { w: "あんな ～", r: "あんな", vi: "~ như thế kia", t: "liên thể từ", ex: [["あんな 車が 欲しいです。", "Tôi muốn chiếc xe như thế kia."]] },
    { w: "片づきます［荷物が～］", r: "かたづきます", vi: "(đồ đạc) được dọn gọn", t: "động từ nhóm I", ex: [["荷物が 片づきました。", "Đồ đạc đã được dọn xong."]] },
    { w: "燃える ごみ", r: "もえるごみ", vi: "rác cháy được", t: "danh từ", ex: [["燃える ごみは 月曜日と 木曜日です。", "Rác cháy được bỏ vào thứ hai và thứ năm."]] },
    { w: "置き場", r: "おきば", vi: "nơi để", t: "danh từ", ex: [["ごみ置き場は 駐車場の 横です。", "Chỗ bỏ rác ở cạnh bãi đỗ xe."]] },
    { w: "横", r: "よこ", vi: "bên cạnh, bên ngang", t: "danh từ", ex: [["駐車場の 横に あります。", "Ở cạnh bãi đỗ xe."]] },
    { w: "瓶", r: "びん", vi: "chai, lọ", t: "danh từ", ex: [["瓶は 水曜日に 出して ください。", "Chai lọ thì bỏ vào thứ tư."]] },
    { w: "缶", r: "かん", vi: "lon", t: "danh từ", ex: [["缶は どこに 出したら いいですか。", "Lon thì bỏ ở đâu?"]] },
    { w: "ガス", r: "ガス", vi: "ga, khí đốt", t: "danh từ", ex: [["ガスが つかないんです。", "Ga không bật được."]] },
    { w: "～会社", r: "がいしゃ", vi: "công ty ~", t: "hậu tố", ex: [["ガス会社に 連絡して ください。", "Hãy liên lạc với công ty ga."]] },
    { w: "宇宙", r: "うちゅう", vi: "vũ trụ", t: "danh từ", ex: [["宇宙へ 行きたいんです。", "Tôi muốn đi vũ trụ."]] },
    { w: "～様", r: "さま", vi: "ngài ~ (kính ngữ của さん)", t: "hậu tố", ex: [["お客様、こちらへ どうぞ。", "Quý khách, xin mời lối này."]] },
    { w: "怖い", r: "こわい", vi: "sợ, đáng sợ", t: "tính từ い", ex: [["宇宙は 怖くないんですか。", "Vũ trụ không đáng sợ à?"]] }
  ],
  grammar: [
    {
      pattern: "Thể thông thường + んです",
      func: "～んです (văn viết: ～のです) dùng để giải thích lý do, nêu hoàn cảnh, hoặc hỏi để được giải thích. Mang sắc thái “là vì… / có chuyện là…”.",
      explain: ["Cách nối: V / い-adj thể thông thường + んです; な-adj / N: ～な んです (静かなんです, 病気なんです).", "Dùng khi: (1) hỏi về điều mình thấy/nghe và muốn được giải thích: どうしたんですか; (2) trả lời giải thích lý do: 頭が 痛いんです; (3) mở đầu lời nhờ vả: ～んですが、～て いただけませんか.", "Không dùng ～んです cho câu chỉ báo thông tin đơn thuần: ✗ 私は マイク・ミラーなんです."],
      parts: [["V／い-adj + んです", "行くんです, 痛いんです"], ["な-adj／N + な + んです", "暇なんです, 雨なんです"]],
      usage: [
        { rule: "Hỏi để được giải thích (thấy điều lạ).", ex: [["どうしたんですか。 ―― 財布を なくしたんです。", "Bạn bị sao vậy? — Tôi làm mất ví."], ["いい 靴ですね。どこで 買ったんですか。", "Giày đẹp nhỉ. Bạn mua ở đâu vậy?"]] },
        { rule: "Giải thích lý do.", ex: [["どうして 遅れたんですか。 ―― バスが 来なかったんです。", "Sao bạn đến muộn? — Xe buýt không đến."]] },
        { rule: "Mở đầu lời nhờ.", ex: [["頭が 痛いんですが、帰っても いいですか。", "Tôi đau đầu, tôi về được không?"]] }
      ],
      notes: []
    },
    {
      pattern: "V て いただけませんか",
      func: "Nhờ vả rất lịch sự: “Anh/chị có thể … giúp tôi được không ạ?”. Lịch sự hơn ～て ください.",
      parts: [["Vて + いただけませんか", ""]],
      usage: [{ rule: "Nhờ lịch sự (thường mở đầu bằng ～んですが).", ex: [["いい 先生を 紹介して いただけませんか。", "Anh có thể giới thiệu cho tôi một giáo viên giỏi không?"], ["日本語で 手紙を 書いたんですが、ちょっと 見て いただけませんか。", "Tôi viết thư bằng tiếng Nhật, chị xem giúp tôi một chút được không?"]] }],
      notes: []
    },
    {
      pattern: "Từ để hỏi + V たら いいですか",
      func: "Xin lời khuyên, chỉ dẫn: “Nên … như thế nào / ở đâu / cái gì thì được?”.",
      parts: [["どこで／何を／どう + Vたら いいですか", ""]],
      usage: [{ rule: "Xin chỉ dẫn.", ex: [["どこで カメラを 買ったら いいですか。 ―― ABCストアが 安いですよ。", "Nên mua máy ảnh ở đâu? — Cửa hàng ABC rẻ đấy."], ["ごみは どこに 出したら いいですか。 ―― 駐車場の 横に 出して ください。", "Rác nên bỏ ở đâu? — Hãy bỏ ở cạnh bãi đỗ xe."]] }],
      notes: []
    },
    {
      pattern: "N（đối tượng）は 好きです／上手です／あります",
      func: "Đối tượng vốn đi với が (bài 9) có thể được đưa lên làm chủ đề với は để nhấn mạnh hoặc đối chiếu.",
      parts: [["N が 好きです → N は 好きです", ""]],
      usage: [{ rule: "Chủ đề hóa đối tượng.", ex: [["運動会に 参加するんですか。 ―― いいえ。スポーツは あまり 好きじゃ ないんです。", "Bạn tham gia hội thao à? — Không. Thể thao thì tôi không thích lắm."]] }],
      notes: []
    }
  ],
  reading: {
    title: "ごみの 出し方",
    titleVi: "Cách bỏ rác",
    source: "Bài đọc tự biên soạn (thông báo khu chung cư), chỉ dùng từ vựng – ngữ pháp bài 1–26.",
    paragraphs: [
      {
        s: [
          { t: "ごみ||rác / は||(chủ đề) / 朝|あさ|sáng / 8時|はちじ|8 giờ / までに||trước / 出して|だして|bỏ / ください||hãy / 。||", vi: "Rác hãy bỏ trước 8 giờ sáng." },
          { t: "ごみ置き場|ごみおきば|chỗ bỏ rác / は||(chủ đề) / 駐車場|ちゅうしゃじょう|bãi đỗ xe / の||(của) / 横|よこ|bên cạnh / です||là / 。||", vi: "Chỗ bỏ rác ở cạnh bãi đỗ xe." },
          { t: "燃える|もえる|cháy được / ごみ||rác / は||(chủ đề) / 月曜日|げつようび|thứ hai / と||và / 木曜日|もくようび|thứ năm / です||là / 。||", vi: "Rác cháy được bỏ vào thứ hai và thứ năm." },
          { t: "瓶|びん|chai / や||và / 缶|かん|lon / は||(chủ đề) / 水曜日|すいようび|thứ tư / です||là / 。||", vi: "Chai, lon bỏ vào thứ tư." }
        ],
        vi: "Đoạn 1: Quy định: bỏ rác trước 8 giờ; chỗ bỏ ở cạnh bãi đỗ xe; rác cháy được thứ 2 & 5; chai lon thứ 4."
      },
      {
        s: [
          { t: "大きい|おおきい|lớn / ごみ||rác / を||(tân ngữ) / 出したい|だしたい|muốn bỏ / ときは||khi thì / 、||, / 市役所|しやくしょ|tòa thị chính / に||(tới) / 連絡して|れんらくして|liên lạc / ください||hãy / 。||", vi: "Khi muốn bỏ rác cỡ lớn, hãy liên lạc với tòa thị chính." },
          { t: "わからない||không hiểu / ことが||điều / あったら||nếu có / 、||, / 管理人|かんりにん|người quản lý / に||(với) / 直接|ちょくせつ|trực tiếp / 聞いて|きいて|hỏi / ください||hãy / 。||", vi: "Nếu có điều gì không hiểu, hãy hỏi trực tiếp người quản lý." }
        ],
        vi: "Đoạn 2: Rác lớn phải liên lạc tòa thị chính; điều chưa rõ hỏi trực tiếp người quản lý."
      }
    ],
    summary: "Toàn bài: thông báo quy định đổ rác (thời hạn ～までに, lịch theo ngày, nơi bỏ, liên lạc khi cần). Mẹo dạng bài thông báo: đọc câu hỏi trước, quét đúng mục (loại rác → ngày; việc đặc biệt → liên lạc ai).",
    questions: [
      { q: "ごみは 何時までに 出しますか。", o: ["8時", "9時", "7時", "10時"], a: 0, ev: [0, 0], tip: "までに = hạn chót." },
      { q: "缶は 何曜日に 出しますか。", o: ["水曜日", "月曜日", "木曜日", "金曜日"], a: 0, ev: [0, 3], tip: "瓶や 缶 cùng một nhóm → thứ tư." },
      { q: "大きい ごみを 出したい とき、どう したら いいですか。", o: ["市役所に 連絡します", "管理人に 渡します", "月曜日に 出します", "駐車場に 置きます"], a: 0, ev: [1, 0], tip: "Tìm câu có 大きい ごみ." },
      { q: "わからない ことが あったら、だれに 聞きますか。", o: ["管理人", "市役所の 人", "隣の 人", "友達"], a: 0, ev: [1, 1], tip: "～たら + ～て ください: lời chỉ dẫn." }
    ]
  },
  listening: {
    title: "どう したんですか",
    titleVi: "Có chuyện gì vậy?",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "管理人", pitch: 0.85 }, B: { name: "ミラー", pitch: 0.75 } },
    script: [
      { sp: "B", jp: "すみません、ちょっと お願いが あるんですが…。", vi: "Xin lỗi, tôi có chút việc muốn nhờ…" },
      { sp: "A", jp: "どう したんですか。", vi: "Có chuyện gì vậy?" },
      { sp: "B", jp: "きのう 引っ越しして 来たんですが、ガスが つかないんです。", vi: "Hôm qua tôi mới chuyển đến, nhưng ga không bật được." },
      { sp: "A", jp: "そうですか。じゃ、ガス会社に 連絡しないと…。", vi: "Vậy à. Thế thì phải liên lạc công ty ga." },
      { sp: "B", jp: "ガス会社の 電話番号を 教えて いただけませんか。", vi: "Ông có thể cho tôi số điện thoại công ty ga không ạ?" },
      { sp: "A", jp: "いいですよ。それから、ごみは 駐車場の 横に 出して ください。", vi: "Được. À, rác thì bỏ ở cạnh bãi đỗ xe nhé." },
      { sp: "B", jp: "わかりました。どうも ありがとう ございました。", vi: "Tôi hiểu rồi. Cảm ơn ông nhiều." }
    ],
    questions: [
      { q: "ミラーさんは どうして 困って いるんですか。", o: ["ガスが つかないんです", "財布を なくしたんです", "部屋が 汚いんです", "ごみの 場所が わからないんです"], a: 0, ev: [2], tip: "～んです đưa ra lời giải thích sau câu hỏi どう したんですか." },
      { q: "ミラーさんは いつ 引っ越しして 来ましたか。", o: ["きのう", "きょう", "先週", "おととい"], a: 0, ev: [2], tip: "Mốc thời gian đứng đầu câu giải thích." },
      { q: "ミラーさんは 管理人に 何を 頼みましたか。", o: ["ガス会社の 電話番号を 教える こと", "ガスを 直す こと", "ごみを 出す こと", "荷物を 運ぶ こと"], a: 0, ev: [4], tip: "～て いただけませんか = lời nhờ lịch sự." },
      { q: "ごみは どこに 出しますか。", o: ["駐車場の 横", "駐車場の 前", "管理人の 部屋", "部屋の 前"], a: 0, ev: [5], tip: "それから = thông tin bổ sung." }
    ]
  },
  kanji: [
    { c: "探", hv: "THÁM", on: "タン", kun: "さが(す)", vi: "tìm", words: [["探します", "さがします", "tìm"], ["探検", "たんけん", "thám hiểm"]], use: "探 tìm thứ muốn có (việc, nhà); 捜 tìm thứ bị mất." },
    { c: "遅", hv: "TRÌ", on: "チ", kun: "おく(れる)・おそ(い)", vi: "chậm, muộn", words: [["遅れます", "おくれます", "trễ"], ["遅い", "おそい", "chậm"], ["遅刻", "ちこく", "đi muộn"]], use: "Hai cách đọc kun: おく(れる) / おそ(い)." },
    { c: "拾", hv: "THẬP", on: "シュウ", kun: "ひろ(う)", vi: "nhặt", words: [["拾います", "ひろいます", "nhặt"]], use: "Bộ 扌 (tay) + 合." },
    { c: "場", hv: "TRƯỜNG", on: "ジョウ", kun: "ば", vi: "nơi, chỗ", words: [["場所", "ばしょ", "địa điểm"], ["駐車場", "ちゅうしゃじょう", "bãi đỗ xe"], ["売り場", "うりば", "quầy bán"]], use: "Bộ 土; từ ghép Hán đọc ジョウ, thuần Nhật ば." },
    { c: "平", hv: "BÌNH", on: "ヘイ・ビョウ", kun: "たい(ら)", vi: "bằng phẳng, bình thường", words: [["平日", "へいじつ", "ngày thường"], ["平和", "へいわ", "hòa bình"]], use: "Chủ yếu đọc ヘイ." },
    { c: "燃", hv: "NHIÊN", on: "ネン", kun: "も(える)", vi: "cháy", words: [["燃える ごみ", "もえるごみ", "rác cháy được"]], use: "Bộ 火 (lửa)." },
    { c: "怖", hv: "BỐ", on: "フ", kun: "こわ(い)", vi: "sợ", words: [["怖い", "こわい", "đáng sợ"]], use: "Bộ 忄 (tâm đứng)." },
    { c: "様", hv: "DẠNG", on: "ヨウ", kun: "さま", vi: "ngài; dáng", words: [["お客様", "おきゃくさま", "quý khách"], ["～様", "さま", "ngài ~"]], use: "Kính ngữ さま dùng trong thư, dịch vụ." }
  ],
  grammarQuiz: [
    { q: "どう した（　）か。 ―― 財布を なくしたんです。", o: ["んです", "です", "でした", "ます"], a: 0, ex: "Hỏi để được giải thích → ～んですか." },
    { q: "どうして 遅れたんですか。 ―― バスが 来なかった（　）。", o: ["んです", "からです か", "ました", "でしょう"], a: 0, ex: "Giải thích lý do → ～んです." },
    { q: "あしたは 暇（　）んです。", o: ["な", "だ", "の", "で"], a: 0, ex: "な-adj + な んです." },
    { q: "いい 先生を 紹介して（　）。", o: ["いただけませんか", "あげませんか", "もらいましょう", "くれましょう"], a: 0, ex: "Nhờ rất lịch sự: Vて いただけませんか." },
    { q: "ごみは どこに 出し（　）いいですか。", o: ["たら", "ても", "て", "ば"], a: 0, ex: "Từ để hỏi + Vたら いいですか." },
    { q: "何を 買ったら（　）。", o: ["いいですか", "いけませんか", "なりませんか", "だめですか"], a: 0, ex: "Xin lời khuyên: ～たら いいですか." },
    { q: "スポーツ（　）あまり 好きじゃ ないんです。(nhấn mạnh)", o: ["は", "を", "に", "で"], a: 0, ex: "Đối tượng được chủ đề hóa: N は 好きです." },
    { q: "頭が 痛い（　）、帰っても いいですか。", o: ["んですが", "んでした", "ですので か", "のが"], a: 0, ex: "Mở đầu lời xin phép: ～んですが、～." },
    { q: "Câu nào KHÔNG nên dùng ～んです?", o: ["私は マイク・ミラーなんです。", "どう したんですか。", "気分が 悪いんです。", "どこで 買ったんですか。"], a: 0, ex: "Giới thiệu thông tin đơn thuần không dùng ～んです." }
  ]
};
