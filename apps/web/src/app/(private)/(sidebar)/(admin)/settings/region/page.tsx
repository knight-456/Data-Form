"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SettingsHeader } from "@/components/settings/settings-header";
import { toast } from "react-hot-toast";

export default function RegionSettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Region & Preferences"
        description="Manage localization settings like timezone, currency, and date formats."
      />
      <div className="grid gap-6">
        <LocalizationCard />
        <DateFormatCard />
      </div>
    </div>
  );
}

const LocalizationCard = () => {
  const handleUpdate = (type: string, val: string) => {
    toast.success(`${type} updated to ${val}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Localization</CardTitle>
        <CardDescription>
          Set your organization's default region settings.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Timezone</Label>
            <Select
              defaultValue="utc"
              onValueChange={(v) => handleUpdate("Timezone", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">
                  UTC (Coordinated Universal Time)
                </SelectItem>
                <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                <SelectItem value="ist">IST (Indian Standard Time)</SelectItem>
                <SelectItem value="gmt">GMT (Greenwich Mean Time)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Currency</Label>
            <Select
              defaultValue="usd"
              onValueChange={(v) => handleUpdate("Currency", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD ($) - US Dollar</SelectItem>
                <SelectItem value="eur">EUR (€) - Euro</SelectItem>
                <SelectItem value="gbp">GBP (£) - British Pound</SelectItem>
                <SelectItem value="inr">INR (₹) - Indian Rupee</SelectItem>
                <SelectItem value="jpy">JPY (¥) - Japanese Yen</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DateFormatCard = () => {
  const handleUpdate = (type: string, val: string) => {
    toast.success(`${type} updated`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Date & Time Format</CardTitle>
        <CardDescription>
          Customize how dates and times are displayed.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Date Format</Label>
            <Select
              defaultValue="mdy"
              onValueChange={(v) => handleUpdate("Date format", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mdy">MM/DD/YYYY (12/31/2024)</SelectItem>
                <SelectItem value="dmy">DD/MM/YYYY (31/12/2024)</SelectItem>
                <SelectItem value="ymd">YYYY-MM-DD (2024-12-31)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Time Format</Label>
            <Select
              defaultValue="12h"
              onValueChange={(v) => handleUpdate("Time format", v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12h">12-Hour (01:00 PM)</SelectItem>
                <SelectItem value="24h">24-Hour (13:00)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
