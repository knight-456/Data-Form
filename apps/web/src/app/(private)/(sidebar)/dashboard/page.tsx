"use client";

import { dashboardStats } from "./data";
import DashboardStatCard from "./_components/card/DashboardStatCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardOverview } from "@/components/dashboard/overview";
import { RecentSales } from "@/components/dashboard/recent-sales";

const DashboardPage = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Object.keys(dashboardStats).map((item, idx) => (
          <DashboardStatCard
            key={idx}
            statItem={dashboardStats[item as keyof typeof dashboardStats]}
          />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Monthly revenue breakdown for the current year.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <DashboardOverview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
