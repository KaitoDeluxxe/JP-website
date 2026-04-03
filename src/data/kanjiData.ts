export type KanjiItem = {
  character: string;
  meaning: string;
  romaji: string;
  strokes: number;
  radical: string;
  gifFile: string; // The filename of the gif in your public folder
};

// Grouped by JLPT Level
export const kanjiByLevel_N5: Record<string, KanjiItem[]> = {
  "N5": [
    // Numbers & Money
    { character: "一", meaning: "One", romaji: "ichi / hito", strokes: 1, radical: "一", gifFile: "ichi.gif" },
    { character: "二", meaning: "Two", romaji: "ni / futa", strokes: 2, radical: "二", gifFile: "ni.gif" },
    { character: "三", meaning: "Three", romaji: "san / mi", strokes: 3, radical: "一", gifFile: "san.gif" },
    { character: "四", meaning: "Four", romaji: "shi / yon", strokes: 5, radical: "囗", gifFile: "shi.gif" },
    { character: "五", meaning: "Five", romaji: "go / itsu", strokes: 4, radical: "二", gifFile: "go.gif" },
    { character: "六", meaning: "Six", romaji: "roku / mu", strokes: 4, radical: "八", gifFile: "roku.gif" },
    { character: "七", meaning: "Seven", romaji: "shichi / nana", strokes: 2, radical: "一", gifFile: "shichi.gif" },
    { character: "八", meaning: "Eight", romaji: "hachi / ya", strokes: 2, radical: "八", gifFile: "hachi.gif" },
    { character: "九", meaning: "Nine", romaji: "kyuu / kokono", strokes: 2, radical: "乙", gifFile: "kyuu.gif" },
    { character: "十", meaning: "Ten", romaji: "juu / tou", strokes: 2, radical: "十", gifFile: "juu.gif" },
    { character: "百", meaning: "Hundred", romaji: "hyaku", strokes: 6, radical: "白", gifFile: "hyaku.gif" },
    { character: "千", meaning: "Thousand", romaji: "sen / chi", strokes: 3, radical: "十", gifFile: "sen.gif" },
    { character: "万", meaning: "Ten Thousand", romaji: "man / ban", strokes: 3, radical: "一", gifFile: "man.gif" },
    { character: "円", meaning: "Yen / Circle", romaji: "en / maru", strokes: 4, radical: "冂", gifFile: "en.gif" },
    
    // Days of the Week & Elements
    { character: "日", meaning: "Sun / Day", romaji: "nichi / hi", strokes: 4, radical: "日", gifFile: "nichi.gif" },
    { character: "月", meaning: "Moon / Month", romaji: "getsu / tsuki", strokes: 4, radical: "月", gifFile: "getsu.gif" },
    { character: "火", meaning: "Fire", romaji: "ka / hi", strokes: 4, radical: "火", gifFile: "ka.gif" },
    { character: "水", meaning: "Water", romaji: "sui / mizu", strokes: 4, radical: "水", gifFile: "sui.gif" },
    { character: "木", meaning: "Tree / Wood", romaji: "moku / ki", strokes: 4, radical: "木", gifFile: "moku.gif" },
    { character: "金", meaning: "Gold / Money", romaji: "kin / kane", strokes: 8, radical: "金", gifFile: "kin.gif" },
    { character: "土", meaning: "Earth / Soil", romaji: "do / tsuchi", strokes: 3, radical: "土", gifFile: "do.gif" },
    { character: "曜", meaning: "Day of the week", romaji: "you", strokes: 18, radical: "日", gifFile: "you.gif" },

    // People & Family
    { character: "人", meaning: "Person", romaji: "jin / hito", strokes: 2, radical: "人", gifFile: "jin.gif" },
    { character: "男", meaning: "Man", romaji: "dan / otoko", strokes: 7, radical: "田", gifFile: "dan.gif" },
    { character: "女", meaning: "Woman", romaji: "jo / onna", strokes: 3, radical: "女", gifFile: "jo.gif" },
    { character: "子", meaning: "Child", romaji: "shi / ko", strokes: 3, radical: "子", gifFile: "ko.gif" },
    { character: "父", meaning: "Father", romaji: "fu / chichi", strokes: 4, radical: "父", gifFile: "chichi.gif" },
    { character: "母", meaning: "Mother", romaji: "bo / haha", strokes: 5, radical: "毋", gifFile: "haha.gif" },
    { character: "友", meaning: "Friend", romaji: "yuu / tomo", strokes: 4, radical: "又", gifFile: "tomo.gif" },

    // Body Parts
    { character: "目", meaning: "Eye", romaji: "moku / me", strokes: 5, radical: "目", gifFile: "me.gif" },
    { character: "口", meaning: "Mouth", romaji: "kou / kuchi", strokes: 3, radical: "口", gifFile: "kuchi.gif" },
    { character: "耳", meaning: "Ear", romaji: "ji / mimi", strokes: 6, radical: "耳", gifFile: "mimi.gif" },
    { character: "手", meaning: "Hand", romaji: "shu / te", strokes: 4, radical: "手", gifFile: "te.gif" },
    { character: "足", meaning: "Foot / Leg", romaji: "soku / ashi", strokes: 7, radical: "足", gifFile: "ashi.gif" },

    // Directions & Positions
    { character: "上", meaning: "Up / Above", romaji: "jou / ue", strokes: 3, radical: "一", gifFile: "ue.gif" },
    { character: "下", meaning: "Down / Below", romaji: "ka / shita", strokes: 3, radical: "一", gifFile: "shita.gif" },
    { character: "左", meaning: "Left", romaji: "sa / hidari", strokes: 5, radical: "工", gifFile: "hidari.gif" },
    { character: "右", meaning: "Right", romaji: "uu / migi", strokes: 5, radical: "口", gifFile: "migi.gif" },
    { character: "中", meaning: "Middle / Inside", romaji: "chuu / naka", strokes: 4, radical: "丨", gifFile: "naka.gif" },
    { character: "前", meaning: "Before / Front", romaji: "zen / mae", strokes: 9, radical: "刀", gifFile: "mae.gif" },
    { character: "後", meaning: "After / Behind", romaji: "go / ushiro", strokes: 9, radical: "彳", gifFile: "ushiro.gif" },
    { character: "東", meaning: "East", romaji: "tou / higashi", strokes: 8, radical: "木", gifFile: "higashi.gif" },
    { character: "西", meaning: "West", romaji: "sei / nishi", strokes: 6, radical: "襾", gifFile: "nishi.gif" },
    { character: "南", meaning: "South", romaji: "nan / minami", strokes: 9, radical: "十", gifFile: "minami.gif" },
    { character: "北", meaning: "North", romaji: "hoku / kita", strokes: 5, radical: "匕", gifFile: "kita.gif" },
    { character: "外", meaning: "Outside", romaji: "gai / soto", strokes: 5, radical: "夕", gifFile: "soto.gif" },

    // Nature & Environment
    { character: "山", meaning: "Mountain", romaji: "san / yama", strokes: 3, radical: "山", gifFile: "yama.gif" },
    { character: "川", meaning: "River", romaji: "sen / kawa", strokes: 3, radical: "巛", gifFile: "kawa.gif" },
    { character: "田", meaning: "Rice Field", romaji: "den / ta", strokes: 5, radical: "田", gifFile: "ta.gif" },
    { character: "天", meaning: "Heaven / Sky", romaji: "ten / ame", strokes: 4, radical: "大", gifFile: "ten.gif" },
    { character: "気", meaning: "Spirit / Air", romaji: "ki", strokes: 6, radical: "气", gifFile: "ki.gif" },
    { character: "空", meaning: "Sky / Empty", romaji: "kuu / sora", strokes: 8, radical: "穴", gifFile: "sora.gif" },
    { character: "雨", meaning: "Rain", romaji: "u / ame", strokes: 8, radical: "雨", gifFile: "ame.gif" },
    { character: "花", meaning: "Flower", romaji: "ka / hana", strokes: 7, radical: "艸", gifFile: "hana.gif" },

    // Actions & Verbs
    { character: "行", meaning: "To Go", romaji: "kou / i.ku", strokes: 6, radical: "行", gifFile: "iku.gif" },
    { character: "来", meaning: "To Come", romaji: "rai / ku.ru", strokes: 7, radical: "木", gifFile: "kuru.gif" },
    { character: "食", meaning: "To Eat", romaji: "shoku / ta.beru", strokes: 9, radical: "食", gifFile: "taberu.gif" },
    { character: "飲", meaning: "To Drink", romaji: "in / no.mu", strokes: 12, radical: "食", gifFile: "nomu.gif" },
    { character: "見", meaning: "To See", romaji: "ken / mi.ru", strokes: 7, radical: "見", gifFile: "miru.gif" },
    { character: "聞", meaning: "To Hear / Listen", romaji: "bun / ki.ku", strokes: 14, radical: "耳", gifFile: "kiku.gif" },
    { character: "話", meaning: "To Speak", romaji: "wa / hana.su", strokes: 13, radical: "言", gifFile: "hanasu.gif" },
    { character: "読", meaning: "To Read", romaji: "doku / yo.mu", strokes: 14, radical: "言", gifFile: "yomu.gif" },
    { character: "書", meaning: "To Write", romaji: "sho / ka.ku", strokes: 10, radical: "曰", gifFile: "kaku.gif" },
    { character: "買", meaning: "To Buy", romaji: "bai / ka.u", strokes: 12, radical: "貝", gifFile: "kau.gif" },
    { character: "出", meaning: "To Exit / Leave", romaji: "shutsu / de.ru", strokes: 5, radical: "凵", gifFile: "deru.gif" },
    { character: "入", meaning: "To Enter", romaji: "nyuu / hai.ru", strokes: 2, radical: "入", gifFile: "hairu.gif" },
    { character: "休", meaning: "To Rest", romaji: "kyuu / yasu.mu", strokes: 6, radical: "人", gifFile: "yasumu.gif" },
    { character: "立", meaning: "To Stand", romaji: "ritsu / ta.tsu", strokes: 5, radical: "立", gifFile: "tatsu.gif" },
    { character: "生", meaning: "Life / To be born", romaji: "sei / i.kiru", strokes: 5, radical: "生", gifFile: "ikiru.gif" },

    // Adjectives & States
    { character: "大", meaning: "Big", romaji: "dai / oo.kii", strokes: 3, radical: "大", gifFile: "ookii.gif" },
    { character: "小", meaning: "Small", romaji: "shou / chii.sai", strokes: 3, radical: "小", gifFile: "chiisai.gif" },
    { character: "高", meaning: "High / Expensive", romaji: "kou / taka.i", strokes: 10, radical: "高", gifFile: "takai.gif" },
    { character: "安", meaning: "Cheap / Safe", romaji: "an / yasu.i", strokes: 6, radical: "宀", gifFile: "yasui.gif" },
    { character: "新", meaning: "New", romaji: "shin / atara.shii", strokes: 13, radical: "斤", gifFile: "atarashii.gif" },
    { character: "古", meaning: "Old", romaji: "ko / furu.i", strokes: 5, radical: "口", gifFile: "furui.gif" },
    { character: "長", meaning: "Long", romaji: "chou / naga.i", strokes: 8, radical: "長", gifFile: "nagai.gif" },
    { character: "多", meaning: "Many", romaji: "ta / oo.i", strokes: 6, radical: "夕", gifFile: "ooi.gif" },
    { character: "少", meaning: "Few / Little", romaji: "shou / suku.nai", strokes: 4, radical: "小", gifFile: "sukunai.gif" },
    { character: "白", meaning: "White", romaji: "haku / shiro", strokes: 5, radical: "白", gifFile: "shiro.gif" },

    // Time & Concepts
    { character: "今", meaning: "Now", romaji: "kon / ima", strokes: 4, radical: "人", gifFile: "ima.gif" },
    { character: "時", meaning: "Time / Hour", romaji: "ji / toki", strokes: 10, radical: "日", gifFile: "toki.gif" },
    { character: "分", meaning: "Minute / To divide", romaji: "fun / wa.karu", strokes: 4, radical: "八", gifFile: "fun.gif" },
    { character: "半", meaning: "Half", romaji: "han / naka.ba", strokes: 5, radical: "十", gifFile: "han.gif" },
    { character: "間", meaning: "Interval / Between", romaji: "kan / aida", strokes: 12, radical: "門", gifFile: "aida.gif" },
    { character: "週", meaning: "Week", romaji: "shuu", strokes: 11, radical: "辶", gifFile: "shuu.gif" },
    { character: "年", meaning: "Year", romaji: "nen / toshi", strokes: 6, radical: "干", gifFile: "nen.gif" },
    { character: "何", meaning: "What", romaji: "ka / nani", strokes: 7, radical: "人", gifFile: "nani.gif" },

    // Education & Language
    { character: "学", meaning: "To Study / Learn", romaji: "gaku / mana.bu", strokes: 8, radical: "子", gifFile: "manabu.gif" },
    { character: "校", meaning: "School", romaji: "kou", strokes: 10, radical: "木", gifFile: "kou.gif" },
    { character: "先", meaning: "Before / Ahead", romaji: "sen / saki", strokes: 6, radical: "儿", gifFile: "saki.gif" },
    { character: "語", meaning: "Language / Word", romaji: "go / kata.ru", strokes: 14, radical: "言", gifFile: "go.gif" },
    { character: "本", meaning: "Book / Origin", romaji: "hon / moto", strokes: 5, radical: "木", gifFile: "hon.gif" },
    { character: "名", meaning: "Name", romaji: "mei / na", strokes: 6, radical: "口", gifFile: "na.gif" }
  ]
};

export const kanjiByLevel_N4: Record<string, KanjiItem[]> = {
  "N4": [
    // Family & People
    { character: "兄", meaning: "Older Brother", romaji: "kei / ani", strokes: 5, radical: "儿", gifFile: "ani.gif" },
    { character: "弟", meaning: "Younger Brother", romaji: "tei / otouto", strokes: 7, radical: "弓", gifFile: "otouto.gif" },
    { character: "姉", meaning: "Older Sister", romaji: "shi / ane", strokes: 8, radical: "女", gifFile: "ane.gif" },
    { character: "妹", meaning: "Younger Sister", romaji: "mai / imouto", strokes: 8, radical: "女", gifFile: "imouto.gif" },
    { character: "親", meaning: "Parent / Intimate", romaji: "shin / oya", strokes: 16, radical: "見", gifFile: "oya.gif" },
    { character: "族", meaning: "Tribe / Family", romaji: "zoku", strokes: 11, radical: "方", gifFile: "zoku.gif" },
    { character: "主", meaning: "Master / Main", romaji: "shu / nushi", strokes: 5, radical: "丶", gifFile: "nushi.gif" },
    { character: "者", meaning: "Person", romaji: "sha / mono", strokes: 8, radical: "老", gifFile: "mono.gif" },
    { character: "員", meaning: "Member", romaji: "in", strokes: 10, radical: "口", gifFile: "in.gif" },
    { character: "代", meaning: "Substitute / Age", romaji: "dai / ka.waru", strokes: 5, radical: "人", gifFile: "kawaru.gif" },

    // Places, Buildings & Geography
    { character: "京", meaning: "Capital", romaji: "kyou", strokes: 8, radical: "亠", gifFile: "kyou.gif" },
    { character: "都", meaning: "Metropolis", romaji: "to / miyako", strokes: 11, radical: "邑", gifFile: "miyako.gif" },
    { character: "町", meaning: "Town", romaji: "chou / machi", strokes: 7, radical: "田", gifFile: "machi.gif" },
    { character: "区", meaning: "Ward / District", romaji: "ku", strokes: 4, radical: "匚", gifFile: "ku.gif" },
    { character: "海", meaning: "Sea / Ocean", romaji: "kai / umi", strokes: 9, radical: "水", gifFile: "umi.gif" },
    { character: "界", meaning: "World / Boundary", romaji: "kai", strokes: 9, radical: "田", gifFile: "kai.gif" },
    { character: "院", meaning: "Institution", romaji: "in", strokes: 10, radical: "阜", gifFile: "in_institution.gif" },
    { character: "館", meaning: "Building / Hall", romaji: "kan", strokes: 16, radical: "食", gifFile: "kan.gif" },
    { character: "室", meaning: "Room", romaji: "shitsu / muro", strokes: 9, radical: "宀", gifFile: "shitsu.gif" },
    { character: "堂", meaning: "Hall", romaji: "dou", strokes: 11, radical: "土", gifFile: "dou.gif" },
    { character: "店", meaning: "Shop / Store", romaji: "ten / mise", strokes: 8, radical: "广", gifFile: "mise.gif" },
    { character: "屋", meaning: "Roof / Shop", romaji: "oku / ya", strokes: 9, radical: "尸", gifFile: "ya.gif" },
    { character: "場", meaning: "Place / Location", romaji: "jou / ba", strokes: 12, radical: "土", gifFile: "ba.gif" },

    // Action Verbs
    { character: "会", meaning: "To Meet", romaji: "kai / a.u", strokes: 6, radical: "人", gifFile: "au.gif" },
    { character: "思", meaning: "To Think", romaji: "shi / omo.u", strokes: 9, radical: "心", gifFile: "omou.gif" },
    { character: "考", meaning: "To Consider", romaji: "kou / kanga.eru", strokes: 6, radical: "老", gifFile: "kangaeru.gif" },
    { character: "知", meaning: "To Know", romaji: "chi / shi.ru", strokes: 8, radical: "矢", gifFile: "shiru.gif" },
    { character: "使", meaning: "To Use", romaji: "shi / tsuka.u", strokes: 8, radical: "人", gifFile: "tsukau.gif" },
    { character: "作", meaning: "To Make", romaji: "saku / tsuku.ru", strokes: 7, radical: "人", gifFile: "tsukuru.gif" },
    { character: "働", meaning: "To Work", romaji: "dou / hatara.ku", strokes: 13, radical: "人", gifFile: "hataraku.gif" },
    { character: "持", meaning: "To Hold", romaji: "ji / mo.tsu", strokes: 9, radical: "手", gifFile: "motsu.gif" },
    { character: "待", meaning: "To Wait", romaji: "tai / ma.tsu", strokes: 9, radical: "彳", gifFile: "matsu.gif" },
    { character: "止", meaning: "To Stop", romaji: "shi / to.maru", strokes: 4, radical: "止", gifFile: "tomaru.gif" },
    { character: "歩", meaning: "To Walk", romaji: "ho / aru.ku", strokes: 8, radical: "止", gifFile: "aruku.gif" },
    { character: "走", meaning: "To Run", romaji: "sou / hashi.ru", strokes: 7, radical: "走", gifFile: "hashiru.gif" },
    { character: "起", meaning: "To Wake Up", romaji: "ki / o.kiru", strokes: 10, radical: "走", gifFile: "okiru.gif" },
    { character: "帰", meaning: "To Return", romaji: "ki / kae.ru", strokes: 10, radical: "彐", gifFile: "kaeru.gif" },
    { character: "乗", meaning: "To Ride", romaji: "jou / no.ru", strokes: 9, radical: "丿", gifFile: "noru.gif" },
    { character: "始", meaning: "To Begin", romaji: "shi / haji.meru", strokes: 8, radical: "女", gifFile: "hajimeru.gif" },
    { character: "終", meaning: "To End", romaji: "shuu / o.waru", strokes: 11, radical: "糸", gifFile: "owaru.gif" },
    { character: "売", meaning: "To Sell", romaji: "bai / u.ru", strokes: 7, radical: "士", gifFile: "uru.gif" },
    { character: "貸", meaning: "To Lend", romaji: "tai / ka.su", strokes: 12, radical: "貝", gifFile: "kasu.gif" },
    { character: "借", meaning: "To Borrow", romaji: "shaku / ka.riru", strokes: 10, radical: "人", gifFile: "kariru.gif" },
    { character: "送", meaning: "To Send", romaji: "sou / oku.ru", strokes: 9, radical: "辶", gifFile: "okuru.gif" },
    { character: "払", meaning: "To Pay", romaji: "futsu / hara.u", strokes: 5, radical: "手", gifFile: "harau.gif" },
    { character: "切", meaning: "To Cut", romaji: "setsu / ki.ru", strokes: 4, radical: "刀", gifFile: "kiru.gif" },
    { character: "洗", meaning: "To Wash", romaji: "sen / ara.u", strokes: 9, radical: "水", gifFile: "arau.gif" },
    { character: "急", meaning: "To Hurry", romaji: "kyuu / iso.gu", strokes: 9, radical: "心", gifFile: "isogu.gif" },
    { character: "開", meaning: "To Open", romaji: "kai / a.keru", strokes: 12, radical: "門", gifFile: "akeru.gif" },
    { character: "閉", meaning: "To Close", romaji: "hei / shi.meru", strokes: 11, radical: "門", gifFile: "shimeru.gif" },
    { character: "建", meaning: "To Build", romaji: "ken / ta.teru", strokes: 9, radical: "廴", gifFile: "tateru.gif" },

    // Adjectives & States
    { character: "悪", meaning: "Bad / Evil", romaji: "aku / waru.i", strokes: 11, radical: "心", gifFile: "warui.gif" },
    { character: "重", meaning: "Heavy", romaji: "juu / omo.i", strokes: 9, radical: "里", gifFile: "omoi.gif" },
    { character: "軽", meaning: "Light (weight)", romaji: "kei / karu.i", strokes: 12, radical: "車", gifFile: "karui.gif" },
    { character: "早", meaning: "Early / Fast", romaji: "sou / haya.i", strokes: 6, radical: "日", gifFile: "hayai.gif" },
    { character: "遅", meaning: "Late / Slow", romaji: "chi / oso.i", strokes: 12, radical: "辶", gifFile: "osoi.gif" },
    { character: "暑", meaning: "Hot (weather)", romaji: "sho / atsu.i", strokes: 12, radical: "日", gifFile: "atsui.gif" },
    { character: "寒", meaning: "Cold (weather)", romaji: "kan / samu.i", strokes: 12, radical: "宀", gifFile: "samui.gif" },
    { character: "短", meaning: "Short", romaji: "tan / mijika.i", strokes: 12, radical: "矢", gifFile: "mijikai.gif" },
    { character: "低", meaning: "Low", romaji: "tei / hiku.i", strokes: 7, radical: "人", gifFile: "hikui.gif" },
    { character: "暗", meaning: "Dark", romaji: "an / kura.i", strokes: 13, radical: "日", gifFile: "kurai.gif" },
    { character: "広", meaning: "Wide / Spacious", romaji: "kou / hiro.i", strokes: 5, radical: "广", gifFile: "hiroi.gif" },
    { character: "遠", meaning: "Far", romaji: "en / too.i", strokes: 13, radical: "辶", gifFile: "tooi.gif" },
    { character: "近", meaning: "Near", romaji: "kin / chika.i", strokes: 7, radical: "辶", gifFile: "chikai.gif" },
    { character: "強", meaning: "Strong", romaji: "kyou / tsuyo.i", strokes: 11, radical: "弓", gifFile: "tsuyoi.gif" },
    { character: "弱", meaning: "Weak", romaji: "jaku / yowa.i", strokes: 10, radical: "弓", gifFile: "yowai.gif" },
    { character: "正", meaning: "Correct", romaji: "sei / tada.shii", strokes: 5, radical: "止", gifFile: "tadashii.gif" },
    { character: "同", meaning: "Same", romaji: "dou / ona.ji", strokes: 6, radical: "口", gifFile: "onaji.gif" },
    { character: "犬", meaning: "Dog", romaji: "ken / inu", strokes: 4, radical: "犬", gifFile: "inu.gif" },
    { character: "鳥", meaning: "Bird", romaji: "chou / tori", strokes: 11, radical: "鳥", gifFile: "tori.gif" },
    { character: "牛", meaning: "Cow", romaji: "gyuu / ushi", strokes: 4, radical: "牛", gifFile: "ushi.gif" },
    { character: "肉", meaning: "Meat", romaji: "niku", strokes: 6, radical: "肉", gifFile: "niku.gif" },
    { character: "魚", meaning: "Fish", romaji: "gyo / sakana", strokes: 11, radical: "魚", gifFile: "sakana.gif" },
    { character: "茶", meaning: "Tea", romaji: "cha / sa", strokes: 9, radical: "艸", gifFile: "cha.gif" },
    { character: "色", meaning: "Color", romaji: "shoku / iro", strokes: 6, radical: "色", gifFile: "iro.gif" },
    { character: "黒", meaning: "Black", romaji: "koku / kuro", strokes: 11, radical: "黒", gifFile: "kuro.gif" },
    { character: "青", meaning: "Blue", romaji: "sei / ao", strokes: 8, radical: "青", gifFile: "ao.gif" },
    { character: "赤", meaning: "Red", romaji: "seki / aka", strokes: 7, radical: "赤", gifFile: "aka.gif" },
    { character: "秋", meaning: "Autumn", romaji: "shuu / aki", strokes: 9, radical: "禾", gifFile: "aki.gif" },
    { character: "冬", meaning: "Winter", romaji: "tou / fuyu", strokes: 5, radical: "冫", gifFile: "fuyu.gif" },
    { character: "春", meaning: "Spring", romaji: "shun / haru", strokes: 9, radical: "日", gifFile: "haru.gif" },
    { character: "夏", meaning: "Summer", romaji: "ka / natsu", strokes: 10, radical: "夂", gifFile: "natsu.gif" },
    { character: "風", meaning: "Wind", romaji: "fuu / kaze", strokes: 9, radical: "風", gifFile: "kaze.gif" },
    { character: "音", meaning: "Sound", romaji: "on / oto", strokes: 9, radical: "音", gifFile: "oto.gif" },
    { character: "林", meaning: "Woods", romaji: "rin / hayashi", strokes: 8, radical: "木", gifFile: "hayashi.gif" },
    { character: "森", meaning: "Forest", romaji: "shin / mori", strokes: 12, radical: "木", gifFile: "mori.gif" },

    // Body & Directions
    { character: "心", meaning: "Heart / Mind", romaji: "shin / kokoro", strokes: 4, radical: "心", gifFile: "kokoro.gif" },
    { character: "顔", meaning: "Face", romaji: "gan / kao", strokes: 18, radical: "頁", gifFile: "kao.gif" },
    { character: "首", meaning: "Neck", romaji: "shu / kubi", strokes: 9, radical: "首", gifFile: "kubi.gif" },
    { character: "声", meaning: "Voice", romaji: "sei / koe", strokes: 7, radical: "士", gifFile: "koe.gif" },
    { character: "体", meaning: "Body", romaji: "tai / karada", strokes: 7, radical: "人", gifFile: "karada.gif" },
    { character: "頭", meaning: "Head", romaji: "tou / atama", strokes: 16, radical: "頁", gifFile: "atama.gif" },
    
    // Abstract Concepts & Education
    { character: "愛", meaning: "Love", romaji: "ai", strokes: 13, radical: "心", gifFile: "ai.gif" },
    { character: "答", meaning: "Answer", romaji: "tou / kota.eru", strokes: 12, radical: "竹", gifFile: "kotaeru.gif" },
    { character: "問", meaning: "Question", romaji: "mon / to.u", strokes: 11, radical: "門", gifFile: "tou.gif" },
    { character: "題", meaning: "Topic / Problem", romaji: "dai", strokes: 18, radical: "頁", gifFile: "dai.gif" },
    { character: "字", meaning: "Character / Letter", romaji: "ji", strokes: 6, radical: "子", gifFile: "ji.gif" },
    { character: "文", meaning: "Sentence / Literature", romaji: "bun", strokes: 4, radical: "文", gifFile: "bun.gif" },
    { character: "紙", meaning: "Paper", romaji: "shi / kami", strokes: 10, radical: "糸", gifFile: "kami.gif" },
    { character: "計", meaning: "To Measure / Plan", romaji: "kei / haka.ru", strokes: 9, radical: "言", gifFile: "hakaru.gif" },
    { character: "医", meaning: "Doctor / Medicine", romaji: "i", strokes: 7, radical: "匚", gifFile: "i.gif" },
    { character: "者", meaning: "Person (Professional)", romaji: "sha / mono", strokes: 8, radical: "老", gifFile: "mono_prof.gif" },
    { character: "図", meaning: "Drawing / Diagram", romaji: "zu / hakaru", strokes: 7, radical: "囗", gifFile: "zu.gif" },
    { character: "歌", meaning: "Song", romaji: "ka / uta", strokes: 14, radical: "欠", gifFile: "uta.gif" },
    { character: "楽", meaning: "Music / Comfort", romaji: "gaku / tano.shii", strokes: 13, radical: "木", gifFile: "tanoshii.gif" },
    { character: "病", meaning: "Illness", romaji: "byou / yamai", strokes: 10, radical: "疒", gifFile: "byou.gif" },
    { character: "薬", meaning: "Medicine", romaji: "yaku / kusuri", strokes: 16, radical: "艸", gifFile: "kusuri.gif" },

    // Daily Life & Objects
    { character: "服", meaning: "Clothes", romaji: "fuku", strokes: 8, radical: "月", gifFile: "fuku.gif" },
    { character: "物", meaning: "Thing", romaji: "butsu / mono", strokes: 8, radical: "牛", gifFile: "mono_thing.gif" },
    { character: "夜", meaning: "Night", romaji: "ya / yoru", strokes: 8, radical: "夕", gifFile: "yoru.gif" },
    { character: "昼", meaning: "Noon / Daytime", romaji: "chuu / hiru", strokes: 9, radical: "日", gifFile: "hiru.gif" },
    { character: "朝", meaning: "Morning", romaji: "chou / asa", strokes: 12, radical: "月", gifFile: "asa.gif" },
    { character: "夕", meaning: "Evening", romaji: "seki / yuu", strokes: 3, radical: "夕", gifFile: "yuu.gif" },
    { character: "方", meaning: "Direction / Person", romaji: "hou / kata", strokes: 4, radical: "方", gifFile: "kata.gif" },
    { character: "品", meaning: "Goods / Article", romaji: "hin / shina", strokes: 9, radical: "口", gifFile: "shina.gif" },
    { character: "洋", meaning: "Western / Ocean", romaji: "you", strokes: 9, radical: "水", gifFile: "you.gif" },
    { character: "和", meaning: "Peace / Japanese", romaji: "wa", strokes: 8, radical: "口", gifFile: "wa.gif" }
  ]
};

export const kanjiByLevel_N3: Record<string, KanjiItem[]> = {
  "N3": [
    // Politics, Economics & History
    { character: "政", meaning: "Politics / Government", romaji: "sei / matsurigoto", strokes: 9, radical: "攴", gifFile: "sei.gif" },
    { character: "治", meaning: "Govern / Cure", romaji: "ji / nao.ru", strokes: 8, radical: "水", gifFile: "ji.gif" },
    { character: "経", meaning: "Manage / Pass Through", romaji: "kei / he.ru", strokes: 11, radical: "糸", gifFile: "kei.gif" },
    { character: "済", meaning: "Settle / Relieve", romaji: "sai / su.mu", strokes: 11, radical: "水", gifFile: "sai.gif" },
    { character: "歴", meaning: "Curriculum / History", romaji: "reki", strokes: 14, radical: "止", gifFile: "reki.gif" },
    { character: "史", meaning: "History", romaji: "shi", strokes: 5, radical: "口", gifFile: "shi_history.gif" },
    
    // Education, Science & Research
    { character: "育", meaning: "Nurture / Bring Up", romaji: "iku / soda.tsu", strokes: 8, radical: "肉", gifFile: "iku.gif" },
    { character: "化", meaning: "Change / Transform", romaji: "ka / ba.keru", strokes: 4, radical: "匕", gifFile: "ka_change.gif" },
    { character: "理", meaning: "Reason / Logic", romaji: "ri", strokes: 11, radical: "玉", gifFile: "ri.gif" },
    { character: "科", meaning: "Department / Course", romaji: "ka", strokes: 9, radical: "禾", gifFile: "ka_dept.gif" },
    { character: "数", meaning: "Number / Count", romaji: "suu / kazu", strokes: 13, radical: "攴", gifFile: "suu.gif" },
    { character: "期", meaning: "Period / Time", romaji: "ki", strokes: 12, radical: "月", gifFile: "ki.gif" },
    { character: "機", meaning: "Machine / Opportunity", romaji: "ki / hata", strokes: 16, radical: "木", gifFile: "ki_machine.gif" },
    { character: "習", meaning: "Learn", romaji: "shuu / nara.u", strokes: 11, radical: "羽", gifFile: "shuu.gif" },
    { character: "練", meaning: "Practice / Knead", romaji: "ren / ne.ru", strokes: 14, radical: "糸", gifFile: "ren.gif" },
    { character: "研", meaning: "Sharpen / Study", romaji: "ken / to.gu", strokes: 9, radical: "石", gifFile: "ken.gif" },
    { character: "究", meaning: "Research", romaji: "kyuu / kiwa.meru", strokes: 7, radical: "穴", gifFile: "kyuu.gif" },
    { character: "験", meaning: "Examine / Test", romaji: "ken", strokes: 18, radical: "馬", gifFile: "ken_test.gif" },

    // Mind, Thoughts & Ideas
    { character: "必", meaning: "Certain / Inevitable", romaji: "hitsu / kanara.zu", strokes: 5, radical: "心", gifFile: "hitsu.gif" },
    { character: "要", meaning: "Need / Main Point", romaji: "you / i.ru", strokes: 9, radical: "襾", gifFile: "you.gif" },
    { character: "覚", meaning: "Memorize / Awake", romaji: "kaku / obo.eru", strokes: 12, radical: "見", gifFile: "kaku.gif" },
    { character: "忘", meaning: "Forget", romaji: "bou / wasu.reru", strokes: 7, radical: "心", gifFile: "bou.gif" },
    { character: "決", meaning: "Decide", romaji: "ketsu / ki.meru", strokes: 7, radical: "水", gifFile: "ketsu.gif" },
    { character: "定", meaning: "Determine / Fix", romaji: "tei / sada.meru", strokes: 8, radical: "宀", gifFile: "tei.gif" },
    { character: "意", meaning: "Idea / Mind", romaji: "i", strokes: 13, radical: "心", gifFile: "i.gif" },
    { character: "想", meaning: "Concept / Think", romaji: "sou", strokes: 13, radical: "心", gifFile: "sou.gif" },
    { character: "像", meaning: "Statue / Image", romaji: "zou", strokes: 14, radical: "人", gifFile: "zou.gif" },
    { character: "信", meaning: "Trust / Believe", romaji: "shin / shin.jiru", strokes: 9, radical: "人", gifFile: "shin.gif" },
    
    // Actions, Outcomes & States
    { character: "変", meaning: "Change / Strange", romaji: "hen / ka.waru", strokes: 9, radical: "夂", gifFile: "hen.gif" },
    { character: "結", meaning: "Tie / Bind", romaji: "ketsu / musu.bu", strokes: 12, radical: "糸", gifFile: "ketsu.gif" },
    { character: "果", meaning: "Fruit / Reward", romaji: "ka / ha.tasu", strokes: 8, radical: "木", gifFile: "ka_fruit.gif" },
    { character: "実", meaning: "Truth / Fruit", romaji: "jitsu / mi", strokes: 8, radical: "宀", gifFile: "jitsu.gif" },
    { character: "留", meaning: "Fasten / Halt", romaji: "ryuu / to.meru", strokes: 10, radical: "田", gifFile: "ryuu.gif" },
    { character: "注", meaning: "Pour / Concentrate", romaji: "chuu / soso.gu", strokes: 8, radical: "水", gifFile: "chuu.gif" },
    { character: "説", meaning: "Explain / Theory", romaji: "setsu / to.ku", strokes: 14, radical: "言", gifFile: "setsu.gif" },
    { character: "案", meaning: "Plan / Idea", romaji: "an", strokes: 10, radical: "木", gifFile: "an.gif" },
    { character: "勝", meaning: "Win / Victory", romaji: "shou / ka.tsu", strokes: 12, radical: "力", gifFile: "shou.gif" },
    { character: "負", meaning: "Lose / Defeat", romaji: "fu / ma.keru", strokes: 9, radical: "貝", gifFile: "fu.gif" },
    { character: "賛", meaning: "Approve / Praise", romaji: "san", strokes: 15, radical: "貝", gifFile: "san_approve.gif" },
    { character: "成", meaning: "Become / Form", romaji: "sei / na.ru", strokes: 6, radical: "戈", gifFile: "sei_become.gif" },
    { character: "絶", meaning: "Sever / Absolute", romaji: "zetsu / ta.tsu", strokes: 12, radical: "糸", gifFile: "zetsu.gif" },
    { character: "対", meaning: "Opposite / Versus", romaji: "tai", strokes: 7, radical: "寸", gifFile: "tai.gif" },
    { character: "続", meaning: "Continue", romaji: "zoku / tsudu.ku", strokes: 13, radical: "糸", gifFile: "zoku.gif" },
    { character: "辞", meaning: "Resign / Word", romaji: "ji / ya.meru", strokes: 13, radical: "辛", gifFile: "ji_resign.gif" },

    // Work, Business & Economy
    { character: "業", meaning: "Business / Vocation", romaji: "gyou / waza", strokes: 13, radical: "木", gifFile: "gyou.gif" },
    { character: "務", meaning: "Task / Duty", romaji: "mu / tsuto.meru", strokes: 11, radical: "力", gifFile: "mu_task.gif" },
    { character: "局", meaning: "Bureau / Department", romaji: "kyoku", strokes: 7, radical: "尸", gifFile: "kyoku.gif" },
    { character: "役", meaning: "Role / Duty", romaji: "yaku", strokes: 7, radical: "彳", gifFile: "yaku.gif" },
    { character: "職", meaning: "Employment / Job", romaji: "shoku", strokes: 18, radical: "耳", gifFile: "shoku.gif" },
    { character: "任", meaning: "Responsibility / Entrust", romaji: "nin / maka.seru", strokes: 6, radical: "人", gifFile: "nin.gif" },
    { character: "営", meaning: "Manage / Camp", romaji: "ei / itona.mu", strokes: 12, radical: "口", gifFile: "ei.gif" },
    { character: "費", meaning: "Expense / Cost", romaji: "hi / tsui.yasu", strokes: 12, radical: "貝", gifFile: "hi_expense.gif" },
    { character: "算", meaning: "Calculate", romaji: "san", strokes: 14, radical: "竹", gifFile: "san_calc.gif" },
    { character: "財", meaning: "Wealth / Property", romaji: "zai / sai", strokes: 10, radical: "貝", gifFile: "zai.gif" },
    { character: "値", meaning: "Value / Price", romaji: "chi / atai", strokes: 10, radical: "人", gifFile: "chi_value.gif" },
    { character: "割", meaning: "Proportion / Divide", romaji: "katsu / wa.ru", strokes: 12, radical: "刀", gifFile: "waru.gif" },

    // Places & Nature
    { character: "庭", meaning: "Garden", romaji: "tei / niwa", strokes: 10, radical: "广", gifFile: "niwa.gif" },
    { character: "階", meaning: "Floor / Stairs", romaji: "kai", strokes: 12, radical: "阜", gifFile: "kai_floor.gif" },
    { character: "橋", meaning: "Bridge", romaji: "kyou / hashi", strokes: 16, radical: "木", gifFile: "hashi.gif" },
    { character: "港", meaning: "Port / Harbor", romaji: "kou / minato", strokes: 12, radical: "水", gifFile: "minato.gif" },
    { character: "岸", meaning: "Coast / Shore", romaji: "gan / kishi", strokes: 8, radical: "山", gifFile: "kishi.gif" },
    { character: "島", meaning: "Island", romaji: "tou / shima", strokes: 10, radical: "山", gifFile: "shima.gif" },
    { character: "波", meaning: "Wave", romaji: "ha / nami", strokes: 8, radical: "水", gifFile: "nami.gif" },
    { character: "氷", meaning: "Ice", romaji: "hyou / koori", strokes: 5, radical: "水", gifFile: "koori.gif" },
    { character: "星", meaning: "Star", romaji: "sei / hoshi", strokes: 9, radical: "日", gifFile: "hoshi.gif" },
    { character: "雪", meaning: "Snow", romaji: "setsu / yuki", strokes: 11, radical: "雨", gifFile: "yuki.gif" },
    { character: "雲", meaning: "Cloud", romaji: "un / kumo", strokes: 12, radical: "雨", gifFile: "kumo.gif" },
    { character: "陽", meaning: "Sunshine / Yang", romaji: "you / hi", strokes: 12, radical: "阜", gifFile: "you_sun.gif" },

    // Movement & Journey
    { character: "進", meaning: "Advance", romaji: "shin / susu.mu", strokes: 11, radical: "辶", gifFile: "susumu.gif" },
    { character: "退", meaning: "Retreat", romaji: "tai / shirizo.ku", strokes: 9, radical: "辶", gifFile: "shirizoku.gif" },
    { character: "登", meaning: "Climb", romaji: "tou / nobo.ru", strokes: 12, radical: "癶", gifFile: "noboru.gif" },
    { character: "落", meaning: "Fall / Drop", romaji: "raku / o.chiru", strokes: 12, radical: "艸", gifFile: "ochiru.gif" },
    { character: "追", meaning: "Chase / Follow", romaji: "tsui / o.u", strokes: 9, radical: "辶", gifFile: "ou.gif" },
    { character: "逃", meaning: "Escape", romaji: "tou / ni.geru", strokes: 9, radical: "辶", gifFile: "nigeru.gif" },
    { character: "迷", meaning: "Lost / Hesitate", romaji: "mei / mayo.u", strokes: 9, radical: "辶", gifFile: "mayou.gif" },
    { character: "過", meaning: "Pass / Exceed", romaji: "ka / su.giru", strokes: 12, radical: "辶", gifFile: "sugiru.gif" },
    { character: "返", meaning: "Return / Answer", romaji: "hen / kae.su", strokes: 7, radical: "辶", gifFile: "kaesu.gif" },
    { character: "迎", meaning: "Welcome / Meet", romaji: "gei / muka.eru", strokes: 7, radical: "辶", gifFile: "mukaeru.gif" },
    { character: "連", meaning: "Take along / Connect", romaji: "ren / tsura.neru", strokes: 10, radical: "辶", gifFile: "tsuraneru.gif" },
    { character: "渡", meaning: "Cross / Hand over", romaji: "to / wata.ru", strokes: 12, radical: "水", gifFile: "wataru.gif" },

    // Communication & Connections
    { character: "絡", meaning: "Entangle / Connect", romaji: "raku / kara.mu", strokes: 11, radical: "糸", gifFile: "karamu.gif" },
    { character: "交", meaning: "Mix / Intersect", romaji: "kou / maji.waru", strokes: 6, radical: "亠", gifFile: "majiwaru.gif" },
    { character: "配", meaning: "Distribute", romaji: "hai / kuba.ru", strokes: 10, radical: "酉", gifFile: "kubaru.gif" },
    { character: "申", meaning: "Speak / Apply (humble)", romaji: "shin / mou.su", strokes: 5, radical: "田", gifFile: "mousu.gif" },
    { character: "頼", meaning: "Request / Trust", romaji: "rai / tano.mu", strokes: 16, radical: "頁", gifFile: "tanomu.gif" },
    { character: "呼", meaning: "Call", romaji: "ko / yo.bu", strokes: 8, radical: "口", gifFile: "yobu.gif" },
    { character: "鳴", meaning: "Chirp / Cry", romaji: "mei / na.ku", strokes: 14, radical: "鳥", gifFile: "naku.gif" },
    { character: "表", meaning: "Surface / Express", romaji: "hyou / omote", strokes: 8, radical: "衣", gifFile: "omote.gif" },
    { character: "現", meaning: "Appear / Present", romaji: "gen / arawa.reru", strokes: 11, radical: "玉", gifFile: "arawareru.gif" },
    { character: "示", meaning: "Show / Indicate", romaji: "ji / shime.su", strokes: 5, radical: "示", gifFile: "shimesu.gif" },
    { character: "伝", meaning: "Transmit / Convey", romaji: "den / tsuta.eru", strokes: 6, radical: "人", gifFile: "tsutaeru.gif" },
    { character: "備", meaning: "Provide / Prepare", romaji: "bi / sona.eru", strokes: 12, radical: "人", gifFile: "sonaeru.gif" },

    // Emotions, Senses & States
    { character: "悲", meaning: "Sad", romaji: "hi / kana.shii", strokes: 12, radical: "心", gifFile: "kanashii.gif" },
    { character: "苦", meaning: "Bitter / Painful", romaji: "ku / kuru.shii", strokes: 8, radical: "艸", gifFile: "kurushii.gif" },
    { character: "痛", meaning: "Pain", romaji: "tsuu / ita.i", strokes: 12, radical: "疒", gifFile: "itai.gif" },
    { character: "疲", meaning: "Tired", romaji: "hi / tsuka.reru", strokes: 10, radical: "疒", gifFile: "tsukareru.gif" },
    { character: "笑", meaning: "Laugh / Smile", romaji: "shou / wara.u", strokes: 10, radical: "竹", gifFile: "warau.gif" },
    { character: "泣", meaning: "Cry", romaji: "kyuu / na.ku", strokes: 8, radical: "水", gifFile: "naku.gif" },
    { character: "怒", meaning: "Angry", romaji: "do / oko.ru", strokes: 9, radical: "心", gifFile: "okoru.gif" },
    { character: "幸", meaning: "Happiness", romaji: "kou / shiawa.se", strokes: 8, radical: "干", gifFile: "shiawase.gif" },
    { character: "若", meaning: "Young", romaji: "jaku / waka.i", strokes: 8, radical: "艸", gifFile: "wakai.gif" },
    { character: "忙", meaning: "Busy", romaji: "bou / isoga.shii", strokes: 6, radical: "心", gifFile: "isogashii.gif" },
    { character: "眠", meaning: "Sleep", romaji: "min / nemu.ru", strokes: 10, radical: "目", gifFile: "nemuru.gif" },
    { character: "息", meaning: "Breath", romaji: "soku / iki", strokes: 10, radical: "心", gifFile: "iki.gif" },

    // Daily Life, Tools & Society
    { character: "具", meaning: "Tool / Ingredient", romaji: "gu", strokes: 8, radical: "八", gifFile: "gu.gif" },
    { character: "箱", meaning: "Box", romaji: "sou / hako", strokes: 15, radical: "竹", gifFile: "hako.gif" },
    { character: "席", meaning: "Seat", romaji: "seki", strokes: 10, radical: "巾", gifFile: "seki.gif" },
    { character: "鉄", meaning: "Iron", romaji: "tetsu", strokes: 13, radical: "金", gifFile: "tetsu.gif" },
    { character: "線", meaning: "Line", romaji: "sen", strokes: 15, radical: "糸", gifFile: "sen.gif" },
    { character: "薬", meaning: "Medicine", romaji: "yaku / kusuri", strokes: 16, radical: "艸", gifFile: "kusuri.gif" },
    { character: "局", meaning: "Bureau / Office", romaji: "kyoku", strokes: 7, radical: "尸", gifFile: "kyoku.gif" },
    { character: "民", meaning: "People / Nation", romaji: "min / tami", strokes: 5, radical: "氏", gifFile: "tami.gif" },
    { character: "客", meaning: "Guest / Customer", romaji: "kyaku", strokes: 9, radical: "宀", gifFile: "kyaku.gif" },
    { character: "酒", meaning: "Alcohol / Sake", romaji: "shu / sake", strokes: 10, radical: "酉", gifFile: "sake.gif" },
    { character: "様", meaning: "Appearance / Mr./Mrs.", romaji: "you / sama", strokes: 14, radical: "木", gifFile: "sama.gif" },
    { character: "術", meaning: "Art / Technique", romaji: "jutsu", strokes: 11, radical: "行", gifFile: "jutsu.gif" },

    // Physical Actions
    { character: "泳", meaning: "Swim", romaji: "ei / oyo.gu", strokes: 8, radical: "水", gifFile: "oyogu.gif" },
    { character: "遊", meaning: "Play", romaji: "yuu / aso.bu", strokes: 12, radical: "辶", gifFile: "asobu.gif" },
    { character: "飛", meaning: "Fly", romaji: "hi / to.bu", strokes: 9, radical: "飛", gifFile: "tobu.gif" },
    { character: "打", meaning: "Hit / Strike", romaji: "da / u.tsu", strokes: 5, radical: "手", gifFile: "utsu.gif" },
    { character: "投", meaning: "Throw", romaji: "tou / na.geru", strokes: 7, radical: "手", gifFile: "nageru.gif" },
    { character: "折", meaning: "Fold / Break", romaji: "setsu / o.ru", strokes: 7, radical: "手", gifFile: "oru.gif" },
    { character: "抜", meaning: "Extract / Pull out", romaji: "batsu / nu.ku", strokes: 7, radical: "手", gifFile: "nuku.gif" },
    { character: "押", meaning: "Push", romaji: "ou / o.su", strokes: 8, radical: "手", gifFile: "osu.gif" },
    { character: "引", meaning: "Pull", romaji: "in / hi.ku", strokes: 4, radical: "弓", gifFile: "hiku.gif" },
    { character: "拾", meaning: "Pick up", romaji: "shuu / hiro.u", strokes: 9, radical: "手", gifFile: "hirou.gif" },
    { character: "捨", meaning: "Throw away", romaji: "sha / su.teru", strokes: 11, radical: "手", gifFile: "suteru.gif" },
    { character: "探", meaning: "Search / Look for", romaji: "tan / saga.su", strokes: 11, radical: "手", gifFile: "sagasu.gif" },

    // Rules, Nature & Society
    { character: "規", meaning: "Rule / Standard", romaji: "ki", strokes: 11, radical: "見", gifFile: "ki_rule.gif" },
    { character: "則", meaning: "Rule / Law", romaji: "soku", strokes: 9, radical: "刀", gifFile: "soku.gif" },
    { character: "法", meaning: "Law / Method", romaji: "hou", strokes: 8, radical: "水", gifFile: "hou.gif" },
    { character: "禁", meaning: "Prohibit", romaji: "kin", strokes: 13, radical: "示", gifFile: "kin.gif" },
    { character: "許", meaning: "Permit / Forgive", romaji: "kyo / yuru.su", strokes: 11, radical: "言", gifFile: "yurusu.gif" },
    { character: "交", meaning: "Traffic / Exchange", romaji: "kou", strokes: 6, radical: "亠", gifFile: "kou_traffic.gif" },
    { character: "草", meaning: "Grass", romaji: "sou / kusa", strokes: 9, radical: "艸", gifFile: "kusa.gif" },
    { character: "原", meaning: "Field / Origin", romaji: "gen / hara", strokes: 10, radical: "厂", gifFile: "hara.gif" },
    { character: "谷", meaning: "Valley", romaji: "koku / tani", strokes: 7, radical: "谷", gifFile: "tani.gif" },
    { character: "虫", meaning: "Insect / Bug", romaji: "chuu / mushi", strokes: 6, radical: "虫", gifFile: "mushi.gif" },
    { character: "晴", meaning: "Clear weather", romaji: "sei / ha.reru", strokes: 12, radical: "日", gifFile: "hareru.gif" },
    { character: "曇", meaning: "Cloudy", romaji: "don / kumo.ru", strokes: 16, radical: "日", gifFile: "kumoru.gif" },
    // Family & Relationships
    { character: "夫", meaning: "Husband", romaji: "fu / otto", strokes: 4, radical: "大", gifFile: "otto.gif" },
    { character: "妻", meaning: "Wife", romaji: "sai / tsuma", strokes: 8, radical: "女", gifFile: "tsuma.gif" },
    { character: "婚", meaning: "Marriage", romaji: "kon", strokes: 11, radical: "女", gifFile: "kon.gif" },
    { character: "娘", meaning: "Daughter", romaji: "musume", strokes: 10, radical: "女", gifFile: "musume.gif" },
    { character: "祖", meaning: "Ancestor", romaji: "so", strokes: 9, radical: "示", gifFile: "so.gif" },
    { character: "似", meaning: "Resemble", romaji: "ji / ni.ru", strokes: 7, radical: "人", gifFile: "niru.gif" },
    { character: "供", meaning: "Offer / Companion", romaji: "kyou / tomo", strokes: 8, radical: "人", gifFile: "tomo_companion.gif" },

    // Positions, Directions & Amounts
    { character: "向", meaning: "Face / Turn toward", romaji: "kou / mu.kau", strokes: 6, radical: "口", gifFile: "mukau.gif" },
    { character: "側", meaning: "Side", romaji: "soku / kawa", strokes: 11, radical: "人", gifFile: "kawa.gif" },
    { character: "央", meaning: "Center", romaji: "ou", strokes: 5, radical: "大", gifFile: "ou.gif" },
    { character: "辺", meaning: "Vicinity", romaji: "hen / ata.ri", strokes: 5, radical: "辶", gifFile: "atari.gif" },
    { character: "倍", meaning: "Double / Times", romaji: "bai", strokes: 10, radical: "人", gifFile: "bai.gif" },
    { character: "全", meaning: "All / Whole", romaji: "zen / matta.ku", strokes: 6, radical: "入", gifFile: "zen.gif" },
    { character: "部", meaning: "Part / Department", romaji: "bu", strokes: 11, radical: "邑", gifFile: "bu.gif" },

    // Society, Law & Order
    { character: "祭", meaning: "Festival", romaji: "sai / matsu.ri", strokes: 11, radical: "示", gifFile: "matsuri.gif" },
    { character: "争", meaning: "Argue / Dispute", romaji: "sou / araso.u", strokes: 6, radical: "亅", gifFile: "arasou.gif" },
    { character: "罪", meaning: "Crime / Sin", romaji: "zai / tsumi", strokes: 13, radical: "网", gifFile: "tsumi.gif" },
    { character: "判", meaning: "Judge / Determine", romaji: "han", strokes: 7, radical: "刀", gifFile: "han.gif" },
    { character: "労", meaning: "Labor", romaji: "rou", strokes: 7, radical: "力", gifFile: "rou.gif" },
    { character: "協", meaning: "Cooperation", romaji: "kyou", strokes: 8, radical: "十", gifFile: "kyou.gif" },
    { character: "命", meaning: "Life / Fate", romaji: "mei / inochi", strokes: 8, radical: "口", gifFile: "inochi.gif" },
    { character: "令", meaning: "Command / Order", romaji: "rei", strokes: 5, radical: "人", gifFile: "rei.gif" },
    
    // Nature, Plants & Dwellings
    { character: "窓", meaning: "Window", romaji: "sou / mado", strokes: 11, radical: "穴", gifFile: "mado.gif" },
    { character: "葉", meaning: "Leaf", romaji: "you / ha", strokes: 12, radical: "艸", gifFile: "ha.gif" },
    { character: "根", meaning: "Root", romaji: "kon / ne", strokes: 10, radical: "木", gifFile: "ne.gif" },
    { character: "植", meaning: "Plant", romaji: "shoku / u.eru", strokes: 12, radical: "木", gifFile: "ueru.gif" },
    { character: "緑", meaning: "Green", romaji: "ryoku / midori", strokes: 14, radical: "糸", gifFile: "midori.gif" },
    { character: "石", meaning: "Stone", romaji: "seki / ishi", strokes: 5, radical: "石", gifFile: "ishi.gif" },
    { character: "戸", meaning: "Door", romaji: "ko / to", strokes: 4, radical: "戸", gifFile: "to.gif" },

    // Physical States & Adjectives
    { character: "浅", meaning: "Shallow", romaji: "sen / asa.i", strokes: 9, radical: "水", gifFile: "asai.gif" },
    { character: "深", meaning: "Deep", romaji: "shin / fuka.i", strokes: 11, radical: "水", gifFile: "fukai.gif" },
    { character: "冷", meaning: "Cold (to the touch)", romaji: "rei / tsume.tai", strokes: 7, radical: "冫", gifFile: "tsumetai.gif" },
    { character: "涼", meaning: "Cool (weather)", romaji: "ryou / suzu.shii", strokes: 11, radical: "水", gifFile: "suzushii.gif" },
    { character: "温", meaning: "Warm", romaji: "on / atata.kai", strokes: 12, radical: "水", gifFile: "atatakai.gif" },
    { character: "熱", meaning: "Heat / Hot", romaji: "netsu / atsu.i", strokes: 15, radical: "火", gifFile: "atsui.gif" },
    { character: "柔", meaning: "Soft / Flexible", romaji: "juu / yawa.rakai", strokes: 9, radical: "木", gifFile: "yawarakai.gif" },
    { character: "固", meaning: "Hard / Solid", romaji: "ko / kata.i", strokes: 8, radical: "囗", gifFile: "katai.gif" },
    { character: "細", meaning: "Thin / Detailed", romaji: "sai / hoso.i", strokes: 11, radical: "糸", gifFile: "hosoi.gif" },
    { character: "太", meaning: "Fat / Thick", romaji: "tai / futo.i", strokes: 4, radical: "大", gifFile: "futoi.gif" },
    { character: "美", meaning: "Beautiful", romaji: "bi / utsuku.shii", strokes: 9, radical: "羊", gifFile: "utsukushii.gif" },

    // Body Parts & Health
    { character: "腹", meaning: "Stomach", romaji: "fuku / hara", strokes: 13, radical: "肉", gifFile: "hara.gif" },
    { character: "肩", meaning: "Shoulder", romaji: "ken / kata", strokes: 8, radical: "肉", gifFile: "kata.gif" },
    { character: "腕", meaning: "Arm", romaji: "wan / ude", strokes: 12, radical: "肉", gifFile: "ude.gif" },
    { character: "腰", meaning: "Waist / Hips", romaji: "you / koshi", strokes: 13, radical: "肉", gifFile: "koshi.gif" },
    { character: "鼻", meaning: "Nose", romaji: "bi / hana", strokes: 14, radical: "鼻", gifFile: "hana_nose.gif" },
    { character: "歯", meaning: "Tooth", romaji: "shi / ha", strokes: 12, radical: "歯", gifFile: "ha_tooth.gif" },
    { character: "髪", meaning: "Hair", romaji: "hatsu / kami", strokes: 14, radical: "髟", gifFile: "kami_hair.gif" },
    { character: "骨", meaning: "Bone", romaji: "kotsu / hone", strokes: 10, radical: "骨", gifFile: "hone.gif" },
    { character: "汗", meaning: "Sweat", romaji: "kan / ase", strokes: 6, radical: "水", gifFile: "ase.gif" },

    // Water & Fluid States
    { character: "流", meaning: "Flow", romaji: "ryuu / naga.reru", strokes: 10, radical: "水", gifFile: "nagareru.gif" },
    { character: "浮", meaning: "Float", romaji: "fu / u.ku", strokes: 10, radical: "水", gifFile: "uku.gif" },
    { character: "消", meaning: "Extinguish / Erase", romaji: "shou / ki.eru", strokes: 10, radical: "水", gifFile: "kieru.gif" },
    { character: "清", meaning: "Pure", romaji: "sei / kiyo.i", strokes: 11, radical: "水", gifFile: "kiyoi.gif" },
    { character: "満", meaning: "Full", romaji: "man / mi.chiru", strokes: 12, radical: "水", gifFile: "michiru.gif" },
    { character: "減", meaning: "Decrease", romaji: "gen / he.ru", strokes: 12, radical: "水", gifFile: "heru.gif" },
    { character: "測", meaning: "Measure (depth/volume)", romaji: "soku / haka.ru", strokes: 12, radical: "水", gifFile: "hakaru_measure.gif" },
    { character: "湯", meaning: "Hot Water", romaji: "tou / yu", strokes: 12, radical: "水", gifFile: "yu.gif" },
    { character: "湖", meaning: "Lake", romaji: "ko / mizuumi", strokes: 12, radical: "水", gifFile: "mizuumi.gif" },

    // Society, Interaction & Power
    { character: "共", meaning: "Together", romaji: "kyou / tomo", strokes: 6, radical: "八", gifFile: "tomo_together.gif" },
    { character: "兵", meaning: "Soldier", romaji: "hei", strokes: 7, radical: "八", gifFile: "hei.gif" },
    { character: "努", meaning: "Effort", romaji: "do / tsuto.meru", strokes: 7, radical: "力", gifFile: "tsutomeru.gif" },
    { character: "効", meaning: "Effect / Efficacy", romaji: "kou / ki.ku", strokes: 8, radical: "力", gifFile: "kiku_effect.gif" },
    { character: "勇", meaning: "Courage", romaji: "yuu / isama.shii", strokes: 9, radical: "力", gifFile: "isamashii.gif" },
    { character: "勢", meaning: "Force / Vigor", romaji: "sei / ikio.i", strokes: 13, radical: "力", gifFile: "ikioi.gif" },
    { character: "包", meaning: "Wrap", romaji: "hou / tsutsu.mu", strokes: 5, radical: "勹", gifFile: "tsutsumu.gif" },
    { character: "各", meaning: "Each", romaji: "kaku / ono.ono", strokes: 6, radical: "口", gifFile: "kaku.gif" },
    { character: "告", meaning: "Announce", romaji: "koku / tsu.geru", strokes: 7, radical: "口", gifFile: "tsugeru.gif" },
    { character: "喜", meaning: "Rejoice", romaji: "ki / yoroko.bu", strokes: 12, radical: "口", gifFile: "yorokobu.gif" },
    { character: "器", meaning: "Vessel / Instrument", romaji: "ki / utsuwa", strokes: 15, radical: "口", gifFile: "utsuwa.gif" },
    { character: "囲", meaning: "Surround", romaji: "i / kako.mu", strokes: 7, radical: "囗", gifFile: "kakomu.gif" },

    // Governance, Structure & Organization
    { character: "完", meaning: "Perfect / Completion", romaji: "kan", strokes: 7, radical: "宀", gifFile: "kan.gif" },
    { character: "察", meaning: "Guess / Inspect", romaji: "satsu", strokes: 14, radical: "宀", gifFile: "satsu.gif" },
    { character: "官", meaning: "Bureaucrat / Official", romaji: "kan", strokes: 8, radical: "宀", gifFile: "kan_official.gif" },
    { character: "季", meaning: "Season", romaji: "ki", strokes: 8, radical: "子", gifFile: "ki_season.gif" },
    { character: "節", meaning: "Node / Season", romaji: "setsu / fushi", strokes: 13, radical: "竹", gifFile: "setsu.gif" },
    { character: "級", meaning: "Class / Rank", romaji: "kyuu", strokes: 9, radical: "糸", gifFile: "kyuu.gif" },
    { character: "録", meaning: "Record", romaji: "roku", strokes: 16, radical: "金", gifFile: "roku.gif" },
    { character: "賞", meaning: "Prize", romaji: "shou", strokes: 15, radical: "貝", gifFile: "shou.gif" },
    { character: "庫", meaning: "Storehouse", romaji: "ko", strokes: 10, radical: "广", gifFile: "ko.gif" },
    { character: "蔵", meaning: "Store / Hide", romaji: "zou / kura", strokes: 15, radical: "艸", gifFile: "kura.gif" },
    { character: "底", meaning: "Bottom", romaji: "tei / soko", strokes: 8, radical: "广", gifFile: "soko.gif" },
    { character: "府", meaning: "Prefecture / Agency", romaji: "fu", strokes: 8, radical: "广", gifFile: "fu.gif" },

    // Actions & Abstract Concepts
    { character: "座", meaning: "Sit / Seat", romaji: "za / suwa.ru", strokes: 10, radical: "广", gifFile: "suwaru.gif" },
    { character: "延", meaning: "Prolong / Stretch", romaji: "en / no.basu", strokes: 7, radical: "廴", gifFile: "nobasu.gif" },
    { character: "徒", meaning: "Follower / Walking", romaji: "to", strokes: 10, radical: "彳", gifFile: "to.gif" },
    { character: "得", meaning: "Acquire / Gain", romaji: "toku / e.ru", strokes: 11, radical: "彳", gifFile: "eru.gif" },

    // Hand Actions & Manipulation
    { character: "指", meaning: "Finger / Point", romaji: "shi / yubi", strokes: 10, radical: "手", gifFile: "yubi.gif" },
    { character: "捕", meaning: "Catch / Arrest", romaji: "ho / tsuka.maeru", strokes: 10, radical: "手", gifFile: "tsukamaeru.gif" },
    { character: "掃", meaning: "Sweep / Brush", romaji: "sou / ha.ku", strokes: 11, radical: "手", gifFile: "haku.gif" },
    { character: "抱", meaning: "Embrace / Hug", romaji: "hou / da.ku", strokes: 8, radical: "手", gifFile: "daku.gif" },
    { character: "掛", meaning: "Hang / Suspend", romaji: "kai / ka.keru", strokes: 11, radical: "手", gifFile: "kakeru.gif" },
    { character: "支", meaning: "Support / Branch", romaji: "shi / sasa.eru", strokes: 4, radical: "支", gifFile: "sasaeru.gif" },
    { character: "放", meaning: "Release / Set free", romaji: "hou / hana.su", strokes: 8, radical: "攴", gifFile: "hanasu.gif" },
    { character: "改", meaning: "Reform / Fix", romaji: "kai / arata.meru", strokes: 7, radical: "攴", gifFile: "aratameru.gif" },
    { character: "敗", meaning: "Defeat / Fail", romaji: "hai / yabu.reru", strokes: 11, radical: "攴", gifFile: "yabureru.gif" },
    { character: "散", meaning: "Scatter", romaji: "san / chi.ru", strokes: 12, radical: "攴", gifFile: "chiru.gif" },

    // Conflict, Negativity & Desire
    { character: "殺", meaning: "Kill / Murder", romaji: "satsu / koro.su", strokes: 10, radical: "殳", gifFile: "korosu.gif" },
    { character: "武", meaning: "Military / Warrior", romaji: "bu / mu", strokes: 8, radical: "止", gifFile: "bu_military.gif" },
    { character: "残", meaning: "Remain / Leave behind", romaji: "zan / noko.ru", strokes: 10, radical: "歹", gifFile: "nokoru.gif" },
    { character: "毒", meaning: "Poison", romaji: "doku", strokes: 8, radical: "毋", gifFile: "doku.gif" },
    { character: "欠", meaning: "Lack / Defect", romaji: "ketsu / ka.keru", strokes: 4, radical: "欠", gifFile: "kakeru_lack.gif" },
    { character: "欲", meaning: "Desire / Want", romaji: "yoku / ho.shii", strokes: 11, radical: "欠", gifFile: "hoshii.gif" },
    { character: "歓", meaning: "Joy / Rejoice", romaji: "kan", strokes: 15, radical: "欠", gifFile: "kan_joy.gif" },

    // Water, Liquids & Environments
    { character: "汚", meaning: "Dirty / Pollute", romaji: "o / kitana.i", strokes: 6, radical: "水", gifFile: "kitanai.gif" },
    { character: "池", meaning: "Pond", romaji: "chi / ike", strokes: 6, radical: "水", gifFile: "ike.gif" },
    { character: "沈", meaning: "Sink / Submerge", romaji: "chin / shizu.mu", strokes: 7, radical: "水", gifFile: "shizumu.gif" },
    { character: "河", meaning: "River / Stream", romaji: "ka / kawa", strokes: 8, radical: "水", gifFile: "kawa_river.gif" },
    { character: "沸", meaning: "Boil", romaji: "futsu / wa.ku", strokes: 8, radical: "水", gifFile: "waku.gif" },
    { character: "油", meaning: "Oil", romaji: "yu / abura", strokes: 8, radical: "水", gifFile: "abura.gif" },
    { character: "沼", meaning: "Swamp / Bog", romaji: "shou / numa", strokes: 8, radical: "水", gifFile: "numa.gif" },
    { character: "泉", meaning: "Spring / Fountain", romaji: "sen / izumi", strokes: 9, radical: "水", gifFile: "izumi.gif" },
    { character: "泊", meaning: "Stay overnight", romaji: "haku / to.maru", strokes: 8, radical: "水", gifFile: "tomaru_stay.gif" },
    { character: "浴", meaning: "Bathe", romaji: "yoku / a.biru", strokes: 10, radical: "水", gifFile: "abiru.gif" },
    { character: "活", meaning: "Active / Living", romaji: "katsu", strokes: 9, radical: "水", gifFile: "katsu.gif" },
    { character: "派", meaning: "Faction / Group", romaji: "ha", strokes: 9, radical: "水", gifFile: "ha_faction.gif" },
    { character: "漁", meaning: "Fishing", romaji: "gyo / ryou", strokes: 14, radical: "水", gifFile: "ryou_fishing.gif" },
    { character: "演", meaning: "Perform / Play", romaji: "en", strokes: 14, radical: "水", gifFile: "en.gif" },
    { character: "漢", meaning: "China / Sino-", romaji: "kan", strokes: 13, radical: "水", gifFile: "kan_kanji.gif" },

    // Fire, Heat & Illumination
    { character: "炭", meaning: "Charcoal / Coal", romaji: "tan / sumi", strokes: 9, radical: "火", gifFile: "sumi.gif" },
    { character: "点", meaning: "Point / Dot", romaji: "ten", strokes: 9, radical: "火", gifFile: "ten_point.gif" },
    { character: "照", meaning: "Illuminate / Shine", romaji: "shou / te.rasu", strokes: 13, radical: "火", gifFile: "terasu.gif" },
    { character: "燃", meaning: "Burn", romaji: "nen / mo.eru", strokes: 16, radical: "火", gifFile: "moeru.gif" },
    { character: "無", meaning: "Nothing / None", romaji: "mu / na.i", strokes: 12, radical: "火", gifFile: "nai_nothing.gif" },
    { character: "然", meaning: "Nature / So", romaji: "zen / nen", strokes: 12, radical: "火", gifFile: "zen_nature.gif" },
    { character: "焼", meaning: "Bake / Grill", romaji: "shou / ya.ku", strokes: 11, radical: "火", gifFile: "yaku_bake.gif" },
    { character: "煙", meaning: "Smoke", romaji: "en / kemuri", strokes: 13, radical: "火", gifFile: "kemuri.gif" },
    { character: "煮", meaning: "Boil / Cook", romaji: "sha / ni.ru", strokes: 12, radical: "火", gifFile: "niru.gif" },

    // Animals, Wild & Narrow (Dog Radical)
    { character: "犯", meaning: "Crime / Offense", romaji: "han / oka.su", strokes: 5, radical: "犬", gifFile: "han_crime.gif" },
    { character: "狭", meaning: "Narrow", romaji: "kyou / sema.i", strokes: 9, radical: "犬", gifFile: "semai.gif" },
    { character: "独", meaning: "Alone / Independent", romaji: "doku / hito.ri", strokes: 9, radical: "犬", gifFile: "hitori.gif" },
    { character: "猫", meaning: "Cat", romaji: "byou / neko", strokes: 11, radical: "犬", gifFile: "neko.gif" },
    { character: "猿", meaning: "Monkey", romaji: "en / saru", strokes: 13, radical: "犬", gifFile: "saru.gif" },

    // Kings, Jewels & Spheres
    { character: "王", meaning: "King", romaji: "ou", strokes: 4, radical: "玉", gifFile: "ou.gif" },
    { character: "玉", meaning: "Jewel / Ball", romaji: "gyoku / tama", strokes: 5, radical: "玉", gifFile: "tama.gif" },
    { character: "珍", meaning: "Rare", romaji: "chin / mezura.shii", strokes: 9, radical: "玉", gifFile: "mezurashii.gif" },
    { character: "球", meaning: "Sphere / Ball", romaji: "kyuu / tama", strokes: 11, radical: "玉", gifFile: "kyuu.gif" },

    // Production, Fields & Doubt
    { character: "産", meaning: "Produce / Give birth", romaji: "san / u.mu", strokes: 11, radical: "生", gifFile: "san_produce.gif" },
    { character: "畑", meaning: "Field (dry)", romaji: "hatake / hata", strokes: 9, radical: "田", gifFile: "hatake.gif" },
    { character: "疑", meaning: "Doubt", romaji: "gi / utaga.u", strokes: 14, radical: "疋", gifFile: "utagau.gif" },
    
    // Sight, Status & Perception
    { character: "的", meaning: "Target / -ish", romaji: "teki / mato", strokes: 8, radical: "白", gifFile: "teki.gif" },
    { character: "直", meaning: "Direct / Fix", romaji: "choku / nao.su", strokes: 8, radical: "目", gifFile: "naosu.gif" },
    { character: "相", meaning: "Mutual / Minister", romaji: "sou / ai", strokes: 9, radical: "目", gifFile: "ai_mutual.gif" },
    { character: "省", meaning: "Reflect / Ministry", romaji: "shou / habu.ku", strokes: 9, radical: "目", gifFile: "habuku.gif" },
    { character: "看", meaning: "Watch over", romaji: "kan", strokes: 9, radical: "目", gifFile: "kan_watch.gif" },
    { character: "県", meaning: "Prefecture", romaji: "ken", strokes: 9, radical: "目", gifFile: "ken.gif" },

    // Earth, Destruction & Certainty
    { character: "砂", meaning: "Sand", romaji: "sa / suna", strokes: 9, radical: "石", gifFile: "suna.gif" },
    { character: "破", meaning: "Break / Tear", romaji: "ha / yabu.ru", strokes: 10, radical: "石", gifFile: "yaburu.gif" },
    { character: "確", meaning: "Certain / Firm", romaji: "kaku / tashi.ka", strokes: 15, radical: "石", gifFile: "tashika.gif" },

    // Rituals, Gods & Blessings
    { character: "礼", meaning: "Bow / Thanks", romaji: "rei", strokes: 5, radical: "示", gifFile: "rei_bow.gif" },
    { character: "神", meaning: "God / Spirit", romaji: "shin / kami", strokes: 9, radical: "示", gifFile: "kami_god.gif" },
    { character: "祝", meaning: "Celebrate", romaji: "shuku / iwa.u", strokes: 9, radical: "示", gifFile: "iwau.gif" },
    { character: "福", meaning: "Luck / Blessing", romaji: "fuku", strokes: 13, radical: "示", gifFile: "fuku.gif" },

    // Crops, Extent & Taxes
    { character: "種", meaning: "Seed / Kind", romaji: "shu / tane", strokes: 14, radical: "禾", gifFile: "tane.gif" },
    { character: "程", meaning: "Extent / Degree", romaji: "tei / hodo", strokes: 12, radical: "禾", gifFile: "hodo.gif" },
    { character: "税", meaning: "Tax", romaji: "zei", strokes: 12, radical: "禾", gifFile: "zei.gif" },

    // Threads, Promises & Ties
    { character: "約", meaning: "Promise / Approximately", romaji: "yaku", strokes: 9, radical: "糸", gifFile: "yaku.gif" },
    { character: "絵", meaning: "Picture", romaji: "e / kai", strokes: 12, radical: "糸", gifFile: "e_picture.gif" },
    { character: "給", meaning: "Salary / Provide", romaji: "kyuu", strokes: 12, radical: "糸", gifFile: "kyuu.gif" },
    { character: "緒", meaning: "Beginning / Cord", romaji: "sho / o", strokes: 14, radical: "糸", gifFile: "o_cord.gif" },
    { character: "締", meaning: "Tighten / Tie", romaji: "tei / shi.meru", strokes: 15, radical: "糸", gifFile: "shimeru_tie.gif" },

    // Vehicles & Rotation
    { character: "輪", meaning: "Wheel / Ring", romaji: "rin / wa", strokes: 15, radical: "車", gifFile: "wa.gif" },
    { character: "輸", meaning: "Transport", romaji: "yu", strokes: 16, radical: "車", gifFile: "yu_transport.gif" },
    { character: "転", meaning: "Revolve / Turn", romaji: "ten / koro.bu", strokes: 11, radical: "車", gifFile: "korobu.gif" },

    // Movement, Roads & Choices
    { character: "違", meaning: "Differ / Wrong", romaji: "i / chiga.u", strokes: 13, radical: "辶", gifFile: "chigau.gif" },
    { character: "選", meaning: "Choose", romaji: "sen / era.bu", strokes: 15, radical: "辶", gifFile: "erabu.gif" },
    { character: "遺", meaning: "Leave behind", romaji: "i", strokes: 15, radical: "辶", gifFile: "i_leave.gif" },

    // Gates, Obstacles & Occasions
    { character: "関", meaning: "Connection / Barrier", romaji: "kan / seki", strokes: 14, radical: "門", gifFile: "kan.gif" },
    { character: "険", meaning: "Steep / Danger", romaji: "ken / kewa.shii", strokes: 11, radical: "阜", gifFile: "kewashii.gif" },
    { character: "降", meaning: "Descend / Fall (rain)", romaji: "kou / fu.ru", strokes: 10, radical: "阜", gifFile: "furu.gif" },
    { character: "除", meaning: "Remove / Exclude", romaji: "jo / nozo.ku", strokes: 10, radical: "阜", gifFile: "nozoku.gif" },
    { character: "際", meaning: "Occasion / Edge", romaji: "sai / kiwa", strokes: 14, radical: "阜", gifFile: "kiwa.gif" },

    // Speech, Agreement & Thought
    { character: "認", meaning: "Recognize / Admit", romaji: "nin / mito.meru", strokes: 14, radical: "言", gifFile: "mitomeru.gif" },
    { character: "警", meaning: "Warn / Guard", romaji: "kei", strokes: 19, radical: "言", gifFile: "kei_warn.gif" },
    { character: "議", meaning: "Debate / Discuss", romaji: "gi", strokes: 20, radical: "言", gifFile: "gi_debate.gif" },
    { character: "談", meaning: "Talk / Discuss", romaji: "dan", strokes: 15, radical: "言", gifFile: "dan_talk.gif" },
    { character: "識", meaning: "Discriminate / Know", romaji: "shiki", strokes: 19, radical: "言", gifFile: "shiki.gif" },
    { character: "願", meaning: "Wish / Request", romaji: "gan / nega.u", strokes: 19, radical: "頁", gifFile: "negau.gif" },
    
    // Wealth, Trade & Employment
    { character: "貧", meaning: "Poor", romaji: "hin / mazu.shii", strokes: 11, radical: "貝", gifFile: "mazushii.gif" },
    { character: "貯", meaning: "Savings / Store", romaji: "cho / ta.meru", strokes: 12, radical: "貝", gifFile: "cho_save.gif" },
    { character: "貿", meaning: "Trade", romaji: "bou", strokes: 12, radical: "貝", gifFile: "bou_trade.gif" },
    { character: "賃", meaning: "Fare / Wage", romaji: "chin", strokes: 13, radical: "貝", gifFile: "chin_wage.gif" },
    { character: "額", meaning: "Amount / Forehead", romaji: "gaku / hitai", strokes: 18, radical: "頁", gifFile: "gaku.gif" },
    { character: "雇", meaning: "Employ / Hire", romaji: "ko / yato.u", strokes: 12, radical: "隹", gifFile: "yatou.gif" },

    // Food, Animals & Agriculture
    { character: "飯", meaning: "Meal / Cooked Rice", romaji: "han / meshi", strokes: 12, radical: "食", gifFile: "meshi.gif" },
    { character: "飼", meaning: "Keep / Raise (animals)", romaji: "shi / ka.u", strokes: 13, radical: "食", gifFile: "kau_raise.gif" },
    { character: "飽", meaning: "Sated / Tired of", romaji: "hou / a.kiru", strokes: 13, radical: "食", gifFile: "akiru.gif" },
    { character: "馬", meaning: "Horse", romaji: "ba / uma", strokes: 10, radical: "馬", gifFile: "uma.gif" },
    { character: "駐", meaning: "Stop-over / Resident", romaji: "chuu", strokes: 15, radical: "馬", gifFile: "chuu_park.gif" },
    { character: "麦", meaning: "Wheat / Barley", romaji: "baku / mugi", strokes: 7, radical: "麦", gifFile: "mugi.gif" },
    
    // Extremes, Difficulties & Opposites
    { character: "難", meaning: "Difficult", romaji: "nan / muzuka.shii", strokes: 18, radical: "隹", gifFile: "muzukashii.gif" },
    { character: "雑", meaning: "Miscellaneous / Rough", romaji: "zatsu", strokes: 14, radical: "隹", gifFile: "zatsu.gif" },
    { character: "逆", meaning: "Reverse / Opposite", romaji: "gyaku / saka.rau", strokes: 9, radical: "辶", gifFile: "gyaku.gif" },
    { character: "越", meaning: "Cross over / Exceed", romaji: "etsu / ko.eru", strokes: 12, radical: "辶", gifFile: "koeru.gif" },
    { character: "適", meaning: "Suitable", romaji: "teki / kana.u", strokes: 14, radical: "辶", gifFile: "teki.gif" },

    // States, Colors & Appearance
    { character: "静", meaning: "Quiet", romaji: "sei / shizu.ka", strokes: 14, radical: "青", gifFile: "shizuka.gif" },
    { character: "非", meaning: "Non- / Negative", romaji: "hi / ara.zu", strokes: 8, radical: "非", gifFile: "hi_non.gif" },
    { character: "面", meaning: "Face / Surface", romaji: "men / omote", strokes: 9, radical: "面", gifFile: "men.gif" },
    { character: "靴", meaning: "Shoes", romaji: "ka / kutsu", strokes: 13, radical: "革", gifFile: "kutsu.gif" },
    { character: "黄", meaning: "Yellow", romaji: "kou / kiiro", strokes: 11, radical: "黄", gifFile: "kiiro.gif" },
    { character: "黙", meaning: "Silent", romaji: "moku / dama.ru", strokes: 15, radical: "黒", gifFile: "damaru.gif" },
    
    // Top, Kind & Age
    { character: "頂", meaning: "Top / Receive", romaji: "chou / itada.ku", strokes: 11, radical: "頁", gifFile: "itadaku.gif" },
    { character: "類", meaning: "Kind / Sort", romaji: "rui", strokes: 18, radical: "頁", gifFile: "rui.gif" },
    { character: "齢", meaning: "Age", romaji: "rei", strokes: 17, radical: "歯", gifFile: "rei_age.gif" },
    { character: "震", meaning: "Quake / Shake", romaji: "shin / furu.eru", strokes: 15, radical: "雨", gifFile: "furueru.gif" }
  ]
};

export const kanjiByLevel_N2: Record<string, KanjiItem[]> = {
  "N2": [
    // Government, Politics & Administration
    { character: "党", meaning: "Party / Faction", romaji: "tou", strokes: 10, radical: "儿", gifFile: "tou_party.gif" },
    { character: "総", meaning: "General / Whole", romaji: "sou", strokes: 14, radical: "糸", gifFile: "sou.gif" },
    { character: "統", meaning: "Unite / Govern", romaji: "tou / su.beru", strokes: 12, radical: "糸", gifFile: "tou_unite.gif" },
    { character: "領", meaning: "Territory", romaji: "ryou", strokes: 14, radical: "頁", gifFile: "ryou.gif" },
    { character: "権", meaning: "Power / Rights", romaji: "ken / gon", strokes: 15, radical: "木", gifFile: "ken_power.gif" },
    { character: "挙", meaning: "Raise / Election", romaji: "kyo / a.geru", strokes: 10, radical: "手", gifFile: "kyo.gif" },
    { character: "委", meaning: "Committee / Entrust", romaji: "i / yuda.neru", strokes: 8, radical: "女", gifFile: "i_committee.gif" },
    { character: "策", meaning: "Policy / Plan", romaji: "saku", strokes: 12, radical: "竹", gifFile: "saku.gif" },
    { character: "閣", meaning: "Cabinet / Tower", romaji: "kaku", strokes: 14, radical: "門", gifFile: "kaku.gif" },
    { character: "庁", meaning: "Government Agency", romaji: "chou", strokes: 5, radical: "广", gifFile: "chou.gif" },

    // Law, Justice & Crime
    { character: "裁", meaning: "Judge / Cut out", romaji: "sai / saba.ku", strokes: 12, radical: "衣", gifFile: "sai_judge.gif" },
    { character: "刑", meaning: "Penalty / Punishment", romaji: "kei", strokes: 6, radical: "刀", gifFile: "kei_penalty.gif" },
    { character: "罰", meaning: "Punish / Penalty", romaji: "batsu / ba.tsuru", strokes: 14, radical: "网", gifFile: "batsu.gif" },
    { character: "捜", meaning: "Search / Look for", romaji: "sou / saga.su", strokes: 10, radical: "手", gifFile: "sou_search.gif" },
    { character: "証", meaning: "Evidence / Proof", romaji: "shou", strokes: 14, radical: "言", gifFile: "shou.gif" },
    { character: "訴", meaning: "Sue / Accuse", romaji: "so / utta.eru", strokes: 12, radical: "言", gifFile: "uttaeru.gif" },
    { character: "律", meaning: "Law / Rhythm", romaji: "ritsu / ichi", strokes: 9, radical: "彳", gifFile: "ritsu.gif" },
    { character: "条", meaning: "Article / Clause", romaji: "jou", strokes: 7, radical: "木", gifFile: "jou_article.gif" },
    { character: "盗", meaning: "Steal", romaji: "tou / nusu.mu", strokes: 11, radical: "皿", gifFile: "nusumu.gif" },
    { character: "疑", meaning: "Doubt / Suspect", romaji: "gi / utaga.u", strokes: 14, radical: "疋", gifFile: "utagau.gif" },

    // Corporate Finance & Economics
    { character: "企", meaning: "Plan / Undertake", romaji: "ki / kuwada.teru", strokes: 6, radical: "人", gifFile: "ki_plan.gif" },
    { character: "創", meaning: "Create", romaji: "sou / tsuku.ru", strokes: 12, radical: "刀", gifFile: "sou_create.gif" },
    { character: "富", meaning: "Wealth / Abundant", romaji: "fu / tomi", strokes: 12, radical: "宀", gifFile: "tomi.gif" },
    { character: "債", meaning: "Debt / Bond", romaji: "sai", strokes: 13, radical: "人", gifFile: "sai_debt.gif" },
    { character: "収", meaning: "Income / Obtain", romaji: "shu / osa.meru", strokes: 4, radical: "又", gifFile: "osameru.gif" },
    { character: "益", meaning: "Profit / Benefit", romaji: "eki / yaku", strokes: 10, radical: "皿", gifFile: "eki.gif" },
    { character: "損", meaning: "Loss / Damage", romaji: "son / sokona.u", strokes: 13, radical: "手", gifFile: "son.gif" },
    { character: "株", meaning: "Stock / Stump", romaji: "kabu", strokes: 10, radical: "木", gifFile: "kabu.gif" },
    { character: "券", meaning: "Ticket / Certificate", romaji: "ken", strokes: 8, radical: "刀", gifFile: "ken_ticket.gif" },
    { character: "商", meaning: "Commerce / Trade", romaji: "shou / akina.u", strokes: 11, radical: "口", gifFile: "shou.gif" },

    // Infrastructure, Society & Media
    { character: "築", meaning: "Construct / Build", romaji: "chiku / kizu.ku", strokes: 16, radical: "竹", gifFile: "kizuku.gif" },
    { character: "構", meaning: "Structure / Posture", romaji: "kou / kama.eru", strokes: 14, radical: "木", gifFile: "kamaeru.gif" },
    { character: "設", meaning: "Establish / Provision", romaji: "setsu / mou.keru", strokes: 11, radical: "言", gifFile: "moukeru.gif" },
    { character: "防", meaning: "Prevent / Defend", romaji: "bou / fuse.gu", strokes: 7, radical: "阜", gifFile: "fusegu.gif" },
    { character: "署", meaning: "Station / Signature", romaji: "sho", strokes: 13, radical: "网", gifFile: "sho.gif" },
    { character: "郵", meaning: "Mail", romaji: "yuu", strokes: 11, radical: "邑", gifFile: "yuu.gif" },
    { character: "刊", meaning: "Publish / Edition", romaji: "kan", strokes: 5, radical: "刀", gifFile: "kan_publish.gif" },
    { character: "劇", meaning: "Drama / Play", romaji: "geki", strokes: 15, radical: "刀", gifFile: "geki.gif" },
    { character: "展", meaning: "Expand / Exhibit", romaji: "ten", strokes: 10, radical: "尸", gifFile: "ten.gif" },
    { character: "版", meaning: "Printing block / Edition", romaji: "han", strokes: 8, radical: "片", gifFile: "han_edition.gif" },

    // Relationships, Status & Conflict
    { character: "敵", meaning: "Enemy", romaji: "teki / kataki", strokes: 15, radical: "攴", gifFile: "teki_enemy.gif" },
    { character: "仲", meaning: "Relationship / Go-between", romaji: "chuu / naka", strokes: 6, radical: "人", gifFile: "naka_relation.gif" },
    { character: "旧", meaning: "Old times / Former", romaji: "kyuu / furu.i", strokes: 5, radical: "日", gifFile: "kyuu_old.gif" },
    { character: "恩", meaning: "Favor / Obligation", romaji: "on", strokes: 10, radical: "心", gifFile: "on.gif" },
    { character: "姓", meaning: "Surname", romaji: "sei / shou", strokes: 8, radical: "女", gifFile: "sei_surname.gif" },
  
    // Health, Medicine & Care
    { character: "健", meaning: "Healthy / Strong", romaji: "ken / suko.yaka", strokes: 11, radical: "人", gifFile: "ken_healthy.gif" },
    { character: "康", meaning: "Health / Peace", romaji: "kou", strokes: 11, radical: "广", gifFile: "kou_health.gif" },
    { character: "療", meaning: "Heal / Cure", romaji: "ryou", strokes: 17, radical: "疒", gifFile: "ryou.gif" },
    { character: "患", meaning: "Afflicted / Disease", romaji: "kan / wazura.u", strokes: 11, radical: "心", gifFile: "kan_patient.gif" },
    { character: "救", meaning: "Salvation / Save", romaji: "kyuu / suku.u", strokes: 11, radical: "攴", gifFile: "sukuu.gif" },
    { character: "護", meaning: "Safeguard / Protect", romaji: "go / mamo.ru", strokes: 20, radical: "言", gifFile: "go.gif" },
    { character: "脈", meaning: "Vein / Pulse", romaji: "myaku", strokes: 10, radical: "肉", gifFile: "myaku.gif" },
    { character: "症", meaning: "Symptom", romaji: "shou", strokes: 10, radical: "疒", gifFile: "shou_symptom.gif" },
    { character: "状", meaning: "Condition / Form", romaji: "jou", strokes: 7, radical: "犬", gifFile: "jou_condition.gif" },
    { character: "態", meaning: "State / Condition", romaji: "tai", strokes: 14, radical: "心", gifFile: "tai_state.gif" },

    // Complex Emotions & Mental States
    { character: "悩", meaning: "Worry / Distress", romaji: "nou / naya.mu", strokes: 10, radical: "心", gifFile: "nayamu.gif" },
    { character: "恐", meaning: "Fear / Dread", romaji: "kyou / oso.reru", strokes: 10, radical: "心", gifFile: "osoreru.gif" },
    { character: "恥", meaning: "Shame", romaji: "chi / haji", strokes: 10, radical: "心", gifFile: "haji.gif" },
    { character: "悔", meaning: "Regret / Repent", romaji: "kai / kuya.shii", strokes: 9, radical: "心", gifFile: "kuyashii.gif" },
    { character: "驚", meaning: "Surprise", romaji: "kyou / odo.roku", strokes: 22, radical: "馬", gifFile: "odoroku.gif" },
    { character: "恨", meaning: "Grudge / Resent", romaji: "kon / ura.mu", strokes: 9, radical: "心", gifFile: "uramu.gif" },
    { character: "涙", meaning: "Tears", romaji: "rui / namida", strokes: 10, radical: "水", gifFile: "namida.gif" },
    { character: "叫", meaning: "Shout / Cry out", romaji: "kyou / sake.bu", strokes: 5, radical: "口", gifFile: "sakebu.gif" },
    { character: "祈", meaning: "Pray", romaji: "ki / ino.ru", strokes: 8, radical: "示", gifFile: "inoru.gif" },
    { character: "拝", meaning: "Worship / Adore", romaji: "hai / oga.mu", strokes: 8, radical: "手", gifFile: "ogamu.gif" },

    // Advanced Verbs & Actions
    { character: "戻", meaning: "Return / Revert", romaji: "rei / modo.ru", strokes: 7, radical: "戸", gifFile: "modoru.gif" },
    { character: "換", meaning: "Exchange / Swap", romaji: "kan / ka.eru", strokes: 12, radical: "手", gifFile: "kaeru_exchange.gif" },
    { character: "込", meaning: "Crowded / Include", romaji: "ko.mu", strokes: 5, radical: "辶", gifFile: "komu.gif" },
    { character: "隠", meaning: "Hide / Conceal", romaji: "in / kaku.su", strokes: 14, radical: "阜", gifFile: "kakusu.gif" },
    { character: "奪", meaning: "Snatch / Steal", romaji: "datsu / uba.u", strokes: 14, radical: "大", gifFile: "ubau.gif" },
    { character: "触", meaning: "Touch / Contact", romaji: "shoku / fu.reru", strokes: 13, radical: "角", gifFile: "fureru.gif" },
    { character: "掘", meaning: "Dig", romaji: "kutsu / ho.ru", strokes: 11, radical: "手", gifFile: "horu.gif" },
    { character: "伺", meaning: "Visit / Ask (humble)", romaji: "shi / ukaga.u", strokes: 6, radical: "人", gifFile: "ukagau.gif" },
    { character: "飾", meaning: "Decorate", romaji: "shoku / kaza.ru", strokes: 13, radical: "食", gifFile: "kazaru.gif" },
    { character: "招", meaning: "Invite / Beckon", romaji: "shou / mane.ku", strokes: 8, radical: "手", gifFile: "maneku.gif" },

    // Work, Rules & Assessment
    { character: "勤", meaning: "Diligence / Employed", romaji: "kin / tsuto.meru", strokes: 13, radical: "力", gifFile: "tsutomeru_work.gif" },
    { character: "績", meaning: "Exploits / Achievements", romaji: "seki", strokes: 17, radical: "糸", gifFile: "seki_achieve.gif" },
    { character: "評", meaning: "Evaluate / Criticism", romaji: "hyou", strokes: 12, radical: "言", gifFile: "hyou.gif" },
    { character: "断", meaning: "Sever / Refuse", romaji: "dan / ta.tsu", strokes: 11, radical: "斤", gifFile: "tatsu_sever.gif" },
    { character: "制", meaning: "System / Control", romaji: "sei", strokes: 8, radical: "刀", gifFile: "sei_system.gif" },
    { character: "価", meaning: "Value / Price", romaji: "ka / atai", strokes: 8, radical: "人", gifFile: "ka_value.gif" },
    { character: "余", meaning: "Surplus / Remainder", romaji: "yo / ama.ru", strokes: 7, radical: "人", gifFile: "amaru.gif" },
    { character: "準", meaning: "Standard / Prepare", romaji: "jun", strokes: 13, radical: "水", gifFile: "jun.gif" },
    { character: "標", meaning: "Signpost / Mark", romaji: "hyou", strokes: 15, radical: "木", gifFile: "hyou.gif" },

    // Environment, Materials & Physical Properties
    { character: "泥", meaning: "Mud / Mire", romaji: "dei / doro", strokes: 8, radical: "水", gifFile: "doro.gif" },
    { character: "灰", meaning: "Ash", romaji: "kai / hai", strokes: 6, radical: "火", gifFile: "hai.gif" },
    { character: "鉱", meaning: "Mineral / Ore", romaji: "kou", strokes: 13, radical: "金", gifFile: "kou_mineral.gif" },
    { character: "銅", meaning: "Copper", romaji: "dou", strokes: 14, radical: "金", gifFile: "dou.gif" },
    { character: "爆", meaning: "Bomb / Explode", romaji: "baku", strokes: 19, radical: "火", gifFile: "baku.gif" },
    { character: "陸", meaning: "Land", romaji: "riku", strokes: 11, radical: "阜", gifFile: "riku.gif" },
    { character: "湾", meaning: "Gulf / Bay", romaji: "wan", strokes: 12, radical: "水", gifFile: "wan.gif" },
    { character: "沖", meaning: "Open sea", romaji: "chuu / oki", strokes: 7, radical: "水", gifFile: "oki.gif" },
    { character: "缶", meaning: "Can / Tin", romaji: "kan", strokes: 6, radical: "缶", gifFile: "kan.gif" },
    { character: "瓶", meaning: "Bottle / Jar", romaji: "bin", strokes: 11, radical: "瓦", gifFile: "bin.gif" },
    { character: "乾", meaning: "Dry", romaji: "kan / kawa.ku", strokes: 11, radical: "乙", gifFile: "kawaku.gif" },
    { character: "軟", meaning: "Soft", romaji: "nan / yawa.rakai", strokes: 11, radical: "車", gifFile: "yawarakai_soft.gif" },
    { character: "硬", meaning: "Stiff / Hard", romaji: "kou / kata.i", strokes: 12, radical: "石", gifFile: "katai_hard.gif" },
    { character: "凍", meaning: "Freeze", romaji: "tou / koo.ru", strokes: 10, radical: "冫", gifFile: "kooru.gif" },
    { character: "溶", meaning: "Melt / Dissolve", romaji: "you / to.keru", strokes: 13, radical: "水", gifFile: "tokeru.gif" },
    { character: "混", meaning: "Mix / Blend", romaji: "kon / ma.zeru", strokes: 11, radical: "水", gifFile: "mazeru.gif" },

    // Nature, Plants & Agriculture
    { character: "荒", meaning: "Wild / Rough", romaji: "kou / ara.i", strokes: 9, radical: "艸", gifFile: "arai.gif" },
    { character: "枯", meaning: "Wither / Dry up", romaji: "ko / ka.reru", strokes: 9, radical: "木", gifFile: "kareru.gif" },
    { character: "枝", meaning: "Branch / Twig", romaji: "shi / eda", strokes: 8, radical: "木", gifFile: "eda.gif" },
    { character: "芽", meaning: "Bud / Sprout", romaji: "ga / me", strokes: 8, radical: "艸", gifFile: "me_bud.gif" },
    { character: "苗", meaning: "Seedling", romaji: "byou / nae", strokes: 8, radical: "艸", gifFile: "nae.gif" },
    { character: "芝", meaning: "Lawn / Turf", romaji: "shi / shiba", strokes: 6, radical: "艸", gifFile: "shiba.gif" },
    { character: "湿", meaning: "Damp / Wet", romaji: "shitsu / shime.ru", strokes: 12, radical: "水", gifFile: "shimeru_damp.gif" },
    { character: "嵐", meaning: "Storm", romaji: "ran / arashi", strokes: 12, radical: "山", gifFile: "arashi.gif" },
    { character: "雷", meaning: "Thunder / Lightning", romaji: "rai / kaminari", strokes: 13, radical: "雨", gifFile: "kaminari.gif" },
    { character: "霧", meaning: "Fog / Mist", romaji: "mu / kiri", strokes: 19, radical: "雨", gifFile: "kiri.gif" },

    // Body Organs & Physical Actions
    { character: "胃", meaning: "Stomach", romaji: "i", strokes: 9, radical: "肉", gifFile: "i_stomach.gif" },
    { character: "腸", meaning: "Intestines / Guts", romaji: "chou", strokes: 13, radical: "肉", gifFile: "chou_intestine.gif" },
    { character: "肝", meaning: "Liver / Courage", romaji: "kan / kimo", strokes: 7, radical: "肉", gifFile: "kimo.gif" },
    { character: "膚", meaning: "Skin", romaji: "fu", strokes: 15, radical: "虍", gifFile: "fu_skin.gif" },
    { character: "吐", meaning: "Vomit / Spit", romaji: "to / ha.ku", strokes: 6, radical: "口", gifFile: "haku_spit.gif" },
    { character: "刺", meaning: "Pierce / Stab", romaji: "shi / sa.su", strokes: 8, radical: "刀", gifFile: "sasu.gif" },
    { character: "踏", meaning: "Step on / Tread", romaji: "tou / fu.mu", strokes: 15, radical: "足", gifFile: "fumu.gif" },
    { character: "躍", meaning: "Leap / Jump", romaji: "yaku / odo.ru", strokes: 21, radical: "足", gifFile: "odoru_leap.gif" },

    // Clothing, Fabrics & Crafting
    { character: "綿", meaning: "Cotton", romaji: "men / wata", strokes: 14, radical: "糸", gifFile: "wata.gif" },
    { character: "布", meaning: "Cloth", romaji: "fu / nuno", strokes: 5, radical: "巾", gifFile: "nuno.gif" },
    { character: "皮", meaning: "Skin / Hide", romaji: "hi / kawa", strokes: 5, radical: "皮", gifFile: "kawa_skin.gif" },
    { character: "絹", meaning: "Silk", romaji: "ken / kinu", strokes: 13, radical: "糸", gifFile: "kinu.gif" },
    { character: "織", meaning: "Weave", romaji: "shoku / o.ru", strokes: 18, radical: "糸", gifFile: "oru_weave.gif" },
    { character: "縫", meaning: "Sew", romaji: "hou / nu.u", strokes: 16, radical: "糸", gifFile: "nuu.gif" },
    { character: "染", meaning: "Dye / Stain", romaji: "sen / so.meru", strokes: 9, radical: "水", gifFile: "someru.gif" },

    // Tools, Weapons & Objects
    { character: "針", meaning: "Needle", romaji: "shin / hari", strokes: 10, radical: "金", gifFile: "hari.gif" },
    { character: "棒", meaning: "Pole / Rod", romaji: "bou", strokes: 12, radical: "木", gifFile: "bou_pole.gif" },
    { character: "刃", meaning: "Blade", romaji: "jin / ha", strokes: 3, radical: "刀", gifFile: "ha_blade.gif" },
    { character: "剣", meaning: "Sword", romaji: "ken / tsurugi", strokes: 10, radical: "刀", gifFile: "tsurugi.gif" },
    { character: "札", meaning: "Tag / Paper Money", romaji: "satsu / fuda", strokes: 5, radical: "木", gifFile: "fuda.gif" },
    { character: "筒", meaning: "Cylinder / Pipe", romaji: "tou / tsutsu", strokes: 12, radical: "竹", gifFile: "tsutsu.gif" },

    // Human States, Status & Interaction
    { character: "偉", meaning: "Great / Admirable", romaji: "i / era.i", strokes: 12, radical: "人", gifFile: "erai.gif" },
    { character: "尊", meaning: "Precious / Respect", romaji: "son / touto.i", strokes: 12, radical: "寸", gifFile: "toutoi.gif" },
    { character: "敬", meaning: "Honor / Respect", romaji: "kei / uyama.u", strokes: 12, radical: "攴", gifFile: "uyamau.gif" },
    { character: "寄", meaning: "Approach / Drop in", romaji: "ki / yo.ru", strokes: 11, radical: "宀", gifFile: "yoru_dropin.gif" },
    { character: "召", meaning: "Call / Eat (honorific)", romaji: "shou / me.su", strokes: 5, radical: "口", gifFile: "mesu.gif" },
    { character: "占", meaning: "Occupy / Fortune telling", romaji: "sen / urana.u", strokes: 5, radical: "卜", gifFile: "uranau.gif" },
    { character: "互", meaning: "Mutual / Reciprocal", romaji: "go / taga.i", strokes: 4, radical: "二", gifFile: "tagai.gif" },
    { character: "紹", meaning: "Introduce", romaji: "shou", strokes: 11, radical: "糸", gifFile: "shou_intro.gif" },
    { character: "介", meaning: "Mediate / Shell", romaji: "kai", strokes: 4, radical: "人", gifFile: "kai_mediate.gif" },
    { character: "依", meaning: "Reliant / Depend", romaji: "i", strokes: 8, radical: "人", gifFile: "i_reliant.gif" },

    // Math, Spacing & Traces
    { character: "偶", meaning: "Accident / Even number", romaji: "guu", strokes: 11, radical: "人", gifFile: "guu.gif" },
    { character: "奇", meaning: "Strange / Odd number", romaji: "ki", strokes: 8, radical: "大", gifFile: "ki_strange.gif" },
    { character: "距", meaning: "Distance", romaji: "kyo", strokes: 12, radical: "足", gifFile: "kyo_distance.gif" },
    { character: "離", meaning: "Detach / Separate", romaji: "ri / hana.reru", strokes: 18, radical: "隹", gifFile: "hanareru.gif" },
    { character: "跡", meaning: "Mark / Trace", romaji: "seki / ato", strokes: 13, radical: "足", gifFile: "ato.gif" },

    // Time, Routine & Limits
    { character: "暮", meaning: "Livelihood / Sunset", romaji: "bo / ku.rasu", strokes: 14, radical: "日", gifFile: "kurasu.gif" },
    { character: "刻", meaning: "Engrave / Time", romaji: "koku / kiza.mu", strokes: 8, radical: "刀", gifFile: "kizamu.gif" },
    { character: "普", meaning: "Universal / Normal", romaji: "fu", strokes: 12, radical: "日", gifFile: "fu_normal.gif" },
    { character: "慣", meaning: "Accustomed / Habit", romaji: "kan / na.reru", strokes: 14, radical: "心", gifFile: "nareru.gif" },
    { character: "巨", meaning: "Giant", romaji: "kyo", strokes: 4, radical: "工", gifFile: "kyo_giant.gif" },
    { character: "超", meaning: "Super / Exceed", romaji: "chou / ko.eru", strokes: 12, radical: "辶", gifFile: "chou_super.gif" },
    { character: "極", meaning: "Extreme / Poles", romaji: "kyoku / kiwa.meru", strokes: 12, radical: "木", gifFile: "kyoku.gif" },
    { character: "限", meaning: "Limit", romaji: "gen / kagi.ru", strokes: 9, radical: "阜", gifFile: "kagiru.gif" },
    { character: "境", meaning: "Boundary / Border", romaji: "kyou / sakai", strokes: 14, radical: "土", gifFile: "sakai.gif" },
    { character: "域", meaning: "Region / Zone", romaji: "iki", strokes: 11, radical: "土", gifFile: "iki.gif" },
    { character: "周", meaning: "Circumference / Around", romaji: "shuu / mawa.ri", strokes: 8, radical: "口", gifFile: "mawari.gif" },

    // Qualities, Tastes & States
    { character: "替", meaning: "Exchange / Replace", romaji: "tai / ka.eru", strokes: 12, radical: "日", gifFile: "kaeru_replace.gif" },
    { character: "純", meaning: "Pure", romaji: "jun", strokes: 10, radical: "糸", gifFile: "jun.gif" },
    { character: "粋", meaning: "Chic / Essence", romaji: "sui / iki", strokes: 10, radical: "米", gifFile: "iki_chic.gif" },
    { character: "快", meaning: "Pleasant / Cheerful", romaji: "kai / kokoroyo.i", strokes: 7, radical: "心", gifFile: "kokoroyoi.gif" },
    { character: "甘", meaning: "Sweet / Naive", romaji: "kan / ama.i", strokes: 5, radical: "甘", gifFile: "amai.gif" },
    { character: "濃", meaning: "Thick / Dense", romaji: "nou / ko.i", strokes: 16, radical: "水", gifFile: "koi_dense.gif" },
    { character: "薄", meaning: "Thin / Dilute", romaji: "haku / usu.i", strokes: 16, radical: "艸", gifFile: "usui.gif" },
    { character: "暖", meaning: "Warm (weather)", romaji: "dan / atata.kai", strokes: 13, radical: "日", gifFile: "atatakai_weather.gif" },

    // Household, Maintenance & Chores
    { character: "濯", meaning: "Laundry / Wash", romaji: "taku", strokes: 17, radical: "水", gifFile: "taku.gif" },
    { character: "燥", meaning: "Dry up", romaji: "sou", strokes: 17, radical: "火", gifFile: "sou_dry.gif" },
    { character: "咲", meaning: "Bloom", romaji: "shou / sa.ku", strokes: 9, radical: "口", gifFile: "saku_bloom.gif" },
    { character: "塗", meaning: "Paint / Smear", romaji: "to / nu.ru", strokes: 13, radical: "土", gifFile: "nuru.gif" },
    { character: "磨", meaning: "Polish / Grind", romaji: "ma / miga.ku", strokes: 16, radical: "石", gifFile: "migaku.gif" },
    { character: "拭", meaning: "Wipe", romaji: "shoku / fu.ku", strokes: 9, radical: "手", gifFile: "fuku_wipe.gif" },
    { character: "炊", meaning: "Cook (grains)", romaji: "sui / ta.ku", strokes: 8, radical: "火", gifFile: "taku_cook.gif" },
    { character: "揚", meaning: "Hoist / Deep-fry", romaji: "you / a.geru", strokes: 12, radical: "手", gifFile: "ageru_fry.gif" },

    // Speech, Study & Logic
    { character: "述", meaning: "State / Mention", romaji: "jutsu / no.beru", strokes: 8, radical: "辶", gifFile: "noberu.gif" },
    { character: "講", meaning: "Lecture", romaji: "kou", strokes: 17, radical: "言", gifFile: "kou_lecture.gif" },
    { character: "訳", meaning: "Translate / Reason", romaji: "yaku / wake", strokes: 11, radical: "言", gifFile: "wake.gif" },
    { character: "討", meaning: "Debate / Attack", romaji: "tou / u.tsu", strokes: 10, radical: "言", gifFile: "tou_debate.gif" },
    { character: "訓", meaning: "Instruction", romaji: "kun", strokes: 10, radical: "言", gifFile: "kun.gif" },
    { character: "検", meaning: "Inspect / Verify", romaji: "ken", strokes: 12, radical: "木", gifFile: "ken_inspect.gif" },

    // Extreme Emotions & Mindset
    { character: "怖", meaning: "Frightening / Scared", romaji: "fu / kowa.i", strokes: 8, radical: "心", gifFile: "kowai.gif" },
    { character: "嫌", meaning: "Dislike / Hate", romaji: "ken / iya", strokes: 13, radical: "女", gifFile: "iya.gif" },
    { character: "憎", meaning: "Hate / Detest", romaji: "zou / niku.mu", strokes: 14, radical: "心", gifFile: "nikumu.gif" },
    { character: "慰", meaning: "Console / Comfort", romaji: "i / nagusa.meru", strokes: 15, radical: "心", gifFile: "nagusameru.gif" },
    { character: "狂", meaning: "Crazy / Go mad", romaji: "kyou / kuru.u", strokes: 7, radical: "犬", gifFile: "kuruu.gif" },

    // Status, Attributes & Conflict
    { character: "恵", meaning: "Blessing / Favor", romaji: "kei / megu.mu", strokes: 10, radical: "心", gifFile: "megumu.gif" },
    { character: "賢", meaning: "Wise / Clever", romaji: "ken / kashiko.i", strokes: 15, radical: "貝", gifFile: "kashikoi.gif" },
    { character: "誇", meaning: "Boast / Proud", romaji: "ko / hoko.ru", strokes: 13, radical: "言", gifFile: "hokoru.gif" },
    { character: "豪", meaning: "Overpowering / Great", romaji: "gou", strokes: 14, radical: "豕", gifFile: "gou_great.gif" },
    { character: "劣", meaning: "Inferior", romaji: "retsu / oto.ru", strokes: 6, radical: "力", gifFile: "otoru.gif" },
    { character: "秀", meaning: "Excel / Outstanding", romaji: "shuu / hii.deru", strokes: 7, radical: "禾", gifFile: "hiideru.gif" },
    { character: "撃", meaning: "Attack / Shoot", romaji: "geki / u.tsu", strokes: 15, radical: "手", gifFile: "geki_attack.gif" },
    { character: "縛", meaning: "Tie up / Bind", romaji: "baku / shiba.ru", strokes: 16, radical: "糸", gifFile: "shibaru.gif" },
    { character: "獲", meaning: "Seize / Acquire", romaji: "kaku / e.ru", strokes: 16, radical: "犬", gifFile: "eru_seize.gif" },
    { character: "攻", meaning: "Aggression / Attack", romaji: "kou / se.meru", strokes: 7, radical: "攴", gifFile: "semeru.gif" },
    { character: "盾", meaning: "Shield", romaji: "jun / tate", strokes: 9, radical: "目", gifFile: "tate.gif" },
    { character: "乱", meaning: "Riot / Disarray", romaji: "ran / mida.reru", strokes: 7, radical: "乙", gifFile: "midareru.gif" },
    { character: "暴", meaning: "Violent / Outburst", romaji: "bou / aba.reru", strokes: 15, radical: "日", gifFile: "abareru.gif" },

    // Agreement, Denial & Judgment
    { character: "承", meaning: "Acquiesce / Hear", romaji: "shou / uketamawa.ru", strokes: 8, radical: "手", gifFile: "shou_acquiesce.gif" },
    { character: "諾", meaning: "Consent", romaji: "daku", strokes: 15, radical: "言", gifFile: "daku.gif" },
    { character: "否", meaning: "Negate / No", romaji: "hi / ina", strokes: 7, radical: "口", gifFile: "hi_no.gif" },
    { character: "肯", meaning: "Agree / Affirm", romaji: "kou", strokes: 8, radical: "肉", gifFile: "kou_agree.gif" },
    { character: "批", meaning: "Criticize", romaji: "hi", strokes: 7, radical: "手", gifFile: "hi_criticize.gif" },

    // Books, Publishing & Arts
    { character: "著", meaning: "Author / Publish", romaji: "cho / arawa.su", strokes: 11, radical: "艸", gifFile: "cho.gif" },
    { character: "筆", meaning: "Writing brush", romaji: "hitsu / fude", strokes: 12, radical: "竹", gifFile: "fude.gif" },
    { character: "描", meaning: "Draw / Sketch", romaji: "byou / ega.ku", strokes: 11, radical: "手", gifFile: "egaku.gif" },
    { character: "載", meaning: "Publish / Ride", romaji: "sai / no.seru", strokes: 13, radical: "車", gifFile: "noseru_publish.gif" },
    { character: "誌", meaning: "Magazine / Document", romaji: "shi", strokes: 14, radical: "言", gifFile: "shi_magazine.gif" },
    { character: "籍", meaning: "Enroll / Register", romaji: "seki", strokes: 20, radical: "竹", gifFile: "seki_register.gif" },
    { character: "冊", meaning: "Tome / Counter for books", romaji: "satsu", strokes: 5, radical: "冂", gifFile: "satsu_tome.gif" },
    { character: "編", meaning: "Compile / Knit", romaji: "hen / a.mu", strokes: 15, radical: "糸", gifFile: "amu_knit.gif" },
    { character: "翻", meaning: "Flip / Translate", romaji: "hon / hirugae.ru", strokes: 18, radical: "羽", gifFile: "hirugaeru.gif" },

    // Movement, Order & Routes
    { character: "移", meaning: "Shift / Move", romaji: "i / utsu.ru", strokes: 11, radical: "禾", gifFile: "utsuru.gif" },
    { character: "順", meaning: "Order / Turn", romaji: "jun", strokes: 12, radical: "頁", gifFile: "jun_order.gif" },
    { character: "列", meaning: "Row / Line", romaji: "retsu", strokes: 6, radical: "刀", gifFile: "retsu.gif" },
    { character: "環", meaning: "Ring / Circle", romaji: "kan", strokes: 17, radical: "玉", gifFile: "kan_ring.gif" },
    { character: "巡", meaning: "Patrol / Go around", romaji: "jun / megu.ru", strokes: 6, radical: "辶", gifFile: "meguru.gif" },
    { character: "途", meaning: "Route / Way", romaji: "to", strokes: 10, radical: "辶", gifFile: "to_route.gif" },

    // Form, Condition & Structure
    { character: "造", meaning: "Create / Build", romaji: "zou / tsuku.ru", strokes: 10, radical: "辶", gifFile: "tsukuru_create.gif" },
    { character: "型", meaning: "Model / Mold", romaji: "kei / kata", strokes: 9, radical: "土", gifFile: "kata_model.gif" },
    { character: "姿", meaning: "Figure / Shape", romaji: "shi / sugata", strokes: 9, radical: "女", gifFile: "sugata.gif" },
    { character: "容", meaning: "Contain / Form", romaji: "you", strokes: 10, radical: "宀", gifFile: "you_contain.gif" },
    { character: "況", meaning: "Condition / Situation", romaji: "kyou", strokes: 8, radical: "水", gifFile: "kyou_condition.gif" },

    // Expansion, Reduction & Dynamics
    { character: "拡", meaning: "Broaden / Expand", romaji: "kaku / hiro.geru", strokes: 8, radical: "手", gifFile: "hirogeru_expand.gif" },
    { character: "張", meaning: "Stretch / Pull", romaji: "chou / ha.ru", strokes: 11, radical: "弓", gifFile: "haru_stretch.gif" },
    { character: "縮", meaning: "Shrink", romaji: "shuku / chiji.mu", strokes: 17, radical: "糸", gifFile: "chijimu.gif" },
    { character: "伸", meaning: "Extend / Stretch", romaji: "shin / no.biru", strokes: 7, radical: "人", gifFile: "nobiru_extend.gif" },
    { character: "膨", meaning: "Swell / Expand", romaji: "bou / fukura.mu", strokes: 16, radical: "肉", gifFile: "fukuramu.gif" },
    { character: "積", meaning: "Accumulate / Pile", romaji: "seki / tsu.mu", strokes: 16, radical: "禾", gifFile: "tsumu.gif" },
    { character: "埋", meaning: "Bury / Fill up", romaji: "mai / u.meru", strokes: 10, radical: "土", gifFile: "umeru.gif" },

    // Water, Animals & Wild Forces
    { character: "畜", meaning: "Livestock", romaji: "chiku", strokes: 10, radical: "田", gifFile: "chiku.gif" },
    { character: "獣", meaning: "Beast / Animal", romaji: "juu / kemono", strokes: 15, radical: "犬", gifFile: "kemono.gif" },
    { character: "狩", meaning: "Hunt", romaji: "shu / ka.ru", strokes: 9, radical: "犬", gifFile: "karu.gif" },
    { character: "滴", meaning: "Drop / Drip", romaji: "teki / shizuku", strokes: 14, radical: "水", gifFile: "shizuku.gif" },
    { character: "潜", meaning: "Submerge / Hide", romaji: "sen / hiso.mu", strokes: 15, radical: "水", gifFile: "hisomu.gif" },
    { character: "浪", meaning: "Wandering / Waves", romaji: "rou", strokes: 10, radical: "水", gifFile: "rou_wandering.gif" },
    { character: "津", meaning: "Haven / Port", romaji: "shin / tsu", strokes: 9, radical: "水", gifFile: "tsu.gif" },
    { character: "漏", meaning: "Leak / Escape", romaji: "rou / mo.reru", strokes: 14, radical: "水", gifFile: "moreru_leak.gif" },

    // Gravity, Impact & Destruction
    { character: "傾", meaning: "Lean / Incline", romaji: "kei / katamu.ku", strokes: 13, radical: "人", gifFile: "katamuku.gif" },
    { character: "倒", meaning: "Collapse / Fall", romaji: "tou / tao.reru", strokes: 10, radical: "人", gifFile: "taoreru.gif" },
    { character: "崩", meaning: "Crumble / Destroy", romaji: "hou / kuzu.reru", strokes: 11, radical: "山", gifFile: "kuzureru.gif" },
    { character: "跳", meaning: "Hop / Jump", romaji: "chou / to.bu", strokes: 13, radical: "足", gifFile: "tobu_jump.gif" },
    { character: "滑", meaning: "Slide / Slip", romaji: "katsu / sube.ru", strokes: 13, radical: "水", gifFile: "suberu.gif" },
    { character: "砕", meaning: "Smash / Break", romaji: "sai / kuda.ku", strokes: 9, radical: "石", gifFile: "kudaku.gif" },
    { character: "裂", meaning: "Split / Tear", romaji: "retsu / sa.ku", strokes: 12, radical: "衣", gifFile: "saku_tear.gif" },

    // Architecture, Structures & Dwellings
    { character: "殿", meaning: "Lord / Hall", romaji: "den / tono", strokes: 13, radical: "殳", gifFile: "tono.gif" },
    { character: "城", meaning: "Castle", romaji: "jou / shiro", strokes: 9, radical: "土", gifFile: "shiro.gif" },
    { character: "壁", meaning: "Wall", romaji: "heki / kabe", strokes: 16, radical: "土", gifFile: "kabe.gif" },
    { character: "柱", meaning: "Pillar", romaji: "chuu / hashira", strokes: 9, radical: "木", gifFile: "hashira.gif" },
    { character: "床", meaning: "Floor / Bed", romaji: "shou / yuka", strokes: 7, radical: "广", gifFile: "yuka.gif" },
    { character: "軒", meaning: "Eaves", romaji: "ken / noki", strokes: 10, radical: "車", gifFile: "noki.gif" },
    { character: "畳", meaning: "Tatami mat / Fold", romaji: "jou / tatami", strokes: 12, radical: "田", gifFile: "tatami.gif" },
    { character: "扉", meaning: "Door", romaji: "hi / tobira", strokes: 12, radical: "戸", gifFile: "tobira.gif" },
    { character: "倉", meaning: "Warehouse / Storehouse", romaji: "sou / kura", strokes: 10, radical: "人", gifFile: "kura_warehouse.gif" },
    { character: "郊", meaning: "Suburbs", romaji: "kou", strokes: 9, radical: "邑", gifFile: "kou_suburbs.gif" },

    // Metals, Tools & Household Items
    { character: "鏡", meaning: "Mirror", romaji: "kyou / kagami", strokes: 19, radical: "金", gifFile: "kagami.gif" },
    { character: "鈴", meaning: "Small bell", romaji: "rin / suzu", strokes: 13, radical: "金", gifFile: "suzu.gif" },
    { character: "鉢", meaning: "Bowl / Pot", romaji: "hachi", strokes: 13, radical: "金", gifFile: "hachi.gif" },
    { character: "銭", meaning: "Coin / Money", romaji: "sen / zeni", strokes: 14, radical: "金", gifFile: "zeni.gif" },
    { character: "鍋", meaning: "Pot / Pan", romaji: "ka / nabe", strokes: 17, radical: "金", gifFile: "nabe.gif" },
    { character: "鍵", meaning: "Key", romaji: "ken / kagi", strokes: 17, radical: "金", gifFile: "kagi.gif" },
    { character: "鎖", meaning: "Chain", romaji: "sa / kusari", strokes: 18, radical: "金", gifFile: "kusari.gif" },
    { character: "鐘", meaning: "Bell / Chime", romaji: "shou / kane", strokes: 20, radical: "金", gifFile: "kane_bell.gif" },

    // Senses, Light & Intangibles
    { character: "影", meaning: "Shadow / Silhouette", romaji: "ei / kage", strokes: 15, radical: "彡", gifFile: "kage.gif" },
    { character: "闇", meaning: "Darkness", romaji: "an / yami", strokes: 17, radical: "門", gifFile: "yami.gif" },
    { character: "輝", meaning: "Radiance / Shine", romaji: "ki / kagaya.ku", strokes: 15, radical: "車", gifFile: "kagayaku.gif" },
    { character: "響", meaning: "Echo / Resound", romaji: "kyou / hibi.ku", strokes: 20, radical: "音", gifFile: "hibiku.gif" },
    { character: "香", meaning: "Incense / Scent", romaji: "kou / kao.ri", strokes: 9, radical: "香", gifFile: "kaori.gif" },
    { character: "魅", meaning: "Fascination / Charm", romaji: "mi", strokes: 15, radical: "鬼", gifFile: "mi_charm.gif" },
    { character: "魂", meaning: "Soul / Spirit", romaji: "kon / tamashii", strokes: 14, radical: "鬼", gifFile: "tamashii.gif" },
    { character: "幻", meaning: "Illusion / Phantom", romaji: "gen / maboroshi", strokes: 4, radical: "幺", gifFile: "maboroshi.gif" },

    // Psychology, Mentality & Deep Emotion
    { character: "悟", meaning: "Enlightenment / Realize", romaji: "go / sato.ru", strokes: 10, radical: "心", gifFile: "satoru.gif" },
    { character: "憶", meaning: "Recollection / Memory", romaji: "oku", strokes: 16, radical: "心", gifFile: "oku_memory.gif" },
    { character: "慌", meaning: "Panic / Flustered", romaji: "kou / awa.teru", strokes: 12, radical: "心", gifFile: "awateru.gif" },
    { character: "惜", meaning: "Regrettable / Pity", romaji: "seki / o.shii", strokes: 11, radical: "心", gifFile: "oshii.gif" },
    { character: "焦", meaning: "Char / Impatient", romaji: "shou / ase.ru", strokes: 12, radical: "火", gifFile: "aseru.gif" },
    { character: "嘆", meaning: "Lament / Sigh", romaji: "tan / nage.ku", strokes: 13, radical: "口", gifFile: "nageku.gif" },
    { character: "憂", meaning: "Melancholy / Worry", romaji: "yuu / ure.eru", strokes: 15, radical: "心", gifFile: "ureeru.gif" },
    { character: "憤", meaning: "Resentment", romaji: "fun / ikidoo.ru", strokes: 15, radical: "心", gifFile: "ikidooru.gif" },
    { character: "慕", meaning: "Adore / Yearn for", romaji: "bo / shita.u", strokes: 14, radical: "心", gifFile: "shitau.gif" },
    { character: "憧", meaning: "Long for / Admire", romaji: "shou / akoga.reru", strokes: 15, radical: "心", gifFile: "akogareru.gif" },
    { character: "怠", meaning: "Neglect / Lazy", romaji: "tai / okota.ru", strokes: 9, radical: "心", gifFile: "okotaru.gif" },

    // Life Cycle, Body States & Ceremonies
    { character: "睡", meaning: "Sleep / Drowsy", romaji: "sui", strokes: 13, radical: "目", gifFile: "sui_sleep.gif" },
    { character: "裸", meaning: "Naked / Nude", romaji: "ra / hadaka", strokes: 13, radical: "衣", gifFile: "hadaka.gif" },
    { character: "寿", meaning: "Longevity / Congrats", romaji: "ju / kotobuki", strokes: 7, radical: "寸", gifFile: "kotobuki.gif" },
    { character: "葬", meaning: "Funeral / Bury", romaji: "sou / houmu.ru", strokes: 12, radical: "艸", gifFile: "houmuru.gif" },
    { character: "墓", meaning: "Grave / Tomb", romaji: "bo / haka", strokes: 13, radical: "土", gifFile: "haka.gif" },

    // Dynamic Physical Actions
    { character: "踊", meaning: "Dance", romaji: "you / odo.ru", strokes: 14, radical: "足", gifFile: "odoru.gif" },
    { character: "蹴", meaning: "Kick", romaji: "shuu / ke.ru", strokes: 19, radical: "足", gifFile: "keru.gif" },
    { character: "殴", meaning: "Strike / Beat", romaji: "ou / nagu.ru", strokes: 8, radical: "殳", gifFile: "naguru.gif" },
    { character: "挟", meaning: "Pinch / Interpose", romaji: "kyou / hasa.mu", strokes: 9, radical: "手", gifFile: "hasamu.gif" },
    { character: "絞", meaning: "Wring / Squeeze", romaji: "kou / shibo.ru", strokes: 12, radical: "糸", gifFile: "shiboru.gif" },
    { character: "括", meaning: "Bundle / Fasten", romaji: "katsu / kuku.ru", strokes: 9, radical: "手", gifFile: "kukuru.gif" },
    { character: "摘", meaning: "Pluck / Pick", romaji: "teki / tsu.mu", strokes: 14, radical: "手", gifFile: "tsumu_pluck.gif" },
    { character: "擦", meaning: "Rub / Chafe", romaji: "satsu / su.ru", strokes: 17, radical: "手", gifFile: "suru_rub.gif" },

    // Social Action, Encouragement & Compromise
    { character: "伴", meaning: "Accompany", romaji: "han / tomona.u", strokes: 7, radical: "人", gifFile: "tomonau.gif" },
    { character: "勧", meaning: "Recommend / Advise", romaji: "kan / susu.meru", strokes: 13, radical: "力", gifFile: "susumeru_recommend.gif" },
    { character: "励", meaning: "Encourage", romaji: "rei / hage.masu", strokes: 7, radical: "力", gifFile: "hagemasu.gif" },
    { character: "妥", meaning: "Compromise / Gentle", romaji: "da", strokes: 7, radical: "女", gifFile: "da_compromise.gif" },
    { character: "尽", meaning: "Exhaust / Use up", romaji: "jin / tsu.kusu", strokes: 6, radical: "尸", gifFile: "tsukusu.gif" },
    { character: "充", meaning: "Fill / Allot", romaji: "juu / a.teru", strokes: 6, radical: "儿", gifFile: "ateru_fill.gif" },
    { character: "免", meaning: "Excuse / Dismiss", romaji: "men / manuga.reru", strokes: 8, radical: "儿", gifFile: "manugareru.gif" },
    { character: "冗", meaning: "Superfluous / Useless", romaji: "jou", strokes: 4, radical: "冖", gifFile: "jou_superfluous.gif" },
    { character: "堅", meaning: "Strict / Hard", romaji: "ken / kata.i", strokes: 12, radical: "土", gifFile: "katai_strict.gif" },
    { character: "穏", meaning: "Calm / Peaceful", romaji: "on / oda.yaka", strokes: 16, radical: "禾", gifFile: "odayaka.gif" },

    // Movement, Manipulation & Wait
    { character: "滞", meaning: "Stagnate / Delay", romaji: "tai / todokoo.ru", strokes: 13, radical: "水", gifFile: "todokooru.gif" },
    { character: "赴", meaning: "Proceed to / Head for", romaji: "fu / omomu.ku", strokes: 9, radical: "走", gifFile: "omomuku.gif" },
    { character: "墜", meaning: "Crash / Fall", romaji: "tsui / o.chiru", strokes: 15, radical: "土", gifFile: "ochiru_crash.gif" },
    { character: "挑", meaning: "Challenge", romaji: "chou / ido.mu", strokes: 9, radical: "手", gifFile: "idomu.gif" },
    { character: "控", meaning: "Refrain / Wait", romaji: "kou / hika.eru", strokes: 11, radical: "手", gifFile: "hikaeru.gif" },
    { character: "握", meaning: "Grasp / Grip", romaji: "aku / nigi.ru", strokes: 12, radical: "手", gifFile: "nigiru.gif" },
    { character: "揺", meaning: "Shake / Sway", romaji: "you / yu.reru", strokes: 12, radical: "手", gifFile: "yureru.gif" },
    { character: "操", meaning: "Manipulate / Steer", romaji: "sou / ayatsu.ru", strokes: 16, radical: "手", gifFile: "ayatsuru.gif" },
    { character: "敷", meaning: "Spread / Lay out", romaji: "fu / shi.ku", strokes: 15, radical: "攴", gifFile: "shiku.gif" },
    { character: "稼", meaning: "Earn income / Labor", romaji: "ka / kase.gu", strokes: 15, radical: "禾", gifFile: "kasegu.gif" },

    // Food, Drinks & Agriculture
    { character: "杯", meaning: "Cup / Glass", romaji: "hai / sakazuki", strokes: 8, radical: "木", gifFile: "sakazuki.gif" },
    { character: "汁", meaning: "Soup / Juice", romaji: "juu / shiru", strokes: 5, radical: "水", gifFile: "shiru.gif" },
    { character: "酢", meaning: "Vinegar", romaji: "saku / su", strokes: 12, radical: "酉", gifFile: "su_vinegar.gif" },
    { character: "糖", meaning: "Sugar", romaji: "tou", strokes: 16, radical: "米", gifFile: "tou_sugar.gif" },
    { character: "菓", meaning: "Confectionery / Sweets", romaji: "ka", strokes: 11, radical: "艸", gifFile: "ka_sweets.gif" },
    { character: "鮮", meaning: "Fresh / Vivid", romaji: "sen / aza.yaka", strokes: 17, radical: "魚", gifFile: "azayaka.gif" },
    { character: "穫", meaning: "Harvest", romaji: "kaku", strokes: 18, radical: "禾", gifFile: "kaku_harvest.gif" },
    { character: "茂", meaning: "Overgrown / Luxuriant", romaji: "mo / shige.ru", strokes: 8, radical: "艸", gifFile: "shigeru.gif" },
    { character: "零", meaning: "Zero / Spill", romaji: "rei / zero", strokes: 13, radical: "雨", gifFile: "rei_zero.gif" },

    // Time, Space, Mysticism & Status
    { character: "幕", meaning: "Curtain / Act (play)", romaji: "maku / baku", strokes: 13, radical: "巾", gifFile: "maku.gif" },
    { character: "宵", meaning: "Evening / Early night", romaji: "shou / yoi", strokes: 10, radical: "宀", gifFile: "yoi.gif" },
    { character: "宴", meaning: "Banquet / Feast", romaji: "en / utage", strokes: 10, radical: "宀", gifFile: "utage.gif" },
    { character: "暫", meaning: "Temporarily", romaji: "zan", strokes: 15, radical: "日", gifFile: "zan_temp.gif" },
    { character: "暁", meaning: "Dawn / Daybreak", romaji: "gyou / akatsuki", strokes: 12, radical: "日", gifFile: "akatsuki.gif" },
    { character: "暦", meaning: "Calendar", romaji: "reki / koyomi", strokes: 14, radical: "日", gifFile: "koyomi.gif" },
    { character: "魔", meaning: "Magic / Demon", romaji: "ma", strokes: 21, radical: "鬼", gifFile: "ma_magic.gif" },
    { character: "霊", meaning: "Spirit / Soul", romaji: "rei / tama", strokes: 15, radical: "雨", gifFile: "rei_spirit.gif" },
    { character: "仙", meaning: "Hermit / Wizard", romaji: "sen", strokes: 5, radical: "人", gifFile: "sen_hermit.gif" },
    { character: "冠", meaning: "Crown", romaji: "kan / kanmuri", strokes: 9, radical: "冖", gifFile: "kanmuri.gif" },

    // Extremes, Dwellings & Sacrifice
    { character: "麗", meaning: "Lovely / Beautiful", romaji: "rei / uruwa.shii", strokes: 19, radical: "鹿", gifFile: "uruwashii.gif" },
    { character: "融", meaning: "Dissolve / Finance", romaji: "yuu", strokes: 16, radical: "虫", gifFile: "yuu_finance.gif" },
    { character: "郷", meaning: "Hometown / Village", romaji: "kyou / sato", strokes: 11, radical: "邑", gifFile: "sato.gif" },
    { character: "邸", meaning: "Mansion / Residence", romaji: "tei", strokes: 7, radical: "邑", gifFile: "tei_mansion.gif" },
    { character: "洞", meaning: "Cave / Den", romaji: "dou / hora", strokes: 9, radical: "水", gifFile: "hora.gif" },
    { character: "猛", meaning: "Fierce / Savage", romaji: "mou", strokes: 11, radical: "犬", gifFile: "mou_fierce.gif" },
    { character: "猟", meaning: "Hunting", romaji: "ryou", strokes: 11, radical: "犬", gifFile: "ryou_hunting.gif" },
    { character: "犠", meaning: "Sacrifice", romaji: "gi", strokes: 17, radical: "牛", gifFile: "gi_sacrifice.gif" },
    { character: "牲", meaning: "Animal sacrifice", romaji: "sei", strokes: 9, radical: "牛", gifFile: "sei_sacrifice.gif" },
    { character: "稿", meaning: "Draft / Manuscript", romaji: "kou", strokes: 15, radical: "禾", gifFile: "kou_draft.gif" },

    // Philosophy, Logic & Abstract Traits
    { character: "哲", meaning: "Philosophy / Sage", romaji: "tetsu", strokes: 10, radical: "口", gifFile: "tetsu.gif" },
    { character: "倫", meaning: "Ethics / Companion", romaji: "rin", strokes: 10, radical: "人", gifFile: "rin_ethics.gif" },
    { character: "偏", meaning: "Biased / Lean", romaji: "hen / katayo.ru", strokes: 11, radical: "人", gifFile: "katayoru.gif" },
    { character: "妥", meaning: "Gentle / Compromise", romaji: "da", strokes: 7, radical: "女", gifFile: "da.gif" },
    { character: "孤", meaning: "Orphan / Alone", romaji: "ko", strokes: 9, radical: "子", gifFile: "ko_alone.gif" },
    { character: "恒", meaning: "Constant / Always", romaji: "kou", strokes: 9, radical: "心", gifFile: "kou_constant.gif" },
    { character: "敏", meaning: "Agile / Clever", romaji: "bin", strokes: 10, radical: "攴", gifFile: "bin_agile.gif" },
    { character: "愚", meaning: "Foolish", romaji: "gu / oro.ka", strokes: 13, radical: "心", gifFile: "oroka.gif" },
    { character: "巧", meaning: "Adept / Skill", romaji: "kou / taku.mi", strokes: 5, radical: "工", gifFile: "takumi.gif" },

    // Communication, Records & Media
    { character: "版", meaning: "Printing block / Edition", romaji: "han", strokes: 8, radical: "片", gifFile: "han.gif" },
    { character: "覧", meaning: "Look at / See", romaji: "ran", strokes: 17, radical: "見", gifFile: "ran.gif" },
    { character: "掲", meaning: "Put up (a notice)", romaji: "kei / kaka.geru", strokes: 11, radical: "手", gifFile: "kakageru.gif" },
    { character: "抄", meaning: "Extract / Copy", romaji: "shou", strokes: 7, radical: "手", gifFile: "shou_extract.gif" },
    { character: "添", meaning: "Append / Attach", romaji: "ten / so.eru", strokes: 11, radical: "水", gifFile: "soeru.gif" },
    { character: "誇", meaning: "Boast / Pride", romaji: "ko / hoko.ru", strokes: 13, radical: "言", gifFile: "hokoru_pride.gif" },

    // Advanced Actions & Physical States
    { character: "縛", meaning: "Bind / Tie", romaji: "baku / shiba.ru", strokes: 16, radical: "糸", gifFile: "shibaru_bind.gif" },
    { character: "縫", meaning: "Sew", romaji: "hou / nu.u", strokes: 16, radical: "糸", gifFile: "nuu_sew.gif" },
    { character: "裂", meaning: "Tear / Rip", romaji: "retsu / sa.ku", strokes: 12, radical: "衣", gifFile: "saku.gif" },
    { character: "覆", meaning: "Cover / Overturn", romaji: "fuku / oo.u", strokes: 18, radical: "襾", gifFile: "oou.gif" },
    { character: "狂", meaning: "Mad / Crazy", romaji: "kyou / kuru.u", strokes: 7, radical: "犬", gifFile: "kuruu_mad.gif" },
    { character: "飢", meaning: "Starve / Hungry", romaji: "ki / u.eru", strokes: 10, radical: "食", gifFile: "ueru_starve.gif" },
    { character: "芳", meaning: "Fragrant / Sweet-smelling", romaji: "hou / kanba.shii", strokes: 7, radical: "艸", gifFile: "kanbashii.gif" },
    { character: "臭", meaning: "Stinking / Smell", romaji: "shuu / kusa.i", strokes: 9, radical: "自", gifFile: "kusai.gif" },

    // Final Miscellany (Weather, Nature & Form)
    { character: "雷", meaning: "Thunder", romaji: "rai / kaminari", strokes: 13, radical: "雨", gifFile: "kaminari_thunder.gif" },
    { character: "雪", meaning: "Snow", romaji: "setsu / yuki", strokes: 11, radical: "雨", gifFile: "yuki_snow.gif" }, // Note: Reinforcing common N2 usage
    { character: "露", meaning: "Dew / Expose", romaji: "ro / tsuyu", strokes: 21, radical: "雨", gifFile: "tsuyu.gif" },
    { character: "陰", meaning: "Shade / Yin", romaji: "in / kage", strokes: 11, radical: "阜", gifFile: "kage_shade.gif" },
    { character: "殻", meaning: "Shell / Husk", romaji: "kaku / kara", strokes: 11, radical: "殳", gifFile: "kara.gif" },
    { character: "柄", meaning: "Pattern / Handle", romaji: "hei / gara", strokes: 9, radical: "木", gifFile: "gara.gif" }
  ]
};

export const kanjiByLevel_N1: Record<string, KanjiItem[]> = {
  "N1": [
    // Abstract States, Atmosphere & Emotions
    { character: "哀", meaning: "Pathetic / Grief", romaji: "ai / awa.re", strokes: 9, radical: "口", gifFile: "aware.gif" },
    { character: "曖", meaning: "Dark / Not clear", romaji: "ai", strokes: 17, radical: "日", gifFile: "ai_unclear.gif" },
    { character: "畏", meaning: "Fear / Majesty", romaji: "i / oso.reru", strokes: 9, radical: "田", gifFile: "osoreru_awe.gif" },
    { character: "鬱", meaning: "Gloom / Depression", romaji: "utsu", strokes: 29, radical: "鬯", gifFile: "utsu.gif" },
    { character: "怨", meaning: "Grudge / Resentment", romaji: "en / on", strokes: 9, radical: "心", gifFile: "on_grudge.gif" },
    { character: "艶", meaning: "Glossy / Charming", romaji: "en / tsuya", strokes: 19, radical: "色", gifFile: "tsuya.gif" },
    { character: "臆", meaning: "Cowardice / Timidity", romaji: "oku", strokes: 17, radical: "肉", gifFile: "oku_coward.gif" },
    { character: "苛", meaning: "Torment / Scold", romaji: "ka / ijime.ru", strokes: 8, radical: "艸", gifFile: "ijimeru.gif" },
    { character: "懐", meaning: "Pocket / Yearn for", romaji: "kai / futokoro", strokes: 16, radical: "心", gifFile: "futokoro.gif" },
    { character: "憾", meaning: "Remorse / Regret", romaji: "kan", strokes: 16, radical: "心", gifFile: "kan_remorse.gif" },

    // Social, Law & Government
    { character: "挨", meaning: "Push open / Greeting", romaji: "ai", strokes: 10, radical: "手", gifFile: "ai_greet.gif" },
    { character: "尉", meaning: "Military Officer", romaji: "i", strokes: 11, radical: "寸", gifFile: "i_officer.gif" },
    { character: "劾", meaning: "Censure / Investigate", romaji: "gai", strokes: 8, radical: "力", gifFile: "gai_censure.gif" },
    { character: "拐", meaning: "Kidnap / Falsify", romaji: "kai", strokes: 8, radical: "手", gifFile: "kai_kidnap.gif" },
    { character: "戒", meaning: "Commandment / Admonish", romaji: "kai / imashi.meru", strokes: 7, radical: "戈", gifFile: "imashimeru.gif" },
    { character: "轄", meaning: "Control / Jurisdiction", romaji: "katsu", strokes: 17, radical: "車", gifFile: "katsu_jurisdiction.gif" },
    { character: "監", meaning: "Oversee / Direct", romaji: "kan", strokes: 15, radical: "皿", gifFile: "kan_oversee.gif" },

    // Nature, Environment & Forms
    { character: "茨", meaning: "Briar / Thorn", romaji: "shi / ibara", strokes: 9, radical: "艸", gifFile: "ibara.gif" },
    { character: "岡", meaning: "Mount / Hill", romaji: "kou / oka", strokes: 8, radical: "山", gifFile: "oka.gif" },
    { character: "華", meaning: "Splendor / Flower", romaji: "ka / hana", strokes: 10, radical: "艸", gifFile: "hana_splendor.gif" },
    { character: "渦", meaning: "Whirlpool / Vortex", romaji: "ka / uzu", strokes: 12, radical: "水", gifFile: "uzu.gif" },
    { character: "垣", meaning: "Hedge / Fence", romaji: "en / kaki", strokes: 9, radical: "土", gifFile: "kaki_fence.gif" },
    { character: "潟", meaning: "Lagoon", romaji: "seki / kata", strokes: 15, radical: "水", gifFile: "kata_lagoon.gif" },
    { character: "褐", meaning: "Brown / Coarse", romaji: "katsu", strokes: 13, radical: "衣", gifFile: "katsu_brown.gif" },

    // Everyday Life, Actions & Objects
    { character: "宛", meaning: "Address / Allocate", romaji: "en / ate", strokes: 8, radical: "宀", gifFile: "ate.gif" },
    { character: "椅", meaning: "Chair", romaji: "i", strokes: 12, radical: "木", gifFile: "i_chair.gif" },
    { character: "卸", meaning: "Wholesale", romaji: "sha / oro.su", strokes: 9, radical: "卩", gifFile: "orosu_wholesale.gif" },
    { character: "架", meaning: "Erect / Frame", romaji: "ka / ka.keru", strokes: 9, radical: "木", gifFile: "ka_frame.gif" },
    { character: "嫁", meaning: "Bride / Marry into", romaji: "ka / yome", strokes: 13, radical: "女", gifFile: "yome.gif" },
    { character: "俺", meaning: "I / Me (masculine)", romaji: "en / ore", strokes: 10, radical: "人", gifFile: "ore.gif" },
    { character: "箇", meaning: "Counter for items", romaji: "ka", strokes: 14, radical: "竹", gifFile: "ka_item.gif" },
    { character: "勘", meaning: "Intuition / Perception", romaji: "kan", strokes: 11, radical: "力", gifFile: "kan_intuition.gif" },

    // Body, Health & Decay
    { character: "萎", meaning: "Wither / Droop", romaji: "i / na.eru", strokes: 11, radical: "艸", gifFile: "naeru.gif" },
    { character: "咽", meaning: "Throat", romaji: "etsu / nodo", strokes: 9, radical: "口", gifFile: "nodo_throat.gif" },
    { character: "淫", meaning: "Lewd / Obscene", romaji: "in / mida.ra", strokes: 11, radical: "水", gifFile: "midara.gif" },
    { character: "餓", meaning: "Starve", romaji: "ga / u.eru", strokes: 15, radical: "食", gifFile: "ga_starve.gif" },
    { character: "渇", meaning: "Thirst / Dry up", romaji: "katsu / kawa.ku", strokes: 11, radical: "水", gifFile: "kawaku_thirst.gif" },
    { character: "陥", meaning: "Collapse / Fall into", romaji: "kan / ochii.ru", strokes: 10, radical: "阜", gifFile: "ochiiru.gif" },

    // Abstract Measurements, Qualities & Concepts
    { character: "亜", meaning: "Asia / Sub-", romaji: "a", strokes: 7, radical: "二", gifFile: "a_asia.gif" },
    { character: "彙", meaning: "Vocabulary / Collection", romaji: "i", strokes: 13, radical: "彐", gifFile: "i_vocab.gif" },
    { character: "韻", meaning: "Rhyme / Tone", romaji: "in", strokes: 19, radical: "音", gifFile: "in_rhyme.gif" },
    { character: "媛", meaning: "Beautiful woman / Princess", romaji: "en / hime", strokes: 12, radical: "女", gifFile: "hime.gif" },
    { character: "旺", meaning: "Flourishing", romaji: "ou", strokes: 8, radical: "日", gifFile: "ou_flourish.gif" },
    { character: "佳", meaning: "Excellent / Beautiful", romaji: "ka", strokes: 8, radical: "人", gifFile: "ka_excellent.gif" },
    { character: "涯", meaning: "Horizon / Life", romaji: "gai", strokes: 11, radical: "水", gifFile: "gai_horizon.gif" },
    { character: "核", meaning: "Nucleus / Core", romaji: "kaku", strokes: 10, radical: "木", gifFile: "kaku_nucleus.gif" },
    { character: "寛", meaning: "Tolerant / Lenient", romaji: "kan", strokes: 13, radical: "宀", gifFile: "kan_tolerant.gif" },

    // Deception, Loss & Oppression
    { character: "欺", meaning: "Deceive", romaji: "gi / azamu.ku", strokes: 12, radical: "欠", gifFile: "azamuku.gif" },
    { character: "棄", meaning: "Abandon", romaji: "ki / su.teru", strokes: 13, radical: "木", gifFile: "suteru_abandon.gif" },
    { character: "虐", meaning: "Tyrannize / Oppress", romaji: "gyaku / shiita.geru", strokes: 9, radical: "虍", gifFile: "shiitageru.gif" },
    { character: "脅", meaning: "Threaten", romaji: "kyou / obiya.kasu", strokes: 10, radical: "肉", gifFile: "obiyakasu.gif" },
    { character: "虚", meaning: "Void / Emptiness", romaji: "kyo / uro", strokes: 11, radical: "虍", gifFile: "uro.gif" },

    // Pledges, Engagements & Rest
    { character: "契", meaning: "Pledge / Vow", romaji: "kei / chigi.ru", strokes: 9, radical: "大", gifFile: "chigiru.gif" },
    { character: "啓", meaning: "Enlighten / Disclose", romaji: "kei", strokes: 11, radical: "口", gifFile: "kei_enlighten.gif" },
    { character: "憩", meaning: "Recess / Rest", romaji: "kei / iko.i", strokes: 15, radical: "心", gifFile: "ikoi.gif" },
    { character: "遇", meaning: "Interview / Treat", romaji: "guu / ashi.rau", strokes: 12, radical: "辶", gifFile: "ashirau.gif" },
    { character: "携", meaning: "Portable / Carry", romaji: "kei / tazusa.eru", strokes: 13, radical: "手", gifFile: "tazusaeru.gif" },

    // Nature, Flora & Fauna
    { character: "菊", meaning: "Chrysanthemum", romaji: "kiku", strokes: 11, radical: "艸", gifFile: "kiku.gif" },
    { character: "鶏", meaning: "Chicken", romaji: "kei / niwatori", strokes: 19, radical: "鳥", gifFile: "niwatori.gif" },
    { character: "鯨", meaning: "Whale", romaji: "gei / kujira", strokes: 19, radical: "魚", gifFile: "kujira.gif" },
    { character: "亀", meaning: "Turtle / Tortoise", romaji: "ki / kame", strokes: 11, radical: "亀", gifFile: "kame.gif" },
    { character: "菌", meaning: "Germ / Fungus", romaji: "kin", strokes: 11, radical: "艸", gifFile: "kin.gif" },

    // Geography, Paths & Vehicles
    { character: "岐", meaning: "Branch off / Fork", romaji: "ki", strokes: 7, radical: "山", gifFile: "ki_fork.gif" },
    { character: "軌", meaning: "Rut / Orbit", romaji: "ki", strokes: 9, radical: "車", gifFile: "ki_orbit.gif" },
    { character: "峡", meaning: "Gorge / Ravine", romaji: "kyou", strokes: 9, radical: "山", gifFile: "kyou_gorge.gif" },
    { character: "騎", meaning: "Equestrian / Riding", romaji: "ki", strokes: 18, radical: "馬", gifFile: "ki_riding.gif" },
    { character: "艦", meaning: "Warship", romaji: "kan", strokes: 21, radical: "舟", gifFile: "kan_warship.gif" },

    // States, Time & Tension
    { character: "既", meaning: "Previously / Already", romaji: "ki / sude.ni", strokes: 10, radical: "旡", gifFile: "sudeni.gif" },
    { character: "緊", meaning: "Tense / Solid", romaji: "kin", strokes: 15, radical: "糸", gifFile: "kin_tense.gif" },
    { character: "凝", meaning: "Congeal / Stiffen", romaji: "gyou / kogo.ru", strokes: 16, radical: "冫", gifFile: "kogoru.gif" },
    { character: "琴", meaning: "Koto / Harp", romaji: "kin / koto", strokes: 12, radical: "玉", gifFile: "koto.gif" },
    { character: "斤", meaning: "Axe / Loaf counter", romaji: "kin", strokes: 4, radical: "斤", gifFile: "kin_axe.gif" },

    // Honor, Humility & Offerings
    { character: "勲", meaning: "Meritorious deed / Merit", romaji: "kun / isao", strokes: 15, radical: "力", gifFile: "isao.gif" },
    { character: "慶", meaning: "Jubilation / Congratulate", romaji: "kei / yoroko.bi", strokes: 15, radical: "心", gifFile: "yorokobi_kei.gif" },
    { character: "傑", meaning: "Greatness / Excellence", romaji: "ketsu / sugu.reru", strokes: 13, radical: "人", gifFile: "ketsu_great.gif" },
    { character: "献", meaning: "Offering / Present", romaji: "ken / tatematsu.ru", strokes: 13, radical: "犬", gifFile: "ken_offer.gif" },
    { character: "謙", meaning: "Modesty / Humility", romaji: "ken", strokes: 17, radical: "言", gifFile: "ken_modesty.gif" },
    { character: "顧", meaning: "Look back / Review", romaji: "ko / kaeri.miru", strokes: 21, radical: "頁", gifFile: "kaerimiru.gif" },
    { character: "懇", meaning: "Sociable / Courteous", romaji: "kon / nengoro", strokes: 17, radical: "心", gifFile: "kon_sociable.gif" },

    // Nature, Valleys & Insects
    { character: "薫", meaning: "Fragrant / Smell", romaji: "kun / kao.ru", strokes: 16, radical: "艸", gifFile: "kaoru_fragrant.gif" },
    { character: "渓", meaning: "Mountain stream / Valley", romaji: "kei / tani", strokes: 11, radical: "水", gifFile: "kei_valley.gif" },
    { character: "蛍", meaning: "Firefly", romaji: "kei / hotaru", strokes: 11, radical: "虫", gifFile: "hotaru.gif" },
    { character: "繭", meaning: "Cocoon", romaji: "ken / mayu", strokes: 18, radical: "糸", gifFile: "mayu.gif" },
    { character: "溝", meaning: "Ditch / Gutter", romaji: "kou / mizo", strokes: 13, radical: "水", gifFile: "mizo.gif" },
    { character: "坑", meaning: "Pit / Mine", romaji: "kou", strokes: 7, radical: "土", gifFile: "kou_pit.gif" },

    // Strings, Suspensions & Arcs
    { character: "顕", meaning: "Manifest / Clear", romaji: "ken / arawa.reru", strokes: 18, radical: "頁", gifFile: "ken_manifest.gif" },
    { character: "懸", meaning: "Suspend / Hang", romaji: "ken / ka.keru", strokes: 20, radical: "心", gifFile: "kakeru_suspend.gif" },
    { character: "弦", meaning: "Bowstring / Chord", romaji: "gen / tsuru", strokes: 8, radical: "弓", gifFile: "tsuru.gif" },
    { character: "弧", meaning: "Arc", romaji: "ko", strokes: 9, radical: "弓", gifFile: "ko_arc.gif" },
    { character: "綱", meaning: "Hawser / Rope", romaji: "kou / tsuna", strokes: 14, radical: "糸", gifFile: "tsuna.gif" },

    // Entertainment, Games & Commerce
    { character: "娯", meaning: "Recreation / Amusement", romaji: "go", strokes: 10, radical: "女", gifFile: "go_recreation.gif" },
    { character: "碁", meaning: "Go (board game)", romaji: "go", strokes: 13, radical: "石", gifFile: "go_game.gif" },
    { character: "鼓", meaning: "Drum / Beat", romaji: "ko / tsuzumi", strokes: 13, radical: "鼓", gifFile: "tsuzumi.gif" },
    { character: "購", meaning: "Subscription / Buy", romaji: "kou", strokes: 17, radical: "貝", gifFile: "kou_buy.gif" },
    { character: "項", meaning: "Clause / Paragraph", romaji: "kou", strokes: 12, radical: "頁", gifFile: "kou_clause.gif" },

    // Science, Strength & Extremes
    { character: "酵", meaning: "Fermentation", romaji: "kou", strokes: 14, radical: "酉", gifFile: "kou_ferment.gif" },
    { character: "衡", meaning: "Equilibrium / Scale", romaji: "kou", strokes: 16, radical: "行", gifFile: "kou_scale.gif" },
    { character: "剛", meaning: "Sturdy / Strong", romaji: "gou", strokes: 10, radical: "刀", gifFile: "gou_sturdy.gif" },
    { character: "拷", meaning: "Torture / Beat", romaji: "gou", strokes: 9, radical: "手", gifFile: "gou_torture.gif" },
    { character: "酷", meaning: "Cruel / Severe", romaji: "koku / hido.i", strokes: 14, radical: "酉", gifFile: "koku_cruel.gif" },

    // Justice, Lawsuits & Punishments
    { character: "獄", meaning: "Prison / Jail", romaji: "goku", strokes: 14, radical: "犬", gifFile: "goku_prison.gif" },
    { character: "訟", meaning: "Lawsuit", romaji: "shou", strokes: 11, radical: "言", gifFile: "shou_lawsuit.gif" },
    { character: "糾", meaning: "Twist / Investigate", romaji: "kyuu / tada.su", strokes: 9, radical: "糸", gifFile: "kyuu_twist.gif" },
    { character: "懲", meaning: "Penalize / Chastise", romaji: "chou / ko.riru", strokes: 19, radical: "心", gifFile: "chou_penalize.gif" },
    { character: "詐", meaning: "Deceive / Fraud", romaji: "sa / itsuwa.ru", strokes: 12, radical: "言", gifFile: "sa_fraud.gif" },

    // Liquids, Fats & Marrow
    { character: "脂", meaning: "Fat / Grease", romaji: "shi / abura", strokes: 10, radical: "肉", gifFile: "shi_fat.gif" },
    { character: "漆", meaning: "Lacquer / Varnish", romaji: "shitsu / urushi", strokes: 14, radical: "水", gifFile: "urushi.gif" },
    { character: "髄", meaning: "Marrow / Core", romaji: "zui", strokes: 19, radical: "骨", gifFile: "zui_marrow.gif" },
    { character: "漂", meaning: "Drift / Float", romaji: "hyou / tadayo.u", strokes: 14, radical: "水", gifFile: "tadayou.gif" },
    { character: "浄", meaning: "Pure / Cleanse", romaji: "jou / kiyo.meru", strokes: 9, radical: "水", gifFile: "jou_pure.gif" },

    // Status, Royalty & Feudal Japan
    { character: "侍", meaning: "Samurai / Serve", romaji: "ji / samurai", strokes: 8, radical: "人", gifFile: "samurai.gif" },
    { character: "爵", meaning: "Peerage / Baron", romaji: "shaku", strokes: 17, radical: "爪", gifFile: "shaku.gif" },
    { character: "賜", meaning: "Grant / Bestow", romaji: "shi / tamawa.ru", strokes: 15, radical: "貝", gifFile: "tamawaru.gif" },
    { character: "璽", meaning: "Emperor's Seal", romaji: "ji", strokes: 19, radical: "玉", gifFile: "ji_seal.gif" },
    { character: "侯", meaning: "Marquis / Lord", romaji: "kou", strokes: 9, radical: "人", gifFile: "kou_marquis.gif" },

    // Abstract Concepts & Extremes
    { character: "錯", meaning: "Confusion / Mix", romaji: "saku", strokes: 16, radical: "金", gifFile: "saku_confusion.gif" },
    { character: "惨", meaning: "Wretched / Disaster", romaji: "san / miza.ma", strokes: 11, radical: "心", gifFile: "mizama.gif" },
    { character: "慈", meaning: "Mercy / Affection", romaji: "ji / itsuku.shimu", strokes: 13, radical: "心", gifFile: "itsukushimu.gif" },
    { character: "邪", meaning: "Wicked / Evil", romaji: "ja / yokoashima", strokes: 8, radical: "邑", gifFile: "ja_wicked.gif" },
    { character: "殊", meaning: "Particularly / Special", romaji: "shu / koto", strokes: 10, radical: "歹", gifFile: "koto_special.gif" },
    { character: "粛", meaning: "Solemn / Quiet", romaji: "shuku", strokes: 11, radical: "聿", gifFile: "shuku_solemn.gif" },

    // Advanced Actions & Event Management
    { character: "催", meaning: "Hold (event) / Sponsor", romaji: "sai / moyoo.su", strokes: 13, radical: "人", gifFile: "moyoosu.gif" },
    { character: "削", meaning: "Shave / Plane", romaji: "saku / kezu.ru", strokes: 9, radical: "刀", gifFile: "kezuru.gif" },
    { character: "搾", meaning: "Squeeze / Extract", romaji: "saku / shibo.ru", strokes: 13, radical: "手", gifFile: "shiboru_extract.gif" },
    { character: "撮", meaning: "Snapshot / Take a photo", romaji: "satsu / to.ru", strokes: 15, radical: "手", gifFile: "toru_photo.gif" },
    { character: "遮", meaning: "Intercept / Block", romaji: "sha / saegi.ru", strokes: 14, radical: "辶", gifFile: "saegiru.gif" },

    // Economics, Compensation & Rewards
    { character: "譲", meaning: "Yield / Concede", romaji: "jou / yuzu.ru", strokes: 20, radical: "言", gifFile: "yuzuru.gif" },
    { character: "酬", meaning: "Repay / Reward", romaji: "shuu", strokes: 13, radical: "酉", gifFile: "shuu_reward.gif" },
    { character: "償", meaning: "Compensate / Make up for", romaji: "shou / tsuguna.u", strokes: 17, radical: "人", gifFile: "tsugunau.gif" },
    { character: "賦", meaning: "Levy / Tribute", romaji: "fu", strokes: 15, radical: "貝", gifFile: "fu_levy.gif" },
    { character: "奨", meaning: "Exhort / Urge", romaji: "shou / susu.meru", strokes: 13, radical: "大", gifFile: "shou_urge.gif" },

    // Family, Marriage & Status
    { character: "姻", meaning: "Matrimony / Marriage", romaji: "in", strokes: 9, radical: "女", gifFile: "in_matrimony.gif" },
    { character: "嫡", meaning: "Legitimate (wife/child)", romaji: "chaku", strokes: 14, radical: "女", gifFile: "chaku.gif" },
    { character: "寡", meaning: "Widow / Minority", romaji: "ka / yamome", strokes: 14, radical: "宀", gifFile: "yamome.gif" },
    { character: "賓", meaning: "V.I.P. / Guest", romaji: "hin", strokes: 15, radical: "貝", gifFile: "hin_guest.gif" },
    { character: "叙", meaning: "Confer / Relate", romaji: "jo", strokes: 9, radical: "又", gifFile: "jo_confer.gif" },

    // Senses, Face & Anatomy
    { character: "匂", meaning: "Scent / Smell", romaji: "nio.i / nio.u", strokes: 4, radical: "勹", gifFile: "nioi.gif" },
    { character: "嗅", meaning: "Sniff / Smell", romaji: "kyuu / ka.gu", strokes: 13, radical: "口", gifFile: "kagu.gif" },
    { character: "唾", meaning: "Saliva / Spit", romaji: "da / tsuba", strokes: 11, radical: "口", gifFile: "tsuba_saliva.gif" },
    { character: "瞳", meaning: "Pupil (eye)", romaji: "dou / hitomi", strokes: 17, radical: "目", gifFile: "hitomi.gif" },
    { character: "顎", meaning: "Jaw / Chin", romaji: "gaku / ago", strokes: 18, radical: "頁", gifFile: "ago.gif" },

    // Metals, Minerals & Chemistry
    { character: "硫", meaning: "Sulfur", romaji: "ryuu", strokes: 12, radical: "石", gifFile: "ryuu_sulfur.gif" },
    { character: "硝", meaning: "Saltpeter / Nitrate", romaji: "shou", strokes: 12, radical: "石", gifFile: "shou_nitrate.gif" },
    { character: "磁", meaning: "Magnet / Porcelain", romaji: "ji", strokes: 14, radical: "石", gifFile: "ji_magnet.gif" },
    { character: "鉛", meaning: "Lead (metal)", romaji: "en / namari", strokes: 13, radical: "金", gifFile: "namari.gif" },
    { character: "鋼", meaning: "Steel", romaji: "kou / hagane", strokes: 16, radical: "金", gifFile: "hagane.gif" },

    // Decay, Grief & Decline
    { character: "朽", meaning: "Decay / Rot", romaji: "kyuu / ku.chiru", strokes: 6, radical: "木", gifFile: "kuchiru.gif" },
    { character: "悼", meaning: "Lament / Mourn", romaji: "tou / ita.mu", strokes: 11, radical: "心", gifFile: "itamu.gif" },
    { character: "愁", meaning: "Sorrow / Grief", romaji: "shuu / ure.i", strokes: 13, radical: "心", gifFile: "urei.gif" },
    { character: "衰", meaning: "Decline / Wane", romaji: "sui / otoro.eru", strokes: 10, radical: "衣", gifFile: "otoroeru.gif" },
    { character: "忌", meaning: "Mourning / Abhor", romaji: "ki / i.mu", strokes: 7, radical: "心", gifFile: "imu_abhor.gif" },

    // Agriculture, Craft & Following
    { character: "穂", meaning: "Ear of grain", romaji: "sui / ho", strokes: 15, radical: "禾", gifFile: "ho_grain.gif" },
    { character: "匠", meaning: "Artisan / Mechanic", romaji: "shou / takumi", strokes: 6, radical: "匚", gifFile: "takumi_artisan.gif" },
    { character: "升", meaning: "Measuring box", romaji: "shou / masu", strokes: 4, radical: "十", gifFile: "masu.gif" },
    { character: "随", meaning: "Follow / Though", romaji: "zui", strokes: 12, radical: "阜", gifFile: "zui_follow.gif" },
    { character: "循", meaning: "Sequential / Circulate", romaji: "jun", strokes: 12, radical: "彳", gifFile: "jun_circulate.gif" },

    // Disease, Ailments & Medicine
    { character: "疫", meaning: "Epidemic", romaji: "eki", strokes: 9, radical: "疒", gifFile: "eki_epidemic.gif" },
    { character: "瘍", meaning: "Ulcer / Tumor", romaji: "you", strokes: 14, radical: "疒", gifFile: "you_ulcer.gif" },
    { character: "痘", meaning: "Pox / Smallpox", romaji: "tou", strokes: 12, radical: "疒", gifFile: "tou_pox.gif" },
    { character: "痢", meaning: "Diarrhea", romaji: "ri", strokes: 12, radical: "疒", gifFile: "ri_diarrhea.gif" },
    { character: "痴", meaning: "Stupid / Dementia", romaji: "chi", strokes: 13, radical: "疒", gifFile: "chi_stupid.gif" },

    // Water States, Rapids & Coastlines
    { character: "澄", meaning: "Clear / Lucid", romaji: "chou / su.mu", strokes: 15, radical: "水", gifFile: "sumu.gif" },
    { character: "濁", meaning: "Muddy / Impure", romaji: "daku / nigo.ru", strokes: 15, radical: "水", gifFile: "nigoru.gif" },
    { character: "滝", meaning: "Waterfall", romaji: "rou / taki", strokes: 13, radical: "水", gifFile: "taki.gif" },
    { character: "瀬", meaning: "Rapids / Current", romaji: "rai / se", strokes: 19, radical: "水", gifFile: "se.gif" },
    { character: "浦", meaning: "Bay / Creek", romaji: "ho / ura", strokes: 10, radical: "水", gifFile: "ura.gif" },

    // Speech, Poetry & Oaths
    { character: "誓", meaning: "Vow / Swear", romaji: "sei / chika.u", strokes: 14, radical: "言", gifFile: "chikau.gif" },
    { character: "諦", meaning: "Give up / Abandon", romaji: "tei / akira.meru", strokes: 16, radical: "言", gifFile: "akirameru.gif" },
    { character: "謎", meaning: "Riddle / Mystery", romaji: "me / nazo", strokes: 15, radical: "言", gifFile: "nazo.gif" },
    { character: "詠", meaning: "Compose (a poem)", romaji: "ei / yo.mu", strokes: 12, radical: "言", gifFile: "yomu_poem.gif" },
    { character: "諭", meaning: "Admonish / Persuade", romaji: "yu / sato.su", strokes: 16, radical: "言", gifFile: "satosu.gif" },

    // Restraint, Laying Down & Capture
    { character: "拘", meaning: "Arrest / Adhere to", romaji: "kou / kakawa.ru", strokes: 8, radical: "手", gifFile: "kou_arrest.gif" },
    { character: "拙", meaning: "Clumsy / Unskillful", romaji: "setsu / tsuta.nai", strokes: 8, radical: "手", gifFile: "tsutanai.gif" },
    { character: "抹", meaning: "Rub / Paint / Erase", romaji: "matsu", strokes: 8, radical: "手", gifFile: "matsu.gif" },
    { character: "据", meaning: "Set / Lay / Install", romaji: "kyo / su.eru", strokes: 11, radical: "手", gifFile: "sueru.gif" },
    { character: "捉", meaning: "Catch / Capture", romaji: "soku / tora.eru", strokes: 10, radical: "手", gifFile: "toraeru.gif" },

    // Animals, Insects & Sweet Food
    { character: "餌", meaning: "Bait / Feed", romaji: "ji / esa", strokes: 15, radical: "食", gifFile: "esa.gif" },
    { character: "餅", meaning: "Mochi / Rice cake", romaji: "hei / mochi", strokes: 14, radical: "食", gifFile: "mochi.gif" },
    { character: "蜜", meaning: "Honey / Nectar", romaji: "mitsu", strokes: 14, radical: "虫", gifFile: "mitsu.gif" },
    { character: "蜂", meaning: "Bee / Wasp", romaji: "hou / hachi", strokes: 14, radical: "虫", gifFile: "hachi.gif" },
    { character: "蛇", meaning: "Snake / Serpent", romaji: "ja / hebi", strokes: 11, radical: "虫", gifFile: "hebi.gif" },

    // Spirituality, Mourning & Culture
    { character: "喪", meaning: "Mourning / Loss", romaji: "sou / mo", strokes: 12, radical: "口", gifFile: "mo_mourning.gif" },
    { character: "厄", meaning: "Unlucky / Misfortune", romaji: "yaku", strokes: 4, radical: "厂", gifFile: "yaku.gif" },
    { character: "尼", meaning: "Nun", romaji: "ni / ama", strokes: 5, radical: "尸", gifFile: "ama_nun.gif" },
    { character: "僧", meaning: "Monk / Priest", romaji: "sou", strokes: 14, radical: "人", gifFile: "sou_monk.gif" },
    { character: "禅", meaning: "Zen / Meditation", romaji: "zen", strokes: 13, radical: "示", gifFile: "zen.gif" },
  
    // Trees, Wood & Specific Flora
    { character: "杉", meaning: "Cedar", romaji: "san / sugi", strokes: 7, radical: "木", gifFile: "sugi.gif" },
    { character: "松", meaning: "Pine tree", romaji: "shou / matsu", strokes: 8, radical: "木", gifFile: "matsu.gif" },
    { character: "柳", meaning: "Willow", romaji: "ryuu / yanagi", strokes: 9, radical: "木", gifFile: "yanagi.gif" },
    { character: "桜", meaning: "Cherry blossom", romaji: "ou / sakura", strokes: 10, radical: "木", gifFile: "sakura.gif" },
    { character: "梅", meaning: "Plum", romaji: "bai / ume", strokes: 10, radical: "木", gifFile: "ume.gif" },
    { character: "栽", meaning: "Plantation / Planting", romaji: "sai", strokes: 10, radical: "木", gifFile: "sai_plant.gif" },
    { character: "茎", meaning: "Stem / Stalk", romaji: "kei / kuki", strokes: 8, radical: "艸", gifFile: "kuki.gif" },
    { character: "朱", meaning: "Vermilion / Cinnabar", romaji: "shu / aka", strokes: 6, radical: "木", gifFile: "shu_vermilion.gif" },

    // Metals, Forging & Heavy Tools
    { character: "鋳", meaning: "Cast / Mint", romaji: "chuu / i.ru", strokes: 15, radical: "金", gifFile: "iru_cast.gif" },
    { character: "鍛", meaning: "Forge / Discipline", romaji: "tan / kita.eru", strokes: 17, radical: "金", gifFile: "kitaeru.gif" },
    { character: "錬", meaning: "Temper / Knead", romaji: "ren / ne.ru", strokes: 16, radical: "金", gifFile: "neru_temper.gif" },
    { character: "錠", meaning: "Lock / Pill", romaji: "jou", strokes: 16, radical: "金", gifFile: "jou_lock.gif" },
    { character: "銘", meaning: "Inscription / Signature", romaji: "mei", strokes: 14, radical: "金", gifFile: "mei_inscription.gif" },
    { character: "鈍", meaning: "Dull / Slow", romaji: "don / nibu.i", strokes: 12, radical: "金", gifFile: "nibui.gif" },

    // Threads, Weaving & Textiles
    { character: "繊", meaning: "Slender / Fine", romaji: "sen", strokes: 17, radical: "糸", gifFile: "sen_fine.gif" },
    { character: "紡", meaning: "Spin (yarn)", romaji: "bou / tsumu.gu", strokes: 10, radical: "糸", gifFile: "tsumugu.gif" },
    { character: "紋", meaning: "Family crest / Pattern", romaji: "mon", strokes: 10, radical: "糸", gifFile: "mon.gif" },
    { character: "緯", meaning: "Horizontal thread / Latitude", romaji: "i / yokoito", strokes: 16, radical: "糸", gifFile: "yokoito.gif" },
    { character: "繰", meaning: "Reel / Wind", romaji: "sou / ku.ru", strokes: 19, radical: "糸", gifFile: "kuru_reel.gif" },

    // Conflict, Weapons & Destruction
    { character: "狙", meaning: "Aim at / Target", romaji: "so / nera.u", strokes: 8, radical: "犬", gifFile: "nerau.gif" },
    { character: "銃", meaning: "Gun / Rifle", romaji: "juu", strokes: 14, radical: "金", gifFile: "juu_gun.gif" },
    { character: "矛", meaning: "Halberd / Spear", romaji: "mu / hoko", strokes: 5, radical: "矛", gifFile: "hoko.gif" },
    { character: "撲", meaning: "Strike / Beat", romaji: "boku", strokes: 15, radical: "手", gifFile: "boku_strike.gif" },
    { character: "烈", meaning: "Fierce / Intense", romaji: "retsu", strokes: 10, radical: "火", gifFile: "retsu_fierce.gif" },
    { character: "滅", meaning: "Destroy / Ruin", romaji: "metsu / horo.biru", strokes: 13, radical: "水", gifFile: "horobiru.gif" },

    // Abstract States, Social Standing & Attributes
    { character: "雅", meaning: "Gracious / Elegant", romaji: "ga / miya.bi", strokes: 13, radical: "隹", gifFile: "miyabi.gif" },
    { character: "慢", meaning: "Laziness / Boast", romaji: "man", strokes: 14, radical: "心", gifFile: "man_lazy.gif" },
    { character: "俊", meaning: "Sagacious / Genius", romaji: "shun", strokes: 9, radical: "人", gifFile: "shun_genius.gif" },
    { character: "卑", meaning: "Lowly / Base", romaji: "hi / iya.shii", strokes: 9, radical: "十", gifFile: "iyashii.gif" },
    { character: "壮", meaning: "Robust / Manhood", romaji: "sou", strokes: 6, radical: "士", gifFile: "sou_robust.gif" },

    // Transition, Return & Distance
    { character: "還", meaning: "Send back / Return", romaji: "kan", strokes: 19, radical: "辶", gifFile: "kan_return.gif" },
    { character: "遷", meaning: "Transition / Move", romaji: "sen / utsu.ru", strokes: 15, radical: "辶", gifFile: "sen_transition.gif" },
    { character: "遼", meaning: "Distant", romaji: "ryou", strokes: 15, radical: "辶", gifFile: "ryou_distant.gif" },
    { character: "遵", meaning: "Abide by / Obey", romaji: "jun", strokes: 15, radical: "辶", gifFile: "jun_obey.gif" },
    { character: "避", meaning: "Avoid / Evade", romaji: "hi / sa.keru", strokes: 17, radical: "辶", gifFile: "sakeru.gif" },
    { character: "遡", meaning: "Go upstream / Retroactive", romaji: "so / sakanobo.ru", strokes: 14, radical: "辶", gifFile: "sakanoboru.gif" },

    // Power, Hegemony & Dismissal
    { character: "覇", meaning: "Hegemony / Supremacy", romaji: "ha", strokes: 19, radical: "襾", gifFile: "ha_supremacy.gif" },
    { character: "罷", meaning: "Quit / Dismiss / Stop", romaji: "hi", strokes: 15, radical: "网", gifFile: "hi_dismiss.gif" },
    { character: "矯", meaning: "Correct / Rectify", romaji: "kyou / ta.meru", strokes: 17, radical: "矢", gifFile: "tameru_correct.gif" },
    { character: "賦", meaning: "Levy / Endowment", romaji: "fu", strokes: 15, radical: "貝", gifFile: "fu_levy.gif" },
    { character: "賄", meaning: "Bribe / Provide", romaji: "wai / makana.u", strokes: 13, radical: "貝", gifFile: "makanau.gif" },

    // Textile, Fine Details & Repair
    { character: "緻", meaning: "Fine / Delicate", romaji: "chi", strokes: 16, radical: "糸", gifFile: "chi_fine.gif" },
    { character: "綻", meaning: "Unravel / Rip", romaji: "tan / hoko.biru", strokes: 14, radical: "糸", gifFile: "hokobiru.gif" },
    { character: "綴", meaning: "Compose / Spell / Patch", romaji: "tei / tsuzu.ru", strokes: 14, radical: "糸", gifFile: "tsuzuru.gif" },
    { character: "繕", meaning: "Repair / Mend", romaji: "zen / tsukuro.u", strokes: 18, radical: "糸", gifFile: "tsukurou.gif" },
    { character: "緻", meaning: "Minute / Precise", romaji: "chi", strokes: 16, radical: "糸", gifFile: "chi_precise.gif" },

    // Progress, Harmony & Senses
    { character: "捗", meaning: "Make progress", romaji: "choku / hodo.ru", strokes: 10, radical: "手", gifFile: "hodoru.gif" },
    { character: "諧", meaning: "Harmony", romaji: "kai", strokes: 16, radical: "言", gifFile: "kai_harmony.gif" },
    { character: "醒", meaning: "Wake up / Sober up", romaji: "sei / sa.meru", strokes: 16, radical: "酉", gifFile: "sameru_wake.gif" },
    { character: "醸", meaning: "Brew / Cause", romaji: "jou / kamo.su", strokes: 20, radical: "酉", gifFile: "kamosu.gif" },
    { character: "飽", meaning: "Sated / Bored with", romaji: "hou / a.kiru", strokes: 13, radical: "食", gifFile: "akiru_sated.gif" },

    // Natural States & Earth
    { character: "墾", meaning: "Ground-breaking / Cultivate", romaji: "kon", strokes: 16, radical: "土", gifFile: "kon_cultivate.gif" },
    { character: "堆", meaning: "Piled up / Bank", romaji: "tai", strokes: 11, radical: "土", gifFile: "tai_piled.gif" },
    { character: "塑", meaning: "Model / Plastic", romaji: "so", strokes: 13, radical: "土", gifFile: "so_model.gif" },
    { character: "墜", meaning: "Crash / Fall down", romaji: "tsui", strokes: 15, radical: "土", gifFile: "tsui_crash.gif" },

    // Anatomy & Body (Advanced)
    { character: "頬", meaning: "Cheek", romaji: "kyou / hoo", strokes: 15, radical: "頁", gifFile: "hoo.gif" },
    { character: "眉", meaning: "Eyebrow", romaji: "bi / mayu", strokes: 9, radical: "目", gifFile: "mayu_eyebrow.gif" },
    { character: "膝", meaning: "Knee", romaji: "shitsu / hiza", strokes: 15, radical: "肉", gifFile: "hiza.gif" },
    { character: "肘", meaning: "Elbow", romaji: "chuu / hiji", strokes: 7, radical: "肉", gifFile: "hiji.gif" },
    { character: "拳", meaning: "Fist", romaji: "ken / kobushi", strokes: 10, radical: "手", gifFile: "kobushi.gif" },
    { character: "脊", meaning: "Spine / Back", romaji: "seki", strokes: 10, radical: "肉", gifFile: "seki_spine.gif" },
    { character: "尻", meaning: "Buttocks / Rear", romaji: "kou / shiri", strokes: 5, radical: "尸", gifFile: "shiri.gif" },
    { character: "脇", meaning: "Side / Armpit", romaji: "kyou / waki", strokes: 10, radical: "肉", gifFile: "waki.gif" },
    { character: "胴", meaning: "Torso / Trunk", romaji: "dou", strokes: 10, radical: "肉", gifFile: "dou_torso.gif" },

    // Social Scorn, Malice & Envy
    { character: "侮", meaning: "Despise / Scorn", romaji: "bu / anadu.ru", strokes: 8, radical: "人", gifFile: "anaduru.gif" },
    { character: "傲", meaning: "Haughty / Proud", romaji: "gou", strokes: 13, radical: "人", gifFile: "gou_haughty.gif" },
    { character: "蔑", meaning: "Despise / Ignore", romaji: "betsu / sagesu.mu", strokes: 14, radical: "艸", gifFile: "sagesumu.gif" },
    { character: "罵", meaning: "Abuse / Curse", romaji: "ba / nonoshi.ru", strokes: 15, radical: "网", gifFile: "nonoshiru.gif" },
    { character: "嫉", meaning: "Jealousy / Envy", romaji: "shitsu", strokes: 13, radical: "女", gifFile: "shitsu_jealousy.gif" },
    { character: "妬", meaning: "Envy / Jealousy", romaji: "to / neta.mu", strokes: 8, radical: "女", gifFile: "netamu.gif" },
    { character: "羨", meaning: "Envious / Want", romaji: "sen / uraya.mu", strokes: 13, radical: "羊", gifFile: "urayamu.gif" },

    // Psychological States & Agony
    { character: "悶", meaning: "Agony / Worry", romaji: "mon / moda.eru", strokes: 12, radical: "門", gifFile: "modaeru.gif" },
    { character: "慄", meaning: "Fear / Shiver", romaji: "ritsu", strokes: 13, radical: "心", gifFile: "ritsu_shiver.gif" },
    { character: "怯", meaning: "Frightened / Coward", romaji: "kyou / hiru.mu", strokes: 8, radical: "心", gifFile: "hirumu.gif" },
    { character: "恣", meaning: "Selfish / Arbitrary", romaji: "shi", strokes: 10, radical: "心", gifFile: "shi_selfish.gif" },

    // Physical Impact, Fluidity & Small Amounts
    { character: "潰", meaning: "Crush / Smash", romaji: "kai / tsubu.su", strokes: 15, radical: "水", gifFile: "tsubusu.gif" },
    { character: "毀", meaning: "Destroy / Break", romaji: "ki / kowa.su", strokes: 13, radical: "殳", gifFile: "kowa.su.gif" },
    { character: "僅", meaning: "A wee bit / Merely", romaji: "kin / wazu.ka", strokes: 13, radical: "人", gifFile: "wazuka.gif" },
    { character: "溢", meaning: "Overflow / Flood", romaji: "itsu / afu.reru", strokes: 13, radical: "水", gifFile: "afureru.gif" },
    { character: "潤", meaning: "Moisten / Profit", romaji: "jun / uruo.u", strokes: 15, radical: "水", gifFile: "uruou.gif" },
    { character: "湧", meaning: "Gush / Spring up", romaji: "yuu / wa.ku", strokes: 12, radical: "水", gifFile: "waku_gush.gif" },
    { character: "逐", meaning: "Pursue / One by one", romaji: "chiku", strokes: 10, radical: "辶", gifFile: "chiku_pursue.gif" },

    // Specific Flora, Nature & Landscapes
    { character: "葛", meaning: "Kudzu / Vine", romaji: "katsu / kuzu", strokes: 12, radical: "艸", gifFile: "kuzu.gif" },
    { character: "蔦", meaning: "Ivy", romaji: "chou / tsuta", strokes: 14, radical: "艸", gifFile: "tsuta.gif" },
    { character: "蘭", meaning: "Orchid", romaji: "ran", strokes: 19, radical: "艸", gifFile: "ran_orchid.gif" },
    { character: "芯", meaning: "Wick / Core / Center", romaji: "shin", strokes: 7, radical: "艸", gifFile: "shin_core.gif" },
    { character: "麓", meaning: "Foot of a mountain", romaji: "roku / fumoto", strokes: 19, radical: "鹿", gifFile: "fumoto.gif" },
    { character: "崖", meaning: "Cliff / Precipice", romaji: "gai / gake", strokes: 11, radical: "山", gifFile: "gake.gif" },
    { character: "嶺", meaning: "Peak / Summit", romaji: "rei", strokes: 17, radical: "山", gifFile: "rei_peak.gif" },
    { character: "堆", meaning: "Piled up / Bank", romaji: "tai", strokes: 11, radical: "土", gifFile: "tai_pile.gif" },

    // Highly Specific Verbs & Actions
    { character: "剥", meaning: "Peel / Strip / Come off", romaji: "haku / ha.gu", strokes: 10, radical: "刀", gifFile: "hagu.gif" },
    { character: "挫", meaning: "Thwart / Crush / Sprain", romaji: "za / kuji.ku", strokes: 10, radical: "手", gifFile: "kujiku.gif" },
    { character: "掬", meaning: "Scoop up / Ladle", romaji: "kiku / suku.u", strokes: 11, radical: "手", gifFile: "sukuu_scoop.gif" },
    { character: "漱", meaning: "Rinse (mouth) / Gargle", romaji: "shuu / susu.gu", strokes: 14, radical: "水", gifFile: "susugu_gargle.gif" },
    { character: "詣", meaning: "Visit a shrine / Temple", romaji: "kei / mai.ru", strokes: 13, radical: "言", gifFile: "mairu_shrine.gif" },
    { character: "貪", meaning: "Greedy / Devour", romaji: "tan / mubo.ru", strokes: 11, radical: "貝", gifFile: "muboru.gif" },
    { character: "采", meaning: "Dice / Pluck / Gather", romaji: "sai / to.ru", strokes: 8, radical: "采", gifFile: "toru_dice.gif" },

    // Relationships, Status & Favor
    { character: "婿", meaning: "Son-in-law", romaji: "sei / muko", strokes: 12, radical: "女", gifFile: "muko.gif" },
    { character: "甥", meaning: "Nephew", romaji: "sei / oi", strokes: 13, radical: "生", gifFile: "oi_nephew.gif" },
    { character: "姪", meaning: "Niece", romaji: "tetsu / mei", strokes: 8, radical: "女", gifFile: "mei_niece.gif" },
    { character: "寵", meaning: "Favor / Pet", romaji: "chou", strokes: 19, radical: "宀", gifFile: "chou_favor.gif" },
    { character: "毅", meaning: "Resolute / Strong", romaji: "ki", strokes: 15, radical: "殳", gifFile: "ki_resolute.gif" },

    // Structures, Documentation & Consultation
    { character: "楼", meaning: "Watchtower / High building", romaji: "rou", strokes: 13, radical: "木", gifFile: "rou_tower.gif" },
    { character: "廓", meaning: "Enclosure / Quarters", romaji: "kaku", strokes: 14, radical: "广", gifFile: "kaku_enclosure.gif" },
    { character: "塞", meaning: "Block up / Plug", romaji: "sai / fusa.gu", strokes: 13, radical: "土", gifFile: "fusagu.gif" },
    { character: "亭", meaning: "Pavilion / Restaurant", romaji: "tei", strokes: 9, radical: "亠", gifFile: "tei_pavilion.gif" },
    { character: "諮", meaning: "Consult with", romaji: "shi / haka.ru", strokes: 16, radical: "言", gifFile: "hakaru_consult.gif" },
    { character: "謄", meaning: "Transcription / Copy", romaji: "tou", strokes: 17, radical: "言", gifFile: "tou_copy.gif" },

    // Transition, Pursuit & Eternity
    { character: "悠", meaning: "Distant / Eternity", romaji: "yuu / haruka", strokes: 11, radical: "心", gifFile: "yuu_eternity.gif" },
    { character: "汎", meaning: "Pan- / Universal", romaji: "han", strokes: 6, radical: "水", gifFile: "han_universal.gif" },
    { character: "頻", meaning: "Frequency / Repeatedly", romaji: "hin / shiki.ni", strokes: 17, radical: "頁", gifFile: "shikini.gif" },
    { character: "遂", meaning: "Accomplish / Finality", romaji: "sui / to.geru", strokes: 12, radical: "辶", gifFile: "togeru.gif" },
    { character: "遣", meaning: "Dispatch / Send / Give", romaji: "ken / tsuka.u", strokes: 13, radical: "辶", gifFile: "tsukau_dispatch.gif" },
    { character: "遥", meaning: "Far off / Remote", romaji: "you / haruka", strokes: 12, radical: "辶", gifFile: "haruka_distant.gif" },
    { character: "遭", meaning: "Encounter (accident/fate)", romaji: "sou / a.u", strokes: 14, radical: "辶", gifFile: "au_encounter.gif" },
    { character: "遜", meaning: "Humble / Inferior", romaji: "son / herikuda.ru", strokes: 14, radical: "辶", gifFile: "herikudaru.gif" },
    { character: "遍", meaning: "Ubiquitous / Everywhere", romaji: "hen / amane.ku", strokes: 12, radical: "辶", gifFile: "amaneku.gif" },
    { character: "遁", meaning: "Escape / Evade", romaji: "ton / nuga.reru", strokes: 12, radical: "辶", gifFile: "nugareru.gif" },
    { character: "邁", meaning: "Proceed / Go forward", romaji: "mai", strokes: 15, radical: "辶", gifFile: "mai_proceed.gif" },

    // Insult, Humiliation & Social Friction
    { character: "辱", meaning: "Humiliate / Insult", romaji: "joku / hazuka.shime", strokes: 10, radical: "辰", gifFile: "hazukashime.gif" },
    { character: "嘲", meaning: "Ridicule / Sneer", romaji: "chou / azake.ru", strokes: 15, radical: "口", gifFile: "azakeru.gif" },
    { character: "諷", meaning: "Irony / Satire", romaji: "fuu", strokes: 16, radical: "言", gifFile: "fuu_satire.gif" },
    { character: "羞", meaning: "Shy / Feel ashamed", romaji: "shuu / ha.jiru", strokes: 11, radical: "羊", gifFile: "hajiru_ashamed.gif" },
    { character: "弊", meaning: "Evil / Harm / Our humble", romaji: "hei", strokes: 15, radical: "廾", gifFile: "hei_harm.gif" },
    { character: "屈", meaning: "Yield / Bend / Crouch", romaji: "kutsu / kaga.mu", strokes: 8, radical: "尸", gifFile: "kagamu.gif" },
    { character: "凡", meaning: "Mediocre / Ordinary", romaji: "bon / han / oyo.so", strokes: 3, radical: "几", gifFile: "oyoso.gif" },

    // Mortality, Spiritual & Ruin
    { character: "骸", meaning: "Skeleton / Ruins / Corpse", romaji: "gai / mukuro", strokes: 16, radical: "骨", gifFile: "mukuro.gif" },
    { character: "屍", meaning: "Corpse / Dead body", romaji: "shi / shikabane", strokes: 9, radical: "尸", gifFile: "shikabane.gif" },
    { character: "棺", meaning: "Coffin / Casket", romaji: "kan", strokes: 12, radical: "木", gifFile: "kan_coffin.gif" },
    { character: "弔", meaning: "Condolence / Mourn", romaji: "chou / tomura.u", strokes: 4, radical: "弓", gifFile: "tomurau.gif" },
    { character: "冥", meaning: "Hades / Dark / Deep", romaji: "mei / myou", strokes: 10, radical: "冖", gifFile: "myou.gif" },
    { character: "儒", meaning: "Confucianism", romaji: "ju", strokes: 16, radical: "人", gifFile: "ju_confucian.gif" },

    // Excess & Overflow
    { character: "濫", meaning: "Excessive / Overflow", romaji: "ran / mida.ri", strokes: 18, radical: "水", gifFile: "ran_excess.gif" },
    { character: "氾", meaning: "Flood / Overflow", romaji: "han", strokes: 5, radical: "水", gifFile: "han_flood.gif" },

    // Anatomy, Pathology & Limbs
    { character: "肺", meaning: "Lung", romaji: "hai", strokes: 9, radical: "肉", gifFile: "hai_lung.gif" },
    { character: "腎", meaning: "Kidney", romaji: "jin", strokes: 13, radical: "肉", gifFile: "jin_kidney.gif" },
    { character: "肢", meaning: "Limb / Branch", romaji: "shi", strokes: 8, radical: "肉", gifFile: "shi_limb.gif" },
    { character: "腫", meaning: "Tumor / Swelling", romaji: "shuu / ha.reru", strokes: 13, radical: "肉", gifFile: "hareru_tumor.gif" },
    { character: "腺", meaning: "Gland", romaji: "sen", strokes: 13, radical: "肉", gifFile: "sen_gland.gif" },
    { character: "頸", meaning: "Neck / Cervical", romaji: "kei / kubi", strokes: 16, radical: "頁", gifFile: "kei_neck.gif" },

    // Observation, Gaps & Degree
    { character: "眺", meaning: "Gaze / View", romaji: "chou / naga.meru", strokes: 11, radical: "目", gifFile: "nagameru.gif" },
    { character: "覗", meaning: "Peek / Spy", romaji: "shi / nozo.ku", strokes: 12, radical: "見", gifFile: "nozoku_peek.gif" },
    { character: "隙", meaning: "Gap / Opportunity", romaji: "geki / suki", strokes: 13, radical: "阜", gifFile: "suki.gif" },
    { character: "頒", meaning: "Distribute / Partition", romaji: "han", strokes: 13, radical: "頁", gifFile: "han_distribute.gif" },
    { character: "頗", meaning: "Exceedingly / Extremely", romaji: "ha / subaru", strokes: 14, radical: "頁", gifFile: "subaru.gif" },

    // Architecture, Infrastructure & Materials
    { character: "瓦", meaning: "Tile", romaji: "ga / kawara", strokes: 5, radical: "瓦", gifFile: "kawara.gif" },
    { character: "塀", meaning: "Fence / Wall", romaji: "hei", strokes: 12, radical: "土", gifFile: "hei_wall.gif" },
    { character: "墳", meaning: "Tomb / Mound", romaji: "fun", strokes: 15, radical: "土", gifFile: "fun_tomb.gif" },
    { character: "壌", meaning: "Soil / Earth", romaji: "jou", strokes: 20, radical: "土", gifFile: "jou_soil.gif" },
    { character: "壇", meaning: "Podium / Platform", romaji: "dan / tan", strokes: 16, radical: "土", gifFile: "dan_podium.gif" },
    { character: "廊", meaning: "Corridor / Gallery", romaji: "rou", strokes: 12, radical: "广", gifFile: "rou_corridor.gif" },
    { character: "棟", meaning: "Ridgepole / Counter for buildings", romaji: "tou / mune", strokes: 12, radical: "木", gifFile: "mune.gif" },
    { character: "欄", meaning: "Column / Railing", romaji: "ran", strokes: 20, radical: "木", gifFile: "ran_column.gif" },

    // Mechanical Components & Engineering
    { character: "枠", meaning: "Frame / Framework", romaji: "waku", strokes: 8, radical: "木", gifFile: "waku.gif" },
    { character: "桁", meaning: "Beam / Digit", romaji: "kou / keta", strokes: 10, radical: "木", gifFile: "keta.gif" },
    { character: "栓", meaning: "Plug / Bolt / Valve", romaji: "sen", strokes: 10, radical: "木", gifFile: "sen_valve.gif" },
    { character: "槽", meaning: "Tank / Vat / Tub", romaji: "sou", strokes: 15, radical: "木", gifFile: "sou_tank.gif" },
    { character: "枢", meaning: "Pivot / Hinge / Central", romaji: "su / kuru", strokes: 8, radical: "木", gifFile: "kuru.gif" },
    { character: "附", meaning: "Affix / Append", romaji: "fu / tsu.keru", strokes: 8, radical: "阜", gifFile: "tsukeru_affix.gif" },

    // Communication, Noise & Mouth Actions
    { character: "嘘", meaning: "Lie / Falsehood", romaji: "kyo / uso", strokes: 14, radical: "口", gifFile: "uso.gif" },
    { character: "噂", meaning: "Rumor / Gossip", romaji: "son / uwasa", strokes: 13, radical: "口", gifFile: "uwasa.gif" },
    { character: "喉", meaning: "Throat", romaji: "kou / nodo", strokes: 12, radical: "口", gifFile: "nodo.gif" },
    { character: "噛", meaning: "Bite / Chew", romaji: "kou / ka.mu", strokes: 15, radical: "口", gifFile: "kamu.gif" },
    { character: "喋", meaning: "Chatter / Talk", romaji: "chou / shabe.ru", strokes: 12, radical: "口", gifFile: "shaberu.gif" },
    { character: "喧", meaning: "Noisy / Boisterous", romaji: "ken / yakama.shii", strokes: 12, radical: "口", gifFile: "ken_noisy.gif" },
    { character: "嘩", meaning: "Noisy / Flashy", romaji: "ka", strokes: 13, radical: "口", gifFile: "ka_noisy.gif" },
    { character: "叩", meaning: "Strike / Beat / Knock", romaji: "kou / tata.ku", strokes: 5, radical: "口", gifFile: "tataku.gif" },
    { character: "叱", meaning: "Scold / Reprove", romaji: "shitsu / shika.ru", strokes: 5, radical: "口", gifFile: "shikaru.gif" },

    // Manipulation & Physical Impact
    { character: "吊", meaning: "Hang / Suspend", romaji: "chou / tsu.ru", strokes: 6, radical: "口", gifFile: "tsuru_hang.gif" },
    { character: "汲", meaning: "Draw (water) / Scoop", romaji: "kyuu / ku.mu", strokes: 7, radical: "水", gifFile: "kumu_draw.gif" },
    { character: "捻", meaning: "Twist / Twirl", romaji: "nen / hime.ru", strokes: 11, radical: "手", gifFile: "himeru.gif" },
    { character: "揉", meaning: "Massage / Rub", romaji: "juu / mo.mu", strokes: 12, radical: "手", gifFile: "momu.gif" },
    { character: "掻", meaning: "Scratch / Shovel", romaji: "sou / ka.ku", strokes: 11, radical: "手", gifFile: "kaku_scratch.gif" },
    { character: "煽", meaning: "Fan / Agitate", romaji: "せん / ao.gu", strokes: 14, radical: "火", gifFile: "aogu.gif" },

    // Culinary, Heat & Liquid States
    { character: "煎", meaning: "Roast / Broil / Brew", romaji: "sen / i.ru", strokes: 13, radical: "火", gifFile: "iru_roast.gif" },
    { character: "炒", meaning: "Sauté / Pan-fry", romaji: "shou / ita.meru", strokes: 8, radical: "火", gifFile: "itameru.gif" },
    { character: "漬", meaning: "Pickle / Soak", romaji: "shi / tsu.keru", strokes: 14, radical: "水", gifFile: "tsukeru_pickle.gif" },
    { character: "溺", meaning: "Drown / Indulge", romaji: "deki / obo.reru", strokes: 10, radical: "水", gifFile: "oboreru.gif" },
    { character: "濡", meaning: "Get wet / Damp", romaji: "ju / nu.reru", strokes: 17, radical: "水", gifFile: "nureru.gif" },

    // Social Friction & Slander
    { character: "憚", meaning: "Hesitate / Fear", romaji: "tan / habaka.ru", strokes: 15, radical: "心", gifFile: "habakaru.gif" },
    { character: "貶", meaning: "Degrade / Demote", romaji: "hen / osoto.su", strokes: 12, radical: "貝", gifFile: "osotosu.gif" },
    { character: "弄", meaning: "Tamper / Play with", romaji: "ろう / moteaso.bu", strokes: 7, radical: "王", gifFile: "moteasobu.gif" },
    { character: "誹", meaning: "Slander / Abuse", romaji: "hi", strokes: 15, radical: "言", gifFile: "hi_slander.gif" },
    { character: "謗", meaning: "Slander / Revile", romaji: "bou", strokes: 17, radical: "言", gifFile: "bou_slander.gif" },

    // Body Sensations & Pathology (The uncomfortable stuff)
    { character: "痒", meaning: "Itchy", romaji: "you / kayu.i", strokes: 11, radical: "疒", gifFile: "kayui.gif" },
    { character: "痺", meaning: "Numb / Palsy", romaji: "hi / shibe.reru", strokes: 13, radical: "疒", gifFile: "shibereru.gif" },
    { character: "痙", meaning: "Convulsion / Spasm", romaji: "kei", strokes: 12, radical: "疒", gifFile: "kei_spasm.gif" },
    { character: "攣", meaning: "Contraction / Spasm", romaji: "ren", strokes: 23, radical: "手", gifFile: "ren_spasm.gif" },
    { character: "歪", meaning: "Distort / Warp", romaji: "wai / yuga.mu", strokes: 9, radical: "止", gifFile: "yugamu.gif" },

    // Advanced Social Traits & Desires
    { character: "狡", meaning: "Cunning / Sly", romaji: "kou / zuru.i", strokes: 9, radical: "犬", gifFile: "zurui.gif" },
    { character: "猾", meaning: "Sly / Crafty", romaji: "katsu", strokes: 13, radical: "犬", gifFile: "katsu_sly.gif" },
    { character: "媚", meaning: "Flatter / Coquet", romaji: "bi / ko.biru", strokes: 12, radical: "女", gifFile: "kobiru.gif" },
    { character: "憬", meaning: "Yearn / Long for", romaji: "kei / akoga.reru", strokes: 15, radical: "心", gifFile: "akogareru_n1.gif" },

    // Physical Mechanics & Actions
    { character: "嵌", meaning: "Fit into / Inlay / Trap", romaji: "kan / hama.ru", strokes: 12, radical: "山", gifFile: "hamaru.gif" },
    { character: "軋", meaning: "Creak / Grate / Jar", romaji: "atsu / kishi.mu", strokes: 7, radical: "車", gifFile: "kishimu.gif" },
    { character: "茹", meaning: "Boil / Seethe", romaji: "jo / yu.deru", strokes: 9, radical: "艸", gifFile: "yuderu.gif" },
    { character: "漉", meaning: "Strain / Filter / Percolate", romaji: "roku / ko.su", strokes: 14, radical: "水", gifFile: "kosu.gif" },

    // Nature, Flora & Small Things
    { character: "苔", meaning: "Moss / Lichen", romaji: "tai / koke", strokes: 8, radical: "艸", gifFile: "koke.gif" },
    { character: "蓮", meaning: "Lotus", romaji: "ren / hasu", strokes: 13, radical: "艸", gifFile: "hasu.gif" },
    { character: "蓬", meaning: "Mugwort / Sagebrush", romaji: "hou / yomogi", strokes: 13, radical: "艸", gifFile: "yomogi.gif" },
    { character: "柿", meaning: "Persimmon", romaji: "shi / kaki", strokes: 9, radical: "木", gifFile: "kaki.gif" },

    // Household & Specific Tools
    { character: "箸", meaning: "Chopsticks", romaji: "cho / hashi", strokes: 15, radical: "竹", gifFile: "hashi_sticks.gif" },
    { character: "籠", meaning: "Basket / Cage", romaji: "rou / kago", strokes: 22, radical: "竹", gifFile: "kago.gif" },
    { character: "鞄", meaning: "Bag / Suitcase", romaji: "haku / kaban", strokes: 14, radical: "革", gifFile: "kaban.gif" },
    { character: "枕", meaning: "Pillow", romaji: "shin / makura", strokes: 8, radical: "木", gifFile: "makura.gif" },
    { character: "櫛", meaning: "Comb", romaji: "shitsu / kushi", strokes: 19, radical: "木", gifFile: "kushi.gif" },
    { character: "箒", meaning: "Broom", romaji: "hou / houki", strokes: 11, radical: "竹", gifFile: "houki.gif" },
    { character: "蓋", meaning: "Lid / Cover / Cap", romaji: "gai / futa", strokes: 13, radical: "艸", gifFile: "futa.gif" },
    { character: "踵", meaning: "Heel", romaji: "shou / kakato", strokes: 16, radical: "足", gifFile: "kakato.gif" },

    // Clinical States & Physical Healing
    { character: "痕", meaning: "Scar / Trace", romaji: "kon / ato", strokes: 11, radical: "疒", gifFile: "ato_scar.gif" },
    { character: "痣", meaning: "Bruise / Mole", romaji: "shi / aza", strokes: 12, radical: "疒", gifFile: "aza.gif" },
    { character: "膿", meaning: "Pus", romaji: "nou / umi", strokes: 17, radical: "肉", gifFile: "umi.gif" },
    { character: "瘤", meaning: "Lump / Tumor / Bump", romaji: "ryuu / kobu", strokes: 15, radical: "疒", gifFile: "kobu.gif" },
    { character: "癒", meaning: "Heal / Cure / Quench", romaji: "yu / iya.su", strokes: 18, radical: "疒", gifFile: "iyasu.gif" },

    // Communication: The Advanced Verbs
    { character: "騙", meaning: "Deceive / Trick", romaji: "hen / dama.su", strokes: 19, radical: "馬", gifFile: "damasu.gif" },
    { character: "宥", meaning: "Soothe / Calm / Pardon", romaji: "yuu / nada.meru", strokes: 9, radical: "宀", gifFile: "nadameru.gif" },
    { character: "詮", meaning: "Elucidate / Truth / Result", romaji: "sen", strokes: 13, radical: "言", gifFile: "sen_truth.gif" },
    { character: "訃", meaning: "Obituary / Report of death", romaji: "fu", strokes: 9, radical: "言", gifFile: "fu_obituary.gif" },
    { character: "謂", meaning: "Reason / Origin / Meaning", romaji: "i", strokes: 16, radical: "言", gifFile: "i_reason.gif" },
    { character: "諫", meaning: "Admonish / Remonstrate", romaji: "kan / isame.ru", strokes: 16, radical: "言", gifFile: "isameru.gif" },
    { character: "誼", meaning: "Friendship / Intimacy", romaji: "gi / yoshimi", strokes: 15, radical: "言", gifFile: "yoshimi.gif" },
    { character: "謳", meaning: "Extol / Sing praises", romaji: "ou / uta.u", strokes: 18, radical: "言", gifFile: "utau_extol.gif" },
    { character: "諱", meaning: "Taboo name / Hide", romaji: "ki / imina", strokes: 16, radical: "言", gifFile: "imina.gif" },
    { character: "諳", meaning: "Memorize / Recite", romaji: "an / sora.njiru", strokes: 16, radical: "言", gifFile: "soranjiru.gif" },
    { character: "諜", meaning: "Spying / Intelligence", romaji: "chou", strokes: 16, radical: "言", gifFile: "chou_spy.gif" },
    { character: "諄", meaning: "Tedious / Insistent", romaji: "jun / kudo.i", strokes: 15, radical: "言", gifFile: "kudoi.gif" },
    { character: "謹", meaning: "Discreet / Humbly", romaji: "kin / tsutsushi.mu", strokes: 17, radical: "言", gifFile: "tsutushimu.gif" },
    { character: "謐", meaning: "Quiet / Peaceful", romaji: "hitsu", strokes: 17, radical: "言", gifFile: "hitsu_quiet.gif" },
    { character: "誦", meaning: "Recite / Read aloud", romaji: "shou / zuzu.ru", strokes: 14, radical: "言", gifFile: "zuzuru.gif" },
    { character: "訛", meaning: "Accent / Dialect / Corrupt", romaji: "ka / nama.ri", strokes: 11, radical: "言", gifFile: "namari_accent.gif" },
    { character: "詫", meaning: "Apologize / Excuse", romaji: "ta / wa.biru", strokes: 13, radical: "言", gifFile: "wabiru.gif" },
    { character: "詔", meaning: "Imperial edict", romaji: "shou / mikotonori", strokes: 12, radical: "言", gifFile: "mikotonori.gif" },
    { character: "訝", meaning: "Suspicious / Surprised", romaji: "ga / ibaka.ru", strokes: 11, radical: "言", gifFile: "ibakaru.gif" },
    { character: "誂", meaning: "Order / Custom-make", romaji: "chou / atsura.eru", strokes: 13, radical: "言", gifFile: "atsuraeru.gif" },

    // Rare Animals, Beasts & Myth
    { character: "虎", meaning: "Tiger", romaji: "ko / tora", strokes: 8, radical: "虍", gifFile: "tora.gif" },
    { character: "狼", meaning: "Wolf", romaji: "rou / ookami", strokes: 10, radical: "犬", gifFile: "ookami.gif" },
    { character: "猪", meaning: "Wild boar", romaji: "cho / inoshishi", strokes: 11, radical: "犬", gifFile: "inoshishi.gif" },
    { character: "熊", meaning: "Bear", romaji: "yuu / kuma", strokes: 14, radical: "火", gifFile: "kuma.gif" },
    { character: "鹿", meaning: "Deer", romaji: "roku / shika", strokes: 11, radical: "鹿", gifFile: "shika.gif" },
    { character: "猿", meaning: "Monkey", romaji: "en / saru", strokes: 13, radical: "犬", gifFile: "saru.gif" },
    { character: "龍", meaning: "Dragon (traditional)", romaji: "ryuu / tatsu", strokes: 16, radical: "龍", gifFile: "tatsu_dragon.gif" },
    { character: "鶴", meaning: "Crane", romaji: "kaku / tsuru", strokes: 21, radical: "鳥", gifFile: "tsuru_bird.gif" },
    { character: "獅", meaning: "Lion", romaji: "shi", strokes: 13, radical: "犬", gifFile: "shi_lion.gif" },
    { character: "鷹", meaning: "Hawk / Falcon", romaji: "you / taka", strokes: 24, radical: "鳥", gifFile: "taka.gif" },

    // Sacred, Ancient & Buddhist Terms
    { character: "刹", meaning: "Temple / Moment (Sanskrit kshana)", romaji: "setsu", strokes: 8, radical: "刀", gifFile: "setsu_moment.gif" },
    { character: "劫", meaning: "Aeon / Threaten", romaji: "kou / go", strokes: 7, radical: "力", gifFile: "kou_aeon.gif" },
    { character: "菩", meaning: "Bodhisattva component", romaji: "bo", strokes: 11, radical: "艸", gifFile: "bo_saintly.gif" },
    { character: "薩", meaning: "Bodhisattva component", romaji: "satsu", strokes: 17, radical: "艸", gifFile: "satsu_buddha.gif" },
    { character: "巫", meaning: "Shaman / Shrine maiden", romaji: "fu / miko", strokes: 7, radical: "工", gifFile: "miko.gif" },
    { character: "璧", meaning: "Jewel / Sphere", romaji: "heki", strokes: 18, radical: "玉", gifFile: "heki_jewel.gif" },
    { character: "瑞", meaning: "Good omen / Fresh", romaji: "zui / mizu", strokes: 13, radical: "玉", gifFile: "zui_omen.gif" },

    // Minerals, Gems & Textures
    { character: "瑠", meaning: "Lapis lazuli component", romaji: "ru", strokes: 14, radical: "玉", gifFile: "ru_lapis.gif" },
    { character: "璃", meaning: "Lapis lazuli / Glass", romaji: "ri", strokes: 15, radical: "玉", gifFile: "ri_glass.gif" },
    { character: "琥", meaning: "Amber component", romaji: "ko", strokes: 12, radical: "玉", gifFile: "ko_amber.gif" },
    { character: "珀", meaning: "Amber component", romaji: "haku", strokes: 9, radical: "玉", gifFile: "haku_amber.gif" },
    { character: "珊", meaning: "Coral component", romaji: "san", strokes: 9, radical: "玉", gifFile: "san_coral.gif" },
    { character: "瑚", meaning: "Coral component", romaji: "ko", strokes: 13, radical: "玉", gifFile: "ko_coral.gif" },

    // Traits & Advanced Nuances
    { character: "斑", meaning: "Spot / Mottle / Speck", romaji: "han / madara", strokes: 12, radical: "文", gifFile: "madara.gif" },
    { character: "辣", meaning: "Pungent / Severe / Harsh", romaji: "ratsute", strokes: 14, radical: "辛", gifFile: "ratsu_harsh.gif" },
    { character: "玩", meaning: "Toy with / Trifle with", romaji: "gan / moteaso.bu", strokes: 8, radical: "玉", gifFile: "moteasobu_gan.gif" },

    // Governance, Ranks & High-End Hierarchy
    { character: "廷", meaning: "Courts / Government office", romaji: "tei", strokes: 7, radical: "廴", gifFile: "tei_court.gif" },
    { character: "吏", meaning: "Official / Officer", romaji: "ri", strokes: 6, radical: "口", gifFile: "ri_official.gif" },
    { character: "帥", meaning: "Commander / Leader", romaji: "sui", strokes: 9, radical: "巾", gifFile: "sui_leader.gif" },
    { character: "伯", meaning: "Chief / Earl / Uncle", romaji: "haku", strokes: 7, radical: "人", gifFile: "haku_earl.gif" },
    { character: "叔", meaning: "Uncle / Youth", romaji: "shuku", strokes: 8, radical: "又", gifFile: "shuku_uncle.gif" },
    { character: "庶", meaning: "Commoner / All", romaji: "sho", strokes: 11, radical: "广", gifFile: "sho_common.gif" },
    { character: "戚", meaning: "Relatives / Grieve", romaji: "seki", strokes: 11, radical: "戈", gifFile: "seki_relative.gif" },
    { character: "曹", meaning: "Official / Sergeant / Tank", romaji: "sou", strokes: 11, radical: "曰", gifFile: "sou_official.gif" },
    { character: "宰", meaning: "Manager / Rule / Prime Minister", romaji: "sai", strokes: 10, radical: "宀", gifFile: "sai_manager.gif" },
    { character: "奏", meaning: "Report to a throne / Play music", romaji: "sou / kana.deru", strokes: 9, radical: "大", gifFile: "kanaderu.gif" },
    { character: "勅", meaning: "Imperial decree", romaji: "choku", strokes: 9, radical: "力", gifFile: "choku_decree.gif" },

    // Lineage, Gender & Status
    { character: "后", meaning: "Empress / Queen / After", romaji: "kou / kisa", strokes: 6, radical: "口", gifFile: "kou_empress.gif" },
    { character: "妃", meaning: "Princess / Queen / Noblewoman", romaji: "hi", strokes: 6, radical: "女", gifFile: "hi_princess.gif" },
    { character: "姫", meaning: "Princess", romaji: "ki / hime", strokes: 10, radical: "女", gifFile: "hime_princess.gif" },
    { character: "翁", meaning: "Old man / Venerable man", romaji: "ou", strokes: 10, radical: "羽", gifFile: "ou_venerable.gif" },
    { character: "婆", meaning: "Old woman / Hag", romaji: "ba / baba", strokes: 11, radical: "女", gifFile: "baba.gif" },
    { character: "奴", meaning: "Slave / Servant / Fellow", romaji: "do / yatsu", strokes: 5, radical: "女", gifFile: "yatsu.gif" },
    { character: "婢", meaning: "Maidservant", romaji: "hi", strokes: 11, radical: "女", gifFile: "hi_maid.gif" },
    { character: "侶", meaning: "Companion / Follower", romaji: "ryo / tomo", strokes: 9, radical: "人", gifFile: "ryo_companion.gif" },

    // Landscapes, Land & Agriculture
    { character: "岬", meaning: "Cape / Promontory / Spit", romaji: "kou / misaki", strokes: 8, radical: "山", gifFile: "misaki.gif" },
    { character: "畔", meaning: "Shore / Bank / Path between rice fields", romaji: "han / azuchi", strokes: 10, radical: "田", gifFile: "han_bank.gif" },
    { character: "畝", meaning: "Ridge (in a field) / Furrow", romaji: "bo / une", strokes: 10, radical: "田", gifFile: "une.gif" },
    { character: "桑", meaning: "Mulberry", romaji: "sou / kuwa", strokes: 10, radical: "木", gifFile: "kuwa.gif" },
    { character: "薪", meaning: "Firewood / Fuel", romaji: "shin / maki", strokes: 16, radical: "艸", gifFile: "maki.gif" },
    { character: "藻", meaning: "Seaweed / Algae", romaji: "sou / mo", strokes: 19, radical: "水", gifFile: "mo_seaweed.gif" },

    // Psychological States & Endurance
    { character: "惹", meaning: "Attract / Captivate", romaji: "jaku / hi.ku", strokes: 12, radical: "心", gifFile: "hiku_attract.gif" },
    { character: "堪", meaning: "Withstand / Endure", romaji: "kan / ta.eru", strokes: 13, radical: "土", gifFile: "taeru_endure.gif" },
    { character: "敢", meaning: "Daring / Brave / Sad", romaji: "kan / ae.te", strokes: 12, radical: "攴", gifFile: "aete.gif" },
    { character: "呆", meaning: "Dumbfounded / Amazed", romaji: "hou / aki.reru", strokes: 7, radical: "口", gifFile: "akireru.gif" },
    { character: "耽", meaning: "Indulge / Addicted", romaji: "tan / fuke.ru", strokes: 10, radical: "耳", gifFile: "fukeru.gif" },
    { character: "愉", meaning: "Pleasant / Joy", romaji: "yu", strokes: 12, radical: "心", gifFile: "yu_joy.gif" },

    // Advanced Physical Impact & Manipulation
    { character: "貼", meaning: "Paste / Stick / Post", romaji: "ten / ha.ru", strokes: 12, radical: "貝", gifFile: "haru_paste.gif" },
    { character: "捏", meaning: "Knead / Forge / Mix", romaji: "netsu / ne.ru", strokes: 10, radical: "手", gifFile: "neru_knead.gif" },
    { character: "掠", meaning: "Plunder / Graze / Blur", romaji: "ryaku / kasu.meru", strokes: 11, radical: "手", gifFile: "kasumeru.gif" },
    { character: "跨", meaning: "Straddle / Bestride", romaji: "ko / mata.gu", strokes: 13, radical: "足", gifFile: "matagu.gif" },
    { character: "擁", meaning: "Embrace / Protect / Advocate", romaji: "you", strokes: 16, radical: "手", gifFile: "you_protect.gif" },
    { character: "奉", meaning: "Serve / Dedicate / Offer", romaji: "hou / tatematsu.ru", strokes: 8, radical: "大", gifFile: "tatematsuru.gif" },
    { character: "捧", meaning: "Lift up / Give / Sacrifice", romaji: "hou / sasa.geru", strokes: 11, radical: "手", gifFile: "sasageru.gif" },

    // Sensory, Light & Motion
    { character: "閃", meaning: "Flash / Glint / Appear", romaji: "sen / hirame.ku", strokes: 10, radical: "門", gifFile: "hirameku.gif" },
    { character: "眩", meaning: "Dazzle / Dizzy / Blind", romaji: "gen / mabu.shii", strokes: 10, radical: "目", gifFile: "mabushii.gif" },
    { character: "辿", meaning: "Follow / Trace / Pursue", romaji: "ten / tado.ru", strokes: 7, radical: "辶", gifFile: "tadoru.gif" },
    { character: "蝕", meaning: "Eclipse / Erosion / Corrode", romaji: "shoku / mushiba.mu", strokes: 14, radical: "虫", gifFile: "mushibamu.gif" },
    { character: "喝", meaning: "Hoarse / Scold / Shout", romaji: "katsu", strokes: 12, radical: "口", gifFile: "katsu_shout.gif" },

    // Degree, Quantity & Distribution
    { character: "悉", meaning: "All / Entirely / Know", romaji: "shitsu / kotogoto.ku", strokes: 11, radical: "心", gifFile: "kotogotoku.gif" },
    { character: "逼", meaning: "Approach / Urgent / Tight", romaji: "hiku", strokes: 12, radical: "辶", gifFile: "hiku_urgent.gif" },
    { character: "賑", meaning: "Bustling / Prosperous", romaji: "shin / nigi.wau", strokes: 14, radical: "貝", gifFile: "nigiwau.gif" },
    { character: "培", meaning: "Cultivate / Foster / Nurture", romaji: "bai / tsuwa.mu", strokes: 11, radical: "土", gifFile: "tsuwamu.gif" },
    { character: "披", meaning: "Expose / Open / Announce", romaji: "hi", strokes: 8, radical: "手", gifFile: "hi_expose.gif" },
    { character: "賭", meaning: "Gamble / Wager / Bet", romaji: "to / ka.keru", strokes: 15, radical: "貝", gifFile: "kakeru_bet.gif" },
    { character: "訊", meaning: "Inquire / Ask / Question", romaji: "jin / ki.ku", strokes: 10, radical: "言", gifFile: "kiku_ask.gif" },

    // Mathematics, Scale & Logic
    { character: "径", meaning: "Diameter / Path", romaji: "kei / michi", strokes: 8, radical: "彳", gifFile: "kei_diameter.gif" },
    { character: "圏", meaning: "Sphere / Circle / Range", romaji: "ken", strokes: 12, radical: "囗", gifFile: "ken_sphere.gif" },
    { character: "範", meaning: "Scope / Pattern / Example", romaji: "han", strokes: 15, radical: "竹", gifFile: "han_scope.gif" },
    { character: "概", meaning: "Outline / Condition / Approx", romaji: "gai / oumu.ne", strokes: 14, radical: "木", gifFile: "oumune.gif" },
    { character: "擬", meaning: "Mimic / Pseudo / Imitate", romaji: "gi", strokes: 17, radical: "手", gifFile: "gi_mimic.gif" },
    { character: "剰", meaning: "Surplus / Remainder", romaji: "jou", strokes: 11, radical: "刀", gifFile: "jou_surplus.gif" },
    { character: "累", meaning: "Accumulate / Involve / Trouble", romaji: "rui", strokes: 11, radical: "糸", gifFile: "rui_accumulate.gif" },
    { character: "幾", meaning: "How many / Some / How much", romaji: "ki / iku", strokes: 12, radical: "幺", gifFile: "iku.gif" },
    { character: "漸", meaning: "Gradually / Finally", romaji: "zen / yaya", strokes: 14, radical: "水", gifFile: "zen_gradually.gif" },

    // Structural Mechanics & Engineering
    { character: "軸", meaning: "Axis / Pivot / Stem", romaji: "jiku", strokes: 12, radical: "車", gifFile: "jiku_axis.gif" },
    { character: "礎", meaning: "Foundation / Cornerstone", romaji: "so / ishizue", strokes: 18, radical: "石", gifFile: "ishizue.gif" },
    { character: "勾", meaning: "Slope / Gradient / Capture", romaji: "kou", strokes: 4, radical: "勹", gifFile: "kou_slope.gif" },
    { character: "隔", meaning: "Isolate / Alternate / Distance", romaji: "kaku / heda.teru", strokes: 13, radical: "阜", gifFile: "hedateru.gif" },
    { character: "尖", meaning: "Sharp / Pointed / Peak", romaji: "sen / toga.ru", strokes: 6, radical: "小", gifFile: "togaru.gif" },
    { character: "凹", meaning: "Concave / Hollow", romaji: "ou / kubo.mu", strokes: 5, radical: "凵", gifFile: "ou_concave.gif" },
    { character: "凸", meaning: "Convex / Protrude", romaji: "totsu / deko", strokes: 5, radical: "凵", gifFile: "totsu_convex.gif" },

    // Industrial & Energy
    { character: "炉", meaning: "Furnace / Kiln / Reactor", romaji: "ro", strokes: 8, radical: "火", gifFile: "ro_furnace.gif" },
    { character: "弁", meaning: "Valve / Discriminate / Speech", romaji: "ben", strokes: 5, radical: "廾", gifFile: "ben_valve.gif" },
    { character: "錘", meaning: "Weight / Plummet / Spindle", romaji: "sui / tsumu", strokes: 16, radical: "金", gifFile: "tsumu_weight.gif" },
    { character: "窯", meaning: "Kiln / Oven / Furnace", romaji: "you / kama", strokes: 15, radical: "穴", gifFile: "kama_kiln.gif" },
    { character: "銑", meaning: "Pig iron", romaji: "sen", strokes: 14, radical: "金", gifFile: "sen_iron.gif" },
    { character: "錫", meaning: "Tin", romaji: "shaku / suzu", strokes: 16, radical: "金", gifFile: "suzu_tin.gif" },
    { character: "耗", meaning: "Wear out / Consume / Waste", romaji: "mou / kou", strokes: 10, radical: "耒", gifFile: "mou_wear.gif" },

    // Transitions & Voids
    { character: "逓", meaning: "Relay / Send / Gradually", romaji: "tei", strokes: 10, radical: "辶", gifFile: "tei_relay.gif" },
    { character: "騰", meaning: "Soar / Jump / Inflation", romaji: "tou", strokes: 20, radical: "馬", gifFile: "tou_soar.gif" },
    { character: "疎", meaning: "Sparse / Neglect / Estrange", romaji: "so / uto.i", strokes: 12, radical: "疋", gifFile: "utoi.gif" },
    { character: "塊", meaning: "Lump / Clod / Mass", romaji: "kai / katamari", strokes: 13, radical: "土", gifFile: "katamari.gif" }
  ]
};

// --- THE MASTER EXPORT ---
// This combines all your JLPT batches into the final dictionary your UI reads.
export const kanjiByLevel: Record<string, KanjiItem[]> = {
  ...kanjiByLevel_N5,
  ...kanjiByLevel_N4,
  ...kanjiByLevel_N3,
  ...kanjiByLevel_N2,
  ...kanjiByLevel_N1,
};