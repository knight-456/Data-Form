"use client";

import React from "react";

import { useTheme } from "next-themes";

import {
  Check,
  LogOut,
  MoonIcon,
  Settings,
  SunIcon,
  Bell,
  UserPlus,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { themeModeConst } from "./data";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={
        "w-full sticky top-0 z-40 bg-background/95 backdrop-blur flex items-center justify-between gap-3 h-16 p-5 shadow border-b supports-[backdrop-filter]:bg-background/60"
      }
    >
      <span
        className={"font-medium text-xl md:text-2xl text-primary capitalize"}
      >
        {"Beyond The Limits"}
      </span>
      <div className={"flex items-center justify-end gap-5 pr-0 md:pr-5"}>
        <Button
          variant="outline"
          className="hidden md:flex gap-2 text-muted-foreground"
          onClick={() =>
            document.dispatchEvent(
              new KeyboardEvent("keydown", { key: "k", metaKey: true }),
            )
          }
        >
          <span className="text-xs">Search...</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-[1.2rem] w-[1.2rem]" />
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-600 border-2 border-background" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            <div className="space-y-4">
              <h4 className="font-medium leading-none">Notifications</h4>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <div className="rounded-full p-2 bg-blue-100/50 text-blue-600">
                    <UserPlus className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">New team member</p>
                    <p className="text-xs text-muted-foreground">
                      Jackson Lee joined the team.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <div className="rounded-full p-2 bg-yellow-100/50 text-yellow-600">
                    <Settings className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">System Alert</p>
                    <p className="text-xs text-muted-foreground">
                      Scheduled maintenance in 24h.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      5 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger className={"cursor-pointer"} asChild>
            <Avatar>
              <AvatarImage src={""} alt={"jashwant rana"} />
              <AvatarFallback
                className={"capitalize bg-primary text-primary-foreground"}
              >
                {"JR"}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={"rounded-none border-none bg-none p-0 shadow-none"}
            align="end"
          >
            <Card className="w-[350px]">
              <CardContent className={"w-full px-0 space-y-3"}>
                <div
                  className={
                    "w-full p-4 flex flex-col items-center justify-center gap-3"
                  }
                >
                  <Avatar className={"w-[6rem] h-[6rem]"}>
                    <AvatarImage
                      src={""}
                      alt={"jashwant"}
                      className={"w-full h-full"}
                    />
                    <AvatarFallback
                      className={
                        "capitalize bg-primary text-primary-foreground"
                      }
                    >
                      {"JR"}
                    </AvatarFallback>
                  </Avatar>
                  <span
                    className={"font-medium text-base capitalize line-clamp-1"}
                  >
                    {`Jashwant R.`}
                  </span>
                  <span
                    className={
                      "font-normal text-sm text-muted-foreground line-clamp-1"
                    }
                  >
                    {"ranajashwant24@gmail.com"}
                  </span>
                </div>
                <Separator className={"w-full border"} />
                <div className={"w-full space-y-3"}>
                  <Button
                    variant={"ghost"}
                    className={
                      "w-full flex items-center justify-start gap-1.5 rounded-none h-10"
                    }
                  >
                    <Settings />
                    {"Settings"}
                  </Button>
                  <Separator className={"w-full border"} />
                  <Button
                    variant={"ghost"}
                    className={
                      "w-full flex items-center justify-start gap-1.5 rounded-none h-10"
                    }
                  >
                    <LogOut />
                    {"LogOut"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">{"Toggle theme"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={"font-bodyPri"} align="end">
            {Object.values(themeModeConst).map((themeMode, index) => (
              <DropdownMenuItem
                key={index}
                className={"flex items-center justify-between gap-3"}
                onClick={() => setTheme(themeMode?.key)}
              >
                {themeMode?.label}
                {theme === themeMode?.key && <Check size={22} />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
