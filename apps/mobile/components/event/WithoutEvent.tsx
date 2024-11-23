import { View, Text, Image } from 'react-native'
import React from 'react'
import { bgZinc950, fontBlack, gapY4, itemsCenter, py4, roundedLg, text3Xl, textLg, textWhite, textZinc400, wFull } from '@/style'

export default function WithoutEvent(): React.JSX.Element {
    return (
        <View style={[itemsCenter]}>
            <View style={[itemsCenter, py4, bgZinc950, wFull, roundedLg, gapY4]}>
                <Image
                    source={require("@/assets/images/sem-eventos.png")}
                    style={{ width: 200, height: 200 }}
                />
                <Text style={[textWhite, text3Xl, fontBlack]}>OOPS..</Text>
                <View style={[itemsCenter]}>
                    <Text style={[textZinc400, textLg]}>Ainda não temos eventos criados</Text>
                    <Text style={[textZinc400, textLg]}>Vamos escanear um Qrcode?</Text>
                </View>
                <Image source={require("@/assets/images/triangulo.png")} style={{ width: 25, height: 17 }} />
            </View>

        </View>
    )
}