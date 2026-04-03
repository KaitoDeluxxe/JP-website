// src/data/vocabData.ts

export interface VocabItem {
  kanji: string;
  reading: string;
  meaning: string;
  level: string;
}

export const vocabSets: Record<string, VocabItem[]> = {
  N5: [
    // Your originals
    { kanji: "学校", reading: "がっこう", meaning: "School", level: "N5" },
    { kanji: "先生", reading: "せんせい", meaning: "Teacher", level: "N5" },
    { kanji: "勉強", reading: "べんきょう", meaning: "Study", level: "N5" },
    { kanji: "水", reading: "みず", meaning: "Water", level: "N5" },
    { kanji: "食べる", reading: "たべる", meaning: "To eat", level: "N5" },
    
    // Nouns - People & Things
    { kanji: "人", reading: "ひと", meaning: "Person", level: "N5" },
    { kanji: "男", reading: "おとこ", meaning: "Man", level: "N5" },
    { kanji: "女", reading: "おんな", meaning: "Woman", level: "N5" },
    { kanji: "子供", reading: "こども", meaning: "Child", level: "N5" },
    { kanji: "友達", reading: "ともだち", meaning: "Friend", level: "N5" },
    { kanji: "本", reading: "ほん", meaning: "Book", level: "N5" },
    { kanji: "車", reading: "くるま", meaning: "Car", level: "N5" },
    { kanji: "電車", reading: "でんしゃ", meaning: "Train", level: "N5" },
    { kanji: "駅", reading: "えき", meaning: "Station", level: "N5" },
    { kanji: "家", reading: "いえ", meaning: "House / Home", level: "N5" },
    { kanji: "名前", reading: "なまえ", meaning: "Name", level: "N5" },
    { kanji: "お金", reading: "おかね", meaning: "Money", level: "N5" },
    { kanji: "時間", reading: "じかん", meaning: "Time", level: "N5" },
    { kanji: "今日", reading: "きょう", meaning: "Today", level: "N5" },
    { kanji: "明日", reading: "あした", meaning: "Tomorrow", level: "N5" },
    
    // Verbs
    { kanji: "行く", reading: "いく", meaning: "To go", level: "N5" },
    { kanji: "来る", reading: "くる", meaning: "To come", level: "N5" },
    { kanji: "帰る", reading: "かえる", meaning: "To return home", level: "N5" },
    { kanji: "見る", reading: "みる", meaning: "To see / To watch", level: "N5" },
    { kanji: "聞く", reading: "きく", meaning: "To listen / To hear", level: "N5" },
    { kanji: "読む", reading: "よむ", meaning: "To read", level: "N5" },
    { kanji: "書く", reading: "かく", meaning: "To write", level: "N5" },
    { kanji: "話す", reading: "はなす", meaning: "To speak", level: "N5" },
    { kanji: "買う", reading: "かう", meaning: "To buy", level: "N5" },
    { kanji: "飲む", reading: "のむ", meaning: "To drink", level: "N5" },
    { kanji: "起きる", reading: "おきる", meaning: "To wake up", level: "N5" },
    { kanji: "寝る", reading: "ねる", meaning: "To sleep", level: "N5" },
    { kanji: "会う", reading: "あう", meaning: "To meet", level: "N5" },
    { kanji: "休む", reading: "やすむ", meaning: "To rest", level: "N5" },
    { kanji: "働く", reading: "はたらく", meaning: "To work", level: "N5" },
    
    // Adjectives (I-adj and Na-adj)
    { kanji: "大きい", reading: "おおきい", meaning: "Big", level: "N5" },
    { kanji: "小さい", reading: "ちいさい", meaning: "Small", level: "N5" },
    { kanji: "新しい", reading: "あたらしい", meaning: "New", level: "N5" },
    { kanji: "古い", reading: "ふるい", meaning: "Old", level: "N5" },
    { kanji: "高い", reading: "たかい", meaning: "Expensive / High", level: "N5" },
    { kanji: "安い", reading: "やすい", meaning: "Cheap", level: "N5" },
    { kanji: "美味しい", reading: "おいしい", meaning: "Delicious", level: "N5" },
    { kanji: "忙しい", reading: "いそがしい", meaning: "Busy", level: "N5" },
    { kanji: "楽しい", reading: "たのしい", meaning: "Fun", level: "N5" },
    { kanji: "難しい", reading: "むずかしい", meaning: "Difficult", level: "N5" },
    { kanji: "元気", reading: "げんき", meaning: "Healthy / Energetic", level: "N5" },
    { kanji: "静か", reading: "しずか", meaning: "Quiet", level: "N5" },
    { kanji: "綺麗", reading: "きれい", meaning: "Beautiful / Clean", level: "N5" },
    { kanji: "好き", reading: "すき", meaning: "To like", level: "N5" },
    { kanji: "嫌い", reading: "きらい", meaning: "To dislike", level: "N5" },
  // Keep your N4, N3 etc. arrays here for now
  // Nouns - Body Parts & Nature
    { kanji: "目", reading: "め", meaning: "Eye", level: "N5" },
    { kanji: "耳", reading: "みみ", meaning: "Ear", level: "N5" },
    { kanji: "口", reading: "くち", meaning: "Mouth", level: "N5" },
    { kanji: "手", reading: "て", meaning: "Hand", level: "N5" },
    { kanji: "足", reading: "あし", meaning: "Foot / Leg", level: "N5" },
    { kanji: "山", reading: "やま", meaning: "Mountain", level: "N5" },
    { kanji: "川", reading: "かわ", meaning: "River", level: "N5" },
    { kanji: "空", reading: "そら", meaning: "Sky", level: "N5" },
    { kanji: "雨", reading: "あめ", meaning: "Rain", level: "N5" },
    { kanji: "雪", reading: "ゆき", meaning: "Snow", level: "N5" },
    
    // Nouns - Positions & Directions
    { kanji: "上", reading: "うえ", meaning: "Above / Top", level: "N5" },
    { kanji: "下", reading: "した", meaning: "Below / Bottom", level: "N5" },
    { kanji: "前", reading: "まえ", meaning: "Front / Before", level: "N5" },
    { kanji: "後ろ", reading: "うしろ", meaning: "Behind / Back", level: "N5" },
    { kanji: "中", reading: "なか", meaning: "Inside", level: "N5" },

    // Nouns - Daily Life & Food
    { kanji: "肉", reading: "にく", meaning: "Meat", level: "N5" },
    { kanji: "魚", reading: "さかな", meaning: "Fish", level: "N5" },
    { kanji: "卵", reading: "たまご", meaning: "Egg", level: "N5" },
    { kanji: "お茶", reading: "おちゃ", meaning: "Green Tea", level: "N5" },
    { kanji: "朝ご飯", reading: "あさごはん", meaning: "Breakfast", level: "N5" },
    { kanji: "昼ご飯", reading: "ひるごはん", meaning: "Lunch", level: "N5" },
    { kanji: "晩ご飯", reading: "ばんごはん", meaning: "Dinner", level: "N5" },
    { kanji: "靴", reading: "くつ", meaning: "Shoes", level: "N5" },
    { kanji: "服", reading: "ふく", meaning: "Clothes", level: "N5" },
    { kanji: "時計", reading: "とけい", meaning: "Clock / Watch", level: "N5" },

    // Verbs - Actions & States
    { kanji: "分かる", reading: "わかる", meaning: "To understand", level: "N5" },
    { kanji: "泳ぐ", reading: "およぐ", meaning: "To swim", level: "N5" },
    { kanji: "遊ぶ", reading: "あそぶ", meaning: "To play", level: "N5" },
    { kanji: "待つ", reading: "まつ", meaning: "To wait", level: "N5" },
    { kanji: "立つ", reading: "たつ", meaning: "To stand", level: "N5" },
    { kanji: "座る", reading: "すわる", meaning: "To sit", level: "N5" },
    { kanji: "入る", reading: "はいる", meaning: "To enter", level: "N5" },
    { kanji: "出る", reading: "でる", meaning: "To exit / leave", level: "N5" },
    { kanji: "開ける", reading: "あける", meaning: "To open", level: "N5" },
    { kanji: "閉める", reading: "しめる", meaning: "To close", level: "N5" },
    { kanji: "教える", reading: "おしえる", meaning: "To teach", level: "N5" },
    { kanji: "覚える", reading: "おぼえる", meaning: "To remember / memorize", level: "N5" },
    { kanji: "忘れる", reading: "わすれる", meaning: "To forget", level: "N5" },
    { kanji: "乗る", reading: "のる", meaning: "To ride", level: "N5" },
    { kanji: "降る", reading: "ふる", meaning: "To fall (rain/snow)", level: "N5" },

    // Adjectives - Descriptions & Weather
    { kanji: "長い", reading: "ながい", meaning: "Long", level: "N5" },
    { kanji: "短い", reading: "みじかい", meaning: "Short (length)", level: "N5" },
    { kanji: "早い", reading: "はやい", meaning: "Early / Fast", level: "N5" },
    { kanji: "遅い", reading: "おそい", meaning: "Late / Slow", level: "N5" },
    { kanji: "多い", reading: "おおい", meaning: "Many", level: "N5" },
    { kanji: "少ない", reading: "すくない", meaning: "Few", level: "N5" },
    { kanji: "暖かい", reading: "あたたかい", meaning: "Warm", level: "N5" },
    { kanji: "涼しい", reading: "すずしい", meaning: "Cool", level: "N5" },
    { kanji: "暑い", reading: "あつい", meaning: "Hot", level: "N5" },
    { kanji: "寒い", reading: "さむい", meaning: "Cold", level: "N5" },
// Nouns - Family
    { kanji: "父", reading: "ちち", meaning: "Father (own)", level: "N5" },
    { kanji: "母", reading: "はは", meaning: "Mother (own)", level: "N5" },
    { kanji: "お父さん", reading: "おとうさん", meaning: "Father (polite/other's)", level: "N5" },
    { kanji: "お母さん", reading: "おかあさん", meaning: "Mother (polite/other's)", level: "N5" },
    { kanji: "兄", reading: "あに", meaning: "Older brother (own)", level: "N5" },
    { kanji: "お兄さん", reading: "おにいさん", meaning: "Older brother (polite)", level: "N5" },
    { kanji: "姉", reading: "あね", meaning: "Older sister (own)", level: "N5" },
    { kanji: "お姉さん", reading: "おねえさん", meaning: "Older sister (polite)", level: "N5" },
    { kanji: "弟", reading: "おとうと", meaning: "Younger brother", level: "N5" },
    { kanji: "妹", reading: "いもうと", meaning: "Younger sister", level: "N5" },

    // Nouns - Places & Locations
    { kanji: "銀行", reading: "ぎんこう", meaning: "Bank", level: "N5" },
    { kanji: "郵便局", reading: "ゆうびんきょく", meaning: "Post office", level: "N5" },
    { kanji: "図書館", reading: "としょかん", meaning: "Library", level: "N5" },
    { kanji: "映画館", reading: "えいがかん", meaning: "Movie theater", level: "N5" },
    { kanji: "公園", reading: "こうえん", meaning: "Park", level: "N5" },
    { kanji: "店", reading: "みせ", meaning: "Shop / Store", level: "N5" },
    { kanji: "海", reading: "うみ", meaning: "Sea / Ocean", level: "N5" },
    { kanji: "道", reading: "みち", meaning: "Road / Street", level: "N5" },

    // Nouns - Time Words
    { kanji: "毎日", reading: "まいにち", meaning: "Every day", level: "N5" },
    { kanji: "毎週", reading: "まいしゅう", meaning: "Every week", level: "N5" },
    { kanji: "毎月", reading: "まいつき", meaning: "Every month", level: "N5" },
    { kanji: "毎年", reading: "まいとし", meaning: "Every year", level: "N5" },
    { kanji: "朝", reading: "あさ", meaning: "Morning", level: "N5" },
    { kanji: "昼", reading: "ひる", meaning: "Daytime / Noon", level: "N5" },
    { kanji: "夜", reading: "よる", meaning: "Night", level: "N5" },
    { kanji: "晩", reading: "ばん", meaning: "Evening", level: "N5" },
    { kanji: "昨日", reading: "きのう", meaning: "Yesterday", level: "N5" },
    { kanji: "今", reading: "いま", meaning: "Now", level: "N5" },
    { kanji: "今週", reading: "こんしゅう", meaning: "This week", level: "N5" },
    { kanji: "今月", reading: "こんげつ", meaning: "This month", level: "N5" },
    { kanji: "今年", reading: "ことし", meaning: "This year", level: "N5" },
    { kanji: "来週", reading: "らいしゅう", meaning: "Next week", level: "N5" },
    { kanji: "来月", reading: "らいげつ", meaning: "Next month", level: "N5" },
    { kanji: "来年", reading: "らいねん", meaning: "Next year", level: "N5" },
    { kanji: "先週", reading: "せんしゅう", meaning: "Last week", level: "N5" },
    { kanji: "先月", reading: "せんげつ", meaning: "Last month", level: "N5" },
    { kanji: "去年", reading: "きょねん", meaning: "Last year", level: "N5" },

    // Pronouns & Question Words
    { kanji: "何", reading: "なに / なん", meaning: "What", level: "N5" },
    { kanji: "誰", reading: "だれ", meaning: "Who", level: "N5" },
    { kanji: "何時", reading: "いつ", meaning: "When", level: "N5" }, 
    { kanji: "何処", reading: "どこ", meaning: "Where", level: "N5" }, 

    // Verbs - Movement & Daily Actions
    { kanji: "歩く", reading: "あるく", meaning: "To walk", level: "N5" },
    { kanji: "走る", reading: "はしる", meaning: "To run", level: "N5" },
    { kanji: "歌う", reading: "うたう", meaning: "To sing", level: "N5" },
    { kanji: "作る", reading: "つくる", meaning: "To make", level: "N5" },
    { kanji: "使う", reading: "つかう", meaning: "To use", level: "N5" },
    { kanji: "住む", reading: "すむ", meaning: "To live / reside", level: "N5" },
    { kanji: "知る", reading: "しる", meaning: "To know", level: "N5" },
    { kanji: "売る", reading: "うる", meaning: "To sell", level: "N5" },

// Nouns - Colors
    { kanji: "赤", reading: "あか", meaning: "Red", level: "N5" },
    { kanji: "青", reading: "あお", meaning: "Blue", level: "N5" },
    { kanji: "白", reading: "しろ", meaning: "White", level: "N5" },
    { kanji: "黒", reading: "くろ", meaning: "Black", level: "N5" },
    { kanji: "黄色", reading: "きいろ", meaning: "Yellow", level: "N5" },

    // Nouns - House & Office Items
    { kanji: "机", reading: "つくえ", meaning: "Desk", level: "N5" },
    { kanji: "椅子", reading: "いす", meaning: "Chair", level: "N5" },
    { kanji: "電話", reading: "でんわ", meaning: "Telephone", level: "N5" },
    { kanji: "電気", reading: "でんき", meaning: "Electricity / Light", level: "N5" },
    { kanji: "手紙", reading: "てがみ", meaning: "Letter", level: "N5" },
    { kanji: "鉛筆", reading: "えんぴつ", meaning: "Pencil", level: "N5" },
    { kanji: "辞書", reading: "じしょ", meaning: "Dictionary", level: "N5" },
    { kanji: "箸", reading: "はし", meaning: "Chopsticks", level: "N5" },
    { kanji: "荷物", reading: "にもつ", meaning: "Baggage / Luggage", level: "N5" },

    // Adverbs & Conjunctions
    { kanji: "沢山", reading: "たくさん", meaning: "Many / A lot", level: "N5" },
    { kanji: "少し", reading: "すこし", meaning: "A little", level: "N5" },
    { kanji: "大変", reading: "たいへん", meaning: "Very / Difficult", level: "N5" },
    { kanji: "丁度", reading: "ちょうど", meaning: "Exactly / Just", level: "N5" },
    { kanji: "時々", reading: "ときどき", meaning: "Sometimes", level: "N5" },
    { kanji: "初めて", reading: "はじめて", meaning: "For the first time", level: "N5" },
    { kanji: "又", reading: "また", meaning: "Again", level: "N5" },
    { kanji: "ゆっくり", reading: "ゆっくり", meaning: "Slowly", level: "N5" },

    // Verbs - Social & Technical Actions
    { kanji: "借りる", reading: "かりる", meaning: "To borrow", level: "N5" },
    { kanji: "貸す", reading: "かす", meaning: "To lend", level: "N5" },
    { kanji: "送る", reading: "おくる", meaning: "To send", level: "N5" },
    { kanji: "出す", reading: "だす", meaning: "To take out / hand in", level: "N5" },
    { kanji: "撮る", reading: "とる", meaning: "To take (a photo)", level: "N5" },
    { kanji: "撮る", reading: "とる", meaning: "To take / pick up", level: "N5" },
    { kanji: "脱ぐ", reading: "ぬぐ", meaning: "To take off (clothes)", level: "N5" },
    { kanji: "洗う", reading: "あらう", meaning: "To wash", level: "N5" },
    { kanji: "弾く", reading: "ひく", meaning: "To play (instrument)", level: "N5" },
    { kanji: "吹く", reading: "ふく", meaning: "To blow (wind)", level: "N5" },
    { kanji: "並ぶ", reading: "ならぶ", meaning: "To line up", level: "N5" },
    { kanji: "頼む", reading: "たのむ", meaning: "To ask / request", level: "N5" },
    { kanji: "磨く", reading: "みがく", meaning: "To brush / polish", level: "N5" },

    // Misc Nouns
    { kanji: "天気", reading: "てんき", meaning: "Weather", level: "N5" },
    { kanji: "宿題", reading: "しゅくだい", meaning: "Homework", level: "N5" },
    { kanji: "写真", reading: "しゃしん", meaning: "Photo", level: "N5" },
    { kanji: "地図", reading: "ちず", meaning: "Map", level: "N5" },
    { kanji: "映画", reading: "えいが", meaning: "Movie", level: "N5" },
    { kanji: "音楽", reading: "おんがく", meaning: "Music", level: "N5" },
    { kanji: "外国", reading: "がいこく", meaning: "Foreign country", level: "N5" },

// Counters (Essential for N5)
    { kanji: "一つ", reading: "ひとつ", meaning: "One (thing)", level: "N5" },
    { kanji: "二つ", reading: "ふたつ", meaning: "Two (things)", level: "N5" },
    { kanji: "三つ", reading: "みっつ", meaning: "Three (things)", level: "N5" },
    { kanji: "四つ", reading: "よっつ", meaning: "Four (things)", level: "N5" },
    { kanji: "五つ", reading: "いつつ", meaning: "Five (things)", level: "N5" },
    { kanji: "六つ", reading: "むっつ", meaning: "Six (things)", level: "N5" },
    { kanji: "七つ", reading: "ななつ", meaning: "Seven (things)", level: "N5" },
    { kanji: "八つ", reading: "やっつ", meaning: "Eight (things)", level: "N5" },
    { kanji: "九つ", reading: "ここのつ", meaning: "Nine (things)", level: "N5" },
    { kanji: "十", reading: "とお", meaning: "Ten (things)", level: "N5" },
    { kanji: "一人", reading: "ひとり", meaning: "One person", level: "N5" },
    { kanji: "二人", reading: "ふたり", meaning: "Two people", level: "N5" },

    // Days of the Week
    { kanji: "月曜日", reading: "げつようび", meaning: "Monday", level: "N5" },
    { kanji: "火曜日", reading: "かようび", meaning: "Tuesday", level: "N5" },
    { kanji: "水曜日", reading: "すいようび", meaning: "Wednesday", level: "N5" },
    { kanji: "木曜日", reading: "もくようび", meaning: "Thursday", level: "N5" },
    { kanji: "金曜日", reading: "きんようび", meaning: "Friday", level: "N5" },
    { kanji: "土曜日", reading: "どようび", meaning: "Saturday", level: "N5" },
    { kanji: "日曜日", reading: "にちようび", meaning: "Sunday", level: "N5" },

    // Directions & Locations
    { kanji: "北", reading: "きた", meaning: "North", level: "N5" },
    { kanji: "南", reading: "みなみ", meaning: "South", level: "N5" },
    { kanji: "東", reading: "ひがし", meaning: "East", level: "N5" },
    { kanji: "西", reading: "にし", meaning: "West", level: "N5" },
    { kanji: "右", reading: "みぎ", meaning: "Right", level: "N5" },
    { kanji: "左", reading: "ひだり", meaning: "Left", level: "N5" },
    { kanji: "側", reading: "そば", meaning: "Beside / Near", level: "N5" },
    { kanji: "隣", reading: "となり", meaning: "Next to", level: "N5" },
    { kanji: "遠い", reading: "とおい", meaning: "Far", level: "N5" },
    { kanji: "近い", reading: "ちかい", meaning: "Near / Close", level: "N5" },

    // Verbs - Movement & Interaction
    { kanji: "飛ぶ", reading: "とぶ", meaning: "To fly / jump", level: "N5" },
    { kanji: "渡る", reading: "わたる", meaning: "To cross (bridge/road)", level: "N5" },
    { kanji: "磨く", reading: "みがく", meaning: "To polish / brush (teeth)", level: "N5" },
    { kanji: "登る", reading: "のぼる", meaning: "To climb", level: "N5" },
    { kanji: "引く", reading: "ひく", meaning: "To pull", level: "N5" },
    { kanji: "押す", reading: "おす", meaning: "To push", level: "N5" },
    { kanji: "頼む", reading: "たのむ", meaning: "To ask / request", level: "N5" },
    { kanji: "忘れる", reading: "わすれる", meaning: "To forget", level: "N5" },
    { kanji: "勤める", reading: "つとめる", meaning: "To work for (someone)", level: "N5" },
    { kanji: "晴れる", reading: "はれる", meaning: "To clear up (weather)", level: "N5" },
    { kanji: "並べる", reading: "ならべる", meaning: "To line up / set up", level: "N5" },
    
    // Nouns - Body & Senses
    { kanji: "鼻", reading: "はな", meaning: "Nose", level: "N5" },
    { kanji: "声", reading: "こえ", meaning: "Voice", level: "N5" },
    { kanji: "体", reading: "からだ", meaning: "Body", level: "N5" },
    { kanji: "背", reading: "せ", meaning: "Height / Stature", level: "N5" },

    // Nouns - Classroom & Study
    { kanji: "作文", reading: "さくぶん", meaning: "Essay / Composition", level: "N5" },
    { kanji: "教科書", reading: "きょうかしょ", meaning: "Textbook", level: "N5" },
    { kanji: "教室", reading: "きょうしつ", meaning: "Classroom", level: "N5" },
    { kanji: "問題", reading: "もんだい", meaning: "Problem / Question", level: "N5" },
    { kanji: "答え", reading: "こたえ", meaning: "Answer", level: "N5" },
    { kanji: "意味", reading: "いみ", meaning: "Meaning", level: "N5" },

    // Adjectives & Adverbs
    { kanji: "重い", reading: "おもい", meaning: "Heavy", level: "N5" },
    { kanji: "軽い", reading: "かるい", meaning: "Light (weight)", level: "N5" },
    { kanji: "暗い", reading: "くらい", meaning: "Dark", level: "N5" },
    { kanji: "明るい", reading: "あかるい", meaning: "Bright", level: "N5" },
    { kanji: "強い", reading: "つよい", meaning: "Strong", level: "N5" },
    { kanji: "弱い", reading: "よわい", meaning: "Weak", level: "N5" },
    { kanji: "太い", reading: "ふとい", meaning: "Thick / Fat", level: "N5" },
    { kanji: "細い", reading: "ほそい", meaning: "Thin / Slender", level: "N5" },
    { kanji: "段々", reading: "だんだん", meaning: "Gradually", level: "N5" },
    { kanji: "直ぐに", reading: "すぐに", meaning: "Immediately", level: "N5" },
    // Nouns - Animals & Nature
    { kanji: "犬", reading: "いぬ", meaning: "Dog", level: "N5" },
    { kanji: "猫", reading: "ねこ", meaning: "Cat", level: "N5" },
    { kanji: "鳥", reading: "とり", meaning: "Bird", level: "N5" },
    { kanji: "牛", reading: "うし", meaning: "Cow / Cattle", level: "N5" },
    { kanji: "馬", reading: "うま", meaning: "Horse", level: "N5" },
    { kanji: "花", reading: "はな", meaning: "Flower", level: "N5" },
    { kanji: "池", reading: "いけ", meaning: "Pond", level: "N5" },
    { kanji: "庭", reading: "にわ", meaning: "Garden / Yard", level: "N5" },

    // Nouns - Transportation (Katakana focus)
    { kanji: "バス", reading: "ばす", meaning: "Bus", level: "N5" },
    { kanji: "タクシー", reading: "たくしー", meaning: "Taxi", level: "N5" },
    { kanji: "飛行機", reading: "ひこうき", meaning: "Airplane", level: "N5" },
    { kanji: "地下鉄", reading: "ちかてつ", meaning: "Subway", level: "N5" },
    { kanji: "自転車", reading: "じてんしゃ", meaning: "Bicycle", level: "N5" },
    { kanji: "切符", reading: "きっぷ", meaning: "Ticket", level: "N5" },

    // Nouns & Verbs - Clothing (The "Wearing" logic is tricky in N5)
    { kanji: "帽子", reading: "ぼうし", meaning: "Hat / Cap", level: "N5" },
    { kanji: "眼鏡", reading: "めがね", meaning: "Glasses", level: "N5" },
    { kanji: "被る", reading: "かぶる", meaning: "To put on (head/hat)", level: "N5" },
    { kanji: "履く", reading: "はく", meaning: "To put on (shoes/pants)", level: "N5" },
    { kanji: "掛ける", reading: "かける", meaning: "To put on (glasses)", level: "N5" },
    { kanji: "締める", reading: "しめる", meaning: "To tie / fasten (belt/tie)", level: "N5" },

    // Adverbs & Conjunctions (The "Grammar" Words)
    { kanji: "一緒に", reading: "いっしょに", meaning: "Together", level: "N5" },
    { kanji: "一人で", reading: "ひとりで", meaning: "Alone", level: "N5" },
    { kanji: "とても", reading: "とても", meaning: "Very", level: "N5" },
    { kanji: "あまり", reading: "あまり", meaning: "Not very (with negative)", level: "N5" },
    { kanji: "全然", reading: "ぜんぜん", meaning: "Not at all (with negative)", level: "N5" },
    { kanji: "多分", reading: "たぶん", meaning: "Probably / Perhaps", level: "N5" },
    { kanji: "本当", reading: "ほんとう", meaning: "Truth / Really", level: "N5" },
    { kanji: "直ぐに", reading: "すぐに", meaning: "Immediately", level: "N5" },
    { kanji: "大抵", reading: "たいてい", meaning: "Usually", level: "N5" },
    { kanji: "一番", reading: "いちばん", meaning: "Number one / Best", level: "N5" },
    { kanji: "全部", reading: "ぜんぶ", meaning: "All / Everything", level: "N5" },
    { kanji: "半ぶん", reading: "はんぶん", meaning: "Half", level: "N5" },

    // Verbs - Daily Life Actions
    { kanji: "消す", reading: "けす", meaning: "To turn off / erase", level: "N5" },
    { kanji: "点ける", reading: "つける", meaning: "To turn on", level: "N5" },
    { kanji: "洗う", reading: "あらう", meaning: "To wash", level: "N5" },
    { kanji: "浴びる", reading: "あびる", meaning: "To take (a shower)", level: "N5" },
    { kanji: "磨く", reading: "みがく", meaning: "To brush / polish", level: "N5" },
    { kanji: "引く", reading: "ひく", meaning: "To pull", level: "N5" },
    { kanji: "押す", reading: "おす", meaning: "To push", level: "N5" },
    { kanji: "曲がる", reading: "まがる", meaning: "To turn (corner)", level: "N5" },
    { kanji: "止まる", reading: "とまる", meaning: "To stop", level: "N5" },
    { kanji: "困る", reading: "こまる", meaning: "To be in trouble", level: "N5" },

    // Misc High Frequency
    { kanji: "切手", reading: "きって", meaning: "Postage stamp", level: "N5" },
    { kanji: "封筒", reading: "ふうとう", meaning: "Envelope", level: "N5" },
    { kanji: "葉書", reading: "はがき", meaning: "Postcard", level: "N5" },
    { kanji: "石鹸", reading: "せっけん", meaning: "Soap", level: "N5" },
    { kanji: "茶碗", reading: "ちゃわん", meaning: "Rice bowl / Cup", level: "N5" },

    // Health & Sickness
    { kanji: "病気", reading: "びょうき", meaning: "Sickness / Illness", level: "N5" },
    { kanji: "薬", reading: "くすり", meaning: "Medicine", level: "N5" },
    { kanji: "医者", reading: "いしゃ", meaning: "Doctor", level: "N5" },
    { kanji: "病院", reading: "びょういん", meaning: "Hospital", level: "N5" },

    // Communication & Media
    { kanji: "ニュース", reading: "にゅーす", meaning: "News", level: "N5" },
    { kanji: "ラジオ", reading: "らじお", meaning: "Radio", level: "N5" },
    { kanji: "テレビ", reading: "てれび", meaning: "Television", level: "N5" },
    { kanji: "言葉", reading: "ことば", meaning: "Word / Language", level: "N5" },
    { kanji: "話", reading: "はなし", meaning: "Talk / Story", level: "N5" },

    // School, Work & Testing
    { kanji: "試験", reading: "しけん", meaning: "Examination / Test", level: "N5" },
    { kanji: "練習", reading: "れんしゅう", meaning: "Practice", level: "N5" },
    { kanji: "宿題", reading: "しゅくだい", meaning: "Homework", level: "N5" },
    { kanji: "授業", reading: "じゅぎょう", meaning: "Lesson / Class", level: "N5" },
    { kanji: "意味", reading: "いみ", meaning: "Meaning", level: "N5" },
    { kanji: "質問", reading: "しつもん", meaning: "Question", level: "N5" },

    // Verbs - Specific Actions
    { kanji: "置く", reading: "おく", meaning: "To put / To place", level: "N5" },
    { kanji: "作る", reading: "つくる", meaning: "To make / create", level: "N5" },
    { kanji: "使う", reading: "つかう", meaning: "To use", level: "N5" },
    { kanji: "手伝う", reading: "てつだう", meaning: "To help / assist", level: "N5" },
    { kanji: "呼ぶ", reading: "よぶ", meaning: "To call / invite", level: "N5" },
    { kanji: "喋る", reading: "しゃべる", meaning: "To chatter / talk", level: "N5" },
    { kanji: "覚える", reading: "おぼえる", meaning: "To remember / memorize", level: "N5" },
    { kanji: "忘れる", reading: "わすれる", meaning: "To forget", level: "N5" },

    // Adverbs of Degree & Frequency
    { kanji: "大抵", reading: "たいてい", meaning: "Usually / Mostly", level: "N5" },
    { kanji: "時々", reading: "ときどき", meaning: "Sometimes", level: "N5" },
    { kanji: "全然", reading: "ぜんぜん", meaning: "Not at all (with negative)", level: "N5" },
    { kanji: "多分", reading: "たぶん", meaning: "Probably / Maybe", level: "N5" },
    { kanji: "少し", reading: "すこし", meaning: "A little", level: "N5" },
    { kanji: "もっと", reading: "もっと", meaning: "More", level: "N5" },
    { kanji: "大変", reading: "たいへん", meaning: "Very / Awful", level: "N5" },

    // People & Social
    { kanji: "皆さん", reading: "みなさん", meaning: "Everyone", level: "N5" },
    { kanji: "誰か", reading: "だれか", meaning: "Someone", level: "N5" },
    { kanji: "大人", reading: "おとな", meaning: "Adult", level: "N5" },
    { kanji: "留学生", reading: "りゅうがくせい", meaning: "Foreign student", level: "N5" },

    // Misc Nouns
    { kanji: "切符", reading: "きっぷ", meaning: "Ticket", level: "N5" },
    { kanji: "財布", reading: "さいふ", meaning: "Wallet / Purse", level: "N5" },
    { kanji: "鍵", reading: "かぎ", meaning: "Key", level: "N5" },
    { kanji: "傘", reading: "かさ", meaning: "Umbrella", level: "N5" },
    { kanji: "鞄", reading: "かばん", meaning: "Bag / Basket", level: "N5" },
    { kanji: "箱", reading: "はこ", meaning: "Box", level: "N5" },

    // Final Adjectives
    { kanji: "同じ", reading: "おなじ", meaning: "Same", level: "N5" },
    { kanji: "色々", reading: "いろいろ", meaning: "Various", level: "N5" },
    { kanji: "上手", reading: "じょうず", meaning: "Skillful / Good at", level: "N5" },
    { kanji: "下手", reading: "へた", meaning: "Unskillful / Bad at", level: "N5" },

    // The Four Seasons
    { kanji: "春", reading: "はる", meaning: "Spring", level: "N5" },
    { kanji: "夏", reading: "なつ", meaning: "Summer", level: "N5" },
    { kanji: "秋", reading: "あき", meaning: "Autumn", level: "N5" },
    { kanji: "冬", reading: "ふゆ", meaning: "Winter", level: "N5" },

    // Irregular Calendar Dates (The "One to Ten" Gauntlet)
    { kanji: "一日", reading: "ついたち", meaning: "1st day of the month", level: "N5" },
    { kanji: "二日", reading: "ふつか", meaning: "2nd day / Two days", level: "N5" },
    { kanji: "三日", reading: "みっか", meaning: "3rd day / Three days", level: "N5" },
    { kanji: "四日", reading: "よっか", meaning: "4th day / Four days", level: "N5" },
    { kanji: "五日", reading: "いつか", meaning: "5th day / Five days", level: "N5" },
    { kanji: "六日", reading: "むいか", meaning: "6th day / Six days", level: "N5" },
    { kanji: "七日", reading: "なのか", meaning: "7th day / Seven days", level: "N5" },
    { kanji: "八日", reading: "ようか", meaning: "8th day / Eight days", level: "N5" },
    { kanji: "九日", reading: "ここのか", meaning: "9th day / Nine days", level: "N5" },
    { kanji: "十日", reading: "とおか", meaning: "10th day / Ten days", level: "N5" },
    { kanji: "二十日", reading: "はつか", meaning: "20th day / Twenty days", level: "N5" },

    // Dimensions & Space
    { kanji: "広い", reading: "ひろい", meaning: "Wide / Spacious", level: "N5" },
    { kanji: "狭い", reading: "せまい", meaning: "Narrow / Cramped", level: "N5" },
    { kanji: "厚い", reading: "あつい", meaning: "Thick (book/plank)", level: "N5" },
    { kanji: "薄い", reading: "うすい", meaning: "Thin / Weak (taste)", level: "N5" },

    // The "Automatic" Verbs (Intransitive)
    { kanji: "開く", reading: "あく", meaning: "To open (e.g. door opens)", level: "N5" },
    { kanji: "閉まる", reading: "しまる", meaning: "To close (e.g. shop closes)", level: "N5" },
    { kanji: "点く", reading: "つく", meaning: "To turn on (light)", level: "N5" },
    { kanji: "消える", reading: "きえる", meaning: "To go out / disappear", level: "N5" },

    // Katakana - Work & Daily Life
    { kanji: "ノート", reading: "のーと", meaning: "Notebook", level: "N5" },
    { kanji: "ペン", reading: "ぺん", meaning: "Pen", level: "N5" },
    { kanji: "ボウルペン", reading: "ぼーるぺん", meaning: "Ballpoint pen", level: "N5" },
    { kanji: "ポスト", reading: "ぽすと", meaning: "Mailbox / Postbox", level: "N5" },
    { kanji: "スプーン", reading: "すぷーん", meaning: "Spoon", level: "N5" },
    { kanji: "ナイフ", reading: "ないふ", meaning: "Knife", level: "N5" },
    { kanji: "フォーク", reading: "ふぉーく", meaning: "Fork", level: "N5" },
    { kanji: "コップ", reading: "こっぷ", meaning: "Glass / Cup", level: "N5" },
    { kanji: "ストーブ", reading: "すとーぶ", meaning: "Heater / Stove", level: "N5" },
    { kanji: "エレベーター", reading: "えれべーたー", meaning: "Elevator", level: "N5" },

    // Misc Adjectives & Adverbs
    { kanji: "大切", reading: "たいせつ", meaning: "Important / Precious", level: "N5" },
    { kanji: "上手い", reading: "うまい", meaning: "Good / Tasty", level: "N5" },
    { kanji: "直ぐに", reading: "すぐに", meaning: "Immediately", level: "N5" },
    { kanji: "大抵", reading: "たいてい", meaning: "Usually", level: "N5" },
  ],
 N4: [
    // Nouns - Daily Life & Society
    { kanji: "住所", reading: "じゅうしょ", meaning: "Address", level: "N4" },
    { kanji: "近所", reading: "きんじょ", meaning: "Neighborhood", level: "N4" },
    { kanji: "道具", reading: "どうぐ", meaning: "Tool / Utensil", level: "N4" },
    { kanji: "意味", reading: "いみ", meaning: "Meaning", level: "N4" },
    { kanji: "理由", reading: "りゆう", meaning: "Reason", level: "N4" },
    { kanji: "意見", reading: "いけん", meaning: "Opinion", level: "N4" },
    { kanji: "予定", reading: "よてい", meaning: "Schedule / Plan", level: "N4" },
    { kanji: "準備", reading: "じゅんび", meaning: "Preparation", level: "N4" },
    { kanji: "報告", reading: "ほうこく", meaning: "Report", level: "N4" },
    { kanji: "贈り物", reading: "おくりもの", meaning: "Gift / Present", level: "N4" },
    { kanji: "お祝い", reading: "おいわい", meaning: "Celebration", level: "N4" },
    { kanji: "お見舞い", reading: "おみまい", meaning: "Visiting a sick person", level: "N4" },

    // Nouns - Food & Kitchen
    { kanji: "米", reading: "こめ", meaning: "Rice (uncooked)", level: "N4" },
    { kanji: "小麦粉", reading: "こむぎこ", meaning: "Flour", level: "N4" },
    { kanji: "牛乳", reading: "ぎゅうにゅう", meaning: "Milk", level: "N4" },
    { kanji: "醤油", reading: "しょうゆ", meaning: "Soy sauce", level: "N4" },
    { kanji: "塩", reading: "しお", meaning: "Salt", level: "N4" },
    { kanji: "砂糖", reading: "さとう", meaning: "Sugar", level: "N4" },

    // Verbs - Movement & Interaction
    { kanji: "届ける", reading: "とどける", meaning: "To deliver / reach", level: "N4" },
    { kanji: "迎える", reading: "むかえる", meaning: "To welcome / go to meet", level: "N4" },
    { kanji: "案内する", reading: "あんないする", meaning: "To guide / show around", level: "N4" },
    { kanji: "紹介する", reading: "しょうかいする", meaning: "To introduce", level: "N4" },
    { kanji: "相談する", reading: "そうだんする", meaning: "To consult / discuss", level: "N4" },
    { kanji: "連絡する", reading: "れんらくする", meaning: "To contact", level: "N4" },
    { kanji: "翻訳する", reading: "ほんやくする", meaning: "To translate (written)", level: "N4" },
    { kanji: "通訳する", reading: "つうやくする", meaning: "To interpret (oral)", level: "N4" },
    { kanji: "注意する", reading: "ちゅういする", meaning: "To caution / watch out", level: "N4" },
    { kanji: "反対する", reading: "はんたいする", meaning: "To oppose", level: "N4" },
    { kanji: "賛成する", reading: "さんせいする", meaning: "To agree", level: "N4" },

    // Verbs - Emotions & Reactions
    { kanji: "喜ぶ", reading: "よろこぶ", meaning: "To be happy / glad", level: "N4" },
    { kanji: "驚く", reading: "おどろく", meaning: "To be surprised", level: "N4" },
    { kanji: "怒る", reading: "おこる", meaning: "To get angry", level: "N4" },
    { kanji: "叱る", reading: "しかる", meaning: "To scold", level: "N4" },
    { kanji: "褒める", reading: "ほめる", meaning: "To praise", level: "N4" },

    // Adjectives - Character & Conditions
    { kanji: "丁寧", reading: "ていねい", meaning: "Polite / Careful", level: "N4" },
    { kanji: "失礼", reading: "しつれい", meaning: "Rude / Excuse me", level: "N4" },
    { kanji: "複雑", reading: "ふくざつ", meaning: "Complex", level: "N4" },
    { kanji: "簡単", reading: "かんたん", meaning: "Simple / Easy", level: "N4" },
    { kanji: "変", reading: "へん", meaning: "Strange / Weird", level: "N4" },
    { kanji: "危険", reading: "きけん", meaning: "Dangerous", level: "N4" },
    { kanji: "残念", reading: "ざんねん", meaning: "Disappointing / A pity", level: "N4" },
    { kanji: "心配", reading: "しんぱい", meaning: "Worrying", level: "N4" },
    { kanji: "十分", reading: "じゅうぶん", meaning: "Enough / Sufficient", level: "N4" },
    { kanji: "不便", reading: "ふべん", meaning: "Inconvenient", level: "N4" },
    { kanji: "便利", reading: "べんり", meaning: "Convenient", level: "N4" },

    // Nouns - Sports & Health
    { kanji: "運動", reading: "うんどう", meaning: "Exercise", level: "N4" },
    { kanji: "試合", reading: "しあい", meaning: "Match / Game", level: "N4" },
    { kanji: "故障", reading: "こしょう", meaning: "Breakdown / Failure", level: "N4" },
    { kanji: "修理", reading: "しゅうり", meaning: "Repair", level: "N4" },
    { kanji: "入院", reading: "にゅういん", meaning: "Hospitalization", level: "N4" },
    { kanji: "退院", reading: "たいいん", meaning: "Discharge from hospital", level: "N4" },
    // Nouns - Housing & Living Space
    { kanji: "居間", reading: "いま", meaning: "Living room", level: "N4" },
    { kanji: "玄関", reading: "げんかん", meaning: "Entrance / Entryway", level: "N4" },
    { kanji: "廊下", reading: "ろうか", meaning: "Corridor / Hallway", level: "N4" },
    { kanji: "畳", reading: "たたみ", meaning: "Tatami mat", level: "N4" },
    { kanji: "壁", reading: "かべ", meaning: "Wall", level: "N4" },
    { kanji: "台所", reading: "だいどころ", meaning: "Kitchen", level: "N4" },
    { kanji: "近所", reading: "きんじょ", meaning: "Neighborhood", level: "N4" },
    { kanji: "住所", reading: "じゅうしょ", meaning: "Address", level: "N4" },

    // Nouns - Education & Learning
    { kanji: "予習", reading: "よしゅう", meaning: "Preparation for a lesson", level: "N4" },
    { kanji: "復習", reading: "ふくしゅう", meaning: "Review (of a lesson)", level: "N4" },
    { kanji: "教育", reading: "きょういく", meaning: "Education", level: "N4" },
    { kanji: "数学", reading: "すうがく", meaning: "Mathematics", level: "N4" },
    { kanji: "歴史", reading: "れきし", meaning: "History", level: "N4" },
    { kanji: "地理", reading: "ちり", meaning: "Geography", level: "N4" },
    { kanji: "成績", reading: "せいせき", meaning: "Grade / Result", level: "N4" },
    { kanji: "奨学金", reading: "しょうがくきん", meaning: "Scholarship", level: "N4" },

    // Nouns - Nature & Weather (N4 Level)
    { kanji: "地震", reading: "じしん", meaning: "Earthquake", level: "N4" },
    { kanji: "台風", reading: "たいふう", meaning: "Typhoon", level: "N4" },
    { kanji: "津波", reading: "つなみ", meaning: "Tsunami", level: "N4" },
    { kanji: "洪水", reading: "こうずい", meaning: "Flood", level: "N4" },
    { kanji: "星", reading: "ほし", meaning: "Star", level: "N4" },
    { kanji: "海岸", reading: "かいがん", meaning: "Coast / Seashore", level: "N4" },
    { kanji: "砂", reading: "すな", meaning: "Sand", level: "N4" },
    { kanji: "島", reading: "しま", meaning: "Island", level: "N4" },

    // Nouns - Business & Office
    { kanji: "会議", reading: "かいぎ", meaning: "Meeting / Conference", level: "N4" },
    { kanji: "事務所", reading: "じむしょ", meaning: "Office", level: "N4" },
    { kanji: "公務員", reading: "こうむいん", meaning: "Civil servant / Gov worker", level: "N4" },
    { kanji: "出張", reading: "しゅっちょう", meaning: "Business trip", level: "N4" },
    { kanji: "給料", reading: "きゅうりょう", meaning: "Salary / Pay", level: "N4" },
    { kanji: "産業", reading: "さんぎょう", meaning: "Industry", level: "N4" },

    // Verbs - Specific States & Actions
    { kanji: "沸かす", reading: "わかす", meaning: "To boil (water)", level: "N4" },
    { kanji: "冷やす", reading: "ひやす", meaning: "To cool / chill", level: "N4" },
    { kanji: "乾く", reading: "かわく", meaning: "To get dry", level: "N4" },
    { kanji: "濡れる", reading: "ぬれる", meaning: "To get wet", level: "N4" },
    { kanji: "折る", reading: "おる", meaning: "To break / fold", level: "N4" },
    { kanji: "割る", reading: "わる", meaning: "To smash / divide", level: "N4" },
    { kanji: "揺れる", reading: "ゆれる", meaning: "To shake / sway", level: "N4" },
    { kanji: "祈る", reading: "いのる", meaning: "To pray", level: "N4" },
    { kanji: "祝う", reading: "いわう", meaning: "To celebrate", level: "N4" },
    { kanji: "飾る", reading: "かざる", meaning: "To decorate", level: "N4" },

    // Adjectives & Adverbs
    { kanji: "酷い", reading: "ひどい", meaning: "Terrible / Awful", level: "N4" },
    { kanji: "熱心", reading: "ねっしん", meaning: "Enthusiastic / Zealous", level: "N4" },
    { kanji: "適当", reading: "てきとう", meaning: "Suitable / Random", level: "N4" },
    { kanji: "丁寧", reading: "ていねい", meaning: "Polite / Careful", level: "N4" },
    { kanji: "非常に", reading: "ひじょうに", meaning: "Extremely", level: "N4" },
    { kanji: "殆ど", reading: "ほとんど", meaning: "Mostly / Almost", level: "N4" },
    { kanji: "急に", reading: "きゅうに", meaning: "Suddenly", level: "N4" },
    { kanji: "将来", reading: "しょうらい", meaning: "Future (personal)", level: "N4" },
    // Nouns - Medicine & Health (N4 Deep Dive)
    { kanji: "歯医者", reading: "はいしゃ", meaning: "Dentist", level: "N4" },
    { kanji: "怪我", reading: "けが", meaning: "Injury", level: "N4" },
    { kanji: "注射", reading: "ちゅうしゃ", meaning: "Injection", level: "N4" },
    { kanji: "手術", reading: "しゅじゅつ", meaning: "Surgery", level: "N4" },
    { kanji: "患者", reading: "かんじゃ", meaning: "Patient", level: "N4" },
    { kanji: "体温", reading: "たいおん", meaning: "Body temperature", level: "N4" },
    { kanji: "気分", reading: "きぶん", meaning: "Feeling / Mood", level: "N4" },

    // Nouns - Shopping & Finance
    { kanji: "現金", reading: "げんきん", meaning: "Cash", level: "N4" },
    { kanji: "お釣り", reading: "おつり", meaning: "Change (money)", level: "N4" },
    { kanji: "勘定", reading: "かんじょう", meaning: "Bill / Check", level: "N4" },
    { kanji: "値段", reading: "ねだん", meaning: "Price", level: "N4" },
    { kanji: "売り場", reading: "うりば", meaning: "Sales counter / Department", level: "N4" },
    { kanji: "品物", reading: "しなもの", meaning: "Goods / Articles", level: "N4" },
    { kanji: "広告", reading: "こうこく", meaning: "Advertisement", level: "N4" },

    // Nouns - Social Institutions & Public Life
    { kanji: "市役所", reading: "しやくしょ", meaning: "City hall", level: "N4" },
    { kanji: "警察", reading: "けいさつ", meaning: "Police", level: "N4" },
    { kanji: "消防署", reading: "しょうぼうしょ", meaning: "Fire station", level: "N4" },
    { kanji: "美術館", reading: "びじゅつかん", meaning: "Art museum", level: "N4" },
    { kanji: "博物館", reading: "はくぶつかん", meaning: "Museum", level: "N4" },
    { kanji: "大使館", reading: "たいしかん", meaning: "Embassy", level: "N4" },
    { kanji: "世界", reading: "せかい", meaning: "The world", level: "N4" },
    { kanji: "国際", reading: "こくさい", meaning: "International", level: "N4" },

    // Verbs - Movement & Physical Actions
    { kanji: "拾う", reading: "ひろう", meaning: "To pick up / gather", level: "N4" },
    { kanji: "捨てる", reading: "すてる", meaning: "To throw away", level: "N4" },
    { kanji: "捕まえる", reading: "つかまえる", meaning: "To catch / arrest", level: "N4" },
    { kanji: "逃げる", reading: "にげる", meaning: "To escape / run away", level: "N4" },
    { kanji: "滑る", reading: "すべる", meaning: "To slide / slip", level: "N4" },
    { kanji: "痩せる", reading: "やせる", meaning: "To lose weight / become thin", level: "N4" },
    { kanji: "太る", reading: "ふとる", meaning: "To gain weight / become fat", level: "N4" },
    { kanji: "踏む", reading: "ふむ", meaning: "To step on", level: "N4" },

    // Verbs - Abstract & Mental
    { kanji: "信じる", reading: "しんじる", meaning: "To believe / trust", level: "N4" },
    { kanji: "迷う", reading: "まよう", meaning: "To get lost / hesitate", level: "N4" },
    { kanji: "考える", reading: "かんがえる", meaning: "To think about / consider", level: "N4" },
    { kanji: "思い出す", reading: "おもいだす", meaning: "To recall / remember", level: "N4" },
    { kanji: "比べる", reading: "くらべる", meaning: "To compare", level: "N4" },
    { kanji: "似る", reading: "にる", meaning: "To resemble / be similar", level: "N4" },

    // Adverbs & Connectives
    { kanji: "一度に", reading: "いちどに", meaning: "All at once", level: "N4" },
    { kanji: "特別に", reading: "とくべつに", meaning: "Specially", level: "N4" },
    { kanji: "絶対に", reading: "ぜったいに", meaning: "Absolutely / Definitely", level: "N4" },
    { kanji: "一生懸命", reading: "いっしょうけんめい", meaning: "With all one's effort", level: "N4" },
    { kanji: "将来", reading: "しょうらい", meaning: "Future (one's own)", level: "N4" },
    { kanji: "最近", reading: "さいきん", meaning: "Recently / Lately", level: "N4" },
    { kanji: "以前", reading: "いぜん", meaning: "Ago / Before / Formerly", level: "N4" },
    // Verbs - Cooking & Kitchen Actions
    { kanji: "焼く", reading: "やく", meaning: "To grill / bake / toast", level: "N4" },
    { kanji: "煮る", reading: "にる", meaning: "To boil / stew / simmer", level: "N4" },
    { kanji: "揚げる", reading: "あげる", meaning: "To deep fry", level: "N4" },
    { kanji: "混ぜる", reading: "まぜる", meaning: "To mix / stir", level: "N4" },
    { kanji: "沸く", reading: "わく", meaning: "To boil (intransitive - the water boils)", level: "N4" },
    { kanji: "味", reading: "あじ", meaning: "Taste / Flavor", level: "N4" },
    { kanji: "材料", reading: "ざいりょう", meaning: "Ingredients / Materials", level: "N4" },
    { kanji: "夕食", reading: "ゆうしょく", meaning: "Evening meal / Dinner", level: "N4" },

    // Nouns - Geography & Environment
    { kanji: "地球", reading: "ちきゅう", meaning: "The Earth", level: "N4" },
    { kanji: "空気", reading: "くうき", meaning: "Air / Atmosphere", level: "N4" },
    { kanji: "自然", reading: "しぜん", meaning: "Nature", level: "N4" },
    { kanji: "景色", reading: "けしき", meaning: "Scenery / View", level: "N4" },
    { kanji: "季節", reading: "きせつ", meaning: "Season", level: "N4" },
    { kanji: "気温", reading: "きおん", meaning: "Air temperature", level: "N4" },
    { kanji: "太陽", reading: "たいよう", meaning: "The Sun", level: "N4" },
    { kanji: "月", reading: "つき", meaning: "The Moon", level: "N4" },
    { kanji: "森", reading: "もり", meaning: "Forest", level: "N4" },
    { kanji: "林", reading: "はやし", meaning: "Woods / Thicket", level: "N4" },
    { kanji: "湖", reading: "みずうみ", meaning: "Lake", level: "N4" },
    { kanji: "池", reading: "いけ", meaning: "Pond", level: "N4" },
    { kanji: "海岸", reading: "かいがん", meaning: "Seashore / Coast", level: "N4" },

    // Nouns - Advanced Clothing & Katakana
    { kanji: "アクセサリー", reading: "あくせさりー", meaning: "Accessories", level: "N4" },
    { kanji: "サンダル", reading: "さんだる", meaning: "Sandals", level: "N4" },
    { kanji: "ジャケット", reading: "じゃけっと", meaning: "Jacket", level: "N4" },
    { kanji: "ジーンズ", reading: "じーんず", meaning: "Jeans", level: "N4" },
    { kanji: "スーツ", reading: "すーつ", meaning: "Suit", level: "N4" },
    { kanji: "セーター", reading: "せーたー", meaning: "Sweater", level: "N4" },
    { kanji: "下着", reading: "したぎ", meaning: "Underwear", level: "N4" },
    { kanji: "似合う", reading: "にあう", meaning: "To suit / look good on", level: "N4" },
    { kanji: "着替える", reading: "きがえる", meaning: "To change clothes", level: "N4" },

    // Verbs - Movement & Daily States
    { kanji: "運ぶ", reading: "はこぶ", meaning: "To carry / transport", level: "N4" },
    { kanji: "届く", reading: "とどく", meaning: "To reach / be delivered", level: "N4" },
    { kanji: "遅れる", reading: "おくれる", meaning: "To be late / delayed", level: "N4" },
    { kanji: "間に合う", reading: "まにあう", meaning: "To be in time for", level: "N4" },
    { kanji: "通う", reading: "かよう", meaning: "To commute", level: "N4" },
    { kanji: "寄る", reading: "よる", meaning: "To stop by / drop in", level: "N4" },
    { kanji: "汚れる", reading: "よごれる", meaning: "To get dirty", level: "N4" },
    { kanji: "壊れる", reading: "こわれる", meaning: "To break / be broken", level: "N4" },
    { kanji: "倒れる", reading: "たおれる", meaning: "To fall over / collapse", level: "N4" },

    // Adjectives - Physical & Sensory
    { kanji: "柔らかい", reading: "やわらかい", meaning: "Soft / Tender", level: "N4" },
    { kanji: "硬い", reading: "かたい", meaning: "Hard / Stiff", level: "N4" },
    { kanji: "苦い", reading: "にがい", meaning: "Bitter", level: "N4" },
    { kanji: "酸っぱい", reading: "すっぱい", meaning: "Sour", level: "N4" },
    { kanji: "濃い", reading: "こい", meaning: "Thick (liquid) / Dark (color) / Strong (taste)", level: "N4" },
    { kanji: "薄い", reading: "うすい", meaning: "Thin / Pale / Weak (taste)", level: "N4" },
    { kanji: "浅い", reading: "あさい", meaning: "Shallow", level: "N4" },
    { kanji: "深い", reading: "ふかい", meaning: "Deep", level: "N4" },
    // Nouns - Society, World & Law
    { kanji: "政治", reading: "せいじ", meaning: "Politics", level: "N4" },
    { kanji: "法律", reading: "ほうりつ", meaning: "Law", level: "N4" },
    { kanji: "経済", reading: "けいざい", meaning: "Economy / Economics", level: "N4" },
    { kanji: "貿易", reading: "ぼうえき", meaning: "Trade (foreign)", level: "N4" },
    { kanji: "輸出", reading: "ゆしゅつ", meaning: "Export", level: "N4" },
    { kanji: "輸入", reading: "ゆにゅう", meaning: "Import", level: "N4" },
    { kanji: "文化", reading: "ぶんか", meaning: "Culture", level: "N4" },
    { kanji: "平和", reading: "へいわ", meaning: "Peace", level: "N4" },
    { kanji: "戦争", reading: "せんそう", meaning: "War", level: "N4" },
    { kanji: "市民", reading: "しみん", meaning: "Citizen", level: "N4" },

    // Nouns - Work & Planning
    { kanji: "工場", reading: "こうじょう", meaning: "Factory", level: "N4" },
    { kanji: "計画", reading: "けいかく", meaning: "Plan / Project", level: "N4" },
    { kanji: "目的", reading: "もくてき", meaning: "Purpose / Goal", level: "N4" },
    { kanji: "番組", reading: "ばんぐみ", meaning: "TV or Radio program", level: "N4" },
    { kanji: "相手", reading: "あいて", meaning: "Partner / Opponent", level: "N4" },
    { kanji: "約束", reading: "やくそく", meaning: "Promise / Appointment", level: "N4" },

    // Verbs - Expression & Social States
    { kanji: "表す", reading: "あらわす", meaning: "To express / represent", level: "N4" },
    { kanji: "表れる", reading: "あらわれる", meaning: "To appear / be expressed", level: "N4" },
    { kanji: "訳す", reading: "やくす", meaning: "To translate", level: "N4" },
    { kanji: "集まる", reading: "あつまる", meaning: "To gather / assemble (intransitive)", level: "N4" },
    { kanji: "集める", reading: "あつめる", meaning: "To collect / gather (transitive)", level: "N4" },
    { kanji: "進む", reading: "すすむ", meaning: "To advance / go forward", level: "N4" },
    { kanji: "続く", reading: "つづく", meaning: "To continue (intransitive)", level: "N4" },
    { kanji: "続ける", reading: "つづける", meaning: "To continue (transitive)", level: "N4" },

    // Adverbs - Precision & Completion (The "B" and "S" words)
    { kanji: "はっきり", reading: "はっきり", meaning: "Clearly / Distinctly", level: "N4" },
    { kanji: "すっかり", reading: "すっかり", meaning: "Completely / Totally", level: "N4" },
    { kanji: "ぴったり", reading: "ぴったり", meaning: "Exactly / Perfectly", level: "N4" },
    { kanji: "びっくり", reading: "びっくり", meaning: "To be surprised (adverbial use)", level: "N4" },
    { kanji: "うっかり", reading: "うっかり", meaning: "Carelessly / Thoughtlessly", level: "N4" },
    { kanji: "やっと", reading: "やっと", meaning: "Finally / At last", level: "N4" },
    { kanji: "たまに", reading: "たまに", meaning: "Occasionally / Once in a while", level: "N4" },

    // Adjectives - Personality & Conditions
    { kanji: "真面目", reading: "まじめ", meaning: "Serious / Earnest", level: "N4" },
    { kanji: "親切", reading: "しんせつ", meaning: "Kind", level: "N4" },
    { kanji: "素晴らしい", reading: "すばらしい", meaning: "Wonderful / Splendid", level: "N4" },
    { kanji: "恥ずかしい", reading: "はずかしい", meaning: "Embarrassed / Ashamed", level: "N4" },
    { kanji: "無理", reading: "むり", meaning: "Impossible / Unreasonable", level: "N4" },
    { kanji: "無駄", reading: "むだ", meaning: "Useless / Wasteful", level: "N4" },
    { kanji: "盛ん", reading: "さかん", meaning: "Popular / Prosperous", level: "N4" },
    { kanji: "熱心", reading: "ねっしん", meaning: "Enthusiastic / Zealous", level: "N4" },
    // Verbs - The Giving & Receiving Cycle (N4 Core)
    { kanji: "差し上げる", reading: "さしあげる", meaning: "To give (polite/to superior)", level: "N4" },
    { kanji: "くださる", reading: "くださる", meaning: "To give (superior to me)", level: "N4" },
    { kanji: "頂く", reading: "いただく", meaning: "To receive (polite)", level: "N4" },
    { kanji: "やる", reading: "やる", meaning: "To give (to inferior/pets/plants)", level: "N4" },
    { kanji: "送る", reading: "おくる", meaning: "To send / give a gift", level: "N4" },
    { kanji: "招待する", reading: "しょうたいする", meaning: "To invite", level: "N4" },

    // Katakana - Daily Life & Technology
    { kanji: "アパート", reading: "あぱーと", meaning: "Apartment", level: "N4" },
    { kanji: "エスカレーター", reading: "えすかれーたー", meaning: "Escalator", level: "N4" },
    { kanji: "オートバイ", reading: "おおとばい", meaning: "Motorcycle", level: "N4" },
    { kanji: "ガソリン", reading: "がそりん", meaning: "Gasoline", level: "N4" },
    { kanji: "ガラス", reading: "がらす", meaning: "Glass (material)", level: "N4" },
    { kanji: "カーテン", reading: "かーてん", meaning: "Curtain", level: "N4" },
    { kanji: "シャワー", reading: "しゃわー", meaning: "Shower", level: "N4" },
    { kanji: "タイプ", reading: "たいぷ", meaning: "Type / Style", level: "N4" },
    { kanji: "テキスト", reading: "てきすと", meaning: "Textbook / Text", level: "N4" },
    { kanji: "ベル", reading: "べる", meaning: "Bell", level: "N4" },
    { kanji: "ワープロ", reading: "わーぷろ", meaning: "Word processor", level: "N4" },

    // Verbs - Specific Actions & States
    { kanji: "捕まえる", reading: "つかまえる", meaning: "To catch / seize", level: "N4" },
    { kanji: "見つかる", reading: "みつかる", meaning: "To be found / discovered", level: "N4" },
    { kanji: "見つける", reading: "みつける", meaning: "To find / discover", level: "N4" },
    { kanji: "泊まる", reading: "とまる", meaning: "To stay (at a hotel, etc.)", level: "N4" },
    { kanji: "掛ける", reading: "かける", meaning: "To hang / sit / telephone", level: "N4" },
    { kanji: "祈る", reading: "いのる", meaning: "To pray", level: "N4" },
    { kanji: "踊る", reading: "おどる", meaning: "To dance", level: "N4" },
    { kanji: "噛む", reading: "かむ", meaning: "To bite / chew", level: "N4" },
    { kanji: "通う", reading: "かよう", meaning: "To commute / attend", level: "N4" },

    // Nouns - Life Events & Institutions
    { kanji: "入学", reading: "にゅうがく", meaning: "Entry into school", level: "N4" },
    { kanji: "卒業", reading: "そつぎょう", meaning: "Graduation", level: "N4" },
    { kanji: "講義", reading: "こうぎ", meaning: "Lecture", level: "N4" },
    { kanji: "出席", reading: "しゅっせき", meaning: "Attendance", level: "N4" },
    { kanji: "欠席", reading: "けっせき", meaning: "Absence", level: "N4" },
    { kanji: "行事", reading: "ぎょうじ", meaning: "Event / Function", level: "N4" },
    { kanji: "習慣", reading: "しゅうかん", meaning: "Custom / Habit", level: "N4" },

    // Adjectives & Adverbs - Condition & Time
    { kanji: "適当", reading: "てきとう", meaning: "Appropriate / Suitable", level: "N4" },
    { kanji: "特別", reading: "とくべつ", meaning: "Special", level: "N4" },
    { kanji: "最近", reading: "さいきん", meaning: "Recently", level: "N4" },
    { kanji: "以前", reading: "いぜん", meaning: "Previously / Before", level: "N4" },
    { kanji: "決して", reading: "けっして", meaning: "Never (with negative)", level: "N4" },
    { kanji: "殆ど", reading: "ほとんど", meaning: "Almost / Mostly", level: "N4" },
    { kanji: "急に", reading: "きゅうに", meaning: "Suddenly", level: "N4" },
    { kanji: "自由に", reading: "じゆうに", meaning: "Freely", level: "N4" },
    // Nouns & Adjectives - Human Character & Personality
    { kanji: "優しい", reading: "やさしい", meaning: "Kind / Gentle", level: "N4" },
    { kanji: "厳しい", reading: "きびしい", meaning: "Strict / Severe", level: "N4" },
    { kanji: "真面目", reading: "まじめ", meaning: "Serious / Earnest", level: "N4" },
    { kanji: "賢い", reading: "かしこい", meaning: "Wise / Clever", level: "N4" },
    { kanji: "意地悪", reading: "いじわる", meaning: "Mean / Spiteful", level: "N4" },
    { kanji: "勝手", reading: "かって", meaning: "Selfish / One's own way", level: "N4" },

    // Adjectives - Advanced Feelings & Emotions
    { kanji: "懐かしい", reading: "なつかしい", meaning: "Nostalgic / Dear", level: "N4" },
    { kanji: "恥ずかしい", reading: "はずかしい", meaning: "Embarrassed / Ashamed", level: "N4" },
    { kanji: "羨ましい", reading: "うらやましい", meaning: "Envious / Jealous", level: "N4" },
    { kanji: "誇り", reading: "ほこり", meaning: "Pride", level: "N4" },
    { kanji: "勇気", reading: "ゆうき", meaning: "Courage / Bravery", level: "N4" },
    { kanji: "安心", reading: "あんしん", meaning: "Relief / Peace of mind", level: "N4" },
    { kanji: "我慢", reading: "がまん", meaning: "Patience / Endurance", level: "N4" },

    // Nouns - Traffic & Transportation
    { kanji: "信号", reading: "しんごう", meaning: "Traffic light", level: "N4" },
    { kanji: "踏切", reading: "ふみきり", meaning: "Railway crossing", level: "N4" },
    { kanji: "角", reading: "かど", meaning: "Corner", level: "N4" },
    { kanji: "横断歩道", reading: "おうだんほどう", meaning: "Crosswalk", level: "N4" },
    { kanji: "道順", reading: "みちじゅん", meaning: "Itinerary / Route", level: "N4" },
    { kanji: "渋滞", reading: "じゅうたい", meaning: "Traffic jam", level: "N4" },
    { kanji: "高速道路", reading: "こうそくどうろ", meaning: "Highway / Expressway", level: "N4" },
    { kanji: "停車", reading: "ていしゃ", meaning: "Stopping of a vehicle", level: "N4" },
    { kanji: "発車", reading: "はっしゃ", meaning: "Departure of a vehicle", level: "N4" },
    { kanji: "乗客", reading: "じょうきゃく", meaning: "Passenger", level: "N4" },

    // Verbs - Interaction with Environment
    { kanji: "過ぎる", reading: "すぎる", meaning: "To pass / go past / exceed", level: "N4" },
    { kanji: "離れる", reading: "はなれる", meaning: "To separate / be distant", level: "N4" },
    { kanji: "ぶつかる", reading: "ぶつかる", meaning: "To bump into / collide", level: "N4" },
    { kanji: "揺れる", reading: "ゆれる", meaning: "To shake / sway", level: "N4" },
    { kanji: "邪魔", reading: "じゃま", meaning: "Hindrance / Obstacle", level: "N4" },

    // Nouns - Daily Living & Society
    { kanji: "習慣", reading: "しゅうかん", meaning: "Habit / Custom", level: "N4" },
    { kanji: "経験", reading: "けいけん", meaning: "Experience", level: "N4" },
    { kanji: "技術", reading: "ぎじゅつ", meaning: "Technology / Skill", level: "N4" },
    { kanji: "方法", reading: "ほうほう", meaning: "Method / Way", level: "N4" },
    { kanji: "機会", reading: "きかい", meaning: "Opportunity / Chance", level: "N4" },

    // Adverbs - The "Just In Time" Words
    { kanji: "間に合う", reading: "まにあう", meaning: "To be in time for", level: "N4" },
    { kanji: "丁度", reading: "ちょうど", meaning: "Exactly / Just", level: "N4" },
    { kanji: "遂に", reading: "ついに", meaning: "Finally / At last", level: "N4" },
    { kanji: "段々", reading: "だんだん", meaning: "Gradually", level: "N4" },
    { kanji: "どんどん", reading: "どんどん", meaning: "Rapidly / Steadily", level: "N4" },
    // Nouns - Art, Literature & Media
    { kanji: "芸術", reading: "げいじゅつ", meaning: "Art / The arts", level: "N4" },
    { kanji: "俳優", reading: "はいゆう", meaning: "Actor / Actress", level: "N4" },
    { kanji: "文学", reading: "ぶんがく", meaning: "Literature", level: "N4" },
    { kanji: "小説", reading: "しょうせつ", meaning: "Novel / Story", level: "N4" },
    { kanji: "物語", reading: "ものがたり", meaning: "Tale / Legend", level: "N4" },
    { kanji: "漫画", reading: "まんが", meaning: "Comic / Manga", level: "N4" },
    { kanji: "週刊誌", reading: "しゅうかんし", meaning: "Weekly magazine", level: "N4" },

    // Nouns - Science, Space & Environment
    { kanji: "宇宙", reading: "うちゅう", meaning: "Universe / Space", level: "N4" },
    { kanji: "科学", reading: "かがく", meaning: "Science", level: "N4" },
    { kanji: "化学", reading: "かがく", meaning: "Chemistry", level: "N4" },
    { kanji: "実験", reading: "じっけん", meaning: "Experiment", level: "N4" },
    { kanji: "発見", reading: "はっけん", meaning: "Discovery", level: "N4" },
    { kanji: "植物", reading: "しょくぶつ", meaning: "Plant / Vegetation", level: "N4" },
    { kanji: "資源", reading: "しげん", meaning: "Resources", level: "N4" },
    { kanji: "環境", reading: "かんきょう", meaning: "Environment", level: "N4" },
    { kanji: "太陽", reading: "たいよう", meaning: "The Sun", level: "N4" },

    // Nouns & Verbs - The Body & Health States
    { kanji: "健康", reading: "けんこう", meaning: "Health", level: "N4" },
    { kanji: "栄養", reading: "えいよう", meaning: "Nutrition", level: "N4" },
    { kanji: "汗", reading: "あせ", meaning: "Sweat", level: "N4" },
    { kanji: "涙", reading: "なみだ", meaning: "Tears", level: "N4" },
    { kanji: "血", reading: "ち", meaning: "Blood", level: "N4" },
    { kanji: "骨", reading: "ほね", meaning: "Bone", level: "N4" },
    { kanji: "筋肉", reading: "きんにく", meaning: "Muscle", level: "N4" },
    { kanji: "熱", reading: "ねつ", meaning: "Fever / Heat", level: "N4" },
    { kanji: "咳", reading: "せき", meaning: "Cough", level: "N4" },
    { kanji: "震える", reading: "ふるえる", meaning: "To shiver / tremble", level: "N4" },
    { kanji: "呼吸", reading: "こきゅう", meaning: "Breathing", level: "N4" },

    // Verbs - Achievement & Failure
    { kanji: "成功", reading: "せいこう", meaning: "Success", level: "N4" },
    { kanji: "失敗", reading: "しっぱい", meaning: "Failure / Mistake", level: "N4" },
    { kanji: "合格", reading: "ごうかく", meaning: "Passing an exam", level: "N4" },
    { kanji: "解決", reading: "かいけつ", meaning: "Solution / Settlement", level: "N4" },
    { kanji: "開発", reading: "かいはつ", meaning: "Development", level: "N4" },

    // Adjectives - Sensory & Physical
    { kanji: "苦しい", reading: "くるしい", meaning: "Painful / Difficult", level: "N4" },
    { kanji: "痒い", reading: "かゆい", meaning: "Itchy", level: "N4" },
    { kanji: "痛い", reading: "いたい", meaning: "Painful / Sore", level: "N4" },
    { kanji: "臭い", reading: "くさい", meaning: "Stinky / Smelly", level: "N4" },
    { kanji: "眩しい", reading: "まぶしい", meaning: "Dazzling / Bright", level: "N4" },
    { kanji: "酷い", reading: "ひどい", meaning: "Terrible / Cruel", level: "N4" },

    // Adverbs & States
    { kanji: "積極的", reading: "せっきょくてき", meaning: "Positive / Active", level: "N4" },
    { kanji: "消極的", reading: "しょうきょくてき", meaning: "Negative / Passive", level: "N4" },
    { kanji: "段々", reading: "だんだん", meaning: "Gradually", level: "N4" },
    { kanji: "急に", reading: "きゅうに", meaning: "Suddenly", level: "N4" },
    // --- 1. Crime, Law & Public Safety ---
    { kanji: "泥棒", reading: "どろぼう", meaning: "Thief / Burglar", level: "N4" },
    { kanji: "盗む", reading: "ぬすむ", meaning: "To steal", level: "N4" },
    { kanji: "犯人", reading: "はんにん", meaning: "Criminal / Offender", level: "N4" },
    { kanji: "事件", reading: "じけん", meaning: "Incident / Case", level: "N4" },
    { kanji: "事故", reading: "じこ", meaning: "Accident", level: "N4" },
    { kanji: "被害", reading: "ひがい", meaning: "Damage / Harm", level: "N4" },
    { kanji: "警察官", reading: "けいさつかん", meaning: "Police officer", level: "N4" },
    { kanji: "捕まえる", reading: "つかまえる", meaning: "To catch / arrest", level: "N4" },
    { kanji: "逃げる", reading: "にげる", meaning: "To escape / run away", level: "N4" },
    { kanji: "守る", reading: "まもる", meaning: "To protect / obey rules", level: "N4" },

    // --- 2. Workplace, Hierarchy & Etiquette ---
    { kanji: "敬語", reading: "けいご", meaning: "Honorific language", level: "N4" },
    { kanji: "尊敬", reading: "そんけい", meaning: "Respect / Esteem", level: "N4" },
    { kanji: "謙譲", reading: "けんじょう", meaning: "Humility / Modesty", level: "N4" },
    { kanji: "命令", reading: "めいれい", meaning: "Order / Command", level: "N4" },
    { kanji: "報告", reading: "ほうこく", meaning: "Report", level: "N4" },
    { kanji: "連絡", reading: "れんらく", meaning: "Contact / Communication", level: "N4" },
    { kanji: "相談", reading: "そうだん", meaning: "Consultation / Discussion", level: "N4" },
    { kanji: "資料", reading: "しりょう", meaning: "Materials / Documents", level: "N4" },
    { kanji: "面接", reading: "めんせつ", meaning: "Interview", level: "N4" },
    { kanji: "残業", reading: "ざんぎょう", meaning: "Overtime work", level: "N4" },
    { kanji: "決定", reading: "けってい", meaning: "Decision", level: "N4" },
    { kanji: "変更", reading: "へんこう", meaning: "Change / Modification", level: "N4" },

    // --- 3. Travel, Lodging & Tourism ---
    { kanji: "予約", reading: "よやく", meaning: "Reservation", level: "N4" },
    { kanji: "宿泊", reading: "しゅくはく", meaning: "Lodging / Staying", level: "N4" },
    { kanji: "旅館", reading: "りょかん", meaning: "Japanese-style inn", level: "N4" },
    { kanji: "観光", reading: "かんこう", meaning: "Sightseeing", level: "N4" },
    { kanji: "景色", reading: "けしき", meaning: "Scenery / View", level: "N4" },
    { kanji: "記念", reading: "きねん", meaning: "Commemoration / Memory", level: "N4" },
    { kanji: "土産", reading: "みやげ", meaning: "Souvenir", level: "N4" },
    { kanji: "空港", reading: "くうこう", meaning: "Airport", level: "N4" },
    { kanji: "港", reading: "みなと", meaning: "Port / Harbor", level: "N4" },
    { kanji: "手続き", reading: "てつづき", meaning: "Procedure / Formalities", level: "N4" },

    // --- 4. Household Tools & Hardware ---
    { kanji: "道具", reading: "どうぐ", meaning: "Tool / Implement", level: "N4" },
    { kanji: "金槌", reading: "かなづち", meaning: "Hammer", level: "N4" },
    { kanji: "釘", reading: "くぎ", meaning: "Nail", level: "N4" },
    { kanji: "鋏", reading: "はさみ", meaning: "Scissors", level: "N4" },
    { kanji: "鏡", reading: "かがみ", meaning: "Mirror", level: "N4" },
    { kanji: "紐", reading: "ひも", meaning: "String / Cord", level: "N4" },
    { kanji: "針", reading: "はり", meaning: "Needle / Pin", level: "N4" },
    { kanji: "糸", reading: "いと", meaning: "Thread", level: "N4" },
    { kanji: "鎖", reading: "くさり", meaning: "Chain", level: "N4" },
    { kanji: "引き出し", reading: "ひきだし", meaning: "Drawer", level: "N4" },

    // --- 5. Abstract Concepts (Value, Reason, Society) ---
    { kanji: "価値", reading: "かち", meaning: "Value / Worth", level: "N4" },
    { kanji: "理由", reading: "りゆう", meaning: "Reason / Cause", level: "N4" },
    { kanji: "結果", reading: "けっか", meaning: "Result / Outcome", level: "N4" },
    { kanji: "原因", reading: "げんいん", meaning: "Cause / Source", level: "N4" },
    { kanji: "目的", reading: "もくてき", meaning: "Purpose / Goal", level: "N4" },
    { kanji: "秘密", reading: "ひみつ", meaning: "Secret", level: "N4" },
    { kanji: "自由", reading: "じゆう", meaning: "Freedom", level: "N4" },
    { kanji: "幸福", reading: "こうふく", meaning: "Happiness", level: "N4" },
    { kanji: "現代", reading: "げんだい", meaning: "Modern era", level: "N4" },
    { kanji: "伝統", reading: "でんとう", meaning: "Tradition", level: "N4" },

    // --- 6. Adverbs of Manner & State (Onomatopoeia-ish) ---
    { kanji: "ゆっくり", reading: "ゆっくり", meaning: "Slowly / Leisurely", level: "N4" },
    { kanji: "のんびり", reading: "のんびり", meaning: "Carefree / At ease", level: "N4" },
    { kanji: "うろうろ", reading: "うろうろ", meaning: "Aimlessly / Loitering", level: "N4" },
    { kanji: "こっそり", reading: "こっそり", meaning: "Secretly / Stealthily", level: "N4" },
    { kanji: "はっきり", reading: "はっきり", meaning: "Clearly / Distinctly", level: "N4" },
    { kanji: "ぴったり", reading: "ぴったり", meaning: "Exactly / Perfectly", level: "N4" },
    { kanji: "ぎっしり", reading: "ぎっしり", meaning: "Tightly packed", level: "N4" },
    { kanji: "ぐっすり", reading: "ぐっすり", meaning: "Sound asleep", level: "N4" },
    { kanji: "うっかり", reading: "うっかり", meaning: "Carelessly / By mistake", level: "N4" },
    { kanji: "がっかり", reading: "がっかり", meaning: "Disappointed", level: "N4" },
    // --- 1. Animals, Insects & Biology ---
    { kanji: "昆虫", reading: "こんちゅう", meaning: "Insect", level: "N4" },
    { kanji: "象", reading: "ぞう", meaning: "Elephant", level: "N4" },
    { kanji: "猿", reading: "さる", meaning: "Monkey", level: "N4" },
    { kanji: "蛇", reading: "へび", meaning: "Snake", level: "N4" },
    { kanji: "尾", reading: "お", meaning: "Tail", level: "N4" },
    { kanji: "毛", reading: "け", meaning: "Hair / Fur / Feather", level: "N4" },
    { kanji: "枝", reading: "えだ", meaning: "Branch / Twig", level: "N4" },
    { kanji: "根", reading: "ね", meaning: "Root", level: "N4" },
    { kanji: "葉", reading: "は", meaning: "Leaf", level: "N4" },
    { kanji: "咲く", reading: "さく", meaning: "To bloom", level: "N4" },
    { kanji: "散る", reading: "ちる", meaning: "To fall / scatter (petals)", level: "N4" },

    // --- 2. Sports, Competition & Culture ---
    { kanji: "柔道", reading: "じゅうどう", meaning: "Judo", level: "N4" },
    { kanji: "剣道", reading: "けんどう", meaning: "Kendo", level: "N4" },
    { kanji: "水泳", reading: "すいえい", meaning: "Swimming", level: "N4" },
    { kanji: "応援", reading: "おうえん", meaning: "Cheering / Support", level: "N4" },
    { kanji: "優勝", reading: "ゆうしょう", meaning: "Championship / Victory", level: "N4" },
    { kanji: "負ける", reading: "まける", meaning: "To lose / be defeated", level: "N4" },
    { kanji: "趣味", reading: "しゅみ", meaning: "Hobby", level: "N4" },
    { kanji: "茶道", reading: "さどう", meaning: "Tea ceremony", level: "N4" },
    { kanji: "華道", reading: "かどう", meaning: "Flower arrangement", level: "N4" },
    { kanji: "演奏", reading: "えんそう", meaning: "Musical performance", level: "N4" },

    // --- 3. Home Appliances & Tech (The Katakana Front) ---
    { kanji: "エアコン", reading: "えあこん", meaning: "Air conditioner", level: "N4" },
    { kanji: "ドライヤー", reading: "どらいやー", meaning: "Hairdryer", level: "N4" },
    { kanji: "電子レンジ", reading: "でんしれんじ", meaning: "Microwave oven", level: "N4" },
    { kanji: "冷蔵庫", reading: "れいぞうこ", meaning: "Refrigerator", level: "N4" },
    { kanji: "洗濯機", reading: "せんたくき", meaning: "Washing machine", level: "N4" },
    { kanji: "掃除機", reading: "そうじき", meaning: "Vacuum cleaner", level: "N4" },
    { kanji: "コンセント", reading: "こんせんと", meaning: "Electrical outlet", level: "N4" },
    { kanji: "ソフト", reading: "そふと", meaning: "Software", level: "N4" },
    { kanji: "ハード", reading: "はーど", meaning: "Hardware", level: "N4" },
    { kanji: "パソコン", reading: "ぱそこん", meaning: "Personal computer", level: "N4" },

    // --- 4. The Transitive vs. Intransitive Gauntlet (Crucial) ---
    { kanji: "止める", reading: "とめる", meaning: "To stop something (transitive)", level: "N4" },
    { kanji: "止まる", reading: "とまる", meaning: "Something stops (intransitive)", level: "N4" },
    { kanji: "始める", reading: "はじめる", meaning: "To start something (transitive)", level: "N4" },
    { kanji: "始まる", reading: "はじまる", meaning: "Something starts (intransitive)", level: "N4" },
    { kanji: "変える", reading: "かえる", meaning: "To change something (transitive)", level: "N4" },
    { kanji: "変わる", reading: "かわる", meaning: "Something changes (intransitive)", level: "N4" },
    { kanji: "入れる", reading: "いれる", meaning: "To put in (transitive)", level: "N4" },
    { kanji: "入る", reading: "はいる", meaning: "To enter (intransitive)", level: "N4" },
    { kanji: "出す", reading: "だす", meaning: "To take out (transitive)", level: "N4" },
    { kanji: "出る", reading: "でる", meaning: "To go out (intransitive)", level: "N4" },
    { kanji: "壊す", reading: "こわす", meaning: "To break something (transitive)", level: "N4" },
    { kanji: "壊れる", reading: "こわれる", meaning: "Something breaks (intransitive)", level: "N4" },
    { kanji: "落とす", reading: "おとす", meaning: "To drop something (transitive)", level: "N4" },
    { kanji: "落ちる", reading: "おちる", meaning: "Something falls (intransitive)", level: "N4" },

    // --- 5. Feelings, Mental States & Physical Sensations ---
    { kanji: "怒る", reading: "おこる", meaning: "To get angry", level: "N4" },
    { kanji: "悲しい", reading: "かなしい", meaning: "Sad", level: "N4" },
    { kanji: "寂しい", reading: "さびしい", meaning: "Lonely", level: "N4" },
    { kanji: "苦しい", reading: "くるしい", meaning: "Painful / Suffocating", level: "N4" },
    { kanji: "懐かしい", reading: "なつかしい", meaning: "Nostalgic", level: "N4" },
    { kanji: "安心", reading: "あんしん", meaning: "Relief", level: "N4" },
    { kanji: "心配", reading: "しんぱい", meaning: "Worry", level: "N4" },
    { kanji: "緊張", reading: "きんちょう", meaning: "Tension / Nervousness", level: "N4" },
    { kanji: "感心", reading: "かんしん", meaning: "Admiration", level: "N4" },
    { kanji: "感動", reading: "かんどう", meaning: "Being moved / touched", level: "N4" },

    // --- 6. Time, Frequency & Probability ---
    { kanji: "決して", reading: "けっして", meaning: "Never (with negative)", level: "N4" },
    { kanji: "滅多に", reading: "めったに", meaning: "Rarely / Seldom", level: "N4" },
    { kanji: "たまに", reading: "たまに", meaning: "Occasionally", level: "N4" },
    { kanji: "常に", reading: "つねに", meaning: "Always / Constantly", level: "N4" },
    { kanji: "結局", reading: "けっきょく", meaning: "After all / Eventually", level: "N4" },
    { kanji: "遂に", reading: "ついに", meaning: "Finally / At last", level: "N4" },
    { kanji: "おそらく", reading: "おそらく", meaning: "Probably / Perhaps", level: "N4" },
    { kanji: "是非", reading: "ぜひ", meaning: "By all means / Definitely", level: "N4" },
    { kanji: "大体", reading: "だいたい", meaning: "Roughly / Mostly", level: "N4" },
    { kanji: "特別", reading: "とくべつ", meaning: "Special", level: "N4" },
    // --- 1. Industrial & Economic Forces ---
    { kanji: "農業", reading: "のうぎょう", meaning: "Agriculture", level: "N4" },
    { kanji: "商業", reading: "しょうぎょう", meaning: "Commerce / Trade", level: "N4" },
    { kanji: "工業", reading: "こうぎょう", meaning: "Manufacturing industry", level: "N4" },
    { kanji: "産業", reading: "さんぎょう", meaning: "Industry", level: "N4" },
    { kanji: "輸出", reading: "ゆしゅつ", meaning: "Export", level: "N4" },
    { kanji: "輸入", reading: "ゆにゅう", meaning: "Import", level: "N4" },
    { kanji: "貿易", reading: "ぼうえき", meaning: "Foreign trade", level: "N4" },
    { kanji: "経済", reading: "けいざい", meaning: "Economy / Economics", level: "N4" },
    { kanji: "物価", reading: "ぶっか", meaning: "Prices / Cost of living", level: "N4" },
    { kanji: "給料", reading: "きゅうりょう", meaning: "Salary / Pay", level: "N4" },

    // --- 2. Advanced Verbs: Impact & Movement ---
    { kanji: "投げる", reading: "なげる", meaning: "To throw", level: "N4" },
    { kanji: "打つ", reading: "うつ", meaning: "To hit / strike / type", level: "N4" },
    { kanji: "振る", reading: "ふる", meaning: "To shake / wave / wag", level: "N4" },
    { kanji: "跳ぶ", reading: "とぶ", meaning: "To jump / leap", level: "N4" },
    { kanji: "触る", reading: "さわる", meaning: "To touch", level: "N4" },
    { kanji: "踏む", reading: "ふむ", meaning: "To step on", level: "N4" },
    { kanji: "抱く", reading: "だく", meaning: "To hug / embrace", level: "N4" },
    { kanji: "支える", reading: "ささえる", meaning: "To support / prop up", level: "N4" },
    { kanji: "組む", reading: "くむ", meaning: "To cross (arms) / put together", level: "N4" },
    { kanji: "挟む", reading: "はさむ", meaning: "To insert / sandwich between", level: "N4" },

    // --- 3. The Social Machine (Logic & Communication) ---
    { kanji: "賛成", reading: "さんせい", meaning: "Agreement / Approval", level: "N4" },
    { kanji: "反対", reading: "はんたい", meaning: "Opposition / Reverse", level: "N4" },
    { kanji: "議論", reading: "ぎろん", meaning: "Discussion / Argument", level: "N4" },
    { kanji: "結論", reading: "けつろん", meaning: "Conclusion", level: "N4" },
    { kanji: "実際", reading: "じっさい", meaning: "Actually / In practice", level: "N4" },
    { kanji: "関係", reading: "かんけい", meaning: "Relationship / Connection", level: "N4" },
    { kanji: "紹介", reading: "しょうかい", meaning: "Introduction", level: "N4" },
    { kanji: "相談", reading: "そうだん", meaning: "Consultation / Discussion", level: "N4" },
    { kanji: "連絡", reading: "れんらく", meaning: "Contact / Connection", level: "N4" },
    { kanji: "報告", reading: "ほうこく", meaning: "Report / Inform", level: "N4" },
    { kanji: "注意", reading: "ちゅうい", meaning: "Caution / Warning", level: "N4" },

    // --- 4. Domestic Infrastructure & Public Services ---
    { kanji: "水道", reading: "すいどう", meaning: "Water supply / Tap water", level: "N4" },
    { kanji: "ガス", reading: "がす", meaning: "Gas", level: "N4" },
    { kanji: "電気", reading: "でんき", meaning: "Electricity", level: "N4" },
    { kanji: "郵便", reading: "ゆうびん", meaning: "Postal service / Mail", level: "N4" },
    { kanji: "放送", reading: "ほうそう", meaning: "Broadcasting", level: "N4" },
    { kanji: "電波", reading: "でんぱ", meaning: "Radio waves", level: "N4" },
    { kanji: "線路", reading: "せんろ", meaning: "Railway track", level: "N4" },
    { kanji: "道路", reading: "どうろ", meaning: "Road / Highway", level: "N4" },
    { kanji: "駐車場", reading: "ちゅうしゃじょう", meaning: "Parking lot", level: "N4" },

    // --- 5. Dining, Hospitality & Quantity ---
    { kanji: "注文", reading: "ちゅうもん", meaning: "Order / Request", level: "N4" },
    { kanji: "予約", reading: "よやく", meaning: "Reservation / Appointment", level: "N4" },
    { kanji: "勘定", reading: "かんじょう", meaning: "Bill / Check", level: "N4" },
    { kanji: "お代わり", reading: "おかわり", meaning: "Second helping / Refill", level: "N4" },
    { kanji: "バイキング", reading: "ばいきんぐ", meaning: "Buffet / All-you-can-eat", level: "N4" },
    { kanji: "接待", reading: "せったい", meaning: "Entertainment (for business)", level: "N4" },
    { kanji: "宴会", reading: "えんかい", meaning: "Banquet / Party", level: "N4" },
    { kanji: "材料", reading: "ざいりょう", meaning: "Ingredients / Material", level: "N4" },
    { kanji: "量", reading: "りょう", meaning: "Quantity / Amount", level: "N4" },
    { kanji: "倍", reading: "ばい", meaning: "Double / Twice", level: "N4" },

    // --- 6. Science, Mechanics & Development ---
    { kanji: "機械", reading: "きかい", meaning: "Machine / Mechanism", level: "N4" },
    { kanji: "装置", reading: "そうち", meaning: "Device / Equipment", level: "N4" },
    { kanji: "操作", reading: "そうさ", meaning: "Operation / Processing", level: "N4" },
    { kanji: "故障", reading: "こしょう", meaning: "Breakdown / Failure", level: "N4" },
    { kanji: "修理", reading: "しゅうり", meaning: "Repair / Mending", level: "N4" },
    { kanji: "技術", reading: "ぎじゅつ", meaning: "Technology / Skill", level: "N4" },
    { kanji: "開発", reading: "かいはつ", meaning: "Development", level: "N4" },
    { kanji: "発明", reading: "はつめい", meaning: "Invention", level: "N4" },
    { kanji: "発見", reading: "はっけん", meaning: "Discovery", level: "N4" },

    // --- 7. Adverbs: Manner, State & Finality ---
    { kanji: "ようやく", reading: "ようやく", meaning: "Finally / At last", level: "N4" },
    { kanji: "ついに", reading: "ついに", meaning: "In the end / Finally", level: "N4" },
    { kanji: "絶対に", reading: "ぜったいに", meaning: "Absolutely / Definitely", level: "N4" },
    { kanji: "はっきり", reading: "はっきり", meaning: "Clearly / Distinctly", level: "N4" },
    { kanji: "しっかり", reading: "しっかり", meaning: "Firmly / Reliably", level: "N4" },
    { kanji: "うっかり", reading: "うっかり", meaning: "Carelessly / By mistake", level: "N4" },
    { kanji: "がっかり", reading: "がっかり", meaning: "Disappointed", level: "N4" },
    { kanji: "すっかり", reading: "すっかり", meaning: "Completely / Totally", level: "N4" },
    { kanji: "ぴったり", reading: "ぴったり", meaning: "Exactly / Perfectly", level: "N4" },
    { kanji: "のんびり", reading: "のんびり", meaning: "At leisure / Carefree", level: "N4" },
    { kanji: "急に", reading: "きゅうに", meaning: "Suddenly", level: "N4" },
    { kanji: "非常に", reading: "ひじょうに", meaning: "Extremely", level: "N4" },
    { kanji: "特に", reading: "とくに", meaning: "Particularly / Especially", level: "N4" },
    { kanji: "互いに", reading: "たがいに", meaning: "Mutually / Each other", level: "N4" },
    // --- 1. Law, Justice & Crime (The Deep End) ---
    { kanji: "裁判", reading: "さいばん", meaning: "Trial / Judgement", level: "N4" },
    { kanji: "弁護士", reading: "べんごし", meaning: "Lawyer / Attorney", level: "N4" },
    { kanji: "権利", reading: "けんり", meaning: "Right / Privilege", level: "N4" },
    { kanji: "義務", reading: "ぎむ", meaning: "Duty / Obligation", level: "N4" },
    { kanji: "罪", reading: "つみ", meaning: "Crime / Sin / Guilt", level: "N4" },
    { kanji: "罰", reading: "ばつ", meaning: "Punishment / Penalty", level: "N4" },
    { kanji: "泥棒", reading: "どろぼう", meaning: "Thief / Burglar", level: "N4" },
    { kanji: "犯人", reading: "はんにん", meaning: "Criminal / Offender", level: "N4" },
    { kanji: "証拠", reading: "しょうこ", meaning: "Evidence / Proof", level: "N4" },
    { kanji: "平和", reading: "へいわ", meaning: "Peace", level: "N4" },

    // --- 2. Spiritual, Religious & Social Customs ---
    { kanji: "神社", reading: "じんじゃ", meaning: "Shinto shrine", level: "N4" },
    { kanji: "お寺", reading: "おてら", meaning: "Buddhist temple", level: "N4" },
    { kanji: "神様", reading: "かみさま", meaning: "God / Deity", level: "N4" },
    { kanji: "仏様", reading: "ほとけさま", meaning: "Buddha / Deceased person", level: "N4" },
    { kanji: "お祈り", reading: "おいのり", meaning: "Prayer", level: "N4" },
    { kanji: "幽霊", reading: "ゆうれい", meaning: "Ghost / Specter", level: "N4" },
    { kanji: "葬式", reading: "そうしき", meaning: "Funeral", level: "N4" },
    { kanji: "結婚式", reading: "けっこんしき", meaning: "Wedding ceremony", level: "N4" },
    { kanji: "お祝い", reading: "おいわい", meaning: "Celebration / Gift", level: "N4" },
    { kanji: "お見舞い", reading: "おみまい", meaning: "Visiting the sick", level: "N4" },

    // --- 3. Advanced Architecture & Housing ---
    { kanji: "屋根", reading: "やね", meaning: "Roof", level: "N4" },
    { kanji: "天井", reading: "てんじょう", meaning: "Ceiling", level: "N4" },
    { kanji: "床", reading: "ゆか", meaning: "Floor", level: "N4" },
    { kanji: "柱", reading: "はしら", meaning: "Pillar / Column", level: "N4" },
    { kanji: "壁", reading: "かべ", meaning: "Wall", level: "N4" },
    { kanji: "建設", reading: "けんせつ", meaning: "Construction / Establishment", level: "N4" },
    { kanji: "建築", reading: "けんちく", meaning: "Architecture", level: "N4" },
    { kanji: "修理", reading: "しゅうり", meaning: "Repair / Mending", level: "N4" },
    { kanji: "団地", reading: "だんち", meaning: "Apartment complex", level: "N4" },

    // --- 4. Abstract Concepts & Philosophy ---
    { kanji: "理想", reading: "りそう", meaning: "Ideal", level: "N4" },
    { kanji: "現実", reading: "げんじつ", meaning: "Reality", level: "N4" },
    { kanji: "理論", reading: "りろん", meaning: "Theory", level: "N4" },
    { kanji: "事実", reading: "じじつ", meaning: "Fact / Truth", level: "N4" },
    { kanji: "想像", reading: "そうぞう", meaning: "Imagination", level: "N4" },
    { kanji: "知識", reading: "ちしき", meaning: "Knowledge / Information", level: "N4" },
    { kanji: "判断", reading: "はんだん", meaning: "Judgement / Decision", level: "N4" },
    { kanji: "勇気", reading: "ゆうき", meaning: "Courage / Bravery", level: "N4" },
    { kanji: "知恵", reading: "ちえ", meaning: "Wisdom", level: "N4" },

    // --- 5. Natural Disasters & Extreme Weather ---
    { kanji: "地震", reading: "じしん", meaning: "Earthquake", level: "N4" },
    { kanji: "噴火", reading: "ふんか", meaning: "Eruption", level: "N4" },
    { kanji: "津波", reading: "つなみ", meaning: "Tsunami", level: "N4" },
    { kanji: "洪水", reading: "こうずい", meaning: "Flood", level: "N4" },
    { kanji: "嵐", reading: "あらし", meaning: "Storm", level: "N4" },
    { kanji: "雷", reading: "かみなり", meaning: "Thunder / Lightning", level: "N4" },
    { kanji: "霧", reading: "きり", meaning: "Fog / Mist", level: "N4" },
    { kanji: "氷", reading: "こおり", meaning: "Ice", level: "N4" },

    // --- 6. Verbs of Conflict & Hidden Actions ---
    { kanji: "殴る", reading: "なぐる", meaning: "To strike / punch / hit", level: "N4" },
    { kanji: "盗む", reading: "ぬすむ", meaning: "To steal", level: "N4" },
    { kanji: "隠す", reading: "かくす", meaning: "To hide something (transitive)", level: "N4" },
    { kanji: "隠れる", reading: "かくれる", meaning: "To hide (intransitive)", level: "N4" },
    { kanji: "騙す", reading: "だます", meaning: "To deceive / trick", level: "N4" },
    { kanji: "奪う", reading: "うばう", meaning: "To snatch / steal / rob", level: "N4" },
    { kanji: "疑う", reading: "うたがう", meaning: "To doubt / suspect", level: "N4" },
    { kanji: "責める", reading: "せめる", meaning: "To blame / condemn", level: "N4" },

    // --- 7. Final N4 Bridge Adverbs & Particles ---
    { kanji: "たまに", reading: "たまに", meaning: "Occasionally / Once in a while", level: "N4" },
    { kanji: "滅多に", reading: "めったに", meaning: "Rarely (with negative)", level: "N4" },
    { kanji: "常に", reading: "つねに", meaning: "Always / Constantly", level: "N4" },
    { kanji: "再び", reading: "ふたたび", meaning: "Again / For the second time", level: "N4" },
    { kanji: "既に", reading: "すでに", meaning: "Already", level: "N4" },
    { kanji: "次第に", reading: "しだいに", meaning: "Gradually / Little by little", level: "N4" },
    { kanji: "勝手に", reading: "かってに", meaning: "Selfishly / Of one's own accord", level: "N4" },
    // --- 1. Specific Occupations & Social Roles ---
    { kanji: "理髪店", reading: "りはつてん", meaning: "Barbershop", level: "N4" },
    { kanji: "美容院", reading: "びよういん", meaning: "Beauty parlor / Hair salon", level: "N4" },
    { kanji: "看護師", reading: "かんごし", meaning: "Nurse", level: "N4" },
    { kanji: "運転手", reading: "うんてんしゅ", meaning: "Driver / Chauffeur", level: "N4" },
    { kanji: "政治家", reading: "せいじか", meaning: "Politician", level: "N4" },
    { kanji: "小説家", reading: "しょうせつか", meaning: "Novelist", level: "N4" },
    { kanji: "画家", reading: "がか", meaning: "Painter / Artist", level: "N4" },
    { kanji: "学者", reading: "がくしゃ", meaning: "Scholar", level: "N4" },
    { kanji: "首相", reading: "しゅしょう", meaning: "Prime Minister", level: "N4" },
    { kanji: "大統領", reading: "だいとうりょう", meaning: "President", level: "N4" },

    // --- 2. Household Maintenance & Daily Objects ---
    { kanji: "掃除", reading: "そうじ", meaning: "Cleaning", level: "N4" },
    { kanji: "洗濯", reading: "せんたく", meaning: "Laundry", level: "N4" },
    { kanji: "台所", reading: "だいどころ", meaning: "Kitchen", level: "N4" },
    { kanji: "洗剤", reading: "せんざい", meaning: "Detergent", level: "N4" },
    { kanji: "石鹸", reading: "せっけん", meaning: "Soap", level: "N4" },
    { kanji: "タオル", reading: "たおる", meaning: "Towel", level: "N4" },
    { kanji: "毛布", reading: "もうふ", meaning: "Blanket", level: "N4" },
    { kanji: "布団", reading: "ふとん", meaning: "Futon", level: "N4" },
    { kanji: "枕", reading: "まくら", meaning: "Pillow", level: "N4" },
    { kanji: "鏡", reading: "かがみ", meaning: "Mirror", level: "N4" },

    // --- 3. Abstract Time, Sequence & Order ---
    { kanji: "最初", reading: "さいしょ", meaning: "Beginning / First", level: "N4" },
    { kanji: "最後", reading: "さいご", meaning: "End / Last", level: "N4" },
    { kanji: "最近", reading: "さいきん", meaning: "Recently", level: "N4" },
    { kanji: "最初", reading: "さいしょ", meaning: "First / Beginning", level: "N4" },
    { kanji: "順番", reading: "じゅんばん", meaning: "Turn / Order", level: "N4" },
    { kanji: "交代", reading: "こうたい", meaning: "Alternation / Change", level: "N4" },
    { kanji: "連続", reading: "れんぞく", meaning: "Succession / Continuity", level: "N4" },
    { kanji: "期間", reading: "きかん", meaning: "Period / Term", level: "N4" },
    { kanji: "延期", reading: "えんき", meaning: "Postponement", level: "N4" },
    { kanji: "期限", reading: "きげん", meaning: "Deadline / Term", level: "N4" },

    // --- 4. Emotions, Attitudes & Mental States ---
    { kanji: "後悔", reading: "こうかい", meaning: "Regret", level: "N4" },
    { kanji: "満足", reading: "まんぞく", meaning: "Satisfaction", level: "N4" },
    { kanji: "不満", reading: "ふまん", meaning: "Dissatisfaction", level: "N4" },
    { kanji: "得意", reading: "とくい", meaning: "Strong point / One's specialty", level: "N4" },
    { kanji: "苦手", reading: "にがて", meaning: "Weak point / Not good at", level: "N4" },
    { kanji: "興味", reading: "きょうみ", meaning: "Interest", level: "N4" },
    { kanji: "夢中", reading: "むちゅう", meaning: "Dazed / Absorbed in", level: "N4" },
    { kanji: "退屈", reading: "たいくつ", meaning: "Boredom", level: "N4" },
    { kanji: "緊張", reading: "きんちょう", meaning: "Nervousness", level: "N4" },

    // --- 5. Verbs of Change & Physical States ---
    { kanji: "溶ける", reading: "とける", meaning: "To melt / dissolve", level: "N4" },
    { kanji: "固まる", reading: "かたまる", meaning: "To harden / solidify", level: "N4" },
    { kanji: "凍る", reading: "こおる", meaning: "To freeze", level: "N4" },
    { kanji: "腐る", reading: "くさる", meaning: "To rot / go bad", level: "N4" },
    { kanji: "乾く", reading: "かわく", meaning: "To get dry", level: "N4" },
    { kanji: "濡れる", reading: "ぬれる", meaning: "To get wet", level: "N4" },
    { kanji: "燃える", reading: "もえる", meaning: "To burn", level: "N4" },
    { kanji: "揺れる", reading: "ゆれる", meaning: "To shake / sway", level: "N4" },
    { kanji: "沈む", reading: "しずむ", meaning: "To sink / go down", level: "N4" },
    { kanji: "浮く", reading: "うく", meaning: "To float", level: "N4" },

    // --- 6. Final N4 Adverbs & Degree Words ---
    { kanji: "かなり", reading: "かなり", meaning: "Considerably / Fairly", level: "N4" },
    { kanji: "ずいぶん", reading: "ずいぶん", meaning: "Extremely / Considerably", level: "N4" },
    { kanji: "相当", reading: "そうとう", meaning: "Appropriate / Considerable", level: "N4" },
    { kanji: "大分", reading: "だいぶ", meaning: "Greatly / Mostly", level: "N4" },
    { kanji: "割に", reading: "わりに", meaning: "Relatively / Comparatively", level: "N4" },
    { kanji: "結局", reading: "けっきょく", meaning: "After all / Eventually", level: "N4" },
    { kanji: "案外", reading: "あんがい", meaning: "Unexpectedly", level: "N4" },
    { kanji: "意外に", reading: "いがいに", meaning: "Surprisingly", level: "N4" },
    { kanji: "わざと", reading: "わざと", meaning: "On purpose / Intentionally", level: "N4" },
    { kanji: "うっかり", reading: "うっかり", meaning: "Carelessly", level: "N4" },
    // --- 1. The Human Body & Physical States (Final Details) ---
    { kanji: "首", reading: "くび", meaning: "Neck", level: "N4" },
    { kanji: "肩", reading: "かた", meaning: "Shoulder", level: "N4" },
    { kanji: "胸", reading: "むね", meaning: "Chest / Breast", level: "N4" },
    { kanji: "腰", reading: "こし", meaning: "Waist / Lower back", level: "N4" },
    { kanji: "指", reading: "ゆび", meaning: "Finger / Toe", level: "N4" },
    { kanji: "爪", reading: "つめ", meaning: "Nail / Claw", level: "N4" },
    { kanji: "ひげ", reading: "ひげ", meaning: "Beard / Mustache", level: "N4" },
    { kanji: "裸", reading: "はだか", meaning: "Naked / Nude", level: "N4" },
    { kanji: "震える", reading: "ふるえる", meaning: "To shiver / shake", level: "N4" },
    { kanji: "微笑む", reading: "ほほえむ", meaning: "To smile", level: "N4" },

    // --- 2. Education & Campus Life (The Leftovers) ---
    { kanji: "校長", reading: "こうちょう", meaning: "Principal / Headmaster", level: "N4" },
    { kanji: "学長", reading: "がくちょう", meaning: "University President", level: "N4" },
    { kanji: "奨学金", reading: "しょうがくきん", meaning: "Scholarship", level: "N4" },
    { kanji: "学部", reading: "がくぶ", meaning: "Department / Faculty", level: "N4" },
    { kanji: "専門", reading: "せんもん", meaning: "Specialty / Major", level: "N4" },
    { kanji: "講義", reading: "こうぎ", meaning: "Lecture", level: "N4" },
    { kanji: "休講", reading: "きゅうこう", meaning: "Cancelled class", level: "N4" },
    { kanji: "提出", reading: "ていしゅつ", meaning: "Submission", level: "N4" },

    // --- 3. Geography, Weather & Space (Final Outliers) ---
    { kanji: "砂漠", reading: "さばく", meaning: "Desert", level: "N4" },
    { kanji: "盆地", reading: "ぼんち", meaning: "Basin / Valley", level: "N4" },
    { kanji: "平野", reading: "へいや", meaning: "Plain / Open field", level: "N4" },
    { kanji: "列島", reading: "れっとう", meaning: "Archipelago / Chain of islands", level: "N4" },
    { kanji: "湿度", reading: "しつど", meaning: "Humidity", level: "N4" },
    { kanji: "蒸し暑い", reading: "むしあつい", meaning: "Humid / Sultry", level: "N4" },
    { kanji: "氷", reading: "こおり", meaning: "Ice", level: "N4" },
    { kanji: "凍る", reading: "こおる", meaning: "To freeze", level: "N4" },

    // --- 4. Abstract States & Advanced Adjectives ---
    { kanji: "共通", reading: "きょうつう", meaning: "Common / Shared", level: "N4" },
    { kanji: "特別", reading: "とくべつ", meaning: "Special / Particular", level: "N4" },
    { kanji: "意外", reading: "いがい", meaning: "Unexpected / Surprising", level: "N4" },
    { kanji: "必死", reading: "ひっし", meaning: "Desperate / Frantic", level: "N4" },
    { kanji: "正直", reading: "しょうじき", meaning: "Honest / Frank", level: "N4" },
    { kanji: "下品", reading: "げひん", meaning: "Vulgar / Coarse", level: "N4" },
    { kanji: "上品", reading: "じょうひん", meaning: "Elegant / Refined", level: "N4" },
    { kanji: "適当", reading: "てきとう", meaning: "Appropriate / Random", level: "N4" },

    // --- 5. Niche Verbs & Physical Interactions ---
    { kanji: "耕す", reading: "たがやす", meaning: "To till / plow", level: "N4" },
    { kanji: "掘る", reading: "ほる", meaning: "To dig", level: "N4" },
    { kanji: "編む", reading: "あむ", meaning: "To knit / braid", level: "N4" },
    { kanji: "縫う", reading: "ぬう", meaning: "To sew", level: "N4" },
    { kanji: "炊く", reading: "たく", meaning: "To cook rice", level: "N4" },
    { kanji: "剥く", reading: "むく", meaning: "To peel / skin", level: "N4" },
    { kanji: "挟む", reading: "はさむ", meaning: "To pinch / sandwich between", level: "N4" },
    { kanji: "畳む", reading: "たたむ", meaning: "To fold (clothes/umbrella)", level: "N4" },

    // --- 6. The Final Adverbial Siege (Precision Tools) ---
    { kanji: "ますます", reading: "ますます", meaning: "More and more", level: "N4" },
    { kanji: "いよいよ", reading: "いよいよ", meaning: "Finally / At last (eagerly awaited)", level: "N4" },
    { kanji: "どんどん", reading: "どんどん", meaning: "Rapidly / Steadily", level: "N4" },
    { kanji: "そろそろ", reading: "そろそろ", meaning: "Gradually / Soon", level: "N4" },
    { kanji: "なかなか", reading: "なかなか", meaning: "Quite / Not easily (with negative)", level: "N4" },
    { kanji: "ようやく", reading: "ようやく", meaning: "Finally / At length", level: "N4" },
    { kanji: "やっぱり", reading: "やっぱり", meaning: "As expected / Still", level: "N4" },
    { kanji: "わざわざ", reading: "わざわざ", meaning: "Going to the trouble of", level: "N4" },
    { kanji: "まさか", reading: "まさか", meaning: "By no means / Impossible!", level: "N4" },
    { kanji: "せっかく", reading: "せっかく", meaning: "With much trouble / Precious", level: "N4" }
      ]
};





































