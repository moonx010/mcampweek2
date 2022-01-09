
import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
import UpdateTime from '../UpdateTime';



const PopularListItem = (item) => {
    const navigation = useNavigation();
    const onPress = useCallback(() => {
        navigation.navigate('PostDetailScreen', {
            item,
        });
    }, [navigation, item]);

    //const timeText = UpdateTime(item.created_at);

    

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
                <Text style={[{color: '#CC3D3D', fontWeight:'bold'}, styles.category]}>{item.category}</Text>
                <Text style={styles.productDesc}>{item.title}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 1,
    },
    category: {
        fontFamily:'GodoM',
        fontWeight: '100',
        fontSize: 12,
        marginTop: 9,
        marginRight:10
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
})

export default PopularListItem;
