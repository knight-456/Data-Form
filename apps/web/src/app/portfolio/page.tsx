"use client";

import { useEffect } from "react";

import { navItems } from "./data";
import { BackgroundElements } from "./_components/background-elements";
import { Header } from "./_components/header";
import { HeroSection } from "./_components/hero-section";
import { AppsSection } from "./_components/apps-section";
import { ExperienceSection } from "./_components/experience-section";
import { SystemsSection } from "./_components/systems-section";
import { SkillsSection } from "./_components/skills-section";
import { ContactSection } from "./_components/contact-section";
// import { ParticleBackground } from "./_components/particle-background";
import { TerminalOverlay } from "./_components/terminal-overlay";

export default function PortfolioPage() {
  const scrollToSection = (sectionId: (typeof navItems)[number]["id"] | "top") => {
    const element = document.getElementById(sectionId);

    if (!element) return;

    // Adjust for sticky header height
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    if (sectionId === "top") {
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }

    window.history.replaceState(null, "", `#${sectionId}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight) {
            entry.target.setAttribute("data-animate", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      // Trigger as soon as 1px is visible, with a small leading margin
      { threshold: 0, rootMargin: "100px 0px 0px 0px" }
    );

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <main
      id="top"
      className="relative min-h-screen font-sans text-foreground selection:bg-brand/20 selection:text-brand pb-8"
    >
      <BackgroundElements />
      {/* <ParticleBackground /> */}
      <Header scrollToSection={scrollToSection} />
      <HeroSection />
      <AppsSection />
      <ExperienceSection />
      <SystemsSection />
      <SkillsSection />
      <ContactSection />
      <TerminalOverlay />
    </main>
  );
}
