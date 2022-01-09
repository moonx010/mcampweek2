import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Pressable, Alert } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CommentInput = ({inputContent, inputContentChange}) => {
    const insets = useSafeAreaInsets();
    return (

        <View style={styles.inputContainer}>
            <View style={{flex:9}}>
            <TextInput
            style={styles.input}
            placeholder="댓글을 입력하세요!"
            placeholderTextColor="#ABABAB"
            value={inputContent}
            onChangeText={inputContentChange}
            /></View>
            <View style={{flex:1, marginRight: 10}}>
            <Pressable>
                <Ionicons name="send" size={20} color="#ABABAB" style={styles.icon} />
            </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginBottom:10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ABABAB',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
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