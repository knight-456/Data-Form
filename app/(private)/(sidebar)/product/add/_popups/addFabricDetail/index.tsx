"use client";

import React, { useMemo, useState } from 'react';

import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ChevronsUpDown, CirclePlus, LoaderPinwheel, OctagonX, Trash2 } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader } from '@/components/ui/card';

import OptionSelector from '@/components/option-selector';

import { fabricNameEnums, processNameEnums, skippedStagesEnums } from '../../data';

import { cn } from '@/lib/utils';
import { setFabricList } from '../../../_redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@/hooks/use-toast';

type TAddFabricDetailProps = {
    setClose: () => void
}

const formSchema = z.object({
    fabricName: z.string({ message: "Please select fabric name" }),
    perPieceRequirement: z.string().refine((value) => /^[0-9]*\.?[0-9]+$/.test(value) && parseFloat(value) > 0,
        { message: "Requirement should be a valid number greater than 0", }),
    chooseUnit: z.string({ message: "Please choose unit" }),
    processes: z.array(z.string()).min(1, { message: "Please select at least one process" }),
    color: z.array(z.string()).min(1, { message: "Please add at least one color" }),
    quantity: z.array(z.number()).min(1, { message: "Please add at least 1 quantity" }),
    stagesToBeSkipped: z.array(z.string()).optional()
})

const formDefaultValues = {
    fabricName: "",
    perPieceRequirement: "",
    chooseUnit: "meter",
    processes: [],
    color: [],
    quantity: [],
    stagesToBeSkipped: []
}

const initialColorQuantityState = {
    isFormEnabled: false,
    color: "",
    quantity: 0
}

const AddFabricDetail = ({ setClose }: TAddFabricDetailProps) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: formDefaultValues,
    })

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { isLoading, isValid, isSubmitting },
        getValues,
        setValue,
        trigger
    } = form;

    const { fabricList } = useSelector((state: any) => state.product)

    const [colorQuantityPayload, setColorQuantityPayload] = useState(initialColorQuantityState)

    const dispatcher = useDispatch()
    const { toast } = useToast()

    const onHandleChangeText = (key: string, value: string | number) => {
        setColorQuantityPayload({
            ...colorQuantityPayload,
            [key]: value
        })
    }

    const onHandleAddColorQuantity = () => {
        if (!colorQuantityPayload.color || !colorQuantityPayload.quantity) return;

        setValue("color", [...getValues("color"), colorQuantityPayload?.color])
        setValue("quantity", [...getValues("quantity"), colorQuantityPayload?.quantity])
        setColorQuantityPayload(initialColorQuantityState)
    }

    const onHandleRemoveColorQuantity = (color: string, quantity: number) => {
        const filteredColor = getValues("color")?.filter((colorItem) => colorItem !== color)
        const filteredQuantity = getValues("quantity")?.filter((quantityItem) => quantityItem !== quantity)
        setValue("color", filteredColor)
        setValue("quantity", filteredQuantity)
    }

    const onHandleSubmit = async (data: z.infer<typeof formSchema>) => {

        dispatcher(setFabricList({ isLoading: true }))
        try {
            setTimeout(() => {
                dispatcher(setFabricList({ data: fabricList?.data ? [data, ...fabricList?.data] : [data] }))
                setClose()
            }, 1000)
        } catch (error: any) {
            console.error(error?.message || "Something went wrong!")
            toast({
                variant: "destructive",
                description: error?.message || "Something went wrong!"
            })
        } finally {
            dispatcher(setFabricList({ isLoading: false }))
        }
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(onHandleSubmit)} className={"w-full space-y-5"}>
                <div className={"w-full grid grid-cols-2 gap-5 md:gap-8 p-5"}>
                    <FormField
                        control={control}
                        name={"fabricName"}
                        render={({ field: { value, onChange } }) => (
                            <FormItem className={"col-span-full flex flex-col gap-1.5"}>
                                <FormLabel>{"Fabric Name:"}<span className={"text-destructive"}>{"*"}</span></FormLabel>
                                <FormControl>
                                    <div className={"inline-flex flex-wrap items-center gap-3"}>
                                        <OptionSelector
                                            options={Object.values(fabricNameEnums)?.filter((fabricItem) => fabricItem?.key !== value)}
                                            searchable={true}
                                            selectedOption={
                                                <Button
                                                    variant={"outline"}
                                                    className={"w-full flex items-center justify-between gap-3"}
                                                >
                                                    {!!value ? fabricNameEnums[value as keyof typeof fabricNameEnums]?.label : "Select Fabric"}
                                                    <ChevronsUpDown size={20} />
                                                </Button>
                                            }
                                            onHandleSelectOption={(option) => onChange(option.key)}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name={"perPieceRequirement"}
                        render={({ field: { value, onChange } }) => (
                            <FormItem className={"col-span-full md:col-span-1 space-y-1.5"}>
                                <FormLabel>{"Per Piece Requirement:"}<span className={"text-destructive"}>{"*"}</span></FormLabel>
                                <FormControl>
                                    <Input placeholder={"0.5"} {...register("perPieceRequirement")} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name={"chooseUnit"}
                        render={({ field: { value, onChange } }) => (
                            <FormItem className={"col-span-full md:col-span-1 space-y-1.5"}>
                                <FormLabel>{"Choose Unit:"}<span className={"text-destructive"}>{"*"}</span></FormLabel>
                                <FormControl>
                                    <div className={"flex items-center gap-5 md:gap-8"}>
                                        <Label className={"flex items-center gap-2 cursor-pointer"}>
                                            <Input
                                                type={"radio"}
                                                value={"meter"}
                                                checked={value === "meter"}
                                                onChange={(event) => onChange(event.target.value)}
                                            />
                                            <span>{"M"}</span>
                                        </Label>
                                        <Label className={"flex items-center gap-2 cursor-pointer"}>
                                            <Input
                                                type={"radio"}
                                                value={"kg"}
                                                checked={value === "kg"}
                                                onChange={(event) => onChange(event.target.value)}
                                            />
                                            <span>{"Kg"}</span>
                                        </Label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name={"processes"}
                        render={({ field: { value, onChange } }) => (
                            <FormItem className={"col-span-full flex flex-col gap-1.5"}>
                                <div className={"flex items-center justify-between gap-3"}>
                                    <FormLabel>{"Processes:"}<span className={"text-destructive"}>{"*"}</span></FormLabel>
                                    <OptionSelector
                                        options={Object.values(processNameEnums)?.filter((processItem) => !value?.includes(processItem?.key))}
                                        selectedOption={<CirclePlus size={20} className={"cursor-pointer"} />}
                                        onHandleSelectOption={(option) => {
                                            trigger("processes")
                                            onChange([...value || [], option.key])
                                        }
                                        }
                                    />
                                </div>
                                <FormControl>
                                    <div className={"inline-flex flex-wrap items-center gap-3"}>
                                        {!!value?.length &&
                                            <div className={"inline-flex flex-wrap items-center gap-3"}>
                                                {value?.map((processItem, index) => (
                                                    <div key={index} className={"w-max px-3 py-2 bg-muted flex items-center justify-between gap-5"}>
                                                        {processNameEnums[processItem as keyof typeof processNameEnums]?.label}
                                                        <Trash2
                                                            className={"cursor-pointer"}
                                                            size={16}
                                                            onClick={() => onChange(value?.filter((item) => item !== processItem))}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {!value?.length &&
                                            <OptionSelector
                                                options={Object.values(processNameEnums)?.filter((processItem) => !value?.includes(processItem?.key))}
                                                selectedOption={
                                                    <Button
                                                        variant={"outline"}
                                                        className={"w-full flex items-center justify-between gap-3"}
                                                    >
                                                        {"Select Process"}
                                                        <ChevronsUpDown size={20} />
                                                    </Button>
                                                }
                                                onHandleSelectOption={(option) => {
                                                    trigger("processes")
                                                    onChange([...value || [], option.key])
                                                }
                                                }
                                            />
                                        }
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Card className={"col-span-full p-0 rounded-lg space-y-3"}>
                        <div className={"p-3 flex items-center justify-between gap-3"}>
                            <CardHeader className={"p-0 font-semibold text-base flex flex-row items-center gap-1"}>
                                <span>{"Color and Quantity"}</span>
                                <span className={"text-destructive"}>{"*"}</span>
                            </CardHeader>
                            {!colorQuantityPayload?.isFormEnabled
                                ? <CirclePlus size={20} className={"cursor-pointer"} onClick={() => setColorQuantityPayload({ ...initialColorQuantityState, isFormEnabled: true })} />
                                : <OctagonX size={20} className={"cursor-pointer"} onClick={() => setColorQuantityPayload({ ...initialColorQuantityState, isFormEnabled: false })} />
                            }
                        </div>

                        <Separator />

                        {(!!getValues("color")?.length && !!getValues("quantity")?.length) &&
                            <div className={"w-full p-3 grid grid-cols-2 gap-5"}>
                                {getValues("color")?.map((colorValue: string, index) => (
                                    <div key={index} className={"col-span-full w-full flex items-center gap-3"}>
                                        <div className="w-1/2 p-2 bg-muted text-center">
                                            {colorValue}
                                        </div>
                                        <div className="w-1/2 p-2 bg-muted text-center">
                                            {getValues("quantity")[index] || "N/A"}
                                        </div>
                                        <button className={"p-2 hover:bg-muted/70 rounded-full"} onClick={() => onHandleRemoveColorQuantity(colorValue, getValues("quantity")[index])}>
                                            <Trash2 className={"cursor-pointer"} size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        }
                        {colorQuantityPayload?.isFormEnabled &&
                            <>
                                <Separator />
                                <div className={"w-full p-3 grid grid-cols-3 place-content-center place-items-center gap-3"}>
                                    <div className={"col-span-full md:col-span-1 space-y-1"}>
                                        {/* <Label>{"Color:"}<span className={"text-destructive"}>{"*"}</span></Label> */}
                                        <Input
                                            type={"text"}
                                            placeholder={"Enter color here ..."}
                                            value={colorQuantityPayload.color}
                                            onChange={(event) => onHandleChangeText("color", event?.target.value)}
                                        />
                                    </div>
                                    <div className={"col-span-full md:col-span-1 space-y-1"}>
                                        {/* <Label>{"Quantity:"}<span className={"text-destructive"}>{"*"}</span></Label> */}
                                        <Input
                                            type={"number"}
                                            placeholder={"Enter quantity here ..."}
                                            value={colorQuantityPayload.quantity.toString()}
                                            onChange={(event) => onHandleChangeText("quantity", Number(event?.target.value))}
                                        />
                                    </div>
                                    <div className={"col-span-full md:col-span-1 flex justify-end"}>
                                        <Button
                                            className={"cursor-pointer disabled:cursor-not-allowed"}
                                            variant={"outline"}
                                            disabled={!colorQuantityPayload.color || !colorQuantityPayload.quantity}
                                            onClick={onHandleAddColorQuantity}
                                        >
                                            {"Add"}
                                        </Button>
                                    </div>
                                </div>
                            </>
                        }
                    </Card>

                    <FormField
                        control={control}
                        name={"stagesToBeSkipped"}
                        render={({ field: { value, onChange } }) => (
                            <FormItem className={"col-span-full flex flex-col gap-1.5"}>
                                <div className={"flex items-center justify-between gap-3"}>
                                    <FormLabel>{"Stages to Be Skipped:"}<span className={"text-destructive"}>{"*"}</span></FormLabel>
                                    <OptionSelector
                                        options={Object.values(skippedStagesEnums)?.filter((skippedStage) => !value?.includes(skippedStage?.key))}
                                        selectedOption={<CirclePlus size={20} className={"cursor-pointer"} />}
                                        onHandleSelectOption={(option) => {
                                            trigger("stagesToBeSkipped")
                                            onChange([...value || [], option.key])
                                        }
                                        }
                                    />
                                </div>
                                <FormControl>
                                    <div className={"inline-flex flex-wrap items-center gap-3"}>
                                        {!!value?.length &&
                                            <div className={"inline-flex flex-wrap items-center gap-3"}>
                                                {value?.map((skippedStage, index) => (
                                                    <div key={index} className={"w-max px-3 py-2 bg-muted flex items-center justify-between gap-5"}>
                                                        {skippedStagesEnums[skippedStage as keyof typeof skippedStagesEnums]?.label}
                                                        <Trash2
                                                            className={"cursor-pointer"}
                                                            size={16}
                                                            onClick={() => onChange(value?.filter((item) => item !== skippedStage))}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                        {!value?.length &&
                                            <OptionSelector
                                                options={Object.values(skippedStagesEnums)?.filter((skippedStage) => !value?.includes(skippedStage?.key))}
                                                selectedOption={
                                                    <Button
                                                        variant={"outline"}
                                                        className={"w-full flex items-center justify-between gap-3"}
                                                    >
                                                        {"Select Stages"}
                                                        <ChevronsUpDown size={20} />
                                                    </Button>
                                                }
                                                onHandleSelectOption={(option) => {
                                                    trigger("stagesToBeSkipped")
                                                    onChange([...value || [], option.key])
                                                }
                                                }
                                            />
                                        }
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className={"w-full flex flex-col gap-5"}>
                    <div className={"-mx-5"}>
                        <Separator className={"w-full"} />
                    </div>
                    <div className={"flex items-center justify-end gap-5"}>
                        <Button
                            type={"submit"}
                            disabled={isLoading || isSubmitting || !isValid || fabricList?.isLoading}
                            className={cn(
                                "px-5 md:px-8 h-10 flex items-center justify-center",
                                "transition-all ease-in-out duration-100 text-primary-foreground",
                                "font-buttons font-medium",
                                !isValid
                                    ? "bg-primary/40 font-normal !cursor-not-allowed"
                                    : (isSubmitting || isLoading || fabricList?.isLoading)
                                        ? "text-primary-foreground bg-primary cursor-wait"
                                        : "bg-primary hover:text-primary-foreground hover:bg-primary hover:opacity-90 cursor-pointer"
                            )}
                        >
                            {(isSubmitting || isLoading || fabricList?.isLoading) &&
                                <LoaderPinwheel className={"animate-spin"} size={24} />
                            }
                            {(!isLoading && !isSubmitting && !fabricList?.isLoading) && "Submit"}
                        </Button>
                        <Button
                            variant={"link"}
                            disabled={isLoading || isSubmitting}
                            onClick={() => { reset(); setClose() }}
                        >
                            {"Cancel"}
                        </Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default AddFabricDetail;