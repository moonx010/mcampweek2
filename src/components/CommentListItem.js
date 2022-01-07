import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
import dummy from '../db/data.json';

const CommentListItem = (comment) =>{
    
    const userName = dummy.user.filter(user => user.id === comment.user_id);

    return(               
        <View style={{ flex: 1, alignSelf: 'flex-start', marginTop: 4 }}>
            <Text style={styles.productName}>{comment.comment_content}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', }}>
                <Text style={styles.productDesc}>{JSON.stringify(userName[0].name)}</Text>
            </View>
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

export default CommentListItem;
