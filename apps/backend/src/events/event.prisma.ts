import { Injectable } from '@nestjs/common';
import { Event, Guest } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
    constructor(readonly prisma: PrismaProvider) {

    }
    save(event: Event) {
        return this.prisma.event.create({
            data: event as any
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
}
