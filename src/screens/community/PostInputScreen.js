import React, { useEffect, useState, useCallback } from 'react';
import TabHeader from '../../components/TabHeader';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import PostInput from '../../components/PostInput';
import {Button} from 'react-native';
import { addPost } from '../../api';

const PostInputScreen = ({navigation}) => { 
//export default function PostInputScreen({category}) {  
    const route = useRoute();
    const [Title, setTitle] = useState('');
    const [Content, setContent] = useState('');

    const categoryName = () => {
        return(_.get(route, 'params.category', ));
     };

    const category = categoryName(); 
    /*
    const onPress = useCallback(() => { // addPost 성공하면 돌아가기 구현하기
        if(addPost){
        navigation.navigate('CategoryCommunityScreen', {category});}
    }, [navigation, category]);*/

    const onPress = useCallback(async() => {
        await addPost(15, Title, Content, categoryName());
        navigation.navigate('CategoryCommunityScreen', {
            category});
    }, [navigation, category, Title, Content]);


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
                 color={'red'}
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