/* eslint-disable prettier/prettier */
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View, Text} from 'react-native';
import TransparentHeader from './TransparentHeader';

export default function TabHeader({title}) {
    const insets = useSafeAreaInsets();
    const {top} = insets;
    return (
        <View style={styles.container, {
            paddingBottom: 20,
            paddingTop: 20 + top,
        }}>
            <TransparentHeader />
            <Text style = {styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold'
    }
})