"use client";

import React, { useState } from "react";
import { Activity, Play, RefreshCw, Radio, CheckCircle2 } from "lucide-react";

type SocketMessage = {
  id: string;
  time: string;
  type: string;
  payload: Record<string, string | number>;
};

export function StateSimulator() {
  const [messages, setMessages] = useState<SocketMessage[]>([
    {
      id: "1",
      time: "09:41:02 AM",
      type: "USER_CHECKIN",
      payload: { userId: 102, name: "Rahul Sharma", status: "Active", loc: "Dehradun Site A" },
    },
    {
      id: "2",
      time: "09:41:45 AM",
      type: "LOCATION_UPDATE",
      payload: { userId: 108, lat: 30.3165, lng: 78.0322, speedKm: 24 },
    },
  ]);

  const [reduxState, setReduxState] = useState({
    activeAgents: 19,
    totalVisitsToday: 142,
    lastSyncTime: "09:41:45 AM",
    systemLatencyMs: 42,
  });

  const [isEmitting, setIsEmitting] = useState(false);

  const simulateEvent = () => {
    setIsEmitting(true);

    setTimeout(() => {
      const now = new Date().toLocaleTimeString();
      const eventTypes = ["USER_CHECKIN", "VISIT_COMPLETED", "LOCATION_UPDATE", "LEAD_ASSIGNED"];
      const randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];

      let payload: Record<string, string | number> = {};

      if (randomType === "USER_CHECKIN") {
        payload = { userId: Math.floor(Math.random() * 500) + 100, name: "Field Agent", status: "Active" };
      } else if (randomType === "VISIT_COMPLETED") {
        payload = { visitId: Math.floor(Math.random() * 9000) + 1000, durationMin: 35, status: "Verified" };
      } else {
        payload = { lat: (30.3165 + Math.random() * 0.05).toFixed(4), lng: (78.0322 + Math.random() * 0.05).toFixed(4) };
      }

      const newMsg: SocketMessage = {
        id: Date.now().toString(),
        time: now,
        type: randomType,
        payload,
      };

      setMessages((prev) => [newMsg, ...prev.slice(0, 4)]);
      setReduxState((prev) => ({
        ...prev,
        activeAgents: prev.activeAgents + (randomType === "USER_CHECKIN" ? 1 : 0),
        totalVisitsToday: prev.totalVisitsToday + (randomType === "VISIT_COMPLETED" ? 1 : 0),
        lastSyncTime: now,
        systemLatencyMs: Math.floor(Math.random() * 30) + 20,
      }));

      setIsEmitting(false);
    }, 300);
  };

  return (
    <div className="w-full bg-[#0d1117] rounded-2xl border border-white/10 p-5 font-mono text-xs text-gray-300 shadow-xl my-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="font-bold text-white text-sm font-sans">Live WebSocket Stream & Redux Sub-slice Simulator</span>
        </div>
        <button
          onClick={simulateEvent}
          disabled={isEmitting}
          className="cursor-pointer bg-brand hover:bg-brand/90 text-white font-sans font-bold px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isEmitting ? "animate-spin" : ""}`} />
          Simulate Incoming Event
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Socket Stream Log */}
        <div className="bg-[#161b22] rounded-xl p-3.5 border border-white/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-sans font-bold">
              <span>WebSocket Frame Feed (Delta Payloads)</span>
              <span className="text-emerald-400">ws://connected</span>
            </div>
            <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
              {messages.map((msg) => (
                <div key={msg.id} className="p-2 rounded bg-black/40 border border-white/5 text-[11px] animate-in fade-in">
                  <div className="flex justify-between text-brand-light font-bold">
                    <span>[{msg.type}]</span>
                    <span className="text-gray-500 font-normal">{msg.time}</span>
                  </div>
                  <pre className="text-gray-300 mt-1 text-[10px] font-mono whitespace-pre-wrap">
                    {JSON.stringify(msg.payload)}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Redux State Evaluator */}
        <div className="bg-[#161b22] rounded-xl p-3.5 border border-white/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-sans font-bold">
              <span>Target Redux Store Sub-slice</span>
              <span className="text-blue-400 font-mono">store.getState().ops</span>
            </div>
            <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-2 text-[11.5px]">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">activeAgents:</span>
                <span className="font-bold text-emerald-400">{reduxState.activeAgents}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">totalVisitsToday:</span>
                <span className="font-bold text-amber-400">{reduxState.totalVisitsToday}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">lastSyncTime:</span>
                <span className="font-bold text-brand-light">{reduxState.lastSyncTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">systemLatency:</span>
                <span className="font-bold text-green-400">{reduxState.systemLatencyMs}ms</span>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-[10px] text-emerald-400 font-sans font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Referential equality preserved for unmodified state slices</span>
          </div>
        </div>
      </div>

    </div>
  );
}
