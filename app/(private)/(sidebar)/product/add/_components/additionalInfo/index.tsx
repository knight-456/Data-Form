import React from 'react';

import { z } from 'zod';
import { useFormContext } from 'react-hook-form';

import { CirclePlus, Trash2 } from 'lucide-react';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import OptionSelector from '@/components/option-selector';

import { accessoriesEnums, formSchema, trimsEnums } from '../../data';

const AdditionInfo = () => {

    const { control } = useFormContext<z.infer<typeof formSchema>>()

    return (
        <>
            <FormField
                control={control}
                name={"trims"}
                render={({ field: { value, onChange } }) => (
                    <FormItem className={"col-span-full md:col-start-1 md:col-span-1"}>
                        <div className={"flex items-center justify-between gap-3"}>
                            <FormLabel>{"Trims:"}</FormLabel>
                            <OptionSelector
                                options={Object.values(trimsEnums)?.filter((trimItem) => !value?.map((item) => item?.key)?.includes(trimItem?.key))}
                                selectedOption={<CirclePlus size={20} className={"cursor-pointer"} />}
                                onHandleSelectOption={(option) => onChange([...value || [], option])}
                            />
                        </div>
                        <FormControl>
                            <div className={""}>
                                {!!value?.length &&
                                    <div className={"flex flex-wrap items-center gap-5"}>
                                        {value?.map((trimItem) => (
                                            <div key={trimItem?.key} className={"w-max px-3 py-2 bg-muted flex items-center justify-between gap-5"}>
                                                {trimItem?.label}
                                                <Trash2
                                                    className={"cursor-pointer"}
                                                    size={16}
                                                    onClick={() => onChange(value?.filter((item) => item?.key !== trimItem?.key))}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                }
                                {(!value || (value?.length === 0)) &&
                                    <>
                                        <span>{"Want to add "}</span>
                                        <OptionSelector
                                            options={Object.values(trimsEnums)?.filter((trimItem) => !value?.map((item) => item?.key)?.includes(trimItem?.key))}
                                            selectedOption={<span className={"text-blue-700 cursor-pointer"}>{" Trims"}</span>}
                                            onHandleSelectOption={(option) => onChange([...value || [], option])}
                                        />
                                        {"?"}
                                    </>
                                }
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name={"accessories"}
                render={({ field: { value, onChange } }) => (
                    <FormItem className={"col-span-full md:col-span-1"}>
                        <div className={"flex items-center justify-between gap-3"}>
                            <FormLabel>{"Accessories:"}</FormLabel>
                            <OptionSelector
                                options={Object.values(accessoriesEnums)?.filter((accessoryItem) => !value?.map((item) => item?.key)?.includes(accessoryItem?.key))}
                                selectedOption={<CirclePlus size={20} className={"cursor-pointer"} />}
                                onHandleSelectOption={(option) => onChange([...value || [], option])}
                            />
                        </div>
                        <FormControl>
                            <div className={""}>
                                {!!value?.length &&
                                    <div className={"flex flex-wrap items-center gap-5"}>
                                        {value?.map((accessoryItem) => (
                                            <div key={accessoryItem?.key} className={"w-max px-3 py-2 bg-muted flex items-center justify-between gap-5"}>
                                                {accessoryItem?.label}
                                                <Trash2
                                                    className={"cursor-pointer"}
                                                    size={16}
                                                    onClick={() => onChange(value?.filter((item) => item?.key !== accessoryItem?.key))}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                }
                                {(!value || (value?.length === 0)) &&
                                    <>
                                        <span>{"Want to add "}</span>
                                        <OptionSelector
                                            options={Object.values(accessoriesEnums)?.filter((accessoryItem) => !value?.map((item) => item?.key)?.includes(accessoryItem?.key))}
                                            selectedOption={<span className={"text-blue-700 cursor-pointer"}>{" Accessories"}</span>}
                                            onHandleSelectOption={(option) => onChange([...value || [], option])}
                                        />
                                        {"?"}
                                    </>
                                }
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}

export default AdditionInfo;