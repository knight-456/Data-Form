"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Plus, RefreshCw, Trash } from "lucide-react";
import { toast } from "react-hot-toast";

export default function DevelopersPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  const handleCreateKey = () => {
    toast.success("New API Key created: sk_test_...");
  };

  const handleRevoke = () => {
    toast.error("API Key revoked");
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Developer Portal</h2>
      </div>

      <Tabs defaultValue="api-keys" className="space-y-4">
        <TabsList>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="logs">Request Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="api-keys" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Standard API Keys</CardTitle>
              <CardDescription>
                These keys grant full access to your account resources. Keep
                them secret.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 border p-4 rounded-md">
                <div className="flex-1 space-y-1">
                  <p className="font-medium">Production Key</p>
                  <p className="font-mono text-sm text-muted-foreground">
                    sk_live_51J2...
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard("sk_live_51J2...")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="sm" onClick={handleRevoke}>
                  Revoke
                </Button>
              </div>
              <div className="flex items-center gap-4 border p-4 rounded-md">
                <div className="flex-1 space-y-1">
                  <p className="font-medium">Development Key</p>
                  <p className="font-mono text-sm text-muted-foreground">
                    sk_test_41K9...
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard("sk_test_41K9...")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="sm" onClick={handleRevoke}>
                  Revoke
                </Button>
              </div>
              <Button onClick={handleCreateKey}>
                <Plus className="mr-2 h-4 w-4" /> Create New Key
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks">
          <Card>
            <CardHeader>
              <CardTitle>Webhook Endpoints</CardTitle>
              <CardDescription>
                Configure URLs to receive event notifications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground border-2 border-dashed rounded-lg">
                <RefreshCw className="h-8 w-8 mb-4 opacity-50" />
                <h3 className="font-medium text-lg">No endpoints configured</h3>
                <p className="mb-4">You haven't set up any webhooks yet.</p>
                <Button
                  variant="outline"
                  onClick={() => toast("Endpoint creation dialog opened")}
                >
                  Add Endpoint
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>Recent Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[200, 200, 401, 200, 500].map((status, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 border-b last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono font-bold ${status === 200 ? "text-green-500" : "text-red-500"}`}
                      >
                        {status}
                      </span>
                      <span className="font-medium">POST /api/v1/users</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      15ms
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
