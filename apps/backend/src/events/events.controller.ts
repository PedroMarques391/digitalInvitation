import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import {
    complementaryEvent,
    complementaryGuest,
    Data, Event,
    Guest, Id
} from "core"
import { EventPrisma } from './event.prisma';


@Controller('events')
export class EventsController {
    constructor(readonly repository: EventPrisma) { }

    @Post()
    async saveEvent(@Body() event: Event) {
        const registeredEvent = await this.repository.searchByAlias(event.alias)
        if (registeredEvent && registeredEvent.id !== event.id) {
            throw new HttpException("Ops, Já existe um evento com essa Alias.", 400)
        }

        const eventComplete = complementaryEvent(this.deserialize(event))
        await this.repository.saveEvent(eventComplete)
        return this.serialize(eventComplete)

    }

    @Post(":alias/guest")
    async saveGuest(
        @Param("alias") alias: string,
        @Body() guest: Guest) {

        const event = await this.repository.searchByAlias(alias)


        if (!event) throw new HttpException("Evento não encotrado!", 400)

        const completeGuest = complementaryGuest(guest)
        await this.repository.saveGuest(event, completeGuest)

    }

    @Post("access")
    async accessEvent(@Body() datas: { id: string, password: string }) {
        const event = await this.repository.searchById(datas.id, true)
        if (!event) {
            throw new HttpException("Evento não encontrado.", 400);
        }
        if (event.password !== datas.password) {
            throw new HttpException("A senha não corresponde ao evento!", 400);
        }
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
            date: Data.format(event.date)
        }
    }


    private deserialize(event: any): Event {
        if (!event) return null;
        return {
            ...event,
            date: Data.parser(event.date),
        } as Event;
    }

}
