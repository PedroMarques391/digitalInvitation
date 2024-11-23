import EventProvider from "@/data/contexts/eventContext";
import { bgZinc800 } from "@/style";
import { colors } from "@/style/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <EventProvider>
      <Stack >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="(stack)/event/[id]"
          options={{
            title: "Detalhes",
            headerBackTitle: "Voltar",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: colors.zinc[900]
            }
          }}
        />
      </Stack>

    </EventProvider>
  )
}
