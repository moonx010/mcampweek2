import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PopularListItem from './PopularListItem';
import { fetchPostList } from '../../api';

export default function PopularList ({list}) {
    console.log("list from popular: " + list);

    const [sliceList, setSliceList] = useState([]);

   /* 
    const getPostList = async() => {
        try{
            const json = await fetchPostList();
            setPostList(json);
            console.log("실시간 피드 setTemp 함수안 "+postList)
        }catch(error){
            console.error(error);
        }
    };
        console.log("실시간 피드 tempList : "+ postList)

    useEffect(()=>{
        getPostList();
        const list = postList.reverse().slice(0,5);
        setSliceList(list);
    }, []);

    console.log("실시간 피드 변환 결과 : "+ sliceList);
*/
    useEffect(()=>{
        list.sort(function(a,b){
            return parseFloat(b.id)-parseFloat(a.id)
        });
        const templist = list.slice(0, 5);
        setSliceList(templist);
    }, []);
        
    
    return (
        <>
            <View>
                {sliceList.map((item) => {
                   
                        return (
                            <PopularListItem {...item}/>
                        );}
                    )}
            </View>
        </>
    )
}