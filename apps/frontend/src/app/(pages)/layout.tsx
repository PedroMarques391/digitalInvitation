import { Layout as Container } from "@/components/template/Layout";
import { EventProvider } from "@/data/context/EventContext";

import { ReactNode } from "react"

type TLayoutProps = { children: ReactNode }

export default function Layout({ children }: TLayoutProps) {
    return (
        <EventProvider>
            <Container>{children}</Container>
        </EventProvider>
    )
}