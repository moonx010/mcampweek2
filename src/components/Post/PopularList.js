import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PopularListItem from './PopularListItem';
import { fetchPostList } from '../../api';

export default function PopularList ({list}) {
    console.log("list from popular: " + list);

    var t = list.length;
    //const [tempList, setTempList] = useState([]);

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
        

    return (
        <>
            <View>
                {list.map((item) => {
                    t--;
                    if(t < 5){
                        return (
                            <PopularListItem {...item}/>
                        );}
                    else return null;
                })}
            </View>
        </>
    )
}