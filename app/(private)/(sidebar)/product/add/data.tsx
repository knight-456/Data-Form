import { z } from "zod";

export const formSchema = z.object({
    startDate: z.date({ message: "Start date is required!" }),
    endDate: z.date({ message: "end date time is required" }),
    productionPerDayPerMachine: z.string()
        .min(1, { message: "Production per day per machine count is required" })
        .refine(value => !isNaN(Number(value)), { message: "Production per day per machine count must be a valid number" })
        .transform(value => Number(value)),

    totalOrderQuantity: z.string()
        .min(1, { message: "Total order quantity is required" })
        .refine(value => !isNaN(Number(value)), { message: "Total order quantity must be a valid number" })
        .transform(value => Number(value)),
    isChinaFabricPresent: z.boolean(),
    fabrics: z.array(
        z.object({
            fabricName: z.string(),
            perPieceRequirement: z.string(),
            chooseUnit: z.string(),
            processes: z.array(z.string()),
            color: z.array(z.string()),
            quantity: z.array(z.string()),
            stagesToBeSkipped: z.array(z.string())
        })
    ).optional(),
    chinaFabric: z.array(
        z.object({
            label: z.string(),
            key: z.string()
        })
    ).optional(),
    majorFabric: z.string().default("none"),
    trims: z.array(
        z.object({
            label: z.string(),
            key: z.string()
        }).optional()
    ),
    accessories: z.array(
        z.object({
            label: z.string(),
            key: z.string()
        }).optional()
    )
})

// export const formDefaultValues = {
//     startDate: new Date(),
//     endDate: new Date(),
//     productionPerDayPerMachine: "",
//     totalOrderQuantity: "",
//     fabrics: [],
//     isChinaFabricPresent: false,
//     majorFabric: "none",
//     trims: [],
//     accessories: []
// }

export const fabricNameEnums = Object.freeze({
    bag_voile: {
        key: "bag_voile",
        label: "Bag Voile"
    },
    wisteria_voile: {
        key: "wisteria_voile",
        label: "Wisteria Voile"
    },
    sheeting: {
        key: "sheeting",
        label: "Sheeting"
    },
    windowpane_gauz: {
        key: "windowpane_gauz",
        label: "WindowPane Gauz"
    },
    fp001: {
        key: "fp001",
        label: "FP001"
    },
    waffel: {
        key: "waffel",
        label: "Waffel"
    },
    rib: {
        key: "rib",
        label: "2x2 Rib"
    },
    french_terry: {
        key: "french_terry",
        label: "French Terry"
    },
    viscous_lycra: {
        key: "viscous_lycra",
        label: "Viscous Lycra"
    },
    other_knits: {
        key: "other_knits",
        label: "Other Knits"
    },
    laces: {
        key: "laces",
        label: "Laces"
    },
    shifilli: {
        key: "shifilli",
        label: "Shifilli"
    },
    spacial_fabrics: {
        key: "spacial_fabrics",
        label: "Special Fabrics"
    },
    imported_fabrics: {
        key: "imported_fabrics",
        label: "Imported Fabrics"
    },
    china_lace: {
        key: "china_lace",
        label: "China Lace"
    },
})

export const processNameEnums = Object.freeze({
    dying: {
        key: "dying",
        label: "Dying"
    },
    printing: {
        key: "printing",
        label: "Printing"
    },
    mock_up: {
        key: "mock_up",
        label: "Mock Up"
    },
    laces: {
        key: "laces",
        label: "Laces"
    },
    shiffly: {
        key: "shiffly",
        label: "Shiffly"
    },
    washing: {
        key: "washing",
        label: "Washing"
    },
})

export const skippedStagesEnums = Object.freeze({
    purchase: {
        key: "purchase",
        label: "Purchase"
    },
    submission: {
        key: "submission",
        label: "Submission"
    },
    fob: {
        key: "fob",
        label: "FOB"
    },
    bulk: {
        key: "bulk",
        label: "Bulk"
    },
    fabric_audit: {
        key: "fabric_audit",
        label: "Fabric Audit"
    },
    production: {
        key: "production",
        label: "Production"
    },
    top: {
        key: "top",
        label: "Top"
    },
    web: {
        key: "web",
        label: "Web"
    },
    size_set: {
        key: "size_set",
        label: "Size Set"
    },
})

export const trimsEnums = Object.freeze({
    label_copper: {
        key: "label_copper",
        label: "Label Copper"
    },
    tag: {
        key: "tag",
        label: "Tag"
    },
    sticker: {
        key: "sticker",
        label: "Sticker"
    },
    poly_bag: {
        key: "poly_bag",
        label: "Poly Bag"
    },
    stiching_thread: {
        key: "stiching_thread",
        label: "Stiching Thread"
    },
})

export const accessoriesEnums = Object.freeze({
    washcare_label: {
        key: "washcare_label",
        label: "Washcare Label"
    },
    price_tag: {
        key: "price_tag",
        label: "Price Tag"
    },
    size_label: {
        key: "size_label",
        label: "Size Label"
    },
    button: {
        key: "button",
        label: "Button"
    },
    zip: {
        key: "zip",
        label: "Zip"
    },
    hook: {
        key: "hook",
        label: "Hook"
    },
})