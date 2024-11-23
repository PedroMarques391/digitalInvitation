import { View, Text } from 'react-native'
import React from 'react'
import { fontBold, py4, selfStart, textXl, textZinc400 } from '@/style'

export default function SectionTitle({ text }: { text: string }): React.JSX.Element {
    return (
        <Text style={[textXl, fontBold, py4, textZinc400, selfStart]}>
            {text}
        </Text>
    )
}