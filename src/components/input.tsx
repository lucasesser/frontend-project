import { cva, VariantProps } from "class-variance-authority"
import type React from "react"

const inputVariants = cva("border rounded-lg font-open-sans text-sm/4.5 font-normal p-4",
    {
        variants: {
            variant: {
                "default": "border-gray-300",
                "active": "border-blue-base",
                "error": "border-r-danger"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

interface inputs extends VariantProps<typeof inputVariants>{
    children?: React.ReactNode
}

export default function Input({children, variant}: inputs) {
    return(
        <input className:  inputVariants({""})/>
    )
}