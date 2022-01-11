import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Pressable, TouchableOpacity, TextInput} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MenuList from '../../components/MenuList';
import ExpenseList from '../../components/ExpenseList';
import {fetchMenuItems, fetchExpenses, fetchSale, editSale, addSale} from '../../libs/api';
import numeral from 'numeral';
import { getUser } from '../../libs/auth';

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};


String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};
export default function MyStoreScreen({navigation, setAppUser}) {
    
    
    const [sales, setSales] = useState();
    const [costs, setCosts] = useState();
    const [expenses, setExpenses] = useState();
    const [userId, setUserId] = useState();
    const placeholder = "날짜를 입력해주세요";

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [text, onChangeText] = useState("");

    const calculateSales = (list) => {
        var temp = 0;
        list.map((item) => {
            temp = temp + item.count*item.cost;
        })
        setSales(temp);
    }
    const calculateCosts = (list) => {
        var temp = 0;
        list.map((item) => {
            temp = temp + item.count*item.price;
        })
        setCosts(temp);
    }
    const calculateExpenses = (list) => {
        var temp = 0;
        list.map((item) => {
            temp = temp + item.cost;
        })
        setExpenses(temp);
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
            calculateCosts(menuListData);
            calculateExpenses(expenseData);
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
    const record = useCallback(async()=> {
        const isRecord = await fetchSale(text,userId);
        console.log("isRecord"+isRecord)
        if(typeof(isRecord[0])=="undefined") {
            console.log("undefined 입니다")
            await addSale(text, sales, costs, expenses, userId);
        }
        else {
            console.log("undefined 아닙니다")
            await editSale(text, sales, costs, expenses, userId);
        }
    }, [text, sales, costs, expenses, userId])
    const detailSales = useCallback(() => {
        navigation.navigate('DetailSalesScreen', {navigation})
    }, [navigation])
    
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("dateFormat: ", date.format("yyyy-MM-dd"));
        hideDatePicker();
        onChangeText(date.format("yyyy-MM-dd"))
    };
    return (
        <View style={styles.backgound}>
            <View style={styles.datePick}>
                <TouchableOpacity onPress={showDatePicker}>
                    <TextInput
                        pointerEvents="none"
                        style={styles.textInput}
                        placeholder={placeholder}
                        underlineColorAndroid="transparent"
                        editable={false}
                        value={text}
                    />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </TouchableOpacity>
                <Button title={"기록"} onPress={record} color={'#59B5FF'}/>
            </View>
            <ScrollView style={styles.container}>
                {/* <Pressable style={styles.detailSales} onPress={logout}>
                    <Text>로그아웃</Text>
                </Pressable> */}
                
                
                <View style={styles.sales}>
                <Text style={styles.salesTitle}>오늘의 매출</Text>
                    <View style={styles.salesTitleContainer}>
                    <Text style={styles.salesSum}>{ numeral(sales).format('0,0') +" 원"}</Text>
                        <Pressable style={styles.detailSales} onPress={detailSales}>
                            <Text>자세히</Text>
                        </Pressable>
                    </View>
                    
                </View>
                <View style={styles.menuTitleContainer}>
                    <Text style={styles.menuTitle}>메뉴</Text>
                    <Button style={styles.menuEditButton} title={"추가"} onPress={addMenu} color={'#59B5FF'}></Button>
                </View>
                
                <MenuList menuList={menuList} setReload={setReload} reload={reload}/>
                <View style={styles.menuTitleContainer}>
                    <Text style={styles.menuTitle}>관리비</Text>
                    <Button style={styles.menuEditButton} title={"추가"} onPress={addExpense} color={'#59B5FF'}></Button>
                </View>
                
                <ExpenseList expenseList = {expenseList} setReload={setReload} reload={reload}/>
                
            </ ScrollView>
        </View>
        
    );
};



const styles = StyleSheet.create({
    backgound: {
        backgroundColor: '#fff',
        flex: 1,
    },
    container: {
        backgroundColor: '#fff',
    },
    sales: {
        flexDirection: 'column',
        marginBottom: 12,
        marginLeft: 16,
        marginTop: 12,
    },
    salesTitle: {
        fontSize: 20,
        marginRight: 12,
        color: '#000000'
    },
    salesTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    salesSum: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#59B5FF'
    },
    detailSales: {
        padding: 12,

    },
    menuTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#59B5FF'
        
    },
    menuTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 8,
        marginHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#59B5FF'
    },
    menuEditButton: {
        marginBottom: 8,
    },
    textInput: {
        fontSize: 16,
        color: '#59B5FF',
        height: 50, 
        width: 300, 
        borderColor: '#59B5FF', 
        borderWidth: 1, 
        borderRadius: 12,
        padding: 10,
        placeholderTextColor: '#b0b0b0'
    },
    datePick: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 16,
    }
});
