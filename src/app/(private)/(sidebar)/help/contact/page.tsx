"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SettingsHeader } from "@/components/settings/settings-header";
import { toast } from "react-hot-toast";

export default function ContactSupportPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Ticket created successfully! We will contact you shortly.");
  };

  return (
    <div className="flex flex-col gap-6 p-6 max-w-2xl mx-auto">
      <SettingsHeader
        title="Contact Support"
        description="Submit a ticket and our team will get back to you."
      />

      <Card>
        <CardHeader>
          <CardTitle>Create Ticket</CardTitle>
          <CardDescription>Describe your issue in detail.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="e.g., Cannot access billing page"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option>Technical Issue</option>
                <option>Billing & Subscription</option>
                <option>Feature Request</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Please provide steps to reproduce the issue..."
                className="min-h-[150px]"
                required
              />
            </div>
            <div className="flex justify-end pt-4">
              <Button type="submit">Submit Ticket</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
