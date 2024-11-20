"use client"

import EventDashboard from "@/components/event/EventDashboard";
import EventFormPassword from "@/components/event/EventFormPassword";
import { Event, Guest } from "@/core";
import events from "@/core/constants/events";
import { use, useEffect, useState } from "react";


type TAdminProps = {
  params: any,
}

export default function Admin({ params }: TAdminProps): any {
  const adminParams: any = use(params)

  const id = adminParams.all[0]
  const [event, setEvent] = useState<Event | null>(null)
  const [password, setPassword] = useState<string | null>(adminParams.all[1] ?? null)

  const presents = event?.guests.filter((item) => item.isConfirmed) ?? []
  const absents = event?.guests.filter((item) => !item.isConfirmed) ?? []

  const totalPeople = presents?.reduce((acc: number, guests: Guest) => {
    return acc + guests.numberOfCompanions + 1
  }, 0)


  function getEvent() {
    const event = events.find((item) => item.id === id && item.password === password)
    return setEvent(event ?? null)
  }



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
          totalPeople={totalPeople} />
      ) : (
        <EventFormPassword />
      )}
    </div>
  )

}
