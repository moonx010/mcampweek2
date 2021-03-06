/* eslint-disable prettier/prettier */
import React, {useCallback} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar';
import screens from '../screens';

const {CommunityScreen, MyStoreScreen, CategoryCommunityScreen, LoginScreen} = screens;

const Tab = createBottomTabNavigator();

function MainTab({setAppUser}) {
  const MyStoreComp = useCallback((props) => { return (<MyStoreScreen {...props} setAppUser={setAppUser} />) },[setAppUser]);
  return (
    <Tab.Navigator initialRouteName="Community" 
    tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="MyStore" component={MyStoreComp} />
      <Tab.Screen name="CategoryCommunity" component={CategoryCommunityScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;