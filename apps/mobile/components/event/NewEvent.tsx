import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { bgBlack, bgZinc950, button, gapY4, itemsCenter, py1, roundedFull, textWhite } from '@/style'
import { useCameraPermissions } from "expo-camera"
import { Link } from 'expo-router';

export default function NewEvent(): React.JSX.Element {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission || !permission.granted) {
        return (
            <View>
                <Text>Permissão de camera negada</Text>
                <Pressable style={[button, bgZinc950]} onPress={requestPermission}>
                    <Text style={textWhite}>Solicitar permissão</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={[itemsCenter, gapY4]}>
            <Link href="/qrcode" asChild>
                <Pressable>
                    <Image source={require("@/assets/images/qrcode.png")} style={{ width: 80, height: 80 }} />
                </Pressable>
            </Link>
            <View style={[button, py1, roundedFull]}>
                <Text style={textWhite}>Novo Evento</Text>
            </View>
        </View>
    )
}