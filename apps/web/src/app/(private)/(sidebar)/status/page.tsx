"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const data = new Array(30).fill(0).map((_, i) => ({
  name: i,
  value: 98 + Math.random() * 2,
}));

export default function StatusPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">System Status</h2>
          <div className="flex items-center gap-2 mt-2 text-green-600">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {["API", "Database", "CDN"].map((service) => (
          <Card key={service}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{service}</CardTitle>
              <Badge
                variant="outline"
                className="text-green-600 border-green-200 bg-green-50"
              >
                99.99%
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="h-[80px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <Tooltip content={() => null} cursor={false} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#22c55e"
                      fill="#22c55e"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>30 days ago</span>
                <span>Today</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Past Incidents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">API Latency Resolved</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  The increased latency on the US-East region has been fully
                  resolved.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Oct 24, 14:30 UTC
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <h4 className="font-medium">Partial Outage: Search</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Search functionality was intermittently unavailable for 15
                  minutes.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Oct 20, 09:15 UTC
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
