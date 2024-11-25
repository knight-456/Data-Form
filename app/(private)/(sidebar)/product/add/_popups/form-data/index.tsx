"use client";

import React from 'react';

import { Button } from '@/components/ui/button';

import { useSelector } from 'react-redux';
import { fabricNameEnums } from '../../data';

const SubmittedFormDetail = ({ setClose }: { setClose: () => void }) => {

    const { addProductDetail } = useSelector((state: any) => state.product)
    console.log(addProductDetail?.data)

    return (
        <div className={"space-y-5"}>
            <div className={"grid grid-cols-2 gap-5 p-5"}>
                <span className={"col-span-full md:col-span-1"}>{"Start Date:"}</span>
                <span className={"col-span-full md:col-span-1"}>{new Date(addProductDetail?.data?.startDate).toDateString()}</span>
                <span className={"col-span-full md:col-span-1"}>{"End Date:"}</span>
                <span className={"col-span-full md:col-span-1"}>{new Date(addProductDetail?.data?.endDate).toDateString()}</span>
                <span className={"col-span-full md:col-span-1"}>{"Production Per Day:"}</span>
                <span className={"col-span-full md:col-span-1"}>{addProductDetail?.data?.productionPerDayPerMachine || 0}</span>
                <span className={"col-span-full md:col-span-1"}>{"Total Order Quantity:"}</span>
                <span className={"col-span-full md:col-span-1"}>{addProductDetail?.data?.totalOrderQuantity || 0}</span>
                <span className={"col-span-full md:col-span-1"}>{"Is China Fabric Present"}</span>
                <span className={"col-span-full md:col-span-1"}>{addProductDetail?.data?.isChinaFabricPresent ? "Yes" : "No"}</span>
                <span className={"col-span-full md:col-span-1"}>{"Major Fabric"}</span>
                <span className={"col-span-full md:col-span-1"}>{fabricNameEnums[addProductDetail?.data?.majorFabric as keyof typeof fabricNameEnums]?.label || "None"}</span>
                {!!addProductDetail?.data?.trims?.length &&
                    <>
                        <span className={"col-span-full md:col-span-1"}>{"Trims"}</span>
                        <span className={"col-span-full md:col-span-1"}>{addProductDetail?.data?.trims?.map((item => item.label))?.join(", ") || "N/A"}</span>
                    </>
                }
                {!!addProductDetail?.data?.accessories &&
                    <>
                        <span className={"col-span-full md:col-span-1"}>{"Accessories"}</span>
                        <span className={"col-span-full md:col-span-1"}>{addProductDetail?.data?.accessories?.map((item) => item?.label)?.join(", ") || "N/A"}</span>
                    </>
                }
            </div>
            <div className={"flex justify-end"}>
                <Button
                    variant={"link"}
                    onClick={() => { setClose() }}
                >
                    {"Cancel"}
                </Button>
            </div>
        </div>
    )
}

export default SubmittedFormDetail;