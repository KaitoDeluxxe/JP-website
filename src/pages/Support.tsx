import { Link } from "react-router-dom";
import { BookOpen, Server, PenTool, Code, Star, CheckCircle, Coffee, BadgeCheck, PieChart, Banknote } from "lucide-react";

export default function Support() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body w-full">
      {/* Main Content Canvas */}
      <div className="pb-16 px-6 md:px-12 max-w-6xl mx-auto flex-grow w-full mt-8">
        {/* Hero Section: Heartfelt Narrative */}
        <section className="mb-16">
          <div className="relative rounded-2xl overflow-hidden bg-surface-container-low min-h-[300px] flex items-center p-8 md:p-12 mb-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACJgZ98OhIg85ZufUiCO_DzDR2kYrVigL0wQEbKbkLiUWq36q_274znqDkf9Iv1lrlX48EIm8Q5JevxGAWM2Jiuav_f97hA3-BGrIw07gcPfI0VqMjW-IXDxq-WN2I4ckUaIRshFqT48fnBT62c9R_7t4eSsPK3xEXf9IRsPCwbWTOgtsvrBxQtGuXOY7IvGek6PQvhIw_A-x9awaOQwTg3_xTT_eTmiHdD7KKHEWQBI2ecY6VNaB4Fo9CyFp5bVlN3BycdA03VUQ')" }}></div>
            <div className="max-w-2xl relative z-10">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-headline text-xs font-bold tracking-widest uppercase rounded-full mb-4">Community Funded</span>
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-emerald-900 leading-tight mb-6">Building the Future of Digital Scholarly Learning</h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-0">
                Komorebi Docs is an independent labor of love. We believe that world-class Japanese education tools should be accessible to everyone, free from aggressive advertising and paywalls. Your support keeps our servers running and fuels the creation of new grammar guides, JLPT past papers, and interactive vocabulary modules.
              </p>
            </div>
            <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
              <BookOpen className="w-full h-full text-primary" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline font-bold mb-2">Server Maintenance</h3>
              <p className="text-sm text-on-surface-variant">Fast, globally accessible documentation requires robust infrastructure. Donations directly cover our hosting costs.</p>
            </div>
            <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <PenTool className="text-secondary w-6 h-6" />
              </div>
              <h3 className="font-headline font-bold mb-2">Academic Research</h3>
              <p className="text-sm text-on-surface-variant">Curating JLPT past papers and high-fidelity vocabulary groups requires dedicated scholarly hours.</p>
            </div>
            <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-tertiary w-6 h-6" />
              </div>
              <h3 className="font-headline font-bold mb-2">New Features</h3>
              <p className="text-sm text-on-surface-variant">From interactive kanji practice to progress tracking, your support funds the development of new educational modules.</p>
            </div>
          </div>
        </section>

        {/* Donation Cards: Bento Grid Style */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Patreon Card (Recurring) */}
          <div className="relative group p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full overflow-hidden transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#FF424D] rounded-full flex items-center justify-center text-white">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <div>
                  <h2 className="font-headline text-2xl font-bold">Patreon</h2>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Monthly Membership</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase rounded-full">Most Impactful</span>
            </div>
            <p className="text-on-surface-variant mb-6 flex-grow">Join our inner circle of scholars. Monthly support provides the predictable funding we need to scale the platform sustainably.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600 w-4 h-4" />
                <span className="text-sm font-medium">Early access to new Japanese modules</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600 w-4 h-4" />
                <span className="text-sm font-medium">Monthly JLPT study material PDFs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600 w-4 h-4" />
                <span className="text-sm font-medium">"Scholar" badge in community forums</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600 w-4 h-4" />
                <span className="text-sm font-medium">Vote on the next grammar series</span>
              </div>
            </div>
            <a className="w-full py-4 bg-[#FF424D] text-white font-headline font-bold rounded-xl text-center shadow-lg shadow-red-500/10 active:scale-[0.98] transition-all" href="#">Support on Patreon</a>
          </div>

          {/* Ko-fi Card (One-time) */}
          <div className="relative group p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full overflow-hidden transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#13C3FF] rounded-full flex items-center justify-center text-white">
                  <Coffee className="w-8 h-8 fill-current" />
                </div>
                <div>
                  <h2 className="font-headline text-2xl font-bold">Ko-fi</h2>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">One-time Support</p>
                </div>
              </div>
            </div>
            <p className="text-on-surface-variant mb-6 flex-grow">Prefer to keep it casual? Buy us a coffee to show your appreciation for a specific lesson or resource that helped your studies.</p>
            <div className="grid grid-cols-3 gap-2 mb-8">
              <button className="py-3 border border-outline-variant/30 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">$5</button>
              <button className="py-3 border border-outline-variant/30 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">$10</button>
              <button className="py-3 border border-outline-variant/30 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">Other</button>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-sky-500 w-4 h-4" />
                <span className="text-sm font-medium">No account required</span>
              </div>
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-sky-500 w-4 h-4" />
                <span className="text-sm font-medium">100% of proceeds go to the project</span>
              </div>
            </div>
            <a className="w-full py-4 bg-[#13C3FF] text-white font-headline font-bold rounded-xl text-center shadow-lg shadow-sky-500/10 active:scale-[0.98] transition-all" href="#">Buy a Coffee on Ko-fi</a>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="bg-surface-container rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-headline text-2xl font-bold text-emerald-900 mb-4">Scholarly Transparency</h3>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-8">Every yen donated is tracked and used for the direct benefit of the learning community. We publish a yearly "Transparency Report" detailing exactly where funds are allocated.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-surface-container-lowest rounded-full text-sm font-bold flex items-center gap-2">
              <PieChart className="text-emerald-600 w-5 h-5" />
              65% Content Creation
            </div>
            <div className="px-6 py-3 bg-surface-container-lowest rounded-full text-sm font-bold flex items-center gap-2">
              <Server className="text-emerald-600 w-5 h-5" />
              25% Infrastructure
            </div>
            <div className="px-6 py-3 bg-surface-container-lowest rounded-full text-sm font-bold flex items-center gap-2">
              <Banknote className="text-emerald-600 w-5 h-5" />
              10% Administrative
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 mt-auto bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 z-10 relative">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-headline font-bold text-emerald-800 text-lg">Komorebi Docs</span>
            <p className="font-body text-xs text-slate-500">© 2024 Komorebi Docs. An Architectural Scholar Project.</p>
          </div>
          <div className="flex gap-8">
            <a className="text-xs font-body text-slate-400 hover:text-emerald-500 transition-colors" href="#">Documentation</a>
            <a className="text-xs font-body text-slate-400 hover:text-emerald-500 transition-colors" href="#">Privacy</a>
            <a className="text-xs font-body text-slate-400 hover:text-emerald-500 transition-colors" href="#">Terms</a>
            <a className="text-xs font-body text-slate-400 hover:text-emerald-500 transition-colors" href="#">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
