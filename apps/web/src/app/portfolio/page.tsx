"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Calendar } from "lucide-react";
import { navItems } from "./data";
import { BackgroundElements } from "./_components/background-elements";
import { Header } from "./_components/header";
import { HeroSection } from "./_components/hero-section";
import { MetricsScorecard } from "./_components/metrics-scorecard";
import { AppsSection } from "./_components/apps-section";
import { ExperienceSection } from "./_components/experience-section";
import { SystemsSection } from "./_components/systems-section";
import { CodeDiffViewer } from "./_components/code-diff-viewer";
import { SkillsSection } from "./_components/skills-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { BlogsSection } from "./_components/blogs-section";
import { ContactSection } from "./_components/contact-section";
import { ParticleBackground } from "./_components/particle-background";
import { TerminalOverlay } from "./_components/terminal-overlay";
import { QuickConnectModal } from "./_components/quick-connect-modal";

export default function PortfolioPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [quickConnectOpen, setQuickConnectOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
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
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      if (process.env.NODE_ENV === "production") {
        navigator.serviceWorker.register("/sw.js").catch(() => {});
      } else {
        // Force unregister service worker & clear dev caches to stop reload loops
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) {
            registration.unregister();
          }
        });
        if ("caches" in window) {
          caches.keys().then((names) => {
            for (const name of names) {
              caches.delete(name);
            }
          });
        }
      }
    }
  }, []);

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
      <ParticleBackground />
      <Header scrollToSection={scrollToSection} />
      
      <HeroSection />
      
      {/* 1. Verified Metrics Scorecard */}
      {/* <MetricsScorecard /> */}
      
      <AppsSection />
      <ExperienceSection />
      <SystemsSection />
      
      {/* 2. Interactive Code & Architecture Diff Viewer */}
      <CodeDiffViewer />
      
      <SkillsSection />
      <TestimonialsSection />
      <BlogsSection />
      <ContactSection />
      
      <TerminalOverlay />

      {/* Quick Connect Interview Scheduling Trigger Button */}
      <button
        type="button"
        onClick={() => setQuickConnectOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-brand text-primary-foreground font-bold text-xs shadow-[0_10px_30px_hsla(var(--brand),0.35)] hover:scale-105 transition-all cursor-pointer group"
      >
        <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span>Book 15-Min Chat</span>
      </button>

      {/* Floating Back to Top Pill Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="fixed bottom-24 right-6 z-50 p-3.5 rounded-full bg-card border border-border/60 text-foreground shadow-lg hover:bg-muted transition-all cursor-pointer animate-in fade-in duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Quick Connect Modal */}
      <QuickConnectModal
        isOpen={quickConnectOpen}
        onClose={() => setQuickConnectOpen(false)}
      />
    </main>
  );
}
