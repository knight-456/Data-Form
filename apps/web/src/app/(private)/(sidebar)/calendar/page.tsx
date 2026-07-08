"use client";

import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";

// Mock Data
const events = [
  {
    id: 1,
    title: "Weekly Sync",
    date: new Date(),
    type: "work",
    color: "bg-blue-100 text-blue-700 border-blue-200",
  },
  {
    id: 2,
    title: "Design Review",
    date: new Date(new Date().setDate(new Date().getDate() + 2)),
    type: "design",
    color: "bg-purple-100 text-purple-700 border-purple-200",
  },
  {
    id: 3,
    title: "Client Meeting",
    date: new Date(new Date().setDate(new Date().getDate() - 3)),
    type: "work",
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
  },
  {
    id: 4,
    title: "Release v2.0",
    date: new Date(new Date().setDate(new Date().getDate() + 5)),
    type: "release",
    color: "bg-green-100 text-green-700 border-green-200",
  },
  {
    id: 5,
    title: "Team Lunch",
    date: new Date(),
    type: "social",
    color: "bg-orange-100 text-orange-700 border-orange-200",
  },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const handleToday = () => setCurrentDate(new Date());

  const handleDayClick = (day: Date) => {
    toast(`Selected ${format(day, "MMM dd, yyyy")}`);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col bg-background">
      {/* Header */}
      <header className="flex h-16 flex-none items-center justify-between border-b px-6 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-foreground">
            {format(currentDate, "MMMM yyyy")}
          </h1>
          <div className="flex items-center gap-1 rounded-md border p-1 shadow-sm">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={handlePrevMonth}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs font-medium"
              onClick={handleToday}
            >
              Today
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={handleNextMonth}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search events"
              className="h-9 w-64 rounded-md border bg-muted pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Month <ChevronRight className="ml-2 h-3 w-3 rotate-90" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Day</DropdownMenuItem>
              <DropdownMenuItem>Week</DropdownMenuItem>
              <DropdownMenuItem>Month</DropdownMenuItem>
              <DropdownMenuItem>Year</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="icon" variant="ghost">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button className="ml-2 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" /> Create
          </Button>
        </div>
      </header>

      {/* Calendar Grid */}
      <div className="flex flex-auto flex-col">
        {/* Days Header */}
        <div className="grid grid-cols-7 border-b bg-muted/20">
          {weekDays.map((day) => (
            <div
              key={day}
              className="py-2 text-center text-xs font-semibold uppercase text-muted-foreground"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="flex flex-auto">
          <div className="grid w-full grid-cols-7 grid-rows-5 lg:grid-rows-6">
            {calendarDays.map((day, dayIdx) => {
              const dayEvents = events.filter((e) => isSameDay(e.date, day));
              const isToday = isSameDay(day, new Date());
              const isCurrentMonth = isSameMonth(day, currentDate);

              return (
                <div
                  key={day.toString()}
                  onClick={() => handleDayClick(day)}
                  className={cn(
                    "relative flex flex-col border-b border-r p-2 transition-colors hover:bg-muted/30 min-h-[100px]",
                    !isCurrentMonth && "bg-muted/10 text-muted-foreground",
                    isToday && "bg-primary/5",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium",
                      isToday
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground",
                      !isCurrentMonth && "text-muted-foreground opacity-50",
                    )}
                  >
                    {format(day, "d")}
                  </span>

                  <div className="mt-2 flex-1 space-y-1 overflow-y-auto">
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className={cn(
                          "truncate rounded px-1.5 py-0.5 text-[10px] font-medium border shadow-sm cursor-pointer hover:opacity-80",
                          event.color,
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          toast(`Event: ${event.title}`);
                        }}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
