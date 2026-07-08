"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ChevronRight, ChevronsRight } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useAuth } from "@/provider/auth.provider";
import { pagesInfo, sidebarNavLinkConsts } from "@/utils/pages-info.utils";

import { cn } from "@/lib/utils";

const ChildMenuItem = ({ sidebarItem }) => {
  const pathname = usePathname();

  const isActiveLink = useMemo(
    () => pathname.startsWith(sidebarItem?.path),
    [pathname, sidebarItem?.path],
  );

  const [toggleItem, setToggleItem] = useState(isActiveLink);

  return (
    <div className={"relative space-y-2 group"}>
      <Link
        key={sidebarItem.key}
        className={cn(
          "cursor-pointer p-2 flex flex-row flex-nowrap items-center justify-between rounded-md hover:bg-muted group",
          isActiveLink
            ? "bg-primary hover:bg-primary text-primary-foreground hover:text-primary-foreground"
            : "",
        )}
        href={sidebarItem?.path}
      >
        <div className={"flex flex-nowrap items-center justify-start gap-2"}>
          <sidebarItem.icon size={20} />
          <span className={cn("text-left whitespace-nowrap truncate")}>
            {sidebarItem?.label}
          </span>
        </div>
      </Link>
      {!!(sidebarItem?.child && Object.keys(sidebarItem.child).length) && (
        <button
          className={cn(
            "absolute top-0 right-2 shadow-lg rounded-full group-hover:bg-background",
            isActiveLink && "!bg-background",
          )}
          onClick={(e) => {
            e.stopPropagation();
            setToggleItem((s) => !s);
          }}
        >
          <ChevronRight
            size={20}
            className={cn(
              "rotate-0 transition-all ease-in-out duration-150",
              toggleItem && "rotate-90",
            )}
          />
        </button>
      )}
      {toggleItem &&
        !!(sidebarItem?.child && Object.keys(sidebarItem.child).length) && (
          <ChildMenu key={sidebarItem.key} childItems={sidebarItem?.child} />
        )}
    </div>
  );
};

const ChildMenu = ({ childItems }) => {
  const { user } = useAuth();
  
  return (
    <div className={"w-full space-y-2 border-l pl-2"}>
      {Object.values(childItems).map((sidebarItem) => {
        const linkInfo = pagesInfo[sidebarItem.key];
        if (
          linkInfo &&
          linkInfo.role &&
          user &&
          !linkInfo.role.includes(user.role)
        ) {
          return null;
        }
        return (
          <ChildMenuItem key={sidebarItem.key} sidebarItem={sidebarItem} />
        );
      })}
    </div>
  );
};

const SmSideBarView = () => {
  return (
    <Sheet defaultOpen={false}>
      <SheetOverlay className="bg-black/10" />
      <SheetContent side="left" closeBtn={false} className={"p-0"}>
        <SheetHeader className={"w-full h-16 p-2"}>
          <div
            className={
              "w-full h-full flex flex-nowrap items-center justify-between gap-1 group cursor-pointer rounded-md hover:bg-muted p-2 group"
            }
          >
            <div
              className={"flex flex-nowrap items-center justify-start gap-2"}
            >
              <div
                className={
                  "w-8 h-8 overflow-hidden rounded bg-primary flex items-center justify-center text-primary-foreground font-bold"
                }
              >
                {"B"}
              </div>
              <span
                className={cn(
                  "font-semibold text-base whitespace-nowrap capitalize",
                )}
              >
                {"Beyond The Limits"}
              </span>
            </div>
            <SheetClose
              className={cn(
                "p-1 shadow-lg rounded-full group-hover:bg-background",
              )}
            >
              <ChevronsRight className={cn("text-lg rotate-180")} />
            </SheetClose>
          </div>
        </SheetHeader>
        <SheetDescription className="w-full p-2">
          <ChildMenu childItems={sidebarNavLinkConsts} />
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
  );
};

export default SmSideBarView;
