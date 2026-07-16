import { BriefcaseBusiness } from "lucide-react";
import { education, panelClass, revealClass, systems } from "../data";
import { SectionHeading } from "./section-heading";

export function SystemsSection() {
  return (
    <section id="systems" className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className={`${panelClass} ${revealClass} flex flex-col`}>
          <SectionHeading
            eyebrow="Selected systems"
            title="Work that sounds boring until it saves a team six hours a week."
            description="I like this class of product: workflows, dashboards, permissions, mobile edge cases, and the little UX decisions that keep business users moving."
            compact
          />
          
          <div className="mt-6 pt-6">
            <div className="rounded-[20px] border border-border/60 bg-muted/40 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">Education</p>
              <h3 className="mt-2 text-lg font-black tracking-tight text-foreground">{education.school}</h3>
              <p className="mt-1.5 text-[14px] font-bold text-foreground/80">{education.degree}</p>
              <p className="mt-1 text-[13px] font-medium text-muted-foreground">
                {education.period} / {education.location}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {systems.map((system, index) => (
            <article 
              key={system.name} 
              className={`${panelClass} ${revealClass} flex items-start justify-between gap-4 hover:bg-muted/20 hover:border-border group`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand">{system.meta}</span>
                <h3 className="mt-2 text-xl font-black tracking-tight text-foreground">{system.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground font-medium">{system.detail}</p>
              </div>
              <div className="p-3 rounded-2xl bg-muted/50 border border-border/50 text-muted-foreground group-hover:text-brand group-hover:bg-brand/10 group-hover:border-brand/20 transition-all shrink-0">
                <BriefcaseBusiness className="w-5 h-5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
