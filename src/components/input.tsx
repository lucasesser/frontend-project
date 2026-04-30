import { cva, type VariantProps } from "class-variance-authority"
import Text from "./text"

const inputVariants = cva("border rounded-lg font-open-sans text-sm/4.5 font-normal p-4 items-center",
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
    placeholder?: string
    className?: string
}

export default function Input({placeholder, className, variant}: inputs) {
    return(
        <div className="flex flex-col justify-start gap-2">
            <Text variant="Text Xs">LINK ORIGINAL</Text>
            <input className={inputVariants({variant, className})} placeholder={placeholder}/>
            {if(variant="danger"){}}
            if(variant="danger"){<Text variant="Text Xs">TESTE</Text>}
        </div>
    )
}