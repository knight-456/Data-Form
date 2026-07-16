import { useMemo } from "react";
import { Download, Moon, Sun, UserRound } from "lucide-react";
import { useTheme } from "next-themes";
import { navItems, profile, RESUME_URL } from "../data";

export function Header({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const { theme, setTheme } = useTheme();

  const themeOptions = useMemo(
    () => [
      { value: "light" as const, label: "Light", icon: Sun },
      { value: "dark" as const, label: "Dark", icon: Moon },
      { value: "system" as const, label: "System", icon: UserRound },
    ],
    [],
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border/40 bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="flex items-center gap-3 text-left transition-opacity hover:opacity-80 group"
          aria-label="Scroll to top"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-foreground text-background font-black text-base shadow-[0_4px_14px_rgba(0,0,0,0.1)] dark:shadow-none group-hover:scale-105 transition-transform duration-300">
            JR
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-bold tracking-tight text-foreground">{profile.name}</span>
            <span className="block text-xs font-medium text-muted-foreground">{profile.title}</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-sm font-semibold text-muted-foreground rounded-full transition-all hover:text-foreground hover:bg-muted/60"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border/50" aria-label="Theme selector">
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const isActive = theme === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setTheme(option.value)}
                  aria-pressed={isActive}
                  title={`${option.label} theme`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{option.label}</span>
                </button>
              );
            })}
          </div>

          <a 
            href={RESUME_URL}
            download="JASHWANT_RANA_RESUME.pdf"
            className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-foreground text-background transition-all hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-brand/20 dark:hover:bg-brand"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
