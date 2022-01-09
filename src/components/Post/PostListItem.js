
import { useNavigation } from '@react-navigation/native';
import { TestScheduler } from 'jest';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
import { fetchUser } from '../../api';
import UpdateTime from '../UpdateTime';
/*
fetchPost(2).then(function(post){
    console.log("post: ", post);
});*/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
const PostListItem = (item) => {
    const navigation = useNavigation();
    
    const onPress = useCallback(() => {
        navigation.navigate('PostDetailScreen', {
            item, 
        });
    }, [navigation, item]);

    const [user, setUser] = useState([]);
    const userId = item.user_id;

    const getUser = async (userId)  => {
        try{
            const json = await fetchUser(userId);
            setUser(json);

        }catch(error){
            console.error(error);
        }
    };
    
    useEffect(()=>{ 
        getUser(userId);
    }, []);


/*
    useEffect(()=>{
        const initList = async()=>{
            //const postInfo = await fetchPost(item.id);
            const userInfo = await fetchUser(11);
            //setPost(postInfo);
            setUser(userInfo);
        };
        initList();
        console.log(fetchPost(2));
    })

       // const [list, setList] = useState();

    // useEffect(()=>{
    //     const initList = async()=>{
    //         const initialList = await fetchSeat(item.Post_NUMBER);
    //         setList(initialList);
    //     };
    //     initList();
    //     // let i;
    //     // for(i=0; i<6; i++)
    //     // {
    //     //     if(list[i].SEAT_USING === false)
    //     // }
*/
    return (
        <Pressable onPress={onPress}>   
            <View style={styles.container}>
                <Text style={styles.contentTitle}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>
                <Text style={styles.userName}>{user.name}</Text>
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
        fontSize: 14,
        marginTop: 4,
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
    middleContainer:{
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        height:60,
        flexDirection: 'row',
      },
    middleButtonAll: {
        width:100,
        height:50,
        padding:15,
        backgroundColor:"#20b2aa",
        borderColor:"deeppink",
        borderRadius:15,
        margin:7
      },
    middleButton01: {
        width:100,
        height:50,
        padding:15,
        backgroundColor:"#fdc453",
        borderColor:"deeppink",
        borderRadius:15,
        margin:7
      },
    middleButton02: {
        width:100,
        height:50,
        padding:15,
        backgroundColor:"#fe8d6f",
        borderRadius:15,
        margin:7
      },
    middleButton03: {
        width:100,
        height:50,
        padding:15,
        backgroundColor:"#9adbc5",
        borderRadius:15,
        margin:7
      },
    middleButtonText: {
        color:"#fff",
        fontWeight:"700",
        //텍스트의 현재 위치에서의 정렬 
        textAlign:"center"
      },
    middleButtonTextAll: {
        color:"#fff",
        fontWeight:"700",
        //텍스트의 현재 위치에서의 정렬 
        textAlign:"center"
      },
    admobbanner:{
        //marginLeft:12,
        marginRight:12,
        marginBottom:6
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
