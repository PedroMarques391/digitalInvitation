import React from 'react'
import Steps from '../shared/Steps'
import useEvent from '@/data/hooks/useEvent'
import { Alias, Data } from 'core'
import { InputField } from '../shared/InputField'

export const EventForm = (): React.JSX.Element => {
    const { saveEvent, isValidAlias, changeEvent, event } = useEvent()

    const labels = [
        "Identificação do event",
        "Local e Data",
        "Informações Finais"
    ]

    const allowNextStep: boolean[] = [
        !!event.alias && !!event.name && isValidAlias,
        !!event.date && !!event.place,
        !!event.description && (event.publicExpected ?? 0) > 0,
    ]


    return (
        <div>
            <Steps
                labels={labels}
                action={saveEvent}
                labelFinalAction='Salvar'
                allowNextStep={allowNextStep}>
                <div className='flex flex-col gap-5'>
                    <InputField
                        type='text'
                        label='Identificador'
                        description='Identidicador único e exclusivo para o event (usado na URL)'
                        value={Alias.formatar(event.alias ?? "")}
                        onChange={(e) => changeEvent({ ...event, alias: Alias.formatar(e.target.value) })}
                        error={isValidAlias ? "" : "Identidicador inválido"}
                    />

                    <InputField
                        type='text'
                        label='Nome'
                        description='Nome do event ("ex: Festa de aniversário da ANNA.")'
                        value={event.name ?? ""}
                        onChange={(e) => changeEvent({ ...event, name: e.target.value })}
                    />
                </div>
                <div className='flex flex-col gap-5'>
                    <InputField
                        label='Data'
                        description='Data e hora em que o event ocorrerá'
                        value={Data.format(event.date ?? new Date())}
                        type='datetime-local'
                        onChange={(e) => changeEvent({
                            ...event,
                            date: Data.parser(e.targer.value)
                        })}
                    />
                    <InputField
                        label='Local'
                        description='Local onde o event será realizado'
                        value={event.place ?? ""}
                        type='text'
                        onChange={(e) => changeEvent({
                            ...event,
                            place: e.target.value
                        })}
                    />

                </div>





                <div className='flex flex-col gap-5'>

                    <InputField
                        label="Descrição"
                        description='Descrição do event (ex.: "Só entra se trouxer presente!")'
                        value={event.description ?? ""}
                        onChange={(e) =>
                            changeEvent({
                                ...event,
                                description: e.target.value,
                            })
                        }
                    />
                    <InputField
                        label="Imagem"
                        description="URL da imagem que será exibida no convite"
                        value={event.image ?? ""}
                        observer='**Campo opcional'
                        onChange={(e) =>
                            changeEvent({
                                ...event,
                                image: e.target.value,
                            })
                        }
                    />
                    <InputField
                        label="Background"
                        description="URL da imagem que será exibida como background no convite"
                        value={event.backgroundImage ?? ""}
                        observer='**Campo opcional'
                        onChange={(e) =>
                            changeEvent({
                                ...event,
                                backgroundImage: e.target.value,
                            })
                        }
                    />
                    <InputField
                        label="Público Esperado"
                        description="Total de convidados e acompanhantes esperados"
                        value={event.publicExpected ?? 1}
                        onChange={(e) =>
                            changeEvent({
                                ...event,
                                publicExpected: Number(e.target.value),
                            })
                        }
                        type="number"
                        min={1}
                    />
                </div>
            </Steps>
        </div>
    )
}
