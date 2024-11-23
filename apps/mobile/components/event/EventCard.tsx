import { bgZinc900, fontBold, p4, roundedFull, roundedMd, textCenter, textLg, textSm, textWhite, textXs, textZinc400 } from '@/style'
import { Event } from 'core'
import { Image, Text, View } from 'react-native'

interface IEventCardProps {
    event: Event
}

const EventCard = ({ event }: IEventCardProps): React.JSX.Element => {
    return (
        <View style={bgZinc900}>
            <Image source={{ uri: event.image }} style={[{ width: "100%", height: 150 }, roundedMd]} />
            <View style={[p4]}>
                <Text style={[textWhite, fontBold, textLg, textCenter]}>{event.name}</Text>
                <Text style={[textCenter, textXs, textZinc400]}>{event.description}</Text>
            </View>
        </View>
    )
}



export default EventCard

