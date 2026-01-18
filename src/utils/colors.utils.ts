
import colors from "tailwindcss/colors";

// Color families to exclude (deprecated or special colors)
export const EXCLUDED_COLORS = ['inherit', 'current', 'transparent', 'black', 'white', 'lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray'];

// Shades to show
export const COLOR_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

// Convert oklch to HSL
// oklch format: oklch(L% C H) where L is lightness, C is chroma, H is hue
export function oklchToHsl(oklchStr: string): string {
  const match = oklchStr.match(/oklch\(([\d.]+)%?\s+([\d.]+)\s+([\d.]+)\)/);
  if (!match) return "0 0% 50%";
  
  const L = parseFloat(match[1]) / 100; // Lightness 0-1
  const C = parseFloat(match[2]);       // Chroma
  const H = parseFloat(match[3]);       // Hue in degrees
  
  // Convert OKLCH to approximate HSL
  // This is a simplified conversion - oklch L maps roughly to HSL L
  // Chroma maps roughly to saturation
  const lightness = Math.round(L * 100);
  
  // Approximate saturation from chroma (chroma typically ranges 0-0.4)
  const saturation = Math.round(Math.min(C * 250, 100));
  
  // Hue is the same (both in degrees)
  const hue = Math.round(H);
  
  return `${hue} ${saturation}% ${lightness}%`;
}

// Helper to convert color string (HEX, RGB, or OKLCH) to HSL
function colorToHsl(color: string): string {
  // Handle oklch format (Tailwind v4)
  if (color.startsWith('oklch')) {
    return oklchToHsl(color);
  }
  
  let r = 0, g = 0, b = 0;
  
  // Handle hex format
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16) / 255;
    g = parseInt(hex.substring(2, 4), 16) / 255;
    b = parseInt(hex.substring(4, 6), 16) / 255;
  }
  // Handle rgb format
  else if (color.startsWith('rgb')) {
    const match = color.match(/\d+/g);
    if (match && match.length >= 3) {
      r = parseInt(match[0]) / 255;
      g = parseInt(match[1]) / 255;
      b = parseInt(match[2]) / 255;
    }
  }
  // Unknown format - return fallback
  else {
    return "0 0% 50%";
  }

  // Check for invalid values
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return "0 0% 50%";
  }

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  const hue = Math.round(h * 360);
  const sat = Math.round(s * 100);
  const lig = Math.round(l * 100);

  return `${hue} ${sat}% ${lig}%`;
}

// Get Tailwind colors dynamically
export function getTailwindColors(): Record<string, Record<number, { original: string; hsl: string }>> {
  const colorMap: Record<string, Record<number, { original: string; hsl: string }>> = {};
  
  for (const [name, value] of Object.entries(colors)) {
    if (EXCLUDED_COLORS.includes(name)) continue;
    if (typeof value !== 'object') continue;
    
    colorMap[name] = {};
    for (const shade of COLOR_SHADES) {
      const shadeValue = (value as Record<number, string>)[shade];
      if (shadeValue && typeof shadeValue === 'string') {
        colorMap[name][shade] = {
          original: shadeValue,
          hsl: colorToHsl(shadeValue)
        };
      }
    }
  }
  
  return colorMap;
}