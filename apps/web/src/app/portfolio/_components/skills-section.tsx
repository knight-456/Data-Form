import { panelClass, revealClass, skillGroups } from "../data";
import { SectionHeading } from "./section-heading";
import { GithubCalendar } from "./github-calendar";
import { SpotlightCard } from "./spotlight-card";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <SectionHeading
        eyebrow="Technical toolkit"
        title="Focused stack, production habits."
        description="React, Next.js 15 and React Native are the center of gravity; the rest of the stack supports shipping dependable products."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <SpotlightCard
            key={group.title}
            spotlightColor="rgba(59, 130, 246, 0.15)"
            className={`${panelClass} ${revealClass} p-6 rounded-[24px] border border-border/40 hover:border-brand/40 transition-all`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            <h3 className="text-lg font-black tracking-tight text-foreground">{group.title}</h3>
            <div className="mt-6 flex flex-wrap gap-2 text-wrap">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-muted/80 text-muted-foreground border border-border/50 shadow-sm hover:text-foreground hover:border-brand/30 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>

      <div className={`mt-16 flex flex-col items-center w-full ${revealClass}`}>
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-brand mb-6 text-center">
          Open Source Consistency
        </h3>
        <SpotlightCard
          spotlightColor="rgba(59, 130, 246, 0.12)"
          className={`${panelClass} w-full max-w-4xl p-6 rounded-[24px] border-border/50 hover:shadow-[0_8px_30px_hsla(var(--brand),0.08)] hover:border-brand/30`}
        >
          <GithubCalendar />
        </SpotlightCard>
      </div>
    </section>
  );
}
