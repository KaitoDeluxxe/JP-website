import { Search, Filter, PlayCircle, BookOpen, Clock, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function N1() {
  const topics = [
    { title: "Advanced Literature", count: 150, mastered: 20, icon: "📚", color: "bg-blue-100 text-blue-800" },
    { title: "Academic Research", count: 130, mastered: 15, icon: "🎓", color: "bg-green-100 text-green-800" },
    { title: "Formal Business", count: 140, mastered: 30, icon: "👔", color: "bg-purple-100 text-purple-800" },
    { title: "Political Discourse", count: 120, mastered: 10, icon: "⚖️", color: "bg-orange-100 text-orange-800" },
    { title: "Philosophy & Ethics", count: 110, mastered: 5, icon: "🏛️", color: "bg-pink-100 text-pink-800" },
    { title: "Nuanced Expressions", count: 150, mastered: 20, icon: "✨", color: "bg-teal-100 text-teal-800" },
    { title: "Grammar", count: 120, mastered: 30, icon: "📚", color: "bg-indigo-100 text-indigo-800", path: "/grammar" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-xs font-bold uppercase tracking-wider">Vocabulary & Grammar</span>
            <span className="px-3 py-1 rounded-full bg-tertiary-container text-on-surface text-xs font-bold uppercase tracking-wider">JLPT N1</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4 tracking-tight">JLPT N1 Vocabulary & Grammar</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            Master the essential vocabulary and grammar required for the JLPT N1 exam. Grouped by topic for easier memorization and context building.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface-variant text-on-surface font-medium hover:bg-surface-container transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <Link to="/quiz" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-medium hover:bg-primary-container hover:shadow-md transition-all active:scale-95">
            <PlayCircle className="w-5 h-5" /> Quick Quiz
          </Link>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-surface-variant shadow-sm">
          <div className="flex items-center gap-3 text-on-surface-variant mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Total Words</span>
          </div>
          <div className="text-3xl font-headline font-bold text-on-surface">800</div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-surface-variant shadow-sm">
          <div className="flex items-center gap-3 text-on-surface-variant mb-2">
            <Target className="w-5 h-5" />
            <span className="text-sm font-medium">Mastered</span>
          </div>
          <div className="flex items-end gap-2">
            <div className="text-3xl font-headline font-bold text-primary">100</div>
            <div className="text-sm text-on-surface-variant mb-1">/ 800</div>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-surface-variant shadow-sm">
          <div className="flex items-center gap-3 text-on-surface-variant mb-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">Time Spent</span>
          </div>
          <div className="text-3xl font-headline font-bold text-on-surface">15<span className="text-lg text-on-surface-variant font-normal">h</span> 30<span className="text-lg text-on-surface-variant font-normal">m</span></div>
        </div>
        <div className="bg-primary-container/20 rounded-2xl p-5 border border-primary/20 shadow-sm">
          <div className="flex items-center gap-3 text-primary mb-2">
            <Target className="w-5 h-5" />
            <span className="text-sm font-bold">Daily Goal</span>
          </div>
          <div className="text-3xl font-headline font-bold text-on-surface mb-2">5<span className="text-lg text-on-surface-variant font-normal">/20</span></div>
          <div className="h-1.5 bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full w-[25%]"></div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, idx) => {
          const progress = Math.round((topic.mastered / topic.count) * 100);
          return (
            <Link key={idx} to={topic.path || "/vocabulary/list"} className="group bg-surface-container-lowest rounded-3xl border border-surface-variant p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${topic.color}`}>
                  {topic.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-on-surface">{progress}%</div>
                  <div className="text-xs text-on-surface-variant">Mastered</div>
                </div>
              </div>
              
              <h3 className="text-xl font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{topic.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-1">
                {topic.mastered} of {topic.count} {topic.title === "Grammar" ? "points" : "words"} learned
              </p>
              
              <div className="space-y-3 mt-auto">
                <div className="h-2 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-on-surface-variant group-hover:text-primary transition-colors">Continue learning</span>
                  <ArrowRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
