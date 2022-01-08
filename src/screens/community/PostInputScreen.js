import React, { useEffect, useState, useCallback } from 'react';
import TabHeader from '../../components/TabHeader';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import PostInput from '../../components/PostInput';

//const AddBoardScreen = ({navigation, category}) => { 
export default function PostInputScreen() {  
    const route = useRoute();
    const [Title, setTitle] = useState('');
    const [Content, setContent] = useState('');

    const categoryName = () => {
        return(_.get(route, 'params.item.post_category', ));
     };

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