"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type TTooltipProvider = {
    tooltipTrigger: React.ReactNode;
    placement?: string;
    tooltipContent: React.ReactNode;
}

const TooltipView = ({ tooltipTrigger, tooltipContent }: TTooltipProvider) => {

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {tooltipTrigger}
                </TooltipTrigger>
                <TooltipContent>
                    {tooltipContent}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TooltipView;