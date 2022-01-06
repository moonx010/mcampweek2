import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Category from '../../components/Category';
export default function CommunityScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.category}>
                <Category category="식당"/>
                <Category category="카페"/>
                <Category category="주점"/>
            </View>
            
            
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
    category: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
    }
});
