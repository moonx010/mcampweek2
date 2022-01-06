//import numeral from 'numeral';
import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
    //"id": 10000,
    //"color": "red",
    //"imageUrl": "http://placeimg.com/640/480",
    //"productName": "Practical Rubber Hat",
    //"price": 732000,
    //"productMaterial": "Rubber",
    //"product": "Ball",
    //"productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    //"createdAt": "2021-03-11T12:07:22.482Z",
    //"updatedAt":



const PostListItem = (item) => {
    const navigation = useNavigation();
    const onPress = useCallback(() => {
        navigation.navigate('PostDetailScreen', {
            item,
        });
    }, [navigation, item]);

    const [list, setList] = useState();
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
    // },[setList]);
    console.log('가게 자리 정보', list);

    //Postnum? Post name? 갖고 Post table 정보


    return (
        <Pressable onPress={onPress} style={styles.itemContainer}>
            
            <View style={{ flex: 1, alignSelf: 'flex-start', marginTop: 4 }}>
                <Text style={styles.productName}>{item.post_title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles.productDesc} >dkdkdkdk</Text>
                </View>
                
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
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
