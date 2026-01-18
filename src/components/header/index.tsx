"use client";

import React from 'react';

import { useTheme } from 'next-themes';

import { Check, LogOut, MoonIcon, Settings, SunIcon } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { themeModeConst } from './data';

const Header = () => {

    const { theme, setTheme } = useTheme()

    return (
        <div className={"w-full sticky top-0 z-40 bg-background/50 backdrop-blur flex items-center justify-between gap-3 h-16 p-5 shadow border-b"}>
            <span className={"font-medium text-xl md:text-2xl text-primary capitalize"}>
                {"DKC"}
            </span>
            <div className={"flex items-center justify-end gap-5 pr-0 md:pr-5"}>
                <DropdownMenu>
                    <DropdownMenuTrigger className={"cursor-pointer"} asChild>
                        <Avatar>
                            <AvatarImage
                                src={""}
                                alt={"jashwant rana"}
                            />
                            <AvatarFallback className={"capitalize bg-primary text-primary-foreground"}>
                                {"JR"}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={"rounded-none border-none bg-none p-0 shadow-none"} align="end">
                        <Card className="w-[350px]">
                            <CardContent className={"w-full px-0 space-y-3"}>
                                <div className={"w-full p-4 flex flex-col items-center justify-center gap-3"}>
                                    <Avatar className={"w-[6rem] h-[6rem]"}>
                                        <AvatarImage
                                            src={""}
                                            alt={"jashwant"}
                                            className={"w-full h-full"}
                                        />
                                        <AvatarFallback className={"capitalize bg-primary text-primary-foreground"}>
                                            {"JR"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className={"font-medium text-base capitalize line-clamp-1"}>
                                        {`Jashwant R.`}
                                    </span>
                                    <span className={"font-normal text-sm text-muted-foreground line-clamp-1"}>
                                        {"ranajashwant24@gmail.com"}
                                    </span>
                                </div>
                                <Separator className={"w-full border"} />
                                <div className={"w-full space-y-3"}>
                                    <Button variant={"ghost"} className={"w-full flex items-center justify-start gap-1.5 rounded-none h-10"}>
                                        <Settings />
                                        {"Settings"}
                                    </Button>
                                    <Separator className={"w-full border"} />
                                    <Button variant={"ghost"} className={"w-full flex items-center justify-start gap-1.5 rounded-none h-10"}>
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
                                {(theme === themeMode?.key) &&
                                    <Check size={22} />
                                }
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Header;