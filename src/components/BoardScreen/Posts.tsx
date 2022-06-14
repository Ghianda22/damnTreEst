import { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Posts(){
    const [formState, setFormState] = useState(false);

    

    return (
        <View>
            <Text>
                POSTS
            </Text>
            { formState ? <View style={styles.form}> <Text>Nuovo post</Text> </View> : null}
            <Button title='+' onPress={() => (setFormState(true))}/>
            <Button title='PUBBLICA' onPress={() => (setFormState(false))}/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: '200px',
        borderWidth: 3,
        borderColor: 'blue'
    }
})