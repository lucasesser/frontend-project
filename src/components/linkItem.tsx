import Text from "./text";

export default function LinkItem() {
    return(
        <div className="flex border-t-2 border-gray-200 py-4 justify-between items-center">
            <div className="flex flex-col">
                <Text variant="Text Md" className="text-blue-base">brev.ly/Portfolio-Dev</Text>
                <Text variant="Text Sm">devsite.portfolio.com.br/devname-123456</Text>
            </div>
            <div>
                <Text variant="Text Sm">30 acessos</Text>
                
            </div>
        </div>
    )
}