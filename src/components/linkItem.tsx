import IconButton from "./iconButton";
import Text from "./text";
import Copy from "../assets/icons/copy.svg?react"
import Trash from "../assets/icons/trash.svg?react"

export default function LinkItem() {
    return(
        <div className="flex border-t-2 border-gray-200 py-4 justify-between items-center">
            <div className="flex flex-col">
                <Text variant="Text Md" className="text-blue-base">brev.ly/Portfolio-Dev</Text>
                <Text variant="Text Sm">devsite.portfolio.com.br/devname-123456</Text>
            </div>
            <div className="flex flex-row items-center gap-5">
                <Text variant="Text Sm">30 acessos</Text>
                <div className="flex flex-row gap-1">
                    <IconButton svg={Copy}/>
                    <IconButton svg={Trash}/>
                </div>
            </div>
        </div>
    )
}