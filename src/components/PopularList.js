import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PopularListItem from './popularListItem';
import dummy from '../db/data.json';

const data = dummy.post;

const PopularList = () => {
    return (
        <>
            <View>
                {data.map((item) => {
                    return (
                        <PopularListItem {...item}/>
                    );
                })}
            </View>
        </>
    )
}
export default PopularList;