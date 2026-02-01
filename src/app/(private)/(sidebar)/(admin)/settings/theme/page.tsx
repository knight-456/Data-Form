"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, RotateCcw, Save, Sparkles, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ColorPicker, ColorSection } from "@/components/theme/color-picker";
import { SettingsHeader } from "@/components/settings/settings-header";

import { useCustomTheme } from "@/provider/theme.provider";
import { ThemeColors } from "@/provider/types";

export default function ThemeSettingsPage() {
  const { setTheme } = useTheme();
  const {
    lightTheme,
    darkTheme,
    updateLightTheme,
    updateDarkTheme,
    resetToDefaults,
  } = useCustomTheme();

  const [editingMode, setEditingMode] = useState<"light" | "dark">("light");

  const currentTheme = editingMode === "light" ? lightTheme : darkTheme;
  const updateTheme =
    editingMode === "light" ? updateLightTheme : updateDarkTheme;

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    updateTheme(key, value);
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Theme Settings"
        description="Customize the look and feel of your application."
      >
        <Button variant="outline" onClick={resetToDefaults} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>
        <Button
          variant="default" // Changed from brand to default as brand might not be standard
          className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => {
            // Force theme reapply
            window.location.reload();
          }}
        >
          <Save className="w-4 h-4" />
          Save & Apply
        </Button>
      </SettingsHeader>

      <div className="space-y-8">

        {/* Preview Card */}
        <div className="p-6 bg-card rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Live Preview</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-primary text-primary-foreground rounded-lg">
              <p className="font-medium">Primary</p>
              <p className="text-sm opacity-80">Main action color</p>
            </div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">
              <p className="font-medium">Secondary</p>
              <p className="text-sm opacity-80">Alternative actions</p>
            </div>
            <div className="p-4 bg-destructive text-destructive-foreground rounded-lg">
              <p className="font-medium">Destructive</p>
              <p className="text-sm opacity-80">Error states</p>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Brand Colors */}
        <ColorSection
          title="Brand Colors"
          description="Your primary brand identity colors used across the platform"
        >
          <ColorPicker
            label="Brand Primary"
            value={currentTheme.brand}
            onChange={(v) => handleColorChange("brand", v)}
          />
          <ColorPicker
            label="Brand Light"
            value={currentTheme.brandLight}
            onChange={(v) => handleColorChange("brandLight", v)}
          />
          <ColorPicker
            label="Brand Dark"
            value={currentTheme.brandDark}
            onChange={(v) => handleColorChange("brandDark", v)}
          />
          <ColorPicker
            label="Brand Foreground"
            value={currentTheme.brandForeground}
            onChange={(v) => handleColorChange("brandForeground", v)}
          />
          <ColorPicker
            label="Gradient Start"
            value={currentTheme.gradientStart}
            onChange={(v) => handleColorChange("gradientStart", v)}
          />
          <ColorPicker
            label="Gradient End"
            value={currentTheme.gradientEnd}
            onChange={(v) => handleColorChange("gradientEnd", v)}
          />
        </ColorSection>

        {/* Base Colors */}
        <ColorSection
          title="Base Colors"
          description="Background and foreground colors for the main interface"
        >
          <ColorPicker
            label="Background"
            value={currentTheme.background}
            onChange={(v) => handleColorChange("background", v)}
          />
          <ColorPicker
            label="Foreground"
            value={currentTheme.foreground}
            onChange={(v) => handleColorChange("foreground", v)}
          />
          <ColorPicker
            label="Card"
            value={currentTheme.card}
            onChange={(v) => handleColorChange("card", v)}
          />
          <ColorPicker
            label="Card Foreground"
            value={currentTheme.cardForeground}
            onChange={(v) => handleColorChange("cardForeground", v)}
          />
          <ColorPicker
            label="Popover"
            value={currentTheme.popover}
            onChange={(v) => handleColorChange("popover", v)}
          />
          <ColorPicker
            label="Popover Foreground"
            value={currentTheme.popoverForeground}
            onChange={(v) => handleColorChange("popoverForeground", v)}
          />
        </ColorSection>

        {/* Primary & Secondary */}
        <ColorSection
          title="Primary & Secondary"
          description="Main action button and secondary element colors"
        >
          <ColorPicker
            label="Primary"
            value={currentTheme.primary}
            onChange={(v) => handleColorChange("primary", v)}
          />
          <ColorPicker
            label="Primary Foreground"
            value={currentTheme.primaryForeground}
            onChange={(v) => handleColorChange("primaryForeground", v)}
          />
          <ColorPicker
            label="Secondary"
            value={currentTheme.secondary}
            onChange={(v) => handleColorChange("secondary", v)}
          />
          <ColorPicker
            label="Secondary Foreground"
            value={currentTheme.secondaryForeground}
            onChange={(v) => handleColorChange("secondaryForeground", v)}
          />
        </ColorSection>

        {/* Muted & Accent */}
        <ColorSection
          title="Muted & Accent"
          description="Subtle backgrounds and accent highlights"
        >
          <ColorPicker
            label="Muted"
            value={currentTheme.muted}
            onChange={(v) => handleColorChange("muted", v)}
          />
          <ColorPicker
            label="Muted Foreground"
            value={currentTheme.mutedForeground}
            onChange={(v) => handleColorChange("mutedForeground", v)}
          />
          <ColorPicker
            label="Accent"
            value={currentTheme.accent}
            onChange={(v) => handleColorChange("accent", v)}
          />
          <ColorPicker
            label="Accent Foreground"
            value={currentTheme.accentForeground}
            onChange={(v) => handleColorChange("accentForeground", v)}
          />
        </ColorSection>

        {/* Status Colors */}
        <ColorSection
          title="Status Colors"
          description="Feedback colors for success, warning, error, and info states"
        >
          <ColorPicker
            label="Success"
            value={currentTheme.success}
            onChange={(v) => handleColorChange("success", v)}
          />
          <ColorPicker
            label="Success Foreground"
            value={currentTheme.successForeground}
            onChange={(v) => handleColorChange("successForeground", v)}
          />
          <ColorPicker
            label="Warning"
            value={currentTheme.warning}
            onChange={(v) => handleColorChange("warning", v)}
          />
          <ColorPicker
            label="Warning Foreground"
            value={currentTheme.warningForeground}
            onChange={(v) => handleColorChange("warningForeground", v)}
          />
          <ColorPicker
            label="Destructive"
            value={currentTheme.destructive}
            onChange={(v) => handleColorChange("destructive", v)}
          />
          <ColorPicker
            label="Destructive Foreground"
            value={currentTheme.destructiveForeground}
            onChange={(v) => handleColorChange("destructiveForeground", v)}
          />
          <ColorPicker
            label="Info"
            value={currentTheme.info}
            onChange={(v) => handleColorChange("info", v)}
          />
          <ColorPicker
            label="Info Foreground"
            value={currentTheme.infoForeground}
            onChange={(v) => handleColorChange("infoForeground", v)}
          />
        </ColorSection>

        {/* Border & Input */}
        <ColorSection
          title="Border & Input"
          description="Colors for borders, inputs, and focus rings"
        >
          <ColorPicker
            label="Border"
            value={currentTheme.border}
            onChange={(v) => handleColorChange("border", v)}
          />
          <ColorPicker
            label="Input"
            value={currentTheme.input}
            onChange={(v) => handleColorChange("input", v)}
          />
          <ColorPicker
            label="Ring"
            value={currentTheme.ring}
            onChange={(v) => handleColorChange("ring", v)}
          />
        </ColorSection>

        {/* Footer spacer */}
        <div className="h-8" />
      </div>
    </div>
  );
}
