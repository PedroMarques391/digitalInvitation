import { createContext, ReactNode, useState } from "react"
import { Event, events as mockEvents } from "core"


interface IEventContextProps {
    events: Event[]
    event: Event | null
    selectEvent: (id: string) => void
    deleteEvent: (id: string) => void
    addEventByQrCode: (qrcode: string) => void
}

export const EventContext = createContext({} as IEventContextProps)

const EventProvider = ({ children }: { children: ReactNode }) => {
    const [event, setEvent] = useState<Event | null>(null)
    const [events, setEvents] = useState<Event[]>([])

    function selectEvent(id: string) {
        const event = events.find((event) => event.id === id)
        setEvent(event || null)
    }

    function addEventByQrCode(qrcorde: string) {

    }

    function deleteEvent(id: string) {
        const newEvents = events.filter((item) => item.id !== id)
        setEvents(newEvents)
    }

    return (
        <EventContext.Provider value={{
            event,
            events,
            selectEvent,
            addEventByQrCode,
            deleteEvent
        }}>
            {children}
        </EventContext.Provider>
    )
}

export default EventProvider