import React, { useEffect, useState, useCallback } from 'react';
import TabHeader from '../../components/TabHeader';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import PostInput from '../../components/PostInput';
import {Button} from 'react-native';
import { addPost } from '../../api';

//const AddBoardScreen = ({navigation, category}) => { 
export default function PostInputScreen({category}) {  
    const route = useRoute();
    const [Title, setTitle] = useState('');
    const [Content, setContent] = useState('');
/*
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
                 onPress={()=>{addPost(11, Title, Content, category)}}
                 title={"submit"}
                 color={'red'}
                />
        </>
    );*/
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
    );
}
//export default AddBoardScreen;