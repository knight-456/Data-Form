import React from "react";
import { Sparkles } from "lucide-react";

export function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#070a12] text-white overflow-hidden select-none">
      {/* Background ambient radial glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Glassmorphic Central Card */}
      <div className="relative z-10 flex flex-col items-center p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] max-w-sm w-full mx-4 text-center">
        
        {/* Animated Brand Badge & Orbit Spinner */}
        <div className="relative flex items-center justify-center w-20 h-20 mb-6">
          {/* Outer Rotating Gradient Ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-cyan-400 animate-spin"
            style={{ animationDuration: "1.2s" }}
          />
          
          {/* Inner Counter-Rotating Pulse Ring */}
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-blue-400 border-l-cyan-300 animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          />

          {/* Central Logo Badge */}
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-black text-lg shadow-[0_0_20px_rgba(37,99,235,0.6)]">
            BTL
          </div>
        </div>

        {/* Loading Title */}
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <h2 className="text-base font-bold tracking-tight text-white">Loading Workspace</h2>
        </div>

        <p className="text-xs font-medium text-gray-400 mb-6">
          Preparing initial platform components...
        </p>

        {/* Animated Pulse Progress Bar */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-full animate-[loading-bar_1.6s_infinite_ease-in-out] w-1/2" />
        </div>
      </div>
    </div>
  );
}
