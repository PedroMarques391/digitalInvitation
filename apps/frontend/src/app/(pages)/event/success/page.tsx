"use client"

import EventInfo from '@/components/event/EventInfo'
import Copy from '@/components/shared/Copy'
import Window from '@/components/shared/Window'
import useEvent from '@/data/hooks/useEvent'
import { Event } from 'core'
import React, { useEffect, useState } from 'react'
import { IconFingerprint, IconLink } from "@tabler/icons-react"
import Qrcode from '@/components/event/Qrcode'

export default function SuccessPage(): React.JSX.Element {
    const { event } = useEvent()
    const [currentUrl, setCurrentUrl] = useState<string>("")

    useEffect(() => {
        setCurrentUrl(window.location.origin)
    }, [])

    return event ? (
        <Window
            label='Seu evento foi criado'
            title={event.name}
            image={event.image}
            backgroundImage={event.backgroundImage}
        >
            <EventInfo hiddenName event={event as Event} />
            <div className='flex gap-5 items-center py-6'>
                <div className='flex-1 flex flex-col'>
                    <Copy
                        iconProps={<IconLink stroke={1.3} />}
                        label='Link para convidar'
                        text={`${currentUrl}/invitation/${event.alias}`}

                    />

                    <Copy
                        iconProps={<IconLink stroke={1.3} />}
                        label='Link administrador'
                        text={`${currentUrl}/event/admin/${event.id}`}

                    />

                    <Copy
                        iconProps={<IconFingerprint stroke={1.3} />}
                        label='Senha administrador'
                        text={event.password ?? ""}
                        observer='Essa senha não será exibida novamente, então guarde com carinho!'

                    />
                </div>
                <Qrcode event={event as Event} />
            </div>
        </Window>
    ) : <></>
}
