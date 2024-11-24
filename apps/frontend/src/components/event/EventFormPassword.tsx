import React from 'react'
import { InputField } from '../shared/InputField'


interface IEventFormPassword {
    password: string
    setPassword: (password: string) => void
    acessEvent: () => void
}

export default function EventFormPassword({ acessEvent, password, setPassword }: IEventFormPassword): React.JSX.Element {
    return (
        <div className='flex flex-col items-center gap-5 bg-zinc-900 rounded-lg  shadow-lg p-8  w-96 border border-zinc-900'>
            <h1 className='text-3xl font-bold'>Bem vindo(A)</h1>
            <h2 className='text-lg font-semibold -mt-3'>Administrador</h2>
            <p className='text-zinc-500 text-sm'>Insira sua senha para gerenciar o evento</p>
            <InputField
                label='Senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Digite sua Senha'
                type='password'
            />
            <button
                className='button blue'
                onClick={acessEvent}>Acessar evento</button>

        </div>
    )
}
