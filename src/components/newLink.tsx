import Text from "./text";
import Input from "./input";
import Button from "./button";
import React, { useState } from "react";
import newLink from "../http/newLink";
import LoadingIcon from "../assets/icons/spinner-gap.svg?react"

const PREFIX = "brev.ly/";

export default function NewLink() {
    const [shortLink, setShortLink] = useState("");
    const [originalLink, setOriginalLink] = useState("")
    const [variantOriginalLink, setVariantOriginalLink] = useState<"default" | "active" | "error">("default")
    const [variantShortLink, setVariantShortLink] = useState<"default" | "active" | "error">("default")
    const [errorMessageOriginalLink, setErrorMessageOriginalLink] = useState("")
    const [errorMessageShortLink, setErrorMessageShortLink] = useState("")
    const [subVariantButton, setSubVariantButton] = useState<"default" | "hover" | "disabled">("default")

    const handleOriginalLink = (e: React.ChangeEvent<HTMLInputElement>) => {    
        const value = e.target.value

        try{
            new URL(value)
            setVariantOriginalLink("default")
        }catch{
            setErrorMessageOriginalLink("Formato do link invalido")
            setVariantOriginalLink("error")
        }

        setOriginalLink(value)
    }

    const handleShortLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        
        if (value.startsWith(PREFIX)) {
            value = value.slice(PREFIX.length);
            setShortLink(value);

            if (/^[a-zA-Z0-9]*$/.test(value)) {
                setVariantShortLink("active")
            }else {
                setErrorMessageShortLink("O link encurtado nao pode ter espacos e caracteres")
                setVariantShortLink("error")
            }
        } else {
            setShortLink("")
            setVariantShortLink("active")
        }
    };

    const handleNewLink = async () => {
        if (originalLink.length > 0 && variantOriginalLink != "error" && shortLink.length > 0 && variantShortLink != "error") {
            try {
                const aaa = await newLink({originalLink, shortLink})
                alert("TESTE")
            } catch {
                alert("FALHOU")
            }
        } else {
            if (originalLink.length === 0 || variantOriginalLink === "error") {
                setErrorMessageOriginalLink("Insira um link valido")
                setVariantOriginalLink("error")
            }
            if(shortLink.length === 0 || variantShortLink === "error") {
                setErrorMessageShortLink("Insira um identificador valido")
                setVariantShortLink("error")
            }
        }
    }

    return (
        <div className="bg-white flex flex-col rounded-lg p-8 gap-6 max-w-95 w-full h-max">
            <Text variant="Text Lg">Novo link</Text>
            <div className="flex flex-col gap-4">
                <Input
                key="linkOriginal"
                title="LINK ORIGINAL"
                placeholder="www.exemplo.com.br"
                variant={variantOriginalLink}
                errorMessage={errorMessageOriginalLink}
                onFocus={() => setVariantOriginalLink("active")}
                onBlur={(e) => handleOriginalLink(e)}
                />
                <Input
                key="linkEncurtado"
                title="LINK ENCURTADO"
                placeholder={PREFIX}
                variant={variantShortLink}
                errorMessage={errorMessageShortLink}
                value={PREFIX + shortLink}
                onChange={(e) => handleShortLinkChange(e)}
                onFocus={() => variantShortLink != "error" && setVariantShortLink("active")}
                onBlur={() => variantShortLink != "error" && setVariantShortLink("default")}
                />
            </div>
            <Button
            variant="primary"
            subVariant={subVariantButton}
            onMouseEnter={() => setSubVariantButton("hover")}
            onMouseLeave={() => setSubVariantButton("default")}
            onClick={() => handleNewLink()}
            >
                Salvando <LoadingIcon className="animate-spin size-6"/>
            </Button>
        </div>
    );
}