import { useState } from 'react';
import {Button, View} from 'react-native';
import BoardTitle from '../atoms/BoardTitle';

export default function BoardView (props) {
    console.log(props.selectedLine)

    return (
        <View>
            <Button title = 'SWITCH' onPress = {props.swapFunc}/>

            <BoardTitle name = {props.selectedLine.from + ' - ' + props.selectedLine.to} />
        

            {/* label menu */}
            {/* container with posts */}
            {/* map */}
        </View>
    )
        
}