"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Plus } from "lucide-react";
import { toast } from "react-hot-toast";

const integrations = [
  {
    name: "Slack",
    description: "Receive real-time notifications in your channels.",
    category: "Communication",
    installed: true,
    icon: "S",
  },
  {
    name: "GitHub",
    description: "Link commit status to your deployments.",
    category: "Developer Tools",
    installed: false,
    icon: "G",
  },
  {
    name: "Jira",
    description: "Create tickets automatically from errors.",
    category: "Project Management",
    installed: false,
    icon: "J",
  },
  {
    name: "Stripe",
    description: "Sync billing data and invoices.",
    category: "Finance",
    installed: true,
    icon: "$",
  },
  {
    name: "Zapier",
    description: "Connect to 5000+ apps.",
    category: "Automation",
    installed: false,
    icon: "Z",
  },
  {
    name: "Intercom",
    description: "Customer support chat widget.",
    category: "Support",
    installed: false,
    icon: "I",
  },
];

export default function MarketplacePage() {
  const toggleInstall = (name: string, installed: boolean) => {
    if (installed) {
      toast.success(`${name} disconnected.`);
    } else {
      toast.success(`${name} installed successfully!`);
    }
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Marketplace</h2>
          <p className="text-muted-foreground">
            Discover apps and integrations to supercharge your workflow.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((app, i) => (
          <Card key={i} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xl">
                  {app.icon}
                </div>
                {app.installed && (
                  <Badge variant="secondary" className="gap-1">
                    <Check className="h-3 w-3" /> Installed
                  </Badge>
                )}
              </div>
              <CardTitle className="mt-4">{app.name}</CardTitle>
              <CardDescription>{app.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between gap-4">
              <p className="text-sm text-muted-foreground">{app.description}</p>
              <Button
                variant={app.installed ? "outline" : "default"}
                onClick={() => toggleInstall(app.name, app.installed)}
              >
                {app.installed ? "Manage" : "Install"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
