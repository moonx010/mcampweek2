import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Pressable, Alert } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addComment } from '../../api';

const CommentInput = ({inputContent, inputContentChange}) => {
    const insets = useSafeAreaInsets();
    return (

        <View style={styles.inputContainer}>
            
            <TextInput
            style={styles.input}
            placeholder="댓글을 입력하세요!"
            placeholderTextColor="#ABABAB"
            value={inputContent}
            onChangeText={inputContentChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 16,
        marginRight: 1,
        marginBottom:10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ABABAB',
        backgroundColor: '#fff',
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width:'82%'
    },
    icon: {
        marginLeft: 10,
    },
    input: {
        height: 52,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        width: '100%',
    },
    inputBox: {
        height: 50,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        width: '100%',
    },
});

export default CommentInput;