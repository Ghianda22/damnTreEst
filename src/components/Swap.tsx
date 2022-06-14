import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Direction } from '../interfaces/IDirections';

export default function Swap (props: {selectedDirection: Direction | undefined, swapFunc: () => void }) {
    
    return (
        <View style = {styles.button}>
            
            {/* <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick = {props.swapFunc} /> */}

        </View>
    )
        
}

const styles = StyleSheet.create({
    button:{
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10
    }
})