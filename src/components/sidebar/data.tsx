import { LayoutDashboard, User, Palette } from "lucide-react";

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
    theme: {
        key: "theme",
        name: "Theme Settings",
        icon: Palette,
        path: "/theme",
        regex: /^\/theme$/,
        child: {},
    },
}