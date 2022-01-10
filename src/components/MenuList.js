import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MenuItem from './MenuItem';

export default function MenuList({menuList, setMenuList, setReload, reload}) {

    return (
        <>
            <View>
                {menuList.map((item) => {
                    return (
                        <MenuItem key={item.id} item={item} setMenuList = {setMenuList} menuList = {menuList} setReload = {setReload} reload={reload}/>
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