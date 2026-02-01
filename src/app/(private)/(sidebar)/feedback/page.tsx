"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, ThumbsDown, BarChart2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function FeedbackPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">User Feedback</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">NPS Score</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
            <div className="mt-4 flex gap-1 h-2">
              <div className="bg-red-400 w-[10%] rounded-l-full" />
              <div className="bg-yellow-400 w-[20%]" />
              <div className="bg-green-500 w-[70%] rounded-r-full" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Responses
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Across all surveys</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Satisfaction Rate
            </CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5.0</div>
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-primary mx-0.5"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                user: "alice@example.com",
                text: "Love the new dashboard! It's so much faster.",
                sentiment: "positive",
              },
              {
                user: "bob@test.com",
                text: "I'm having trouble finding the billing settings.",
                sentiment: "neutral",
              },
              {
                user: "carol@demo.io",
                text: "The app crashed when I tried to export PDF.",
                sentiment: "negative",
              },
            ].map((item, i) => (
              <div key={i} className="p-4 border rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{item.user}</span>
                  <Badge
                    variant={
                      item.sentiment === "positive"
                        ? "default"
                        : item.sentiment === "negative"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {item.sentiment}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">"{item.text}"</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Requested Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { name: "Dark Mode Mobile", votes: 85 },
              { name: "SAML SSO", votes: 62 },
              { name: "Custom Domain", votes: 45 },
              { name: "Zapier Integration", votes: 30 },
            ].map((feature, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{feature.name}</span>
                  <span className="text-muted-foreground">
                    {feature.votes} votes
                  </span>
                </div>
                <Progress value={feature.votes} max={100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
