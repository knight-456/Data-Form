"use client";

import { useMemo, useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { ChevronRight, ChevronsRight } from 'lucide-react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetOverlay,
    SheetTrigger
} from '@/components/ui/sheet';

import { sidebarLinks } from '../data';

import { cn } from '@/lib/utils';

const ChildMenuItem = ({ sidebarItem }) => {
    const pathname = usePathname()

    const isActiveLink = useMemo(() => (pathname.match(sidebarItem?.regex)), [pathname, sidebarItem?.regex])

    const [toggleItem, setToggleItem] = useState(isActiveLink)

    return (
        <div className={"relative space-y-2 group"}>
            <Link
                key={sidebarItem.key}
                className={cn(
                    "cursor-pointer p-2 flex flex-row flex-nowrap items-center justify-between rounded-md hover:bg-muted group",
                    isActiveLink ? "bg-primary hover:bg-primary text-primary-foreground hover:text-primary-foreground" : ""
                )}
                href={sidebarItem?.path}
            >
                <div className={"flex flex-nowrap items-center justify-start gap-2"}>
                    <sidebarItem.icon size={20} />
                    <span className={cn("text-left whitespace-nowrap truncate")}>
                        {sidebarItem?.name}
                    </span>
                </div>
            </Link>
            {!!Object.keys(sidebarItem?.child)?.length &&
                <button
                    className={cn("absolute top-0 right-2 shadow-lg rounded-full group-hover:bg-background", isActiveLink && "!bg-background")}
                    onClick={(e) => { e.stopPropagation(); setToggleItem(s => !s); }}
                >
                    <ChevronRight size={20} className={cn("rotate-0 transition-all ease-in-out duration-150", toggleItem && "rotate-90")} />
                </button>
            }
            {(toggleItem && !!Object.keys(sidebarItem?.child)?.length) && (
                <ChildMenu key={sidebarItem.key} childItems={sidebarItem?.child} />
            )}
        </div>
    )
}

const ChildMenu = ({ childItems }) => {
    return (
        <div className={"w-full space-y-2 border-l pl-2"}>
            {Object.values(childItems).map((sidebarItem) => (
                <ChildMenuItem key={sidebarItem.key} sidebarItem={sidebarItem} />
            ))}
        </div>
    )
}

const SmSideBarView = () => {

    return (
        <Sheet defaultOpen={false}>
            <SheetOverlay className='bg-black/10' />
            <SheetContent side="left" closeBtn={false} className={"p-0"}>
                <SheetHeader className={"w-full h-16 p-2"}>
                    <div className={"w-full h-full flex flex-nowrap items-center justify-between gap-1 group cursor-pointer rounded-md hover:bg-muted p-2 group"}>
                        <div className={"flex flex-nowrap items-center justify-start gap-2"}>
                            <div className={"w-8 h-8 overflow-hidden rounded"}>
                                <img
                                    src={""}
                                    alt={"DKC"}
                                    className={"w-full h-full object-cover"}
                                />
                            </div>
                            <span className={cn("font-semibold text-base whitespace-nowrap capitalize")}>
                                {"DKC"}
                            </span>
                        </div>
                        <SheetClose
                            className={cn("p-1 shadow-lg rounded-full group-hover:bg-background")}
                        >
                            <ChevronsRight className={cn("text-lg rotate-180")} />
                        </SheetClose>
                    </div>
                </SheetHeader>
                <SheetDescription className="w-full p-2">
                    <ChildMenu childItems={sidebarLinks} />
                </SheetDescription>
            </SheetContent>
            <div className="sticky top-0 z-50 h-screen flex flex-row border-r shadow">
                <SheetTrigger
                    className={cn("p-1 h-fit mt-5 -mr-4 shadow-lg rounded-full bg-muted")}
                >
                    <ChevronsRight className={cn("text-lg")} />
                </SheetTrigger>
            </div>
        </Sheet>
    )
}

export default SmSideBarView;