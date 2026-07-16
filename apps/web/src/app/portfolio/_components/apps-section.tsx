import { ArrowUpRight, Play } from "lucide-react";
import { mobileApps, panelClass, revealClass } from "../data";
import { SectionHeading } from "./section-heading";

export function AppsSection() {
  return (
    <section id="apps" className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <SectionHeading
        eyebrow="Published Android apps"
        title="Three Play Store products, built from zero to shipped."
        description="These are not concept cards. They are real apps with production packages and store links."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {mobileApps.map((app, index) => (
          <article 
            key={app.packageName} 
            className={`${panelClass} ${revealClass} relative overflow-hidden group hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_12px_40px_rgba(var(--brand-rgb),0.1)]`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            {/* Video Background Layer */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-black/75 z-10" />
              <video 
                src={app.videoUrl} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            
            <div className="relative z-10 h-full flex flex-col group-hover:text-white transition-colors duration-500">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-foreground text-background shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand/10 text-brand border border-brand/20 group-hover:bg-brand/50 group-hover:text-white group-hover:border-white/20 transition-colors">
                  Built from scratch
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-black tracking-tight text-foreground group-hover:text-white">{app.name}</h3>
              <p className="mt-1 text-xs font-medium text-muted-foreground group-hover:text-white/70">{app.packageName}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-medium group-hover:text-white/90 flex-1">{app.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-muted/80 text-muted-foreground border border-border/50 shadow-sm group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={app.link} target="_blank" rel="noreferrer" className="cursor-pointer inline-flex items-center gap-1.5 mt-6 text-[13px] font-bold text-foreground transition-all group-hover:text-brand-light hover:text-brand group/link">
                Open on Play Store
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
