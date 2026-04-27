import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const textVariants = cva("", {
    variants:{
        variant: {
            "Text Xl": ""
        }
    },
    defaultVariants: {
        variant: "Text Xl"
    }
})

interface TextInputs extends VariantProps<typeof textVariants>{
    as?: keyof React.JSX.IntrinsicElements
    children?: React.ReactNode
}

export default function Text({as = "span", variant, children}: TextInputs) {
    return React.createElement(
        as,
        {className: textVariants({variant})}
    )
}