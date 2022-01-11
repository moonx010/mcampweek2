import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text, Alert, } from 'react-native';
import { fetchUser, deleteComment } from '../../api';
import { getUser } from '../../libs/auth'
import Ionicons from 'react-native-vector-icons/Ionicons';

const CommentListItem = ({comment, reload, setReload}) =>{
    const navigation = useNavigation();
    const [user, setUser] = useState({});
    const [login, setLogin] = useState({});
    const userId = comment.user_id;
    const [commenter, setCommenter] = useState('익명');
    
    useEffect(async()=>{ 
        const json = await fetchUser(comment.user_id);
        setUser(json[0]);
        const temp = await getUser();
        setCommenter(json[0].name)
        setLogin(temp);
    }, [reload, comment]);

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

    // 버튼 보이기 숨기기 
    function deleteButton(comment){
        console.log("comment detail list ::::::::"+login.id);
        if(comment.user_id == login.id){
            return (
                <Pressable style={styles.iconStyle} onPress={deletePress}>
                    <Ionicons name="trash-outline" size={20} color="#59B5FF"/>
                </Pressable>
            )
        }
    }

    const deletePress = useCallback(async()=>{
        Alert.alert('알림', '댓글을 삭제 하시겠습니까?', [
            {
              text: '확인',
              onPress: async () => {
                await deleteComment(comment.id);
                setReload(!reload);
                Alert.alert('알림', '삭제가 완료되었습니다.', [
                  {
                    text: '확인',
                    onPress: () => {
                      //navigation.goBack();
                      //navigation.navigate('PostDetailScreen', {item});
                    },
                  },
                ]);
              },
            },
            {
              text: '취소',
            },
          ]);
        }, [navigation, reload, setReload, comment]);
    
    return(  
           
            <View style={{ flex: 1, alignItems: 'flex-start', marginTop: 4 }, styles.container}>
                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                     <View> 
                        <Text style={styles.username}>{commenter}</Text>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.content}> {comment.content}</Text>
                            <Text style={styles.time}> {updateTime(date_parse)} </Text>
                        </View>
                    </View>     
                    <View>
                        {deleteButton(comment)}
                    </View>
            </View>     
        </View>       

    );
}

const styles = StyleSheet.create({
    iconStyle: {
        margin:5,
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center'
    },
    username:{
        fontSize:12,
        color:'black',
        fontWeight:'bold',
        marginBottom:5
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
