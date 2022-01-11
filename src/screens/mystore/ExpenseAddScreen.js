import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
var RNFS = require('react-native-fs');
import {addExpense} from '../../libs/api';
import numeral from 'numeral';
import _ from 'lodash';
import {useRoute} from '@react-navigation/native';
import TransparentHeader from '../../components/TransparentHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ExpenseAddScreen({navigation}) {
    const route = useRoute();
    const userId = _.get(route, 'params.userId');
    const [name, setName] = useState('');
    const [cost, setCost] = useState(''); 
    const setReload = _.get(route, 'params.setReload');
    const reload = _.get(route, 'params.reload');
    const addComplete = useCallback(async() => {
        console.log(cost + name)
        await addExpense(cost, name, userId);
        setReload(!reload);
        navigation.navigate('MyStore');
    }, [cost, name, route])
    
    return (
        <View style={styles.containter}>
            <View style={styles.header}>
                <TransparentHeader />
            </View>
            
            <View style={styles.itemContainter}>
                <Text>관리비 이름</Text>
                <TextInput
                    style={[styles.textInput, {marginTop: 12}]}
                    value={name}
                    onChangeText={(nameTemp) => setName(nameTemp)}
                    placeholder="이름"
                    placeholderTextColor="#ABABAB"
                    multiline={true}
                    maxLength={40}
                />
                <Text>관리비 가격</Text>
                <TextInput
                    style={[styles.textInput, {marginTop: 12}]}
                    onChangeText={(costTemp) => setCost(costTemp)}
                    value={cost}
                    placeholder="가격"
                    keyboardType='numeric'
                    placeholderTextColor="#ABABAB"
                    maxLength={40}
                />
            </View>
            <View style={styles.review}>
                <Pressable style={styles.reviewBtn} onPress={addComplete}>
                    <Text style={styles.reviewfont}>완료</Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containter: {
        backgroundColor: '#fff',
        flex: 1,
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    delete: {
        color: '#59B5FF',
        width: 50,
    },
    itemContainter: {
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'flex-start',
        padding: 10,
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
    },
    article: {
        marginRight: 8
    },
    title: {
        fontSize: 20,
        marginRight: 8,
    },
    textInput: {
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: 8,
        paddingRight: 8,
        width: 300,
        borderWidth: 1,
        borderColor: '#ABABAB',
        textAlignVertical:'top'
      },
    review:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    reviewBtn: {
        height: 48,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00DC99',
        borderRadius: 8,
        marginTop: 20
    },
    reviewfont: {
        fontSize: 24,
        color: '#fff',
    }
});