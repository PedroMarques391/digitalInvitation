import { View, Text, Image } from 'react-native'
import React from 'react'
import { bgZinc900, flex1, fontBlack, gapY2, itemsCenter, p4, roundedLg, textCenter, textWhite, textZinc400 } from '@/style'


interface IStatisticsProps {
    text: string,
    value: any
    image: any
}

export default function Statistics({ text, value, image }: IStatisticsProps): React.JSX.Element {
    return (
        <View style={[flex1, itemsCenter, bgZinc900, p4, roundedLg]}>
            <Image source={image}
                style={{ width: 80, height: 80, marginTop: -40 }}
            />
            <View style={[itemsCenter, gapY2]}>
                <Text style={[textZinc400, textCenter]}>{text}</Text>
                <Text style={[textWhite, textCenter, fontBlack]}>{value}</Text>
            </View>
        </View>
    )
}