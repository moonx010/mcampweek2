import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PostListItem from './PostListItem';

const PostList = ({search, category}) => {
    const [list, setList] = useState([{id: 1, post_title: "이거 진짜 어려움", post_category:"식당", post_content:"와 진짜 어이없네", user_id : 1}, {id: 2, post_title: "이거 진짜 어려움2", post_category:"카페", post_content:"와 진짜 어이없네", user_id : 2}, {id: 3, post_title: "이거 진짜 어려움3", post_category:"주점", post_content:"와 진짜 어이없네", user_id : 1}]);
    return (
        <>
            <View>
                {list.map((item) => {
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
        </>
    )
}

export default PostList;