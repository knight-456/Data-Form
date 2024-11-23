"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
// import { type ThemeProviderProps } from "next-themes/dist/types"

const ThemeProvider = ({ children, ...props }: any) => {
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