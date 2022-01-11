import React, {useState, useCallback, useEffect} from 'react';
import {
    View,
    Pressable,
    Image,
    StyleSheet,
    ScrollView,
    Platform,
    Text,
    Button,
    Alert,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import _ from 'lodash';
import TabHeader from '../../components/TabHeader';
import CommentList from '../../components/Comment/CommentList';
import CommentInput from '../../components/Comment/CommentInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addComment } from '../../api';
import { fetchUser, fetchPost, deletePost } from '../../libs/api';
import { getUser } from '../../libs/auth';


//const aspectRatio = 640 / 480;
const DEFAULT_IMAGE = require('../../images/DefaultImage.png');

export default function PostDetailScreen({navigation}) {
    const insets = useSafeAreaInsets();
    const route = useRoute();
    const [Comment, setComment] = useState('');
    const [postUser, setPostUser] = useState({});
    const [post, setPost] = useState({});
    const [login, setLogin] = useState({});

    const category = _.get(route, 'params.item.category');
    const postId = _.get(route, 'params.item.id');
    const userId = _.get(route, 'params.item.user_id');
    const item =_.get(route, 'params.item');
    const reload =_.get(route, 'params.reload');
    const setReload =_.get(route, 'params.setReload');

// const categoryName = () => {
//     return(_.get(route, 'params.item.category', ));
// };
//  const postId = () => {
//     return(_.get(route, 'params.item.id', ));
//  };
//  const userId = () => {
//     return(_.get(route, 'params.item.user_id', ));
//  };
//  const getItem = () => {
//     return(_.get(route, 'params.item', ));
//  };

     const getPostUser = async (user_id)  => {
         try{
             const json = await fetchUser(user_id);
             setPostUser(json[0]);
         }catch(error){
             console.error(error);
         }
     };
     
     const getPost = async (post_id)  => {
        try{
            const json = await fetchPost(post_id);
            setPost(json[0]);
        }catch(error){
            console.error(error);
        }
    };
    
    const loginUser = async ()  => {
        try{
            const json = await getUser();
            console.log("디테일 스크린 :::::::::::::::::"+json);
            setLogin(json);
        }catch(error){
            console.error(error);
        }
    };
   /* 
     useEffect(()=>{ 
         getPostUser(userId);
         getPost(postId);
         loginUser();
     }, [reload]);
 */
     useEffect(()=>{ 
        getPostUser(userId);
        getPost(postId);
    }, [reload]);

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
 
     const date_parse = Date.parse(post.created_at);

/*
    const onPress = useCallback(async() => {
        await addComment(15, postId(), Comment);
        //navigation.navigate('PostDetailScreen', {
        //    getItem});
        setReload(!reload);
        }, [reload, setReload, getItem, Comment,]);
    
*/
    // 버튼 보이기 숨기기 
    function deleteButton(post){
        console.log("authUser.id:::::::::::::::::"+login.id);
        if(post.user_id == login.id){
            return (
                <Pressable style={styles.iconStyle} onPress={deletePress}>
                    <Ionicons name="trash-outline" size={20} color="#DB1E30"/>
                    <Text style={styles.text}>삭제하기</Text>
                </Pressable>
            )
        }
    }

    console.log(category);

    const deletePress = useCallback(async()=>{
        Alert.alert('알림', '게시글을 삭제 하시겠습니까?', [
            {
              text: '확인',
              onPress: async () => {
                await deletePost(post.id);
                Alert.alert('알림', '삭제가 완료되었습니다.', [
                  {
                    text: '확인',
                    onPress: () => {
                      setReload(!reload);
                      navigation.goBack();
                      navigation.navigate('CategoryCommunityScreen', {category, reload, setReload});
                    },
                  },
                ]);
              },
            },
            {
              text: '취소',
            },
          ]);
        }, [navigation, category, reload, setReload]);

    return (
        <>
            <TabHeader title={_.get(route, 'params.item.category', '')}/>
            <ScrollView style={[{ paddingBottom: insets.bottom,}]}>
                <View style={styles.contentContainer}>  
                    <View style={styles.postContainer}>
                        <View style={{flexDirection:'row', marginBottom:10, alignItems:'center'}}>
                        <Image source={require('../../images/profile.png')} style={styles.imageContainer} resizeMode={"cover"}/>
                            <Text style={styles.username}>
                                {postUser.name}
                            </Text>
                            <Text style={styles.time}>
                                {updateTime(date_parse)}
                            </Text>
                        </View>    
                        <Text style={styles.title}>
                            {_.get(route, 'params.item.title', '')}
                        </Text>
                        <Text style={styles.content}>
                            {_.get(route, 'params.item.content', '')}
                        </Text>
                    </View>
                    <View style={styles.rowContainer,{flexDirection:'row', alignItem:'flex-start', justifyContent:'space-around'}}>
                    
                        <View>
                            {deleteButton(post)}
                        </View>
                    </View>                    
                <View>
                        <CommentList category={category} post_id={ _.get(route, 'params.item.id')} reload={reload} setReload={setReload}/>
                    </View>
                </View>
            </ScrollView>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <CommentInput 
                    inputContent={Comment}
                    inputContentChange={(comment)=>{
                        setComment(comment);
                    }}
                />
                <View style={{flex:1, marginRight: 10, alignItems:'center',}}>     
                <Pressable onPress={()=>{addComment(login.id, postId, Comment); setReload(!reload);}}>
                    <Ionicons name="send" size={25} color="#ABABAB" />
                </Pressable>
                </View>
            </View>    
        </>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 12,
        margin: 2,
        borderRadius: 12,
        overflow: 'hidden',  
    },
    username:{  
        marginLeft:8,
        fontSize:12
    },
    time:{
        marginLeft:10,
        fontSize: 12
    },
    iconStyle: {
        margin:5,
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center'
    },
    text:{
        fontFamily:'GodoM',
        marginLeft:5,
        fontSize: 11
    },
    postContainer: {
        display: 'flex',
        flexDirection: 'column',
        //justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 2,
        marginHorizontal: 0,
        paddingVertical: 12,
        paddingHorizontal: 14,
        elevation: 1,
        backgroundColor: "#FFFFFF",
        borderColor: '#F6F6F6',
        borderWidth: 1,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        //justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 2,
        marginHorizontal: 0,
        paddingVertical: 12,
        paddingHorizontal: 14,
        elevation: 1,
        backgroundColor: "#FFFFFF",
        borderColor: '#F6F6F6',
        borderWidth: 1,
    },
    constainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight:'bold',
        marginBottom:10
    },
    content: {
        fontSize: 16,
    },

    row: {
        marginBottom: 20,
    },
    contentContainer: {
        backgroundColor: '#ffffff',
    },
    storeInfo: {
        alignItems: 'flex-start',
        marginTop: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
    },
    info: {
        paddingBottom: 4,
        fontSize: 14,
    },

});