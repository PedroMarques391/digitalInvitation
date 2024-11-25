import { createContext, ReactNode, useEffect, useState } from "react"
import { Event, events as mockEvents } from "core"
import useApi from "../hooks/useApi"
import useLocalStorage from "../hooks/useLocalStorage"


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
    const { saveItem, getItem } = useLocalStorage()
    const [events, setEvents] = useState<Event[]>([])
    const { httpPOST } = useApi()

    async function selectEvent(id: string) {
        const event = events.find((event) => event.id === id)
        const loadedEvent = await loadEventByLocalStorage(id, event?.password || "null")
        setEvent(loadedEvent || null)
    }

    async function addEventByQrCode(qrcorde: string) {
        try {
            const idAndPassword: { id: string, password: string } = JSON.parse(qrcorde)

            const getEvents = await loadEventByLocalStorage(idAndPassword.id, idAndPassword.password)
            if (!getEvents) {
                return deleteEvent(idAndPassword.id)
            }

            const newEvents = events.filter((event) => event.id !== idAndPassword.id)
            newEvents.push(getEvents)
            saveItem("event", newEvents)
            setEvents(newEvents)

        } catch (error: any) {
            alert(error)
        }
    }




    function deleteEvent(id: string) {
        const newEvents = events.filter((item) => item.id !== id)
        saveItem("events", newEvents)
        setEvents(newEvents)
    }

    async function loadEventByLocalStorage(id: string, password: string) {
        const event = await httpPOST("events/access", { id, password })
        return event
    }

    async function loadEventsByLocalStorage() {
        const events = await getItem("events")
        events.array.forEach((event: Event) => {
            loadEventByLocalStorage(event.id, event.password)
        });
    }

    useEffect(() => {
        loadEventsByLocalStorage()
    }, [])

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