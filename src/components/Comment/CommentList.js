import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import CommentListItem from './CommentListItem';
import dummy from '../../db/data.json';
import { fetchCommentListFromPost, fetchUser } from '../../api';
/*
const data = dummy.comment;

const CommentList = ({category, post_id, user_id}) => {

    function getComment(element){
        if((element.category === category) && (element.post_id === post_id) ){
            return true;
        }
    }
    const userName = dummy.user.filter(user => user.id === user_id);
    const commentList = data.filter(getComment);
    return (
        
         <View style={{ flex: 1, alignSelf: 'flex-start', marginTop: 4 }}>
                <Text style={styles.productDesc}>{JSON.stringify(userName.name)}</Text>
                <Text style={styles.productName}>{JSON.stringify(commentList[0].comment_content)}</Text>
        </View>
    )
}*/

const data = dummy.comment;


const CommentList = ({category, post_id}) => {
    const [commetList, setCommentList] = useState([]);

    const getCommentList = async() => {
        try{
            const json = await fetchCommentListFromPost();
            setCommentList(json);
        }catch(error){
            console.error(error);
        }
    };

    useEffect(()=>{
        getCommentList();
    }, []);

    return(
        <View>
            {data.map((comment)=> {
                if( (category && comment.category != category) || (post_id && comment.post_id != post_id)){
                    return null;
                }
                return (
                    <CommentListItem {...comment}/>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
    },
    productImage: {
        height: 120,
        width: 160,
        borderRadius: 10,
        marginRight: 10
    },
    productName: {
        fontSize: 22,
        marginBottom: 4,
    },
    productDesc: {
        fontWeight: '100',
        fontSize: 16,
        marginTop: 4
    },
    productPrice: {
        fontSize: 20,
        textAlign: 'right',
        marginTop: 10,
    }
})

export default CommentList;
