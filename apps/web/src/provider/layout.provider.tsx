import { Toaster } from "@/components/ui/toaster";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Toaster />
    {children}
  </>;
};

export default LayoutProvider;
