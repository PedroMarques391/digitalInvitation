import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { complementaryEvent, complementaryGuest, Date, Event, events, Guest, Id } from "core"
import { EventPrisma } from './event.prisma';


@Controller('events')
export class EventsController {
    constructor(readonly repository: EventPrisma) { }

    @Post()
    async saveEvent(@Body() event: Event) {
        const hasEvent = await this.repository.searchByAlias(event.id)
        if (hasEvent && hasEvent.id !== event.id) throw new Error("Ops, Já existe um evento com essa Alias.")

        const eventComplete = complementaryEvent(this.deserialize(event))
        await this.repository.save(eventComplete)

    }

    @Post(":alias/guest")
    async saveGuest(
        @Param("alias")
        alias: string,
        @Body() guest: Guest) {
        const event = await this.repository.searchByAlias(alias)
        if (!event) throw new Error("Evento não encotrado!")

        const completeGuest = complementaryGuest(this.deserialize(guest))

        await this.repository.saveGuest(event, completeGuest)
    }

    @Post("access")
    async accessEvent(@Body() datas: { id: string, password: string }) {
        const event = await this.repository.searchById(datas.id)
        if (!event) throw new Error("Evento não encontrado.");
        if (event.password !== datas.password) throw new Error("A senha não corresponde ao evento!");
        return this.serialize(event)
    }

    @Get()
    async searchEvents() {
        const events = await this.repository.searchAll()
        return events.map(this.serialize)
    }

    @Get(":idOrAlias")
    async searchEvent(@Param("idOrAlias") idOrAlias: string) {
        let event: Event
        if (Id.isValideId(idOrAlias)) {
            event = await this.repository.searchById(idOrAlias, true)
        }
        if (!Id.isValideId(idOrAlias)) {
            event = await this.repository.searchByAlias(idOrAlias, true)
        }
        return this.serialize(event)

    }

    @Get("validate/:alias/:id")
    async aliasIsValid(@Param("alias") alias: string, @Param("id") id: string) {
        const event = await this.repository.searchByAlias(alias)
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
