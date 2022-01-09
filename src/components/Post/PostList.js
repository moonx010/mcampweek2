import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PostListItem from './PostListItem';
import dummy from '../../db/data.json';
import { ScrollView } from 'react-native-gesture-handler';

const data = dummy.post;

const PostList = ({search, category}) => {
   
    return (
            <>
            <ScrollView>
            <View>
                {data.map((item) => {
                    if(search && item.post_title.indexOf(search)==-1) {
                        return null;
                    }

                    if(category && item.post_category != category) {
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