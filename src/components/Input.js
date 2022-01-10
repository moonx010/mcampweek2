import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Input = ({inputValue, inputChange}) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.inputContainer}>
            <Ionicons name="search" size={30} color="#ABABAB" style={styles.icon} />
            <TextInput 
            style={styles.input}
            placeholder="검색"
            placeholderTextColor="#ABABAB"
            value={inputValue}
            onChangeText={inputChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 12,
        marginRight: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ABABAB',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    icon: {
        marginLeft: 10,
    },
    input: {
        height: 52,
        backgroundColor: '#ffffff',
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 20,
        width:280,
    }
});

export default Input;