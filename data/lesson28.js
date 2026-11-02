// Bài 28 — nội dung tự biên soạn theo phạm vi bài 28 Minna no Nihongo.
window.LESSONS[28] = {
  id: 28,
  title: "出張も 多いし、試験も あるし…",
  titleVi: "Công tác cũng nhiều, thi cũng có…",
  vocab: [
    { w: "売れます［パンが～］", r: "うれます", vi: "bán chạy (bánh mì)", t: "động từ nhóm II", ex: [["この パンは よく 売れて います。", "Loại bánh này bán chạy."]] },
    { w: "踊ります", r: "おどります", vi: "nhảy, múa", t: "động từ nhóm I", ex: [["歌いながら 踊ります。", "Vừa hát vừa nhảy."]] },
    { w: "かみます", r: "かみます", vi: "nhai", t: "động từ nhóm I", ex: [["ガムを かみながら 運転します。", "Vừa nhai kẹo cao su vừa lái xe."]] },
    { w: "選びます", r: "えらびます", vi: "chọn", t: "động từ nhóm I", ex: [["どうして この 店を 選んだんですか。", "Sao bạn chọn quán này?"]] },
    { w: "通います［大学に～］", r: "かよいます", vi: "đi đi về về, đi học (đại học)", t: "động từ nhóm I", ex: [["毎日 自転車で 大学に 通って います。", "Ngày nào tôi cũng đi xe đạp đến trường."]] },
    { w: "メモします", r: "メモします", vi: "ghi chép", t: "động từ nhóm III", ex: [["先生の 話を 聞きながら メモします。", "Vừa nghe thầy nói vừa ghi chép."]] },
    { w: "まじめ［な］", r: "まじめ", vi: "nghiêm túc, chăm chỉ", t: "tính từ な", ex: [["ワンさんは まじめだし、親切だし、いい 人です。", "Anh Wang vừa chăm chỉ vừa tốt bụng, là người tốt."]] },
    { w: "熱心［な］", r: "ねっしん", vi: "nhiệt tình, hăng say", t: "tính từ な", ex: [["熱心に 勉強して います。", "Đang học rất hăng say."]] },
    { w: "偉い", r: "えらい", vi: "giỏi, đáng nể; vĩ đại", t: "tính từ い", ex: [["働きながら 勉強して いるんですか。偉いですね。", "Vừa làm vừa học à? Giỏi quá."]] },
    { w: "ちょうど いい", r: "ちょうどいい", vi: "vừa đúng, vừa vặn", t: "cụm", ex: [["この 靴は サイズが ちょうど いいです。", "Đôi giày này vừa cỡ."]] },
    { w: "習慣", r: "しゅうかん", vi: "tập quán, thói quen", t: "danh từ", ex: [["日本の 習慣を 知って いますか。", "Bạn biết tập quán Nhật không?"]] },
    { w: "経験", r: "けいけん", vi: "kinh nghiệm", t: "danh từ", ex: [["経験も ないし、日本語も 下手です。", "Kinh nghiệm cũng không có, tiếng Nhật cũng kém."]] },
    { w: "力", r: "ちから", vi: "sức lực, năng lực", t: "danh từ", ex: [["力が 強いです。", "Sức khỏe."]] },
    { w: "人気", r: "にんき", vi: "được yêu thích", t: "danh từ", ex: [["この 店は 学生に 人気が あります。", "Quán này được sinh viên yêu thích."]] },
    { w: "形", r: "かたち", vi: "hình dáng", t: "danh từ", ex: [["形も いいし、色も きれいです。", "Hình dáng cũng đẹp, màu cũng đẹp."]] },
    { w: "色", r: "いろ", vi: "màu sắc", t: "danh từ", ex: [["どんな 色が 好きですか。", "Bạn thích màu gì?"]] },
    { w: "味", r: "あじ", vi: "vị", t: "danh từ", ex: [["味も いいし、値段も 安いです。", "Vị ngon mà giá cũng rẻ."]] },
    { w: "ガム", r: "ガム", vi: "kẹo cao su", t: "danh từ", ex: [["ガムを かんでは いけません。", "Không được nhai kẹo cao su."]] },
    { w: "品物", r: "しなもの", vi: "hàng hóa", t: "danh từ", ex: [["品物も 多いし、安いです。", "Hàng nhiều mà rẻ."]] },
    { w: "値段", r: "ねだん", vi: "giá cả", t: "danh từ", ex: [["値段が 高いです。", "Giá đắt."]] },
    { w: "給料", r: "きゅうりょう", vi: "lương", t: "danh từ", ex: [["給料も いいし、休みも 多いです。", "Lương cao mà nghỉ cũng nhiều."]] },
    { w: "ボーナス", r: "ボーナス", vi: "tiền thưởng", t: "danh từ", ex: [["ボーナスで パソコンを 買いました。", "Tôi mua máy tính bằng tiền thưởng."]] },
    { w: "番組", r: "ばんぐみ", vi: "chương trình (TV)", t: "danh từ", ex: [["ご飯を 食べながら テレビの 番組を 見ます。", "Vừa ăn cơm vừa xem chương trình TV."]] },
    { w: "ドラマ", r: "ドラマ", vi: "phim truyền hình", t: "danh từ", ex: [["毎晩 ドラマを 見て います。", "Tối nào tôi cũng xem phim bộ."]] },
    { w: "小説", r: "しょうせつ", vi: "tiểu thuyết", t: "danh từ", ex: [["寝る 前に 小説を 読んで います。", "Trước khi ngủ tôi thường đọc tiểu thuyết."]] },
    { w: "小説家", r: "しょうせつか", vi: "tiểu thuyết gia", t: "danh từ", ex: [["将来 小説家に なりたいです。", "Tương lai tôi muốn làm tiểu thuyết gia."]] },
    { w: "歌手", r: "かしゅ", vi: "ca sĩ", t: "danh từ", ex: [["あの 歌手は 歌いながら 踊ります。", "Ca sĩ đó vừa hát vừa nhảy."]] },
    { w: "管理人", r: "かんりにん", vi: "người quản lý (tòa nhà)", t: "danh từ", ex: [["管理人さんに 聞いて ください。", "Hãy hỏi người quản lý."]] },
    { w: "息子", r: "むすこ", vi: "con trai (mình)", t: "danh từ", ex: [["息子は 大学に 通って います。", "Con trai tôi đang học đại học."]] },
    { w: "息子さん", r: "むすこさん", vi: "con trai (người khác)", t: "danh từ", ex: [["息子さんは お元気ですか。", "Con trai anh khỏe chứ?"]] },
    { w: "娘", r: "むすめ", vi: "con gái (mình)", t: "danh từ", ex: [["娘は ピアノを 習って います。", "Con gái tôi đang học piano."]] },
    { w: "娘さん", r: "むすめさん", vi: "con gái (người khác)", t: "danh từ", ex: [["娘さんは 何歳ですか。", "Con gái chị mấy tuổi?"]] },
    { w: "しばらく", r: "しばらく", vi: "một lúc, một thời gian", t: "phó từ", ex: [["しばらく 休みます。", "Nghỉ một thời gian."]] },
    { w: "たいてい", r: "たいてい", vi: "thường, phần lớn", t: "phó từ", ex: [["日曜日は たいてい うちに います。", "Chủ nhật tôi thường ở nhà."]] },
    { w: "それに", r: "それに", vi: "hơn nữa", t: "liên từ", ex: [["この 店は 安いです。それに、おいしいです。", "Quán này rẻ. Hơn nữa lại ngon."]] },
    { w: "それで", r: "それで", vi: "vì thế, cho nên", t: "liên từ", ex: [["駅から 近いです。それで、いつも 人が 多いです。", "Gần ga. Vì thế lúc nào cũng đông người."]] },
    { w: "［ちょっと］お願いが あるんですが", r: "おねがいがあるんですが", vi: "tôi có chút việc muốn nhờ", t: "cụm", ex: [["ちょっと お願いが あるんですが。", "Tôi có chút việc muốn nhờ."]] },
    { w: "ホームステイ", r: "ホームステイ", vi: "ở nhà bản xứ (homestay)", t: "danh từ", ex: [["ホームステイを したいんですが。", "Tôi muốn ở homestay."]] },
    { w: "会話", r: "かいわ", vi: "hội thoại", t: "danh từ", ex: [["会話の 練習を します。", "Luyện hội thoại."]] },
    { w: "おしゃべりします", r: "おしゃべりします", vi: "nói chuyện phiếm", t: "động từ nhóm III", ex: [["お茶を 飲みながら おしゃべりします。", "Vừa uống trà vừa tán gẫu."]] },
    { w: "お知らせ", r: "おしらせ", vi: "thông báo", t: "danh từ", ex: [["お知らせを 読んで ください。", "Hãy đọc thông báo."]] },
    { w: "日にち", r: "ひにち", vi: "ngày (tháng)", t: "danh từ", ex: [["日にちと 場所を 確認して ください。", "Hãy kiểm tra ngày và địa điểm."]] },
    { w: "体育館", r: "たいいくかん", vi: "nhà thi đấu", t: "danh từ", ex: [["体育館で 踊りの 練習を します。", "Tập nhảy ở nhà thi đấu."]] },
    { w: "無料", r: "むりょう", vi: "miễn phí", t: "danh từ", ex: [["参加は 無料です。", "Tham gia miễn phí."]] }
  ],
  grammar: [
    {
      pattern: "V1（ます bỏ ます）ながら V2",
      func: "Hai hành động diễn ra đồng thời bởi cùng một người: “vừa V1 vừa V2”. V2 là hành động chính.",
      explain: ["Cũng dùng cho việc làm song song trong một thời gian dài: 働きながら 日本語を 勉強して います (vừa đi làm vừa học tiếng Nhật)."],
      parts: [["Vます stem + ながら", "vừa … vừa"]],
      usage: [
        { rule: "Đồng thời.", ex: [["音楽を 聞きながら 食事します。", "Vừa nghe nhạc vừa ăn."], ["ガムを かみながら 運転します。", "Vừa nhai kẹo cao su vừa lái xe."]] },
        { rule: "Song song lâu dài.", ex: [["働きながら 日本語を 勉強して います。", "Tôi vừa đi làm vừa học tiếng Nhật."]] }
      ],
      notes: []
    },
    {
      pattern: "V て います（thói quen）",
      func: "Diễn tả thói quen, hành động lặp lại thường xuyên trong một giai đoạn. Nếu là thói quen trong quá khứ thì dùng ～て いました.",
      parts: [["Vて います", "thường làm"], ["Vて いました", "đã từng thường làm"]],
      usage: [{ rule: "Thói quen.", ex: [["毎朝 ジョギングを して います。", "Sáng nào tôi cũng chạy bộ."], ["子どもの とき、毎晩 8時に 寝て いました。", "Hồi nhỏ tối nào tôi cũng ngủ lúc 8 giờ."]] }],
      notes: ["Các nghĩa trước của ～て います: đang (bài 14), trạng thái kết quả / nghề nghiệp (bài 15)."]
    },
    {
      pattern: "Thể thông thường + し、～",
      func: "Liệt kê các lý do / đặc điểm cùng chiều, ngụ ý “không chỉ … mà còn …, vả lại …”. Thường kèm も.",
      explain: ["Có thể chỉ nêu lý do rồi để người nghe tự hiểu kết luận: ～し、～し…", "Danh từ / な-adj: ～だし."],
      parts: [["V／い-adj thể thông thường + し", "安いし"], ["な-adj／N + だし", "まじめだし"]],
      usage: [
        { rule: "Liệt kê đặc điểm.", ex: [["ワットさんは 親切だし、おもしろいし、いい 先生です。", "Thầy Watt vừa tốt bụng vừa vui tính, là thầy giáo tốt."]] },
        { rule: "Liệt kê lý do.", ex: [["駅から 近いし、車でも 来られるし、この 店は とても 便利です。", "Gần ga, đi xe ô tô cũng đến được, nên quán này rất tiện."], ["どうして この 店で パンを 買うんですか。 ―― 味も いいし、値段も 安いし…。", "Sao bạn mua bánh ở quán này? — Vị thì ngon, giá thì rẻ…"]] }
      ],
      notes: []
    },
    {
      pattern: "それに ／ それで",
      func: "それに: thêm thông tin cùng chiều (“hơn nữa”). それで: dẫn ra kết quả (“vì thế”).",
      parts: [["それに", "hơn nữa"], ["それで", "vì thế"]],
      usage: [
        { rule: "それに.", ex: [["この 店は 安いです。それに、品物も 多いです。", "Cửa hàng này rẻ. Hơn nữa hàng cũng nhiều."]] },
        { rule: "それで.", ex: [["この レストランは 値段も 安いし、おいしいんです。 ―― それで 人が 多いんですね。", "Nhà hàng này giá rẻ mà ngon. — Vì thế mà đông khách nhỉ."]] }
      ],
      notes: []
    },
    {
      pattern: "よく この 喫茶店に 来るんですか（trợ từ に）",
      func: "Với động từ 来ます, 行きます… khi điểm đến là nơi mình hay lui tới, có thể dùng に thay へ. Kết hợp ～んですか để hỏi chuyện đời thường.",
      parts: [["N に 来ます／行きます", ""]],
      usage: [{ rule: "Hỏi chuyện.", ex: [["よく この 喫茶店に 来るんですか。 ―― ええ。静かだし、コーヒーも おいしいし…。", "Anh hay đến quán này à? — Vâng. Yên tĩnh mà cà phê cũng ngon…"]] }],
      notes: []
    }
  ],
  reading: {
    title: "私の 好きな 店",
    titleVi: "Quán tôi thích",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–28.",
    paragraphs: [
      {
        s: [
          { t: "私|わたし|tôi / は||(chủ đề) / 働きながら|はたらきながら|vừa đi làm / 、||, / 夜|よる|tối / 日本語|にほんご|tiếng Nhật / 学校|がっこう|trường / に||(đến) / 通って|かよって|đi học / います||(thói quen) / 。||", vi: "Tôi vừa đi làm vừa buổi tối đi học trường tiếng Nhật." },
          { t: "学校|がっこう|trường / の||(của) / 前|まえ|trước / に||ở / 小さい|ちいさい|nhỏ / 喫茶店|きっさてん|quán cà phê / が||(chủ thể) / あります||có / 。||", vi: "Trước trường có một quán cà phê nhỏ." },
          { t: "授業|じゅぎょう|giờ học / の||(của) / 前|まえ|trước / に||(khi) / 、||, / たいてい||thường / そこ||chỗ đó / で||ở / コーヒー||cà phê / を||(tân ngữ) / 飲みながら|のみながら|vừa uống / 宿題|しゅくだい|bài tập / を||(tân ngữ) / します||làm / 。||", vi: "Trước giờ học tôi thường vừa uống cà phê ở đó vừa làm bài tập." }
        ],
        vi: "Đoạn 1: Vừa đi làm vừa học tối; trước giờ học thường ngồi quán cà phê trước trường vừa uống vừa làm bài."
      },
      {
        s: [
          { t: "その||đó / 店|みせ|quán / は||(chủ đề) / 静か|しずか|yên tĩnh / だし||vừa / 、||, / コーヒー||cà phê / も||cũng / おいしいし||ngon / 、||, / それに||hơn nữa / 値段|ねだん|giá / も||cũng / 安い|やすい|rẻ / です||(lịch sự) / 。||", vi: "Quán đó yên tĩnh, cà phê ngon, hơn nữa giá cũng rẻ." },
          { t: "それで||vì thế / 、||, / いつも||luôn / 学生|がくせい|sinh viên / が||(chủ thể) / 多い|おおい|đông / です||(lịch sự) / 。||", vi: "Vì thế lúc nào cũng đông sinh viên." },
          { t: "店|みせ|quán / の||(của) / 人|ひと|người / も||cũng / 親切|しんせつ|tốt bụng / で||và / 、||, / 学生|がくせい|sinh viên / に||(với) / 人気|にんき|được yêu thích / が||(chủ thể) / あります||có / 。||", vi: "Người ở quán cũng tốt bụng, được sinh viên yêu thích." }
        ],
        vi: "Đoạn 2: Lý do thích quán: yên tĩnh, ngon, rẻ → luôn đông sinh viên; nhân viên tốt bụng."
      }
    ],
    summary: "Toàn bài: thói quen (～て います), hành động đồng thời (～ながら), liệt kê lý do (～し、～し, それに) và kết quả (それで). Mẹo: câu hỏi “vì sao” → gom tất cả các vế ～し; câu hỏi “kết quả” → tìm câu sau それで.",
    questions: [
      { q: "この 人は 夜 何を して いますか。", o: ["日本語学校に 通って います", "喫茶店で 働いて います", "会社で 働いて います", "うちで 勉強して います"], a: 0, ev: [0, 0], tip: "～ながら: hành động chính đứng sau (通って います); 働き là việc làm song song." },
      { q: "授業の 前に、喫茶店で たいてい 何を しますか。", o: ["コーヒーを 飲みながら 宿題を します", "友達と おしゃべりします", "新聞を 読みます", "アルバイトを します"], a: 0, ev: [0, 2], tip: "たいてい = thường. Tìm câu có ～ながら." },
      { q: "その 店の いい ところは どれですか。(Không đúng là?)", o: ["広い", "静か", "コーヒーが おいしい", "値段が 安い"], a: 0, ev: [1, 0], tip: "Câu hỏi phủ định: tìm điều KHÔNG có trong danh sách ～し." },
      { q: "どうして いつも 学生が 多いですか。", o: ["静かで、おいしくて、安いから", "学校の 中に あるから", "無料だから", "大きいから"], a: 0, ev: [1, 1], tip: "それで nối kết quả với các lý do ở câu trước." }
    ]
  },
  listening: {
    title: "お願いが あるんですが",
    titleVi: "Tôi có việc muốn nhờ",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "小川", pitch: 0.8 }, B: { name: "ミラー", pitch: 0.75 } },
    script: [
      { sp: "A", jp: "ミラーさん、ちょっと お願いが あるんですが。", vi: "Anh Miller, tôi có chút việc muốn nhờ." },
      { sp: "B", jp: "何ですか。", vi: "Việc gì vậy?" },
      { sp: "A", jp: "息子に 英語を 教えて いただけませんか。来月 アメリカへ ホームステイに 行くんです。", vi: "Anh dạy tiếng Anh cho con trai tôi được không? Tháng sau nó đi homestay ở Mỹ." },
      { sp: "B", jp: "そうですか。でも、今 出張も 多いし、日本語の 試験も あるし…。", vi: "Vậy à. Nhưng bây giờ tôi đi công tác nhiều, lại có kỳ thi tiếng Nhật…" },
      { sp: "A", jp: "会話だけで いいんです。お茶を 飲みながら おしゃべりするだけで…。", vi: "Chỉ hội thoại thôi cũng được. Chỉ cần vừa uống trà vừa trò chuyện…" },
      { sp: "B", jp: "じゃ、週に 1回、土曜日の 午後は どうですか。", vi: "Vậy mỗi tuần một lần, chiều thứ bảy thì sao?" },
      { sp: "A", jp: "ありがとう ございます。助かります。", vi: "Cảm ơn anh. Đỡ cho tôi quá." }
    ],
    questions: [
      { q: "小川さんは ミラーさんに 何を 頼みましたか。", o: ["息子に 英語を 教える こと", "息子を アメリカへ 連れて 行く こと", "日本語を 教える こと", "出張に 行く こと"], a: 0, ev: [2], tip: "～て いただけませんか ngay sau ～んですが là lời nhờ." },
      { q: "ミラーさんは どうして すぐ 「はい」と 言いませんでしたか。", o: ["出張が 多いし、試験も あるから", "英語が 下手だから", "息子が 嫌いだから", "時間が 合わないから"], a: 0, ev: [3], tip: "～し、～し… để lửng = từ chối nhẹ bằng cách liệt kê lý do." },
      { q: "小川さんは どんな 練習で いいと 言いましたか。", o: ["お茶を 飲みながら おしゃべりする 練習", "文法の 練習", "試験の 練習", "作文の 練習"], a: 0, ev: [4], tip: "～ながら: vừa uống trà vừa trò chuyện." },
      { q: "いつ 教えますか。", o: ["週に 1回、土曜日の 午後", "毎日", "週に 2回、日曜日", "来月から 毎晩"], a: 0, ev: [5], tip: "Tần suất + thời điểm cụ thể ở câu đồng ý cuối." }
    ]
  },
  kanji: [
    { c: "踊", hv: "DŨNG", on: "ヨウ", kun: "おど(る)", vi: "nhảy múa", words: [["踊ります", "おどります", "nhảy"], ["盆踊り", "ぼんおどり", "múa Bon"]], use: "Bộ 足 (chân) bên trái." },
    { c: "選", hv: "TUYỂN", on: "セン", kun: "えら(ぶ)", vi: "chọn", words: [["選びます", "えらびます", "chọn"], ["選手", "せんしゅ", "tuyển thủ"]], use: "Bộ 辶." },
    { c: "通", hv: "THÔNG", on: "ツウ", kun: "かよ(う)・とお(る)", vi: "thông, qua lại", words: [["通います", "かよいます", "đi lại (học)"], ["交通", "こうつう", "giao thông"], ["通信", "つうしん", "thông tin"]], use: "Bộ 辶 + 甬." },
    { c: "味", hv: "VỊ", on: "ミ", kun: "あじ", vi: "vị", words: [["味", "あじ", "vị"], ["意味", "いみ", "ý nghĩa"], ["趣味", "しゅみ", "sở thích"]], use: "口 + 未." },
    { c: "色", hv: "SẮC", on: "ショク・シキ", kun: "いろ", vi: "màu", words: [["色", "いろ", "màu"], ["景色", "けしき", "phong cảnh"], ["茶色", "ちゃいろ", "màu nâu"]], use: "景色 đọc シキ." },
    { c: "力", hv: "LỰC", on: "リョク・リキ", kun: "ちから", vi: "sức", words: [["力", "ちから", "sức"], ["努力", "どりょく", "nỗ lực"]], use: "Là bộ thủ trong 男, 動, 勤." },
    { c: "給", hv: "CẤP", on: "キュウ", kun: "—", vi: "cấp, phát", words: [["給料", "きゅうりょう", "lương"]], use: "Bộ 糸 + 合." },
    { c: "息", hv: "TỨC", on: "ソク", kun: "いき", vi: "hơi thở; con trai", words: [["息子", "むすこ", "con trai (đọc đặc biệt)"], ["休息", "きゅうそく", "nghỉ ngơi"]], use: "自 + 心. 息子 là cách đọc đặc biệt." }
  ],
  grammarQuiz: [
    { q: "音楽を 聞き（　）勉強します。", o: ["ながら", "たり", "て から", "し"], a: 0, ex: "Đồng thời: Vます stem + ながら." },
    { q: "働き（　）、大学に 通って います。", o: ["ながら", "ても", "たら", "し"], a: 0, ex: "Song song lâu dài: ～ながら." },
    { q: "毎朝 ジョギングを（　）。(thói quen)", o: ["して います", "します ながら", "したし", "しながら"], a: 0, ex: "Thói quen: Vて います." },
    { q: "あの 先生は 親切（　）、おもしろいし、人気が あります。", o: ["だし", "し", "なし", "でし"], a: 0, ex: "な-adj + だし." },
    { q: "この 店は 安い（　）、おいしいし、よく 来ます。", o: ["し", "だし", "ながら", "から し"], a: 0, ex: "い-adj + し." },
    { q: "この 店は 安いです。（　）、品物も 多いです。", o: ["それに", "それで", "でも", "それから に"], a: 0, ex: "Thêm ý cùng chiều → それに." },
    { q: "駅から 近いです。（　）、いつも 人が 多いです。", o: ["それで", "それに", "でも", "しかし"], a: 0, ex: "Kết quả → それで." },
    { q: "子どもの とき、毎日 川で 泳いで（　）。", o: ["いました", "います", "あります", "おきます"], a: 0, ex: "Thói quen trong quá khứ → ～て いました." },
    { q: "Câu nào SAI?", o: ["私は 音楽を 聞きながら、弟は 勉強します。", "テレビを 見ながら ご飯を 食べます。", "歌いながら 踊ります。", "メモしながら 聞きます。"], a: 0, ex: "～ながら: hai hành động phải cùng một người làm." }
  ]
};
