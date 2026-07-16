"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Moon,
  Phone,
  Play,
  Smartphone,
  Sun,
  UserRound,
} from "lucide-react";

import "./portfolio.css";

const RESUME_URL = "/resume/JASHWANT_RANA_2026-07-07.pdf";
const RESUME_FILE_NAME = "JASHWANT_RANA_2026-07-07.pdf";
const THEME_STORAGE_KEY = "portfolio-theme-mode";

type ThemeMode = "light" | "dark" | "system";

const profile = {
  name: "Jashwant Rana",
  title: "Senior Software Engineer",
  email: "ranajashwant24@gmail.com",
  phone: "7455916166",
  location: "Dehradun, India",
  address: "36/1, Shastri Nagar, Seemadwar, Dehradun",
  linkedin: "https://linkedin.com/in/ranajashwant",
  summary:
    "I build the operational software teams open every morning: attendance apps, CRM/HRMS platforms, field dashboards, commerce flows and mobile products shipped to the Play Store.",
};

const navItems = [
  { label: "Apps", id: "apps" },
  { label: "Experience", id: "experience" },
  { label: "Systems", id: "systems" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

const highlights = [
  { value: "4+", label: "years building production products" },
  { value: "3", label: "Android apps built from scratch" },
  { value: "B2B + B2C", label: "SaaS, HRMS, commerce and field ops" },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3 / Sass"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Android delivery", "Biometrics", "Geolocation", "Google Maps API"],
  },
  {
    title: "State and data",
    items: ["Redux Toolkit", "TanStack Query", "React Query", "WebSockets", "REST APIs"],
  },
  {
    title: "Quality and delivery",
    items: ["Firebase", "GitHub Actions", "CI/CD", "Jest", "Code reviews", "Git workflows"],
  },
];

const experience = [
  {
    company: "Winshitech IT Solutions Pvt Ltd",
    location: "Janakpuri, New Delhi",
    role: "Senior Software Engineer",
    period: "Jan 2025 - Jun 2026",
    points: [
      "Architected a dual-app React Native workforce ecosystem with liveness facial checks and battery-aware geolocation.",
      "Built a multi-tenant CRM/HRMS SaaS platform with WhatsApp and Facebook API integrations for centralized business communication.",
      "Reduced mobile latency by cleaning up Redux state flow and moving live operational views to WebSocket-powered dashboards.",
      "Led developers through SDLC, CI/CD pipelines, Jest testing and code reviews while keeping delivery velocity stable.",
      "Developed a Dental Practice Management System from patient inquiry to clinical treatment and lab manufacturing workflows.",
    ],
  },
  {
    company: "Edulyte Marketplace Pvt Ltd",
    location: "Greater Noida",
    role: "Software Developer",
    period: "Aug 2022 - Jan 2025",
    points: [
      "Engineered a high-performance B2C e-commerce platform with Next.js, Core Web Vitals and SEO as first-class concerns.",
      "Developed enterprise analytics portals with role-based access control and real-time business intelligence views.",
      "Built a React Native Android application with REST API synchronization and mobile-first user flows.",
      "Worked closely with backend teams to integrate complex frontend architecture with scalable microservices.",
      "Improved maintainability through code reviews, reusable UI patterns and stronger implementation standards.",
    ],
  },
  {
    company: "Early Career",
    location: "India",
    role: "Graduate Developer",
    period: "Jan 2022 - Aug 2022",
    points: [
      "Built modular UI components using JavaScript, HTML5 and CSS3 with brand-aligned implementation.",
      "Resolved launch-stage bugs and contributed to documentation and version-control workflows.",
    ],
  },
];

const mobileApps = [
  {
    name: "LeadsForce360 - Your Smart Ops",
    packageName: "com.leadsforce360.ops",
    description:
      "Operations platform for lead management, WhatsApp communication, attendance, visits, tasks and team dashboards.",
    link: "https://play.google.com/store/apps/details?id=com.leadsforce360.ops",
    tags: ["React Native", "Field ops", "Dashboards", "WhatsApp APIs"],
  },
  {
    name: "LeadsForce Attendance",
    packageName: "com.leadsforce.attendance",
    description:
      "Workforce attendance app with location-aware punch flows, employee tracking and daily operational visibility.",
    link: "https://play.google.com/store/apps/details?id=com.leadsforce.attendance",
    tags: ["React Native", "Geolocation", "Biometrics", "Workforce"],
  },
  {
    name: "Winish Trends",
    packageName: "com.winishtrends",
    description:
      "Mobile commerce experience built from scratch with clean product flows, Android delivery and API integration.",
    link: "https://play.google.com/store/apps/details?id=com.winishtrends",
    tags: ["React Native", "E-commerce", "REST APIs", "Android"],
  },
];

const systems = [
  {
    name: "Multi-tenant CRM / HRMS SaaS",
    detail:
      "Tenant-safe enterprise communication and workforce operations with WhatsApp/Facebook workflows, dashboards and role-driven access.",
    meta: "SaaS architecture",
  },
  {
    name: "Dental Practice Management System",
    detail:
      "Healthcare workflow automation from patient inquiry to treatment tracking and lab manufacturing coordination.",
    meta: "Healthcare ops",
  },
  {
    name: "B2C E-commerce Platform",
    detail:
      "Next.js storefront tuned for SEO, Core Web Vitals and fast consumer purchase journeys.",
    meta: "Commerce",
  },
];

const education = {
  school: "THDC Institute of Hydropower Engineering and Technology",
  degree: "Bachelor of Technology",
  period: "2017 - 2021",
  location: "New Tehri",
};

function useResolvedTheme(mode: ThemeMode) {
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => setSystemTheme(media.matches ? "dark" : "light");

    updateTheme();
    media.addEventListener("change", updateTheme);

    return () => media.removeEventListener("change", updateTheme);
  }, []);

  return mode === "system" ? systemTheme : mode;
}

function getSavedThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "system";

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
    return savedTheme;
  }

  return "system";
}

export default function PortfolioPage() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const resolvedTheme = useResolvedTheme(themeMode);

  useEffect(() => {
    setThemeMode(getSavedThemeMode());
  }, []);

  const themeOptions = useMemo(
    () => [
      { value: "light" as const, label: "Light", icon: Sun },
      { value: "dark" as const, label: "Dark", icon: Moon },
      { value: "system" as const, label: "System", icon: UserRound },
    ],
    [],
  );

  const handleThemeModeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
  };

  const scrollToSection = (sectionId: (typeof navItems)[number]["id"] | "top") => {
    const element = document.getElementById(sectionId);

    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });

    if (sectionId === "top") {
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }

    window.history.replaceState(null, "", `#${sectionId}`);
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = RESUME_FILE_NAME;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <main
      id="top"
      data-theme={resolvedTheme}
      className="portfolio-shell min-h-screen overflow-hidden"
    >
      <div className="pf-bg-grid" aria-hidden="true" />
      <div className="pf-orb pf-orb-one" aria-hidden="true" />
      <div className="pf-orb pf-orb-two" aria-hidden="true" />

      <header className="pf-header">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="pf-brand group"
            aria-label="Scroll to top"
          >
            <span className="pf-logo">JR</span>
            <span className="hidden text-left sm:block">
              <span className="block text-sm font-semibold">{profile.name}</span>
              <span className="block text-xs opacity-70">{profile.title}</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Portfolio sections">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="pf-nav-button"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="pf-theme-switch" aria-label="Theme selector">
              {themeOptions.map((option) => {
                const Icon = option.icon;

                return (
                  <button
                    key={option.value}
                    type="button"
                    className="pf-theme-button"
                    data-active={themeMode === option.value}
                    onClick={() => handleThemeModeChange(option.value)}
                    aria-pressed={themeMode === option.value}
                    title={`${option.label} theme`}
                  >
                    <Icon className="size-4" />
                    <span className="hidden sm:inline">{option.label}</span>
                  </button>
                );
              })}
            </div>

            <button type="button" onClick={handleResumeDownload} className="pf-small-resume">
              <Download className="size-4" />
              <span className="hidden sm:inline">Resume</span>
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="pf-reveal">
            <div className="pf-eyebrow">
              <span className="pf-live-dot" />
              Available for senior frontend / mobile roles
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              Product-minded engineer for apps that have to work in the field.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 opacity-80 sm:text-xl">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={handleResumeDownload} className="pf-primary-action">
                <Download className="size-5" />
                Download resume
              </button>
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="pf-secondary-action">
                View resume PDF
                <ExternalLink className="size-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="pf-secondary-action">
                Let&apos;s talk
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <aside className="pf-panel pf-hero-card pf-reveal pf-delay-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] opacity-60">
                  Resume snapshot
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">{profile.name}</h2>
                <p className="mt-1 opacity-70">{profile.title}</p>
              </div>
              <div className="pf-phone-badge">
                <Smartphone className="size-6" />
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              <a href={`mailto:${profile.email}`} className="pf-contact-row">
                <Mail className="size-4" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="pf-contact-row">
                <Phone className="size-4" />
                {profile.phone}
              </a>
              <span className="pf-contact-row">
                <MapPin className="size-4" />
                {profile.location}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {highlights.map((item) => (
                <div key={item.label} className="pf-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="apps" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Published Android apps"
          title="Three Play Store products, built from zero to shipped."
          description="These are not concept cards. They are real apps with production packages and store links."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {mobileApps.map((app, index) => (
            <article key={app.packageName} className={`pf-panel pf-app-card pf-reveal pf-delay-${index + 1}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="pf-app-icon">
                  <Play className="size-5 fill-current" />
                </div>
                <span className="pf-built-pill">Built from scratch</span>
              </div>

              <h3 className="mt-6 text-2xl font-black tracking-[-0.04em]">{app.name}</h3>
              <p className="mt-2 text-sm opacity-60">{app.packageName}</p>
              <p className="mt-4 leading-7 opacity-78">{app.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span key={tag} className="pf-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={app.link} target="_blank" rel="noreferrer" className="pf-card-link">
                Open on Play Store
                <ArrowUpRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="A practical engineering path across SaaS, mobile and commerce."
          description="The thread through the work is simple: build usable systems, wire them to real operations and keep them maintainable."
        />

        <div className="mt-8 grid gap-5">
          {experience.map((job, index) => (
            <article key={`${job.company}-${job.period}`} className={`pf-panel pf-timeline-card pf-reveal pf-delay-${index + 1}`}>
              <div className="pf-timeline-mark" aria-hidden="true" />
              <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
                <div>
                  <div className="flex items-center gap-2 opacity-70">
                    <Building2 className="size-4" />
                    <span className="text-sm font-semibold">{job.location}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">{job.company}</h3>
                  <p className="mt-2 font-semibold">{job.role}</p>
                  <p className="mt-1 text-sm opacity-60">{job.period}</p>
                </div>

                <ul className="grid gap-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7 opacity-82">
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-[var(--pf-accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="systems" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="pf-panel pf-reveal">
            <SectionHeading
              eyebrow="Selected systems"
              title="Work that sounds boring until it saves a team six hours a week."
              description="I like this class of product: workflows, dashboards, permissions, mobile edge cases, and the little UX decisions that keep business users moving."
              compact
            />
            <div className="mt-8 rounded-[2rem] border border-[var(--pf-line)] bg-[var(--pf-soft)] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] opacity-60">Education</p>
              <h3 className="mt-3 text-xl font-black tracking-[-0.03em]">{education.school}</h3>
              <p className="mt-2 opacity-75">{education.degree}</p>
              <p className="mt-1 text-sm opacity-60">
                {education.period} / {education.location}
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {systems.map((system, index) => (
              <article key={system.name} className={`pf-panel pf-system-card pf-reveal pf-delay-${index + 1}`}>
                <div>
                  <span className="pf-system-meta">{system.meta}</span>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">{system.name}</h3>
                  <p className="mt-3 leading-7 opacity-78">{system.detail}</p>
                </div>
                <BriefcaseBusiness className="size-8 opacity-35" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Focused stack, production habits."
          description="React, Next.js and React Native are the center of gravity; the rest of the stack supports shipping dependable products."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <article key={group.title} className={`pf-panel pf-skill-card pf-reveal pf-delay-${index + 1}`}>
              <h3 className="text-xl font-black tracking-[-0.04em]">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="pf-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 pb-20 sm:px-6 lg:px-8">
        <div className="pf-panel pf-contact-panel pf-reveal">
          <div>
            <p className="pf-eyebrow">Contact</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.055em] sm:text-6xl">
              If the role needs frontend craft and mobile ownership, I&apos;d like to hear about it.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 opacity-78">
              Based in {profile.location}. Resume, email and phone links are wired below so recruiters or hiring teams can move quickly.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${profile.email}`} className="pf-primary-action">
              <Mail className="size-5" />
              Email Jashwant
            </a>
            <a href={`tel:${profile.phone}`} className="pf-secondary-action">
              <Phone className="size-4" />
              Call
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pf-secondary-action">
              LinkedIn
              <ExternalLink className="size-4" />
            </a>
            <button type="button" onClick={handleResumeDownload} className="pf-secondary-action">
              <Download className="size-4" />
              Download resume
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "pf-reveal"}>
      <p className="pf-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-8 opacity-75">{description}</p>
    </div>
  );
}
