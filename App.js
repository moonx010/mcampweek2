import React, {useEffect, useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider, useSafeAreaProvider} from 'react-native-safe-area-context';
import screens from './src/screens';
import MainTab from './src/components/MainTab';

const {
  MyStoreScreen,
  CommunityScreen,
  ...restScreens
} = screens;

const Stack = createStackNavigator();

const App: () => React$Node = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTab">
          <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false}}/>
          {Object.entries(restScreens).map(([name, component]) => (
            <Stack.Screen name={name} key={name} component={component} options={{headerShown: false}}/>
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;