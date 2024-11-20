import { Guest } from '@/core'
import React from 'react'
import GuestItem from './GuestItem'

interface IGuestListProps {
    guests: Guest[]
}

export default function GuestList({ guests }: IGuestListProps): React.JSX.Element {
    return (
        <ul className='flex flex-col gap-2'>
            {guests.map((item) => (
                <li key={item.id}>
                    <GuestItem guest={item} />
                </li>
            ))}
        </ul>
    )
}
