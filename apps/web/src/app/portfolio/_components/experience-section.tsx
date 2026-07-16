"use client";

import { useEffect, useRef } from "react";
import { Building2, CheckCircle2 } from "lucide-react";
import { experience, panelClass, revealClass } from "../data";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timeline = timelineRef.current;
    const progress = progressRef.current;
    if (!timeline || !progress) return;

    const handleScroll = () => {
      const timelineRect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how far through the timeline we've scrolled
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;

      // Start filling when timeline top reaches 80% of viewport
      const startThreshold = viewportHeight * 0.8;
      // Finish filling when timeline bottom reaches 40% of viewport
      const scrolled = startThreshold - timelineTop;
      const totalRange = timelineHeight;

      const percentage = Math.min(Math.max(scrolled / totalRange, 0), 1);
      progress.style.transform = `scaleY(${percentage})`;

      // Animate individual dots based on their position
      dotRefs.current.forEach((dot) => {
        if (!dot) return;
        const dotRect = dot.getBoundingClientRect();
        if (dotRect.top < viewportHeight * 0.85) {
          dot.classList.add("scale-100", "opacity-100");
          dot.classList.remove("scale-0", "opacity-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <SectionHeading
        eyebrow="Experience"
        title="A practical engineering path across SaaS, mobile and commerce."
        description="The thread through the work is simple: build usable systems, wire them to real operations and keep them maintainable."
      />

      <div ref={timelineRef} className="mt-8 grid gap-4 relative lg:pl-8">
        {/* Background track line */}
        <div className="absolute top-8 bottom-8 left-[2px] w-[2px] bg-border/30 hidden lg:block rounded-full" aria-hidden="true" />
        {/* Animated progress line */}
        <div className="absolute top-8 bottom-8 left-[2px] w-[2px] hidden lg:block rounded-full overflow-hidden" aria-hidden="true">
          <div
            ref={progressRef}
            className="w-full h-full bg-gradient-to-b from-brand via-brand to-brand/40 origin-top transition-transform duration-100 ease-out"
            style={{ transform: "scaleY(0)" }}
          />
        </div>
        
        {experience.map((job, index) => (
          <article 
            key={`${job.company}-${job.period}`} 
            className={`${panelClass} ${revealClass} relative group`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            {/* Timeline dot */}
            <div 
              ref={(el) => { dotRefs.current[index] = el; }}
              className="absolute top-10 -left-[2.3rem] w-3.5 h-3.5 rounded-full bg-brand ring-4 ring-background shadow-[0_0_0_4px_rgba(var(--brand-rgb,59,130,246),0.15)] hidden lg:block z-10 scale-0 opacity-0 transition-all duration-500 ease-out" 
              aria-hidden="true" 
            />
            
            <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
              <div>
                <div className="flex items-center gap-1.5 text-brand font-bold text-[10px] uppercase tracking-wider mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{job.location}</span>
                </div>
                <h3 className="text-xl font-black tracking-tight text-foreground">{job.company}</h3>
                <p className="mt-1.5 text-[15px] font-bold text-foreground/80">{job.role}</p>
                <p className="mt-1 text-[13px] font-medium text-muted-foreground">{job.period}</p>
              </div>

              <ul className="grid gap-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground font-medium">
                    <CheckCircle2 className="mt-0.5 w-4 h-4 shrink-0 text-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
