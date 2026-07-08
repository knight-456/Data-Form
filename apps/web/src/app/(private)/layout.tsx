'use client'
import React from 'react'
import { PrivateProvider } from '@/provider/private.provider'

import { RoleSwitcher } from '@/components/dev/role-switcher'

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    return (
        <PrivateProvider>
            {children}
            <RoleSwitcher />
        </PrivateProvider>
    )
}
