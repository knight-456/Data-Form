import React from 'react';

import { z } from 'zod';
import { useFormContext } from 'react-hook-form';

import { Plus } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import BaseModal from '@/components/modal/base-modal';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

import { formSchema } from '../../data';
import AddFabricDetail from '../../_popups/addFabricDetail';

import { useModal } from '@/app/provider/modal.provider';

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

    const { getValues } = useFormContext<z.infer<typeof formSchema>>()

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

            <Label>{"Fabrics"}</Label>

            {!!getValues("fabrics")?.length &&
                <></>
            }
            {(!getValues("fabrics") || (getValues("fabrics")?.length === 0)) &&
                <button
                    className={"w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-muted rounded-md"}
                    onClick={onHandleAddFabrics}
                >
                    <Plus size={20} />
                    {"Add Fabrics"}
                </button>
            }
        </Card>
    )
}

export default FabricSection;