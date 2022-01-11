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

const CommunityListScreen = ({navigation}) => {
    const route = useRoute();
    const [searchText, setSearchText] = useState('');
    const[show, setShow] = useState(false);

    const category =_.get(route, 'params.category');
    const reload = _.get(route, 'params.reload');
    const setReload = _.get(route, 'params.setReload');

    return (
        <>
            <TabHeader title = {category + " 커뮤니티"}/>
            <PostList search={searchText} category = {category} reload={reload} setReload={setReload}/>
            <Add category={category} reload={reload} setReload={setReload}></Add>
            
        </>
    );
}
export default CommunityListScreen;