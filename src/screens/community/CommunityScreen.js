import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import { color } from 'react-native-reanimated';
import Category from '../../components/Category';
import PopularList from '../../components/Post/PopularList';

import { Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { fetchPostList } from '../../api';

export default function CommunityScreen() {

    const [postList, setPostList] = useState([]);
    const [reload, setReload] = useState(false);
    
    useEffect(()=>{
        async function init() {
            const json = await fetchPostList();
            setPostList(json);
            console.log("커뮤니티 postList : " + postList)
        }
        init();
    }, [reload]);


    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.category}>
                <Category category="식당" reload ={reload} setReload={setReload}/>
                <Category category="카페" reload ={reload} setReload={setReload}/>
                <Category category="주점" reload ={reload} setReload={setReload}/>
            </View>
            <View style={styles.container_2}>
                <Text style={styles.subHeading}>실시간 피드</Text>
                <PopularList list={postList} reload={reload} setReload={setReload}/> 
            </View>
            <View style={styles.container_2}>
                <Text style={styles.subHeading}>공지사항</Text>
                
            </View>
            <View style={styles.container_2}>
                <Text style={styles.subHeading}>플레이스</Text>
            </View>
            <View style={styles.container_2}>
                <Text style={styles.subHeading}>Q & A</Text>
            </View>
        </ View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
       
    },
    subHeading: {
        fontFamily:'GodoB',
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
