import { Event } from '@/core'
import React from 'react'
import QRCode from 'react-qr-code'

interface IQrcodeProps {
    event: Event
}

export default function Qrcode({ event }: IQrcodeProps): React.JSX.Element {
    return (
        <div className='flex flex-col items-center justify-center gap-4 border border-zinc-800 py-5 px-10'>
            <span className='text-sm font-light text-zinc-400'>Acesse via mobile</span>
            <QRCode
                value={JSON.stringify({
                    id: event.id,
                    password: event.password
                })}
                className='w-32 h-32'
            />
        </div>
    )
}
