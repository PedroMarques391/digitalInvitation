import { View, Text } from 'react-native'
import React from 'react'
import { CameraView } from 'expo-camera'
import { flex1 } from '@/style'
import useEvent from '@/data/hooks/useEvent'
import { Route, useRouter } from 'expo-router'

export default function QrcodeScreen(): React.JSX.Element {
    const { addEventByQrCode } = useEvent()
    const router = useRouter()

    return (
        <CameraView
            facing='back'
            style={flex1}
            onBarcodeScanned={({ data }) => {
                addEventByQrCode(data)
                router.back()
            }}
        />
    )
}