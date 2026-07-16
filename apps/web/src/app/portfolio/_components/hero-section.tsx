import { Download, Mail, MapPin, Phone } from "lucide-react";
import { highlights, panelClass, profile, RESUME_URL, revealClass } from "../data";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 pt-10 sm:px-6 sm:pb-8 sm:pt-6 lg:px-8 relative z-10">
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div className={`${revealClass}`}>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand mb-4 bg-brand/10 px-3 py-1.5 rounded-full border border-brand/20">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-[0_0_8px_var(--brand)]" />
            Available for senior frontend / mobile roles
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.1] tracking-tight sm:text-6xl text-foreground">
            Product-minded engineer for apps that have to work in the field.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg font-medium">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a 
              href={RESUME_URL}
              download="JASHWANT_RANA_RESUME.pdf"
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold bg-brand text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] shadow-lg hover:bg-brand/90"
            >
              <Download className="w-5 h-5" />
              Download resume
            </a>
            <a 
              href={`mailto:${profile.email}`} 
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold text-foreground bg-background border border-border shadow-sm transition-all duration-300 hover:bg-muted hover:border-border hover:-translate-y-1"
            >
              Let&apos;s talk
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <aside className={`${panelClass} ${revealClass} delay-100 flex flex-col justify-between bg-gradient-to-br from-background/90 to-background/40 relative overflow-hidden`}>
          {/* Decorative background glow for card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] pointer-events-none" />
          
          <div className="flex flex-col h-full relative z-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  Resume snapshot
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground">{profile.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground font-medium">{profile.title}</p>
              </div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand/20 shadow-sm shrink-0">
                <Image 
                  src="/resume/jashwant_photo.webp" 
                  alt="Jashwant Rana" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-2 flex-1">
              <a href={`mailto:${profile.email}`} className="cursor-pointer flex items-center gap-3 text-[13px] font-semibold text-muted-foreground p-2.5 rounded-xl bg-background/50 border border-border/30 transition-all hover:text-foreground hover:border-border hover:bg-muted/80 hover:shadow-sm group">
                <Mail className="w-4 h-4 group-hover:text-brand transition-colors" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="cursor-pointer flex items-center gap-3 text-[13px] font-semibold text-muted-foreground p-2.5 rounded-xl bg-background/50 border border-border/30 transition-all hover:text-foreground hover:border-border hover:bg-muted/80 hover:shadow-sm group">
                <Phone className="w-4 h-4 group-hover:text-brand transition-colors" />
                {profile.phone}
              </a>
              <span className="flex items-center gap-3 text-[13px] font-semibold text-muted-foreground p-2.5 rounded-xl bg-background/50 border border-border/30">
                <MapPin className="w-4 h-4" />
                {profile.location}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {highlights.map((item) => (
                <div key={item.label} className="flex flex-col justify-center p-3 bg-background/60 rounded-xl border border-border/40 text-center shadow-sm hover:border-brand/30 transition-colors">
                  <strong className="text-xl font-black leading-none text-foreground">{item.value}</strong>
                  <span className="mt-1 text-[10px] font-semibold text-muted-foreground leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
