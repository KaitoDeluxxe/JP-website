import { Link } from "react-router-dom";
import { Lightbulb, Sparkles, PlayCircle, FileText, Headphones } from "lucide-react";

export default function PastPapers() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed antialiased min-h-screen flex flex-col w-full">
      <div className="flex flex-1 w-full">
        {/* Main Content */}
        <div className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
          {/* Sticky Header */}
          <div className="sticky top-16 z-40 mb-12 -mx-4 px-4 bg-background/80 backdrop-blur-sm py-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary flex flex-wrap items-center justify-between gap-6 border border-outline-variant/10">
              <div className="flex items-center gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed rounded-full text-[10px] font-bold tracking-wide">JLPT N1</span>
                    <span className="text-on-surface-variant text-[10px] font-medium">Past Paper</span>
                  </div>
                  <h1 className="font-headline text-xl font-bold text-on-surface tracking-tight">Dec 2017 Retrospective</h1>
                  <p className="font-body text-xs font-semibold text-secondary">言語知識（文字・語彙・文法）＋ 読解 ＋ 聴解</p>
                </div>
              </div>
              <div className="flex items-center gap-8 px-6 border-x border-outline-variant/20">
                <div className="text-center">
                  <p className="font-body text-[10px] uppercase tracking-widest text-slate-400 font-bold">Progress</p>
                  <p className="font-headline text-lg font-bold text-on-surface tracking-tighter">0 / 73</p>
                </div>
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-lg font-headline font-bold text-sm shadow-sm hover:bg-emerald-800 transition-colors">
                Save Progress
              </button>
            </div>
          </div>

          {/* QUESTION SECTIONS */}
          <div className="space-y-16">
            
            {/* =========================================
                PART 1: 言語知識 (Vocabulary & Grammar)
                ========================================= */}
            <div className="flex items-center gap-3 border-b-2 border-primary pb-2 mb-8 mt-12">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold font-headline text-primary tracking-tight">言語知識（文字・語彙・文法）</h2>
            </div>

            {/* 問題1 読み方 */}
            <section id="m1">
              <div className="border-l-4 border-secondary pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">問題１　＿＿の言葉の読み方として最もよいものを、１・２・３・４から一つ選びなさい。</h3>
              </div>
              <div className="overflow-hidden bg-white rounded-xl shadow-sm border border-outline-variant/10">
                <table className="w-full text-left border-collapse">
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-6 w-1/2">
                        <div className="text-base font-medium text-on-surface">
                          1. 新しい販売ルートを<span className="underline decoration-secondary decoration-2 font-bold">開拓</span>した。
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="grid grid-cols-2 gap-2">
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">1. かいたく</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">2. かいだく</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">3. かいせき</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">4. かいぜき</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 問題2 語彙 */}
            <section id="m2">
              <div className="border-l-4 border-secondary pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">問題２　（　）に入れるのに最もよいものを、１・２・３・４から一つ選びなさい。</h3>
              </div>
              <div className="overflow-hidden bg-white rounded-xl shadow-sm border border-outline-variant/10">
                <table className="w-full text-left border-collapse">
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-6 w-1/2">
                        <div className="text-base font-medium text-on-surface">
                          7. 小型カメラの国内市場では、弊社が20パーセントの（　　）を占めています。
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="grid grid-cols-2 gap-2">
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">1. レート</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">2. レベル</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">3. ランク</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">4. シェア</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 問題3 類義語 */}
            <section id="m3">
              <div className="border-l-4 border-secondary pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">問題３　＿＿の言葉に意味が最も近いものを、１・２・３・４から一つ選びなさい。</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10">
                <p className="text-base font-medium mb-4">14. 松本氏は自身のブログで<span className="underline decoration-secondary decoration-2 font-bold">抱負</span>を述べていた。</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button className="px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">1. 見解</button>
                  <button className="px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">2. 感謝</button>
                  <button className="px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">3. 反省</button>
                  <button className="px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">4. 決意</button>
                </div>
              </div>
            </section>

            {/* 問題4 用法 */}
            <section id="m4">
              <div className="border-l-4 border-secondary pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">問題４　次の言葉の使い方として最もよいものを、１・２・３・４から一つ選びなさい。</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10">
                <p className="text-base font-bold bg-surface-container-highest inline-block px-3 py-1 rounded mb-4">20. 重複</p>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-3 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">1. 私は、努力を惜しまず何度も重複して覚えることで、記憶を定着させた。</button>
                  <button className="w-full text-left px-4 py-3 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">2. 大量のデータの中には重複しているものもあり、早急に整理が必要だった。</button>
                  <button className="w-full text-left px-4 py-3 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">3. 健康に自信があっても、無理が重複すれば体を壊してしまいますよ。</button>
                  <button className="w-full text-left px-4 py-3 bg-surface-container-low rounded-lg text-sm hover:bg-primary-fixed/20 transition-all">4. 開園を待つ人の列が、驚くほど重複して入場ゲートの前にできていた。</button>
                </div>
              </div>
            </section>

            {/* 問題5 文法 */}
            <section id="m5">
              <div className="border-l-4 border-tertiary pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">文法 問題５　次の文の（　）に入れるのに最もよいものを、１・２・３・４から選びなさい。</h3>
              </div>
              <div className="overflow-hidden bg-white rounded-xl shadow-sm border border-outline-variant/10">
                 <table className="w-full text-left border-collapse">
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-6 w-1/2">
                        <div className="text-base font-medium text-on-surface">
                          26. X陶芸美術館が25日、Y市に開館する。同美術館ではこれ（　　）、23日に関係者を招いて記念式典を行った。
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="grid grid-cols-2 gap-2">
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-tertiary-fixed/20 transition-all">1. に先立ち</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-tertiary-fixed/20 transition-all">2. に次ぎ</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-tertiary-fixed/20 transition-all">3. につけ</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-tertiary-fixed/20 transition-all">4. につれ</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 問題6 文の組み立て */}
            <section id="m6">
              <div className="border-l-4 border-tertiary pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">文法 問題６　次の文の ★ に入る最もよいものを、１・２・３・４から一つ選びなさい。</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10">
                <p className="text-base font-medium mb-4">36. 「乗りかかった船」ということわざは、乗った船が岸を離れれば途中で降りることができない ＿＿ ★ ＿＿ ＿＿ ことのたとえである。</p>
                <div className="flex flex-wrap gap-2">
                  <div className="px-4 py-2 bg-surface-container-low rounded-lg text-sm cursor-move border hover:border-tertiary transition-all">1. 物事を始めてしまった</div>
                  <div className="px-4 py-2 bg-surface-container-low rounded-lg text-sm cursor-move border hover:border-tertiary transition-all">2. ことから</div>
                  <div className="px-4 py-2 bg-surface-container-low rounded-lg text-sm cursor-move border hover:border-tertiary transition-all">3. 途中でやめるわけにはいかない</div>
                  <div className="px-4 py-2 bg-surface-container-low rounded-lg text-sm cursor-move border hover:border-tertiary transition-all">4. 以上</div>
                </div>
              </div>
            </section>


            {/* =========================================
                PART 2: 読解 (Reading Comprehension)
                ========================================= */}
            <div className="flex items-center gap-3 border-b-2 border-purple-600 pb-2 mb-8 mt-16">
              <FileText className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold font-headline text-purple-700 tracking-tight">読解 (Reading)</h2>
            </div>

            {/* 問題7 穴埋め読解 */}
            <section id="r7">
              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">読解 問題７　文章全体の趣旨を踏まえて、（４１）から（４５）の中に入る最もよいものを選びなさい。</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="bg-surface-container-lowest p-5 rounded border border-outline-variant/20 text-sm leading-loose mb-6">
                  <p>以下は、小説『望月青果店』についての書評である。<br/>思春期の頃こ、母親の存在を疎うましく思った。初めて恋をした頃こだった。... 本書の主人公・鈴子（すずこ）<strong>（ 41 ）</strong>母親は天敵のような存在で、母からいつも逃げたいと思っていた...</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button className="px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-purple-100 transition-all">1. ではないが</button>
                  <button className="px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-purple-100 transition-all">2. と同じく</button>
                  <button className="px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-purple-100 transition-all">3. とは違って</button>
                  <button className="px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-purple-100 transition-all">4. にとっても</button>
                </div>
              </div>
            </section>

            {/* 問題8 短文読解 */}
            <section id="r8">
              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">読解 問題８　次の文章を読んで、後の問いに対する答えとして最もよいものを選びなさい。</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10">
                <h4 className="font-bold text-sm mb-2 text-on-surface-variant">（１）トラベルライト メール</h4>
                <div className="bg-surface-container-lowest p-5 rounded border border-outline-variant/20 text-sm leading-loose mb-4">
                  <p>この度はトラベルライトをご利用いただきありがとうございます。弊社ホームページよりお申し込みいただいた「小型飛行機で行く暁島」は、現時点では仮予約になっております...</p>
                </div>
                <p className="font-medium mb-3">46. このメールで最も伝えたいことは何か。</p>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-purple-100 transition-all">1. 航空券仮予約の確認者を近日中に送ること</button>
                  <button className="w-full text-left px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-purple-100 transition-all">2. 航空券の予約はまだ確定していないこと</button>
                  <button className="w-full text-left px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-purple-100 transition-all">3. 航空券の手配に必要な情報が足りないこと</button>
                  <button className="w-full text-left px-4 py-2 bg-surface-container-low rounded-lg text-sm hover:bg-purple-100 transition-all">4. 航空券が手配できないので別の便を提案したいこと</button>
                </div>
              </div>
            </section>

            {/* 問題9 中文読解 */}
            <section id="r9">
              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">読解 問題９　(中文読解 - Mid-Size Passage)</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-outline-variant/40 text-center text-slate-400 py-10">
                [ 中文読解の文章と設問が入ります ]
              </div>
            </section>

            {/* 問題10 長文読解 */}
            <section id="r10">
              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">読解 問題１０　(長文読解 - Long Passage)</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-outline-variant/40 text-center text-slate-400 py-10">
                [ 長文読解の文章と設問が入ります ]
              </div>
            </section>

            {/* 問題11 統合理解 */}
            <section id="r11">
              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">読解 問題１１　(統合理解 - Comparative Reading A & B)</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-outline-variant/40 text-center text-slate-400 py-10">
                [ AとBの文章を比較する設問が入ります ]
              </div>
            </section>

            {/* 問題12 主張理解 */}
            <section id="r12">
              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">読解 問題１２　(主張理解 - Thematic Reading)</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-outline-variant/40 text-center text-slate-400 py-10">
                [ 筆者の主張を読み解く長文が入ります ]
              </div>
            </section>

            {/* 問題13 情報検索 */}
            <section id="r13">
              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">読解 問題１３　(情報検索 - Information Retrieval)</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-outline-variant/40 text-center text-slate-400 py-10">
                [ 広告やパンフレットから情報を探す問題が入ります ]
              </div>
            </section>


            {/* =========================================
                PART 3: 聴解 (Listening Comprehension)
                ========================================= */}
            <div className="flex items-center gap-3 border-b-2 border-orange-500 pb-2 mb-8 mt-16">
              <Headphones className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold font-headline text-orange-600 tracking-tight">聴解 (Listening)</h2>
            </div>

            {/* 聴解 問題1 */}
            <section id="cho1">
              <div className="border-l-4 border-orange-400 pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">聴解 問題１　課題理解</h3>
                <p className="text-sm text-on-surface-variant mt-1">Listen to the audio and select the correct action.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl mb-6 border border-outline-variant/20">
                  <button className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shrink-0">
                    <PlayCircle className="w-5 h-5" />
                  </button>
                  <div className="flex-1">
                    <div className="h-1.5 bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-0 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-3 bg-surface-container-low rounded-lg text-sm hover:bg-orange-50 transition-all">1. 会議室を予約する</button>
                  <button className="w-full text-left px-4 py-3 bg-surface-container-low rounded-lg text-sm hover:bg-orange-50 transition-all">2. 資料を印刷する</button>
                  <button className="w-full text-left px-4 py-3 bg-surface-container-low rounded-lg text-sm hover:bg-orange-50 transition-all">3. 部長に報告する</button>
                  <button className="w-full text-left px-4 py-3 bg-surface-container-low rounded-lg text-sm hover:bg-orange-50 transition-all">4. メールを送信する</button>
                </div>
              </div>
            </section>

            {/* 聴解 問題2 */}
            <section id="cho2">
              <div className="border-l-4 border-orange-400 pl-4 mb-6">
                <h3 className="text-lg font-bold font-headline text-on-surface">聴解 問題２　ポイント理解</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-outline-variant/40 text-center text-slate-400 py-10">
                [ 聴解問題2の音声と選択肢が入ります ]
              </div>
            </section>


            {/* Finish Button */}
            <div className="pt-10 pb-20 border-t border-outline-variant/20 text-center mt-12">
              <button className="bg-emerald-700 text-white px-12 py-4 rounded-xl font-headline text-xl font-bold shadow-lg hover:bg-emerald-800 transition-all hover:scale-[1.02] active:scale-95">
                Finish & Submit Paper
              </button>
              <p className="font-body text-xs text-on-surface-variant mt-4 font-medium tracking-wide">Review your answers and see explanations.</p>
            </div>
            
          </div>
        </div>

        {/* Side Stats Bar (Right) */}
        <aside className="hidden xl:flex flex-col w-80 h-[calc(100vh-64px)] sticky top-16 bg-slate-50 border-l border-outline-variant/10 p-6 gap-6 overflow-y-auto shrink-0">
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Exam Structure Breakdown</h3>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-outline-variant/10">
                <ul className="text-xs space-y-3 text-on-surface-variant">
                  <li className="flex justify-between border-b pb-1"><span>言語知識 (Vocab/Grammar)</span> <span>Q1 - Q40</span></li>
                  <li className="flex justify-between border-b pb-1 text-purple-700 font-medium"><span>読解 (Reading)</span> <span>Q41 - Q73</span></li>
                  <li className="flex justify-between text-orange-600 font-medium"><span>聴解 (Listening)</span> <span>5 Sections</span></li>
                </ul>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-primary-fixed/30 relative overflow-hidden border border-primary/10">
              <div className="relative z-10">
                <h4 className="font-headline font-bold text-primary text-sm">Study Tip</h4>
                <p className="font-body text-[11px] text-on-primary-fixed-variant mt-2 leading-relaxed font-medium">
                  The N1 is heavily weighted towards reading speed. Make sure to allocate at least 60-70 minutes purely for 問題7 through 問題13!
                </p>
              </div>
              <Sparkles className="absolute -right-4 -bottom-4 text-primary/10 w-24 h-24" />
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}