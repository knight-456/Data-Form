import { panelClass, revealClass, skillGroups } from "../data";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <SectionHeading
        eyebrow="Technical toolkit"
        title="Focused stack, production habits."
        description="React, Next.js and React Native are the center of gravity; the rest of the stack supports shipping dependable products."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <article 
            key={group.title} 
            className={`${panelClass} ${revealClass}`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            <h3 className="text-lg font-black tracking-tight text-foreground">{group.title}</h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span key={item} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-muted/80 text-muted-foreground border border-border/50 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* <div className={`mt-16 flex flex-col items-center w-full ${revealClass}`}>
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-brand mb-6 text-center">Open Source Consistency</h3>
        <div className={`${panelClass} w-full max-w-4xl overflow-x-auto custom-scrollbar p-6 flex justify-center border-border/50 hover:shadow-brand/5 hover:border-brand/20`}>
          <img 
            src="https://ghchart.rshah.org/2563eb/ranajashwant" 
            alt="Github Contributions" 
            className="w-full max-w-[800px] min-w-[600px] dark:opacity-80 dark:hue-rotate-180 dark:invert transition-all hover:scale-[1.02] duration-300"
          />
        </div>
      </div> */}
    </section>
  );
}
