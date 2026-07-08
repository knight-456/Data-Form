"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const changes = [
  {
    version: "v2.0.0",
    date: "October 24, 2024",
    title: "Major Platform Overhaul",
    items: [
      "New Dashboard UI with dark mode support.",
      "Integrated payment gateways: Stripe & PayPal.",
      "Added Audit Logs for enterprise plans.",
    ],
  },
  {
    version: "v1.5.2",
    date: "October 10, 2024",
    title: "Performance Improvements",
    items: [
      "Reduced initial load time by 40%.",
      "Optimized database queries for reports.",
      "Fixed mobile navigation bug.",
    ],
  },
  {
    version: "v1.5.0",
    date: "September 28, 2024",
    title: "Collaboration Features",
    items: [
      "Real-time team chat.",
      "Project sharing capabilities.",
      "Comment threads on tasks.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Changelog</h2>
      </div>

      <div className="relative border-l border-muted ml-3 space-y-8 pb-8">
        {changes.map((change, i) => (
          <div key={i} className="pl-8 relative">
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{change.version}</Badge>
                <span className="text-sm text-muted-foreground">
                  {change.date}
                </span>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{change.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {change.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
