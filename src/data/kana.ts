export interface KanaDetail {
  id: string;
  kana: string;
  romaji: string;
  type: 'hiragana' | 'katakana';
  mnemonic: string;
  strokeOrderGif: string;
  strokes: string[];
  vocabulary: {
    kana: string;
    romaji: string;
    meaning: string;
  }[];
}

export const kanaData: Record<string, KanaDetail> = {
  // ==========================================
  // HIRAGANA
  // ==========================================
  "hiragana-a": {
    id: "hiragana-a", kana: "あ", romaji: "a", type: "hiragana",
    mnemonic: "Think of an Apple with a stem on top.",
    strokeOrderGif: "/stroke-animations/Hiragana_あ_stroke_order_animation.gif",
    strokes: ["Horizontal line from left to right.", "Vertical line intersecting the first line, curving slightly left.", "Loop starting from the intersection, going down, right, up, and curving back down through the middle."],
    vocabulary: [{ kana: "あさ", romaji: "asa", meaning: "morning" }, { kana: "あめ", romaji: "ame", meaning: "rain" }]
  },
  "hiragana-i": {
    id: "hiragana-i", kana: "い", romaji: "i", type: "hiragana",
    mnemonic: "Think of two Eels swimming side by side.",
    strokeOrderGif: "/stroke-animations/Hiragana_い_stroke_order_animation.gif",
    strokes: ["Vertical line curving right, ending with a hook.", "Shorter vertical line curving left."],
    vocabulary: [{ kana: "いぬ", romaji: "inu", meaning: "dog" }, { kana: "いち", romaji: "ichi", meaning: "one" }]
  },
  "hiragana-u": {
    id: "hiragana-u", kana: "う", romaji: "u", type: "hiragana",
    mnemonic: "Think of a U-turn.",
    strokeOrderGif: "/stroke-animations/Hiragana_う_stroke_order_animation.gif",
    strokes: ["Short diagonal line from top-left to bottom-right.", "Curved line starting below the first stroke, curving down and left."],
    vocabulary: [{ kana: "うみ", romaji: "umi", meaning: "sea" }, { kana: "うた", romaji: "uta", meaning: "song" }]
  },
  "hiragana-e": {
    id: "hiragana-e", kana: "え", romaji: "e", type: "hiragana",
    mnemonic: "Think of an Energetic ninja running.",
    strokeOrderGif: "/stroke-animations/Hiragana_え_stroke_order_animation.gif",
    strokes: ["Short diagonal line from top-left to bottom-right.", "Line that goes right, down-left, and then curves right and down like a snake."],
    vocabulary: [{ kana: "えき", romaji: "eki", meaning: "station" }, { kana: "えん", romaji: "en", meaning: "yen" }]
  },
  "hiragana-o": {
    id: "hiragana-o", kana: "お", romaji: "o", type: "hiragana",
    mnemonic: "Think of a golf hole with a flag.",
    strokeOrderGif: "/stroke-animations/Hiragana_お_stroke_order_animation.gif",
    strokes: ["Horizontal line from left to right.", "Vertical line that loops back up and around to the right.", "Small dash on the top right."],
    vocabulary: [{ kana: "おとこ", romaji: "otoko", meaning: "man" }, { kana: "おかね", romaji: "okane", meaning: "money" }]
  },
  "hiragana-ka": {
    id: "hiragana-ka", kana: "か", romaji: "ka", type: "hiragana",
    mnemonic: "Think of cutting a cane.",
    strokeOrderGif: "/stroke-animations/Hiragana_か_stroke_order_animation.gif",
    strokes: ["Horizontal line that curves down and hooks to the left.", "Vertical line cutting through the first stroke.", "Small dash on the top right."],
    vocabulary: [{ kana: "かさ", romaji: "kasa", meaning: "umbrella" }, { kana: "かお", romaji: "kao", meaning: "face" }]
  },
  "hiragana-ki": {
    id: "hiragana-ki", kana: "き", romaji: "ki", type: "hiragana",
    mnemonic: "Think of a Key.",
    strokeOrderGif: "/stroke-animations/Hiragana_き_stroke_order_animation.gif",
    strokes: ["Two parallel horizontal lines, slightly angled up.", "Diagonal line cutting through both horizontal lines.", "Curved line at the bottom."],
    vocabulary: [{ kana: "き", romaji: "ki", meaning: "tree" }, { kana: "きた", romaji: "kita", meaning: "north" }]
  },
  "hiragana-ku": {
    id: "hiragana-ku", kana: "く", romaji: "ku", type: "hiragana",
    mnemonic: "Think of a Cuckoo bird's beak.",
    strokeOrderGif: "/stroke-animations/Hiragana_く_stroke_order_animation.gif",
    strokes: ["Single line that goes diagonally down-right, then sharply turns diagonally down-left."],
    vocabulary: [{ kana: "くち", romaji: "kuchi", meaning: "mouth" }, { kana: "くるま", romaji: "kuruma", meaning: "car" }]
  },
  "hiragana-ke": {
    id: "hiragana-ke", kana: "け", romaji: "ke", type: "hiragana",
    mnemonic: "Think of a Keg of beer.",
    strokeOrderGif: "/stroke-animations/Hiragana_け_stroke_order_animation.gif",
    strokes: ["Vertical line curving slightly left, with a hook at the bottom.", "Short horizontal line.", "Vertical line intersecting the horizontal line, curving slightly left."],
    vocabulary: [{ kana: "けさ", romaji: "kesa", meaning: "this morning" }, { kana: "けいさつ", romaji: "keisatsu", meaning: "police" }]
  },
  "hiragana-ko": {
    id: "hiragana-ko", kana: "こ", romaji: "ko", type: "hiragana",
    mnemonic: "Think of a Coin.",
    strokeOrderGif: "/stroke-animations/Hiragana_こ_stroke_order_animation.gif",
    strokes: ["Short horizontal line curving slightly down and right, with a hook.", "Longer horizontal line curving slightly up and right."],
    vocabulary: [{ kana: "こども", romaji: "kodomo", meaning: "child" }, { kana: "こえ", romaji: "koe", meaning: "voice" }]
  },
  "hiragana-sa": {
    id: "hiragana-sa", kana: "さ", romaji: "sa", type: "hiragana",
    mnemonic: "Think of a Smiling face.",
    strokeOrderGif: "/stroke-animations/Hiragana_さ_stroke_order_animation.gif",
    strokes: ["Horizontal line slightly angled up.", "Diagonal line cutting through the horizontal line, ending with a hook.", "Curved line at the bottom."],
    vocabulary: [{ kana: "さかな", romaji: "sakana", meaning: "fish" }, { kana: "さくら", romaji: "sakura", meaning: "cherry blossom" }]
  },
  "hiragana-shi": {
    id: "hiragana-shi", kana: "し", romaji: "shi", type: "hiragana",
    mnemonic: "Think of a Shepherd's hook.",
    strokeOrderGif: "/stroke-animations/Hiragana_し_stroke_order_animation.gif",
    strokes: ["Vertical line that curves up and to the right at the bottom."],
    vocabulary: [{ kana: "しろ", romaji: "shiro", meaning: "white" }, { kana: "しごと", romaji: "shigoto", meaning: "job" }]
  },
  "hiragana-su": {
    id: "hiragana-su", kana: "す", romaji: "su", type: "hiragana",
    mnemonic: "Think of Swinging on a loop.",
    strokeOrderGif: "/stroke-animations/Hiragana_す_stroke_order_animation.gif",
    strokes: ["Horizontal line from left to right.", "Vertical line that loops in the middle and continues down."],
    vocabulary: [{ kana: "すし", romaji: "sushi", meaning: "sushi" }, { kana: "すいか", romaji: "suika", meaning: "watermelon" }]
  },
  "hiragana-se": {
    id: "hiragana-se", kana: "せ", romaji: "se", type: "hiragana",
    mnemonic: "Think of Setting the table.",
    strokeOrderGif: "/stroke-animations/Hiragana_せ_stroke_order_animation.gif",
    strokes: ["Horizontal line from left to right.", "Vertical line on the right, curving left at the bottom.", "Vertical line on the left, curving right at the bottom."],
    vocabulary: [{ kana: "せかい", romaji: "sekai", meaning: "world" }, { kana: "せんせい", romaji: "sensei", meaning: "teacher" }]
  },
  "hiragana-so": {
    id: "hiragana-so", kana: "そ", romaji: "so", type: "hiragana",
    mnemonic: "Think of Sewing zigzag.",
    strokeOrderGif: "/stroke-animations/Hiragana_そ_stroke_order_animation.gif",
    strokes: ["Single line that goes right, diagonally down-left, right again, and then curves down and left."],
    vocabulary: [{ kana: "そら", romaji: "sora", meaning: "sky" }, { kana: "そと", romaji: "soto", meaning: "outside" }]
  },
  "hiragana-ta": {
    id: "hiragana-ta", kana: "た", romaji: "ta", type: "hiragana",
    mnemonic: "Think of the letters T and A.",
    strokeOrderGif: "/stroke-animations/Hiragana_た_stroke_order_animation.gif",
    strokes: ["Short horizontal line.", "Vertical line cutting through the first stroke.", "Small 'ko' (こ) shape on the right."],
    vocabulary: [{ kana: "たべもの", romaji: "tabemono", meaning: "food" }, { kana: "たまご", romaji: "tamago", meaning: "egg" }]
  },
  "hiragana-chi": {
    id: "hiragana-chi", kana: "ち", romaji: "chi", type: "hiragana",
    mnemonic: "Think of a Cheerleader.",
    strokeOrderGif: "/stroke-animations/Hiragana_ち_stroke_order_animation.gif",
    strokes: ["Horizontal line from left to right.", "Vertical line cutting through, curving right and looping back down."],
    vocabulary: [{ kana: "ちいさい", romaji: "chiisai", meaning: "small" }, { kana: "ちち", romaji: "chichi", meaning: "father" }]
  },
  "hiragana-tsu": {
    id: "hiragana-tsu", kana: "つ", romaji: "tsu", type: "hiragana",
    mnemonic: "Think of a Tsunami wave.",
    strokeOrderGif: "/stroke-animations/Hiragana_つ_stroke_order_animation.gif",
    strokes: ["Single curved line that starts top-left, goes right, and sweeps down-left."],
    vocabulary: [{ kana: "つき", romaji: "tsuki", meaning: "moon" }, { kana: "つくえ", romaji: "tsukue", meaning: "desk" }]
  },
  "hiragana-te": {
    id: "hiragana-te", kana: "て", romaji: "te", type: "hiragana",
    mnemonic: "Think of a broken Tennis racket.",
    strokeOrderGif: "/stroke-animations/Hiragana_て_stroke_order_animation.gif",
    strokes: ["Single line that goes right, then curves down and left."],
    vocabulary: [{ kana: "て", romaji: "te", meaning: "hand" }, { kana: "てがみ", romaji: "tegami", meaning: "letter" }]
  },
  "hiragana-to": {
    id: "hiragana-to", kana: "と", romaji: "to", type: "hiragana",
    mnemonic: "Think of a Toe with a splinter.",
    strokeOrderGif: "/stroke-animations/Hiragana_と_stroke_order_animation.gif",
    strokes: ["Short diagonal line pointing down-right.", "Curved line starting from the middle of the first stroke, curving right and down."],
    vocabulary: [{ kana: "とり", romaji: "tori", meaning: "bird" }, { kana: "とけい", romaji: "tokei", meaning: "clock" }]
  },
  "hiragana-na": {
    id: "hiragana-na", kana: "な", romaji: "na", type: "hiragana",
    mnemonic: "Think of a Nun praying.",
    strokeOrderGif: "/stroke-animations/Hiragana_な_stroke_order_animation.gif",
    strokes: ["Short horizontal line.", "Diagonal line cutting through it.", "Small dash on the top right.", "Vertical line curving left, then looping right and down."],
    vocabulary: [{ kana: "なまえ", romaji: "namae", meaning: "name" }, { kana: "なつ", romaji: "natsu", meaning: "summer" }]
  },
  "hiragana-ni": {
    id: "hiragana-ni", kana: "に", romaji: "ni", type: "hiragana",
    mnemonic: "Think of a Needle and thread.",
    strokeOrderGif: "/stroke-animations/Hiragana_に_stroke_order_animation.gif",
    strokes: ["Vertical line curving slightly left, with a hook.", "Small 'ko' (こ) shape on the right."],
    vocabulary: [{ kana: "にく", romaji: "niku", meaning: "meat" }, { kana: "にほん", romaji: "nihon", meaning: "Japan" }]
  },
  "hiragana-nu": {
    id: "hiragana-nu", kana: "ぬ", romaji: "nu", type: "hiragana",
    mnemonic: "Think of Noodles.",
    strokeOrderGif: "/stroke-animations/Hiragana_ぬ_stroke_order_animation.gif",
    strokes: ["Diagonal line from top-left to bottom-right.", "Line starting above, crossing the first, sweeping down-left, then looping up and right."],
    vocabulary: [{ kana: "いぬ", romaji: "inu", meaning: "dog" }, { kana: "ぬの", romaji: "nuno", meaning: "cloth" }]
  },
  "hiragana-ne": {
    id: "hiragana-ne", kana: "ね", romaji: "ne", type: "hiragana",
    mnemonic: "Think of a cat (Neko) caught in a Net.",
    strokeOrderGif: "/stroke-animations/Hiragana_ね_stroke_order_animation.gif",
    strokes: ["Vertical line.", "Z-like stroke that sweeps down-left, then loops up and right."],
    vocabulary: [{ kana: "ねこ", romaji: "neko", meaning: "cat" }, { kana: "ねずみ", romaji: "nezumi", meaning: "mouse" }]
  },
  "hiragana-no": {
    id: "hiragana-no", kana: "の", romaji: "no", type: "hiragana",
    mnemonic: "Think of a NO smoking sign.",
    strokeOrderGif: "/stroke-animations/Hiragana_の_stroke_order_animation.gif",
    strokes: ["Single continuous stroke starting in the middle, curving down-left, then looping all the way around and down."],
    vocabulary: [{ kana: "のど", romaji: "nodo", meaning: "throat" }, { kana: "のみもの", romaji: "nomimono", meaning: "drink" }]
  },
  "hiragana-ha": {
    id: "hiragana-ha", kana: "は", romaji: "ha", type: "hiragana",
    mnemonic: "Think of a capital H and a lowercase a.",
    strokeOrderGif: "/stroke-animations/Hiragana_は_stroke_order_animation.gif",
    strokes: ["Vertical line on the left curving left with a hook.", "Short horizontal line.", "Vertical line intersecting the horizontal line and looping at the bottom."],
    vocabulary: [{ kana: "はい", romaji: "hai", meaning: "yes" }, { kana: "はな", romaji: "hana", meaning: "flower" }]
  },
  "hiragana-hi": {
    id: "hiragana-hi", kana: "ひ", romaji: "hi", type: "hiragana",
    mnemonic: "Think of a person saying 'He he he' with a big smile.",
    strokeOrderGif: "/stroke-animations/Hiragana_ひ_stroke_order_animation.gif",
    strokes: ["Single stroke sweeping from left to right, dipping in the middle like a large U."],
    vocabulary: [{ kana: "ひと", romaji: "hito", meaning: "person" }, { kana: "ひだり", romaji: "hidari", meaning: "left" }]
  },
  "hiragana-fu": {
    id: "hiragana-fu", kana: "ふ", romaji: "fu", type: "hiragana",
    mnemonic: "Think of Mt. Fuji.",
    strokeOrderGif: "/stroke-animations/Hiragana_ふ_stroke_order_animation.gif",
    strokes: ["Short downward dash.", "Curved sweep down.", "Dash on the left.", "Dash on the right."],
    vocabulary: [{ kana: "ふね", romaji: "fune", meaning: "ship" }, { kana: "ふゆ", romaji: "fuyu", meaning: "winter" }]
  },
  "hiragana-he": {
    id: "hiragana-he", kana: "へ", romaji: "he", type: "hiragana",
    mnemonic: "Think of pointing to Heaven.",
    strokeOrderGif: "/stroke-animations/Hiragana_へ_stroke_order_animation.gif",
    strokes: ["A single line sloping slightly up then sharply down-right."],
    vocabulary: [{ kana: "へや", romaji: "heya", meaning: "room" }, { kana: "へた", romaji: "heta", meaning: "unskillful" }]
  },
  "hiragana-ho": {
    id: "hiragana-ho", kana: "ほ", romaji: "ho", type: "hiragana",
    mnemonic: "Think of a house with a chimney (Ho ho ho, Santa!).",
    strokeOrderGif: "/stroke-animations/Hiragana_ほ_stroke_order_animation.gif",
    strokes: ["Vertical line on the left curving left with a hook.", "Two horizontal lines.", "Vertical line intersecting the horizontal lines and looping at the bottom."],
    vocabulary: [{ kana: "ほん", romaji: "hon", meaning: "book" }, { kana: "ほし", romaji: "hoshi", meaning: "star" }]
  },
  "hiragana-ma": {
    id: "hiragana-ma", kana: "ま", romaji: "ma", type: "hiragana",
    mnemonic: "Think of the Mast of a ship.",
    strokeOrderGif: "/stroke-animations/Hiragana_ま_stroke_order_animation.gif",
    strokes: ["Two parallel horizontal lines.", "Vertical line intersecting them and looping at the bottom."],
    vocabulary: [{ kana: "まち", romaji: "machi", meaning: "town" }, { kana: "まど", romaji: "mado", meaning: "window" }]
  },
  "hiragana-mi": {
    id: "hiragana-mi", kana: "み", romaji: "mi", type: "hiragana",
    mnemonic: "Think of number 21 (looks similar).",
    strokeOrderGif: "/stroke-animations/Hiragana_み_stroke_order_animation.gif",
    strokes: ["Horizontal sweep that turns down-left and loops right.", "Vertical line cutting through the tail."],
    vocabulary: [{ kana: "みず", romaji: "mizu", meaning: "water" }, { kana: "みみ", romaji: "mimi", meaning: "ear" }]
  },
  "hiragana-mu": {
    id: "hiragana-mu", kana: "む", romaji: "mu", type: "hiragana",
    mnemonic: "Think of a cow saying Moo.",
    strokeOrderGif: "/stroke-animations/Hiragana_む_stroke_order_animation.gif",
    strokes: ["Short horizontal line.", "Vertical line dropping, looping left, and sweeping horizontally right.", "Small dash on the right."],
    vocabulary: [{ kana: "むし", romaji: "mushi", meaning: "bug" }, { kana: "むずかしい", romaji: "muzukashii", meaning: "difficult" }]
  },
  "hiragana-me": {
    id: "hiragana-me", kana: "め", romaji: "me", type: "hiragana",
    mnemonic: "Think of an eye (Me in Japanese). It looks like 'nu' without the tail loop.",
    strokeOrderGif: "/stroke-animations/Hiragana_め_stroke_order_animation.gif",
    strokes: ["Diagonal line from top-left to bottom-right.", "Line starting above, crossing the first, sweeping down-left, then curving right and down."],
    vocabulary: [{ kana: "め", romaji: "me", meaning: "eye" }, { kana: "めがね", romaji: "megane", meaning: "glasses" }]
  },
  "hiragana-mo": {
    id: "hiragana-mo", kana: "も", romaji: "mo", type: "hiragana",
    mnemonic: "Think of catching More fish with a hook.",
    strokeOrderGif: "/stroke-animations/Hiragana_も_stroke_order_animation.gif",
    strokes: ["Vertical line that sweeps down and right like a hook.", "Two horizontal lines crossing the vertical stem."],
    vocabulary: [{ kana: "もの", romaji: "mono", meaning: "thing" }, { kana: "もも", romaji: "momo", meaning: "peach" }]
  },
  "hiragana-ya": {
    id: "hiragana-ya", kana: "や", romaji: "ya", type: "hiragana",
    mnemonic: "Think of a Yak.",
    strokeOrderGif: "/stroke-animations/Hiragana_や_stroke_order_animation.gif",
    strokes: ["Curving horizontal stroke that dips down-left.", "Small dash in the upper middle.", "Long vertical curving stroke cutting through."],
    vocabulary: [{ kana: "やま", romaji: "yama", meaning: "mountain" }, { kana: "やさい", romaji: "yasai", meaning: "vegetable" }]
  },
  "hiragana-yu": {
    id: "hiragana-yu", kana: "ゆ", romaji: "yu", type: "hiragana",
    mnemonic: "Think of a U-turn.",
    strokeOrderGif: "/stroke-animations/Hiragana_ゆ_stroke_order_animation.gif",
    strokes: ["Vertical line dropping, curving left and sweeping around to form a loop.", "Long vertical stroke cutting through the right side."],
    vocabulary: [{ kana: "ゆき", romaji: "yuki", meaning: "snow" }, { kana: "ゆめ", romaji: "yume", meaning: "dream" }]
  },
  "hiragana-yo": {
    id: "hiragana-yo", kana: "よ", romaji: "yo", type: "hiragana",
    mnemonic: "Think of a Yo-yo dangling from a finger.",
    strokeOrderGif: "/stroke-animations/Hiragana_よ_stroke_order_animation.gif",
    strokes: ["Short horizontal dash.", "Vertical line dropping down from the middle of the dash and looping at the bottom."],
    vocabulary: [{ kana: "よる", romaji: "yoru", meaning: "night" }, { kana: "よむ", romaji: "yomu", meaning: "to read" }]
  },
  "hiragana-ra": {
    id: "hiragana-ra", kana: "ら", romaji: "ra", type: "hiragana",
    mnemonic: "Think of a Rabbit.",
    strokeOrderGif: "/stroke-animations/Hiragana_ら_stroke_order_animation.gif",
    strokes: ["Short horizontal dash.", "Vertical line dropping down, then curving wide to the right."],
    vocabulary: [{ kana: "らいげつ", romaji: "raigetsu", meaning: "next month" }, { kana: "ラーメン", romaji: "raamen", meaning: "ramen" }]
  },
  "hiragana-ri": {
    id: "hiragana-ri", kana: "り", romaji: "ri", type: "hiragana",
    mnemonic: "Think of Reeds in the wind.",
    strokeOrderGif: "/stroke-animations/Hiragana_り_stroke_order_animation.gif",
    strokes: ["Short vertical line curving slightly right, with a hook.", "Longer curving vertical stroke on the right, swooping down."],
    vocabulary: [{ kana: "りんご", romaji: "ringo", meaning: "apple" }, { kana: "りゆう", romaji: "riyuu", meaning: "reason" }]
  },
  "hiragana-ru": {
    id: "hiragana-ru", kana: "る", romaji: "ru", type: "hiragana",
    mnemonic: "Think of a Route with a loop at the end.",
    strokeOrderGif: "/stroke-animations/Hiragana_る_stroke_order_animation.gif",
    strokes: ["Single stroke sweeping horizontally, then down-left, curving up-right and finishing with a small loop."],
    vocabulary: [{ kana: "るす", romaji: "rusu", meaning: "absence" }, { kana: "よる", romaji: "yoru", meaning: "night" }]
  },
  "hiragana-re": {
    id: "hiragana-re", kana: "れ", romaji: "re", type: "hiragana",
    mnemonic: "Think of a person Resting against a wall.",
    strokeOrderGif: "/stroke-animations/Hiragana_れ_stroke_order_animation.gif",
    strokes: ["Vertical line.", "Z-like stroke sweeping down-left, curving up-right, and flicking outwards to the right."],
    vocabulary: [{ kana: "れきし", romaji: "rekishi", meaning: "history" }, { kana: "れんしゅう", romaji: "renshuu", meaning: "practice" }]
  },
  "hiragana-ro": {
    id: "hiragana-ro", kana: "ろ", romaji: "ro", type: "hiragana",
    mnemonic: "Think of a Route with NO loop at the end.",
    strokeOrderGif: "/stroke-animations/Hiragana_ろ_stroke_order_animation.gif",
    strokes: ["Single stroke sweeping horizontally, then down-left, and curving up-right (like 'ru' but without the loop)."],
    vocabulary: [{ kana: "ろく", romaji: "roku", meaning: "six" }, { kana: "ろっぽんぎ", romaji: "roppongi", meaning: "Roppongi" }]
  },
  "hiragana-wa": {
    id: "hiragana-wa", kana: "わ", romaji: "wa", type: "hiragana",
    mnemonic: "Think of a magic Wand.",
    strokeOrderGif: "/stroke-animations/Hiragana_わ_stroke_order_animation.gif",
    strokes: ["Vertical line.", "Z-like stroke sweeping down-left, curving up-right, and swooping wide around like a circle."],
    vocabulary: [{ kana: "わたし", romaji: "watashi", meaning: "I/me" }, { kana: "わかる", romaji: "wakaru", meaning: "to understand" }]
  },
  "hiragana-wo": {
    id: "hiragana-wo", kana: "を", romaji: "wo", type: "hiragana",
    mnemonic: "Think of a person walking along a path.",
    strokeOrderGif: "/stroke-animations/Hiragana_を_stroke_order_animation.gif",
    strokes: ["Short horizontal line.", "Vertical line dropping and curving left.", "C-shaped curve cutting through the tail."],
    vocabulary: [{ kana: "ほんをよむ", romaji: "hon wo yomu", meaning: "read a book (particle)" }]
  },
  "hiragana-n": {
    id: "hiragana-n", kana: "ん", romaji: "n", type: "hiragana",
    mnemonic: "Think of a lowercase 'n'.",
    strokeOrderGif: "/stroke-animations/Hiragana_ん_stroke_order_animation.gif",
    strokes: ["Single stroke dropping down-left, sharply angling up-right, and sweeping down with a swooping tail."],
    vocabulary: [{ kana: "ほん", romaji: "hon", meaning: "book" }, { kana: "てんき", romaji: "tenki", meaning: "weather" }]
  },

  // ==========================================
  // KATAKANA
  // ==========================================
  "katakana-a": {
    id: "katakana-a", kana: "ア", romaji: "a", type: "katakana",
    mnemonic: "Think of an Ice axe.",
    strokeOrderGif: "/stroke-animations/Katakana_ア_stroke_order_animation.gif",
    strokes: ["Horizontal line that sharply turns down and left.", "Vertical line curving slightly left."],
    vocabulary: [{ kana: "アイス", romaji: "aisu", meaning: "ice cream" }, { kana: "アメリカ", romaji: "amerika", meaning: "America" }]
  },
  "katakana-i": {
    id: "katakana-i", kana: "イ", romaji: "i", type: "katakana",
    mnemonic: "Think of an Eagle looking down.",
    strokeOrderGif: "/stroke-animations/Katakana_イ_stroke_order_animation.gif",
    strokes: ["Diagonal line from top-right to bottom-left.", "Vertical line straight down from the middle of the first stroke."],
    vocabulary: [{ kana: "インド", romaji: "indo", meaning: "India" }, { kana: "インク", romaji: "inku", meaning: "ink" }]
  },
  "katakana-u": {
    id: "katakana-u", kana: "ウ", romaji: "u", type: "katakana",
    mnemonic: "Think of an Umbrella.",
    strokeOrderGif: "/stroke-animations/Katakana_ウ_stroke_order_animation.gif",
    strokes: ["Short vertical dash at the top.", "Horizontal line that sharply turns down and left."],
    vocabulary: [{ kana: "ウール", romaji: "uuru", meaning: "wool" }, { kana: "ウクレレ", romaji: "ukurere", meaning: "ukulele" }]
  },
  "katakana-e": {
    id: "katakana-e", kana: "エ", romaji: "e", type: "katakana",
    mnemonic: "Think of Elevator doors.",
    strokeOrderGif: "/stroke-animations/Katakana_エ_stroke_order_animation.gif",
    strokes: ["Horizontal line at the top.", "Vertical line straight down from the middle.", "Longer horizontal line at the bottom."],
    vocabulary: [{ kana: "エレベーター", romaji: "erebeetaa", meaning: "elevator" }, { kana: "エンジン", romaji: "enjin", meaning: "engine" }]
  },
  "katakana-o": {
    id: "katakana-o", kana: "オ", romaji: "o", type: "katakana",
    mnemonic: "Think of an Opera singer.",
    strokeOrderGif: "/stroke-animations/Katakana_オ_stroke_order_animation.gif",
    strokes: ["Horizontal line from left to right.", "Vertical line cutting through it, with a hook at the bottom.", "Diagonal line pointing down-left."],
    vocabulary: [{ kana: "オレンジ", romaji: "orenji", meaning: "orange" }, { kana: "オフィス", romaji: "ofisu", meaning: "office" }]
  },
  "katakana-ka": {
    id: "katakana-ka", kana: "カ", romaji: "ka", type: "katakana",
    mnemonic: "Looks like a Kite flying.",
    strokeOrderGif: "/stroke-animations/Katakana_カ_stroke_order_animation.gif",
    strokes: ["Horizontal line hooking down and left.", "Vertical line curving left, cutting through the first."],
    vocabulary: [{ kana: "カメラ", romaji: "kamera", meaning: "camera" }, { kana: "カラオケ", romaji: "karaoke", meaning: "karaoke" }]
  },
  "katakana-ki": {
    id: "katakana-ki", kana: "キ", romaji: "ki", type: "katakana",
    mnemonic: "Looks like a Key.",
    strokeOrderGif: "/stroke-animations/Katakana_キ_stroke_order_animation.gif",
    strokes: ["Two parallel horizontal lines.", "Diagonal line cutting through both."],
    vocabulary: [{ kana: "キス", romaji: "kisu", meaning: "kiss" }, { kana: "ギター", romaji: "gitaa", meaning: "guitar" }]
  },
  "katakana-ku": {
    id: "katakana-ku", kana: "ク", romaji: "ku", type: "katakana",
    mnemonic: "Looks like a Cook's hat.",
    strokeOrderGif: "/stroke-animations/Katakana_ク_stroke_order_animation.gif",
    strokes: ["Short diagonal dash down-left.", "Horizontal line sharply turning down-left."],
    vocabulary: [{ kana: "クラス", romaji: "kurasu", meaning: "class" }, { kana: "クラブ", romaji: "kurabu", meaning: "club" }]
  },
  "katakana-ke": {
    id: "katakana-ke", kana: "ケ", romaji: "ke", type: "katakana",
    mnemonic: "Looks like a Kelp frond.",
    strokeOrderGif: "/stroke-animations/Katakana_ケ_stroke_order_animation.gif",
    strokes: ["Short diagonal dash down-left.", "Horizontal line cutting across.", "Curved vertical line dropping from the center."],
    vocabulary: [{ kana: "ケーキ", romaji: "keeki", meaning: "cake" }, { kana: "ケース", romaji: "keesu", meaning: "case" }]
  },
  "katakana-ko": {
    id: "katakana-ko", kana: "コ", romaji: "ko", type: "katakana",
    mnemonic: "Looks like two Corners.",
    strokeOrderGif: "/stroke-animations/Katakana_コ_stroke_order_animation.gif",
    strokes: ["Horizontal line turning straight down.", "Horizontal line closing the bottom."],
    vocabulary: [{ kana: "コーヒー", romaji: "koohii", meaning: "coffee" }, { kana: "コート", romaji: "kooto", meaning: "coat" }]
  },
  "katakana-sa": {
    id: "katakana-sa", kana: "サ", romaji: "sa", type: "katakana",
    mnemonic: "Looks like a Saddle.",
    strokeOrderGif: "/stroke-animations/Katakana_サ_stroke_order_animation.gif",
    strokes: ["Horizontal line from left to right.", "Short vertical line cutting through.", "Longer vertical line curving left."],
    vocabulary: [{ kana: "サラダ", romaji: "sarada", meaning: "salad" }, { kana: "サッカー", romaji: "sakkaa", meaning: "soccer" }]
  },
  "katakana-shi": {
    id: "katakana-shi", kana: "シ", romaji: "shi", type: "katakana",
    mnemonic: "She looks up (strokes point upwards).",
    strokeOrderGif: "/stroke-animations/Katakana_シ_stroke_order_animation.gif",
    strokes: ["Two short diagonal dashes.", "Long stroke sweeping up from the bottom-left."],
    vocabulary: [{ kana: "シャツ", romaji: "shatsu", meaning: "shirt" }, { kana: "シャワー", romaji: "shawaa", meaning: "shower" }]
  },
  "katakana-su": {
    id: "katakana-su", kana: "ス", romaji: "su", type: "katakana",
    mnemonic: "Looks like a hanger for a Suit.",
    strokeOrderGif: "/stroke-animations/Katakana_ス_stroke_order_animation.gif",
    strokes: ["Horizontal line turning diagonally down-left.", "Diagonal line dropping down-right from the middle."],
    vocabulary: [{ kana: "スポーツ", romaji: "supootsu", meaning: "sports" }, { kana: "スキー", romaji: "sukii", meaning: "skiing" }]
  },
  "katakana-se": {
    id: "katakana-se", kana: "セ", romaji: "se", type: "katakana",
    mnemonic: "Looks similar to hiragana 'se'.",
    strokeOrderGif: "/stroke-animations/Katakana_セ_stroke_order_animation.gif",
    strokes: ["Horizontal line hooking down-right.", "Vertical line cutting through and turning right at the bottom."],
    vocabulary: [{ kana: "セーター", romaji: "seetaa", meaning: "sweater" }, { kana: "センター", romaji: "sentaa", meaning: "center" }]
  },
  "katakana-so": {
    id: "katakana-so", kana: "ソ", romaji: "so", type: "katakana",
    mnemonic: "Sewing needle pointing down (strokes point downwards).",
    strokeOrderGif: "/stroke-animations/Katakana_ソ_stroke_order_animation.gif",
    strokes: ["Short diagonal dash pointing down-right.", "Long stroke sweeping down from top-right to bottom-left."],
    vocabulary: [{ kana: "ソース", romaji: "soosu", meaning: "sauce" }, { kana: "ソファ", romaji: "sofa", meaning: "sofa" }]
  },
  "katakana-ta": {
    id: "katakana-ta", kana: "タ", romaji: "ta", type: "katakana",
    mnemonic: "Looks like a Tidal wave.",
    strokeOrderGif: "/stroke-animations/Katakana_タ_stroke_order_animation.gif",
    strokes: ["Short diagonal dash down-left.", "Horizontal line hooking down-left.", "Diagonal line cutting through the middle."],
    vocabulary: [{ kana: "タクシー", romaji: "takushii", meaning: "taxi" }, { kana: "タオル", romaji: "taoru", meaning: "towel" }]
  },
  "katakana-chi": {
    id: "katakana-chi", kana: "チ", romaji: "chi", type: "katakana",
    mnemonic: "Looks like a Cheerleader's pose.",
    strokeOrderGif: "/stroke-animations/Katakana_チ_stroke_order_animation.gif",
    strokes: ["Short diagonal stroke down-left.", "Horizontal line from left to right.", "Vertical line curving left."],
    vocabulary: [{ kana: "チーズ", romaji: "chiizu", meaning: "cheese" }, { kana: "チーム", romaji: "chiimu", meaning: "team" }]
  },
  "katakana-tsu": {
    id: "katakana-tsu", kana: "ツ", romaji: "tsu", type: "katakana",
    mnemonic: "Two needles falling down.",
    strokeOrderGif: "/stroke-animations/Katakana_ツ_stroke_order_animation.gif",
    strokes: ["Two short diagonal dashes.", "Long stroke sweeping down from top-right to bottom-left."],
    vocabulary: [{ kana: "ツアー", romaji: "tsuaa", meaning: "tour" }, { kana: "ツナ", romaji: "tsuna", meaning: "tuna" }]
  },
  "katakana-te": {
    id: "katakana-te", kana: "テ", romaji: "te", type: "katakana",
    mnemonic: "Looks like a Telephone pole.",
    strokeOrderGif: "/stroke-animations/Katakana_テ_stroke_order_animation.gif",
    strokes: ["Two parallel horizontal lines.", "Vertical line curving left from the middle of the bottom line."],
    vocabulary: [{ kana: "テレビ", romaji: "terebi", meaning: "television" }, { kana: "テスト", romaji: "tesuto", meaning: "test" }]
  },
  "katakana-to": {
    id: "katakana-to", kana: "ト", romaji: "to", type: "katakana",
    mnemonic: "Looks like a Totem pole.",
    strokeOrderGif: "/stroke-animations/Katakana_ト_stroke_order_animation.gif",
    strokes: ["Vertical line straight down.", "Short diagonal dash stemming from the middle."],
    vocabulary: [{ kana: "トイレ", romaji: "toire", meaning: "toilet" }, { kana: "トマト", romaji: "tomato", meaning: "tomato" }]
  },
  "katakana-na": {
    id: "katakana-na", kana: "ナ", romaji: "na", type: "katakana",
    mnemonic: "Looks like a Nutcracker.",
    strokeOrderGif: "/stroke-animations/Katakana_ナ_stroke_order_animation.gif",
    strokes: ["Horizontal line from left to right.", "Vertical line curving down-left from the center."],
    vocabulary: [{ kana: "ナイフ", romaji: "naifu", meaning: "knife" }, { kana: "ナンバー", romaji: "nanbaa", meaning: "number" }]
  },
  "katakana-ni": {
    id: "katakana-ni", kana: "ニ", romaji: "ni", type: "katakana",
    mnemonic: "Two parallel lines (Ni means two in Japanese).",
    strokeOrderGif: "/stroke-animations/Katakana_ニ_stroke_order_animation.gif",
    strokes: ["Short horizontal line.", "Longer horizontal line directly below it."],
    vocabulary: [{ kana: "ニュース", romaji: "nyuusu", meaning: "news" }, { kana: "ニット", romaji: "nitto", meaning: "knit" }]
  },
  "katakana-nu": {
    id: "katakana-nu", kana: "ヌ", romaji: "nu", type: "katakana",
    mnemonic: "Looks like chopsticks picking up Noodles.",
    strokeOrderGif: "/stroke-animations/Katakana_ヌ_stroke_order_animation.gif",
    strokes: ["Horizontal line turning down-left.", "Diagonal line cutting across the first stroke."],
    vocabulary: [{ kana: "ヌードル", romaji: "nuudoru", meaning: "noodle" }]
  },
  "katakana-ne": {
    id: "katakana-ne", kana: "ネ", romaji: "ne", type: "katakana",
    mnemonic: "Looks like a Nest in a tree.",
    strokeOrderGif: "/stroke-animations/Katakana_ネ_stroke_order_animation.gif",
    strokes: ["Short vertical dash.", "Horizontal line turning down-left.", "Vertical line straight down.", "Short dash pointing down-right."],
    vocabulary: [{ kana: "ネクタイ", romaji: "nekutai", meaning: "necktie" }, { kana: "ネット", romaji: "netto", meaning: "internet" }]
  },
  "katakana-no": {
    id: "katakana-no", kana: "ノ", romaji: "no", type: "katakana",
    mnemonic: "Looks like a long Nose.",
    strokeOrderGif: "/stroke-animations/Katakana_ノ_stroke_order_animation.gif",
    strokes: ["A single sweeping diagonal line from top-right to bottom-left."],
    vocabulary: [{ kana: "ノート", romaji: "nooto", meaning: "notebook" }, { kana: "ノック", romaji: "nokku", meaning: "knock" }]
  },
  "katakana-ha": {
    id: "katakana-ha", kana: "ハ", romaji: "ha", type: "katakana",
    mnemonic: "Looks like a shaped Hat.",
    strokeOrderGif: "/stroke-animations/Katakana_ハ_stroke_order_animation.gif",
    strokes: ["Diagonal line curving down-left.", "Diagonal line curving down-right."],
    vocabulary: [{ kana: "ハンバーガー", romaji: "hanbaagaa", meaning: "hamburger" }, { kana: "バス", romaji: "basu", meaning: "bus" }]
  },
  "katakana-hi": {
    id: "katakana-hi", kana: "ヒ", romaji: "hi", type: "katakana",
    mnemonic: "Looks like someone sitting on their Heel.",
    strokeOrderGif: "/stroke-animations/Katakana_ヒ_stroke_order_animation.gif",
    strokes: ["Horizontal line from left to right.", "Line starting vertical then curving sharply to the right."],
    vocabulary: [{ kana: "ヒーター", romaji: "hiitaa", meaning: "heater" }, { kana: "ヒント", romaji: "hinto", meaning: "hint" }]
  },
  "katakana-fu": {
    id: "katakana-fu", kana: "フ", romaji: "fu", type: "katakana",
    mnemonic: "Looks like a Flag blowing in the wind.",
    strokeOrderGif: "/stroke-animations/Katakana_フ_stroke_order_animation.gif",
    strokes: ["A single line starting horizontal and curving down-left."],
    vocabulary: [{ kana: "フォーク", romaji: "fooku", meaning: "fork" }, { kana: "フィルム", romaji: "firumu", meaning: "film" }]
  },
  "katakana-he": {
    id: "katakana-he", kana: "ヘ", romaji: "he", type: "katakana",
    mnemonic: "Looks like pointing to Heaven. (Identical to hiragana he).",
    strokeOrderGif: "/stroke-animations/Katakana_ヘ_stroke_order_animation.gif",
    strokes: ["A single line sloping slightly up then sharply down-right."],
    vocabulary: [{ kana: "ヘリコプター", romaji: "herikoputaa", meaning: "helicopter" }, { kana: "ヘッドホン", romaji: "heddohon", meaning: "headphones" }]
  },
  "katakana-ho": {
    id: "katakana-ho", kana: "ホ", romaji: "ho", type: "katakana",
    mnemonic: "Looks like a Holy cross.",
    strokeOrderGif: "/stroke-animations/Katakana_ホ_stroke_order_animation.gif",
    strokes: ["Horizontal line.", "Vertical line cutting through.", "Dash on the left.", "Dash on the right."],
    vocabulary: [{ kana: "ホテル", romaji: "hoteru", meaning: "hotel" }, { kana: "ホーム", romaji: "hoomu", meaning: "platform/home" }]
  },
  "katakana-ma": {
    id: "katakana-ma", kana: "マ", romaji: "ma", type: "katakana",
    mnemonic: "Looks like the Mast of a ship.",
    strokeOrderGif: "/stroke-animations/Katakana_マ_stroke_order_animation.gif",
    strokes: ["Horizontal line turning sharply down-left.", "Short dash filling the angle."],
    vocabulary: [{ kana: "マウス", romaji: "mausu", meaning: "mouse" }, { kana: "マイク", romaji: "maiku", meaning: "microphone" }]
  },
  "katakana-mi": {
    id: "katakana-mi", kana: "ミ", romaji: "mi", type: "katakana",
    mnemonic: "Three Missiles flying.",
    strokeOrderGif: "/stroke-animations/Katakana_ミ_stroke_order_animation.gif",
    strokes: ["Three parallel diagonal lines pointing down-right."],
    vocabulary: [{ kana: "ミルク", romaji: "miruku", meaning: "milk" }, { kana: "ミラー", romaji: "miraa", meaning: "mirror" }]
  },
  "katakana-mu": {
    id: "katakana-mu", kana: "ム", romaji: "mu", type: "katakana",
    mnemonic: "Looks like a Moose antler.",
    strokeOrderGif: "/stroke-animations/Katakana_ム_stroke_order_animation.gif",
    strokes: ["Diagonal line down-left hooking horizontally right.", "Short dash dropping down-right."],
    vocabulary: [{ kana: "ムード", romaji: "muudo", meaning: "mood" }]
  },
  "katakana-me": {
    id: "katakana-me", kana: "メ", romaji: "me", type: "katakana",
    mnemonic: "X marks the spot for the Medal.",
    strokeOrderGif: "/stroke-animations/Katakana_メ_stroke_order_animation.gif",
    strokes: ["Diagonal line down-left.", "Diagonal line crossing it down-right."],
    vocabulary: [{ kana: "メニュー", romaji: "menyuu", meaning: "menu" }, { kana: "メモ", romaji: "memo", meaning: "memo" }]
  },
  "katakana-mo": {
    id: "katakana-mo", kana: "モ", romaji: "mo", type: "katakana",
    mnemonic: "Looks like a Monitor.",
    strokeOrderGif: "/stroke-animations/Katakana_モ_stroke_order_animation.gif",
    strokes: ["Two parallel horizontal lines.", "Vertical line hooking left at the bottom, crossing both horizontal lines."],
    vocabulary: [{ kana: "モーター", romaji: "mootaa", meaning: "motor" }, { kana: "モデル", romaji: "moderu", meaning: "model" }]
  },
  "katakana-ya": {
    id: "katakana-ya", kana: "ヤ", romaji: "ya", type: "katakana",
    mnemonic: "Looks like a Yak's horns.",
    strokeOrderGif: "/stroke-animations/Katakana_ヤ_stroke_order_animation.gif",
    strokes: ["Horizontal line hooking down-left.", "Diagonal stroke cutting through the first."],
    vocabulary: [{ kana: "ヤンキー", romaji: "yankii", meaning: "delinquent/Yankee" }]
  },
  "katakana-yu": {
    id: "katakana-yu", kana: "ユ", romaji: "yu", type: "katakana",
    mnemonic: "Looks like a U-turn sign.",
    strokeOrderGif: "/stroke-animations/Katakana_ユ_stroke_order_animation.gif",
    strokes: ["Horizontal line turning sharply down.", "Horizontal line closing the shape at the bottom."],
    vocabulary: [{ kana: "ユーモア", romaji: "yuumoa", meaning: "humor" }, { kana: "ユーザー", romaji: "yuuzaa", meaning: "user" }]
  },
  "katakana-yo": {
    id: "katakana-yo", kana: "ヨ", romaji: "yo", type: "katakana",
    mnemonic: "Looks like a Yodeling mouth.",
    strokeOrderGif: "/stroke-animations/Katakana_ヨ_stroke_order_animation.gif",
    strokes: ["Horizontal line turning down.", "Horizontal line in the middle.", "Horizontal line at the bottom."],
    vocabulary: [{ kana: "ヨーグルト", romaji: "yooguruto", meaning: "yogurt" }, { kana: "ヨガ", romaji: "yoga", meaning: "yoga" }]
  },
  "katakana-ra": {
    id: "katakana-ra", kana: "ラ", romaji: "ra", type: "katakana",
    mnemonic: "Looks like a Rabbit sitting.",
    strokeOrderGif: "/stroke-animations/Katakana_ラ_stroke_order_animation.gif",
    strokes: ["Short horizontal dash at the top.", "Horizontal line turning down-left."],
    vocabulary: [{ kana: "ラジオ", romaji: "rajio", meaning: "radio" }, { kana: "ライオン", romaji: "raion", meaning: "lion" }]
  },
  "katakana-ri": {
    id: "katakana-ri", kana: "リ", romaji: "ri", type: "katakana",
    mnemonic: "Looks like two Ribbons.",
    strokeOrderGif: "/stroke-animations/Katakana_リ_stroke_order_animation.gif",
    strokes: ["Short vertical line.", "Longer vertical line curving left at the bottom."],
    vocabulary: [{ kana: "リンゴ", romaji: "ringo", meaning: "apple" }, { kana: "リボン", romaji: "ribon", meaning: "ribbon" }]
  },
  "katakana-ru": {
    id: "katakana-ru", kana: "ル", romaji: "ru", type: "katakana",
    mnemonic: "Looks like Roots of a tree.",
    strokeOrderGif: "/stroke-animations/Katakana_ル_stroke_order_animation.gif",
    strokes: ["Vertical line curving left.", "Vertical line curving upward to the right."],
    vocabulary: [{ kana: "ルール", romaji: "ruuru", meaning: "rule" }, { kana: "ルビー", romaji: "rubii", meaning: "ruby" }]
  },
  "katakana-re": {
    id: "katakana-re", kana: "レ", romaji: "re", type: "katakana",
    mnemonic: "Looks like a Red checkmark.",
    strokeOrderGif: "/stroke-animations/Katakana_レ_stroke_order_animation.gif",
    strokes: ["Vertical line hooking sharply upwards to the right."],
    vocabulary: [{ kana: "レストラン", romaji: "resutoran", meaning: "restaurant" }, { kana: "レモン", romaji: "remon", meaning: "lemon" }]
  },
  "katakana-ro": {
    id: "katakana-ro", kana: "ロ", romaji: "ro", type: "katakana",
    mnemonic: "Looks like a block on the Road.",
    strokeOrderGif: "/stroke-animations/Katakana_ロ_stroke_order_animation.gif",
    strokes: ["Vertical line on the left.", "Horizontal line turning down on the right.", "Horizontal line closing the box at the bottom."],
    vocabulary: [{ kana: "ロボット", romaji: "robotto", meaning: "robot" }, { kana: "ロケット", romaji: "roketto", meaning: "rocket" }]
  },
  "katakana-wa": {
    id: "katakana-wa", kana: "ワ", romaji: "wa", type: "katakana",
    mnemonic: "Looks like a Wine glass.",
    strokeOrderGif: "/stroke-animations/Katakana_ワ_stroke_order_animation.gif",
    strokes: ["Short vertical dash.", "Horizontal line turning curving down-left."],
    vocabulary: [{ kana: "ワイン", romaji: "wain", meaning: "wine" }, { kana: "ワイシャツ", romaji: "waishatsu", meaning: "dress shirt" }]
  },
  "katakana-wo": {
    id: "katakana-wo", kana: "ヲ", romaji: "wo", type: "katakana",
    mnemonic: "Looks like a Wok pan.",
    strokeOrderGif: "/stroke-animations/Katakana_ヲ_stroke_order_animation.gif",
    strokes: ["Horizontal line from left to right.", "Another horizontal line below it.", "Diagonal stroke curving down-left through both."],
    vocabulary: [{ kana: "ヲタク", romaji: "wotaku", meaning: "otaku/geek" }]
  },
  "katakana-n": {
    id: "katakana-n", kana: "ン", romaji: "n", type: "katakana",
    mnemonic: "No! Look at the single eye and mouth. (Strokes sweep upwards).",
    strokeOrderGif: "/stroke-animations/Katakana_ン_stroke_order_animation.gif",
    strokes: ["Short diagonal dash.", "Long stroke sweeping up from bottom-left to top-right."],
    vocabulary: [{ kana: "パン", romaji: "pan", meaning: "bread" }, { kana: "ペン", romaji: "pen", meaning: "pen" }]
  }
};

export function getKanaDetail(id: string): KanaDetail | undefined {
  return kanaData[id];
}

const allKanaMap: Record<string, { hiragana: string, katakana: string }> = {
  'a': { hiragana: 'あ', katakana: 'ア' }, 'i': { hiragana: 'い', katakana: 'イ' }, 'u': { hiragana: 'う', katakana: 'ウ' }, 'e': { hiragana: 'え', katakana: 'エ' }, 'o': { hiragana: 'お', katakana: 'オ' },
  'ka': { hiragana: 'か', katakana: 'カ' }, 'ki': { hiragana: 'き', katakana: 'キ' }, 'ku': { hiragana: 'く', katakana: 'ク' }, 'ke': { hiragana: 'け', katakana: 'ケ' }, 'ko': { hiragana: 'こ', katakana: 'コ' },
  'sa': { hiragana: 'さ', katakana: 'サ' }, 'shi': { hiragana: 'し', katakana: 'シ' }, 'su': { hiragana: 'す', katakana: 'ス' }, 'se': { hiragana: 'せ', katakana: 'セ' }, 'so': { hiragana: 'そ', katakana: 'ソ' },
  'ta': { hiragana: 'た', katakana: 'タ' }, 'chi': { hiragana: 'ち', katakana: 'チ' }, 'tsu': { hiragana: 'つ', katakana: 'ツ' }, 'te': { hiragana: 'て', katakana: 'テ' }, 'to': { hiragana: 'と', katakana: 'ト' },
  'na': { hiragana: 'な', katakana: 'ナ' }, 'ni': { hiragana: 'に', katakana: 'ニ' }, 'nu': { hiragana: 'ぬ', katakana: 'ヌ' }, 'ne': { hiragana: 'ね', katakana: 'ネ' }, 'no': { hiragana: 'の', katakana: 'ノ' },
  'ha': { hiragana: 'は', katakana: 'ハ' }, 'hi': { hiragana: 'ひ', katakana: 'ヒ' }, 'fu': { hiragana: 'ふ', katakana: 'フ' }, 'he': { hiragana: 'へ', katakana: 'ヘ' }, 'ho': { hiragana: 'ほ', katakana: 'ホ' },
  'ma': { hiragana: 'ま', katakana: 'マ' }, 'mi': { hiragana: 'み', katakana: 'ミ' }, 'mu': { hiragana: 'む', katakana: 'ム' }, 'me': { hiragana: 'め', katakana: 'メ' }, 'mo': { hiragana: 'も', katakana: 'モ' },
  'ya': { hiragana: 'や', katakana: 'ヤ' }, 'yu': { hiragana: 'ゆ', katakana: 'ユ' }, 'yo': { hiragana: 'よ', katakana: 'ヨ' },
  'ra': { hiragana: 'ら', katakana: 'ラ' }, 'ri': { hiragana: 'り', katakana: 'リ' }, 'ru': { hiragana: 'る', katakana: 'ル' }, 're': { hiragana: 'れ', katakana: 'レ' }, 'ro': { hiragana: 'ろ', katakana: 'ロ' },
  'wa': { hiragana: 'わ', katakana: 'ワ' }, 'wo': { hiragana: 'を', katakana: 'ヲ' }, 'n': { hiragana: 'ん', katakana: 'ン' }
};

export function getFallbackKanaDetail(romaji: string, type: 'hiragana' | 'katakana'): KanaDetail {
  const kana = allKanaMap[romaji]?.[type] || romaji;
  
  // Format the type so 'hiragana' becomes 'Hiragana' for the file path
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
  
  return {
    id: `${type}-${romaji}`,
    kana,
    romaji,
    type,
    mnemonic: `Think of the sound '${romaji}'.`,
    strokeOrderGif: `/stroke-animations/${capitalizedType}_${kana}_stroke_order_animation.gif`,
    strokes: ["Follow standard stroke order."],
    vocabulary: [
      { kana: kana, romaji: romaji, meaning: "Example word" }
    ]
  };
}