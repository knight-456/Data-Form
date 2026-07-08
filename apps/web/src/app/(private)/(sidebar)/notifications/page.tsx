"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Check, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const initialNotifications = [
  {
    id: 1,
    title: "New Login Detected",
    message: "A new login from Chrome on Windows.",
    time: "2 hours ago",
    read: false,
    type: "security",
  },
  {
    id: 2,
    title: "Subscription Renewed",
    message: "Your Pro plan has been renewed successfully.",
    time: "Yesterday",
    read: true,
    type: "billing",
  },
  {
    id: 3,
    title: "Project 'Alpha' Updated",
    message: "John marked 3 tasks as complete.",
    time: "2 days ago",
    read: true,
    type: "project",
  },
  {
    id: 4,
    title: "Welcome!",
    message: "Thanks for joining our platform.",
    time: "1 week ago",
    read: true,
    type: "system",
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    toast.success("All marked as read");
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
    toast.success("Notification removed");
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
          <p className="text-muted-foreground">
            Manage your alerts and system messages.
          </p>
        </div>
        <Button variant="outline" onClick={markAllRead}>
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((n) => (
          <Card
            key={n.id}
            className={`transition-all ${!n.read ? "border-l-4 border-l-primary" : ""}`}
          >
            <CardContent className="p-4 flex items-start justify-between">
              <div className="flex gap-4">
                <div
                  className={`mt-1 p-2 rounded-full ${!n.read ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                >
                  <Bell className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm">{n.title}</p>
                    {!n.read && (
                      <Badge variant="default" className="text-[10px] h-5">
                        New
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      • {n.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{n.message}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-red-500"
                onClick={() => deleteNotification(n.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
        {notifications.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="h-6 w-6 opacity-50" />
            </div>
            <p>You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}
