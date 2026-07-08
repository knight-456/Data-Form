"use client"

import * as React from "react"
import { format, isValid } from "date-fns"

import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { cn } from "@/lib/utils";

type TDatePickerProps = {
    popoverButtonClassName?: string;
    value: Date | undefined;
    onChange: React.Dispatch<React.SetStateAction<Date | undefined>>
}

const DatePicker = ({ popoverButtonClassName, value, onChange }: TDatePickerProps) => {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full h-12 flex items-center justify-between font-normal",
                        !value && "text-muted-foreground",
                        popoverButtonClassName
                    )}
                >
                    {(!!value && isValid(value)) ? format(value, "dd-MM-yyyy") : <span>Pick a date</span>}
                    <CalendarIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

export default DatePicker