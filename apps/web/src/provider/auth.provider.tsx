'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

import { localsConst } from '@/utils/utils.data'

type User = {
    role: string
    name: string
}

type AuthContextType = {
    user: User | null
    login: (role: string, name?: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const storedUser = window.localStorage.getItem(localsConst.leads_force_user.key)

        if (!storedUser) return

        try {
            const parsedUser = JSON.parse(storedUser) as User
            setUser(parsedUser)
        } catch {
            window.localStorage.removeItem(localsConst.leads_force_user.key)
        }
    }, [])

    const login = (role: string, name = 'Demo User') => {
        const nextUser = { role, name }
        window.localStorage.setItem(localsConst.leads_force_user.key, JSON.stringify(nextUser))
        window.localStorage.setItem(localsConst.leads_force_role.key, role)
        setUser(nextUser)
    }

    const logout = () => {
        window.localStorage.removeItem(localsConst.leads_force_user.key)
        window.localStorage.removeItem(localsConst.leads_force_role.key)
        setUser(null)
    }

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
