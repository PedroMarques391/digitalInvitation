import { useLocalSearchParams } from 'expo-router'
import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { bgBlack, flex1, flexRow, gapX2, gapY4, itemsCenter, justifyCenter, p4, py4, py8, roundedLg, textWhite, wFull } from '@/style'
import useEvent from '@/data/hooks/useEvent'
import { SafeAreaView } from 'react-native-safe-area-context'
import EventInformations from '@/components/event/EventInformations'
import Statistics from '@/components/shared/Statistics'
import { Guest } from 'core'

export default function Details(): React.JSX.Element {
    const { event, selectEvent } = useEvent()
    const params = useLocalSearchParams()

    useEffect(() => {
        selectEvent(params.id as string)
    }, [params.id])

    const presents = event?.guests.filter((item: Guest) => item.isConfirmed) ?? []

    const absent = event?.guests.filter((item: Guest) => !item.isConfirmed) ?? []

    const totalGuests = presents.reduce((acc, guest) => {
        return acc + guest.numberOfCompanions + 1
    }, 0)

    return event ?
        (
            <SafeAreaView style={[bgBlack, flex1, p4]}>
                <ScrollView contentContainerStyle={[gapY4, py4]}>
                    <Image
                        source={{ uri: event.image }}
                        style={[wFull, roundedLg, { height: 200 }]}
                    />
                    <EventInformations event={event} />

                    <View style={[flexRow, gapX2, { marginTop: 40 }]}>
                        <Statistics
                            image={require("@/assets/images/convidados.png")}
                            value={event.publicExpected}
                            text="Publico esperado" />
                        <Statistics
                            image={require("@/assets/images/confirmados.png")}
                            value={presents.length}
                            text="Confirmações" />
                        <Statistics
                            image={require("@/assets/images/acompanhantes.png")}
                            value={totalGuests}
                            text="Acompanhantes" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        ) :
        (
            <View style={[bgBlack, flex1, justifyCenter, itemsCenter]}>
                <Text style={[textWhite]}>Evento não encontrado...</Text>
            </View>
        )
}