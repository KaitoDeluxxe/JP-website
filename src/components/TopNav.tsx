import { Link, useLocation } from "react-router-dom";
import { Search, Globe, UserCircle } from "lucide-react";
import { cn } from "../lib/utils";

export default function TopNav() {
  const location = useLocation();

  const navLinks = [
    { name: "Lessons", path: "/hiragana" },
    { name: "Vocabulary", path: "/vocabulary" },
    { name: "Grammar", path: "/grammar" },
    { name: "Quiz", path: "/quiz" },
    { name: "Arcade", path: "/speedrun" },
    { name: "Support", path: "/support" },
    { name: "Past Papers", path: "/past-papers" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface-container-lowest border-b border-surface-variant z-50 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 text-primary font-headline font-bold text-xl tracking-tight">
          <Globe className="w-6 h-6" />
          <span>ScholarJP</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  isActive
                    ? "bg-secondary-container text-on-surface"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative group">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search lessons, vocab..."
            className="pl-10 pr-4 py-2 bg-surface-container rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest border border-transparent focus:border-primary/30 transition-all w-64"
          />
        </div>
        <button className="md:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="hidden md:flex items-center gap-2 px-5 py-2 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary-container hover:shadow-md transition-all active:scale-95">
          Sign Up Free
        </button>
        <button className="md:hidden p-2 text-primary hover:bg-primary-container/10 rounded-full transition-colors">
          <UserCircle className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
