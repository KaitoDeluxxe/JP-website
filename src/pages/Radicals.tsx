import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, X, BookOpen, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { radicalsData } from "../data/radicals";
import { radicalDetails, RadicalDetail } from "../data/radicalDetails";

type RadicalItem = {
  radical: string;
  meaning: string;
  romaji: string;
};

export default function Radicals() {
  const [selectedRadical, setSelectedRadical] = useState<RadicalItem | null>(null);

  useEffect(() => {
    if (selectedRadical) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedRadical]);

  const getDetail = (radical: string): RadicalDetail => {
    // Map traditional Kangxi grid characters to our modern dictionary keys
    const variants: Record<string, string> = {
      '龜': '亀',
      '龍': '竜',
      '齒': '歯',
      '齊': '斉',
      '麥': '麦',
      '黃': '黄',
      '黑': '黒'
    };

    // Use the variant if it exists, otherwise use the radical passed in
    const lookupKey = variants[radical] || radical;

    if (radicalDetails[lookupKey]) {
      return radicalDetails[lookupKey];
    }
    
    return {
      explanation: `The '${radical}' radical is commonly known as "${radical}". Detailed explanation and examples are currently being expanded.`,
      examples: [],
      sentences: []
    };
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 relative">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-on-surface font-medium">Kanji Radicals</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4 tracking-tight">Kanji Radicals (部首)</h1>
        <p className="text-lg text-on-surface-variant max-w-3xl">
          Radicals are the building blocks of Kanji. Learning them helps you understand the meaning of complex characters and makes them much easier to memorize.
        </p>
      </div>

      {/* Grid */}
      <div className="space-y-12">
        {radicalsData.map((group) => (
          <div key={group.strokes} className="bg-surface-container-lowest rounded-3xl border border-surface-variant p-6 md:p-10 shadow-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                {group.strokes}
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Strokes</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {group.radicals.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  onClick={() => setSelectedRadical(item)}
                  className="group flex flex-col items-center justify-center p-4 bg-surface-container hover:bg-primary-container rounded-2xl border border-surface-variant hover:border-primary/30 transition-colors duration-200 hover:shadow-md cursor-pointer"
                >
                  <span className="text-4xl md:text-5xl font-black text-on-surface group-hover:text-primary-fixed transition-colors font-sans mb-3">
                    {item.radical}
                  </span>
                  <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary-fixed/80 uppercase tracking-widest text-center mb-1">
                    {item.romaji}
                  </span>
                  <span className="text-sm font-medium text-on-surface text-center">
                    {item.meaning}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedRadical && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRadical(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-x-4 bottom-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 bg-surface-container-lowest rounded-3xl shadow-2xl border border-surface-variant w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-surface-variant bg-surface-container-lowest">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-4xl font-sans">
                    {selectedRadical.radical}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-on-surface capitalize">{selectedRadical.meaning}</h3>
                    <p className="text-on-surface-variant font-medium uppercase tracking-widest text-sm">{selectedRadical.romaji}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRadical(null)}
                  className="p-2 rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                {(() => {
                  const details = getDetail(selectedRadical.radical);
                  return (
                    <div className="space-y-8">
                      {/* Explanation */}
                      <div>
                        <p className="text-on-surface leading-relaxed text-lg">
                          {details.explanation}
                        </p>
                      </div>

                      {/* Examples */}
                      {details.examples.length > 0 && (
                        <div>
                          <h4 className="flex items-center gap-2 text-lg font-bold text-on-surface mb-4">
                            <BookOpen className="w-5 h-5 text-primary" />
                            Example Words
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {details.examples.map((ex, i) => (
                              <div key={i} className="bg-surface-container p-4 rounded-2xl border border-surface-variant">
                                <div className="text-2xl font-bold text-on-surface mb-1">{ex.word}</div>
                                <div className="text-sm text-primary font-medium mb-1">{ex.reading}</div>
                                <div className="text-sm text-on-surface-variant">{ex.meaning}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Sentences */}
                      {details.sentences.length > 0 && (
                        <div>
                          <h4 className="flex items-center gap-2 text-lg font-bold text-on-surface mb-4">
                            <MessageCircle className="w-5 h-5 text-primary" />
                            Example Sentences
                          </h4>
                          <div className="space-y-3">
                            {details.sentences.map((sent, i) => (
                              <div key={i} className="bg-surface-container p-4 rounded-2xl border border-surface-variant">
                                <div className="text-lg font-medium text-on-surface mb-2">{sent.jp}</div>
                                <div className="text-sm text-on-surface-variant">{sent.en}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Fallback for missing details */}
                      {details.examples.length === 0 && details.sentences.length === 0 && (
                        <div className="bg-secondary-container/50 text-on-secondary-container p-4 rounded-2xl text-sm text-center">
                          More detailed examples and sentences for this radical will be added soon!
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}