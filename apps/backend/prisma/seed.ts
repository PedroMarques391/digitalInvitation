import { PrismaClient } from "@prisma/client"
import { events } from "core"

async function seed() {
    const prisma = new PrismaClient()

    const transitions = events.map(async (event) => {
        await prisma.event.create({
            data: {
                id: event.id,
                alias: event.alias,
                name: event.name,
                password: event.password,
                date: event.date,
                place: event.place,
                description: event.description,
                image: event.image,
                backgroundIImage: event.backgroundImage,
                publicExpected: event.publicExpected,
                guests: {
                    create: event.guests.map((guest) => ({
                        id: guest.id,
                        name: guest.name,
                        email: guest.email,
                        isConfirmed: guest.isConfirmed,
                        hasCompanions: guest.hasCompanions,
                        numberOfCompanions: guest.numberOfCompanions
                    }))
                }
            }
        })
    })
    await Promise.all(transitions)


}

seed()