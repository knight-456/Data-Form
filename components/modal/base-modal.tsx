'use client';

import {
    Dialog,
    DialogOverlay,
    DialogContent,
} from '@/components/ui/dialog';

import { useModal } from '@/app/provider/modal.provider';

import { cn } from '@/lib/utils';

type Props = {
    heading?: React.ReactNode;
    children: React.ReactNode
    defaultOpen?: boolean
    contentClassName?: string
}

const BaseModal = ({ children, defaultOpen, heading, contentClassName }: Props) => {
    const { isOpen, setClose } = useModal()
    return (
        <Dialog
            open={isOpen || defaultOpen}
            onOpenChange={setClose}
        >
            <DialogOverlay className={"fixed inset-0 bg-black bg-opacity-20"}>
                {/* <DialogContent className={cn("overflow-hidden md:max-h-[700px] md:h-fit h-screen bg-card", contentClassName)}> */}
                <DialogContent className={cn("overflow-hidden md:h-fit h-screen bg-card", contentClassName)}>
                    {heading}
                    {children}
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    )
}

export default BaseModal;