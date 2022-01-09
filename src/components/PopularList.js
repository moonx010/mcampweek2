import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PopularListItem from './Post/PopularListItem';
import dummy from '../db/data.json';

const data = dummy.post;

var sortingField = "id";

data.sort(function(a, b){
    return b[sortingField] - a[sortingField];
});

const datalist = data.slice(0,5);

const PopularList = () => {
    return (
        <>
            <View>
                {datalist.map((item) => {
                    return (
                        <PopularListItem {...item}/>
                    );
                })}
            </View>
        </>
    )
}
export default PopularList;