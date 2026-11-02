// Bài 27 — nội dung tự biên soạn theo phạm vi bài 27 Minna no Nihongo.
window.LESSONS[27] = {
  id: 27,
  title: "何でも 作れるんですね",
  titleVi: "Cái gì anh cũng làm được nhỉ",
  vocab: [
    { w: "飼います", r: "かいます", vi: "nuôi (động vật)", t: "động từ nhóm I", ex: [["この アパートでは 犬を 飼えません。", "Ở căn hộ này không nuôi chó được."]], note: "Thể khả năng: 飼える" },
    { w: "建てます", r: "たてます", vi: "xây", t: "động từ nhóm II", ex: [["いつか 自分の 家を 建てたいです。", "Một ngày nào đó tôi muốn xây nhà riêng."]], note: "Thể khả năng: 建てられる" },
    { w: "走ります［道を～］", r: "はしります", vi: "chạy (trên đường)", t: "động từ nhóm I", ex: [["100メートル 10秒で 走れます。", "Tôi chạy được 100 mét trong 10 giây."]], note: "Thể khả năng: 走れる" },
    { w: "取ります［休みを～］", r: "とります", vi: "xin (nghỉ phép)", t: "động từ nhóm I", ex: [["夏休みは 1週間しか 取れません。", "Nghỉ hè tôi chỉ xin được 1 tuần."]], note: "Thể khả năng: 取れる" },
    { w: "見えます［山が～］", r: "みえます", vi: "nhìn thấy được (núi)", t: "động từ nhóm II", ex: [["窓から 山が 見えます。", "Từ cửa sổ nhìn thấy núi."]] },
    { w: "聞こえます［音が～］", r: "きこえます", vi: "nghe thấy được (âm thanh)", t: "động từ nhóm II", ex: [["鳥の 声が 聞こえます。", "Nghe thấy tiếng chim."]] },
    { w: "できます［空港が～］", r: "できます", vi: "được xây xong, hình thành", t: "động từ nhóm II", ex: [["駅の 前に 大きい スーパーが できました。", "Trước ga mới có siêu thị lớn."]] },
    { w: "開きます［教室を～］", r: "ひらきます", vi: "mở (lớp học)", t: "động từ nhóm I", ex: [["料理教室を 開きたいです。", "Tôi muốn mở lớp nấu ăn."]] },
    { w: "ペット", r: "ペット", vi: "thú cưng", t: "danh từ", ex: [["ペットを 飼う ことが できますか。", "Có nuôi thú cưng được không?"]] },
    { w: "鳥", r: "とり", vi: "chim", t: "danh từ", ex: [["鳥の 声が 聞こえます。", "Nghe thấy tiếng chim."]] },
    { w: "声", r: "こえ", vi: "giọng, tiếng (người, vật)", t: "danh từ", ex: [["先生の 声が よく 聞こえません。", "Không nghe rõ giọng thầy."]] },
    { w: "波", r: "なみ", vi: "sóng", t: "danh từ", ex: [["波の 音が 聞こえます。", "Nghe thấy tiếng sóng."]] },
    { w: "花火", r: "はなび", vi: "pháo hoa", t: "danh từ", ex: [["ここから 花火が 見えます。", "Từ đây thấy pháo hoa."]] },
    { w: "景色", r: "けしき", vi: "phong cảnh", t: "danh từ", ex: [["景色が きれいですね。", "Phong cảnh đẹp nhỉ."]] },
    { w: "昼間", r: "ひるま", vi: "ban ngày", t: "danh từ", ex: [["昼間は 静かです。", "Ban ngày yên tĩnh."]] },
    { w: "昔", r: "むかし", vi: "ngày xưa", t: "danh từ", ex: [["昔は ここから 海が 見えました。", "Ngày xưa từ đây nhìn thấy biển."]] },
    { w: "道具", r: "どうぐ", vi: "dụng cụ", t: "danh từ", ex: [["この 道具で 何でも 作れます。", "Với dụng cụ này làm được mọi thứ."]] },
    { w: "自動販売機", r: "じどうはんばいき", vi: "máy bán hàng tự động", t: "danh từ", ex: [["自動販売機で 切符が 買えます。", "Có thể mua vé ở máy bán tự động."]] },
    { w: "通信販売", r: "つうしんはんばい", vi: "bán hàng qua mạng / bưu điện", t: "danh từ", ex: [["通信販売で 何でも 買えます。", "Mua bán qua mạng thì mua được mọi thứ."]] },
    { w: "クリーニング", r: "クリーニング", vi: "giặt là, tiệm giặt", t: "danh từ", ex: [["クリーニングに 出します。", "Mang đi tiệm giặt."]] },
    { w: "マンション", r: "マンション", vi: "chung cư cao cấp", t: "danh từ", ex: [["駅の 近くに マンションが できました。", "Gần ga mới có chung cư."]] },
    { w: "台所", r: "だいどころ", vi: "nhà bếp", t: "danh từ", ex: [["台所が 広いですね。", "Bếp rộng nhỉ."]] },
    { w: "～教室", r: "きょうしつ", vi: "lớp học ~", t: "hậu tố", ex: [["料理教室を 開きました。", "Tôi đã mở lớp nấu ăn."]] },
    { w: "パーティールーム", r: "パーティールーム", vi: "phòng tiệc", t: "danh từ", ex: [["パーティールームが 使えますか。", "Có dùng được phòng tiệc không?"]] },
    { w: "～後", r: "ご", vi: "~ sau", t: "hậu tố", ex: [["2週間後に できます。", "2 tuần sau sẽ xong."]] },
    { w: "～しか", r: "しか", vi: "chỉ ~ (đi với phủ định)", t: "trợ từ", ex: [["ひらがなしか 書けません。", "Tôi chỉ viết được hiragana."]] },
    { w: "ほかの", r: "ほかの", vi: "~ khác", t: "liên thể từ", ex: [["ほかの 人は 来ませんでした。", "Những người khác đã không đến."]] },
    { w: "はっきり", r: "はっきり", vi: "rõ ràng", t: "phó từ", ex: [["はっきり 見えません。", "Không nhìn rõ."]] },
    { w: "ほとんど", r: "ほとんど", vi: "hầu hết, hầu như", t: "phó từ", ex: [["ほとんど 毎日 料理を 作ります。", "Hầu như ngày nào tôi cũng nấu ăn."]] },
    { w: "本棚", r: "ほんだな", vi: "giá sách", t: "danh từ", ex: [["本棚を 自分で 作りました。", "Tôi tự đóng giá sách."]] },
    { w: "夢", r: "ゆめ", vi: "giấc mơ, ước mơ", t: "danh từ", ex: [["私の 夢は 自分の 家を 建てる ことです。", "Ước mơ của tôi là xây nhà riêng."]] },
    { w: "いつか", r: "いつか", vi: "một ngày nào đó", t: "phó từ", ex: [["いつか 富士山に 登りたいです。", "Một ngày nào đó tôi muốn leo Phú Sĩ."]] },
    { w: "すばらしい", r: "すばらしい", vi: "tuyệt vời", t: "tính từ い", ex: [["すばらしい 景色ですね。", "Phong cảnh tuyệt vời nhỉ."]] },
    { w: "大好き［な］", r: "だいすき", vi: "rất thích", t: "tính từ な", ex: [["子どもたちは この 漫画が 大好きです。", "Bọn trẻ rất thích bộ truyện tranh này."]] },
    { w: "漫画", r: "まんが", vi: "truyện tranh", t: "danh từ", ex: [["日本の 漫画は おもしろいです。", "Truyện tranh Nhật hay."]] },
    { w: "空", r: "そら", vi: "bầu trời", t: "danh từ", ex: [["空を 飛ぶ ことが できたら…", "Giá mà bay được trên trời…"]] },
    { w: "飛びます", r: "とびます", vi: "bay", t: "động từ nhóm I", ex: [["鳥は 空を 飛べます。", "Chim bay được trên trời."]], note: "Thể khả năng: 飛べる" },
    { w: "自分", r: "じぶん", vi: "bản thân", t: "danh từ", ex: [["自分で 作れます。", "Tự mình làm được."]] },
    { w: "将来", r: "しょうらい", vi: "tương lai", t: "danh từ", ex: [["将来 何に なりたいですか。", "Tương lai bạn muốn làm nghề gì?"]] }
  ],
  grammar: [
    {
      pattern: "Thể khả năng（可能形）",
      func: "Động từ diễn tả năng lực hoặc khả năng: “có thể V”. Tương đương ～ことが できます (bài 18) nhưng ngắn gọn hơn.",
      explain: ["Nhóm I: đổi âm hàng い trước ます sang hàng え + ます: 書きます → 書けます, 飲みます → 飲めます, 買います → 買えます.", "Nhóm II: bỏ ます + られます: 食べます → 食べられます, 見ます → 見られます.", "Nhóm III: します → できます, 来ます → 来られます (こられます).", "Thể khả năng chia như động từ nhóm II: 書けない, 書けた, 書けて…"],
      parts: [["Nhóm I", "い段 → え段 + ます"], ["Nhóm II", "～られます"], ["Nhóm III", "できます / こられます"]],
      usage: [{ rule: "Ví dụ.", ex: [["話します → 話せます、泳ぎます → 泳げます、待ちます → 待てます", "nói được, bơi được, đợi được"], ["寝ます → 寝られます、来ます → 来られます", "ngủ được, đến được"]] }],
      notes: []
    },
    {
      pattern: "Câu với động từ khả năng: N が V（khả năng）",
      func: "Đối tượng của động từ khả năng thường chuyển từ を sang が. Các trợ từ khác giữ nguyên.",
      parts: [["N を V → N が V（khả năng）", "日本語を 話します → 日本語が 話せます"]],
      usage: [
        { rule: "Năng lực.", ex: [["ミラーさんは 日本語が 話せます。", "Anh Miller nói được tiếng Nhật."], ["私は 漢字が 読めません。", "Tôi không đọc được chữ Hán."]] },
        { rule: "Khả năng do hoàn cảnh.", ex: [["この 自動販売機で 切符が 買えます。", "Có thể mua vé ở máy này."], ["ここでは ペットが 飼えません。", "Ở đây không nuôi thú cưng được."]] }
      ],
      notes: ["Trợ từ khác giữ nguyên: 一人で 東京へ 行けます."]
    },
    {
      pattern: "見えます ／ 聞こえます",
      func: "Diễn tả việc tự nhiên nhìn thấy / nghe thấy (không do ý chí), đối tượng đi với が. Khác với 見られます / 聞けます (có thể xem / nghe nếu muốn, do hoàn cảnh cho phép).",
      parts: [["N が 見えます", "thấy được (tự nhiên lọt vào mắt)"], ["N が 聞こえます", "nghe được (tự nhiên lọt vào tai)"]],
      usage: [
        { rule: "Tự nhiên thấy / nghe.", ex: [["新幹線から 富士山が 見えます。", "Từ Shinkansen nhìn thấy núi Phú Sĩ."], ["ラジオの 音が 聞こえます。", "Nghe thấy tiếng radio."]] },
        { rule: "So sánh với khả năng có chủ ý.", ex: [["新宿で 今 黒澤の 映画が 見られます。", "Ở Shinjuku hiện có thể xem phim của Kurosawa."], ["電話で 天気予報が 聞けます。", "Có thể nghe dự báo thời tiết qua điện thoại."]] }
      ],
      notes: []
    },
    {
      pattern: "できます（hình thành, hoàn thành）",
      func: "Ngoài nghĩa “có thể”, できます còn nghĩa “được xây dựng xong, hình thành, làm xong”.",
      parts: [["N が できます", "N được hoàn thành / mở ra"]],
      usage: [{ rule: "Hình thành.", ex: [["駅の 前に 大きい スーパーが できました。", "Trước ga đã mở siêu thị lớn."], ["時計の 修理は いつ できますか。", "Bao giờ sửa đồng hồ xong?"]] }],
      notes: []
    },
    {
      pattern: "は／も thay thế が・を để đối chiếu",
      func: "Khi đối chiếu hai đối tượng, dùng は thay が/を; khi thêm cái cùng tính chất dùng も.",
      parts: [["N1 は ～が、N2 は ～", "đối chiếu"], ["N も", "cũng"]],
      usage: [{ rule: "Đối chiếu khả năng.", ex: [["ひらがなは 書けますが、漢字は 書けません。", "Hiragana thì viết được nhưng chữ Hán thì không."], ["富士山も 見えます。", "Cũng thấy được núi Phú Sĩ."]] }],
      notes: []
    },
    {
      pattern: "～しか ＋ phủ định",
      func: "“Chỉ …”: nhấn mạnh sự ít ỏi / không đủ, luôn đi với động từ phủ định.",
      explain: ["Khác だけ (bài 11): だけ trung tính; しか ～ない mang sắc thái “chỉ có … thôi (ít quá)”."],
      parts: [["N しか ～ません", ""]],
      usage: [{ rule: "Chỉ có.", ex: [["ローマ字しか 書けません。", "Tôi chỉ viết được chữ La-tinh."], ["夏休みは 1週間しか 取れません。", "Nghỉ hè chỉ xin được 1 tuần."]] }],
      notes: ["しか thay thế が/を: ✗ ローマ字しかを."]
    }
  ],
  reading: {
    title: "新しい マンション",
    titleVi: "Chung cư mới",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–27.",
    paragraphs: [
      {
        s: [
          { t: "去年|きょねん|năm ngoái / 、||, / 駅|えき|ga / の||(của) / 近く|ちかく|gần / に||ở / 新しい|あたらしい|mới / マンション||chung cư / が||(chủ thể) / できました||đã xây xong / 。||", vi: "Năm ngoái gần ga có chung cư mới xây xong." },
          { t: "私|わたし|tôi / の||(của) / 部屋|へや|phòng / は||(chủ đề) / 10階|じゅっかい|tầng 10 / です||là / 。||", vi: "Phòng tôi ở tầng 10." },
          { t: "窓|まど|cửa sổ / から||từ / 海|うみ|biển / が||(chủ thể) / 見えます|みえます|nhìn thấy / 。||", vi: "Từ cửa sổ nhìn thấy biển." },
          { t: "夜|よる|ban đêm / は||(chủ đề) / 波|なみ|sóng / の||(của) / 音|おと|tiếng / も||cũng / 聞こえます|きこえます|nghe thấy / 。||", vi: "Ban đêm cũng nghe thấy tiếng sóng." }
        ],
        vi: "Đoạn 1: Chung cư mới gần ga; phòng tầng 10; thấy biển, đêm nghe tiếng sóng."
      },
      {
        s: [
          { t: "この||này / マンション||chung cư / で||ở / は||(thì) / 犬|いぬ|chó / や||và / 猫|ねこ|mèo / が||(đối tượng) / 飼えません|かえません|không nuôi được / 。||", vi: "Ở chung cư này không nuôi được chó mèo." },
          { t: "でも||nhưng / 、||, / 小さい|ちいさい|nhỏ / 鳥|とり|chim / は||(đối chiếu) / 飼えます|かえます|nuôi được / 。||", vi: "Nhưng chim nhỏ thì nuôi được." },
          { t: "パーティールーム||phòng tiệc / も||cũng / あります||có / が||nhưng / 、||, / 土曜日|どようび|thứ bảy / しか||chỉ / 使えません|つかえません|không dùng được / 。||", vi: "Cũng có phòng tiệc nhưng chỉ dùng được vào thứ bảy." }
        ],
        vi: "Đoạn 2: Không nuôi chó mèo, chim nhỏ thì được; phòng tiệc chỉ dùng được thứ bảy."
      }
    ],
    summary: "Toàn bài: mô tả chung cư bằng 見えます / 聞こえます, thể khả năng (飼えます / 飼えません, 使えません), đối chiếu は và しか ～ない. Mẹo: しか đi với phủ định nhưng nghĩa là KHẲNG ĐỊNH một phạm vi nhỏ — 土曜日しか 使えません = chỉ dùng được thứ bảy.",
    questions: [
      { q: "部屋の 窓から 何が 見えますか。", o: ["海", "山", "駅", "花火"], a: 0, ev: [0, 2], tip: "N が 見えます: thứ nhìn thấy đứng trước が." },
      { q: "夜 何が 聞こえますか。", o: ["波の 音", "鳥の 声", "電車の 音", "ラジオ"], a: 0, ev: [0, 3], tip: "も (cũng) nối với câu trước; đối tượng nghe thấy: 波の 音." },
      { q: "この マンションで 飼える ペットは どれですか。", o: ["小さい 鳥", "犬", "猫", "何も 飼えない"], a: 0, ev: [1, 1], tip: "は ở câu 2 đối chiếu với 犬や猫 ở câu 1." },
      { q: "パーティールームは いつ 使えますか。", o: ["土曜日だけ", "土曜日以外", "毎日", "日曜日だけ"], a: 0, ev: [1, 2], tip: "～しか 使えません = chỉ dùng được ~." }
    ]
  },
  listening: {
    title: "何でも 作れるんですね",
    titleVi: "Cái gì cũng làm được nhỉ",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "鈴木", pitch: 0.85 }, B: { name: "ミラー", pitch: 0.75 } },
    script: [
      { sp: "A", jp: "明るくて、いい 部屋ですね。", vi: "Phòng sáng và đẹp nhỉ." },
      { sp: "B", jp: "ええ。天気が いい 日には 海が 見えるんです。", vi: "Vâng. Ngày đẹp trời thì nhìn thấy biển." },
      { sp: "A", jp: "この 本棚、すてきですね。どこで 買ったんですか。", vi: "Cái giá sách này đẹp nhỉ. Anh mua ở đâu vậy?" },
      { sp: "B", jp: "自分で 作ったんです。", vi: "Tôi tự đóng đấy." },
      { sp: "A", jp: "へえ、何でも 作れるんですね。", vi: "Ồ, cái gì anh cũng làm được nhỉ." },
      { sp: "B", jp: "いいえ、本棚しか 作れません。でも、いつか 自分の 家を 建てたいです。", vi: "Không, tôi chỉ làm được giá sách thôi. Nhưng một ngày nào đó tôi muốn xây nhà mình." }
    ],
    questions: [
      { q: "ミラーさんの 部屋から いつ 海が 見えますか。", o: ["天気が いい 日", "毎日", "夜", "雨の 日"], a: 0, ev: [1], tip: "Điều kiện thời gian đứng trước には." },
      { q: "本棚は どう しましたか。", o: ["自分で 作りました", "デパートで 買いました", "友達に もらいました", "通信販売で 買いました"], a: 0, ev: [3], tip: "Câu giải thích bằng ～んです ngay sau câu hỏi どこで 買ったんですか." },
      { q: "ミラーさんは 何が 作れますか。", o: ["本棚だけ", "何でも", "家", "台所"], a: 0, ev: [5], tip: "～しか 作れません = chỉ làm được ~. Bác bỏ lời khen 何でも." },
      { q: "ミラーさんの 夢は 何ですか。", o: ["自分の 家を 建てる こと", "本棚を 売る こと", "海の 近くに 住む こと", "大工に なる こと"], a: 0, ev: [5], tip: "いつか ～たいです = ước mơ một ngày nào đó." }
    ]
  },
  kanji: [
    { c: "飼", hv: "TỰ", on: "シ", kun: "か(う)", vi: "nuôi", words: [["飼います", "かいます", "nuôi"], ["飼育", "しいく", "chăn nuôi"]], use: "Bộ 食. Phân biệt 飼う (nuôi) với 買う (mua) cùng âm." },
    { c: "建", hv: "KIẾN", on: "ケン", kun: "た(てる)", vi: "xây", words: [["建てます", "たてます", "xây"], ["建物", "たてもの", "tòa nhà"]], use: "Bộ 廴 bao trái – dưới." },
    { c: "走", hv: "TẨU", on: "ソウ", kun: "はし(る)", vi: "chạy", words: [["走ります", "はしります", "chạy"]], use: "土 + 足 biến thể." },
    { c: "鳥", hv: "ĐIỂU", on: "チョウ", kun: "とり", vi: "chim", words: [["鳥", "とり", "chim"], ["焼き鳥", "やきとり", "gà nướng xiên"]], use: "Phân biệt với 島 (đảo)." },
    { c: "声", hv: "THANH", on: "セイ", kun: "こえ", vi: "giọng, tiếng", words: [["声", "こえ", "giọng"], ["音声", "おんせい", "âm thanh"]], use: "Tiếng người/động vật dùng 声; tiếng vật vô tri dùng 音." },
    { c: "夢", hv: "MỘNG", on: "ム", kun: "ゆめ", vi: "giấc mơ", words: [["夢", "ゆめ", "giấc mơ"]], use: "Bộ 夕 (buổi tối) ở dưới." },
    { c: "空", hv: "KHÔNG", on: "クウ", kun: "そら・あ(く)", vi: "bầu trời; trống", words: [["空", "そら", "bầu trời"], ["空港", "くうこう", "sân bay"]], use: "Từ ghép đọc クウ." },
    { c: "自", hv: "TỰ", on: "ジ・シ", kun: "みずか(ら)", vi: "tự mình", words: [["自分", "じぶん", "bản thân"], ["自転車", "じてんしゃ", "xe đạp"], ["自動販売機", "じどうはんばいき", "máy bán tự động"]], use: "Hầu như đọc ジ." }
  ],
  grammarQuiz: [
    { q: "「話します」の 可能形は？", o: ["話せます", "話られます", "話させます", "話されます"], a: 0, ex: "Nhóm I: し → せ + ます." },
    { q: "「食べます」の 可能形は？", o: ["食べられます", "食べれます", "食べます", "食べさせます"], a: 0, ex: "Nhóm II: ～られます (食べれます là văn nói không chuẩn)." },
    { q: "「来ます」の 可能形は？", o: ["来られます（こられます）", "来れます（きれます）", "来えます", "できます"], a: 0, ex: "来ます → こられます." },
    { q: "ミラーさんは 日本語（　）話せます。", o: ["が", "を", "に", "で"], a: 0, ex: "Với động từ khả năng, đối tượng thường dùng が." },
    { q: "窓から 富士山が（　）。(tự nhiên nhìn thấy)", o: ["見えます", "見られます", "見ます", "見せます"], a: 0, ex: "Tự nhiên nhìn thấy → 見えます." },
    { q: "電話で 天気予報が（　）。(có thể nghe nếu gọi)", o: ["聞けます", "聞こえます", "聞きます", "聞かせます"], a: 0, ex: "Khả năng do hoàn cảnh, có chủ ý → 聞けます." },
    { q: "駅の 前に スーパーが（　）。(mới mở)", o: ["できました", "見えました", "ありました", "作れました"], a: 0, ex: "できます = được xây xong, hình thành." },
    { q: "ひらがな（　）書けません。(chỉ hiragana)", o: ["しか", "だけ", "も", "は"], a: 0, ex: "しか + phủ định." },
    { q: "ひらがなは 書けますが、漢字（　）書けません。", o: ["は", "が", "も", "しか"], a: 0, ex: "Đối chiếu → は." }
  ]
};
