"use client"

import { useEffect, useState } from "react";

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            storageKey="theme_mode"
            enableSystem
            disableTransitionOnChange
            {...props}
        >
            {children}
        </NextThemesProvider>
    )
}

export default ThemeProvider;