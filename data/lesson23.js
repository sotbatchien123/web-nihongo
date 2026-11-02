// Bài 23 — nội dung tự biên soạn theo phạm vi bài 23 Minna no Nihongo.
window.LESSONS[23] = {
  id: 23,
  title: "どうやって 行きますか",
  titleVi: "Đi bằng cách nào?",
  vocab: [
    { w: "聞きます［先生に～］", r: "ききます", vi: "hỏi (thầy)", t: "động từ nhóm I", ex: [["わからない とき、先生に 聞きます。", "Khi không hiểu, tôi hỏi thầy."]] },
    { w: "回します", r: "まわします", vi: "vặn, xoay", t: "động từ nhóm I", ex: [["この つまみを 回すと、音が 大きく なります。", "Vặn núm này thì âm thanh to lên."]] },
    { w: "引きます", r: "ひきます", vi: "kéo", t: "động từ nhóm I", ex: [["この レバーを 引くと、水が 出ます。", "Kéo cần này thì nước chảy ra."]] },
    { w: "変えます", r: "かえます", vi: "thay đổi", t: "động từ nhóm II", ex: [["サイズを 変える ことが できますか。", "Có đổi cỡ được không?"]] },
    { w: "触ります［ドアに～］", r: "さわります", vi: "chạm, sờ (cửa)", t: "động từ nhóm I", ex: [["この ボタンに 触ると、ドアが 開きます。", "Chạm vào nút này thì cửa mở."]] },
    { w: "出ます［お釣りが～］", r: "でます", vi: "ra (tiền thừa)", t: "động từ nhóm II", ex: [["ここを 押すと、お釣りが 出ます。", "Ấn chỗ này thì tiền thừa ra."]] },
    { w: "動きます［時計が～］", r: "うごきます", vi: "chạy, chuyển động (đồng hồ)", t: "động từ nhóm I", ex: [["時計が 動きません。", "Đồng hồ không chạy."]] },
    { w: "歩きます［道を～］", r: "あるきます", vi: "đi bộ (trên đường)", t: "động từ nhóm I", ex: [["公園を 歩きます。", "Đi bộ trong công viên."]] },
    { w: "渡ります［橋を～］", r: "わたります", vi: "qua, băng qua (cầu)", t: "động từ nhóm I", ex: [["橋を 渡ると、右に 銀行が あります。", "Qua cầu thì bên phải có ngân hàng."]] },
    { w: "気を つけます［車に～］", r: "きをつけます", vi: "chú ý, cẩn thận (với xe)", t: "động từ nhóm II", ex: [["道を 渡る とき、車に 気を つけて ください。", "Khi qua đường, hãy cẩn thận xe cộ."]] },
    { w: "引っ越しします", r: "ひっこしします", vi: "chuyển nhà", t: "động từ nhóm III", ex: [["引っ越しする とき、友達が 手伝いに 来ました。", "Khi tôi chuyển nhà, bạn đã đến giúp."]] },
    { w: "電気屋", r: "でんきや", vi: "cửa hàng điện máy", t: "danh từ", ex: [["電気屋で パソコンを 買いました。", "Tôi mua máy tính ở cửa hàng điện máy."]] },
    { w: "～屋", r: "や", vi: "người/cửa hàng ~", t: "hậu tố", ex: [["パン屋は どこですか。", "Tiệm bánh mì ở đâu?"]] },
    { w: "サイズ", r: "サイズ", vi: "cỡ, kích thước", t: "danh từ", ex: [["サイズが 合わない とき、変えて ください。", "Khi không vừa cỡ, hãy đổi."]] },
    { w: "音", r: "おと", vi: "âm thanh", t: "danh từ", ex: [["音が 小さい とき、ここを 回します。", "Khi âm nhỏ, vặn chỗ này."]] },
    { w: "機械", r: "きかい", vi: "máy móc", t: "danh từ", ex: [["この 機械の 使い方を 教えて ください。", "Chỉ tôi cách dùng máy này."]] },
    { w: "つまみ", r: "つまみ", vi: "núm vặn", t: "danh từ", ex: [["つまみを 右へ 回します。", "Vặn núm sang phải."]] },
    { w: "故障", r: "こしょう", vi: "hỏng hóc", t: "danh từ", ex: [["機械が 故障しました。", "Máy bị hỏng."]] },
    { w: "道", r: "みち", vi: "đường", t: "danh từ", ex: [["道が わからない とき、交番で 聞きます。", "Khi không biết đường, hỏi ở đồn cảnh sát."]] },
    { w: "交差点", r: "こうさてん", vi: "ngã tư", t: "danh từ", ex: [["二つ目の 交差点を 右へ 曲がります。", "Rẽ phải ở ngã tư thứ hai."]] },
    { w: "信号", r: "しんごう", vi: "đèn giao thông", t: "danh từ", ex: [["信号を 左へ 曲がると、駅が あります。", "Rẽ trái ở đèn thì có ga."]] },
    { w: "角", r: "かど", vi: "góc (đường)", t: "danh từ", ex: [["あの 角を 曲がると、郵便局が あります。", "Rẽ ở góc kia thì có bưu điện."]] },
    { w: "橋", r: "はし", vi: "cây cầu", t: "danh từ", ex: [["橋を 渡ります。", "Qua cầu."]] },
    { w: "駐車場", r: "ちゅうしゃじょう", vi: "bãi đỗ xe", t: "danh từ", ex: [["駐車場は ビルの 後ろに あります。", "Bãi đỗ xe ở sau tòa nhà."]] },
    { w: "建物", r: "たてもの", vi: "tòa nhà", t: "danh từ", ex: [["角を 曲がると、大きい 建物が あります。", "Rẽ ở góc thì có một tòa nhà lớn."]] },
    { w: "～目", r: "め", vi: "thứ ~", t: "hậu tố", ex: [["二つ目の 角を 左へ 曲がって ください。", "Hãy rẽ trái ở góc thứ hai."]] },
    { w: "［お］正月", r: "おしょうがつ", vi: "Tết", t: "danh từ", ex: [["お正月の とき、家族で 神社へ 行きます。", "Dịp Tết, cả nhà đi đền."]] },
    { w: "外国人登録証", r: "がいこくじんとうろくしょう", vi: "thẻ đăng ký người nước ngoài", t: "danh từ", ex: [["外国人登録証を 見せて ください。", "Cho xem thẻ đăng ký người nước ngoài."]] },
    { w: "寂しい", r: "さびしい", vi: "buồn, cô đơn", t: "tính từ い", ex: [["家族が いない とき、寂しいです。", "Khi không có gia đình, tôi thấy buồn."]] },
    { w: "眠い", r: "ねむい", vi: "buồn ngủ", t: "tính từ い", ex: [["眠い とき、コーヒーを 飲みます。", "Khi buồn ngủ tôi uống cà phê."]] }
  ],
  grammar: [
    {
      pattern: "～とき、～（khi …）",
      func: "Nối hai mệnh đề: mệnh đề trước とき cho biết thời điểm diễn ra mệnh đề sau: “Khi …, …”.",
      explain: ["Trước とき dùng thể thông thường: V (thể từ điển / ない / た), い-adj (～い), な-adj (～な), N (～の).", "Mệnh đề trước とき là cách bổ nghĩa danh từ (bài 22) cho danh từ とき."],
      parts: [["V thể thông thường + とき", "読む とき / 読まない とき"], ["い-adj + とき", "眠い とき"], ["な-adj な + とき", "暇な とき"], ["N の + とき", "子どもの とき"]],
      usage: [
        { rule: "Thời điểm.", ex: [["図書館で 本を 借りる とき、カードが 要ります。", "Khi mượn sách ở thư viện cần thẻ."], ["使い方が わからない とき、私に 聞いて ください。", "Khi không biết cách dùng, hãy hỏi tôi."]] },
        { rule: "Tính từ / danh từ.", ex: [["暇な とき、本を 読みます。", "Khi rảnh tôi đọc sách."], ["子どもの とき、よく 川で 遊びました。", "Hồi nhỏ tôi hay chơi ở sông."]] }
      ],
      notes: []
    },
    {
      pattern: "V る とき ／ V た とき",
      func: "Thể của động từ trước とき cho biết thứ tự: Vる とき = hành động chưa xong (trước/đang); Vた とき = hành động đã xong.",
      explain: ["国へ 帰る とき、かばんを 買いました: mua cặp TRƯỚC khi về (ở Nhật).", "国へ 帰った とき、かばんを 買いました: mua cặp SAU khi đã về đến nước."],
      parts: [["Vる とき", "lúc sắp / đang V"], ["Vた とき", "lúc đã V xong"]],
      usage: [{ rule: "So sánh.", ex: [["パリへ 行く とき、かばんを 買いました。", "Khi (chuẩn bị) đi Paris, tôi mua cặp (trước khi đi)."], ["パリへ 行った とき、かばんを 買いました。", "Khi đã đến Paris, tôi mua cặp (ở Paris)."]] }],
      notes: []
    },
    {
      pattern: "V る と、～（hệ quả tất yếu）",
      func: "Khi hành động / sự việc trước xảy ra thì kết quả sau chắc chắn xảy ra: “hễ … thì …”. Dùng cho máy móc, chỉ đường, quy luật tự nhiên.",
      explain: ["Mệnh đề sau không dùng ý chí, mong muốn, nhờ vả (～たい, ～て ください, ～ましょう)."],
      parts: [["Vる + と", "hễ V thì"]],
      usage: [
        { rule: "Thao tác máy móc.", ex: [["この つまみを 回すと、音が 大きく なります。", "Vặn núm này thì tiếng to lên."]] },
        { rule: "Chỉ đường.", ex: [["右へ 曲がると、郵便局が あります。", "Rẽ phải thì có bưu điện."]] }
      ],
      notes: []
    },
    {
      pattern: "N が adj／V（mô tả trạng thái, hiện tượng）",
      func: "Trong mệnh đề với とき, と, chủ ngữ dùng が.",
      parts: [["が", "chủ ngữ của mệnh đề phụ"]],
      usage: [{ rule: "Ví dụ.", ex: [["音が 小さいと、聞こえません。", "Âm nhỏ thì không nghe được."], ["電気が 消えると、部屋が 暗く なります。", "Đèn tắt thì phòng tối."]] }],
      notes: []
    },
    {
      pattern: "N（nơi chốn）を V（di chuyển）",
      func: "を chỉ nơi chốn mà chuyển động đi qua / đi dọc theo: 歩きます, 渡ります, 曲がります, 散歩します.",
      parts: [["を", "đi qua, đi dọc"]],
      usage: [{ rule: "Đi qua.", ex: [["公園を 散歩します。", "Đi dạo trong công viên."], ["道を 渡ります。", "Băng qua đường."], ["交差点を 右へ 曲がります。", "Rẽ phải ở ngã tư."]] }],
      notes: []
    }
  ],
  reading: {
    title: "駅から 私の 家まで",
    titleVi: "Từ ga đến nhà tôi",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–23.",
    paragraphs: [
      {
        s: [
          { t: "駅|えき|ga / を||(tân ngữ) / 出る|でる|ra / と||thì / 、||, / 前|まえ|trước / に||ở / 大きい|おおきい|lớn / 道|みち|đường / が||(chủ thể) / あります||có / 。||", vi: "Ra khỏi ga thì phía trước có con đường lớn." },
          { t: "その||đó / 道|みち|đường / を||(qua) / まっすぐ||thẳng / 歩くと|あるくと|đi bộ thì / 、||, / 橋|はし|cầu / が||(chủ thể) / あります||có / 。||", vi: "Đi thẳng trên đường đó thì có cây cầu." },
          { t: "橋|はし|cầu / を||(qua) / 渡って|わたって|băng qua / 、||, / 二つ目|ふたつめ|thứ hai / の||(của) / 角|かど|góc / を||(qua) / 左|ひだり|trái / へ||về / 曲がります|まがります|rẽ / 。||", vi: "Qua cầu, rẽ trái ở góc thứ hai." },
          { t: "右|みぎ|phải / に||ở / 白い|しろい|trắng / 建物|たてもの|tòa nhà / が||(chủ thể) / あります||có / 。||", vi: "Bên phải có tòa nhà trắng." },
          { t: "それ||cái đó / が||(chủ thể) / 私|わたし|tôi / の||(của) / アパート||căn hộ / です||là / 。||", vi: "Đó là căn hộ của tôi." }
        ],
        vi: "Đoạn 1: Chỉ đường: ra ga → đi thẳng → qua cầu → rẽ trái ở góc thứ hai → tòa nhà trắng bên phải."
      },
      {
        s: [
          { t: "夜|よる|ban đêm / 、||, / 橋|はし|cầu / を||(qua) / 渡る|わたる|qua / とき||khi / 、||, / 車|くるま|xe / に||(với) / 気を つけて|きをつけて|cẩn thận / ください||hãy / 。||", vi: "Ban đêm khi qua cầu, hãy cẩn thận xe cộ." },
          { t: "道|みち|đường / が||(chủ thể) / 暗い|くらい|tối / です||(là) / から||vì / 。||", vi: "Vì đường tối." },
          { t: "道|みち|đường / が||(chủ thể) / わからない||không biết / とき||khi / 、||, / 駅|えき|ga / の||(của) / 前|まえ|trước / の||(của) / 交番|こうばん|đồn cảnh sát / で||ở / 聞いて|きいて|hỏi / ください||hãy / 。||", vi: "Khi không biết đường, hãy hỏi ở đồn cảnh sát trước ga." }
        ],
        vi: "Đoạn 2: Lời dặn: đêm qua cầu cẩn thận xe vì đường tối; không biết đường thì hỏi đồn cảnh sát trước ga."
      }
    ],
    summary: "Toàn bài: chỉ đường bằng ～と (hễ … thì có …), N を (đi qua) và lời dặn bằng ～とき. Mẹo: với bài chỉ đường, vẽ nhanh sơ đồ theo từng mốc (ga → đường → cầu → góc thứ 2 → bên phải).",
    questions: [
      { q: "橋を 渡った あと、どう しますか。", o: ["二つ目の 角を 左へ 曲がります", "一つ目の 角を 右へ 曲がります", "まっすぐ 行きます", "交番で 聞きます"], a: 0, ev: [0, 2], tip: "Đề hay đổi 二つ目↔一つ目 và 左↔右. Ghi chú từng chi tiết." },
      { q: "この 人の アパートは どれですか。", o: ["右に ある 白い 建物", "左に ある 白い 建物", "右に ある 黒い 建物", "橋の 前の 建物"], a: 0, ev: [0, 3], tip: "Câu ngay trước それが 私の アパートです mô tả vị trí và màu." },
      { q: "夜 橋を 渡る とき、何に 気を つけますか。", o: ["車", "人", "川", "自転車"], a: 0, ev: [1, 0], tip: "N に 気を つけます: thứ cần cẩn thận đứng trước に." },
      { q: "道が わからない とき、どこで 聞きますか。", o: ["駅の 前の 交番", "駅の 中", "アパート", "橋の 近く"], a: 0, ev: [1, 2], tip: "～とき + chỉ thị: phần sau とき là việc cần làm." }
    ]
  },
  listening: {
    title: "どうやって 行きますか",
    titleVi: "Đi đường nào?",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "イー", pitch: 1.3 }, B: { name: "警官", pitch: 0.8 } },
    script: [
      { sp: "A", jp: "すみません。市役所へ 行きたいです。どうやって 行きますか。", vi: "Xin lỗi. Tôi muốn đến tòa thị chính. Đi thế nào ạ?" },
      { sp: "B", jp: "市役所ですか。この 道を まっすぐ 行くと、信号が あります。", vi: "Tòa thị chính à? Đi thẳng đường này thì có đèn giao thông." },
      { sp: "A", jp: "はい。", vi: "Vâng." },
      { sp: "B", jp: "信号を 渡って、一つ目の 角を 右へ 曲がると、左に 駐車場が あります。", vi: "Qua đèn, rẽ phải ở góc thứ nhất thì bên trái có bãi đỗ xe." },
      { sp: "B", jp: "市役所は 駐車場の 隣です。", vi: "Tòa thị chính ở cạnh bãi đỗ xe." },
      { sp: "A", jp: "歩いて どのくらい かかりますか。", vi: "Đi bộ mất bao lâu ạ?" },
      { sp: "B", jp: "10分ぐらいです。", vi: "Khoảng 10 phút." }
    ],
    questions: [
      { q: "イーさんは どこへ 行きたいですか。", o: ["市役所", "駐車場", "駅", "交番"], a: 0, ev: [0], tip: "Đích đến ở câu đầu." },
      { q: "信号を 渡って、どう しますか。", o: ["一つ目の 角を 右へ 曲がります", "二つ目の 角を 右へ 曲がります", "一つ目の 角を 左へ 曲がります", "まっすぐ 行きます"], a: 0, ev: [3], tip: "Ghi cặp “số thứ tự + hướng”: 一つ目・右." },
      { q: "市役所は どこに ありますか。", o: ["駐車場の 隣", "駐車場の 前", "信号の 前", "角の 右"], a: 0, ev: [4], tip: "駐車場 chỉ là mốc; câu kết luận vị trí: 隣." },
      { q: "市役所まで 歩いて どのくらい かかりますか。", o: ["10分ぐらい", "5分ぐらい", "15分ぐらい", "30分ぐらい"], a: 0, ev: [6], tip: "～ぐらい = khoảng." }
    ]
  },
  kanji: [
    { c: "道", hv: "ĐẠO", on: "ドウ", kun: "みち", vi: "đường", words: [["道", "みち", "đường"], ["北海道", "ほっかいどう", "Hokkaido"], ["書道", "しょどう", "thư pháp"]], use: "Bộ 辶 + 首." },
    { c: "角", hv: "GIÁC", on: "カク", kun: "かど・つの", vi: "góc; sừng", words: [["角", "かど", "góc đường"], ["四角", "しかく", "hình vuông"]], use: "Góc đường đọc かど." },
    { c: "橋", hv: "KIỀU", on: "キョウ", kun: "はし", vi: "cầu", words: [["橋", "はし", "cầu"], ["鉄橋", "てっきょう", "cầu sắt"]], use: "Bộ 木. Phân biệt với 箸 (đũa) cùng âm はし." },
    { c: "歩", hv: "BỘ", on: "ホ", kun: "ある(く)", vi: "đi bộ", words: [["歩きます", "あるきます", "đi bộ"], ["歩いて", "あるいて", "đi bộ (đến)"], ["散歩", "さんぽ", "đi dạo"]], use: "止 (dừng) + 少: bước chân." },
    { c: "渡", hv: "ĐỘ", on: "ト", kun: "わた(る)", vi: "băng qua", words: [["渡ります", "わたります", "băng qua"]], use: "Bộ 氵: qua sông." },
    { c: "引", hv: "DẪN", on: "イン", kun: "ひ(く)", vi: "kéo", words: [["引きます", "ひきます", "kéo"], ["引っ越し", "ひっこし", "chuyển nhà"]], use: "弓 (cung) + nét dọc: kéo dây cung." },
    { c: "機", hv: "CƠ", on: "キ", kun: "はた", vi: "máy", words: [["機械", "きかい", "máy móc"], ["飛行機", "ひこうき", "máy bay"]], use: "Bộ 木." },
    { c: "械", hv: "GIỚI", on: "カイ", kun: "—", vi: "máy móc", words: [["機械", "きかい", "máy móc"]], use: "Hầu như chỉ gặp trong 機械." }
  ],
  grammarQuiz: [
    { q: "図書館で 本を（　）とき、カードが 要ります。", o: ["借りる", "借ります", "借りて", "借りない で"], a: 0, ex: "Trước とき: thể thông thường." },
    { q: "暇（　）とき、何を しますか。", o: ["な", "の", "だ", "で"], a: 0, ex: "な-adj + な + とき." },
    { q: "子ども（　）とき、よく 川で 遊びました。", o: ["の", "な", "で", "が"], a: 0, ex: "N + の + とき." },
    { q: "パリに 着いて から かばんを 買いました。= パリへ（　）とき、かばんを 買いました。", o: ["行った", "行く", "行かない", "行って"], a: 0, ex: "Hành động đã xong → Vた とき." },
    { q: "この つまみを 回す（　）、音が 大きく なります。", o: ["と", "とき", "から", "て"], a: 0, ex: "Hệ quả tất yếu (máy móc): Vる と." },
    { q: "Câu nào SAI?", o: ["駅に 着くと、電話して ください。", "右へ 曲がると、銀行が あります。", "この ボタンを 押すと、水が 出ます。", "春に なると、暖かく なります。"], a: 0, ex: "Sau ～と không dùng nhờ vả (～て ください)." },
    { q: "橋（　）渡ります。", o: ["を", "に", "で", "へ"], a: 0, ex: "Nơi đi qua → を." },
    { q: "道を 渡る とき、車（　）気を つけて ください。", o: ["に", "を", "が", "で"], a: 0, ex: "N に 気を つけます." },
    { q: "二つ（　）の 角を 左へ 曲がって ください。", o: ["目", "回", "番", "度"], a: 0, ex: "Thứ tự: ～目." }
  ]
};
