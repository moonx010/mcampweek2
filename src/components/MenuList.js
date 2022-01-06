import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MenuItem from './MenuItem';

export default function MenuList(props) {

    return (
        <>
            <View>
                {list.map((review) => {
                    return (
                        <MenuItem {...review}/>
                    );
                })}
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: '#fff',
    },
});