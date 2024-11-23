import { Card } from "@/components/ui/card";

import { dashboardStats } from "../../data";

interface DashboardStatCardProps {
    statItem: typeof dashboardStats[keyof typeof dashboardStats];
}

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({ statItem }) => {

    switch (statItem.key) {
        case dashboardStats.users.key:
            statItem.data = 0
            break;
        case dashboardStats.tutors.key:
            statItem.data = 0
            break;
        case dashboardStats.products.key:
            statItem.data = 0
            break;
        case dashboardStats.transactions.key:
            statItem.data = 0
            break;
        case dashboardStats.bookings.key:
            statItem.data = 0
            break;
        case dashboardStats.subscriptions.key:
            statItem.data = 0
            break;
        case dashboardStats.pending_withdrawals.key:
            statItem.data = 0
            break;
        case dashboardStats.approved_withdrawals.key:
            statItem.data = 0
            break;
        default:
            statItem.data = 0
            break;
    }

    return (
        <Card className={"px-5 py-3 rounded-lg space-y-3"}>
            <div className={"flex justify-between"}>
                {statItem.icon}
                <span className={"font-bodyComp font-medium text-lg"}>
                    {statItem.label}
                </span>
            </div>
            <div className={"flex justify-between items-end"}>
                <span className={"font-bodyPri font-bold text-xl"}>{statItem.data}</span>
                <span className={"font-bodyPri font-normal text-sm"}>{statItem.unit}</span>
            </div>
        </Card>
    )
}

export default DashboardStatCard;