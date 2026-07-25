"use client";

import React from "react";
import { Zap, ShieldCheck, Cpu, Smartphone } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";
import { panelClass } from "../data";

const metrics = [
  {
    value: "<350ms",
    label: "App Cold-Start Latency",
    description: "Optimized React Native startup time with eager bundle pre-loading and native initialization.",
    icon: Zap,
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/10",
  },
  {
    value: "99.8%",
    label: "Crash-Free Rate",
    description: "Maintained stability across 3 published Play Store apps with WorkManager & Error Boundaries.",
    icon: ShieldCheck,
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
  },
  {
    value: "40%",
    label: "Memory Footprint Cut",
    description: "Reduced Redux state overhead & garbage collection spikes through strict state machines.",
    icon: Cpu,
    color: "text-brand",
    border: "border-brand/20",
    bg: "bg-brand/10",
  },
  {
    value: "5+",
    label: "Production Ecosystems",
    description: "Shipped enterprise SaaS HRMS, field ops attendance, dental ERPs, and B2C commerce apps.",
    icon: Smartphone,
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
  },
];

export function MetricsScorecard() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 relative z-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((item) => {
          const Icon = item.icon;
          return (
            <SpotlightCard
              key={item.label}
              spotlightColor="rgba(59, 130, 246, 0.15)"
              className={`${panelClass} p-5 rounded-[22px] border border-border/40 hover:border-brand/40 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} border ${item.border} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">
                    Verified Benchmark
                  </span>
                </div>
                <div className="text-3xl font-black tracking-tight text-foreground group-hover:text-brand transition-colors duration-300">
                  {item.value}
                </div>
                <h3 className="text-xs font-bold text-foreground mt-1 mb-2">{item.label}</h3>
                <p className="text-[11.5px] leading-relaxed text-muted-foreground font-medium">
                  {item.description}
                </p>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
