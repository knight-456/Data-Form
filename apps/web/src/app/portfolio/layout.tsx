import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jashwant Rana — Senior Software Engineer",
  description:
    "Portfolio of Jashwant Rana, Senior Software Engineer specializing in React.js, Next.js, React Native, SaaS platforms, dashboards and mobile ecosystems.",
  openGraph: {
    title: "Jashwant Rana — Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React.js, Next.js, React Native, SaaS platforms, dashboards and mobile ecosystems.",
    type: "website",
    url: "https://ranajashwant.netlify.app/portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jashwant Rana — Senior Software Engineer",
    description:
      "Portfolio of Jashwant Rana. Senior Software Engineer building modern web and mobile products.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
