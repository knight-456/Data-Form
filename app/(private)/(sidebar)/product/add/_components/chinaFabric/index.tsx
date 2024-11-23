import React, { useMemo } from 'react';

import { z } from 'zod';
import { useFormContext } from 'react-hook-form';

import { ChevronsUpDown } from 'lucide-react';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import OptionSelector from '@/components/option-selector';

import { formSchema } from '../../data';

const ChinaFabric = () => {

    const { control, getValues } = useFormContext<z.infer<typeof formSchema>>()

    const majorFabricOptions = useMemo(() => {
        let options = [{ label: "None", key: "none" }]
        const availableFabrics = Object.values(getValues("fabrics"))?.map((fabricItem) => ({
            label: fabricItem?.fabricName,
            key: fabricItem?.fabricName
        }))
        if (!!getValues("fabrics")?.length) {
            options = [...options, ...availableFabrics]
        }

        return options;
    }, [getValues("fabrics")])

    return (
        <>
            <FormField
                control={control}
                name={"isChinaFabricPresent"}
                render={({ field: { value, onChange } }) => (
                    <FormItem className={"col-span-full"}>
                        <div className={"flex items-center justify-start gap-5 md:gap-10"}>
                            <FormLabel>{"Is China Fabric Present ?: "}</FormLabel>
                            <FormControl>
                                <div className={"flex items-center gap-5 md:gap-8"}>
                                    <Label className={"flex items-center gap-2 cursor-pointer"}>
                                        <Input
                                            type={"radio"}
                                            value={"yes"}
                                            checked={value === true}
                                            onChange={(event) => onChange(true)}
                                        />
                                        <span>{"Yes"}</span>
                                    </Label>
                                    <Label className={"flex items-center gap-2 cursor-pointer"}>
                                        <Input
                                            type={"radio"}
                                            value={"no"}
                                            checked={value === false}
                                            onChange={(event) => onChange(false)}
                                        />
                                        <span>{"No"}</span>
                                    </Label>
                                </div>
                            </FormControl>
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {!!getValues("isChinaFabricPresent") &&
                <FormField
                    control={control}
                    name={"endDate"}
                    render={({ field: { value, onChange } }) => (
                        <FormItem className={"col-span-full"}>
                            <FormLabel>{"End Date:"}</FormLabel>
                            <FormControl>
                                {"Select China fabric"}
                                {/* <DatePicker value={value} onChange={onChange} /> */}
                            </FormControl>
                            <FormMessage />
                            {/* {error && <span className={"text-destructive text-sm"}>{error?.message}</span>} */}
                        </FormItem>
                    )}
                />
            }
            <FormField
                control={control}
                name={"majorFabric"}
                render={({ field: { value, onChange } }) => (
                    <FormItem className={"col-span-full md:col-span-1 w-full flex flex-col md:flex-row md:items-center md:justify-start gap-5"}>
                        <FormLabel>{"Choose Major Fabric:"}</FormLabel>
                        <FormControl>
                            <OptionSelector
                                options={majorFabricOptions}
                                selectedOption={
                                    <Button variant={"ghost"} className={"flex-1 items-center justify-between gap-3 bg-muted text-muted-foreground capitalize"}>
                                        {value}
                                        <ChevronsUpDown size={16} />
                                    </Button>
                                }
                                onHandleSelectOption={(option) => onChange(option?.key)}
                                popoverContentClassName={"w-full md:w-96"}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}

export default ChinaFabric;