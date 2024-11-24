"use client"

import { createEmptyEvent, createEmptyGuest, Data, Event, Guest } from "core"
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
    const { httpGet, httpPost } = useApi()
    const [isValidAlias, setIsValidAlias] = useState<boolean>(true)
    const [event, setEvent] = useState<Partial<Event>>(createEmptyEvent())
    const [guest, setGuest] = useState<Partial<Guest>>(createEmptyGuest())

    const router = useRouter()

    const saveEvent = useCallback(async function () {
        try {
            const newEvent = await httpPost("/events", event)
            router.push(`/event/success`)
            setEvent({
                ...newEvent,
                date: Data.parser(newEvent.date)
            })
        } catch (error) {
            console.log(error)
        }
    }, [event, httpPost, router])

    const loadEvent = useCallback(async function (idOrAlias: string) {
        try {
            const event = await httpGet(`/events/${idOrAlias}`)
            setEvent({
                ...event,
                date: Data.parser(event.date)
            })
        } catch (error) {
            console.log(error)
        }
    }, [httpGet, setEvent])

    const addGuest = useCallback(async function () {
        await httpPost(`/events/${event.alias}/guests`, guest)
        router.push("/invitation/thanks")
    }, [httpPost, event, router, guest])

    const validateAlias = useCallback(async function () {
        try {
            const { valid } = await httpGet(`/events/validate/${event.alias}/${event.id}`)
            setIsValidAlias(valid)
        } catch (error) {
            console.log(error)
        }
    }, [httpGet, event])

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