import Text from "./text";
import Input from "./input";
import Button from "./button";
import React, { useState } from "react";
import newLink from "../http/newLink";

const PREFIX = "brev.ly/";

export default function NewLink() {
    const [shortLink, setShortLink] = useState("");
    const [validateShortLink, setValidateShort] = useState(true)

    const handleShortLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (value.startsWith(PREFIX)) {
            value = value.slice(PREFIX.length);
            setShortLink(value);

            
        } else {
            setShortLink("")
        }
        setValidateShort(/^[a-zA-Z0-9]*$/.test(value))
    };

    return (
        <div className="bg-white flex flex-col rounded-lg p-8 gap-6 max-w-95 max-h-85 w-full h-max">
            <Text variant="Text Lg">Novo link</Text>
            <div className="flex flex-col gap-4">
                <Input
                key="linkOriginal"
                title="LINK ORIGINAL"
                placeholder="www.exemplo.com.br"
                variant="active"
                className="outline-none focus:border-blue-base focus:border-2"
                />
                <Input
                    key="linkEncurtado"
                    title="LINK ENCURTADO"
                    placeholder={PREFIX}
                    variant={validateShortLink ? "default" : "error"}
                    value={PREFIX + shortLink}
                    onChange={handleShortLinkChange}
                />
            </div>
            <Button
            variant="primary"
            subVariant="hover"
            onClick={() => newLink({linkOriginal: "https://testandotestes.com.br", linkEncurtado: "testandotestes"})}
            >
                Salvar link
            </Button>
        </div>
    );
}