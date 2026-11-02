// Bài 9 — nội dung tự biên soạn theo phạm vi bài 9 Minna no Nihongo.
window.LESSONS[9] = {
  id: 9,
  title: "残念です",
  titleVi: "Tiếc quá",
  vocab: [
    { w: "わかります", r: "わかります", vi: "hiểu, biết", t: "động từ", ex: [["日本語が わかります。", "Tôi hiểu tiếng Nhật."]], note: "Đối tượng đi với が." },
    { w: "あります", r: "あります", vi: "có (sở hữu)", t: "động từ", ex: [["車が あります。", "Tôi có ô tô."]] },
    { w: "好き［な］", r: "すき", vi: "thích", t: "tính từ な", ex: [["私は 音楽が 好きです。", "Tôi thích âm nhạc."]] },
    { w: "嫌い［な］", r: "きらい", vi: "ghét, không thích", t: "tính từ な", ex: [["魚が 嫌いです。", "Tôi ghét cá."]] },
    { w: "上手［な］", r: "じょうず", vi: "giỏi", t: "tính từ な", ex: [["マリアさんは ダンスが 上手です。", "Chị Maria nhảy giỏi."]], note: "Không dùng để tự khen mình." },
    { w: "下手［な］", r: "へた", vi: "kém", t: "tính từ な", ex: [["私は 料理が 下手です。", "Tôi nấu ăn kém."]] },
    { w: "料理", r: "りょうり", vi: "món ăn; việc nấu ăn", t: "danh từ", ex: [["どんな 料理が 好きですか。", "Bạn thích món ăn nào?"]] },
    { w: "飲み物", r: "のみもの", vi: "đồ uống", t: "danh từ", ex: [["どんな 飲み物が 好きですか。", "Bạn thích đồ uống gì?"]] },
    { w: "スポーツ", r: "スポーツ", vi: "thể thao", t: "danh từ", ex: [["スポーツが 好きです。", "Tôi thích thể thao."]] },
    { w: "野球", r: "やきゅう", vi: "bóng chày", t: "danh từ", ex: [["野球を します。", "Tôi chơi bóng chày."]] },
    { w: "ダンス", r: "ダンス", vi: "nhảy, khiêu vũ", t: "danh từ", ex: [["ダンスが 上手ですね。", "Bạn nhảy giỏi nhỉ."]] },
    { w: "旅行", r: "りょこう", vi: "du lịch", t: "danh từ", ex: [["旅行が 好きです。", "Tôi thích du lịch."]] },
    { w: "音楽", r: "おんがく", vi: "âm nhạc", t: "danh từ", ex: [["どんな 音楽が 好きですか。", "Bạn thích nhạc gì?"]] },
    { w: "歌", r: "うた", vi: "bài hát", t: "danh từ", ex: [["日本の 歌が わかりますか。", "Bạn hiểu bài hát tiếng Nhật không?"]] },
    { w: "クラシック", r: "クラシック", vi: "nhạc cổ điển", t: "danh từ", ex: [["クラシックが 好きです。", "Tôi thích nhạc cổ điển."]] },
    { w: "ジャズ", r: "ジャズ", vi: "nhạc jazz", t: "danh từ", ex: [["ジャズは あまり 好きじゃ ありません。", "Tôi không thích jazz lắm."]] },
    { w: "コンサート", r: "コンサート", vi: "buổi hòa nhạc", t: "danh từ", ex: [["コンサートの チケットが あります。", "Tôi có vé buổi hòa nhạc."]] },
    { w: "カラオケ", r: "カラオケ", vi: "karaoke", t: "danh từ", ex: [["カラオケへ 行きませんか。", "Đi karaoke không?"]] },
    { w: "歌舞伎", r: "かぶき", vi: "kịch Kabuki", t: "danh từ", ex: [["歌舞伎が わかりますか。", "Bạn hiểu kịch Kabuki không?"]] },
    { w: "絵", r: "え", vi: "tranh, hội họa", t: "danh từ", ex: [["絵が 上手ですね。", "Bạn vẽ giỏi nhỉ."]] },
    { w: "字", r: "じ", vi: "chữ", t: "danh từ", ex: [["きれいな 字ですね。", "Chữ đẹp nhỉ."]] },
    { w: "漢字", r: "かんじ", vi: "chữ Hán", t: "danh từ", ex: [["漢字が 少し わかります。", "Tôi hiểu một chút chữ Hán."]] },
    { w: "ひらがな", r: "ひらがな", vi: "chữ Hiragana", t: "danh từ", ex: [["ひらがなが わかります。", "Tôi biết Hiragana."]] },
    { w: "かたかな", r: "かたかな", vi: "chữ Katakana", t: "danh từ", ex: [["かたかなは 難しいです。", "Katakana khó."]] },
    { w: "ローマ字", r: "ローマじ", vi: "chữ La-tinh (Romaji)", t: "danh từ", ex: [["ローマ字で 書きます。", "Viết bằng chữ Romaji."]] },
    { w: "細かい お金", r: "こまかいおかね", vi: "tiền lẻ", t: "danh từ", ex: [["細かい お金が ありますか。", "Bạn có tiền lẻ không?"]] },
    { w: "チケット", r: "チケット", vi: "vé (xem phim, hòa nhạc)", t: "danh từ", ex: [["映画の チケットが あります。", "Tôi có vé xem phim."]] },
    { w: "時間", r: "じかん", vi: "thời gian", t: "danh từ", ex: [["時間が ありません。", "Tôi không có thời gian."]] },
    { w: "用事", r: "ようじ", vi: "việc bận", t: "danh từ", ex: [["あしたは 用事が あります。", "Mai tôi có việc bận."]] },
    { w: "約束", r: "やくそく", vi: "lời hẹn, lời hứa", t: "danh từ", ex: [["友達と 約束が あります。", "Tôi có hẹn với bạn."]] },
    { w: "アルバイト", r: "アルバイト", vi: "việc làm thêm", t: "danh từ", ex: [["土曜日は アルバイトが あります。", "Thứ bảy tôi có việc làm thêm."]] },
    { w: "ご主人", r: "ごしゅじん", vi: "chồng (người khác)", t: "danh từ", ex: [["ご主人は 料理が 上手ですか。", "Chồng chị nấu ăn giỏi không?"]] },
    { w: "夫／主人", r: "おっと", vi: "chồng (mình)", t: "danh từ", ex: [["夫は 野球が 好きです。", "Chồng tôi thích bóng chày."]], note: "主人 đọc しゅじん." },
    { w: "奥さん", r: "おくさん", vi: "vợ (người khác)", t: "danh từ", ex: [["奥さんは 日本語が わかりますか。", "Vợ anh hiểu tiếng Nhật không?"]] },
    { w: "妻／家内", r: "つま", vi: "vợ (mình)", t: "danh từ", ex: [["妻は 歌が 上手です。", "Vợ tôi hát hay."]], note: "家内 đọc かない." },
    { w: "子ども", r: "こども", vi: "trẻ con, con cái", t: "danh từ", ex: [["子どもが 好きです。", "Tôi thích trẻ con."]] },
    { w: "よく", r: "よく", vi: "rõ, tốt (mức độ cao)", t: "phó từ", ex: [["英語が よく わかります。", "Tôi hiểu tiếng Anh rõ."]] },
    { w: "だいたい", r: "だいたい", vi: "đại khái, phần lớn", t: "phó từ", ex: [["漢字が だいたい わかります。", "Tôi hiểu đại khái chữ Hán."]] },
    { w: "たくさん", r: "たくさん", vi: "nhiều", t: "phó từ", ex: [["お金が たくさん あります。", "Tôi có nhiều tiền."]] },
    { w: "少し", r: "すこし", vi: "một chút, một ít", t: "phó từ", ex: [["日本語が 少し わかります。", "Tôi hiểu một chút tiếng Nhật."]] },
    { w: "全然", r: "ぜんぜん", vi: "hoàn toàn không (đi với phủ định)", t: "phó từ", ex: [["フランス語が 全然 わかりません。", "Tôi hoàn toàn không hiểu tiếng Pháp."]] },
    { w: "早く／速く", r: "はやく", vi: "sớm; nhanh", t: "phó từ", ex: [["きょうは 早く 帰ります。", "Hôm nay tôi về sớm."]] },
    { w: "～から", r: "から", vi: "vì ~", t: "trợ từ nối câu", ex: [["時間が ありませんから、新聞を 読みません。", "Vì không có thời gian nên tôi không đọc báo."]] },
    { w: "どうして", r: "どうして", vi: "tại sao", t: "từ để hỏi", ex: [["どうして 早く 帰りますか。", "Tại sao bạn về sớm?"]] },
    { w: "貸して ください", r: "かしてください", vi: "hãy cho tôi mượn", t: "cụm", ex: [["ボールペンを 貸して ください。", "Cho tôi mượn bút bi."]] },
    { w: "いいですよ", r: "いいですよ", vi: "được thôi", t: "cụm", ex: [["貸して ください。 ―― いいですよ。どうぞ。", "Cho tôi mượn. — Được thôi, đây."]] },
    { w: "残念です［ね］", r: "ざんねんです", vi: "tiếc quá", t: "cụm", ex: [["あしたは 用事が ありますから…。 ―― そうですか。残念ですね。", "Mai tôi có việc bận… — Vậy à. Tiếc nhỉ."]] },
    { w: "もしもし", r: "もしもし", vi: "a-lô", t: "thán từ", ex: [["もしもし、木村です。", "A-lô, tôi là Kimura."]] },
    { w: "ああ", r: "ああ", vi: "à, ồ", t: "thán từ", ex: [["ああ、ミラーさん。", "À, anh Miller."]] },
    { w: "いっしょに いかがですか", r: "いっしょにいかがですか", vi: "cùng (đi/làm) với chúng tôi nhé?", t: "cụm", ex: [["コンサートに いっしょに いかがですか。", "Cùng đi hòa nhạc nhé?"]] },
    { w: "［～は］ちょっと…", r: "ちょっと", vi: "(~ thì) hơi… (từ chối khéo)", t: "cụm", ex: [["土曜日は ちょっと…。", "Thứ bảy thì hơi…"]] },
    { w: "だめですか", r: "だめですか", vi: "không được à?", t: "cụm", ex: [["あしたは だめですか。", "Mai không được à?"]] },
    { w: "また 今度 お願いします", r: "またこんどおねがいします", vi: "hẹn lần sau nhé", t: "cụm", ex: [["また 今度 お願いします。", "Hẹn lần sau nhé."]] }
  ],
  grammar: [
    {
      pattern: "N が あります／わかります",
      func: "Với một số động từ, đối tượng không dùng を mà dùng が. Bài 9: あります (có – sở hữu) và わかります (hiểu).",
      explain: ["Đây là nhóm động từ/tính từ chỉ trạng thái, khả năng, cảm xúc. Đối tượng của chúng đánh dấu bằng が.", "Không nói ✗ 日本語を わかります."],
      parts: [["が", "Đánh dấu đối tượng của あります / わかります."]],
      usage: [
        { rule: "Sở hữu.", ex: [["私は カメラが あります。", "Tôi có máy ảnh."], ["あしたは 用事が あります。", "Mai tôi có việc."]] },
        { rule: "Hiểu biết.", ex: [["ミラーさんは 日本語が わかります。", "Anh Miller hiểu tiếng Nhật."]] }
      ],
      notes: ["あります ở bài 9 = sở hữu. Bài 10 sẽ học あります = tồn tại ở đâu đó."]
    },
    {
      pattern: "N が 好きです／嫌いです／上手です／下手です",
      func: "Các tính từ な chỉ sở thích và năng lực; đối tượng đi với が.",
      explain: ["Cấu trúc: (Người) は + đối tượng が + 好き/嫌い/上手/下手 です.", "上手 dùng để khen người khác; nói về mình thì khiêm tốn dùng 少し できます (bài 18) hoặc 下手です."],
      parts: [["好き・嫌い", "thích / ghét"], ["上手・下手", "giỏi / kém"]],
      usage: [
        { rule: "Sở thích.", ex: [["私は イタリア料理が 好きです。", "Tôi thích món Ý."]] },
        { rule: "Năng lực.", ex: [["ご主人は 料理が 上手ですね。", "Chồng chị nấu ăn giỏi nhỉ."]] }
      ],
      notes: []
    },
    {
      pattern: "どんな N が 好きですか",
      func: "Hỏi cụ thể loại nào trong một nhóm.",
      parts: [["どんな + N", "N loại nào"]],
      usage: [{ rule: "Hỏi sở thích cụ thể.", ex: [["どんな スポーツが 好きですか。 ―― サッカーが 好きです。", "Bạn thích môn thể thao nào? — Tôi thích bóng đá."]] }],
      notes: []
    },
    {
      pattern: "Phó từ chỉ mức độ & số lượng",
      func: "Đặt trước động từ / tính từ để chỉ mức độ (よく, だいたい, 少し, あまり, 全然) hoặc số lượng (たくさん, 少し).",
      explain: ["Mức độ hiểu giảm dần: よく > だいたい > 少し > あまり ～ません > 全然 ～ません.", "あまり và 全然 luôn đi với phủ định."],
      parts: [["Khẳng định", "よく, だいたい, たくさん, 少し"], ["Phủ định", "あまり, 全然"]],
      usage: [
        { rule: "Mức độ.", ex: [["英語が よく わかります。", "Tôi hiểu tiếng Anh rõ."], ["英語が 少し わかります。", "Tôi hiểu tiếng Anh một chút."], ["英語が 全然 わかりません。", "Tôi hoàn toàn không hiểu tiếng Anh."]] },
        { rule: "Số lượng.", ex: [["お金が たくさん あります。", "Tôi có nhiều tiền."], ["お金が 全然 ありません。", "Tôi không có đồng nào."]] }
      ],
      notes: ["Phó từ cũng có thể đi với tính từ: とても 寒いです / あまり 寒くないです."]
    },
    {
      pattern: "S1 から、S2",
      func: "から nối hai mệnh đề: S1 là lý do, S2 là kết quả — “Vì S1 nên S2”.",
      explain: ["Cũng có thể chỉ nói lý do rồi kết thúc bằng から: ～から です."],
      parts: [["から", "Đặt cuối mệnh đề lý do."]],
      usage: [
        { rule: "Nêu nguyên nhân – kết quả.", ex: [["時間が ありませんから、新聞を 読みません。", "Vì không có thời gian nên tôi không đọc báo."]] },
        { rule: "Trả lời câu hỏi どうして.", ex: [["どうして 朝 新聞を 読みませんか。 ―― 時間が ありませんから。", "Sao sáng bạn không đọc báo? — Vì không có thời gian."]] }
      ],
      notes: ["Phân biệt với から “từ” (bài 4–7): 9時から, 友達から."]
    },
    {
      pattern: "どうして",
      func: "Từ để hỏi lý do: “tại sao”. Câu trả lời kết thúc bằng ～から.",
      parts: [["どうして", "tại sao"]],
      usage: [
        { rule: "Hỏi lý do.", ex: [["どうして きのう 早く 帰りましたか。 ―― 用事が ありましたから。", "Sao hôm qua bạn về sớm? — Vì tôi có việc."]] },
        { rule: "Hỏi lại lý do của câu đối phương vừa nói: どうしてですか.", ex: [["きょうは 早く 帰ります。 ―― どうしてですか。", "Hôm nay tôi về sớm. — Sao vậy?"]] }
      ],
      notes: []
    }
  ],
  reading: {
    title: "私の 好きな こと",
    titleVi: "Điều tôi thích",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–9.",
    paragraphs: [
      {
        s: [
          { t: "私|わたし|tôi / は||(chủ đề) / 音楽|おんがく|âm nhạc / が||(đối tượng) / 好き|すき|thích / です||(là) / 。||", vi: "Tôi thích âm nhạc." },
          { t: "クラシック||nhạc cổ điển / が||(đối tượng) / 好き|すき|thích / です||(là) / が||nhưng / 、||, / ジャズ||jazz / は||(đối lập) / あまり||không … lắm / 好き|すき|thích / じゃ ありません||không / 。||", vi: "Tôi thích nhạc cổ điển nhưng không thích jazz lắm." },
          { t: "歌|うた|hát / は||(đối lập) / 下手|へた|kém / です||(là) / から||vì / 、||, / カラオケ||karaoke / へ||đến / 行きません|いきません|không đi / 。||", vi: "Vì hát dở nên tôi không đi karaoke." }
        ],
        vi: "Đoạn 1: Thích nhạc cổ điển, không thích jazz lắm; hát dở nên không đi karaoke."
      },
      {
        s: [
          { t: "友達|ともだち|bạn / の||(của) / マリア||Maria / さん||chị / は||(chủ đề) / ダンス||nhảy / が||(đối tượng) / とても||rất / 上手|じょうず|giỏi / です||(là) / 。||", vi: "Chị Maria, bạn tôi, nhảy rất giỏi." },
          { t: "そして||và / 、||, / 日本語|にほんご|tiếng Nhật / が||(đối tượng) / よく||rõ / わかります||hiểu / 。||", vi: "Và chị ấy hiểu tiếng Nhật rất rõ." },
          { t: "私|わたし|tôi / は||(chủ đề) / 漢字|かんじ|chữ Hán / が||(đối tượng) / 少し|すこし|một chút / わかります||hiểu / が||nhưng / 、||, / かたかな||Katakana / が||(đối tượng) / 全然|ぜんぜん|hoàn toàn / わかりません||không hiểu / 。||", vi: "Tôi hiểu chút chữ Hán nhưng hoàn toàn không đọc được Katakana." }
        ],
        vi: "Đoạn 2: Maria nhảy giỏi và hiểu tiếng Nhật tốt; người viết hiểu chút chữ Hán nhưng không biết Katakana."
      },
      {
        s: [
          { t: "あした||ngày mai / 、||, / マリア||Maria / さん||chị / と||cùng / コンサート||hòa nhạc / へ||đến / 行きます|いきます|đi / 。||", vi: "Ngày mai tôi đi hòa nhạc cùng chị Maria." },
          { t: "チケット||vé / が||(đối tượng) / あります||có / から||vì / 。||", vi: "Vì tôi có vé." },
          { t: "でも||nhưng / 、||, / 夜|よる|tối / は||(đối lập) / アルバイト||làm thêm / が||(đối tượng) / あります||có / から||vì / 、||, / 早く|はやく|sớm / 帰ります|かえります|về / 。||", vi: "Nhưng vì tối có việc làm thêm nên tôi sẽ về sớm." }
        ],
        vi: "Đoạn 3: Mai đi hòa nhạc với Maria (đã có vé), nhưng tối có việc làm thêm nên về sớm."
      }
    ],
    summary: "Toàn bài: người viết nói về sở thích âm nhạc (thích cổ điển, không thích jazz, hát dở), so sánh năng lực với Maria, và kế hoạch đi hòa nhạc ngày mai nhưng phải về sớm vì đi làm thêm. Mẹo: câu hỏi どうして → tìm vế đứng trước から.",
    questions: [
      { q: "この 人は どんな 音楽が 好きですか。", o: ["クラシック", "ジャズ", "歌", "カラオケ"], a: 0, ev: [0, 1], tip: "Câu có が (nhưng) chia 2 vế: vế đầu là cái thích. ジャズ đi với あまり 好きじゃ ありません." },
      { q: "どうして カラオケへ 行きませんか。", o: ["歌が 下手ですから", "時間が ありませんから", "カラオケが 嫌いですから", "お金が ありませんから"], a: 0, ev: [0, 2], tip: "どうして → tìm mệnh đề đứng trước から trong câu có カラオケ." },
      { q: "この 人は かたかなが わかりますか。", o: ["いいえ、全然 わかりません", "はい、よく わかります", "はい、少し わかります", "はい、だいたい わかります"], a: 0, ev: [1, 2], tip: "少し わかります đi với 漢字, không phải かたかな. Đối chiếu đúng đối tượng của từng vế." },
      { q: "あした どうして 早く 帰りますか。", o: ["アルバイトが ありますから", "コンサートが 嫌いですから", "マリアさんが 帰りますから", "チケットが ありませんから"], a: 0, ev: [2, 2], tip: "Lý do nằm ngay trước から trong câu cuối." }
    ]
  },
  listening: {
    title: "電話で 誘います",
    titleVi: "Rủ qua điện thoại",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "木村", pitch: 1.3 }, B: { name: "ミラー", pitch: 0.8 } },
    script: [
      { sp: "A", jp: "もしもし、木村です。", vi: "A-lô, Kimura đây." },
      { sp: "B", jp: "ああ、木村さん。こんばんは。", vi: "À, chị Kimura. Chào buổi tối." },
      { sp: "A", jp: "ミラーさん、歌舞伎が 好きですか。", vi: "Anh Miller có thích Kabuki không?" },
      { sp: "B", jp: "ええ、好きですよ。", vi: "Có, tôi thích." },
      { sp: "A", jp: "チケットが ありますから、土曜日 いっしょに いかがですか。", vi: "Tôi có vé, thứ bảy đi cùng nhé?" },
      { sp: "B", jp: "土曜日ですか。土曜日は ちょっと…。友達と 約束が ありますから。", vi: "Thứ bảy à? Thứ bảy thì hơi… Vì tôi có hẹn với bạn." },
      { sp: "A", jp: "そうですか。残念ですね。", vi: "Vậy à. Tiếc nhỉ." },
      { sp: "B", jp: "すみません。また 今度 お願いします。", vi: "Xin lỗi. Hẹn chị lần sau nhé." }
    ],
    questions: [
      { q: "木村さんは ミラーさんと 何を 見ますか。(muốn rủ xem gì)", o: ["歌舞伎", "映画", "コンサート", "野球"], a: 0, ev: [2], tip: "Câu hỏi sở thích ～が 好きですか ngay đầu thường là chủ đề lời mời." },
      { q: "ミラーさんは 土曜日 行きますか。", o: ["いいえ、行きません", "はい、行きます", "日曜日 行きます", "わかりません"], a: 0, ev: [5], tip: "～は ちょっと… = từ chối. Câu 残念ですね của Kimura xác nhận lời từ chối." },
      { q: "どうして 行きませんか。", o: ["友達と 約束が ありますから", "歌舞伎が 嫌いですから", "アルバイトが ありますから", "チケットが ありませんから"], a: 0, ev: [5], tip: "Lý do đứng trước から trong câu của Miller." },
      { q: "ミラーさんは 歌舞伎が 好きですか。", o: ["はい、好きです", "いいえ、嫌いです", "あまり 好きじゃ ありません", "わかりません"], a: 0, ev: [3], tip: "Từ chối không phải vì không thích — Miller đã nói 好きですよ. Đề nghe hay bẫy bằng cách suy luận sai." }
    ]
  },
  kanji: [
    { c: "好", hv: "HẢO", on: "コウ", kun: "す(き)・この(む)", vi: "thích, tốt", words: [["好き", "すき", "thích"], ["大好き", "だいすき", "rất thích"]], use: "女 (phụ nữ) + 子 (con): mẹ bế con → yêu thích." },
    { c: "字", hv: "TỰ", on: "ジ", kun: "あざ", vi: "chữ", words: [["字", "じ", "chữ"], ["漢字", "かんじ", "chữ Hán"], ["ローマ字", "ローマじ", "Romaji"]], use: "Gần như luôn đọc ジ." },
    { c: "漢", hv: "HÁN", on: "カン", kun: "—", vi: "nhà Hán, người Hán", words: [["漢字", "かんじ", "chữ Hán"]], use: "Bộ 氵 (nước) bên trái." },
    { c: "少", hv: "THIỂU", on: "ショウ", kun: "すこ(し)・すく(ない)", vi: "ít", words: [["少し", "すこし", "một chút"], ["少ない", "すくない", "ít"]], use: "Phân biệt 少 (ít) với 小 (nhỏ): 少 có thêm nét phẩy dưới." },
    { c: "音", hv: "ÂM", on: "オン", kun: "おと", vi: "âm thanh", words: [["音楽", "おんがく", "âm nhạc"], ["音", "おと", "âm thanh"]], use: "立 (đứng) + 日: tiếng nói phát ra." },
    { c: "楽", hv: "LẠC, NHẠC", on: "ガク・ラク", kun: "たの(しい)", vi: "vui; âm nhạc", words: [["音楽", "おんがく", "âm nhạc"], ["楽しい", "たのしい", "vui"], ["楽", "らく", "thoải mái"]], use: "Nghĩa âm nhạc đọc ガク; nghĩa vui đọc たの(しい) hoặc ラク." },
    { c: "子", hv: "TỬ", on: "シ", kun: "こ", vi: "con", words: [["子ども", "こども", "trẻ con"], ["女の子", "おんなのこ", "bé gái"], ["男の子", "おとこのこ", "bé trai"]], use: "Đứng riêng / cuối từ thuần Nhật đọc こ." },
    { c: "用", hv: "DỤNG", on: "ヨウ", kun: "もち(いる)", vi: "dùng; việc", words: [["用事", "ようじ", "việc bận"], ["利用", "りよう", "sử dụng"]], use: "Sơ cấp gặp nhiều trong 用事." }
  ],
  grammarQuiz: [
    { q: "私は 日本語（　）わかります。", o: ["が", "を", "は", "で"], a: 0, ex: "わかります: đối tượng đi với が." },
    { q: "マリアさんは ダンス（　）上手です。", o: ["が", "を", "に", "で"], a: 0, ex: "上手: đối tượng đi với が." },
    { q: "（　）スポーツが 好きですか。―― サッカーが 好きです。", o: ["どんな", "どう", "どれ", "何で"], a: 0, ex: "Hỏi loại cụ thể + danh từ → どんな." },
    { q: "フランス語が（　）わかりません。", o: ["全然", "よく", "だいたい", "少し"], a: 0, ex: "全然 đi với phủ định." },
    { q: "時間が ありません（　）、新聞を 読みません。", o: ["から", "が", "まで", "と"], a: 0, ex: "Lý do → から." },
    { q: "（　）早く 帰りますか。―― 用事が ありますから。", o: ["どうして", "どう", "どんな", "いつ"], a: 0, ex: "Câu trả lời có ～から → câu hỏi どうして." },
    { q: "あしたは 用事（　）あります。", o: ["が", "を", "で", "に"], a: 0, ex: "あります (sở hữu): が." },
    { q: "Câu nào tự nhiên khi nói về mình?", o: ["私は 料理が 下手です。", "私は 料理が 上手です。", "私は 料理を 上手です。", "私は 料理が 上手ですね。"], a: 0, ex: "Người Nhật tránh tự khen 上手; nói khiêm tốn 下手です. Đối tượng luôn đi với が." },
    { q: "土曜日、いっしょに いかがですか。―― 土曜日は（　）…。", o: ["ちょっと", "全然", "あまり", "とても"], a: 0, ex: "Từ chối khéo: ～は ちょっと…" }
  ]
};
