import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MenuList from '../../components/MenuList';

export default function MyStoreScreen() {

    const [list, setList] = useState([{name: "떡볶이", cost: 1000, count: 3}, {name: "튀김", cost: 1500, count: 4}, {name: "어묵", cost: 500, count: 6}])
    return (
        <View style={styles.container}>
            
            <View style={styles.sales}>
                <Text>오늘의 매출</Text>
                <Text>{ calculateSales(list) +" 원"}</Text>
            </View>
            <MenuList list={list}/>
            
        </ View>
    );
};

function calculateSales(list) {
    var sum = 0;
    list.map((item) => {
        sum = sum + item.count*item.cost;
    })
    return sum;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    sales: {
        flexDirection: 'column',
    }
});
