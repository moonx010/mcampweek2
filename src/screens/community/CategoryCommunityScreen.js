import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PostList from '../../components/PostList';
import TabHeader from '../../components/TabHeader';

const CommunityListScreen = ({category}) => {
    return (
        <>
            <TabHeader title="상품리스트"/>
            <PostList category={category}/>
        </>
    );
}

export default CommunityListScreen;