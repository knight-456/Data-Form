"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal as TerminalIcon, X, Search, Moon, Sun, Download, Mail, ExternalLink, Sparkles, Command } from "lucide-react";
import { useTheme } from "next-themes";
import { navItems, profile, RESUME_URL } from "../data";

export function TerminalOverlay() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"search" | "cli">("search");
  const [searchQuery, setSearchQuery] = useState("");
  const [input, setInput] = useState("");
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);

  const [history, setHistory] = useState<{ type: "input" | "output"; text: string }[]>([
    { type: "output", text: "Welcome to Jashwant's Interactive Terminal." },
    { type: "output", text: "Type 'help' to see available commands or switch to Command Search." },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (activeTab === "cli") inputRef.current?.focus();
      else searchRef.current?.focus();
    }
  }, [isOpen, activeTab]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNotice(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedNotice(null), 2500);
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: "input", text: `guest@portfolio:~$ ${cmd}` } as const];

    switch (trimmed) {
      case "help":
        newHistory.push({ type: "output", text: "Available commands: help, whoami, skills, apps, experience, contact, clear, sudo" });
        break;
      case "whoami":
        newHistory.push({ type: "output", text: "Jashwant Rana - Senior Software Engineer building scalable SaaS and mobile ops." });
        break;
      case "skills":
        newHistory.push({ type: "output", text: "JavaScript, TypeScript, React, React Native, Next.js 15, Redux, Tailwind CSS, Node.js" });
        break;
      case "apps":
        newHistory.push(
          { type: "output", text: "--- Play Store Applications ---" },
          { type: "output", text: "• LeadsForce360 - Operations platform for lead management, WhatsApp comms, visits & team dashboards." },
          { type: "output", text: "• LeadsForce Attendance - Attendance app with location-aware punch flows, biometrics & tracking." },
          { type: "output", text: "• Winish Trends - Mobile commerce experience built from scratch with clean product flows." }
        );
        break;
      case "experience":
        newHistory.push(
          { type: "output", text: "--- Work History ---" },
          { type: "output", text: "• Winshitech IT Solutions (Jan 2025 - Jun 2026) | Senior Software Engineer" },
          { type: "output", text: "• Edulyte Marketplace (Aug 2022 - Jan 2025) | Software Developer" },
          { type: "output", text: "• Early Career (Jan 2022 - Aug 2022) | Graduate Developer" }
        );
        break;
      case "contact":
        newHistory.push(
          { type: "output", text: "--- Contact Channels ---" },
          { type: "output", text: "• Email: ranajashwant24@gmail.com" },
          { type: "output", text: "• Phone: +91 7455916166" },
          { type: "output", text: "• LinkedIn: linkedin.com/in/ranajashwant" }
        );
        break;
      case "clear":
        setHistory([]);
        return;
      case "sudo":
        newHistory.push({ type: "output", text: "Nice try! Incident logged to Santa." });
        break;
      case "":
        break;
      default:
        newHistory.push({ type: "output", text: `command not found: ${trimmed}` });
    }
    setHistory(newHistory);
  };

  const quickActions = [
    {
      id: "apps",
      title: "Jump to Mobile Apps",
      subtitle: "View published Play Store applications",
      icon: Command,
      action: () => {
        setIsOpen(false);
        document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "experience",
      title: "Jump to Work Experience",
      subtitle: "Career timeline across SaaS and mobile",
      icon: Command,
      action: () => {
        setIsOpen(false);
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "systems",
      title: "Jump to Systems Architecture",
      subtitle: "Enterprise CRM, Healthcare & Commerce",
      icon: Command,
      action: () => {
        setIsOpen(false);
        document.getElementById("systems")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "demo",
      title: "Try Live BTL Platform Demo",
      subtitle: "Open full monorepo dashboard (/dashboard)",
      icon: Sparkles,
      action: () => {
        window.location.href = "/dashboard";
      },
    },
    {
      id: "resume",
      title: "Download Resume",
      subtitle: "Get Jashwant's latest PDF resume",
      icon: Download,
      action: () => {
        window.open(RESUME_URL, "_blank");
      },
    },
    {
      id: "email",
      title: "Copy Email Address",
      subtitle: profile.email,
      icon: Mail,
      action: () => {
        handleCopy(profile.email, "email");
      },
    },
    {
      id: "theme",
      title: `Toggle Theme (Current: ${theme})`,
      subtitle: "Switch between dark and light theme",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
      },
    },
  ];

  const filteredActions = quickActions.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-brand text-primary-foreground shadow-[0_10px_30px_hsla(var(--brand),0.35)] hover:scale-110 transition-transform z-50 flex items-center justify-center group cursor-pointer"
        title="Open Command Palette / Terminal (Ctrl+K)"
      >
        <TerminalIcon className="w-5 h-5" />
        <span className="absolute right-full mr-4 whitespace-nowrap bg-background text-foreground text-xs font-bold px-3 py-1.5 rounded-lg border border-border shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          Command Palette (Ctrl+K)
        </span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#0f1115] rounded-2xl overflow-hidden shadow-[0_0_60px_hsla(var(--brand),0.2)] border border-white/10 flex flex-col h-[65vh] animate-in zoom-in-95 duration-200">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-black/40 p-0.5 rounded-lg border border-white/10 font-sans text-xs font-bold">
            <button
              onClick={() => setActiveTab("search")}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "search" ? "bg-brand text-white shadow-sm" : "text-gray-400 hover:text-white"
              }`}
            >
              <Search className="w-3 h-3" />
              Command Palette
            </button>
            <button
              onClick={() => setActiveTab("cli")}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "cli" ? "bg-brand text-white shadow-sm" : "text-gray-400 hover:text-white"
              }`}
            >
              <TerminalIcon className="w-3 h-3" />
              CLI Shell
            </button>
          </div>

          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Copied Notice Banner */}
        {copiedNotice && (
          <div className="bg-emerald-500/20 text-emerald-300 px-4 py-2 text-xs font-sans font-bold flex items-center gap-2 border-b border-emerald-500/30 animate-in fade-in">
            <span>✓</span>
            {copiedNotice}
          </div>
        )}

        {/* TAB 1: Command Search Palette */}
        {activeTab === "search" && (
          <div className="flex-1 flex flex-col font-sans p-4 overflow-hidden">
            <div className="relative mb-4">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type a command or search section..."
                className="w-full bg-[#161b22] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none focus:border-brand"
              />
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {filteredActions.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-brand/20 hover:border-brand/40 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 text-brand-light group-hover:bg-brand group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-brand-light">{item.title}</h4>
                        <p className="text-xs text-gray-400">{item.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-500 group-hover:text-white">↵ Jump</span>
                  </button>
                );
              })}
              {filteredActions.length === 0 && (
                <p className="text-center text-xs text-gray-500 py-8">No commands matching &quot;{searchQuery}&quot;</p>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: Developer CLI Shell */}
        {activeTab === "cli" && (
          <div
            className="flex-1 p-5 overflow-y-auto font-mono text-[13px] text-gray-300 flex flex-col gap-1.5 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, i) => {
              const isHeader = line.text.startsWith("---");
              const isBullet = line.text.startsWith("•");
              let textColor = "text-gray-300";

              if (line.type === "input") {
                textColor = "text-brand-light font-bold mt-2";
              } else if (isHeader) {
                textColor = "text-green-400 font-semibold mt-2";
              } else if (isBullet) {
                textColor = "text-white pl-2.5";
              }

              return (
                <div key={i} className={textColor}>
                  {line.text}
                </div>
              );
            })}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(input);
                setInput("");
              }}
              className="flex items-center gap-2 mt-2"
            >
              <span className="text-green-400 font-bold whitespace-nowrap">guest@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white font-bold caret-green-400"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        )}
      </div>
    </div>
  );
}
