// Bài 4 — nội dung tự biên soạn theo phạm vi bài 4 Minna no Nihongo.
window.LESSONS[4] = {
  id: 4,
  title: "そちらは 何時から 何時までですか",
  titleVi: "Bên đó mở cửa từ mấy giờ đến mấy giờ?",
  vocab: [
    { w: "起きます", r: "おきます", vi: "thức dậy", t: "động từ", ex: [["毎朝 6時に 起きます。", "Mỗi sáng tôi dậy lúc 6 giờ."]] },
    { w: "寝ます", r: "ねます", vi: "ngủ, đi ngủ", t: "động từ", ex: [["毎晩 11時に 寝ます。", "Mỗi tối tôi đi ngủ lúc 11 giờ."]] },
    { w: "働きます", r: "はたらきます", vi: "làm việc", t: "động từ", ex: [["9時から 5時まで 働きます。", "Tôi làm việc từ 9 giờ đến 5 giờ."]] },
    { w: "休みます", r: "やすみます", vi: "nghỉ, nghỉ ngơi", t: "động từ", ex: [["あした 休みます。", "Ngày mai tôi nghỉ."]] },
    { w: "勉強します", r: "べんきょうします", vi: "học", t: "động từ", ex: [["きのう 勉強しました。", "Hôm qua tôi đã học."]] },
    { w: "終わります", r: "おわります", vi: "kết thúc, xong", t: "động từ", ex: [["会議は 4時に 終わります。", "Cuộc họp kết thúc lúc 4 giờ."]] },
    { w: "デパート", r: "デパート", vi: "cửa hàng bách hóa", t: "danh từ", ex: [["デパートは 10時からです。", "Bách hóa mở cửa từ 10 giờ."]] },
    { w: "銀行", r: "ぎんこう", vi: "ngân hàng", t: "danh từ", ex: [["銀行は 3時までです。", "Ngân hàng mở đến 3 giờ."]] },
    { w: "郵便局", r: "ゆうびんきょく", vi: "bưu điện", t: "danh từ", ex: [["郵便局は 何時までですか。", "Bưu điện mở đến mấy giờ?"]] },
    { w: "図書館", r: "としょかん", vi: "thư viện", t: "danh từ", ex: [["図書館は 月曜日 休みです。", "Thư viện nghỉ thứ hai."]] },
    { w: "美術館", r: "びじゅつかん", vi: "bảo tàng mỹ thuật", t: "danh từ", ex: [["美術館は 9時半からです。", "Bảo tàng mở từ 9 giờ rưỡi."]] },
    { w: "今", r: "いま", vi: "bây giờ", t: "danh từ", ex: [["今 何時ですか。", "Bây giờ là mấy giờ?"]] },
    { w: "～時", r: "じ", vi: "~ giờ", t: "hậu tố", ex: [["今 4時です。", "Bây giờ là 4 giờ."]], note: "4時 よじ, 7時 しちじ, 9時 くじ." },
    { w: "～分", r: "ふん", vi: "~ phút", t: "hậu tố", ex: [["7時 10分です。", "7 giờ 10 phút."]], note: "1, 3, 4, 6, 8, 10 → ぷん: いっぷん, さんぷん, よんぷん, ろっぷん, はっぷん, じゅっぷん." },
    { w: "半", r: "はん", vi: "rưỡi, một nửa", t: "danh từ", ex: [["9時半です。", "9 giờ rưỡi."]] },
    { w: "何時", r: "なんじ", vi: "mấy giờ", t: "từ để hỏi", ex: [["何時に 寝ますか。", "Bạn ngủ lúc mấy giờ?"]] },
    { w: "何分", r: "なんぷん", vi: "mấy phút", t: "từ để hỏi", ex: [["今 何時 何分ですか。", "Bây giờ là mấy giờ mấy phút?"]] },
    { w: "午前", r: "ごぜん", vi: "buổi sáng, sáng (AM)", t: "danh từ", ex: [["午前 10時です。", "10 giờ sáng."]] },
    { w: "午後", r: "ごご", vi: "buổi chiều, chiều (PM)", t: "danh từ", ex: [["午後 2時に 終わります。", "Kết thúc lúc 2 giờ chiều."]] },
    { w: "朝", r: "あさ", vi: "buổi sáng", t: "danh từ", ex: [["朝 7時に 起きます。", "Sáng tôi dậy lúc 7 giờ."]] },
    { w: "昼", r: "ひる", vi: "buổi trưa", t: "danh từ", ex: [["昼 休みます。", "Buổi trưa tôi nghỉ."]] },
    { w: "晩", r: "ばん", vi: "buổi tối", t: "danh từ", ex: [["晩 勉強します。", "Buổi tối tôi học."]] },
    { w: "きのう", r: "きのう", vi: "hôm qua", t: "danh từ", ex: [["きのう 働きました。", "Hôm qua tôi đã làm việc."]] },
    { w: "きょう", r: "きょう", vi: "hôm nay", t: "danh từ", ex: [["きょうは 休みです。", "Hôm nay là ngày nghỉ."]] },
    { w: "あした", r: "あした", vi: "ngày mai", t: "danh từ", ex: [["あした 勉強します。", "Ngày mai tôi học."]] },
    { w: "けさ", r: "けさ", vi: "sáng nay", t: "danh từ", ex: [["けさ 6時に 起きました。", "Sáng nay tôi dậy lúc 6 giờ."]] },
    { w: "今晩", r: "こんばん", vi: "tối nay", t: "danh từ", ex: [["今晩 勉強します。", "Tối nay tôi học."]] },
    { w: "休み", r: "やすみ", vi: "nghỉ, ngày nghỉ", t: "danh từ", ex: [["休みは 日曜日です。", "Ngày nghỉ là chủ nhật."]] },
    { w: "昼休み", r: "ひるやすみ", vi: "nghỉ trưa", t: "danh từ", ex: [["昼休みは 12時から 1時までです。", "Nghỉ trưa từ 12 giờ đến 1 giờ."]] },
    { w: "試験", r: "しけん", vi: "kỳ thi", t: "danh từ", ex: [["試験は 9時からです。", "Kỳ thi bắt đầu từ 9 giờ."]] },
    { w: "会議", r: "かいぎ", vi: "cuộc họp", t: "danh từ", ex: [["会議は 何時からですか。", "Cuộc họp từ mấy giờ?"]] },
    { w: "毎朝", r: "まいあさ", vi: "mỗi sáng", t: "danh từ", ex: [["毎朝 勉強します。", "Mỗi sáng tôi học."]], note: "Không đi với に." },
    { w: "毎晩", r: "まいばん", vi: "mỗi tối", t: "danh từ", ex: [["毎晩 10時に 寝ます。", "Mỗi tối ngủ lúc 10 giờ."]] },
    { w: "毎日", r: "まいにち", vi: "mỗi ngày", t: "danh từ", ex: [["毎日 働きます。", "Ngày nào cũng làm việc."]] },
    { w: "月曜日", r: "げつようび", vi: "thứ hai", t: "danh từ", ex: [["月曜日から 金曜日まで 働きます。", "Làm từ thứ hai đến thứ sáu."]], note: "火曜日 かようび (thứ ba), 水曜日 すいようび (thứ tư), 木曜日 もくようび (thứ năm), 金曜日 きんようび (thứ sáu), 土曜日 どようび (thứ bảy), 日曜日 にちようび (chủ nhật)." },
    { w: "何曜日", r: "なんようび", vi: "thứ mấy", t: "từ để hỏi", ex: [["きょうは 何曜日ですか。", "Hôm nay thứ mấy?"]] },
    { w: "～から", r: "から", vi: "từ ~", t: "trợ từ", ex: [["9時から 働きます。", "Làm từ 9 giờ."]] },
    { w: "～まで", r: "まで", vi: "đến ~", t: "trợ từ", ex: [["5時まで 働きます。", "Làm đến 5 giờ."]] },
    { w: "番号", r: "ばんごう", vi: "số (điện thoại, phòng…)", t: "danh từ", ex: [["電話番号は 何番ですか。", "Số điện thoại là số mấy?"]] },
    { w: "大変ですね", r: "たいへんですね", vi: "vất vả nhỉ", t: "cụm", ex: [["毎晩 12時まで 働きます。 ―― 大変ですね。", "Tối nào cũng làm đến 12 giờ. — Vất vả nhỉ."]] },
    { w: "電話番号", r: "でんわばんごう", vi: "số điện thoại", t: "danh từ", ex: [["電話番号は 何番ですか。", "Số điện thoại là số mấy?"]] },
    { w: "何番", r: "なんばん", vi: "số mấy", t: "từ để hỏi", ex: [["図書館の 電話番号は 何番ですか。", "Số điện thoại thư viện là số mấy?"]] },
    { w: "夜", r: "よる", vi: "ban đêm, buổi tối", t: "danh từ", ex: [["夜 11時に 寝ます。", "Tôi ngủ lúc 11 giờ đêm."]] },
    { w: "おととい", r: "おととい", vi: "hôm kia", t: "danh từ", ex: [["おととい 休みました。", "Hôm kia tôi đã nghỉ."]] },
    { w: "あさって", r: "あさって", vi: "ngày kia", t: "danh từ", ex: [["あさって 働きます。", "Ngày kia tôi làm việc."]] },
    { w: "ゆうべ", r: "ゆうべ", vi: "tối qua", t: "danh từ", ex: [["ゆうべ 12時に 寝ました。", "Tối qua tôi ngủ lúc 12 giờ."]] },
    { w: "ペキン", r: "ペキン", vi: "Bắc Kinh", t: "danh từ riêng", ex: [["ペキンは 今 何時ですか。", "Bắc Kinh bây giờ là mấy giờ?"]] },
    { w: "バンコク", r: "バンコク", vi: "Bangkok", t: "danh từ riêng", ex: [["バンコクは 今 午前 10時です。", "Bangkok bây giờ là 10 giờ sáng."]] },
    { w: "ロンドン", r: "ロンドン", vi: "London", t: "danh từ riêng", ex: [["ロンドンは 今 何時ですか。", "London bây giờ là mấy giờ?"]] },
    { w: "ロサンゼルス", r: "ロサンゼルス", vi: "Los Angeles", t: "danh từ riêng", ex: [["ロサンゼルスは 今 午後 6時です。", "Los Angeles bây giờ là 6 giờ chiều."]] },
    { w: "番号案内", r: "ばんごうあんない", vi: "dịch vụ hỏi số điện thoại", t: "danh từ", ex: [["はい、番号案内です。", "Vâng, dịch vụ hỏi số điện thoại xin nghe."]] },
    { w: "お問い合わせ", r: "おといあわせ", vi: "(số) quý khách cần hỏi", t: "danh từ", ex: [["お問い合わせの 番号は 5275-2725です。", "Số quý khách cần hỏi là 5275-2725."]] }
  ],
  grammar: [
    {
      pattern: "今 ～時 ～分 です",
      func: "Nói giờ: số + 時 (giờ), số + 分 (phút).",
      parts: [["～時", "4時 よじ, 7時 しちじ, 9時 くじ."], ["～分", "ふん/ぷん tùy số: 1 いっぷん, 2 にふん, 3 さんぷん, 4 よんぷん, 5 ごふん, 6 ろっぷん, 7 ななふん, 8 はっぷん, 9 きゅうふん, 10 じゅっぷん."], ["半", "Rưỡi (30 phút)."]],
      usage: [
        { rule: "Hỏi và nói giờ hiện tại.", ex: [["今 何時ですか。 ―― 7時 10分です。", "Bây giờ mấy giờ? — 7 giờ 10."]] },
        { rule: "Hỏi giờ ở nơi khác: 地名は 今 何時ですか.", ex: [["ニューヨークは 今 何時ですか。 ―― 午前 4時です。", "Ở New York bây giờ là mấy giờ? — 4 giờ sáng."]] }
      ],
      notes: ["午前/午後 đặt TRƯỚC giờ: 午後 3時."]
    },
    {
      pattern: "V ます / V ません / V ました / V ませんでした",
      func: "Vị ngữ động từ lịch sự. ます: hiện tại – tương lai (thói quen, sự thật, việc sẽ làm). ました: quá khứ.",
      parts: [["～ます", "Khẳng định, không quá khứ."], ["～ません", "Phủ định, không quá khứ."], ["～ました", "Khẳng định, quá khứ."], ["～ませんでした", "Phủ định, quá khứ."]],
      usage: [
        { rule: "Thói quen / việc sẽ làm.", ex: [["毎朝 6時に 起きます。", "Mỗi sáng dậy lúc 6 giờ."], ["あした 働きません。", "Ngày mai không làm việc."]] },
        { rule: "Việc đã xảy ra.", ex: [["きのう 勉強しました。", "Hôm qua đã học."], ["きのう 勉強しませんでした。", "Hôm qua đã không học."]] },
        { rule: "Hỏi: thêm か; trả lời はい、～ます / いいえ、～ません.", ex: [["きのう 勉強しましたか。 ―― いいえ、勉強しませんでした。", "Hôm qua bạn có học không? — Không, không học."]] }
      ],
      notes: ["Bài 4 chỉ có thể ます; các thể khác (て, ない, từ điển…) học từ bài 14."]
    },
    {
      pattern: "N（thời điểm） に V",
      func: "Trợ từ に gắn sau thời điểm có con số để chỉ lúc hành động xảy ra.",
      parts: [["に", "Dùng với giờ, ngày tháng có số, thứ (に có thể có/không)."]],
      usage: [
        { rule: "Thời điểm có số: bắt buộc に.", ex: [["6時半に 起きます。", "Dậy lúc 6 rưỡi."]] },
        { rule: "Thứ trong tuần: có thể thêm に.", ex: [["日曜日[に] 休みます。", "Chủ nhật nghỉ."]] },
        { rule: "Từ chỉ thời gian tương đối (きょう, あした, 毎朝, 今晩…): KHÔNG dùng に.", ex: [["あした 働きます。", "Ngày mai làm việc."]] }
      ],
      notes: ["Hỏi: 何時に ～ますか。"]
    },
    {
      pattern: "N1 から N2 まで",
      func: "から chỉ điểm bắt đầu, まで chỉ điểm kết thúc (thời gian hoặc nơi chốn).",
      parts: [["から", "từ"], ["まで", "đến"]],
      usage: [
        { rule: "Đi với động từ.", ex: [["9時から 5時まで 働きます。", "Làm việc từ 9 đến 5 giờ."]] },
        { rule: "Đi trực tiếp với です.", ex: [["銀行は 9時から 3時までです。", "Ngân hàng mở từ 9 đến 3 giờ."]] },
        { rule: "Dùng riêng từng cái.", ex: [["昼休みは 12時からです。", "Nghỉ trưa từ 12 giờ."]] }
      ],
      notes: []
    },
    {
      pattern: "N1 と N2",
      func: "Nối hai danh từ ngang hàng: “N1 và N2”.",
      parts: [["と", "Chỉ nối danh từ, không nối câu."]],
      usage: [{ rule: "Liệt kê đủ các thứ.", ex: [["銀行の 休みは 土曜日と 日曜日です。", "Ngân hàng nghỉ thứ bảy và chủ nhật."]] }],
      notes: []
    },
    {
      pattern: "S ね",
      func: "Trợ từ cuối câu thể hiện sự đồng cảm, mong người nghe đồng ý, hoặc xác nhận.",
      parts: [["ね", "Nói nhẹ, lên giọng nhẹ."]],
      usage: [
        { rule: "Đồng cảm.", ex: [["毎晩 12時まで 勉強します。 ―― 大変ですね。", "Tối nào cũng học tới 12 giờ. — Vất vả nhỉ."]] },
        { rule: "Xác nhận thông tin.", ex: [["番号は 871-6813です。 ―― 871-6813ですね。", "Số là 871-6813. — 871-6813 nhỉ."]] }
      ],
      notes: []
    }
  ],
  reading: {
    title: "私の 一日",
    titleVi: "Một ngày của tôi",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–4.",
    paragraphs: [
      {
        s: [
          { t: "私|わたし|tôi / は||(chủ đề) / 毎朝|まいあさ|mỗi sáng / 6時|ろくじ|6 giờ / に||lúc / 起きます|おきます|thức dậy / 。||", vi: "Mỗi sáng tôi dậy lúc 6 giờ." },
          { t: "会社|かいしゃ|công ty / は||(chủ đề) / 9時|くじ|9 giờ / から||từ / 6時|ろくじ|6 giờ / まで||đến / です||là / 。||", vi: "Công ty làm từ 9 giờ đến 6 giờ." },
          { t: "昼休み|ひるやすみ|nghỉ trưa / は||(chủ đề) / 12時|じゅうにじ|12 giờ / から||từ / 1時|いちじ|1 giờ / まで||đến / です||là / 。||", vi: "Nghỉ trưa từ 12 giờ đến 1 giờ." }
        ],
        vi: "Đoạn 1: Giờ dậy (6 giờ), giờ làm (9–6) và giờ nghỉ trưa (12–1)."
      },
      {
        s: [
          { t: "月曜日|げつようび|thứ hai / から||từ / 金曜日|きんようび|thứ sáu / まで||đến / 働きます|はたらきます|làm việc / 。||", vi: "Tôi làm việc từ thứ hai đến thứ sáu." },
          { t: "休み|やすみ|ngày nghỉ / は||(chủ đề) / 土曜日|どようび|thứ bảy / と||và / 日曜日|にちようび|chủ nhật / です||là / 。||", vi: "Ngày nghỉ là thứ bảy và chủ nhật." },
          { t: "土曜日|どようび|thứ bảy / は||(chủ đề) / 午前|ごぜん|buổi sáng / 勉強します|べんきょうします|học / 。||", vi: "Thứ bảy, buổi sáng tôi học." }
        ],
        vi: "Đoạn 2: Lịch làm việc trong tuần và ngày nghỉ."
      },
      {
        s: [
          { t: "きのう||hôm qua / は||(chủ đề) / 11時|じゅういちじ|11 giờ / まで||đến / 働きました|はたらきました|đã làm việc / 。||", vi: "Hôm qua tôi làm việc đến 11 giờ." },
          { t: "12時半|じゅうにじはん|12 rưỡi / に||lúc / 寝ました|ねました|đã ngủ / 。||", vi: "Tôi đi ngủ lúc 12 rưỡi." },
          { t: "けさ||sáng nay / は||(chủ đề) / 起きませんでした|おきませんでした|đã không dậy / 。||", vi: "Sáng nay tôi đã không dậy (đúng giờ)." },
          { t: "きょう||hôm nay / は||(chủ đề) / 休みます|やすみます|nghỉ / 。||", vi: "Hôm nay tôi nghỉ (không đi làm)." }
        ],
        vi: "Đoạn 3: Hôm qua làm muộn, ngủ muộn nên sáng nay không dậy được và nghỉ làm."
      }
    ],
    summary: "Toàn bài: người viết mô tả lịch thường ngày (dậy 6 giờ, làm 9–6, nghỉ trưa 12–1, làm thứ 2–6, nghỉ thứ 7, chủ nhật), rồi kể chuyện hôm qua làm đến 11 giờ, ngủ 12 rưỡi nên hôm nay nghỉ làm. Bài kiểm tra khả năng phân biệt thói quen (～ます) và việc đã xảy ra (～ました).",
    questions: [
      { q: "この 人は いつも 何時に 起きますか。", o: ["6時", "9時", "12時半", "11時"], a: 0, ev: [0, 0], tip: "いつも/毎朝 = thói quen → tìm câu có 毎朝 và động từ 起きます. Đừng nhầm với chuyện hôm qua ở đoạn 3." },
      { q: "この 人は 土曜日 何を しますか。", o: ["午前 勉強します", "午後 働きます", "午前 寝ます", "午後 勉強します"], a: 0, ev: [1, 2], tip: "Từ khóa 土曜日 xuất hiện 2 lần; câu chứa hành động cụ thể là câu 3 đoạn 2. Chú ý cả 午前 lẫn động từ." },
      { q: "きのう 何時に 寝ましたか。", o: ["12時半", "11時", "6時", "12時"], a: 0, ev: [2, 1], tip: "きのう → động từ quá khứ ～ました. 11時 là giờ làm việc đến, không phải giờ ngủ." },
      { q: "きょう この 人は 働きますか。", o: ["いいえ、働きません", "はい、働きます", "午後 働きます", "6時まで 働きます"], a: 0, ev: [2, 3], tip: "きょうは 休みます = hôm nay nghỉ. Câu cuối bài thường chứa kết luận." }
    ]
  },
  listening: {
    title: "電話で 聞きます",
    titleVi: "Hỏi qua điện thoại",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "客", pitch: 0.85 }, B: { name: "美術館", pitch: 1.25 } },
    script: [
      { sp: "B", jp: "はい、さくら美術館です。", vi: "Vâng, bảo tàng mỹ thuật Sakura xin nghe." },
      { sp: "A", jp: "すみません、そちらは 何時からですか。", vi: "Xin lỗi, bên đó mở cửa từ mấy giờ ạ?" },
      { sp: "B", jp: "9時半からです。", vi: "Từ 9 giờ rưỡi ạ." },
      { sp: "A", jp: "何時までですか。", vi: "Đến mấy giờ ạ?" },
      { sp: "B", jp: "午後 5時までです。でも、金曜日は 8時までです。", vi: "Đến 5 giờ chiều. Nhưng thứ sáu thì đến 8 giờ." },
      { sp: "A", jp: "休みは 何曜日ですか。", vi: "Ngày nghỉ là thứ mấy ạ?" },
      { sp: "B", jp: "月曜日です。", vi: "Thứ hai ạ." },
      { sp: "A", jp: "月曜日ですね。どうも ありがとう ございました。", vi: "Thứ hai nhỉ. Cảm ơn rất nhiều." }
    ],
    questions: [
      { q: "美術館は 何時からですか。", o: ["9時半", "9時", "5時", "8時"], a: 0, ev: [2], tip: "Nghe từ khóa から; chú ý 半 (rưỡi) ngay sau 9時." },
      { q: "金曜日は 何時までですか。", o: ["8時", "5時", "9時半", "7時"], a: 0, ev: [4], tip: "でも (nhưng) báo hiệu ngoại lệ — thông tin quan trọng thường đến sau でも." },
      { q: "美術館の 休みは 何曜日ですか。", o: ["月曜日", "金曜日", "日曜日", "土曜日"], a: 0, ev: [6], tip: "Câu lặp lại 月曜日ですね ở cuối giúp xác nhận đáp án." },
      { q: "水曜日の 午後 6時に 美術館へ 行きます。入れますか。(Có vào được không?)", o: ["いいえ、5時までです", "はい、8時までです", "はい、休みじゃ ありません", "いいえ、休みです"], a: 0, ev: [4], tip: "Câu hỏi suy luận: thứ tư không phải ngoại lệ (chỉ thứ sáu đến 8 giờ) → đóng cửa 5 giờ." }
    ]
  },
  kanji: [
    { c: "今", hv: "KIM", on: "コン・キン", kun: "いま", vi: "bây giờ", words: [["今", "いま", "bây giờ"], ["今晩", "こんばん", "tối nay"], ["今日", "きょう", "hôm nay (đọc đặc biệt)"]], use: "Đứng riêng いま; từ ghép thường コン. 今日 きょう, 今朝 けさ là cách đọc đặc biệt." },
    { c: "分", hv: "PHÂN", on: "フン・ブン", kun: "わ(かる)", vi: "phút; chia, hiểu", words: [["～分", "ふん/ぷん", "~ phút"], ["半分", "はんぶん", "một nửa"], ["分かります", "わかります", "hiểu"]], use: "Phút đọc ふん/ぷん theo số đứng trước (いっぷん, にふん, さんぷん…)." },
    { c: "半", hv: "BÁN", on: "ハン", kun: "なか(ば)", vi: "một nửa", words: [["～時半", "じはん", "~ giờ rưỡi"], ["半分", "はんぶん", "một nửa"]], use: "Gần như luôn đọc ハン." },
    { c: "午", hv: "NGỌ", on: "ゴ", kun: "—", vi: "giờ ngọ, buổi trưa", words: [["午前", "ごぜん", "buổi sáng"], ["午後", "ごご", "buổi chiều"]], use: "Phân biệt với 牛 (ngưu – bò): 牛 có nét dọc xuyên lên trên." },
    { c: "前", hv: "TIỀN", on: "ゼン", kun: "まえ", vi: "trước", words: [["午前", "ごぜん", "buổi sáng"], ["前", "まえ", "phía trước"], ["名前", "なまえ", "tên"]], use: "Từ ghép ゼン; đứng riêng / cuối từ thuần Nhật đọc まえ." },
    { c: "後", hv: "HẬU", on: "ゴ・コウ", kun: "うし(ろ)・あと", vi: "sau", words: [["午後", "ごご", "buổi chiều"], ["後ろ", "うしろ", "phía sau"], ["後で", "あとで", "lát nữa"]], use: "Nhiều cách đọc; sơ cấp gặp ゴ (午後), うしろ (vị trí), あと (thời gian)." },
    { c: "毎", hv: "MỖI", on: "マイ", kun: "—", vi: "mỗi", words: [["毎日", "まいにち", "mỗi ngày"], ["毎朝", "まいあさ", "mỗi sáng"], ["毎晩", "まいばん", "mỗi tối"]], use: "Luôn đọc マイ, đứng đầu từ chỉ thời gian. Không dùng に sau." },
    { c: "休", hv: "HƯU", on: "キュウ", kun: "やす(む)", vi: "nghỉ", words: [["休みます", "やすみます", "nghỉ"], ["休み", "やすみ", "ngày nghỉ"], ["休日", "きゅうじつ", "ngày nghỉ (văn viết)"]], use: "Gồm 亻(người) + 木 (cây): người tựa gốc cây nghỉ ngơi." }
  ],
  grammarQuiz: [
    { q: "毎朝 6時（　）起きます。", o: ["に", "を", "から", "と"], a: 0, ex: "Thời điểm có số + に." },
    { q: "あした（　）働きます。", o: ["（không cần trợ từ）", "に", "を", "で"], a: 0, ex: "あした là từ thời gian tương đối → không dùng に." },
    { q: "銀行は 9時（　）3時までです。", o: ["から", "に", "と", "も"], a: 0, ex: "N1 から N2 まで: từ … đến …" },
    { q: "きのう 勉強しましたか。―― いいえ、（　）。", o: ["勉強しませんでした", "勉強しません", "勉強しました", "勉強です"], a: 0, ex: "Hỏi về quá khứ, trả lời phủ định → ～ませんでした." },
    { q: "休みは 土曜日（　）日曜日です。", o: ["と", "から", "に", "の"], a: 0, ex: "Nối hai danh từ ngang hàng: と." },
    { q: "毎晩 12時まで 働きます。―― 大変です（　）。", o: ["ね", "か", "も", "と"], a: 0, ex: "Bày tỏ đồng cảm → ね." },
    { q: "「4時」の 読み方は？", o: ["よじ", "よんじ", "しじ", "よっじ"], a: 0, ex: "4時 đọc là よじ." },
    { q: "「10分」の 読み方は？", o: ["じゅっぷん", "じゅうふん", "とおふん", "じっふん"], a: 0, ex: "10 + 分 → じゅっぷん (cũng có じっぷん)." },
    { q: "郵便局は（　）からですか。―― 9時からです。", o: ["何時", "何曜日", "いつも", "何分"], a: 0, ex: "Trả lời bằng giờ → 何時." }
  ]
};
