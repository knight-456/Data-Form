"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activity, FileEdit, UserPlus, Settings, Lock } from "lucide-react";

export default function ActivityPage() {
  const activities = [
    {
      id: 1,
      user: "Olivia Martin",
      action: "invited",
      target: "Jackson Lee",
      time: "2 minutes ago",
      icon: UserPlus,
    },
    {
      id: 2,
      user: "Jackson Lee",
      action: "updated",
      target: "Project X Settings",
      time: "1 hour ago",
      icon: Settings,
    },
    {
      id: 3,
      user: "Isabella Nguyen",
      action: "changed",
      target: "Legal Policy",
      time: "3 hours ago",
      icon: FileEdit,
    },
    {
      id: 4,
      user: "System",
      action: "blocked",
      target: "Suspicious Login",
      time: "5 hours ago",
      icon: Lock,
    },
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Activity Log</h2>
          <p className="text-muted-foreground">
            Monitor events and actions across your organization.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest actions performed by team members.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {activities.map((item) => (
              <div key={item.id} className="flex items-center">
                <div className="p-2 bg-muted rounded-full mr-4">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    <span className="font-semibold">{item.user}</span>{" "}
                    {item.action}{" "}
                    <span className="font-semibold">{item.target}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
