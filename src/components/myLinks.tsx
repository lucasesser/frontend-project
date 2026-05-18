import Button from "./button";
import Text from "./text";
import Download from '../assets/icons/download-simple.svg?react'
import NoLinks from "./noLinks";
import LinkItem from "./linkItem";
import { useState } from "react";
import axios from "axios";

type linksType = {
    id: string,
    linkOriginal: string,
    linkEncurtado: string,
    accessCount: number
}

export default function MyLinks({links, onDelete}: {links: linksType[], onDelete: () => void}) {
    const [subVariantButton, setSubVariantButton] = useState<"default" | "hover" | "disabled">("default")
    return(
        <div className="flex flex-col justify-center p-8 bg-white rounded-lg max-w-145 w-full h-max gap-5">
            <div className="w-full flex justify-between items-center">
                <Text variant="Text Lg">Meus links</Text>
                <Button
                    variant="secondary"
                    subVariant={subVariantButton}
                    svg={Download}
                    onMouseEnter={() => subVariantButton != "disabled" && setSubVariantButton("hover")}
                    onMouseLeave={() => subVariantButton != "disabled" && setSubVariantButton("default")}
                    onClick={async () => {
                        const url = "https://pub-69fac4ca0b404d0b8f94d6d989dddbe4.r2.dev/downloads/4c03aac8-553b-4f69-bd90-8e012050e653-20260518T011253039Zlinkscsv.csv";
                        try {
                            const response = await axios.get(url, {
                                responseType: 'blob',
                            })

                            console.log({response});
                            

                            const blobUrl = window.URL.createObjectURL(response.data)

                            const link = document.createElement('a')

                            link.href = blobUrl
                            link.download = 'links.csv'

                            link.click()

                            window.URL.revokeObjectURL(blobUrl)
                        } catch (e) {
                            console.log(e);
                            
                            alert('Erro ao baixar o arquivo.');
                        }
                    }}
                >
                    Baixar CSV
                </Button>
            </div>
            <div>
                {links.length > 0 ? (
                    links.map((link) => (
                        <LinkItem key={link.id} id={link.id} linkEncurtado={
                        link.linkEncurtado} linkOriginal={link.linkOriginal} accessCount={link.accessCount} onDelete={onDelete}/>
                    ))
                ) : (
                    <NoLinks />
                )}
            </div>
        </div>
    )
}

