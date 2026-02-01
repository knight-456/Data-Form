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
import { SettingsHeader } from "@/components/settings/settings-header";
import { toast } from "react-hot-toast";
import { Shield, Plus, MoreVertical, Edit2, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Role {
  id: string;
  name: string;
  users: number;
  description: string;
  type: "default" | "custom";
}

export default function RolesSettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Roles & Permissions"
        description="Manage user roles and access levels across your organization."
      >
        <Button onClick={() => toast.success("Create Role dialog would open")}>
          <Plus className="mr-2 h-4 w-4" /> Create Role
        </Button>
      </SettingsHeader>
      <RolesListCard />
    </div>
  );
}

const RolesListCard = () => {
  const [roles, setRoles] = useState<Role[]>([
    {
      id: "1",
      name: "Owner",
      users: 1,
      description: "Full access to all resources.",
      type: "default",
    },
    {
      id: "2",
      name: "Admin",
      users: 3,
      description: "Can manage team and settings.",
      type: "default",
    },
    {
      id: "3",
      name: "Editor",
      users: 12,
      description: "Can edit content but not settings.",
      type: "custom",
    },
    {
      id: "4",
      name: "Viewer",
      users: 5,
      description: "Read-only access.",
      type: "custom",
    },
  ]);

  const handleDelete = (id: string) => {
    setRoles(roles.filter((r) => r.id !== id));
    toast.success("Role deleted");
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {roles.map((role) => (
        <Card key={role.id} className="relative">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Shield className="h-8 w-8 text-primary mb-2" />
              {role.type === "custom" && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="-mr-2 -mt-2">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => toast.success("Edit dialog")}
                    >
                      <Edit2 className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => handleDelete(role.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
            <CardTitle className="text-lg">{role.name}</CardTitle>
            <CardDescription>{role.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-muted-foreground">
                {role.users} users
              </span>
              <Badge
                variant={role.type === "default" ? "secondary" : "outline"}
              >
                {role.type === "default" ? "System" : "Custom"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
