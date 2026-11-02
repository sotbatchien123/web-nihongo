// Bài 13 — nội dung tự biên soạn theo phạm vi bài 13 Minna no Nihongo.
window.LESSONS[13] = {
  id: 13,
  title: "別々に お願いします",
  titleVi: "Cho chúng tôi trả riêng",
  vocab: [
    { w: "遊びます", r: "あそびます", vi: "chơi", t: "động từ", ex: [["週末 友達と 遊びます。", "Cuối tuần tôi đi chơi với bạn."]] },
    { w: "泳ぎます", r: "およぎます", vi: "bơi", t: "động từ", ex: [["海で 泳ぎたいです。", "Tôi muốn bơi ở biển."]] },
    { w: "迎えます", r: "むかえます", vi: "đón", t: "động từ", ex: [["空港へ 友達を 迎えに 行きます。", "Tôi đi ra sân bay đón bạn."]] },
    { w: "疲れます", r: "つかれます", vi: "mệt", t: "động từ", ex: [["きょうは 疲れました。", "Hôm nay tôi mệt."]], note: "Trạng thái mệt hiện tại nói bằng thể quá khứ: 疲れました." },
    { w: "出します［手紙を～］", r: "だします", vi: "gửi (thư)", t: "động từ", ex: [["郵便局へ 手紙を 出しに 行きます。", "Tôi ra bưu điện gửi thư."]] },
    { w: "入ります［喫茶店に～］", r: "はいります", vi: "vào (quán)", t: "động từ", ex: [["喫茶店に 入りましょう。", "Vào quán cà phê đi."]] },
    { w: "出ます［喫茶店を～］", r: "でます", vi: "ra khỏi (quán)", t: "động từ", ex: [["8時に うちを 出ます。", "8 giờ tôi ra khỏi nhà."]] },
    { w: "結婚します", r: "けっこんします", vi: "kết hôn", t: "động từ", ex: [["来年 結婚したいです。", "Năm sau tôi muốn kết hôn."]] },
    { w: "買い物します", r: "かいものします", vi: "mua sắm", t: "động từ", ex: [["デパートへ 買い物に 行きます。", "Tôi đi bách hóa mua sắm."]] },
    { w: "食事します", r: "しょくじします", vi: "dùng bữa", t: "động từ", ex: [["レストランへ 食事に 行きます。", "Tôi đi nhà hàng ăn."]] },
    { w: "散歩します［公園を～］", r: "さんぽします", vi: "đi dạo (công viên)", t: "động từ", ex: [["公園を 散歩します。", "Tôi đi dạo trong công viên."]] },
    { w: "大変［な］", r: "たいへん", vi: "vất vả, gay go", t: "tính từ な", ex: [["仕事は 大変です。", "Công việc vất vả."]] },
    { w: "欲しい", r: "ほしい", vi: "muốn có", t: "tính từ い", ex: [["新しい 車が 欲しいです。", "Tôi muốn có xe mới."]] },
    { w: "広い", r: "ひろい", vi: "rộng", t: "tính từ い", ex: [["広い 部屋が 欲しいです。", "Tôi muốn có căn phòng rộng."]] },
    { w: "狭い", r: "せまい", vi: "hẹp, chật", t: "tính từ い", ex: [["私の 部屋は 狭いです。", "Phòng tôi chật."]] },
    { w: "寂しい", r: "さびしい", vi: "buồn, cô đơn", t: "tính từ い", ex: [["一人で 寂しいです。", "Ở một mình buồn lắm."]] },
    { w: "市役所", r: "しやくしょ", vi: "tòa thị chính", t: "danh từ", ex: [["市役所へ 登録に 行きます。", "Tôi đến tòa thị chính để đăng ký."]] },
    { w: "プール", r: "プール", vi: "bể bơi", t: "danh từ", ex: [["プールへ 泳ぎに 行きます。", "Tôi đi bể bơi để bơi."]] },
    { w: "川", r: "かわ", vi: "sông", t: "danh từ", ex: [["川で 釣りを します。", "Tôi câu cá ở sông."]] },
    { w: "経済", r: "けいざい", vi: "kinh tế", t: "danh từ", ex: [["日本へ 経済の 勉強に 来ました。", "Tôi đến Nhật để học kinh tế."]] },
    { w: "美術", r: "びじゅつ", vi: "mỹ thuật", t: "danh từ", ex: [["美術の 勉強を したいです。", "Tôi muốn học mỹ thuật."]] },
    { w: "釣り", r: "つり", vi: "câu cá", t: "danh từ", ex: [["川へ 釣りに 行きます。", "Tôi đi sông câu cá."]] },
    { w: "スキー", r: "スキー", vi: "trượt tuyết", t: "danh từ", ex: [["北海道へ スキーに 行きたいです。", "Tôi muốn đi Hokkaido trượt tuyết."]] },
    { w: "会議", r: "かいぎ", vi: "cuộc họp", t: "danh từ", ex: [["東京へ 会議に 行きます。", "Tôi đi Tokyo họp."]] },
    { w: "登録", r: "とうろく", vi: "đăng ký", t: "danh từ", ex: [["外国人登録を します。", "Làm đăng ký người nước ngoài."]] },
    { w: "週末", r: "しゅうまつ", vi: "cuối tuần", t: "danh từ", ex: [["週末 何を したいですか。", "Cuối tuần bạn muốn làm gì?"]] },
    { w: "～ごろ", r: "ごろ", vi: "khoảng (thời điểm)", t: "hậu tố", ex: [["7時ごろ 帰ります。", "Khoảng 7 giờ tôi về."]], note: "ごろ cho thời điểm; ぐらい cho lượng/khoảng thời gian." },
    { w: "何か", r: "なにか", vi: "cái gì đó", t: "đại từ", ex: [["何か 飲みたいです。", "Tôi muốn uống gì đó."]] },
    { w: "どこか", r: "どこか", vi: "đâu đó", t: "đại từ", ex: [["週末 どこか 行きましたか。", "Cuối tuần bạn có đi đâu không?"]] },
    { w: "おなかが すきました", r: "おなかがすきました", vi: "đói bụng rồi", t: "cụm", ex: [["おなかが すきました。何か 食べたいです。", "Đói rồi. Tôi muốn ăn gì đó."]] },
    { w: "おなかが いっぱいです", r: "おなかがいっぱいです", vi: "no rồi", t: "cụm", ex: [["もう おなかが いっぱいです。", "Tôi no rồi."]] },
    { w: "のどが かわきました", r: "のどがかわきました", vi: "khát nước rồi", t: "cụm", ex: [["のどが かわきました。", "Tôi khát nước."]] },
    { w: "そうですね", r: "そうですね", vi: "đúng vậy nhỉ (đồng ý)", t: "cụm", ex: [["暑いですね。 ―― そうですね。", "Nóng nhỉ. — Đúng thế."]] },
    { w: "そう しましょう", r: "そうしましょう", vi: "làm vậy đi", t: "cụm", ex: [["あの 店に 入りませんか。 ―― そう しましょう。", "Vào quán kia không? — Ừ, làm vậy đi."]] },
    { w: "ご注文は？", r: "ごちゅうもんは", vi: "quý khách gọi món gì ạ?", t: "cụm", ex: [["ご注文は？ ―― 定食を お願いします。", "Quý khách gọi gì? — Cho tôi suất cơm."]] },
    { w: "定食", r: "ていしょく", vi: "suất cơm (có món kèm)", t: "danh từ", ex: [["てんぷら定食を ください。", "Cho tôi suất cơm tempura."]] },
    { w: "牛どん", r: "ぎゅうどん", vi: "cơm thịt bò", t: "danh từ", ex: [["牛どんを 二つ ください。", "Cho 2 cơm thịt bò."]] },
    { w: "少々 お待ち ください", r: "しょうしょうおまちください", vi: "xin đợi một chút", t: "cụm", ex: [["少々 お待ち ください。", "Xin quý khách đợi một chút."]] },
    { w: "別々に", r: "べつべつに", vi: "riêng ra (trả tiền riêng)", t: "phó từ", ex: [["別々に お願いします。", "Cho chúng tôi trả riêng."]] },
    { w: "ロシア", r: "ロシア", vi: "Nga", t: "danh từ riêng", ex: [["ロシアへ 行きたいです。", "Tôi muốn đi Nga."]] }
  ],
  grammar: [
    {
      pattern: "N が 欲しいです",
      func: "Diễn tả mong muốn CÓ một vật/người của người nói. Đối tượng mong muốn đi với が. 欲しい là tính từ い.",
      explain: ["Chỉ dùng cho mong muốn của người nói (khẳng định) và hỏi mong muốn của người nghe; không dùng trực tiếp cho người thứ ba.", "Vì là tính từ い nên chia như tính từ: 欲しくないです, 欲しかったです."],
      parts: [["が", "Đánh dấu thứ muốn có."], ["欲しい", "muốn có"]],
      usage: [
        { rule: "Nói mong muốn.", ex: [["私は 友達が 欲しいです。", "Tôi muốn có bạn."], ["私は 車が 欲しいです。", "Tôi muốn có ô tô."]] },
        { rule: "Hỏi: 何が 欲しいですか / どんな N が 欲しいですか.", ex: [["今 何が いちばん 欲しいですか。 ―― 家が 欲しいです。", "Bây giờ bạn muốn có gì nhất? — Tôi muốn có nhà."], ["どんな カメラが 欲しいですか。 ―― 小さい カメラが 欲しいです。", "Bạn muốn máy ảnh như thế nào? — Muốn máy ảnh nhỏ."]] }
      ],
      notes: ["Không dùng 欲しいですか để mời người trên: ✗ コーヒーが 欲しいですか。→ dùng コーヒーは いかがですか。"]
    },
    {
      pattern: "V（ます bỏ ます）たいです",
      func: "Diễn tả mong muốn LÀM một hành động của người nói. Thể ます bỏ ます + たい; たい chia như tính từ い.",
      explain: ["Đối tượng có thể đi với を hoặc が: 水を／が 飲みたいです.", "Thể ます bỏ ます (gọi là ます形 stem) sẽ được dùng ở nhiều mẫu khác."],
      parts: [["Vます → V たい", "食べます → 食べたい"], ["Phủ định", "～たくないです"], ["Quá khứ", "～たかったです"]],
      usage: [
        { rule: "Nói / hỏi mong muốn.", ex: [["私は 沖縄へ 行きたいです。", "Tôi muốn đi Okinawa."], ["何を 食べたいですか。 ―― てんぷらを 食べたいです。", "Bạn muốn ăn gì? — Tôi muốn ăn tempura."]] },
        { rule: "Phủ định.", ex: [["疲れましたから、何も 食べたくないです。", "Vì mệt nên tôi không muốn ăn gì cả."]] }
      ],
      notes: ["Giống 欲しい: không dùng để nói mong muốn của người thứ ba, không dùng để mời."]
    },
    {
      pattern: "N（địa điểm）へ［Vます bỏ ます／N］に 行きます／来ます／帰ります",
      func: "Diễn tả MỤC ĐÍCH của việc di chuyển: “đi đến … để làm …”. Mục đích đặt trước に.",
      explain: ["Mục đích có thể là thể ます bỏ ます (買い, 見, 食べ…) hoặc danh từ hành động (買い物, 食事, 勉強…).", "Với động từ する (N します), có thể dùng N に: 買い物に, 勉強に."],
      parts: [["Vます stem + に", "để làm V"], ["N + に", "để (hoạt động N)"]],
      usage: [
        { rule: "Mục đích là động từ.", ex: [["神戸へ インド料理を 食べに 行きます。", "Tôi đi Kobe để ăn món Ấn."], ["京都へ 友達に 会いに 行きます。", "Tôi đi Kyoto để gặp bạn."]] },
        { rule: "Mục đích là danh từ.", ex: [["あした 京都の お祭りに 行きます。", "Ngày mai tôi đi lễ hội ở Kyoto."], ["デパートへ 買い物に 行きます。", "Tôi đi bách hóa mua sắm."]] }
      ],
      notes: []
    },
    {
      pattern: "どこか ／ 何か",
      func: "どこか = đâu đó, 何か = cái gì đó. Dùng khi nơi chốn / sự vật chưa xác định. Có thể bỏ trợ từ へ, を sau chúng.",
      parts: [["どこか［へ］", "đâu đó"], ["何か［を］", "cái gì đó"]],
      usage: [
        { rule: "Hỏi có/không.", ex: [["冬休みは どこか［へ］行きましたか。 ―― はい、行きました。", "Kỳ nghỉ đông bạn có đi đâu không? — Có, tôi có đi."], ["のどが かわきましたから、何か［を］飲みたいです。", "Vì khát nên tôi muốn uống gì đó."]] }
      ],
      notes: ["Trả lời câu hỏi có どこか／何か bằng はい／いいえ trước (khác どこへ／何を)."]
    },
    {
      pattern: "N に V ／ N を V（入ります・出ます・散歩します）",
      func: "Phân biệt trợ từ với động từ di chuyển: に chỉ điểm đến (vào trong), を chỉ điểm rời khỏi hoặc nơi đi qua.",
      parts: [["N に 入ります", "vào N"], ["N を 出ます", "ra khỏi N"], ["N を 散歩します", "đi dạo qua N"]],
      usage: [
        { rule: "Vào / ra.", ex: [["あの 喫茶店に 入りましょう。", "Vào quán kia đi."], ["7時に うちを 出ます。", "7 giờ tôi ra khỏi nhà."]] },
        { rule: "Đi qua.", ex: [["毎朝 公園を 散歩します。", "Sáng nào tôi cũng đi dạo công viên."]] }
      ],
      notes: []
    },
    {
      pattern: "ご注文は？",
      func: "Câu nhân viên nhà hàng hỏi khách gọi món. Tiền tố ご (giống お) làm lịch sự danh từ gốc Hán.",
      parts: [["ご～", "ご注文, ご家族…"]],
      usage: [{ rule: "Trong nhà hàng.", ex: [["ご注文は？ ―― てんぷら定食を お願いします。", "Quý khách gọi gì ạ? — Cho tôi suất tempura."]] }],
      notes: []
    }
  ],
  reading: {
    title: "冬休みの 予定",
    titleVi: "Kế hoạch nghỉ đông",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–13.",
    paragraphs: [
      {
        s: [
          { t: "来月|らいげつ|tháng sau / から||từ / 冬休み|ふゆやすみ|nghỉ đông / です||là / 。||", vi: "Từ tháng sau là kỳ nghỉ đông." },
          { t: "私|わたし|tôi / は||(chủ đề) / 北海道|ほっかいどう|Hokkaido / へ||đến / スキー||trượt tuyết / に||để / 行きたい|いきたい|muốn đi / です||(lịch sự) / 。||", vi: "Tôi muốn đi Hokkaido trượt tuyết." },
          { t: "北海道|ほっかいどう|Hokkaido / で||ở / おいしい||ngon / 魚|さかな|cá / も||cũng / 食べたい|たべたい|muốn ăn / です||(lịch sự) / 。||", vi: "Ở Hokkaido tôi cũng muốn ăn cá ngon." }
        ],
        vi: "Đoạn 1: Kỳ nghỉ đông muốn đi Hokkaido trượt tuyết và ăn cá."
      },
      {
        s: [
          { t: "でも||nhưng / 、||, / お金|おかね|tiền / が||(đối tượng) / あまり||không … lắm / ありません||không có / 。||", vi: "Nhưng tôi không có nhiều tiền." },
          { t: "ですから||vì vậy / 、||, / 今|いま|bây giờ / 、||, / 毎晩|まいばん|mỗi tối / アルバイト||làm thêm / を||(tân ngữ) / します||làm / 。||", vi: "Vì vậy bây giờ tối nào tôi cũng làm thêm." },
          { t: "とても||rất / 疲れます|つかれます|mệt / 。||", vi: "Rất mệt." }
        ],
        vi: "Đoạn 2: Không đủ tiền nên tối nào cũng làm thêm, rất mệt."
      },
      {
        s: [
          { t: "あした||ngày mai / 、||, / 空港|くうこう|sân bay / へ||đến / 姉|あね|chị gái / を||(tân ngữ) / 迎え|むかえ|đón / に||để / 行きます|いきます|đi / 。||", vi: "Ngày mai tôi ra sân bay đón chị gái." },
          { t: "姉|あね|chị gái / は||(chủ đề) / 日本|にほん|Nhật / へ||đến / 経済|けいざい|kinh tế / の||(của) / 勉強|べんきょう|việc học / に||để / 来ます|きます|đến / 。||", vi: "Chị tôi đến Nhật để học kinh tế." },
          { t: "姉|あね|chị gái / は||(chủ đề) / 1年|いちねん|1 năm / 日本|にほん|Nhật / に||ở / います||ở / 。||", vi: "Chị tôi sẽ ở Nhật 1 năm." }
        ],
        vi: "Đoạn 3: Mai đi đón chị gái ở sân bay; chị đến Nhật học kinh tế."
      }
    ],
    summary: "Toàn bài: mong muốn (～たい, 欲しい) và mục đích di chuyển (～に 行きます): muốn đi Hokkaido trượt tuyết, phải làm thêm vì ít tiền, mai ra sân bay đón chị đến Nhật học kinh tế. Mẹo: câu hỏi “đi để làm gì” → tìm phần đứng trước に 行きます/来ます.",
    questions: [
      { q: "この 人は 冬休みに 北海道へ 何を しに 行きたいですか。", o: ["スキー", "釣り", "買い物", "勉強"], a: 0, ev: [0, 1], tip: "Mẫu N へ ～に 行きたい: mục đích là phần đứng trước に." },
      { q: "どうして 毎晩 アルバイトを しますか。", o: ["お金が あまり ありませんから", "スキーが 好きですから", "姉が 来ますから", "疲れますから"], a: 0, ev: [1, 0], tip: "ですから (vì vậy) nối với câu trước — lý do nằm ở câu ngay trước ですから." },
      { q: "あした どこへ 行きますか。", o: ["空港", "北海道", "市役所", "大学"], a: 0, ev: [2, 0], tip: "Chú ý thời gian: あした. 北海道 là kế hoạch kỳ nghỉ." },
      { q: "お姉さんは 何を しに 日本へ 来ますか。", o: ["経済の 勉強", "スキー", "仕事", "旅行"], a: 0, ev: [2, 1], tip: "N の 勉強に 来ます: danh từ hành động + に = mục đích." }
    ]
  },
  listening: {
    title: "レストランで",
    titleVi: "Ở nhà hàng",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "山田", pitch: 0.85 }, B: { name: "ミラー", pitch: 0.75 }, C: { name: "店員", pitch: 1.3 } },
    script: [
      { sp: "A", jp: "もう 12時ですね。おなかが すきました。", vi: "12 giờ rồi nhỉ. Đói bụng quá." },
      { sp: "B", jp: "そうですね。何か 食べに 行きませんか。", vi: "Đúng vậy. Đi ăn gì đó không?" },
      { sp: "A", jp: "あの 店に 入りましょう。", vi: "Vào quán kia đi." },
      { sp: "C", jp: "いらっしゃいませ。ご注文は？", vi: "Xin mời. Quý khách gọi gì ạ?" },
      { sp: "A", jp: "私は てんぷら定食。ミラーさんは？", vi: "Tôi suất tempura. Anh Miller?" },
      { sp: "B", jp: "牛どんを お願いします。それから、のどが かわきましたから、ビールも。", vi: "Cho tôi cơm bò. Và vì khát nên cho thêm bia." },
      { sp: "C", jp: "かしこまりました。少々 お待ち ください。", vi: "Vâng ạ. Xin đợi một chút." },
      { sp: "A", jp: "すみません、別々に お願いします。", vi: "Xin lỗi, cho chúng tôi trả riêng." }
    ],
    questions: [
      { q: "二人は どうして 店に 入りましたか。", o: ["おなかが すきましたから", "のどが かわきましたから", "疲れましたから", "雨ですから"], a: 0, ev: [0], tip: "Lý do ở đầu hội thoại; のどが かわきました là lý do gọi bia, không phải lý do vào quán." },
      { q: "山田さんは 何を 食べますか。", o: ["てんぷら定食", "牛どん", "すし", "カレー"], a: 0, ev: [4], tip: "私は… do Yamada nói → món của Yamada." },
      { q: "ミラーさんは 何を 注文しましたか。", o: ["牛どんと ビール", "牛どんだけ", "てんぷら定食と ビール", "ビールだけ"], a: 0, ev: [5], tip: "それから = thêm nữa: hai món." },
      { q: "お金は どう 払いますか。", o: ["別々に", "山田さんが 全部", "ミラーさんが 全部", "わかりません"], a: 0, ev: [7], tip: "別々に = trả riêng từng người." }
    ]
  },
  kanji: [
    { c: "入", hv: "NHẬP", on: "ニュウ", kun: "はい(る)・い(れる)", vi: "vào", words: [["入ります", "はいります", "vào"], ["入口", "いりぐち", "lối vào"], ["入学", "にゅうがく", "nhập học"]], use: "Phân biệt 入 (nét phải dài) với 人 (nét trái dài)." },
    { c: "出", hv: "XUẤT", on: "シュツ", kun: "で(る)・だ(す)", vi: "ra", words: [["出ます", "でます", "ra"], ["出します", "だします", "gửi, đưa ra"], ["出口", "でぐち", "lối ra"]], use: "Tự động từ で(ます); tha động từ だ(します)." },
    { c: "川", hv: "XUYÊN", on: "セン", kun: "かわ", vi: "sông", words: [["川", "かわ", "sông"], ["小川", "おがわ", "suối nhỏ (biến âm がわ)"]], use: "Ba nét như dòng nước chảy." },
    { c: "物", hv: "VẬT", on: "ブツ・モツ", kun: "もの", vi: "đồ vật", words: [["買い物", "かいもの", "mua sắm"], ["食べ物", "たべもの", "đồ ăn"], ["荷物", "にもつ", "hành lý"]], use: "Cuối từ thuần Nhật đọc もの; 荷物 đọc モツ." },
    { c: "広", hv: "QUẢNG", on: "コウ", kun: "ひろ(い)", vi: "rộng", words: [["広い", "ひろい", "rộng"], ["広島", "ひろしま", "Hiroshima"]], use: "Trái nghĩa với 狭い (せまい)." },
    { c: "泳", hv: "VỊNH", on: "エイ", kun: "およ(ぐ)", vi: "bơi", words: [["泳ぎます", "およぎます", "bơi"], ["水泳", "すいえい", "bơi lội"]], use: "Bộ 氵 (nước) + 永." },
    { c: "遊", hv: "DU", on: "ユウ", kun: "あそ(ぶ)", vi: "chơi", words: [["遊びます", "あそびます", "chơi"], ["遊園地", "ゆうえんち", "công viên giải trí"]], use: "Bộ 辶 (đi) bao bên trái – dưới." },
    { c: "欲", hv: "DỤC", on: "ヨク", kun: "ほ(しい)", vi: "muốn", words: [["欲しい", "ほしい", "muốn có"]], use: "Trong văn thường viết bằng kana: ほしい." }
  ],
  grammarQuiz: [
    { q: "新しい パソコン（　）欲しいです。", o: ["が", "を", "に", "で"], a: 0, ex: "N が 欲しいです." },
    { q: "沖縄へ（　）です。(muốn đi)", o: ["行きたい", "行くたい", "行きほしい", "行ったい"], a: 0, ex: "Vます bỏ ます + たい." },
    { q: "きょうは 何も 食べ（　）。(không muốn ăn)", o: ["たくないです", "たいじゃ ありません", "たいないです", "ないたいです"], a: 0, ex: "たい chia như tính từ い: たくないです." },
    { q: "デパートへ 靴を 買い（　）行きます。", o: ["に", "へ", "を", "で"], a: 0, ex: "Mục đích: Vます stem + に 行きます." },
    { q: "京都へ お祭り（　）行きます。", o: ["に", "を", "で", "が"], a: 0, ex: "Mục đích là danh từ: N に 行きます." },
    { q: "のどが かわきましたから、（　）飲みたいです。", o: ["何か", "何", "何も", "どこか"], a: 0, ex: "Cái gì đó → 何か." },
    { q: "あの 喫茶店（　）入りましょう。", o: ["に", "を", "で", "から"], a: 0, ex: "入ります: điểm đến + に." },
    { q: "7時に うち（　）出ます。", o: ["を", "に", "へ", "で"], a: 0, ex: "出ます: nơi rời khỏi + を." },
    { q: "Câu nào KHÔNG tự nhiên?", o: ["先生、コーヒーが 欲しいですか。", "私は 車が 欲しいです。", "何が 欲しいですか。", "コーヒーは いかがですか。"], a: 0, ex: "Không dùng 欲しいですか để mời người trên; dùng いかがですか." }
  ]
};
