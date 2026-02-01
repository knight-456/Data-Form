"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SettingsHeader } from "@/components/settings/settings-header";
import { Book, ChevronRight, FileText } from "lucide-react";
import Link from "next/link";

export default function DocumentationPage() {
  const sections = [
    {
      title: "Getting Started",
      articles: ["Introduction", "Installation", "Project Structure"],
    },
    {
      title: "Core Concepts",
      articles: ["Authentication", "Database Connection", "API Routes"],
    },
    {
      title: "Advanced",
      articles: [
        "Custom Middleware",
        "Performance Optimization",
        "Security Best Practices",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Documentation"
        description="Guides and references for developers."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              {section.articles.map((article, aIdx) => (
                <Link
                  key={aIdx}
                  href={`/help/article/${article.toLowerCase().replace(/ /g, "-")}`}
                  className="flex items-center justify-between p-2 rounded-md hover:bg-muted group transition-colors"
                >
                  <span className="text-sm flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    {article}
                  </span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
