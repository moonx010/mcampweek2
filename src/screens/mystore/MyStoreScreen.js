import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Pressable} from 'react-native';
import MenuList from '../../components/MenuList';
import ExpenseList from '../../components/ExpenseList';
var RNFS = require('react-native-fs');
import {fetchMenuList, fetchMenuItems, fetchExpenses} from '../../libs/api';
import numeral from 'numeral';
import { getUser } from '../../libs/auth';
export default function MyStoreScreen({navigation, setAppUser}) {
    
    
    const [sum, setSum] = useState();
    const [userId, setUserId] = useState();
    
    const calculateSales = (list) => {
        var temp = 0;
        list.map((item) => {
            temp = temp + item.count*item.cost;
        })
        setSum(temp);
    }
    const [reload, setReload] = useState(false);
    
    const [menuList, setMenuList] = useState([]);
    const [expenseList, setExpenseList] = useState([]);
    useEffect(() => {
        async function init() {
            const user = await getUser();
            setUserId(user.id);
            console.log("Mystore: "+user.id)
            const menuListData = await fetchMenuItems(user.id);
            setMenuList(menuListData);

            const expenseData = await fetchExpenses(user.id);
            console.log(expenseData)

            setExpenseList(expenseData);
            // console.log("expenseList: "+expenseList[0].cost)
            calculateSales(menuListData);
        }
        init();
    }, [reload]);
    const addMenu = useCallback(() => {
        navigation.navigate('MenuAddScreen', {userId, setReload, reload})
    }, [navigation, userId, setReload, reload])
    const addExpense = useCallback(() => {
        navigation.navigate('ExpenseAddScreen', {userId, setReload, reload})
    }, [navigation, userId, setReload, reload])
    const logout = useCallback(() => {
        setAppUser(null);
        
    }, [navigation])
    
    return (
        <ScrollView style={styles.container}>
            <Pressable style={styles.detailSales} onPress={logout}>
                <Text>????????????</Text>
            </Pressable>
            <View style={styles.sales}>
            <Text style={styles.salesTitle}>????????? ??????</Text>
                <View style={styles.salesTitleContainer}>
                <Text style={styles.salesSum}>{ numeral(sum).format('0,0') +" ???"}</Text>
                    <Pressable style={styles.detailSales}>
                        <Text>?????????</Text>
                    </Pressable>
                </View>
                
            </View>
            <View style={styles.menuTitleContainer}>
                <Text style={styles.menuTitle}>??????</Text>
                <Button style={styles.menuEditButton} title={"??????"} onPress={addMenu}></Button>
            </View>
            
            <MenuList menuList={menuList} setReload={setReload} reload={reload}/>
            <View style={styles.menuTitleContainer}>
                <Text style={styles.menuTitle}>?????????</Text>
                <Button style={styles.menuEditButton} title={"??????"} onPress={addExpense}></Button>
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
        marginRight: 12
    },
    salesTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    salesSum: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    detailSales: {
        padding: 12,

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
