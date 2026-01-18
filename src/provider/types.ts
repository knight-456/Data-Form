// Default theme colors in HSL format
export const DEFAULT_THEME: ThemeColors = {
  // Base colors
  background: "0 0% 100%",
  foreground: "222.2 84% 4.9%",
  card: "0 0% 100%",
  cardForeground: "222.2 84% 4.9%",
  popover: "0 0% 100%",
  popoverForeground: "222.2 84% 4.9%",

  // Primary colors
  primary: "222.2 47.4% 11.2%",
  primaryForeground: "210 40% 98%",

  // Secondary colors
  secondary: "210 40% 96.1%",
  secondaryForeground: "222.2 47.4% 11.2%",

  // Muted colors
  muted: "210 40% 96.1%",
  mutedForeground: "215.4 16.3% 46.9%",

  // Accent colors
  accent: "210 40% 96.1%",
  accentForeground: "222.2 47.4% 11.2%",

  // Destructive colors
  destructive: "0 84.2% 60.2%",
  destructiveForeground: "210 40% 98%",

  // Border and input
  border: "214.3 31.8% 91.4%",
  input: "214.3 31.8% 91.4%",
  ring: "222.2 84% 4.9%",

  // Brand colors
  brand: "262 83% 58%",
  brandForeground: "0 0% 100%",
  brandLight: "262 83% 70%",
  brandDark: "262 83% 45%",

  // Status colors
  success: "142 76% 36%",
  successForeground: "0 0% 100%",
  warning: "38 92% 50%",
  warningForeground: "0 0% 0%",
  info: "199 89% 48%",
  infoForeground: "0 0% 100%",

  // Gradient
  gradientStart: "262 83% 58%",
  gradientEnd: "199 89% 48%",
};

// Dark mode defaults
export const DEFAULT_DARK_THEME: ThemeColors = {
  ...DEFAULT_THEME,
  background: "222.2 84% 4.9%",
  foreground: "210 40% 98%",
  card: "222.2 84% 4.9%",
  cardForeground: "210 40% 98%",
  popover: "222.2 84% 4.9%",
  popoverForeground: "210 40% 98%",
  primary: "210 40% 98%",
  primaryForeground: "222.2 47.4% 11.2%",
  secondary: "217.2 32.6% 17.5%",
  secondaryForeground: "210 40% 98%",
  muted: "217.2 32.6% 17.5%",
  mutedForeground: "215 20.2% 65.1%",
  accent: "217.2 32.6% 17.5%",
  accentForeground: "210 40% 98%",
  destructive: "0 62.8% 30.6%",
  destructiveForeground: "210 40% 98%",
  border: "217.2 32.6% 17.5%",
  input: "217.2 32.6% 17.5%",
  ring: "212.7 26.8% 83.9%",
  brand: "262 83% 65%",
  brandLight: "262 83% 75%",
  brandDark: "262 83% 50%",
  success: "142 76% 45%",
  warning: "38 92% 55%",
  info: "199 89% 55%",
  gradientStart: "262 83% 65%",
  gradientEnd: "199 89% 55%",
};

export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  brand: string;
  brandForeground: string;
  brandLight: string;
  brandDark: string;
  success: string;
  successForeground: string;
  warning: string;
  warningForeground: string;
  info: string;
  infoForeground: string;
  gradientStart: string;
  gradientEnd: string;
}

export interface themeContextType {
  lightTheme: ThemeColors;
  darkTheme: ThemeColors;
  updateLightTheme: (key: keyof ThemeColors, value: string) => void;
  updateDarkTheme: (key: keyof ThemeColors, value: string) => void;
  resetToDefaults: () => void;
  applyTheme: () => void;
}
