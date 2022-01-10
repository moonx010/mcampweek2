import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
import dummy from '../../db/data.json';
import { fetchUser } from '../../api';

const CommentListItem = (comment) =>{
    
    //const userName = dummy.user.filter(user => user.id === comment.user_id);
    const [user, setUser] = useState({});
    const userId = comment.user_id;

    const getUser = async (userId)  => {
        try{
            const json = await fetchUser(userId);
            setUser(json[0]);
        }catch(error){
            console.error(error);
        }
    };
    
    useEffect(()=>{ 
        getUser(userId);
    }, []);

    return(               
        <View style={{ flex: 1, alignSelf: 'flex-start', marginTop: 4 }, styles.container}>
            <Text style={styles.productDesc}>{user.name}</Text>
            <Text style={styles.productName}>{comment.content}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 1,
        marginHorizontal: 0,
        paddingVertical: 12,
        paddingHorizontal: 14,
        height: 70,
        elevation: 1,
        /*shadowOffset: {
          width: 0,
          height: 0,
        },*/
        //shadowOpacity: 1,
        //shadowRadius: 18.95,
        //zIndex: 1,
        backgroundColor: "#FFFFFF",
        //backgroundColor: '#476d98',
        //borderRadius: 12,
        borderColor: '#F6F6F6',
        borderWidth: 1,
    },

    productImage: {
        height: 120,
        width: 160,
        borderRadius: 10,
        marginRight: 10
    },
    productName: {
        
        fontSize: 15,
        marginBottom: 4,
    },
    productDesc: {
        
        fontWeight: '100',
        fontSize: 16,
        marginTop: 4,
        fontWeight:'bold'
        
    },
    productPrice: {
        fontSize: 20,
        textAlign: 'right',
        marginTop: 10,
    }
})

export default CommentListItem;
