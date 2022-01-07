import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MenuItem from './MenuItem';

export default function MenuList({list}) {

    return (
        <>
            <View>
                {list.map((item) => {
                    return (
                        <MenuItem {...item}/>
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