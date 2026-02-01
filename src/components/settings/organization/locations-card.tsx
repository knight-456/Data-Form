"use strict";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const LocationsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Locations</CardTitle>
        <CardDescription>
          Manage your physical office locations.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-4 border p-4 rounded-lg">
          <div className="bg-primary/10 p-2 rounded-full">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">Headquarters</h4>
            <p className="text-sm text-muted-foreground">
              123 Innovation Drive, Tech Valley, CA 94043
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 border p-4 rounded-lg">
          <div className="bg-primary/10 p-2 rounded-full">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">New York Office</h4>
            <p className="text-sm text-muted-foreground">
              456 Business Ave, Suite 100, New York, NY 10001
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
