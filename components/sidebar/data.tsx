import { LayoutDashboard, User } from "lucide-react";

import { TSidebarPageLinks } from "./types";

export const sidebarLinks: TSidebarPageLinks = {
    dashboard: {
        key: "dashboard",
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
        regex: /^\/dashboard.*?$/,
        child: {},
    },
    product: {
        key: "product",
        name: "Product",
        icon: User,
        path: "product",
        regex: /^\/product.*?$/,
        child: {},
    },
}