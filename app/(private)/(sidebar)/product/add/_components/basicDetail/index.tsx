"use client";

import React from 'react';

import { z } from 'zod';
import { useFormContext } from 'react-hook-form';

import DatePicker from '@/components/date-picker/DatePicker';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { formSchema } from '../../data';

const BasicDetail = () => {

    const { control, trigger } = useFormContext<z.infer<typeof formSchema>>()

    return (
        <>
            <FormField
                control={control}
                name={"startDate"}
                render={({ field: { value, onChange } }) => (
                    <FormItem className={"col-span-full md:col-span-1"}>
                        <FormLabel>{"Start Date:"}<span className={"text-destructive"}>{"*"}</span></FormLabel>
                        <FormControl>
                            <DatePicker value={value} onChange={onChange} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name={"endDate"}
                render={({ field: { value, onChange } }) => (
                    <FormItem className={"col-span-full md:col-span-1"}>
                        <FormLabel>{"End Date:"}<span className={"text-destructive"}>{"*"}</span></FormLabel>
                        <FormControl>
                            <DatePicker value={value} onChange={onChange} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}

export default BasicDetail;