
import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
import dummy from '../../db/data.json';

const PopularListItem = (item) => {
    const navigation = useNavigation();
    const onPress = useCallback(() => {
        navigation.navigate('PostDetailScreen', {
            item,
        });
    }, [navigation, item]);

   // const [list, setList] = useState();

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
            
            <View style={{ flex: 1, alignSelf: 'flex-start', marginTop: 4, flexDirection:'row' }}>
                <Text style={[{color: '#CC3D3D', fontWeight:'bold'}, styles.category]}>{item.post_category}</Text><Text style={styles.productDesc} >{item.post_title}</Text>
            </View>
            
        </Pressable>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    category: {
        fontWeight: '100',
        fontSize: 16,
        marginTop: 4,
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
    },

    
})

export default PopularListItem;
