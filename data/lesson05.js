// Bài 5 — nội dung tự biên soạn theo phạm vi bài 5 Minna no Nihongo.
window.LESSONS[5] = {
  id: 5,
  title: "この 電車は 甲子園へ 行きますか",
  titleVi: "Tàu này có đi Koshien không?",
  vocab: [
    { w: "行きます", r: "いきます", vi: "đi", t: "động từ", ex: [["あした 京都へ 行きます。", "Ngày mai tôi đi Kyoto."]] },
    { w: "来ます", r: "きます", vi: "đến", t: "động từ", ex: [["去年 日本へ 来ました。", "Năm ngoái tôi đã đến Nhật."]] },
    { w: "帰ります", r: "かえります", vi: "về (nhà, nước)", t: "động từ", ex: [["6時に うちへ 帰ります。", "6 giờ tôi về nhà."]] },
    { w: "学校", r: "がっこう", vi: "trường học", t: "danh từ", ex: [["バスで 学校へ 行きます。", "Tôi đi học bằng xe buýt."]] },
    { w: "スーパー", r: "スーパー", vi: "siêu thị", t: "danh từ", ex: [["きのう スーパーへ 行きました。", "Hôm qua tôi đã đi siêu thị."]] },
    { w: "駅", r: "えき", vi: "nhà ga", t: "danh từ", ex: [["駅まで 歩いて 行きます。", "Tôi đi bộ đến ga."]] },
    { w: "飛行機", r: "ひこうき", vi: "máy bay", t: "danh từ", ex: [["飛行機で 国へ 帰ります。", "Tôi về nước bằng máy bay."]] },
    { w: "船", r: "ふね", vi: "thuyền, tàu thủy", t: "danh từ", ex: [["船で 行きます。", "Tôi đi bằng tàu thủy."]] },
    { w: "電車", r: "でんしゃ", vi: "tàu điện", t: "danh từ", ex: [["電車で 会社へ 行きます。", "Tôi đi làm bằng tàu điện."]] },
    { w: "地下鉄", r: "ちかてつ", vi: "tàu điện ngầm", t: "danh từ", ex: [["地下鉄で 来ました。", "Tôi đến bằng tàu điện ngầm."]] },
    { w: "新幹線", r: "しんかんせん", vi: "tàu Shinkansen", t: "danh từ", ex: [["新幹線で 東京へ 行きます。", "Tôi đi Tokyo bằng Shinkansen."]] },
    { w: "バス", r: "バス", vi: "xe buýt", t: "danh từ", ex: [["バスで 帰ります。", "Tôi về bằng xe buýt."]] },
    { w: "タクシー", r: "タクシー", vi: "taxi", t: "danh từ", ex: [["タクシーで 駅へ 行きました。", "Tôi đã đi taxi ra ga."]] },
    { w: "自転車", r: "じてんしゃ", vi: "xe đạp", t: "danh từ", ex: [["自転車で 学校へ 来ます。", "Tôi đến trường bằng xe đạp."]] },
    { w: "歩いて", r: "あるいて", vi: "đi bộ", t: "phó từ", ex: [["駅から 歩いて 帰りました。", "Tôi đi bộ từ ga về."]], note: "Không dùng で: ✗ 歩いてで." },
    { w: "人", r: "ひと", vi: "người", t: "danh từ", ex: [["会社の 人と 行きます。", "Tôi đi với người trong công ty."]] },
    { w: "友達", r: "ともだち", vi: "bạn bè", t: "danh từ", ex: [["友達と 京都へ 行きました。", "Tôi đã đi Kyoto với bạn."]] },
    { w: "彼", r: "かれ", vi: "anh ấy; bạn trai", t: "đại từ", ex: [["彼と 美術館へ 行きます。", "Tôi đi bảo tàng với bạn trai."]] },
    { w: "彼女", r: "かのじょ", vi: "chị ấy; bạn gái", t: "đại từ", ex: [["彼女は 来月 国へ 帰ります。", "Cô ấy tháng sau về nước."]] },
    { w: "家族", r: "かぞく", vi: "gia đình", t: "danh từ", ex: [["家族と 日本へ 来ました。", "Tôi đến Nhật cùng gia đình."]] },
    { w: "一人で", r: "ひとりで", vi: "một mình", t: "phó từ", ex: [["一人で 東京へ 行きます。", "Tôi đi Tokyo một mình."]], note: "Không dùng と: ✗ 一人と." },
    { w: "先週", r: "せんしゅう", vi: "tuần trước", t: "danh từ", ex: [["先週 奈良へ 行きました。", "Tuần trước tôi đi Nara."]] },
    { w: "今週", r: "こんしゅう", vi: "tuần này", t: "danh từ", ex: [["今週 どこも 行きません。", "Tuần này tôi không đi đâu cả."]] },
    { w: "来週", r: "らいしゅう", vi: "tuần sau", t: "danh từ", ex: [["来週 国へ 帰ります。", "Tuần sau tôi về nước."]] },
    { w: "先月", r: "せんげつ", vi: "tháng trước", t: "danh từ", ex: [["先月 日本へ 来ました。", "Tháng trước tôi đến Nhật."]] },
    { w: "今月", r: "こんげつ", vi: "tháng này", t: "danh từ", ex: [["今月 東京へ 行きます。", "Tháng này tôi đi Tokyo."]] },
    { w: "来月", r: "らいげつ", vi: "tháng sau", t: "danh từ", ex: [["来月 北海道へ 行きます。", "Tháng sau tôi đi Hokkaido."]] },
    { w: "去年", r: "きょねん", vi: "năm ngoái", t: "danh từ", ex: [["去年 日本へ 来ました。", "Năm ngoái tôi đến Nhật."]] },
    { w: "今年", r: "ことし", vi: "năm nay", t: "danh từ", ex: [["今年 国へ 帰りません。", "Năm nay tôi không về nước."]] },
    { w: "来年", r: "らいねん", vi: "năm sau", t: "danh từ", ex: [["来年 アメリカへ 行きます。", "Năm sau tôi đi Mỹ."]] },
    { w: "～月", r: "がつ", vi: "tháng ~", t: "hậu tố", ex: [["3月に 日本へ 来ました。", "Tôi đến Nhật vào tháng 3."]], note: "4月 しがつ, 7月 しちがつ, 9月 くがつ." },
    { w: "何月", r: "なんがつ", vi: "tháng mấy", t: "từ để hỏi", ex: [["何月に 国へ 帰りますか。", "Bạn về nước tháng mấy?"]] },
    { w: "1日", r: "ついたち", vi: "ngày mồng 1", t: "danh từ", ex: [["4月 1日に 来ました。", "Tôi đến ngày 1 tháng 4."]] },
    { w: "2日", r: "ふつか", vi: "ngày 2; 2 ngày", t: "danh từ", ex: [["5月 2日です。", "Ngày 2 tháng 5."]] },
    { w: "3日", r: "みっか", vi: "ngày 3; 3 ngày", t: "danh từ", ex: [["3日に 帰ります。", "Ngày 3 tôi về."]] },
    { w: "4日", r: "よっか", vi: "ngày 4; 4 ngày", t: "danh từ", ex: [["4日に 京都へ 行きます。", "Ngày 4 tôi đi Kyoto."]] },
    { w: "5日", r: "いつか", vi: "ngày 5; 5 ngày", t: "danh từ", ex: [["5日は 休みです。", "Ngày 5 là ngày nghỉ."]] },
    { w: "6日", r: "むいか", vi: "ngày 6; 6 ngày", t: "danh từ", ex: [["6日に 来ます。", "Ngày 6 tôi đến."]] },
    { w: "7日", r: "なのか", vi: "ngày 7; 7 ngày", t: "danh từ", ex: [["7日に 行きます。", "Ngày 7 tôi đi."]] },
    { w: "8日", r: "ようか", vi: "ngày 8; 8 ngày", t: "danh từ", ex: [["8日に 帰ります。", "Ngày 8 tôi về."]] },
    { w: "9日", r: "ここのか", vi: "ngày 9; 9 ngày", t: "danh từ", ex: [["9日は 試験です。", "Ngày 9 có kỳ thi."]] },
    { w: "10日", r: "とおか", vi: "ngày 10; 10 ngày", t: "danh từ", ex: [["10日に 来ました。", "Tôi đến ngày 10."]] },
    { w: "14日", r: "じゅうよっか", vi: "ngày 14; 14 ngày", t: "danh từ", ex: [["2月 14日です。", "Ngày 14 tháng 2."]] },
    { w: "20日", r: "はつか", vi: "ngày 20; 20 ngày", t: "danh từ", ex: [["20日に 国へ 帰ります。", "Ngày 20 tôi về nước."]] },
    { w: "24日", r: "にじゅうよっか", vi: "ngày 24; 24 ngày", t: "danh từ", ex: [["12月 24日は 休みです。", "Ngày 24 tháng 12 là ngày nghỉ."]] },
    { w: "～日", r: "にち", vi: "ngày ~; ~ ngày", t: "hậu tố", ex: [["15日に 行きます。", "Ngày 15 tôi đi."]] },
    { w: "何日", r: "なんにち", vi: "ngày mấy; mấy ngày", t: "từ để hỏi", ex: [["きょうは 何日ですか。", "Hôm nay ngày mấy?"]] },
    { w: "いつ", r: "いつ", vi: "khi nào", t: "từ để hỏi", ex: [["いつ 日本へ 来ましたか。", "Bạn đến Nhật khi nào?"]], note: "Không dùng に sau いつ." },
    { w: "誕生日", r: "たんじょうび", vi: "sinh nhật", t: "danh từ", ex: [["誕生日は いつですか。", "Sinh nhật bạn là khi nào?"]] },
    { w: "普通", r: "ふつう", vi: "tàu thường (dừng mọi ga)", t: "danh từ", ex: [["普通は 甲子園へ 行きます。", "Tàu thường có đi Koshien."]] },
    { w: "急行", r: "きゅうこう", vi: "tàu nhanh", t: "danh từ", ex: [["あの 電車は 急行です。", "Tàu kia là tàu nhanh."]] },
    { w: "特急", r: "とっきゅう", vi: "tàu tốc hành đặc biệt", t: "danh từ", ex: [["特急で 大阪へ 行きます。", "Tôi đi Osaka bằng tàu tốc hành."]] },
    { w: "次の", r: "つぎの", vi: "~ tiếp theo", t: "liên thể từ", ex: [["次の 電車は 何時ですか。", "Chuyến tàu tiếp theo lúc mấy giờ?"]] },
    { w: "～番線", r: "ばんせん", vi: "đường ray số ~ (sân ga số ~)", t: "hậu tố", ex: [["5番線です。", "Là sân ga số 5."]] },
    { w: "どういたしまして", r: "どういたしまして", vi: "không có gì (đáp lại lời cảm ơn)", t: "cụm", ex: [["ありがとう ございました。 ―― どういたしまして。", "Cảm ơn ạ. — Không có gì."]] },
    { w: "甲子園", r: "こうしえん", vi: "Koshien (địa danh gần Osaka)", t: "danh từ riêng", ex: [["この 電車は 甲子園へ 行きますか。", "Tàu này có đi Koshien không?"]] },
    { w: "大阪城", r: "おおさかじょう", vi: "thành Osaka", t: "danh từ riêng", ex: [["友達と 大阪城へ 行きました。", "Tôi đã đi thành Osaka với bạn."]] }
  ],
  grammar: [
    {
      pattern: "N（địa điểm）へ 行きます／来ます／帰ります",
      func: "Diễn tả việc di chuyển đến một nơi. Trợ từ へ đặt sau danh từ chỉ nơi đến, đi cùng các động từ chuyển động.",
      explain: ["へ được đọc là “e” (không đọc “he”). Có thể thay へ bằng に với nghĩa gần như nhau.", "行きます: đi (rời khỏi chỗ người nói); 来ます: đến (về phía chỗ người nói); 帰ります: trở về nơi mình thuộc về (nhà, nước, công ty)."],
      parts: [["へ", "Trợ từ chỉ phương hướng / nơi đến của chuyển động."]],
      usage: [
        { rule: "Nói nơi đi đến.", ex: [["京都へ 行きます。", "Tôi đi Kyoto."], ["日本へ 来ました。", "Tôi đã đến Nhật."], ["うちへ 帰ります。", "Tôi về nhà."]] },
        { rule: "Hỏi nơi đến bằng どこへ.", ex: [["あした どこへ 行きますか。 ―― 奈良へ 行きます。", "Mai bạn đi đâu? — Tôi đi Nara."]] }
      ],
      notes: ["Bài 4 dùng N に cho thời gian; bài 5 dùng N へ cho nơi đến — có thể có cả hai: 3月に 日本へ 来ました。"]
    },
    {
      pattern: "どこ［へ］も 行きません／行きませんでした",
      func: "Phủ định hoàn toàn: “không đi đâu cả”. Từ để hỏi + も + động từ phủ định.",
      explain: ["Mẫu “từ để hỏi + も + phủ định” phủ định toàn bộ phạm vi. Ở bài này gặp どこも (không nơi nào). Bài 6 sẽ gặp 何も (không gì cả)."],
      parts: [["どこ［へ］も", "へ có thể lược."], ["～ません", "Động từ luôn ở thể phủ định."]],
      usage: [
        { rule: "Trả lời câu hỏi “đi đâu” khi không đi.", ex: [["日曜日 どこへ 行きましたか。 ―― どこ［へ］も 行きませんでした。", "Chủ nhật bạn đi đâu? — Tôi không đi đâu cả."]] }
      ],
      notes: ["✗ どこも 行きます (không dùng với khẳng định ở nghĩa này)."]
    },
    {
      pattern: "N（phương tiện）で 行きます／来ます／帰ります",
      func: "Trợ từ で chỉ phương tiện giao thông dùng để di chuyển.",
      explain: ["Đi bộ dùng 歩いて, không thêm で. Hỏi phương tiện bằng 何で (なんで)."],
      parts: [["で", "“bằng” (phương tiện)."], ["歩いて", "đi bộ — đứng một mình, không có で."]],
      usage: [
        { rule: "Nói phương tiện.", ex: [["電車で 会社へ 行きます。", "Tôi đi làm bằng tàu điện."], ["タクシーで うちへ 帰りました。", "Tôi đã về nhà bằng taxi."]] },
        { rule: "Đi bộ.", ex: [["駅から 歩いて 帰りました。", "Tôi đi bộ từ ga về."]] },
        { rule: "Hỏi phương tiện.", ex: [["何で 学校へ 来ますか。 ―― 自転車で 来ます。", "Bạn đến trường bằng gì? — Bằng xe đạp."]] }
      ],
      notes: []
    },
    {
      pattern: "N（người / động vật）と V",
      func: "Trợ từ と chỉ người cùng thực hiện hành động: “cùng với N”.",
      explain: ["Khi làm một mình dùng 一人で (không dùng と). Hỏi “với ai” bằng だれと."],
      parts: [["と", "“với, cùng với”."], ["一人で", "“một mình”."]],
      usage: [
        { rule: "Nói đi với ai.", ex: [["家族と 日本へ 来ました。", "Tôi đến Nhật cùng gia đình."]] },
        { rule: "Hỏi với ai.", ex: [["だれと 行きますか。 ―― 友達と 行きます。", "Bạn đi với ai? — Với bạn."]] },
        { rule: "Một mình.", ex: [["一人で 東京へ 行きます。", "Tôi đi Tokyo một mình."]] }
      ],
      notes: ["Phân biệt với と bài 4 (nối hai danh từ: AとB)."]
    },
    {
      pattern: "いつ",
      func: "Từ để hỏi thời điểm: “khi nào”. Dùng khi không hỏi cụ thể giờ/ngày.",
      parts: [["いつ", "Không đi kèm に."]],
      usage: [
        { rule: "Hỏi thời điểm hành động.", ex: [["いつ 日本へ 来ましたか。 ―― 3月 25日に 来ました。", "Bạn đến Nhật khi nào? — Ngày 25 tháng 3."]] },
        { rule: "Hỏi thời điểm với です.", ex: [["誕生日は いつですか。 ―― 6月 13日です。", "Sinh nhật bạn khi nào? — Ngày 13 tháng 6."]] }
      ],
      notes: ["✗ いつに 行きますか。"]
    },
    {
      pattern: "S よ",
      func: "Trợ từ cuối câu dùng để báo cho người nghe một thông tin mà người nghe chưa biết, hoặc nhấn mạnh ý kiến của người nói.",
      explain: ["Khác với ね (mong người nghe đồng tình), よ đưa thông tin mới. Dùng quá nhiều với người trên có thể nghe như ép buộc."],
      parts: [["よ", "“đấy, đó” (cho bạn biết)."]],
      usage: [
        { rule: "Báo thông tin mới.", ex: [["この 電車は 甲子園へ 行きますか。 ―― いいえ、行きません。次の 普通ですよ。", "Tàu này có đi Koshien không? — Không. Chuyến tàu thường tiếp theo đấy."]] }
      ],
      notes: []
    },
    {
      pattern: "Ngày tháng: ～月 ～日",
      func: "Cách nói ngày tháng: số + 月 (tháng), số + 日 (ngày). Ngày 1–10, 14, 20, 24 đọc đặc biệt.",
      parts: [["月", "4月 しがつ, 7月 しちがつ, 9月 くがつ."], ["日", "1日 ついたち, 2日 ふつか, 3日 みっか, 4日 よっか, 5日 いつか, 6日 むいか, 7日 なのか, 8日 ようか, 9日 ここのか, 10日 とおか, 14日 じゅうよっか, 20日 はつか, 24日 にじゅうよっか; còn lại số + にち."]],
      usage: [{ rule: "Hỏi và nói ngày tháng.", ex: [["きょうは 何月 何日ですか。 ―― 7月 7日です。", "Hôm nay ngày mấy tháng mấy? — Ngày 7 tháng 7."]] }],
      notes: ["Thứ tự: năm → tháng → ngày (ngược tiếng Việt)."]
    }
  ],
  reading: {
    title: "週末の 旅行",
    titleVi: "Chuyến đi cuối tuần",
    source: "Bài đọc tự biên soạn, chỉ dùng từ vựng – ngữ pháp bài 1–5.",
    paragraphs: [
      {
        s: [
          { t: "先週|せんしゅう|tuần trước / の||(của) / 土曜日|どようび|thứ bảy / 、||, / 友達|ともだち|bạn / と||cùng / 京都|きょうと|Kyoto / へ||đến / 行きました|いきました|đã đi / 。||", vi: "Thứ bảy tuần trước tôi đi Kyoto cùng bạn." },
          { t: "朝|あさ|buổi sáng / 8時|はちじ|8 giờ / に||lúc / 大阪|おおさか|Osaka / から||từ / 電車|でんしゃ|tàu điện / で||bằng / 行きました|いきました|đã đi / 。||", vi: "8 giờ sáng tôi đi tàu điện từ Osaka." },
          { t: "京都|きょうと|Kyoto / 駅|えき|ga / から||từ / 寺|てら|chùa / まで||đến / 歩いて|あるいて|đi bộ / 行きました|いきました|đã đi / 。||", vi: "Từ ga Kyoto đến chùa thì tôi đi bộ." }
        ],
        vi: "Đoạn 1: Thứ bảy tuần trước đi Kyoto với bạn: đi tàu điện từ Osaka lúc 8 giờ, từ ga đi bộ đến chùa."
      },
      {
        s: [
          { t: "友達|ともだち|bạn / は||(chủ đề) / 4時|よじ|4 giờ / に||lúc / 大阪|おおさか|Osaka / へ||về / 帰りました|かえりました|đã về / 。||", vi: "Bạn tôi về Osaka lúc 4 giờ." },
          { t: "私|わたし|tôi / は||(chủ đề) / 一人|ひとり|một người / で||(trạng thái) / 美術館|びじゅつかん|bảo tàng / へ||đến / 行きました|いきました|đã đi / 。||", vi: "Tôi đi bảo tàng một mình." },
          { t: "夜|よる|buổi tối / 9時|くじ|9 giờ / に||lúc / バス||xe buýt / で||bằng / うち||nhà / へ||về / 帰りました|かえりました|đã về / 。||", vi: "9 giờ tối tôi về nhà bằng xe buýt." }
        ],
        vi: "Đoạn 2: Buổi chiều tách nhau: bạn về Osaka lúc 4 giờ; tôi đi bảo tàng một mình rồi 9 giờ tối về bằng xe buýt."
      },
      {
        s: [
          { t: "日曜日|にちようび|chủ nhật / は||(chủ đề) / どこ||đâu / も||(cũng) / 行きませんでした|いきませんでした|đã không đi / 。||", vi: "Chủ nhật tôi không đi đâu cả." },
          { t: "来月|らいげつ|tháng sau / の||(của) / 15日|じゅうごにち|ngày 15 / に||vào / 家族|かぞく|gia đình / は||(chủ đề) / 日本|にほん|Nhật / へ||đến / 来ます|きます|đến / 。||", vi: "Ngày 15 tháng sau gia đình tôi sẽ đến Nhật." },
          { t: "家族|かぞく|gia đình / と||cùng / 新幹線|しんかんせん|Shinkansen / で||bằng / 東京|とうきょう|Tokyo / へ||đến / 行きます|いきます|đi / 。||", vi: "Tôi sẽ đi Tokyo bằng Shinkansen cùng gia đình." }
        ],
        vi: "Đoạn 3: Chủ nhật ở nhà. Ngày 15 tháng sau gia đình sang Nhật và sẽ cùng đi Tokyo bằng Shinkansen."
      }
    ],
    summary: "Toàn bài: kể chuyến đi Kyoto thứ bảy tuần trước (với bạn, tàu điện, đi bộ; chiều đi bảo tàng một mình, tối về bằng xe buýt), chủ nhật không đi đâu, và kế hoạch tháng sau đi Tokyo bằng Shinkansen với gia đình. Bài luyện phân biệt: phương tiện (で), người đi cùng (と / 一人で), quá khứ – tương lai.",
    questions: [
      { q: "この 人は 何で 京都へ 行きましたか。", o: ["電車", "バス", "新幹線", "歩いて"], a: 0, ev: [0, 1], tip: "Câu hỏi 何で → tìm danh từ đứng trước で trong câu nói về chuyến đi tới Kyoto. バス là phương tiện lúc về; 歩いて là đoạn từ ga đến chùa." },
      { q: "美術館へ だれと 行きましたか。", o: ["一人で 行きました", "友達と 行きました", "家族と 行きました", "行きませんでした"], a: 0, ev: [1, 1], tip: "Đoạn 2: bạn đã về Osaka lúc 4 giờ trước đó, câu tiếp theo nói rõ 一人で." },
      { q: "日曜日 何を しましたか。(Chủ nhật đã làm gì?)", o: ["どこも 行きませんでした", "東京へ 行きました", "京都へ 行きました", "美術館へ 行きました"], a: 0, ev: [2, 0], tip: "どこも + phủ định = không đi đâu. Đọc kỹ động từ ở cuối câu." },
      { q: "来月 何で 東京へ 行きますか。", o: ["新幹線", "電車", "飛行機", "バス"], a: 0, ev: [2, 2], tip: "Chú ý thì: câu hỏi dùng 行きます (tương lai) → tìm câu không phải quá khứ ở đoạn cuối." }
    ]
  },
  listening: {
    title: "駅で",
    titleVi: "Ở nhà ga",
    source: "Hội thoại tự biên soạn; âm thanh đọc bằng giọng tổng hợp.",
    speakers: { A: { name: "サントス", pitch: 0.8 }, B: { name: "駅員", pitch: 1.1 }, C: { name: "女の人", pitch: 1.3 } },
    script: [
      { sp: "A", jp: "すみません、甲子園まで いくらですか。", vi: "Xin lỗi, đến Koshien bao nhiêu tiền ạ?" },
      { sp: "B", jp: "350円です。", vi: "350 yên." },
      { sp: "A", jp: "350円ですね。どうも ありがとう ございました。", vi: "350 yên nhỉ. Cảm ơn rất nhiều." },
      { sp: "B", jp: "どういたしまして。", vi: "Không có gì." },
      { sp: "A", jp: "すみません、甲子園は 何番線ですか。", vi: "Xin lỗi, đi Koshien ở sân ga số mấy?" },
      { sp: "C", jp: "5番線です。", vi: "Sân ga số 5." },
      { sp: "A", jp: "あの 電車は 甲子園へ 行きますか。", vi: "Tàu kia có đi Koshien không?" },
      { sp: "C", jp: "いいえ、行きません。あれは 急行ですよ。次の 普通ですよ。", vi: "Không. Đó là tàu nhanh đấy. Là chuyến tàu thường tiếp theo đấy." }
    ],
    questions: [
      { q: "甲子園まで いくらですか。", o: ["350円", "530円", "300円", "3,500円"], a: 0, ev: [1], tip: "Santos nhắc lại 350円ですね — câu lặp lại để xác nhận giúp chắc chắn đáp án." },
      { q: "甲子園へ 行く 電車は 何番線ですか。", o: ["5番線", "3番線", "9番線", "1番線"], a: 0, ev: [5], tip: "Nghe số + 番線. Không nhầm với số tiền 350." },
      { q: "サントスさんは どの 電車に 乗りますか。(Đi chuyến nào?)", o: ["次の 普通", "あの 急行", "特急", "新幹線"], a: 0, ev: [7], tip: "いいえ phủ định tàu 急行; よ ở cuối mang thông tin mới: 次の 普通." },
      { q: "サントスさんは だれに 何番線か 聞きましたか。(Hỏi ai số sân ga?)", o: ["女の人", "駅員", "友達", "わかりません"], a: 0, ev: [5], tip: "Hai lần hỏi với hai người khác nhau: giá vé hỏi nhân viên ga, sân ga hỏi người phụ nữ." }
    ]
  },
  kanji: [
    { c: "行", hv: "HÀNH", on: "コウ・ギョウ", kun: "い(く)・おこな(う)", vi: "đi; thực hiện", words: [["行きます", "いきます", "đi"], ["銀行", "ぎんこう", "ngân hàng"], ["旅行", "りょこう", "du lịch"]], use: "Động từ đọc い(きます); trong từ ghép đọc コウ (銀行, 旅行)." },
    { c: "来", hv: "LAI", on: "ライ", kun: "く(る)・き(ます)", vi: "đến", words: [["来ます", "きます", "đến"], ["来週", "らいしゅう", "tuần sau"], ["来年", "らいねん", "năm sau"]], use: "Từ chỉ thời gian “sau/tới” đọc ライ (来週, 来月, 来年)." },
    { c: "帰", hv: "QUY", on: "キ", kun: "かえ(る)", vi: "trở về", words: [["帰ります", "かえります", "về"], ["帰国", "きこく", "về nước"]], use: "Sơ cấp chủ yếu dùng かえ(ります)." },
    { c: "駅", hv: "DỊCH", on: "エキ", kun: "—", vi: "nhà ga", words: [["駅", "えき", "nhà ga"], ["駅員", "えきいん", "nhân viên ga"]], use: "Bộ 馬 (ngựa) bên trái: trạm đổi ngựa ngày xưa." },
    { c: "友", hv: "HỮU", on: "ユウ", kun: "とも", vi: "bạn", words: [["友達", "ともだち", "bạn bè"], ["友人", "ゆうじん", "bạn (trang trọng)"]], use: "友達 đọc とも + だち." },
    { c: "週", hv: "CHU", on: "シュウ", kun: "—", vi: "tuần", words: [["先週", "せんしゅう", "tuần trước"], ["今週", "こんしゅう", "tuần này"], ["来週", "らいしゅう", "tuần sau"]], use: "Ghép với 先・今・来・毎 (毎週 まいしゅう)." },
    { c: "月", hv: "NGUYỆT", on: "ゲツ・ガツ", kun: "つき", vi: "mặt trăng; tháng", words: [["～月", "がつ", "tháng ~"], ["来月", "らいげつ", "tháng sau"], ["月曜日", "げつようび", "thứ hai"]], use: "Tên tháng đọc ガツ (3月 さんがつ); 先月/来月/月曜日 đọc ゲツ." },
    { c: "年", hv: "NIÊN", on: "ネン", kun: "とし", vi: "năm", words: [["去年", "きょねん", "năm ngoái"], ["来年", "らいねん", "năm sau"], ["今年", "ことし", "năm nay (đọc đặc biệt)"]], use: "Chú ý 今年 đọc là ことし." }
  ],
  grammarQuiz: [
    { q: "あした 京都（　）行きます。", o: ["へ", "で", "を", "と"], a: 0, ex: "Nơi đến của chuyển động → へ (đọc e)." },
    { q: "電車（　）会社へ 行きます。", o: ["で", "へ", "と", "に"], a: 0, ex: "Phương tiện → で." },
    { q: "駅から（　）帰りました。", o: ["歩いて", "歩いてで", "足で", "歩くで"], a: 0, ex: "Đi bộ: 歩いて, không thêm で." },
    { q: "友達（　）大阪城へ 行きました。", o: ["と", "で", "へ", "も"], a: 0, ex: "Người cùng hành động → と." },
    { q: "（　）東京へ 行きます。(một mình)", o: ["一人で", "一人と", "一人に", "一人へ"], a: 0, ex: "Một mình: 一人で." },
    { q: "日曜日 どこへ 行きましたか。―― どこ（　）行きませんでした。", o: ["も", "へ", "で", "と"], a: 0, ex: "どこも + phủ định = không đi đâu cả." },
    { q: "（　）日本へ 来ましたか。―― 去年 来ました。", o: ["いつ", "いつに", "何時", "どこ"], a: 0, ex: "Hỏi thời điểm chung → いつ (không có に)." },
    { q: "「4月 8日」の 読み方は？", o: ["しがつ ようか", "よんがつ はちにち", "しがつ はつか", "よがつ ようか"], a: 0, ex: "4月 しがつ; 8日 ようか." },
    { q: "あれは 急行です（　）。次の 普通です。(báo thông tin mới)", o: ["よ", "ね", "か", "と"], a: 0, ex: "Báo cho người nghe thông tin họ chưa biết → よ." }
  ]
};
