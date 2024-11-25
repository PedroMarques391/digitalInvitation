import { Event, Guest } from 'core'
import React from 'react'
import EventInfo from './EventInfo'
import Qrcode from './Qrcode'
import Statistic from '../shared/Statistic'
import GuestList from './GuestList'

export interface IEventDashboardProps {
    event: Event
    hiddenName?: boolean
    className?: string,
    presents?: Guest[],
    absents?: Guest[]
    totalPeople?: number,
    updateList?: () => void
}

export default function EventDashboard({ event, presents, totalPeople, absents, updateList }: IEventDashboardProps): React.JSX.Element {

    if (!presents || !absents) return <></>

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-5 self-stretch'>
                <EventInfo event={event} className='flex-1' />
                <Qrcode event={event} />
            </div>
            <div className='grid grid-cols-3 gap-6 mt-4'>
                <Statistic text='Convidados esperados: '
                    value={event.publicExpected}
                    image="/icones/convidados.svg" />
                <Statistic text='Convidados Confirmados: '
                    value={presents?.length}
                    image="/icones/confirmados.svg" />
                <Statistic text='Acompanhates esperados: '
                    value={totalPeople}
                    image="/icones/acompanhantes.svg" />
            </div>

            <button
                onClick={updateList}
                className='button blue self-end mt-12'>
                <span>Atualizar Lista de convidados</span>
            </button>

            <span className='flex py-2 text-xl font-bold text-white/80'>Convidados que confirmaram presença</span>
            <GuestList guests={presents} />
            <span className='flex py-2 text-xl font-bold text-white/80'>Convidados que não confirmaram presença</span>
            <GuestList guests={absents} />
        </div>
    )
}
