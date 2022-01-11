import React, {useEffect, useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider, useSafeAreaProvider} from 'react-native-safe-area-context';
import screens from './src/screens';
import MainTab from './src/components/MainTab';
import {login } from '@react-native-seoul/kakao-login'
const {
  MyStoreScreen,
  CommunityScreen,
  LoginScreen,
  ...restScreens
} = screens;

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [appUser, setAppUser ] = useState(null);
  const MainTabComp = useCallback((props) => { return (<MainTab {...props} setAppUser={setAppUser} />) },[setAppUser]);
  const LoginComp = useCallback((props) => { return (<LoginScreen {...props} setAppUser={setAppUser} />) },[setAppUser]);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={appUser ? "MainTab" : "Login"}>
        {appUser ? <Stack.Screen name="MainTab" component={MainTabComp} options={{headerShown: false}}/> : <Stack.Screen name="Login" component={LoginComp} options={{headerShown: false}}/>}
          {Object.entries(restScreens).map(([name, component]) => (
            <Stack.Screen name={name} key={name} component={component} options={{headerShown: false}}/>
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;