import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const hiraganaGrid = [
  { row: 'vowels', chars: [{ kana: 'あ', romaji: 'a' }, { kana: 'い', romaji: 'i' }, { kana: 'う', romaji: 'u' }, { kana: 'え', romaji: 'e' }, { kana: 'お', romaji: 'o' }] },
  { row: 'k', chars: [{ kana: 'か', romaji: 'ka' }, { kana: 'き', romaji: 'ki' }, { kana: 'く', romaji: 'ku' }, { kana: 'け', romaji: 'ke' }, { kana: 'こ', romaji: 'ko' }] },
  { row: 's', chars: [{ kana: 'さ', romaji: 'sa' }, { kana: 'し', romaji: 'shi' }, { kana: 'す', romaji: 'su' }, { kana: 'せ', romaji: 'se' }, { kana: 'そ', romaji: 'so' }] },
  { row: 't', chars: [{ kana: 'た', romaji: 'ta' }, { kana: 'ち', romaji: 'chi' }, { kana: 'つ', romaji: 'tsu' }, { kana: 'て', romaji: 'te' }, { kana: 'と', romaji: 'to' }] },
  { row: 'n', chars: [{ kana: 'な', romaji: 'na' }, { kana: 'に', romaji: 'ni' }, { kana: 'ぬ', romaji: 'nu' }, { kana: 'ね', romaji: 'ne' }, { kana: 'の', romaji: 'no' }] },
  { row: 'h', chars: [{ kana: 'は', romaji: 'ha' }, { kana: 'ひ', romaji: 'hi' }, { kana: 'ふ', romaji: 'fu' }, { kana: 'へ', romaji: 'he' }, { kana: 'ほ', romaji: 'ho' }] },
  { row: 'm', chars: [{ kana: 'ま', romaji: 'ma' }, { kana: 'み', romaji: 'mi' }, { kana: 'む', romaji: 'mu' }, { kana: 'め', romaji: 'me' }, { kana: 'も', romaji: 'mo' }] },
  { row: 'y', chars: [{ kana: 'や', romaji: 'ya' }, null, { kana: 'ゆ', romaji: 'yu' }, null, { kana: 'よ', romaji: 'yo' }] },
  { row: 'r', chars: [{ kana: 'ら', romaji: 'ra' }, { kana: 'り', romaji: 'ri' }, { kana: 'る', romaji: 'ru' }, { kana: 'れ', romaji: 're' }, { kana: 'ろ', romaji: 'ro' }] },
  { row: 'w', chars: [{ kana: 'わ', romaji: 'wa' }, null, null, null, { kana: 'を', romaji: 'wo' }] },
  { row: 'n_alone', chars: [{ kana: 'ん', romaji: 'n' }, null, null, null, null] },
];

export default function Hiragana() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-on-surface font-medium">Hiragana</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4 tracking-tight">Hiragana Chart</h1>
        <p className="text-lg text-on-surface-variant max-w-3xl">
          Hiragana is the basic Japanese phonetic alphabet. It represents every sound in the Japanese language. Click on any character to learn its stroke order, pronunciation, and vocabulary.
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
            {hiraganaGrid.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-5 gap-4">
                {row.chars.map((char, colIndex) => (
                  char ? (
                    <Link
                      key={colIndex}
                      to={`/lesson/hiragana/${char.romaji}`}
                      className="group flex flex-col items-center justify-center p-4 md:p-6 bg-surface-container hover:bg-primary-container rounded-2xl border border-surface-variant hover:border-primary/30 transition-all duration-200 hover:shadow-md active:scale-95"
                    >
                      <span className="text-4xl md:text-5xl font-black text-on-surface group-hover:text-primary-fixed transition-colors font-sans mb-2">
                        {char.kana}
                      </span>
                      <span className="text-sm font-bold text-on-surface-variant group-hover:text-primary-fixed/80 uppercase tracking-widest">
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
