import IconButton from "./iconButton";
import Text from "./text";
import Copy from "../assets/icons/copy.svg?react"
import Trash from "../assets/icons/trash.svg?react"

interface itemInputs {
    linkOriginal: string,
    linkEncurtado: string,
    accessCount: number
}

export default function LinkItem({linkOriginal, linkEncurtado, accessCount}: itemInputs) {
    return(
        <div className="flex border-t-2 border-gray-200 py-4 justify-between items-center">
            <div className="flex flex-col">
                <Text variant="Text Md" className="text-blue-base">{linkEncurtado}</Text>
                <Text variant="Text Sm">{linkOriginal}</Text>
            </div>
            <div className="flex flex-row items-center gap-5">
                <Text variant="Text Sm">{accessCount} acessos</Text>
                <div className="flex flex-row gap-1">
                    <IconButton svg={Copy}/>
                    <IconButton svg={Trash}/>
                </div>
            </div>
        </div>
    )
}