"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Plus, Search, MoreVertical } from "lucide-react";
import { useState } from "react";

const initialDocs = [
  {
    id: 1,
    title: "Engineering Onboarding",
    author: "Sarah Smith",
    updated: "2 days ago",
  },
  {
    id: 2,
    title: "Q4 Marketing Strategy",
    author: "Mike Jones",
    updated: "1 week ago",
  },
  {
    id: 3,
    title: "API Documentation Draft",
    author: "Alex Chen",
    updated: "Just now",
  },
  { id: 4, title: "Employee Handbook", author: "HR", updated: "1 month ago" },
];

export default function DocumentsPage() {
  const [docs, setDocs] = useState(initialDocs);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Documents</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Doc
        </Button>
      </div>

      <div className="flex gap-2 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search documents..." className="pl-8" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {docs.map((doc) => (
          <Card
            key={doc.id}
            className="group cursor-pointer hover:border-primary/50 transition-colors"
          >
            <CardContent className="p-6 flex flex-col h-full justify-between">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                  {doc.title}
                </h3>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>{doc.updated}</span>
                <span>{doc.author}</span>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card className="border-dashed flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors min-h-[200px]">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Plus className="h-8 w-8" />
            <span className="font-medium">Create New</span>
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        <Card>
          <CardContent className="p-0">
            {docs.slice(0, 3).map((doc, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-muted/20"
              >
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                    {doc.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {doc.author} edited{" "}
                      <span className="text-primary">{doc.title}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {doc.updated}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
