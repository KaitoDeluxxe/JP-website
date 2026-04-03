import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const katakanaGrid = [
  { row: 'vowels', chars: [{ kana: 'ア', romaji: 'a' }, { kana: 'イ', romaji: 'i' }, { kana: 'ウ', romaji: 'u' }, { kana: 'エ', romaji: 'e' }, { kana: 'オ', romaji: 'o' }] },
  { row: 'k', chars: [{ kana: 'カ', romaji: 'ka' }, { kana: 'キ', romaji: 'ki' }, { kana: 'ク', romaji: 'ku' }, { kana: 'ケ', romaji: 'ke' }, { kana: 'コ', romaji: 'ko' }] },
  { row: 's', chars: [{ kana: 'サ', romaji: 'sa' }, { kana: 'シ', romaji: 'shi' }, { kana: 'ス', romaji: 'su' }, { kana: 'セ', romaji: 'se' }, { kana: 'ソ', romaji: 'so' }] },
  { row: 't', chars: [{ kana: 'タ', romaji: 'ta' }, { kana: 'チ', romaji: 'chi' }, { kana: 'ツ', romaji: 'tsu' }, { kana: 'テ', romaji: 'te' }, { kana: 'ト', romaji: 'to' }] },
  { row: 'n', chars: [{ kana: 'ナ', romaji: 'na' }, { kana: 'ニ', romaji: 'ni' }, { kana: 'ヌ', romaji: 'nu' }, { kana: 'ネ', romaji: 'ne' }, { kana: 'ノ', romaji: 'no' }] },
  { row: 'h', chars: [{ kana: 'ハ', romaji: 'ha' }, { kana: 'ヒ', romaji: 'hi' }, { kana: 'フ', romaji: 'fu' }, { kana: 'ヘ', romaji: 'he' }, { kana: 'ホ', romaji: 'ho' }] },
  { row: 'm', chars: [{ kana: 'マ', romaji: 'ma' }, { kana: 'ミ', romaji: 'mi' }, { kana: 'ム', romaji: 'mu' }, { kana: 'メ', romaji: 'me' }, { kana: 'モ', romaji: 'mo' }] },
  { row: 'y', chars: [{ kana: 'ヤ', romaji: 'ya' }, null, { kana: 'ユ', romaji: 'yu' }, null, { kana: 'ヨ', romaji: 'yo' }] },
  { row: 'r', chars: [{ kana: 'ラ', romaji: 'ra' }, { kana: 'リ', romaji: 'ri' }, { kana: 'ル', romaji: 'ru' }, { kana: 'レ', romaji: 're' }, { kana: 'ロ', romaji: 'ro' }] },
  { row: 'w', chars: [{ kana: 'ワ', romaji: 'wa' }, null, null, null, { kana: 'ヲ', romaji: 'wo' }] },
  { row: 'n_alone', chars: [{ kana: 'ン', romaji: 'n' }, null, null, null, null] },
];

export default function Katakana() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-on-surface font-medium">Katakana</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4 tracking-tight">Katakana Chart</h1>
        <p className="text-lg text-on-surface-variant max-w-3xl">
          Katakana is the Japanese phonetic alphabet primarily used for foreign loanwords, onomatopoeia, and emphasis. Click on any character to learn its stroke order, pronunciation, and vocabulary.
        </p>
      </div>

      {/* Grid */}
      <div className="bg-surface-container-lowest rounded-3xl border border-surface-variant p-6 md:p-12 shadow-sm overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Header Row */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            {['a', 'i', 'u', 'e', 'o'].map((vowel) => (
              <div key={vowel} className="text-center font-bold text-on-surface-variant uppercase tracking-widest text-sm">
                {vowel}
              </div>
            ))}
          </div>

          {/* Character Rows */}
          <div className="space-y-4">
            {katakanaGrid.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-5 gap-4">
                {row.chars.map((char, colIndex) => (
                  char ? (
                    <Link
                      key={colIndex}
                      to={`/lesson/katakana/${char.romaji}`}
                      className="group flex flex-col items-center justify-center p-4 md:p-6 bg-surface-container hover:bg-tertiary-container rounded-2xl border border-surface-variant hover:border-tertiary/30 transition-all duration-200 hover:shadow-md active:scale-95"
                    >
                      <span className="text-4xl md:text-5xl font-black text-on-surface group-hover:text-tertiary-fixed transition-colors font-sans mb-2">
                        {char.kana}
                      </span>
                      <span className="text-sm font-bold text-on-surface-variant group-hover:text-tertiary-fixed/80 uppercase tracking-widest">
                        {char.romaji}
                      </span>
                    </Link>
                  ) : (
                    <div key={colIndex} className="p-4 md:p-6"></div>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
