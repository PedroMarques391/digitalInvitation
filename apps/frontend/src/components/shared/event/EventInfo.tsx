import React from 'react'
import { IEventDashboardProps } from './EventDashboard'
import Information from '../shared/Information'

export default function EventInfo({ event, className }: IEventDashboardProps): React.JSX.Element {
    return (
        <div className={`${className} flex flex-col gap-2`}>
            <div className="flex flex-1 items-center gap-4 border border-zing-800 px-6 py-3 rounded-lg">
                <span className='text-2xl font-black'>{event.alias}: </span>
                <span className='text-xl text-zinc-300'>{event.name}</span>
            </div>
            <div className='flex gap-2 text-center'>
                <Information label='Data: '>
                    <span>
                        {new Date(event.date!).toLocaleDateString()}
                        {" às "}
                        {new Date(event.date!).toLocaleTimeString()}
                    </span>
                </Information>
                <Information label='Local: '>
                    {event.place}
                </Information>
            </div>
            <Information label='Descrição: '>
                {event.description}
            </Information>
        </div>
    )
}
