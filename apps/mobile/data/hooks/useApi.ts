import { useCallback } from "react"

const URL_BASE = process.env.EXPO_PUBLIC_API_URL


export default function useApi() {
    const httpGET = useCallback(
        async function (path: string) {
            const URI = path.startsWith("/") ? path : `/${path}`
            const URL = `${URL_BASE}${URI}`

            const response = await fetch(URL)
            return extractData(response)
        }, [])

    const httpPOST = useCallback(
        async function (path: string, body?: any) {
            const URI = path.startsWith("/") ? path : `/${path}`
            const URL = `${URL_BASE}${URI}`

            console.log(URL)

            const response = await fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: body ? JSON.stringify(body) : null
            })

            return extractData(response)
        }, [])



    async function extractData(response: Response) {
        let content: any
        try {
            content = await response.json()

        } catch (error) {
            if (!response.ok) {
                throw new Error(`Ocorreu um erro inesperado com status ${response.status}`)
            }
            if (!response.ok) throw new Error(content)
            return null
        }

        return await content
    }
    return { httpGET, httpPOST }
}