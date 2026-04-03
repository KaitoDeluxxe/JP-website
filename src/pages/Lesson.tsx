import { useRef, useState, useEffect } from "react";
import { PlayCircle, ArrowRight, ChevronLeft, ChevronRight, PenTool, Medal, Eraser } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getKanaDetail, getFallbackKanaDetail } from "../data/kana";

export default function Lesson() {
  const { type, romaji } = useParams<{ type: 'hiragana' | 'katakana', romaji: string }>();
  
  // Canvas State & Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  // Image Error State for the stroke order GIF
  const [imgError, setImgError] = useState(false);

  // Setup canvas drawing context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#10b981"; // Matches your emerald primary color
      }
    }
  }, []);

  if (!type || !romaji || (type !== 'hiragana' && type !== 'katakana')) {
    return <Navigate to="/hiragana" />;
  }

  const id = `${type}-${romaji}`;
  const kanaDetail = getKanaDetail(id) || getFallbackKanaDetail(romaji, type);

  // Drawing Handlers
  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    
    const rect = canvas.getBoundingClientRect();
    if (e.nativeEvent instanceof MouseEvent) {
      return {
        x: e.nativeEvent.clientX - rect.left,
        y: e.nativeEvent.clientY - rect.top
      };
    } else if (e.nativeEvent instanceof TouchEvent) {
      return {
        x: e.nativeEvent.touches[0].clientX - rect.left,
        y: e.nativeEvent.touches[0].clientY - rect.top
      };
    }
    return { x: 0, y: 0 };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    
    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    // Prevent scrolling while drawing on mobile
    if (e.nativeEvent instanceof TouchEvent) {
      e.preventDefault(); 
    }

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to={`/${type}`} className="hover:text-primary transition-colors capitalize">{type}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-on-surface font-medium capitalize">{romaji}</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-surface text-xs font-bold uppercase tracking-wider">Lesson</span>
          <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-xs font-bold uppercase tracking-wider">Beginner</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4 tracking-tight capitalize">{type} {kanaDetail.kana} ({kanaDetail.romaji})</h1>
        <p className="text-lg text-on-surface-variant max-w-3xl">
          The character {kanaDetail.kana} represents the sound "{kanaDetail.romaji}". It is one of the fundamental characters in Japanese {type}.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Character Display */}
          <section className="bg-surface-container-lowest rounded-3xl border border-surface-variant overflow-hidden shadow-sm">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center">
              <div className="text-center">
                <div className="text-[12rem] leading-none font-black text-on-surface mb-4 font-sans">{kanaDetail.kana}</div>
                <div className="text-2xl font-bold text-on-surface-variant tracking-widest uppercase">{kanaDetail.romaji}</div>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <button className="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-on-primary rounded-2xl font-bold hover:bg-primary-container hover:shadow-md transition-all active:scale-95 w-full">
                  <PlayCircle className="w-6 h-6" /> Listen to Pronunciation
                </button>
                <div className="bg-surface-container rounded-2xl p-4 border border-surface-variant text-sm text-on-surface-variant">
                  <p className="font-bold text-on-surface mb-1">Mnemonic tip:</p>
                  <p>{kanaDetail.mnemonic}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Stroke Order */}
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6 flex items-center gap-2">
              <PenTool className="w-6 h-6 text-primary" /> Stroke Order
            </h2>
            <div className="bg-surface-container-lowest rounded-3xl border border-surface-variant p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  {/* Image Fallback Logic is here */}
                  {!imgError && kanaDetail.strokeOrderGif ? (
                    <img 
                      src={kanaDetail.strokeOrderGif} 
                      alt={`Stroke order for ${kanaDetail.kana}`} 
                      className="w-full max-w-[200px] mx-auto rounded-xl border border-surface-variant bg-white"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full max-w-[200px] h-48 mx-auto rounded-xl border border-dashed border-surface-variant bg-surface-container flex flex-col items-center justify-center text-on-surface-variant shadow-inner">
                      <span className="text-6xl font-sans mb-2 text-surface-variant/40">{kanaDetail.kana}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4">Animation Unavailable</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 space-y-4">
                  {kanaDetail.strokes.map((stroke, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shrink-0">{index + 1}</div>
                      <p className="text-on-surface-variant pt-1">{stroke}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Practice Drawing Canvas */}
          <section>
            <div className="bg-surface-container rounded-3xl border border-surface-variant p-8 shadow-inner">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-headline font-bold text-on-surface">Practice Drawing</h2>
                <button 
                  onClick={clearCanvas}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-white transition-colors border border-surface-variant text-sm font-bold"
                >
                  <Eraser className="w-4 h-4" /> Clear Canvas
                </button>
              </div>
              <p className="text-on-surface-variant mb-6">Follow the stroke order above and try writing it yourself!</p>
              
              <div className="relative bg-surface-container-lowest rounded-2xl border-2 border-dashed border-surface-variant text-center max-w-sm mx-auto shadow-sm overflow-hidden flex items-center justify-center touch-none">
                {/* Background trace character (optional, adjust opacity as needed) */}
                <div className="absolute inset-0 flex items-center justify-center text-[10rem] font-sans text-surface-variant/20 select-none pointer-events-none">
                  {kanaDetail.kana}
                </div>
                
                <canvas
                  ref={canvasRef}
                  width={300}
                  height={300}
                  className="cursor-crosshair relative z-10"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
              </div>
            </div>
          </section>

          {/* Vocabulary Examples */}
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Vocabulary Examples</h2>
            <div className="bg-surface-container-lowest rounded-3xl border border-surface-variant overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container border-b border-surface-variant">
                    <th className="p-4 font-bold text-on-surface-variant text-sm uppercase tracking-wider capitalize">{type}</th>
                    <th className="p-4 font-bold text-on-surface-variant text-sm uppercase tracking-wider">Romaji</th>
                    <th className="p-4 font-bold text-on-surface-variant text-sm uppercase tracking-wider">Meaning</th>
                    <th className="p-4 font-bold text-on-surface-variant text-sm uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-variant">
                  {kanaDetail.vocabulary.map((vocab, index) => (
                    <tr key={index} className="hover:bg-surface-container/50 transition-colors group">
                      <td className="p-4 font-bold text-lg text-on-surface">{vocab.kana}</td>
                      <td className="p-4 text-on-surface-variant">{vocab.romaji}</td>
                      <td className="p-4 text-on-surface-variant">{vocab.meaning}</td>
                      <td className="p-4 text-right">
                        <button className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                          <PlayCircle className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>

        {/* Sidebar / Quick Links */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="bg-surface-container-lowest rounded-3xl border border-surface-variant p-6 shadow-sm">
              <h3 className="font-headline font-bold text-on-surface mb-4">In this lesson</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-primary font-medium hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Pronunciation</a></li>
                <li><a href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-surface-variant"></div> Stroke Order</a></li>
                <li><a href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-surface-variant"></div> Vocabulary</a></li>
                <li><a href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-surface-variant"></div> Practice</a></li>
              </ul>
            </div>

            <div className="bg-tertiary-container/30 rounded-3xl border border-tertiary/20 p-6">
              <h3 className="font-headline font-bold text-on-surface mb-2 flex items-center gap-2">
                <Medal className="w-5 h-5 text-tertiary" /> Pro Tip
              </h3>
              <p className="text-sm text-on-surface-variant">
                Don't worry about making your handwriting look exactly like computer fonts. Focus on the stroke order and general proportions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-surface-variant gap-4">
        <Link to={`/${type}`} className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-surface-variant text-on-surface-variant font-medium hover:bg-surface-container hover:text-on-surface transition-colors">
          <ChevronLeft className="w-5 h-5" /> Back to {type} Chart
        </Link>
      </div>
    </div>
  );
}