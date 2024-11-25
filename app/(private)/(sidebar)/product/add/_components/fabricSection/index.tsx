import React from 'react';

import { EllipsisVertical, Plus } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import BaseModal from '@/components/modal/base-modal';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import AddFabricDetail from '../../_popups/addFabricDetail';

import { useSelector } from 'react-redux';

import { useModal } from '@/app/provider/modal.provider';
import { fabricNameEnums } from '../../data';

const FabricHeader = () => {
    return (
        <div className={"space-y-5 mb-5"}>
            <DialogHeader>
                <DialogTitle className={"text-xl"}>
                    {"Add Fabric"}
                </DialogTitle>
            </DialogHeader>
            <div className={"-mx-5"}>
                <Separator className={"w-full"} />
            </div>
        </div>
    )
}

const FabricSection = () => {
    const { fabricList } = useSelector((state: any) => state.product)

    const { setOpen, setClose } = useModal()

    const onHandleAddFabrics = () => {
        setOpen(
            <BaseModal heading={<FabricHeader />} contentClassName={"w-full max-w-2xl"}>
                <AddFabricDetail setClose={setClose} />
            </BaseModal>
        )
    }

    return (
        <Card className={"col-span-full p-5 rounded-lg space-y-3"}>

            <div className={"flex items-center justify-between gap-5"}>
                <Label>{"Fabrics"}</Label>
                {!!fabricList?.data?.length &&
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <EllipsisVertical size={20} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuGroup>
                                {fabricList?.data?.map((item: any, index: number) => (
                                    <DropdownMenuItem key={index}>
                                        {fabricNameEnums[item?.fabricName as keyof typeof fabricNameEnums]?.label}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                }
            </div>
            <button
                type={"button"}
                className={"w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-muted rounded-md"}
                onClick={onHandleAddFabrics}
            >
                <Plus size={20} />
                {"Add Fabrics"}
            </button>
        </Card>
    )
}

export default FabricSection;