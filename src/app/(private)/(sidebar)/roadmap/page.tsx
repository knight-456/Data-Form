"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "react-hot-toast";

const features = [
  {
    title: "Dark Mode V2",
    status: "In Progress",
    category: "Design",
    votes: 42,
  },
  {
    title: "Mobile App Beta",
    status: "Planned",
    category: "Mobile",
    votes: 128,
  },
  { title: "API v3", status: "Under Review", category: "Backend", votes: 15 },
  {
    title: "Custom Reports",
    status: "Released",
    category: "Analytics",
    votes: 89,
  },
];

export default function RoadmapPage() {
  const handleVote = (title: string) => {
    toast.success(`Voted for ${title}`);
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Public Roadmap</h2>
          <p className="text-muted-foreground">
            See what we are working on and vote for your favorites.
          </p>
        </div>
        <Button onClick={() => toast("Feature request form opened")}>
          <Plus className="mr-2 h-4 w-4" /> Submit Idea
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {["Under Review", "Planned", "In Progress", "Released"].map(
          (status) => (
            <div key={status} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{status}</h3>
                <Badge variant="outline">
                  {features.filter((f) => f.status === status).length}
                </Badge>
              </div>
              {features
                .filter((f) => f.status === status)
                .map((feature, i) => (
                  <Card
                    key={i}
                    className="cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant="secondary" className="text-[10px]">
                          {feature.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-sm font-medium mt-2">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                        <span>{feature.votes} votes</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2"
                          onClick={() => handleVote(feature.title)}
                        >
                          Vote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {features.filter((f) => f.status === status).length === 0 && (
                <div className="h-24 border-2 border-dashed rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                  No items
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
