import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import MenuList from '../../components/MenuList';
import ExpenseList from '../../components/ExpenseList';
var RNFS = require('react-native-fs');
import {fetchMenuList, fetchMenuItems, fetchExpenses} from '../../libs/api';
import numeral from 'numeral';
export default function MyStoreScreen() {
    
    const userId = 11;
    const [sum, setSum] = useState();
    const [menuListId, setMenuListId] = useState();
    const calculateSales = (list) => {
        var temp = 0;
        list.map((item) => {
            temp = temp + item.count*item.cost;
        })
        setSum(temp);
    }
    const [reload, setReload] = useState(false);
    const navigation = useNavigation();
    const addMenu = useCallback(() => {
        navigation.navigate('MenuAddScreen', {menuListId, setReload, reload})
    }, [navigation, menuListId, setReload, reload])
    const addExpense = useCallback(() => {
        navigation.navigate('ExpenseAddScreen', {userId, setReload, reload})
    }, [navigation, userId, setReload, reload])

    const [menuList, setMenuList] = useState([]);
    const [expenseList, setExpenseList] = useState([]);
    useEffect(() => {
        async function init() {
            console.log(menuList);
            const data = await fetchMenuList(userId);
            setMenuListId(data[0].id);
            const menuListData = await fetchMenuItems(data[0].id);
            setMenuList(menuListData);

            const expenseData = await fetchExpenses(userId);
            console.log(expenseData)

            setExpenseList(expenseData);
            console.log("expenseList: "+expenseList[0].cost)
            calculateSales(menuListData);
        }
        init();
    }, [reload]);
    
    
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.sales}>
                <Text style={styles.salesTitle}>오늘의 매출</Text>
                <Text style={styles.salesSum}>{ numeral(sum).format('0,0') +" 원"}</Text>
            </View>
            <View style={styles.menuTitleContainer}>
                <Text style={styles.menuTitle}>메뉴</Text>
                <Button style={styles.menuEditButton} title={"추가"} onPress={addMenu}></Button>
            </View>
            
            <MenuList menuList={menuList} setReload={setReload} reload={reload}/>
            <View style={styles.menuTitleContainer}>
                <Text style={styles.menuTitle}>관리비</Text>
                <Button style={styles.menuEditButton} title={"추가"} onPress={addExpense}></Button>
            </View>
            
            <ExpenseList expenseList = {expenseList} setReload={setReload} reload={reload}/>
            
        </ ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    sales: {
        flexDirection: 'column',
        marginBottom: 12,
        marginLeft: 16
    },
    salesTitle: {
        fontSize: 20,
    },
    salesSum: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    menuTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    menuTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 8,
        marginHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#b0b0b0'
    },
    menuEditButton: {
        marginBottom: 8,
        backgroundColor: '#000000'
    }
});
