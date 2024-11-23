import { View, Text } from 'react-native'
import React from 'react'
import { Event } from 'core'
import { gapY2 } from '@/style'
import Information from '../shared/Information'


interface IEventInformationsProps {
    event: Event
}

export default function EventInformations({ event }: IEventInformationsProps): React.JSX.Element {
    return (
        <View style={[gapY2]}>
            <Information label='Nome'>{event.name}</Information>
            <Information label='Data'>{new Date(event.date).toLocaleString("pt-br")}</Information>
            <Information label='Local'>{event.place}</Information>
            <Information label='Descrição'>{event.description}</Information>

        </View>
    )
}