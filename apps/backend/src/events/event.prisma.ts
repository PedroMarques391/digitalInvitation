import { Injectable } from '@nestjs/common';
import { Event, Guest } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
    constructor(readonly prisma: PrismaProvider) { }

    saveEvent(event: Event) {
        return this.prisma.event.create({
            data: {
                ...(event as any),
                guests: { create: event.guests }
            }
        })
    }

    saveGuest(event: Event, guest: Guest) {
        return this.prisma.guest.create({
            data: {
                ...guest,
                numberOfCompanions: +(guest.numberOfCompanions ?? 0),
                event: { connect: { id: event.id } }
            }
        })
    }

    async searchAll(): Promise<Event[]> {
        return this.prisma.event.findMany() as any
    }

    async searchById(
        id: string,
        complete: boolean = false,
    ): Promise<Event | null> {
        return this.prisma.event.findUnique({
            where: { id },
            include: { guests: complete }
        }) as any
    }


    async searchByAlias(
        alias: string,
        complete: boolean = false
    ): Promise<Event | null> {
        return this.prisma.event.findUnique({
            select: {
                id: true,
                alias: true,
                description: true,
                backgroundImage: true,
                image: true,
                date: true,
                name: true,
                place: true,
                publicExpected: complete,
                password: complete,
                guests: complete
            },
            where: { alias },
        }) as any
    }
}
