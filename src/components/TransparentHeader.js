import React, {useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';


export default function TransparentHeader() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    
    return (
        <View style={styles.row}>
            <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={32} color="#59B5FF" />
            </Pressable>
        </View>
        
    )
}

const styles = StyleSheet.create({
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addbutton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',  
        justifyContent: 'space-between',
        margin: 12,
    },
})