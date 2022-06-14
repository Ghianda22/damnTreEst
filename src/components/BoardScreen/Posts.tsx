import { useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { Posts, Post } from '../../interfaces/IPosts';
import handleApiCall from '../../services/fetch';
import { PostsMTTSP } from '../../types/MaterialTopTabNavigator';

export default function PostsScreen({route}: PostsMTTSP){
    const [formState, setFormState] = useState(false);
    const [posts, loadPosts] = useState<Post[]>();

    useEffect(() =>  {
        handleApiCall<Posts, null>('getPosts', {did: route.params.did}).then(res => {
            if (res)
                loadPosts(res.posts)});
    }, [])


    return (
        <View>
            <Text>{posts !== undefined ? posts[0].author  : 'cucù!'}</Text>
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