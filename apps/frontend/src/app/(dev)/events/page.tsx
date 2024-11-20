import events from '@/core/constants/events'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import QRCode from 'react-qr-code'



export default function Events() {

    return (
        <div className='grid grid-cols-3 gap-3'>{events.map((item) => (
            <div key={item.id} className='bg-zinc-800 rounded-lg flex flex-col w-full overflow-hidden'>
                <div className="relative w-full h-52">
                    <Image className='object-cover' src={item.image} alt={item.name} fill />
                </div>
                <div className='flex flex-col items-center text-center flex-1 p-7'>
                    <span className='text-lg text-center font-black'>{item.name}</span>
                    <p className='flex-1 text-sm text-zinc-400'>{item.description}</p>
                    <QRCode value={JSON.stringify({ id: item.id, password: item.password })} className='w-44 h-44' />
                </div>
                <div className="flex justify-around gap-10 px-3 pb-3">
                    <Link
                        href={`/event/admin/${item.id}/${item.password}`}
                        className='button red flex-1'>
                        Admin
                    </Link>
                    <Link
                        href={`/invitation/${item.alias}`}
                        className='button green flex-1'>
                        Convite
                    </Link>
                </div>
            </div>

        ))}</div>
    )
}
