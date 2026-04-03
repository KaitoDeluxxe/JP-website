import { Search, Filter, PlayCircle, BookOpen, Clock, Target, ArrowRight, ChevronLeft, ChevronRight, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

export default function VocabList() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/vocabulary" className="hover:text-primary transition-colors">Vocabulary</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-on-surface font-medium">JLPT N2 Vocabulary</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4 tracking-tight">JLPT N2 Vocabulary</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            Master the essential vocabulary required for the JLPT N2 exam. Grouped by topic for easier memorization and context building.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="flex items-center bg-surface-container rounded-full p-1 border border-surface-variant">
          <button className="px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface font-bold text-sm shadow-sm">All Terms</button>
          <button className="px-4 py-2 rounded-full text-on-surface-variant hover:text-on-surface font-medium text-sm transition-colors">Incomplete</button>
          <button className="px-4 py-2 rounded-full text-on-surface-variant hover:text-on-surface font-medium text-sm transition-colors">Mastered</button>
        </div>
        <div className="flex-1 min-w-[200px] relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search vocabulary..." 
            className="w-full pl-9 pr-4 py-2.5 rounded-full bg-surface-container-lowest border border-surface-variant text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-surface-variant bg-surface-container-lowest text-on-surface font-medium text-sm hover:bg-surface-container transition-colors">
          <Filter className="w-4 h-4" /> Filter
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-bold text-sm hover:bg-primary-container hover:shadow-md transition-all active:scale-95 ml-auto">
          <PlayCircle className="w-5 h-5" /> Quick Quiz
        </button>
      </div>

      {/* Vocabulary Tables */}
      <div className="space-y-12">
        {/* Category 1 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center text-xl">💼</span>
              Business & Economy
            </h2>
            <span className="text-sm font-medium text-on-surface-variant">120 terms</span>
          </div>
          
          <div className="bg-surface-container-lowest rounded-3xl border border-surface-variant overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container border-b border-surface-variant">
                    <th className="p-4 font-bold text-on-surface-variant text-xs uppercase tracking-wider w-12 text-center">Status</th>
                    <th className="p-4 font-bold text-on-surface-variant text-xs uppercase tracking-wider">Kanji</th>
                    <th className="p-4 font-bold text-on-surface-variant text-xs uppercase tracking-wider">Reading</th>
                    <th className="p-4 font-bold text-on-surface-variant text-xs uppercase tracking-wider">Meaning</th>
                    <th className="p-4 font-bold text-on-surface-variant text-xs uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-variant">
                  <tr className="hover:bg-surface-container/50 transition-colors group">
                    <td className="p-4 text-center">
                      <div className="w-4 h-4 rounded-full border-2 border-primary bg-primary mx-auto flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                    </td>
                    <td className="p-4 font-bold text-xl text-on-surface">経営</td>
                    <td className="p-4 text-on-surface-variant">けいえい (keiei)</td>
                    <td className="p-4 text-on-surface-variant">management, administration</td>
                    <td className="p-4 text-right">
                      <button className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <PlayCircle className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container/50 transition-colors group">
                    <td className="p-4 text-center">
                      <div className="w-4 h-4 rounded-full border-2 border-surface-variant mx-auto"></div>
                    </td>
                    <td className="p-4 font-bold text-xl text-on-surface">利益</td>
                    <td className="p-4 text-on-surface-variant">りえき (rieki)</td>
                    <td className="p-4 text-on-surface-variant">profit, gains</td>
                    <td className="p-4 text-right">
                      <button className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <PlayCircle className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container/50 transition-colors group">
                    <td className="p-4 text-center">
                      <div className="w-4 h-4 rounded-full border-2 border-surface-variant mx-auto"></div>
                    </td>
                    <td className="p-4 font-bold text-xl text-on-surface">投資</td>
                    <td className="p-4 text-on-surface-variant">とうし (toushi)</td>
                    <td className="p-4 text-on-surface-variant">investment</td>
                    <td className="p-4 text-right">
                      <button className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <PlayCircle className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-surface-variant bg-surface-container-lowest text-center">
              <button className="text-sm font-bold text-primary hover:underline">View all 120 terms</button>
            </div>
          </div>
        </section>

        {/* Category 2 */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-green-100 text-green-800 flex items-center justify-center text-xl">🔬</span>
              Environment & Nature
            </h2>
            <span className="text-sm font-medium text-on-surface-variant">85 terms</span>
          </div>
          
          <div className="bg-surface-container-lowest rounded-3xl border border-surface-variant overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container border-b border-surface-variant">
                    <th className="p-4 font-bold text-on-surface-variant text-xs uppercase tracking-wider w-12 text-center">Status</th>
                    <th className="p-4 font-bold text-on-surface-variant text-xs uppercase tracking-wider">Kanji</th>
                    <th className="p-4 font-bold text-on-surface-variant text-xs uppercase tracking-wider">Reading</th>
                    <th className="p-4 font-bold text-on-surface-variant text-xs uppercase tracking-wider">Meaning</th>
                    <th className="p-4 font-bold text-on-surface-variant text-xs uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-variant">
                  <tr className="hover:bg-surface-container/50 transition-colors group">
                    <td className="p-4 text-center">
                      <div className="w-4 h-4 rounded-full border-2 border-surface-variant mx-auto"></div>
                    </td>
                    <td className="p-4 font-bold text-xl text-on-surface">環境</td>
                    <td className="p-4 text-on-surface-variant">かんきょう (kankyou)</td>
                    <td className="p-4 text-on-surface-variant">environment, circumstance</td>
                    <td className="p-4 text-right">
                      <button className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <PlayCircle className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container/50 transition-colors group">
                    <td className="p-4 text-center">
                      <div className="w-4 h-4 rounded-full border-2 border-surface-variant mx-auto"></div>
                    </td>
                    <td className="p-4 font-bold text-xl text-on-surface">汚染</td>
                    <td className="p-4 text-on-surface-variant">おせん (osen)</td>
                    <td className="p-4 text-on-surface-variant">pollution, contamination</td>
                    <td className="p-4 text-right">
                      <button className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <PlayCircle className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-surface-variant bg-surface-container-lowest text-center">
              <button className="text-sm font-bold text-primary hover:underline">View all 85 terms</button>
            </div>
          </div>
        </section>
      </div>

      {/* Interactive Sandbox */}
      <section className="mt-16">
        <div className="bg-surface-container rounded-3xl border border-surface-variant p-8 shadow-inner flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 mb-4">Sandbox</div>
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">Practice typing Kanji</h2>
            <p className="text-on-surface-variant mb-6">Test your memory by typing the correct Kanji for the given reading and meaning.</p>
            <button className="px-6 py-3 bg-on-surface text-surface-container-lowest rounded-xl font-bold hover:bg-primary hover:text-on-primary transition-colors">
              Start Practice Session
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-surface-container-lowest rounded-2xl p-8 border border-surface-variant text-center shadow-sm transform rotate-1">
              <div className="text-sm font-bold text-on-surface-variant mb-2">けいえい (keiei)</div>
              <div className="text-lg text-on-surface mb-8">management, administration</div>
              <div className="relative max-w-xs mx-auto">
                <input 
                  type="text" 
                  placeholder="Type Kanji here..." 
                  className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface border border-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-center text-xl transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-on-primary p-2 rounded-lg hover:bg-primary-container transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
