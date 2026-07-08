"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "react-hot-toast";

export const DomainsCard = () => {
  const [domains, setDomains] = useState([
    "acme-corp.com",
    "partners.acme.com",
  ]);
  const [newDomain, setNewDomain] = useState("");

  const handleAddDomain = () => {
    if (!newDomain) return;
    if (domains.includes(newDomain)) {
      toast.error("Domain already filtered");
      return;
    }
    setDomains([...domains, newDomain]);
    setNewDomain("");
    toast.success("Domain added");
  };

  const handleRemoveDomain = (domain: string) => {
    setDomains(domains.filter((d) => d !== domain));
    toast.success("Domain removed");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Whitelisted Domains</CardTitle>
        <CardDescription>
          Manage domains allowed for user sign-ups or email integration.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="example.com"
            value={newDomain}
            onChange={(e) => setNewDomain(e.target.value)}
          />
          <Button onClick={handleAddDomain}>Add Domain</Button>
        </div>
        <div className="space-y-4">
          {domains.map((domain) => (
            <div
              key={domain}
              className="flex items-center justify-between border p-3 rounded-md"
            >
              <span>{domain}</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={() => handleRemoveDomain(domain)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
