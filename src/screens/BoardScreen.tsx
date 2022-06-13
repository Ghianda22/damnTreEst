import {Text, View} from 'react-native';

//typescript
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../types/StackNavigator';
type StackProps = NativeStackScreenProps<StackParamList, 'Board'>;

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Map from '../components/BoardScreen/Map';
import Posts from '../components/BoardScreen/Posts';
import Stops from '../components/BoardScreen/Stops';

const Tab = createMaterialTopTabNavigator();


export default function BoardScreen({route, navigation}:StackProps) {
    return (
        <Tab.Navigator>
                <Tab.Screen name='Stops' component={Stops} />
                <Tab.Screen name='Map' component={Map} />
                <Tab.Screen name='Posts' component={Posts} />
        </Tab.Navigator>
    );
}
