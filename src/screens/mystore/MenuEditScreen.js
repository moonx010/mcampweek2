import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Button, Pressable, TextInput, Alert} from 'react-native';
var RNFS = require('react-native-fs');
import {deleteMenuItem, editMenuItem} from '../../libs/api';
import numeral from 'numeral';
import _ from 'lodash';
import {CommonActions, useRoute} from '@react-navigation/native';
import TransparentHeader from '../../components/TransparentHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function MenuEditScreen({navigation}) {
    
    const route = useRoute();
    const [name, setName] = useState(_.get(route, 'params.item.name', ''));
    const [cost, setCost] = useState(String(_.get(route, 'params.item.cost', 0)));    // const route = useRoute();
    const [price, setPrice] = useState(_.get(route, 'params.item.price', 0));
    const setReload = _.get(route, 'params.setReload');
    const reload = _.get(route, 'params.reload');
    const deleteItem = useCallback(async() => {
        Alert.alert('알림', '이 메뉴를 삭제하시겠습니까?', [
            {
                text: '취소',
            },
            {
              text: '확인',
              onPress: async () => {
                await deleteMenuItem(_.get(route, 'params.item.id', ''));
      
                Alert.alert('알림', '해당 메뉴가 삭제되었습니다', [
                  {
                    text: '확인',
                    onPress: () => {
                        setReload(!reload);
                        navigation.navigate('MyStore');
                    },
                  },
                ]);
              },
            },
            
          ]);
        
    }, [])
    const editComplete = useCallback(async() => {
        await editMenuItem(_.get(route, 'params.item.id', ''), cost, name, _.get(route, 'params.item.count', ''), price);
        setReload(!reload);
        navigation.navigate('MyStore');
    }, [cost, name, price, route])
    return (
        <View style={styles.containter}>
            <View style={styles.header}>
                <TransparentHeader />
                <View style={styles.delete}>
                    <Pressable style={styles.reviewBtn} onPress={deleteItem}>
                        <FontAwesome name="trash-o" size={24} color="red" />
                    </Pressable>
                </View>
            </View>
            
            <View style={styles.itemContainter}>
                <Text>메뉴 이름</Text>
                <TextInput
                    style={[styles.textInput, {marginTop: 12}]}
                    value={name}
                    onChangeText={(nameTemp) => setName(nameTemp)}
                    placeholder="이름"
                    placeholderTextColor="#ABABAB"
                    multiline={true}
                    maxLength={40}
                    />
                <Text>메뉴 가격</Text>
                <TextInput
                    style={[styles.textInput, {marginTop: 12}]}
                    onChangeText={(costTemp) => setCost(costTemp)}
                    value={cost}
                    placeholder="가격"
                    keyboardType='numeric'
                    placeholderTextColor="#ABABAB"
                    maxLength={40}
                    />
                <Text>메뉴 원가</Text>
                <TextInput
                    style={[styles.textInput, {marginTop: 12}]}
                    onChangeText={(priceTemp) => setPrice(priceTemp)}
                    value={price}
                    placeholder="가격"
                    keyboardType='numeric'
                    placeholderTextColor="#ABABAB"
                    maxLength={40}
                    />
            </View>
            <View style={styles.review}>
                <Pressable style={styles.reviewBtn} onPress={editComplete}>
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
        color: 'red',
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