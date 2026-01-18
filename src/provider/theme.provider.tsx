"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { themeContextType, DEFAULT_DARK_THEME, DEFAULT_THEME, ThemeColors } from "./types";

const themeContext = createContext<themeContextType | undefined>(undefined);

const STORAGE_KEY = "btl-custom-theme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [lightTheme, setLightTheme] = useState<ThemeColors>(DEFAULT_THEME);
  const [darkTheme, setDarkTheme] = useState<ThemeColors>(DEFAULT_DARK_THEME);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const { light, dark } = JSON.parse(saved);
        if (light) setLightTheme({ ...DEFAULT_THEME, ...light });
        if (dark) setDarkTheme({ ...DEFAULT_DARK_THEME, ...dark });
      }
    } catch (e) {
      console.error("Failed to load theme:", e);
    }
    setIsLoaded(true);
  }, []);

  // Apply CSS variables whenever theme changes
  const applyTheme = useCallback(() => {
    // Construct CSS variables string for light theme
    const lightVars = Object.entries(lightTheme)
      .map(([key, value]) => `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`)
      .join("\n  ");

    // Construct CSS variables string for dark theme
    const darkVars = Object.entries(darkTheme)
      .map(([key, value]) => `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`)
      .join("\n  ");

    // Create or update the style tag
    let styleTag = document.getElementById("btl-custom-theme");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "btl-custom-theme";
      document.head.appendChild(styleTag);
    }

    styleTag.textContent = `
      :root {
        ${lightVars}
      }
      .dark {
        ${darkVars}
      }
    `;

    // Clean up any inline styles that might have been set previously
    const root = document.documentElement;
    Object.keys(lightTheme).forEach((key) => {
      const cssVar = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      root.style.removeProperty(cssVar);
    });

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ light: lightTheme, dark: darkTheme }));
  }, [lightTheme, darkTheme]);

  // Apply theme on changes
  useEffect(() => {
    if (isLoaded) {
      applyTheme();
    }
  }, [isLoaded, applyTheme]);

  const updateLightTheme = (key: keyof ThemeColors, value: string) => {
    setLightTheme(prev => ({ ...prev, [key]: value }));
  };

  const updateDarkTheme = (key: keyof ThemeColors, value: string) => {
    setDarkTheme(prev => ({ ...prev, [key]: value }));
  };

  const resetToDefaults = () => {
    setLightTheme(DEFAULT_THEME);
    setDarkTheme(DEFAULT_DARK_THEME);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <themeContext.Provider value={{
      lightTheme,
      darkTheme,
      updateLightTheme,
      updateDarkTheme,
      resetToDefaults,
      applyTheme,
    }}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </themeContext.Provider>
  );
}

export function useCustomTheme() {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useCustomTheme must be used within a CustomThemeProvider");
  }
  return context;
}

// Helper to get color preview from HSL string
export function getColorPreview(hsl: string): string {
  return `hsl(${hsl})`;
}