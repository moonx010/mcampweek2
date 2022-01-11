import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Pressable, Alert } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Row = ({children, title}) => {
    return (
        <View style={styles.row}>
            <View style={styles.article}>
                <Text style={styles.title}>{title}</Text>
                {children}
            </View>
        </View>
    );
};

const PostInput = ({inputTitle, inputChange, inputContent, inputContentChange}) => {
    const insets = useSafeAreaInsets();
    return (
        <View>
            <Row>
                <TextInput 
                style={styles.input}
                placeholder="제목을 작성해주세요"
                placeholderTextColor="#ABABAB"
                value={inputTitle}
                onChangeText={inputChange}
                maxLength={100}
                />
                <TextInput 
                style={styles.inputBox}
                placeholder="여기를 눌러 글을 작성할 수 있습니다."
                placeholderTextColor="#ABABAB"
                value={inputContent}
                onChangeText={inputContentChange}
                multiline ={true}
                />
            </Row>    
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 16,
        marginRight: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ABABAB',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
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
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
    },
    inputBox: {
        height: 300,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ABABAB',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ABABAB',
        marginRight:10
    },
});

export default PostInput;