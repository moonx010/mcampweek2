/* eslint-disable prettier/prettier */
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View, Text} from 'react-native';
import TransparentHeader from './TransparentHeader';

const Row = ({children, title}) => {
    return (
        <View style={styles.row}>
            <View style={styles.article}>
                <Text style={styles.title}>{title}{children}</Text>
            </View>
        </View>
    );
};

export default function TabHeadr({title}) {
    const insets = useSafeAreaInsets();
    const {top} = insets;

    return (
        <View style={styles.container}>
            
                <TransparentHeader style={styles.backIcon}/> 
                <Text style = {styles.title}>{title}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    backIcon:{
        alignItem:'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column',  
        justifyContent: 'center',
        margin: 12,
    },
    row: {
        flexDirection: 'row',  
        justifyContent: 'space-between',
        margin: 12,
    },
    article: {
        marginRight: 8
    },
    title: {
        fontSize: 20,
        marginRight: 8,
    },    
})