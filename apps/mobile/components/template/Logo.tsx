import { Image, Text, View } from 'react-native'
import { useFonts } from "expo-font"
import { alignCenter, flexRow, text3Xl, textBlue500, textCenter, textWhite, textZinc400, w4_5 } from '@/style'


const Logo = (): React.JSX.Element => {

    const [loaded] = useFonts({
        Righteous: require("@/assets/fonts/Righteous-Regular.ttf")
    })

    const font = { fontFamily: "Righteous" }

    if (!loaded) return <></>



    return (
        <View style={[alignCenter]}>
            <Image source={require("@/assets/images/logo.png")}
                style={{ width: 80, height: 80 }}
            />

            <View style={flexRow}>
                <Text style={[text3Xl, textWhite, font]}>CONVIT</Text>
                <Text style={[text3Xl, textBlue500, font]}>3</Text>
                <Text style={[text3Xl, textWhite, font]}> DIGITAL</Text>
            </View>
            <View style={w4_5}>
                <Text style={[textZinc400, textCenter]}>
                    Crie e gerencie o convite do seu evento de forma rápida, fácil e sem complicações!
                </Text>
            </View>
        </View>
    )
}



export default Logo