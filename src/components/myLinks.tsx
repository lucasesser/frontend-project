import Button from "./button";
import Text from "./text";
import Download from '../assets/icons/download-simple.svg?react'

export default function MyLinks() {
    return(
        <div className="flex flex-col justify-center p-8 bg-white rounded-lg max-w-145 w-full h-max gap-5">
            <div className="w-full flex justify-between">
                <Text variant="Text Lg">Meus links</Text>
                <Button variant="secondary" subVariant="default" svg={Download}>Baixar CSV</Button>
            </div>
            <div className="h-29.5 border-t">
                
            </div>
        </div>
    )
}