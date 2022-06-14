import React, { useState } from 'react';
import {Text, View} from 'react-native';

//typescript
import { Direction } from '../interfaces/IDirections';
import { BoardNSP } from '../types/NativeStackNavigator';
import { MaterialTopTabParamList } from '../types/MaterialTopTabNavigator';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Map from '../components/BoardScreen/Map';
import PostsScreen from '../components/BoardScreen/Posts';
import Stops from '../components/BoardScreen/Stops';

const Tab = createMaterialTopTabNavigator<MaterialTopTabParamList>();

export default function BoardScreen({route, navigation}: BoardNSP) {
    const [direction, setDirection] = useState<Direction>(route.params.direction);
    //dynamic header
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: direction.from + ' - ' + direction.to });
      }, [navigation, route]);

    
    return (
        <Tab.Navigator>
                <Tab.Screen name='Stops' component={Stops} />
                <Tab.Screen name='Map' component={Map} />
                <Tab.Screen name='Posts' component={PostsScreen} initialParams={{did: direction.did}} />
        </Tab.Navigator>
    );
}
