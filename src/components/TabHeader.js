/* eslint-disable prettier/prettier */
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View, Text} from 'react-native';
import TransparentHeader from './TransparentHeader';
import Search from './Search';

<<<<<<< HEAD
const Row = ({children, title}) => {
    return (
        <View style={styles.row}>
            <View style={styles.article}>
                <Text style={styles.title}>{title}{children}</Text>
            </View>
        </View>
    );
};

export default function TabHeader({title, category}) {
=======
export default function TabHeader({title}) {
>>>>>>> 57b95ca (seokhoon done)
    const insets = useSafeAreaInsets();
    const {top} = insets;

    return (
        <View style={styles.container}>
                <TransparentHeader style={styles.backIcon}/> 
                <Text style = {styles.title}>{title}</Text>
                <Search style={styles.searchIcon} category={category}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily:'GodoM',
        backgroundColor: '#fff', 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backIcon:{
        alignItem:'center',
        justifyContent: 'flex-start',
    },
    searchIcon:{
        alignItem:'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily:'GodoM',
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        alignItem:'center',
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
        fontFamily:'GodoM',
        fontSize: 20,
        marginRight: 8,
    },    
})