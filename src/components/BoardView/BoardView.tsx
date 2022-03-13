import { useState } from 'react';
import {Button, View} from 'react-native';
import { Direction } from '../../interfaces/IDirections';
import BoardTitle from './BoardTitle';

export default function BoardView (props: {selectedLine: Direction, swapFunc: () => void}) {
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