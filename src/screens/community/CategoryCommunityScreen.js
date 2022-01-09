import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PostList from '../../components/Post/PostList';
import TabHeader from '../../components/TabHeader';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import Input from '../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import Add from '../../components/Add';
import Search from '../../components/Search';

const CommunityListScreen = ({navigation, category}) => {
    const route = useRoute();
    const [searchText, setSearchText] = useState('');
    const[show, setShow] = useState(false);

    const categoryName = () => {
        return(_.get(route, 'params.category', ));
     };
    return (
        <>
            <TabHeader title = {categoryName() + " 커뮤니티"}/>
            <PostList category = {categoryName(), searchText}/>
            <Add category={category}></Add>
            
        </>
    );
}
export default CommunityListScreen;