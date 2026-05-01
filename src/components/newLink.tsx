import Text from "./text";
import Input from "./input";

export default function NewLink() {
    return (
        <div className="bg-white flex flex-col rounded-lg p-8 gap-2 w-full">
            <Text variant="Text Lg">Novo link</Text>
            <Text variant="Text Xs">LINK ORIGINAL</Text>
            <Input placeholder="testando" variant="error"/>
            
            <input placeholder="www.exemplo.com.br" className="border rounded-lg border-gray-300 font-open-sans text-sm/4.5 font-normal p-4"/>
        </div>
    )
}


