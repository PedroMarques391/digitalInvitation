"use client"
import EventInfo from '@/components/event/EventInfo'
import GuestForm from '@/components/event/GuestForm'
import Processing from '@/components/shared/Processing'
import Window from '@/components/shared/Window'
import useEvent from '@/data/hooks/useEvent'
import { Event } from 'core'
import React, { use, useEffect } from 'react'

type TInvitationProps = {
  params: any
}

export default function Invitation({ params }: TInvitationProps): React.JSX.Element {
  const { event, loadEvent, guest, changeGuest, addGuest } = useEvent()
  const invitationsParams: any = use(params)

  if (!event.alias) return <></>

  useEffect(() => {
    loadEvent(invitationsParams.alias)
  }, [])

  return event?.alias ? (
    <div>
      <Window
        label="Você foi guest para:"
        title={event.name}
        image={event.image}
        backgroundImage={event.backgroundImage}
      >
        <EventInfo hiddenName event={event as Event} />
        <div className="flex flex-col gap-4 pt-10">
          <span className="text-xl font-bold">Insira seus dados</span>
          <div className="border-t border-zinc-800"></div>
          <GuestForm
            guest={guest}
            changeGuest={changeGuest}
          />
          <button
            className={`button self-center ${guest.isConfirmed ? "blue" : "red"}`}
            onClick={addGuest}
          >
            Confirmar {guest.isConfirmed ? "Presença" : "Ausência"}
          </button>
        </div>
      </Window>
    </div>
  ) : (
    <Processing />
  );
}
