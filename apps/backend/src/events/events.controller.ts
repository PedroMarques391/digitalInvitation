import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { complementaryEvent, complementaryGuest, Date, Event, events, Guest, Id } from "core"


@Controller('events')
export class EventsController {

    @Post()
    async saveEvent(@Body() event: Event) {
        const newEvent = events.find((item) => item.alias === event.alias)
        if (newEvent && newEvent.id !== event.id) throw new Error("Alias já cadastrado!")

        const eventComplete = complementaryEvent(this.deserialize(event))
        events.push(eventComplete)

    }

    @Post(":alias/guest")
    async saveGuest(
        @Param("alias")
        alias: string,
        @Body() guest: Guest) {
        const event = events.find((event) => event.alias === alias)
        if (!event) throw new Error("Evento não encotrado!")

        event.guests.push(complementaryGuest(guest))
        return this.serialize(event)
    }

    @Post("access")
    async accessEvent(@Body() datas: { id: string, password: string }) {
        const event = events.find((event) => event.id === datas.id && event.password === datas.password)
        if (!event) throw new Error("A senha não corresponde ao evento!");
        return this.serialize(event)
    }

    @Get()
    async searchEvents() {
        return events.map(this.serialize)
    }

    @Get(":idOrAlias")
    async searchEvent(@Param("idOrAlias") idOrAlias: string) {
        if (Id.isValideId(idOrAlias)) {
            return this.serialize(events.find(event => event.id === idOrAlias))
        }
        if (!Id.isValideId(idOrAlias)) {
            return this.serialize(events.find(event => event.alias === idOrAlias))
        }

    }

    @Get("validate/:alias/:id")
    async aliasIsValid(@Param("alias") alias: string, @Param("id") id: string) {
        const event = events.find((event) => event.alias === alias)
        return { valid: !event || event.id === id }
    }

    private serialize(event: Event) {
        if (!event) return null
        return {
            ...event,
            date: Date.format(event.date)
        }
    }

    private deserialize(event: any): Event {
        if (!event) return null
        return {
            ...event,
            date: Date.parser(event.date)
        } as Event
    }
}
