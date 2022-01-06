import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PostList from '../../components/PostList';
import TabHeader from '../../components/TabHeader';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
const CommunityListScreen = ({navigation, category}) => {
    const route = useRoute();
    const categoryName = () => {
        return(_.get(route, 'params.category', ));
     };
    return (
        <>
            <TabHeader title={categoryName() + " 커뮤니티"}/>
            <PostList category={categoryName()}/>
        </>
    );
}

export default CommunityListScreen;