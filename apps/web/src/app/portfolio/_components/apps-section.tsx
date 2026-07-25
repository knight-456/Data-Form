"use client";

import React, { useState } from "react";
import { ArrowUpRight, Play, Smartphone, Activity } from "lucide-react";
import { mobileApps, panelClass, revealClass, TMobileApp } from "../data";
import { SectionHeading } from "./section-heading";
import { SpotlightCard } from "./spotlight-card";
import { DeviceMockup } from "./device-mockup";

export function AppsSection() {
  const [selectedApp, setSelectedApp] = useState<TMobileApp | null>(null);

  return (
    <section id="apps" className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <SectionHeading
        eyebrow="Published Android apps"
        title="Three Play Store products, built from zero to shipped."
        description="These are real production apps with published store packages."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {mobileApps.map((app, index) => (
          <SpotlightCard
            key={app.packageName}
            spotlightColor="rgba(59, 130, 246, 0.18)"
            className={`${panelClass} ${revealClass} flex flex-col justify-between group border border-border/40 p-6 rounded-[24px] hover:border-brand/50 hover:shadow-[0_15px_45px_hsla(var(--brand),0.15)] transition-all duration-300`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-foreground text-background shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand/10 text-brand border border-brand/20">
                  {app.category}
                </span>
              </div>

              {/* Title & Package */}
              <h3 className="mt-6 text-2xl font-black tracking-tight text-foreground group-hover:text-brand transition-colors duration-300">
                {app.name}
              </h3>
              <p className="mt-1 text-xs font-mono text-muted-foreground">{app.packageName}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-medium flex-1">
                {app.description}
              </p>

              {/* Key Stat Badges - Commented out for now
              <div className="mt-5 grid grid-cols-3 gap-2 py-3 border-y border-border/30">
                {app.stats.map((st) => (
                  <div key={st.label} className="text-center">
                    <strong className="block text-xs font-black text-foreground">{st.value}</strong>
                    <span className="text-[9px] text-muted-foreground font-semibold line-clamp-1">{st.label}</span>
                  </div>
                ))}
              </div>
              */}

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold px-3 py-1 rounded-lg bg-muted/80 text-muted-foreground border border-border/50 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between gap-2">
              {/* 3D Interactive Demo Button - Commented out for now
              <button
                onClick={() => setSelectedApp(app)}
                className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand text-primary-foreground transition-all hover:bg-brand/90 hover:scale-105 shadow-sm"
              >
                <Smartphone className="w-3.5 h-3.5" />
                3D Interactive Demo
              </button>
              */}

              <a
                href={app.link}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer inline-flex items-center gap-1 text-[12px] font-bold text-muted-foreground hover:text-brand transition-colors group/link"
              >
                Play Store
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* 3D Device Mockup Modal */}
      {selectedApp && (
        <DeviceMockup app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </section>
  );
}
