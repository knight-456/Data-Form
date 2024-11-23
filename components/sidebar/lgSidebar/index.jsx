"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { ChevronsRight, ChevronRight } from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { sidebarLinks } from '../data';

import { cn } from '@/lib/utils';


const LgSideBarView = () => {

    const [isExpand, setIsExpand] = useState(true)

    const pathname = usePathname()

    return (
        <div className="sticky top-0 z-50 h-screen flex flex-row border-r shadow">
            <div
                className={cn(
                    "h-screen overflow-y-auto scrollbar-thin transition-all ease-in-out duration-300",
                    !!isExpand ? "visible w-[14rem]" : "invisible w-0"
                )}
            >
                <div className={"w-full h-16 p-2"}>
                    <div className={"w-full h-full flex flex-nowrap items-center justify-between gap-1 group cursor-pointer rounded-md hover:bg-muted p-2 group"}>
                        <div className={"flex flex-nowrap items-center justify-start gap-2"}>
                            <div className={"w-8 h-8 overflow-hidden rounded"}>
                                <img
                                    src={""}
                                    alt={"Dkc-exports"}
                                    className={"w-full h-full object-cover"}
                                />
                            </div>
                            <span className={cn("font-semibold text-base whitespace-nowrap capitalize")}>
                                {"DKC"}
                            </span>
                        </div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <button
                                        className={cn("p-1 shadow-lg rounded-full group-hover:bg-background")}
                                        onClick={(e) => { e.stopPropagation(); setIsExpand(false); }}
                                    >
                                        <ChevronsRight className={cn("text-lg rotate-180")} />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent placement={"right"}>
                                    <p>{"Collapse"}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <div className={"w-full space-y-2 p-2"}>
                    {Object.values(sidebarLinks).map(sidebarItem => (
                        <Link
                            key={sidebarItem.key}
                            className={cn("w-full flex items-center justify-between gap-2 group cursor-pointer p-2 rounded-md hover:bg-muted",
                                (pathname.match(sidebarItem?.regex)) ? "bg-primary hover:bg-primary text-primary-foreground hover:text-primary-foreground" : ""
                            )}
                            href={sidebarItem?.path}
                        >
                            <div className={"flex flex-nowrap items-center justify-start gap-2"}>
                                <sidebarItem.icon size={20} />
                                <span className={cn("text-left whitespace-nowrap truncate")}>
                                    {sidebarItem?.name}
                                </span>
                            </div>
                            {!!Object.keys(sidebarItem?.child)?.length &&
                                <ChevronRight size={20} />
                            }
                        </Link>
                    ))}
                </div>
            </div>
            <div className={cn(
                "relative transition-all ease-in-out duration-100",
                !!isExpand ? "invisible w-0" : "visible w-full delay-100"
            )}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <button
                                className={cn("p-1 mt-5 -mr-4 shadow-lg rounded-full bg-muted")}
                                onClick={() => setIsExpand(true)}
                            >
                                <ChevronsRight className={cn("text-lg")} />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent placement={"right"}>
                            <p>{"Expand"}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}

export default LgSideBarView;