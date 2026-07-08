"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const DesignationsCard = () => {
  const [designations, setDesignations] = useState([
    "Chief Executive Officer",
    "Product Manager",
    "Senior Software Engineer",
    "Sales Representative",
    "HR Specialist",
  ]);
  const [newDesignation, setNewDesignation] = useState("");
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    if (!newDesignation) return;
    setDesignations([...designations, newDesignation]);
    setNewDesignation("");
    setOpen(false);
    toast.success("Designation added");
  };

  const handleRemove = (title: string) => {
    setDesignations(designations.filter((t) => t !== title));
    toast.success("Designation removed");
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>Designations</CardTitle>
          <CardDescription>
            Define standard job titles and roles.
          </CardDescription>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="h-8 gap-1">
              <Plus className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Designation
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Designation</DialogTitle>
              <DialogDescription>
                Create a new job title for your organization.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={newDesignation}
                  onChange={(e) => setNewDesignation(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAdd}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {designations.map((title) => (
            <Badge
              key={title}
              variant="outline"
              className="text-sm py-1 pr-1 gap-1"
            >
              {title}
              <button
                className="hover:text-destructive cursor-pointer"
                onClick={() => handleRemove(title)}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
