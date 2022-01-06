/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react';
import { View, Pressable, StyleSheet, Text, Platform } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Icons = {
    Community: [
        <Ionicons name="people" size={24} color="#000000" />,
        <Ionicons name="people" size={24} color="#ABABAB" />
    ],
    MyStore: [
        <FontAwesome5 name="store" size={24} color="#000000" />,
        <FontAwesome5 name="store" size={24} color="#ABABAB" />
    ],
};

export default function BottomTabBar({ state, descriptors, navigation }) {
    const insets = useSafeAreaInsets();

    const { bottom }= insets;

    const routeName = state.routes[state.index].name;
    const onPress = useCallback((name) => () => {
        navigation.navigate(name);
    }, [navigation]);
    return (
        <View style={[
            styles.container,
            {paddingBottom: bottom}
            ]}>
            <Pressable onPress={onPress('Community')} style={styles.tab}>
                {routeName === 'Community' ? Icons.Community[0] : Icons.Community[1]}
                <Text style={[styles.tabText, routeName === 'Community' && styles.tabTextSelected]}>커뮤니티</Text>
            </Pressable>
            <Pressable onPress={onPress('MyStore')} style={styles.tab}>
                {routeName === 'MyStore' ? Icons.MyStore[0] : Icons.MyStore[1]}
                <Text style={[styles.tabText, routeName === 'MyStore' && styles.tabTextSelected]}>가게 관리</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10
            },
            android: {
                elevation: 15,
            }
        }),
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    },
    tabText: {
        fontSize: 16,
        color: '#ABABAB',
        paddingTop: 10,
    },
    tabTextSelected: {
        color: '#000000', 
    },
});