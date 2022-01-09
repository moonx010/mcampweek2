import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PopularListItem from './Post/PopularListItem';
import dummy from '../db/data.json';
import { fetchPostList } from '../api';

const PopularList = () => {

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

    var sortingField = "id";

    postList.sort(function(a, b){
        return b[sortingField] - a[sortingField];
    });

    const datalist = postList.slice(0,5);

    return (
        <>
            <View>
                {datalist.map((item) => {
                    return (
                        <PopularListItem {...item}/>
                    );
                })}
            </View>
        </>
    )
}
export default PopularList;