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
    const { productList, addProductDetail } = useSelector((state: any) => state.product)

    const router = useRouter()
    const dispatcher = useDispatch()

    useEffect(() => {
        getProductList()
    }, [])

    const getProductList = async () => {
        dispatcher(setProductList({ isLoading: true }))

        try {
            setTimeout(() => {
                // const existingData = dummyData || [];
                // const newData = addProductDetail?.data || {};

                // let allProducts = []
                // if (newData) {
                //     allProducts = [...existingData, newData];
                // }
                // const uniqueProducts = Array.from(
                //     new Map(allProducts.map((product) => [product.id, product])).values()
                // );

                dispatcher(setProductList({ data: dummyData }));
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
            {!!productList?.error &&
                <span>{productList?.error || "Something went wrong!"}</span>
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
                                        {new Date(productItem?.startDate).toLocaleDateString() || "11/11/2024"}
                                    </span>
                                </div>
                                <div className={"flex items-center gap-2"}>
                                    <span>
                                        {"End Date:"}
                                    </span>
                                    <span>
                                        {new Date(productItem?.endDate).toLocaleDateString() || "11/13/2024"}
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