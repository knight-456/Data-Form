"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LayoutTemplate, ArrowRight } from "lucide-react";
import { toast } from "react-hot-toast";

const templates = [
  {
    title: "SaaS Starter",
    description: "Authentication, Payments, and Dashboard ready to go.",
    category: "Full Stack",
    difficulty: "Intermediate",
  },
  {
    title: "Marketing Site",
    description: "High-converting landing page with blog.",
    category: "Marketing",
    difficulty: "Beginner",
  },
  {
    title: "E-commerce Store",
    description: "Product grid, cart, and checkout flow.",
    category: "Commerce",
    difficulty: "Advanced",
  },
  {
    title: "Internal Tool",
    description: "Admin panel with table views and forms.",
    category: "Internal",
    difficulty: "Intermediate",
  },
  {
    title: "Documentation",
    description: "Clean doc site with search and navigation.",
    category: "Content",
    difficulty: "Beginner",
  },
  {
    title: "Mobile App Back-end",
    description: "API endpoints and database schema.",
    category: "Backend",
    difficulty: "Advanced",
  },
];

export default function TemplatesPage() {
  const useTemplate = (title: string) => {
    toast.success(`Started project with ${title} template`);
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Templates</h2>
          <p className="text-muted-foreground">
            Jumpstart your next project with our pre-built solutions.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {templates.map((template, i) => (
          <Card key={i} className="flex flex-col">
            <CardHeader>
              <div className="h-32 bg-muted rounded-md flex items-center justify-center mb-4">
                <LayoutTemplate className="h-10 w-10 text-muted-foreground opacity-50" />
              </div>
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="mb-2">
                  {template.category}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {template.difficulty}
                </span>
              </div>
              <CardTitle>{template.title}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              {/* Placeholder for tags or more details */}
            </CardContent>
            <CardFooter>
              <Button
                className="w-full group"
                onClick={() => useTemplate(template.title)}
              >
                Use Template{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
