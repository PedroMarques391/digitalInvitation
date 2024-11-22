import { createContext, ReactNode } from "react"


export const EventContext = createContext({})

const EventProvider = ({ children }: { children: ReactNode }) => {
    return (
        <EventContext.Provider value={{}}>
            {children}
        </EventContext.Provider>
    )
}

export default EventProvider