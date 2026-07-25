"use client";

import React, { useState } from "react";
import { Code2, Check, AlertTriangle, ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SpotlightCard } from "./spotlight-card";
import { panelClass } from "../data";

type TDiffTab = {
  id: string;
  label: string;
  beforeTitle: string;
  beforeCode: string;
  afterTitle: string;
  afterCode: string;
  outcome: string;
};

const diffTabs: TDiffTab[] = [
  {
    id: "location",
    label: "Background Location Sync",
    beforeTitle: "Naive Approach (Killed by OEM Power Managers)",
    beforeCode: `// Naive JS setInterval in React Native
setInterval(() => {
  navigator.geolocation.getCurrentPosition((pos) => {
    fetch("/api/location", { body: JSON.stringify(pos) });
  });
}, 5000); // ❌ Fails when app goes to background`,
    afterTitle: "Senior Architecture (Foreground Service + Self-Healing)",
    afterCode: `// Native Android ForegroundService + WorkManager Watchdog
class LocationTrackingService : Service() {
  override onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
    startForeground(NOTIFICATION_ID, createNotification())
    locationEngine.requestUpdates()
    return START_STICKY // ✅ Self-restarts if killed
  }
}`,
    outcome: "Eliminated background tracking dropouts across Samsung & Xiaomi OEM power managers.",
  },
  {
    id: "state",
    label: "Offline State Machine",
    beforeTitle: "Unsafe Boolean Flags",
    beforeCode: `// Vulnerable to race conditions & invalid state sync
if (isTracking && !isPaused && hasNetwork) {
  saveCheckIn(userData);
} // ❌ Causes duplicate attendance logs`,
    afterTitle: "Strict Finite State Machine + SQLite Persistence",
    afterCode: `// Explicit state transitions with atomic SQLite journal
type State = 'IDLE' | 'PUNCHED_IN' | 'BREAK' | 'PUNCHED_OUT';
const transition = (curr: State, event: Event): State => {
  const next = FSMTable[curr][event];
  if (!next) throw new InvalidTransitionError();
  sqliteStore.saveStateLog(next);
  return next;
}; // ✅ Zero invalid visit logs`,
    outcome: "Zero duplicate attendance check-ins & reliable state restoration across app kills.",
  },
  {
    id: "websockets",
    label: "Real-time Dashboard Stream",
    beforeTitle: "Polled HTTP Requests",
    beforeCode: `// High server load & delayed dashboard updates
useEffect(() => {
  const timer = setInterval(() => {
    fetchActiveAttendance();
  }, 3000); // ❌ High latency & server load
}, []);`,
    afterTitle: "WebSocket Subscription + Redux Slice Sync",
    afterCode: `// Live event stream with auto-reconnection backoff
wsClient.on('FIELD_WORKER_UPDATE', (event) => {
  dispatch(attendanceSlice.actions.updateWorker(event));
}); // ✅ Real-time latency <50ms with automatic heartbeat`,
    outcome: "Reduced API payload bandwidth by 75% and provided instant real-time field visibility.",
  },
];

export function CodeDiffViewer() {
  const [activeTabId, setActiveTabId] = useState<string>("location");
  const activeTab = diffTabs.find((tab) => tab.id === activeTabId) || diffTabs[0];

  return (
    <section id="code-diff" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <SectionHeading
        eyebrow="Architectural Deep Dives"
        title="Engineering Solutions: Naive Code vs. Production Architecture"
        description="Compare naive frontend code implementations against the senior-level architecture patterns I use in production."
      />

      <SpotlightCard className={`${panelClass} mt-6 p-6 rounded-[24px] border border-border/40`}>
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-5 border-b border-border/40">
          {diffTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTabId === tab.id
                  ? "bg-brand text-primary-foreground shadow-md"
                  : "bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Diff Comparison Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Before: Naive Approach */}
          <div className="flex flex-col justify-between rounded-2xl bg-rose-950/20 border border-rose-500/20 p-5 font-mono text-xs">
            <div>
              <div className="flex items-center gap-2 mb-3 text-rose-400 font-bold font-sans">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{activeTab.beforeTitle}</span>
              </div>
              <pre className="p-4 rounded-xl bg-black/60 border border-rose-500/20 text-rose-200/90 overflow-x-auto leading-relaxed">
                <code>{activeTab.beforeCode}</code>
              </pre>
            </div>
          </div>

          {/* After: Production Architecture */}
          <div className="flex flex-col justify-between rounded-2xl bg-emerald-950/20 border border-emerald-500/20 p-5 font-mono text-xs">
            <div>
              <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold font-sans">
                <Check className="w-4 h-4 shrink-0" />
                <span>{activeTab.afterTitle}</span>
              </div>
              <pre className="p-4 rounded-xl bg-black/60 border border-emerald-500/20 text-emerald-200/90 overflow-x-auto leading-relaxed">
                <code>{activeTab.afterCode}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Measurable Outcome Banner */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-brand/10 border border-brand/20 text-xs font-bold text-foreground">
          <div className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-brand shrink-0" />
            <span>Engineering Impact:</span>
            <span className="text-muted-foreground font-medium">{activeTab.outcome}</span>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
