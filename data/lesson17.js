// Bài 17 — nội dung tự biên soạn theo phạm vi bài 17 Minna no Nihongo.
window.LESSONS[17] = {
  id: 17,
  title: "どう しましたか",
  titleVi: "Anh bị sao vậy?",
  vocab: [
    { w: "覚えます", r: "おぼえます", vi: "nhớ, thuộc", t: "động từ nhóm II", ex: [["漢字を 覚えなければ なりません。", "Phải nhớ chữ Hán."]], note: "Thể ない: 覚えない" },
    { w: "忘れます", r: "わすれます", vi: "quên", t: "động từ nhóm II", ex: [["パスポートを 忘れないで ください。", "Đừng quên hộ chiếu."]], note: "Thể ない: 忘れない" },
    { w: "なくします", r: "なくします", vi: "làm mất", t: "động từ nhóm I", ex: [["鍵を なくしました。", "Tôi làm mất chìa khóa."]], note: "Thể ない: なくさない" },
    { w: "払います", r: "はらいます", vi: "trả (tiền)", t: "động từ nhóm I", ex: [["お金を 払わなければ なりません。", "Phải trả tiền."]], note: "Thể ない: 払わない (い → わ)" },
    { w: "返します", r: "かえします", vi: "trả lại", t: "động từ nhóm I", ex: [["本を 金曜日までに 返して ください。", "Hãy trả sách trước thứ sáu."]], note: "Thể ない: 返さない" },
    { w: "出かけます", r: "でかけます", vi: "ra ngoài", t: "động từ nhóm II", ex: [["きょうは 出かけないで ください。", "Hôm nay đừng ra ngoài."]], note: "Thể ない: 出かけない" },
    { w: "脱ぎます", r: "ぬぎます", vi: "cởi (quần áo, giày)", t: "động từ nhóm I", ex: [["ここで 靴を 脱いで ください。", "Hãy cởi giày ở đây."]], note: "Thể ない: 脱がない" },
    { w: "持って 行きます", r: "もっていきます", vi: "mang đi", t: "động từ nhóm I", ex: [["傘を 持って 行かなければ なりません。", "Phải mang ô đi."]], note: "Thể ない: 持って 行かない" },
    { w: "持って 来ます", r: "もってきます", vi: "mang đến", t: "động từ nhóm III", ex: [["あした 辞書を 持って 来て ください。", "Mai hãy mang từ điển đến."]], note: "Thể ない: 持って 来ない (こない)" },
    { w: "心配します", r: "しんぱいします", vi: "lo lắng", t: "động từ nhóm III", ex: [["心配しないで ください。", "Đừng lo."]], note: "Thể ない: 心配しない" },
    { w: "残業します", r: "ざんぎょうします", vi: "làm thêm giờ", t: "động từ nhóm III", ex: [["きょうは 残業しなければ なりません。", "Hôm nay phải làm thêm giờ."]], note: "Thể ない: 残業しない" },
    { w: "出張します", r: "しゅっちょうします", vi: "đi công tác", t: "động từ nhóm III", ex: [["来週 東京へ 出張します。", "Tuần sau tôi đi công tác Tokyo."]], note: "Thể ない: 出張しない" },
    { w: "飲みます［薬を～］", r: "のみます", vi: "uống (thuốc)", t: "động từ nhóm I", ex: [["この 薬を 飲んで ください。", "Hãy uống thuốc này."]], note: "Thể ない: 飲まない" },
    { w: "入ります［お風呂に～］", r: "はいります", vi: "tắm (bồn)", t: "động từ nhóm I", ex: [["きょうは お風呂に 入らないで ください。", "Hôm nay đừng tắm bồn."]], note: "Thể ない: 入らない" },
    { w: "大切［な］", r: "たいせつ", vi: "quan trọng, quý", t: "tính từ な", ex: [["大切な 書類です。", "Đây là giấy tờ quan trọng."]] },
    { w: "大丈夫［な］", r: "だいじょうぶ", vi: "không sao, ổn", t: "tính từ な", ex: [["大丈夫ですか。", "Bạn có sao không?"]] },
    { w: "危ない", r: "あぶない", vi: "nguy hiểm", t: "tính từ い", ex: [["危ないですから、ここで 遊ばないで ください。", "Nguy hiểm nên đừng chơi ở đây."]] },
    { w: "問題", r: "もんだい", vi: "vấn đề; câu hỏi (bài thi)", t: "danh từ", ex: [["この 問題は 難しいです。", "Câu hỏi này khó."]] },
    { w: "答え", r: "こたえ", vi: "câu trả lời", t: "danh từ", ex: [["答えを ここに 書いて ください。", "Viết câu trả lời ở đây."]] },
    { w: "禁煙", r: "きんえん", vi: "cấm hút thuốc", t: "danh từ", ex: [["ここは 禁煙です。", "Ở đây cấm hút thuốc."]] },
    { w: "［健康］保険証", r: "けんこうほけんしょう", vi: "thẻ bảo hiểm (y tế)", t: "danh từ", ex: [["保険証を 見せて ください。", "Cho xem thẻ bảo hiểm."]] },
    { w: "風邪", r: "かぜ", vi: "cảm cúm", t: "danh từ", ex: [["風邪ですね。", "Bị cảm rồi nhỉ."]] },
    { w: "熱", r: "ねつ", vi: "sốt", t: "danh từ", ex: [["熱が あります。", "Tôi bị sốt."]] },
    { w: "病気", r: "びょうき", vi: "bệnh", t: "danh từ", ex: [["病気ですから、会社を 休みました。", "Vì ốm nên tôi nghỉ làm."]] },
    { w: "薬", r: "くすり", vi: "thuốc", t: "danh từ", ex: [["毎日 薬を 飲まなければ なりません。", "Ngày nào cũng phải uống thuốc."]] },
    { w: "［お］風呂", r: "おふろ", vi: "bồn tắm", t: "danh từ", ex: [["毎晩 お風呂に 入ります。", "Tối nào tôi cũng tắm bồn."]] },
    { w: "上着", r: "うわぎ", vi: "áo khoác", t: "danh từ", ex: [["上着を 脱いで ください。", "Hãy cởi áo khoác."]] },
    { w: "下着", r: "したぎ", vi: "đồ lót", t: "danh từ", ex: [["下着を 持って 来て ください。", "Hãy mang theo đồ lót."]] },
    { w: "2、3日", r: "にさんにち", vi: "2, 3 ngày", t: "danh từ", ex: [["2、3日 休んで ください。", "Hãy nghỉ 2, 3 ngày."]] },
    { w: "2、3～", r: "にさん", vi: "2, 3 ~ (vài ~)", t: "số từ", ex: [["2、3回 読みました。", "Tôi đọc 2, 3 lần."]] },
    { w: "～までに", r: "までに", vi: "trước ~ (hạn chót)", t: "trợ từ", ex: [["金曜日までに レポートを 出して ください。", "Hãy nộp báo cáo trước thứ sáu."]] },
    { w: "ですから", r: "ですから", vi: "vì vậy", t: "liên từ", ex: [["熱が あります。ですから、きょうは 休みます。", "Tôi sốt. Vì vậy hôm nay tôi nghỉ."]] },
    { w: "どう しましたか", r: "どうしましたか", vi: "bạn bị sao vậy?", t: "cụm", ex: [["どう しましたか。 ―― のどが 痛いです。", "Bạn bị sao? — Tôi đau họng."]] },
    { w: "［～が］痛いです", r: "いたいです", vi: "(~) đau", t: "cụm", ex: [["頭が 痛いです。", "Tôi đau đầu."]] },
    { w: "のど", r: "のど", vi: "họng", t: "danh từ", ex: [["のどが 痛いです。", "Tôi đau họng."]] },
    { w: "お大事に", r: "おだいじに", vi: "chúc mau khỏe", t: "cụm", ex: [["お大事に。", "Chúc anh mau khỏe."]] }
  ],
  grammar: [
    {
      pattern: "Thể ない（ない形）",
      func: "Dạng phủ định thông thường của động từ, nền tảng cho nhiều mẫu ngữ pháp.",
      explain: ["Nhóm I: đổi âm cuối hàng い trước ます sang hàng あ + ない: 書きます → 書かない, 飲みます → 飲まない. Âm い → わ: 買います → 買わない.", "Nhóm II: bỏ ます + ない: 食べます → 食べない, 見ます → 見ない.", "Nhóm III: します → しない, 来ます → 来ない (こない)."],
      parts: [["Nhóm I", "い段 → あ段 + ない (い → わ)"], ["Nhóm II", "ます → ない"], ["Nhóm III", "しない / こない"]],
      usage: [{ rule: "Ví dụ.", ex: [["行きます → 行かない、待ちます → 待たない、払います → 払わない", "đi, đợi, trả"], ["寝ます → 寝ない、します → しない、来ます → 来ない", "ngủ, làm, đến"]] }],
      notes: ["あります → ない (đặc biệt)."]
    },
    {
      pattern: "V ない で ください",
      func: "Yêu cầu / nhờ người nghe đừng làm gì: “Xin đừng …”. Cũng dùng để an ủi (心配しないで ください).",
      parts: [["Vない + で ください", "đừng V"]],
      usage: [
        { rule: "Yêu cầu không làm.", ex: [["ここで 写真を 撮らないで ください。", "Xin đừng chụp ảnh ở đây."]] },
        { rule: "Quan tâm, an ủi.", ex: [["私は 元気ですから、心配しないで ください。", "Tôi khỏe nên đừng lo."]] }
      ],
      notes: []
    },
    {
      pattern: "V ない → V なければ なりません",
      func: "Nghĩa vụ, bắt buộc: “phải V”, bất kể ý muốn của người làm.",
      explain: ["Cách tạo: bỏ い của thể ない + ければ なりません: 飲まない → 飲まなければ なりません."],
      parts: [["Vない（bỏ い）+ ければ なりません", "phải V"]],
      usage: [{ rule: "Bắt buộc.", ex: [["薬を 飲まなければ なりません。", "Phải uống thuốc."], ["あしたまでに 本を 返さなければ なりません。", "Phải trả sách trước ngày mai."]] }],
      notes: ["Không có dạng phủ định riêng; nghĩa “không cần” dùng ～なくても いいです."]
    },
    {
      pattern: "V ない → V なくても いいです",
      func: "Không cần, không bắt buộc: “không V cũng được”.",
      explain: ["Cách tạo: bỏ い của thể ない + くても いいです: 行かない → 行かなくても いいです.", "Là câu trả lời phủ định của ～なければ なりませんか."],
      parts: [["Vない（bỏ い）+ くても いいです", "không cần V"]],
      usage: [{ rule: "Không bắt buộc.", ex: [["あした 来なくても いいです。", "Ngày mai không đến cũng được."], ["パスポートを 持って 行かなければ なりませんか。 ―― いいえ、持って 行かなくても いいです。", "Có phải mang hộ chiếu không? — Không, không mang cũng được."]] }],
      notes: []
    },
    {
      pattern: "N（tân ngữ）は V",
      func: "Đưa tân ngữ (N を) lên đầu câu làm chủ đề bằng は để nhấn mạnh / đối chiếu. を được thay bằng は.",
      parts: [["N を V → N は V", ""]],
      usage: [{ rule: "Chủ đề hóa tân ngữ.", ex: [["荷物を ここに 置かないで ください。→ 荷物は ここに 置かないで ください。", "Hành lý thì đừng để ở đây."], ["会社の 食堂で 昼ご飯を 食べます。→ 昼ご飯は 会社の 食堂で 食べます。", "Bữa trưa thì tôi ăn ở nhà ăn công ty."]] }],
      notes: []
    },
    {
      pattern: "N（thời gian）までに V",
      func: "Hạn chót: hành động phải xảy ra TRƯỚC hoặc ĐÚNG thời điểm N.",
      explain: ["Phân biệt: まで = hành động kéo dài liên tục đến N (5時まで 働きます); までに = hành động xảy ra một lần trước mốc N (5時までに 帰ります)."],
      parts: [["までに", "trước, chậm nhất là"]],
      usage: [{ rule: "Hạn chót.", ex: [["会議は 5時までに 終わります。", "Cuộc họp sẽ kết thúc trước 5 giờ."], ["土曜日までに 本を 返さなければ なりません。", "Phải trả sách trước thứ bảy."]] }],
      notes: []
    }
  ],
  reading: {
    title: "病院の 注意",
    titleVi: "Lời dặn ở bệnh viện",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–17.",
    paragraphs: [
      {
        s: [
          { t: "きのう||hôm qua / から||từ / 熱|ねつ|sốt / が||(chủ thể) / あります||có / 。||", vi: "Tôi bị sốt từ hôm qua." },
          { t: "のど|のど|họng / も||cũng / 痛い|いたい|đau / です||(lịch sự) / 。||", vi: "Họng cũng đau." },
          { t: "ですから||vì vậy / 、||, / けさ||sáng nay / 病院|びょういん|bệnh viện / へ||đến / 行きました|いきました|đã đi / 。||", vi: "Vì vậy sáng nay tôi đi bệnh viện." }
        ],
        vi: "Đoạn 1: Sốt từ hôm qua, đau họng, nên sáng nay đi viện."
      },
      {
        s: [
          { t: "医者|いしゃ|bác sĩ / は||(chủ đề) / 「||« / 風邪|かぜ|cảm / です||là / ね||nhỉ / 」||»", vi: "Bác sĩ: « Bị cảm rồi nhỉ. »" },
          { t: "「||« / この||này / 薬|くすり|thuốc / を||(tân ngữ) / 一日|いちにち|1 ngày / に||(trong) / 3回|さんかい|3 lần / 飲んで|のんで|uống / ください||hãy / 。||", vi: "« Hãy uống thuốc này mỗi ngày 3 lần." },
          { t: "2、3日|にさんにち|2, 3 ngày / 会社|かいしゃ|công ty / を||(tân ngữ) / 休んで|やすんで|nghỉ / ください||hãy / 。||", vi: "Hãy nghỉ làm 2, 3 ngày." },
          { t: "お風呂|おふろ|bồn tắm / に||(vào) / 入らないで|はいらないで|đừng vào / ください||hãy / 。||", vi: "Đừng tắm bồn." },
          { t: "あした||ngày mai / は||(đối lập) / 病院|びょういん|bệnh viện / へ||đến / 来なくても|こなくても|không đến cũng / いいです||được / 」||»", vi: "Ngày mai không cần đến bệnh viện. »" }
        ],
        vi: "Đoạn 2: Bác sĩ chẩn đoán cảm; dặn uống thuốc ngày 3 lần, nghỉ làm 2–3 ngày, không tắm bồn, mai không cần tái khám."
      },
      {
        s: [
          { t: "でも||nhưng / 、||, / 金曜日|きんようび|thứ sáu / までに||trước / レポート||báo cáo / を||(tân ngữ) / 出さなければ|ださなければ|phải nộp / なりません||(phải) / 。||", vi: "Nhưng tôi phải nộp báo cáo trước thứ sáu." },
          { t: "うち||nhà / で||ở / 書かなければ|かかなければ|phải viết / なりません||(phải) / 。||", vi: "Tôi phải viết ở nhà." }
        ],
        vi: "Đoạn 3: Dù ốm vẫn phải viết báo cáo ở nhà để nộp trước thứ sáu."
      }
    ],
    summary: "Toàn bài: triệu chứng (sốt, đau họng), lời dặn của bác sĩ dùng đủ các mẫu bài 17 (～て ください / ～ないで ください / ～なくても いいです) và nghĩa vụ (～なければ なりません, ～までに). Mẹo: phân loại từng lời dặn thành “phải / đừng / không cần” khi làm bài.",
    questions: [
      { q: "薬は 一日に 何回 飲みますか。", o: ["3回", "2回", "1回", "4回"], a: 0, ev: [1, 1], tip: "Tần suất = khoảng thời gian に + số 回 (bài 11)." },
      { q: "医者の 注意で、「～ないで ください」は どれですか。", o: ["お風呂に 入らないで ください", "薬を 飲まないで ください", "会社を 休まないで ください", "病院へ 来ないで ください"], a: 0, ev: [1, 3], tip: "～ないで ください = điều bị dặn ĐỪNG làm. 病院へ 来る là “không cần”, khác với “đừng”." },
      { q: "あした 病院へ 行かなければ なりませんか。", o: ["いいえ、行かなくても いいです", "はい、行かなければ なりません", "はい、午後 行きます", "いいえ、行っては いけません"], a: 0, ev: [1, 4], tip: "来なくても いいです = không cần đến (nhưng đến cũng không sao) – khác với cấm." },
      { q: "この 人は 金曜日までに 何を しなければ なりませんか。", o: ["レポートを 出す", "病院へ 行く", "薬を 買う", "会社へ 行く"], a: 0, ev: [2, 0], tip: "～までに + ～なければ なりません: hạn chót và việc bắt buộc." }
    ]
  },
  listening: {
    title: "どう しましたか",
    titleVi: "Ở phòng khám",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "医者", pitch: 0.8 }, B: { name: "マリア", pitch: 1.35 } },
    script: [
      { sp: "A", jp: "どう しましたか。", vi: "Chị bị sao vậy?" },
      { sp: "B", jp: "きのうから 頭が 痛いです。熱も あります。", vi: "Từ hôm qua tôi đau đầu. Cũng bị sốt." },
      { sp: "A", jp: "口を 開けて ください。……風邪ですね。", vi: "Hãy há miệng. … Bị cảm rồi." },
      { sp: "B", jp: "あした 出張ですが、行っても いいですか。", vi: "Ngày mai tôi đi công tác, đi có được không?" },
      { sp: "A", jp: "いいえ、2、3日 休まなければ なりません。", vi: "Không, chị phải nghỉ 2, 3 ngày." },
      { sp: "B", jp: "お風呂に 入っても いいですか。", vi: "Tôi tắm bồn được không?" },
      { sp: "A", jp: "きょうは 入らないで ください。薬は 毎晩 飲んで ください。", vi: "Hôm nay đừng tắm. Thuốc thì uống mỗi tối." },
      { sp: "B", jp: "わかりました。", vi: "Tôi hiểu rồi." },
      { sp: "A", jp: "お大事に。", vi: "Chúc chị mau khỏe." }
    ],
    questions: [
      { q: "マリアさんは どこが 痛いですか。", o: ["頭", "のど", "おなか", "歯"], a: 0, ev: [1], tip: "～が 痛いです: bộ phận đứng trước が." },
      { q: "マリアさんは あした 出張に 行きますか。", o: ["いいえ、休まなければ なりません", "はい、行きます", "はい、行っても いいです", "午後 行きます"], a: 0, ev: [4], tip: "Lời xin phép bị bác bỏ bằng いいえ + ～なければ なりません." },
      { q: "きょう お風呂に 入っても いいですか。", o: ["いいえ、入らないで ください", "はい、入っても いいです", "入らなくても いいです", "わかりません"], a: 0, ev: [6], tip: "～ないで ください = đừng." },
      { q: "薬は いつ 飲みますか。", o: ["毎晩", "毎朝", "食事の あと", "昼"], a: 0, ev: [6], tip: "Câu thứ hai trong lời của bác sĩ; chủ đề 薬は báo hiệu thông tin về thuốc." }
    ]
  },
  kanji: [
    { c: "病", hv: "BỆNH", on: "ビョウ", kun: "や(む)", vi: "bệnh", words: [["病気", "びょうき", "bệnh"], ["病院", "びょういん", "bệnh viện"]], use: "Bộ 疒 (bệnh tật) bao ngoài." },
    { c: "薬", hv: "DƯỢC", on: "ヤク", kun: "くすり", vi: "thuốc", words: [["薬", "くすり", "thuốc"], ["薬局", "やっきょく", "hiệu thuốc"]], use: "艹 (cỏ) + 楽: cây cỏ làm người dễ chịu." },
    { c: "問", hv: "VẤN", on: "モン", kun: "と(う)", vi: "hỏi", words: [["問題", "もんだい", "vấn đề, câu hỏi"], ["質問", "しつもん", "câu hỏi"]], use: "口 (miệng) trong 門 (cổng): hỏi ở cổng." },
    { c: "題", hv: "ĐỀ", on: "ダイ", kun: "—", vi: "đề, chủ đề", words: [["問題", "もんだい", "vấn đề"], ["宿題", "しゅくだい", "bài tập về nhà"]], use: "Bộ 頁 bên phải." },
    { c: "答", hv: "ĐÁP", on: "トウ", kun: "こた(える)", vi: "trả lời", words: [["答え", "こたえ", "câu trả lời"], ["答えます", "こたえます", "trả lời"]], use: "Bộ ⺮ (tre) trên đầu." },
    { c: "心", hv: "TÂM", on: "シン", kun: "こころ", vi: "tim, lòng", words: [["心配", "しんぱい", "lo lắng"], ["心", "こころ", "trái tim, tâm hồn"]], use: "Nét chấm viết theo thứ tự trái → phải." },
    { c: "忘", hv: "VONG", on: "ボウ", kun: "わす(れる)", vi: "quên", words: [["忘れます", "わすれます", "quên"], ["忘年会", "ぼうねんかい", "tiệc tất niên"]], use: "亡 (mất) + 心 (lòng): mất khỏi lòng = quên." },
    { c: "返", hv: "PHẢN", on: "ヘン", kun: "かえ(す)", vi: "trả lại", words: [["返します", "かえします", "trả lại"], ["返事", "へんじ", "hồi âm"]], use: "Phân biệt với 帰 (かえ – về): khác chữ cùng âm." }
  ],
  grammarQuiz: [
    { q: "「書きます」の ない形は？", o: ["書かない", "書きない", "書けない", "書くない"], a: 0, ex: "Nhóm I: き → か + ない." },
    { q: "「買います」の ない形は？", o: ["買わない", "買あない", "買いない", "買かない"], a: 0, ex: "い → わ: 買わない." },
    { q: "「来ます」の ない形は？", o: ["来ない（こない）", "来ない（きない）", "来らない", "来かない"], a: 0, ex: "来ます → こない." },
    { q: "ここで 写真を 撮ら（　）ください。", o: ["ないで", "なくて", "なければ", "ない"], a: 0, ex: "Đừng: Vない で ください." },
    { q: "薬を 飲ま（　）なりません。", o: ["なければ", "ないで", "なくても", "ないと"], a: 0, ex: "Phải: Vなければ なりません." },
    { q: "あした 来（　）いいです。(không cần đến)", o: ["なくても", "ないで", "なければ", "ても"], a: 0, ex: "Không cần: Vなくても いいです (来なくても)." },
    { q: "金曜日（　）レポートを 出して ください。(hạn chót)", o: ["までに", "まで", "から", "に"], a: 0, ex: "Hạn chót một lần → までに." },
    { q: "5時（　）働きます。(liên tục)", o: ["まで", "までに", "に", "から に"], a: 0, ex: "Hành động kéo dài đến mốc → まで." },
    { q: "パスポートを 持って 行かなければ なりませんか。―― いいえ、（　）。", o: ["持って 行かなくても いいです", "持って 行かないで ください", "持って 行っては いけません", "持って 行かなければ なりません"], a: 0, ex: "Phủ định của nghĩa vụ → ～なくても いいです." }
  ]
};
