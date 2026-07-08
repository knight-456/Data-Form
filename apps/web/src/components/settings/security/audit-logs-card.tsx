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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const auditLogsData = [
  {
    id: "log-1",
    action: "User Login",
    user: "admin@example.com",
    timestamp: "2024-04-20 10:30 AM",
    status: "Success",
  },
  {
    id: "log-2",
    action: "Update Settings",
    user: "admin@example.com",
    timestamp: "2024-04-19 02:15 PM",
    status: "Success",
  },
  {
    id: "log-3",
    action: "Invite User",
    user: "manager@example.com",
    timestamp: "2024-04-18 11:00 AM",
    status: "Pending",
  },
  {
    id: "log-4",
    action: "Failed Login",
    user: "unknown@example.com",
    timestamp: "2024-04-18 09:45 AM",
    status: "Failed",
  },
];

export const AuditLogsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audit Logs</CardTitle>
        <CardDescription>
          Recent sensitive actions performed within your organization.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditLogsData.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="font-medium">{log.action}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell className="text-right">{log.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
