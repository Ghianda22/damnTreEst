import {Text, View} from 'react-native';

//typescript
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../types/StackNavigator';
type StackProps = NativeStackScreenProps<StackParamList, 'Board'>;


export default function BoardScreen({route, navigation}:StackProps) {
    return (
        <View>
            <Text>{route.params.from}</Text>
        </View>
    );
}
