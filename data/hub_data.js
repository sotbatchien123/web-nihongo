// Dữ liệu tự biên soạn cho trang "Kiến thức nền": cặp tự/tha động từ, phó từ, so sánh ngữ pháp, hội thoại tình huống.
window.HUBDATA = {
  // Cặp tự động từ – tha động từ: [tự (ます), đọc, tha (ます), đọc, nghĩa tự, nghĩa tha, danh từ ví dụ, bài Minna]
  jita: [
    ["開きます", "あきます", "開けます", "あけます", "(tự) mở ra", "mở (cái gì)", "ドア", 29],
    ["閉まります", "しまります", "閉めます", "しめます", "(tự) đóng lại", "đóng (cái gì)", "まど", 29],
    ["つきます", "つきます", "つけます", "つけます", "(đèn, máy) bật lên", "bật (đèn, máy)", "電気", 29],
    ["消えます", "きえます", "消します", "けします", "(đèn, lửa) tắt", "tắt; xóa", "電気", 29],
    ["始まります", "はじまります", "始めます", "はじめます", "bắt đầu (tự)", "bắt đầu (việc gì)", "会議", 29],
    ["終わります", "おわります", "終えます", "おえます", "kết thúc (tự)", "kết thúc (việc gì)", "仕事", 29],
    ["止まります", "とまります", "止めます", "とめます", "dừng lại", "dừng (xe, máy)", "車", 29],
    ["入ります", "はいります", "入れます", "いれます", "vào, chứa trong", "cho vào", "お金", 29],
    ["出ます", "でます", "出します", "だします", "ra, đi ra", "lấy ra, gửi đi", "ごみ", 29],
    ["落ちます", "おちます", "落とします", "おとします", "rơi", "làm rơi, đánh rơi", "さいふ", 29],
    ["壊れます", "こわれます", "壊します", "こわします", "hỏng, vỡ", "làm hỏng, phá", "いす", 29],
    ["割れます", "われます", "割ります", "わります", "(kính, cốc) vỡ", "làm vỡ", "コップ", 29],
    ["折れます", "おれます", "折ります", "おります", "gãy", "bẻ gãy; gấp", "えだ", 29],
    ["切れます", "きれます", "切ります", "きります", "đứt", "cắt", "ひも", 29],
    ["汚れます", "よごれます", "汚します", "よごします", "bị bẩn", "làm bẩn", "シャツ", 29],
    ["外れます", "はずれます", "外します", "はずします", "tuột ra, rời ra", "tháo ra", "ボタン", 29],
    ["掛かります", "かかります", "掛けます", "かけます", "(khóa) được khóa; treo", "khóa; treo", "かぎ", 29],
    ["付きます", "つきます", "付けます", "つけます", "dính vào", "gắn vào", "しみ", 30],
    ["集まります", "あつまります", "集めます", "あつめます", "tập trung lại", "thu thập", "人", 30],
    ["決まります", "きまります", "決めます", "きめます", "được quyết định", "quyết định", "日にち", 30],
    ["変わります", "かわります", "変えます", "かえます", "thay đổi (tự)", "thay đổi (cái gì)", "予定", 30],
    ["上がります", "あがります", "上げます", "あげます", "tăng, lên", "nâng lên", "ねだん", 30],
    ["下がります", "さがります", "下げます", "さげます", "giảm, xuống", "hạ xuống", "ねつ", 30],
    ["起きます", "おきます", "起こします", "おこします", "thức dậy", "đánh thức", "子ども", 30],
    ["直ります", "なおります", "直します", "なおします", "(đồ hỏng) được sửa", "sửa", "時計", 30],
    ["治ります", "なおります", "治します", "なおします", "(bệnh) khỏi", "chữa (bệnh)", "けが", 30],
    ["残ります", "のこります", "残します", "のこします", "còn lại", "để lại", "料理", 30],
    ["届きます", "とどきます", "届けます", "とどけます", "được gửi đến", "mang đến, giao", "荷物", 30],
    ["並びます", "ならびます", "並べます", "ならべます", "xếp hàng", "xếp (cái gì)", "いす", 30],
    ["続きます", "つづきます", "続けます", "つづけます", "tiếp diễn", "tiếp tục (việc gì)", "雨", 31],
    ["増えます", "ふえます", "増やします", "ふやします", "tăng lên", "làm tăng", "人口", 43],
    ["減ります", "へります", "減らします", "へらします", "giảm đi", "làm giảm", "ごみ", 43],
    ["見つかります", "みつかります", "見つけます", "みつけます", "được tìm thấy", "tìm thấy", "かぎ", 34],
    ["回ります", "まわります", "回します", "まわします", "quay", "xoay, vặn", "ハンドル", 23],
    ["動きます", "うごきます", "動かします", "うごかします", "chuyển động, chạy", "di chuyển, vận hành", "機械", 21],
    ["戻ります", "もどります", "戻します", "もどします", "quay về", "trả về chỗ cũ", "本", 33],
    ["渡ります", "わたります", "渡します", "わたします", "băng qua", "trao, đưa", "橋", 23],
    ["通ります", "とおります", "通します", "とおします", "đi qua", "cho qua", "車", 33],
    ["沸きます", "わきます", "沸かします", "わかします", "(nước) sôi", "đun sôi", "お湯", 42],
    ["乾きます", "かわきます", "乾かします", "かわかします", "khô", "làm khô, phơi khô", "せんたくもの", 44],
    ["焼けます", "やけます", "焼きます", "やきます", "được nướng chín", "nướng", "パン", 46],
    ["育ちます", "そだちます", "育てます", "そだてます", "lớn lên", "nuôi, trồng", "花", 41],
    ["立ちます", "たちます", "立てます", "たてます", "đứng, dựng", "dựng lên; lập (kế hoạch)", "計画", 33],
    ["倒れます", "たおれます", "倒します", "たおします", "đổ, ngã", "làm đổ", "木", 39],
    ["流れます", "ながれます", "流します", "ながします", "chảy", "xả, cho chảy", "水", 38],
    ["冷えます", "ひえます", "冷やします", "ひやします", "lạnh đi", "làm lạnh", "ビール", 38],
    ["片付きます", "かたづきます", "片付けます", "かたづけます", "được dọn gọn", "dọn dẹp", "へや", 30],
    ["伝わります", "つたわります", "伝えます", "つたえます", "được truyền đi", "truyền đạt", "気持ち", 33],
    ["助かります", "たすかります", "助けます", "たすけます", "được cứu, đỡ vất vả", "giúp, cứu", "人", 41]
  ],
  // Phó từ: nhóm → [từ, nghĩa, ví dụ, nghĩa ví dụ, ghi chú]
  fukushi: {
    "Tần suất": [
      ["いつも", "luôn luôn", "朝は いつも パンを 食べます。", "Buổi sáng tôi luôn ăn bánh mì.", ""],
      ["よく", "thường, hay", "よく 図書館へ 行きます。", "Tôi hay đến thư viện.", "よく còn nghĩa 'rõ, kỹ': よく わかります."],
      ["ときどき", "thỉnh thoảng", "ときどき 映画を 見ます。", "Thỉnh thoảng tôi xem phim.", ""],
      ["たまに", "hiếm khi, lâu lâu", "たまに 国の 料理を 作ります。", "Lâu lâu tôi nấu món quê nhà.", "Ít hơn ときどき."],
      ["あまり～ない", "không… lắm", "あまり テレビを 見ません。", "Tôi không xem TV mấy.", "Luôn đi với phủ định."],
      ["ぜんぜん～ない", "hoàn toàn không", "お酒は ぜんぜん 飲みません。", "Tôi hoàn toàn không uống rượu.", "Luôn đi với phủ định."],
      ["めったに～ない", "hầu như không", "この 町では めったに 雪が ふりません。", "Ở thị trấn này hầu như không có tuyết.", "Luôn đi với phủ định."]
    ],
    "Mức độ": [
      ["とても", "rất", "この 本は とても おもしろいです。", "Cuốn sách này rất hay.", ""],
      ["すこし / ちょっと", "một chút", "すこし 休みましょう。", "Nghỉ một chút nhé.", "ちょっと dùng trong hội thoại; còn để từ chối khéo: あしたは ちょっと…"],
      ["かなり", "khá là", "テストは かなり むずかしかったです。", "Bài thi khá khó.", ""],
      ["ずいぶん", "khá, đáng kể (ngạc nhiên)", "ずいぶん 日本語が 上手に なりましたね。", "Tiếng Nhật của bạn giỏi lên nhiều nhỉ.", ""],
      ["だいぶ", "khá nhiều (thay đổi)", "かぜは だいぶ よく なりました。", "Bệnh cảm đã đỡ nhiều.", "Thường đi với thay đổi trạng thái."],
      ["もっと", "hơn nữa", "もっと ゆっくり 話して ください。", "Hãy nói chậm hơn nữa.", ""],
      ["ずっと", "hơn hẳn; suốt", "電車の ほうが ずっと 速いです。", "Tàu điện nhanh hơn hẳn.", "Còn nghĩa 'suốt': ずっと 待って いました."],
      ["ほとんど", "hầu hết; hầu như", "宿題は ほとんど 終わりました。", "Bài tập gần như xong hết.", "ほとんど～ない: hầu như không."],
      ["なかなか", "khá; mãi mà không", "なかなか バスが 来ません。", "Mãi mà xe buýt không tới.", "なかなか + phủ định = mãi không; + khẳng định = khá là."],
      ["いちばん", "nhất", "果物で りんごが いちばん 好きです。", "Trong các loại quả tôi thích táo nhất.", ""]
    ],
    "Thời gian": [
      ["もう", "đã… rồi", "もう 昼ごはんを 食べました。", "Tôi đã ăn trưa rồi.", "もう + phủ định = không… nữa."],
      ["まだ", "vẫn, chưa", "まだ 宿題を して いません。", "Tôi vẫn chưa làm bài tập.", ""],
      ["すぐ", "ngay", "すぐ 行きます。", "Tôi đi ngay.", ""],
      ["さっき", "lúc nãy", "さっき 田中さんから 電話が ありました。", "Lúc nãy có điện thoại của anh Tanaka.", ""],
      ["これから", "từ bây giờ", "これから 会議です。", "Bây giờ là cuộc họp.", ""],
      ["やっと", "cuối cùng thì (sau chờ đợi)", "やっと 仕事が 終わりました。", "Cuối cùng công việc cũng xong.", "Mang cảm giác nhẹ nhõm."],
      ["そろそろ", "sắp sửa, đã đến lúc", "そろそろ 帰りましょう。", "Đã đến lúc về thôi.", ""],
      ["もうすぐ", "sắp", "もうすぐ 夏休みです。", "Sắp nghỉ hè rồi.", ""],
      ["しばらく", "một lúc; một thời gian", "しばらく お待ち ください。", "Xin vui lòng chờ một lát.", ""],
      ["はじめて", "lần đầu", "はじめて すしを 食べました。", "Lần đầu tôi ăn sushi.", ""],
      ["さいきん", "gần đây", "さいきん 忙しいです。", "Gần đây tôi bận.", ""]
    ],
    "Phỏng đoán – chắc chắn": [
      ["たぶん", "có lẽ", "たぶん 雨が ふるでしょう。", "Có lẽ trời sẽ mưa.", "Đi với ～でしょう / ～と思います."],
      ["きっと", "chắc chắn (tin là)", "きっと 合格しますよ。", "Chắc chắn bạn sẽ đỗ.", ""],
      ["かならず", "nhất định, luôn", "かならず 宿題を 出して ください。", "Nhất định phải nộp bài tập.", ""],
      ["ぜったいに", "tuyệt đối", "ぜったいに 遅れないで ください。", "Tuyệt đối đừng đến muộn.", ""],
      ["もしかしたら", "không chừng, biết đâu", "もしかしたら 行けないかもしれません。", "Biết đâu tôi không đi được.", "Đi với ～かもしれません."]
    ],
    "Cách thức": [
      ["ゆっくり", "chậm rãi; thong thả", "ゆっくり 休んで ください。", "Hãy nghỉ ngơi thong thả.", ""],
      ["はっきり", "rõ ràng", "はっきり 言って ください。", "Hãy nói rõ ràng.", ""],
      ["しっかり", "chắc chắn, đâu ra đấy", "しっかり 勉強して ください。", "Hãy học hành đến nơi đến chốn.", ""],
      ["ちゃんと / きちんと", "đàng hoàng, cẩn thận", "ちゃんと 片付けて ください。", "Hãy dọn dẹp cho đàng hoàng.", "ちゃんと thân mật hơn きちんと."],
      ["すっかり", "hoàn toàn (thay đổi/quên)", "約束を すっかり 忘れて いました。", "Tôi quên béng lời hẹn.", ""],
      ["いっしょうけんめい", "hết sức", "いっしょうけんめい 働きます。", "Làm việc hết sức mình.", ""],
      ["じっと", "yên, chăm chú", "じっと 待って いて ください。", "Hãy đứng yên chờ.", ""]
    ],
    "Từ nối": [
      ["でも / しかし", "nhưng", "日本語は むずかしいです。でも、おもしろいです。", "Tiếng Nhật khó. Nhưng thú vị.", "しかし trang trọng hơn."],
      ["それから", "sau đó; thêm nữa", "宿題を しました。それから 寝ました。", "Tôi làm bài tập. Sau đó đi ngủ.", ""],
      ["だから / それで", "vì vậy", "雨でした。それで、試合は 中止に なりました。", "Trời mưa. Vì thế trận đấu bị hủy.", "それで nêu kết quả tự nhiên; だから có thể đi với mệnh lệnh, ý chí."],
      ["それに", "hơn nữa", "この 店は 安いです。それに おいしいです。", "Quán này rẻ. Hơn nữa lại ngon.", ""],
      ["ところで", "nhân tiện, à này (đổi chủ đề)", "ところで、来週の 予定は？", "À này, lịch tuần sau thế nào?", ""],
      ["すると", "thế rồi, ngay khi đó", "ボタンを おしました。すると、ドアが 開きました。", "Tôi bấm nút. Thế là cửa mở.", ""]
    ]
  },
  // So sánh ngữ pháp dễ nhầm: [tiêu đề, [[mẫu, cách dùng, ví dụ, nghĩa]...], mẹo phân biệt]
  hikaku: [
    ["は và が", [["N は", "Nêu chủ đề; so sánh, đối lập", "わたしは 学生です。", "Tôi là sinh viên."], ["N が", "Chủ ngữ của thông tin mới, câu hỏi bằng nghi vấn từ; chủ ngữ trong mệnh đề phụ; với 好き・上手・ある・いる…", "だれが 来ましたか。― 田中さんが 来ました。", "Ai đã đến? — Anh Tanaka đã đến."]], "Câu hỏi có だれ/なに/どこ làm chủ ngữ → trả lời bằng が. Trong mệnh đề bổ nghĩa (わたしが 書いた 本) luôn dùng が."],
    ["に và で (địa điểm)", [["場所 に", "Nơi tồn tại (あります・います・住みます), đích đến", "東京に 住んで います。", "Tôi sống ở Tokyo."], ["場所 で", "Nơi diễn ra hành động", "図書館で 勉強します。", "Tôi học ở thư viện."]], "Động từ chỉ trạng thái/tồn tại → に; động từ hành động → で."],
    ["から và ので (lý do)", [["～から", "Lý do chủ quan, có thể đi với mệnh lệnh, rủ rê", "あぶないから、さわらないで。", "Nguy hiểm nên đừng chạm vào."], ["～ので", "Lý do khách quan, lịch sự hơn", "電車が 遅れたので、遅刻しました。", "Vì tàu trễ nên tôi đến muộn."]], "Xin phép, giải thích lịch sự → ので. Nói thân mật, nêu ý kiến mạnh → から."],
    ["ために và ように (mục đích)", [["Vる / N の ために", "Mục đích là hành động có chủ ý của chính người nói", "家を 買う ために、貯金して います。", "Tôi tiết kiệm để mua nhà."], ["Vる / Vない / V可能 ように", "Mục đích là trạng thái không tự điều khiển được (thể khả năng, phủ định, tự động từ)", "日本語が 話せる ように、毎日 練習します。", "Tôi luyện tập mỗi ngày để có thể nói được tiếng Nhật."]], "Trước ために: động từ ý chí (買う, 行く). Trước ように: 話せる, 忘れない, 見える…"],
    ["と・ば・たら・なら", [["～と", "Kết quả tất yếu, tự nhiên, máy móc; không dùng mệnh lệnh ở vế sau", "春に なると、花が 咲きます。", "Cứ đến xuân là hoa nở."], ["～ば", "Điều kiện cần (nếu… thì)", "安ければ、買います。", "Nếu rẻ thì tôi mua."], ["～たら", "Giả định; 'sau khi/khi… thì'; dùng rộng nhất trong hội thoại", "駅に 着いたら、電話して ください。", "Đến ga thì gọi điện nhé."], ["～なら", "Tiếp lời người khác, đưa lời khuyên về chủ đề đó", "京都へ 行くなら、秋が いいですよ。", "Nếu đi Kyoto thì mùa thu là đẹp nhất."]], "Vế sau là nhờ vả/mệnh lệnh → dùng たら (không dùng と). Đáp lại thông tin người khác vừa nói → なら."],
    ["そうです (nghe nói) và そうです (trông có vẻ)", [["普通形 + そうです", "Truyền đạt thông tin nghe được (伝聞)", "あしたは 雨が ふるそうです。", "Nghe nói mai trời mưa."], ["Vます-bỏ-ます / Aい-bỏ-い + そうです", "Phán đoán theo vẻ bề ngoài (様態)", "雨が ふりそうです。この ケーキは おいしそうです。", "Trời có vẻ sắp mưa. Cái bánh này trông ngon."]], "Nhìn hình dạng nối: ふる＋そう (vẻ) vs ふる＋そう… phải xem có bỏ る/い hay không. いい → よさそう, ない → なさそう."],
    ["ようです・らしい・みたい", [["～ようです", "Phán đoán dựa trên quan sát của bản thân", "だれも いない ようです。", "Hình như không có ai."], ["～らしい", "Phán đoán dựa trên thông tin nghe được; còn nghĩa 'đúng kiểu'", "あの 店は 来月 閉まるらしいです。", "Nghe đâu tiệm đó tháng sau đóng cửa."], ["～みたい", "Như ようです nhưng thân mật, văn nói", "かぜを ひいた みたい。", "Hình như mình bị cảm."]], "Tự mình thấy → ようです/みたい; nghe người khác nói → らしい/そうです."],
    ["ています và てあります", [["自動詞 + ています", "Trạng thái là kết quả tự nhiên, không nói ai làm", "まどが 開いて います。", "Cửa sổ đang mở."], ["他動詞 + てあります", "Trạng thái do ai đó cố ý làm, thường để chuẩn bị", "まどが 開けて あります。", "Cửa sổ đã được (ai đó) mở sẵn."]], "Xem động từ: 開く (tự) → ています; 開ける (tha) → てあります. Cả hai đều dùng が."],
    ["ておきます và てあります", [["～て おきます", "Làm trước để chuẩn bị (hành động)", "会議の 前に 資料を コピーして おきます。", "Tôi sẽ copy tài liệu trước cuộc họp."], ["～て あります", "Trạng thái đã được chuẩn bị sẵn (kết quả)", "資料は コピーして あります。", "Tài liệu đã được copy sẵn."]], "ておきます: N を (người làm là chủ ngữ). てあります: N が/は (vật là chủ ngữ)."],
    ["あげる・くれる・もらう", [["A は B に あげる", "Cho người khác (không phải mình)", "わたしは 妹に 本を あげました。", "Tôi cho em gái cuốn sách."], ["A は わたしに くれる", "Người khác cho tôi / người nhà tôi", "友だちが わたしに 花を くれました。", "Bạn tặng hoa cho tôi."], ["B は A に（から） もらう", "Nhận từ người khác", "わたしは 先生に 辞書を もらいました。", "Tôi nhận từ điển từ thầy."]], "Người nhận là 'tôi' (hoặc người nhà) → くれる. Với Vて: Vて あげる / Vて くれる / Vて もらう tương tự."],
    ["受身 và 使役", [["受身 (～られる)", "Bị / được người khác làm gì", "わたしは 先生に ほめられました。", "Tôi được thầy khen."], ["使役 (～させる)", "Bắt / cho phép người khác làm", "母は 子どもに 野菜を 食べさせました。", "Mẹ bắt con ăn rau."]], "受身: chủ ngữ chịu tác động, người làm đi với に. 使役: chủ ngữ là người ra lệnh/cho phép."],
    ["まえに・までに・まで", [["Vる / N の まえに", "Trước khi", "寝る まえに、歯を みがきます。", "Đánh răng trước khi ngủ."], ["N/Vる までに", "Hạn chót (trước thời điểm đó làm một lần)", "金曜日までに レポートを 出して ください。", "Nộp báo cáo trước thứ Sáu."], ["N/Vる まで", "Đến khi (hành động kéo dài liên tục)", "5時まで 働きます。", "Tôi làm việc đến 5 giờ."]], "Việc làm một lần, có hạn → までに. Việc kéo dài liên tục → まで."],
    ["てから và たあとで", [["Vて から", "Làm A xong rồi mới B (nhấn thứ tự, A là điều kiện)", "手を 洗って から、食べます。", "Rửa tay rồi mới ăn."], ["Vた あとで", "Sau khi A (nhấn thời điểm)", "授業の あとで、図書館へ 行きます。", "Sau giờ học tôi đến thư viện."]], "N + の あとで được (授業の あとで); N không đi với てから."],
    ["のに và ても", [["～のに", "Mặc dù (sự thật đã xảy ra), kèm bất mãn, tiếc nuối", "約束したのに、彼は 来ませんでした。", "Đã hẹn rồi vậy mà anh ấy không đến."], ["～ても", "Dù (giả định hoặc thật), kết quả không đổi", "雨が ふっても、行きます。", "Dù mưa tôi vẫn đi."]], "のに đứng sau sự thật đã biết và vế sau là kết quả trái mong đợi; không đi với ý chí/mệnh lệnh."],
    ["つもり và 予定", [["Vる つもりです", "Ý định của bản thân", "来年 日本へ 行く つもりです。", "Năm sau tôi định đi Nhật."], ["Vる / N の 予定です", "Kế hoạch đã được sắp xếp (có thể do người khác quyết)", "会議は 3時の 予定です。", "Cuộc họp dự kiến lúc 3 giờ."]], "Lịch chung, việc đã lên lịch → 予定; ý muốn cá nhân → つもり."],
    ["ながら và て", [["Vます-bỏ-ます + ながら", "Vừa làm A vừa làm B (cùng lúc, chủ thể một người)", "音楽を 聞きながら 勉強します。", "Vừa nghe nhạc vừa học."], ["Vて、～", "Làm A rồi làm B (nối tiếp) hoặc cách thức", "朝ごはんを 食べて、会社へ 行きます。", "Ăn sáng rồi đi làm."]], "Đồng thời → ながら (hành động chính ở vế sau). Lần lượt → て."]
  ],
  // Hội thoại tình huống: {title, vi, lines: [[người, jp, vi]], note}
  kaiwa: [
    { title: "自己紹介", vi: "Tự giới thiệu", note: "はじめまして → tên → quê/nghề → どうぞ よろしく おねがいします.", lines: [
      ["A", "はじめまして。リンです。", "Rất vui được gặp. Tôi là Linh."], ["A", "ベトナムから 来ました。", "Tôi đến từ Việt Nam."], ["A", "さくら大学の 学生です。", "Tôi là sinh viên Đại học Sakura."],
      ["B", "はじめまして。田中です。どうぞ よろしく。", "Rất vui được gặp. Tôi là Tanaka. Mong được giúp đỡ."], ["A", "こちらこそ、どうぞ よろしく おねがいします。", "Tôi cũng vậy, mong anh giúp đỡ."]] },
    { title: "買い物", vi: "Mua sắm", note: "Hỏi giá: いくらですか. Xin xem: 見せて ください. Quyết định mua: これに します / これを ください.", lines: [
      ["客", "すみません、その 赤い かばんを 見せて ください。", "Xin lỗi, cho tôi xem cái túi đỏ đó."], ["店員", "はい、どうぞ。", "Vâng, mời chị."], ["客", "いくらですか。", "Bao nhiêu tiền ạ?"],
      ["店員", "5,000円です。", "5.000 yên."], ["客", "ちょっと 高いですね。もう少し 安いのは ありますか。", "Hơi đắt nhỉ. Có cái nào rẻ hơn chút không?"],
      ["店員", "こちらは 3,000円です。", "Cái này 3.000 yên."], ["客", "じゃ、これに します。", "Vậy tôi lấy cái này."]] },
    { title: "レストランで", vi: "Ở nhà hàng", note: "Gọi món: ～を ください / ～に します. Tính tiền: おかいけい おねがいします.", lines: [
      ["店員", "いらっしゃいませ。何名さまですか。", "Kính chào quý khách. Quý khách đi mấy người?"], ["客", "二人です。", "Hai người."], ["店員", "こちらへ どうぞ。ご注文は お決まりですか。", "Mời đi lối này. Quý khách đã chọn món chưa?"],
      ["客", "ラーメンを 二つと ぎょうざを 一つ ください。", "Cho hai bát ramen và một đĩa gyoza."], ["店員", "お飲み物は。", "Còn đồ uống ạ?"], ["客", "水で いいです。", "Nước lọc là được."],
      ["客", "すみません、おかいけい おねがいします。", "Xin lỗi, cho tính tiền."]] },
    { title: "道を 聞く", vi: "Hỏi đường", note: "Chỉ đường: まっすぐ 行って、2つ目の 角を 右に まがると…", lines: [
      ["A", "すみません、駅は どこですか。", "Xin lỗi, ga ở đâu ạ?"], ["B", "この 道を まっすぐ 行って ください。", "Anh đi thẳng đường này."], ["B", "2つ目の 信号を 左に まがると、右に あります。", "Rẽ trái ở đèn giao thông thứ hai thì ga ở bên phải."],
      ["A", "歩いて どのくらい かかりますか。", "Đi bộ mất khoảng bao lâu?"], ["B", "10分ぐらいですよ。", "Khoảng 10 phút."], ["A", "ありがとう ございました。", "Cảm ơn anh."]] },
    { title: "駅で", vi: "Ở nhà ga", note: "Hỏi tuyến: ～へ 行きたいんですが…何番線ですか.", lines: [
      ["A", "すみません、京都へ 行きたいんですが、何番線ですか。", "Xin lỗi, tôi muốn đi Kyoto, ở đường ray số mấy?"], ["駅員", "3番線です。", "Đường ray số 3."], ["A", "次の 電車は 何時ですか。", "Chuyến tiếp theo lúc mấy giờ?"],
      ["駅員", "10時15分です。", "10 giờ 15."], ["A", "乗り換えが ありますか。", "Có phải đổi tàu không?"], ["駅員", "いいえ、乗り換えなしで 行けますよ。", "Không, đi thẳng không cần đổi."]] },
    { title: "病院で", vi: "Ở bệnh viện", note: "Mô tả triệu chứng: のどが いたいです / ねつが あります / せきが 出ます.", lines: [
      ["医者", "どう しましたか。", "Anh bị sao vậy?"], ["患者", "きのうから のどが いたくて、ねつも あります。", "Từ hôm qua tôi đau họng và bị sốt."], ["医者", "何度 ありますか。", "Sốt bao nhiêu độ?"],
      ["患者", "38度です。", "38 độ."], ["医者", "かぜですね。薬を 出しますから、ゆっくり 休んで ください。", "Bị cảm rồi. Tôi kê thuốc, anh nghỉ ngơi nhé."], ["医者", "おふろには 入らないで くださいね。", "Đừng tắm bồn nhé."], ["患者", "わかりました。ありがとう ございました。", "Tôi hiểu rồi. Cảm ơn bác sĩ."]] },
    { title: "電話で", vi: "Gọi điện thoại", note: "Mở đầu: もしもし、～ですが. Người cần gặp vắng: ～は いま 出かけて おります.", lines: [
      ["A", "もしもし、山田ですが、田中さん いらっしゃいますか。", "Alo, tôi là Yamada, anh Tanaka có ở đó không ạ?"], ["B", "すみません、田中は いま 出かけて おります。", "Xin lỗi, Tanaka hiện đang ra ngoài."], ["A", "そうですか。何時ごろ お帰りに なりますか。", "Vậy à. Khoảng mấy giờ anh ấy về ạ?"],
      ["B", "3時ごろ 戻る 予定です。", "Dự kiến khoảng 3 giờ quay lại."], ["A", "では、また あとで お電話します。", "Vậy lát nữa tôi gọi lại."], ["B", "かしこまりました。", "Vâng ạ."]] },
    { title: "さそう・ことわる", vi: "Rủ rê và từ chối", note: "Rủ: いっしょに Vませんか. Từ chối khéo: ざんねんですが、～は ちょっと…", lines: [
      ["A", "土曜日、いっしょに 映画を 見に 行きませんか。", "Thứ Bảy đi xem phim cùng nhé?"], ["B", "土曜日ですか。すみません、土曜日は ちょっと…。", "Thứ Bảy à. Xin lỗi, thứ Bảy thì hơi…"], ["A", "そうですか。じゃ、日曜日は どうですか。", "Vậy à. Thế Chủ nhật thì sao?"],
      ["B", "日曜日なら 大丈夫です。", "Chủ nhật thì được."], ["A", "じゃ、日曜日に しましょう。", "Vậy hẹn Chủ nhật nhé."]] },
    { title: "おねがいする", vi: "Nhờ vả", note: "Nhờ lịch sự: Vて いただけませんか / Vて もらえませんか.", lines: [
      ["A", "すみません、ちょっと いいですか。", "Xin lỗi, chị có rảnh chút không?"], ["B", "はい、何ですか。", "Vâng, có việc gì vậy?"], ["A", "この 書類の 書き方が わからないんですが、教えて いただけませんか。", "Tôi không biết cách điền giấy này, chị chỉ giúp tôi được không?"],
      ["B", "いいですよ。ここに 名前と 住所を 書いて ください。", "Được thôi. Anh ghi tên và địa chỉ vào đây."], ["A", "ありがとう ございます。たすかりました。", "Cảm ơn chị. Đỡ cho tôi quá."]] },
    { title: "あやまる", vi: "Xin lỗi", note: "Xin lỗi trang trọng: もうしわけ ありません. Hứa sửa: これから 気を つけます.", lines: [
      ["部長", "リンさん、きのうの 会議に 来ませんでしたね。", "Linh này, hôm qua cô không đến họp nhỉ."], ["リン", "もうしわけ ありません。時間を まちがえて しまいました。", "Tôi thành thật xin lỗi. Tôi đã nhầm giờ."],
      ["部長", "これからは 気を つけて ください。", "Từ nay hãy cẩn thận nhé."], ["リン", "はい、これから 気を つけます。", "Vâng, từ nay tôi sẽ cẩn thận."]] },
    { title: "ホテルで", vi: "Ở khách sạn", note: "Nhận phòng: チェックイン おねがいします. Hỏi giờ ăn sáng: 朝ごはんは 何時からですか.", lines: [
      ["客", "チェックイン おねがいします。予約した リンです。", "Cho tôi nhận phòng. Tôi là Linh, đã đặt trước."], ["フロント", "リンさまですね。お待ちして おりました。", "Chị Linh phải không ạ. Chúng tôi đang đợi chị."], ["フロント", "お部屋は 5階の 502号室です。", "Phòng của chị là phòng 502 tầng 5."],
      ["客", "朝ごはんは 何時からですか。", "Bữa sáng từ mấy giờ ạ?"], ["フロント", "7時から 10時まで、1階の レストランで ございます。", "Từ 7 đến 10 giờ, ở nhà hàng tầng 1 ạ."], ["客", "わかりました。ありがとう。", "Tôi biết rồi. Cảm ơn."]] },
    { title: "アルバイトの 面接", vi: "Phỏng vấn làm thêm", note: "Trả lời lịch sự: ～と もうします / 週に 3回 働けます.", lines: [
      ["店長", "お名前は。", "Tên em là gì?"], ["A", "グエン・リンと もうします。", "Em tên là Nguyễn Linh."], ["店長", "週に 何回 働けますか。", "Một tuần em làm được mấy buổi?"],
      ["A", "週に 3回 働けます。月曜日と 水曜日と 土曜日が いいです。", "Em làm được 3 buổi. Thứ Hai, thứ Tư và thứ Bảy là tiện nhất."], ["店長", "日本語は どのくらい 勉強しましたか。", "Em học tiếng Nhật được bao lâu rồi?"],
      ["A", "1年半 勉強しました。いま N4の 勉強を して います。", "Em học được một năm rưỡi. Bây giờ đang học N4."], ["店長", "わかりました。では、来週から おねがいします。", "Được rồi. Vậy từ tuần sau em đến làm nhé."]] }
  ]
};
