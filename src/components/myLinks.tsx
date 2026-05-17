import Button from "./button";
import Text from "./text";
import Download from '../assets/icons/download-simple.svg?react'
import NoLinks from "./noLinks";
import LinkItem from "./linkItem";

type linksType = {
    id: string,
    linkOriginal: string,
    linkEncurtado: string,
    accessCount: number
}

export default function MyLinks({links, onDelete}: {links: linksType[], onDelete: () => void}) {
    return(
        <div className="flex flex-col justify-center p-8 bg-white rounded-lg max-w-145 w-full h-max gap-5">
            <div className="w-full flex justify-between items-center">
                <Text variant="Text Lg">Meus links</Text>
                <Button variant="secondary" subVariant="default" svg={Download}>Baixar CSV</Button>
            </div>
            <div>
                {links.length > 0 ? (
                    links.map((link) => (
                        <LinkItem key={link.id} id={link.id} linkEncurtado={link.linkEncurtado} linkOriginal={link.linkOriginal} accessCount={link.accessCount} onDelete={onDelete}/>
                    ))
                ) : (
                    <NoLinks />
                )}
            </div>
        </div>
    )
}

