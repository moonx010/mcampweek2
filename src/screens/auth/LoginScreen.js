import React, {useState} from 'react';
import {useCallback} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Text,
  Button
} from 'react-native';
import { WebView, Linking} from 'react-native-webview';
import {setUser, getUser} from '../../libs/auth';
import {fetchUser} from '../../libs/api';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({navigation, setAppUser}) {
  
    const onPress = useCallback(() =>
      navigation.navigate('KakaoLogin', {navigation, setAppUser})
    ,[navigation, setAppUser]);
    return (
        <View>
          <Button title={'로그인'} onPress={onPress}/>
        </View>
      
    );
  
}