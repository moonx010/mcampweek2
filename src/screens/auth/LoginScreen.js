import React, {useState} from 'react';
import {useCallback} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Text,
  Button,
  Image
} from 'react-native';
import { WebView, Linking} from 'react-native-webview';
import {setUser, getUser} from '../../libs/auth';
import {fetchUser} from '../../libs/api';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({navigation, setAppUser}) {
  
    const onPress = useCallback(() =>
      navigation.navigate('KakaoLogin', {navigation, setAppUser})
    ,[navigation, setAppUser]);

    return (
      <>
       <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}></Text>
            </ View>
            <Image source={require('../../images/loginIcon.png')} style={styles.imageContainer} resizeMode={"cover"}></Image>

            <Pressable style={styles.containerLogin} onPress={onPress}>
                <Ionicons name="chatbubble" size={20} style={{ marginRight: 10, color:'#70BFFF'}}/>
                <Text style={{fontWeight:'600', color:'#59B5FF', fontSize: 16, fontFamily:'GodoM'}}>카카오 로그인</Text>
            </Pressable>
        </View>
     </>
      
    );
  
}

const styles = StyleSheet.create({
  imageContainer:{
    justifyContent: 'center',
    marginBottom:150,
    
  },
  containerLogin:{
      flexDirection:'row',
      backgroundColor: '#ffffff',
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 10,
      alignItems:'center',
      justifyContent:'center',
      height: 40,
      marginBottom:80,
      width:'100%'
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
      backgroundColor: '#D9EEFF',
      flex: 1,
      padding :30,
      alignItems:'center',
      justifyContent:'center',
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
