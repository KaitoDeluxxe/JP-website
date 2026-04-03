import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Undo2, RotateCcw, Info, Activity, Edit3, 
  Eye, Star, Zap, Play, ChevronLeft, ChevronRight, Layers 
} from "lucide-react";

import { kanjiByLevel, KanjiItem } from "../data/kanjiData"; 

// --- NEW: Types for our drawing engine ---
type Point = { x: number; y: number };
type Line = Point[];

export default function KanjiTrace() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // --- NEW: Drawing Engine State ---
  const [lines, setLines] = useState<Line[]>([]);
  const [currentLine, setCurrentLine] = useState<Line>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Clear canvas when changing Kanji
  useEffect(() => {
    setLines([]);
    setCurrentLine([]);
  }, [currentIndex, selectedLevel]);

  // --- NEW: Drawing Handlers ---
  const getCoordinates = (e: React.PointerEvent<HTMLDivElement>): Point | null => {
    if (!canvasRef.current) return null;
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e: React.PointerEvent<HTMLDivElement>) => {
    const pos = getCoordinates(e);
    if (!pos) return;
    setIsDrawing(true);
    setCurrentLine([pos]);
  };

  const draw = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDrawing) return;
    const pos = getCoordinates(e);
    if (!pos) return;
    setCurrentLine((prev) => [...prev, pos]);
  };

  const stopDrawing = () => {
    if (isDrawing) {
      if (currentLine.length > 0) {
        setLines((prev) => [...prev, currentLine]);
      }
      setCurrentLine([]);
      setIsDrawing(false);
    }
  };

  const handleUndo = () => {
    setLines((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setLines([]);
    setCurrentLine([]);
  };

  // Helper to convert an array of points into an SVG path string
  const createPathData = (points: Point[]) => {
    if (points.length === 0) return "";
    return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  };

  // --- VIEW 1: JLPT LEVEL SELECTION ---
  if (!selectedLevel) {
    return (
      <div className="max-w-5xl mx-auto p-8 font-body">
        <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-on-surface font-medium">Kanji Tracing</span>
        </div>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4">Kanji Tracing</h1>
          <p className="text-lg text-on-surface-variant">Select a JLPT level to start your tracing practice.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(kanjiByLevel).map((level) => (
            <button
              key={level}
              onClick={() => {
                setSelectedLevel(level);
                setCurrentIndex(0);
              }}
              className="bg-surface-container hover:bg-primary-container p-8 rounded-3xl border border-outline-variant/20 transition-all hover:scale-105 flex flex-col items-center justify-center gap-4 group shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Layers className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-3xl font-headline font-bold text-on-surface">{level}</h2>
              <span className="text-sm font-medium text-on-surface-variant">
                {kanjiByLevel[level].length} Kanji
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- VIEW 2: TRACING INTERFACE ---
  const currentKanjiList = kanjiByLevel[selectedLevel];
  const kanji: KanjiItem = currentKanjiList[currentIndex];

  const handleNext = () => {
    if (currentIndex < currentKanjiList.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="flex flex-col md:flex-row p-8 gap-8 font-body relative max-w-7xl mx-auto">
      
      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-8 right-8 flex justify-between items-center py-4">
        <button 
          onClick={() => setSelectedLevel(null)}
          className="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Levels
        </button>
        <span className="font-headline font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full text-sm">
          {selectedLevel} Practice ({currentIndex + 1} / {currentKanjiList.length})
        </span>
      </div>

      {/* Center Stage: The Drawing Canvas */}
      <div className="flex-grow flex flex-col items-center justify-center mt-12 md:mt-8">
        
        {/* WE UPDATED THIS DIV: Added ref, pointer events, and touchAction none */}
        <div 
          ref={canvasRef}
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
          style={{ touchAction: "none" }} // Prevents mobile scrolling while drawing
          className="relative w-full max-w-2xl aspect-square bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex items-center justify-center group cursor-crosshair border border-outline-variant/20"
        >
          {/* Grid Overlay Background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#006948 1px, transparent 1px), linear-gradient(90deg, #006948 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-full h-px bg-primary"></div>
            <div className="h-full w-px bg-primary absolute"></div>
          </div>

          {/* DYNAMIC KANJI / GIF LAYER */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
            <img 
               src={`/gifs/${kanji.gifFile}`} 
               alt={`${kanji.character} stroke order`}
               className="w-3/4 h-3/4 object-contain opacity-30" 
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                 if (fallback) fallback.style.display = 'block';
               }}
            />
            <span className="hidden text-[24rem] font-bold leading-none font-headline text-primary/10">
              {kanji.character}
            </span>
          </div>

          {/* --- NEW: THE ACTUAL DRAWING LAYER --- */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Draw previously saved lines */}
            {lines.map((line, i) => (
              <path
                key={i}
                d={createPathData(line)}
                fill="none"
                stroke="#191c1e" // Ink color
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                className="opacity-90"
              />
            ))}
            {/* Draw the line currently being drawn */}
            {currentLine.length > 0 && (
              <path
                d={createPathData(currentLine)}
                fill="none"
                stroke="#191c1e"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                className="opacity-90"
              />
            )}
          </svg>

          {/* Floating Canvas Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={handleUndo}
              disabled={lines.length === 0}
              className="bg-surface-bright/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-headline font-bold text-on-surface border border-outline-variant/20 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Undo2 className="w-5 h-5" /> Undo
            </button>
            <button 
              onClick={handleReset}
              disabled={lines.length === 0 && currentLine.length === 0}
              className="bg-surface-bright/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-headline font-bold text-on-surface border border-outline-variant/20 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RotateCcw className="w-5 h-5" /> Reset
            </button>
          </div>
        </div>

        {/* Next/Prev Navigation */}
        <div className="flex justify-between w-full max-w-2xl mt-6">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-6 py-3 bg-surface-container rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 hover:bg-surface-variant transition-colors text-on-surface"
          >
            <ChevronLeft className="w-5 h-5" /> Previous
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex === currentKanjiList.length - 1}
            className="px-6 py-3 bg-primary text-white rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 hover:bg-primary/90 transition-colors shadow-md"
          >
            Next <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right Side Panel: Stats & Metadata */}
      <aside className="w-full md:w-80 flex flex-col gap-6 mt-12 md:mt-8">
        
        {/* DYNAMIC Kanji Identity Card */}
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-headline text-5xl font-extrabold text-on-surface mb-2">{kanji.character}</h2>
              <p className="text-primary font-bold tracking-tight text-sm uppercase">{kanji.meaning}</p>
              <p className="text-on-surface-variant text-xs mt-1 font-medium">{kanji.romaji}</p>
            </div>
            <span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter font-headline">
              {selectedLevel}
            </span>
          </div>
          <div className="space-y-3 pt-4 border-t border-outline-variant/20">
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant font-medium">Strokes Required</span>
              <span className="text-on-surface font-bold">{kanji.strokes}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant font-medium">Radical</span>
              <span className="text-on-surface font-bold">{kanji.radical}</span>
            </div>
          </div>
        </div>

        {/* Live Performance Metrics */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
          <h3 className="font-headline text-sm font-bold text-outline mb-6 flex items-center gap-2 uppercase tracking-wider">
            <Activity className="w-5 h-5" />
            Live Tracker
          </h3>
          <div className="space-y-8">
            {/* Current Stroke Counter connected to real drawing data! */}
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest font-headline mb-1">Your Strokes</span>
                <span className="text-2xl font-headline font-bold text-on-surface">
                  {lines.length} <span className="text-outline font-light text-lg">/ {kanji.strokes}</span>
                </span>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center bg-white shadow-sm">
                <Edit3 className="text-primary w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

      </aside>
    </div>
  );
}