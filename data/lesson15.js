// Bài 15 — nội dung tự biên soạn theo phạm vi bài 15 Minna no Nihongo.
window.LESSONS[15] = {
  id: 15,
  title: "ご家族は？",
  titleVi: "Gia đình anh thế nào?",
  vocab: [
    { w: "立ちます", r: "たちます", vi: "đứng", t: "động từ nhóm I", ex: [["ここに 立っては いけません。", "Không được đứng ở đây."]], note: "Thể て: 立って" },
    { w: "座ります", r: "すわります", vi: "ngồi", t: "động từ nhóm I", ex: [["ここに 座っても いいですか。", "Tôi ngồi đây được không?"]], note: "Thể て: 座って" },
    { w: "使います", r: "つかいます", vi: "dùng, sử dụng", t: "động từ nhóm I", ex: [["この パソコンを 使っても いいですか。", "Tôi dùng máy tính này được không?"]], note: "Thể て: 使って" },
    { w: "置きます", r: "おきます", vi: "đặt, để", t: "động từ nhóm I", ex: [["ここに 荷物を 置いても いいですか。", "Tôi để hành lý ở đây được không?"]], note: "Thể て: 置いて" },
    { w: "作ります／造ります", r: "つくります", vi: "làm, chế tạo", t: "động từ nhóm I", ex: [["この 会社は 車を 作って います。", "Công ty này sản xuất ô tô."]], note: "Thể て: 作って" },
    { w: "売ります", r: "うります", vi: "bán", t: "động từ nhóm I", ex: [["あの 店で 切手を 売って います。", "Cửa hàng kia có bán tem."]], note: "Thể て: 売って" },
    { w: "知ります", r: "しります", vi: "biết", t: "động từ nhóm I", ex: [["山田さんの 住所を 知って いますか。", "Bạn có biết địa chỉ anh Yamada không?"]], note: "Thể て: 知って. Phủ định: 知りません (không dùng 知って いません)." },
    { w: "住みます", r: "すみます", vi: "sống, cư trú", t: "động từ nhóm I", ex: [["大阪に 住んで います。", "Tôi sống ở Osaka."]], note: "Thể て: 住んで" },
    { w: "研究します", r: "けんきゅうします", vi: "nghiên cứu", t: "động từ nhóm III", ex: [["大学で 経済を 研究して います。", "Tôi nghiên cứu kinh tế ở đại học."]], note: "Thể て: 研究して" },
    { w: "資料", r: "しりょう", vi: "tài liệu", t: "danh từ", ex: [["この 資料を 使っても いいですか。", "Tôi dùng tài liệu này được không?"]] },
    { w: "カタログ", r: "カタログ", vi: "ca-ta-lô", t: "danh từ", ex: [["カタログを もらっても いいですか。", "Tôi lấy ca-ta-lô được không?"]] },
    { w: "時刻表", r: "じこくひょう", vi: "bảng giờ tàu xe", t: "danh từ", ex: [["時刻表を 見ても いいですか。", "Tôi xem bảng giờ tàu được không?"]] },
    { w: "服", r: "ふく", vi: "quần áo", t: "danh từ", ex: [["この 店は 子どもの 服を 売って います。", "Cửa hàng này bán quần áo trẻ em."]] },
    { w: "製品", r: "せいひん", vi: "sản phẩm", t: "danh từ", ex: [["この 製品は 日本で 作って います。", "Sản phẩm này được làm ở Nhật."]] },
    { w: "ソフト", r: "ソフト", vi: "phần mềm", t: "danh từ", ex: [["コンピューターの ソフトを 作って います。", "Tôi làm phần mềm máy tính."]] },
    { w: "電子辞書", r: "でんしじしょ", vi: "từ điển điện tử", t: "danh từ", ex: [["試験で 電子辞書を 使っては いけません。", "Trong giờ thi không được dùng từ điển điện tử."]] },
    { w: "高校", r: "こうこう", vi: "trường cấp 3", t: "danh từ", ex: [["妹は 高校で 勉強して います。", "Em gái tôi đang học cấp 3."]] },
    { w: "歯医者", r: "はいしゃ", vi: "nha sĩ", t: "danh từ", ex: [["兄は 歯医者です。", "Anh tôi là nha sĩ."]] },
    { w: "床屋", r: "とこや", vi: "tiệm cắt tóc", t: "danh từ", ex: [["駅の 前に 床屋が あります。", "Trước ga có tiệm cắt tóc."]] },
    { w: "プレイガイド", r: "プレイガイド", vi: "quầy bán vé (sự kiện)", t: "danh từ", ex: [["プレイガイドで チケットを 売って います。", "Quầy vé có bán vé."]] },
    { w: "独身", r: "どくしん", vi: "độc thân", t: "danh từ", ex: [["私は 独身です。", "Tôi độc thân."]] },
    { w: "専門", r: "せんもん", vi: "chuyên môn", t: "danh từ", ex: [["専門は 何ですか。", "Chuyên môn của bạn là gì?"]] },
    { w: "特に", r: "とくに", vi: "đặc biệt là", t: "phó từ", ex: [["日本料理が 好きです。特に すしが 好きです。", "Tôi thích món Nhật. Đặc biệt là sushi."]] },
    { w: "思い出します", r: "おもいだします", vi: "nhớ lại", t: "động từ nhóm I", ex: [["家族を 思い出します。", "Tôi nhớ đến gia đình."]] },
    { w: "ご家族", r: "ごかぞく", vi: "gia đình (người khác)", t: "danh từ", ex: [["ご家族は どちらに いますか。", "Gia đình anh ở đâu ạ?"]] },
    { w: "いらっしゃいます", r: "いらっしゃいます", vi: "có, ở (tôn kính của います)", t: "động từ", ex: [["ご家族は ニューヨークに いらっしゃいますか。", "Gia đình anh ở New York ạ?"]] },
    { w: "結婚します", r: "けっこんします", vi: "kết hôn", t: "động từ nhóm III", ex: [["姉は 結婚して います。", "Chị tôi đã kết hôn."]], note: "結婚して います = đã kết hôn (trạng thái hiện tại)." },
    { w: "～て いいですか", r: "ていいですか", vi: "… được không?", t: "cụm", ex: [["写真を 撮っても いいですか。", "Tôi chụp ảnh được không?"]] }
  ],
  grammar: [
    {
      pattern: "V て も いいです",
      func: "Cho phép: “làm V cũng được / được phép V”. Hỏi xin phép bằng ～ても いいですか.",
      explain: ["Trả lời đồng ý: ええ、いいですよ / どうぞ. Từ chối nhẹ: すみません、ちょっと…. Từ chối dứt khoát: いいえ、～ては いけません."],
      parts: [["Vて + も + いいです", "được phép"]],
      usage: [
        { rule: "Cho phép.", ex: [["写真を 撮っても いいです。", "Được phép chụp ảnh."]] },
        { rule: "Xin phép và trả lời.", ex: [["たばこを 吸っても いいですか。 ―― ええ、いいですよ。", "Tôi hút thuốc được không? — Vâng, được."], ["この 辞書を 借りても いいですか。 ―― すみません、ちょっと…。今 使って います。", "Tôi mượn từ điển này được không? — Xin lỗi, hơi… Tôi đang dùng."]] }
      ],
      notes: []
    },
    {
      pattern: "V て は いけません",
      func: "Cấm đoán: “không được V”. Thường dùng trong quy định, biển báo, hoặc người trên nói với người dưới.",
      explain: ["Với người trên, tránh nói thẳng ～ては いけません; dùng すみません、ちょっと… thay thế."],
      parts: [["Vて + は + いけません", "không được"]],
      usage: [
        { rule: "Quy định / cấm.", ex: [["ここで たばこを 吸っては いけません。", "Không được hút thuốc ở đây."], ["美術館で 写真を 撮っては いけません。", "Không được chụp ảnh trong bảo tàng."]] },
        { rule: "Trả lời phủ định câu xin phép.", ex: [["先生、ここで 遊んでも いいですか。 ―― いいえ、いけません。", "Thưa cô, chơi ở đây được không ạ? — Không, không được."]] }
      ],
      notes: []
    },
    {
      pattern: "V て います（trạng thái kết quả）",
      func: "Diễn tả trạng thái còn lưu lại do một hành động đã xảy ra trong quá khứ: kết hôn, biết, sống, mang, có…",
      explain: ["Nhóm động từ hay gặp: 結婚します, 知ります, 住みます, 持ちます. Ví dụ 結婚して います = (đã cưới và) đang ở trạng thái kết hôn, không phải “đang cưới”.", "知ります: khẳng định 知って います, phủ định 知りません (không nói 知って いません)."],
      parts: [["結婚して います", "đã kết hôn"], ["知って います / 知りません", "biết / không biết"], ["住んで います", "đang sống (ở)"], ["持って います", "có, đang có"]],
      usage: [
        { rule: "Trạng thái.", ex: [["私は 結婚して います。", "Tôi đã kết hôn."], ["私は 大阪に 住んで います。", "Tôi sống ở Osaka."], ["私は カメラを 持って います。", "Tôi có máy ảnh."]] },
        { rule: "知って います / 知りません.", ex: [["市役所の 電話番号を 知って いますか。 ―― はい、知って います。／ いいえ、知りません。", "Bạn có biết số điện thoại tòa thị chính không? — Có, tôi biết. / Không, tôi không biết."]] }
      ],
      notes: ["Nơi sống đi với に: 東京に 住んで います."]
    },
    {
      pattern: "V て います（hành động lâu dài, nghề nghiệp）",
      func: "Diễn tả hành động lặp lại lâu dài, công việc, nghề nghiệp, tình trạng của một người/tổ chức.",
      parts: [["N で 働いて います", "làm việc ở N"], ["N を 作って／売って います", "sản xuất / bán N"]],
      usage: [
        { rule: "Công việc, nghề nghiệp.", ex: [["IMCは コンピューターソフトを 作って います。", "IMC sản xuất phần mềm máy tính."], ["スーパーで ナンプラーを 売って います。", "Siêu thị có bán nước mắm Thái."]] },
        { rule: "Làm ở đâu / học ở đâu.", ex: [["ミラーさんは IMCで 働いて います。", "Anh Miller làm việc ở IMC."], ["妹は 大学で 勉強して います。", "Em gái tôi đang học đại học."]] }
      ],
      notes: []
    }
  ],
  reading: {
    title: "私の 家族",
    titleVi: "Gia đình tôi",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–15.",
    paragraphs: [
      {
        s: [
          { t: "私|わたし|tôi / の||(của) / 家族|かぞく|gia đình / は||(chủ đề) / ハノイ||Hà Nội / に||ở / 住んで|すんで|sống / います||(trạng thái) / 。||", vi: "Gia đình tôi sống ở Hà Nội." },
          { t: "父|ちち|bố / は||(chủ đề) / 銀行|ぎんこう|ngân hàng / で||ở / 働いて|はたらいて|làm việc / います||(lâu dài) / 。||", vi: "Bố tôi làm việc ở ngân hàng." },
          { t: "母|はは|mẹ / は||(chủ đề) / 高校|こうこう|trường cấp 3 / で||ở / 英語|えいご|tiếng Anh / を||(tân ngữ) / 教えて|おしえて|dạy / います||(lâu dài) / 。||", vi: "Mẹ tôi dạy tiếng Anh ở trường cấp 3." }
        ],
        vi: "Đoạn 1: Gia đình sống ở Hà Nội; bố làm ngân hàng; mẹ dạy tiếng Anh ở trường cấp 3."
      },
      {
        s: [
          { t: "姉|あね|chị / は||(chủ đề) / 結婚して|けっこんして|kết hôn / います||(trạng thái) / 。||", vi: "Chị tôi đã lập gia đình." },
          { t: "東京|とうきょう|Tokyo / に||ở / 住んで|すんで|sống / います||(trạng thái) / 。||", vi: "Chị sống ở Tokyo." },
          { t: "姉|あね|chị / の||(của) / 会社|かいしゃ|công ty / は||(chủ đề) / 車|くるま|ô tô / の||(của) / 製品|せいひん|sản phẩm / を||(tân ngữ) / 作って|つくって|sản xuất / います||(lâu dài) / 。||", vi: "Công ty của chị sản xuất các sản phẩm cho ô tô." }
        ],
        vi: "Đoạn 2: Chị gái đã kết hôn, sống ở Tokyo, làm ở công ty sản xuất linh kiện ô tô."
      },
      {
        s: [
          { t: "私|わたし|tôi / は||(chủ đề) / 独身|どくしん|độc thân / です||là / 。||", vi: "Tôi độc thân." },
          { t: "大阪|おおさか|Osaka / の||(của) / 大学|だいがく|đại học / で||ở / 経済|けいざい|kinh tế / を||(tân ngữ) / 研究して|けんきゅうして|nghiên cứu / います||(lâu dài) / 。||", vi: "Tôi nghiên cứu kinh tế ở một trường đại học tại Osaka." },
          { t: "大学|だいがく|đại học / の||(của) / 図書館|としょかん|thư viện / で||ở / 写真|しゃしん|ảnh / を||(tân ngữ) / 撮って|とって|chụp / は||(nhấn) / いけません||không được / 。||", vi: "Ở thư viện trường không được chụp ảnh." },
          { t: "でも||nhưng / 、||, / パソコン||máy tính / を||(tân ngữ) / 使って|つかって|dùng / も||(cũng) / いいです||được / 。||", vi: "Nhưng được dùng máy tính." }
        ],
        vi: "Đoạn 3: Tôi độc thân, nghiên cứu kinh tế ở Osaka; thư viện trường cấm chụp ảnh nhưng được dùng máy tính."
      }
    ],
    summary: "Toàn bài: giới thiệu nơi sống, công việc và tình trạng hôn nhân của các thành viên (～て います chỉ trạng thái / công việc), và quy định ở thư viện (～ても いいです / ～ては いけません). Mẹo: câu hỏi “ai làm gì ở đâu” – ghép đúng chủ đề は với câu theo sau, vì chủ ngữ hay bị lược.",
    questions: [
      { q: "お母さんは 何を して いますか。", o: ["高校で 英語を 教えて います", "銀行で 働いて います", "車を 作って います", "経済を 研究して います"], a: 0, ev: [0, 2], tip: "Tìm câu bắt đầu bằng 母は. Các đáp án khác là công việc của người khác trong bài." },
      { q: "お姉さんは どこに 住んで いますか。", o: ["東京", "ハノイ", "大阪", "京都"], a: 0, ev: [1, 1], tip: "Câu 2 đoạn 2 lược chủ ngữ — vẫn là 姉 (chủ đề của câu trước)." },
      { q: "この 人は 結婚して いますか。", o: ["いいえ、独身です", "はい、結婚して います", "来年 結婚します", "わかりません"], a: 0, ev: [2, 0], tip: "結婚して います ở đoạn 2 nói về chị; người viết là 独身." },
      { q: "大学の 図書館で 何を しても いいですか。", o: ["パソコンを 使う", "写真を 撮る", "たばこを 吸う", "何も しては いけない"], a: 0, ev: [2, 3], tip: "～ても いいです = được phép; ～ては いけません = cấm. Hai câu cuối đối lập nhau bằng でも." }
    ]
  },
  listening: {
    title: "ご家族は？",
    titleVi: "Gia đình anh thế nào?",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "木村", pitch: 1.3 }, B: { name: "ミラー", pitch: 0.8 } },
    script: [
      { sp: "A", jp: "ミラーさん、この 写真を 見ても いいですか。", vi: "Anh Miller, tôi xem bức ảnh này được không?" },
      { sp: "B", jp: "ええ、どうぞ。私の 家族です。", vi: "Vâng, xin mời. Là gia đình tôi." },
      { sp: "A", jp: "ご家族は ニューヨークに いらっしゃいますか。", vi: "Gia đình anh ở New York ạ?" },
      { sp: "B", jp: "いいえ、両親は ボストンに 住んで います。", vi: "Không, bố mẹ tôi sống ở Boston." },
      { sp: "A", jp: "この 方は？", vi: "Còn vị này?" },
      { sp: "B", jp: "兄です。兄は 結婚して います。病院で 働いて います。", vi: "Là anh trai tôi. Anh tôi đã kết hôn. Anh làm việc ở bệnh viện." },
      { sp: "A", jp: "ミラーさんは？", vi: "Còn anh Miller?" },
      { sp: "B", jp: "私は まだ 独身です。", vi: "Tôi vẫn còn độc thân." }
    ],
    questions: [
      { q: "ミラーさんの 両親は どこに 住んで いますか。", o: ["ボストン", "ニューヨーク", "大阪", "東京"], a: 0, ev: [3], tip: "いいえ phủ định ニューヨーク; thông tin đúng nằm ngay sau." },
      { q: "お兄さんは どこで 働いて いますか。", o: ["病院", "銀行", "大学", "IMC"], a: 0, ev: [5], tip: "N で 働いて います: nơi làm việc đứng trước で." },
      { q: "お兄さんは 結婚して いますか。", o: ["はい、結婚して います", "いいえ、独身です", "来年 結婚します", "わかりません"], a: 0, ev: [5], tip: "Phân biệt người: 独身 là Miller, không phải anh trai." },
      { q: "木村さんは 最初に 何を したいですか。", o: ["写真を 見たい", "写真を 撮りたい", "写真を 借りたい", "電話を かけたい"], a: 0, ev: [0], tip: "～ても いいですか ở câu đầu là lời xin phép." }
    ]
  },
  kanji: [
    { c: "立", hv: "LẬP", on: "リツ", kun: "た(つ)", vi: "đứng", words: [["立ちます", "たちます", "đứng"], ["私立", "しりつ", "tư lập"]], use: "Động từ た(ちます); từ ghép リツ." },
    { c: "使", hv: "SỬ", on: "シ", kun: "つか(う)", vi: "dùng", words: [["使います", "つかいます", "dùng"], ["大使館", "たいしかん", "đại sứ quán"]], use: "Bộ 亻 (người)." },
    { c: "作", hv: "TÁC", on: "サク・サ", kun: "つく(る)", vi: "làm, tạo", words: [["作ります", "つくります", "làm"], ["作文", "さくぶん", "bài văn"]], use: "Bộ 亻 + 乍." },
    { c: "住", hv: "TRÚ", on: "ジュウ", kun: "す(む)", vi: "sống, ở", words: [["住みます", "すみます", "sống"], ["住所", "じゅうしょ", "địa chỉ"]], use: "亻 (người) + 主 (chủ): người làm chủ một chỗ ở." },
    { c: "知", hv: "TRI", on: "チ", kun: "し(る)", vi: "biết", words: [["知ります", "しります", "biết"], ["知って います", "しっています", "biết (trạng thái)"]], use: "Phủ định là 知りません." },
    { c: "服", hv: "PHỤC", on: "フク", kun: "—", vi: "quần áo", words: [["服", "ふく", "quần áo"], ["洋服", "ようふく", "đồ Tây"]], use: "Bộ 月 (thịt/thân thể) bên trái." },
    { c: "品", hv: "PHẨM", on: "ヒン", kun: "しな", vi: "hàng hóa", words: [["製品", "せいひん", "sản phẩm"], ["品物", "しなもの", "hàng hóa"]], use: "Ba chữ 口 xếp chồng." },
    { c: "医", hv: "Y", on: "イ", kun: "—", vi: "y, chữa bệnh", words: [["医者", "いしゃ", "bác sĩ"], ["歯医者", "はいしゃ", "nha sĩ"]], use: "Hầu như luôn đọc イ." }
  ],
  grammarQuiz: [
    { q: "ここで 写真を 撮って（　）いいですか。", o: ["も", "は", "が", "を"], a: 0, ex: "Xin phép: Vて も いいですか." },
    { q: "ここで たばこを 吸って（　）いけません。", o: ["は", "も", "が", "に"], a: 0, ex: "Cấm: Vて は いけません." },
    { q: "私は 大阪（　）住んで います。", o: ["に", "で", "を", "へ"], a: 0, ex: "住みます: nơi sống đi với に." },
    { q: "山田さんの 住所を 知って いますか。―― いいえ、（　）。", o: ["知りません", "知って いません", "知りませんでした", "知らないです"], a: 0, ex: "Phủ định của 知って います là 知りません." },
    { q: "姉は 結婚して います。(Nghĩa là?)", o: ["Chị tôi đã kết hôn", "Chị tôi đang làm đám cưới", "Chị tôi sẽ kết hôn", "Chị tôi muốn kết hôn"], a: 0, ex: "～て います chỉ trạng thái kết quả." },
    { q: "ミラーさんは IMC（　）働いて います。", o: ["で", "に", "を", "へ"], a: 0, ex: "Nơi hành động (làm việc) → で." },
    { q: "この 辞書を 借りても いいですか。―― すみません、（　）。", o: ["ちょっと…", "いいですよ", "どうぞ", "はい、いけません"], a: 0, ex: "Từ chối khéo: すみません、ちょっと…" },
    { q: "Câu nào nói về nghề nghiệp / công việc lâu dài?", o: ["父は 銀行で 働いて います。", "父は 今 電話を かけて います。", "雨が 降って います。", "父は 今 ご飯を 食べて います。"], a: 0, ex: "働いて います = làm việc (lâu dài); các câu khác là đang diễn ra." },
    { q: "私は カメラを（　）います。(có máy ảnh)", o: ["持って", "持ち", "持んで", "持いて"], a: 0, ex: "持ちます → 持って います = đang có." }
  ]
};
