"use client";

import React, { useState } from "react";
import { BriefcaseBusiness, ChevronDown, ChevronUp, Network, Server, Database, Smartphone, ShieldCheck } from "lucide-react";
import { education, panelClass, revealClass, systems, TSystem } from "../data";
import { SectionHeading } from "./section-heading";
import { SpotlightCard } from "./spotlight-card";

export function SystemsSection() {
  const [expandedSystem, setExpandedSystem] = useState<string | null>(null);

  const getNodeIcon = (type: TSystem["nodes"][number]["type"]) => {
    switch (type) {
      case "client":
        return <Smartphone className="w-4 h-4 text-blue-400" />;
      case "gateway":
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case "service":
        return <Server className="w-4 h-4 text-amber-400" />;
      case "db":
        return <Database className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="systems" className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        
        {/* Left Side: Overview & Education */}
        <SpotlightCard className={`${panelClass} ${revealClass} flex flex-col p-6 rounded-[24px]`}>
          <div>
            <SectionHeading
              eyebrow="Selected systems"
              title="Work that sounds boring until it saves a team six hours a week."
              description="I like this class of product: enterprise workflows, RBAC dashboards, multi-tenant permissions, and resilient edge architecture."
              compact
            />
          </div>

          <div className="mt-6 pt-5 border-t border-border/40">
            <div className="rounded-[20px] border border-border/60 bg-muted/40 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Education</p>
              <h3 className="mt-2 text-lg font-black tracking-tight text-foreground">{education.school}</h3>
              <p className="mt-1.5 text-[14px] font-bold text-foreground/80">{education.degree}</p>
              <p className="mt-1 text-[13px] font-medium text-muted-foreground">
                {education.period} / {education.location}
              </p>
            </div>
          </div>
        </SpotlightCard>

        {/* Right Side: Systems Cards */}
        <div className="grid gap-4">
          {systems.map((system, index) => {
            const isExpanded = expandedSystem === system.name;
            return (
              <SpotlightCard
                key={system.name}
                spotlightColor="rgba(59, 130, 246, 0.15)"
                className={`${panelClass} ${revealClass} flex flex-col p-6 rounded-[24px] border border-border/40 transition-all duration-300`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand">{system.meta}</span>
                    <h3 className="mt-1 text-xl font-black tracking-tight text-foreground">{system.name}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground font-medium">{system.detail}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-muted/50 border border-border/50 text-muted-foreground shrink-0">
                    <BriefcaseBusiness className="w-5 h-5" />
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {system.keyTech.map((tech) => (
                    <span key={tech} className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border/40">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Architecture Expand Button - Commented out for now
                <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
                  <button
                    onClick={() => setExpandedSystem(isExpanded ? null : system.name)}
                    className="cursor-pointer text-xs font-bold text-brand hover:text-brand-dark flex items-center gap-1.5 transition-colors"
                  >
                    <Network className="w-3.5 h-3.5" />
                    <span>{isExpanded ? "Hide Architecture Flow" : "View Architecture Flow"}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="mt-4 p-4 rounded-2xl bg-[#0f1117] border border-white/10 animate-in fade-in duration-200">
                    <p className="text-[11px] font-mono text-emerald-400 font-bold mb-3">
                      Data Pipeline: {system.dataFlow}
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {system.nodes.map((node) => (
                        <div
                          key={node.id}
                          className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-gray-200 hover:border-brand/50 transition-colors"
                        >
                          <div className="p-1.5 rounded-lg bg-white/10 shrink-0">
                            {getNodeIcon(node.type)}
                          </div>
                          <div>
                            <strong className="block text-white font-bold text-[12px]">{node.label}</strong>
                            <span className="text-[10px] text-gray-400 block mt-0.5">{node.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                */}
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
