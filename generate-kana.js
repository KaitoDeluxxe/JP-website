const fs = require('fs');

const hiragana = [
  { k: 'あ', r: 'a', m: 'Apple with a stem', v: [['あさ', 'asa', 'morning'], ['あめ', 'ame', 'rain']] },
  { k: 'い', r: 'i', m: 'Two Eels', v: [['いぬ', 'inu', 'dog'], ['いち', 'ichi', 'one']] },
  { k: 'う', r: 'u', m: 'U-turn', v: [['うみ', 'umi', 'sea'], ['うし', 'ushi', 'cow']] },
  { k: 'え', r: 'e', m: 'Energetic ninja', v: [['えき', 'eki', 'station'], ['えん', 'en', 'yen']] },
  { k: 'お', r: 'o', m: 'Golf hole with a flag', v: [['おとこ', 'otoko', 'man'], ['おんな', 'onna', 'woman']] },
  { k: 'か', r: 'ka', m: 'Cutting a cane', v: [['かさ', 'kasa', 'umbrella'], ['かお', 'kao', 'face']] },
  { k: 'き', r: 'ki', m: 'Key', v: [['き', 'ki', 'tree'], ['きた', 'kita', 'north']] },
  { k: 'く', r: 'ku', m: 'Cuckoo bird beak', v: [['くち', 'kuchi', 'mouth'], ['くるま', 'kuruma', 'car']] },
  { k: 'け', r: 'ke', m: 'Keg of beer', v: [['けいさつ', 'keisatsu', 'police'], ['けさ', 'kesa', 'this morning']] },
  { k: 'こ', r: 'ko', m: 'Coin', v: [['こども', 'kodomo', 'child'], ['こえ', 'koe', 'voice']] },
  { k: 'さ', r: 'sa', m: 'Smiling face', v: [['さかな', 'sakana', 'fish'], ['さけ', 'sake', 'salmon/liquor']] },
  { k: 'し', r: 'shi', m: 'Shepherd\'s hook', v: [['しろ', 'shiro', 'white'], ['した', 'shita', 'under']] },
  { k: 'す', r: 'su', m: 'Swinging on a loop', v: [['すし', 'sushi', 'sushi'], ['すき', 'suki', 'like']] },
  { k: 'せ', r: 'se', m: 'Setting the table', v: [['せかい', 'sekai', 'world'], ['せんせい', 'sensei', 'teacher']] },
  { k: 'そ', r: 'so', m: 'Sewing zigzag', v: [['そら', 'sora', 'sky'], ['そと', 'soto', 'outside']] },
  { k: 'た', r: 'ta', m: 'TA letter T and A', v: [['たべもの', 'tabemono', 'food'], ['たかい', 'takai', 'high/expensive']] },
  { k: 'ち', r: 'chi', m: 'Cheerleader', v: [['ちいさい', 'chiisai', 'small'], ['ちかてつ', 'chikatetsu', 'subway']] },
  { k: 'つ', r: 'tsu', m: 'Tsunami wave', v: [['つき', 'tsuki', 'moon'], ['つぎ', 'tsugi', 'next']] },
  { k: 'て', r: 'te', m: 'Broken tennis racket', v: [['て', 'te', 'hand'], ['てがみ', 'tegami', 'letter']] },
  { k: 'と', r: 'to', m: 'Toe with a splinter', v: [['とり', 'tori', 'bird'], ['とけい', 'tokei', 'watch/clock']] },
  { k: 'な', r: 'na', m: 'Nun praying', v: [['なまえ', 'namae', 'name'], ['なつ', 'natsu', 'summer']] },
  { k: 'に', r: 'ni', m: 'Needle and thread', v: [['にく', 'niku', 'meat'], ['にほん', 'nihon', 'Japan']] },
  { k: 'ぬ', r: 'nu', m: 'Noodles', v: [['ぬの', 'nuno', 'cloth'], ['ぬるい', 'nurui', 'lukewarm']] },
  { k: 'ね', r: 'ne', m: 'Neko (cat)', v: [['ねこ', 'neko', 'cat'], ['ねる', 'neru', 'to sleep']] },
  { k: 'の', r: 'no', m: 'No smoking sign', v: [['のみもの', 'nomimono', 'drink'], ['のる', 'noru', 'to ride']] },
  { k: 'は', r: 'ha', m: 'Capital H and lowercase a', v: [['はな', 'hana', 'flower/nose'], ['はる', 'haru', 'spring']] },
  { k: 'ひ', r: 'hi', m: 'He has a big smile', v: [['ひと', 'hito', 'person'], ['ひ', 'hi', 'fire/day']] },
  { k: 'ふ', r: 'fu', m: 'Mount Fuji', v: [['ふゆ', 'fuyu', 'winter'], ['ふね', 'fune', 'ship']] },
  { k: 'へ', r: 'he', m: 'Pointing to Heaven', v: [['へや', 'heya', 'room'], ['へた', 'heta', 'unskillful']] },
  { k: 'ほ', r: 'ho', m: 'Hot pan', v: [['ほん', 'hon', 'book'], ['ほし', 'hoshi', 'star']] },
  { k: 'ま', r: 'ma', m: 'Mast of a ship', v: [['まち', 'machi', 'town'], ['まど', 'mado', 'window']] },
  { k: 'み', r: 'mi', m: 'Me turning 21', v: [['みず', 'mizu', 'water'], ['みみ', 'mimi', 'ear']] },
  { k: 'む', r: 'mu', m: 'Moo cow', v: [['むし', 'mushi', 'bug'], ['むら', 'mura', 'village']] },
  { k: 'め', r: 'me', m: 'Eye (me in Japanese) with a noodle', v: [['め', 'me', 'eye'], ['めがね', 'megane', 'glasses']] },
  { k: 'も', r: 'mo', m: 'More fish on the hook', v: [['もの', 'mono', 'thing'], ['もも', 'momo', 'peach']] },
  { k: 'や', r: 'ya', m: 'Yak', v: [['やま', 'yama', 'mountain'], ['やさい', 'yasai', 'vegetable']] },
  { k: 'ゆ', r: 'yu', m: 'U-turn in the road', v: [['ゆき', 'yuki', 'snow'], ['ゆめ', 'yume', 'dream']] },
  { k: 'よ', r: 'yo', m: 'Yo-yo', v: [['よる', 'yoru', 'night'], ['よむ', 'yomu', 'to read']] },
  { k: 'ら', r: 'ra', m: 'Rabbit', v: [['らいげつ', 'raigetsu', 'next month'], ['らいねん', 'rainen', 'next year']] },
  { k: 'り', r: 'ri', m: 'Ribbon', v: [['りんご', 'ringo', 'apple'], ['りゆう', 'riyuu', 'reason']] },
  { k: 'る', r: 'ru', m: 'Route with a loop', v: [['るす', 'rusu', 'absence'], ['るい', 'rui', 'kind/sort']] },
  { k: 'れ', r: 're', m: 'Resting', v: [['れきし', 'rekishi', 'history'], ['れんしゅう', 'renshuu', 'practice']] },
  { k: 'ろ', r: 'ro', m: 'Route without a loop', v: [['ろく', 'roku', 'six'], ['ろうそく', 'rousoku', 'candle']] },
  { k: 'わ', r: 'wa', m: 'Magic wand', v: [['わたし', 'watashi', 'I/me'], ['わかる', 'wakaru', 'to understand']] },
  { k: 'を', r: 'wo', m: 'Olympic thrower', v: [['を', 'wo', 'object particle'], ['-', '-', '-']] },
  { k: 'ん', r: 'n', m: 'Letter n', v: [['ほん', 'hon', 'book'], ['てんき', 'tenki', 'weather']] }
];

const katakana = [
  { k: 'ア', r: 'a', m: 'Ice axe', v: [['アイス', 'aisu', 'ice cream'], ['アメリカ', 'amerika', 'America']] },
  { k: 'イ', r: 'i', m: 'Eagle looking down', v: [['インド', 'indo', 'India'], ['インク', 'inku', 'ink']] },
  { k: 'ウ', r: 'u', m: 'Umbrella', v: [['ウール', 'uuru', 'wool'], ['ウクレレ', 'ukurere', 'ukulele']] },
  { k: 'エ', r: 'e', m: 'Elevator doors', v: [['エレベーター', 'erebeetaa', 'elevator'], ['エンジン', 'enjin', 'engine']] },
  { k: 'オ', r: 'o', m: 'Opera singer', v: [['オレンジ', 'orenji', 'orange'], ['オイル', 'oiru', 'oil']] },
  { k: 'カ', r: 'ka', m: 'Kite flying', v: [['カメラ', 'kamera', 'camera'], ['カレー', 'karee', 'curry']] },
  { k: 'キ', r: 'ki', m: 'Key', v: [['ギター', 'gitaa', 'guitar (with dakuten)'], ['キロ', 'kiro', 'kilo']] },
  { k: 'ク', r: 'ku', m: 'Cook\'s hat', v: [['クラス', 'kurasu', 'class'], ['クラブ', 'kurabu', 'club']] },
  { k: 'ケ', r: 'ke', m: 'Kettle', v: [['ケーキ', 'keeki', 'cake'], ['ケース', 'keesu', 'case']] },
  { k: 'コ', r: 'ko', m: 'Corners', v: [['コーヒー', 'koohii', 'coffee'], ['コート', 'kooto', 'coat']] },
  { k: 'サ', r: 'sa', m: 'Saddle', v: [['サラダ', 'sarada', 'salad'], ['サッカー', 'sakkaa', 'soccer']] },
  { k: 'シ', r: 'shi', m: 'She has a crooked smile', v: [['シャツ', 'shatsu', 'shirt'], ['シャワー', 'shawaa', 'shower']] },
  { k: 'ス', r: 'su', m: 'Soup bowl', v: [['スープ', 'suupu', 'soup'], ['スキー', 'sukii', 'ski']] },
  { k: 'セ', r: 'se', m: 'Setting the table', v: [['セーター', 'seetaa', 'sweater'], ['センター', 'sentaa', 'center']] },
  { k: 'ソ', r: 'so', m: 'Soft serve ice cream', v: [['ソース', 'soosu', 'sauce'], ['ソファ', 'sofa', 'sofa']] },
  { k: 'タ', r: 'ta', m: 'Tower', v: [['タクシー', 'takushii', 'taxi'], ['タオル', 'taoru', 'towel']] },
  { k: 'チ', r: 'chi', m: 'Cheerleader', v: [['チーズ', 'chiizu', 'cheese'], ['チーム', 'chiimu', 'team']] },
  { k: 'ツ', r: 'tsu', m: 'Two needles', v: [['ツアー', 'tsuaa', 'tour'], ['ツナ', 'tsuna', 'tuna']] },
  { k: 'テ', r: 'te', m: 'Telephone pole', v: [['テレビ', 'terebi', 'TV'], ['テスト', 'tesuto', 'test']] },
  { k: 'ト', r: 'to', m: 'Totem pole', v: [['トイレ', 'toire', 'toilet'], ['トマト', 'tomato', 'tomato']] },
  { k: 'ナ', r: 'na', m: 'Nutcracker', v: [['ナイフ', 'naifu', 'knife'], ['ナプキン', 'napukin', 'napkin']] },
  { k: 'ニ', r: 'ni', m: 'Two needles', v: [['ニュース', 'nyuusu', 'news'], ['ニット', 'nitto', 'knit']] },
  { k: 'ヌ', r: 'nu', m: 'Noodles', v: [['ヌードル', 'nuudoru', 'noodle'], ['- ', '-', '-']] },
  { k: 'ネ', r: 'ne', m: 'Nest', v: [['ネクタイ', 'nekutai', 'necktie'], ['ネット', 'netto', 'net']] },
  { k: 'ノ', r: 'no', m: 'Nose', v: [['ノート', 'nooto', 'notebook'], ['ノック', 'nokku', 'knock']] },
  { k: 'ハ', r: 'ha', m: 'Hat', v: [['ハンバーガー', 'hanbaagaa', 'hamburger'], ['バス', 'basu', 'bus (with dakuten)']] },
  { k: 'ヒ', r: 'hi', m: 'Heel', v: [['ヒーター', 'hiitaa', 'heater'], ['ヒーロー', 'hiiroo', 'hero']] },
  { k: 'フ', r: 'fu', m: 'Flag', v: [['フォーク', 'fooku', 'fork'], ['フィルム', 'firumu', 'film']] },
  { k: 'ヘ', r: 'he', m: 'Pointing to Heaven', v: [['ヘリコプター', 'herikoputaa', 'helicopter'], ['ヘルメット', 'herumetto', 'helmet']] },
  { k: 'ホ', r: 'ho', m: 'Holy cross', v: [['ホテル', 'hoteru', 'hotel'], ['ホーム', 'hoomu', 'platform/home']] },
  { k: 'マ', r: 'ma', m: 'Mast', v: [['マスク', 'masuku', 'mask'], ['マイク', 'maiku', 'mic']] },
  { k: 'ミ', r: 'mi', m: 'Three missiles', v: [['ミルク', 'miruku', 'milk'], ['ミラー', 'miraa', 'mirror']] },
  { k: 'ム', r: 'mu', m: 'Moose antlers', v: [['ムード', 'muudo', 'mood'], ['- ', '-', '-']] },
  { k: 'メ', r: 'me', m: 'Metal sword', v: [['メニュー', 'menyuu', 'menu'], ['メール', 'meeru', 'mail']] },
  { k: 'モ', r: 'mo', m: 'Monitor', v: [['モーター', 'mootaa', 'motor'], ['モデル', 'moderu', 'model']] },
  { k: 'ヤ', r: 'ya', m: 'Yak', v: [['ヤンキー', 'yankii', 'delinquent'], ['- ', '-', '-']] },
  { k: 'ユ', r: 'yu', m: 'U-turn', v: [['ユニフォーム', 'yunifoomu', 'uniform'], ['ユーロ', 'yuuro', 'euro']] },
  { k: 'ヨ', r: 'yo', m: 'Yoke', v: [['ヨーロッパ', 'yooroppa', 'Europe'], ['ヨガ', 'yoga', 'yoga']] },
  { k: 'ラ', r: 'ra', m: 'Raptor', v: [['ラジオ', 'rajio', 'radio'], ['ライオン', 'raion', 'lion']] },
  { k: 'リ', r: 'ri', m: 'Ribbon', v: [['リボン', 'ribon', 'ribbon'], ['リスト', 'risuto', 'list']] },
  { k: 'ル', r: 'ru', m: 'Roots', v: [['ルール', 'ruuru', 'rule'], ['ルーム', 'ruumu', 'room']] },
  { k: 'レ', r: 're', m: 'Record', v: [['レストラン', 'resutoran', 'restaurant'], ['レモン', 'remon', 'lemon']] },
  { k: 'ロ', r: 'ro', m: 'Road', v: [['ロボット', 'robotto', 'robot'], ['ロケット', 'roketto', 'rocket']] },
  { k: 'ワ', r: 'wa', m: 'Wine glass', v: [['ワイン', 'wain', 'wine'], ['ワイシャツ', 'waishatsu', 'dress shirt']] },
  { k: 'ヲ', r: 'wo', m: 'Water skier', v: [['ヲタク', 'wotaku', 'otaku (slang)'], ['- ', '-', '-']] },
  { k: 'ン', r: 'n', m: 'One eye and a nose', v: [['パン', 'pan', 'bread'], ['ペン', 'pen', 'pen']] }
];

let output = \`export interface KanaDetail {
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
\`;

function generateEntries(list, type) {
  list.forEach(item => {
    const id = \`\${type}-\${item.r}\`;
    output += \`  "\${id}": {
    id: "\${id}",
    kana: "\${item.k}",
    romaji: "\${item.r}",
    type: "\${type}",
    mnemonic: "\${item.m.replace(/"/g, '\\"')}",
    strokeOrderGif: "https://placehold.co/200x200/f3f4f6/a8a29e?text=\${encodeURIComponent(item.k)}",
    strokes: [
      "Follow the standard stroke order for \${item.k}."
    ],
    vocabulary: [
\`;
    item.v.forEach((v, i) => {
      if (v[0] !== '-') {
        output += \`      { kana: "\${v[0]}", romaji: "\${v[1]}", meaning: "\${v[2].replace(/"/g, '\\"')}" }\${i < item.v.length - 1 && item.v[i+1][0] !== '-' ? ',' : ''}\n\`;
      }
    });
    output += \`    ]
  },\n\`;
  });
}

generateEntries(hiragana, 'hiragana');
generateEntries(katakana, 'katakana');

output += \`};
\`;

fs.writeFileSync('src/data/kana.ts', output);
console.log('Generated src/data/kana.ts');
