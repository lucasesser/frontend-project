import Button from "./button";
import Text from "./text";
import Download from '../assets/icons/download-simple.svg?react'
import Link from '../assets/icons/link.svg?react'

export default function MyLinks() {
    return(
        <div className="flex flex-col justify-center p-8 bg-white rounded-lg max-w-145 w-full h-max gap-5">
            <div className="w-full flex justify-between items-center">
                <Text variant="Text Lg">Meus links</Text>
                <Button variant="secondary" subVariant="default" svg={Download}>Baixar CSV</Button>
            </div>
            <div className="flex flex-col justify-center max-h-29.5 h-full border-t-2 border-gray-200 pt-4 gap-3">
                <Link className="fill-gray-400 size-8"/>
                <Text variant="Text Xs">AINDA NÃO EXISTEM LINKS CADASTRADOS</Text>
            </div>
        </div>
    )
}

