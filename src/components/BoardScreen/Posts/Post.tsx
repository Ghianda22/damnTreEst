import { useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import { Post, Posts } from '../../../interfaces/IPosts';
import { UserPicture } from '../../../interfaces/User';
import handleApiCall from '../../../services/fetch';

export default function PostCard(props: {post: Post}){
    const post: Post = props.post;
    const [userPicture, setUserPicture] = useState<UserPicture | undefined>()//pversion
    //TODO add pversion control and recover images from local storage
    useEffect(() =>  {
        handleApiCall<UserPicture, null>('getUserPicture', {uid: post.author}).then(res => {
            if (res)
                setUserPicture(res)});
    }, []);
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text>{props.post.authorName}</Text>
                {userPicture !== undefined && <Image source={{uri: userPicture.picture}}/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
      },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    }
})