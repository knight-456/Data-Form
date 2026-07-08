"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/sidebar";
import MainHeader from "@/components/header";

type TLayout = {
  children: React.ReactNode;
};

import { CommandMenu } from "@/components/command-menu";

const Layout = ({ children }: TLayout) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={"w-full flex flex-row"}>
      <CommandMenu />
      <Sidebar />
      <div className={"w-full flex-1 flex flex-col min-w-0"}>
        <MainHeader />
        <div className={"flex-1"}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
