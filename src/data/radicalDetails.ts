export interface RadicalDetail {
  explanation: string;
  examples: { word: string; reading: string; meaning: string }[];
  sentences: { jp: string; en: string }[];
}

export const radicalsStroke1to3: Record<string, RadicalDetail> = {
  // === 1 STROKE (6 Radicals) ===
  '一': {
    explanation: "The 'one' radical. Represents unity, the number one, or a horizontal line. It acts as a structural foundation or ceiling in many kanji.",
    examples: [
      { word: "一", reading: "ichi", meaning: "one" },
      { word: "三", reading: "san", meaning: "three" },
      { word: "上", reading: "ue", meaning: "above/up" }
    ],
    sentences: [
      { jp: "一日中勉強しました。", en: "I studied all day long." },
      { jp: "もう一度言ってください。", en: "Please say it one more time." }
    ]
  },
  '丨': {
    explanation: "The 'vertical line' radical. Represents a straight downward stroke, piercing through or standing tall.",
    examples: [
      { word: "中", reading: "naka", meaning: "middle/inside" },
      { word: "串", reading: "kushi", meaning: "skewer" },
      { word: "引", reading: "hi(ku)", meaning: "to pull (archaic root)" }
    ],
    sentences: [
      { jp: "真ん中に立ってください。", en: "Please stand in the middle." },
      { jp: "焼き鳥の串を外します。", en: "I take the yakitori off the skewer." }
    ]
  },
  '丶': {
    explanation: "The 'dot' radical. Represents a point, a drop, a flame, or a small mark of emphasis.",
    examples: [
      { word: "主", reading: "nushi/omo", meaning: "master/main" },
      { word: "丸", reading: "maru", meaning: "circle/round" },
      { word: "太", reading: "futo(i)", meaning: "fat/thick" }
    ],
    sentences: [
      { jp: "丸い形が好きです。", en: "I like round shapes." },
      { jp: "彼は太い声を持っています。", en: "He has a thick voice." }
    ]
  },
  '丿': {
    explanation: "The 'slash' or 'bend' radical. A sweeping leftward diagonal stroke indicating motion.",
    examples: [
      { word: "乃", reading: "no", meaning: "of/belonging to (archaic)" },
      { word: "久", reading: "hisa(shii)", meaning: "long time" },
      { word: "乗", reading: "no(ru)", meaning: "to ride/board" }
    ],
    sentences: [
      { jp: "久しぶりに会いましたね。", en: "It's been a long time since we last met." },
      { jp: "電車に乗ります。", en: "I will take the train." }
    ]
  },
  '乙': {
    explanation: "The 'second' or 'fish hook' radical. Represents the second in a sequence or a curved hook shape.",
    examples: [
      { word: "乙", reading: "otsu", meaning: "second/the latter" },
      { word: "乱", reading: "mida(reru)", meaning: "to be in disorder" },
      { word: "乳", reading: "chichi/nyuu", meaning: "milk/breasts" }
    ],
    sentences: [
      { jp: "部屋が乱れています。", en: "The room is messy." },
      { jp: "牛乳を買います。", en: "I buy milk." }
    ]
  },
  '亅': {
    explanation: "The 'barb' or 'hook' radical. A vertical stroke ending in a sharp hook.",
    examples: [
      { word: "了", reading: "ryou", meaning: "finish/complete" },
      { word: "事", reading: "koto", meaning: "thing/matter" },
      { word: "予", reading: "yo", meaning: "beforehand" }
    ],
    sentences: [
      { jp: "仕事が完了しました。", en: "The work is completed." },
      { jp: "予定を確認します。", en: "I will check the schedule." }
    ]
  },

  // === 2 STROKES (23 Radicals) ===
  '二': {
    explanation: "The 'two' radical. Conveys duality, pairing, or upper and lower bounds.",
    examples: [
      { word: "二", reading: "ni", meaning: "two" },
      { word: "亡", reading: "na(i)", meaning: "deceased/gone" },
      { word: "五", reading: "go", meaning: "five" }
    ],
    sentences: [
      { jp: "二人で映画を見ました。", en: "We watched a movie together." },
      { jp: "五時に起きます。", en: "I wake up at five o'clock." }
    ]
  },
  '亠': {
    explanation: "The 'lid' or 'top' radical (nabebuta). Sits at the top of characters like a small cover.",
    examples: [
      { word: "京", reading: "kyou", meaning: "capital" },
      { word: "夜", reading: "yoru", meaning: "night" },
      { word: "交", reading: "maji(waru)", meaning: "to associate/mix" }
    ],
    sentences: [
      { jp: "東京に行きます。", en: "I will go to Tokyo." },
      { jp: "夜は静かです。", en: "The night is quiet." }
    ]
  },
  '人': {
    explanation: "The 'person' radical. When on the left, it compresses into 亻 (ninben). Represents human beings and human actions.",
    examples: [
      { word: "人", reading: "hito", meaning: "person" },
      { word: "休", reading: "yasu(mu)", meaning: "to rest" },
      { word: "体", reading: "karada", meaning: "body" }
    ],
    sentences: [
      { jp: "あの人は誰ですか。", en: "Who is that person?" },
      { jp: "今日は少し休みたいです。", en: "I want to rest a little today." }
    ]
  },
  '儿': {
    explanation: "The 'legs' radical (ninnyou). Appears at the bottom of kanji, representing human legs or walking.",
    examples: [
      { word: "元", reading: "moto/gen", meaning: "origin/spirit" },
      { word: "兄", reading: "ani", meaning: "older brother" },
      { word: "光", reading: "hikari", meaning: "light" }
    ],
    sentences: [
      { jp: "お元気ですか。", en: "Are you doing well?" },
      { jp: "太陽の光が眩しいです。", en: "The sunlight is blinding." }
    ]
  },
  '入': {
    explanation: "The 'enter' radical. Represents moving inward or joining.",
    examples: [
      { word: "入る", reading: "hai(ru)", meaning: "to enter" },
      { word: "込", reading: "ko(mu)", meaning: "to be crowded/include" },
      { word: "全", reading: "zen", meaning: "all/whole" }
    ],
    sentences: [
      { jp: "部屋に入ってください。", en: "Please enter the room." },
      { jp: "全て終わりました。", en: "Everything is finished." }
    ]
  },
  '八': {
    explanation: "The 'eight' radical. Suggests dividing, splitting apart, or spreading out.",
    examples: [
      { word: "八", reading: "hachi", meaning: "eight" },
      { word: "分", reading: "wa(keru)", meaning: "to divide/share" },
      { word: "公", reading: "ooyake", meaning: "public" }
    ],
    sentences: [
      { jp: "八時に出発します。", en: "We depart at eight o'clock." },
      { jp: "これを二つに分けてください。", en: "Please divide this into two." }
    ]
  },
  '冂': {
    explanation: "The 'upside-down box' radical (keigamae). Represents boundaries, city walls, or open spaces contained within borders.",
    examples: [
      { word: "円", reading: "en", meaning: "circle/yen" },
      { word: "内", reading: "uchi", meaning: "inside/within" },
      { word: "同", reading: "onaji", meaning: "same" }
    ],
    sentences: [
      { jp: "百円を払いました。", en: "I paid 100 yen." },
      { jp: "私たちは同じクラスです。", en: "We are in the same class." }
    ]
  },
  '冖': {
    explanation: "The 'cover' or 'crown' radical (wakammuri). Represents a cloth or roof covering something from above.",
    examples: [
      { word: "空", reading: "sora", meaning: "sky/empty" },
      { word: "冗", reading: "jou", meaning: "useless/superfluous" },
      { word: "冠", reading: "kanmuri", meaning: "crown" }
    ],
    sentences: [
      { jp: "空が青いです。", en: "The sky is blue." },
      { jp: "冗談を言いました。", en: "I told a joke." }
    ]
  },
  '冫': {
    explanation: "The 'ice' radical (nisui). Denotes freezing, coldness, or ice.",
    examples: [
      { word: "冷たい", reading: "tsumeta(i)", meaning: "cold (to the touch)" },
      { word: "凍る", reading: "koo(ru)", meaning: "to freeze" },
      { word: "冬", reading: "fuyu", meaning: "winter" }
    ],
    sentences: [
      { jp: "冷たい水を飲みます。", en: "I drink cold water." },
      { jp: "冬は寒いです。", en: "Winter is cold." }
    ]
  },
  '几': {
    explanation: "The 'table' radical (tsukue). Represents a small table, stool, or wind-like enclosure.",
    examples: [
      { word: "凡", reading: "bon", meaning: "ordinary" },
      { word: "風", reading: "kaze", meaning: "wind" },
      { word: "机", reading: "tsukue", meaning: "desk" }
    ],
    sentences: [
      { jp: "今日は風が強いです。", en: "The wind is strong today." },
      { jp: "机の上に本があります。", en: "There is a book on the desk." }
    ]
  },
  '凵': {
    explanation: "The 'open box' or 'receptacle' radical (ukebako). Represents a container or pit.",
    examples: [
      { word: "出", reading: "de(ru)", meaning: "to exit/leave" },
      { word: "凶", reading: "kyou", meaning: "villain/bad luck" },
      { word: "凹", reading: "hekomi", meaning: "concave/dent" }
    ],
    sentences: [
      { jp: "家を出ます。", en: "I am leaving the house." },
      { jp: "車に凹みができました。", en: "A dent formed on the car." }
    ]
  },
  '刀': {
    explanation: "The 'sword' or 'knife' radical. When placed on the right side, it takes the form 刂 (rittou).",
    examples: [
      { word: "切る", reading: "ki(ru)", meaning: "to cut" },
      { word: "分", reading: "bun/fun", meaning: "minute/part" },
      { word: "初", reading: "hatsu", meaning: "first/beginning" }
    ],
    sentences: [
      { jp: "野菜を切ります。", en: "I will cut the vegetables." },
      { jp: "初めて日本に来ました。", en: "I came to Japan for the first time." }
    ]
  },
  '力': {
    explanation: "The 'power' or 'strength' radical. Represents muscle, physical exertion, or ability.",
    examples: [
      { word: "力", reading: "chikara", meaning: "power/strength" },
      { word: "勉", reading: "tsuto(meru)", meaning: "to exert oneself/study" },
      { word: "動", reading: "ugo(ku)", meaning: "to move" }
    ],
    sentences: [
      { jp: "毎日勉強しています。", en: "I study every day." },
      { jp: "力を合わせましょう。", en: "Let's combine our strength." }
    ]
  },
  '勹': {
    explanation: "The 'wrap' radical (tsutsumigamae). Conveys enclosing, hugging, or containing.",
    examples: [
      { word: "包む", reading: "tsutsu(mu)", meaning: "to wrap" },
      { word: "句", reading: "ku", meaning: "phrase/clause" },
      { word: "勾", reading: "kou", meaning: "capture/slope" }
    ],
    sentences: [
      { jp: "プレゼントを包みました。", en: "I wrapped the present." },
      { jp: "俳句を作ります。", en: "I will write a haiku." }
    ]
  },
  '匕': {
    explanation: "The 'spoon' radical (saji). Relates to eating or a person turning over/changing.",
    examples: [
      { word: "北", reading: "kita", meaning: "north" },
      { word: "化", reading: "ba(keru)", meaning: "to transform" },
      { word: "旨", reading: "mune", meaning: "principle/delicious" }
    ],
    sentences: [
      { jp: "北海道に行きました。", en: "I went to Hokkaido." },
      { jp: "化学を勉強します。", en: "I study chemistry." }
    ]
  },
  '匚': {
    explanation: "The 'box' radical (hakogamae). Represents a box on its side holding items.",
    examples: [
      { word: "区", reading: "ku", meaning: "ward/district" },
      { word: "医", reading: "i", meaning: "medicine/doctor" },
      { word: "匹", reading: "hiki", meaning: "counter for small animals" }
    ],
    sentences: [
      { jp: "医者に行きます。", en: "I am going to the doctor." },
      { jp: "犬が二匹います。", en: "There are two dogs." }
    ]
  },
  '匸': {
    explanation: "The 'hiding enclosure' radical (kakushigamae). Very similar to 匚 but implies hiding.",
    examples: [
      { word: "区", reading: "ku", meaning: "ward (modern variant)" },
      { word: "匿", reading: "toku", meaning: "hide/shelter" },
      { word: "匹", reading: "hiki", meaning: "animal counter (variant)" }
    ],
    sentences: [
      { jp: "匿名で寄付しました。", en: "I donated anonymously." },
      { jp: "犯人を匿う。", en: "To harbor a criminal." }
    ]
  },
  '十': {
    explanation: "The 'ten' radical. Represents the number ten, crossing paths, and completeness.",
    examples: [
      { word: "十", reading: "juu", meaning: "ten" },
      { word: "千", reading: "sen", meaning: "thousand" },
      { word: "南", reading: "minami", meaning: "south" }
    ],
    sentences: [
      { jp: "十月は好きな月です。", en: "October is my favorite month." },
      { jp: "南の方向に進んでください。", en: "Please proceed in the southern direction." }
    ]
  },
  '卜': {
    explanation: "The 'divination' radical (boku). Depicts cracks in a turtle shell used for fortune-telling.",
    examples: [
      { word: "占う", reading: "urana(u)", meaning: "to divine/tell fortune" },
      { word: "外", reading: "soto", meaning: "outside" },
      { word: "上", reading: "ue", meaning: "above/up" }
    ],
    sentences: [
      { jp: "星占いが好きです。", en: "I like horoscopes." },
      { jp: "外は寒いです。", en: "It is cold outside." }
    ]
  },
  '卩': {
    explanation: "The 'seal' or 'kneeling person' radical (fushizukuri). Depicts a person kneeling in submission or an official seal.",
    examples: [
      { word: "印", reading: "shirushi", meaning: "mark/seal" },
      { word: "卵", reading: "tamago", meaning: "egg" },
      { word: "却", reading: "kyaku", meaning: "instead/reject" }
    ],
    sentences: [
      { jp: "卵を食べます。", en: "I eat an egg." },
      { jp: "書類に印鑑を押します。", en: "I stamp the document with a seal." }
    ]
  },
  '厂': {
    explanation: "The 'cliff' radical (gangandare). Represents an overhanging cliff or a stone factory.",
    examples: [
      { word: "原", reading: "hara", meaning: "field/origin" },
      { word: "厚い", reading: "atsu(i)", meaning: "thick" },
      { word: "厄", reading: "yaku", meaning: "misfortune/evil" }
    ],
    sentences: [
      { jp: "原因は何ですか。", en: "What is the cause?" },
      { jp: "この本は厚いです。", en: "This book is thick." }
    ]
  },
  '厶': {
    explanation: "The 'private' or 'myself' radical (mu). Often appears in kanji related to personal matters or secrecy.",
    examples: [
      { word: "私", reading: "watashi/shi", meaning: "I/private" },
      { word: "去る", reading: "sa(ru)", meaning: "to leave/past" },
      { word: "参る", reading: "mai(ru)", meaning: "to visit/participate" }
    ],
    sentences: [
      { jp: "私は学生です。", en: "I am a student." },
      { jp: "去年、日本に行きました。", en: "I went to Japan last year." }
    ]
  },
  '又': {
    explanation: "The 'again' or 'right hand' radical (mata). Originally depicted a right hand.",
    examples: [
      { word: "又", reading: "mata", meaning: "again/and" },
      { word: "友", reading: "tomo", meaning: "friend" },
      { word: "取る", reading: "to(ru)", meaning: "to take" }
    ],
    sentences: [
      { jp: "又明日会いましょう。", en: "Let's meet again tomorrow." },
      { jp: "友達と遊びます。", en: "I play with my friend." }
    ]
  },

  // === 3 STROKES (31 Radicals) ===
  '口': {
    explanation: "The 'mouth' radical (kuchi). Very common, relates to speech, eating, and physical openings.",
    examples: [
      { word: "口", reading: "kuchi", meaning: "mouth" },
      { word: "食べる", reading: "ta(beru)", meaning: "to eat" },
      { word: "話す", reading: "hana(su)", meaning: "to speak" }
    ],
    sentences: [
      { jp: "口を開けてください。", en: "Please open your mouth." },
      { jp: "日本語を話せますか。", en: "Can you speak Japanese?" }
    ]
  },
  '囗': {
    explanation: "The 'enclosure' radical (kunigamae). Surrounds other components to suggest containment or borders.",
    examples: [
      { word: "国", reading: "kuni", meaning: "country/nation" },
      { word: "回る", reading: "mawa(ru)", meaning: "to go around" },
      { word: "園", reading: "en", meaning: "garden/park" }
    ],
    sentences: [
      { jp: "どの国に行きたいですか。", en: "Which country do you want to visit?" },
      { jp: "公園で遊びましょう。", en: "Let's play in the park." }
    ]
  },
  '土': {
    explanation: "The 'earth' or 'soil' radical (tsuchi). Relates to ground, land, and construction.",
    examples: [
      { word: "土", reading: "tsuchi", meaning: "earth/soil" },
      { word: "地", reading: "chi/ji", meaning: "ground/land" },
      { word: "場所", reading: "basho", meaning: "place/location" }
    ],
    sentences: [
      { jp: "庭の土を掘りました。", en: "I dug the soil in the garden." },
      { jp: "この場所はどこですか。", en: "Where is this place?" }
    ]
  },
  '士': {
    explanation: "The 'samurai' or 'scholar' radical (samurai). Represents a man of status or learning.",
    examples: [
      { word: "士", reading: "shi", meaning: "samurai/gentleman" },
      { word: "武士", reading: "bushi", meaning: "warrior" },
      { word: "博士", reading: "hakase", meaning: "doctor/PhD" }
    ],
    sentences: [
      { jp: "博士号を取りたいです。", en: "I want to earn a doctorate." },
      { jp: "武士の精神を尊重します。", en: "I respect the samurai spirit." }
    ]
  },
  '夂': {
    explanation: "The 'winter' or 'go' radical (fuyugashira). Often implies descending or following.",
    examples: [
      { word: "冬", reading: "fuyu", meaning: "winter" },
      { word: "各", reading: "kaku", meaning: "each" },
      { word: "条", reading: "jou", meaning: "article/clause" }
    ],
    sentences: [
      { jp: "冬は雪が降ります。", en: "It snows in winter." },
      { jp: "各自で準備してください。", en: "Please prepare individually." }
    ]
  },
  '夊': {
    explanation: "The 'go slowly' radical (suinyou). Very similar to 夂 but the bottom stroke crosses over.",
    examples: [
      { word: "夏", reading: "natsu", meaning: "summer" },
      { word: "麦", reading: "mugi", meaning: "wheat" },
      { word: "致", reading: "ita(su)", meaning: "to do (humble)" }
    ],
    sentences: [
      { jp: "夏休みが楽しみです。", en: "I am looking forward to summer vacation." },
      { jp: "よろしくお願い致します。", en: "I humbly ask for your favor." }
    ]
  },
  '夕': {
    explanation: "The 'evening' radical (yuube). Represents the moon appearing at dusk.",
    examples: [
      { word: "夕方", reading: "yuugata", meaning: "evening" },
      { word: "夜", reading: "yoru", meaning: "night" },
      { word: "夢", reading: "yume", meaning: "dream" }
    ],
    sentences: [
      { jp: "夕方に雨が降りました。", en: "It rained in the evening." },
      { jp: "良い夢を見ました。", en: "I had a good dream." }
    ]
  },
  '大': {
    explanation: "The 'big' or 'large' radical (dai). Depicts a person standing with arms and legs spread out.",
    examples: [
      { word: "大きい", reading: "oo(kii)", meaning: "big/large" },
      { word: "大学", reading: "daigaku", meaning: "university" },
      { word: "太い", reading: "futo(i)", meaning: "thick/fat" }
    ],
    sentences: [
      { jp: "大きな夢を持っています。", en: "I have big dreams." },
      { jp: "大学で何を勉強しましたか。", en: "What did you study at university?" }
    ]
  },
  '女': {
    explanation: "The 'woman' radical (onna). Appears in kanji related to females, family, beauty, and emotions.",
    examples: [
      { word: "女", reading: "onna", meaning: "woman" },
      { word: "母", reading: "haha", meaning: "mother" },
      { word: "好き", reading: "su(ki)", meaning: "liked/favorite" }
    ],
    sentences: [
      { jp: "お母さんはどこですか。", en: "Where is your mother?" },
      { jp: "音楽が好きです。", en: "I like music." }
    ]
  },
  '子': {
    explanation: "The 'child' radical (ko). Represents offspring, youth, or small things.",
    examples: [
      { word: "子", reading: "ko", meaning: "child" },
      { word: "子供", reading: "kodomo", meaning: "children" },
      { word: "学ぶ", reading: "mana(bu)", meaning: "to learn" }
    ],
    sentences: [
      { jp: "子供たちは公園で遊んでいます。", en: "The children are playing in the park." },
      { jp: "新しいことを学ぶのが好きです。", en: "I like learning new things." }
    ]
  },
  '宀': {
    explanation: "The 'roof' radical (ukanmuri). Appears at the top of kanji related to buildings, home, and shelter.",
    examples: [
      { word: "家", reading: "ie/ka", meaning: "house/home" },
      { word: "室", reading: "shitsu", meaning: "room" },
      { word: "安い", reading: "yasu(i)", meaning: "cheap" }
    ],
    sentences: [
      { jp: "家に帰りたいです。", en: "I want to go home." },
      { jp: "この部屋はとても広いです。", en: "This room is very spacious." }
    ]
  },
  '寸': {
    explanation: "The 'inch' or 'measurement' radical (sun). Relates to rules, measurements, or small things.",
    examples: [
      { word: "寺", reading: "tera", meaning: "temple" },
      { word: "専", reading: "sen", meaning: "specialty/exclusive" },
      { word: "導", reading: "michibi(ku)", meaning: "to guide" }
    ],
    sentences: [
      { jp: "京都の寺を巡ります。", en: "I will tour the temples in Kyoto." },
      { jp: "専門家を呼びます。", en: "I will call an expert." }
    ]
  },
  '小': {
    explanation: "The 'small' radical (shou).",
    examples: [
      { word: "小さい", reading: "chii(sai)", meaning: "small" },
      { word: "少し", reading: "suko(shi)", meaning: "a little" },
      { word: "少", reading: "shou", meaning: "few" }
    ],
    sentences: [
      { jp: "小さい犬を飼っています。", en: "I have a small dog." },
      { jp: "少し待ってください。", en: "Please wait a little bit." }
    ]
  },
  '尢': {
    explanation: "The 'lame' or 'crooked leg' radical (mageashi).",
    examples: [
      { word: "就", reading: "tsu(ku)", meaning: "to settle/take a job" },
      { word: "尤", reading: "motto(mo)", meaning: "reasonable" }
    ],
    sentences: [
      { jp: "就職活動をしています。", en: "I am job hunting." },
      { jp: "あなたの言うことは尤もだ。", en: "What you say is perfectly reasonable." }
    ]
  },
  '尸': {
    explanation: "The 'corpse' or 'flag' radical (shikabane). Relates to bodies lying down, dwellings, or spanning.",
    examples: [
      { word: "屋", reading: "ya", meaning: "roof/shop" },
      { word: "局", reading: "kyoku", meaning: "bureau/department" },
      { word: "尽", reading: "tsu(kusu)", meaning: "to exhaust/use up" }
    ],
    sentences: [
      { jp: "パン屋に行きます。", en: "I am going to the bakery." },
      { jp: "郵便局はどこですか。", en: "Where is the post office?" }
    ]
  },
  '屮': {
    explanation: "The 'sprout' radical (tetsubane). Represents a young plant emerging from the ground.",
    examples: [
      { word: "屯", reading: "ton", meaning: "barracks/camp" },
      { word: "逆", reading: "gyaku", meaning: "reverse/opposite" }
    ],
    sentences: [
      { jp: "軍隊が駐屯している。", en: "The army is stationed." },
      { jp: "逆の方向へ進みました。", en: "I went in the opposite direction." }
    ]
  },
  '山': {
    explanation: "The 'mountain' radical (yama). Represents heights, peaks, and nature.",
    examples: [
      { word: "山", reading: "yama", meaning: "mountain" },
      { word: "岩", reading: "iwa", meaning: "rock" },
      { word: "島", reading: "shima", meaning: "island" }
    ],
    sentences: [
      { jp: "富士山に登りたいです。", en: "I want to climb Mount Fuji." },
      { jp: "大きな島が見えます。", en: "I can see a large island." }
    ]
  },
  '巛': {
    explanation: "The 'river' radical (magarigawa). A variant of 川 (kawa), representing flowing water.",
    examples: [
      { word: "川", reading: "kawa", meaning: "river" },
      { word: "州", reading: "shuu", meaning: "state/province" },
      { word: "巡", reading: "megu(ru)", meaning: "to patrol/go around" }
    ],
    sentences: [
      { jp: "カリフォルニア州に行きました。", en: "I went to California state." },
      { jp: "街を巡回します。", en: "I will patrol the town." }
    ]
  },
  '工': {
    explanation: "The 'work' or 'craft' radical (takumi). Depicts a carpenter's square, relating to labor and construction.",
    examples: [
      { word: "工場", reading: "koujou", meaning: "factory" },
      { word: "左", reading: "hidari", meaning: "left" },
      { word: "差", reading: "sa", meaning: "difference" }
    ],
    sentences: [
      { jp: "工場で働いています。", en: "I work at a factory." },
      { jp: "左に曲がってください。", en: "Please turn left." }
    ]
  },
  '己': {
    explanation: "The 'oneself' radical (onore). Can represent a snake or oneself.",
    examples: [
      { word: "己", reading: "onore", meaning: "oneself" },
      { word: "巻", reading: "ma(ku)", meaning: "to roll/wind" },
      { word: "改", reading: "arata(meru)", meaning: "to reform" }
    ],
    sentences: [
      { jp: "己の道を進む。", en: "Proceed on one's own path." },
      { jp: "規則を改めました。", en: "We reformed the rules." }
    ]
  },
  '巾': {
    explanation: "The 'cloth' radical (haba). Relates to textiles, clothing, and sweeping.",
    examples: [
      { word: "市", reading: "ichi/shi", meaning: "city/market" },
      { word: "布", reading: "nuno", meaning: "cloth" },
      { word: "席", reading: "seki", meaning: "seat" }
    ],
    sentences: [
      { jp: "市場で買い物をします。", en: "I shop at the market." },
      { jp: "席に座ってください。", en: "Please sit in your seat." }
    ]
  },
  '干': {
    explanation: "The 'dry' or 'shield' radical (hosu).",
    examples: [
      { word: "干す", reading: "ho(su)", meaning: "to dry" },
      { word: "平", reading: "taira", meaning: "flat/peace" },
      { word: "年", reading: "toshi/nen", meaning: "year" }
    ],
    sentences: [
      { jp: "服を干します。", en: "I dry the clothes." },
      { jp: "平和を願います。", en: "I pray for peace." }
    ]
  },
  '幺': {
    explanation: "The 'short thread' radical (itogashira). Relates to small, tiny, or subtle things.",
    examples: [
      { word: "幼い", reading: "osana(i)", meaning: "childish/infant" },
      { word: "幻", reading: "maboroshi", meaning: "phantom/illusion" },
      { word: "幾", reading: "iku", meaning: "how many" }
    ],
    sentences: [
      { jp: "彼はまだ幼いです。", en: "He is still young/childish." },
      { jp: "幻を見ました。", en: "I saw an illusion." }
    ]
  },
  '广': {
    explanation: "The 'dotted cliff' or 'broad building' radical (madare). Depicts a building on a cliff.",
    examples: [
      { word: "店", reading: "mise", meaning: "shop/store" },
      { word: "広い", reading: "hiro(i)", meaning: "wide/spacious" },
      { word: "庭", reading: "niwa", meaning: "garden" }
    ],
    sentences: [
      { jp: "新しい店がオープンしました。", en: "A new store opened." },
      { jp: "この部屋は広いです。", en: "This room is spacious." }
    ]
  },
  '廴': {
    explanation: "The 'long stride' or 'stretch' radical (ennyou). Implies extending or progressing.",
    examples: [
      { word: "建てる", reading: "ta(teru)", meaning: "to build" },
      { word: "延ばす", reading: "no(basu)", meaning: "to extend/postpone" }
    ],
    sentences: [
      { jp: "新しい家を建てます。", en: "I will build a new house." },
      { jp: "会議を延期します。", en: "We will postpone the meeting." }
    ]
  },
  '廾': {
    explanation: "The 'two hands' radical (nijuuashi). Depicts hands lifting or playing with something.",
    examples: [
      { word: "弁", reading: "ben", meaning: "valve/speech" },
      { word: "弄", reading: "moteaso(bu)", meaning: "to play with" },
      { word: "弊", reading: "hei", meaning: "evil/abuse" }
    ],
    sentences: [
      { jp: "弁当を買いました。", en: "I bought a bento (lunchbox)." },
      { jp: "スマホを弄る。", en: "To play with a smartphone." }
    ]
  },
  '弋': {
    explanation: "The 'shoot with a bow' radical (shikigamae). Represents a stake or an arrow attached to a string.",
    examples: [
      { word: "式", reading: "shiki", meaning: "ceremony/formula" },
      { word: "弐", reading: "ni", meaning: "two (financial/formal)" }
    ],
    sentences: [
      { jp: "結婚式に参加します。", en: "I will attend a wedding ceremony." },
      { jp: "正式な手続きをします。", en: "I will do the formal procedure." }
    ]
  },
  '弓': {
    explanation: "The 'bow' radical (yumi).",
    examples: [
      { word: "弓", reading: "yumi", meaning: "bow (archery)" },
      { word: "弱い", reading: "yowa(i)", meaning: "weak" },
      { word: "強い", reading: "tsuyo(i)", meaning: "strong" }
    ],
    sentences: [
      { jp: "弓道を習っています。", en: "I am learning Japanese archery." },
      { jp: "強い風が吹いています。", en: "A strong wind is blowing." }
    ]
  },
  '彐': {
    explanation: "The 'snout' radical (keigashira). Originally depicted the snout of an animal or a sweeping hand.",
    examples: [
      { word: "当", reading: "a(taru)", meaning: "to hit/be appropriate" },
      { word: "雪", reading: "yuki", meaning: "snow" },
      { word: "彗", reading: "houki", meaning: "comet" }
    ],
    sentences: [
      { jp: "宝くじが当たりました。", en: "I won the lottery." },
      { jp: "雪が降っています。", en: "It is snowing." }
    ]
  },
  '彡': {
    explanation: "The 'hair' or 'bristle' radical (sanukuri). Relates to hair, decoration, and flowing patterns.",
    examples: [
      { word: "形", reading: "katachi", meaning: "shape/form" },
      { word: "彩", reading: "irodo(ru)", meaning: "to color/decorate" },
      { word: "影", reading: "kage", meaning: "shadow" }
    ],
    sentences: [
      { jp: "この形が好きです。", en: "I like this shape." },
      { jp: "影が長くなっています。", en: "The shadow is growing longer." }
    ]
  },
  '彳': {
    explanation: "The 'step' or 'walking person' radical (gyouninben). Signifies taking steps, walking, or progressing.",
    examples: [
      { word: "行く", reading: "i(ku)", meaning: "to go" },
      { word: "待つ", reading: "ma(tsu)", meaning: "to wait" },
      { word: "後", reading: "ushiro", meaning: "behind/after" }
    ],
    sentences: [
      { jp: "学校に行きます。", en: "I go to school." },
      { jp: "少し待ってください。", en: "Please wait a little." }
    ]
  }
};

export const radicalsStroke4to6: Record<string, RadicalDetail> = {
  // === 4 STROKES (34 Radicals) ===
  '心': {
    explanation: "The 'heart' radical (kokoro). Represents feelings, thought, or emotions. Forms 忄 (risshinben) on the left.",
    examples: [
      { word: "心", reading: "kokoro", meaning: "heart/mind" },
      { word: "思う", reading: "omo(u)", meaning: "to think" },
      { word: "悲しい", reading: "kana(shii)", meaning: "sad" }
    ],
    sentences: [
      { jp: "心を込めて作りました。", en: "I made it with all my heart." },
      { jp: "どう思いますか。", en: "What do you think?" }
    ]
  },
  '戈': {
    explanation: "The 'halberd' or 'spear' radical (hoko). Represents weapons, war, or cutting.",
    examples: [
      { word: "我", reading: "ware", meaning: "I/ego" },
      { word: "戦う", reading: "tataka(u)", meaning: "to fight" },
      { word: "成る", reading: "na(ru)", meaning: "to become" }
    ],
    sentences: [
      { jp: "戦争は悲惨です。", en: "War is tragic." },
      { jp: "大人に成りました。", en: "I became an adult." }
    ]
  },
  '戸': {
    explanation: "The 'door' or 'household' radical (tobira). Represents a single-leaf door or a house.",
    examples: [
      { word: "戸", reading: "to", meaning: "door" },
      { word: "所", reading: "tokoro", meaning: "place" },
      { word: "戻る", reading: "modo(ru)", meaning: "to return" }
    ],
    sentences: [
      { jp: "戸を閉めてください。", en: "Please close the door." },
      { jp: "いい所ですね。", en: "It's a nice place, isn't it?" }
    ]
  },
  '手': {
    explanation: "The 'hand' radical (te). Relates to actions performed with hands. Forms 扌 (tehen) on the left.",
    examples: [
      { word: "手", reading: "te", meaning: "hand" },
      { word: "持つ", reading: "mo(tsu)", meaning: "to hold" },
      { word: "打つ", reading: "u(tsu)", meaning: "to hit" }
    ],
    sentences: [
      { jp: "手を洗ってください。", en: "Please wash your hands." },
      { jp: "カバンを持ちましょうか。", en: "Shall I hold your bag?" }
    ]
  },
  '支': {
    explanation: "The 'branch' radical (shinyou). Depicts a hand holding a branch.",
    examples: [
      { word: "支える", reading: "sasa(eru)", meaning: "to support" },
      { word: "支払う", reading: "shihara(u)", meaning: "to pay" },
      { word: "枝", reading: "eda", meaning: "branch (uses tree + branch)" }
    ],
    sentences: [
      { jp: "家族を支えます。", en: "I support my family." },
      { jp: "カードで支払います。", en: "I will pay by card." }
    ]
  },
  '攴': {
    explanation: "The 'strike' or 'action' radical (bokuzukuri). Depicts a hand holding a stick. Usually appears as 攵 on the right.",
    examples: [
      { word: "教える", reading: "oshi(eru)", meaning: "to teach" },
      { word: "数える", reading: "kazo(eru)", meaning: "to count" },
      { word: "放つ", reading: "hana(tsu)", meaning: "to release" }
    ],
    sentences: [
      { jp: "英語を教えています。", en: "I am teaching English." },
      { jp: "数を数えます。", en: "I count the numbers." }
    ]
  },
  '文': {
    explanation: "The 'literature' or 'script' radical (bun). Originally depicted a person with chest tattoos.",
    examples: [
      { word: "文化", reading: "bunka", meaning: "culture" },
      { word: "文字", reading: "moji", meaning: "letter/character" },
      { word: "文章", reading: "bunshou", meaning: "sentence/article" }
    ],
    sentences: [
      { jp: "日本の文化に興味があります。", en: "I am interested in Japanese culture." },
      { jp: "漢字は難しい文字です。", en: "Kanji are difficult characters." }
    ]
  },
  '斗': {
    explanation: "The 'dipper' or 'measure' radical (toomatsu). Represents a ladle used for measuring grain.",
    examples: [
      { word: "料", reading: "ryou", meaning: "fee/materials" },
      { word: "斜", reading: "naname", meaning: "diagonal" },
      { word: "斗", reading: "to", meaning: "dipper (measure)" }
    ],
    sentences: [
      { jp: "料理を作ります。", en: "I make a meal." },
      { jp: "斜めに線を引く。", en: "Draw a diagonal line." }
    ]
  },
  '斤': {
    explanation: "The 'axe' radical (ono). Represents a chopping tool or a unit of weight.",
    examples: [
      { word: "新しい", reading: "atara(shii)", meaning: "new" },
      { word: "所", reading: "tokoro", meaning: "place" },
      { word: "斬る", reading: "ki(ru)", meaning: "to slay/cut" }
    ],
    sentences: [
      { jp: "新しい靴を買いました。", en: "I bought new shoes." },
      { jp: "いい所ですね。", en: "It's a nice place, isn't it?" }
    ]
  },
  '方': {
    explanation: "The 'direction' or 'square' radical (hou). Originally depicted two boats tied together.",
    examples: [
      { word: "方", reading: "kata", meaning: "direction/person" },
      { word: "旅", reading: "tabi", meaning: "trip/travel" },
      { word: "族", reading: "zoku", meaning: "tribe/family" }
    ],
    sentences: [
      { jp: "このやり方が好きです。", en: "I like this method." },
      { jp: "家族と旅行します。", en: "I will travel with my family." }
    ]
  },
  '无': {
    explanation: "The 'nothing' radical (munyou). Represents a person shaking their head in denial.",
    examples: [
      { word: "無", reading: "mu", meaning: "nothing/none" },
      { word: "既", reading: "sude(ni)", meaning: "already" }
    ],
    sentences: [
      { jp: "無理しないでください。", en: "Please don't overdo it." },
      { jp: "既に出発しました。", en: "They have already departed." }
    ]
  },
  '日': {
    explanation: "The 'sun' or 'day' radical (nichi). Relates to time, brightness, and the sun.",
    examples: [
      { word: "日", reading: "hi/nichi", meaning: "sun/day" },
      { word: "明", reading: "aki(raka)", meaning: "bright/clear" },
      { word: "時", reading: "toki", meaning: "time" }
    ],
    sentences: [
      { jp: "今日はいい天気ですね。", en: "The weather is nice today." },
      { jp: "時間がありません。", en: "I don't have time." }
    ]
  },
  '曰': {
    explanation: "The 'say' radical (hirabi). Wider than the sun radical. Represents a mouth with words coming out.",
    examples: [
      { word: "曲", reading: "kyoku", meaning: "song/curve" },
      { word: "書く", reading: "ka(ku)", meaning: "to write" },
      { word: "最", reading: "sai", meaning: "most" }
    ],
    sentences: [
      { jp: "手紙を書きます。", en: "I will write a letter." },
      { jp: "これが最も重要です。", en: "This is the most important." }
    ]
  },
  '月': {
    explanation: "The 'moon' or 'month' radical (tsuki). Often substituted for 'meat/flesh' (肉) when referencing body parts.",
    examples: [
      { word: "月", reading: "tsuki/gatsu", meaning: "moon/month" },
      { word: "腕", reading: "ude", meaning: "arm" },
      { word: "脳", reading: "nou", meaning: "brain" }
    ],
    sentences: [
      { jp: "月が綺麗ですね。", en: "The moon is beautiful." },
      { jp: "来月、旅行に行きます。", en: "I will travel next month." }
    ]
  },
  '木': {
    explanation: "The 'tree' or 'wood' radical (ki). Appears in kanji for plants and wooden structures. Forms 木偏 (kihen) on the left.",
    examples: [
      { word: "木", reading: "ki", meaning: "tree/wood" },
      { word: "林", reading: "hayashi", meaning: "woods" },
      { word: "森", reading: "mori", meaning: "forest" }
    ],
    sentences: [
      { jp: "公園には大きな木があります。", en: "There is a big tree in the park." },
      { jp: "森の中で迷いました。", en: "I got lost in the forest." }
    ]
  },
  '欠': {
    explanation: "The 'lack' or 'yawn' radical (akubi). Depicts a person with an open mouth. Relates to blowing, drinking, or lacking.",
    examples: [
      { word: "歌う", reading: "uta(u)", meaning: "to sing" },
      { word: "飲む", reading: "no(mu)", meaning: "to drink" },
      { word: "吹く", reading: "fu(ku)", meaning: "to blow" }
    ],
    sentences: [
      { jp: "カラオケで歌います。", en: "I sing at karaoke." },
      { jp: "風が吹いています。", en: "The wind is blowing." }
    ]
  },
  '止': {
    explanation: "The 'stop' radical (tomehen). Originally depicted a footprint.",
    examples: [
      { word: "止まる", reading: "to(maru)", meaning: "to stop" },
      { word: "歩く", reading: "aru(ku)", meaning: "to walk" },
      { word: "正しい", reading: "tada(shii)", meaning: "correct" }
    ],
    sentences: [
      { jp: "赤信号で止まってください。", en: "Please stop at the red light." },
      { jp: "毎朝公園を歩きます。", en: "I walk in the park every morning." }
    ]
  },
  '歹': {
    explanation: "The 'death' or 'decay' radical (gatsu). Represents bone fragments.",
    examples: [
      { word: "死ぬ", reading: "shi(nu)", meaning: "to die" },
      { word: "残る", reading: "noko(ru)", meaning: "to remain" },
      { word: "殉", reading: "jun", meaning: "martyrdom" }
    ],
    sentences: [
      { jp: "花が残っています。", en: "The flowers remain." },
      { jp: "彼は戦死しました。", en: "He died in battle." }
    ]
  },
  '殳': {
    explanation: "The 'weapon' or 'halberd' radical (hokozukuri). Hand holding a weapon, implying striking or action.",
    examples: [
      { word: "役", reading: "yaku", meaning: "role/duty" },
      { word: "投げる", reading: "na(geru)", meaning: "to throw" },
      { word: "殺す", reading: "koro(su)", meaning: "to kill" }
    ],
    sentences: [
      { jp: "ボールを投げます。", en: "I throw the ball." },
      { jp: "市役所に行きます。", en: "I am going to city hall." }
    ]
  },
  '毋': {
    explanation: "The 'do not' or 'mother' radical (nakare).",
    examples: [
      { word: "母", reading: "haha", meaning: "mother" },
      { word: "毒", reading: "doku", meaning: "poison" },
      { word: "毎", reading: "mai", meaning: "every" }
    ],
    sentences: [
      { jp: "母は料理が上手です。", en: "My mother is good at cooking." },
      { jp: "毎日運動します。", en: "I exercise every day." }
    ]
  },
  '比': {
    explanation: "The 'compare' radical (narabi). Depicts two people lined up.",
    examples: [
      { word: "比べる", reading: "kura(beru)", meaning: "to compare" },
      { word: "皆", reading: "mina", meaning: "everyone" },
      { word: "昆", reading: "kon", meaning: "descendants/insects" }
    ],
    sentences: [
      { jp: "値段を比べます。", en: "I compare the prices." },
      { jp: "皆で歌いましょう。", en: "Let's all sing together." }
    ]
  },
  '毛': {
    explanation: "The 'hair' radical (ke). Represents fur, hair, or feathers.",
    examples: [
      { word: "毛", reading: "ke", meaning: "hair/fur" },
      { word: "髪", reading: "kami", meaning: "hair (on head)" }
    ],
    sentences: [
      { jp: "猫の毛が落ちています。", en: "Cat hair is falling out." },
      { jp: "髪を切りました。", en: "I cut my hair." }
    ]
  },
  '氏': {
    explanation: "The 'clan' or 'Mr./Mrs.' radical (uji). Represents a family lineage or paper.",
    examples: [
      { word: "氏", reading: "shi", meaning: "Mr./Mrs./clan" },
      { word: "民", reading: "tami", meaning: "people" },
      { word: "紙", reading: "kami", meaning: "paper" }
    ],
    sentences: [
      { jp: "彼は山田氏です。", en: "He is Mr. Yamada." },
      { jp: "紙に名前を書いてください。", en: "Please write your name on the paper." }
    ]
  },
  '气': {
    explanation: "The 'steam' or 'breath' radical (kigamae). Relates to air, weather, and spirit.",
    examples: [
      { word: "気", reading: "ki", meaning: "spirit/air" },
      { word: "汽", reading: "ki", meaning: "steam" }
    ],
    sentences: [
      { jp: "元気ですか。", en: "How are you?" },
      { jp: "汽車に乗りました。", en: "I rode a steam train." }
    ]
  },
  '水': {
    explanation: "The 'water' radical (mizu). Extremely common. Forms 氵 (sanzui) on the left.",
    examples: [
      { word: "水", reading: "mizu", meaning: "water" },
      { word: "海", reading: "umi", meaning: "sea" },
      { word: "泳ぐ", reading: "oyo(gu)", meaning: "to swim" }
    ],
    sentences: [
      { jp: "水を一杯ください。", en: "Please give me a glass of water." },
      { jp: "海で泳ぐのが好きです。", en: "I like swimming in the sea." }
    ]
  },
  '火': {
    explanation: "The 'fire' radical (hi). Relates to heat, burning, and light. Forms 灬 (renga) at the bottom.",
    examples: [
      { word: "火", reading: "hi", meaning: "fire" },
      { word: "炎", reading: "honoo", meaning: "flame" },
      { word: "焼く", reading: "ya(ku)", meaning: "to bake/grill" }
    ],
    sentences: [
      { jp: "火に気をつけてください。", en: "Please be careful with the fire." },
      { jp: "肉を焼きます。", en: "I will grill the meat." }
    ]
  },
  '爪': {
    explanation: "The 'claw' or 'nail' radical (tsume). Often appears as 爫 (tsumekanmuri) at the top.",
    examples: [
      { word: "爪", reading: "tsume", meaning: "nail/claw" },
      { word: "妥", reading: "da", meaning: "gentle/compromise" },
      { word: "受", reading: "u(keru)", meaning: "to receive" }
    ],
    sentences: [
      { jp: "爪を切ります。", en: "I cut my nails." },
      { jp: "テストを受けます。", en: "I will take a test." }
    ]
  },
  '父': {
    explanation: "The 'father' radical (chichi). Depicts a hand holding a rod representing authority.",
    examples: [
      { word: "父", reading: "chichi", meaning: "father" },
      { word: "爺", reading: "jii", meaning: "grandfather" }
    ],
    sentences: [
      { jp: "父は会社員です。", en: "My father is a company employee." },
      { jp: "お父さんは元気ですか。", en: "Is your father doing well?" }
    ]
  },
  '爻': {
    explanation: "The 'mix' or 'twigs' radical (sakime).",
    examples: [
      { word: "爽", reading: "sawa(yaka)", meaning: "refreshing" },
      { word: "爾", reading: "ji", meaning: "you/that" }
    ],
    sentences: [
      { jp: "爽やかな朝ですね。", en: "It is a refreshing morning, isn't it?" },
      { jp: "気分が爽快です。", en: "I feel invigorated." }
    ]
  },
  '爿': {
    explanation: "The 'split wood' or 'left half of tree' radical (shouhen). Relates to beds or boards.",
    examples: [
      { word: "床", reading: "yuka", meaning: "floor" },
      { word: "将", reading: "shou", meaning: "commander" },
      { word: "壁", reading: "kabe", meaning: "wall" }
    ],
    sentences: [
      { jp: "床を掃除します。", en: "I sweep the floor." },
      { jp: "壁に絵を掛けます。", en: "I hang a picture on the wall." }
    ]
  },
  '片': {
    explanation: "The 'slice' or 'right half of tree' radical (kata).",
    examples: [
      { word: "片", reading: "kata", meaning: "one-sided/fragment" },
      { word: "版", reading: "han", meaning: "edition/print" }
    ],
    sentences: [
      { jp: "片付けをします。", en: "I will tidy up." },
      { jp: "新しい版が出版されました。", en: "A new edition was published." }
    ]
  },
  '牙': {
    explanation: "The 'fang' or 'tusk' radical (kiba).",
    examples: [
      { word: "牙", reading: "kiba", meaning: "fang" },
      { word: "邪", reading: "ja", meaning: "wicked/evil" }
    ],
    sentences: [
      { jp: "狼の牙は鋭い。", en: "The wolf's fangs are sharp." },
      { jp: "風邪を引きました。", en: "I caught a cold." }
    ]
  },
  '牛': {
    explanation: "The 'cow' or 'ox' radical (ushi). Relates to cattle and pastoral life.",
    examples: [
      { word: "牛", reading: "ushi", meaning: "cow" },
      { word: "牧", reading: "maki", meaning: "pasture" },
      { word: "物", reading: "mono", meaning: "thing" }
    ],
    sentences: [
      { jp: "毎朝牛乳を飲みます。", en: "I drink milk every morning." },
      { jp: "買い物をします。", en: "I do shopping." }
    ]
  },
  '犬': {
    explanation: "The 'dog' radical (inu). Relates to beasts and hunting. Forms 犭 (inuhen) on the left.",
    examples: [
      { word: "犬", reading: "inu", meaning: "dog" },
      { word: "猫", reading: "neko", meaning: "cat" },
      { word: "獣", reading: "kemono", meaning: "beast" }
    ],
    sentences: [
      { jp: "犬を飼っています。", en: "I have a dog." },
      { jp: "猫が好きです。", en: "I like cats." }
    ]
  },

  // === 5 STROKES (23 Radicals) ===
  '玄': {
    explanation: "The 'dark' or 'profound' radical (gen). Depicts a thread dyed black.",
    examples: [
      { word: "玄", reading: "gen", meaning: "mysterious/dark" },
      { word: "率", reading: "ritsu", meaning: "rate/ratio" }
    ],
    sentences: [
      { jp: "玄関で靴を脱ぎます。", en: "I take off my shoes at the entrance." },
      { jp: "成功率が高いです。", en: "The success rate is high." }
    ]
  },
  '玉': {
    explanation: "The 'jade' or 'jewel' radical (tama). Often appears as 王 (king) without the dot when part of a kanji.",
    examples: [
      { word: "玉", reading: "tama", meaning: "ball/jewel" },
      { word: "宝", reading: "takara", meaning: "treasure" },
      { word: "理", reading: "ri", meaning: "reason/logic" }
    ],
    sentences: [
      { jp: "宝物を探します。", en: "I search for treasure." },
      { jp: "理由を説明してください。", en: "Please explain the reason." }
    ]
  },
  '瓜': {
    explanation: "The 'melon' radical (uri). Depicts vines and a melon.",
    examples: [
      { word: "瓜", reading: "uri", meaning: "melon" },
      { word: "孤", reading: "ko", meaning: "orphan/alone" }
    ],
    sentences: [
      { jp: "西瓜を食べます。", en: "I eat watermelon." },
      { jp: "彼は孤独です。", en: "He is lonely." }
    ]
  },
  '瓦': {
    explanation: "The 'tile' radical (kawara). Relates to pottery and baked clay.",
    examples: [
      { word: "瓦", reading: "kawara", meaning: "roof tile" },
      { word: "瓶", reading: "bin", meaning: "bottle/jar" }
    ],
    sentences: [
      { jp: "屋根の瓦が落ちました。", en: "The roof tile fell." },
      { jp: "ビール瓶を片付けます。", en: "I clean up the beer bottles." }
    ]
  },
  '甘': {
    explanation: "The 'sweet' radical (amai). Depicts something tasty held in the mouth.",
    examples: [
      { word: "甘い", reading: "ama(i)", meaning: "sweet" },
      { word: "甚", reading: "hanaha(da)", meaning: "extremely" }
    ],
    sentences: [
      { jp: "このケーキは甘いです。", en: "This cake is sweet." },
      { jp: "甚大な被害が出た。", en: "Extremely heavy damage occurred." }
    ]
  },
  '生': {
    explanation: "The 'life' or 'birth' radical (iki). Depicts a plant shooting out of the earth.",
    examples: [
      { word: "生きる", reading: "i(kiru)", meaning: "to live" },
      { word: "産む", reading: "u(mu)", meaning: "to give birth" },
      { word: "星", reading: "hoshi", meaning: "star" }
    ],
    sentences: [
      { jp: "先生に質問します。", en: "I ask the teacher a question." },
      { jp: "星が綺麗です。", en: "The stars are beautiful." }
    ]
  },
  '用': {
    explanation: "The 'use' radical (mochiiru). Depicts a bucket or a bell.",
    examples: [
      { word: "用いる", reading: "mochi(iru)", meaning: "to use" },
      { word: "用意", reading: "youi", meaning: "preparation" }
    ],
    sentences: [
      { jp: "用事があります。", en: "I have some errands." },
      { jp: "食事の用意ができました。", en: "The meal preparation is done." }
    ]
  },
  '田': {
    explanation: "The 'rice field' radical (ta). Depicts the grid of agricultural paddies.",
    examples: [
      { word: "田んぼ", reading: "tanbo", meaning: "rice field" },
      { word: "男", reading: "otoko", meaning: "man (strength in field)" },
      { word: "町", reading: "machi", meaning: "town" }
    ],
    sentences: [
      { jp: "田舎に引っ越したいです。", en: "I want to move to the countryside." },
      { jp: "あの男の人は誰ですか。", en: "Who is that man?" }
    ]
  },
  '疋': {
    explanation: "The 'bolt of cloth' or 'foot' radical (hiki).",
    examples: [
      { word: "疋", reading: "hiki", meaning: "counter for animals/cloth" },
      { word: "疑う", reading: "utaga(u)", meaning: "to doubt" }
    ],
    sentences: [
      { jp: "彼の言葉を疑います。", en: "I doubt his words." },
      { jp: "疑問があります。", en: "I have a question/doubt." }
    ]
  },
  '疒': {
    explanation: "The 'sickness' radical (yamaidare). Encloses kanji related to diseases and pain.",
    examples: [
      { word: "病気", reading: "byouki", meaning: "illness" },
      { word: "痛い", reading: "ita(i)", meaning: "painful" },
      { word: "病院", reading: "byouin", meaning: "hospital" }
    ],
    sentences: [
      { jp: "頭が痛いです。", en: "My head hurts." },
      { jp: "病気で学校を休みました。", en: "I was absent from school due to illness." }
    ]
  },
  '癶': {
    explanation: "The 'footsteps' or 'tent' radical (hatsugashira). Depicts two feet pointing outward.",
    examples: [
      { word: "発", reading: "hatsu", meaning: "depart/emit" },
      { word: "登る", reading: "nobo(ru)", meaning: "to climb" }
    ],
    sentences: [
      { jp: "電車が出発します。", en: "The train departs." },
      { jp: "山に登ります。", en: "I climb the mountain." }
    ]
  },
  '白': {
    explanation: "The 'white' radical (shiro). Represents the color white or purity.",
    examples: [
      { word: "白い", reading: "shiro(i)", meaning: "white" },
      { word: "百", reading: "hyaku", meaning: "hundred" },
      { word: "的", reading: "mato", meaning: "target" }
    ],
    sentences: [
      { jp: "白いシャツを着ます。", en: "I wear a white shirt." },
      { jp: "目的は何ですか。", en: "What is the purpose?" }
    ]
  },
  '皮': {
    explanation: "The 'skin' or 'hide' radical (kawa). Hand stripping animal hide.",
    examples: [
      { word: "皮", reading: "kawa", meaning: "skin/peel" },
      { word: "波", reading: "nami", meaning: "wave" }
    ],
    sentences: [
      { jp: "りんごの皮をむきます。", en: "I peel the apple." },
      { jp: "波が高いです。", en: "The waves are high." }
    ]
  },
  '皿': {
    explanation: "The 'dish' or 'plate' radical (sara). Relates to containers and blood (collected in dishes).",
    examples: [
      { word: "皿", reading: "sara", meaning: "plate" },
      { word: "血", reading: "chi", meaning: "blood" },
      { word: "温かい", reading: "atata(kai)", meaning: "warm" }
    ],
    sentences: [
      { jp: "皿を洗います。", en: "I wash the dishes." },
      { jp: "温かいお茶を飲みます。", en: "I drink warm tea." }
    ]
  },
  '目': {
    explanation: "The 'eye' radical (me). Sideways drawing of an eye. Relates to vision.",
    examples: [
      { word: "目", reading: "me", meaning: "eye" },
      { word: "見る", reading: "mi(ru)", meaning: "to see" },
      { word: "眠い", reading: "nemu(i)", meaning: "sleepy" }
    ],
    sentences: [
      { jp: "目が痛いです。", en: "My eyes hurt." },
      { jp: "映画を見に行きましょう。", en: "Let's go watch a movie." }
    ]
  },
  '矛': {
    explanation: "The 'spear' or 'halberd' radical (hoko).",
    examples: [
      { word: "矛", reading: "hoko", meaning: "spear" },
      { word: "矛盾", reading: "mujun", meaning: "contradiction" }
    ],
    sentences: [
      { jp: "彼の話は矛盾しています。", en: "His story is contradictory." },
      { jp: "矛と盾の物語。", en: "The story of the spear and the shield." }
    ]
  },
  '矢': {
    explanation: "The 'arrow' radical (ya).",
    examples: [
      { word: "矢", reading: "ya", meaning: "arrow" },
      { word: "短い", reading: "mijika(i)", meaning: "short" },
      { word: "知る", reading: "shi(ru)", meaning: "to know" }
    ],
    sentences: [
      { jp: "矢のように速く走った。", en: "I ran as fast as an arrow." },
      { jp: "彼のことをよく知っています。", en: "I know him well." }
    ]
  },
  '石': {
    explanation: "The 'stone' or 'rock' radical (ishi). Relates to hard things, minerals, and crushing.",
    examples: [
      { word: "石", reading: "ishi", meaning: "stone" },
      { word: "岩", reading: "iwa", meaning: "rock" },
      { word: "破る", reading: "yabu(ru)", meaning: "to break/tear" }
    ],
    sentences: [
      { jp: "川で石を拾いました。", en: "I picked up stones by the river." },
      { jp: "約束を破りました。", en: "I broke the promise." }
    ]
  },
  '示': {
    explanation: "The 'altar' or 'spirit' radical (shimesu). Relates to gods, rituals, and the supernatural. Forms 礻 (shimesuhen) on the left.",
    examples: [
      { word: "祭", reading: "matsuri", meaning: "festival" },
      { word: "社", reading: "yashiro/sha", meaning: "shrine/company" },
      { word: "禁", reading: "kin", meaning: "prohibit" }
    ],
    sentences: [
      { jp: "夏祭りに参加します。", en: "I will participate in the summer festival." },
      { jp: "会社で働きます。", en: "I work at a company." }
    ]
  },
  '禸': {
    explanation: "The 'track' or 'footprint' radical (juunishi).",
    examples: [
      { word: "万", reading: "man", meaning: "ten thousand (variant root)" },
      { word: "獣", reading: "kemono", meaning: "beast" }
    ],
    sentences: [
      { jp: "一万円札を出します。", en: "I hand over a 10,000 yen bill." },
      { jp: "野獣が吠える。", en: "The wild beast roars." }
    ]
  },
  '禾': {
    explanation: "The 'grain' radical (nogi). Depicts a grain stalk drooping. Relates to crops and agriculture.",
    examples: [
      { word: "秋", reading: "aki", meaning: "autumn" },
      { word: "私", reading: "watashi", meaning: "I/private" },
      { word: "科", reading: "ka", meaning: "department/science" }
    ],
    sentences: [
      { jp: "秋になると葉が紅葉します。", en: "When autumn comes, the leaves change color." },
      { jp: "科学が好きです。", en: "I like science." }
    ]
  },
  '穴': {
    explanation: "The 'cave' or 'hole' radical (ana). Depicts a dwelling dug into the earth.",
    examples: [
      { word: "空", reading: "sora/kara", meaning: "sky/empty" },
      { word: "究", reading: "kiwa(meru)", meaning: "to investigate" },
      { word: "窓", reading: "mado", meaning: "window" }
    ],
    sentences: [
      { jp: "空っぽの箱です。", en: "It is an empty box." },
      { jp: "窓を開けてください。", en: "Please open the window." }
    ]
  },
  '立': {
    explanation: "The 'stand' radical (tatsu). Depicts a person standing firmly on the ground.",
    examples: [
      { word: "立つ", reading: "ta(tsu)", meaning: "to stand" },
      { word: "音", reading: "oto", meaning: "sound" },
      { word: "泣く", reading: "na(ku)", meaning: "to cry" }
    ],
    sentences: [
      { jp: "立ってください。", en: "Please stand up." },
      { jp: "音楽を聞きます。", en: "I listen to music." }
    ]
  },

  // === 6 STROKES (29 Radicals) ===
  '竹': {
    explanation: "The 'bamboo' radical (take). Forms ⺮ (takekanmuri) at the top of kanji.",
    examples: [
      { word: "竹", reading: "take", meaning: "bamboo" },
      { word: "筆", reading: "fude", meaning: "brush" },
      { word: "答", reading: "kota(e)", meaning: "answer" }
    ],
    sentences: [
      { jp: "質問に答えてください。", en: "Please answer the question." },
      { jp: "竹林を散歩しました。", en: "I took a walk through the bamboo grove." }
    ]
  },
  '米': {
    explanation: "The 'rice' radical (kome). Depicts grains of rice separated by a cross.",
    examples: [
      { word: "米", reading: "kome", meaning: "rice" },
      { word: "粉", reading: "kona", meaning: "flour" },
      { word: "迷う", reading: "mayo(u)", meaning: "to get lost" }
    ],
    sentences: [
      { jp: "お米を食べます。", en: "I eat rice." },
      { jp: "道に迷いました。", en: "I got lost." }
    ]
  },
  '糸': {
    explanation: "The 'thread' radical (ito). Relates to textiles, connections, and binding.",
    examples: [
      { word: "糸", reading: "ito", meaning: "thread" },
      { word: "結ぶ", reading: "musu(bu)", meaning: "to tie" },
      { word: "絵", reading: "e", meaning: "picture" }
    ],
    sentences: [
      { jp: "靴の紐を結んでください。", en: "Please tie your shoelaces." },
      { jp: "絵を描くのが好きです。", en: "I like drawing pictures." }
    ]
  },
  '缶': {
    explanation: "The 'jar' or 'earthenware' radical (hotogi).",
    examples: [
      { word: "缶", reading: "kan", meaning: "can/tin" },
      { word: "陶", reading: "tou", meaning: "pottery/ceramics (contains jar)" }
    ],
    sentences: [
      { jp: "空き缶を捨てます。", en: "I throw away empty cans." },
      { jp: "陶芸教室に行きます。", en: "I go to a pottery class." }
    ]
  },
  '网': {
    explanation: "The 'net' radical (amigashira). Usually appears as 罒 at the top of characters.",
    examples: [
      { word: "罪", reading: "tsumi", meaning: "sin/crime (caught in a net)" },
      { word: "置く", reading: "o(ku)", meaning: "to place" },
      { word: "罰", reading: "batsu", meaning: "punishment" }
    ],
    sentences: [
      { jp: "机の上に本を置きます。", en: "I place a book on the desk." },
      { jp: "罰を受けました。", en: "I received a punishment." }
    ]
  },
  '羊': {
    explanation: "The 'sheep' radical (hitsuji). Relates to sheep, flocks, and goodness.",
    examples: [
      { word: "羊", reading: "hitsuji", meaning: "sheep" },
      { word: "美しい", reading: "utsuku(shii)", meaning: "beautiful" },
      { word: "群れ", reading: "mu(re)", meaning: "flock/group" }
    ],
    sentences: [
      { jp: "美しい景色を見ました。", en: "I saw a beautiful scenery." },
      { jp: "羊の群れがいます。", en: "There is a flock of sheep." }
    ]
  },
  '羽': {
    explanation: "The 'feather' or 'wing' radical (hane). Relates to flying and birds.",
    examples: [
      { word: "羽", reading: "hane", meaning: "feather/wing" },
      { word: "習う", reading: "nara(u)", meaning: "to learn" },
      { word: "翌", reading: "yoku", meaning: "the following (day)" }
    ],
    sentences: [
      { jp: "日本語を習っています。", en: "I am learning Japanese." },
      { jp: "翌日、彼に会いました。", en: "The next day, I met him." }
    ]
  },
  '老': {
    explanation: "The 'old' radical (oi). Depicts an old man with long hair leaning on a cane.",
    examples: [
      { word: "老人", reading: "roujin", meaning: "old person" },
      { word: "考える", reading: "kanga(eru)", meaning: "to think" },
      { word: "者", reading: "mono", meaning: "person" }
    ],
    sentences: [
      { jp: "将来について考えます。", en: "I will think about the future." },
      { jp: "若者と老人が話しています。", en: "The youth and the elderly are talking." }
    ]
  },
  '而': {
    explanation: "The 'rake' or 'beard' radical (shikoshite).",
    examples: [
      { word: "耐える", reading: "ta(eru)", meaning: "to endure" },
      { word: "需", reading: "ju", meaning: "demand/request" }
    ],
    sentences: [
      { jp: "寒さに耐えます。", en: "I endure the cold." },
      { jp: "需要が高いです。", en: "The demand is high." }
    ]
  },
  '耒': {
    explanation: "The 'plow' radical (sukihen). Relates to tilling and agriculture.",
    examples: [
      { word: "耕す", reading: "tagaya(su)", meaning: "to plow" },
      { word: "耗", reading: "mou", meaning: "decrease/exhaust" }
    ],
    sentences: [
      { jp: "畑を耕します。", en: "I plow the field." },
      { jp: "体力を消耗しました。", en: "I exhausted my physical strength." }
    ]
  },
  '耳': {
    explanation: "The 'ear' radical (mimi). Relates to hearing and sound.",
    examples: [
      { word: "耳", reading: "mimi", meaning: "ear" },
      { word: "聞く", reading: "ki(ku)", meaning: "to listen" },
      { word: "声", reading: "koe", meaning: "voice" }
    ],
    sentences: [
      { jp: "耳が痛いです。", en: "My ear hurts." },
      { jp: "音楽を聞くのが好きです。", en: "I like listening to music." }
    ]
  },
  '聿': {
    explanation: "The 'brush' radical (fudezukuri). Depicts a hand holding a writing implement.",
    examples: [
      { word: "書く", reading: "ka(ku)", meaning: "to write" },
      { word: "律", reading: "ritsu", meaning: "law/rhythm" },
      { word: "建てる", reading: "ta(teru)", meaning: "to build" }
    ],
    sentences: [
      { jp: "ノートに書きます。", en: "I write in my notebook." },
      { jp: "法律を守ります。", en: "I obey the law." }
    ]
  },
  '肉': {
    explanation: "The 'meat' or 'flesh' radical (niku). Often replaced by 月 (moon) as a component.",
    examples: [
      { word: "肉", reading: "niku", meaning: "meat" },
      { word: "肩", reading: "kata", meaning: "shoulder" },
      { word: "背中", reading: "senaka", meaning: "back (of body)" }
    ],
    sentences: [
      { jp: "肉料理が好きです。", en: "I like meat dishes." },
      { jp: "肩が凝っています。", en: "My shoulders are stiff." }
    ]
  },
  '臣': {
    explanation: "The 'minister' or 'servant' radical (shin). Depicts an eye looking down.",
    examples: [
      { word: "大臣", reading: "daijin", meaning: "cabinet minister" },
      { word: "臨む", reading: "nozo(mu)", meaning: "to face/attend" },
      { word: "堅い", reading: "kata(i)", meaning: "hard/solid" }
    ],
    sentences: [
      { jp: "彼は大臣になりました。", en: "He became a government minister." },
      { jp: "海に臨むホテルです。", en: "It's a hotel facing the sea." }
    ]
  },
  '自': {
    explanation: "The 'self' radical (mizukara). Originally depicted a nose.",
    examples: [
      { word: "自分", reading: "jibun", meaning: "oneself" },
      { word: "自由", reading: "jiyuu", meaning: "freedom" },
      { word: "自然", reading: "shizen", meaning: "nature" }
    ],
    sentences: [
      { jp: "自分でやってみます。", en: "I will try it myself." },
      { jp: "自由な時間が欲しいです。", en: "I want free time." }
    ]
  },
  '至': {
    explanation: "The 'arrive' radical (itaru). Depicts an arrow hitting the ground.",
    examples: [
      { word: "至る", reading: "ita(ru)", meaning: "to reach" },
      { word: "室", reading: "shitsu", meaning: "room" },
      { word: "致す", reading: "ita(su)", meaning: "to do (humble)" }
    ],
    sentences: [
      { jp: "目的地に至りました。", en: "We have reached the destination." },
      { jp: "よろしくお願い致します。", en: "I humbly ask for your favor." }
    ]
  },
  '臼': {
    explanation: "The 'mortar' radical (usu).",
    examples: [
      { word: "臼", reading: "usu", meaning: "mortar" },
      { word: "興味", reading: "kyoumi", meaning: "interest" }
    ],
    sentences: [
      { jp: "餅を臼でつきます。", en: "We pound mochi in a mortar." },
      { jp: "日本の歴史に興味があります。", en: "I have an interest in Japanese history." }
    ]
  },
  '舌': {
    explanation: "The 'tongue' radical (shita). Relates to taste and speech.",
    examples: [
      { word: "舌", reading: "shita", meaning: "tongue" },
      { word: "話", reading: "hanashi", meaning: "talk/story" },
      { word: "活", reading: "katsu", meaning: "lively" }
    ],
    sentences: [
      { jp: "舌が痺れました。", en: "My tongue went numb." },
      { jp: "面白い話を聞かせてください。", en: "Please tell me an interesting story." }
    ]
  },
  '舛': {
    explanation: "The 'opposite' or 'dancing' radical (maiashi). Depicts two feet pointing away.",
    examples: [
      { word: "舞う", reading: "ma(u)", meaning: "to dance" },
      { word: "傑", reading: "ketsu", meaning: "excellence" }
    ],
    sentences: [
      { jp: "花びらが風に舞う。", en: "Petals flutter in the wind." },
      { jp: "彼は傑出した才能の持ち主です。", en: "He is an individual of outstanding talent." }
    ]
  },
  '舟': {
    explanation: "The 'boat' radical (fune). Relates to ships and navigation.",
    examples: [
      { word: "舟", reading: "fune", meaning: "boat" },
      { word: "船", reading: "fune", meaning: "ship" },
      { word: "航海", reading: "koukai", meaning: "voyage" }
    ],
    sentences: [
      { jp: "船で島に行きます。", en: "I am going to the island by ship." },
      { jp: "航海が始まりました。", en: "The voyage has begun." }
    ]
  },
  '艮': {
    explanation: "The 'stopping' or 'good' radical (kon).",
    examples: [
      { word: "良い", reading: "yo(i)", meaning: "good" },
      { word: "退く", reading: "shirizo(ku)", meaning: "to retreat" },
      { word: "限る", reading: "kagi(ru)", meaning: "to limit" }
    ],
    sentences: [
      { jp: "今日は良い天気です。", en: "It is good weather today." },
      { jp: "時間は限られています。", en: "Time is limited." }
    ]
  },
  '色': {
    explanation: "The 'color' radical (iro).",
    examples: [
      { word: "色", reading: "iro", meaning: "color" },
      { word: "絶対", reading: "zettai", meaning: "absolute" },
      { word: "艶", reading: "tsuya", meaning: "gloss" }
    ],
    sentences: [
      { jp: "何色が好きですか。", en: "What color do you like?" },
      { jp: "絶対に忘れません。", en: "I will absolutely never forget." }
    ]
  },
  '艸': {
    explanation: "The 'grass' radical (kusa). Forms 艹 (kusakanmuri) at the top of kanji.",
    examples: [
      { word: "花", reading: "hana", meaning: "flower" },
      { word: "草", reading: "kusa", meaning: "grass" },
      { word: "茶", reading: "cha", meaning: "tea" }
    ],
    sentences: [
      { jp: "花が咲きました。", en: "The flowers bloomed." },
      { jp: "お茶を飲みます。", en: "I drink tea." }
    ]
  },
  '虍': {
    explanation: "The 'tiger' radical (torakanmuri). Relates to wild beasts.",
    examples: [
      { word: "虎", reading: "tora", meaning: "tiger" },
      { word: "虚", reading: "kyo", meaning: "void" },
      { word: "虜", reading: "toriko", meaning: "captive" }
    ],
    sentences: [
      { jp: "動物園で虎を見ました。", en: "I saw a tiger at the zoo." },
      { jp: "彼は恋の虜になった。", en: "He became a captive of love." }
    ]
  },
  '虫': {
    explanation: "The 'insect' radical (mushi). Relates to bugs, reptiles, and creeping creatures.",
    examples: [
      { word: "虫", reading: "mushi", meaning: "insect" },
      { word: "蝶", reading: "chou", meaning: "butterfly" },
      { word: "蛙", reading: "kaeru", meaning: "frog" }
    ],
    sentences: [
      { jp: "虫が嫌いです。", en: "I dislike insects." },
      { jp: "庭に蝶が飛んでいます。", en: "Butterflies are flying in the garden." }
    ]
  },
  '血': {
    explanation: "The 'blood' radical (chi).",
    examples: [
      { word: "血", reading: "chi", meaning: "blood" },
      { word: "衆", reading: "shuu", meaning: "masses/public" }
    ],
    sentences: [
      { jp: "血が出ました。", en: "I am bleeding." },
      { jp: "群衆が集まりました。", en: "A crowd gathered." }
    ]
  },
  '行': {
    explanation: "The 'go' or 'crossroads' radical (gyou). Relates to moving, paths, and actions.",
    examples: [
      { word: "行く", reading: "i(ku)", meaning: "to go" },
      { word: "術", reading: "jutsu", meaning: "art/technique" },
      { word: "街", reading: "machi", meaning: "street" }
    ],
    sentences: [
      { jp: "東京に行きます。", en: "I will go to Tokyo." },
      { jp: "手術が成功しました。", en: "The surgery was successful." }
    ]
  },
  '衣': {
    explanation: "The 'clothes' radical (koromo). Forms 衤 (koromohen) on the left.",
    examples: [
      { word: "衣", reading: "koromo", meaning: "clothes" },
      { word: "着る", reading: "ki(ru)", meaning: "to wear" },
      { word: "装う", reading: "yosoou", meaning: "to dress/pretend" }
    ],
    sentences: [
      { jp: "新しい服を着ます。", en: "I wear new clothes." },
      { jp: "衣装を準備します。", en: "I will prepare the costume." }
    ]
  },
  '襾': {
    explanation: "The 'cover' or 'west' radical (nishi). Often simplified to 覀.",
    examples: [
      { word: "西", reading: "nishi", meaning: "west" },
      { word: "要る", reading: "i(ru)", meaning: "to need" },
      { word: "覆う", reading: "oo(u)", meaning: "to cover" }
    ],
    sentences: [
      { jp: "太陽は西に沈む。", en: "The sun sets in the west." },
      { jp: "助けが必要です。", en: "I need help." }
    ]
  }
};

export const radicalsStroke7to10: Record<string, RadicalDetail> = {
  // === 7 STROKES (20 Radicals) ===
  '見': {
    explanation: "The 'see' radical (miru). Combines 'eye' and 'person' to represent the act of seeing, observing, or appearing.",
    examples: [
      { word: "見る", reading: "mi(ru)", meaning: "to see/watch" },
      { word: "見せる", reading: "mi(seru)", meaning: "to show" },
      { word: "観る", reading: "mi(ru)", meaning: "to observe/watch (a show)" }
    ],
    sentences: [
      { jp: "パスポートを見せてください。", en: "Please show me your passport." },
      { jp: "映画を観に行きましょう。", en: "Let's go watch a movie." }
    ]
  },
  '角': {
    explanation: "The 'horn' or 'corner' radical (tsuno). Depicts an animal's horn.",
    examples: [
      { word: "角", reading: "tsuno/kado", meaning: "horn/corner" },
      { word: "角度", reading: "kakudo", meaning: "angle" },
      { word: "触れる", reading: "fu(reru)", meaning: "to touch" }
    ],
    sentences: [
      { jp: "次の角を右に曲がります。", en: "Turn right at the next corner." },
      { jp: "展示物に触れないでください。", en: "Please do not touch the exhibits." }
    ]
  },
  '言': {
    explanation: "The 'speech' or 'words' radical (gonben). Relates to talking, language, and communication.",
    examples: [
      { word: "言う", reading: "i(u)", meaning: "to say" },
      { word: "語", reading: "go", meaning: "language" },
      { word: "話す", reading: "hana(su)", meaning: "to speak" }
    ],
    sentences: [
      { jp: "彼は何も言わなかった。", en: "He didn't say anything." },
      { jp: "日本語を勉強しています。", en: "I am studying Japanese." }
    ]
  },
  '谷': {
    explanation: "The 'valley' radical (tani). Depicts water flowing out of a gorge.",
    examples: [
      { word: "谷", reading: "tani", meaning: "valley" },
      { word: "欲しい", reading: "ho(shii)", meaning: "to want" },
      { word: "内容", reading: "naiyou", meaning: "content" }
    ],
    sentences: [
      { jp: "深い谷底を見下ろす。", en: "Looking down at the bottom of a deep valley." },
      { jp: "新しい車が欲しいです。", en: "I want a new car." }
    ]
  },
  '豆': {
    explanation: "The 'bean' radical (mame). Originally depicted an elevated food vessel.",
    examples: [
      { word: "豆", reading: "mame", meaning: "bean" },
      { word: "豊か", reading: "yuta(ka)", meaning: "abundant/rich" },
      { word: "頭", reading: "atama", meaning: "head" }
    ],
    sentences: [
      { jp: "豆腐は豆から作られます。", en: "Tofu is made from beans." },
      { jp: "日本は自然が豊かです。", en: "Japan is rich in nature." }
    ]
  },
  '豕': {
    explanation: "The 'pig' radical (inoko). Depicts a pig or boar.",
    examples: [
      { word: "豚", reading: "buta", meaning: "pig/pork" },
      { word: "象", reading: "zou", meaning: "elephant" },
      { word: "豪", reading: "gou", meaning: "luxurious/great" }
    ],
    sentences: [
      { jp: "豚肉が好きです。", en: "I like pork." },
      { jp: "動物園で象を見ました。", en: "I saw an elephant at the zoo." }
    ]
  },
  '豸': {
    explanation: "The 'badger' or 'beast' radical (mujina). Relates to wild cats and beasts of prey.",
    examples: [
      { word: "豹", reading: "hyou", meaning: "panther/leopard" },
      { word: "貌", reading: "bou", meaning: "appearance/face" },
      { word: "懇", reading: "kon", meaning: "courteous/kind" }
    ],
    sentences: [
      { jp: "豹はとても速く走ります。", en: "Leopards run very fast." },
      { jp: "懇切丁寧な説明でした。", en: "It was a very courteous and thorough explanation." }
    ]
  },
  '貝': {
    explanation: "The 'shell' or 'money' radical (kai). Cowrie shells were used as ancient currency.",
    examples: [
      { word: "買う", reading: "ka(u)", meaning: "to buy" },
      { word: "財布", reading: "saifu", meaning: "wallet" },
      { word: "負ける", reading: "ma(keru)", meaning: "to lose" }
    ],
    sentences: [
      { jp: "新しい財布を買いました。", en: "I bought a new wallet." },
      { jp: "試合に負けました。", en: "We lost the game." }
    ]
  },
  '赤': {
    explanation: "The 'red' radical (aka). Associated with fire, the sun, and the color red.",
    examples: [
      { word: "赤", reading: "aka", meaning: "red" },
      { word: "赤ちゃん", reading: "akachan", meaning: "baby" },
      { word: "赦す", reading: "yuru(su)", meaning: "to forgive/pardon" }
    ],
    sentences: [
      { jp: "赤いドレスを着ています。", en: "She is wearing a red dress." },
      { jp: "赤ちゃんが生まれました。", en: "A baby was born." }
    ]
  },
  '走': {
    explanation: "The 'run' radical (hashiru). Relates to movement, haste, and going beyond.",
    examples: [
      { word: "走る", reading: "hashi(ru)", meaning: "to run" },
      { word: "起きる", reading: "o(kiru)", meaning: "to wake up" },
      { word: "超える", reading: "ko(eru)", meaning: "to exceed" }
    ],
    sentences: [
      { jp: "毎朝走っています。", en: "I run every morning." },
      { jp: "七時に起きます。", en: "I wake up at seven o'clock." }
    ]
  },
  '足': {
    explanation: "The 'foot' or 'leg' radical (ashi). Relates to lower limbs, walking, and sufficiency.",
    examples: [
      { word: "足", reading: "ashi", meaning: "foot/leg" },
      { word: "路", reading: "michi", meaning: "road/path" },
      { word: "踏む", reading: "fu(mu)", meaning: "to step on" }
    ],
    sentences: [
      { jp: "足が痛いので座ります。", en: "My foot hurts, so I will sit down." },
      { jp: "ブレーキを踏みます。", en: "I step on the brakes." }
    ]
  },
  '身': {
    explanation: "The 'body' radical (mi). Relates to the self, physical body, and status.",
    examples: [
      { word: "身", reading: "mi", meaning: "body/oneself" },
      { word: "射る", reading: "i(ru)", meaning: "to shoot" },
      { word: "謝る", reading: "ayama(ru)", meaning: "to apologize" }
    ],
    sentences: [
      { jp: "身分証明書を見せてください。", en: "Please show me your ID." },
      { jp: "遅刻して謝りました。", en: "I apologized for being late." }
    ]
  },
  '車': {
    explanation: "The 'vehicle' or 'wheel' radical (kuruma). Depicts a cart viewed from above.",
    examples: [
      { word: "車", reading: "kuruma", meaning: "car/vehicle" },
      { word: "電車", reading: "densha", meaning: "train" },
      { word: "転ぶ", reading: "koro(bu)", meaning: "to fall down" }
    ],
    sentences: [
      { jp: "電車で通勤しています。", en: "I commute by train." },
      { jp: "道で転びました。", en: "I fell down on the street." }
    ]
  },
  '辛': {
    explanation: "The 'spicy' or 'bitter' radical (karai). Originally depicted a tattooing needle.",
    examples: [
      { word: "辛い", reading: "kara(i)", meaning: "spicy/painful" },
      { word: "辞書", reading: "jisho", meaning: "dictionary" },
      { word: "幸せ", reading: "shiawa(se)", meaning: "happiness" }
    ],
    sentences: [
      { jp: "このカレーはとても辛いです。", en: "This curry is very spicy." },
      { jp: "辞書で意味を調べます。", en: "I look up the meaning in the dictionary." }
    ]
  },
  '辰': {
    explanation: "The 'dragon' or 'morning' radical (shin). Represents the dragon of the zodiac or a clam shell.",
    examples: [
      { word: "唇", reading: "kuchibiru", meaning: "lips" },
      { word: "震える", reading: "furu(eru)", meaning: "to shiver/shake" },
      { word: "農", reading: "nou", meaning: "farming/agriculture" }
    ],
    sentences: [
      { jp: "寒さで震えています。", en: "I am shivering from the cold." },
      { jp: "農業は重要な産業です。", en: "Agriculture is an important industry." }
    ]
  },
  '辶': {
    explanation: "The 'walk' or 'road' radical (shinnyou). Signifies movement or progressing along a path.",
    examples: [
      { word: "道", reading: "michi", meaning: "road" },
      { word: "遠い", reading: "too(i)", meaning: "far" },
      { word: "近い", reading: "chika(i)", meaning: "near" }
    ],
    sentences: [
      { jp: "道を教えてください。", en: "Please tell me the way." },
      { jp: "駅は近いです。", en: "The station is near." }
    ]
  },
  '邑': {
    explanation: "The 'village' radical. When placed on the right side, it forms 阝 (oozato). Relates to towns and jurisdictions.",
    examples: [
      { word: "都", reading: "miyako/to", meaning: "capital/metropolis" },
      { word: "部", reading: "bu", meaning: "department/part" },
      { word: "郵便", reading: "yuubin", meaning: "mail/postal service" }
    ],
    sentences: [
      { jp: "東京都に住んでいます。", en: "I live in Tokyo metropolis." },
      { jp: "部屋を掃除しました。", en: "I cleaned the room." }
    ]
  },
  '酉': {
    explanation: "The 'alcohol' or 'bird' radical (sake-no-tori). Depicts a wine vessel, heavily relating to sake, brewing, and intoxication.",
    examples: [
      { word: "酒", reading: "sake", meaning: "alcohol" },
      { word: "酔う", reading: "yo(u)", meaning: "to get drunk" },
      { word: "醤油", reading: "shouyu", meaning: "soy sauce" }
    ],
    sentences: [
      { jp: "お酒を飲み過ぎました。", en: "I drank too much alcohol." },
      { jp: "醤油を取ってください。", en: "Please pass the soy sauce." }
    ]
  },
  '釆': {
    explanation: "The 'divide' or 'distinguish' radical (nogome). Represents animal tracks.",
    examples: [
      { word: "番", reading: "ban", meaning: "number/turn" },
      { word: "釈", reading: "shaku", meaning: "explanation" },
      { word: "悉く", reading: "kotogoto(ku)", meaning: "all/entirely" }
    ],
    sentences: [
      { jp: "電話番号を教えてください。", en: "Please tell me your phone number." },
      { jp: "釈明の余地はない。", en: "There is no room for explanation." }
    ]
  },
  '里': {
    explanation: "The 'village' or 'mile' radical (sato). Combines 'field' (田) and 'earth' (土).",
    examples: [
      { word: "里", reading: "sato", meaning: "village/hometown" },
      { word: "野原", reading: "nohara", meaning: "field/plain" },
      { word: "理由", reading: "riyuu", meaning: "reason" }
    ],
    sentences: [
      { jp: "休日に野原で遊びました。", en: "I played in the field on my day off." },
      { jp: "遅刻した理由を教えてください。", en: "Please tell me the reason you were late." }
    ]
  },

  // === 8 STROKES (9 Radicals) ===
  '金': {
    explanation: "The 'gold' or 'metal' radical (kanehen). Relates to metals, coins, and wealth.",
    examples: [
      { word: "金", reading: "kin/kane", meaning: "gold/money" },
      { word: "銀", reading: "gin", meaning: "silver" },
      { word: "鉄", reading: "tetsu", meaning: "iron" }
    ],
    sentences: [
      { jp: "金メダルを取りたいです。", en: "I want to win the gold medal." },
      { jp: "お金がありません。", en: "I don't have money." }
    ]
  },
  '長': {
    explanation: "The 'long' or 'leader' radical (nagai). Represents flowing hair of an elder.",
    examples: [
      { word: "長い", reading: "naga(i)", meaning: "long" },
      { word: "社長", reading: "shachou", meaning: "company president" },
      { word: "髪", reading: "kami", meaning: "hair" }
    ],
    sentences: [
      { jp: "長い時間待ちました。", en: "I waited for a long time." },
      { jp: "社長と話しました。", en: "I spoke with the company president." }
    ]
  },
  '門': {
    explanation: "The 'gate' radical (mongamae). Depicts two gate posts and a crossbar.",
    examples: [
      { word: "門", reading: "mon", meaning: "gate" },
      { word: "問う", reading: "to(u)", meaning: "to ask" },
      { word: "聞く", reading: "ki(ku)", meaning: "to listen/ask" }
    ],
    sentences: [
      { jp: "校門の前で待っています。", en: "I am waiting in front of the school gate." },
      { jp: "先生に質問しました。", en: "I asked the teacher a question." }
    ]
  },
  '阜': {
    explanation: "The 'mound' or 'hill' radical. When placed on the left side, it forms 阝 (kozatohen).",
    examples: [
      { word: "院", reading: "in", meaning: "institution/temple" },
      { word: "阪", reading: "saka", meaning: "slope" },
      { word: "防ぐ", reading: "fuse(gu)", meaning: "to defend/prevent" }
    ],
    sentences: [
      { jp: "病院に行きます。", en: "I am going to the hospital." },
      { jp: "事故を防ぐために注意します。", en: "I am careful in order to prevent accidents." }
    ]
  },
  '隶': {
    explanation: "The 'slave' or 'catch' radical (reidukuri). Depicts a hand grabbing a tail.",
    examples: [
      { word: "隷", reading: "rei", meaning: "subordinate/slave" },
      { word: "隷属", reading: "reizoku", meaning: "subordination" }
    ],
    sentences: [
      { jp: "奴隷制度は廃止されました。", en: "The institution of slavery was abolished." },
      { jp: "他国に隷属する。", en: "To be subordinate to another country." }
    ]
  },
  '隹': {
    explanation: "The 'short-tailed bird' radical (furutori). Used in kanji for birds and gathering.",
    examples: [
      { word: "雀", reading: "suzume", meaning: "sparrow" },
      { word: "集まる", reading: "atsu(maru)", meaning: "to gather" },
      { word: "雅", reading: "miyabi", meaning: "elegant/refined" }
    ],
    sentences: [
      { jp: "公園に人が集まっています。", en: "People are gathering in the park." },
      { jp: "雀が鳴いています。", en: "The sparrows are chirping." }
    ]
  },
  '雨': {
    explanation: "The 'rain' radical (amekanmuri). Depicts raindrops falling from a cloud.",
    examples: [
      { word: "雨", reading: "ame", meaning: "rain" },
      { word: "雪", reading: "yuki", meaning: "snow" },
      { word: "電", reading: "den", meaning: "electricity/lightning" }
    ],
    sentences: [
      { jp: "今日は雨が降っています。", en: "It is raining today." },
      { jp: "雪が積もっています。", en: "Snow has piled up." }
    ]
  },
  '青': {
    explanation: "The 'blue' or 'green' radical (ao).",
    examples: [
      { word: "青", reading: "ao", meaning: "blue/green" },
      { word: "静か", reading: "shizu(ka)", meaning: "quiet" },
      { word: "晴れ", reading: "ha(re)", meaning: "clear weather" }
    ],
    sentences: [
      { jp: "青空の下でピクニックをしました。", en: "We had a picnic under the blue sky." },
      { jp: "図書館は静かにしてください。", en: "Please be quiet in the library." }
    ]
  },
  '非': {
    explanation: "The 'wrong' or 'not' radical (arazu). Depicts wings spread in opposite directions.",
    examples: [
      { word: "非", reading: "hi", meaning: "fault/error" },
      { word: "悲しい", reading: "kana(shii)", meaning: "sad" },
      { word: "非常", reading: "hijou", meaning: "emergency/extreme" }
    ],
    sentences: [
      { jp: "今日は非常に寒いです。", en: "It is extremely cold today." },
      { jp: "悲しい映画を見ました。", en: "I watched a sad movie." }
    ]
  },

  // === 9 STROKES (11 Radicals) ===
  '面': {
    explanation: "The 'face' or 'surface' radical (men).",
    examples: [
      { word: "面", reading: "men", meaning: "face/mask" },
      { word: "面白い", reading: "omo(shiroi)", meaning: "interesting" },
      { word: "表面", reading: "hyoumen", meaning: "surface" }
    ],
    sentences: [
      { jp: "この本は面白いです。", en: "This book is interesting." },
      { jp: "水面が輝いている。", en: "The water surface is shining." }
    ]
  },
  '革': {
    explanation: "The 'leather' radical (kawahen). Depicts an animal hide stretched out.",
    examples: [
      { word: "革", reading: "kawa", meaning: "leather" },
      { word: "靴", reading: "kutsu", meaning: "shoes" },
      { word: "革命", reading: "kakumei", meaning: "revolution" }
    ],
    sentences: [
      { jp: "革の鞄を買いました。", en: "I bought a leather bag." },
      { jp: "靴を脱いでください。", en: "Please take off your shoes." }
    ]
  },
  '韋': {
    explanation: "The 'tanned leather' radical (nameshigawa). Relates to leather and going in opposite directions.",
    examples: [
      { word: "違う", reading: "chiga(u)", meaning: "to differ/be wrong" },
      { word: "韓国", reading: "kankoku", meaning: "South Korea" },
      { word: "衛生", reading: "eisei", meaning: "hygiene/sanitation" }
    ],
    sentences: [
      { jp: "答えが違います。", en: "The answer is wrong." },
      { jp: "韓国に旅行に行きます。", en: "I am traveling to South Korea." }
    ]
  },
  '韭': {
    explanation: "The 'leek' or 'chives' radical (nira).",
    examples: [
      { word: "韮", reading: "nira", meaning: "leek/chives" },
      { word: "韮山", reading: "nirayama", meaning: "Nirayama (place name)" }
    ],
    sentences: [
      { jp: "餃子に韮を入れます。", en: "I put chives in the gyoza." },
      { jp: "韮は栄養が豊富です。", en: "Leeks are rich in nutrients." }
    ]
  },
  '音': {
    explanation: "The 'sound' radical (oto). Depicts a word coming out of a mouth.",
    examples: [
      { word: "音", reading: "oto", meaning: "sound" },
      { word: "音楽", reading: "ongaku", meaning: "music" },
      { word: "暗い", reading: "kura(i)", meaning: "dark" }
    ],
    sentences: [
      { jp: "変な音が聞こえます。", en: "I hear a strange sound." },
      { jp: "音楽を聞くのが好きです。", en: "I like listening to music." }
    ]
  },
  '頁': {
    explanation: "The 'leaf' or 'head' radical (oogai). Appears on the right side of kanji related to the head or pages.",
    examples: [
      { word: "頭", reading: "atama", meaning: "head" },
      { word: "顔", reading: "kao", meaning: "face" },
      { word: "頼む", reading: "tano(mu)", meaning: "to request" }
    ],
    sentences: [
      { jp: "頭が痛いです。", en: "My head hurts." },
      { jp: "彼に仕事を頼みました。", en: "I asked him for the job." }
    ]
  },
  '風': {
    explanation: "The 'wind' radical (kaze). Shows an insect inside the sail/wind component.",
    examples: [
      { word: "風", reading: "kaze", meaning: "wind" },
      { word: "お風呂", reading: "ofuro", meaning: "bath" },
      { word: "台風", reading: "taifuu", meaning: "typhoon" }
    ],
    sentences: [
      { jp: "風が冷たいです。", en: "The wind is cold." },
      { jp: "お風呂に入ります。", en: "I will take a bath." }
    ]
  },
  '飛': {
    explanation: "The 'fly' radical (tobu). Depicts a bird taking flight.",
    examples: [
      { word: "飛ぶ", reading: "to(bu)", meaning: "to fly" },
      { word: "飛行機", reading: "hikouki", meaning: "airplane" },
      { word: "飛躍", reading: "hiyaku", meaning: "leap/rapid progress" }
    ],
    sentences: [
      { jp: "鳥が空を飛んでいます。", en: "A bird is flying in the sky." },
      { jp: "飛行機で旅行します。", en: "I will travel by airplane." }
    ]
  },
  '食': {
    explanation: "The 'eat' or 'food' radical (shokuhen). Appears heavily in kanji related to eating, feeding, and meals.",
    examples: [
      { word: "食べる", reading: "ta(beru)", meaning: "to eat" },
      { word: "飲む", reading: "no(mu)", meaning: "to drink" },
      { word: "飯", reading: "meshi", meaning: "meal/cooked rice" }
    ],
    sentences: [
      { jp: "食事の前に手を洗います。", en: "I wash my hands before meals." },
      { jp: "朝ごはんを食べましたか。", en: "Did you eat breakfast?" }
    ]
  },
  '首': {
    explanation: "The 'neck' or 'head' radical (kubi). Often represents a leader or chief.",
    examples: [
      { word: "首", reading: "kubi", meaning: "neck" },
      { word: "首都", reading: "shuto", meaning: "capital city" },
      { word: "道", reading: "michi", meaning: "road" }
    ],
    sentences: [
      { jp: "首が痛いです。", en: "My neck hurts." },
      { jp: "日本の首都は東京です。", en: "The capital of Japan is Tokyo." }
    ]
  },
  '香': {
    explanation: "The 'fragrance' radical (kaori). Combines grain/millet and sweet.",
    examples: [
      { word: "香り", reading: "kao(ri)", meaning: "fragrance/scent" },
      { word: "香港", reading: "honkon", meaning: "Hong Kong" },
      { word: "芳香", reading: "houkou", meaning: "perfume/fragrance" }
    ],
    sentences: [
      { jp: "コーヒーの良い香りがします。", en: "There is a good scent of coffee." },
      { jp: "香港へ出張します。", en: "I am going on a business trip to Hong Kong." }
    ]
  },

  // === 10 STROKES (8 Radicals) ===
  '馬': {
    explanation: "The 'horse' radical (umahen). Relates to horses, riding, and speed.",
    examples: [
      { word: "馬", reading: "uma", meaning: "horse" },
      { word: "駅", reading: "eki", meaning: "station" },
      { word: "験", reading: "ken", meaning: "test/effect" }
    ],
    sentences: [
      { jp: "乗馬を体験しました。", en: "I experienced horse riding." },
      { jp: "駅まで歩いて五分です。", en: "It is a five-minute walk to the station." }
    ]
  },
  '骨': {
    explanation: "The 'bone' radical (honehen).",
    examples: [
      { word: "骨", reading: "hone", meaning: "bone" },
      { word: "体格", reading: "taikaku", meaning: "physique" },
      { word: "滑る", reading: "sube(ru)", meaning: "to slide/slip" }
    ],
    sentences: [
      { jp: "魚の骨に気をつけてください。", en: "Please be careful of the fish bones." },
      { jp: "氷の上で滑りました。", en: "I slipped on the ice." }
    ]
  },
  '高': {
    explanation: "The 'tall' or 'high' radical (takai). Depicts a tall building.",
    examples: [
      { word: "高い", reading: "taka(i)", meaning: "high/expensive" },
      { word: "高校", reading: "koukou", meaning: "high school" },
      { word: "最高", reading: "saikou", meaning: "the best/highest" }
    ],
    sentences: [
      { jp: "あのビルはとても高いです。", en: "That building is very tall." },
      { jp: "今日は最高の気分です。", en: "I feel the best today." }
    ]
  },
  '髟': {
    explanation: "The 'hair' radical (kamikanmuri). Appears at the top of kanji related to hair and beards.",
    examples: [
      { word: "髪", reading: "kami", meaning: "hair" },
      { word: "髭", reading: "hige", meaning: "beard" },
      { word: "髪型", reading: "kamigata", meaning: "hairstyle" }
    ],
    sentences: [
      { jp: "髪をとかします。", en: "I comb my hair." },
      { jp: "彼は髭を剃りました。", en: "He shaved his beard." }
    ]
  },
  '鬥': {
    explanation: "The 'fight' radical (tougamae). Encloses kanji related to combat and struggle.",
    examples: [
      { word: "闘う", reading: "tataka(u)", meaning: "to fight" },
      { word: "争う", reading: "araso(u)", meaning: "to dispute" },
      { word: "奮闘", reading: "funtou", meaning: "struggle/hard effort" }
    ],
    sentences: [
      { jp: "病気と闘う。", en: "To fight a disease." },
      { jp: "兄弟で争う。", en: "Brothers argue with each other." }
    ]
  },
  '鬯': {
    explanation: "The 'sacrificial wine' radical (chou). A very obscure radical that represents a container of aromatic wine.",
    examples: [
      { word: "鬱", reading: "utsu", meaning: "depression/gloom" },
      { word: "鬱蒼", reading: "ussou", meaning: "thick/dense (forest)" }
    ],
    sentences: [
      { jp: "気分が鬱いでいる。", en: "I am feeling depressed." },
      { jp: "鬱蒼とした森の中へ入る。", en: "Entering into the dense, thick forest." }
    ]
  },
  '鬲': {
    explanation: "The 'cauldron' or 'tripod' radical (kanae). Depicts an ancient cooking vessel.",
    examples: [
      { word: "融", reading: "yuu", meaning: "melt/finance" },
      { word: "隔てる", reading: "heda(teru)", meaning: "to separate/isolate" }
    ],
    sentences: [
      { jp: "氷が融ける。", en: "The ice melts." },
      { jp: "二人の間を隔てる壁。", en: "The wall that separates the two." }
    ]
  },
  '鬼': {
    explanation: "The 'ghost' or 'demon' radical (oni). Represent spirits, magic, and demons.",
    examples: [
      { word: "鬼", reading: "oni", meaning: "demon/ogre" },
      { word: "魂", reading: "tamashii", meaning: "soul/spirit" },
      { word: "魔", reading: "ma", meaning: "magic/demon" }
    ],
    sentences: [
      { jp: "節分に鬼のお面をかぶる。", en: "Wear a demon mask on Setsubun." },
      { jp: "悪魔のような笑顔。", en: "A devilish smile." }
    ]
  }
};

export const radicalsStroke11to17: Record<string, RadicalDetail> = {
  // === 11 STROKES (6 Radicals) ===
  '魚': {
    explanation: "The 'fish' radical (uohen). Depicts a fish with its head facing up and tail at the bottom. Very common in kanji for seafood.",
    examples: [
      { word: "魚", reading: "sakana/uo", meaning: "fish" },
      { word: "鮮", reading: "sen", meaning: "fresh" },
      { word: "鯨", reading: "kujira", meaning: "whale" }
    ],
    sentences: [
      { jp: "川で魚を釣りました。", en: "I caught fish in the river." },
      { jp: "新鮮な野菜を買います。", en: "I buy fresh vegetables." }
    ]
  },
  '鳥': {
    explanation: "The 'bird' radical (tori). Depicts a long-tailed bird.",
    examples: [
      { word: "鳥", reading: "tori", meaning: "bird" },
      { word: "鳴く", reading: "na(ku)", meaning: "to chirp/cry" },
      { word: "鶏", reading: "niwatori", meaning: "chicken" }
    ],
    sentences: [
      { jp: "鳥がさえずっています。", en: "The birds are chirping." },
      { jp: "鶏肉が好きです。", en: "I like chicken meat." }
    ]
  },
  '鹵': {
    explanation: "The 'salt' radical (shio). Depicts bags of rock salt. A rare radical mostly used in specialized kanji.",
    examples: [
      { word: "鹵", reading: "ro", meaning: "natural salt/shield" },
      { word: "鹹", reading: "kan", meaning: "salty" }
    ],
    sentences: [
      { jp: "このスープは少し鹹いです。", en: "This soup is a little salty." },
      { jp: "岩塩を削ります。", en: "I grind the rock salt." }
    ]
  },
  '鹿': {
    explanation: "The 'deer' radical (shika). Depicts a deer with antlers.",
    examples: [
      { word: "鹿", reading: "shika", meaning: "deer" },
      { word: "麗しい", reading: "uruwa(shii)", meaning: "beautiful/lovely" },
      { word: "塵", reading: "chiri", meaning: "dust" }
    ],
    sentences: [
      { jp: "奈良で鹿を見ました。", en: "I saw deer in Nara." },
      { jp: "彼女は麗しい姿をしている。", en: "She has a beautiful figure." }
    ]
  },
  '麦': {
    explanation: "The 'wheat' radical (mugi). Depicts a wheat plant with roots.",
    examples: [
      { word: "麦", reading: "mugi", meaning: "wheat/barley" },
      { word: "麺", reading: "men", meaning: "noodles" },
      { word: "麹", reading: "kouji", meaning: "malt/yeast" }
    ],
    sentences: [
      { jp: "夏は麦茶を飲みます。", en: "I drink barley tea in the summer." },
      { jp: "ラーメンは麺類です。", en: "Ramen is a type of noodle." }
    ]
  },
  '麻': {
    explanation: "The 'hemp' or 'flax' radical (asa). Depicts hemp plants drying under a roof.",
    examples: [
      { word: "麻", reading: "asa", meaning: "hemp" },
      { word: "摩擦", reading: "masatsu", meaning: "friction" },
      { word: "魔法", reading: "mahou", meaning: "magic" }
    ],
    sentences: [
      { jp: "麻のシャツは涼しいです。", en: "Hemp shirts are cool." },
      { jp: "ハリーポッターは魔法使いです。", en: "Harry Potter is a wizard." }
    ]
  },

  // === 12 STROKES (4 Radicals) ===
  '黄': {
    explanation: "The 'yellow' radical (kiiro). Represents the color yellow or earth.",
    examples: [
      { word: "黄", reading: "kiiro", meaning: "yellow" },
      { word: "横", reading: "yoko", meaning: "side/horizontal" },
      { word: "黄金", reading: "ougon", meaning: "gold" }
    ],
    sentences: [
      { jp: "黄色い花が咲きました。", en: "Yellow flowers bloomed." },
      { jp: "横に並んでください。", en: "Please line up horizontally." }
    ]
  },
  '黍': {
    explanation: "The 'millet' radical (kibi). Represents a stalk of millet.",
    examples: [
      { word: "黍", reading: "kibi", meaning: "millet" },
      { word: "粘る", reading: "neba(ru)", meaning: "to be sticky/persevere" }
    ],
    sentences: [
      { jp: "桃太郎はきびだんごを持っています。", en: "Momotaro has millet dumplings." },
      { jp: "最後まで粘り強く頑張る。", en: "I will persevere until the end." }
    ]
  },
  '黒': {
    explanation: "The 'black' radical (kuro). Depicts a chimney with soot, signifying blackness.",
    examples: [
      { word: "黒", reading: "kuro", meaning: "black" },
      { word: "黙る", reading: "dama(ru)", meaning: "to be silent" },
      { word: "点", reading: "ten", meaning: "point/dot" }
    ],
    sentences: [
      { jp: "黒い猫を見ました。", en: "I saw a black cat." },
      { jp: "彼は黙って聞いていた。", en: "He listened in silence." }
    ]
  },
  '黹': {
    explanation: "The 'embroidery' radical (nuime). Represents stitching or needlework. Highly obscure.",
    examples: [
      { word: "黹", reading: "chi", meaning: "embroidery/needlework" },
      { word: "黻", reading: "futsu", meaning: "embroidered ceremonial robe" }
    ],
    sentences: [
      { jp: "美しい刺繍が施されている。", en: "Beautiful embroidery is applied." },
      { jp: "古代の儀式用の服。", en: "Ancient ceremonial clothing." }
    ]
  },

  // === 13 STROKES (4 Radicals) ===
  '黽': {
    explanation: "The 'frog' or 'amphibian' radical (aogaeru). Depicts a frog viewed from above.",
    examples: [
      { word: "蝿", reading: "hae", meaning: "fly (insect)" },
      { word: "鼈", reading: "suppon", meaning: "soft-shelled turtle" }
    ],
    sentences: [
      { jp: "蝿が飛んでいます。", en: "A fly is flying around." },
      { jp: "鼈のスープは栄養があります。", en: "Soft-shelled turtle soup is nutritious." }
    ]
  },
  '鼎': {
    explanation: "The 'tripod cauldron' radical (kanae). Depicts an ancient bronze ritual cooking vessel with three legs.",
    examples: [
      { word: "鼎", reading: "kanae", meaning: "three-legged cauldron" },
      { word: "鼎立", reading: "teiritsu", meaning: "three-way standoff" }
    ],
    sentences: [
      { jp: "三国が鼎立する時代。", en: "An era where three countries stand in a three-way stalemate." },
      { jp: "鼎の軽重を問う。", en: "To question one's authority or capability." }
    ]
  },
  '鼓': {
    explanation: "The 'drum' radical (tsuzumi). Depicts a drum on a stand.",
    examples: [
      { word: "太鼓", reading: "taiko", meaning: "drum" },
      { word: "鼓動", reading: "kodou", meaning: "beat/palpitation" },
      { word: "励む", reading: "hage(mu)", meaning: "to strive" }
    ],
    sentences: [
      { jp: "祭りで太鼓を叩く。", en: "Beat the drum at the festival." },
      { jp: "心臓の鼓動が速い。", en: "My heart is beating fast." }
    ]
  },
  '鼠': {
    explanation: "The 'rat' or 'mouse' radical (nezumi). Depicts a rodent's head, teeth, and tail.",
    examples: [
      { word: "鼠", reading: "nezumi", meaning: "mouse/rat" },
      { word: "鼬", reading: "itachi", meaning: "weasel" }
    ],
    sentences: [
      { jp: "鼠が走っています。", en: "A mouse is running." },
      { jp: "いたちごっこですね。", en: "It's a game of cat and mouse." }
    ]
  },

  // === 14 STROKES (2 Radicals) ===
  '鼻': {
    explanation: "The 'nose' radical (hana). Combines 'self' (自) and 'give' (畀).",
    examples: [
      { word: "鼻", reading: "hana", meaning: "nose" },
      { word: "鼾", reading: "ibiki", meaning: "snoring" }
    ],
    sentences: [
      { jp: "鼻水が出ます。", en: "I have a runny nose." },
      { jp: "彼は大きないびきをかく。", en: "He snores loudly." }
    ]
  },
  '斉': {
    explanation: "The 'even' or 'uniform' radical (sei). (Traditional form is 齊). Represents ears of grain growing to an even height.",
    examples: [
      { word: "一斉に", reading: "isseini", meaning: "simultaneously" },
      { word: "斎", reading: "sai", meaning: "purification/room" },
      { word: "剤", reading: "zai", meaning: "medicine/agent" }
    ],
    sentences: [
      { jp: "全員が一斉に立ち上がった。", en: "Everyone stood up simultaneously." },
      { jp: "洗剤を買ってきます。", en: "I will go buy detergent." }
    ]
  },

  // === 15 STROKES (1 Radical) ===
  '歯': {
    explanation: "The 'tooth' radical (ha). (Traditional form is 齒). Depicts an open mouth with teeth.",
    examples: [
      { word: "歯", reading: "ha", meaning: "tooth" },
      { word: "年齢", reading: "nenrei", meaning: "age" },
      { word: "歯科", reading: "shika", meaning: "dentistry" }
    ],
    sentences: [
      { jp: "毎日歯を磨きます。", en: "I brush my teeth every day." },
      { jp: "年齢を教えてください。", en: "Please tell me your age." }
    ]
  },

  // === 16 STROKES (2 Radicals) ===
  '竜': {
    explanation: "The 'dragon' radical (ryuu). (Traditional form is 龍). Mythical creature, representing power or the emperor.",
    examples: [
      { word: "竜", reading: "ryuu/tatsu", meaning: "dragon" },
      { word: "恐竜", reading: "kyouryuu", meaning: "dinosaur" },
      { word: "襲う", reading: "oso(u)", meaning: "to attack (uses traditional form)" }
    ],
    sentences: [
      { jp: "博物館で恐竜の骨を見ました。", en: "I saw dinosaur bones at the museum." },
      { jp: "嵐が町を襲いました。", en: "A storm attacked the town." }
    ]
  },
  '亀': {
    explanation: "The 'turtle' radical (kame). (Traditional form is 龜). Depicts a turtle from above.",
    examples: [
      { word: "亀", reading: "kame", meaning: "turtle" },
      { word: "鼈", reading: "suppon", meaning: "soft-shelled turtle" }
    ],
    sentences: [
      { jp: "亀はゆっくり歩きます。", en: "Turtles walk slowly." },
      { jp: "鶴は千年、亀は万年。", en: "Cranes live for a thousand years, turtles for ten thousand." }
    ]
  },

  // === 17 STROKES (1 Radical) ===
  '龠': {
    explanation: "The 'flute' radical (yaku). This is the absolute final 214th radical in the Kangxi dictionary. It represents an ancient multi-pipe bamboo flute (panpipes).",
    examples: [
      { word: "龠", reading: "yaku", meaning: "flute/unit of volume" },
      { word: "龢", reading: "wa", meaning: "harmony (archaic variant of 和)" }
    ],
    sentences: [
      { jp: "古代の楽器である龠を吹く。", en: "Playing the Yaku, an ancient musical instrument." },
      { jp: "音楽で和を保つ。", en: "Maintaining harmony through music." }
    ]
  }
};

// --- THE MASTER EXPORT ---
// This combines all your chunks into one massive dictionary that your UI will read.
export const radicalDetails: Record<string, RadicalDetail> = {
  ...radicalsStroke1to3,
  ...radicalsStroke4to6,
  ...radicalsStroke7to10,
  ...radicalsStroke11to17,
};



