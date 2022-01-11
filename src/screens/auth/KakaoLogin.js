import React, {useState} from 'react';
import {useCallback} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Text,
} from 'react-native';
import { WebView, Linking} from 'react-native-webview';
import {setUser, getUser} from '../../libs/auth';
import {fetchUser} from '../../libs/api';
import { useNavigation, useRoute } from '@react-navigation/native';
import _ from 'lodash';


export default function KakaoLogin({navigation}) {
  const handleSetRef = _ref => {
    webviewRef = _ref;
  };
  const route = useRoute();
  const setAppUser = _.get(route, 'params.setAppUser');
  // const navigation = useNavigation();
  const [uri, setUri] = useState('http://192.249.18.90/auth/kakao'); 
  const onNavigationStateChange = async (navState) => {
    webviewRef.canGoBack = navState.canGoBack;
    if (navState.url.includes("/user")) {
      // 새 탭 열기
      console.log(navState.url);
      const t = navState.url.split('/');
      console.log(t[t.length - 1])
      const id = t[t.length - 1];
      data = await fetchUser(id);
      console.log("feechUser로 가져온 UserId: "+data[0].id)
      
      setUser(data[0]);
      setAppUser(data[0]);
      const userId = await getUser();
      console.log("setUser로 저장한 user id: " + userId.id)
      setUri('http://192.249.18.90/auth/kakao');
      navigation.navigate('MainTab');
      return false;
    }
  }
    // const onShouldStartLoadWithRequest = event => {
    //   if (!event.url.includes("yourdomain.com")) {
    //     Linking.openURL(event.url);
    //     return false;
    //   }
    //   return true;
    // };

    return (
        <WebView
          ref={handleSetRef}
          source={{uri: uri}}
          // 웹뷰 로딩이 시작되거나 끝나면 호출하는 함수 navState로 url 감지
          onNavigationStateChange={onNavigationStateChange}
          // 처음 호출한 URL에서 다시 Redirect하는 경우에, 사용하면 navState url 감지
          // onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        /> 
      
    );
  
}