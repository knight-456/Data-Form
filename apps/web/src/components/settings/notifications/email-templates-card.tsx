"use strict";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const templates = [
  {
    title: "Welcome Email",
    subject: "Welcome to our platform!",
    lastUnpdated: "2 days ago",
  },
  {
    title: "Password Reset",
    subject: "Reset your password",
    lastUnpdated: "1 month ago",
  },
  {
    title: "Invitation",
    subject: "You have been invited to join...",
    lastUnpdated: "3 months ago",
  },
];

export const EmailTemplatesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Templates</CardTitle>
        <CardDescription>
          Customize the emails sent to your users.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {templates.map((template) => (
          <div
            key={template.title}
            className="flex items-center justify-between border p-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">{template.title}</h4>
                <p className="text-sm text-muted-foreground">
                  Subject: {template.subject}
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
