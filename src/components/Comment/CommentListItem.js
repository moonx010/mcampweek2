import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
import dummy from '../../db/data.json';
import { fetchUser } from '../../api';

const CommentListItem = (comment) =>{
    
    const [user, setUser] = useState({});
    const userId = comment.user_id;

    const getUser = async (userId)  => {
        try{
            const json = await fetchUser(userId);
            setUser(json[0]);
        }catch(error){
            console.error(error);
        }
    };
    
    useEffect(()=>{ 
        getUser(userId);
    }, []);

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

    const date_parse = Date.parse(comment.created_at);
    
    return(               
        <View style={{ flex: 1, alignSelf: 'flex-start', marginTop: 4 }, styles.container}>
            <Text style={styles.username}>{user.name}</Text>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.content}> {comment.content}</Text>
                <Text style={styles.time}> {updateTime(date_parse)} </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    username:{
        fontSize:12,
        color:'black',
        fontWeight:'bold'
    },
    time:{
        fontSize:10
    },
    content:{
        fontSize:12,
        marginBottom:2
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 1,
        marginHorizontal: 0,
        paddingVertical: 12,
        paddingHorizontal: 14,
        height: 70,
        elevation: 1,
        /*shadowOffset: {
          width: 0,
          height: 0,
        },*/
        //shadowOpacity: 1,
        //shadowRadius: 18.95,
        //zIndex: 1,
        backgroundColor: "#FFFFFF",
        //backgroundColor: '#476d98',
        //borderRadius: 12,
        borderColor: '#F6F6F6',
        borderWidth: 1,
    },
    productName: {
        
        fontSize: 15,
        marginBottom: 4,
    },
    productDesc: {
        
        fontWeight: '100',
        fontSize: 16,
        marginTop: 4,
        fontWeight:'bold'
        
    },
    productPrice: {
        fontSize: 20,
        textAlign: 'right',
        marginTop: 10,
    }
})

export default CommentListItem;
