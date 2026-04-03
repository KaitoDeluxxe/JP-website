import { Search, ArrowRight, PlayCircle, BookOpen, GraduationCap, Medal } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
            alt="Japanese Temple"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-fixed border border-primary/30 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
            The Architectural Scholar
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6 leading-tight tracking-tight">
            Learn Japanese.<br />For Free.
          </h1>
          <p className="text-lg md:text-xl text-surface-container-low mb-10 max-w-2xl mx-auto font-light">
            Master Hiragana, Katakana, Kanji, and Grammar with interactive lessons designed for self-study.
          </p>

          <div className="relative max-w-xl mx-auto mb-8 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-on-surface-variant group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md text-on-surface text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-primary border border-surface-variant/50 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-on-primary p-2 rounded-xl hover:bg-primary-container transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="text-surface-container-highest">Popular:</span>
            {["Hiragana Chart", "Te-Form Verbs", "JLPT N5 Vocab", "Particles"].map((tag) => (
              <Link key={tag} to="/hiragana" className="text-primary-fixed hover:text-white hover:underline transition-colors">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-headline font-bold text-on-background">Explore Courses</h2>
          <Link to="/courses" className="text-primary font-medium hover:underline flex items-center gap-1 text-sm">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Course Card 1 */}
          <Link to="/hiragana" className="group bg-surface-container-lowest rounded-3xl border border-surface-variant overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
            <div className="h-40 bg-secondary-container/20 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/40 to-transparent"></div>
              <span className="text-8xl font-black text-secondary/20 group-hover:scale-110 transition-transform duration-500">あ</span>
              <BookOpen className="absolute bottom-4 right-4 w-8 h-8 text-secondary" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-surface-variant text-on-surface-variant text-xs font-bold uppercase tracking-wider">Beginner</span>
                <span className="px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">Alphabet</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Master Hiragana</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-1">The foundational alphabet of Japanese. Learn to read and write all 46 basic characters.</p>
              <div className="flex items-center justify-between pt-4 border-t border-surface-variant mt-auto">
                <span className="text-sm font-medium text-on-surface-variant">46 Lessons</span>
                <span className="flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                  Start <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Course Card 2 */}
          <Link to="/katakana" className="group bg-surface-container-lowest rounded-3xl border border-surface-variant overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
            <div className="h-40 bg-tertiary-container/20 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/40 to-transparent"></div>
              <span className="text-8xl font-black text-tertiary/20 group-hover:scale-110 transition-transform duration-500">ア</span>
              <BookOpen className="absolute bottom-4 right-4 w-8 h-8 text-tertiary" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-surface-variant text-on-surface-variant text-xs font-bold uppercase tracking-wider">Beginner</span>
                <span className="px-2.5 py-1 rounded-md bg-tertiary-container text-on-tertiary-container text-xs font-bold uppercase tracking-wider">Alphabet</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Master Katakana</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-1">Learn the alphabet used for foreign loanwords, onomatopoeia, and emphasis.</p>
              <div className="flex items-center justify-between pt-4 border-t border-surface-variant mt-auto">
                <span className="text-sm font-medium text-on-surface-variant">46 Lessons</span>
                <span className="flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                  Start <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Course Card 3 */}
          <Link to="/vocabulary" className="group bg-surface-container-lowest rounded-3xl border border-surface-variant overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
            <div className="h-40 bg-primary-container/20 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/40 to-transparent"></div>
              <span className="text-8xl font-black text-primary/20 group-hover:scale-110 transition-transform duration-500">語</span>
              <GraduationCap className="absolute bottom-4 right-4 w-8 h-8 text-primary" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-surface-variant text-on-surface-variant text-xs font-bold uppercase tracking-wider">Intermediate</span>
                <span className="px-2.5 py-1 rounded-md bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-wider">Vocab</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">JLPT N4 Vocabulary</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-1">Expand your vocabulary with 1,500 essential words for everyday situations.</p>
              <div className="flex items-center justify-between pt-4 border-t border-surface-variant mt-auto">
                <span className="text-sm font-medium text-on-surface-variant">15 Topics</span>
                <span className="flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                  Start <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Course Card 4 */}
          <Link to="/past-papers" className="group bg-surface-container-lowest rounded-3xl border border-surface-variant overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
            <div className="h-40 bg-secondary-container/20 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/40 to-transparent"></div>
              <span className="text-8xl font-black text-secondary/20 group-hover:scale-110 transition-transform duration-500">試</span>
              <BookOpen className="absolute bottom-4 right-4 w-8 h-8 text-secondary" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-surface-variant text-on-surface-variant text-xs font-bold uppercase tracking-wider">All Levels</span>
                <span className="px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider">Practice</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Past JLPT Papers</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-1">Test your knowledge with real past exams. Practice at your own pace without timers.</p>
              <div className="flex items-center justify-between pt-4 border-t border-surface-variant mt-auto">
                <span className="text-sm font-medium text-on-surface-variant">Multiple Papers</span>
                <span className="flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                  Start <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Highlight */}
        <div className="bg-surface-container rounded-3xl p-8 md:p-12 border border-surface-variant flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <PlayCircle className="w-4 h-4" /> Interactive Learning
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">Practice makes perfect.</h2>
            <p className="text-on-surface-variant text-lg mb-8">
              Don't just read about Japanese. Use our interactive sandboxes to practice typing, listening, and forming sentences right in your browser.
            </p>
            <Link to="/hiragana" className="inline-flex items-center gap-2 px-6 py-3 bg-on-surface text-surface-container-lowest rounded-full font-medium hover:bg-primary hover:text-on-primary transition-colors">
              Try a Sandbox <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-variant shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4 border-b border-surface-variant pb-4">
                <span className="font-bold text-on-surface">Translate this sentence</span>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">Hard</span>
              </div>
              <p className="text-xl font-medium mb-6">私は毎日日本語を勉強します。</p>
              <div className="bg-surface-container rounded-xl p-4 border border-surface-variant text-on-surface-variant mb-4">
                I study Japanese every day.
              </div>
              <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary-container transition-colors">
                Check Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
