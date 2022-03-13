import { StyleSheet, Text } from 'react-native';

export default function BoardTitle(props: {name: string}) {
    return (
        <Text style = {titleStyle.title}>{props.name}</Text>
    )
}

const titleStyle = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        backgroundColor: '#3CE8E2',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
})