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
    container_2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 6,
        marginBottom: 6,
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 14,
        height: 90,
        elevation: 4,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 18.95,
        zIndex: 1,
        backgroundColor: "#F6F6F6",
        //backgroundColor: '#476d98',
        borderRadius: 12,
        borderColor: '#F6F6F6',
        borderWidth: 3,
    },
});