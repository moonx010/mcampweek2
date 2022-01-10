import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PostListItem from './PostListItem';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchPostList } from '../../api';

const PostList = ({search, category}) => {
    const [postList, setPostList] = useState([]);
    //추가한 함수 
    console.log("PostListCategory: "+ category)
    console.log("PostListSearch: "+ search)

    const getPostList = async() => {
        try{
            const json = await fetchPostList();
            setPostList(json);
            console.log("Postlist :"+ JSON.stringify(postList[1]))
        }catch(error){
            console.error(error);
        }
    };


    useEffect(()=>{
        getPostList();
    }, []);

    postList.sort(function(a,b){
        return parseFloat(b.id)-parseFloat(a.id)
    });

    

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