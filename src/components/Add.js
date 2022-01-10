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
    console.log("ADD category:  " + category);

    const onPress = useCallback(() => {
        navigation.navigate('PostInputScreen', {category});
    }, [navigation, category]);

    /*return (
            <View style={{justifyContent:'center', alignItems:'center'}}>
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
                        justifyContent:'center',
                        alignItems:'center',
                    }}/>
                <Pressable onPress={onPress} style={styles.writeButton}> 
                    <Text style={styles.text}>글쓰기</Text>
                </Pressable>      
                       
            </View>  
    )*/
    return(
        <View style={{justifyContent:'center', alignItems:'center'}}>
    
            <Pressable onPress={onPress} style={styles.writeButton}> 
                <Text style={styles.text}>글쓰기</Text>
            </Pressable>         
        </View>
    )
}

const styles = StyleSheet.create({
    writeButton:{
        //backgroundColor: 'rgba(199, 43, 98, 1)',
        backgroundColor: '#DB1E30',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
        width: 80,
        height:40,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:5,
        marginTop:5
    },
    text:{
        color:'white',
        fontWeight:'bold',
        margin:2,
        fontSize: 16
    },
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