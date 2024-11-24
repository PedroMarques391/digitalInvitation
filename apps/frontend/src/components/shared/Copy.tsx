import React, { ReactElement } from 'react'
import { IconCopy } from "@tabler/icons-react"


interface ICopyProps {
    label: string
    text: string
    observer?: string
    iconProps: ReactElement
}

const Copy = ({ iconProps, label, observer, text }: ICopyProps): React.JSX.Element => {
    function copyText() {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className='flex flex-col gap-2'>

            <span>{label}</span>
            <div className='flex items-center gap-3 bg-black border border-zinc-800 px-4 py-2 text-zinc-300 text-lg'>
                {iconProps && iconProps}
                <span className='flex-1'>{text}</span>
                <IconCopy stroke={1.3} onClick={copyText} className='cursor-pointer' />
            </div>
            {observer && (
                <span className='text-xs text-yellow-600/80'>{observer}</span>
            )}
        </div>
    )
}

export default Copy