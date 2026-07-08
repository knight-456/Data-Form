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
import { CreditCard, Trash2 } from "lucide-react";

export const PaymentMethodsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>
          Manage your credit cards and billing details.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between border p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Visa ending in 4242</p>
              <p className="text-sm text-muted-foreground">Expires 12/2025</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" className="w-full">
          Add Payment Method
        </Button>
      </CardContent>
    </Card>
  );
};
