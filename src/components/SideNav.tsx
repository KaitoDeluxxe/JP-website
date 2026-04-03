import { Link, useLocation } from "react-router-dom";
import { BookOpen, GraduationCap, BookOpenText, Medal, Library, Gamepad2, Zap, Keyboard, PenTool, HelpCircle, Timer, Sparkles, Target } from "lucide-react";
import { cn } from "../lib/utils";

export default function SideNav() {
  const location = useLocation();

  const sections = [
    {
      title: "Basics",
      links: [
        { name: "Hiragana", path: "/hiragana", icon: BookOpen },
        { name: "Katakana", path: "/katakana", icon: BookOpenText },
        { name: "Kanji Radicals", path: "/radicals", icon: Library },
      ],
    },
    {
      title: "JLPT Levels",
      links: [
        { name: "N5 Beginner", path: "/n5", icon: GraduationCap },
        { name: "N4 Elementary", path: "/n4", icon: GraduationCap },
        { name: "N3 Intermediate", path: "/n3", icon: GraduationCap },
        { name: "N2 Advanced", path: "/n2", icon: Medal },
        { name: "N1 Fluent", path: "/n1", icon: Medal },
        { name: "N0 Real Japanese", path: "/n0", icon: Sparkles },
        { name: "Past JLPT Papers", path: "/past-papers", icon: BookOpen },
      ],
    },
    {
      title: "Arcade",
      links: [
        { name: "Speedrun", path: "/speedrun", icon: Timer },
        { name: "Kana Typer", path: "/kana-typer", icon: Keyboard },
        { name: "Flashcard Sprint", path: "/flashcard-sprint", icon: Zap },
        { name: "Kanji Trace", path: "/kanji-trace", icon: PenTool },
        { name: "Kotoba Grind", path: "/kotoba-grind", icon: Target },
      ],
    },
    {
      title: "Help & Support",
      links: [
        { name: "Support", path: "/support", icon: HelpCircle },
      ],
    },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-surface-container-lowest border-r border-surface-variant overflow-y-auto hidden lg:block z-40">
      <div className="p-6">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">Learning Path</p>
          <div className="bg-surface-container rounded-2xl p-4 border border-surface-variant/50">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-medium text-on-surface">JLPT N5</span>
              <span className="text-xs font-bold text-primary">12%</span>
            </div>
            <div className="h-2 bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full w-[12%]"></div>
            </div>
            <p className="text-xs text-on-surface-variant mt-2">3 of 25 lessons completed</p>
          </div>
        </div>

        <nav className="space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 px-3">
                {section.title}
              </p>
              <div className="space-y-1">
                {section.links.map((link) => {
                  const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                        isActive
                          ? "bg-secondary-container text-on-surface"
                          : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5 transition-colors",
                          isActive ? "text-primary" : "text-on-surface-variant group-hover:text-on-surface"
                        )}
                      />
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
