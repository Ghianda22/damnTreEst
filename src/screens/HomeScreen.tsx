import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Lines, Line } from '../interfaces/ILines';
import handleApiCall from '../services/fetch';

import SelectDropdown from 'react-native-select-dropdown';
import { Direction } from '../interfaces/IDirections';
import AsyncStorage from '@react-native-async-storage/async-storage';

//typescript
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../types/StackNavigator';
type StackProps = NativeStackScreenProps<StackParamList, 'Home'>;




export default function HomeScreen({navigation}: StackProps) {
    const [lines, loadLines] = useState<Line[]>();
    const [selectedDirection, setSelectedDirection] = useState<Direction>();

    async function getLatestSelectedBoard(): Promise<Direction | undefined> {
        return await AsyncStorage.getItem('latestSelectedBoard').then(board => {
            if (board){
                return JSON.parse(board);
            }else return undefined;
        })
    }

    let directions: Direction[] = [];

    useEffect(() =>  {
        handleApiCall<Lines, null>('getLines').then(res => {
            if (res)
                loadLines(res.lines)});
        getLatestSelectedBoard().then(board => setSelectedDirection(board));
    }, [])

    //PROCESSING DATA: assignation of directions
    //NOTE decoder
    if (lines){

        lines.map((lineObj) => {

            Object.keys(lineObj).map((key) => {

                if(key === 'terminus2'){
                    directions.push( { 'from': lineObj.terminus1.sname, 'to': lineObj.terminus2.sname,  'did':  lineObj.terminus2.did });
                }else{
                    directions.push( { 'from': lineObj.terminus2.sname,  'to': lineObj.terminus1.sname, 'did':  lineObj.terminus1.did });
                }   
            })
        });
    }

    const swap = () => {
        setSelectedDirection(selectedDirection => {
            return directions.find(dir => selectedDirection?.from === dir.to )
        })
    }
    
    async function saveSelection(selectedBoard: Direction):Promise<void>{
        try {
            await AsyncStorage.setItem('latestSelectedBoard', JSON.stringify(selectedBoard));
        } catch (e) {
            console.log(e);
        }
    }
    
    const goToBoard = () => {
        selectedDirection && navigation.navigate('Board', selectedDirection);
    }

    return(
        <View>
            <Button title='Profilo' onPress={() => navigation.navigate('User')} />
            
            <SelectDropdown
            	data={directions} 
            	onSelect={(selectedItem: Direction) => {
                    setSelectedDirection(selectedItem);
		    		saveSelection(selectedItem);
                    navigation.navigate('Board', selectedItem);
            	}}
            	buttonTextAfterSelection={/*(selectedItem: Direction)*/() => {
            		// text represented after item is selected
            		// if data array is an array of objects then return selectedItem.property to render after item is selected
            		return selectedDirection?.from + ' - ' + selectedDirection?.to;
            	}}
            	rowTextForSelection={(item: Direction) => {
            		// text represented for each item in dropdown
            		// if data array is an array of objects then return item.property to represent item in dropdown
            		return item.from + ' - ' + item.to;
            	}}
            />
            {/* latest board */}
            {selectedDirection && <View>
                <Text>Ultima ricerca: </Text>
                <View>
                    <Text>{selectedDirection?.from + ' - ' + selectedDirection?.to}</Text>
                    <Button title='->' onPress={goToBoard} />
                </View>
            </View>}
            
        </View>
        
    );
}
