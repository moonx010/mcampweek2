import React, {useCallback} from 'react';
import {View, StyleSheet, Text, Pressable, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import numeral from 'numeral';


export default ExpenseItem = ({item, setReload, reload}) => {
    const navigation = useNavigation(); 
    const editExpense = useCallback(() => {
        Alert.alert('알림', '이 관리비를 수정하시겠습니까?', [
            {
                text: '취소',
            },
            {
              text: '확인',
              onPress: async () => {
                navigation.navigate('ExpenseEditScreen', {item, setReload, reload})
              },
            },
            
          ]);
        
    }, [navigation, item, setReload])

    return(
        <Pressable style={styles.menuContainer} onLongPress = {editExpense}>
            <View style = {styles.container}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemName}>{numeral(item.cost).format('0,0') +" 원"}</Text>
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