import {Text, View} from 'react-native';
import { Direction } from "../../interfaces/IDirections";

export default function Header(direction:Direction){
    return (
        <View>
            <Text>direction.from + ' - ' + direction.to</Text>
            
        </View>
    )
}