import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Pressable,} from 'react-native';
import { color } from 'react-native-reanimated';
import Category from '../../components/Category';
import PopularList from '../../components/Post/PopularList';
import {useNavigation} from '@react-navigation/native';
import { Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, ButtonGroup, withTheme } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginScreen() {

    const navigation = useNavigation();
/*
    <Pressable onPress={signIn} style={styles.button}>
    <Text>카카오 로그인</Text>
</Pressable>
<Pressable onPress={signUp}>

</Pressable>

*/
   
    const logIn = useCallback(() => {
        navigation.navigate('PostInputScreen');
    }, [navigation]);



    return (

        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>장사의 신</Text>
            </ View>
            

            <Pressable style={styles.container1} onPress={logIn}>
                <Ionicons name="chatbubble" style={{ marginRight: 10, color:'black'}}/>
                <Text style={{fontWeight:'600', color:'black', fontSize: 16}}>카카오 로그인</Text>
            </Pressable>
        </View>    

    );
};

/*          <Button
                 onPress={()=>{Linking.openURL('http://192.249.18.90/auth/kakao');}}
                 title={"login"}
                />*/

const styles = StyleSheet.create({
    container1:{
        flexDirection:'row',
        backgroundColor: '#FAE100',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        height: 40
    },
    button:{
        backgroundColor:'#FAE100',
        marginLeft: 16,
        marginRight: 16 

    },
    backGround:{
        backgroundColor: '#2f2d38'
    },
    container: {
        backgroundColor: '#2f2d38',
        flex: 1,
        padding :30,
    },
    title:{
        fontFamily:'Shilla_Culture(B)',
        alignItems:'center',
        justifyContent:'center',
        fontSize: 60,
        textAlign: 'center',
        color:'#fff'
    },
    subHeading: {
        fontFamily:'Shilla_Culture(B)',
        fontSize: 18,
        marginBottom: 5,
        color: 'black'
    },
    categoryName: {
        fontSize: 30,
    },
    category: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        paddingHorizontal: 14,
        elevation: 20,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 18.95,
        zIndex: 1,
    },
    place: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        elevation: 20,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 18.95,
        zIndex: 1,
    },
        container_2: {
            fontFamily:'GodoB',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: 6,
            marginBottom: 6,
            marginHorizontal: 12,
            paddingVertical: 12,
            paddingHorizontal: 14,
            elevation: 4,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 18.95,
            zIndex: 1,
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            borderColor: '#F6F6F6',
            borderWidth: 3,
        },
    });
