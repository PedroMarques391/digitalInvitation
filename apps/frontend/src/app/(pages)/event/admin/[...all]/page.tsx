"use client"

import EventDashboard from "@/components/event/EventDashboard";
import EventFormPassword from "@/components/event/EventFormPassword";
import useAPI from "@/data/hooks/useApi";
import { Event, Guest } from "core";
import { events } from "core";
import { use, useCallback, useEffect, useState } from "react";


type TAdminProps = {
  params: any,
}

export default function Admin({ params }: TAdminProps): any {
  const adminParams: any = use(params)
  const { httpPost } = useAPI()

  const id = adminParams.all[0]
  const [event, setEvent] = useState<Event | null>(null)
  const [password, setPassword] = useState<string>(adminParams.all[1] ?? "")

  const presents = event?.guests.filter((item) => item.isConfirmed) ?? []
  const absents = event?.guests.filter((item) => !item.isConfirmed) ?? []

  const totalPeople = presents?.reduce((acc: number, guests: Guest) => {
    return acc + guests.numberOfCompanions + 1
  }, 0)


  function getEvent() {
    const event = events.find((item) => item.id === id && item.password === password)
    return setEvent(event ?? null)
  }

  const loadEvent = useCallback(async () => {
    if (!id || !password) return
    const event = await httpPost("/events/access", { id, password })
    setEvent(event)
  }, [httpPost, id, password])

  useEffect(() => {
    getEvent()
  }, [id, password])

  return (
    <div className="flex flex-col justify-center items-center">
      {event ? (
        <EventDashboard
          presents={presents}
          event={event}
          absents={absents}
          totalPeople={totalPeople}
          updateList={getEvent} />
      ) : (
        <EventFormPassword
          acessEvent={loadEvent}
          password={password}
          setPassword={setPassword}
        />
      )}
    </div>
  )

}
