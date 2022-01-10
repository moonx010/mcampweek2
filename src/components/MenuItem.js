import React, {useCallback} from 'react';
import {View, StyleSheet, Text, Pressable, Alert} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import { useNavigation } from '@react-navigation/native';
import { editMenuItem } from '../libs/api';
var RNFS = require('react-native-fs');


export default MenuItem = ({item, setMenuList, menuList, setReload, reload}) => {
    const navigation = useNavigation(); 
    var menuListId = item.id;
    const editMenu = useCallback(() => {
        Alert.alert('알림', '이 메뉴를 수정하시겠습니까?', [
            {
                text: '취소',
            },
            {
              text: '확인',
              onPress: async () => {
                navigation.navigate('MenuEditScreen', {item, setReload, reload})
              },
            },
            
          ]);
        
    }, [navigation, item, setReload])

    return(
        <Pressable style={styles.menuContainer} onLongPress = {editMenu}>
            <View style = {styles.container}>
                <Text style={styles.itemName}>{item.name}</Text>
                <InputSpinner
                step={1}
                value={item.count}
                style={styles.spinner}
                onChange={async(num) => {
                        setMenuList(
                            menuList.map(chk => 
                                chk.id == item.id ? {...chk, "count": num} : chk
                                )
                        
                        );
                        await editMenuItem(item.id, item.cost, item.name, num, item.price);
                        setReload(!reload);
                }}
                fontSize={16}
                height={40}
                width={120}
                />
            </View>
        </Pressable>
        
    );

};

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 12,
        
    },
    spinner: {
        justifyContent: 'flex-end',
    },
    itemName: {
        fontSize: 20,
    }
})