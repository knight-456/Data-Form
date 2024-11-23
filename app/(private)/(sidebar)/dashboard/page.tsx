"use client";

import { dashboardStats } from './data';
import DashboardStatCard from './_components/card/DashboardStatCard';

const DashboardPage = () => {

    return (
        <div className={"w-full p-5 space-y-5"}>

            {/* Header */}
            <h1 className="font-semibold text-2xl">{"Dashboard"}</h1>

            <div className={"grid grid-cols-2 lg:grid-cols-3 gap-3 w-full"}>
                {Object.keys(dashboardStats).map((item, idx) => (
                    <DashboardStatCard key={idx} statItem={dashboardStats[item as keyof typeof dashboardStats]} />
                ))}
            </div>
        </div>
    )
}

export default DashboardPage;