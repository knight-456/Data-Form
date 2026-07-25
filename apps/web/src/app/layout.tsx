import type { Metadata, Viewport } from "next";
import "./globals.css";

import Provider from "../provider";

import { geistMono, geistSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Beyond The Limits",
  description: "Your unified platform for limitless possibilities",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/icon.png"],
    apple: ["/icon.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "BTL",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
