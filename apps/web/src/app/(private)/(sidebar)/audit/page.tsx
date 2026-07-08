"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const initialLogs = [
  {
    id: 1,
    action: "User Login",
    actor: "olivia.martin@email.com",
    ip: "192.168.1.1",
    date: "Oct 24, 2024 10:23 AM",
    status: "Success",
  },
  {
    id: 2,
    action: "Update Settings",
    actor: "jackson.lee@email.com",
    ip: "10.0.0.42",
    date: "Oct 24, 2024 11:05 AM",
    status: "Success",
  },
  {
    id: 3,
    action: "Delete Project",
    actor: "jackson.lee@email.com",
    ip: "10.0.0.42",
    date: "Oct 24, 2024 02:15 PM",
    status: "Warning",
  },
  {
    id: 4,
    action: "Failed Login",
    actor: "unknown",
    ip: "45.2.12.99",
    date: "Oct 25, 2024 03:00 AM",
    status: "Critical",
  },
  {
    id: 5,
    action: "API Key Created",
    actor: "olivia.martin@email.com",
    ip: "192.168.1.1",
    date: "Oct 25, 2024 09:30 AM",
    status: "Success",
  },
];

export default function AuditLogsPage() {
  const [logs, setLogs] = useState(initialLogs);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setLogs(
      initialLogs.filter(
        (log) =>
          log.action.toLowerCase().includes(query) ||
          log.actor.toLowerCase().includes(query) ||
          log.ip.includes(query),
      ),
    );
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Audit Logs</h2>
          <p className="text-muted-foreground">
            Detailed log of all changes and access events.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 max-w-sm">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search IP, User, or Action..."
          onChange={handleSearch}
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Actor</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.length > 0 ? (
              logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-mono text-xs">
                    {log.date}
                  </TableCell>
                  <TableCell className="font-medium">{log.action}</TableCell>
                  <TableCell>{log.actor}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {log.ip}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        log.status === "Success" ? "secondary" : "destructive"
                      }
                      className="uppercase text-[10px]"
                    >
                      {log.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center h-24">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
