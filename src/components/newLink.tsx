import Text from "./text";
import Input from "./input";
import Button from "./button";

export default function NewLink() {
    return (
        <div className="bg-white flex flex-col rounded-lg p-8 gap-6 max-w-95 max-h-85 w-full h-max">
            <Text variant="Text Lg">Novo link</Text>
            <div className="flex flex-col gap-4">
                <Input title="LINK ORIGINAL" placeholder="www.exemplo.com.br" variant="default"/>
                <Input title="LINK ENCURTADO" placeholder="brev.ly/" variant="default"/>
            </div>
            <Button variant="primary" subVariant="hover">Salvar link</Button>
        </div>
    )
}