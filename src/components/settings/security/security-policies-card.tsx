"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-hot-toast";

export const SecurityPoliciesCard = () => {
  const handle2FAToggle = (checked: boolean) => {
    toast.success(`2FA Enforcement ${checked ? "enabled" : "disabled"}`);
  };

  const handleTimeoutChange = (value: string) => {
    toast.success(`Session timeout set to ${value} minutes`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Policies</CardTitle>
        <CardDescription>
          Configure security policies for your organization members.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="2fa-enforcement">Enforce 2FA</Label>
            <span className="text-sm text-muted-foreground">
              Require all users to enable Two-Factor Authentication.
            </span>
          </div>
          <Switch id="2fa-enforcement" onCheckedChange={handle2FAToggle} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="session-timeout">Session Timeout</Label>
          <Select defaultValue="30" onValueChange={handleTimeoutChange}>
            <SelectTrigger id="session-timeout" className="w-[180px]">
              <SelectValue placeholder="Select timeout" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15">15 Minutes</SelectItem>
              <SelectItem value="30">30 Minutes</SelectItem>
              <SelectItem value="60">1 Hour</SelectItem>
              <SelectItem value="240">4 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};
