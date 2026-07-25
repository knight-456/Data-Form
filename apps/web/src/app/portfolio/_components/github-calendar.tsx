"use client";

import React, { useState, useMemo } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

type ContributionDay = {
  date: Date;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type FilterType = "all" | "commits" | "prs";

export function GithubCalendar() {
  const [filter, setFilter] = useState<FilterType>("all");

  const contributions = useMemo(() => {
    const data: ContributionDay[] = [];
    const now = new Date();
    
    // Calculate start date (365 days ago, adjusted to align with Sunday)
    const startDate = new Date();
    startDate.setDate(now.getDate() - 365);
    const startDay = startDate.getDay();
    startDate.setDate(startDate.getDate() - startDay); // Shift to start on Sunday

    const totalDays = 371; // 53 weeks * 7 days
    let seed = 12345; // Fixed seed for consistent mock data

    function pseudoRandom() {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    for (let i = 0; i < totalDays; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      
      if (currentDate > now) {
        data.push({ date: currentDate, count: 0, level: 0 });
        continue;
      }

      let count = 0;
      const dayOfWeek = currentDate.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      let probability = isWeekend ? 0.15 : 0.7;

      // Add streaks and cycles
      const dayOfMonth = currentDate.getDate();
      const month = currentDate.getMonth();

      // Vacations / quiet periods
      if (month === 4 || month === 11) {
        probability *= 0.25;
      }
      
      // Intense coding spikes
      if (month === 2 || month === 8 || (month === 10 && dayOfMonth > 15)) {
        probability = isWeekend ? 0.4 : 0.9;
      }

      if (pseudoRandom() < probability) {
        const multiplier = filter === "commits" ? 4 : filter === "prs" ? 1.5 : 6;
        count = Math.floor(pseudoRandom() * multiplier) + 1;
        if (pseudoRandom() < 0.08) {
          count = Math.floor(pseudoRandom() * 6) + 7;
        }
      }

      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count > 0) {
        if (count <= 2) level = 1;
        else if (count <= 4) level = 2;
        else if (count <= 7) level = 3;
        else level = 4;
      }

      data.push({ date: currentDate, count, level });
    }

    return data;
  }, [filter]);

  const totalContributions = useMemo(() => {
    return contributions.reduce((sum, day) => sum + day.count, 0);
  }, [contributions]);

  // Group days into weeks (columns)
  const weeks = useMemo(() => {
    const result: ContributionDay[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
      result.push(contributions.slice(i, i + 7));
    }
    return result;
  }, [contributions]);

  // Identify index of first week columns where a new month starts
  const monthLabels = useMemo(() => {
    const labels: { label: string; colIndex: number }[] = [];
    let prevMonth = -1;

    weeks.forEach((week, colIndex) => {
      // Look at middle of the week to align labels
      const middleDay = week[3];
      if (middleDay) {
        const currentMonth = middleDay.date.getMonth();
        if (currentMonth !== prevMonth) {
          const name = middleDay.date.toLocaleString("en-US", { month: "short" });
          labels.push({ label: name, colIndex });
          prevMonth = currentMonth;
        }
      }
    });

    // Clean up overlapping/dense labels
    return labels.filter((label, index) => {
      if (index === 0) return true;
      const prev = labels[index - 1];
      return label.colIndex - prev.colIndex > 2;
    });
  }, [weeks]);

  // Colors mapping for levels
  const levelClasses = {
    0: "bg-[#161b22]/40 dark:bg-slate-900/35 border-transparent",
    1: "bg-brand/20 border-brand/5",
    2: "bg-brand/45 border-brand/10",
    3: "bg-brand/70 border-brand/15",
    4: "bg-brand border-brand/20",
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <TooltipProvider delayDuration={50}>
      <div className="w-full min-w-0 overflow-hidden flex flex-col gap-4">
        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/30 pb-4">
          <div className="text-left">
            <span className="text-xl font-black text-foreground tracking-tight">
              {totalContributions.toLocaleString()}
            </span>
            <span className="ml-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {filter === "all"
                ? "total activities in the past year"
                : filter === "commits"
                  ? "commits in the past year"
                  : "pull requests in the past year"}
            </span>
          </div>

          {/* Filter Tabs */}
          <div className="flex bg-muted/60 p-0.5 rounded-lg border border-border/40 text-xs font-semibold self-start sm:self-auto">
            {(["all", "commits", "prs"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 rounded-md cursor-pointer transition-all ${
                  filter === tab
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "all" ? "All Activity" : tab === "commits" ? "Commits" : "PRs"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Area */}
        <div className="relative overflow-x-auto custom-scrollbar select-none py-2">
          <div className="min-w-[670px] flex flex-col gap-1.5">
            {/* Month Labels */}
            <div className="flex text-[10px] text-muted-foreground font-semibold h-4 relative">
              {monthLabels.map((lbl) => (
                <div
                  key={`${lbl.label}-${lbl.colIndex}`}
                  className="absolute"
                  style={{ left: `${lbl.colIndex * 13 + 30}px` }}
                >
                  {lbl.label}
                </div>
              ))}
            </div>

            {/* Grid with Day Labels */}
            <div className="flex gap-2">
              {/* Row labels (Days of week) */}
              <div className="flex flex-col justify-between text-[9px] text-muted-foreground/70 font-semibold h-[82px] w-6 pr-1 pt-1.5 font-sans">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Columns (Weeks) */}
              <div className="flex gap-[3px]">
                {weeks.map((week, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-[3px]">
                    {week.map((day, rowIdx) => {
                      const levelClass = levelClasses[day.level];
                      return (
                        <Tooltip key={`${colIdx}-${rowIdx}`}>
                          <TooltipTrigger asChild>
                            <div
                              className={`w-[10px] h-[10px] rounded-[1.5px] border cursor-pointer transition-all hover:scale-[1.25] hover:z-10 ${levelClass}`}
                            />
                          </TooltipTrigger>
                          <TooltipContent side="top" className="font-sans font-medium text-[11px] px-2 py-1 shadow-md">
                            <span className="font-bold">
                              {day.count === 0 ? "No" : day.count}
                            </span>{" "}
                            {filter === "all"
                              ? "activities"
                              : filter === "commits"
                                ? "commits"
                                : "pull requests"}{" "}
                            on {formatDate(day.date)}
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Legend */}
        <div className="flex items-center justify-between text-[11px] text-muted-foreground font-semibold border-t border-border/30 pt-3">
          <span className="hover:text-foreground transition-colors cursor-help" title="Predictable mock data generated based on actual project contributions">
            Mocked GitHub Sync Active
          </span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="w-[10px] h-[10px] rounded-[1.5px] bg-[#161b22]/40 dark:bg-slate-900/35 border border-transparent" />
            <div className="w-[10px] h-[10px] rounded-[1.5px] bg-brand/20 border border-brand/5" />
            <div className="w-[10px] h-[10px] rounded-[1.5px] bg-brand/45 border border-brand/10" />
            <div className="w-[10px] h-[10px] rounded-[1.5px] bg-brand/70 border border-brand/15" />
            <div className="w-[10px] h-[10px] rounded-[1.5px] bg-brand border border-brand/20" />
            <span>More</span>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
