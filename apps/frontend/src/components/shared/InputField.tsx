import React, { HTMLProps } from 'react'

export interface IInputFieldProps extends HTMLProps<HTMLInputElement> {
    label: string
    value: number | string
    onChange: (event: any) => void
    description?: string
    observer?: string,
    error?: string
}

export const InputField = ({ label, onChange, value, description, observer, error, ...rest }: IInputFieldProps): React.JSX.Element => {
    return (
        <div className=' flex flex-col gap-2'>
            <div className="flex flex-col">
                {label && <label className='text-lg font-black text-white'>{label}</label>}
                {description && <p className='text-sm font-light text-zinc-400 -mt-1'>{description}</p>}
                <input
                    {...rest}
                    value={value}
                    onChange={onChange}
                    className='w-full px-3 py-2 border rounded-md bg-black/50 border-white/20 focus:border-white/50' />
            </div>
            {error && (
                <span className="pl-2 text-sm text-red-500">{error}</span>
            )}
            {!error && observer && (
                <span className="pl-2 text-xs text-yellow-300">{observer}</span>
            )}
        </div>
    )
}
