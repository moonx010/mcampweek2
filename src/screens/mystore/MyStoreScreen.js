import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MenuList from '../../components/MenuList';
var RNFS = require('react-native-fs');
import numeral from 'numeral';
export default function MyStoreScreen() {
    const filePath = RNFS.DocumentDirectoryPath + '/menuList.json';
    const readFile = async () => {
        await RNFS.readFile(filePath, 'utf8')
          .then((res) => {
            console.log(res)
            const d = JSON.parse(res);
            return d.menu;
          })
          .catch((err) => {
            console.log(err.message, err.code);
          });
      };
    const [list, setList] = useState([{"name": "떡볶이", "cost": 1000, "count": 3, "id": 1}, {"name": "순대", "cost": 1500, "count": 2, "id": 2}, {"name": "오뎅", "cost": 500, "count": 5, "id": 3}, {"name": "튀김", "cost": 2000, "count": 1, "id": 4}]);
    const [sum, setSum] = useState(0);
    // RNFS.writeFile(filePath, '{"menu": [{"name": "떡볶이", "cost": 1000, "count": 3, "id": 1}, {"name": "순대", "cost": 1500, "count": 2, "id": 2}, {"name": "오뎅", "cost": 500, "count": 5, "id": 3}, {"name": "튀김", "cost": 2000, "count": 1, "id": 4}]}', 'utf8')

    const calculateSales = (list) => {
        var temp = 0;
        list.map((item) => {
            temp = temp + item.count*item.cost;
        })
        setSum(temp);
    }
    useEffect (() => {
        async() => {
            if(!await RNFS.exists(filePath)) {
            await RNFS.writeFile(filePath, '{"menu": [{"name": "떡볶이", "cost": 1000, "count": 3, "id": 1}, {"name": "순대", "cost": 1500, "count": 2, "id": 2}, {"name": "오뎅", "cost": 500, "count": 5, "id": 3}, {"name": "튀김", "cost": 2000, "count": 1, "id": 4}]}', 'utf8')
            }
        }
        console.log(list)
        calculateSales(list);
    }, [list])

    
    

    
    
    
    return (
        <View style={styles.container}>
            
            <View style={styles.sales}>
                <Text style={styles.salesTitle}>오늘의 매출</Text>
                <Text style={styles.salesSum}>{ numeral(sum).format('0,0') +" 원"}</Text>
            </View>
            <View style={styles.menuTitleContainer}>
                <Text style={styles.menuTitle}>메뉴</Text>
                <Button style={styles.menuEditButton} title={"편집"}></Button>
            </View>
            
            <MenuList list={list} setList = {setList}/>
            
        </ View>
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
