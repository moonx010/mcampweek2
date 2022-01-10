import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ExpenseItem from './ExpenseItem';

export default function ExpenseList({expenseList, setReload, reload}) {

    return (
        <>
            <View>
                {expenseList.map((item) => {
                    return (
                        <ExpenseItem key={item.id} item={item} setReload = {setReload} reload={reload}/>
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