import { Link } from "react-router-dom";
import { Lightbulb, Sparkles, PlayCircle } from "lucide-react";

export default function Speedrun() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-on-primary-fixed antialiased min-h-screen flex flex-col w-full">
      <div className="flex flex-1 w-full">
        {/* Main Content */}
        <div className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
          {/* Sticky Header with Stopwatch */}
          <div className="sticky top-16 z-40 mb-12 -mx-4 px-4 bg-background/80 backdrop-blur-sm py-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary flex flex-wrap items-center justify-between gap-6 border border-outline-variant/10">
              <div className="flex items-center gap-5">
                <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full -rotate-90">
                    <circle className="text-surface-container-high" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="2.5"></circle>
                    <circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="176" strokeDashoffset="130" strokeLinecap="round" strokeWidth="3.5"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center leading-tight">
                    <span className="font-headline font-extrabold text-[13px] text-on-surface">00:14:52</span>
                    <span className="font-body text-[8px] font-bold text-on-surface-variant uppercase tracking-tighter">Elapsed</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed rounded-full text-[10px] font-bold tracking-wide">JLPT N1</span>
                    <span className="text-on-surface-variant text-[10px] font-medium">Sprint Mode: Any%</span>
                  </div>
                  <h1 className="font-headline text-xl font-bold text-on-surface tracking-tight">Full Sprint — Dec 2010 Retrospective</h1>
                  <p className="font-body text-xs font-semibold text-secondary">Target Completion: 60:00</p>
                </div>
              </div>
              <div className="flex items-center gap-8 px-6 border-x border-outline-variant/20">
                <div className="text-center">
                  <p className="font-body text-[10px] uppercase tracking-widest text-slate-400 font-bold">Global Rank</p>
                  <p className="font-headline text-lg font-bold text-on-surface tracking-tighter">#1,242</p>
                </div>
                <div className="text-center">
                  <p className="font-body text-[10px] uppercase tracking-widest text-slate-400 font-bold">Progress</p>
                  <p className="font-headline text-lg font-bold text-on-surface tracking-tighter">14 / 65</p>
                </div>
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-lg font-headline font-bold text-sm shadow-sm hover:bg-emerald-800 transition-colors">
                Pause Sprint
              </button>
            </div>
          </div>

          {/* Question Sections */}
          <div className="space-y-20">
            {/* Problem 1: Kanji Reading */}
            <section id="problem-1">
              <div className="border-l-4 border-secondary pl-4 mb-6">
                <h2 className="text-2xl font-bold font-headline text-on-surface">問題 1 : 漢字の読み (Section 1)</h2>
                <p className="text-on-surface-variant text-sm mt-1">Choose the correct reading for the underlined kanji in the context provided.</p>
              </div>
              <div className="overflow-hidden bg-white rounded-xl shadow-sm border border-outline-variant/10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-highest border-b border-outline-variant/20">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Question</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Options (1, 2, 3, 4)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr className="bg-white hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-8 w-1/2">
                        <div className="text-lg font-medium text-on-surface leading-loose">
                          01. 昨今の経済状況は非常に<span className="underline decoration-secondary decoration-2 underline-offset-4 font-bold">不透明</span>だ。
                        </div>
                        <p className="text-xs text-on-surface-variant mt-2 italic">The current economic situation is extremely opaque.</p>
                      </td>
                      <td className="px-6 py-8">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">1. ふとうめい</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">2. ふどうめい</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">3. ふどめい</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">4. ふとあか</button>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-surface-container-low/30 hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-8 w-1/2">
                        <div className="text-lg font-medium text-on-surface leading-loose">
                          02. 彼は周囲の反対を<span className="underline decoration-secondary decoration-2 underline-offset-4 font-bold">排斥</span>して計画を進めた。
                        </div>
                        <p className="text-xs text-on-surface-variant mt-2 italic">He pushed forward the plan, rejecting all surrounding opposition.</p>
                      </td>
                      <td className="px-6 py-8">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">1. はいせき</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">2. はいしゃく</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">3. ひせき</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">4. はいそく</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Problem 2: Contextual Usage */}
            <section id="problem-2">
              <div className="border-l-4 border-secondary pl-4 mb-6">
                <h2 className="text-2xl font-bold font-headline text-on-surface">問題 2 : 文脈規定 (Section 2)</h2>
                <p className="text-on-surface-variant text-sm mt-1">Select the word that best fits the sentence context.</p>
              </div>
              <div className="overflow-hidden bg-white rounded-xl shadow-sm border border-outline-variant/10">
                <table className="w-full text-left border-collapse">
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-8 w-1/2">
                        <div className="text-lg font-medium text-on-surface leading-loose">
                          03. 今回の不祥事は、企業の信頼を（　　）しかねない重大な問題だ。
                        </div>
                      </td>
                      <td className="px-6 py-8">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">1. 損なう (Somonau)</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">2. 補う (Oginau)</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">3. 養う (Yashinau)</button>
                          <button className="text-left px-3 py-2 bg-surface-container-low rounded-lg text-sm text-slate-600 hover:bg-primary-fixed/20 transition-all">4. 賄う (Makanau)</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Problem 3: Grammar Star */}
            <section id="problem-3">
              <div className="border-l-4 border-tertiary pl-4 mb-6">
                <h2 className="text-2xl font-bold font-headline text-on-surface">問題 3 : 文の組み立て (Section 3)</h2>
                <p className="text-on-surface-variant text-sm mt-1">Arrange the options to form a grammatically correct sentence.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="p-4 bg-tertiary-fixed/20 border-l-2 border-tertiary mb-8 rounded-r-lg">
                  <p className="font-headline text-xs font-bold text-tertiary flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Lexon Insight
                  </p>
                  <p className="font-body text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                    This sentence pattern <span className="font-bold text-on-surface">V-かたわら</span> (while doing X, also Y) is a recurring N1 favorite for expressing dual roles.
                  </p>
                </div>
                <div className="mb-8">
                  <p className="text-xl leading-loose text-on-surface">
                    05. 彼は俳優として活躍する（　★　）、（　　）、（　　）、（　　）活動を続けている。
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="px-5 py-3 bg-surface-container-low rounded-lg border border-outline-variant/30 text-sm font-headline font-medium cursor-move hover:border-primary transition-all">1. ボランティア</div>
                  <div className="px-5 py-3 bg-surface-container-low rounded-lg border border-outline-variant/30 text-sm font-headline font-medium cursor-move hover:border-primary transition-all">2. かたわら</div>
                  <div className="px-5 py-3 bg-surface-container-low rounded-lg border border-outline-variant/30 text-sm font-headline font-medium cursor-move hover:border-primary transition-all">3. 慈善</div>
                  <div className="px-5 py-3 bg-surface-container-low rounded-lg border border-outline-variant/30 text-sm font-headline font-medium cursor-move hover:border-primary transition-all">4. 熱心に</div>
                </div>
              </div>
            </section>

            {/* Problem 4: Reading Comprehension */}
            <section id="problem-4">
              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                <h2 className="text-2xl font-bold font-headline text-on-surface">問題 4 : 短文読解 (Section 4)</h2>
                <p className="text-on-surface-variant text-sm mt-1">Read the short passage and answer the question.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="mb-6 p-6 bg-surface-container-lowest border border-outline-variant/20 rounded-lg text-on-surface leading-loose">
                  <p>現代社会において、情報技術の進歩は私たちの生活を根本から変えた。しかし、その利便性の裏で、人間本来のコミュニケーション能力が失われつつあるのではないかと危惧する声も少なくない。画面越しの対話が増えるにつれ、相手の微妙な表情や声のトーンから感情を読み取る機会が減っているのだ。</p>
                </div>
                <div className="mb-8">
                  <p className="text-lg font-medium text-on-surface">
                    06. 筆者がここで最も言いたいことは何か。
                  </p>
                </div>
                <div className="space-y-3">
                  <button className="w-full text-left px-5 py-4 bg-surface-container-low rounded-lg text-sm text-slate-700 hover:bg-primary-fixed/20 transition-all border border-transparent hover:border-primary/30">1. 情報技術の進歩は生活を便利にした。</button>
                  <button className="w-full text-left px-5 py-4 bg-surface-container-low rounded-lg text-sm text-slate-700 hover:bg-primary-fixed/20 transition-all border border-transparent hover:border-primary/30">2. 画面越しの対話は効率的である。</button>
                  <button className="w-full text-left px-5 py-4 bg-surface-container-low rounded-lg text-sm text-slate-700 hover:bg-primary-fixed/20 transition-all border border-transparent hover:border-primary/30">3. 技術の進歩により、非言語的なコミュニケーション能力が低下する恐れがある。</button>
                  <button className="w-full text-left px-5 py-4 bg-surface-container-low rounded-lg text-sm text-slate-700 hover:bg-primary-fixed/20 transition-all border border-transparent hover:border-primary/30">4. 人間は情報技術に頼らずに生活するべきだ。</button>
                </div>
              </div>
            </section>

            {/* Problem 5: Listening Comprehension */}
            <section id="problem-5">
              <div className="border-l-4 border-orange-500 pl-4 mb-6">
                <h2 className="text-2xl font-bold font-headline text-on-surface">問題 5 : 聴解 (Section 5)</h2>
                <p className="text-on-surface-variant text-sm mt-1">Listen to the audio and select the correct action.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl mb-8 border border-outline-variant/20">
                  <button className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors shrink-0">
                    <PlayCircle className="w-6 h-6" />
                  </button>
                  <div className="flex-1">
                    <div className="h-2 bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-1/3 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-on-surface-variant mt-2 font-medium">
                      <span>0:14</span>
                      <span>1:42</span>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <p className="text-lg font-medium text-on-surface">
                    07. 男の人はこの後、まず何をしますか。
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <button className="text-left px-5 py-4 bg-surface-container-low rounded-lg text-sm text-slate-700 hover:bg-primary-fixed/20 transition-all border border-transparent hover:border-primary/30">1. 会議室を予約する</button>
                  <button className="text-left px-5 py-4 bg-surface-container-low rounded-lg text-sm text-slate-700 hover:bg-primary-fixed/20 transition-all border border-transparent hover:border-primary/30">2. 資料を印刷する</button>
                  <button className="text-left px-5 py-4 bg-surface-container-low rounded-lg text-sm text-slate-700 hover:bg-primary-fixed/20 transition-all border border-transparent hover:border-primary/30">3. 部長に報告する</button>
                  <button className="text-left px-5 py-4 bg-surface-container-low rounded-lg text-sm text-slate-700 hover:bg-primary-fixed/20 transition-all border border-transparent hover:border-primary/30">4. メールを送信する</button>
                </div>
              </div>
            </section>

            {/* Loading / Infinite Scroll */}
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <p className="font-headline text-[11px] text-slate-400 font-bold uppercase tracking-widest">Compiling next set of challenges...</p>
            </div>

            {/* Finish Button */}
            <div className="pt-10 pb-20 border-t border-outline-variant/20 text-center">
              <button className="bg-emerald-700 text-white px-12 py-4 rounded-xl font-headline text-xl font-bold shadow-lg hover:bg-emerald-800 transition-all hover:scale-[1.02] active:scale-95">
                Finish & Submit Sprint
              </button>
              <p className="font-body text-xs text-on-surface-variant mt-4 font-medium tracking-wide">Finalize results and update global rank.</p>
            </div>
          </div>
        </div>

        {/* Side Stats Bar (Right) */}
        <aside className="hidden xl:flex flex-col w-80 h-[calc(100vh-64px)] sticky top-16 bg-slate-50 border-l border-outline-variant/10 p-6 gap-6 overflow-y-auto shrink-0">
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Real-Time Stats</h3>
              <div className="bg-white rounded-xl p-5 shadow-sm space-y-4 border border-outline-variant/10">
                <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                  <span className="font-body text-xs font-medium text-on-surface-variant">Points Gained</span>
                  <span className="font-headline font-bold text-on-surface">1,450</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                  <span className="font-body text-xs font-medium text-on-surface-variant">Avg. Response</span>
                  <span className="font-headline font-bold text-on-surface">12.4s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-xs font-medium text-on-surface-variant">Streak Tier</span>
                  <span className="font-headline font-bold text-primary">Platinum</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Frequency Insight</h3>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-outline-variant/10">
                <p className="font-body text-xs leading-relaxed text-on-surface-variant">
                  The word <span className="font-bold text-on-surface">不透明 (futomei)</span> has appeared in <span className="text-primary font-bold">18%</span> of all N1 exams since 2010. High-yield term.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-primary-fixed/30 relative overflow-hidden border border-primary/10">
              <div className="relative z-10">
                <h4 className="font-headline font-bold text-primary text-sm">Sprint Tip</h4>
                <p className="font-body text-[11px] text-on-primary-fixed-variant mt-2 leading-relaxed font-medium">Focus on the grammar particles in Section 3; they usually dictate the logical flow of N1 reading passages.</p>
              </div>
              <Sparkles className="absolute -right-4 -bottom-4 text-primary/10 w-24 h-24" />
            </div>
          </div>
        </aside>
      </div>

    </div>
  );
}
