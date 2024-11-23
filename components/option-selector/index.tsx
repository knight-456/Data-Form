"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export type TOptionItem = {
    label: string;
    key: string;
}

export type TOptions = {
    label: string;
    key: string;
}[]

type OptionSelectorProps = {
    message?: string | null;
    searchable?: boolean;
    options: TOptions;
    selectedOption: React.ReactNode | string;
    inputPlaceholder?: string;
    onHandleSelectOption: (option: TOptionItem) => void;
    popoverContentClassName?: string;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({
    message = "",
    searchable = false,
    options = [],
    selectedOption,
    inputPlaceholder = "",
    onHandleSelectOption = () => { },
    popoverContentClassName = "w-full md:w-64"
}: OptionSelectorProps) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <PopoverTrigger asChild>
                {selectedOption}
            </PopoverTrigger>
            <PopoverContent className={cn("w-full px-0 py-1 font-bodyPri font-normal", popoverContentClassName)}>
                <Command className={"w-full p-0 font-bodyPri font-normal"}>
                    {searchable &&
                        <CommandInput autoFocus={true} placeholder={inputPlaceholder} />
                    }
                    <CommandList className={"w-full overflow-y-auto scrollbar-thin"}>
                        {(!!options && (options?.length === 0)) &&
                            <CommandEmpty className={"w-full px-3 py-1"}>
                                {"No options found."}
                            </CommandEmpty>
                        }
                        {!!message &&
                            <CommandEmpty>{message}</CommandEmpty>
                        }
                        {!!options?.length &&
                            <CommandGroup className={"w-full"}>
                                {options?.map((optionItem: TOptionItem) => {
                                    return (
                                        <CommandItem
                                            key={optionItem?.key}
                                            tabIndex={0}
                                            onSelect={() => {
                                                setIsOpen(!isOpen)
                                                onHandleSelectOption(optionItem)
                                            }}
                                        >
                                            <button
                                                key={optionItem.key}
                                                className={cn(
                                                    "px-2 py-1 flex justify-between items-center cursor-pointer rounded",
                                                    ((typeof selectedOption === "string") && (selectedOption === optionItem.key)) && "bg-primary"
                                                )}
                                                onClick={() => {
                                                    onHandleSelectOption(optionItem);
                                                    setIsOpen(false);
                                                }}
                                            >
                                                <span>{optionItem.label}</span>
                                                {((typeof selectedOption === "string") && selectedOption === optionItem?.key) &&
                                                    <Check size={20} color="green" />
                                                }
                                            </button>
                                        </CommandItem>
                                    )
                                })}
                            </CommandGroup>
                        }
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default OptionSelector;