import React, {useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';


export default function Search() {
    const insets = useSafeAreaInsets();
    const[show, setShow] = useState();
    
    return (

        <Pressable style={styles.addbutton} onPress={onPress('PostInputScreen')}>
            <Ionicons name="search" size={32} color="red" />
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        left: 0,
        alignItems: 'flex-start',
    },
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
        width: '50%',
        
    },
})