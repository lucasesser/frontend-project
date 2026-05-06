import { cva, type VariantProps, cx } from "class-variance-authority"
import { textVariants } from "./text"

const buttonVariants = cva("", {
    variants: {
        variant: {
            primary: ["w-full", "h-12", "rounded-lg", "text-white"],
            secondary: ["w-max", "h-8", "bg-gray-200", "rounded-sm", "flex", "justify-center", "items-center", "gap-1.5", "px-2"]
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
        {
            variant: "secondary",
            subVariant: "hover",
            class: ["border", "border-b-blue-base"]
        },
        {
            variant: "secondary",
            subVariant: "disabled",
            class: ["opacity-50"]
        }
    ]
})

interface buttonInputs extends React.ComponentProps<"svg">, VariantProps<typeof buttonVariants> {
    children: string
    svg?: React.FC<React.ComponentProps<"svg">>;
}

export default function Button({children, variant, subVariant, svg: SvgComponent}: buttonInputs) {
    return(
        <button className={cx(buttonVariants({variant, subVariant}), variant === "secondary" ? textVariants({variant: "Text Sm", className: "font-semibold"}) : textVariants({variant: "Text Md"}))}>
            {variant === "secondary" && SvgComponent && <SvgComponent className="size-4"/>}
            {children}
        </button>
    )
}