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
  return <div className={jakarta.className}>{children}</div>;
}
