"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { BookOpen, Clock, X, ExternalLink, Sparkles } from "lucide-react";
import { blogs, panelClass, revealClass, TBlog } from "../data";
import { SectionHeading } from "./section-heading";
import { SpotlightCard } from "./spotlight-card";
import { StateSimulator } from "./state-simulator";

export function BlogsSection() {
  const [activeBlog, setActiveBlog] = useState<TBlog | null>(null);
  const [mounted, setMounted] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll lock background page when modal is active
  useEffect(() => {
    if (activeBlog) {
      document.body.style.overflow = "hidden";
      setReadProgress(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeBlog]);

  const handleModalScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const totalHeight = el.scrollHeight - el.clientHeight;
    if (totalHeight > 0) {
      const current = (el.scrollTop / totalHeight) * 100;
      setReadProgress(Math.min(100, Math.max(0, current)));
    }
  };

  const formatInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-extrabold text-foreground font-sans">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const renderMarkdown = (text: string) => {
    const lines = text.split("\n");
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = (key: string | number) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${key}`} className="list-disc pl-6 my-4 space-y-2 text-muted-foreground text-[14.5px] leading-relaxed font-serif">
            {listItems.map((item, i) => (
              <li key={i}>{formatInline(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    let inCodeBlock = false;
    let codeContent: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Handle Code Blocks
      if (trimmed.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${i}`} className="bg-[#0f1115] p-4 rounded-xl border border-white/10 overflow-x-auto text-[12.5px] font-mono my-5 text-gray-200 leading-normal">
              <code>{codeContent.join("\n")}</code>
            </pre>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          flushList(i);
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        continue;
      }

      // Handle Headings
      if (trimmed.startsWith("### ")) {
        flushList(i);
        const headingText = trimmed.replace("### ", "");
        const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        elements.push(
          <h3 id={headingId} key={`h3-${i}`} className="text-[18px] font-black mt-8 mb-3 text-foreground tracking-tight font-sans scroll-mt-6">
            {headingText}
          </h3>
        );
        continue;
      }

      // Handle Blockquotes
      if (trimmed.startsWith("> ")) {
        flushList(i);
        elements.push(
          <blockquote key={`quote-${i}`} className="border-l-4 border-brand bg-muted/40 p-4 rounded-r-xl italic text-muted-foreground my-5 pl-4 text-[15px] font-serif">
            {formatInline(trimmed.replace("> ", ""))}
          </blockquote>
        );
        continue;
      }

      // Handle Lists
      if (trimmed.startsWith("* ")) {
        listItems.push(trimmed.replace("* ", ""));
        continue;
      }

      // Handle Empty spacing lines
      if (trimmed === "") {
        flushList(i);
        continue;
      }

      // Standard paragraphs
      flushList(i);
      elements.push(
        <p key={`p-${i}`} className="text-[15.5px] leading-relaxed text-muted-foreground my-4 font-serif">
          {formatInline(trimmed)}
        </p>
      );
    }

    flushList("end");
    return elements;
  };

  return (
    <section id="blogs" className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 relative z-10 scroll-mt-20">
      <SectionHeading
        eyebrow="Published on Medium"
        title="Bespoke articles on production mobile architecture & background location."
        description="I write about multi-step permissions, fighting OEM task killers, Android 13 notification requirements, self-healing watchdogs, and state machine persistence."
      />

      {/* Grid of Article Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post, index) => (
          <SpotlightCard
            key={post.slug}
            spotlightColor="rgba(59, 130, 246, 0.16)"
            className={`${panelClass} ${revealClass} flex flex-col justify-between h-full group bg-card border border-border/40 p-6 rounded-[24px] hover:border-brand/40 hover:shadow-[0_12px_40px_hsla(var(--brand),0.12)] transition-all duration-300`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            <div>
              {/* Category tag & Read Time */}
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand mb-3">
                <span>{post.tags[0]}</span>
                <span className="text-muted-foreground/30">•</span>
                <span className="text-muted-foreground flex items-center gap-1 font-semibold normal-case">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
                {post.interactiveSimulator && (
                  <span className="ml-auto inline-flex items-center gap-1 text-[9px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    <Sparkles className="w-2.5 h-2.5" />
                    Live Demo Inside
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-black tracking-tight text-foreground group-hover:text-brand transition-colors duration-300 leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-muted-foreground font-medium line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            {/* Footer actions */}
            <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between gap-2">
              <button
                onClick={() => setActiveBlog(post)}
                className="cursor-pointer text-[12.5px] font-bold text-foreground group-hover:text-brand flex items-center gap-1.5 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Read Article
              </button>

              {post.mediumUrl && (
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer text-[12px] font-bold text-muted-foreground hover:text-brand flex items-center gap-1 transition-colors"
                >
                  Medium
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Reader Overlay Dialog - Portal to body */}
      {activeBlog && mounted && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-3xl bg-card border border-border rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col max-h-[90vh] relative animate-in zoom-in-95 duration-200">
            
            {/* Reading Progress Line */}
            <div className="w-full h-1 bg-muted/60 overflow-hidden">
              <div
                className="h-full bg-brand transition-all duration-75"
                style={{ width: `${readProgress}%` }}
              />
            </div>

            {/* Author Profile Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-muted/65 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand/20 bg-muted/80 shrink-0">
                  <img
                    src="/resume/jashwant_photo.webp"
                    alt="Jashwant Rana"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left font-sans">
                  <span className="block text-sm font-black text-foreground">Jashwant Rana</span>
                  <span className="block text-[11px] text-muted-foreground font-semibold">
                    {activeBlog.date} • {activeBlog.readTime}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {activeBlog.mediumUrl && (
                  <a
                    href={activeBlog.mediumUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-xs font-bold px-3 py-1.5 rounded-full bg-brand/10 text-brand border border-brand/20 hover:bg-brand hover:text-white transition-all flex items-center gap-1.5"
                  >
                    <span>Read on Medium</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActiveBlog(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-border/60 cursor-pointer"
                  title="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Reading Column */}
            <div
              ref={scrollContainerRef}
              onScroll={handleModalScroll}
              className="flex-1 p-6 md:p-10 overflow-y-auto select-text font-serif"
            >
              <div className="max-w-2xl mx-auto w-full">
                {/* Category Tags */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {activeBlog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Article Title */}
                <h2 className="text-2xl md:text-3.5xl font-black tracking-tight text-foreground font-sans mb-6 leading-tight">
                  {activeBlog.title}
                </h2>

                {/* Optional Interactive Simulator Widget */}
                {activeBlog.interactiveSimulator && (
                  <div className="font-sans mb-8">
                    <StateSimulator />
                  </div>
                )}

                {/* Styled Article Content */}
                <div className="border-t border-border/30 pt-4 text-foreground/90">
                  {renderMarkdown(activeBlog.content)}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
