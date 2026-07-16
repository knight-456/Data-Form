import { useEffect, useRef, useState } from "react";
import { Terminal as TerminalIcon, X } from "lucide-react";

export function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "input" | "output"; text: string }[]>([
    { type: "output", text: "Welcome to Jashwant's Interactive Terminal." },
    { type: "output", text: "Type 'help' to see available commands." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
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
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: "input", text: `guest@portfolio:~$ ${cmd}` } as const];

    switch (trimmed) {
      case "help":
        newHistory.push({ type: "output", text: "Available commands: help, whoami, skills, clear, sudo" });
        break;
      case "whoami":
        newHistory.push({ type: "output", text: "Jashwant Rana - Senior Software Engineer building scalable SaaS and mobile ops." });
        break;
      case "skills":
        newHistory.push({ type: "output", text: "JavaScript, TypeScript, React, React Native, Next.js, Redux, Tailwind CSS, Node.js" });
        break;
      case "clear":
        setHistory([]);
        return;
      case "sudo":
        newHistory.push({ type: "output", text: "Nice try. This incident will be reported to Santa." });
        break;
      case "":
        break;
      default:
        newHistory.push({ type: "output", text: `command not found: ${trimmed}` });
    }
    setHistory(newHistory);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-brand text-primary-foreground shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center group"
        title="Open Terminal (Ctrl+K)"
      >
        <TerminalIcon className="w-5 h-5" />
        <span className="absolute right-full mr-4 whitespace-nowrap bg-background text-foreground text-xs px-2 py-1 rounded border border-border opacity-0 group-hover:opacity-100 transition-opacity">
          Terminal (Ctrl+K)
        </span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#1e1e1e] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col h-[60vh] animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-black/50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
          </div>
          <p className="text-xs text-gray-400 font-mono tracking-wider">jashwant@portfolio:~</p>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div 
          className="flex-1 p-4 overflow-y-auto font-mono text-[13px] text-gray-300 flex flex-col gap-1 cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div key={i} className={line.type === "input" ? "text-blue-400 font-bold mt-2" : "text-gray-300"}>
              {line.text}
            </div>
          ))}
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
              className="flex-1 bg-transparent outline-none text-white font-bold"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
