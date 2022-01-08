
import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';

import dummy from '../db/data.json';


const PostListItem = (item) => {
    const navigation = useNavigation();
   
    const onPress = useCallback(() => {
        navigation.navigate('PostDetailScreen', {
            item,
        });
    }, [navigation, item]);

    const [list, setList] = useState();
    const id = item.user_id;
    const userName = dummy.user.filter(user => user.id === id);
    // useEffect(()=>{
    //     const initList = async()=>{
    //         const initialList = await fetchSeat(item.Post_NUMBER);
    //         setList(initialList);
    //     };
    //     initList();
    //     // let i;
    //     // for(i=0; i<6; i++)
    //     // {
    //     //     if(list[i].SEAT_USING === false)
    //     // }
    return (
        <Pressable onPress={onPress} style={styles.itemContainer}>   
            <View style={{ flex: 1, alignSelf: 'flex-start', marginTop: 4 }}>
                <Text style={styles.contentTitle}>{item.post_title}</Text>
                <Text style={styles.content}>{item.post_content}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles.userName}>{JSON.stringify(userName[0].name)}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    contentTitle: {
        fontSize: 15,
        marginBottom: 4,
        fontWeight: 'bold',
        marginLeft: 10
    },
    content:{
        fontSize: 14,
        marginLeft: 10
    },
    userName: {
        fontSize: 14,
        marginTop: 10,
        marginLeft: 10
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
        marginRight:10
    },
    productImage: {
        height: 120,
        width: 160,
        borderRadius: 10,
        marginRight: 10
    },
    productName: {
        fontSize: 22,
        marginBottom: 4,
    },
    productDesc: {
        fontWeight: '100',
        fontSize: 16,
        marginTop: 4
    },
    productPrice: {
        fontSize: 20,
        textAlign: 'right',
        marginTop: 10,
    }
})

export default PostListItem;
