'use client'
import { useAuth } from '@/provider/auth.provider'
import { Button } from '@/components/ui/button'
import { userRoleEnums } from '@/services/local/local.const'

export const RoleSwitcher = () => {
    const { user, login } = useAuth()

    if (process.env.NEXT_PUBLIC_ENABLE_ROLE_SWITCHER !== 'true') return null
    if (!user) return null

    return (
        <div className="fixed bottom-4 right-4 z-50 bg-foreground text-background p-2 rounded-md flex gap-2 items-center border border-border">
            <span className="text-xs font-mono">Role: {user.role}</span>
            <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs bg-background text-foreground hover:bg-muted"
                onClick={() => login(userRoleEnums.admin.value)}
            >
                Admin
            </Button>
            <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs bg-background text-foreground hover:bg-muted"
                onClick={() => login(userRoleEnums.employee.value)}
            >
                Employee
            </Button>
        </div>
    )
}
