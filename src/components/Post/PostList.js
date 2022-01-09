import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PostListItem from './PostListItem';
import dummy from '../../db/data.json';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchPostList, fetchUser } from '../../api';

const PostList = ({search, category}) => {
    const [postList, setPostList] = useState([]);
    //추가한 함수 
    
    const getPostList = async() => {
        try{
            const json = await fetchPostList();
            setPostList(json);
        }catch(error){
            console.error(error);
        }
    };

    useEffect(()=>{
        getPostList();
    }, []);


/*
    useEffect(()=>{
        const initList = async()=>{
            const initialList = await fetchPostList();
            setPostList(initialList);
        };
        initList();
    })
   // console.log(postList);
*/
/*
    return(
        <>
        <FlatList
            data={postList}
            renderItem={renderItem}
            keyExtractor={(item)=> String(item.id)}
        ></FlatList>
        </>
    )*/
    return (
        <>
        <ScrollView>
        <View>
            {postList.map((item) => {
                if(search && item.title.indexOf(search)==-1) {
                    return null;
                }
                if(category && item.category != category) {
                    return null;
                }
                return (
                    <PostListItem {...item}/>
                );
            })}
        </View>
        </ScrollView>
        </>
    )

}
const styles = StyleSheet.create({
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        left:100,
        right:100,
        top:500,
        bottom:0,

    },
})

export default PostList;