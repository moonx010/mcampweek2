import React, {useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, ButtonGroup, withTheme } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';

const Add = ({category}) => { 
    
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const onPress = useCallback(() => {
        navigation.navigate('PostInputScreen', {category});
    }, [navigation, category]);

    return (
            <>
                <Button
                    title="글쓰기"
                    titleStyle={{ fontWeight: '600' }}
                    onPress={onPress}
                    buttonStyle={{
                        backgroundColor: 'rgba(199, 43, 98, 1)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 80,
                        marginHorizontal:160,
                        marginVertical: 10,
                    }}
              />
              
            </>  
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
        position:'absolute',
    },
    row: {
        flexDirection: 'row',  
        justifyContent: 'space-between',
        margin: 12,
        width: '50%',
        
    },
})
export default Add;