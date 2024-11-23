import { LucideIcon } from "lucide-react"

export type TSidebarPageItem = {
    key: string,
    name: string,
    icon: LucideIcon,
    path: string,
    regex: RegExp,
    child?: TSidebarPageLinks,
}

export type TSidebarPageLinks = {
    [optionKey: string]: TSidebarPageItem
}