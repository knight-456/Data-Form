"use client";
import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { SettingsHeader } from "@/components/settings/settings-header";
import { toast } from "react-hot-toast";

export default function ComplianceSettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Compliance & Data"
        description="Manage legal, privacy, and data retention policies."
      />
      <div className="grid gap-6">
        <GDPRContactCard />
        <DataRetentionCard />
        <TermsPolicyCard />
      </div>
    </div>
  );
}

const GDPRContactCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>GDPR Contact Information</CardTitle>
        <CardDescription>
          Designate a contact person for data privacy inquiries.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dpo-name">Data Protection Officer (DPO) Name</Label>
            <Input id="dpo-name" placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dpo-email">DPO Email</Label>
            <Input id="dpo-email" type="email" placeholder="dpo@company.com" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={() => toast.success("GDPR contact saved")}>
            Save Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const DataRetentionCard = () => {
  const [retentionPeriod, setRetentionPeriod] = useState("90");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Retention Policies</CardTitle>
        <CardDescription>
          Configure how long user activity logs and data are stored.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="audit-logs">Audit Logs Retention</Label>
            <span className="text-sm text-muted-foreground">
              Automatically delete audit logs after a specific period.
            </span>
          </div>
          <Select
            value={retentionPeriod}
            onValueChange={(v) => {
              setRetentionPeriod(v);
              toast.success(`Retention period set to ${v} days`);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30 Days</SelectItem>
              <SelectItem value="60">60 Days</SelectItem>
              <SelectItem value="90">90 Days</SelectItem>
              <SelectItem value="365">1 Year</SelectItem>
              <SelectItem value="forever">Forever</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="delete-inactive">Delete Inactive Accounts</Label>
            <span className="text-sm text-muted-foreground">
              Remove accounts that have been inactive for over a year.
            </span>
          </div>
          <Switch
            onCheckedChange={(c) =>
              toast.success(`Auto-delete ${c ? "enabled" : "disabled"}`)
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};

const TermsPolicyCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Legal Documents</CardTitle>
        <CardDescription>
          Manage your Terms of Service and Privacy Policy links.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="tos-url">Terms of Service URL</Label>
          <Input id="tos-url" placeholder="https://company.com/terms" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="privacy-url">Privacy Policy URL</Label>
          <Input id="privacy-url" placeholder="https://company.com/privacy" />
        </div>
        <div className="flex justify-end">
          <Button
            variant="outline"
            onClick={() => toast.success("Links updated")}
          >
            Update Links
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
