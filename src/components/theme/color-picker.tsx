"use client";

import React, { useState, useMemo } from "react";
import { Check, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { getColorPreview } from "@/provider/theme.provider";

import { cn } from "@/lib/utils";
import { COLOR_SHADES, getTailwindColors } from "@/utils/colors.utils";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export function ColorPicker({ value, onChange, label }: ColorPickerProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Get colors dynamically from Tailwind
  const tailwindColors = useMemo(() => getTailwindColors(), []);

  // Filter colors based on search
  const filteredColors = useMemo(() => {
    if (!search) return tailwindColors;

    const filtered: typeof tailwindColors = {};
    for (const [name, shades] of Object.entries(tailwindColors)) {
      if (name.toLowerCase().includes(search.toLowerCase())) {
        filtered[name] = shades;
      }
    }
    return filtered;
  }, [tailwindColors, search]);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between h-10"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-md border border-border shadow-sm"
                style={{ backgroundColor: getColorPreview(value) }}
              />
              <span className="text-xs font-mono text-muted-foreground truncate max-w-[120px]">
                hsl({value})
              </span>
            </div>
            <div className="w-4 h-4 rounded-full bg-muted" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[400px] sm:w-[540px] overflow-y-auto">
          <SheetHeader className="mb-4">
            <SheetTitle className="flex items-center justify-between">
              <span>Select {label}</span>
            </SheetTitle>
          </SheetHeader>

          {/* Current Color Preview */}
          <div className="mb-4 p-4 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground mb-2">Current Color</p>
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg border border-border shadow-sm"
                style={{ backgroundColor: getColorPreview(value) }}
              />
              <div>
                <p className="text-sm font-mono">hsl({value})</p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search colors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Color Grid */}
          <div className="space-y-4">
            {Object.entries(filteredColors).map(([colorName, shades]) => (
              <div key={colorName} className="space-y-2">
                <span className="text-xs font-semibold text-muted-foreground capitalize">
                  {colorName}
                </span>
                <div className="grid grid-cols-11 gap-1">
                  {COLOR_SHADES.map((shade) => {
                    const colorData = shades[shade];
                    if (!colorData) return null;

                    const isSelected = value === colorData.hsl;
                    return (
                      <button
                        key={shade}
                        onClick={() => {
                          onChange(colorData.hsl);
                          setOpen(false);
                        }}
                        className={cn(
                          "aspect-square rounded-md border transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
                          isSelected ? "ring-2 ring-ring ring-offset-2 scale-110" : "border-border/50"
                        )}
                        style={{ backgroundColor: colorData.original }}
                        title={`${colorName}-${shade}: ${colorData.hsl}`}
                      >
                        {isSelected && (
                          <Check className={cn(
                            "w-3 h-3 mx-auto",
                            shade < 500 ? "text-gray-800" : "text-white"
                          )} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {Object.keys(filteredColors).length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No colors found for "{search}"
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

// Section wrapper for grouping colors
export function ColorSection({
  title,
  description,
  children
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4 p-6 bg-card rounded-xl border border-border">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}
