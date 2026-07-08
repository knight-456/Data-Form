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

export const DepartmentsCard = () => {
  const [departments, setDepartments] = useState([
    "Engineering",
    "Sales",
    "Marketing",
    "Human Resources",
    "Finance",
  ]);
  const [newDept, setNewDept] = useState("");
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    if (!newDept) return;
    setDepartments([...departments, newDept]);
    setNewDept("");
    setOpen(false);
    toast.success("Department added");
  };

  const handleRemove = (dept: string) => {
    setDepartments(departments.filter((d) => d !== dept));
    toast.success("Department removed");
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>Departments</CardTitle>
          <CardDescription>
            Manage the different departments within your organization.
          </CardDescription>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="h-8 gap-1">
              <Plus className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Department
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Department</DialogTitle>
              <DialogDescription>
                Create a new department for your organization.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newDept}
                  onChange={(e) => setNewDept(e.target.value)}
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
          {departments.map((dept) => (
            <div key={dept} className="flex items-center gap-1">
              <Badge variant="secondary" className="text-sm py-1 pr-1 gap-1">
                {dept}
                <button
                  className="hover:text-destructive cursor-pointer"
                  onClick={() => handleRemove(dept)}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
