import { Download, ExternalLink, Mail, Phone } from "lucide-react";
import { panelClass, profile, RESUME_URL, revealClass } from "../data";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-5 pb-8 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <div className={`${panelClass} ${revealClass} flex flex-col items-center text-center px-6 py-16 sm:p-20 bg-gradient-to-b from-background/80 to-transparent`}>
        <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand mb-4 bg-brand/10 px-3 py-1.5 rounded-full border border-brand/20">
          Contact
        </p>
        <h2 className="max-w-3xl text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl text-foreground">
          If the role needs frontend craft and mobile ownership, I&apos;d like to hear about it.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground font-medium">
          Based in {profile.location}. Resume, email and phone links are wired below so recruiters or hiring teams can move quickly.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap justify-center w-full sm:w-auto">
          <a 
            href={`mailto:${profile.email}`} 
            className="cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold bg-brand text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] shadow-lg hover:bg-brand/90"
          >
            <Mail className="w-4 h-4" />
            Email Jashwant
          </a>
          <a 
            href={`tel:${profile.phone}`} 
            className="cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold text-foreground bg-background border border-border shadow-sm transition-all duration-300 hover:bg-muted hover:border-border hover:-translate-y-1"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <a 
            href={profile.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold text-foreground bg-background border border-border shadow-sm transition-all duration-300 hover:bg-muted hover:border-border hover:-translate-y-1"
          >
            LinkedIn
            <ExternalLink className="w-4 h-4" />
          </a>
          <a 
            href={RESUME_URL}
            download="JASHWANT_RANA_RESUME.pdf"
            className="cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold text-foreground bg-background border border-border shadow-sm transition-all duration-300 hover:bg-muted hover:border-border hover:-translate-y-1 hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
