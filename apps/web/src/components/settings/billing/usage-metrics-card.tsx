"use strict";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const UsageMetricsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage Metrics</CardTitle>
        <CardDescription>Monitor your plan usage and limits.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Storage (GB)</span>
            <span className="text-sm text-muted-foreground">75 / 100 GB</span>
          </div>
          <Progress value={75} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Team Members</span>
            <span className="text-sm text-muted-foreground">8 / 10 Seats</span>
          </div>
          <Progress value={80} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">API Requests</span>
            <span className="text-sm text-muted-foreground">45k / 50k</span>
          </div>
          <Progress value={90} className="bg-secondary" />
        </div>
      </CardContent>
    </Card>
  );
};
