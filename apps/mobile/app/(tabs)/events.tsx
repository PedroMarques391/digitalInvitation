import EventCard from '@/components/event/EventCard'
import useEvent from '@/data/hooks/useEvent'
import { bgBlack, flex1, gapY4, p4, py8 } from '@/style'
import { useRouter } from 'expo-router'
import { Pressable, SafeAreaView, ScrollView } from 'react-native'


const Events = (): React.JSX.Element => {

    const { events } = useEvent()
    const router: any = useRouter()

    return (
        <SafeAreaView style={[flex1, bgBlack, p4]}>
            <ScrollView contentContainerStyle={[gapY4, py8]}>
                {events.map((item) => (
                    <Pressable key={item.id} onPress={() => router.push(`/event/${item.id}`)}>
                        <EventCard event={item} />
                    </Pressable>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}



export default Events