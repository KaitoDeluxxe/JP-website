import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronRight, Zap, Trophy, RotateCcw, Volume2, 
  CheckCircle2, XCircle, Flame, Target, BookOpen 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { vocabSets, VocabItem } from "../data/vocabData"; // Adjust path as needed

export default function KotobaGrind() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [showResult, setShowResult] = useState<boolean | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Get the data for the selected level
  const currentData = selectedLevel ? vocabSets[selectedLevel] : [];
  const currentWord = currentData[currentIndex];

  useEffect(() => {
    if (selectedLevel) generateOptions();
  }, [currentIndex, selectedLevel]);

  const generateOptions = () => {
    if (!selectedLevel) return;
    const correct = currentData[currentIndex].meaning;
    const others = currentData
      .filter((_, i) => i !== currentIndex)
      .map(v => v.meaning)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    setOptions([correct, ...others].sort(() => Math.random() - 0.5));
  };

  const handleAnswer = (answer: string) => {
    if (showResult !== null) return;
    if (answer === currentWord.meaning) {
      setScore(s => s + 10);
      setStreak(s => s + 1);
      if (streak + 1 > bestStreak) setBestStreak(streak + 1);
      setShowResult(true);
    } else {
      setStreak(0);
      setShowResult(false);
    }

    setTimeout(() => {
      setShowResult(null);
      if (currentIndex < currentData.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsFinished(true);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setIsFinished(false);
    setShowResult(null);
  };

  // --- VIEW 1: LEVEL SELECTION ---
  if (!selectedLevel) {
    return (
      <div className="max-w-4xl mx-auto p-8 min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-5xl font-headline font-bold text-on-surface mb-4">Choose Your Level</h1>
          <p className="text-on-surface-variant text-lg">Select a JLPT level to start your grind session.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          {Object.keys(vocabSets).map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className="group p-8 bg-surface-container border border-outline-variant/20 rounded-3xl hover:border-primary/50 hover:bg-primary/5 transition-all text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-on-surface">{level}</h3>
              <p className="text-sm text-on-surface-variant mt-2">{vocabSets[level].length} Words</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- VIEW 2: GAME FINISHED ---
  if (isFinished) {
    return (
      <div className="max-w-4xl mx-auto p-8 font-body min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-surface-container p-12 rounded-3xl border border-outline-variant/20 text-center shadow-xl w-full max-w-2xl">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Trophy className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-headline font-bold text-on-surface mb-2">Grind Complete!</h1>
          <p className="text-on-surface-variant mb-12 text-lg">You've mastered the {selectedLevel} set.</p>
          
          <div className="grid grid-cols-2 gap-6 mb-12 text-left">
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Final Score</p>
              <p className="text-3xl font-headline font-bold text-primary">{score}</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Best Streak</p>
              <p className="text-3xl font-headline font-bold text-secondary">{bestStreak}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={resetGame} className="flex-1 py-4 bg-primary text-on-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg">
              <RotateCcw className="w-5 h-5" /> Try Again
            </button>
            <button onClick={() => setSelectedLevel(null)} className="flex-1 py-4 bg-surface-container-highest text-on-surface rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-surface-variant transition-all">
              Change Level
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- VIEW 3: ACTIVE GAME ---
  return (
    <div className="max-w-5xl mx-auto p-8 font-body">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
            <button onClick={() => setSelectedLevel(null)} className="hover:text-primary transition-colors">Levels</button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-on-surface font-medium">{selectedLevel} Grind</span>
          </div>
          <h1 className="text-4xl font-headline font-bold text-on-surface">Kotoba Grind</h1>
        </div>

        <div className="flex gap-4">
          <div className="bg-surface-container px-6 py-3 rounded-2xl border border-outline-variant/20 flex flex-col items-center min-w-[100px]">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Score</span>
            <span className="text-xl font-headline font-bold text-primary">{score}</span>
          </div>
          <div className="bg-surface-container px-6 py-3 rounded-2xl border border-outline-variant/20 flex flex-col items-center min-w-[100px]">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Streak</span>
            <div className="flex items-center gap-1">
              <Flame className={`w-5 h-5 ${streak > 0 ? 'text-orange-500 fill-orange-500' : 'text-on-surface-variant'}`} />
              <span className="text-xl font-headline font-bold text-secondary">{streak}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-surface-container-lowest p-12 rounded-3xl border border-outline-variant/20 shadow-sm relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-surface-container">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / currentData.length) * 100}%` }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center"
              >
                <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
                  {currentWord.level} Vocabulary
                </span>
                <h2 className="text-8xl font-headline font-bold text-on-surface mb-4">{currentWord.kanji}</h2>
                <p className="text-2xl text-on-surface-variant font-medium mb-8">{currentWord.reading}</p>
                <button className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all">
                  <Volume2 className="w-6 h-6" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Result Overlay */}
            <AnimatePresence>
              {showResult !== null && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm z-10 ${showResult ? 'bg-green-500/10' : 'bg-red-500/10'}`}
                >
                  {showResult ? (
                    <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
                      <CheckCircle2 className="w-24 h-24 text-green-500 mb-4" />
                      <p className="text-2xl font-headline font-bold text-green-600">Correct!</p>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
                      <XCircle className="w-24 h-24 text-red-500 mb-4" />
                      <p className="text-2xl font-headline font-bold text-red-600">Incorrect</p>
                      <p className="text-on-surface-variant font-medium mt-2">The answer was: {currentWord.meaning}</p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                disabled={showResult !== null}
                className={`p-6 rounded-2xl border text-lg font-bold transition-all text-left flex items-center justify-between group
                  ${showResult === null 
                    ? 'bg-surface-container hover:bg-primary-container hover:border-primary/30 border-outline-variant/20 text-on-surface' 
                    : option === currentWord.meaning
                      ? 'bg-green-500/20 border-green-500 text-green-700'
                      : 'bg-surface-container border-outline-variant/20 opacity-50'
                  }`}
              >
                {option}
                <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {idx + 1}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/20">
            <h3 className="font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" /> How to Play
            </h3>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</div>
                Identify the meaning of the Kanji word displayed.
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</div>
                Select the correct translation from the options.
              </li>
            </ul>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/20 shadow-sm">
            <h3 className="font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-secondary" /> Session Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Progress</span>
                <span className="font-bold text-on-surface">{currentIndex + 1} / {currentData.length}</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500" 
                  style={{ width: `${((currentIndex + 1) / currentData.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}