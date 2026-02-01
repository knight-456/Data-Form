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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const WebhooksCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Webhooks</CardTitle>
          <CardDescription>
            Receive real-time updates for system events.
          </CardDescription>
        </div>
        <Button size="sm" variant="outline">
          Add Endpoint
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between border p-4 rounded-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold">Order Created</h4>
              <Badge variant="default" className="bg-green-600">
                Active
              </Badge>
            </div>
            <p className="text-sm font-mono text-muted-foreground">
              https://api.myapp.com/webhooks/orders
            </p>
          </div>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </div>
        <div className="flex items-center justify-between border p-4 rounded-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold">User Signup</h4>
              <Badge variant="secondary">Inactive</Badge>
            </div>
            <p className="text-sm font-mono text-muted-foreground">
              https://api.myapp.com/webhooks/users
            </p>
          </div>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
