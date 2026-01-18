"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/sidebar";
import MainHeader from "@/components/header";

type TLayout = {
    children: React.ReactNode
}

const Layout = ({ children }: TLayout) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null;

    return (
        <div className={"w-full flex flex-row"}>
            <Sidebar />
            <div className={"w-full overflow-hidden"}>
                <MainHeader />
                <div className={""}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;