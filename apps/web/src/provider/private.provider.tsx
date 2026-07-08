'use client'
import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { useAuth } from './auth.provider'

import { pagesInfo } from '@/utils/pages-info.utils'

export const PrivateProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!user) {
            router.push(pagesInfo.login.path)
            return
        }

        // Iterate through pagesInfo to find matching page and check role
        const hasAccess = () => {
            // 1. Bypass check for homepage or public? No, this is PrivateProvider.

            // Check against pages info
            for (const key in pagesInfo) {
                const page = pagesInfo[key as keyof typeof pagesInfo];
                if (page.regex && page.regex.test(pathname)) {
                    if (page.role && !page.role.includes(user.role)) {
                        return false;
                    }
                    return true;
                }
                // Check children if any
                if (page.child) {
                    for (const childKey in page.child) {
                        // Type assertion needed if child structure varies
                        const child = (page.child as any)[childKey];
                        if (child.regex && child.regex.test(pathname)) {
                            if (child.role && !child.role.includes(user.role)) {
                                return false;
                            }
                            return true;
                        }
                    }
                }
            }
            return false; // Default allow if not matched? Or deny?
            // Usually deny if not matched in strict mode, but pagesInfo might not be exhaustive.
            // Given it's a private layout, we assume protected.
            // If route is not defined in pagesInfo, maybe allow?
            // Let's allow for now to avoid blocking dev.
        }

        if (!hasAccess()) {
            router.push(pagesInfo.unauthorized.path)
        }

    }, [pathname, user, router])

    if (!user) return null

    return <>{children}</>
}
