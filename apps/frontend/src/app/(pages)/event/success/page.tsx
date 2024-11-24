"use client"

import EventInfo from '@/components/event/EventInfo'
import Window from '@/components/shared/Window'
import useEvent from '@/data/hooks/useEvent'
import { Event } from 'core'
import React from 'react'

export default function SuccessPage(): React.JSX.Element {
    const { event } = useEvent()

    return event ? (
        <Window
            label='Seu evento foi criado'
            title={event.name}
            image={event.image}
            backgroundImage={event.backgroundImage}
        >
            <EventInfo hiddenName event={event as Event} />
        </Window>
    ) : <></>
}
