"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { LoaderPinwheel } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

import { formSchema } from './data';
import BasicDetail from './_components/basicDetail';
import OrderInfo from './_components/orderInfo';
import FabricSection from './_components/fabricSection';
import ChinaFabric from './_components/chinaFabric';
import AdditionalInfo from './_components/additionalInfo';

import { useDispatch, useSelector } from 'react-redux';

import { cn } from '@/lib/utils';
import { setProductList } from '../_redux/slice';

import { useToast } from '@/hooks/use-toast';

const ProductForm = () => {
    const { productList } = useSelector((state: any) => state.product)

    const router = useRouter()
    const dispatcher = useDispatch()
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            startDate: new Date(),
            endDate: new Date(),
            productionPerDayPerMachine: "",
            totalOrderQuantity: "",
            fabrics: [],
            isChinaFabricPresent: false,
            chinaFabric: [],
            majorFabric: "none",
            trims: [],
            accessories: []
        },
    })

    const {
        handleSubmit,
        reset,
        formState: { isLoading, isValid, isSubmitting }
    } = form

    useEffect(() => {
        return () => {
            reset()
        }
    }, [])

    const onHandleSubmit = async (data: z.infer<typeof formSchema>) => {

        dispatcher(setProductList({ isLoading: true }))

        try {
            setTimeout(() => {
                toast({
                    description: "Added Successfully"
                })
                // dispatcher(setProductList({ data: productList?.data ? [data, ...productList?.data] : [data] }))
                reset()
                router.push("/product")
            }, 1000)
        } catch (error: any) {
            console.error(error?.message || "Something went wrong!")
            toast({
                variant: "destructive",
                description: error?.message || "Something went wrong!"
            })
        } finally {
            dispatcher(setProductList({ isLoading: false }))
        }
    }

    return (
        <div className={"w-full p-5 space-y-5"}>

            {/* Header */}
            <div className={"w-full flex items-center justify-center"}>
                <h1 className="font-semibold text-2xl">{"T & A Form"}</h1>
            </div>

            <div className={"w-full mx-auto container max-w-7xl border"}>
                <FormProvider {...form}>
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className={"p-2 bg-muted"}>
                            <span className={"font-medium text-muted-foreground"}>
                                {"Field marked with * are mandatory"}
                            </span>
                        </div>
                        <div className={"w-full p-5 space-y-5"}>
                            <div className={"w-full grid grid-cols-2 gap-5 md:gap-8"}>
                                <BasicDetail />
                                <OrderInfo />
                                <FabricSection />
                                <ChinaFabric />
                                {/* <div className={"w-full col-span-full -mx-5"}>
                                    <Separator className={"w-full"} />
                                </div> */}
                                <AdditionalInfo />
                            </div>

                            <div className={"w-full flex flex-col gap-5"}>
                                <div className={"-mx-5"}>
                                    <Separator className={"w-full"} />
                                </div>
                                <div className={"flex items-center justify-start gap-5"}>
                                    <Button
                                        type={"submit"}
                                        disabled={isLoading || isSubmitting || !isValid}
                                        className={cn(
                                            "px-5 md:px-8 h-10 flex items-center justify-center",
                                            "transition-all ease-in-out duration-100 text-primary-foreground",
                                            "font-buttons font-medium",
                                            !isValid
                                                ? "bg-primary/40 font-normal !cursor-not-allowed"
                                                : (isSubmitting || isLoading)
                                                    ? "text-primary-foreground bg-primary cursor-wait"
                                                    : "bg-primary hover:text-primary-foreground hover:bg-primary hover:opacity-90 cursor-pointer"
                                        )}
                                    >
                                        {(isSubmitting || isLoading) &&
                                            <LoaderPinwheel className={"animate-spin"} size={24} />
                                        }
                                        {(!isLoading && !isSubmitting) && "Submit"}
                                    </Button>
                                    <Button
                                        variant={"link"}
                                        disabled={isLoading || isSubmitting}
                                        onClick={() => reset()}
                                    >
                                        {"Cancel"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </FormProvider>

            </div>
        </div>
    )
}

export default ProductForm;