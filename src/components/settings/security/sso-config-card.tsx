"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "react-hot-toast";

export const SSOConfigCard = () => {
  const handleConfigure = (provider: string) => {
    toast.loading(`Opening configuration for ${provider}...`);
    setTimeout(() => toast.dismiss(), 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>SSO Configuration</CardTitle>
        <CardDescription>
          Manage Single Sign-On (SSO) providers for your organization.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between border rounded-lg p-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-medium">Google Workspace</span>
              <span className="text-sm text-muted-foreground">
                Sign in with Google
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="text-green-600 border-green-600"
            >
              Enabled
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleConfigure("Google")}
            >
              Configure
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between border rounded-lg p-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-medium">Microsoft Azure AD</span>
              <span className="text-sm text-muted-foreground">
                Sign in with Microsoft
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Disabled</Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleConfigure("Azure AD")}
            >
              Configure
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
