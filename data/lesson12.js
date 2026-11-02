// Bài 12 — nội dung tự biên soạn theo phạm vi bài 12 Minna no Nihongo.
window.LESSONS[12] = {
  id: 12,
  title: "お祭りは どうでしたか",
  titleVi: "Lễ hội thế nào?",
  vocab: [
    { w: "簡単［な］", r: "かんたん", vi: "đơn giản, dễ", t: "tính từ な", ex: [["試験は 簡単でした。", "Bài thi đã dễ."]] },
    { w: "近い", r: "ちかい", vi: "gần", t: "tính từ い", ex: [["駅は 近いです。", "Ga ở gần."]] },
    { w: "遠い", r: "とおい", vi: "xa", t: "tính từ い", ex: [["会社は 遠いです。", "Công ty ở xa."]] },
    { w: "速い／早い", r: "はやい", vi: "nhanh / sớm", t: "tính từ い", ex: [["新幹線は 速いです。", "Shinkansen nhanh."]] },
    { w: "遅い", r: "おそい", vi: "chậm, muộn", t: "tính từ い", ex: [["バスは 電車より 遅いです。", "Xe buýt chậm hơn tàu điện."]] },
    { w: "多い［人が～］", r: "おおい", vi: "nhiều (người)", t: "tính từ い", ex: [["東京は 人が 多いです。", "Tokyo đông người."]] },
    { w: "少ない［人が～］", r: "すくない", vi: "ít (người)", t: "tính từ い", ex: [["この 町は 人が 少ないです。", "Thị trấn này ít người."]] },
    { w: "暖かい／温かい", r: "あたたかい", vi: "ấm", t: "tính từ い", ex: [["春は 暖かいです。", "Mùa xuân ấm áp."]] },
    { w: "涼しい", r: "すずしい", vi: "mát", t: "tính từ い", ex: [["秋は 涼しいです。", "Mùa thu mát."]] },
    { w: "甘い", r: "あまい", vi: "ngọt", t: "tính từ い", ex: [["この ケーキは 甘いです。", "Cái bánh này ngọt."]] },
    { w: "辛い", r: "からい", vi: "cay", t: "tính từ い", ex: [["カレーは 辛かったです。", "Cà ri đã cay."]] },
    { w: "重い", r: "おもい", vi: "nặng", t: "tính từ い", ex: [["この 荷物は 重いです。", "Hành lý này nặng."]] },
    { w: "軽い", r: "かるい", vi: "nhẹ", t: "tính từ い", ex: [["この かばんは 軽いです。", "Cái cặp này nhẹ."]] },
    { w: "いい［コーヒーが～］", r: "いい", vi: "thích, chọn (cà phê)", t: "tính từ い", ex: [["コーヒーと 紅茶と どちらが いいですか。 ―― コーヒーが いいです。", "Cà phê hay hồng trà? — Tôi chọn cà phê."]] },
    { w: "季節", r: "きせつ", vi: "mùa", t: "danh từ", ex: [["どの 季節が いちばん 好きですか。", "Bạn thích mùa nào nhất?"]] },
    { w: "春", r: "はる", vi: "mùa xuân", t: "danh từ", ex: [["春は 桜が きれいです。", "Mùa xuân hoa anh đào đẹp."]] },
    { w: "夏", r: "なつ", vi: "mùa hè", t: "danh từ", ex: [["夏は 暑いです。", "Mùa hè nóng."]] },
    { w: "秋", r: "あき", vi: "mùa thu", t: "danh từ", ex: [["秋が いちばん 好きです。", "Tôi thích mùa thu nhất."]] },
    { w: "冬", r: "ふゆ", vi: "mùa đông", t: "danh từ", ex: [["冬は 寒いです。", "Mùa đông lạnh."]] },
    { w: "天気", r: "てんき", vi: "thời tiết", t: "danh từ", ex: [["きのうは いい 天気でした。", "Hôm qua trời đẹp."]] },
    { w: "雨", r: "あめ", vi: "mưa", t: "danh từ", ex: [["きのうは 雨でした。", "Hôm qua trời mưa."]] },
    { w: "雪", r: "ゆき", vi: "tuyết", t: "danh từ", ex: [["北海道は 雪が 多いです。", "Hokkaido nhiều tuyết."]] },
    { w: "曇り", r: "くもり", vi: "trời nhiều mây", t: "danh từ", ex: [["きょうは 曇りです。", "Hôm nay trời nhiều mây."]] },
    { w: "ホテル", r: "ホテル", vi: "khách sạn", t: "danh từ", ex: [["ホテルは 駅から 近かったです。", "Khách sạn đã gần ga."]] },
    { w: "空港", r: "くうこう", vi: "sân bay", t: "danh từ", ex: [["空港は 遠いです。", "Sân bay xa."]] },
    { w: "海", r: "うみ", vi: "biển", t: "danh từ", ex: [["沖縄の 海は きれいです。", "Biển Okinawa đẹp."]] },
    { w: "世界", r: "せかい", vi: "thế giới", t: "danh từ", ex: [["世界で いちばん 高い 山は どこですか。", "Núi cao nhất thế giới là núi nào?"]] },
    { w: "パーティー", r: "パーティー", vi: "bữa tiệc", t: "danh từ", ex: [["パーティーは 楽しかったです。", "Bữa tiệc đã vui."]] },
    { w: "［お］祭り", r: "おまつり", vi: "lễ hội", t: "danh từ", ex: [["お祭りは どうでしたか。", "Lễ hội thế nào?"]] },
    { w: "試験", r: "しけん", vi: "kỳ thi", t: "danh từ", ex: [["試験は 難しかったです。", "Kỳ thi đã khó."]] },
    { w: "すき焼き", r: "すきやき", vi: "món lẩu Sukiyaki", t: "danh từ", ex: [["すき焼きは おいしかったです。", "Sukiyaki đã ngon."]] },
    { w: "刺身", r: "さしみ", vi: "món gỏi cá sống", t: "danh từ", ex: [["刺身と すしと どちらが 好きですか。", "Bạn thích sashimi hay sushi?"]] },
    { w: "［お］すし", r: "おすし", vi: "món sushi", t: "danh từ", ex: [["すしが いちばん 好きです。", "Tôi thích sushi nhất."]] },
    { w: "てんぷら", r: "てんぷら", vi: "món tempura (chiên bột)", t: "danh từ", ex: [["てんぷらを 食べました。", "Tôi đã ăn tempura."]] },
    { w: "生け花", r: "いけばな", vi: "nghệ thuật cắm hoa", t: "danh từ", ex: [["生け花は 簡単じゃ ありません。", "Cắm hoa không đơn giản."]] },
    { w: "紅葉", r: "もみじ", vi: "lá đỏ mùa thu, cây phong", t: "danh từ", ex: [["秋の 紅葉は きれいです。", "Lá đỏ mùa thu rất đẹp."]] },
    { w: "どちら", r: "どちら", vi: "cái nào (trong 2 cái)", t: "từ để hỏi", ex: [["夏と 冬と どちらが 好きですか。", "Bạn thích mùa hè hay mùa đông?"]] },
    { w: "どちらも", r: "どちらも", vi: "cả hai", t: "phó từ", ex: [["どちらも 好きです。", "Tôi thích cả hai."]] },
    { w: "いちばん", r: "いちばん", vi: "nhất", t: "phó từ", ex: [["秋が いちばん 好きです。", "Tôi thích mùa thu nhất."]] },
    { w: "ずっと", r: "ずっと", vi: "hơn hẳn, nhiều hơn", t: "phó từ", ex: [["東京は 大阪より ずっと 大きいです。", "Tokyo lớn hơn Osaka nhiều."]] },
    { w: "初めて", r: "はじめて", vi: "lần đầu tiên", t: "phó từ", ex: [["初めて すき焼きを 食べました。", "Lần đầu tôi ăn sukiyaki."]] },
    { w: "ただいま", r: "ただいま", vi: "tôi đã về", t: "cụm", ex: [["ただいま。 ―― お帰りなさい。", "Con về rồi. — Mừng con về."]] },
    { w: "お帰りなさい", r: "おかえりなさい", vi: "mừng anh/chị về", t: "cụm", ex: [["お帰りなさい。", "Anh về rồi à."]] },
    { w: "すごいですね", r: "すごいですね", vi: "giỏi quá, ghê nhỉ", t: "cụm", ex: [["人が 多かったです。 ―― すごいですね。", "Đông người lắm. — Ghê nhỉ."]] },
    { w: "でも", r: "でも", vi: "nhưng", t: "liên từ", ex: [["楽しかったです。でも、疲れました。", "Vui lắm. Nhưng mệt."]] },
    { w: "疲れました", r: "つかれました", vi: "(tôi) mệt rồi", t: "cụm", ex: [["とても 疲れました。", "Tôi mệt lắm rồi."]] },
    { w: "祇園祭", r: "ぎおんまつり", vi: "lễ hội Gion (Kyoto)", t: "danh từ riêng", ex: [["祇園祭は 京都の お祭りです。", "Gion là lễ hội của Kyoto."]] },
    { w: "ホンコン", r: "ホンコン", vi: "Hồng Kông", t: "danh từ riêng", ex: [["ホンコンは 暑いです。", "Hồng Kông nóng."]] },
    { w: "シンガポール", r: "シンガポール", vi: "Singapore", t: "danh từ riêng", ex: [["シンガポールと ホンコンと どちらが 暑いですか。", "Singapore và Hồng Kông, nơi nào nóng hơn?"]] }
  ],
  grammar: [
    {
      pattern: "Quá khứ của câu danh từ và tính từ な",
      func: "Danh từ / tính từ な + でした (khẳng định quá khứ), + じゃ ありませんでした (phủ định quá khứ).",
      parts: [["Hiện tại", "雨です / 静かです"], ["Quá khứ khẳng định", "雨でした / 静かでした"], ["Quá khứ phủ định", "雨じゃ ありませんでした / 静かじゃ ありませんでした"]],
      usage: [
        { rule: "Danh từ.", ex: [["きのうは 雨でした。", "Hôm qua trời mưa."], ["きのうは 休みじゃ ありませんでした。", "Hôm qua không phải ngày nghỉ."]] },
        { rule: "Tính từ な.", ex: [["試験は 簡単でした。", "Bài thi đã dễ."], ["町は 静かじゃ ありませんでした。", "Thị trấn đã không yên tĩnh."]] }
      ],
      notes: ["じゃ ありませんでした có thể thay bằng では ありませんでした (trang trọng)."]
    },
    {
      pattern: "Quá khứ của tính từ い",
      func: "Tính từ い: bỏ い + かったです (khẳng định quá khứ); bỏ い + くなかったです (phủ định quá khứ).",
      explain: ["✗ 暑いでした — sai rất phổ biến. です không chia; phần đuôi い mới chia.", "いい là ngoại lệ: よかったです / よくなかったです."],
      parts: [["Quá khứ khẳng định", "暑い → 暑かったです"], ["Quá khứ phủ định", "暑い → 暑くなかったです"], ["いい", "よかったです / よくなかったです"]],
      usage: [
        { rule: "Khẳng định / phủ định.", ex: [["きのうは 暑かったです。", "Hôm qua trời nóng."], ["きのうの パーティーは あまり 楽しくなかったです。", "Bữa tiệc hôm qua không vui lắm."]] },
        { rule: "いい.", ex: [["旅行は よかったです。", "Chuyến đi đã tốt."]] }
      ],
      notes: []
    },
    {
      pattern: "N1 は N2 より adj です",
      func: "So sánh hơn: “N1 (thì) adj hơn N2”. より đánh dấu đối tượng bị so sánh.",
      parts: [["より", "hơn (đặt sau vật bị so sánh)"], ["ずっと", "hơn nhiều"]],
      usage: [
        { rule: "So sánh hai vật.", ex: [["この 車は あの 車より 大きいです。", "Xe này to hơn xe kia."], ["東京は 大阪より ずっと 人が 多いです。", "Tokyo đông người hơn Osaka nhiều."]] }
      ],
      notes: []
    },
    {
      pattern: "N1 と N2 と どちらが adj ですか ／ N1（N2）の ほうが adj です",
      func: "Hỏi chọn một trong hai: “N1 và N2, cái nào adj hơn?”. Trả lời bằng ～の ほうが. Bằng nhau thì どちらも.",
      explain: ["どちら dùng cho cả người, vật, nơi chốn, thời gian khi chỉ có HAI lựa chọn."],
      parts: [["どちらが", "cái nào (trong 2)"], ["～の ほうが", "phía ~ (thì hơn)"], ["どちらも", "cả hai"]],
      usage: [
        { rule: "Hỏi và trả lời.", ex: [["サッカーと 野球と どちらが おもしろいですか。 ―― サッカーの ほうが おもしろいです。", "Bóng đá và bóng chày, môn nào hay hơn? — Bóng đá hay hơn."]] },
        { rule: "Như nhau.", ex: [["ミラーさんと サントスさんと どちらが テニスが 上手ですか。 ―― どちらも 上手です。", "Miller và Santos ai chơi tennis giỏi hơn? — Cả hai đều giỏi."]] }
      ],
      notes: []
    },
    {
      pattern: "N1［の 中］で 何／どこ／だれ／いつ が いちばん adj ですか",
      func: "So sánh nhất trong một phạm vi (ba thứ trở lên). Phạm vi đi với で; từ để hỏi đi với が.",
      explain: ["Từ để hỏi chọn theo loại: vật → 何, nơi → どこ, người → だれ, thời gian → いつ.", "Từ để hỏi làm chủ ngữ luôn đi với が, không dùng は."],
      parts: [["N1［の 中］で", "trong phạm vi N1"], ["いちばん", "nhất"]],
      usage: [
        { rule: "Hỏi và trả lời so sánh nhất.", ex: [["日本料理［の 中］で 何が いちばん おいしいですか。 ―― てんぷらが いちばん おいしいです。", "Trong các món Nhật, món nào ngon nhất? — Tempura ngon nhất."], ["1年で いつが いちばん 寒いですか。 ―― 2月が いちばん 寒いです。", "Trong năm, khi nào lạnh nhất? — Tháng 2 lạnh nhất."]] }
      ],
      notes: []
    }
  ],
  reading: {
    title: "京都の お祭り",
    titleVi: "Lễ hội ở Kyoto",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–12.",
    paragraphs: [
      {
        s: [
          { t: "先週|せんしゅう|tuần trước / 、||, / 友達|ともだち|bạn / と||cùng / 京都|きょうと|Kyoto / の||(của) / 祇園祭|ぎおんまつり|lễ hội Gion / へ||đến / 行きました|いきました|đã đi / 。||", vi: "Tuần trước tôi đi lễ hội Gion ở Kyoto với bạn." },
          { t: "とても||rất / 暑かった|あつかった|đã nóng / です||(lịch sự) / 。||", vi: "Trời rất nóng." },
          { t: "人|ひと|người / が||(chủ thể) / 多かった|おおかった|đã đông / です||(lịch sự) / 。||", vi: "Rất đông người." },
          { t: "でも||nhưng / 、||, / お祭り|おまつり|lễ hội / は||(chủ đề) / にぎやか||náo nhiệt / でした||đã (là) / 。||", vi: "Nhưng lễ hội rất náo nhiệt." },
          { t: "とても||rất / 楽しかった|たのしかった|đã vui / です||(lịch sự) / 。||", vi: "Rất vui." }
        ],
        vi: "Đoạn 1: Đi lễ hội Gion tuần trước: nóng, đông, nhưng náo nhiệt và vui."
      },
      {
        s: [
          { t: "夜|よる|buổi tối / 、||, / 京都|きょうと|Kyoto / の||(của) / レストラン||nhà hàng / で||ở / すき焼き|すきやき|sukiyaki / を||(tân ngữ) / 食べました|たべました|đã ăn / 。||", vi: "Buổi tối chúng tôi ăn sukiyaki ở nhà hàng tại Kyoto." },
          { t: "初めて|はじめて|lần đầu / 食べました|たべました|đã ăn / が||(nối câu) / 、||, / とても||rất / おいしかった|おいしかった|đã ngon / です||(lịch sự) / 。||", vi: "Lần đầu tôi ăn, rất ngon." },
          { t: "でも||nhưng / 、||, / 高かった|たかかった|đã đắt / です||(lịch sự) / 。||", vi: "Nhưng đắt." }
        ],
        vi: "Đoạn 2: Ăn sukiyaki lần đầu: rất ngon nhưng đắt."
      },
      {
        s: [
          { t: "京都|きょうと|Kyoto / は||(chủ đề) / 大阪|おおさか|Osaka / より||hơn / 静か|しずか|yên tĩnh / です||(là) / 。||", vi: "Kyoto yên tĩnh hơn Osaka." },
          { t: "でも||nhưng / 、||, / 夏|なつ|mùa hè / は||(chủ đề) / 大阪|おおさか|Osaka / より||hơn / 暑い|あつい|nóng / です||(là) / 。||", vi: "Nhưng mùa hè thì nóng hơn Osaka." },
          { t: "私|わたし|tôi / は||(chủ đề) / 1年|いちねん|1 năm / で||trong / 秋|あき|mùa thu / が||(chủ thể) / いちばん||nhất / 好き|すき|thích / です||(là) / 。||", vi: "Trong năm, tôi thích mùa thu nhất." },
          { t: "秋|あき|mùa thu / の||(của) / 京都|きょうと|Kyoto / は||(chủ đề) / 紅葉|もみじ|lá đỏ / が||(chủ thể) / きれい||đẹp / です||(là) / 。||", vi: "Kyoto mùa thu có lá đỏ đẹp." }
        ],
        vi: "Đoạn 3: So sánh Kyoto với Osaka (yên tĩnh hơn, nhưng hè nóng hơn); người viết thích nhất mùa thu vì lá đỏ ở Kyoto."
      }
    ],
    summary: "Toàn bài: kể lại chuyến đi lễ hội Gion (quá khứ: 暑かった, 多かった, 楽しかった), ăn sukiyaki lần đầu (ngon nhưng đắt), rồi so sánh Kyoto với Osaka và nói mùa thích nhất. Mẹo: đề so sánh hay đảo ngược chủ ngữ – chú ý từ nào đứng trước より.",
    questions: [
      { q: "お祭りの 日の 天気は どうでしたか。", o: ["とても 暑かったです", "涼しかったです", "雨でした", "寒かったです"], a: 0, ev: [0, 1], tip: "Câu ngay sau câu mở đầu mô tả ngày hôm đó. Thời tiết ở quá khứ dùng ～かったです." },
      { q: "すき焼きは どうでしたか。", o: ["おいしかったですが、高かったです", "辛かったですが、安かったです", "おいしくなかったです", "安くて おいしかったです"], a: 0, ev: [1, 1], tip: "Hai câu liền nhau: とても おいしかった + でも 高かった. Chọn đáp án giữ đúng cả hai ý." },
      { q: "どちらが 静かですか。", o: ["京都", "大阪", "どちらも", "わかりません"], a: 0, ev: [2, 0], tip: "N1 は N2 より adj: N1 (đứng trước は) là cái “hơn”. Không chọn danh từ đứng trước より." },
      { q: "この 人は どの 季節が いちばん 好きですか。", o: ["秋", "夏", "春", "冬"], a: 0, ev: [2, 2], tip: "Tìm いちばん + 好き. 夏 xuất hiện ở câu trước nhưng là chuyện nóng." }
    ]
  },
  listening: {
    title: "旅行は どうでしたか",
    titleVi: "Chuyến đi thế nào?",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "山田", pitch: 1.25 }, B: { name: "ミラー", pitch: 0.8 } },
    script: [
      { sp: "A", jp: "お帰りなさい。北海道は どうでしたか。", vi: "Anh về rồi à. Hokkaido thế nào?" },
      { sp: "B", jp: "とても 楽しかったです。でも、寒かったです。", vi: "Rất vui. Nhưng lạnh." },
      { sp: "A", jp: "雪でしたか。", vi: "Có tuyết không?" },
      { sp: "B", jp: "いいえ、雪じゃ ありませんでした。天気は よかったです。", vi: "Không, không có tuyết. Thời tiết đẹp." },
      { sp: "A", jp: "食べ物は どうでしたか。", vi: "Đồ ăn thế nào?" },
      { sp: "B", jp: "魚が とても おいしかったです。大阪より ずっと 安かったです。", vi: "Cá rất ngon. Rẻ hơn Osaka nhiều." },
      { sp: "A", jp: "北海道と 沖縄と どちらが よかったですか。", vi: "Hokkaido và Okinawa, nơi nào tốt hơn?" },
      { sp: "B", jp: "そうですね。沖縄の ほうが よかったです。海が きれいでしたから。", vi: "Để xem… Okinawa tốt hơn. Vì biển đẹp." }
    ],
    questions: [
      { q: "北海道の 天気は どうでしたか。", o: ["よかったです", "雪でした", "雨でした", "曇りでした"], a: 0, ev: [3], tip: "雪 bị phủ định (じゃ ありませんでした); thông tin đúng ở câu sau." },
      { q: "北海道の 魚は どうでしたか。", o: ["おいしくて、安かったです", "おいしかったですが、高かったです", "おいしくなかったです", "高くて、おいしくなかったです"], a: 0, ev: [5], tip: "大阪より ずっと 安かった = rẻ hơn Osaka nhiều → rẻ." },
      { q: "ミラーさんは 北海道と 沖縄と どちらが よかったですか。", o: ["沖縄", "北海道", "どちらも", "大阪"], a: 0, ev: [7], tip: "～の ほうが よかった: danh từ trước の ほうが là câu trả lời." },
      { q: "どうしてですか。", o: ["海が きれいでしたから", "魚が おいしかったですから", "暖かかったですから", "安かったですから"], a: 0, ev: [7], tip: "Lý do đứng trước から ở cuối hội thoại. Các ý khác nói về Hokkaido." }
    ]
  },
  kanji: [
    { c: "九", hv: "CỬU", on: "キュウ・ク", kun: "ここの(つ)", vi: "chín", words: [["九つ", "ここのつ", "9 cái"], ["九時", "くじ", "9 giờ"], ["九月", "くがつ", "tháng 9"]], use: "Giờ và tháng đọc ク; số đếm キュウ." },
    { c: "十", hv: "THẬP", on: "ジュウ", kun: "とお", vi: "mười", words: [["十", "とお", "10 cái"], ["十日", "とおか", "ngày 10"], ["十分", "じゅっぷん", "10 phút"]], use: "Đếm ～つ và ngày 10 đọc とお; còn lại ジュウ (biến âm じゅっ)." },
    { c: "百", hv: "BÁCH", on: "ヒャク", kun: "—", vi: "trăm", words: [["百円", "ひゃくえん", "100 yên"], ["三百", "さんびゃく", "300"], ["六百", "ろっぴゃく", "600"]], use: "Biến âm: さんびゃく, ろっぴゃく, はっぴゃく." },
    { c: "千", hv: "THIÊN", on: "セン", kun: "ち", vi: "nghìn", words: [["千円", "せんえん", "1.000 yên"], ["三千", "さんぜん", "3.000"], ["八千", "はっせん", "8.000"]], use: "Biến âm: さんぜん, はっせん." },
    { c: "万", hv: "VẠN", on: "マン・バン", kun: "—", vi: "vạn (10.000)", words: [["一万円", "いちまんえん", "10.000 yên"], ["百万", "ひゃくまん", "1 triệu"]], use: "Người Nhật đếm theo nhóm 4 chữ số: 万 = 10.000." },
    { c: "天", hv: "THIÊN", on: "テン", kun: "あめ", vi: "trời", words: [["天気", "てんき", "thời tiết"], ["天ぷら", "てんぷら", "tempura"]], use: "Sơ cấp chủ yếu đọc テン." },
    { c: "気", hv: "KHÍ", on: "キ・ケ", kun: "—", vi: "khí, tinh thần", words: [["天気", "てんき", "thời tiết"], ["元気", "げんき", "khỏe"], ["電気", "でんき", "điện"]], use: "Rất hay gặp ở cuối từ ghép, đọc キ." },
    { c: "雨", hv: "VŨ", on: "ウ", kun: "あめ", vi: "mưa", words: [["雨", "あめ", "mưa"], ["大雨", "おおあめ", "mưa to"]], use: "Là bộ thủ của nhiều chữ thời tiết: 雪 (tuyết), 電 (điện)." }
  ],
  grammarQuiz: [
    { q: "きのうは（　）。(trời nóng)", o: ["暑かったです", "暑いでした", "暑かったでした", "暑くでした"], a: 0, ex: "Quá khứ tính từ い: い → かったです." },
    { q: "試験は（　）。(dễ – quá khứ)", o: ["簡単でした", "簡単かったです", "簡単だったです", "簡単くなかったです"], a: 0, ex: "Tính từ な: + でした." },
    { q: "パーティーは あまり（　）。", o: ["楽しくなかったです", "楽しいじゃ ありませんでした", "楽しかったです", "楽しくないでした"], a: 0, ex: "あまり + phủ định quá khứ: くなかったです." },
    { q: "旅行は（　）。(tốt – quá khứ)", o: ["よかったです", "いかったです", "いいでした", "よいでした"], a: 0, ex: "いい → よかったです." },
    { q: "東京は 大阪（　）大きいです。", o: ["より", "ほう", "どちら", "で"], a: 0, ex: "So sánh hơn: N1 は N2 より adj." },
    { q: "夏と 冬と（　）が 好きですか。", o: ["どちら", "どれ", "何", "どこ"], a: 0, ex: "Chọn 1 trong 2 → どちら." },
    { q: "コーヒーと 紅茶と どちらが いいですか。―― コーヒー（　）ほうが いいです。", o: ["の", "が", "は", "と"], a: 0, ex: "N の ほうが." },
    { q: "1年（　）いつが いちばん 寒いですか。", o: ["で", "に", "の", "が"], a: 0, ex: "Phạm vi so sánh nhất: N で." },
    { q: "日本料理で（　）が いちばん おいしいですか。", o: ["何", "だれ", "どこ", "いつ"], a: 0, ex: "Đối tượng là món ăn → 何." }
  ]
};
