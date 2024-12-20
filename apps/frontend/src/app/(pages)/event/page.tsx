"use client"


import { EventForm } from '@/components/event/EventForm'
import Window from '@/components/shared/Window'
import useEvent from '@/data/hooks/useEvent'
import React from 'react'

export default function EventPage(): React.JSX.Element {
    const { event } = useEvent()

    return (
        <div>
            <Window
                label='Qual eventos vamos criar? '
                title={event.name ? event.name : "Novo evento"}
                image={event.image}
                backgroundImage={event.backgroundImage}
            >
                <EventForm />
            </Window>
        </div>
    )
}
