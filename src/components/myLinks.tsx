import Button from "./button";
import Text from "./text";
import Download from '../assets/icons/download-simple.svg?react'
import NoLinks from "./noLinks";
import LinkItem from "./linkItem";
import getLinks from "../http/getLinks";
import { useEffect, useState } from "react";

export default function MyLinks() {
    type linksType = {
        id: string,
        linkOriginal: string,
        linkEncurtado: string,
        accessCount: number
    }

    const [links, setLinks] = useState<linksType[]>([])

    useEffect(() => {
        async function loadData() {
            const linksReturn = await getLinks()
            setLinks(linksReturn)            
        }    

        loadData()        
    }, [])

    return(
        <div className="flex flex-col justify-center p-8 bg-white rounded-lg max-w-145 w-full h-max gap-5">
            <div className="w-full flex justify-between items-center">
                <Text variant="Text Lg">Meus links</Text>
                <Button variant="secondary" subVariant="default" svg={Download}>Baixar CSV</Button>
            </div>
            <div>
                {links.length > 0 ? (
                    links.map((link) => (
                        <LinkItem key={link.id} linkEncurtado={"brev.ly/" + link.linkEncurtado} linkOriginal={link.linkOriginal} accessCount={link.accessCount  }/>
                    ))
                ) : (
                    <NoLinks />
                )}
            </div>
        </div>
    )
}

