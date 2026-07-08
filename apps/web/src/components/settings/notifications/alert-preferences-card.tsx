"use strict";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const AlertPreferencesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alert Preferences</CardTitle>
        <CardDescription>
          Choose how and when you want to be notified.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="critical-alerts">Critical System Alerts</Label>
            <span className="text-sm text-muted-foreground">
              Receive notifications for server downtime or security breaches.
            </span>
          </div>
          <Switch id="critical-alerts" defaultChecked />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="billing-alerts">Billing Notifications</Label>
            <span className="text-sm text-muted-foreground">
              Receive notifications for new invoices and payment failures.
            </span>
          </div>
          <Switch id="billing-alerts" defaultChecked />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="marketing-emails">Marketing Updates</Label>
            <span className="text-sm text-muted-foreground">
              Receive news about product updates and features.
            </span>
          </div>
          <Switch id="marketing-emails" />
        </div>
      </CardContent>
    </Card>
  );
};
