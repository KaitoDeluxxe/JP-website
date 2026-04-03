import { Link } from "react-router-dom";
import { Timer, TrendingUp, GraduationCap, Heart, Flag, Volume2, ArrowRight, Medal } from "lucide-react";

export default function FlashcardSprint() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body w-full">
      <div className="flex flex-1 w-full">
        {/* Main Content Area */}
        <div className="flex-1 p-4 md:p-8 lg:p-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Game Header Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Timer className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Time Left</p>
                    <p className="text-xl font-headline font-extrabold text-on-surface">0:42</p>
                  </div>
                </div>
                <div className="w-16 h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[70%]"></div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10 flex items-center space-x-3">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Current Streak</p>
                  <p className="text-xl font-headline font-extrabold text-on-surface">14 Hits</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10 flex items-center space-x-3">
                <div className="p-2 bg-tertiary/10 rounded-lg text-tertiary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">JLPT Level</p>
                  <p className="text-xl font-headline font-extrabold text-on-surface">N3 Advanced</p>
                </div>
              </div>
            </div>

            {/* Main Game Canvas */}
            <div className="relative group">
              {/* Flashcard Surface */}
              <div className="bg-surface-container-lowest rounded-2xl shadow-xl p-12 md:p-24 flex flex-col items-center justify-center text-center border border-outline-variant/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-6 right-8 flex items-center space-x-1 text-slate-300">
                  <Heart className="w-8 h-8 text-red-500 fill-current" />
                  <Heart className="w-8 h-8 text-red-500 fill-current" />
                  <Heart className="w-8 h-8" />
                </div>
                <div className="space-y-6">
                  <span className="text-9xl md:text-[12rem] font-bold text-on-surface font-headline leading-none">
                    響
                  </span>
                  <div className="pt-4">
                    <span className="bg-surface-container px-4 py-1.5 rounded-full text-sm font-bold text-on-surface-variant font-headline tracking-wider">
                      KANJI #482
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Answer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="group relative bg-surface-container-lowest hover:bg-primary-fixed transition-all duration-200 p-6 rounded-xl shadow-sm text-left active:scale-95 border border-outline-variant/20 hover:border-primary/30">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container group-hover:bg-on-primary-fixed group-hover:text-primary-fixed transition-colors font-headline font-bold">A</div>
                  <span className="text-lg font-headline font-semibold text-on-surface">Echo / Resound</span>
                </div>
              </button>
              <button className="group relative bg-surface-container-lowest hover:bg-primary-fixed transition-all duration-200 p-6 rounded-xl shadow-sm text-left active:scale-95 border border-outline-variant/20 hover:border-primary/30">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container group-hover:bg-on-primary-fixed group-hover:text-primary-fixed transition-colors font-headline font-bold">B</div>
                  <span className="text-lg font-headline font-semibold text-on-surface">Shadow / Image</span>
                </div>
              </button>
              <button className="group relative bg-surface-container-lowest hover:bg-primary-fixed transition-all duration-200 p-6 rounded-xl shadow-sm text-left active:scale-95 border border-outline-variant/20 hover:border-primary/30">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container group-hover:bg-on-primary-fixed group-hover:text-primary-fixed transition-colors font-headline font-bold">C</div>
                  <span className="text-lg font-headline font-semibold text-on-surface">Mirror / Reflection</span>
                </div>
              </button>
              <button className="group relative bg-surface-container-lowest hover:bg-primary-fixed transition-all duration-200 p-6 rounded-xl shadow-sm text-left active:scale-95 border border-outline-variant/20 hover:border-primary/30">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container group-hover:bg-on-primary-fixed group-hover:text-primary-fixed transition-colors font-headline font-bold">D</div>
                  <span className="text-lg font-headline font-semibold text-on-surface">Shallow / Surface</span>
                </div>
              </button>
            </div>

            {/* Feedback & Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-outline-variant/20">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <button className="flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors font-medium text-sm">
                  <Flag className="w-5 h-5" />
                  <span>Report Error</span>
                </button>
                <button className="flex items-center space-x-2 text-on-surface-variant hover:text-secondary transition-colors font-medium text-sm">
                  <Volume2 className="w-5 h-5" />
                  <span>Audio Cue</span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-6 py-2 rounded-lg font-bold text-secondary font-headline text-sm hover:bg-secondary/5 transition-colors">
                  Skip Card
                </button>
                <button className="px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-lg shadow-lg active:scale-95 transition-all font-headline text-sm flex items-center space-x-2">
                  <span>Submit Answer</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress Bento Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
              <div className="md:col-span-2 bg-surface-container-low rounded-2xl p-6 relative overflow-hidden group border border-outline-variant/10">
                <div className="relative z-10">
                  <h4 className="font-headline font-bold text-emerald-800 text-lg">Next Mastery Milestone</h4>
                  <p className="text-sm text-on-surface-variant mt-1">4 more correct answers to reach 'Expert' status for this set.</p>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex-1 h-3 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[80%]"></div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 font-headline">80%</span>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Medal className="w-32 h-32" />
                </div>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-6 flex flex-col justify-between border border-outline-variant/10">
                <h4 className="font-headline font-bold text-on-surface-variant text-sm uppercase tracking-tighter">Total Review</h4>
                <div className="flex items-end space-x-1">
                  <span className="text-3xl font-headline font-black text-on-surface">1,240</span>
                  <span className="text-xs text-emerald-600 font-bold mb-1">+24 today</span>
                </div>
              </div>
              <div className="bg-emerald-700 rounded-2xl p-6 flex flex-col justify-between text-white shadow-sm">
                <h4 className="font-headline font-bold text-emerald-200 text-sm uppercase tracking-tighter">Accuracy</h4>
                <div className="flex items-end space-x-1">
                  <span className="text-3xl font-headline font-black">94.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
