import React from "react";

export default function PortfolioLoading() {
  return (
    <div className="relative min-h-screen bg-background text-foreground pb-8 overflow-hidden select-none">
      {/* Ambient background glow overlays */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-brand/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-brand/5 rounded-full blur-[100px]" />

      {/* Header Skeleton */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-muted animate-pulse shrink-0" />
            <div className="hidden sm:block text-left space-y-1">
              <div className="h-4 w-28 bg-muted/80 animate-pulse rounded-md" />
              <div className="h-3 w-36 bg-muted/60 animate-pulse rounded-md" />
            </div>
          </div>

          {/* Navigation Links Placeholder */}
          <div className="hidden lg:flex items-center gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-4 w-16 bg-muted/70 animate-pulse rounded-full" />
            ))}
          </div>

          {/* Header Action Tools Placeholders */}
          <div className="flex items-center gap-3">
            <div className="w-24 h-8 bg-muted/60 animate-pulse rounded-full" />
            <div className="w-20 h-8 bg-muted/60 animate-pulse rounded-full" />
          </div>
        </div>
      </header>

      {/* Main Skeleton Content */}
      <main className="mx-auto max-w-7xl px-4 pb-4 pt-10 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO SECTION SKELETON */}
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          {/* Left Column: Hero Text */}
          <div className="text-left flex flex-col justify-end h-full">
            <div className="w-64 h-7 bg-brand/10 animate-pulse rounded-full mb-6 border border-brand/20" />
            <div className="w-full h-11 bg-muted/80 animate-pulse rounded-xl mb-3" />
            <div className="w-11/12 h-11 bg-muted/80 animate-pulse rounded-xl mb-3" />
            <div className="w-4/5 h-11 bg-muted/80 animate-pulse rounded-xl mb-6" />
            <div className="w-full h-5 bg-muted/50 animate-pulse rounded-md mb-2" />
            <div className="w-11/12 h-5 bg-muted/50 animate-pulse rounded-md mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="w-full sm:w-44 h-12 bg-brand/75 animate-pulse rounded-full" />
              <div className="w-full sm:w-36 h-12 bg-muted/70 animate-pulse rounded-full" />
            </div>
          </div>

          {/* Right Column: Profile Card */}
          <div className="bg-background/70 border border-border/40 rounded-[24px] p-6 backdrop-blur-xl shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="w-28 h-3.5 bg-brand/30 animate-pulse rounded-full mb-2" />
                <div className="w-40 h-7 bg-muted/80 animate-pulse rounded-md" />
                <div className="w-32 h-4 bg-muted/60 animate-pulse rounded-md mt-1" />
              </div>
              <div className="w-16 h-16 rounded-full bg-muted/70 animate-pulse shrink-0 border-2 border-brand/20" />
            </div>

            <div className="space-y-3 mb-6">
              <div className="w-full h-10 bg-muted/50 animate-pulse rounded-xl" />
              <div className="w-full h-10 bg-muted/50 animate-pulse rounded-xl" />
              <div className="w-full h-10 bg-muted/50 animate-pulse rounded-xl" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-muted/60 animate-pulse rounded-xl" />
              ))}
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="mt-16 w-full h-px bg-border/30" />

        {/* APPS SECTION SKELETON */}
        <div className="mt-12">
          <div className="w-32 h-4 bg-brand/30 animate-pulse rounded-full mb-3" />
          <div className="w-72 h-8 bg-muted/85 animate-pulse rounded-md mb-8" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border/40 rounded-[24px] p-6 bg-muted/20 h-72 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-muted/80 animate-pulse" />
                    <div className="w-24 h-6 rounded-full bg-brand/10 animate-pulse" />
                  </div>
                  <div className="w-48 h-6 bg-muted/85 animate-pulse rounded-md mb-2" />
                  <div className="w-28 h-3.5 bg-muted/50 animate-pulse rounded-md mb-4" />
                  <div className="w-full h-4 bg-muted/50 animate-pulse rounded-md mb-1.5" />
                  <div className="w-4/5 h-4 bg-muted/50 animate-pulse rounded-md" />
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border/30">
                  <div className="w-20 h-4 bg-muted/70 animate-pulse rounded-md" />
                  <div className="w-24 h-4 bg-muted/70 animate-pulse rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOGS SECTION SKELETON */}
        <div className="mt-16">
          <div className="w-32 h-4 bg-brand/30 animate-pulse rounded-full mb-3" />
          <div className="w-80 h-8 bg-muted/85 animate-pulse rounded-md mb-8" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border/40 rounded-[24px] p-6 bg-muted/20 h-64 flex flex-col justify-between">
                <div>
                  <div className="w-24 h-4 bg-brand/20 animate-pulse rounded-md mb-3" />
                  <div className="w-full h-6 bg-muted/85 animate-pulse rounded-md mb-3" />
                  <div className="w-full h-4 bg-muted/50 animate-pulse rounded-md mb-1.5" />
                  <div className="w-5/6 h-4 bg-muted/50 animate-pulse rounded-md" />
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border/30">
                  <div className="w-24 h-3.5 bg-muted/60 animate-pulse rounded-md" />
                  <div className="w-24 h-4 bg-brand/30 animate-pulse rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
