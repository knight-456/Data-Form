'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

import { userRoleEnums } from '@/services/local/local.const'

type User = {
    role: string
    name: string
}

type AuthContextType = {
    user: User | null
    login: (role: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // Initialize with ADMIN role to simulate logged in admin
    const [user, setUser] = useState<User | null>({
        role: userRoleEnums.admin.value,
        name: 'Mock Admin'
    })

    const login = (role: string) => {
        setUser({ role, name: 'Mock User' })
    }

    const logout = () => setUser(null)

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}
