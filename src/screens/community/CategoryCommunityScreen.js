import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PostList from '../../components/PostList';
import TabHeader from '../../components/TabHeader';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import Input from '../../components/Input';
const CommunityListScreen = ({navigation, category}) => {
    const route = useRoute();
    const [searchText, setSearchText] = useState('');

    const categoryName = () => {
        return(_.get(route, 'params.category', ));
     };
    return (
        <>
            <Input
                inputValue={searchText}
                inputChange={(text) => {
                    setSearchText(text);
                }}
            />
            <TabHeader title={categoryName() + " 커뮤니티"}/>
            <PostList category={categoryName()} search={searchText}/>
        </>
    );
}

export default CommunityListScreen;