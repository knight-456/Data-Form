import React from 'react';

import { z } from 'zod';
import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { formSchema } from '../../data';

const OrderInfo = () => {

    const { control, register } = useFormContext<z.infer<typeof formSchema>>()

    return (
        <>
            <FormField
                control={control}
                name={"productionPerDayPerMachine"}
                render={() => (
                    <FormItem className={"col-span-full md:col-span-1"}>
                        <FormLabel>{"Production Per Day Per Machine"}<span className={"text-destructive"}>{"*"}</span></FormLabel>
                        <FormControl>
                            <Input
                                placeholder={"e.g. 5"}
                                {...register("productionPerDayPerMachine")}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name={"totalOrderQuantity"}
                render={() => (
                    <FormItem className={"col-span-full md:col-span-1"}>
                        <FormLabel>{"Total Order Quantity"}<span className={"text-destructive"}>{"*"}</span></FormLabel>
                        <FormControl>
                            <Input
                                placeholder={"e.g. 12000"}
                                {...register("totalOrderQuantity")}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}

export default OrderInfo;