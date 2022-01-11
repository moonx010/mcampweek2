
import { useNavigation } from '@react-navigation/native';
import { TestScheduler } from 'jest';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
import { fetchUser } from '../../api';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
const PostListItem = ({item, reload, setReload}) => {
    const navigation = useNavigation();
    const [user, setUser] = useState({});
    const userId = item.user_id;

    const onPress = useCallback(() => {
        setReload(!reload);
        navigation.navigate('PostDetailScreen', {
            item, reload, setReload
        });
    }, [navigation, item, reload, setReload]);

    const getUser = async (userId)  => {
        try{
            const json = await fetchUser(userId);
            setUser(json[0]);
        }catch(error){
            console.error(error);
        }
    };

    const updateTime=(time)=> {
        const now = new Date();
        const TimeDiff = Math.floor((now.getTime() - time) / 1000 / 60);
        const TimeDiffHour = Math.floor(TimeDiff / 60);
        const TimeDiffDay = Math.floor(TimeDiff / 60 / 24);
    
        if (TimeDiff < 1) {
            return `방금 전`
        } else if (TimeDiff < 60) {
            return `${TimeDiff}분 전`
        } else if (TimeDiffHour < 24) {
            return `${TimeDiffHour}시간 전`
        } else if (TimeDiffDay < 365) {
            return `${TimeDiffDay}일 전`
        }
        return (
            `${Math.floor(TimeDiffDay / 365)}년 전`
        )
    }
    const date_parse = Date.parse(item.created_at);

    useEffect(()=>{ 
        getUser(userId);
    }, []);

    return (
        <Pressable onPress={onPress}>   
            <View style={styles.container}>
                <View style={{flex:3}}>
                    <Text style={styles.contentTitle}>{item.title}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.time}>{updateTime(date_parse)}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    contentTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    content:{
        fontSize: 14,
    },
    userName: {
        fontSize: 11,
        marginTop: 2,
    },
    time: {
        fontSize: 11,
        marginTop: 2,
        marginLeft: 10,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 3,
        marginBottom: 3,
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 14,
        height: 90,
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
    countContailner:{
        margin:20,
    },
    
    itemNameText: {
        fontSize: 20,
        color: '#f0f9ff',
    },
    itemContentsText: {
        textAlign: 'right',
        fontSize: 20,
        color: '#FFC000',
        //fontWeight: '700',
    },
    itemCodeText: {
        paddingTop: 6,
        textAlign: 'left',
        fontSize: 15,
        color: '#FFC000',
        fontWeight: '500',
    },
    countText: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 24,
        color: '#FFC000',
        fontWeight: '700',
    },
})

export default PostListItem;
