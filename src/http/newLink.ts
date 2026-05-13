import api from "./axios";

interface newLinkInputs {
    linkOriginal: string,
    linkEncurtado: string
}

export default async function newLink({linkOriginal, linkEncurtado}: newLinkInputs) {
    const result = await api.post("/newlink", {original: linkOriginal, shortLink: linkEncurtado})
    console.log(result);
    
}