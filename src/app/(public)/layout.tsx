import React from "react";
import { Header } from "@/components/public/header";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col bg-background selection:bg-brand/20 selection:text-brand">
            <Header />
            <main className="flex-1 pt-16">
                {children}
            </main>
        </div>
    );
}
