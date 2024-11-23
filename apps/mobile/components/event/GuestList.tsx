import { View, Text } from 'react-native'
import React from 'react'
import { Guest } from 'core'
import { border, borderZinc800, gapX4, gapY1, gapY2, gapY4, mt1, mt3, px4, py2, roundedMd, textLg, textSm, textWhite, textZinc400 } from '@/style'

interface IGuestListProps {
    guests: Guest[]
}

export default function GuestList({ guests }: IGuestListProps): React.JSX.Element {
    return (
        <View>
            {guests && guests.length > 0 ? (
                <View style={gapY2}>
                    {guests.map((item) => (
                        <View key={item.id} style={[border, borderZinc800, roundedMd, px4, py2, gapY1]}>
                            <Text style={[textWhite, textLg]}>{item.name}</Text>
                            <Text style={[textZinc400, textSm]}>{item.email}</Text>
                        </View>
                    ))}
                </View>
            ) : <Text style={[textZinc400, textSm]}>Ningém por aqui ainda...</Text>}
        </View>
    )
}