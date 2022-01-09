import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import TabHeader from '../../components/TabHeader';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import Input from '../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import TransparentHeader from '../../components/TransparentHeader';
import PostList from '../../components/Post/PostList';


const SearchScreen = ({navigation, category}) => {
    const route = useRoute();
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TransparentHeader/>
                <Text style={{fontWeight:'bold', fontSize:20, alignItems:'center',}}>검색</Text>
            </View>
            <Input
                inputValue={searchText}
                inputChange={(text) => {
                    setSearchText(text);
                }}
            />
            <PostList category={category} search={searchText}/>
        </>
    );
}

export default SearchScreen;