import { Layout as Container } from "@/components/template/Layout";

import { ReactNode } from "react"

type TLayoutProps = { children: ReactNode }

export default function Layout({ children }: TLayoutProps) {
    return <Container>{children}</Container>
}