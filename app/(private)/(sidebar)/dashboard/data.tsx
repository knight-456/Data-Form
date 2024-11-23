import { Users, User, Tag, BadgeDollarSign, Zap, Podcast, Wallet, WalletMinimal } from "lucide-react";

export const dashboardQueries = {
    dashboardDetail: {
        query: "dashboardDetail"
    }
}

export const dashboardStats = {
    users: {
        key: 'users',
        label: "Users",
        data: 0,
        icon: <Users className={"text-3xl"} />,
        unit: "",
    },
    tutors: {
        key: 'tutors',
        label: "Tutors",
        data: 0,
        icon: <User className={"text-3xl"} />,
        unit: "",
    },
    products: {
        key: 'products',
        label: "Products",
        data: 0,
        icon: <Tag className={"text-3xl"} />,
        unit: "",
    },
    transactions: {
        key: 'transactions',
        label: "Transactions",
        data: 0,
        icon: <BadgeDollarSign className={"text-3xl"} />,
        unit: "",
    },
    bookings: {
        key: 'bookings',
        label: "Bookings",
        data: 0,
        icon: <Zap className={"text-3xl"} />,
        unit: "Confirmed",
    },
    subscriptions: {
        key: "subscriptions",
        label: "Subscriptions",
        data: 0,
        icon: <Podcast className={"text-3xl"} />,
        unit: "",
    },
    pending_withdrawals: {
        key: "pending_withdrawals",
        label: "Pending Withdrawals",
        data: 0,
        icon: <WalletMinimal className={"text-3xl"} />,
        unit: "",
    },
    approved_withdrawals: {
        key: "approved_withdrawals",
        label: "Approved Withdrawals",
        data: 0,
        icon: <Wallet className={"text-3xl"} />,
        unit: "",
    }
}