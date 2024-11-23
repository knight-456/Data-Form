"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { dummyData } from "./data";

import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "./_redux/slice";

const ProductPage = () => {
    const { productList } = useSelector((state: any) => state.product)

    const router = useRouter()
    const dispatcher = useDispatch()

    useEffect(() => {
        getProductList()
    }, [])

    const getProductList = async () => {
        dispatcher(setProductList({ isLoading: true }))

        try {
            setTimeout(() => {
                dispatcher(setProductList({ data: productList?.data ? [...productList?.data, ...dummyData] : dummyData }))
                router.push("/product")
            }, 1000)
        } catch (error: any) {
            console.error(error?.message || "Something went wrong!")
        } finally {
            dispatcher(setProductList({ isLoading: false }))
        }
    }

    const onHandleNavigateToForm = () => {
        router.push("/product/add")
    }

    return (
        <div className={"w-full p-5 space-y-5"}>

            {/* Header */}
            <h1 className="font-semibold text-2xl">{"Product"}</h1>

            <div className={"flex justify-end"}>
                <Button className={"flex items-center justify-center gap-3"} onClick={onHandleNavigateToForm}>
                    <Plus size={20} />
                    {"Add Product"}
                </Button>
            </div>
            {!!productList?.isLoading &&
                <span>{"Loading ...."}</span>
            }
            {!!productList?.data &&
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"}>
                    {productList?.data?.map((productItem: any, index: number) => (

                        <Card key={index} className={"rounded-lg h-[22rem] space-y-2"}>
                            <div className={"w-full h-48 aspect-square overflow-hidden"}>
                                <img
                                    src={productItem?.thumbnailUrl}
                                    alt={"Product"}
                                    className={"w-full h-full object-cover"}
                                />
                            </div>
                            <div className={"p-2 space-y-3"}>
                                <span>
                                    {productItem?.name}
                                </span>
                                <div className={"flex items-center gap-2"}>
                                    <span>
                                        {"Start Date:"}
                                    </span>
                                    <span>
                                        {productItem?.startDate}
                                    </span>
                                </div>
                                <div className={"flex items-center gap-2"}>
                                    <span>
                                        {"End Date:"}
                                    </span>
                                    <span>
                                        {productItem?.endDate}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            }
        </div>
    )
}

export default ProductPage;