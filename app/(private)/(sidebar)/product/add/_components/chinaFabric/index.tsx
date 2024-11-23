import React, { useMemo } from 'react';

import { z } from 'zod';
import { useFormContext } from 'react-hook-form';

import { ChevronsUpDown, Trash2 } from 'lucide-react';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import OptionSelector from '@/components/option-selector';

import { fabricNameEnums, formSchema } from '../../data';

import { useSelector } from 'react-redux';

const ChinaFabric = () => {
    const { fabricList } = useSelector((state: any) => state.product)

    const { control, getValues, trigger } = useFormContext<z.infer<typeof formSchema>>()

    const majorFabricOptions = useMemo(() => {
        let options = [{ label: "None", key: "none" }]
        const availableFabrics = fabricList?.data?.map((fabricItem: any) => ({
            label: fabricNameEnums[fabricItem?.fabricName as keyof typeof fabricNameEnums]?.label,
            key: fabricItem?.fabricName
        }))?.filter((item: any) => item.key !== getValues("majorFabric"))
        if (!!fabricList?.data?.length) {
            options = [...options, ...availableFabrics]
        }

        return options;
    }, [fabricList?.data, getValues("majorFabric")])

    const chinaFabricEnums = useMemo(() => {
        let options: any = []
        const availableFabrics = fabricList?.data?.map((fabricItem: any) => ({
            label: fabricNameEnums[fabricItem?.fabricName as keyof typeof fabricNameEnums]?.label,
            key: fabricItem?.fabricName
        }))?.filter((item: any) => !getValues("chinaFabric")?.map((chinaItem) => chinaItem?.key)?.includes(item.key))
        if (!!fabricList?.data?.length) {
            options = [...options, ...availableFabrics]
        }

        return options;
    }, [fabricList?.data, getValues("chinaFabric")])

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
                                            onChange={() => onChange(true)}
                                        />
                                        <span>{"Yes"}</span>
                                    </Label>
                                    <Label className={"flex items-center gap-2 cursor-pointer"}>
                                        <Input
                                            type={"radio"}
                                            value={"no"}
                                            checked={value === false}
                                            onChange={() => onChange(false)}
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
                    name={"chinaFabric"}
                    render={({ field: { value, onChange } }) => (
                        <FormItem className={"col-span-full md:col-start-1 md:col-span-1 w-full flex flex-col md:flex-row md:items-center md:justify-start gap-5"}>
                            <FormLabel className={"whitespace-nowrap"}>{"Select China Fabric:"}</FormLabel>
                            <FormControl>
                                <div className={"w-full inline-flex items-center gap-3"}>
                                    {!!value?.length &&
                                        <div className={"inline-flex items-center gap-3"}>
                                            {value?.map((chinaItem) => (
                                                <div key={chinaItem?.key} className={"w-max px-3 py-2 bg-muted flex items-center justify-between gap-5"}>
                                                    {chinaItem?.label}
                                                    <Trash2
                                                        className={"cursor-pointer"}
                                                        size={16}
                                                        onClick={() => onChange(value?.filter((item) => item?.key !== chinaItem?.key))}
                                                    />
                                                </div>
                                            ))}
                                            <OptionSelector
                                                options={chinaFabricEnums}
                                                selectedOption={
                                                    <Button variant={"ghost"} className={"w-fit items-center justify-between gap-3 bg-muted text-muted-foreground capitalize"}>
                                                        {"Add More"}
                                                        <ChevronsUpDown size={16} />
                                                    </Button>
                                                }
                                                onHandleSelectOption={(option) => {
                                                    onChange([...value || [], option])
                                                    trigger("chinaFabric")
                                                }}
                                                popoverContentClassName={"w-full md:w-96"}
                                            />
                                        </div>
                                    }
                                    {!value?.length &&
                                        <OptionSelector
                                            options={chinaFabricEnums}
                                            selectedOption={
                                                <Button variant={"ghost"} className={"flex-1 items-center justify-between gap-3 bg-muted text-muted-foreground capitalize"}>
                                                    {"Select China Fabric"}
                                                    <ChevronsUpDown size={16} />
                                                </Button>
                                            }
                                            onHandleSelectOption={(option) => {
                                                onChange([option])
                                                trigger("chinaFabric")
                                            }}
                                            popoverContentClassName={"w-full md:w-96"}
                                            emptyMessage={"Add fabric options to see list here .."}
                                        />
                                    }
                                </div>
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
                    <FormItem className={"col-span-full md:col-start-1 md:col-span-1 w-full flex flex-col md:flex-row md:items-center md:justify-start gap-5"}>
                        <FormLabel>{"Choose Major Fabric:"}</FormLabel>
                        <FormControl>
                            <OptionSelector
                                options={majorFabricOptions}
                                selectedOption={
                                    <Button variant={"ghost"} className={"flex-1 items-center justify-between gap-3 bg-muted text-muted-foreground capitalize"}>
                                        {fabricNameEnums[value as keyof typeof fabricNameEnums]?.label ?? "None"}
                                        <ChevronsUpDown size={16} />
                                    </Button>
                                }
                                onHandleSelectOption={(option) => {
                                    onChange(option?.key)
                                    trigger("majorFabric")
                                }}
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