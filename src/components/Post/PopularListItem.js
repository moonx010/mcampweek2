
import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';

const PopularListItem = (item, reload, setReload) => {
    const navigation = useNavigation();
    const onPress = useCallback(() => {
        navigation.navigate('PostDetailScreen', {
            item, reload, setReload
        });
    }, [navigation, item, reload, setReload]);

    return (
        <Pressable onPress={onPress} style={styles.itemContainer}>
            <View style={{ flex: 1, alignSelf: 'flex-start', marginTop: 4, flexDirection:'row' }}>
                <Text style={[{color: '#59B5FF', fontWeight:'bold'}, styles.category]}>{item.category}</Text>
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
