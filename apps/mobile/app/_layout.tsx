import EventProvider from "@/data/contexts/eventContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <EventProvider>
      <Stack >
        <Stack.Screen name="(tabs)" options={{
          headerShown: false
        }} />
      </Stack>;
    </EventProvider>
  )
}
