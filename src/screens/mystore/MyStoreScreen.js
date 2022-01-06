import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function MyStoreScreen() {

    return (
        <View style={styles.container}>
            
            <Text style={styles.subHeading}>가게 관리</Text>
            
        </ View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    subHeading: {
        fontSize: 24,
        fontWeight: '100',
        padding: 0,
        marginLeft: 16,
    },
    categoryName: {
        fontSize: 30,
    },
});
