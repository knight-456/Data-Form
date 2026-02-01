"use client";
"use strict";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const BusinessHoursCard = () => {
  const handleDayToggle = (day: string, checked: boolean) => {
    toast.success(`${day} marked as ${checked ? "open" : "closed"}`);
  };

  const handleTimeChange = (
    day: string,
    type: "start" | "end",
    time: string,
  ) => {
    // Logic to save time
    console.log(`Changed ${type} time for ${day} to ${time}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Hours</CardTitle>
        <CardDescription>
          Configure your organization's operating hours and work week.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {days.map((day) => (
          <div key={day} className="grid grid-cols-12 items-center gap-4">
            <div className="col-span-3 flex items-center space-x-2">
              <Checkbox
                id={`day-${day}`}
                defaultChecked={day !== "Saturday" && day !== "Sunday"}
                onCheckedChange={(checked: boolean) =>
                  handleDayToggle(day, checked)
                }
              />
              <Label htmlFor={`day-${day}`}>{day}</Label>
            </div>
            <div className="col-span-9 flex items-center gap-2">
              <Select
                defaultValue="09:00"
                onValueChange={(v) => handleTimeChange(day, "start", v)}
              >
                <SelectTrigger className="w-[110px]">
                  <SelectValue placeholder="Start" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="08:00">08:00 AM</SelectItem>
                  <SelectItem value="09:00">09:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-muted-foreground">-</span>
              <Select
                defaultValue="17:00"
                onValueChange={(v) => handleTimeChange(day, "end", v)}
              >
                <SelectTrigger className="w-[110px]">
                  <SelectValue placeholder="End" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="16:00">04:00 PM</SelectItem>
                  <SelectItem value="17:00">05:00 PM</SelectItem>
                  <SelectItem value="18:00">06:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
