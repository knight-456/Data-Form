"use client";

import React, { useState, useEffect } from "react";
import { Quote, Star, UserCheck } from "lucide-react";
import { testimonials, panelClass, revealClass } from "../data";
import { SectionHeading } from "./section-heading";
import { SpotlightCard } from "./spotlight-card";

export function TestimonialsSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Extended cards array for seamless infinite sliding loop (3 full sets)
  const infiniteCards = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setSlideIndex((prev) => prev + 1);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  // When reaching the first set's loop end (index = 4), reset to 0 seamlessly after transition
  useEffect(() => {
    if (slideIndex === testimonials.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setSlideIndex(0);
      }, 550);

      return () => clearTimeout(timer);
    }
  }, [slideIndex]);

  const activeDotIndex = slideIndex % testimonials.length;

  const goToSlide = (targetIndex: number) => {
    setIsTransitioning(true);
    setSlideIndex(targetIndex);
  };

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <SectionHeading
        eyebrow="Peer Endorsements"
        title="Validated by teammates, backend engineers & senior leads."
        description="Here is what colleagues and engineers I've worked with say about my code quality, technical ownership, and mentorship."
      />

      {/* DESKTOP VIEW: Infinite Sliding Loop Track (3 Cards Visible per View) */}
      <div className="hidden lg:block mt-6 relative overflow-hidden">
        <div className="overflow-hidden rounded-[24px]">
          <div
            className={`flex gap-6 ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
            style={{
              transform: `translateX(-${slideIndex * (100 / 3 + 2 / 3)}%)`,
            }}
          >
            {infiniteCards.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="w-[calc(33.333%-16px)] shrink-0">
                <SpotlightCard
                  spotlightColor="rgba(59, 130, 246, 0.18)"
                  className={`${panelClass} relative flex flex-col justify-between border border-border/40 p-6 rounded-[24px] hover:border-brand/40 transition-all duration-300 group h-full`}
                >
                  {/* Background Decorative Quote Watermark */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-foreground/5 pointer-events-none group-hover:text-brand/10 transition-colors duration-300" />

                  <div>
                    {/* Header: Avatar, Name, Role & Endorsement Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.gradient} text-white font-black text-xs flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300`}
                        >
                          {item.initials}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-foreground group-hover:text-brand transition-colors duration-300 flex items-center gap-1.5">
                            {item.name}
                            <UserCheck className="w-3.5 h-3.5 text-brand shrink-0" />
                          </h3>
                          <p className="text-[11px] font-semibold text-muted-foreground line-clamp-1">{item.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand/10 text-brand border border-brand/20">
                        {item.relationship}
                      </span>
                      {/* Verified Endorsement Stars */}
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Quote Content */}
                    <blockquote className="text-xs leading-relaxed text-muted-foreground font-medium italic relative z-10 mb-6 line-clamp-4">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Endorsed Competencies */}
                  <div className="pt-3 border-t border-border/30 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9.5px] font-bold px-2.5 py-1 rounded-md bg-muted/80 text-muted-foreground border border-border/50 shadow-sm"
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === index
                  ? "w-8 bg-brand shadow-[0_0_12px_var(--brand)]"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to testimonial slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* MOBILE & TABLET VIEW: Normal Cards Grid */}
      <div className="lg:hidden mt-6 grid gap-6 sm:grid-cols-2">
        {testimonials.map((item, index) => (
          <SpotlightCard
            key={item.id}
            spotlightColor="rgba(59, 130, 246, 0.18)"
            className={`${panelClass} ${revealClass} relative flex flex-col justify-between border border-border/40 p-6 rounded-[24px] hover:border-brand/40 transition-all duration-300 group`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            {/* Background Decorative Quote Watermark */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-foreground/5 pointer-events-none group-hover:text-brand/10 transition-colors duration-300" />

            <div>
              {/* Header: Avatar, Name, Role & Endorsement Badge */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} text-white font-black text-sm flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-brand transition-colors duration-300 flex items-center gap-2">
                      {item.name}
                      <UserCheck className="w-4 h-4 text-brand shrink-0" />
                    </h3>
                    <p className="text-xs font-semibold text-muted-foreground">{item.role}</p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand/10 text-brand border border-brand/20 shrink-0">
                  {item.relationship}
                </span>
              </div>

              {/* Verified Endorsement Stars */}
              <div className="flex items-center gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-[11px] font-bold text-muted-foreground ml-1.5">5.0 Verified Peer</span>
              </div>

              {/* Quote Content */}
              <blockquote className="text-sm leading-relaxed text-muted-foreground font-medium italic relative z-10 mb-6">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </div>

            {/* Endorsed Competencies */}
            <div className="pt-4 border-t border-border/30 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-muted/80 text-muted-foreground border border-border/50 shadow-sm"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
