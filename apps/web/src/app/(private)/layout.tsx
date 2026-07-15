'use client'
import React from 'react'
import { PrivateProvider } from '@/provider/private.provider'

import { RoleSwitcher } from '@/components/dev/role-switcher'

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    const showRoleSwitcher = process.env.NEXT_PUBLIC_ENABLE_ROLE_SWITCHER === 'true'

    return (
        <PrivateProvider>
            {children}
            {showRoleSwitcher && <RoleSwitcher />}
        </PrivateProvider>
    )
}
