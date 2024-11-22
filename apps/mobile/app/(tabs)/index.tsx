import { ImageBackground, Text, View } from "react-native";
import { alignCenter, bgBlack, centerGrow, flex1, justifyCenter, text3Xl } from "../../style";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "@/components/template/Logo";

export default function Index() {


  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      resizeMode="cover"
      style={[flex1, bgBlack, centerGrow]}
    >
      <Logo />

    </ImageBackground>
  );
}
