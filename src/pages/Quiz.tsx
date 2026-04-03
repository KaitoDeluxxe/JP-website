import { X, CheckCircle2, HelpCircle, Lightbulb, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Quiz() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Quiz Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-headline font-bold text-on-surface">JLPT N2 Vocabulary Quiz</h1>
          <p className="text-sm text-on-surface-variant">Question 4 of 20</p>
        </div>
        <Link to="/vocabulary" className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors">
          <X className="w-6 h-6" />
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-surface-container rounded-full overflow-hidden mb-12">
        <div className="h-full bg-primary rounded-full w-[20%] transition-all duration-500"></div>
      </div>

      {/* Question Area */}
      <div className="bg-surface-container-lowest rounded-3xl border border-surface-variant p-8 md:p-12 shadow-sm mb-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-xs font-bold uppercase tracking-wider">Fill in the blank</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-medium text-on-surface mb-10 leading-relaxed">
          新しいプロジェクトの<span className="inline-block border-b-2 border-primary text-primary px-2 font-bold">＿＿＿＿</span>を立てる。
        </h2>

        {/* Options */}
        <div className="space-y-4">
          <label className="flex items-center p-4 rounded-2xl border-2 border-surface-variant hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all group">
            <input type="radio" name="quiz-option" className="w-5 h-5 text-primary border-surface-variant focus:ring-primary focus:ring-offset-surface-container-lowest" />
            <span className="ml-4 text-lg font-medium text-on-surface group-hover:text-primary transition-colors">けいえい (Management)</span>
          </label>
          
          <label className="flex items-center p-4 rounded-2xl border-2 border-primary bg-primary/5 cursor-pointer transition-all">
            <input type="radio" name="quiz-option" defaultChecked className="w-5 h-5 text-primary border-primary focus:ring-primary focus:ring-offset-surface-container-lowest" />
            <span className="ml-4 text-lg font-bold text-primary">けいかく (Plan)</span>
            <CheckCircle2 className="w-6 h-6 text-primary ml-auto" />
          </label>
          
          <label className="flex items-center p-4 rounded-2xl border-2 border-surface-variant hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all group">
            <input type="radio" name="quiz-option" className="w-5 h-5 text-primary border-surface-variant focus:ring-primary focus:ring-offset-surface-container-lowest" />
            <span className="ml-4 text-lg font-medium text-on-surface group-hover:text-primary transition-colors">けいけん (Experience)</span>
          </label>
          
          <label className="flex items-center p-4 rounded-2xl border-2 border-surface-variant hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all group">
            <input type="radio" name="quiz-option" className="w-5 h-5 text-primary border-surface-variant focus:ring-primary focus:ring-offset-surface-container-lowest" />
            <span className="ml-4 text-lg font-medium text-on-surface group-hover:text-primary transition-colors">けいざい (Economy)</span>
          </label>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-surface-variant">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full text-on-surface-variant font-medium hover:bg-surface-container transition-colors">
          <ChevronLeft className="w-5 h-5" /> Previous
        </button>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-full border border-surface-variant text-on-surface font-medium hover:bg-surface-container transition-colors">
            Skip
          </button>
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-on-primary font-bold hover:bg-primary-container hover:shadow-md transition-all active:scale-95">
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tips / Context */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-tertiary-container/30 rounded-3xl border border-tertiary/20 p-6">
          <h3 className="font-headline font-bold text-on-surface mb-2 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-tertiary" /> Context Clue
          </h3>
          <p className="text-sm text-on-surface-variant">
            The verb 立てる (tateru) is often used with 計画 (keikaku) to mean "to make a plan" or "to form a plan".
          </p>
        </div>
        <div className="bg-surface-container rounded-3xl border border-surface-variant p-6">
          <h3 className="font-headline font-bold text-on-surface mb-2 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-on-surface-variant" /> Kanji Breakdown
          </h3>
          <p className="text-sm text-on-surface-variant">
            <span className="font-bold text-on-surface">計 (kei)</span>: plot, plan, scheme<br />
            <span className="font-bold text-on-surface">画 (kaku)</span>: brush-stroke, picture
          </p>
        </div>
      </div>
    </div>
  );
}
