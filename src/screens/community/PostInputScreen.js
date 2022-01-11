import React, { useEffect, useState, useCallback } from 'react';
import TabHeader from '../../components/TabHeader';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import PostInput from '../../components/PostInput';
import {Button} from 'react-native';
import { addPost } from '../../api';
import { getUser } from '../../libs/auth';

const PostInputScreen = ({navigation}) => { 
//export default function PostInputScreen({category}) {  
    const route = useRoute();
    const [Title, setTitle] = useState('');
    const [Content, setContent] = useState('');

    const reload = _.get(route, 'params.reload');
    
    const setReload =_.get(route, 'params.setReload');
    
    const category=_.get(route, 'params.category');
    

    
    /*
    const onPress = useCallback(() => { // addPost 성공하면 돌아가기 구현하기
        if(addPost){
        navigation.navigate('CategoryCommunityScreen', {category});}
    }, [navigation, category]);*/

    const onPress = useCallback(async() => {
        const login = await getUser();
        await addPost(login.id, Title, Content, category);
        setReload(!reload);
        navigation.navigate('CategoryCommunityScreen', {
            category, reload, setReload});
    }, [navigation, category, Title, Content, reload, setReload]);


    return (
        <>
            <TabHeader title={"글쓰기"}/>
            <PostInput
                inputTitle={Title}
                inputChange={(title)=>{
                    setTitle(title);
                    
                }}
                inputContent={Content}
                inputContentChange={(content)=>{
                    setContent(content);
                    
                }}
            />
            <Button
                 onPress={onPress}
                 title={"submit"}
                 color={'#59B5FF'}
                />
        </>
    );/*
    return (
        <>
            <TabHeader title={"글쓰기"}/>
            <PostInput
                inputTitle={Title}
                inputChange={(title)=>{
                    setTitle(title);
                }}
                inputContent={Content}
                inputContentChange={(content)=>{
                    setContent(content);
                }}
            />
        </>
    );*/
}
//export default AddBoardScreen;
export default PostInputScreen;