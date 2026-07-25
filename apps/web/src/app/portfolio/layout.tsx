import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jashwant Rana — Senior Software Engineer",
  description:
    "Portfolio of Jashwant Rana, Senior Software Engineer specializing in React.js, Next.js, React Native, SaaS platforms, dashboards and mobile ecosystems.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/icon.png"],
    apple: ["/icon.png"],
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${jakarta.className} portfolio-theme`}
      style={
        {
          // Custom Pure Dark Blue Theme overrides specifically for the portfolio page
          "--brand": "210 100% 45%",
          "--brand-light": "208 100% 60%",
          "--brand-dark": "212 100% 32%",
          "--gradient-start": "210 100% 45%",
          "--gradient-end": "195 90% 42%",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
