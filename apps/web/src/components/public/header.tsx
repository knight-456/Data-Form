"use client";

import Link from "next/link";
import { Rocket, LogIn, LayoutDashboard, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="p-2 bg-brand-gradient rounded-lg shadow-md">
                        <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                        BTL
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-2 sm:gap-4">
                    <Link href="/settings/theme">
                        <Button variant="ghost" size="icon" title="Theme Settings">
                            <Settings className="w-5 h-5 text-muted-foreground" />
                        </Button>
                    </Link>

                    <div className="h-6 w-px bg-border/50 hidden sm:block" />

                    <Link href="/login">
                        <Button variant="ghost" className="gap-2 hidden sm:flex">
                            <LogIn className="w-4 h-4" />
                            Login
                        </Button>
                    </Link>

                    <Link href="/dashboard">
                        <Button variant="brand" className="gap-2 shadow-lg shadow-brand/20">
                            <LayoutDashboard className="w-4 h-4" />
                            <span className="hidden sm:inline">Dashboard</span>
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
