import Image from 'next/image'
import React, { ReactNode } from 'react'

interface IWindowProps {
    children: ReactNode
    label?: string
    title?: string,
    image?: string,
    backgroundImage?: string
}


const Window = ({ children, backgroundImage, image, label, title }: IWindowProps): React.JSX.Element => {
    return (
        <div className='relative overflow-hidden rounded-lg border border-zinc-800'>
            <Image src={backgroundImage
                ? backgroundImage
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEREhyDQCuTlxNVESOvQCxQ7Ew_6P2lXljnA&s"}
                alt={title ?? "Imagem de Background"}
                fill
                className='-z-30 object-cover'
            />
            <div className='bg-black/80'>
                <div className='flex gap-7 p-6 items-center'>
                    <div className="w-28 h-28 rounded-full relative">
                        <Image src={image
                            ? image
                            : "https://media.istockphoto.com/id/974238866/pt/foto/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=ZOCjHsr2nyWVvAgjA36Kg1FaIQpvQ3oThxEf_W7JdCc="}
                            alt={title ?? "Imagem de Background"}
                            fill
                            className='rounded-full object-cover'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm text-zinc-300'>{label ?? "Detalhes do evento?"}</span>
                        <span className='text-4xl text-zinc-300 font-bold'>{title ?? "titulo do evento?"}</span>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/elementos.png"
                            alt="Elementos decorativos"
                            width={140}
                            height={140}
                        />
                    </div>
                </div>
                <div className='bg-black/70 border-t-4 border-zinc-800 rounded-b-xl p-7'>{children}</div>
            </div>
        </div>
    )
}

export default Window