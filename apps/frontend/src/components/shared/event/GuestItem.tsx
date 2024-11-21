import { Guest } from 'core'
import React from 'react'

interface IGuestItemProps {
    guest: Guest
}

export default function GuestItem({ guest }: IGuestItemProps): React.JSX.Element {
    return (
        <section className='flex justify-between bg-black/40 rounded-lg px-6 py-3 border border-zinc-800'>
            <div className='flex flex-col'>
                <span className='text-xl font-bold'>{guest.name}</span>
                <span className='texx-sm text-zinc-400'>{guest.email}</span>
            </div>
            <div className='flex flex-col items-end'>
                <span className='texx-sm text-zinc-400'>Acompanhantes</span>
                <span className='text-xl font-bold'>{guest.numberOfCompanions}</span>
            </div>
        </section>
    )
}
