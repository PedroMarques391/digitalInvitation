import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { border, borderZinc800, fontBold, p4, px4, py2, roundedLg, textLg, textWhite, textXl, textZinc400 } from '@/style'

interface IInformationProps {
    children: ReactNode,
    label: string
}

export default function Information({ children, label }: IInformationProps): React.JSX.Element {
    return (
        <View style={[p4, roundedLg, px4, py2, border, borderZinc800]}>
            <Text style={[textXl, fontBold, textWhite]}>{label}</Text>
            <Text style={[textLg, textZinc400]}>{children}</Text>
        </View>
    )
}

