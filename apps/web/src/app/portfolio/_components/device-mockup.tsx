"use client";

import React, { useState } from "react";
import { X, Smartphone, ExternalLink, Activity, Layers, CheckCircle, Wifi, Battery, Play, RefreshCw } from "lucide-react";
import { TMobileApp } from "../data";

interface DeviceMockupProps {
  app: TMobileApp;
  onClose: () => void;
}

export function DeviceMockup({ app, onClose }: DeviceMockupProps) {
  const [activeTab, setActiveTab] = useState<"demo" | "specs" | "arch">("demo");
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [simulatedState, setSimulatedState] = useState<Record<string, string | number | boolean>>(
    app.screens[0]?.simulatedState || {}
  );
  const [isSimulating, setIsSimulating] = useState(false);

  const currentScreen = app.screens[activeScreenIndex] || app.screens[0];

  const handleTriggerAction = () => {
    setIsSimulating(true);
    setTimeout(() => {
      if (app.packageName.includes("attendance")) {
        setSimulatedState((prev) => ({
          ...prev,
          geofenceMatch: true,
          faceVerified: true,
          punchTime: new Date().toLocaleTimeString(),
          syncStatus: "Synced to Cloud",
        }));
      } else if (app.packageName.includes("ops")) {
        setSimulatedState((prev) => ({
          ...prev,
          leadCount: (Number(prev.leadCount || 42) + 1),
          status: "Checked-in",
          unassigned: Math.max(0, Number(prev.unassigned || 3) - 1),
        }));
      } else {
        setSimulatedState((prev) => ({
          ...prev,
          cartCount: (Number(prev.cartCount || 2) + 1),
          status: "Order Confirmed",
        }));
      }
      setIsSimulating(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-card border border-border/80 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.4)] flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Left Column: Realistic Mobile Device Frame */}
        <div className="w-full md:w-[360px] bg-gradient-to-b from-slate-900 to-black p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border/40 shrink-0 relative">
          
          {/* Phone Frame */}
          <div className="w-[280px] h-[520px] bg-slate-950 rounded-[42px] border-[10px] border-slate-800 shadow-[0_0_40px_rgba(59,130,246,0.25)] relative flex flex-col overflow-hidden select-none">
            
            {/* Notch / Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-900 animate-pulse" />
            </div>

            {/* Mobile Status Bar */}
            <div className="h-7 bg-slate-900/90 text-white text-[10px] font-mono px-6 pt-1 flex items-center justify-between shrink-0 z-20">
              <span>9:41</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>

            {/* App Screen Content */}
            <div className="flex-1 bg-slate-900 text-slate-100 flex flex-col p-4 overflow-y-auto relative z-10">
              
              {/* App Bar inside phone */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand flex items-center justify-center text-white font-black text-xs">
                    {app.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{app.name.split(" - ")[0]}</h4>
                    <p className="text-[9px] text-brand font-mono">{app.category}</p>
                  </div>
                </div>
              </div>

              {/* Screen Simulator Body */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mb-2">
                    <Activity className="w-3 h-3" />
                    <span>{currentScreen.title}</span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-snug mb-3">
                    {currentScreen.description}
                  </p>

                  {/* Live State Key-Values */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5 font-mono text-[10px]">
                    <div className="text-[9px] uppercase tracking-wider text-slate-500 font-sans font-bold">Simulated App State</div>
                    {Object.entries(simulatedState).map(([key, val]) => (
                      <div key={key} className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">{key}:</span>
                        <span className="font-bold text-brand-light">{String(val)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Action Trigger */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <button
                    onClick={handleTriggerAction}
                    disabled={isSimulating}
                    className="w-full py-2.5 px-3 rounded-xl bg-brand text-white font-bold text-xs shadow-lg hover:bg-brand/90 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin" : ""}`} />
                    <span>{isSimulating ? "Processing..." : "Trigger Simulated Action"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Home Bar */}
            <div className="h-5 bg-slate-950 flex items-center justify-center shrink-0 z-20">
              <div className="w-24 h-1 bg-slate-600 rounded-full" />
            </div>
          </div>
        </div>

        {/* Right Column: App Details & Controls */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand px-3 py-1 rounded-full bg-brand/10 border border-brand/20">
                  {app.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-foreground mt-3 tracking-tight">
                  {app.name}
                </h3>
                <p className="text-xs font-mono text-muted-foreground mt-1">{app.packageName}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground font-medium mt-4">
              {app.description}
            </p>

            {/* Tab Controls */}
            <div className="flex bg-muted/60 p-1 rounded-xl border border-border/50 gap-1 mt-6">
              <button
                onClick={() => setActiveTab("demo")}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === "demo" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Screen Selector
              </button>
              <button
                onClick={() => setActiveTab("specs")}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === "specs" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                Metrics & Specs
              </button>
              <button
                onClick={() => setActiveTab("arch")}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === "arch" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Architecture
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6 min-h-[160px]">
              {activeTab === "demo" && (
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-muted-foreground">Select a simulated app screen to view inside the mobile frame:</p>
                  <div className="grid gap-2">
                    {app.screens.map((screen, idx) => (
                      <button
                        key={screen.id}
                        onClick={() => {
                          setActiveScreenIndex(idx);
                          setSimulatedState(screen.simulatedState);
                        }}
                        className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          activeScreenIndex === idx
                            ? "bg-brand/10 border-brand/40 text-foreground font-bold"
                            : "bg-background/50 border-border/50 text-muted-foreground hover:border-border"
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold text-foreground block">{screen.title}</span>
                          <span className="text-[11px] text-muted-foreground line-clamp-1">{screen.description}</span>
                        </div>
                        {activeScreenIndex === idx && <CheckCircle className="w-4 h-4 text-brand shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="grid grid-cols-3 gap-3">
                  {app.stats.map((st) => (
                    <div key={st.label} className="p-4 bg-muted/40 rounded-2xl border border-border/50 text-center">
                      <strong className="text-xl font-black text-foreground block">{st.value}</strong>
                      <span className="text-[11px] text-muted-foreground font-semibold leading-tight">{st.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "arch" && (
                <ul className="space-y-2">
                  {app.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground font-medium p-2.5 rounded-xl bg-muted/30 border border-border/40">
                      <div className="w-2 h-2 rounded-full bg-brand mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-6 border-t border-border/40 flex items-center justify-between gap-4 mt-6">
            <div className="flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border/40">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={app.link}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-brand text-primary-foreground font-bold text-xs flex items-center gap-1.5 transition-transform hover:scale-105 shadow-md shrink-0"
            >
              Play Store
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
