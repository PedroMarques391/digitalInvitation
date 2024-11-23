"use client"

import { createEmptyEvent, createEmptyGuest, Date, Event, Guest } from "core"
import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import useApi from "../hooks/useApi"
import { useRouter } from "next/navigation"


export interface IEventContextProps {
    event: Partial<Event>
    guest: Partial<Guest>
    isValidAlias: boolean
    changeEvent: (event: Partial<Event>) => void
    changeGuest: (guest: Partial<Guest>) => void
    loadEvent: (idOrAlias: string) => Promise<void>
    saveEvent: () => Promise<void>
    addGuest: () => void
}


const EventContext = createContext({} as IEventContextProps)

const EventProvider = ({ children }: { children: ReactNode }) => {
    const { httpGET, httpPOST } = useApi()
    const [isValidAlias, setIsValidAlias] = useState<boolean>(true)
    const [event, setEvent] = useState<Partial<Event>>(createEmptyEvent())
    const [guest, setGuest] = useState<Partial<Guest>>(createEmptyGuest())

    const router = useRouter()

    const saveEvent = useCallback(async function () {
        try {
            const createdEvent = await httpPOST("/events", event)
            router.push(`/events/success`)
            setEvent({
                ...event,
                date: Date.parser(createdEvent.date)
            })
        } catch (error) {
            console.log(error)
        }
    }, [event, httpPOST, router])

    const loadEvent = useCallback(async function (idOrAlias: string) {
        try {
            const event = await httpGET(`/events/${idOrAlias}`)
            setEvent({
                ...event,
                date: Date.parser(event.date)
            })
        } catch (error) {
            console.log(error)
        }
    }, [httpGET, setEvent])

    const addGuest = useCallback(async function () {
        await httpPOST(`/events/${event.alias}/guests`, guest)
        router.push("/invitation/thanks")
    }, [httpPOST, event, router, guest])

    const validateAlias = useCallback(async function () {
        try {
            const { valid } = await httpGET(`/events/validate/${event.alias}/${event.id}`)
            setIsValidAlias(valid)
        } catch (error) {
            console.log(error)
        }
    }, [httpGET, event])

    useEffect(() => {
        if (event.alias) validateAlias()
    }, [event?.alias, isValidAlias])


    return (
        <EventContext.Provider value={{
            event,
            guest,
            isValidAlias,
            changeEvent: setEvent,
            changeGuest: setGuest,
            saveEvent,
            loadEvent,
            addGuest
        }}>
            {children}
        </EventContext.Provider>
    )
}

export {
    EventContext, EventProvider
}