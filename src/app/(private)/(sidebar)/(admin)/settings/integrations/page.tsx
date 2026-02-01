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
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { SettingsHeader } from "@/components/settings/settings-header";
import { toast } from "react-hot-toast";
import { Plug, CheckCircle2, XCircle } from "lucide-react";

export default function IntegrationsSettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Integrations"
        description="Manage connections with third-party tools and services."
      />
      <div className="grid gap-6">
        <InstalledAppsCard />
        <AvailableIntegrationsCard />
      </div>
    </div>
  );
}

const InstalledAppsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Installed Apps</CardTitle>
        <CardDescription>
          Applications currently connected to your workspace.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <IntegrationRow
          name="Slack"
          description="Send notifications to Slack channels."
          status="connected"
          icon={<Plug className="h-6 w-6" />}
        />
        <IntegrationRow
          name="Google Drive"
          description="Sync files with Google Drive."
          status="connected"
          icon={<Plug className="h-6 w-6" />}
        />
      </CardContent>
    </Card>
  );
};

const AvailableIntegrationsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Integrations</CardTitle>
        <CardDescription>
          Explore and connect new tools to enhance your workflow.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <IntegrationRow
          name="Salesforce"
          description="Sync customer data with Salesforce CRM."
          status="disconnected"
          icon={<Plug className="h-6 w-6" />}
        />
        <IntegrationRow
          name="HubSpot"
          description="Connect your marketing automation platform."
          status="disconnected"
          icon={<Plug className="h-6 w-6" />}
        />
        <IntegrationRow
          name="GitHub"
          description="Link repositories and track issues."
          status="disconnected"
          icon={<Plug className="h-6 w-6" />}
        />
      </CardContent>
    </Card>
  );
};

interface IntegrationRowProps {
  name: string;
  description: string;
  status: "connected" | "disconnected";
  icon: React.ReactNode;
}

const IntegrationRow = ({
  name,
  description,
  status,
  icon,
}: IntegrationRowProps) => {
  const [isConnected, setIsConnected] = useState(status === "connected");

  const handleToggle = () => {
    const newState = !isConnected;
    setIsConnected(newState);
    if (newState) {
      toast.success(`Connected to ${name}`);
    } else {
      toast.success(`Disconnected from ${name}`);
    }
  };

  return (
    <div className="flex items-center justify-between border p-4 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-muted rounded-md">{icon}</div>
        <div>
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {isConnected ? (
          <Badge
            variant="outline"
            className="text-green-600 border-green-600 gap-1"
          >
            <CheckCircle2 className="h-3 w-3" /> Connected
          </Badge>
        ) : (
          <Badge variant="outline" className="text-muted-foreground gap-1">
            <XCircle className="h-3 w-3" /> Disconnected
          </Badge>
        )}
        <Button
          variant={isConnected ? "outline" : "default"}
          size="sm"
          onClick={handleToggle}
        >
          {isConnected ? "Configure" : "Connect"}
        </Button>
      </div>
    </div>
  );
};
