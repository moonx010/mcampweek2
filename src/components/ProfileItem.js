import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image, StyleSheet, View, Text} from 'react-native';
import dummy from '../db/data.json';

export default function ProfileItem({user_id}) {
    const insets = useSafeAreaInsets();
    //const {top} = insets;
    const username = dummy.user.filter(user=>user.id === user_id);
    return (
        <View style={styles.row}>
            <Image source={require('C:\Users\LGPC\kaist\week2_day6\mcampweek2\src\images\CategoryFoodImage.jpg')} style={styles.imageContainer} resizeMode={"cover"}/>
            <Text style = {styles.title}>{username[0].name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 100,
        margin: 8,
        overflow: 'hidden',
        
    },
    container: {
        backgroundColor: '#fff', 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        alignItem:'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItem:'center',  
        justifyContent: 'flex_start',
        margin: 12,
    },
    title: {
        fontSize: 20,
        marginRight: 8,
    },    
})