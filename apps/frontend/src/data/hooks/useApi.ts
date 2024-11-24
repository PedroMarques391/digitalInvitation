import { useCallback } from "react";

const urlBase = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
    const httpGet = useCallback(async function (path: string) {
        const uri = path.startsWith("/") ? path : `/${path}`;
        const URL = `${urlBase}${uri}`;

        const res = await fetch(URL);
        return stractData(res);
    }, []);

    const httpPost = useCallback(async function (path: string, body?: any) {
        const uri = path.startsWith("/") ? path : `/${path}`;
        const URL = `${urlBase}${uri}`;

        console.log(body)
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body ? JSON.stringify(body) : null,
        });
        return stractData(res);
    }, []);

    async function stractData(reposta: Response) {
        let conteudo: any;

        try {
            conteudo = await reposta.json();
        } catch (error) {
            if (!reposta.ok) {
                throw new Error(
                    `Ocorreu um erro inesperado com status ${reposta.status}.`
                );
            }
            return null;
        }
        if (!reposta.ok) throw conteudo;
        return conteudo;
    }

    return { httpGet, httpPost };
}
