import { PlayCircle, ArrowRight, ChevronLeft, ChevronRight, PenTool, Timer, CornerDownLeft, CheckCircle, BookOpen, Zap, RefreshCw, SkipForward, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function KanaTyper() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col w-full">
      <div className="flex flex-1 w-full">
        {/* Main Content Canvas */}
        <div className="flex-grow p-6 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Game Header & Stats Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-center shadow-sm border border-outline-variant/10">
                <h1 className="text-4xl md:text-5xl font-headline font-black text-on-surface tracking-tight mb-1">Kana Typer</h1>
                <p className="text-on-surface-variant font-body">Sprint through the syllabary. Precision is key.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm border border-outline-variant/10">
                <span className="text-xs font-body uppercase tracking-widest text-on-surface-variant mb-1 font-bold">WPM</span>
                <span className="text-3xl font-headline font-bold text-secondary">74</span>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm border border-outline-variant/10">
                <span className="text-xs font-body uppercase tracking-widest text-on-surface-variant mb-1 font-bold">Accuracy</span>
                <span className="text-3xl font-headline font-bold text-primary">98.2%</span>
              </div>
            </div>

            {/* Stopwatch & Session Info */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-inverse-surface text-on-primary px-4 py-2 rounded-lg font-mono text-xl shadow-sm">
                  <Timer className="w-4 h-4" />
                  <span>00:42.15</span>
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-[10px] font-body uppercase tracking-tighter text-on-surface-variant font-bold">Session Progress</span>
                  <div className="w-32 h-1.5 bg-surface-container-highest rounded-full mt-1 overflow-hidden">
                    <div className="w-2/3 h-full bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-bold font-headline tracking-wide">Hiragana Mode</span>
                <span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-xs font-bold font-headline tracking-wide">N5 Vocab</span>
              </div>
            </div>

            {/* Typing Canvas (The Focused Area) */}
            <div className="relative bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden min-h-[400px] flex flex-col items-center justify-center p-12 text-center group border border-outline-variant/10">
              {/* Background Decoration */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center overflow-hidden">
                <span className="text-[20rem] font-headline font-black">あ</span>
              </div>

              {/* Target Word */}
              <div className="relative z-10 space-y-8 w-full max-w-xl">
                <div className="space-y-2">
                  <p className="text-sm font-body text-on-surface-variant/60 tracking-[0.2em] uppercase font-bold">Current Prompt</p>
                  <h2 className="text-6xl md:text-8xl font-headline font-black text-on-surface tracking-tighter">tabemono</h2>
                  <p className="text-xl font-body text-on-surface-variant italic">"Food"</p>
                </div>

                {/* Input Field */}
                <div className="relative w-full">
                  <input
                    autoFocus
                    className="w-full bg-surface-container-low border-none focus:ring-4 focus:ring-primary/10 rounded-xl px-8 py-6 text-4xl font-headline font-bold text-center text-primary placeholder:text-surface-variant transition-all outline-none"
                    placeholder="Type here..."
                    type="text"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                    <div className="bg-surface-container-highest p-2 rounded text-on-surface-variant">
                      <CornerDownLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Feedback Row */}
                <div className="flex justify-center gap-8 pt-4">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <CheckCircle className="text-emerald-600 w-5 h-5" />
                    <span className="text-sm font-medium font-body">た (ta)</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <CheckCircle className="text-emerald-600 w-5 h-5" />
                    <span className="text-sm font-medium font-body">べ (be)</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-sm font-bold font-body">も (mo) ...</span>
                  </div>
                  <div className="flex items-center gap-2 text-surface-variant">
                    <span className="text-sm font-medium font-body">の (no)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instruction Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-headline font-bold text-on-surface flex items-center gap-2">
                  <BookOpen className="text-secondary w-6 h-6" />
                  Study Notes
                </h3>
                <div className="bg-surface-container p-6 rounded-xl space-y-3 border border-outline-variant/10">
                  <p className="text-sm leading-relaxed font-body text-on-surface-variant">
                    <strong className="text-secondary font-bold">Tabemono (食べ物)</strong> refers to food in general. It is composed of the kanji for 'eat' (食) and 'thing' (物).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] bg-white px-2 py-1 rounded border border-outline-variant/30 font-bold uppercase tracking-wider text-on-surface-variant">Grammar: Noun</span>
                    <span className="text-[10px] bg-white px-2 py-1 rounded border border-outline-variant/30 font-bold uppercase tracking-wider text-on-surface-variant">Commonality: High</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-headline font-bold text-on-surface flex items-center gap-2">
                  <Zap className="text-tertiary w-6 h-6" />
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center justify-center p-4 bg-surface-container-low hover:bg-surface-container-highest transition-colors rounded-xl group border border-outline-variant/10">
                    <RefreshCw className="mb-2 group-hover:scale-110 transition-transform text-on-surface-variant w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-tighter font-headline text-on-surface">Restart Session</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 bg-surface-container-low hover:bg-surface-container-highest transition-colors rounded-xl group border border-outline-variant/10">
                    <SkipForward className="mb-2 group-hover:scale-110 transition-transform text-on-surface-variant w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-tighter font-headline text-on-surface">Skip Word</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Feedback (Only for Home/Dashboard context, but shown here as a game-specific component) */}
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 pointer-events-none z-50">
        <div className="bg-inverse-surface text-on-primary p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce pointer-events-auto">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold font-headline">New Achievement!</p>
            <p className="text-[10px] opacity-70 font-body">"Speed Demon" - 70+ WPM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
