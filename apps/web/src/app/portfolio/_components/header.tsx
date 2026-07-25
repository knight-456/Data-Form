"use client";

import { useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Download, Moon, Sun, UserRound, Sparkles, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { navItems, profile, RESUME_URL } from "../data";

export function Header({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDrawer = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 280);
  };

  const openDrawer = () => {
    setIsClosing(false);
    setMobileMenuOpen(true);
  };

  const toggleDrawer = () => {
    if (mobileMenuOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  // Lock body scroll when mobile side drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection((prev) => (prev !== entry.target.id ? entry.target.id : prev));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const themeOptions = useMemo(
    () => [
      { value: "light" as const, label: "Light", icon: Sun },
      { value: "dark" as const, label: "Dark", icon: Moon },
      { value: "system" as const, label: "System", icon: UserRound },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border/40 bg-background/60">
      {/* Scroll Progress Line */}
      <div
        className="h-[2px] bg-brand transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="flex items-center gap-3 text-left transition-opacity hover:opacity-80 group cursor-pointer"
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeSection === item.id
                  ? "text-brand bg-brand/10 dark:bg-brand/15 font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Live Platform CTA - Commented out for now
          <a
            href="/dashboard"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-brand bg-brand/10 border border-brand/20 transition-all hover:bg-brand hover:text-white hover:border-brand shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Try Live BTL Platform</span>
          </a>
          */}

          {/* Theme Selector */}
          <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border/50" aria-label="Theme selector">
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const isActive = theme === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full cursor-pointer text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setTheme(option.value)}
                  aria-pressed={isActive}
                  title={`${option.label} theme`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">{option.label}</span>
                </button>
              );
            })}
          </div>

          {/* Download Resume Button */}
          <a
            href={RESUME_URL}
            download="JASHWANT_RANA_RESUME.pdf"
            className="cursor-pointer flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold bg-foreground text-background transition-all hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:hover:shadow-brand/20 dark:hover:bg-brand"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleDrawer}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted lg:hidden cursor-pointer"
            aria-label="Toggle mobile navigation"
          >
            {mobileMenuOpen && !isClosing ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer Portal */}
      {mobileMenuOpen && mounted && createPortal(
        <div className="fixed inset-0 z-[9999] lg:hidden flex">
          {/* Dark Semi-transparent Backdrop with smooth Fade-in & Fade-out */}
          <div
            className={`fixed inset-0 bg-background/80 dark:bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
              isClosing ? "opacity-0" : "opacity-100 animate-in fade-in duration-300"
            }`}
            onClick={closeDrawer}
          />

          {/* Dynamic Theme-Aware Right Side Drawer Container with Slide-in & Slide-out */}
          <aside
            className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] h-full bg-card text-card-foreground border-l border-border/80 shadow-[0_0_50px_rgba(0,0,0,0.25)] dark:shadow-[0_0_80px_rgba(0,0,0,0.9)] p-6 flex flex-col justify-between z-[10000] transition-transform duration-300 ease-in-out ${
              isClosing
                ? "translate-x-full"
                : "translate-x-0 animate-in slide-in-from-right duration-300 ease-out"
            } overflow-y-auto`}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-foreground text-background font-black text-sm shadow-md">
                    JR
                  </span>
                  <div>
                    <span className="block text-sm font-bold tracking-tight text-foreground">{profile.name}</span>
                    <span className="block text-[11px] font-medium text-muted-foreground">{profile.title}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-2" aria-label="Mobile portfolio navigation">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      scrollToSection(item.id);
                      closeDrawer();
                    }}
                    className={`px-4 py-3.5 text-sm font-bold rounded-xl text-left transition-all cursor-pointer flex items-center justify-between ${
                      activeSection === item.id
                        ? "text-brand bg-brand/10 dark:bg-brand/20 font-extrabold border border-brand/30 shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse shadow-[0_0_8px_var(--brand)]" />}
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom Footer Actions & Theme Switcher */}
            <div className="pt-6 border-t border-border/50 space-y-4">
              
              {/* Theme Toggle Selector in Drawer */}
              <div className="flex items-center justify-between bg-muted/60 rounded-xl p-1.5 border border-border/50">
                <span className="text-xs font-bold text-muted-foreground pl-2">Theme:</span>
                <div className="flex items-center gap-1">
                  {themeOptions.map((option) => {
                    const Icon = option.icon;
                    const isActive = theme === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setTheme(option.value)}
                        className={`p-2 rounded-lg transition-all cursor-pointer ${
                          isActive
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        title={`${option.label} theme`}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <a
                href={RESUME_URL}
                download="JASHWANT_RANA_RESUME.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-brand text-primary-foreground shadow-lg transition-all hover:bg-brand/90"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <p className="text-[10px] text-center text-muted-foreground font-semibold">
                © {new Date().getFullYear()} Jashwant Rana
              </p>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </header>
  );
}
