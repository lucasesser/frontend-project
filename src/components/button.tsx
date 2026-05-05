import { cva, type VariantProps, cx } from "class-variance-authority"
import { textVariants } from "./text"

const buttonVariants = cva("", {
    variants: {
        variant: {
            primary: ["w-full", "h-12", "rounded-lg", "text-white"]
        },
        subVariant: {
            default: "",
            hover: "",
            disabled: ""
        }
    },
    compoundVariants: [
        {
            variant: "primary",
            subVariant: "default",
            class: ["bg-blue-base"]
        },
        {
            variant: "primary",
            subVariant: "hover",
            class: ["bg-blue-dark"]
        },
        {
            variant: "primary",
            subVariant: "disabled",
            class: ["bg-blue-base", "opacity-50"]
        },
    ]
})

interface buttonInputs extends VariantProps<typeof buttonVariants> {
    children: string
}

export default function Button({children, variant, subVariant}: buttonInputs) {
    return(
        <button className={cx(buttonVariants({variant, subVariant}), textVariants({variant: "Text Md"}))}>{children}</button>
    )
}   